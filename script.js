/* ===== 資料：name | county | bank | account | role  （115年/2026，監察院公告，查詢日2026-06-19） ===== */
const RAW = `
沈伯洋|臺北市|臺灣土地銀行營業部|041005616067|市長
何欣純|臺中市|中華郵政股份有限公司臺中南屯路郵局|郵政劃撥22878505|市長
黃世杰|桃園市|第一商業銀行西壢分行|28251032268|市長
蘇巧慧|新北市|華南商業銀行樹林分行|191200686158|市長
陳亭妃|臺南市|合作金庫商業銀行成功分行|0310717077881|市長
賴瑞隆|高雄市|臺灣銀行新興分行|061004656314|市長
莊競程|新竹市|永豐商業銀行光華分行|03201800239931|市長
周春米|屏東縣|臺灣銀行屏東分行|017008418239|縣長
王美惠|嘉義市|臺灣銀行群賢分行|162001008859|市長
童子瑋|基隆市|基隆第一信用合作社忠二路分社|0042200303595|市長
黃明太|高雄市|彰化商業銀行路竹分行|95475007900100|議員
黃崇真|桃園市|臺灣銀行亞矽創新分行|297001008521|議員
蔡耀頡|臺中市|合作金庫商業銀行太平分行|1128717730968|議員
陳皇宇|臺南市|臺南市龍崎區農會本會|56501010029626|議員
鄭功進|臺中市|臺灣新光商業銀行台中分行|0347103686666|議員
沈家鳳|臺南市|中國信託商業銀行新營分行|148540472351|議員
陳秋宏|臺南市|中華郵政股份有限公司下營郵局|01911190433192|議員
江瑞鴻|高雄市|中華郵政股份有限公司仁武郵局|00415210547014|議員
蔡怡萱|臺中市|(農會)臺中市豐原區農會本會|01107210688791|議員
謝家宜|臺中市|合作金庫商業銀行軍功分行|1656717143511|議員
巫振興|高雄市|中華郵政股份有限公司高雄佛公郵局|00414440203154|議員
李倩萍|新北市|中華郵政股份有限公司蘆洲中原路郵局|郵政劃撥50486954|議員
王珮毓|桃園市|中華郵政股份有限公司平鎮郵局|郵政劃撥50486901|議員
張勝富|高雄市|中華郵政股份有限公司大社郵局|00413400522059|議員
何翊綾|臺中市|第一商業銀行臺中分行|40152181662|議員
吳中源|臺中市|第一商業銀行大甲分行|42350480698|議員
胡家智|桃園市|中國信託商業銀行南崁分行|510540965506|議員
黃家齊|桃園市|中華郵政股份有限公司桃園南門郵局|郵政劃撥50486760|議員
賴俊翰|臺北市|合作金庫商業銀行延平分行|0040717318881|議員
周嘉韋|臺南市|陽信商業銀行台南分行|065420408492|議員
唐儀靜|臺南市|合作金庫商業銀行臺南分行|0300717125936|議員
陳碧玉|臺南市|京城商業銀行新市分行|029120260772|議員
鄭佳欣|臺南市|彰化商業銀行歸仁分行|62660166639900|議員
王孝維|臺北市|台北富邦商業銀行內湖分行|82110000772138|議員
余柷青|臺南市|中華郵政股份有限公司新化郵局|郵政劃撥31658794|議員
林慧欣|高雄市|合作金庫商業銀行美濃分行|5757717725656|議員
謝舒凡|臺南市|中華郵政股份有限公司學甲郵局|郵政劃撥31658860|議員
李雨庭|高雄市|第一商業銀行林園分行|73350139577|議員
陳韋任|新北市|玉山商業銀行北新分行|0901968112016|議員
曾威|臺中市|臺灣中小企業銀行烏日分行|48362255808|議員
鄭宇恩|新北市|華南商業銀行淡水分行|167202247979|議員
謝志忠|臺中市|三信商業銀行豐原分行|1420030884|議員
王立任|臺中市|國泰世華商業銀行沙鹿分行|256506375538|議員
張維倩|新北市|華南商業銀行南永和分行|169200908532|議員
張耀中|高雄市|高雄銀行大發分行|227210837986|議員
許清順|桃園市|臺灣土地銀行南崁分行|096005501137|議員
陳岱吟|新北市|中華郵政股份有限公司新莊郵局|郵政劃撥50486381|議員
陳金鐘|臺南市|元大商業銀行府東分行|20692000129981|議員
彭一書|新北市|中華郵政股份有限公司土城清水郵局|03111300695563|議員
黃敬雅|高雄市|國泰世華商業銀行南高雄分行|061506258846|議員
吳昱鋒|高雄市|國泰世華商業銀行南高雄分行|061506258862|議員
洪村銘|高雄市|高雄銀行大發分行|227210837994|議員
陳俊維|新北市|聯邦商業銀行三重分行|007109002358|議員
賴懋慶|臺南市|中華郵政股份有限公司善化郵局|郵政劃撥31658738|議員
江肇國|臺中市|三信商業銀行林森分行|0820086581|議員
林建南|臺南市|聯邦商業銀行台南分行|012100055190|議員
陳俞融|臺中市|國泰世華商業銀行健行分行|237506240417|議員
游吾和|桃園市|中華郵政股份有限公司大園郵局|01213131074620|議員
廖宜琨|新北市|臺灣土地銀行三峽分行|112005888126|議員
蔡秋蘭|臺南市|中華郵政股份有限公司西港郵局|郵政劃撥31658816|議員
朱正軒|臺南市|中華郵政股份有限公司永康網寮郵局|郵政劃撥31658781|議員
李宗豪|桃園市|臺灣銀行桃園分行|026001173321|議員
李宗翰|臺南市|中華郵政股份有限公司後壁郵局|01910590249777|議員
陳琳潔|高雄市|華泰商業銀行北高雄分行|3561000019138|議員
陳聖文|臺北市|中華郵政股份有限公司木柵郵局|郵政劃撥50486497|議員
黃瓊慧|桃園市|中華郵政股份有限公司桃園成功路郵局|郵政劃撥50486550|議員
鄭光峰|高雄市|陽信商業銀行小港分行|093420013008|議員
戴翎育|新北市|新北市淡水信用合作社泰山分社|00122110111250|議員
吳奕萱|新北市|永豐商業銀行新泰分行|01001800079365|議員
邱婷蔚|新北市|永豐商業銀行正義分行|12801801709678|議員
張曉昀|桃園市|華南商業銀行內壢分行|251200197235|議員
何權峰|高雄市|高雄銀行營業部|101210376594|議員
洪健益|臺北市|聯邦商業銀行永吉分行|047103009186|議員
張以理|高雄市|高雄銀行北高雄分行|241210915998|議員
郭建盟|高雄市|高雄銀行建國分行|220210185020|議員
郭鴻儀|臺南市|陽信商業銀行仁德分行|117420013858|議員
陳淑華|臺中市|板信商業銀行台中分行|04285000111258|議員
陳慧文|高雄市|華南商業銀行五甲分行|752200636579|議員
彭佳芸|新北市|第一商業銀行重陽分行|21650183485|議員
蔡美華|新北市|臺灣銀行群賢分行|162001008875|議員
蔡蘇秋金|臺南市|京城商業銀行佳里分行|013120230632|議員
張家銨|臺中市|中華郵政股份有限公司大肚蔗廍郵局|郵政劃撥22878455|議員
陳怡潔|臺北市|合作金庫商業銀行士林分行|0470717604101|議員
簡嘉佑|臺中市|合作金庫商業銀行北臺中分行|1601717830773|議員
蘇致榮|高雄市|臺灣土地銀行鳳山分行|051005975011|議員
李余典|新北市|新北市三重區農會本會|77601010001417|議員
張銘祐|臺北市|中華郵政股份有限公司臺北華江橋郵局|郵政劃撥50486274|議員
陳雅惠|臺中市|國泰世華商業銀行東臺中分行|235035018856|議員
黃文志|高雄市|中華郵政股份有限公司楠梓後勁郵局|00416610215913|議員
黃文益|高雄市|臺灣銀行新興分行|061004656688|議員
呂維胤|臺南市|陽信商業銀行健康分行|066420062239|議員
李天生|臺中市|京城商業銀行大里分行|089120027477|議員
周麗津|臺南市|陽信商業銀行西華分行|069420035711|議員
楊典忠|臺中市|彰化商業銀行清水分行|58215006885000|議員
蔡秉璁|高雄市|臺灣銀行岡山分行|060008377904|議員
魏筠|桃園市|臺灣銀行中壢分行|041008847142|議員
李宇翔|新北市|凱基商業銀行林口分行|60580100000923|議員
周永鴻|臺中市|中華郵政股份有限公司神岡社口郵局|郵政劃撥22878471|議員
林子揚|臺北市|中華郵政股份有限公司臺北大同郵局|郵政劃撥50486290|議員
林志誠|高雄市|高雄銀行橋頭科學園區分行|218210778166|議員
張玉嬿|臺中市|三信商業銀行太平分行|3920006211|議員
張佩芸|桃園市|華南商業銀行觀音分行|260201524888|議員
張嘉玲|新北市|臺灣銀行中和分行|066001038674|議員
張肇良|桃園市|中華郵政股份有限公司龍潭郵局|02813051161885|議員
陳怡潔|臺中市|中華郵政股份有限公司清水郵局|郵政劃撥22878468|議員
陳秋萍|臺南市|兆豐國際商業銀行永康分行|05010755899|議員
陳雅倫|桃園市|桃園市龜山區農會大崗分部|76802010011542|議員
彭俊豪|桃園市|合作金庫商業銀行中原分行|1391717223066|議員
黃守達|臺中市|華南商業銀行五權分行|427200678000|議員
鄧巧佩|高雄市|高雄銀行鳳山分行|200210109365|議員
王宣貿|臺南市|臺灣土地銀行新營分行|030001083305|議員
王閔生|臺北市|第一商業銀行景美分行|10650069832|議員
吳昇翰|新北市|板信商業銀行金城分行|03945006888868|議員
林延鳳|臺北市|合作金庫商業銀行北士林分行|5089717522221|議員
林秉宥|新北市|國泰世華商業銀行丹鳳分行|133500205695|議員
林智鴻|高雄市|高雄銀行市府分行|235210617717|議員
張錦豪|新北市|中華郵政股份有限公司汐止社后郵局|郵政劃撥50486311|議員
許家睿|桃園市|兆豐國際商業銀行八德分行|06110298007|議員
郭品辰|臺南市|京城商業銀行安南分行|032120331220|議員
陳慈慧|臺北市|台北富邦商業銀行社子分行|82110000773068|議員
游明諺|新北市|第一商業銀行淡水分行|21850066370|議員
項柏翰|桃園市|中華郵政股份有限公司楊梅郵局|郵政劃撥50485991|議員
劉仁照|桃園市|中國信託商業銀行南中壢分行|175540662707|議員
劉耀仁|臺北市|第一商業銀行雙園分行|18350188088|議員
顏蔚慈|新北市|中華郵政股份有限公司蘆洲郵局|24411500990523|議員
李喬如|高雄市|高雄銀行鼓山分行|219210418239|議員
林祈烽|臺中市|臺灣新光商業銀行西屯分行|0903100178528|議員
林鈺梅|臺中市|中華郵政股份有限公司大雅清泉崗郵局|00210910436427|議員
林德宇|臺中市|高雄銀行大里分行|233210606500|議員
施志昌|臺中市|國泰世華商業銀行大甲分行|113506294699|議員
洪婉臻|臺北市|台北富邦商業銀行萬華分行|82210000152602|議員
陳映辰|臺中市|臺灣銀行大雅分行|090001045218|議員
曾咨耀|臺中市|台中商業銀行軍功分行|029220165568|議員
蔡筱薇|臺南市|陽信商業銀行東寧分行|067420022962|議員
羅文崇|新北市|中華郵政股份有限公司永和秀朗郵局|郵政劃撥50486196|議員
山田摩衣|新北市|華南商業銀行華江分行|159201238409|議員
沈震南|臺南市|中華郵政股份有限公司臺南大光郵局|郵政劃撥31658712|議員
林富寶|高雄市|中華郵政股份有限公司旗山郵局|郵政劃撥42376398|議員
林裔綺|新北市|新北市瑞芳區漁會本會|51301010002395|議員
翁震州|新北市|華南商業銀行北新莊分行|197200150013|議員
張芬郁|臺中市|台中商業銀行內新分行|023221110427|議員
許淑華|臺北市|臺灣中小企業銀行永春分行|10362160516|議員
郭凡|臺北市|台北富邦商業銀行民生分行|82210000152505|議員
陳賢蔚|臺北市|台北富邦商業銀行市府分行|82110000818100|議員
蔡麗青|臺南市|中華郵政股份有限公司臺南安南郵局|00313610468717|議員
戴瑋姍|新北市|台新國際商業銀行江翠分行|20941000433264|議員
簡舒培|臺北市|台北富邦商業銀行市府分行|82110000800006|議員
尹立|高雄市|中華郵政股份有限公司左營新莊仔郵局|郵政劃撥42376448|議員
何孟樺|臺北市|中華郵政股份有限公司內湖郵局|郵政劃撥50486064|議員
李昆穎|新北市|台北富邦商業銀行板南分行|82210000152530|議員
李雅慧|高雄市|中華郵政股份有限公司左營福山郵局|00418910148177|議員
卓冠廷|新北市|華南商業銀行鶯歌分行|196200337777|議員
林世宗|臺北市|台北富邦商業銀行市府分行|82110000888728|議員
林依婷|臺南市|陽信商業銀行健康分行|066420062215|議員
林亮君|臺北市|玉山商業銀行民權分行|0598968194673|議員
邱俊憲|高雄市|高雄銀行九如分行|221102341178|議員
馬郁雯|臺北市|國泰世華商業銀行臺北分行|007506202960|議員
高嘉瑜|臺北市|台北富邦商業銀行行善分行|82210000152440|議員
康裕成|高雄市|高雄銀行灣內分行|214102142578|議員
張文潔|臺北市|台北富邦商業銀行市府分行|82110001600108|議員
張志豪|新北市|中華郵政股份有限公司中和郵局|03117100691405|議員
張志豪|臺北市|中華郵政股份有限公司臺北逸仙郵局|郵政劃撥50485831|議員
張耀中|臺中市|國泰世華商業銀行市政分行|234035017136|議員
陳乃瑜|新北市|中華郵政股份有限公司新店郵局|03114160529148|議員
陳又新|臺北市|台北富邦商業銀行西湖分行|82110000772096|議員
陳信秀|臺中市|臺灣銀行水湳分行|109001045342|議員
陳俊諺|新北市|臺灣土地銀行板橋分行|050212095459|議員
湯詠瑜|高雄市|臺灣土地銀行中正分行|059001165741|議員
黃淑君|新北市|中華郵政股份有限公司板橋莒光郵局|03110660778351|議員
劉品妡|臺北市|第一商業銀行景美分行|10668133222|議員
蔡永芳|桃園市|彰化商業銀行八德分行|57725008582000|議員
鄭孟洳|高雄市|中華郵政股份有限公司高雄大順郵局|郵政劃撥42376357|議員
簡煥宗|高雄市|高雄銀行鼓山分行|219210418220|議員
顏若芳|臺北市|台北富邦商業銀行市府分行|82110001600000|議員
陳玉鈴|南投縣|臺灣中小企業銀行竹山分行|53062895833|議員
方文正|屏東縣|臺灣新光商業銀行東港分行|0781100013688|議員
陳秋蓉|彰化縣|聯邦商業銀行員林分行|013100038195|議員
施乃如|新竹市|新竹第一信用合作社東南分社|00200400113503|議員
簡維國|臺東縣|合作金庫商業銀行臺東分行|0390717505142|議員
黃大祐|嘉義市|臺灣新光商業銀行北嘉義分行|0666101010777|議員
林群力|雲林縣|(農會)雲林縣莿桐鄉農會本會|00090212255760|議員
許展維|屏東縣|合作金庫商業銀行萬丹分行|5827717821921|議員
蔣煙燈|彰化縣|第一商業銀行鹿港分行|46250652376|議員
周君綾|彰化縣|台北富邦商業銀行和美分行|82210000156489|議員
黃露慧|嘉義市|陽信商業銀行嘉義分行|063010076517|議員
方冠丁|屏東縣|中華郵政股份有限公司新園郵局|00716560294052|議員
陳炫諭|臺東縣|元大商業銀行東信分行|20522000064146|議員
潘炩禕|屏東縣|臺灣銀行潮州分行|088004769454|議員
高明達|雲林縣|中華郵政股份有限公司斗南郵局|郵政劃撥22878912|議員
利八魁|屏東縣|屏東縣內埔地區農會本會|74901010000318|議員
賴澤民|彰化縣|合作金庫商業銀行員林分行|0240717128746|議員
羅平道|屏東縣|中華郵政股份有限公司佳冬郵局|郵政劃撥42376764|議員
曾怡芳|基隆市|基隆第一信用合作社百福分社|0130200003603|議員
吳亭亭|苗栗縣|中華郵政股份有限公司竹南郵局|02912381162448|議員
李世斌|屏東縣|臺灣新光商業銀行東園分行|0967100186025|議員
陳宜|基隆市|中華郵政股份有限公司基隆信義郵局|00111240449785|議員
洪巧娟|南投縣|中華郵政股份有限公司草屯郵局|04011001270700|議員
陳怡岳|嘉義縣|(農會)嘉義縣朴子市農會本會|00024212504001|議員
曾煥燁|彰化縣|第一商業銀行和美分行|47150217865|議員
田珍綺|花蓮縣|中華郵政股份有限公司花蓮國安郵局|00910030720360|議員
徐國銘|屏東縣|中華郵政股份有限公司里港郵局|00712610483561|議員
曾國維|新竹市|臺灣銀行六家分行|248001038998|議員
林峻輔|宜蘭縣|兆豐國際商業銀行羅東分行|22810185388|議員
林詩穎|宜蘭縣|宜蘭縣頭城鎮農會本會|58501010003539|議員
郭佩瑄|雲林縣|中華郵政股份有限公司麥寮郵局|03012690556492|議員
陳光軒|苗栗縣|中華郵政股份有限公司頭份上公園郵局|郵政劃撥22878427|議員
楊玲宜|新竹市|臺灣土地銀行東新竹分行|103001022176|議員
廖崑堯|南投縣|第一商業銀行埔里分行|44250456033|議員
李清聖|屏東縣|中華郵政股份有限公司屏東公館郵局|郵政劃撥42376658|議員
莊依婕|花蓮縣|花蓮第二信用合作社中山分社|02000100034016|議員
劉珊伶|彰化縣|彰化第六信用合作社埔心分社|1242000006830|議員
林世明|彰化縣|臺灣銀行彰化分行|016001178324|議員
邱毓興|苗栗縣|玉山商業銀行竹南分行|0440968388176|議員
胡仁順|花蓮縣|中華郵政股份有限公司花蓮中華路郵局|00911390179626|議員
曾奕豪|嘉義市|國泰世華商業銀行嘉義分行|036035011263|議員
劉彥伶|新竹市|中國信託商業銀行關埔分行|131540347192|議員
林麗|宜蘭縣|中華郵政股份有限公司宜蘭中山路郵局|郵政劃撥50486600|議員
凌子楚|嘉義市|玉山商業銀行東嘉義分行|0509968556177|議員
楊子賢|彰化縣|中國信託商業銀行彰化分行|428541282134|議員
潘筱潔|屏東縣|中華郵政股份有限公司萬巒郵局|00715210304433|議員
陳軍佐|基隆市|基隆第一信用合作社信二路分社|0060200304483|議員
藍駿宇|彰化縣|彰化第六信用合作社秀水分社|0942000060623|議員
李姿婷|宜蘭縣|合作金庫商業銀行宜蘭分行|0130717230656|議員
陳詩弦|苗栗縣|中華郵政股份有限公司頭份上公園郵局|02913320193643|議員
游國連|宜蘭縣|中華郵政股份有限公司宜蘭金六結郵局|01110130200309|議員
詹琬惠|彰化縣|台中商業銀行社頭分行|071221119224|議員
吳巧瀅|基隆市|中華郵政股份有限公司基隆愛三路郵局|00110021883021|議員
李俊諭|彰化縣|中華郵政股份有限公司溪州郵局|郵政劃撥22878681|議員
洪如萍|雲林縣|(農會)雲林縣崙背鄉農會本會|00126211798300|議員
洪騰明|彰化縣|中華郵政股份有限公司二林郵局|00813800946481|議員
蔡嘉峻|雲林縣|中華郵政股份有限公司麥寮郵局|03012690556504|議員
林世賢|彰化縣|臺灣中小企業銀行彰化分行|54062646198|議員
饒怡君|屏東縣|臺灣銀行屏東分行|017008417883|議員
李淑芬|宜蘭縣|宜蘭縣礁溪鄉農會本會|58701010142668|議員
林士凱|新竹市|凱基商業銀行新竹分行|60230100001832|議員
黃永翔|基隆市|中華郵政股份有限公司基隆愛三路郵局|00110021883035|議員
蔡岳儒|雲林縣|中華郵政股份有限公司北港郵局|郵政劃撥22878609|議員
沈夙崢|南投縣|國泰世華商業銀行南投分行|108506420976|議員
陳思伃|花蓮縣|中國信託商業銀行花蓮分行|197540312349|議員
黃紀仁|基隆市|中華郵政股份有限公司基隆安瀾橋郵局|00111550308099|議員
方一祥|屏東縣|中華郵政股份有限公司屏東公館郵局|郵政劃撥42376476|議員
洪子超|彰化縣|中華郵政股份有限公司二林郵局|00813800946507|議員
歐陽霆|新竹縣|中國信託商業銀行竹北分行|034540853822|議員
蔡侑庭|屏東縣|中華郵政股份有限公司屏東民生路郵局|郵政劃撥42376513|議員
王秋淑|南投縣|中華郵政股份有限公司魚池郵局|郵政劃撥22878430|議員
張之豪|基隆市|凱基商業銀行基隆分行|60280100001578|議員
莊陞漢|彰化縣|合作金庫商業銀行彰化分行|0230717157376|議員
蔡銘軒|南投縣|臺灣土地銀行草屯分行|082005481828|議員
余筱菁|新竹縣|中國信託商業銀行竹北分行|034540853411|議員
邵啟月|新竹縣|中國信託商業銀行竹北分行|034540853602|議員
蔡永順|雲林縣|中華郵政股份有限公司麥寮郵局|03012690556400|議員
張欣倩|彰化縣|合作金庫商業銀行員新分行|5609717390761|議員
陳建名|新竹市|新竹第一信用合作社延平分社|01300400046913|議員
陳漢澤|宜蘭縣|臺灣銀行宜蘭分行|022001131264|議員
廖郁賢|雲林縣|中華郵政股份有限公司斗六西平路郵局|03010081388283|議員
蘇育德|澎湖縣|中華郵政股份有限公司馬公中正路郵局|02410061660841|議員
吳驊珈|基隆市|基隆第一信用合作社大武崙分社|0103200310020|議員
林煒軒|嘉義市|中華郵政股份有限公司嘉義玉山郵局|郵政劃撥31658691|議員
張庭綺|雲林縣|中華郵政股份有限公司虎尾郵局|郵政劃撥22878392|議員
許明對|嘉義市|中華郵政股份有限公司嘉義玉山郵局|郵政劃撥31658493|議員
曾翰揚|新竹市|中華郵政股份有限公司新竹武昌街郵局|00610042224131|議員
謝家倫|宜蘭縣|兆豐國際商業銀行羅東分行|22810186800|議員
`.trim();

