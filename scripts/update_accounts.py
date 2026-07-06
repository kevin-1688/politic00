#!/usr/bin/env python3
"""
每日自動比對監察院「政治獻金專戶公告」，把 script.js 中尚未公告專戶
（bank/account 欄位為空）的提名人補上金融機構與帳號。

安全原則：
- 只「填入」原本為空的欄位，絕不覆寫已有資料
- 逐行替換，不動任何其他內容
- 姓名+縣市+身分（議員/市長/縣長）三者都吻合才算同一人（避免同名誤判）
- 已廢止的專戶不填入
"""
import re
import sys
import datetime
from zoneinfo import ZoneInfo

import requests
from bs4 import BeautifulSoup

BASE = "https://sunshine.cy.gov.tw/PAQuery.aspx?n=21&sms=0"
PREFIX = "ctl00$ContentPlaceHolder_PageContent_title$"
# 115103 縣(市)長 / 115104 直轄市市長 / 115105 直轄市議員 / 115106 縣(市)議員
ELECTION_TYPES = ["115103", "115104", "115105", "115106"]
SCRIPT_JS = "script.js"
COMMIT_MSG = "commit_msg.txt"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Referer": "https://sunshine.cy.gov.tw/PAQuery.aspx?n=21&sms=0",
}
TIMEOUT = 60


def norm(s: str) -> str:
    """姓名正規化：去空白、統一各種間隔號為全形「．」"""
    s = re.sub(r"[\s　]+", "", s or "")
    return re.sub(r"[·‧・．]", "．", s)


def get_form_fields(soup: BeautifulSoup) -> dict:
    return {
        i["name"]: i.get("value", "")
        for i in soup.select("input[type=hidden]")
        if i.get("name")
    }


def fetch_election(sess: requests.Session, etype: str) -> list[dict]:
    """送出查詢 postback，回傳該選舉種類的所有公告列"""
    r = sess.get(BASE, timeout=TIMEOUT)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")
    data = get_form_fields(soup)
    data[PREFIX + "QType"] = "rbCategory"
    data[PREFIX + "ddlAccountType"] = "擬參選人"
    data[PREFIX + "txtCategory"] = ""
    data[PREFIX + "ddlElectionType"] = etype
    data[PREFIX + "btnSend"] = "查詢"

    r2 = sess.post(BASE, data=data, timeout=TIMEOUT)
    r2.raise_for_status()
    if "_Query=" not in r2.url:
        raise RuntimeError(f"查詢 {etype} 未取得結果頁（URL: {r2.url}）")

    # 一次載入全部
    r3 = sess.get(r2.url + "&page=1&PageSize=3000", timeout=TIMEOUT)
    r3.raise_for_status()
    soup3 = BeautifulSoup(r3.text, "html.parser")

    table = None
    for t in soup3.find_all("table"):
        first = t.find("tr")
        if first and "申請名稱" in first.get_text():
            table = t
            break
    if table is None:
        raise RuntimeError(f"查詢 {etype} 找不到結果表格")

    rows = []
    for tr in table.find_all("tr")[1:]:
        cells = [td.get_text(" ", strip=True) for td in tr.find_all("td")]
        if len(cells) < 6:
            continue
        name, holder, bank, acct = cells[0], cells[1], cells[2], cells[3]
        permit = cells[5] if len(cells) > 5 else ""
        revoked = cells[7].strip() if len(cells) > 7 else ""
        m = re.match(r"^115年(.+?)(市長|縣長|議員)擬參選人", holder)
        if not m:
            continue
        rows.append({
            "name": name, "county": m.group(1), "role": m.group(2),
            "bank": bank.replace("|", "").strip(),
            "acct": acct.replace("|", "").replace(" ", "").strip(),
            "permit": permit, "revoked": revoked,
        })
    return rows


def main() -> int:
    sess = requests.Session()
    sess.headers.update(HEADERS)

    announced = {}
    ambiguous = set()
    total = 0
    for etype in ELECTION_TYPES:
        rows = fetch_election(sess, etype)
        total += len(rows)
        for row in rows:
            if row["revoked"]:
                continue  # 已廢止，不填入
            key = (norm(row["name"]), row["county"], row["role"])
            if key in announced and announced[key]["acct"] != row["acct"]:
                ambiguous.add(key)  # 同名同縣市同身分但帳號不同 → 人工確認
            announced[key] = row
    print(f"監察院共 {total} 筆公告，有效比對鍵 {len(announced)} 筆")

    with open(SCRIPT_JS, encoding="utf-8") as f:
        content = f.read()
    lines = content.split("\n")

    added = []
    pattern = re.compile(r"^([^|]+)\|([^|]+)\|\|\|(市長|縣長|議員)\|(.*)$")
    for i, line in enumerate(lines):
        m = pattern.match(line)
        if not m:
            continue
        name, county, role, dist = m.groups()
        key = (norm(name), county, role)
        if key in ambiguous:
            print(f"[略過] {name}（{county}{role}）：公告中有同名多筆，請人工確認")
            continue
        row = announced.get(key)
        if row and row["bank"] and row["acct"]:
            lines[i] = f"{name}|{county}|{row['bank']}|{row['acct']}|{role}|{dist}"
            added.append(f"{name}（{county}{role}）{row['bank']}/{row['acct']} 許可:{row['permit']}")

    if not added:
        print("今日無新增專戶")
        return 0

    new_content = "\n".join(lines)
    # 更新檔頭查詢日
    today = datetime.datetime.now(ZoneInfo("Asia/Taipei")).strftime("%Y-%m-%d")
    new_content = re.sub(r"查詢日\d{4}-\d{2}-\d{2}", f"查詢日{today}", new_content, count=1)

    # 防呆：行數不得改變
    if len(new_content.split("\n")) != len(lines):
        print("錯誤：行數異常，取消寫入", file=sys.stderr)
        return 1

    with open(SCRIPT_JS, "w", encoding="utf-8") as f:
        f.write(new_content)

    msg = f"自動更新：新增 {len(added)} 筆已公告專戶\n\n監察院政治獻金專戶公告比對結果：\n" + "\n".join("- " + a for a in added)
    with open(COMMIT_MSG, "w", encoding="utf-8") as f:
        f.write(msg)
    print(msg)
    return 0


if __name__ == "__main__":
    sys.exit(main())
