(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('七台河市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230903","properties":{"name":"桃山区","cp":[131.015848,45.771217],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@BABCFGBCDE@ABA@CDEDA@CBC@A@ABA@@@A@E@A@A@@@@@CBC@AB@@@@A@@BABC@@BA@AACBE@ABCBA@A@CAAAACAC@@@@@BA@@D@FAD@DCBAHCB@BAD@BA@@AAAAAAECACC@A@AA@@AAAC@C@A@@BA@A@C@@AAA@@AGAEAE@@@CAA@ECA@AACAA@EAAAA@A@A@A@A@A@A@A@A@A@A@@BA@A@@@A@@@AB@@A@A@ABA@AB@@A@@BA@@BAB@@AB@@A@AAA@A@@@AAA@AAA@@@A@@@A@A@@@A@A@C@@@A@@@@@A@@@@BA@@B@@ABA@A@ABA@A@A@@@AB@@@B@B@BA@@B@@@@@B@B@@A@@@@B@@@B@@A@@@@@A@AB@@@@A@@BA@@B@@A@@BA@@BA@@@@B@@A@@@@B@@@@@B@@@@A@@B@BA@@B@@@B@B@F@@@@@@@B@@AB@@A@@@@@ABA@A@A@@@A@A@@@AB@@@@@B@@@@A@@BA@A@C@ABA@@@@@@F@B@BA@@@ABCAA@A@A@@BA@AB@B@@@F@FBD@BB@@BEDGDEF@@A@E@@@E@@@A@AB@@@BABADABCBN@D@AD@B@J@DABB@@BDBFDDDBBBB@BBB@DBBB@BA@@DAB@@ADAD@D@B@BAB@@ABAF@DAHBD@@@BB@B@@B@@BB@B@@@@@@BAB@@BBBBDB@@ABA@@B@@FFBBBD@D@B@@@B@B@B@@B@B@B@JAF@BA@@@@BC@A@ABC@C@ABABC@C@A@@BAB@BAD@HAB@F@B@@@D@BCB@@@@@XFXH"],"encodeOffsets":[[134171,46901]]}},{"type":"Feature","id":"230902","properties":{"name":"新兴区","cp":[130.889482,45.794258],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@ABE@IBA@A@A@@@@A@A@A@@@A@CACAAEE@@@AB@BA@@CAAAAA@@BA@A@@@@A@A@@AA@@@@AAA@@C@GACBE@AB@BA@ABA@C@C@CB@BA@CB@@ABA@AA@CAA@AAAAACCECCA@AA@BA@C@I@ABCC@M@DABABCBA@A@@BAB@@@F@@@F@B@@@FEHCFC@AA@@AAC@E@E@@@ABAB@@AA@A@ABA@@@A@@@AAA@C@CAA@A@EBA@A@AAA@A@A@A@A@A@@@AAC@AAC@@@EDEBABC@A@ABA@KAIBE@A@AAA@AAA@@AACAAA@@BABEFAB@AACCCCCAAAACA@AA@AAA@@AAA@@@BC@@BAB@@A@ABA@A@A@AAA@A@A@A@C@A@A@@@A@A@@@A@@B@@@@A@@@A@A@A@AB@@A@@BB@@B@@BBB@B@BBB@@@A@@@@@A@ABA@@@@B@@AB@@AB@B@@@B@B@@@B@B@@@@@BB@@@@@BB@@B@@@@BB@@B@BBB@@A@@@@BA@AB@@@B@@@B@@@B@@@@@B@@@@@BB@@B@@@@A@@BA@ABA@A@@B@@@B@@A@@@@BA@A@@@@@A@@@A@@@@@AB@@A@A@A@@@A@@BA@@@@B@@@B@@@B@@AB@@AB@@@@A@@B@@AB@@@@AB@@A@A@@B@@@B@@@@@B@@@B@B@B@@@@AB@BA@AB@@@B@@ABA@@@A@CBC@A@ABA@@@@BAB@BAB@BA@@B@B@B@@@BAB@@AB@B@@@BA@@B@@@B@@A@@B@@AB@@ABA@@@A@@@@B@@B@@@@B@B@@@@@B@@@@@B@@@B@@@BA@AB@@A@ABA@@BC@@@ABC@AB@@AB@@@@ABB@@B@BB@@BBB@@@@@@@BB@@@BB@@@@@@B@@BB@@@B@@@BB@@@@B@B@@@@BB@@@@@BB@@@@@@@BB@@@@@@@@BB@@@BB@@@@@@B@@B@@B@@@@BB@@@BB@@@@@@@@B@@@@BB@@@B@RDDB@@F@DBDBB@DBFBHFDBVL@@BAB@BBB@FAB@BBBBB@BCBAAACA@@DAB@DB@@BC@A@ABABB@@BBB@@ABACA@ABABAD@@A@A@@ACA@@ABADC@A@EBA@@D@D@FBB@@BB@@BB@B@BAB@B@BABBBADBB@B@@ABA@ABAB@DBD@BBBBB@DABA@ADABAFABABC@CBABADBDD@B@BBB@@@BBB@DBB@BDFBB@B@@@B@B@DDBBBB@DBB@LBLDB@F@F@B@B@B@BBFDB@@ABA@@BAB@BAB@BA@@@A@@AC@@@C@@DCDCBA@A@ABA@ABABC@ABABABAB@BAB@D@B@B@DABB@@B@@ABA@ADC@CBA@@@@DC@@AAA@@@@A@@@@@A@A@A"],"encodeOffsets":[[134125,46914]]}},{"type":"Feature","id":"230904","properties":{"name":"茄子河区","cp":[131.071561,45.776587],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@A@AA@@AA@@@@A@@@@@AB@@@BA@@B@@A@@@@@A@A@C@A@A@A@A@A@@AA@@@AA@@@@@AA@@@@A@@@@@@@@@@@@A@AB@@AB@@A@@@A@AAA@@@A@AA@@@@AAA@@A@@@@A@@@A@A@ABCBA@A@ABA@A@@@A@A@@@@@@@A@@@@@AA@AA@@A@AA@@AAAA@A@A@CAA@A@A@AAA@@AAA@@A@@@@@@@A@@@A@AB@@A@EBA@CBABA@@B@@@BBBBB@B@@ABA@AB@@@B@BA@BB@@@@@@@B@@B@BBBB@@@B@@@@@@@@@@@B@@@@@@A@@BB@@BBB@@@B@@A@@B@@@@AB@@A@@@A@C@AA@@A@@@@@A@CA@@@@A@@@@@A@@@@@A@AAA@A@AA@@A@@@@@@@@@@A@@@@AAA@AAA@A@@@@@@@A@@@@AA@AAA@A@A@@@@@A@@@@@@@A@AAC@@@@@A@@@@@A@@@@@@@@@CBCD@@A@@B@@@B@BA@@DBD@@@@AB@@@B@@A@A@@@A@@@A@AB@@A@@@A@@@A@AAA@AA@AA@@@@A@@A@@@@A@@A@@@@@AAA@A@A@A@A@A@A@AACAA@A@A@A@A@@@@AABA@@@A@@@AA@@A@A@A@A@ABA@A@@BC@C@C@C@C@C@@@C@C@A@CBABEDABAB@@@B@@AB@@@B@BA@AB@@ABA@@@ABAB@@@@@@@@A@@A@AAA@@A@AA@@@@AA@AAAAAAA@AA@@A@@A@@@A@A@C@C@C@A@ABA@A@ABA@E@A@A@A@@@@@@@@@@@A@@A@@@@A@CAA@@@AA@AA@AA@A@@@C@CAA@@AA@@@@@AAC@A@A@@@A@@@@@A@A@@@@@AA@@A@@@@@A@A@AB@@@@A@A@A@AA@@@A@AA@@@@@AA@@@@AA@AAAA@@A@@A@@BA@@@@AAA@@@@@AAA@@AA@@@C@C@A@E@A@C@G@ABEBA@A@AB@AA@A@CAA@AB@@@BA@A@C@AAA@@@AAA@AA@@@C@A@A@@AAA@CC@@@@B@@AB@@AAA@@AAA@AAAAAA@@A@C@A@@@C@A@A@A@AC@@@ABA@AB@BAFA@@@@@CAAAAA@@A@@AAB@@AB@@AA@AA@AC@AA@@EC@@BAB@@A@@@A@A@AEACAA@AABA@A@@@AA@MEECCAAAA@G@AAA@GAA@@A@@@EBC@AA@AAA@CA@ACA@@@A@A@@@@CBA@@@C@C@@AA@GA@A@@@@@ABA@C@G@C@ADE@A@G@ABCBCBA@@@AB@DA@@BADAFA@@BA@ABABCBA@A@@CC@@@A@@BC@ADC@ABE@C@@@AB@HCA@CAAA@A@A@A@A@A@@BA@@@ABA@C@@@@AA@@@@AAB@BCBA@A@@AC@@@CBC@C@@BAFC@@BAA@@AAA@A@A@AC@AA@@C@CBA@CAEDEDA@EA@@CB@@EACA@AAAA@IBGCCBEAGDAAICIAGEGAABEBC@E@EBA@ABA@ABCB@@@@A@CAA@AA@@A@@AA@@AA@@A@AA@@AA@AAA@C@CAA@AA@@@@@@A@@@A@@@@@@@C@CA@@A@AAAAA@AAA@@@A@@AA@AAA@CAA@A@C@@AA@@AAA@@@A@@@@A@@A@@@@ABAA@@A@AAAA@@@AAAB@@A@@@A@@@@@@@@@@A@@A@@A@@AAAA@A@A@AA@@AAACACA@AA@A@A@@BA@@BA@AB@@CBA@@@@B@@@@A@@@BB@@@B@B@B@B@FAB@@A@@B@@@@@B@@@D@D@D@B@DAB@BAB@B@BAB@B@B@B@@AB@@A@@AAA@@A@@@@@@@AA@@@A@A@A@A@@@@AA@@@A@@A@@@@A@AAA@@@A@@A@@A@AA@@@A@@AA@@@@@A@@BA@A@@@A@@@AAA@AAACA@AA@@AAA@@A@@@AA@@@@A@@@ABA@A@A@@@AAA@AAAAA@AA@@@@@A@AAA@A@A@A@@AA@@@A@@@A@@@ABA@@A@@A@A@@AA@@@@A@AA@@AAA@@AA@AA@A@@AA@AA@AA@@AAA@@@AA@@A@AAA@@AA@AA@@A@@@AAAA@AA@@A@@@A@@@A@A@A@@@A@@BA@@A@@A@@@@A@A@@@AA@@@@A@@A@@@AAA@AAA@AAAAA@@@AA@@@A@AA@@@@A@@@A@@@@@ABA@A@@@@@A@A@A@@@@@A@@BA@@@ABA@@@@B@B@@@B@B@@@@@@A@A@@@@B@@A@@@@BA@@@A@@BA@A@AB@@A@@@A@@@@@@@A@@B@@B@@B@@@@B@BB@@B@@@@B@@@B@@@@@BAB@B@@@B@@BB@B@@@B@@B@@BB@BB@B@@@@@B@@@@@@@BA@@@A@ABA@AB@@A@@@AB@@@@@@AAA@@@@@A@A@A@A@@@A@@@AA@@A@@@@@@@A@A@A@@@A@AA@@A@A@@@A@A@@@@@AA@@A@@@@@A@A@C@@@@@C@A@A@A@@A@@A@@AA@A@A@@@A@@@A@C@A@A@@@A@A@E@A@@@A@AAA@A@A@A@C@A@A@AAA@A@@@A@@A@@@AA@@@@@A@@@A@A@@@ABA@A@@B@@@@@@AB@B@B@BABAF@@AB@@@@@@A@@@@@ABA@A@@BABCBAB@@@@A@@BA@@AA@A@A@@@A@ABABA@@BA@A@@BA@C@@@A@@AA@A@@AA@@@A@@A@@@A@@@@AA@@A@@@A@AAA@@@@A@@@A@@@@@ABA@@@A@C@A@A@AA@@@@AA@@@@@@AA@@B@@C@@BA@A@ABABABA@@BA@A@@@A@AB@@A@A@A@A@@@A@@B@@@@AB@@@B@B@@@B@@@B@@@B@B@B@B@@AB@B@@A@AB@@A@@@AB@@A@@@AB@@@B@BA@@B@@A@@BABA@AA@@AA@@A@@@@@A@A@A@ABA@@@A@@@@@A@@@@@A@AA@@C@CA@@A@A@AAA@AACAA@AAA@A@@@@@A@@@@A@@@@@@A@@@@A@@A@A@A@A@A@@@A@A@A@A@CAA@A@AAA@C@A@AA@@A@@@AA@@@@@@@@@@A@@B@@@@@B@@ADAB@BAB@B@@@@@D@@@B@@@@@@A@A@A@C@E@A@A@A@A@@@A@@BA@@@@B@@@@@@A@@@@@AA@@A@AAA@@@A@A@CBA@C@ABA@C@ABA@C@C@A@A@A@@@CB@@A@A@@@CAA@A@A@A@ABA@@@A@ABA@C@C@A@@@@@AB@@A@@@@B@@AB@BABAB@BAB@BA@AD@@@B@B@B@B@D@D@B@B@@A@@@A@A@A@ABA@ABA@@B@@AB@@@BBB@@@B@@@@@@@B@@@@@B@B@B@B@@@BA@@@ABA@A@A@@BA@@@AB@@DB@BBB@@@@@B@@@@BB@B@B@D@@ABAB@B@@@@@B@@@@@B@@B@BB@@B@@B@@@@@@@@@BA@@B@@@@@@@B@@@BA@@BA@@@@@B@BBFBB@DBBBB@FDB@DB@@F@FBHB@BB@BB@@@D@BAB@@@B@DBDBB@@BBB@D@BDFDBBBBBB@@ABC@ABA@GDABCDC@EBC@@@AB@@@@D@DBBBBB@D@BABAD@BAFBD@BAB@@ADAB@@@B@@A@@BAD@D@@@@@B@B@F@B@@AB@B@BAD@DCBCF@DAB@BCFADEHADAB@@rPtPHBÚ°LLFBBABBBBFBB@B@A@@A@@BA`m@C@@BC@@BAB@B@@@BBDBBB@BB@B@DAB@B@B@B@DB@@B@B@BABA@ABADG@@@@BCBABEBABADADEBABABEBCBAB@B@B@D@FB@@B@BADCBADA@CBADC@ADE@CDCBABA@@D@B@B@BBB@FD@@DB@D@@DBBBFFFDBBHFBBDD@@@@HA@@B@@BB@@BBBB@DBDFDB@@@BB@B@@@B@B@@ADAB@AACEA@@AA@AAAACECC@A@@BABAHADADAB@D@B@LAH@B@DAB@@ADABADADAD@H@F@FAD@DAB@BAB@@AH@B@D@BBBB@@B@@@DABA@@BBDBDB@@@@@AEE@A@@@A@ABCBABCBCBCBC@CDG@AB@BAFAB@@@@@@B@B@B@BBB@DBBBDBB@B@BBB@@DB@BBBBB@BFB@BBDBB@BAB@B@B@@BBAB@BABABABADAD@BBB@D@D@BB@@@BBFBD@@@@B@@A@ADCF@D@D@BB@@BB@BBKBGBA@CBAB@B@D@D@BB@@BBD@B@@@BEDA@@B@@@@BD@@BBDB@BBDBHBD@BDBBB@@BBDBB@B@ABA@CDAB@BGPCPEJET@DDNBBD@hAD@BDBPBNDPBLFRLNRHHBRGNGH@RFJDVFBFCXBD@DRxDDHHPFFDLLBP@HANH^LLBD@DAz@FBBpdFB^DLBHDBL@JFDRDLDJHBD@FGv@FADBFPJLFFB`FJFFDHFHDHDHDAIBK@EBAJ@F@FDHHFFHBHBJCLEZEbERED@H@JBD@F@DCFGFQBGAICCCAKEcMCAAC@E@eBmBMFKBGAKBEFA²eJAHEHODEFAF@JBFFFHFBHBhC^CH@BBFHDDF@L@JAB@BBBFJFPHfPR@P@bMDCBC@CAEIKUMAC@C@CBEBC@AACCEAC@ICCGEAG@EDGHGLED@TAH@FABA@CACCAECCAa@G@_QYKCCACAG@CIMEECACEACACE@AAAEAAMEKKCIECEAC@IBEBG@SICCAM@MIKGCEA@@A@@AA@@@A@@A@@@AA@@@@@@A@@@@@A@@@A@@AA@@@@@AA@@@@AA@"],"encodeOffsets":[[134952,47006]]}},{"type":"Feature","id":"230921","properties":{"name":"勃利县","cp":[130.575025,45.751573],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@B@B@@@B@@@B@BAB@BA@@D@B@P@DABABAACGEOCCEAA@CDE@GDAFATENCJ@ZBJAJCNEFCLMBEBEFCNIFAJAJ@FAFCDEDETIFCDEBA\\MRCTGNCD@LBDBHBDDBDB@B@FA@@@@@@DEFBD@DFB@H@J@H@\\DJ@F@F@DALMFGHCHCF@HBJ@D@D@@ADEBADCDAHIDAB@D@JBDDJFHDD@F@FABADABCFEDAD@H@L@H@HDFDD@D@LAJBFAD@BABC@EGCGCGCGEECIE_EEAKEOIAEBC@EHu@EACIGKCQCEC@IAKGCKA]CEAocAA@EBy@CACKKG]BM@GAOKKECOEGGCCQw@CACDWAEUEICQEG@MHQHGAQGKMEQAKCOAMAOACC@gBC@AACM@CFSFIDOHO@ABADCB@BAA@A@CAAA@@AACA@AACAGAC@ACAAA@@AC@@@@@AB@FC@A@@@AAC@AA@@A@C@C@ABADAB@HALAAAA@@AA@@A@C@CDEBCB@@@@A@@C@EAAA@@A@@A@C@CAA@ABCBCBABABA@ABAAA@@@A@ABA@AAAAC@AEA@AAAAA@ACA@@AA@A@AAAACAA@CAA@A@A@A@A@@@@A@EBABA@@BCH@DADADADADABAD@B@B@@@BFF@B@@@@CACAAA@@ABCB@@A@@@AAAAC@A@G@@BA@ABA@CBC@EBE@G@C@CBCBABCB@BA@CBA@G@KBA@C@A@CBCBGBABAB@@@BDDDFBBBBB@@BB@DFBBA@CB@BA@A@@@A@A@@A@@CACECAA@AA@AA@@AA@@@GB@@@@CCAAGEAAECEEAACA@@@CCA@@ECA@AAA@A@C@@@ABABCD@DCF@BCDAB@DCBABCDABA@@@EAC@A@A@A@ABADAFABABCFCBABABAFABAD@@@@CHAB@BABABA@A@@@CAA@A@A@A@CBA@A@@AAACAAA@@A@A@AB@@AD@@@D_nAB@@@BB@A@A@EAAAAAABEAKKÙ¯GAsOqOWGWE@@@@A@ADC@@@A@E@A@GBC@ABA@AB@@@B@DADAB@B@DAD@B@BAD@@@B@B@B@@@@@B@@B@BB@@CD@@@@AB@DCD@BAB@BA@@@AACBA@A@C@A@ABA@ABABAB@BADAB@BAB@B@BABCDCD@@@D@@BD@@@B@@ABA@ABA@AB@@AB@BA@ECAAA@A@A@E@E@A@KCKAA@CAA@AACA@C@A@A@@@AAACE@AAA@CAA@A@@AA@A@ACCCAABAB@DADABEBABCB@BABCBA@AAAAC@CAA@AB@BAB@BA@A@CAABAAABA@A@ABA@A@@AA@@AA@EAC@C@@@AB@F@BCDAB@BB@BD@@@B@BC@ABAB@BDBAB@BA@AA@@AAAB@B@BAD@@CAA@CB@@DBBBABADA@AAAAA@EBA@AAA@AB@@UKCAGEEACAA@CACAE@@@CAQCA@@@A@@A@@A@@@@@@@@@AA@@A@@A@@A@@@@AA@@@@@@@AA@@A@@A@@@@@@A@@A@@@@@@AA@@@@A@@A@@A@A@@@@@AA@@A@@@A@@AA@@@@@@@AA@@A@@A@@@@@@AA@AA@@A@AA@BA@@@@BA@@BAD@BA@@D@@AB@BAB@@@BAB@@A@@@A@@@A@@@@@A@@@@@A@A@@A@@@@A@@B@@@B@BA@@BA@@@AB@@@@A@@@AB@@A@@@ABA@@BA@A@@@A@A@AB@@ABA@ABA@A@@B@BAB@D@DAB@@@B@BA@@@A@@BAB@@ABA@@@@@A@A@A@@@A@@@@@A@@@AB@B@@@BA@@@@BA@@@AB@@@@@BA@@BA@@@A@@@A@@@A@@B@@AB@@@B@B@B@@@BA@@@@B@@@B@@@@@B@B@@A@@B@@@@A@@@AB@B@BAB@@AB@@@@@@AA@@A@@@@@A@@@@@A@@@A@@@A@@BAB@@A@@B@@@AA@A@AA@@A@@A@@@AA@@@@A@@A@@@@@A@A@@@A@A@@@ABA@@BA@@@A@@B@BAB@@@@@B@@@A@AAA@A@AA@@@AA@@AB@@@BAB@B@B@@@B@@@@@@AB@@@B@B@@@B@B@D@B@B@B@B@BBB@B@B@BAB@@@BA@AD@@A@@BB@BB@BBB@@BDBBBBBDDDDBD@BBAFEBA@AB@BBBD@BB@BBB@BBB@F@JALBB@BAB@D@BAFAFC@@D@BBD@BB@@B@B@B@B@B@B@BBB@B@FAB@B@DBD@B@BB@@B@@@B@BAB@B@B@B@B@DBBA@@B@@A@A@E@@@@B@BAD@B@B@@AB@@@@@@A@@@@BA@@B@B@@@B@B@B@BA@@@@B@@@BA@@@A@@@@@@@E@A@A@@@AB@@A@AB@@@@@@A@@@@@A@@B@@@@A@@B@@AB@@AB@@@@AB@@AB@@@@@BAB@@@@@B@@@@A@@@A@@B@@@@A@A@@@@@AB@@A@A@A@@BA@@B@B@B@BAB@B@BA@@@AB@@A@@B@@@@@B@@@D@B@B@@@B@B@@@B@@@B@BBB@BB@@B@B@BBB@@@BA@@BA@AB@@AB@@@BAB@BAB@B@@@BA@@B@@@B@B@@AB@B@B@B@B@B@B@B@B@B@@@@@B@@AB@@A@@@A@@@@@@@AB@@A@@@@@@@@@AA@@@AAA@@@@A@@@@@A@@@@@ABABA@@@C@A@AAA@@@@@A@@@@AA@ACAA@ECA@@AC@@A@A@AA@@@A@EA@@A@A@A@@@@@C@A@C@AAA@@AA@ABA@A@A@A@@@CAA@A@AAA@A@AAA@@@AAA@A@A@A@AB@@C@A@AAA@A@A@@A@@@AA@@@CAAA@@AAA@A@A@A@A@A@C@@@A@EAA@@@A@CAA@A@@@A@A@@@AAA@@@@@@@@A@@@AA@@AAAA@@A@@@@@@@A@@@@@@@AB@BABABA@@BA@@@@@A@AB@@A@@@C@A@ABA@@BA@@@@@@AA@@A@@@A@@@@AA@@A@C@AA@@A@C@@@AAA@AAAA@@@AA@@@@B@AC@C@@@AAAA@@A@A@@@A@@@@A@@@A@@@AAC@A@@@A@A@@AA@A@ABC@@AA@A@CAA@A@A@A@A@A@@@@@AAAAA@AA@@A@A@@AA@@@A@@A@@AA@@@@@A@@AA@@AAA@@@AAA@@AA@@@@@C@@@A@@@AAA@AAA@@@A@ABA@A@@@@@A@@B@B@B@B@@AB@BAB@@@B@@AB@@@@@@A@@@CB@@A@A@@@ABA@@@@@A@A@@BA@@@A@A@@B@@A@@BABCD@BABA@@B@@@BAB@B@@A@@@ABA@@@@@@@A@@@@@@@@A@@@A@@@AAA@@AAA@@AA@@A@@AAAAAA@A@@@@@CB@@ABA@@@@@@@@A@C@A@E@C@@@A@@@ABA@@BA@AB@@CBAB@BA@@BA@@@A@A@A@A@@@A@@@A@CBA@A@A@A@A@A@@@A@@AA@@@C@@@C@A@A@A@@BA@A@@BA@A@@@A@@@A@@A@@A@C@A@@@@@@@A@@AA@AA@@AAA@A@@AA@@A@@@@@@@AA@@@@@@A@@@@@@A@@AA@A@AA@@A@@@@@A@@@@@A@@@@B@@A@@@@BA@@@@@A@@@A@@@A@A@@BA@A@@@A@@@@A@@A@@@@A@@@AA@@A@@A@@@A@A@@@ABA@@@ABA@@B@@@@@BB@@BBB@@@B@@@@@@@@@BA@@@ABA@A@AB@@A@A@@@A@AAA@A@AAA@AA@@A@@@@@A@@@A@@@@B@@A@@@AB@@A@@@A@@@@@AB@@@@@B@@A@@@@@@B@@B@@B@@@@A@@B@@AB@@@B@@@B@@BB@BBB@B@@@@@@A@@@A@@BA@@@@B@@@@AB@@@@@@@@@@@@A@AAA@A@A@@A@AAAA@@@@@A@@@@B@B@@AB@@AB@@A@@B@B@@A@@BA@@@@BB@@@@B@@@@@B@@@@@@@@A@@BA@C@@BA@@@A@@B@BA@@BA@@B@@@@@B@@@@@@@@@@@@@@A@A@A@AAA@@@AAA@@@A@@@A@A@@@A@@@@@@BA@@B@@@@@B@@A@@BAB@@@B@@A@@@@@@@A@@A@@CAAAA@@@AAA@@AA@@@@A@A@@A@@A@@@@@@@@@A@@@@@@@@AA@@@AA@@@AA@@@A@@AA@@@@AA@@AA@@@A@@@A@@AAA@AA@@AA@@@@@AB@@@@@@A@@@@@A@@@A@A@@@AA@@AA@@AAAA@AA@@A@CA@@CAA@A@A@@@A@A@@AA@@@@@@@@@@@@A@@B@BA@@B@@@@A@@@@@A@A@@@A@@@@AAB@A@@A@A@@AA@@A@@@A@A@@@A@A@@@A@@@A@A@@@A@@AA@@@A@@@C@A@@BA@A@A@A@A@A@A@@@A@@@B@@A@@@A@@AA@A@@AA@@A@@@AA@@AA@@@@@A@@@@@@@@A@@AC@@@A@@A@@A@@@AA@@@@@A@@@A@@B@@AAA@A@@@AAC@A@@@A@A@@@@@AAA@@@@A@AAC@@@A@A@A@C@C@C@C@CAC@C@A@A@C@A@A@ABC@A@C@A@A@CBA@A@A@@@ABA@C@@@A@A@@@AB@@A@@BA@@@AB@@A@@B@@A@@@A@ABA@A@ABC@A@@BA@@@@@@@A@@@AB@@A@A@A@@@A@@@A@A@A@A@AB@@A@@@A@A@@@@@A@A@ABA@@@C@@@A@A@@@@BA@@@@BAD@@AB@@@@A@@@@B@@@@@@B@@@@BBB@@@B@@AB@@A@ABABA@@B@@@@A@@@@@BB@@B@@B@@@@@@@BA@@@@BA@@@@@@BA@@BA@@@AB@@ABA@@BA@AB@@@BA@ABA@@B@@AB@@ABA@AB@@A@@@A@@@@@A@AAA@@@A@@@A@@@@BA@@@AB@@@@A@A@@@A@@B@@@@A@@A@@B@@@@@@A@A@C@@@A@@@AA@@@@@AA@@A@A@A@@@A@@@A@CAA@AAC@CAA@CAA@EAC@AAA@@@A@AAA@@AA@AA@@A@@@A@AAA@A@A@AAA@C@AAC@A@AAA@CAA@A@C@AAA@@@AAAA@@@@A@@@@@@@@@A@@@A@@@@BA@ABA@AD@BABA@@@@@AB@@@@A@@BA@A@@B@@@@@@@B@B@@@@@B@@A@@B@@@@A@@@@BA@@@@B@@@@A@@B@@@@@B@@AB@@AB@B@B@@BB@@@B@@@@@@@@@@A@C@@@@@A@A@A@ABA@A@@BA@@@@B@@AB@@@B@@@B@@@@@@A@@@@@A@CBA@A@A@@@AB@@ABAB@B@@A@@BAB@@AB@@@@ABAB@@@@A@AB@@A@C@@@A@@BABA@@BAB@B@B@B@B@B@@@B@@@B@@A@AB@@ABA@A@C@ABA@GBEBAB@@ABA@AB@BAB@@@BAB@BA@@B@@@@@B@@@@@@@BB@@@@@@@AB@@C@AB@@A@@@@@AA@@A@@@A@@@@@AB@@A@@BA@@BA@@@@@A@@@AAA@C@A@CA@@A@C@@@@@@AA@AAAA@AA@A@@A@@@@@@@@@A@@@C@@AA@@@@@@@@AAA@AAAA@@A@AAA@A@AAA@A@@@AAA@@@@A@A@@@A@@@A@@A@@@@AA@@@@A@@@A@@@A@@AA@@A@@@AAA@A@C@@@@@A@@@@@@@@@@A@A@@@AAA@AA@@A@@AA@A@AAA@@AA@@A@A@AA@@A@@@AA@AAA@AA@@@BA@A@@@@@AA@@AA@@AA@A@@AA@@A@@@C@A@A@AB@@A@@@A@@@@@@@@@@A@@@@AA@@@A@@AA@@@A@@@AB@@ABA@AB@@A@A@ABC@ABC@C@CBA@A@A@A@A@@@@@A@@@@@A@@@@@A@@@AB@@A@A@A@@@A@A@A@A@AB@@ABA@@@@B@@@@A@@B@@AB@@A@ABA@A@ABA@A@ABA@A@ABA@@@AB@@@@A@@@A@C@A@A@@@@BA@@@@@@B@@AB@B@BAD@B@@AB@@@@A@@B@@@@AB@@@@@BAB@B@@AB@B@BA@AB@B@@@B@@@@@D@@@B@@@@BB@@@@@@A@@@@@@@@@A@AB@@A@ABA@@BA@AB@@AB@@@BA@@B@@@BA@@B@@@@@B@@@@@@@@A@@@@@@@AAA@A@A@CA@@A@@@AAA@@AA@@@A@AAA@@AA@@@@@@@@@@@@@@A@@@@B@@A@E@A@A@@@A@@AA@@A@@@AAA@E@C@A@@@A@AB@@A@@@A@C@C@A@@@A@AAA@A@A@@@A@E@A@A@C@EAG@A@A@AB@@A@@B@B@B@D@B@@@B@@@B@@@@@B@@@@@BBB@@@@AB@@@BABABA@@@@BA@@@@@@@@B@@@@@BB@@B@@@B@@@B@B@@@@@B@B@@BB@@@B@@@B@BB@@B@@@BB@@B@@@@@B@B@B@B@@@B@@BB@B@B@@@@@@A@AAA@C@AA@@@@A@@@@@@@@@A@@@A@A@@@@@A@@@AA@AA@@AAA@@A@@@@@AA@@A@@@A@@A@BA@@@@@A@@@@@@@@@A@@@AAA@AA@@AA@@AAA@AA@@@AA@@B@@@BA@@B@@A@@@@@AB@@AA@@@@AB@@@@@@AB@@@B@BA@@B@@@B@B@@AB@@A@@@A@@@A@@B@@@@@@@@@B@@@@A@@BAB@@@B@@A@@B@@@B@@@@@@AB@@A@A@@@A@A@C@BB@@BB@BBB@B@BB@@B@BB@@@@B@B@@@B@@BB@@@B@@B@@@BB@@@@B@@BB@BB@@@B@BB@@B@@@BB@@@BB@@DB@@BB@@@@@@@@@B@@@@@BBB@@@@@@DBBB@@@BB@@@@B@@B@@@@B@B@@BB@@@B@@@B@@A@@@@BA@@@@@@BA@@@@@@BB@@B@@B@@BB@@@@B@@@@@B@@@@A@@@@@BB@@@@@BB@@B@@B@B@@BB@@@BB@@B@@@@B@B@@@B@@@@AB@BA@ABA@AB@@@@@@@@@@@@@BB@B@BBBBB@DBBBB@@BDBBBBBB@@@@B@@@BA@@@@@ABC@@@A@@@AB@BADADAD@@ADADAD@BAB@@@B@@@@@B@@BB@@@BBB@BBB@BBB@D@BBB@@@B@@@@@B@@@@@@A@@BA@@@@B@@@B@@@@@B@@@B@@@B@@@BB@@@@B@@@BB@@@@@@BB@@@BB@@BBB@@B@@@@@@@@A@@@AB@@A@@BA@@@AB@BA@@B@@AB@@@B@@AB@BA@@@@B@@@@A@@@A@@@@@AB@@A@@@@@A@A@@@A@@B@@AB@@@@@@@B@@@@B@@@BBB@B@@@BB@@BBB@@@@BB@BBBB@BBB@@@@B@@@BB@@B@@@@@BB@BB@@BB@@BB@BB@@B@@@@B@@@@A@@@ABA@@@@@A@A@AB@@A@@@@@@B@@@@@@@@@B@@@@A@@@@BA@@@@@A@@B@@ABA@@@ABA@A@@@A@@B@@A@@B@@@@@@@@@@@@A@@B@@A@@@@B@@AB@@@@AB@@@@@@@@@B@@A@@B@@AB@@@@@@@B@@@@@@@B@@@B@@@@@B@@@@@@@@@@B@BB@@@@BB@@@@@B@@@@@@A@@BA@A@@@@B@@@@@@@B@@@@BB@@B@@@@B@@@B@B@@@@BB@@@@@BB@B@@@BB@@BBB@@@@@@@@@@B@@A@@B@@@@@@@@@B@BA@@@@@@@@@B@BB@@@@B@B@B@BAB@B@@AB@@@@@@@@@BB@@@@BB@@B@@B@@B@@@@@@@@@@@@@@BA@@BAB@BA@@B@B@B@@@@@B@@@@@B@@A@@@A@@@@BA@@@@B@@@@AB@@@@AB@@@@@@@B@@A@@BA@@BA@@B@@@BA@@BA@@@A@@@A@A@@@@@@BA@@@@B@@@@@B@@@@@@AB@@@B@@@B@B@@@@@B@@@B@@@B@@@@@B@@@B@@@@@@A@@@@B@@@@@@@@A@@@A@@B@@ABA@@@@@@@@BA@@@A@@@A@A@A@A@A@A@@@@@A@@@A@@@A@@@@@@@A@@AA@AA@@@@A@@@@@@@@@AB@@@@@B@@@@A@@B@@A@@@AB@@AB@@A@@@@BAB@@@@@@A@@@A@@@A@@@AB@@A@AB@@A@@@@B@@@@A@@B@@@@@@@@A@@B@@A@@@A@@@@@AB@@@@A@@@A@@@A@@@@@A@@@A@@@AB@@@@@@A@@@@@A@@@ABA@A@@@AB@@A@@B@@A@@@A@@B@@A@@@@@A@@@ABA@@@@BA@@@@@@B@@@@@@@@A@@@@@@@@BA@@@A@A@@@@@@@AB@@@@@@@B@@@BAB@@@B@@@@AB@B@@@@@@@@@B@@@@@@@@@B@@@B@@@@@B@@A@@@@@AB@@@BA@@B@@@B@@@@@BA@@@@B@@@@@@@@@@@@BB@@B@@B@@@@B@@B@@@@@B@@@@@B@@A@@BAB@B@@@@@@@B@@@B@@@B@@@@@B@@@B@@@@@@@BB@@@@B@B@@@@@B@@A@@@ABABA@AB@@AB@@@B@@A@@B@@AB@@@@@@BB@@@@B@@@B@@BB@@BB@@@@@@@@@@B@@@BAB@@@B@BA@@@@@@B@@@@@@@B@B@B@@@@@@CB@@A@@B@@@@@@@@@@@@@B@@B@@@BBB@@@B@@BB@@@@@@BB@@@@@BB@@@@@@@@@@@B@@@B@@@BB@@@BB@@@@@B@@@BB@@B@B@@@@@B@@@@@@@B@@@B@@@BA@@@@BA@@@B@@B@@@B@@@@@@@B@@@@B@@@@@@BB@@@@B@@B@B@@@@@@@B@@@@@@@B@@B@@@@A@@BABA@@@@B@@@@B@@BBB@@@BBB@@@B@B@B@@@@ABAB@@AB@@AB@@@BA@@B@B@@@B@B@@@@@BB@B@B@B@FB@@B@BB@@B@@B@@BB@B@@BB@@@B@B@B@B@B@B@B@B@B@@BB@BBB@B@@@B@B@@@B@B@B@@AB@@@B@@AB@B@@A@ABA@A@ABA@@@A@AB@@A@A@A@ABA@@@AB@@@@@B@B@@@BB@@BBB@@@@B@@@@@@@@B@@@@@@@@@B@@@@@@@@@BB@@B@@@B@@@B@B@@@D@B@@BB@@BBB@B@BBD@DBD@@@D@FBF@D@B@BA@ABC@A@@@@B@D@B@D@BBD@DBFBDB@@D@@@@@BBB@@@BBB@BBFBB@BBB@BB@@BBB@@BBBB@@@BBB@B@@@B@B@@@B@B@@@BAB@BB@@B@@BB@@B@@BB@@B@BBB@BBB@@BBB@@BB@@@B@@BB@@@@BB@@BBB@@BB@@BB@@@BB@@BB@@@BB@@@@@BBB@@@@B@@@@@@@@@@B@@@@B@@@@@@FBDBB@@@DDBDBFB@F@F@ZHDBB@@BB@@@@@B@@B@@@@AB@@ABA@@B@@@@@@B@@@@@F@B@@@@BBABAB@DA@@B@@A@A@@BAB@BBB@@@AAAA@A@@@@B@B@@@B@@B@@B@@@B@BB@@B@@@@A@@@AAAB@@@@@@@B@@B@@@BB@B@@@@AB@AA@@@A@@@@B@B@@@BB@@B@B@B@B@B@@@B@@A@@@@B@@@@BB@@@@@@A@@BA@@BB@@@BB@B@@A@A@@@@A@@@A@@@@@@ABA@AB@B@B@BA@@B@B@@@B@BB@@BB@@@@B@BABA@A@@AA@@@A@@@A@@B@@@B@@B@BB@@AB@@AB@B@B@@A@@@@A@@A@@BA@@@A@@@AB@B@@@BBB@@@DA@@B@@@@@DAB@@@BBB@DBB@@@B@BA@@B@B@BAB@@@BBB@@BB@@@B@DAB@D@@@@@BB@@BB@@B@BAB@BA@@@AA@@A@@BA@@B@B@BB@@@@@@ABA@@@BBB@@B@BB@B@@@B@@AB@@@B@@@D@B@@@B@@AA@@AB@@AB@BAB@@@AC@A@@@@B@B@BB@BB@BAB@@AAA@@@AB@@@BB@B@@BB@@B@BA@@AA@AB@@@B@BA@@@A@@@@BAB@BBD@BB@@BABA@@B@BBDB@B@@@@CB@BBB@@B@B@@AB@@@BBB@@AB@@@B@BA@@@@@@AA@A@AB@BAB@B@B@@@B@B@BB@@B@BAB@@BB@B@@@B@@AB@@AB@B@@B@@BBB@@@@@B@@A@@BA@@B@B@@BB@@@@@B@@@B@B@@A@@B@@AA@AA@@@AB@@@B@@@BB@@@@B@@@AA@@B@B@@@@A@@A@@A@@BA@@@@B@@B@@@BB@@@BA@@@A@@BA@@B@B@@BBAB@B@B@B@B@@A@@@@A@AA@@@@@@@@BA@@@@@AA@@A@@BAB@@@DBBBB@B@BAB@B@@@BB@@@B@B@@@@@BB@@A@@BA@@B@@@@@@B@@B@@@B@B@@B@@@@A@@B@@B@@@BA@@@@B@B@@@AA@@@@B@@@B@@AB@AA@@@@AAC@@@A@@@BA@B@@B@@@BAA@@AB@@A@@B@@BBB@BB@@@B@@A@@B@@@@@@A@@@A@@@A@@@@A@@A@@@@D@@@BAA@@@AAA@A@AA@@@@B@B@@@@A@@@@AA@@@@D@BAB@B@@AA@A@AA@@AA@@B@@AD@B@@@@@BAA@AAAA@@BA@@B@BBB@B@@@BB@@D@B@@A@A@@@AB@B@B@D@@@B@@B@@B@@@BAB@B@BAB@@@@AA@A@@AB@@@B@BAB@DABA@@@@AA@@AA@@@@@@BAD@@@@AB@@AB@@@@B@B@@@@B@B@B@B@B@BB@BB@B@B@@@@@@AA@AA@@@A@@@AB@@AB@@AB@D@@@BB@@@B@BB@B@@@B@@A@AB@@@B@@@@B@@@BAB@@@B@@@@B@BA@@BB@@@BB@@@B@BAB@B@B@BB@@@@BA@@@A@@D@@A@@AA@@@@@A@@DB@@B@@A@@BAB@B@@@BAB@@@B@@B@BB@@@B@BA@@@AB@BB@@BA@ADC@A@@AA@@@A@@B@@AB@B@@AA@@AABA@A@@@AA@@BAB@@@B@@AB@@@BABB@@B@@BB@@@BAD@DADAB@B@B@BA@AB@B@@ABAB@B@BBB@BBB@@AB@AAAAAA@A@A@AB@B@DADAB@D@BBB@B@BA@@B@@@B@@BB@@@@A@A@@B@B@DB@@@B@B@@B@B@@@BAB@AA@@BAB@B@@A@AAAA@@A@@BA@AB@B@@BB@B@@@@AA@@A@@B@B@@@BA@@@AA@@@@@ABA@AA@@BA@AAA@@AAA@BAB@BB@@B@B@@A@A@A@AB@B@B@B@@@BC@AB@B@@AD@@@@@@@AAA@@@AAB@@AB@BAD@D@B@BAB@@AB@B@AB@B@@B@B@@AB@B@D@B@@A@@@@@@A@@A@@BA@@@AA@A@@AA@AAA@@@@A@@BAB@D@B@BAB@D@B@B@D@D@B@B@B@@@@A@A@@B@B@D@BB@@B@BAB@BAB@B@BABCB@@@B@@B@B@@B@@@BAB@@AD@BBB@@@@A@AA@@AB@B@B@@@BABABAB@B@@@@AB@@AB@B@B@B@B@B@BAB@@A@A@CB@@AD@BA@@BBBB@@B@B@@@BAAA@@AA@@@A@@B@B@BBB@@AB@BAB@@B@@@@AB@@BBB@D@B@D@BA@@@A@@AA@A@@@AB@B@BAB@B@AA@@@@C@@@A@A@@@@A@AB@BAB@BA@AA@A@AA@@A@BA@AB@BAB@@@B@@AB@B@B@B@B@B@D@FBB@@@DAB@B@BBB@B@@@B@@B@BBBBBB@@AB@@AB@B@B@B@BB@@BBBAB@AA@A@@BA@AB@@@BB@@ABB@@@B@@@@@@A@AB@AA@@A@@A@@B@B@DA@BB@B@@B@B@B@@@BABB@@B@@@B@@@B@@@BAB@BB@@BB@@B@@B@BDBBBB@@@B@BB@@@@BBB@@BD@B@BA@@D@BA@AB@@@@AB@@A@@@@@@B@@@@A@@B@@A@@B@B@@@@@B@@@@@@B@@B@@@B@@A@@BA@AB@@@B@@A@@BA@@@A@@B@@BB@B@B@B@@@BAB@B@BB@BBBBB@BB@@BBB@DBBB@@BBB@B@B@B@B@@@B@B@B@DBB@@@B@@@B@B@B@@@DBB@H@J@H@D@BAB@B@B@B@@@BA@@BAB@BA@@B@BA@@B@@A@@@@BA@ABA@@B@@@@@B@B@@@B@B@BAB@@@@@@@B@B@@@B@B@@BBB@B@BBB@@@B@@@B@BB@@@BB@@BB@@B@@B@@B@BBBBB@BBBBB@@B@@@@@@@B@@AB@@@@@@@@BBB@D@BAB@@@B@B@D@B@BA@@@BB@@@@@B@@BB@@@@B@@BA@@B@@@@@@@B@@@@@BB@@@@@@B@@@@@BA@@B@B@B@B@@@B@@@@@@@@B@@@@BB@@@@BBB@@BB@@@B@@@@B@AB@@ABA@@@A@@@@B@@@B@@@B@@@B@B@B@B@B@B@@@@@B@@@B@B@B@@@B@@@@@@AB@@@B@@@@@@@BB@@@@B@@@@AB@@@@@B@@B@@@@B@@BB@@@@BB@@@@BB@@@@BB@@@B@B@BB@@B@@B@@B@@B@@BB@BB@@@BB@@@@DBBB@@@@B@@@@@B@@@B@@AB@@@@@B@@AB@@A@@B@@@BA@@@@BA@@@A@@@@@A@BB@@@B@@@BB@@B@@@B@B@B@@@@@B@@B@@@@BB@@BB@@@@B@@B@@B@@@B@@@@AB@@@@@B@@@@@BB@@B@B@@@@@@@B@@BB@@@B@@@@BB@@@@@B@@BB@B@B@B@@@B@B@@@B@@@@@BA@@@@@@@AB@@@@@B@@@@@BA@@B@@@BA@@@@@@BB@@@@@@B@@@BBB@@BB@@@BB@@@@B@@@@@BB@@B@@@B@@AB@@@@@B@@@BA@@B@@@B@@@B@@@BA@@B@B@BAB@@@BAB@@@BA@@@@@A@@@A@@@AB@@AB@@@@@B@B@B@@@B@@@B@@@@@@AB@BA@@B@@AB@@@B@@@B@B@B@@@@@@@BB@@@@B@@@BAB@@@B@BAB@BAB@B@BA@@B@@@B@@@@BB@@@@@@@BB@@B@@@B@@B@@B@@@@@@@BB@@B@@@@@B@@@@@B@@B@@@@BB@@B@@@@@@@B@@B@@@@@@AB@@@BB@@@B@@BB@@@B@@@@BB@BB@@@@B@@@BB@@B@@@B@@@B@B@B@@AB@B@@@@AB@@@@@B@@@B@@BB@@@@@B@@@B@@@B@@@@@BAB@@AB@@A@@B@@@B@DBDBD@DBB@B@B@B@B@@@B@@@B@@@BA@@B@B@B@@@B@B@D@D@BAF@B@B@BAD@BA@@B@B@B@@@B@B@@@B@@@@BB@@@@@@@@BBAB@BB@@B@BBBAB@B@F@B@B@B@@@B@D@H@B@D@@@B@@BB@@@BD@@BB@@@BBB@BB@@BB@BB@@@BB@@@@@@B@@@B@B@@@B@@@B@B@B@@BB@@BB@@BBBB@@@@BB@@@BBB@@@BA@@B@B@BA@@@BB@@@B@@B@@@@BB@@BB@@@@@B@@@B@@@B@B@@@B@B@@@@BB@@@@@@B@@@@@BA@@@@B@BB@@B@B@@@@BB@@@B@B@B@BB@@@@B@@B@B@BB@@B@BBBB@@B@@@BB@@@@B@@@@B@BB@@B@@@B@@@@@B@@@B@@AB@@AB@@A@@B@@A@A@A@A@@@@B@B@B@@@@AB@@B@@BBB@@@@BB@@@@A@@B@@@@@@AB@@@@@@@@AB@@@@@B@@@@@B@@DBBBB@DBB@@@B@B@B@BB@B@@BBB@B@@@B@@A@@@@@@@@BA@@B@BA@@@@@AB@@A@@@@@@B@@@BB@BBBB@BBB@B@DBB@D@B@B@B@BB@BB@BDB@BDBBBB@@@B@@@@AB@@AB@@@@@BB@@@BBBB@BB@@B@@@@@B@@@B@@@@@B@@@BBB@BBB@@B@@BB@BBB@B@@D@D@B@@@B@B@DAB@DADABABC@ABA@A@A@A@CAC@A@@@@F@@@DADAB@BA@AB@B@DABAB@BAB@B@B@@@B@B@B@B@@@BA@A@A@ABA@@BABAB@B@BA@@BB@@BBB@@@B@@@BA@@BA@@B@@@@BB@B@@@B@BB@@BB@D@BBB@B@@BBB@@@B@BAB@@@B@@BBBB@@@@@B@@BB@@B@B@@B@@B@BA@@B@D@B@B@B@BA@@B@@@@@@@BB@@BBB@B@B@@@B@B@@@B@@@@B@B@B@BB@@B@BB@BB@@B@B@@@@B@@@B@B@@BBBB@BB@BB@BBB@BB@@B@B@B@@@B@@@BA@@B@B@@@BA@@@AB@@@B@BA@@@@BA@@@CB@@A@A@@@@@A@@@@@@BA@@@A@@BAB@@@@ABA@@@ABA@@@ABAB@@A@@@ABA@A@A@@@A@@@@BA@@@A@@B@@@@@B@@BB@@@BA@@B@@BB@@B@BBB@@B@@BB@@D@B@B@B@B@@@@B@@@@@@@B@@ABAB@B@@@@@B@@BBB@B@@@BBB@@B@B@B@B@@ABA@@B@@AB@@@BB@@@BB@@BB@@B@D@B@@@@@@B@@BBBB@@BBBBB@BBB@B@D@B@B@B@B@BAB@B@BAB@D@B@B@B@@@D@B@@@BBB@@BB@B@@@B@@@BAB@@@@@@@B@B@B@B@B@@@B@BBB@B@B@BB@@BB@@B@B@@BB@@BBB@@BB@@@@B@B@@@BA@@BA@@BA@@B@BAB@B@B@BB@@BBB@BBD@@BD@BB@@B@B@@@B@B@B@BB@@B@BAD@@@B@@@BB@B@B@@BD@BA@@BB@@BB@@@B@B@D@B@B@B@BBBBBBB@BB@@@B@@@@@B@BB@@BBBBBB@DBBBB@B@@B@@B@@@@@@B@@@B@@@BAB@B@B@@@B@B@@@BAB@@@BAB@@AB@@@B@@@BB@B@@@@BA@AB@BA@A@@@ABA@@@A@@@@@B@FDB@@@BBBBBDB@@BB@@BB@BBB@@B@@BD@B@@@BA@@@@BBB@@B@BBB@H@B@@@B@B@@AB@B@@@BBB@BBBBBBB@BB@@B@B@BAB@@AB@@AB@@A@@BABAB@@AB@B@DABAB@@AB@B@@B@@@@@B@@@@@B@B@B@@@BB@@@BBB@B@@@B@@@@@@@B@@@B@@BB@@@B@BB@@B@@B@@@@@B@@@B@@B@@@@BB@@@@B@@@B@@@B@@BB@@@@B@@@B@@B@@B@B@B@@BB@@@@B@@@@"],"encodeOffsets":[[134425,47448]]}}],"UTF8Encoding":true});}));