/* 選舉種類代碼（供官網連結對應） */
const ELECTION = {
  "直轄市":{mayor:"115年直轄市市長選舉",coun:"115年直轄市議員選舉"},
  "縣市":{mayor:"115年縣(市)長選舉",coun:"115年縣(市)議員選舉"}
};
const SPECIAL = {"臺北市":1,"新北市":1,"桃園市":1,"臺中市":1,"臺南市":1,"高雄市":1}; // 直轄市

/* 縣市分區（北→南→東→離島） */
const REGIONS = [
  ["北部",["基隆市","臺北市","新北市","桃園市","新竹市","新竹縣","苗栗縣"]],
  ["中部",["臺中市","彰化縣","南投縣","雲林縣"]],
  ["南部",["嘉義市","嘉義縣","臺南市","高雄市","屏東縣"]],
  ["東部",["宜蘭縣","花蓮縣","臺東縣"]],
  ["離島",["澎湖縣","金門縣","連江縣"]]
];

/* 解析資料 */
const PEOPLE = RAW.split("\n").map(l=>{
  const [name,county,bank,acct,role]=l.split("|");
  return {name,county,bank,acct,role};
});
const BY_COUNTY={};
PEOPLE.forEach(p=>{(BY_COUNTY[p.county]=BY_COUNTY[p.county]||[]).push(p)});

