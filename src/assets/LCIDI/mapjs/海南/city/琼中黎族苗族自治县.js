(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('琼中黎族苗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"469030","properties":{"name":"琼中黎族苗族自治县","cp":[109.839996,19.03557],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@AA@A@ABAB@@A@AA@@@A@@@A@@A@A@ABCBCAE@GEGCEIEIEOBGAMKIE@CA@@AAAACAAAA@AAACAADADA@CAC@E@C@@AOACAC@CDECA@CA[AE@ABCPQBAF@F@D@BABADCBADAB@@@DDN@NAHCFELMHKLMDEJIHGH@XBLBLANIPENKLMHM@GAI@I@EHM`DHBb@BA@@@A@@@@BBB@@@BA@A@AB@DA@@@@@@@A@@A@@A@@@@@@@A@A@@B@B@BA@@@@@ABCBAB@B@B@@@B@B@B@@@BB@@@AB@B@@AB@BAB@BBB@@@DAB@D@D@DABB@@@BB@B@B@BAAAAEBE@ABADCLGHGHO@IBEFGLGRBFBRFNBT@P@JCF@LIBGDQFQAMBODQBIBIAOAE@@@IEEBIDIBEHA@ABEDCFCFADABC@CJMDADAF@D@BABABABA@A@@AAAAA@@CAEAC@ABCDABA@A@ABA@A@ABA@A@AAAAAEEAACCAAAEBG@GEEIIGEMIe[IGEOBS@GCKKKGCOEKEGCSGWIMEEIJINQLUNKHGHGJOBKHQFGFEFMAIIKIKGEAAA@MCAAA@AE@CAC@A@A@ADCBAAC@@C@C@AAEECEACCGACCCA@C@A@GHCBA@A@C@A@AAAEAEAAECCAAA@CBC@A@AAC@E@A@@AAKAQEE@E@CBCBCDCFEFEBCDAB@H@BCFABCDA@CB@@@FCFADCB@@A@A@CAA@ABABGFADCB@@A@A@C@C@@@A@A@CAC@C@A@IAE@CACAAAAAACAAAAC@A@A@C@@@AAAA@@AAA@A@A@A@A@@AAAEIGGGEAAAACACA@A@@AC@@@AAAA@ABCBEJCHAHABABA@CBAACAEICC@AA@A@ABC@A@A@@A@@AC@CACAAA@AAA@AA@@ACEGA@AAAAAAA@C@CBIBE@C@CAA@AACAA@G@A@ABEFGJGL@@A@A@A@AAA@AB@BEN@LAD@B@D@BBD@D@BABABABAD@DADAHEFCBEFIFEHA@A@A@E@C@@@@BEFAB@DCBAB@BBBADAFCF@F@@ADA@CDCDA@A@E@ECK@KAAAC@EBEBGHGH@BA@CBA@CDCDA@GBC@AD@@@D@D@B@F@DBJ@DBH@D@DAHADABEFCDCDEBABGJ@BAF@B@BBFDDHFFHDBDBD@D@FAB@DBDBHHFDDF@B@B@BAB@@]DCBC@@BCFABCBCB@@C@@AA@EAAA@BA@ABCDCBCBC@ABA@AACAAAA@@@A@C@A@@BA@@BA@@AA@AC@AA@@AA@@@@@A@@AA@@@AAA@A@@AC@@@AA@AAAA@A@A@A@A@CBCBC@A@AB@@M@AA@@A@@A@AA@@@AAABA@CDCBGD@@E@IA@AA@@C@EA@@AAAA@I@EBICA@AA@@A@A@@@AB@FADCFAF@B@@ABE@A@A@A@E@G@E@CBADCBAHAD@D@FABA@CBA@CBOFGB@@CDELCF@D@B@P@DAFCNAB@BEFCDADABABA@AB@D@BAD@BCBCDAB@B@B@H@B@D@DBB@BDBBB@@@@@BABEBCFAFAHAD@B@BJFFFDBFBD@BBB@@H@FBHBF@RDFFFDDHDJBF@JAPEbQNGHEF@FBFBDBDDDH@FADALEJ@D@FBDDDDBHDFDDBDBBD@BF@B@BAD@B@DBD@HBBBDDDBBBD@DBBBB@@B@HAF@FBFDFDHFFDBB@F@H@H@BADCHELG@@BBLNLPBB@B@BADAB@D@DBHBF@D@DABCBEDIFADCHA@@DADAD@@BDBHBF@BBD@B@DBBBBBDDB@B@B@BBD@B@D@BBBBD@@BBDDBD@H@@BBDBBDBBBF@J@JBH@H@L@FAFAB@BAF@DGTABABCD@BBHBHBFDFDBBDBDBFFJDHBJBF@F@H@FALA@@B@@@@BBBBB@@B@@ABAB@@AB@DABAD@D@D@B@@A@A@A@AAAACA@@A@@B@@@DABCD@B@BBBBB@@@@EB@@E@C@AAABE@A@E@GAA@A@AD@BGBC@A@AAAA@A@@A@@@@@AB@@A@ABA@@@A@@@C@@@C@A@AAAAA@ABGBCB@FADBFBDDH@BBBAB@@ABABADABAB@BBF@D@F@BDD@B@B@BAB@@ABCBABAB@B@B@DBB@BDDD@DBJDDBB@B@B@FCD@D@D@D@HDBBDBBBDBHBB@@@D@DBDBB@B@HBF@BA@@B@DCJID@@AFAD@HCDBDBBDD@DBB@B@D@DBB@@@B@@@@AD@HEB@@CDAB@JAH@BBD@B@DADAF@F@@@BA@ADABC@@FG@@@@@ACE@A@@@@BABADCDE@AB@B@B@B@FAB@@@@ABA@A@A@@D@DABB@@@@@B@B@@@FBDB@DDB@@@DBBABBD@BBBBBDFD@@B@B@FBB@@ABBD@@BDBB@BDB@BBHBB@B@BABABADADCBAB@B@BABA@ABCB@@@B@BBBD@@BBBB@@BAD@B@B@BB@BA@@BAB@@A@A@ABADEBABA@CBA@@B@B@DBD@BB@NDDBBBBBBBBD@B@@@B@@@B@BA@@BBDB@BBB@BAB@BC@@@AEEAA@@BA@AD@BABBBAB@BADCBABA@C@A@C@A@AAE@A@@BAF@B@@ABCBADC"],"encodeOffsets":[[112514,19853]]}}],"UTF8Encoding":true});}));