let CURRENT=null;

/* 戶名重建 */
function holderName(p){
  return `115年${p.county}${p.role}擬參選人${p.name}政治獻金專戶`;
}

/* 首頁統計 */
function buildStats(){
  const total=PEOPLE.length;
  const leads=PEOPLE.filter(p=>p.role!=="議員").length;
  const couns=PEOPLE.filter(p=>p.role==="議員").length;
  const counties=Object.keys(BY_COUNTY).length;
  document.getElementById("statRow").innerHTML=
    `<div class="stat"><b>${total}</b>已公告專戶人數</div>`+
    `<div class="stat"><b>${leads}</b>縣市長／市長</div>`+
    `<div class="stat"><b>${couns}</b>縣市／直轄市議員</div>`+
    `<div class="stat"><b>${counties}</b>個縣市有資料</div>`;
}

/* 地圖 */
function buildMap(){
  let html="";
  REGIONS.forEach(([region,counties])=>{
    html+=`<div class="region"><div class="region-label">${region}</div><div class="tiles">`;
    counties.forEach(c=>{
      const list=BY_COUNTY[c]||[];
      const n=list.length;
      if(n===0){
        html+=`<div class="tile empty"><div class="cty">${c}</div><div class="cnt">尚無公告專戶</div></div>`;
      }else{
        const lead=list.filter(p=>p.role!=="議員").length;
        html+=`<div class="tile" onclick="showCounty('${c}')">
          <div class="cty">${c}</div>
          <div class="cnt"><b>${n}</b> 位　${lead?`含首長 ${lead}`:"議員"}</div>
          <div class="bar" style="width:${Math.min(100,n*4)}%"></div></div>`;
      }
    });
    html+="</div></div>";
  });
  document.getElementById("mapArea").innerHTML=html;
}

/* 縣市頁（卡片頭像 + Fancybox 彈窗） */
const OFFICIAL_URL="https://sunshine.cy.gov.tw/PAQuery.aspx?n=21&sms=0";

/* 候選人照片：載入時向維基百科 API 取得「CC／公眾領域」授權之肖像（出處標示於頁尾「照片來源」）；
   尚無自由授權照片者，顯示姓名色塊。如需擴充，於 PHOTO_CREDIT 增列「姓名:[作者,授權]」即可。 */
const PHOTO_CREDIT={
 "陳亭妃":["立法院","Attribution"],"高嘉瑜":["中華民國立法院","Attribution"],"何欣純":["立法院全球資訊網","Attribution"],
 "蘇巧慧":["立法院","Attribution"],"賴瑞隆":["立法院","Attribution"],"周春米":["屏東縣政府","Attribution"],
 "黃守達":["公視《有話好說》","CC BY 3.0"],"簡舒培":["內政部民政司","Attribution"],"顏若芳":["內政部","Attribution"],
 "張之豪":["內政部","Attribution"],"林亮君":["Caprice1244","CC BY-SA 4.0"],"王美惠":["中華民國立法院","Attribution"],
 "莊競程":["中華民國立法院","Attribution"],"沈伯洋":["立法院","Attribution"],"何孟樺":["Johnason Chen","CC BY 2.0"],
 "江肇國":["中華民國內政部","Attribution"],"童子瑋":["CHENGYITERRYLiN","CC BY-SA 4.0"]
};
function avatarHue(name){ let h=0; for(const ch of name) h=(h*31+ch.charCodeAt(0))%360; return h; }
function avatar(p){
  const bg=`hsl(${avatarHue(p.name)},44%,42%)`, ini=p.name.slice(0,1);
  const ph=(window.PHOTOS||{})[p.name];
  const img=ph?`<img src="${ph.src}" alt="${p.name} 照片" loading="lazy" onerror="this.remove()">`:"";
  return `<div class="avatar" style="--ac:${bg}"><span>${ini}</span>${img}</div>`;
}
async function loadPhotos(){
  try{
    const names=Object.keys(PHOTO_CREDIT);
    const api="https://zh.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail|name&pithumbsize=400&pilimit=50&titles="+encodeURIComponent(names.join("|"));
    const j=await fetch(api).then(r=>r.json());
    window.PHOTOS={};
    const pages=(j.query&&j.query.pages)||{};
    for(const k in pages){const p=pages[k]; if(p.thumbnail&&PHOTO_CREDIT[p.title]) window.PHOTOS[p.title]={src:p.thumbnail.source,file:p.pageimage};}
    renderCredits();
  }catch(e){}
}
function renderCredits(){
  const box=document.getElementById("photoCredits"); if(!box) return;
  const items=Object.keys(PHOTO_CREDIT).map(n=>{
    const ph=(window.PHOTOS||{})[n], cr=PHOTO_CREDIT[n];
    const link=ph?`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(ph.file)}`:"https://commons.wikimedia.org/";
    return `<a href="${link}" target="_blank" rel="noopener">${n}</a>（${cr[0]}／${cr[1]}）`;
  });
  box.innerHTML="照片來源（維基共享資源 Wikimedia Commons，依授權標示，著作權屬原作者）："+items.join("、")+"。";
}

function countySubtitle(c){
  const list=BY_COUNTY[c]||[], lead=list.filter(p=>p.role!=="議員").length;
  return `${SPECIAL[c]?"直轄市":"縣市"}　已公告專戶 ${list.length} 位（首長 ${lead}、議員 ${list.length-lead}）`;
}

function countyInner(c,kw){
  const list=(BY_COUNTY[c]||[]).filter(p=>!kw||p.name.includes(kw));
  const leads=list.filter(p=>p.role!=="議員"), couns=list.filter(p=>p.role==="議員");
  let html="";
  if(leads.length){
    html+=`<div class="group-title"><span class="pill">首長</span>縣市長／市長　${leads.length} 位</div><div class="cards">`;
    leads.forEach(p=>html+=card(p,"lead")); html+="</div>";
  }
  if(couns.length){
    html+=`<div class="group-title"><span class="pill">議員</span>${SPECIAL[c]?"直轄市":"縣市"}議員　${couns.length} 位</div><div class="cards">`;
    couns.forEach(p=>html+=card(p,"coun")); html+="</div>";
  }
  if(!list.length) html=`<div class="empty-note">查無「${kw}」，或此縣市暫無已公告之專戶資料。<br>可至監察院官網查詢最新公告。</div>`;
  return html;
}

function showCounty(c){
  CURRENT=c;
  if(window.Fancybox){
    const html=`<div class="fb-county" role="dialog" aria-label="${c} 政治獻金專戶">
      <div class="fb-head">
        <div><h2>${c}</h2><div class="fb-sub">${countySubtitle(c)}</div></div>
        <a class="official" href="${OFFICIAL_URL}" target="_blank" rel="noopener">在監察院官網查詢／核對 ↗</a>
      </div>
      <input class="fb-search" placeholder="輸入姓名篩選…" oninput="fbFilter(this)" aria-label="姓名篩選">
      <div class="fb-body">${countyInner(c,"")}</div>
    </div>`;
    window.Fancybox.show([{src:html,type:"html"}],{mainClass:"fb-pop",dragToClose:false});
    return;
  }
  /* 後備：Fancybox 未載入（離線）時，改用整頁檢視 */
  document.getElementById("home").classList.remove("active");
  document.getElementById("county").classList.add("active");
  document.getElementById("cSearch").value="";
  document.getElementById("cName").textContent=c;
  document.getElementById("cSub").textContent=countySubtitle(c);
  document.getElementById("cOfficial").href=OFFICIAL_URL;
  renderCounty(c,"");
  window.scrollTo(0,0);
}

function renderCounty(c,kw){ document.getElementById("cBody").innerHTML=countyInner(c,kw); }

function fbFilter(input){
  const root=input.closest(".fb-county"), kw=input.value.trim();
  root.querySelectorAll(".card").forEach(cd=>{ cd.style.display=(!kw||(cd.dataset.name||"").includes(kw))?"":"none"; });
}

/* 銀行（金融機構）3 碼代號：依金融機構名稱對應。來源：FISC／HSBC 跨行轉帳金融機構代號一覽表。
   信用合作社、農漁會亦含其專屬代號（部分農會／漁會於跨行可另用 600／951）。 */
const BANKCODE={
"中華郵政":"700","臺灣銀行":"004","臺灣土地銀行":"005","合作金庫商業銀行":"006","第一商業銀行":"007",
"華南商業銀行":"008","彰化商業銀行":"009","台北富邦商業銀行":"012","國泰世華商業銀行":"013","高雄銀行":"016",
"兆豐國際商業銀行":"017","臺灣中小企業銀行":"050","台中商業銀行":"053","京城商業銀行":"054","華泰商業銀行":"102",
"臺灣新光商業銀行":"103","陽信商業銀行":"108","板信商業銀行":"118","三信商業銀行":"147","聯邦商業銀行":"803",
"元大商業銀行":"806","永豐商業銀行":"807","玉山商業銀行":"808","凱基商業銀行":"809","台新國際商業銀行":"812",
"中國信託商業銀行":"822",
"基隆第一信用合作社":"114","新竹第一信用合作社":"130","彰化第六信用合作社":"162","花蓮第二信用合作社":"216","新北市淡水信用合作社":"120",
"臺中市豐原區農會":"612","桃園市龜山區農會":"768","新北市三重區農會":"776","臺南市龍崎區農會":"565","屏東縣內埔地區農會":"749",
"雲林縣莿桐鄉農會":"616","雲林縣崙背鄉農會":"616","嘉義縣朴子市農會":"617","宜蘭縣頭城鎮農會":"585","宜蘭縣礁溪鄉農會":"587",
"新北市瑞芳區漁會":"504"
};
function bankInst(b){
  b=b.replace(/^\(農會\)/,"");
  if(/中華郵政/.test(b))return "中華郵政";
  let m=b.match(/^(.*?(?:商業銀行|銀行))/); if(m)return m[1];
  m=b.match(/^(.*?信用合作社)/); if(m)return m[1];
  m=b.match(/(.*?(?:區農會|地區農會|鄉農會|鎮農會|市農會))/); if(m)return m[1];
  m=b.match(/(.*?漁會)/); if(m)return m[1];
  return "";
}
function bankCode(b){ return BANKCODE[bankInst(b)]||""; }

/* 社群帳號：來源為 Wikidata 標註之官方臉書(P2013)／IG(P2003)，僅取「直接命中、且為人物」之項目，
   並排除跨縣市同名者，降低連錯人風險。未收錄者於卡片提供「找臉書」搜尋連結。 */
const SOCIAL={
"謝志忠":["mang.guo.9659",""],
"洪健益":["ryoudo",""],
"高嘉瑜":["ntufishfans","ntufish"],
"何欣純":["94achun","a_chun1973"],
"陳淑華":["chenshuhua1970",""],
"王閔生":["iwangyou",""],
"黃守達":["taichungedada",""],
"簡舒培":["justmatchtaipei","shupei1977"],
"顏若芳":["234624180072135","yengafang"],
"林德宇":["187rain",""],
"林亮君":["sabrinalim.tw","sabrinalim.tw"],
"周永鴻":["chouyunghong",""],
"張銘祐":["mingyu19840717",""],
"王立任":["wanglizen.coastline",""],
"沈伯洋":["pumashen","pumashen"],
"陳又新":["NewAgainChen",""],
"施志昌":["ChihChang43",""],
"何孟樺":["TaipeiHmh","taipeihmh"],
"洪婉臻":["100038120630705","hungwanjen"],
"陳聖文":["sheng.wenC","sheng.wen.dw"],
"林延鳳":["callmeifeng","callmeifeng"],
"陳賢蔚":["bestserviceforTPE","alchen0712"],
"劉耀仁":["LiuYaoRen",""],
"陳雅倫":["sexymeo","ellen_chan_nga_lun"],
"邱婷蔚":["TingweiChiu",""],
"彭俊豪":["pengwintaoyuan",""],
"蘇巧慧":["chiaohui.su","su.chiaohui"],
"鄭宇恩":["yuencheng1986",""],
"彭佳芸":["239410119414734","natally1013"],
"魏筠":["WeiyunIN",""],
"張錦豪":["zhenhaochangntc",""],
"李余典":["lee.yudien",""],
"張維倩":["attorneyivy",""],
"廖宜琨":["kevin820705",""],
"山田摩衣":["yamada.banqiao","yamada_banqiao"],
"顏蔚慈":["ritayen.office",""],
"李宇翔":["eliotyliii","realeliotyli"],
"林秉宥":["100015507095868",""],
"劉仁照":["vlog72",""],
"黃瓊慧":["pupudog0308","qn_taiwan"],
"許家睿":["taoyuanCJ","cjcheerup"],
"張芬郁":["Changphenyu",""],
"陳亭妃":["fififamily","chen_tingfei"],
"賴瑞隆":["zenolai2","zenolai"],
"卓冠廷":["TimCho0410","ktcho_0410"],
"戴瑋姍":["wei3wei3","wei335453"],
"呂維胤":["564408486971527",""],
"黃敬雅":["chingyataiwan","kerina_luvtw"],
"陳乃瑜":["newsevalynchen",""],
"朱正軒":["chchu.tw","chchu.tw"],
"蔡筱薇":["Hsiaoweitasi","nice_tn_wei"],
"康裕成":["Kangyucheng.1",""],
"施乃如":["9.so.good",""],
"李喬如":["twsweetheart",""],
"簡煥宗":["2014cky",""],
"周春米":["RiceChouChunMi","choulittlerice"],
"尹立":["yinlih",""],
"林智鴻":["chihhung.lin.54",""],
"凌子楚":["grantling0919",""],
"王美惠":["ahueimoto","ahueimoto"],
"莊競程":["Power3C","legislator2020"],
"鄭孟洳":["mengju1214",""],
"黃文益":["mdsn3838",""],
"陳建名":["passionhsinchu","oppyspace"],
"童子瑋":["wayne201817","tungtung_keelung"],
"張之豪":["JihoTiun",""],
"陳光軒":["xuan.miaoli","xuan741010"],
"廖郁賢":["nppyuhsien","yuhsien.liao.npp"],
"陳詩弦":["100063494659640",""],
"楊子賢":["tzuhsienyangch",""],
"蔡銘軒":["ming.xuan.169",""],
"張欣倩":["zhangxinqian","chang_chienchien"],
"歐陽霆":["OY2018","oyt1991"],
"余筱菁":["Hakkameme.LoveTaiwan",""],
"曾怡芳":["qidusasa",""],
"陳宜":["chenyi.lovekeelung",""],
"陳軍佐":["100080191479528",""],
"吳巧瀅":["61561484506603",""],
"黃永翔":["skyfall6009",""],
"黃紀仁":["61587203717911",""],
"吳驊珈":["HuaJiaGo",""],
"賴俊翰":["61581573608455",""],
"王孝維":["wang.make.a.comeback",""],
"林子揚":["alwaysyang0127",""],
"陳慈慧":["amber.chen.5682",""],
"許淑華":["shua0522",""],
"郭凡":["fankuo.tw",""],
"林世宗":["Taipei.Lin.Strong",""],
"張文潔":["wenjbrighttpe",""],
"劉品妡":["liupinhsinn",""],
"李倩萍":["sereneping",""],
"陳韋任":["61587989126443",""],
"陳岱吟":["61584364344191",""],
"彭一書":["abook1028",""],
"陳俊維":["61582399108272",""],
"戴翎育":["61557896278755",""],
"吳奕萱":["61585299840289",""],
"蔡美華":["tw.tsaimeihua",""],
"張嘉玲":["100078163374031",""],
"吳昇翰":["wushenghantw",""],
"游明諺":["61580458173363",""],
"羅文崇":["luo.wen.chong.2025",""],
"林裔綺":["lin.yi.qi.21102",""],
"翁震州":["wongjhenjhou",""],
"李昆穎":["yingforfuture",""],
"陳俊諺":["profile.php?id=61587938910044",""],
"黃淑君":["shuchun2022",""],
"黃世杰":["SCHuangLawyer",""],
"黃崇真":["cchuang0223",""],
"王珮毓":["581peiyu",""],
"胡家智":["profile.php?id=61578040209282",""],
"黃家齊":["hcc3920888",""],
"許清順":["call3129777",""],
"游吾和":["you.wu.he",""],
"李宗豪":["TYleehao",""],
"張曉昀":["YunloveZhongli",""],
"張佩芸":["61583386995275",""],
"張肇良":["zao.liang4798751",""],
"項柏翰":["61584336966983",""],
"蔡永芳":["cai.yong.fang.478141",""],
"邵啟月":["moon.moon.zhubei",""],
"吳亭亭":["wu.ting.ting.157772",""],
"邱毓興":["100075894382721",""],
"蔡耀頡":["tsaiyaochieh",""],
"鄭功進":["tccjing",""],
"蔡怡萱":["syuan0701",""],
"謝家宜":["100078246512890",""],
"何翊綾":["mingchen4417",""],
"吳中源":["coastlinekeepgoing",""],
"曾威":["taichungtsengwei",""],
"江肇國":["TC.AKuo",""],
"陳俞融":["chenitaiwan",""],
"張家銨":["jangjiaan",""],
"簡嘉佑":["kaiutwn",""],
"陳雅惠":["yahui236236",""],
"李天生":["tensheng",""],
"楊典忠":["mgyu49",""],
"張玉嬿":["myishuc0988",""],
"林祈烽":["cfengtheupright",""],
"林鈺梅":["61572754954500",""],
"陳映辰":["inchen329",""],
"曾咨耀":["OnlyTseng",""],
"陳信秀":["show.beitun",""],
"陳秋蓉":["smile219",""],
"蔣煙燈":["LightUpFuXing",""],
"周君綾":["zhou.jun.ling.481793",""],
"賴澤民":["laizemin",""],
"曾煥燁":["profile.php?id=61586492319526",""],
"劉珊伶":["630630fb",""],
"林世明":["ShihMing0824",""],
"藍駿宇":["lanchunyulan",""],
"詹琬惠":["100088080090080",""],
"李俊諭":["100066884110323",""],
"洪騰明":["hong.teng.ming.2025",""],
"林世賢":["LinShihHsien",""],
"洪子超":["profile.php?id=100082492636942",""],
"莊陞漢":["hank.juang.2025",""],
"高明達":["gao.ming.da.2025",""],
"郭佩瑄":["kuopeihsuan2026",""],
"洪如萍":["p6960306",""],
"蔡嘉峻":["61585258022771",""],
"蔡岳儒":["taiwanyouth168",""],
"蔡永順":["profile.php?id=61584653797721",""],
"張庭綺":["chi.chi.736",""],
"陳怡岳":["yuyuehchen.tw",""],
"黃大祐":["100063743469324",""],
"黃露慧":["Lulu.Chiayi",""],
"曾奕豪":["chiayihaowecan",""],
"林煒軒":["WSLCHIAYI",""],
"許明對":["vincent19720319",""],
"陳皇宇":["chen.huang.yu.425582",""],
"陳怡潔@臺北市":["507Chenyichieh",""],
"陳怡潔@臺中市":["EJChenEJChen",""],
"張耀中@臺中市":["TaichungBetter",""],
"張志豪@臺北市":["firechc119",""],
"張志豪@新北市":["chih.hao2017",""],
"沈家鳳":["katherine.bibi",""],
"陳秋宏":["chen.qiu.hong.813471",""],
"周嘉韋":["wayonly",""],
"唐儀靜":["tangiching",""],
"陳碧玉":["100049475036784",""],
"鄭佳欣":["cch19790403",""],
"余柷青":["yucc.tn",""],
"謝舒凡":["HsiehShuFan",""],
"陳金鐘":["supergoldenbell",""],
"賴懋慶":["lai.mao.qing",""],
"林建南":["lin.jian.nan.325225",""],
"蔡秋蘭":["tsaichiulan",""],
"李宗翰":["litsunghan",""],
"郭鴻儀":["hungyi2018",""],
"蔡蘇秋金":["Jiali14039",""],
"周麗津":["mingdezhou0802",""],
"陳秋萍":["chyouping",""],
"王宣貿":["TainanRmao",""],
"曾國維":["61577735596730",""],
"沈震南":["61587722931384",""],
"蔡麗青":["liching666",""],
"林依婷":["01ting",""],
"黃明太":["huang.ming.tai.21433",""],
"江瑞鴻":["100063860734329",""],
"張勝富":["zhang.sheng.fu.971511",""],
"林慧欣":["Lim.fi.him",""],
"李雨庭":["KaohsiungCityCouncilleeyuting",""],
"吳昱鋒":["beewu99",""],
"洪村銘":["Erichong6721",""],
"陳琳潔":["chen.lin.jie.425635",""],
"鄭光峰":["btg0666e",""],
"何權峰":["sanminhochuanfeng",""],
"張以理":["changyili1109",""],
"郭建盟":["GaoXiongShiYiYuanGuoJianMeng",""],
"陳慧文":["hwcfs",""],
"蘇致榮":["fengshanarong",""],
"黃文志":["wenchih0717",""],
"蔡秉璁":["pctsai1991",""],
"林志誠":["zhicheng1128",""],
"鄧巧佩":["chiaopei0929",""],
"林富寶":["linfupao",""],
"李雅慧":["liyahui0830",""],
"邱俊憲":["khhchiu",""],
"湯詠瑜":["tang162",""],
"張耀中@高雄市":["61572120912600",""],
"巫振興":["100000377862064","fuyan_ici"],
"楊玲宜":["Hsinchu.LingYi",""],
"劉彥伶":["captainGINAonduty",""],
"林士凱":["linshihkaii",""],
"曾翰揚":["Raker.young",""],
"方文正":["fang.wen.zheng.177925",""],
"許展維":["profile.php?id=100005028044085",""],
"方冠丁":["fang.guan.ding",""],
"潘炩禕":["61560926832004",""],
"利八魁":["mp7789101",""],
"羅平道":["profile.php?id=100069092101417",""],
"李世斌":["apin0505",""],
"徐國銘":["xu.guo.ming.679587",""],
"李清聖":["100063679391221",""],
"潘筱潔":["profile.php?id=61576403384635",""],
"饒怡君":["rao.yi.jun.981347",""],
"方一祥":["100063710080119",""],
"蔡侑庭":["a08061219",""],
"簡維國":["weikuokuo",""],
"陳炫諭":["profile.php?id=61577059288143",""],
"田珍綺":["waybackhualien",""],
"莊依婕":["joe.boej",""],
"胡仁順":["RENSHUN989",""],
"陳思伃":["61576633258844",""],
"林峻輔":["linjunfu269",""],
"林詩穎":["ShihYing.Ling",""],
"林麗":["Yilanlinli",""],
"李姿婷":["TzuTing226",""],
"游國連":["vadim19790817",""],
"李淑芬":["profile.php?id=61585479501096",""],
"陳漢澤":["tanhantik.yilan",""],
"謝家倫":["chialun0708",""],
"蘇育德":["eter.su1986",""],
"馬郁雯":["100084505533044",""],
"林群力":["100063839194916",""],
"陳玉鈴":["100068750604092",""],
"洪巧娟":["Chiao.Chuan925",""],
"廖崑堯":["xuldjpul",""],
"沈夙崢":["shensucheng",""],
"王秋淑":["100006721425704",""],
"郭品辰":["sidy36",""]
};
function social(p){
  const s=SOCIAL[p.name+"@"+p.county]||SOCIAL[p.name]||["",""], fb=s[0], ig=s[1];
  let h='<div class="social">';
  if(fb) h+=`<a class="sbtn fb" href="https://www.facebook.com/${fb}" target="_blank" rel="noopener">臉書</a>`;
  if(ig) h+=`<a class="sbtn ig" href="https://www.instagram.com/${ig}" target="_blank" rel="noopener">IG</a>`;
  if(!fb) h+=`<a class="sbtn search" href="https://www.google.com/search?q=${encodeURIComponent(p.name+" "+p.county+" "+p.role+" 臉書")}" target="_blank" rel="noopener">🔍 找臉書</a>`;
  return h+'</div>';
}
function card(p,type){
  const safe=p.acct.replace(/'/g,""), code=bankCode(p.bank);
  return `<div class="card" data-name="${p.name}">
    <div class="chead">${avatar(p)}<div class="name">${p.name}<span class="badge ${type}">${p.role}</span></div></div>
    <div class="kv"><span class="k">金融機構</span><span class="v">${p.bank}</span></div>
    <div class="kv"><span class="k">銀行代號</span><span class="v acct">${code||"—"}</span>${code?`<button class="copy" onclick="copyTxt('${code}')">複製</button>`:""}</div>
    <div class="kv"><span class="k">帳號</span><span class="v acct">${p.acct}</span>
      <button class="copy" onclick="copyTxt('${safe}')">複製</button></div>
    <div class="holder">戶名：${holderName(p)}</div>
    ${social(p)}
  </div>`;
}

function showHome(){
  document.getElementById("county").classList.remove("active");
  document.getElementById("home").classList.add("active");
  window.scrollTo(0,0);
}

function copyTxt(t){
  navigator.clipboard&&navigator.clipboard.writeText(t);
  const el=document.getElementById("toast");
  el.textContent="已複製帳號："+t;
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),1600);
}

/* ===== 台灣地理輪廓 SVG 地圖（開檔即時抓取內政部縣市界資料並前端解碼） ===== */
const MAP_W=600, MAP_H=860, MAP_PAD=14;
const TOPO_URL="https://cdn.jsdelivr.net/npm/taiwan-atlas/counties-mercator-10t.json";
const normCty = s => s.replace(/台/g,"臺"); // 圖資用「台」，本站資料用「臺」

function countyCount(name){return (BY_COUNTY[name]||[]).length;}

function lerpColor(t){ // 0..1 -> 淺綠到深綠
  const L=[222,243,233], D=[15,107,65], k=Math.pow(t,0.6);
  return `rgb(${L.map((c,i)=>Math.round(c+(D[i]-c)*k)).join(",")})`;
}

async function renderSvgMap(){
  const wrap=document.getElementById("svgWrap"), legend=document.getElementById("mapLegend");
  try{
    const topo=await fetch(TOPO_URL).then(r=>{if(!r.ok)throw 0;return r.json();});
    const tr=topo.transform;
    const dec=arc=>{let x=0,y=0;return arc.map(p=>{x+=p[0];y+=p[1];return tr?[x*tr.scale[0]+tr.translate[0],y*tr.scale[1]+tr.translate[1]]:[p[0],p[1]];});};
    const arcs=topo.arcs.map(dec);
    const byIdx=i=>i<0?arcs[~i].slice().reverse():arcs[i];
    const ring=idxs=>{let c=[];idxs.forEach((ai,k)=>{let a=byIdx(ai);if(k)a=a.slice(1);c=c.concat(a);});return c;};
    const polys=g=>g.type==="Polygon"?g.arcs.map(ring):g.type==="MultiPolygon"?[].concat(...g.arcs.map(p=>p.map(ring))):[];
    const geoms=topo.objects.counties.geometries;
    const raw=geoms.map(g=>({name:normCty(g.properties.COUNTYNAME),rings:polys(g)}));
    let minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9;
    raw.forEach(c=>c.rings.forEach(r=>r.forEach(([x,y])=>{if(x<minx)minx=x;if(y<miny)miny=y;if(x>maxx)maxx=x;if(y>maxy)maxy=y;})));
    const s=Math.min((MAP_W-2*MAP_PAD)/(maxx-minx),(MAP_H-2*MAP_PAD)/(maxy-miny));
    const offx=MAP_PAD+((MAP_W-2*MAP_PAD)-(maxx-minx)*s)/2, offy=MAP_PAD+((MAP_H-2*MAP_PAD)-(maxy-miny)*s)/2;
    const tx=x=>Math.round((x-minx)*s+offx), ty=y=>Math.round((y-miny)*s+offy);
    const max=Math.max(1,...Object.keys(BY_COUNTY).map(countyCount));
    let paths="";
    raw.forEach(c=>{
      let d="";
      c.rings.forEach(r=>{if(r.length<3)return;let pts=r.map(([x,y])=>[tx(x),ty(y)]).filter((p,i,a)=>i===0||p[0]!==a[i-1][0]||p[1]!==a[i-1][1]);if(pts.length<3)return;d+="M"+pts.map(p=>p[0]+" "+p[1]).join("L")+"Z";});
      if(!d)return;
      const n=countyCount(c.name);
      const fill=n>0?lerpColor(n/max):"#d3dce3";
      const cls=n>0?"has":"nodata";
      paths+=`<path d="${d}" fill="${fill}" stroke="#ffffff" stroke-width="1" class="${cls}" data-c="${c.name}" data-n="${n}"><title>${c.name}　${n>0?n+" 位":"尚無公告"}</title></path>`;
    });
    // 六都名稱標籤（固定座標，對應 viewBox 0 0 600 860）
    const LBL={"臺北市":[497,62],"新北市":[466,135],"桃園市":[408,131],"臺中市":[356,272],"臺南市":[223,520],"高雄市":[287,580]};
    let labels="";
    for(const k in LBL){ if(BY_COUNTY[k]){ labels+=`<text x="${LBL[k][0]}" y="${LBL[k][1]}" class="cty-label">${k}</text>`; } }
    document.getElementById("svgMap").innerHTML=
      `<svg viewBox="0 0 ${MAP_W} ${MAP_H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="台灣各縣市政治獻金專戶地圖">${paths}${labels}</svg>`;
    // 互動
    const tip=document.getElementById("mapTip");
    document.querySelectorAll("#svgMap path.has").forEach(p=>{
      p.addEventListener("click",()=>showCounty(p.dataset.c));
      p.addEventListener("mousemove",e=>{
        const r=wrap.getBoundingClientRect();
        tip.style.left=(e.clientX-r.left)+"px"; tip.style.top=(e.clientY-r.top)+"px";
        tip.innerHTML=`${p.dataset.c}　<b>${p.dataset.n}</b> 位`; tip.style.opacity=1;
      });
      p.addEventListener("mouseleave",()=>tip.style.opacity=0);
    });
    legend.innerHTML=`已公告專戶人數：少 <span class="sw" style="background:${lerpColor(.15)}"></span><span class="sw" style="background:${lerpColor(.45)}"></span><span class="sw" style="background:${lerpColor(.8)}"></span><span class="sw" style="background:${lerpColor(1)}"></span> 多　·　<span class="sw" style="background:#d3dce3"></span>尚無公告`;
  }catch(err){
    // 無法載入圖資（離線等）→ 隱藏地圖，保留下方縣市清單
    wrap.style.display="none"; legend.style.display="none";
    document.querySelector("#home .map-intro p").innerHTML="（地圖需連線載入；目前改以下方清單呈現）點選縣市查看該縣市民進黨提名人的政治獻金專戶。";
  }
}

buildStats();
buildMap();
renderSvgMap();
loadPhotos();
