/* BRIO v48 maintenance map
 * V48 evidence map: V47 inventory appearance + monochrome startup confirmed by user; meteor,
 * indicators, cosmetics/invisibility and chest hiding retain prior explicit proof. No recurring flags.
 * New/shared warning thresholds (including scraps/grappler) and slot-count removal need a scoped live check.
 * Contents must eventually be visible above every detected container, independent of proximity.
 * Current client/source/packet evidence has no authoritative loot list; no fake label/popup/NONE/classifier.
 * See docs/v48-status.md for proven/changed/unresolved/planned distinctions and test dependencies.
 * A. Home UI/settings/custom cache; B. native resources/cosmetic adapters;
 * C. player/world discovery; D. HUD acquisition and remote inventory presentation;
 * E. arrows/warnings; F. ordinary-Play epoch lifecycle; G. passive source/payload evidence;
 * H. local feature drawables/monochrome; I. scoped scene/meteor retention; J. startup/destroy.
 * Search the stable "BRIO: helperName" anchors for targeted edits. Tests live in tests/regression.cjs.
 * Do not edit the vendored Acorn parser below: it parses source DATA and has an external MIT notice.
 * Native key guide: ë.{É,Ä}=position; âè/ÉE=child arrays; À.{src,ÁÄ}=image resource;
 * éa/Eââ=native draw entry points; Åé=weapon slots incl pickaxe index0; ÈÆ=selected slot;
 * áAæ=loaded ammo by slot-1; åæ=reserve ammo by type; ÊÃÄ=material counts;
 * åÈ/Â$=health/shield; Àâ=world subtype; ÀËá/âëä=local gliding ticks/max ticks.
 * Protocol x/y/z=create/update/remove. Observe native decode return; never encode/send/mutate packets.
 * Preserve v45 display-size/X conventions separately from v46 gun-slot capture and meteor cleanup.
 * Saved choices/custom cache persist; native references/hooks/nodes reset at normal Play.
 * Any async/deferred capture must check runEpoch before mutation and again after awaits.
 * Source comments are authoring aids only: tools/build.cjs enforces ZERO comments in dist/archive.
 */
(() => {
    "use strict";
    const W = window, D = document, K = "__brio_unlocker_v48";
    for (const k of [ K, "__brio_unlocker_v47", "__brio_unlocker_v46", "__brio_unlocker_v45", "__brio_unlocker_v44", "__brio_unlocker_v43", "__brio_unlocker_v42", "__brio_unlocker_v41", "__brio_unlocker_v40", "__brio_unlocker_v39", "__brio_recon38", "__brio_unlocker_v37", "__brio_unlocker_v36", "__brio_unlocker_v35", "__brio_unlocker_v33", "__brio_unlocker_v32", "__brio_unlocker_v31", "__brio_unlocker_v30", "__brio_unlocker_v29", "__brio_unlocker_v28", "__brio_unlocker_v27" ]) try {
        W[k]?.destroy?.();
    } catch (_) {}
    // Acorn 8.19.0 (MIT), vendored locally; parses source data without evaluation.
    const parseNative = (() => { const exports = {}, module = {exports};
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports):typeof define==="function"&&define.amd?define(["exports"],t):(e=typeof globalThis!=="undefined"?globalThis:e||self,t(e.acorn={}))})(this,function(e){"use strict";var t=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,7,9,32,4,318,1,31,4,33,15,71,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,3,0,158,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,68,8,2,0,3,0,2,3,2,4,2,0,15,1,83,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,7,19,58,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,199,7,137,9,54,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,55,9,7,0,259,3,10,1,2,0,49,6,4,4,14,10,5350,0,7,14,11465,27,2343,9,87,9,39,4,60,6,26,9,535,9,470,0,2,54,8,3,82,0,12,1,19628,1,4178,9,519,45,3,22,481,1,61,4,4,5,9,7,3,6,31,3,149,2,12,2,9,1,3,0,33,1,1357,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,101,0,161,6,10,9,357,0,62,13,499,13,245,1,2,9,233,0,3,0,8,1,6,0,475,6,110,6,6,9,4759,9,787719,239];var i=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,4,51,13,310,10,21,11,7,25,5,2,41,2,13,65,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,7,25,39,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,39,27,10,22,251,41,7,1,17,5,18,21,18,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,20,1,64,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,31,9,2,0,3,0,2,37,2,0,26,0,2,0,45,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,18,0,182,32,32,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,24,43,22,0,239,18,16,0,2,12,2,33,125,0,80,921,103,111,6,206,13,310,2314,96,16,1071,18,5,26,3994,6,582,6842,29,1763,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,433,44,212,63,33,24,3,24,45,74,6,0,67,12,65,1,2,0,15,4,10,7386,37,33,96,114,14,913,15,50,7710,3,2,6,2,1,2,296,10,0,30,2,3,0,15,4,8,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,340,2,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,129,15,6,55,50,49,61,147,44,11,6,17,0,322,29,19,43,485,27,229,29,3,0,208,30,2,2,2,1,2,6,3,4,10,1,225,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4382,2,5773,3,7472,16,621,2467,541,1507,4938,6,8489,39815,11327];var s="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄ-׉ؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୓-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫰ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";var r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆ՘ՙՠ-ֈ֋֌א-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿ₏-₟ℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-꟝꟢꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩ꭬꭭ꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";var a={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"};var n="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var o={5:n,"5module":n+" export import",6:n+" const class extends export import super"};var h=/^in(stanceof)?$/;var p=new RegExp("["+r+"]");var u=new RegExp("["+r+s+"]");function l(e,t){var i=65536;for(var s=0;s<t.length;s+=2){i+=t[s];if(i>e){return false}i+=t[s+1];if(i>=e){return true}}return false}function c(e,t){if(e<65){return e===36}if(e<91){return true}if(e<97){return e===95}if(e<123){return true}if(e<=65535){return e>=170&&p.test(String.fromCharCode(e))}if(t===false){return false}return l(e,i)}function f(e,s){if(e<48){return e===36}if(e<58){return true}if(e<65){return false}if(e<91){return true}if(e<97){return e===95}if(e<123){return true}if(e<=65535){return e>=170&&u.test(String.fromCharCode(e))}if(s===false){return false}return l(e,i)||l(e,t)}var d=function e(t,i){if(i===void 0)i={};this.label=t;this.keyword=i.keyword;this.beforeExpr=!!i.beforeExpr;this.startsExpr=!!i.startsExpr;this.isLoop=!!i.isLoop;this.isAssign=!!i.isAssign;this.prefix=!!i.prefix;this.postfix=!!i.postfix;this.binop=i.binop||null;this.updateContext=null};function m(e,t){return new d(e,{beforeExpr:true,binop:t})}var v={beforeExpr:true},g={startsExpr:true};var x={};function y(e,t){if(t===void 0)t={};t.keyword=e;return x[e]=new d(e,t)}var b={num:new d("num",g),regexp:new d("regexp",g),string:new d("string",g),name:new d("name",g),privateId:new d("privateId",g),eof:new d("eof"),bracketL:new d("[",{beforeExpr:true,startsExpr:true}),bracketR:new d("]"),braceL:new d("{",{beforeExpr:true,startsExpr:true}),braceR:new d("}"),parenL:new d("(",{beforeExpr:true,startsExpr:true}),parenR:new d(")"),comma:new d(",",v),semi:new d(";",v),colon:new d(":",v),dot:new d("."),question:new d("?",v),questionDot:new d("?."),arrow:new d("=>",v),template:new d("template"),invalidTemplate:new d("invalidTemplate"),ellipsis:new d("...",v),backQuote:new d("`",g),dollarBraceL:new d("${",{beforeExpr:true,startsExpr:true}),eq:new d("=",{beforeExpr:true,isAssign:true}),assign:new d("_=",{beforeExpr:true,isAssign:true}),incDec:new d("++/--",{prefix:true,postfix:true,startsExpr:true}),prefix:new d("!/~",{beforeExpr:true,prefix:true,startsExpr:true}),logicalOR:m("||",1),logicalAND:m("&&",2),bitwiseOR:m("|",3),bitwiseXOR:m("^",4),bitwiseAND:m("&",5),equality:m("==/!=/===/!==",6),relational:m("</>/<=/>=",7),bitShift:m("<</>>/>>>",8),plusMin:new d("+/-",{beforeExpr:true,binop:9,prefix:true,startsExpr:true}),modulo:m("%",10),star:m("*",10),slash:m("/",10),starstar:new d("**",{beforeExpr:true}),coalesce:m("??",1),_break:y("break"),_case:y("case",v),_catch:y("catch"),_continue:y("continue"),_debugger:y("debugger"),_default:y("default",v),_do:y("do",{isLoop:true,beforeExpr:true}),_else:y("else",v),_finally:y("finally"),_for:y("for",{isLoop:true}),_function:y("function",g),_if:y("if"),_return:y("return",v),_switch:y("switch"),_throw:y("throw",v),_try:y("try"),_var:y("var"),_const:y("const"),_while:y("while",{isLoop:true}),_with:y("with"),_new:y("new",{beforeExpr:true,startsExpr:true}),_this:y("this",g),_super:y("super",g),_class:y("class",g),_extends:y("extends",v),_export:y("export"),_import:y("import",g),_null:y("null",g),_true:y("true",g),_false:y("false",g),_in:y("in",{beforeExpr:true,binop:7}),_instanceof:y("instanceof",{beforeExpr:true,binop:7}),_typeof:y("typeof",{beforeExpr:true,prefix:true,startsExpr:true}),_void:y("void",{beforeExpr:true,prefix:true,startsExpr:true}),_delete:y("delete",{beforeExpr:true,prefix:true,startsExpr:true})};var k=/\r\n?|\n|\u2028|\u2029/;var _=new RegExp(k.source,"g");function w(e){return e===10||e===13||e===8232||e===8233}function S(e,t,i){if(i===void 0)i=e.length;for(var s=t;s<i;s++){var r=e.charCodeAt(s);if(w(r)){return s<i-1&&r===13&&e.charCodeAt(s+1)===10?s+2:s+1}}return-1}var C=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;var E=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;var A=Object.prototype;var I=A.hasOwnProperty;var P=A.toString;var V=Object.hasOwn||function(e,t){return I.call(e,t)};var N=Array.isArray||function(e){return P.call(e)==="[object Array]"};var T=Object.create(null);function L(e){return T[e]||(T[e]=new RegExp("^(?:"+e.replace(/ /g,"|")+")$"))}function R(e){if(e<=65535){return String.fromCharCode(e)}e-=65536;return String.fromCharCode((e>>10)+55296,(e&1023)+56320)}var D=/(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;var O=function e(t,i){this.line=t;this.column=i};O.prototype.offset=function e(t){return new O(this.line,this.column+t)};var B=function e(t,i,s){this.start=i;this.end=s;if(t.sourceFile!==null){this.source=t.sourceFile}};function M(e,t){for(var i=1,s=0;;){var r=S(e,s,t);if(r<0){return new O(i,t-s)}++i;s=r}}var F={ecmaVersion:null,sourceType:"script",strict:false,onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:false,allowImportExportEverywhere:false,allowAwaitOutsideFunction:null,allowSuperOutsideMethod:null,allowHashBang:false,checkPrivateFields:true,locations:false,startLocation:null,onToken:null,onComment:null,ranges:false,program:null,sourceFile:null,directSourceFile:null,preserveParens:false};var U=false;function q(e){var t={};for(var i in F){t[i]=e&&V(e,i)?e[i]:F[i]}if(t.ecmaVersion==="latest"){t.ecmaVersion=1e8}else if(t.ecmaVersion==null){if(!U&&typeof console==="object"&&console.warn){U=true;console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")}t.ecmaVersion=11}else if(t.ecmaVersion>=2015){t.ecmaVersion-=2009}if(t.allowReserved==null){t.allowReserved=t.ecmaVersion<5}if(!e||e.allowHashBang==null){t.allowHashBang=t.ecmaVersion>=14}if(N(t.onToken)){var s=t.onToken;t.onToken=function(e){return s.push(e)}}if(N(t.onComment)){t.onComment=j(t,t.onComment)}if(t.sourceType==="commonjs"&&t.allowAwaitOutsideFunction){throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs")}return t}function j(e,t){return function(i,s,r,a,n,o){var h={type:i?"Block":"Line",value:s,start:r,end:a};if(e.locations){h.loc=new B(this,n,o)}if(e.ranges){h.range=[r,a]}t.push(h)}}var G=1,H=2,W=4,z=8,K=16,Q=32,Y=64,X=128,Z=256,$=512,J=1024,ee=G|H|Z;function te(e,t){return H|(e?W:0)|(t?z:0)}var ie=0,se=1,re=2,ae=3,ne=4,oe=5;var he=function e(t,i,s){this.options=t=q(t);this.sourceFile=t.sourceFile;this.keywords=L(o[t.ecmaVersion>=6?6:t.sourceType==="module"?"5module":5]);var r="";if(t.allowReserved!==true){r=a[t.ecmaVersion>=6?6:t.ecmaVersion===5?5:3];if(t.sourceType==="module"){r+=" await"}}this.reservedWords=L(r);var n=(r?r+" ":"")+a.strict;this.reservedWordsStrict=L(n);this.reservedWordsStrictBind=L(n+" "+a.strictBind);this.input=String(i);this.containsEsc=false;this.pos=s||0;this.curLine=1;if(t.startLocation){this.lineStart=this.pos-t.startLocation.column;this.curLine=t.startLocation.line}else if(s){this.lineStart=this.input.lastIndexOf("\n",s-1)+1;if(this.options.locations){this.curLine=this.input.slice(0,this.lineStart).split(k).length}}else{this.lineStart=0}this.type=b.eof;this.value=null;this.start=this.end=this.pos;this.startLoc=this.endLoc=this.curPosition();this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos;this.context=this.initialContext();this.exprAllowed=true;this.inModule=t.sourceType==="module";this.strict=this.inModule||t.strict===true||this.strictDirective(this.pos);this.potentialArrowAt=-1;this.potentialArrowInForAwait=false;this.yieldPos=this.awaitPos=this.awaitIdentPos=0;this.labels=[];this.undefinedExports=Object.create(null);if(this.pos===0&&t.allowHashBang&&this.input.slice(0,2)==="#!"){this.skipLineComment(2)}this.scopeStack=[];this.enterScope(this.options.sourceType==="commonjs"?H:G);this.regexpState=null;this.privateNameStack=[]};var pe={inFunction:{configurable:true},inGenerator:{configurable:true},inAsync:{configurable:true},canAwait:{configurable:true},allowReturn:{configurable:true},allowSuper:{configurable:true},allowDirectSuper:{configurable:true},treatFunctionsAsVar:{configurable:true},allowNewDotTarget:{configurable:true},allowUsing:{configurable:true},inClassStaticBlock:{configurable:true}};he.prototype.parse=function e(){var t=this;var i=this.options.program||this.startNode();this.nextToken();return this.catchStackOverflow(function(){return t.parseTopLevel(i)})};pe.inFunction.get=function(){return(this.currentVarScope().flags&H)>0};pe.inGenerator.get=function(){return(this.currentVarScope().flags&z)>0};pe.inAsync.get=function(){return(this.currentVarScope().flags&W)>0};pe.canAwait.get=function(){for(var e=this.scopeStack.length-1;e>=0;e--){var t=this.scopeStack[e];var i=t.flags;if(i&(Z|$)){return false}if(i&H){return(i&W)>0}}return this.inModule&&this.options.ecmaVersion>=13||this.options.allowAwaitOutsideFunction};pe.allowReturn.get=function(){if(this.inFunction){return true}if(this.options.allowReturnOutsideFunction&&this.currentVarScope().flags&G){return true}return false};pe.allowSuper.get=function(){var e=this.currentThisScope();var t=e.flags;return(t&Y)>0||this.options.allowSuperOutsideMethod};pe.allowDirectSuper.get=function(){return(this.currentThisScope().flags&X)>0};pe.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())};pe.allowNewDotTarget.get=function(){for(var e=this.scopeStack.length-1;e>=0;e--){var t=this.scopeStack[e];var i=t.flags;if(i&(Z|$)||i&H&&!(i&K)){return true}}return false};pe.allowUsing.get=function(){var e=this.currentScope();var t=e.flags;if(t&J){return false}if(!this.inModule&&t&G){return false}return true};pe.inClassStaticBlock.get=function(){return(this.currentVarScope().flags&Z)>0};he.extend=function e(){var t=[],i=arguments.length;while(i--)t[i]=arguments[i];var s=this;for(var r=0;r<t.length;r++){s=t[r](s)}return s};he.parse=function e(t,i){return new this(i,t).parse()};he.parseExpressionAt=function e(t,i,s){var r=new this(s,t,i);r.nextToken();return r.parseExpression()};he.tokenizer=function e(t,i){return new this(i,t)};Object.defineProperties(he.prototype,pe);var ue=he.prototype;var le=/^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;ue.strictDirective=function(e){if(this.options.ecmaVersion<5){return false}for(;;){E.lastIndex=e;e+=E.exec(this.input)[0].length;var t=le.exec(this.input.slice(e));if(!t){return false}if((t[1]||t[2])==="use strict"){E.lastIndex=e+t[0].length;var i=E.exec(this.input),s=i.index+i[0].length;var r=this.input.charAt(s);return r===";"||r==="}"||k.test(i[0])&&!(/[(`.[+\-/*%<>=,?^&]/.test(r)||r==="!"&&this.input.charAt(s+1)==="="||r==="i"&&ce(this,s))}e+=t[0].length;E.lastIndex=e;e+=E.exec(this.input)[0].length;if(this.input[e]===";"){e++}}};function ce(e,t){var i=t+1,s=Math.min(e.input.length,t+11);while(i<s){var r=e.fullCharCodeAt(i);if(!f(r,true)){break}i+=r<=65535?1:2}return i===t+2&&e.input.slice(t,i)==="in"||i===t+10&&e.input.slice(t,i)==="instanceof"}ue.eat=function(e){if(this.type===e){this.next();return true}else{return false}};ue.isContextual=function(e){return this.type===b.name&&this.value===e&&!this.containsEsc};ue.eatContextual=function(e){if(!this.isContextual(e)){return false}this.next();return true};ue.catchStackOverflow=function(e){try{return e()}catch(e){if(e instanceof Error&&(/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message)||/\btoo much recursion\b/i.test(e.message))){this.raise(this.start,"Not enough stack space to parse input")}else{throw e}}};ue.expectContextual=function(e){if(!this.eatContextual(e)){this.unexpected()}};ue.canInsertSemicolon=function(){return this.type===b.eof||this.type===b.braceR||k.test(this.input.slice(this.lastTokEnd,this.start))};ue.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon){this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc)}return true}};ue.semicolon=function(){if(!this.eat(b.semi)&&!this.insertSemicolon()){this.unexpected()}};ue.afterTrailingComma=function(e,t){if(this.type===e){if(this.options.onTrailingComma){this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc)}if(!t){this.next()}return true}};ue.expect=function(e){this.eat(e)||this.unexpected()};ue.unexpected=function(e){this.raise(e!=null?e:this.start,"Unexpected token")};var fe=function e(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1};ue.checkPatternErrors=function(e,t){if(!e){return}if(e.trailingComma>-1){this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element")}var i=t?e.parenthesizedAssign:e.parenthesizedBind;if(i>-1){this.raiseRecoverable(i,t?"Assigning to rvalue":"Parenthesized pattern")}};ue.checkExpressionErrors=function(e,t){if(!e){return false}var i=e.shorthandAssign;var s=e.doubleProto;if(!t){return i>=0||s>=0}if(i>=0){this.raise(i,"Shorthand property assignments are valid only in destructuring patterns")}if(s>=0){this.raiseRecoverable(s,"Redefinition of __proto__ property")}};ue.checkYieldAwaitInDefaultParams=function(){if(this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)){this.raise(this.yieldPos,"Yield expression cannot be a default value")}if(this.awaitPos){this.raise(this.awaitPos,"Await expression cannot be a default value")}};ue.isSimpleAssignTarget=function(e){if(e.type==="ParenthesizedExpression"){return this.isSimpleAssignTarget(e.expression)}return e.type==="Identifier"||e.type==="MemberExpression"};var de=he.prototype;de.parseTopLevel=function(e){var t=Object.create(null);if(!e.body){e.body=[]}while(this.type!==b.eof){var i=this.parseStatement(null,true,t);e.body.push(i)}if(this.inModule){for(var s=0,r=Object.keys(this.undefinedExports);s<r.length;s+=1){var a=r[s];this.raiseRecoverable(this.undefinedExports[a].start,"Export '"+a+"' is not defined")}}this.adaptDirectivePrologue(e.body);this.next();e.sourceType=this.options.sourceType==="commonjs"?"script":this.options.sourceType;return this.finishNode(e,"Program")};var me={kind:"loop"},ve={kind:"switch"};de.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let")){return false}E.lastIndex=this.pos;var t=E.exec(this.input);var i=this.pos+t[0].length,s=this.fullCharCodeAt(i);if(s===91||s===92){return true}if(e){return false}if(s===123){return true}if(c(s)){var r=i;do{i+=s<=65535?1:2}while(f(s=this.fullCharCodeAt(i)));if(s===92){return true}var a=this.input.slice(r,i);if(!h.test(a)){return true}}return false};de.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async")){return false}E.lastIndex=this.pos;var e=E.exec(this.input);var t=this.pos+e[0].length,i;return!k.test(this.input.slice(this.pos,t))&&this.input.slice(t,t+8)==="function"&&(t+8===this.input.length||!(f(i=this.fullCharCodeAt(t+8))||i===92))};de.isUsingKeyword=function(e,t){if(this.options.ecmaVersion<17||!this.isContextual(e?"await":"using")){return false}E.lastIndex=this.pos;var i=E.exec(this.input);var s=this.pos+i[0].length;if(k.test(this.input.slice(this.pos,s))){return false}if(e){var r=s+5,a;if(this.input.slice(s,r)!=="using"||r===this.input.length||f(a=this.fullCharCodeAt(r))||a===92){return false}E.lastIndex=r;var n=E.exec(this.input);s=r+n[0].length;if(n&&k.test(this.input.slice(r,s))){return false}}var o=this.fullCharCodeAt(s);if(!c(o)&&o!==92){return false}var p=s;do{s+=o<=65535?1:2}while(f(o=this.fullCharCodeAt(s)));if(o===92){return true}var u=this.input.slice(p,s);if(h.test(u)){return false}if(t&&!e&&u==="of"){E.lastIndex=s;var l=E.exec(this.input);s=s+l[0].length;if(this.input.charCodeAt(s)!==61||(o=this.input.charCodeAt(s+1))===61||o===62){return false}}return true};de.isAwaitUsing=function(e){return this.isUsingKeyword(true,e)};de.isUsing=function(e){return this.isUsingKeyword(false,e)};de.parseStatement=function(e,t,i){var s=this.type,r=this.startNode(),a;if(this.isLet(e)){s=b._var;a="let"}switch(s){case b._break:case b._continue:return this.parseBreakContinueStatement(r,s.keyword);case b._debugger:return this.parseDebuggerStatement(r);case b._do:return this.parseDoStatement(r);case b._for:return this.parseForStatement(r);case b._function:if(e&&(this.strict||e!=="if"&&e!=="label")&&this.options.ecmaVersion>=6){this.unexpected()}return this.parseFunctionStatement(r,false,!e);case b._class:if(e){this.unexpected()}return this.parseClass(r,true);case b._if:return this.parseIfStatement(r);case b._return:return this.parseReturnStatement(r);case b._switch:return this.parseSwitchStatement(r);case b._throw:return this.parseThrowStatement(r);case b._try:return this.parseTryStatement(r);case b._const:case b._var:a=a||this.value;if(e&&a!=="var"){this.unexpected()}return this.parseVarStatement(r,a);case b._while:return this.parseWhileStatement(r);case b._with:return this.parseWithStatement(r);case b.braceL:return this.parseBlock(true,r);case b.semi:return this.parseEmptyStatement(r);case b._export:case b._import:if(this.options.ecmaVersion>10&&s===b._import){E.lastIndex=this.pos;var n=E.exec(this.input);var o=this.pos+n[0].length,h=this.input.charCodeAt(o);if(h===40||h===46){return this.parseExpressionStatement(r,this.parseExpression())}}if(!this.options.allowImportExportEverywhere){if(!t){this.raise(this.start,"'import' and 'export' may only appear at the top level")}if(!this.inModule){this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")}}return s===b._import?this.parseImport(r):this.parseExport(r,i);default:if(this.isAsyncFunction()){if(e){this.unexpected()}this.next();return this.parseFunctionStatement(r,true,!e)}var p=this.isAwaitUsing(false)?"await using":this.isUsing(false)?"using":null;if(p){if(!this.allowUsing){this.raise(this.start,"Using declaration cannot appear in the top level when source type is `script` or in the bare case statement")}if(e){this.raise(this.start,"Using declaration is not allowed in single-statement positions")}if(p==="await using"){if(!this.canAwait){this.raise(this.start,"Await using cannot appear outside of async function")}this.next()}this.next();this.parseVar(r,false,p);this.semicolon();return this.finishNode(r,"VariableDeclaration")}var u=this.value,l=this.parseExpression();if(s===b.name&&l.type==="Identifier"&&this.eat(b.colon)){return this.parseLabeledStatement(r,u,l,e)}else{return this.parseExpressionStatement(r,l)}}};de.parseBreakContinueStatement=function(e,t){var i=t==="break";this.next();if(this.eat(b.semi)||this.insertSemicolon()){e.label=null}else if(this.type!==b.name){this.unexpected()}else{e.label=this.parseIdent();this.semicolon()}var s=0;for(;s<this.labels.length;++s){var r=this.labels[s];if(e.label==null||r.name===e.label.name){if(r.kind!=null&&(i||r.kind==="loop")){break}if(e.label&&i){break}}}if(s===this.labels.length){this.raise(e.start,"Unsyntactic "+t)}return this.finishNode(e,i?"BreakStatement":"ContinueStatement")};de.parseDebuggerStatement=function(e){this.next();this.semicolon();return this.finishNode(e,"DebuggerStatement")};de.parseDoStatement=function(e){this.next();this.labels.push(me);e.body=this.parseStatement("do");this.labels.pop();this.expect(b._while);e.test=this.parseParenExpression();if(this.options.ecmaVersion>=6){this.eat(b.semi)}else{this.semicolon()}return this.finishNode(e,"DoWhileStatement")};de.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&this.canAwait&&this.eatContextual("await")?this.lastTokStart:-1;this.labels.push(me);this.enterScope(0);this.expect(b.parenL);if(this.type===b.semi){if(t>-1){this.unexpected(t)}return this.parseFor(e,null)}var i=this.isLet();if(this.type===b._var||this.type===b._const||i){var s=this.startNode(),r=i?"let":this.value;this.next();this.parseVar(s,true,r);this.finishNode(s,"VariableDeclaration");return this.parseForAfterInit(e,s,t)}var a=this.isContextual("let"),n=false;var o=this.isUsing(true)?"using":this.isAwaitUsing(true)?"await using":null;if(o){var h=this.startNode();this.next();if(o==="await using"){if(!this.canAwait){this.raise(this.start,"Await using cannot appear outside of async function")}this.next()}this.parseVar(h,true,o);this.finishNode(h,"VariableDeclaration");return this.parseForAfterInit(e,h,t)}var p=this.containsEsc;var u=new fe;var l=this.start;var c=t>-1?this.parseExprSubscripts(u,"await"):this.parseExpression(true,u);if(this.type===b._in||(n=this.options.ecmaVersion>=6&&this.isContextual("of"))){if(t>-1){if(this.type===b._in){this.unexpected(t)}e.await=true}else if(n&&this.options.ecmaVersion>=8){if(c.start===l&&!p&&c.type==="Identifier"&&c.name==="async"){this.unexpected()}else if(this.options.ecmaVersion>=9){e.await=false}}if(a&&n){this.raise(c.start,"The left-hand side of a for-of loop may not start with 'let'.")}this.toAssignable(c,false,u);this.checkLValPattern(c);return this.parseForIn(e,c)}else{this.checkExpressionErrors(u,true)}if(t>-1){this.unexpected(t)}return this.parseFor(e,c)};de.parseForAfterInit=function(e,t,i){if((this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&t.declarations.length===1){if(this.type===b._in){if((t.kind==="using"||t.kind==="await using")&&!t.declarations[0].init){this.raise(this.start,"Using declaration is not allowed in for-in loops")}if(this.options.ecmaVersion>=9&&i>-1){this.unexpected(i)}}else if(this.options.ecmaVersion>=9){e.await=i>-1}return this.parseForIn(e,t)}if(i>-1){this.unexpected(i)}return this.parseFor(e,t)};de.parseFunctionStatement=function(e,t,i){this.next();return this.parseFunction(e,xe|(i?0:ye),false,t)};de.parseIfStatement=function(e){this.next();e.test=this.parseParenExpression();e.consequent=this.parseStatement("if");e.alternate=this.eat(b._else)?this.parseStatement("if"):null;return this.finishNode(e,"IfStatement")};de.parseReturnStatement=function(e){if(!this.allowReturn){this.raise(this.start,"'return' outside of function")}this.next();if(this.eat(b.semi)||this.insertSemicolon()){e.argument=null}else{e.argument=this.parseExpression();this.semicolon()}return this.finishNode(e,"ReturnStatement")};de.parseSwitchStatement=function(e){this.next();e.discriminant=this.parseParenExpression();e.cases=[];this.expect(b.braceL);this.labels.push(ve);this.enterScope(J);var t;for(var i=false;this.type!==b.braceR;){if(this.type===b._case||this.type===b._default){var s=this.type===b._case;if(t){this.finishNode(t,"SwitchCase")}e.cases.push(t=this.startNode());t.consequent=[];this.next();if(s){t.test=this.parseExpression()}else{if(i){this.raiseRecoverable(this.lastTokStart,"Multiple default clauses")}i=true;t.test=null}this.expect(b.colon)}else{if(!t){this.unexpected()}t.consequent.push(this.parseStatement(null))}}this.exitScope();if(t){this.finishNode(t,"SwitchCase")}this.next();this.labels.pop();return this.finishNode(e,"SwitchStatement")};de.parseThrowStatement=function(e){this.next();if(k.test(this.input.slice(this.lastTokEnd,this.start))){this.raise(this.lastTokEnd,"Illegal newline after throw")}e.argument=this.parseExpression();this.semicolon();return this.finishNode(e,"ThrowStatement")};var ge=[];de.parseCatchClauseParam=function(){var e=this.parseBindingAtom();var t=e.type==="Identifier";this.enterScope(t?Q:0);this.checkLValPattern(e,t?ne:re);this.expect(b.parenR);return e};de.parseTryStatement=function(e){this.next();e.block=this.parseBlock();e.handler=null;if(this.type===b._catch){var t=this.startNode();this.next();if(this.eat(b.parenL)){t.param=this.parseCatchClauseParam()}else{if(this.options.ecmaVersion<10){this.unexpected()}t.param=null;this.enterScope(0)}t.body=this.parseBlock(false);this.exitScope();e.handler=this.finishNode(t,"CatchClause")}e.finalizer=this.eat(b._finally)?this.parseBlock():null;if(!e.handler&&!e.finalizer){this.raise(e.start,"Missing catch or finally clause")}return this.finishNode(e,"TryStatement")};de.parseVarStatement=function(e,t,i){this.next();this.parseVar(e,false,t,i);this.semicolon();return this.finishNode(e,"VariableDeclaration")};de.parseWhileStatement=function(e){this.next();e.test=this.parseParenExpression();this.labels.push(me);e.body=this.parseStatement("while");this.labels.pop();return this.finishNode(e,"WhileStatement")};de.parseWithStatement=function(e){if(this.strict){this.raise(this.start,"'with' in strict mode")}this.next();e.object=this.parseParenExpression();e.body=this.parseStatement("with");return this.finishNode(e,"WithStatement")};de.parseEmptyStatement=function(e){this.next();return this.finishNode(e,"EmptyStatement")};de.parseLabeledStatement=function(e,t,i,s){for(var r=0,a=this.labels;r<a.length;r+=1){var n=a[r];if(n.name===t){this.raise(i.start,"Label '"+t+"' is already declared")}}var o=this.type.isLoop?"loop":this.type===b._switch?"switch":null;for(var h=this.labels.length-1;h>=0;h--){var p=this.labels[h];if(p.statementStart===e.start){p.statementStart=this.start;p.kind=o}else{break}}this.labels.push({name:t,kind:o,statementStart:this.start});e.body=this.parseStatement(s?s.indexOf("label")===-1?s+"label":s:"label");this.labels.pop();e.label=i;return this.finishNode(e,"LabeledStatement")};de.parseExpressionStatement=function(e,t){e.expression=t;this.semicolon();return this.finishNode(e,"ExpressionStatement")};de.parseBlock=function(e,t,i){if(e===void 0)e=true;if(t===void 0)t=this.startNode();t.body=[];this.expect(b.braceL);if(e){this.enterScope(0)}while(this.type!==b.braceR){var s=this.parseStatement(null);t.body.push(s)}if(i){this.strict=false}this.next();if(e){this.exitScope()}return this.finishNode(t,"BlockStatement")};de.parseFor=function(e,t){e.init=t;this.expect(b.semi);e.test=this.type===b.semi?null:this.parseExpression();this.expect(b.semi);e.update=this.type===b.parenR?null:this.parseExpression();this.expect(b.parenR);e.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(e,"ForStatement")};de.parseForIn=function(e,t){var i=this.type===b._in;this.next();if(t.type==="VariableDeclaration"&&t.declarations[0].init!=null&&(!i||this.options.ecmaVersion<8||this.strict||t.kind!=="var"||t.declarations[0].id.type!=="Identifier")){this.raise(t.start,(i?"for-in":"for-of")+" loop variable declaration may not have an initializer")}e.left=t;e.right=i?this.parseExpression():this.parseMaybeAssign();this.expect(b.parenR);e.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(e,i?"ForInStatement":"ForOfStatement")};de.parseVar=function(e,t,i,s){e.declarations=[];e.kind=i;for(;;){var r=this.startNode();this.parseVarId(r,i);if(this.eat(b.eq)){r.init=this.parseMaybeAssign(t)}else if(!s&&i==="const"&&!(this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))){this.unexpected()}else if(!s&&(i==="using"||i==="await using")&&this.options.ecmaVersion>=17&&this.type!==b._in&&!this.isContextual("of")){this.raise(this.lastTokEnd,"Missing initializer in "+i+" declaration")}else if(!s&&r.id.type!=="Identifier"&&!(t&&(this.type===b._in||this.isContextual("of")))){this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value")}else{r.init=null}e.declarations.push(this.finishNode(r,"VariableDeclarator"));if(!this.eat(b.comma)){break}}return e};de.parseVarId=function(e,t){e.id=t==="using"||t==="await using"?this.parseIdent():this.parseBindingAtom();this.checkLValPattern(e.id,t==="var"?se:re,false)};var xe=1,ye=2,be=4;de.parseFunction=function(e,t,i,s,r){this.initFunction(e);if(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!s){if(this.type===b.star&&t&ye){this.unexpected()}e.generator=this.eat(b.star)}if(this.options.ecmaVersion>=8){e.async=!!s}if(t&xe){e.id=t&be&&this.type!==b.name?null:this.parseIdent();if(e.id&&!(t&ye)){this.checkLValSimple(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?se:re:ae)}}var a=this.yieldPos,n=this.awaitPos,o=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(te(e.async,e.generator));if(!(t&xe)){e.id=this.type===b.name?this.parseIdent():null}this.parseFunctionParams(e);this.parseFunctionBody(e,i,false,r);this.yieldPos=a;this.awaitPos=n;this.awaitIdentPos=o;return this.finishNode(e,t&xe?"FunctionDeclaration":"FunctionExpression")};de.parseFunctionParams=function(e){this.expect(b.parenL);e.params=this.parseBindingList(b.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams()};de.parseClass=function(e,t){this.next();var i=this.strict;this.strict=true;this.parseClassId(e,t);this.parseClassSuper(e);var s=this.enterClassBody();var r=this.startNode();var a=false;r.body=[];this.expect(b.braceL);while(this.type!==b.braceR){var n=this.parseClassElement(e.superClass!==null);if(n){r.body.push(n);if(n.type==="MethodDefinition"&&n.kind==="constructor"){if(a){this.raiseRecoverable(n.start,"Duplicate constructor in the same class")}a=true}else if(n.key&&n.key.type==="PrivateIdentifier"&&ke(s,n)){this.raiseRecoverable(n.key.start,"Identifier '#"+n.key.name+"' has already been declared")}}}this.strict=i;this.next();e.body=this.finishNode(r,"ClassBody");this.exitClassBody();return this.finishNode(e,t?"ClassDeclaration":"ClassExpression")};de.parseClassElement=function(e){if(this.eat(b.semi)){return null}var t=this.options.ecmaVersion;var i=this.startNode();var s="";var r=false;var a=false;var n="method";var o=false;if(this.eatContextual("static")){if(t>=13&&this.eat(b.braceL)){this.parseClassStaticBlock(i);return i}if(this.isClassElementNameStart()||this.type===b.star){o=true}else{s="static"}}i.static=o;if(!s&&t>=8&&this.eatContextual("async")){if((this.isClassElementNameStart()||this.type===b.star)&&!this.canInsertSemicolon()){a=true}else{s="async"}}if(!s&&(t>=9||!a)&&this.eat(b.star)){r=true}if(!s&&!a&&!r){var h=this.value;if(this.eatContextual("get")||this.eatContextual("set")){if(this.isClassElementNameStart()){n=h}else{s=h}}}if(s){i.computed=false;i.key=this.startNodeAt(this.lastTokStart,this.lastTokStartLoc);i.key.name=s;this.finishNode(i.key,"Identifier")}else{this.parseClassElementName(i)}if(t<13||this.type===b.parenL||n!=="method"||r||a){var p=!i.static&&_e(i,"constructor");var u=p&&e;if(p&&n!=="method"){this.raise(i.key.start,"Constructor can't have get/set modifier")}i.kind=p?"constructor":n;this.parseClassMethod(i,r,a,u)}else{this.parseClassField(i)}return i};de.isClassElementNameStart=function(){return this.type===b.name||this.type===b.privateId||this.type===b.num||this.type===b.string||this.type===b.bracketL||this.type.keyword};de.parseClassElementName=function(e){if(this.type===b.privateId){if(this.value==="constructor"){this.raise(this.start,"Classes can't have an element named '#constructor'")}e.computed=false;e.key=this.parsePrivateIdent()}else{this.parsePropertyName(e)}};de.parseClassMethod=function(e,t,i,s){var r=e.key;if(e.kind==="constructor"){if(t){this.raise(r.start,"Constructor can't be a generator")}if(i){this.raise(r.start,"Constructor can't be an async method")}}else if(e.static&&_e(e,"prototype")){this.raise(r.start,"Classes may not have a static property named prototype")}var a=e.value=this.parseMethod(t,i,s);if(e.kind==="get"&&a.params.length!==0){this.raiseRecoverable(a.start,"getter should have no params")}if(e.kind==="set"&&a.params.length!==1){this.raiseRecoverable(a.start,"setter should have exactly one param")}if(e.kind==="set"&&a.params[0].type==="RestElement"){this.raiseRecoverable(a.params[0].start,"Setter cannot use rest params")}return this.finishNode(e,"MethodDefinition")};de.parseClassField=function(e){if(_e(e,"constructor")){this.raise(e.key.start,"Classes can't have a field named 'constructor'")}else if(e.static&&_e(e,"prototype")){this.raise(e.key.start,"Classes can't have a static field named 'prototype'")}if(this.eat(b.eq)){this.enterScope($|Y);e.value=this.parseMaybeAssign();this.exitScope()}else{e.value=null}this.semicolon();return this.finishNode(e,"PropertyDefinition")};de.parseClassStaticBlock=function(e){e.body=[];var t=this.labels;this.labels=[];this.enterScope(Z|Y);while(this.type!==b.braceR){var i=this.parseStatement(null);e.body.push(i)}this.next();this.exitScope();this.labels=t;return this.finishNode(e,"StaticBlock")};de.parseClassId=function(e,t){if(this.type===b.name){e.id=this.parseIdent();if(t){this.checkLValSimple(e.id,re,false)}}else{if(t===true){this.unexpected()}e.id=null}};de.parseClassSuper=function(e){e.superClass=this.eat(b._extends)?this.parseExprSubscripts(null,false):null};de.enterClassBody=function(){var e={declared:Object.create(null),used:[]};this.privateNameStack.push(e);return e.declared};de.exitClassBody=function(){var e=this.privateNameStack.pop();var t=e.declared;var i=e.used;if(!this.options.checkPrivateFields){return}var s=this.privateNameStack.length;var r=s===0?null:this.privateNameStack[s-1];for(var a=0;a<i.length;++a){var n=i[a];if(!V(t,n.name)){if(r){r.used.push(n)}else{this.raiseRecoverable(n.start,"Private field '#"+n.name+"' must be declared in an enclosing class")}}}};function ke(e,t){var i=t.key.name;var s=e[i];var r="true";if(t.type==="MethodDefinition"&&(t.kind==="get"||t.kind==="set")){r=(t.static?"s":"i")+t.kind}if(s==="iget"&&r==="iset"||s==="iset"&&r==="iget"||s==="sget"&&r==="sset"||s==="sset"&&r==="sget"){e[i]="true";return false}else if(!s){e[i]=r;return false}else{return true}}function _e(e,t){var i=e.computed;var s=e.key;return!i&&(s.type==="Identifier"&&s.name===t||s.type==="Literal"&&s.value===t)}de.parseExportAllDeclaration=function(e,t){if(this.options.ecmaVersion>=11){if(this.eatContextual("as")){e.exported=this.parseModuleExportName();this.checkExport(t,e.exported,this.lastTokStart)}else{e.exported=null}}this.expectContextual("from");if(this.type!==b.string){this.unexpected()}e.source=this.parseExprAtom();if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}this.semicolon();return this.finishNode(e,"ExportAllDeclaration")};de.parseExport=function(e,t){this.next();if(this.eat(b.star)){return this.parseExportAllDeclaration(e,t)}if(this.eat(b._default)){this.checkExport(t,"default",this.lastTokStart);e.declaration=this.parseExportDefaultDeclaration();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement()){e.declaration=this.parseExportDeclaration(e);if(e.declaration.type==="VariableDeclaration"){this.checkVariableExport(t,e.declaration.declarations)}else{this.checkExport(t,e.declaration.id,e.declaration.id.start)}e.specifiers=[];e.source=null;if(this.options.ecmaVersion>=16){e.attributes=[]}}else{e.declaration=null;e.specifiers=this.parseExportSpecifiers(t);if(this.eatContextual("from")){if(this.type!==b.string){this.unexpected()}e.source=this.parseExprAtom();if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}}else{for(var i=0,s=e.specifiers;i<s.length;i+=1){var r=s[i];this.checkUnreserved(r.local);this.checkLocalExport(r.local);if(r.local.type==="Literal"){this.raise(r.local.start,"A string literal cannot be used as an exported binding without `from`.")}}e.source=null;if(this.options.ecmaVersion>=16){e.attributes=[]}}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")};de.parseExportDeclaration=function(e){return this.parseStatement(null)};de.parseExportDefaultDeclaration=function(){var e;if(this.type===b._function||(e=this.isAsyncFunction())){var t=this.startNode();this.next();if(e){this.next()}return this.parseFunction(t,xe|be,false,e)}else if(this.type===b._class){var i=this.startNode();return this.parseClass(i,"nullableID")}else{var s=this.parseMaybeAssign();this.semicolon();return s}};de.checkExport=function(e,t,i){if(!e){return}if(typeof t!=="string"){t=t.type==="Identifier"?t.name:t.value}if(V(e,t)){this.raiseRecoverable(i,"Duplicate export '"+t+"'")}e[t]=true};de.checkPatternExport=function(e,t){var i=t.type;if(i==="Identifier"){this.checkExport(e,t,t.start)}else if(i==="ObjectPattern"){for(var s=0,r=t.properties;s<r.length;s+=1){var a=r[s];this.checkPatternExport(e,a)}}else if(i==="ArrayPattern"){for(var n=0,o=t.elements;n<o.length;n+=1){var h=o[n];if(h){this.checkPatternExport(e,h)}}}else if(i==="Property"){this.checkPatternExport(e,t.value)}else if(i==="AssignmentPattern"){this.checkPatternExport(e,t.left)}else if(i==="RestElement"){this.checkPatternExport(e,t.argument)}};de.checkVariableExport=function(e,t){if(!e){return}for(var i=0,s=t;i<s.length;i+=1){var r=s[i];this.checkPatternExport(e,r.id)}};de.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction()};de.parseExportSpecifier=function(e){var t=this.startNode();t.local=this.parseModuleExportName();t.exported=this.eatContextual("as")?this.parseModuleExportName():t.local;this.checkExport(e,t.exported,t.exported.start);return this.finishNode(t,"ExportSpecifier")};de.parseExportSpecifiers=function(e){var t=[],i=true;this.expect(b.braceL);while(!this.eat(b.braceR)){if(!i){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{i=false}t.push(this.parseExportSpecifier(e))}return t};de.parseImport=function(e){this.next();if(this.type===b.string){e.specifiers=ge;e.source=this.parseExprAtom()}else{e.specifiers=this.parseImportSpecifiers();this.expectContextual("from");e.source=this.type===b.string?this.parseExprAtom():this.unexpected()}if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}this.semicolon();return this.finishNode(e,"ImportDeclaration")};de.parseImportSpecifier=function(){var e=this.startNode();e.imported=this.parseModuleExportName();if(this.eatContextual("as")){e.local=this.parseIdent()}else{this.checkUnreserved(e.imported);e.local=e.imported}this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportSpecifier")};de.parseImportDefaultSpecifier=function(){var e=this.startNode();e.local=this.parseIdent();this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportDefaultSpecifier")};de.parseImportNamespaceSpecifier=function(){var e=this.startNode();this.next();this.expectContextual("as");e.local=this.parseIdent();this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportNamespaceSpecifier")};de.parseImportSpecifiers=function(){var e=[],t=true;if(this.type===b.name){e.push(this.parseImportDefaultSpecifier());if(!this.eat(b.comma)){return e}}if(this.type===b.star){e.push(this.parseImportNamespaceSpecifier());return e}this.expect(b.braceL);while(!this.eat(b.braceR)){if(!t){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{t=false}e.push(this.parseImportSpecifier())}return e};de.parseWithClause=function(){var e=[];if(!this.eat(b._with)){return e}this.expect(b.braceL);var t={};var i=true;while(!this.eat(b.braceR)){if(!i){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{i=false}var s=this.parseImportAttribute();var r=s.key.type==="Identifier"?s.key.name:s.key.value;if(V(t,r)){this.raiseRecoverable(s.key.start,"Duplicate attribute key '"+r+"'")}t[r]=true;e.push(s)}return e};de.parseImportAttribute=function(){var e=this.startNode();e.key=this.type===b.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never");this.expect(b.colon);if(this.type!==b.string){this.unexpected()}e.value=this.parseExprAtom();return this.finishNode(e,"ImportAttribute")};de.parseModuleExportName=function(){if(this.options.ecmaVersion>=13&&this.type===b.string){var e=this.parseLiteral(this.value);if(D.test(e.value)){this.raise(e.start,"An export name cannot include a lone surrogate.")}return e}return this.parseIdent(true)};de.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t){e[t].directive=e[t].expression.raw.slice(1,-1)}};de.isDirectiveCandidate=function(e){return this.options.ecmaVersion>=5&&e.type==="ExpressionStatement"&&e.expression.type==="Literal"&&typeof e.expression.value==="string"&&(this.input[e.start]==='"'||this.input[e.start]==="'")};var we=he.prototype;we.toAssignable=function(e,t,i){if(this.options.ecmaVersion>=6&&e){switch(e.type){case"Identifier":if(this.inAsync&&e.name==="await"){this.raise(e.start,"Cannot use 'await' as identifier inside an async function")}break;case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern";if(i){this.checkPatternErrors(i,true)}for(var s=0,r=e.properties;s<r.length;s+=1){var a=r[s];this.toAssignable(a,t);if(a.type==="RestElement"&&(a.argument.type==="ArrayPattern"||a.argument.type==="ObjectPattern")){this.raise(a.argument.start,"Unexpected token")}}break;case"Property":if(e.kind!=="init"){this.raise(e.key.start,"Object pattern can't contain getter or setter")}this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern";if(i){this.checkPatternErrors(i,true)}this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement";this.toAssignable(e.argument,t);if(e.argument.type==="AssignmentPattern"){this.raise(e.argument.start,"Rest elements cannot have a default value")}break;case"AssignmentExpression":if(e.operator!=="="){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.")}e.type="AssignmentPattern";delete e.operator;this.toAssignable(e.left,t);break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,i);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(!t){break}default:this.raise(e.start,"Assigning to rvalue")}}else if(i){this.checkPatternErrors(i,true)}return e};we.toAssignableList=function(e,t){var i=e.length;for(var s=0;s<i;s++){var r=e[s];if(r){this.toAssignable(r,t)}}if(i){var a=e[i-1];if(this.options.ecmaVersion===6&&t&&a&&a.type==="RestElement"&&a.argument.type!=="Identifier"){this.unexpected(a.argument.start)}}return e};we.parseSpread=function(e){var t=this.startNode();this.next();t.argument=this.parseMaybeAssign(false,e);return this.finishNode(t,"SpreadElement")};we.parseRestBinding=function(){var e=this.startNode();this.next();if(this.options.ecmaVersion===6&&this.type!==b.name){this.unexpected()}e.argument=this.parseBindingAtom();return this.finishNode(e,"RestElement")};we.parseBindingAtom=function(){if(this.options.ecmaVersion>=6){switch(this.type){case b.bracketL:var e=this.startNode();this.next();e.elements=this.parseBindingList(b.bracketR,true,true);return this.finishNode(e,"ArrayPattern");case b.braceL:return this.parseObj(true)}}return this.parseIdent()};we.parseBindingList=function(e,t,i,s){var r=[],a=true;while(!this.eat(e)){if(a){a=false}else{this.expect(b.comma)}if(t&&this.type===b.comma){r.push(null)}else if(i&&this.afterTrailingComma(e)){break}else if(this.type===b.ellipsis){var n=this.parseRestBinding();this.parseBindingListItem(n);r.push(n);if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}this.expect(e);break}else{r.push(this.parseAssignableListItem(s))}}return r};we.parseAssignableListItem=function(e){var t=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(t);return t};we.parseBindingListItem=function(e){return e};we.parseMaybeDefault=function(e,t,i){i=i||this.parseBindingAtom();if(this.options.ecmaVersion<6||!this.eat(b.eq)){return i}var s=this.startNodeAt(e,t);s.left=i;s.right=this.parseMaybeAssign();return this.finishNode(s,"AssignmentPattern")};we.checkLValSimple=function(e,t,i){if(t===void 0)t=ie;var s=t!==ie;switch(e.type){case"Identifier":if(this.strict&&this.reservedWordsStrictBind.test(e.name)){this.raiseRecoverable(e.start,(s?"Binding ":"Assigning to ")+e.name+" in strict mode")}if(s){if(t===re&&e.name==="let"){this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name")}if(i){if(V(i,e.name)){this.raiseRecoverable(e.start,"Argument name clash")}i[e.name]=true}if(t!==oe){this.declareName(e.name,t,e.start)}}break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(s){this.raiseRecoverable(e.start,"Binding member expression")}break;case"ParenthesizedExpression":if(s){this.raiseRecoverable(e.start,"Binding parenthesized expression")}return this.checkLValSimple(e.expression,t,i);default:this.raise(e.start,(s?"Binding":"Assigning to")+" rvalue")}};we.checkLValPattern=function(e,t,i){if(t===void 0)t=ie;switch(e.type){case"ObjectPattern":for(var s=0,r=e.properties;s<r.length;s+=1){var a=r[s];this.checkLValInnerPattern(a,t,i)}break;case"ArrayPattern":for(var n=0,o=e.elements;n<o.length;n+=1){var h=o[n];if(h){this.checkLValInnerPattern(h,t,i)}}break;default:this.checkLValSimple(e,t,i)}};we.checkLValInnerPattern=function(e,t,i){if(t===void 0)t=ie;switch(e.type){case"Property":this.checkLValInnerPattern(e.value,t,i);break;case"AssignmentPattern":this.checkLValPattern(e.left,t,i);break;case"RestElement":this.checkLValPattern(e.argument,t,i);break;default:this.checkLValPattern(e,t,i)}};var Se=function e(t,i,s,r,a){this.token=t;this.isExpr=!!i;this.preserveSpace=!!s;this.override=r;this.generator=!!a};var Ce={b_stat:new Se("{",false),b_expr:new Se("{",true),b_tmpl:new Se("${",false),p_stat:new Se("(",false),p_expr:new Se("(",true),q_tmpl:new Se("`",true,true,function(e){return e.tryReadTemplateToken()}),f_stat:new Se("function",false),f_expr:new Se("function",true),f_expr_gen:new Se("function",true,false,null,true),f_gen:new Se("function",false,false,null,true)};var Ee=he.prototype;Ee.initialContext=function(){return[Ce.b_stat]};Ee.curContext=function(){return this.context[this.context.length-1]};Ee.braceIsBlock=function(e){var t=this.curContext();if(t===Ce.f_expr||t===Ce.f_stat){return true}if(e===b.colon&&(t===Ce.b_stat||t===Ce.b_expr)){return!t.isExpr}if(e===b._return||e===b.name&&this.exprAllowed){return k.test(this.input.slice(this.lastTokEnd,this.start))}if(e===b._else||e===b.semi||e===b.eof||e===b.parenR||e===b.arrow){return true}if(e===b.braceL){return t===Ce.b_stat}if(e===b._var||e===b._const||e===b.name){return false}return!this.exprAllowed};Ee.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if(t.token==="function"){return t.generator}}return false};Ee.updateContext=function(e){var t,i=this.type;if(i.keyword&&e===b.dot){this.exprAllowed=false}else if(t=i.updateContext){t.call(this,e)}else{this.exprAllowed=i.beforeExpr}};Ee.overrideContext=function(e){if(this.curContext()!==e){this.context[this.context.length-1]=e}};b.parenR.updateContext=b.braceR.updateContext=function(){if(this.context.length===1){this.exprAllowed=true;return}var e=this.context.pop();if(e===Ce.b_stat&&this.curContext().token==="function"){e=this.context.pop()}this.exprAllowed=!e.isExpr};b.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Ce.b_stat:Ce.b_expr);this.exprAllowed=true};b.dollarBraceL.updateContext=function(){this.context.push(Ce.b_tmpl);this.exprAllowed=true};b.parenL.updateContext=function(e){var t=e===b._if||e===b._for||e===b._with||e===b._while;this.context.push(t?Ce.p_stat:Ce.p_expr);this.exprAllowed=true};b.incDec.updateContext=function(){};b._function.updateContext=b._class.updateContext=function(e){if(e.beforeExpr&&e!==b._else&&!(e===b.semi&&this.curContext()!==Ce.p_stat)&&!(e===b._return&&k.test(this.input.slice(this.lastTokEnd,this.start)))&&!((e===b.colon||e===b.braceL)&&this.curContext()===Ce.b_stat)){this.context.push(Ce.f_expr)}else{this.context.push(Ce.f_stat)}this.exprAllowed=false};b.colon.updateContext=function(){if(this.curContext().token==="function"){this.context.pop()}this.exprAllowed=true};b.backQuote.updateContext=function(){if(this.curContext()===Ce.q_tmpl){this.context.pop()}else{this.context.push(Ce.q_tmpl)}this.exprAllowed=false};b.star.updateContext=function(e){if(e===b._function){var t=this.context.length-1;if(this.context[t]===Ce.f_expr){this.context[t]=Ce.f_expr_gen}else{this.context[t]=Ce.f_gen}}this.exprAllowed=true};b.name.updateContext=function(e){var t=false;if(this.options.ecmaVersion>=6&&e!==b.dot){if(this.value==="of"&&!this.exprAllowed||this.value==="yield"&&this.inGeneratorContext()){t=true}}this.exprAllowed=t};var Ae=he.prototype;Ae.checkPropClash=function(e,t,i){if(this.options.ecmaVersion>=9&&e.type==="SpreadElement"){return}if(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand)){return}var s=e.key;var r;switch(s.type){case"Identifier":r=s.name;break;case"Literal":r=String(s.value);break;default:return}var a=e.kind;if(this.options.ecmaVersion>=6){if(r==="__proto__"&&a==="init"){if(t.proto){if(i){if(i.doubleProto<0){i.doubleProto=s.start}}else{this.raiseRecoverable(s.start,"Redefinition of __proto__ property")}}t.proto=true}return}r="$"+r;var n=t[r];if(n){var o;if(a==="init"){o=this.strict&&n.init||n.get||n.set}else{o=n.init||n[a]}if(o){this.raiseRecoverable(s.start,"Redefinition of property")}}else{n=t[r]={init:false,get:false,set:false}}n[a]=true};Ae.parseExpression=function(e,t){var i=this;return this.catchStackOverflow(function(){var s=i.start,r=i.startLoc;var a=i.parseMaybeAssign(e,t);if(i.type===b.comma){var n=i.startNodeAt(s,r);n.expressions=[a];while(i.eat(b.comma)){n.expressions.push(i.parseMaybeAssign(e,t))}return i.finishNode(n,"SequenceExpression")}return a})};Ae.parseMaybeAssign=function(e,t,i){if(this.isContextual("yield")){if(this.inGenerator){return this.parseYield(e)}else{this.exprAllowed=false}}var s=false,r=-1,a=-1,n=-1;if(t){r=t.parenthesizedAssign;a=t.trailingComma;n=t.doubleProto;t.parenthesizedAssign=t.trailingComma=-1}else{t=new fe;s=true}var o=this.start,h=this.startLoc;if(this.type===b.parenL||this.type===b.name){this.potentialArrowAt=this.start;this.potentialArrowInForAwait=e==="await"}var p=this.parseMaybeConditional(e,t);if(i){p=i.call(this,p,o,h)}if(this.type.isAssign){var u=this.startNodeAt(o,h);u.operator=this.value;if(this.type===b.eq){p=this.toAssignable(p,false,t)}if(!s){t.parenthesizedAssign=t.trailingComma=-1;if(t.shorthandAssign>=p.start){t.shorthandAssign=-1}if(t.doubleProto>=p.start){t.doubleProto=-1}}if(this.type===b.eq){this.checkLValPattern(p)}else{this.checkLValSimple(p)}u.left=p;this.next();u.right=this.parseMaybeAssign(e);if(n>-1){t.doubleProto=n}return this.finishNode(u,"AssignmentExpression")}else{if(s){this.checkExpressionErrors(t,true)}}if(r>-1){t.parenthesizedAssign=r}if(a>-1){t.trailingComma=a}return p};Ae.parseMaybeConditional=function(e,t){var i=this.start,s=this.startLoc;var r=this.parseExprOps(e,t);if(this.checkExpressionErrors(t)){return r}if(!(r.type==="ArrowFunctionExpression"&&r.start===i)&&this.eat(b.question)){var a=this.startNodeAt(i,s);a.test=r;a.consequent=this.parseMaybeAssign();this.expect(b.colon);a.alternate=this.parseMaybeAssign(e);return this.finishNode(a,"ConditionalExpression")}return r};Ae.parseExprOps=function(e,t){var i=this.start,s=this.startLoc;var r=this.parseMaybeUnary(t,false,false,e);if(this.checkExpressionErrors(t)){return r}return r.start===i&&r.type==="ArrowFunctionExpression"?r:this.parseExprOp(r,i,s,-1,e)};Ae.parseExprOp=function(e,t,i,s,r){var a=this.type.binop;if(a!=null&&(!r||this.type!==b._in)){if(a>s){var n=this.type===b.logicalOR||this.type===b.logicalAND;var o=this.type===b.coalesce;if(o){a=b.logicalAND.binop}var h=this.value;this.next();var p=this.start,u=this.startLoc;var l=this.parseExprOp(this.parseMaybeUnary(null,false,false,r),p,u,a,r);var c=this.buildBinary(t,i,e,l,h,n||o);if(n&&this.type===b.coalesce||o&&(this.type===b.logicalOR||this.type===b.logicalAND)){this.raiseRecoverable(this.start,"Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses")}return this.parseExprOp(c,t,i,s,r)}}return e};Ae.buildBinary=function(e,t,i,s,r,a){if(s.type==="PrivateIdentifier"){this.raise(s.start,"Private identifier can only be left side of binary expression")}var n=this.startNodeAt(e,t);n.left=i;n.operator=r;n.right=s;return this.finishNode(n,a?"LogicalExpression":"BinaryExpression")};Ae.parseMaybeUnary=function(e,t,i,s){var r=this.start,a=this.startLoc,n;if(this.isContextual("await")&&this.canAwait){n=this.parseAwait(s);t=true}else if(this.type.prefix){var o=this.startNode(),h=this.type===b.incDec;o.operator=this.value;o.prefix=true;this.next();o.argument=this.parseMaybeUnary(null,true,h,s);this.checkExpressionErrors(e,true);if(h){this.checkLValSimple(o.argument)}else if(this.strict&&o.operator==="delete"&&Ie(o.argument)){this.raiseRecoverable(o.start,"Deleting local variable in strict mode")}else if(o.operator==="delete"&&Pe(o.argument)){this.raiseRecoverable(o.start,"Private fields can not be deleted")}else{t=true}n=this.finishNode(o,h?"UpdateExpression":"UnaryExpression")}else if(!t&&this.type===b.privateId){if((s||this.privateNameStack.length===0)&&this.options.checkPrivateFields){this.unexpected()}n=this.parsePrivateIdent();if(this.type!==b._in){this.unexpected()}}else{n=this.parseExprSubscripts(e,s);if(this.checkExpressionErrors(e)){return n}while(this.type.postfix&&!this.canInsertSemicolon()){var p=this.startNodeAt(r,a);p.operator=this.value;p.prefix=false;p.argument=n;this.checkLValSimple(n);this.next();n=this.finishNode(p,"UpdateExpression")}}if(!i&&!(n.type==="ArrowFunctionExpression"&&n.start===r)&&this.eat(b.starstar)){if(t){this.unexpected(this.lastTokStart)}else{return this.buildBinary(r,a,n,this.parseMaybeUnary(null,false,false,s),"**",false)}}else{return n}};function Ie(e){return e.type==="Identifier"||e.type==="ParenthesizedExpression"&&Ie(e.expression)}function Pe(e){return e.type==="MemberExpression"&&e.property.type==="PrivateIdentifier"||e.type==="ChainExpression"&&Pe(e.expression)||e.type==="ParenthesizedExpression"&&Pe(e.expression)}Ae.parseExprSubscripts=function(e,t){var i=this.start,s=this.startLoc;var r=-1,a=-1;if(e){r=e.doubleProto;a=e.shorthandAssign;e.doubleProto=e.shorthandAssign=-1}var n=this.parseExprAtom(e,t);if(n.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")"){return n}var o=this.parseSubscripts(n,i,s,false,t);if(e){if(o.end>n.end){this.checkExpressionErrors(e,true);if(e.parenthesizedAssign>=o.start){e.parenthesizedAssign=-1}if(e.parenthesizedBind>=o.start){e.parenthesizedBind=-1}if(e.trailingComma>=o.start){e.trailingComma=-1}}if(r>-1){e.doubleProto=r}if(a>-1){e.shorthandAssign=a}}return o};Ae.parseSubscripts=function(e,t,i,s,r){var a=this.options.ecmaVersion>=8&&e.type==="Identifier"&&e.name==="async"&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&e.end-e.start===5&&this.potentialArrowAt===e.start;var n=false;while(true){var o=this.parseSubscript(e,t,i,s,a,n,r);if(o.optional){n=true}if(o.end===e.end||o.type==="ArrowFunctionExpression"){if(n){var h=this.startNodeAt(t,i);h.expression=o;o=this.finishNode(h,"ChainExpression")}return o}e=o;a=false}};Ae.shouldParseAsyncArrow=function(){return!this.canInsertSemicolon()&&this.eat(b.arrow)};Ae.parseSubscriptAsyncArrow=function(e,t,i,s){return this.parseArrowExpression(this.startNodeAt(e,t),i,true,s)};Ae.parseSubscript=function(e,t,i,s,r,a,n){var o=this.options.ecmaVersion>=11;var h=o&&this.eat(b.questionDot);if(s&&h){this.raise(this.lastTokStart,"Optional chaining cannot appear in the callee of new expressions")}var p=this.eat(b.bracketL);if(p||h&&this.type!==b.parenL&&this.type!==b.backQuote||this.eat(b.dot)){var u=this.startNodeAt(t,i);u.object=e;if(p){u.property=this.parseExpression();this.expect(b.bracketR)}else if(this.type===b.privateId&&e.type!=="Super"){u.property=this.parsePrivateIdent()}else{u.property=this.parseIdent(this.options.allowReserved!=="never")}u.computed=!!p;if(o){u.optional=h}e=this.finishNode(u,"MemberExpression")}else if(!s&&this.eat(b.parenL)){var l=new fe,c=this.yieldPos,f=this.awaitPos,d=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;var m=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,false,l);if(r&&!h&&this.shouldParseAsyncArrow()){this.checkPatternErrors(l,false);this.checkYieldAwaitInDefaultParams();if(this.awaitIdentPos>0){this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function")}this.yieldPos=c;this.awaitPos=f;this.awaitIdentPos=d;return this.parseSubscriptAsyncArrow(t,i,m,n)}this.checkExpressionErrors(l,true);this.yieldPos=c||this.yieldPos;this.awaitPos=f||this.awaitPos;this.awaitIdentPos=d||this.awaitIdentPos;var v=this.startNodeAt(t,i);v.callee=e;v.arguments=m;if(o){v.optional=h}e=this.finishNode(v,"CallExpression")}else if(this.type===b.backQuote){if(h||a){this.raise(this.start,"Optional chaining cannot appear in the tag of tagged template expressions")}var g=this.startNodeAt(t,i);g.tag=e;g.quasi=this.parseTemplate({isTagged:true});e=this.finishNode(g,"TaggedTemplateExpression")}return e};Ae.parseExprAtom=function(e,t,i){if(this.type===b.slash){this.readRegexp()}var s,r=this.potentialArrowAt===this.start;switch(this.type){case b._super:if(!this.allowSuper){this.raise(this.start,"'super' keyword outside a method")}s=this.startNode();this.next();if(this.type===b.parenL&&!this.allowDirectSuper){this.raise(s.start,"super() call outside constructor of a subclass")}if(this.type!==b.dot&&this.type!==b.bracketL&&this.type!==b.parenL){this.unexpected()}return this.finishNode(s,"Super");case b._this:s=this.startNode();this.next();return this.finishNode(s,"ThisExpression");case b.name:var a=this.start,n=this.startLoc,o=this.containsEsc;var h=this.parseIdent(false);if(this.options.ecmaVersion>=8&&!o&&h.name==="async"&&!this.canInsertSemicolon()&&this.eat(b._function)){this.overrideContext(Ce.f_expr);return this.parseFunction(this.startNodeAt(a,n),0,false,true,t)}if(r&&!this.canInsertSemicolon()){if(this.eat(b.arrow)){return this.parseArrowExpression(this.startNodeAt(a,n),[h],false,t)}if(this.options.ecmaVersion>=8&&h.name==="async"&&this.type===b.name&&!o&&(!this.potentialArrowInForAwait||this.value!=="of"||this.containsEsc)){h=this.parseIdent(false);if(this.canInsertSemicolon()||!this.eat(b.arrow)){this.unexpected()}return this.parseArrowExpression(this.startNodeAt(a,n),[h],true,t)}}return h;case b.regexp:var p=this.value;s=this.parseLiteral(p.value);s.regex={pattern:p.pattern,flags:p.flags};return s;case b.num:case b.string:return this.parseLiteral(this.value);case b._null:case b._true:case b._false:s=this.startNode();s.value=this.type===b._null?null:this.type===b._true;s.raw=this.type.keyword;this.next();return this.finishNode(s,"Literal");case b.parenL:var u=this.start,l=this.parseParenAndDistinguishExpression(r,t);if(e){if(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(l)){e.parenthesizedAssign=u}if(e.parenthesizedBind<0){e.parenthesizedBind=u}}return l;case b.bracketL:s=this.startNode();this.next();s.elements=this.parseExprList(b.bracketR,true,true,e);return this.finishNode(s,"ArrayExpression");case b.braceL:this.overrideContext(Ce.b_expr);return this.parseObj(false,e);case b._function:s=this.startNode();this.next();return this.parseFunction(s,0);case b._class:return this.parseClass(this.startNode(),false);case b._new:return this.parseNew();case b.backQuote:return this.parseTemplate();case b._import:if(this.options.ecmaVersion>=11){return this.parseExprImport(i)}else{return this.unexpected()}default:return this.parseExprAtomDefault()}};Ae.parseExprAtomDefault=function(){this.unexpected()};Ae.parseExprImport=function(e){var t=this.startNode();if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword import")}this.next();if(this.type===b.parenL&&!e){return this.parseDynamicImport(t)}else if(this.type===b.dot){var i=this.startNodeAt(t.start,t.loc&&t.loc.start);i.name="import";t.meta=this.finishNode(i,"Identifier");return this.parseImportMeta(t)}else{this.unexpected()}};Ae.parseDynamicImport=function(e){this.next();e.source=this.parseMaybeAssign();if(this.options.ecmaVersion>=16){if(!this.eat(b.parenR)){this.expect(b.comma);if(!this.afterTrailingComma(b.parenR)){e.options=this.parseMaybeAssign();if(!this.eat(b.parenR)){this.expect(b.comma);if(!this.afterTrailingComma(b.parenR)){this.unexpected()}}}else{e.options=null}}else{e.options=null}}else{if(!this.eat(b.parenR)){var t=this.start;if(this.eat(b.comma)&&this.eat(b.parenR)){this.raiseRecoverable(t,"Trailing comma is not allowed in import()")}else{this.unexpected(t)}}}return this.finishNode(e,"ImportExpression")};Ae.parseImportMeta=function(e){this.next();var t=this.containsEsc;e.property=this.parseIdent(true);if(e.property.name!=="meta"){this.raiseRecoverable(e.property.start,"The only valid meta property for import is 'import.meta'")}if(t){this.raiseRecoverable(e.start,"'import.meta' must not contain escaped characters")}if(this.options.sourceType!=="module"&&!this.options.allowImportExportEverywhere){this.raiseRecoverable(e.start,"Cannot use 'import.meta' outside a module")}return this.finishNode(e,"MetaProperty")};Ae.parseLiteral=function(e){var t=this.startNode();t.value=e;t.raw=this.input.slice(this.start,this.end);if(t.raw.charCodeAt(t.raw.length-1)===110){t.bigint=t.value!=null?t.value.toString():t.raw.slice(0,-1).replace(/_/g,"")}this.next();return this.finishNode(t,"Literal")};Ae.parseParenExpression=function(){this.expect(b.parenL);var e=this.parseExpression();this.expect(b.parenR);return e};Ae.shouldParseArrow=function(e){return!this.canInsertSemicolon()};Ae.parseParenAndDistinguishExpression=function(e,t){var i=this.start,s=this.startLoc,r,a=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var n=this.start,o=this.startLoc;var h=[],p=true,u=false;var l=new fe,c=this.yieldPos,f=this.awaitPos,d;this.yieldPos=0;this.awaitPos=0;while(this.type!==b.parenR){p?p=false:this.expect(b.comma);if(a&&this.afterTrailingComma(b.parenR,true)){u=true;break}else if(this.type===b.ellipsis){d=this.start;h.push(this.parseParenItem(this.parseRestBinding()));if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}break}else{h.push(this.parseMaybeAssign(false,l,this.parseParenItem))}}var m=this.lastTokEnd,v=this.lastTokEndLoc;this.expect(b.parenR);if(e&&this.shouldParseArrow(h)&&this.eat(b.arrow)){this.checkPatternErrors(l,false);this.checkYieldAwaitInDefaultParams();this.yieldPos=c;this.awaitPos=f;return this.parseParenArrowList(i,s,h,t)}if(!h.length||u){this.unexpected(this.lastTokStart)}if(d){this.unexpected(d)}this.checkExpressionErrors(l,true);this.yieldPos=c||this.yieldPos;this.awaitPos=f||this.awaitPos;if(h.length>1){r=this.startNodeAt(n,o);r.expressions=h;this.finishNodeAt(r,"SequenceExpression",m,v)}else{r=h[0]}}else{r=this.parseParenExpression()}if(this.options.preserveParens){var g=this.startNodeAt(i,s);g.expression=r;return this.finishNode(g,"ParenthesizedExpression")}else{return r}};Ae.parseParenItem=function(e){return e};Ae.parseParenArrowList=function(e,t,i,s){return this.parseArrowExpression(this.startNodeAt(e,t),i,false,s)};var Ve=[];Ae.parseNew=function(){if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword new")}var e=this.startNode();this.next();if(this.options.ecmaVersion>=6&&this.type===b.dot){var t=this.startNodeAt(e.start,e.loc&&e.loc.start);t.name="new";e.meta=this.finishNode(t,"Identifier");this.next();var i=this.containsEsc;e.property=this.parseIdent(true);if(e.property.name!=="target"){this.raiseRecoverable(e.property.start,"The only valid meta property for new is 'new.target'")}if(i){this.raiseRecoverable(e.start,"'new.target' must not contain escaped characters")}if(!this.allowNewDotTarget){this.raiseRecoverable(e.start,"'new.target' can only be used in functions and class static block")}return this.finishNode(e,"MetaProperty")}var s=this.start,r=this.startLoc;e.callee=this.parseSubscripts(this.parseExprAtom(null,false,true),s,r,true,false);if(e.callee.type==="Super"){this.raiseRecoverable(s,"Invalid use of 'super'")}if(this.eat(b.parenL)){e.arguments=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,false)}else{e.arguments=Ve}return this.finishNode(e,"NewExpression")};Ae.parseTemplateElement=function(e){var t=e.isTagged;var i=this.startNode();if(this.type===b.invalidTemplate){if(!t){this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal")}i.value={raw:this.value.replace(/\r\n?/g,"\n"),cooked:null}}else{i.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value}}this.next();i.tail=this.type===b.backQuote;return this.finishNode(i,"TemplateElement")};Ae.parseTemplate=function(e){if(e===void 0)e={};var t=e.isTagged;if(t===void 0)t=false;var i=this.startNode();this.next();i.expressions=[];var s=this.parseTemplateElement({isTagged:t});i.quasis=[s];while(!s.tail){if(this.type===b.eof){this.raise(this.pos,"Unterminated template literal")}this.expect(b.dollarBraceL);i.expressions.push(this.parseExpression());this.expect(b.braceR);i.quasis.push(s=this.parseTemplateElement({isTagged:t}))}this.next();return this.finishNode(i,"TemplateLiteral")};Ae.isAsyncProp=function(e){return!e.computed&&e.key.type==="Identifier"&&e.key.name==="async"&&(this.type===b.name||this.type===b.num||this.type===b.string||this.type===b.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===b.star)&&!k.test(this.input.slice(this.lastTokEnd,this.start))};Ae.parseObj=function(e,t){var i=this.startNode(),s=true,r={};i.properties=[];this.next();while(!this.eat(b.braceR)){if(!s){this.expect(b.comma);if(this.options.ecmaVersion>=5&&this.afterTrailingComma(b.braceR)){break}}else{s=false}var a=this.parseProperty(e,t);if(!e){this.checkPropClash(a,r,t)}i.properties.push(a)}return this.finishNode(i,e?"ObjectPattern":"ObjectExpression")};Ae.parseProperty=function(e,t){var i=this.startNode(),s,r,a,n;if(this.options.ecmaVersion>=9&&this.eat(b.ellipsis)){if(e){i.argument=this.parseIdent(false);if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}return this.finishNode(i,"RestElement")}i.argument=this.parseMaybeAssign(false,t);if(this.type===b.comma&&t&&t.trailingComma<0){t.trailingComma=this.start}return this.finishNode(i,"SpreadElement")}if(this.options.ecmaVersion>=6){i.method=false;i.shorthand=false;if(e||t){a=this.start;n=this.startLoc}if(!e){s=this.eat(b.star)}}var o=this.containsEsc;this.parsePropertyName(i);if(!e&&!o&&this.options.ecmaVersion>=8&&!s&&this.isAsyncProp(i)){r=true;s=this.options.ecmaVersion>=9&&this.eat(b.star);this.parsePropertyName(i)}else{r=false}this.parsePropertyValue(i,e,s,r,a,n,t,o);return this.finishNode(i,"Property")};Ae.parseGetterSetter=function(e){var t=e.key.name;this.parsePropertyName(e);e.value=this.parseMethod(false);e.kind=t;var i=e.kind==="get"?0:1;if(e.value.params.length!==i){var s=e.value.start;if(e.kind==="get"){this.raiseRecoverable(s,"getter should have no params")}else{this.raiseRecoverable(s,"setter should have exactly one param")}}else{if(e.kind==="set"&&e.value.params[0].type==="RestElement"){this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}}};Ae.parsePropertyValue=function(e,t,i,s,r,a,n,o){if((i||s)&&this.type===b.colon){this.unexpected()}if(this.eat(b.colon)){e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(false,n);e.kind="init"}else if(this.options.ecmaVersion>=6&&this.type===b.parenL){if(t){this.unexpected()}e.method=true;e.value=this.parseMethod(i,s);e.kind="init"}else if(!t&&!o&&this.options.ecmaVersion>=5&&!e.computed&&e.key.type==="Identifier"&&(e.key.name==="get"||e.key.name==="set")&&(this.type!==b.comma&&this.type!==b.braceR&&this.type!==b.eq)){if(i||s){this.unexpected()}this.parseGetterSetter(e)}else if(this.options.ecmaVersion>=6&&!e.computed&&e.key.type==="Identifier"){if(i||s){this.unexpected()}this.checkUnreserved(e.key);if(e.key.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=r}if(t){e.value=this.parseMaybeDefault(r,a,this.copyNode(e.key))}else if(this.type===b.eq&&n){if(n.shorthandAssign<0){n.shorthandAssign=this.start}e.value=this.parseMaybeDefault(r,a,this.copyNode(e.key))}else{e.value=this.copyNode(e.key)}e.kind="init";e.shorthand=true}else{this.unexpected()}};Ae.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(b.bracketL)){e.computed=true;e.key=this.parseMaybeAssign();this.expect(b.bracketR);return e.key}else{e.computed=false}}return e.key=this.type===b.num||this.type===b.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never")};Ae.initFunction=function(e){e.id=null;if(this.options.ecmaVersion>=6){e.generator=e.expression=false}if(this.options.ecmaVersion>=8){e.async=false}};Ae.parseMethod=function(e,t,i){var s=this.startNode(),r=this.yieldPos,a=this.awaitPos,n=this.awaitIdentPos;this.initFunction(s);if(this.options.ecmaVersion>=6){s.generator=e}if(this.options.ecmaVersion>=8){s.async=!!t}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(te(t,s.generator)|Y|(i?X:0));this.expect(b.parenL);s.params=this.parseBindingList(b.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams();this.parseFunctionBody(s,false,true,false);this.yieldPos=r;this.awaitPos=a;this.awaitIdentPos=n;return this.finishNode(s,"FunctionExpression")};Ae.parseArrowExpression=function(e,t,i,s){var r=this.yieldPos,a=this.awaitPos,n=this.awaitIdentPos;this.enterScope(te(i,false)|K);this.initFunction(e);if(this.options.ecmaVersion>=8){e.async=!!i}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;e.params=this.toAssignableList(t,true);this.parseFunctionBody(e,true,false,s);this.yieldPos=r;this.awaitPos=a;this.awaitIdentPos=n;return this.finishNode(e,"ArrowFunctionExpression")};Ae.parseFunctionBody=function(e,t,i,s){var r=t&&this.type!==b.braceL;var a=this.strict,n=false;if(r){e.body=this.parseMaybeAssign(s);e.expression=true;this.checkParams(e,false)}else{var o=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);if(!a||o){n=this.strictDirective(this.end);if(n&&o){this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list")}}var h=this.labels;this.labels=[];if(n){this.strict=true}this.checkParams(e,!a&&!n&&!t&&!i&&this.isSimpleParamList(e.params));if(this.strict&&e.id){this.checkLValSimple(e.id,oe)}e.body=this.parseBlock(false,undefined,n&&!a);e.expression=false;this.adaptDirectivePrologue(e.body.body);this.labels=h}this.exitScope()};Ae.isSimpleParamList=function(e){for(var t=0,i=e;t<i.length;t+=1){var s=i[t];if(s.type!=="Identifier"){return false}}return true};Ae.checkParams=function(e,t){var i=Object.create(null);for(var s=0,r=e.params;s<r.length;s+=1){var a=r[s];this.checkLValInnerPattern(a,se,t?null:i)}};Ae.parseExprList=function(e,t,i,s){var r=[],a=true;while(!this.eat(e)){if(!a){this.expect(b.comma);if(t&&this.afterTrailingComma(e)){break}}else{a=false}var n=void 0;if(i&&this.type===b.comma){n=null}else if(this.type===b.ellipsis){n=this.parseSpread(s);if(s&&this.type===b.comma&&s.trailingComma<0){s.trailingComma=this.start}}else{n=this.parseMaybeAssign(false,s)}r.push(n)}return r};Ae.checkUnreserved=function(e){var t=e.start;var i=e.end;var s=e.name;if(this.inGenerator&&s==="yield"){this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator")}if(this.inAsync&&s==="await"){this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function")}if(!(this.currentThisScope().flags&ee)&&s==="arguments"){this.raiseRecoverable(t,"Cannot use 'arguments' in class field initializer")}if(this.inClassStaticBlock&&(s==="arguments"||s==="await")){this.raise(t,"Cannot use "+s+" in class static initialization block")}if(this.keywords.test(s)){this.raise(t,"Unexpected keyword '"+s+"'")}if(this.options.ecmaVersion<6&&this.input.slice(t,i).indexOf("\\")!==-1){return}var r=this.strict?this.reservedWordsStrict:this.reservedWords;if(r.test(s)){if(!this.inAsync&&s==="await"){this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function")}this.raiseRecoverable(t,"The keyword '"+s+"' is reserved")}};Ae.parseIdent=function(e){var t=this.parseIdentNode();this.next(!!e);this.finishNode(t,"Identifier");if(!e){this.checkUnreserved(t);if(t.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=t.start}}return t};Ae.parseIdentNode=function(){var e=this.startNode();if(this.type===b.name){e.name=this.value}else if(this.type.keyword){e.name=this.type.keyword;if((e.name==="class"||e.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)){this.context.pop()}this.type=b.name}else{this.unexpected()}return e};Ae.parsePrivateIdent=function(){var e=this.startNode();if(this.type===b.privateId){e.name=this.value}else{this.unexpected()}this.next();this.finishNode(e,"PrivateIdentifier");if(this.options.checkPrivateFields){if(this.privateNameStack.length===0){this.raise(e.start,"Private field '#"+e.name+"' must be declared in an enclosing class")}else{this.privateNameStack[this.privateNameStack.length-1].used.push(e)}}return e};Ae.parseYield=function(e){if(!this.yieldPos){this.yieldPos=this.start}var t=this.startNode();this.next();if(this.type===b.semi||this.canInsertSemicolon()||this.type!==b.star&&!this.type.startsExpr){t.delegate=false;t.argument=null}else{t.delegate=this.eat(b.star);t.argument=this.parseMaybeAssign(e)}return this.finishNode(t,"YieldExpression")};Ae.parseAwait=function(e){if(!this.awaitPos){this.awaitPos=this.start}var t=this.startNode();this.next();t.argument=this.parseMaybeUnary(null,true,false,e);return this.finishNode(t,"AwaitExpression")};var Ne=he.prototype;Ne.raise=function(e,t){var i=M(this.input,e);t+=" ("+i.line+":"+i.column+")";if(this.sourceFile){t+=" in "+this.sourceFile}var s=new SyntaxError(t);s.pos=e;s.loc=i;s.raisedAt=this.pos;throw s};Ne.raiseRecoverable=Ne.raise;Ne.curPosition=function(){if(this.options.locations){return new O(this.curLine,this.pos-this.lineStart)}};var Te=he.prototype;var Le=function e(t){this.flags=t;this.var=[];this.lexical=[];this.functions=[]};Te.enterScope=function(e){this.scopeStack.push(new Le(e))};Te.exitScope=function(){this.scopeStack.pop()};Te.treatFunctionsAsVarInScope=function(e){return e.flags&H||!this.inModule&&e.flags&G};Te.declareName=function(e,t,i){var s=false;if(t===re){var r=this.currentScope();s=r.lexical.indexOf(e)>-1||r.functions.indexOf(e)>-1||r.var.indexOf(e)>-1;r.lexical.push(e);if(this.inModule&&r.flags&G){delete this.undefinedExports[e]}}else if(t===ne){var a=this.currentScope();a.lexical.push(e)}else if(t===ae){var n=this.currentScope();if(this.treatFunctionsAsVar){s=n.lexical.indexOf(e)>-1}else{s=n.lexical.indexOf(e)>-1||n.var.indexOf(e)>-1}n.functions.push(e)}else{for(var o=this.scopeStack.length-1;o>=0;--o){var h=this.scopeStack[o];if(h.lexical.indexOf(e)>-1&&!(h.flags&Q&&h.lexical[0]===e)||!this.treatFunctionsAsVarInScope(h)&&h.functions.indexOf(e)>-1){s=true;break}h.var.push(e);if(this.inModule&&h.flags&G){delete this.undefinedExports[e]}if(h.flags&ee){break}}}if(s){this.raiseRecoverable(i,"Identifier '"+e+"' has already been declared")}};Te.checkLocalExport=function(e){if(this.scopeStack[0].lexical.indexOf(e.name)===-1&&this.scopeStack[0].var.indexOf(e.name)===-1){this.undefinedExports[e.name]=e}};Te.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]};Te.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&(ee|$|Z)){return t}}};Te.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&(ee|$|Z)&&!(t.flags&K)){return t}}};var Re=function e(t,i,s){this.type="";this.start=i;this.end=0;if(t.options.locations){this.loc=new B(t,s)}if(t.options.directSourceFile){this.sourceFile=t.options.directSourceFile}if(t.options.ranges){this.range=[i,0]}};var De=he.prototype;De.startNode=function(){return new Re(this,this.start,this.startLoc)};De.startNodeAt=function(e,t){return new Re(this,e,t)};function Oe(e,t,i,s){e.type=t;e.end=i;if(this.options.locations){e.loc.end=s}if(this.options.ranges){e.range[1]=i}return e}De.finishNode=function(e,t){return Oe.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)};De.finishNodeAt=function(e,t,i,s){return Oe.call(this,e,t,i,s)};De.copyNode=function(e){var t=new Re(this,e.start,this.startLoc);for(var i in e){t[i]=e[i]}return t};var Be="Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";var Me="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";var Fe=Me+" Extended_Pictographic";var Ue=Fe;var qe=Ue+" EBase EComp EMod EPres ExtPict";var je=qe;var Ge=je;var He={9:Me,10:Fe,11:Ue,12:qe,13:je,14:Ge};var We="Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";var ze={9:"",10:"",11:"",12:"",13:"",14:We};var Ke="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";var Qe="Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";var Ye=Qe+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";var Xe=Ye+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";var Ze=Xe+" Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";var $e=Ze+" Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";var Je=$e+" "+Be;var et={9:Qe,10:Ye,11:Xe,12:Ze,13:$e,14:Je};var tt={};function it(e){var t=tt[e]={binary:L(He[e]+" "+Ke),binaryOfStrings:L(ze[e]),nonBinary:{General_Category:L(Ke),Script:L(et[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script;t.nonBinary.gc=t.nonBinary.General_Category;t.nonBinary.sc=t.nonBinary.Script;t.nonBinary.scx=t.nonBinary.Script_Extensions}for(var st=0,rt=[9,10,11,12,13,14];st<rt.length;st+=1){var at=rt[st];it(at)}var nt=he.prototype;var ot=function e(t,i){this.parent=t;this.base=i||this};ot.prototype.separatedFrom=function e(t){for(var i=this;i;i=i.parent){for(var s=t;s;s=s.parent){if(i.base===s.base&&i!==s){return true}}}return false};ot.prototype.sibling=function e(){return new ot(this.parent,this.base)};var ht=function e(t){this.parser=t;this.validFlags="gim"+(t.options.ecmaVersion>=6?"uy":"")+(t.options.ecmaVersion>=9?"s":"")+(t.options.ecmaVersion>=13?"d":"")+(t.options.ecmaVersion>=15?"v":"");this.unicodeProperties=tt[t.options.ecmaVersion>=14?14:t.options.ecmaVersion];this.source="";this.flags="";this.start=0;this.switchU=false;this.switchV=false;this.switchN=false;this.pos=0;this.lastIntValue=0;this.lastStringValue="";this.lastAssertionIsQuantifiable=false;this.numCapturingParens=0;this.maxBackReference=0;this.groupNames=Object.create(null);this.backReferenceNames=[];this.branchID=null};ht.prototype.reset=function e(t,i,s){var r=s.indexOf("v")!==-1;var a=s.indexOf("u")!==-1;this.start=t|0;this.source=i+"";this.flags=s;if(r&&this.parser.options.ecmaVersion>=15){this.switchU=true;this.switchV=true;this.switchN=true}else{this.switchU=a&&this.parser.options.ecmaVersion>=6;this.switchV=false;this.switchN=a&&this.parser.options.ecmaVersion>=9}};ht.prototype.raise=function e(t){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+t)};ht.prototype.at=function e(t,i){if(i===void 0)i=false;var s=this.source;var r=s.length;if(t>=r){return-1}var a=s.charCodeAt(t);if(!(i||this.switchU)||a<=55295||a>=57344||t+1>=r){return a}var n=s.charCodeAt(t+1);return n>=56320&&n<=57343?(a<<10)+n-56613888:a};ht.prototype.nextIndex=function e(t,i){if(i===void 0)i=false;var s=this.source;var r=s.length;if(t>=r){return r}var a=s.charCodeAt(t),n;if(!(i||this.switchU)||a<=55295||a>=57344||t+1>=r||(n=s.charCodeAt(t+1))<56320||n>57343){return t+1}return t+2};ht.prototype.current=function e(t){if(t===void 0)t=false;return this.at(this.pos,t)};ht.prototype.lookahead=function e(t){if(t===void 0)t=false;return this.at(this.nextIndex(this.pos,t),t)};ht.prototype.advance=function e(t){if(t===void 0)t=false;this.pos=this.nextIndex(this.pos,t)};ht.prototype.eat=function e(t,i){if(i===void 0)i=false;if(this.current(i)===t){this.advance(i);return true}return false};ht.prototype.eatChars=function e(t,i){if(i===void 0)i=false;var s=this.pos;for(var r=0,a=t;r<a.length;r+=1){var n=a[r];var o=this.at(s,i);if(o===-1||o!==n){return false}s=this.nextIndex(s,i)}this.pos=s;return true};nt.validateRegExpFlags=function(e){var t=e.validFlags;var i=e.flags;var s=false;var r=false;for(var a=0;a<i.length;a++){var n=i.charAt(a);if(t.indexOf(n)===-1){this.raise(e.start,"Invalid regular expression flag")}if(i.indexOf(n,a+1)>-1){this.raise(e.start,"Duplicate regular expression flag")}if(n==="u"){s=true}if(n==="v"){r=true}}if(this.options.ecmaVersion>=15&&s&&r){this.raise(e.start,"Invalid regular expression flag")}};function pt(e){for(var t in e){return true}return false}nt.validateRegExpPattern=function(e){this.regexp_pattern(e);if(!e.switchN&&this.options.ecmaVersion>=9&&pt(e.groupNames)){e.switchN=true;this.regexp_pattern(e)}};nt.regexp_pattern=function(e){e.pos=0;e.lastIntValue=0;e.lastStringValue="";e.lastAssertionIsQuantifiable=false;e.numCapturingParens=0;e.maxBackReference=0;e.groupNames=Object.create(null);e.backReferenceNames.length=0;e.branchID=null;this.regexp_disjunction(e);if(e.pos!==e.source.length){if(e.eat(41)){e.raise("Unmatched ')'")}if(e.eat(93)||e.eat(125)){e.raise("Lone quantifier brackets")}}if(e.maxBackReference>e.numCapturingParens){e.raise("Invalid escape")}for(var t=0,i=e.backReferenceNames;t<i.length;t+=1){var s=i[t];if(!e.groupNames[s]){e.raise("Invalid named capture referenced")}}};nt.regexp_disjunction=function(e){var t=this.options.ecmaVersion>=16;if(t){e.branchID=new ot(e.branchID,null)}this.regexp_alternative(e);while(e.eat(124)){if(t){e.branchID=e.branchID.sibling()}this.regexp_alternative(e)}if(t){e.branchID=e.branchID.parent}if(this.regexp_eatQuantifier(e,true)){e.raise("Nothing to repeat")}if(e.eat(123)){e.raise("Lone quantifier brackets")}};nt.regexp_alternative=function(e){while(e.pos<e.source.length&&this.regexp_eatTerm(e)){}};nt.regexp_eatTerm=function(e){if(this.regexp_eatAssertion(e)){if(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)){if(e.switchU){e.raise("Invalid quantifier")}}return true}if(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e)){this.regexp_eatQuantifier(e);return true}return false};nt.regexp_eatAssertion=function(e){var t=e.pos;e.lastAssertionIsQuantifiable=false;if(e.eat(94)||e.eat(36)){return true}if(e.eat(92)){if(e.eat(66)||e.eat(98)){return true}e.pos=t}if(e.eat(40)&&e.eat(63)){var i=false;if(this.options.ecmaVersion>=9){i=e.eat(60)}if(e.eat(61)||e.eat(33)){this.regexp_disjunction(e);if(!e.eat(41)){e.raise("Unterminated group")}e.lastAssertionIsQuantifiable=!i;return true}}e.pos=t;return false};nt.regexp_eatQuantifier=function(e,t){if(t===void 0)t=false;if(this.regexp_eatQuantifierPrefix(e,t)){e.eat(63);return true}return false};nt.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)};nt.regexp_eatBracedQuantifier=function(e,t){var i=e.pos;if(e.eat(123)){var s=0,r=-1;if(this.regexp_eatDecimalDigits(e)){s=e.lastIntValue;if(e.eat(44)&&this.regexp_eatDecimalDigits(e)){r=e.lastIntValue}if(e.eat(125)){if(r!==-1&&r<s&&!t){e.raise("numbers out of order in {} quantifier")}return true}}if(e.switchU&&!t){e.raise("Incomplete quantifier")}e.pos=i}return false};nt.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)};nt.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e)){return true}e.pos=t}return false};nt.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)){if(this.options.ecmaVersion>=16){var i=this.regexp_eatModifiers(e);var s=e.eat(45);if(i||s){for(var r=0;r<i.length;r++){var a=i.charAt(r);if(i.indexOf(a,r+1)>-1){e.raise("Duplicate regular expression modifiers")}}if(s){var n=this.regexp_eatModifiers(e);if(!i&&!n&&e.current()===58){e.raise("Invalid regular expression modifiers")}for(var o=0;o<n.length;o++){var h=n.charAt(o);if(n.indexOf(h,o+1)>-1||i.indexOf(h)>-1){e.raise("Duplicate regular expression modifiers")}}}}}if(e.eat(58)){this.regexp_disjunction(e);if(e.eat(41)){return true}e.raise("Unterminated group")}}e.pos=t}return false};nt.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9){this.regexp_groupSpecifier(e)}else if(e.current()===63){e.raise("Invalid group")}this.regexp_disjunction(e);if(e.eat(41)){e.numCapturingParens+=1;return true}e.raise("Unterminated group")}return false};nt.regexp_eatModifiers=function(e){var t="";var i=0;while((i=e.current())!==-1&&ut(i)){t+=R(i);e.advance()}return t};function ut(e){return e===105||e===109||e===115}nt.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)};nt.regexp_eatInvalidBracedQuantifier=function(e){if(this.regexp_eatBracedQuantifier(e,true)){e.raise("Nothing to repeat")}return false};nt.regexp_eatSyntaxCharacter=function(e){var t=e.current();if(lt(t)){e.lastIntValue=t;e.advance();return true}return false};function lt(e){return e===36||e>=40&&e<=43||e===46||e===63||e>=91&&e<=94||e>=123&&e<=125}nt.regexp_eatPatternCharacters=function(e){var t=e.pos;var i=0;while((i=e.current())!==-1&&!lt(i)){e.advance()}return e.pos!==t};nt.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();if(t!==-1&&t!==36&&!(t>=40&&t<=43)&&t!==46&&t!==63&&t!==91&&t!==94&&t!==124){e.advance();return true}return false};nt.regexp_groupSpecifier=function(e){if(e.eat(63)){if(!this.regexp_eatGroupName(e)){e.raise("Invalid group")}var t=this.options.ecmaVersion>=16;var i=e.groupNames[e.lastStringValue];if(i){if(t){for(var s=0,r=i;s<r.length;s+=1){var a=r[s];if(!a.separatedFrom(e.branchID)){e.raise("Duplicate capture group name")}}}else{e.raise("Duplicate capture group name")}}if(t){(i||(e.groupNames[e.lastStringValue]=[])).push(e.branchID)}else{e.groupNames[e.lastStringValue]=true}}};nt.regexp_eatGroupName=function(e){e.lastStringValue="";if(e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62)){return true}e.raise("Invalid capture group name")}return false};nt.regexp_eatRegExpIdentifierName=function(e){e.lastStringValue="";if(this.regexp_eatRegExpIdentifierStart(e)){e.lastStringValue+=R(e.lastIntValue);while(this.regexp_eatRegExpIdentifierPart(e)){e.lastStringValue+=R(e.lastIntValue)}return true}return false};nt.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos;var i=this.options.ecmaVersion>=11;var s=e.current(i);e.advance(i);if(s===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,i)){s=e.lastIntValue}if(ct(s)){e.lastIntValue=s;return true}e.pos=t;return false};function ct(e){return c(e,true)||e===36||e===95}nt.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos;var i=this.options.ecmaVersion>=11;var s=e.current(i);e.advance(i);if(s===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,i)){s=e.lastIntValue}if(ft(s)){e.lastIntValue=s;return true}e.pos=t;return false};function ft(e){return f(e,true)||e===36||e===95||e===8204||e===8205}nt.regexp_eatAtomEscape=function(e){if(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e)){return true}if(e.switchU){if(e.current()===99){e.raise("Invalid unicode escape")}e.raise("Invalid escape")}return false};nt.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var i=e.lastIntValue;if(e.switchU){if(i>e.maxBackReference){e.maxBackReference=i}return true}if(i<=e.numCapturingParens){return true}e.pos=t}return false};nt.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e)){e.backReferenceNames.push(e.lastStringValue);return true}e.raise("Invalid named reference")}return false};nt.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e,false)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)};nt.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e)){return true}e.pos=t}return false};nt.regexp_eatZero=function(e){if(e.current()===48&&!Ct(e.lookahead())){e.lastIntValue=0;e.advance();return true}return false};nt.regexp_eatControlEscape=function(e){var t=e.current();if(t===116){e.lastIntValue=9;e.advance();return true}if(t===110){e.lastIntValue=10;e.advance();return true}if(t===118){e.lastIntValue=11;e.advance();return true}if(t===102){e.lastIntValue=12;e.advance();return true}if(t===114){e.lastIntValue=13;e.advance();return true}return false};nt.regexp_eatControlLetter=function(e){var t=e.current();if(dt(t)){e.lastIntValue=t%32;e.advance();return true}return false};function dt(e){return e>=65&&e<=90||e>=97&&e<=122}nt.regexp_eatRegExpUnicodeEscapeSequence=function(e,t){if(t===void 0)t=false;var i=e.pos;var s=t||e.switchU;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var r=e.lastIntValue;if(s&&r>=55296&&r<=56319){var a=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var n=e.lastIntValue;if(n>=56320&&n<=57343){e.lastIntValue=(r-55296)*1024+(n-56320)+65536;return true}}e.pos=a;e.lastIntValue=r}return true}if(s&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&mt(e.lastIntValue)){return true}if(s){e.raise("Invalid unicode escape")}e.pos=i}return false};function mt(e){return e>=0&&e<=1114111}nt.regexp_eatIdentityEscape=function(e){if(e.switchU){if(this.regexp_eatSyntaxCharacter(e)){return true}if(e.eat(47)){e.lastIntValue=47;return true}return false}var t=e.current();if(t!==99&&(!e.switchN||t!==107)){e.lastIntValue=t;e.advance();return true}return false};nt.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48);e.advance()}while((t=e.current())>=48&&t<=57);return true}return false};var vt=0;var gt=1;var xt=2;nt.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(yt(t)){e.lastIntValue=-1;e.advance();return gt}var i=false;if(e.switchU&&this.options.ecmaVersion>=9&&((i=t===80)||t===112)){e.lastIntValue=-1;e.advance();var s;if(e.eat(123)&&(s=this.regexp_eatUnicodePropertyValueExpression(e))&&e.eat(125)){if(i&&s===xt){e.raise("Invalid property name")}return s}e.raise("Invalid property name")}return vt};function yt(e){return e===100||e===68||e===115||e===83||e===119||e===87}nt.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var i=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var s=e.lastStringValue;this.regexp_validateUnicodePropertyNameAndValue(e,i,s);return gt}}e.pos=t;if(this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var r=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,r)}return vt};nt.regexp_validateUnicodePropertyNameAndValue=function(e,t,i){if(!V(e.unicodeProperties.nonBinary,t)){e.raise("Invalid property name")}if(!e.unicodeProperties.nonBinary[t].test(i)){e.raise("Invalid property value")}};nt.regexp_validateUnicodePropertyNameOrValue=function(e,t){if(e.unicodeProperties.binary.test(t)){return gt}if(e.switchV&&e.unicodeProperties.binaryOfStrings.test(t)){return xt}e.raise("Invalid property name")};nt.regexp_eatUnicodePropertyName=function(e){var t=0;e.lastStringValue="";while(bt(t=e.current())){e.lastStringValue+=R(t);e.advance()}return e.lastStringValue!==""};function bt(e){return dt(e)||e===95}nt.regexp_eatUnicodePropertyValue=function(e){var t=0;e.lastStringValue="";while(kt(t=e.current())){e.lastStringValue+=R(t);e.advance()}return e.lastStringValue!==""};function kt(e){return bt(e)||Ct(e)}nt.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)};nt.regexp_eatCharacterClass=function(e){if(e.eat(91)){var t=e.eat(94);var i=this.regexp_classContents(e);if(!e.eat(93)){e.raise("Unterminated character class")}if(t&&i===xt){e.raise("Negated character class may contain strings")}return true}return false};nt.regexp_classContents=function(e){if(e.current()===93){return gt}if(e.switchV){return this.regexp_classSetExpression(e)}this.regexp_nonEmptyClassRanges(e);return gt};nt.regexp_nonEmptyClassRanges=function(e){while(this.regexp_eatClassAtom(e)){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var i=e.lastIntValue;if(e.switchU&&(t===-1||i===-1)){e.raise("Invalid character class")}if(t!==-1&&i!==-1&&t>i){e.raise("Range out of order in character class")}}}};nt.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e)){return true}if(e.switchU){var i=e.current();if(i===99||It(i)){e.raise("Invalid class escape")}e.raise("Invalid escape")}e.pos=t}var s=e.current();if(s!==93){e.lastIntValue=s;e.advance();return true}return false};nt.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98)){e.lastIntValue=8;return true}if(e.switchU&&e.eat(45)){e.lastIntValue=45;return true}if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e)){return true}e.pos=t}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)};nt.regexp_classSetExpression=function(e){var t=gt,i;if(this.regexp_eatClassSetRange(e));else if(i=this.regexp_eatClassSetOperand(e)){if(i===xt){t=xt}var s=e.pos;while(e.eatChars([38,38])){if(e.current()!==38&&(i=this.regexp_eatClassSetOperand(e))){if(i!==xt){t=gt}continue}e.raise("Invalid character in character class")}if(s!==e.pos){return t}while(e.eatChars([45,45])){if(this.regexp_eatClassSetOperand(e)){continue}e.raise("Invalid character in character class")}if(s!==e.pos){return t}}else{e.raise("Invalid character in character class")}for(;;){if(this.regexp_eatClassSetRange(e)){continue}i=this.regexp_eatClassSetOperand(e);if(!i){return t}if(i===xt){t=xt}}};nt.regexp_eatClassSetRange=function(e){var t=e.pos;if(this.regexp_eatClassSetCharacter(e)){var i=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassSetCharacter(e)){var s=e.lastIntValue;if(i!==-1&&s!==-1&&i>s){e.raise("Range out of order in character class")}return true}e.pos=t}return false};nt.regexp_eatClassSetOperand=function(e){if(this.regexp_eatClassSetCharacter(e)){return gt}return this.regexp_eatClassStringDisjunction(e)||this.regexp_eatNestedClass(e)};nt.regexp_eatNestedClass=function(e){var t=e.pos;if(e.eat(91)){var i=e.eat(94);var s=this.regexp_classContents(e);if(e.eat(93)){if(i&&s===xt){e.raise("Negated character class may contain strings")}return s}e.pos=t}if(e.eat(92)){var r=this.regexp_eatCharacterClassEscape(e);if(r){return r}e.pos=t}return null};nt.regexp_eatClassStringDisjunction=function(e){var t=e.pos;if(e.eatChars([92,113])){if(e.eat(123)){var i=this.regexp_classStringDisjunctionContents(e);if(e.eat(125)){return i}}else{e.raise("Invalid escape")}e.pos=t}return null};nt.regexp_classStringDisjunctionContents=function(e){var t=this.regexp_classString(e);while(e.eat(124)){if(this.regexp_classString(e)===xt){t=xt}}return t};nt.regexp_classString=function(e){var t=0;while(this.regexp_eatClassSetCharacter(e)){t++}return t===1?gt:xt};nt.regexp_eatClassSetCharacter=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatCharacterEscape(e)||this.regexp_eatClassSetReservedPunctuator(e)){return true}if(e.eat(98)){e.lastIntValue=8;return true}e.pos=t;return false}var i=e.current();if(i<0||i===e.lookahead()&&_t(i)){return false}if(wt(i)){return false}e.advance();e.lastIntValue=i;return true};function _t(e){return e===33||e>=35&&e<=38||e>=42&&e<=44||e===46||e>=58&&e<=64||e===94||e===96||e===126}function wt(e){return e===40||e===41||e===45||e===47||e>=91&&e<=93||e>=123&&e<=125}nt.regexp_eatClassSetReservedPunctuator=function(e){var t=e.current();if(St(t)){e.lastIntValue=t;e.advance();return true}return false};function St(e){return e===33||e===35||e===37||e===38||e===44||e===45||e>=58&&e<=62||e===64||e===96||e===126}nt.regexp_eatClassControlLetter=function(e){var t=e.current();if(Ct(t)||t===95){e.lastIntValue=t%32;e.advance();return true}return false};nt.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2)){return true}if(e.switchU){e.raise("Invalid escape")}e.pos=t}return false};nt.regexp_eatDecimalDigits=function(e){var t=e.pos;var i=0;e.lastIntValue=0;while(Ct(i=e.current())){e.lastIntValue=10*e.lastIntValue+(i-48);e.advance()}return e.pos!==t};function Ct(e){return e>=48&&e<=57}nt.regexp_eatHexDigits=function(e){var t=e.pos;var i=0;e.lastIntValue=0;while(Et(i=e.current())){e.lastIntValue=16*e.lastIntValue+At(i);e.advance()}return e.pos!==t};function Et(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function At(e){if(e>=65&&e<=70){return 10+(e-65)}if(e>=97&&e<=102){return 10+(e-97)}return e-48}nt.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var i=e.lastIntValue;if(t<=3&&this.regexp_eatOctalDigit(e)){e.lastIntValue=t*64+i*8+e.lastIntValue}else{e.lastIntValue=t*8+i}}else{e.lastIntValue=t}return true}return false};nt.regexp_eatOctalDigit=function(e){var t=e.current();if(It(t)){e.lastIntValue=t-48;e.advance();return true}e.lastIntValue=0;return false};function It(e){return e>=48&&e<=55}nt.regexp_eatFixedHexDigits=function(e,t){var i=e.pos;e.lastIntValue=0;for(var s=0;s<t;++s){var r=e.current();if(!Et(r)){e.pos=i;return false}e.lastIntValue=16*e.lastIntValue+At(r);e.advance()}return true};var Pt=function e(t){this.type=t.type;this.value=t.value;this.start=t.start;this.end=t.end;if(t.options.locations){this.loc=new B(t,t.startLoc,t.endLoc)}if(t.options.ranges){this.range=[t.start,t.end]}};var Vt=he.prototype;Vt.next=function(e){if(!e&&this.type.keyword&&this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword)}if(this.options.onToken){this.options.onToken(new Pt(this))}this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken()};Vt.getToken=function(){this.next();return new Pt(this)};if(typeof Symbol!=="undefined"){Vt[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===b.eof,value:t}}}}}Vt.nextToken=function(){var e=this.curContext();if(!e||!e.preserveSpace){this.skipSpace()}this.start=this.pos;if(this.options.locations){this.startLoc=this.curPosition()}if(this.pos>=this.input.length){return this.finishToken(b.eof)}if(e.override){return e.override(this)}else{this.readToken(this.fullCharCodeAtPos())}};Vt.readToken=function(e){if(c(e,this.options.ecmaVersion>=6)||e===92){return this.readWord()}return this.getTokenFromCode(e)};Vt.fullCharCodeAt=function(e){var t=this.input.charCodeAt(e);if(t<=55295||t>=56320){return t}var i=this.input.charCodeAt(e+1);return i<=56319||i>=57344?t:(t<<10)+i-56613888};Vt.fullCharCodeAtPos=function(){return this.fullCharCodeAt(this.pos)};Vt.skipBlockComment=function(){var e=this.options.onComment&&this.curPosition();var t=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(i===-1){this.raise(this.pos-2,"Unterminated comment")}this.pos=i+2;if(this.options.locations){for(var s=void 0,r=t;(s=S(this.input,r,this.pos))>-1;){++this.curLine;r=this.lineStart=s}}if(this.options.onComment){this.options.onComment(true,this.input.slice(t+2,i),t,this.pos,e,this.curPosition())}};Vt.skipLineComment=function(e){var t=this.pos;var i=this.options.onComment&&this.curPosition();var s=this.input.charCodeAt(this.pos+=e);while(this.pos<this.input.length&&!w(s)){s=this.input.charCodeAt(++this.pos)}if(this.options.onComment){this.options.onComment(false,this.input.slice(t+e,this.pos),t,this.pos,i,this.curPosition())}};Vt.skipSpace=function(){e:while(this.pos<this.input.length){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:if(this.input.charCodeAt(this.pos+1)===10){++this.pos}case 10:case 8232:case 8233:++this.pos;if(this.options.locations){++this.curLine;this.lineStart=this.pos}break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(e>8&&e<14||e>=5760&&C.test(String.fromCharCode(e))){++this.pos}else{break e}}}};Vt.finishToken=function(e,t){this.end=this.pos;if(this.options.locations){this.endLoc=this.curPosition()}var i=this.type;this.type=e;this.value=t;this.updateContext(i)};Vt.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57){return this.readNumber(true)}var t=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&e===46&&t===46){this.pos+=3;return this.finishToken(b.ellipsis)}else{++this.pos;return this.finishToken(b.dot)}};Vt.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp()}if(e===61){return this.finishOp(b.assign,2)}return this.finishOp(b.slash,1)};Vt.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1);var i=1;var s=e===42?b.star:b.modulo;if(this.options.ecmaVersion>=7&&e===42&&t===42){++i;s=b.starstar;t=this.input.charCodeAt(this.pos+2)}if(t===61){return this.finishOp(b.assign,i+1)}return this.finishOp(s,i)};Vt.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(this.options.ecmaVersion>=12){var i=this.input.charCodeAt(this.pos+2);if(i===61){return this.finishOp(b.assign,3)}}return this.finishOp(e===124?b.logicalOR:b.logicalAND,2)}if(t===61){return this.finishOp(b.assign,2)}return this.finishOp(e===124?b.bitwiseOR:b.bitwiseAND,1)};Vt.readToken_caret=function(){var e=this.input.charCodeAt(this.pos+1);if(e===61){return this.finishOp(b.assign,2)}return this.finishOp(b.bitwiseXOR,1)};Vt.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(t===45&&!this.inModule&&this.input.charCodeAt(this.pos+2)===62&&(this.lastTokEnd===0||k.test(this.input.slice(this.lastTokEnd,this.pos)))){this.skipLineComment(3);this.skipSpace();return this.nextToken()}return this.finishOp(b.incDec,2)}if(t===61){return this.finishOp(b.assign,2)}return this.finishOp(b.plusMin,1)};Vt.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1);var i=1;if(t===e){i=e===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+i)===61){return this.finishOp(b.assign,i+1)}return this.finishOp(b.bitShift,i)}if(t===33&&e===60&&!this.inModule&&this.input.charCodeAt(this.pos+2)===45&&this.input.charCodeAt(this.pos+3)===45){this.skipLineComment(4);this.skipSpace();return this.nextToken()}if(t===61){i=2}return this.finishOp(b.relational,i)};Vt.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===61){return this.finishOp(b.equality,this.input.charCodeAt(this.pos+2)===61?3:2)}if(e===61&&t===62&&this.options.ecmaVersion>=6){this.pos+=2;return this.finishToken(b.arrow)}return this.finishOp(e===61?b.eq:b.prefix,1)};Vt.readToken_question=function(){var e=this.options.ecmaVersion;if(e>=11){var t=this.input.charCodeAt(this.pos+1);if(t===46){var i=this.input.charCodeAt(this.pos+2);if(i<48||i>57){return this.finishOp(b.questionDot,2)}}if(t===63){if(e>=12){var s=this.input.charCodeAt(this.pos+2);if(s===61){return this.finishOp(b.assign,3)}}return this.finishOp(b.coalesce,2)}}return this.finishOp(b.question,1)};Vt.readToken_numberSign=function(){var e=this.options.ecmaVersion;var t=35;if(e>=13){++this.pos;t=this.fullCharCodeAtPos();if(c(t,true)||t===92){return this.finishToken(b.privateId,this.readWord1())}}this.raise(this.pos,"Unexpected character '"+R(t)+"'")};Vt.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:++this.pos;return this.finishToken(b.parenL);case 41:++this.pos;return this.finishToken(b.parenR);case 59:++this.pos;return this.finishToken(b.semi);case 44:++this.pos;return this.finishToken(b.comma);case 91:++this.pos;return this.finishToken(b.bracketL);case 93:++this.pos;return this.finishToken(b.bracketR);case 123:++this.pos;return this.finishToken(b.braceL);case 125:++this.pos;return this.finishToken(b.braceR);case 58:++this.pos;return this.finishToken(b.colon);case 96:if(this.options.ecmaVersion<6){break}++this.pos;return this.finishToken(b.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(t===120||t===88){return this.readRadixNumber(16)}if(this.options.ecmaVersion>=6){if(t===111||t===79){return this.readRadixNumber(8)}if(t===98||t===66){return this.readRadixNumber(2)}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(false);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 63:return this.readToken_question();case 126:return this.finishOp(b.prefix,1);case 35:return this.readToken_numberSign()}this.raise(this.pos,"Unexpected character '"+R(e)+"'")};Vt.finishOp=function(e,t){var i=this.input.slice(this.pos,this.pos+t);this.pos+=t;return this.finishToken(e,i)};Vt.readRegexp=function(){var e,t,i=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(i,"Unterminated regular expression")}var s=this.input.charAt(this.pos);if(k.test(s)){this.raise(i,"Unterminated regular expression")}if(!e){if(s==="["){t=true}else if(s==="]"&&t){t=false}else if(s==="/"&&!t){break}e=s==="\\"}else{e=false}++this.pos}var r=this.input.slice(i,this.pos);++this.pos;var a=this.pos;var n=this.readWord1();if(this.containsEsc){this.unexpected(a)}var o=this.regexpState||(this.regexpState=new ht(this));o.reset(i,r,n);this.validateRegExpFlags(o);this.validateRegExpPattern(o);var h=null;try{h=new RegExp(r,n)}catch(e){}return this.finishToken(b.regexp,{pattern:r,flags:n,value:h})};Vt.readInt=function(e,t,i){var s=this.options.ecmaVersion>=12&&t===undefined;var r=i&&this.input.charCodeAt(this.pos)===48;var a=this.pos,n=0,o=0;for(var h=0,p=t==null?Infinity:t;h<p;++h,++this.pos){var u=this.input.charCodeAt(this.pos),l=void 0;if(s&&u===95){if(r){this.raiseRecoverable(this.pos,"Numeric separator is not allowed in legacy octal numeric literals")}if(o===95){this.raiseRecoverable(this.pos,"Numeric separator must be exactly one underscore")}if(h===0){this.raiseRecoverable(this.pos,"Numeric separator is not allowed at the first of digits")}o=u;continue}if(u>=97){l=u-97+10}else if(u>=65){l=u-65+10}else if(u>=48&&u<=57){l=u-48}else{l=Infinity}if(l>=e){break}o=u;n=n*e+l}if(s&&o===95){this.raiseRecoverable(this.pos-1,"Numeric separator is not allowed at the last of digits")}if(this.pos===a||t!=null&&this.pos-a!==t){return null}return n};function Nt(e,t){if(t){return parseInt(e,8)}return parseFloat(e.replace(/_/g,""))}function Tt(e){if(typeof BigInt!=="function"){return null}return BigInt(e.replace(/_/g,""))}Vt.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var i=this.readInt(e);if(i==null){this.raise(this.start+2,"Expected number in radix "+e)}if(this.options.ecmaVersion>=11&&this.input.charCodeAt(this.pos)===110){i=Tt(this.input.slice(t,this.pos));++this.pos}else if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}return this.finishToken(b.num,i)};Vt.readNumber=function(e){var t=this.pos;if(!e&&this.readInt(10,undefined,true)===null){this.raise(t,"Invalid number")}var i=this.pos-t>=2&&this.input.charCodeAt(t)===48;if(i&&this.strict){this.raise(t,"Invalid number")}var s=this.input.charCodeAt(this.pos);if(!i&&!e&&this.options.ecmaVersion>=11&&s===110){var r=Tt(this.input.slice(t,this.pos));++this.pos;if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}return this.finishToken(b.num,r)}if(i&&/[89]/.test(this.input.slice(t,this.pos))){i=false}if(s===46&&!i){++this.pos;this.readInt(10);s=this.input.charCodeAt(this.pos)}if((s===69||s===101)&&!i){s=this.input.charCodeAt(++this.pos);if(s===43||s===45){++this.pos}if(this.readInt(10)===null){this.raise(t,"Invalid number")}}if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}var a=Nt(this.input.slice(t,this.pos),i);return this.finishToken(b.num,a)};Vt.readCodePoint=function(){var e=this.input.charCodeAt(this.pos),t;if(e===123){if(this.options.ecmaVersion<6){this.unexpected()}var i=++this.pos;t=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos);++this.pos;if(t>1114111){this.invalidStringToken(i,"Code point out of bounds")}}else{t=this.readHexChar(4)}return t};Vt.readString=function(e){var t="",i=++this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated string constant")}var s=this.input.charCodeAt(this.pos);if(s===e){break}if(s===92){t+=this.input.slice(i,this.pos);t+=this.readEscapedChar(false);i=this.pos}else if(s===8232||s===8233){if(this.options.ecmaVersion<10){this.raise(this.start,"Unterminated string constant")}++this.pos;if(this.options.locations){this.curLine++;this.lineStart=this.pos}}else{if(w(s)){this.raise(this.start,"Unterminated string constant")}++this.pos}}t+=this.input.slice(i,this.pos++);return this.finishToken(b.string,t)};var Lt={};Vt.tryReadTemplateToken=function(){this.inTemplateElement=true;try{this.readTmplToken()}catch(e){if(e===Lt){this.readInvalidTemplateToken()}else{throw e}}this.inTemplateElement=false};Vt.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9){throw Lt}else{this.raise(e,t)}};Vt.readTmplToken=function(){var e="",t=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated template")}var i=this.input.charCodeAt(this.pos);if(i===96||i===36&&this.input.charCodeAt(this.pos+1)===123){if(this.pos===this.start&&(this.type===b.template||this.type===b.invalidTemplate)){if(i===36){this.pos+=2;return this.finishToken(b.dollarBraceL)}else{++this.pos;return this.finishToken(b.backQuote)}}e+=this.input.slice(t,this.pos);return this.finishToken(b.template,e)}if(i===92){e+=this.input.slice(t,this.pos);e+=this.readEscapedChar(true);t=this.pos}else if(w(i)){e+=this.input.slice(t,this.pos);++this.pos;switch(i){case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos}case 10:e+="\n";break;default:e+=String.fromCharCode(i);break}if(this.options.locations){++this.curLine;this.lineStart=this.pos}t=this.pos}else{++this.pos}}};Vt.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++){switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if(this.input[this.pos+1]!=="{"){break}case"`":return this.finishToken(b.invalidTemplate,this.input.slice(this.start,this.pos));case"\r":if(this.input[this.pos+1]==="\n"){++this.pos}case"\n":case"\u2028":case"\u2029":++this.curLine;this.lineStart=this.pos+1;break}}this.raise(this.start,"Unterminated template")};Vt.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);++this.pos;switch(t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return R(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos}case 10:if(this.options.locations){this.lineStart=this.pos;++this.curLine}return"";case 56:case 57:if(this.strict){this.invalidStringToken(this.pos-1,"Invalid escape sequence")}if(e){var i=this.pos-1;this.invalidStringToken(i,"Invalid escape sequence in template string")}default:if(t>=48&&t<=55){var s=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0];var r=parseInt(s,8);if(r>255){s=s.slice(0,-1);r=parseInt(s,8)}this.pos+=s.length-1;t=this.input.charCodeAt(this.pos);if((s!=="0"||t===56||t===57)&&(this.strict||e)){this.invalidStringToken(this.pos-1-s.length,e?"Octal literal in template string":"Octal literal in strict mode")}return String.fromCharCode(r)}if(w(t)){if(this.options.locations){this.lineStart=this.pos;++this.curLine}return""}return String.fromCharCode(t)}};Vt.readHexChar=function(e){var t=this.pos;var i=this.readInt(16,e);if(i===null){this.invalidStringToken(t,"Bad character escape sequence")}return i};Vt.readWord1=function(){this.containsEsc=false;var e="",t=true,i=this.pos;var s=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var r=this.fullCharCodeAtPos();if(f(r,s)){this.pos+=r<=65535?1:2}else if(r===92){this.containsEsc=true;e+=this.input.slice(i,this.pos);var a=this.pos;if(this.input.charCodeAt(++this.pos)!==117){this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX")}++this.pos;var n=this.readCodePoint();if(!(t?c:f)(n,s)){this.invalidStringToken(a,"Invalid Unicode escape")}e+=R(n);i=this.pos}else{break}t=false}return e+this.input.slice(i,this.pos)};Vt.readWord=function(){var e=this.readWord1();var t=b.name;if(this.keywords.test(e)){t=x[e]}return this.finishToken(t,e)};var Rt="8.19.0";he.acorn={Parser:he,version:Rt,defaultOptions:F,Position:O,SourceLocation:B,getLineInfo:M,Node:Re,TokenType:d,tokTypes:b,keywordTypes:x,TokContext:Se,tokContexts:Ce,isIdentifierChar:f,isIdentifierStart:c,Token:Pt,isNewLine:w,lineBreak:k,lineBreakG:_,nonASCIIwhitespace:C};function Dt(e,t){return he.parse(e,t)}function Ot(e,t,i){return he.parseExpressionAt(e,t,i)}function Bt(e,t){return he.tokenizer(e,t)}e.Node=Re;e.Parser=he;e.Position=O;e.SourceLocation=B;e.TokContext=Se;e.Token=Pt;e.TokenType=d;e.defaultOptions=F;e.getLineInfo=M;e.isIdentifierChar=f;e.isIdentifierStart=c;e.isNewLine=w;e.keywordTypes=x;e.lineBreak=k;e.lineBreakG=_;e.nonASCIIwhitespace=C;e.parse=Dt;e.parseExpressionAt=Ot;e.tokContexts=Ce;e.tokTypes=b;e.tokenizer=Bt;e.version=Rt});
    return exports.parse; })();
    const NP = Array.prototype.push, NU = Array.prototype.unshift;
    const S = {
        v: "48",
        log: [],
        errors: [],
        renderer: null,
        native: null,
        rendererArray: null,
        localName: "",
        capture: null,
        arrayHooks: new Map,
        remoteQueued: new WeakSet,
        worldQueued: new WeakSet,
        remoteRefs: new Map,
        resources: new Map,
        transparent: new WeakMap,
        roofSaved: new Map,
        buildSaved: new Map,
        lootSaved: new Map,
        custom: {
            body: [],
            head: [],
            pickaxe: []
        },
        emoteEffect: null,
        emoteResolved: [],
        srcDesc: null,
        srcTimer: 0,
        bak: {},
        play: null,
        playHandlers: [],
        trackNodes: new Map,
        invNodes: new Map,
        invAssets: new Map,
        nearestUi: null,
        chestUi: null,
        airdropUi: null,
        nearestTimer: 0,
        indicatorTimer: 0,
        botTimer: 0,
        botWatch: new Map,
        botLogged: new Set,
        meteorHook: null,
        meteorTrace: null,
        meteorPersist: null,
        invTraceHook: null,
        localTrack: null,
        contentBase: null,
        contentSeq: 0,
        contentCapture: null,
        randomHook: null,
        autoContents: new Map,
        autoSeen: new Set,
        autoContentTimer: 0,
        autoEvents: [],
        sourceSeen: new Set,
        sourceText: new Map,
        botPhase: "lobby",
        botPhaseAt: 0,
        meteorSource: null,
        passiveTimer: 0,
        passiveAssets: new Set,
        passiveBuilds: new Set,
        passiveLocal: null
    };
    W[K] = S;
    /* BRIO: warningThresholds (V48; new boundaries/charge rendering live-pending)
     * Shared configuration for own HUD, remote numbers and player health outlines.
     * Native reserve order: light/medium/heavy/shells/rockets; virtual index5 holds the grappler threshold.
     * Grappler charges are wAmmo[slot-1] (áAæ), NOT reserve ammo, confirmed in the native HUD constructor.
     * Materials mats[0..3] (ÊÃÄ): fourth native key gear uses buildart/scrap.png.
     * Defaults are strictly UNDER, as requested. Grappler1 is provisional: the user omitted its default.
     */
    const WARNING_DEFAULTS = {health:20, ammo:[30,30,10,15,5,1], materials:[30,30,30,1]};
    const /* BRIO: normalizeWarningThresholds
     * Migrate missing/invalid persisted settings, preserving valid independent values. Never alter game state.
     * Blank/null/negative/NaN/objects must not coerce to zero; zero intentionally disables a single type.
     * Safe nonnegative integers up to one million are supported by both storage and UI.
     */
    normalizeWarningThresholds = stored => {
        const valid = (v, fallback) => Number.isSafeInteger(v) && v >= 0 && v <= 1000000 ? v : fallback;
        return {health:valid(stored?.health, WARNING_DEFAULTS.health),
            ammo:WARNING_DEFAULTS.ammo.map((v,i) => valid(stored?.ammo?.[i],v)),
            materials:WARNING_DEFAULTS.materials.map((v,i) => valid(stored?.materials?.[i],v))};
    };
    const /* BRIO: belowWarning
     * One strict comparison for every rendering path. Equality/unknown/negative state/disabled modifiers never warn.
     * The same thresholds apply to displayed remote reserves and local loaded+reserve slot totals.
     */
    belowWarning = (e, kind, index, value) => !!e[{health:"lowHealthWarning",ammo:"lowAmmoWarning",materials:"lowMatsWarning"}[kind]] &&
        Number.isFinite(value) && value >= 0 && value < (kind === "health" ? e.warningThresholds.health : e.warningThresholds[kind][index]);
    const /* BRIO: materialIndex
     * Native gear and captured scrap icon are both mats[3]; unknown resource paths never receive a guessed index.
     */
    materialIndex = path => ["wood","brick","metal","scrap"].findIndex(k => path?.endsWith("/"+k+".png") || k === "scrap" && path?.endsWith("/gear.png"));
    const q = s => D.querySelector(s), t = x => (x ?? "").toString().replace(/\s+/g, " ").trim(), /* BRIO: read
     * Read persisted JSON defensively. Missing/corrupt settings use the supplied default; runtime state is never stored here.
     */
    read = (k, d) => {
        try {
            return JSON.parse(localStorage.getItem(k) || "") || d;
        } catch (_) {
            return d;
        }
    }, /* BRIO: write
     * Persist user choices only. Storage errors go to diagnostics rather than interrupting native Play.
     */
    write = (k, v) => {
        try {
            localStorage.setItem(k, JSON.stringify(v));
        } catch (e) {
            S.errors.push(String(e));
        }
    }, /* BRIO: state
     * Read cosmetic selections. Keep this namespace separate from the native locker and from Extras.
     */
    state = () => read("br_local_visuals", {}), saveState = s => write("br_local_visuals", s), /* BRIO: extrasState
     * Read current Extras while discarding user-retired options. Old saved true values must never reactivate removed features.
     */
    extrasState = () => {
        const stored = read("brio_extras_state", {}), value = stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
        for (const key of ["buildMaterialLabels", "deployableLabels", "deployableRadius", "highlightLoot", "noFoliage"]) delete value[key];
        // V48 choices persist across Play/reinjection. No per-match references belong in this settings record.
        value.warningThresholds = normalizeWarningThresholds(value.warningThresholds);
        return value;
    }, saveExtras = s => write("brio_extras_state", s), norm = u => {
        try {
            return new URL(String(u || ""), location.href).pathname.toLowerCase();
        } catch (_) {
            return String(u || "").split(/[?#]/)[0].toLowerCase();
        }
    }, /* BRIO: clean
     * Sanitize terminal diagnostics, preserving complete source through its separate reconstructable chunk path.
     */
    clean = x => {
        if (typeof x === "string") return x.startsWith("data:image/") ? `[data-url ${x.length} chars]` : x.length > 12e3 ? x.slice(0, 11997) + "..." : x;
        if (Array.isArray(x)) return x.map(clean);
        if (x && typeof x === "object") {
            const o = {};
            for (const [k, v] of Object.entries(x)) o[k] = clean(v);
            return o;
        }
        return x;
    }, J = x => {
        try {
            return JSON.stringify(clean(x));
        } catch (_) {
            return String(x);
        }
    }, /* BRIO: log
     * Append the complete diagnostic history; only the terminal preview is bounded. COPY RESULTS must keep all epochs.
     */
    log = (m, o) => {
        const z = `[${(new Date).toISOString().slice(11, 23)}] ${m}${o === undefined ? "" : " " + J(o)}`;
        S.log.push(z);
        if (S.out) {
            if (!S.logFlush) S.logFlush = setTimeout(() => {
                S.logFlush = 0;
                if (S.out && !S.manualCopy) {
                    S.out.value = S.log.slice(-80).join("\n").slice(-64000);
                    S.out.scrollTop = S.out.scrollHeight;
                }
            }, 200);
        }
    };
    const ROOFS = [ "/buildart/barnroof.png", "/buildart/cabinroof.png", "/buildart/castlebottomleftroof.png", "/buildart/castlebottomrightroof.png", "/buildart/castlecenterroof.png", "/buildart/castletopleftroof.png", "/buildart/castletoprightroof.png", "/buildart/gymroof.png", "/buildart/house0roof.png", "/buildart/house1roof.png", "/buildart/house2roof.png", "/buildart/house3roof.png", "/buildart/house4roof.png", "/buildart/house5roof.png", "/buildart/japanroof.png", "/buildart/jungle_shack_roof.png", "/buildart/museumroof.png", "/buildart/observatoryroof.png", "/buildart/pavilionroof.png", "/buildart/potatopalaceroof.png", "/buildart/shackroof.png" ], ROOFSET = new Set(ROOFS), BUILDRE = /(?:wood|brick|metal)[0-2]\.png$|campfire|boostpad|shieldbuild|shieldbubble/i;
    const /* BRIO: mkBlank
     * Create transparent, native-sized resources for invisible modes. Never change native image dimensions/bookkeeping.
     */
    mkBlank = (w, h) => {
        const c = D.createElement("canvas");
        c.width = w;
        c.height = h;
        return c.toDataURL("image/png");
    }, BLANK = {
        body: mkBlank(300, 300),
        head: mkBlank(350, 350),
        pickaxe: mkBlank(300, 300),
        glider: mkBlank(700, 700)
    };
    const /* BRIO: catalog
     * Use the reached native cosmetic catalog, not a fabricated ownership list. SYNC is allowed-set membership only.
     */
    catalog = () => W["Åèa"] && typeof W["Åèa"] === "object" ? W["Åèa"] : {}, syncSet = () => new Set(Array.isArray(W["åÆÆ"]) ? W["åÆÆ"].map(String) : []), items = typ => Object.entries(catalog()).filter(([id, v]) => v?.type === typ && !(typ === "skin" && (id === "player" || id === "skin1" || t(v?.name).toLowerCase() === "default"))).map(([id, v]) => ({
        id: id,
        name: v.name || id,
        sync: syncSet().has(id)
    })).sort((a, b) => a.name.localeCompare(b.name));
    const /* BRIO: openDB
     * Open the category-scoped custom asset cache. Never clear user uploads at a match boundary.
     */
    openDB = () => new Promise((ok, no) => {
        const r = indexedDB.open("brio_unlocker", 1);
        r.onupgradeneeded = () => {
            if (!r.result.objectStoreNames.contains("customAssets")) r.result.createObjectStore("customAssets", {
                keyPath: "key"
            });
        };
        r.onsuccess = () => ok(r.result);
        r.onerror = () => no(r.error);
    }), /* BRIO: loadCustom
     * Restore custom assets and historic IDs before rendering selection UI; tolerate unavailable browser storage.
     */
    loadCustom = async () => {
        for (const k in S.custom) S.custom[k] = [];
        try {
            const d = await openDB(), r = d.transaction("customAssets").objectStore("customAssets").getAll(), a = await new Promise((ok, no) => {
                r.onsuccess = () => ok(r.result || []);
                r.onerror = () => no(r.error);
            });
            d.close();
            for (const x of a) if (S.custom[x.category]) {
                x.n = x.n || +(String(x.id || "").match(/\d+/) || [ 1 ])[0] || 1;
                x.id = x.id || `custom${x.n}`;
                x.name = x.name || x.id;
                S.custom[x.category].push(x);
            }
            for (const k in S.custom) S.custom[k].sort((a, b) => (a.n || 0) - (b.n || 0));
            log("CUSTOM CACHE", Object.fromEntries(Object.entries(S.custom).map(([k, v]) => [ k, v.length ])));
        } catch (e) {
            S.errors.push(String(e));
            log("CUSTOM CACHE ERROR", String(e));
        }
    }, /* BRIO: putCustom
     * Persist uploaded artwork transactionally. These durable records outlive Play, cleanup and reinjection.
     */
    putCustom = async x => {
        const d = await openDB();
        await new Promise((ok, no) => {
            const tr = d.transaction("customAssets", "readwrite");
            tr.objectStore("customAssets").put(x);
            tr.oncomplete = ok;
            tr.onerror = () => no(tr.error);
        });
        d.close();
    };
    const STATUS = {
        green: new Set([ "playersInvisible", "lootInvisible", "buildsInvisible", "transparentRoofs", "healthBars", "playerNames", "allGlidersInvisible", "allTrailsInvisible", "inventorySlots", "inventoryMaterials", "inventoryAmmo", "inventorySize", "permanentMeteor", "numericHealthShield", "lowHealthWarning", "nearestPlayer", "nearestChest", "nearestAirdrop", "nearestPlayerName", "noChestsVisible", "monochrome" ]),
        yellow: new Set([ "lowHealthWarning", "screenChests", "screenAirdrops", "screenFishing", "identifyBots", "lowMatsWarning", "lowAmmoWarning", "transparentFoliage", "cleanLoot", "highContrastPlayers" ])
    }, statusOf = id => STATUS.yellow.has(id) ? "yellow" : STATUS.green.has(id) ? "green" : "red";
    const style = D.createElement("style");
    style.textContent = `[data-brio-mono-page] canvas:not(#playerPreview):not([data-brio-mono]){filter:grayscale(1)!important}#ad,#preroll,#buildroyale-io_300x250,#buildroyale-io_300x250_2,#buildroyale-io_728x90,#buildroyale-io_300x600,#buildroyale-io_970x250,#disableAdsButton,iframe[src*="doubleclick" i],iframe[src*="googlesyndication" i]{display:none!important;visibility:hidden!important;width:0!important;height:0!important;margin:0!important;padding:0!important;border:0!important;pointer-events:none!important}#loggedInLocker.b18,#loggedInShop.b18{box-sizing:border-box!important;width:178px!important;height:53px!important;display:inline-flex!important;align-items:center!important;gap:8px!important;padding:0 12px!important;margin-top:7px!important;border:4px solid #090909!important;border-radius:9px!important;background:#65aee0!important;color:#fff!important;cursor:pointer!important;transition:none!important;overflow:hidden!important}#loggedInLocker.b18{margin-right:0!important}#loggedInShop.b18{margin-right:80px!important}#loggedInLocker.b18>img,#loggedInShop.b18>img{display:none!important}#loggedInLocker.b18>.bi,#loggedInShop.b18>.bi{width:42px;height:42px;flex:0 0 42px;background:center/contain no-repeat;pointer-events:none}#loggedInLocker.b18>p,#loggedInShop.b18>p{position:static!important;margin:0!important;flex:1;text-align:center;font-size:23px!important;color:#fff!important;-webkit-text-stroke:1px #000;pointer-events:none}.brioModal{position:fixed;z-index:2147483645;left:50%;top:50%;transform:translate(-50%,-50%);width:min(980px,96vw);height:min(700px,92vh);display:none;flex-direction:column;background:#000;color:#fff;border:2px solid #fff;font:14px Arial}.brioModal header,.brioTabs,.brioTools,.brioSubs,.brioSlots{display:flex;gap:6px;align-items:center;padding:7px;border-bottom:1px solid #555;flex-wrap:wrap}.brioModal header b{flex:1;font-size:20px}.brioModal button{background:#111;color:#fff;border:1px solid #777;padding:6px;cursor:pointer}.brioModal button.on{background:#555}.brioModal input[type=text]{background:#111;color:#fff;border:1px solid #777;padding:6px;width:220px;cursor:text}.brioModal select{background:#111;color:#fff;border:1px solid #777;padding:5px;min-width:110px}.brioGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:6px;padding:8px;overflow:auto;flex:1;align-content:start}.brioCard{height:126px;border:1px solid #555;background:#090909;text-align:center;position:relative;overflow:hidden;cursor:pointer}.brioCard.sel{outline:3px solid #fff}.brioCard img{width:82px;height:82px;object-fit:contain;margin-top:4px}.brioCard .n{position:absolute;left:3px;right:3px;bottom:5px;font-size:12px}.brioCard .sync{position:absolute;right:3px;top:3px;font-size:9px;border:1px solid #6a6;padding:2px}.brioCard.sp{height:82px;display:flex;align-items:center;justify-content:center;font-weight:bold}.brioThresholds{display:flex;flex-wrap:nowrap;gap:8px;overflow-x:auto;padding:10px;border-bottom:1px solid #555}.brioThresholds fieldset{display:flex;flex:0 0 auto;gap:7px;border:1px solid #777;margin:0;padding:5px;min-width:0}.brioThresholds fieldset:disabled{opacity:.4}.brioThresholds label{display:flex;flex-direction:column;gap:3px;font-size:11px;white-space:nowrap}.brioThresholds input{width:56px;box-sizing:border-box;background:#111;color:#fff;border:1px solid #777;padding:4px}.brioThresholds input:disabled{cursor:not-allowed}.brioPage{padding:8px;overflow:auto}.brioOpt{display:flex;gap:10px;padding:10px;border-bottom:1px solid #333;align-items:center}.brioOpt label{flex:1}.brioOpt.child{padding-left:34px}.brioOpt.st-green{background:#153d22}.brioOpt.st-yellow{background:#665700}.brioOpt.st-red{background:#4b1717}.brioBadge{font:700 10px Arial;padding:3px 5px;border:1px solid #aaa;min-width:58px;text-align:center}.brioGroup{padding:12px 10px 5px;font-weight:bold;border-bottom:1px solid #555;color:#9fd4ff}.brioLegend{display:flex;gap:12px;padding:7px;border-bottom:1px solid #555;font-size:11px}.brioLegend span{padding:3px 6px}.brioStatus{padding:7px;border-top:1px solid #555;font:12px Consolas;white-space:pre-wrap}.brioTerm.min .body{display:none!important}.brioTerm.min{width:460px!important;height:34px!important}.brioTerm.min .head{cursor:move!important}`;
    D.documentElement.appendChild(style);
    const /* BRIO: patchButtons
     * Modify the actual native Locker/Shop nodes and preserve original markup/styles for destroy.
     */
    patchButtons = () => {
        for (const [id, label, ico] of [ [ "loggedInLocker", "(un)Locker", "/buildart/icon-locker.png" ], [ "loggedInShop", "Extras", "/buildart/icon-shop.png" ] ]) {
            const e = D.getElementById(id);
            if (!e) continue;
            if (!S.bak[id]) S.bak[id] = {
                html: e.innerHTML,
                cls: e.className,
                style: e.getAttribute("style") || ""
            };
            let i = e.querySelector(":scope>.bi");
            if (!i) {
                i = D.createElement("span");
                i.className = "bi";
                e.prepend(i);
            }
            i.style.backgroundImage = `url(${ico})`;
            let p = e.querySelector(":scope>p");
            if (!p) {
                p = D.createElement("p");
                e.appendChild(p);
            }
            p.textContent = label;
            e.classList.add("b18");
        }
    };
    const locker = D.createElement("div"), extras = D.createElement("div");
    locker.className = extras.className = "brioModal";
    locker.innerHTML = '<header><b>BRIO (un)Locker</b><button data-close>Close</button></header><div class="brioTabs"></div><div class="brioSubs"></div><div class="brioTools"><input type="text" placeholder="Search"><button data-upload>Upload Custom</button><input type="file" accept="image/*" hidden></div><div class="brioSlots"></div><div class="brioGrid"></div><div class="brioStatus"></div>';
    extras.innerHTML = '<header><b>BRIO Extras</b><button data-close>Close</button></header><div class="brioTabs"></div><div class="brioLegend"><span style="background:#153d22">GREEN · proven</span><span style="background:#665700">YELLOW · active test</span><span style="background:#4b1717">RED · unproven/incomplete</span></div><div class="brioPage"></div><div class="brioStatus">Configure before Play. BRIO prepends uL# to the current player name when Play is pressed.</div>';
    D.documentElement.append(locker, extras);
    let tab = "skin", sub = "body", slot = 0, extraTab = "challenges";
    const labels = {
        skin: "Skins",
        pickaxe: "Pickaxes",
        wrap: "Wraps",
        trail: "Trails",
        glider: "Gliders",
        emote: "Emotes"
    }, kcat = () => tab === "skin" ? sub : tab, sel = () => {
        const s = state();
        return tab === "emote" ? (Array.isArray(s.emotes) ? s.emotes[slot] : null) || {
            mode: "native"
        } : s[kcat()] || {
            mode: "native"
        };
    }, /* BRIO: setSel
     * Change one selected cosmetic/category/emote slot. Rendering and saved preferences share this entry point.
     */
    setSel = x => {
        const s = state();
        s.enabled = true;
        if (tab === "emote") {
            const a = Array.isArray(s.emotes) ? s.emotes.slice(0, 4) : [];
            while (a.length < 4) a.push({
                mode: "native"
            });
            a[slot] = x;
            s.emotes = a;
        } else s[kcat()] = x;
        saveState(s);
        renderGrid();
    }, preview = (k, id) => k === "body" ? `/cosmetics/body/${id}.png?2` : k === "head" ? `/cosmetics/head/${id}.png?2` : k === "pickaxe" ? `/cosmetics/pickaxe/${id}.png?2` : k === "wrap" ? `/cosmetics/combos/${id}.png?2` : k === "trail" ? `/cosmetics/trails/${id}.png?2` : k === "glider" ? `/cosmetics/glider/${id}.png?2` : `/cosmetics/emotes/${id}.png?2`, card = (mode, x) => {
        const k = kcat(), c = D.createElement("div");
        c.className = "brioCard" + (mode === "item" || mode === "custom" ? "" : " sp");
        c.dataset.mode = mode;
        if (x?.id) c.dataset.id = x.id;
        if (mode === "item") {
            c.innerHTML = `${x.sync ? '<span class="sync">SYNC</span>' : ""}<img loading="lazy" src="${preview(k, x.id)}"><div class="n">${x.name}</div>`;
            c.querySelector("img").onerror = () => c.remove();
            c.onclick = () => setSel({
                mode: "item",
                id: x.id,
                name: x.name
            });
        } else if (mode === "custom") {
            c.innerHTML = `<img src="${x.data}"><div class="n">${x.name}</div>`;
            c.onclick = () => setSel({
                mode: "custom",
                id: x.id,
                name: x.name
            });
        } else {
            c.textContent = mode[0].toUpperCase() + mode.slice(1);
            c.onclick = () => setSel({
                mode: mode
            });
        }
        return c;
    }, /* BRIO: renderGrid
     * Build native/random/bundled/invisible/custom choices from the supported category and search.
     */
    renderGrid = () => {
        const g = locker.querySelector(".brioGrid"), sr = t(locker.querySelector('input[type="text"]').value).toLowerCase(), k = kcat(), s = sel(), allowInvisible = [ "body", "head", "pickaxe", "trail", "glider" ].includes(k), allowCustom = [ "body", "head", "pickaxe" ].includes(k), match = x => !sr || String(x).toLowerCase().includes(sr);
        g.textContent = "";
        for (const m of [ "native", "random", ...allowInvisible ? [ "invisible" ] : [] ]) if (match(m)) g.appendChild(card(m));
        if (allowCustom) for (const x of S.custom[k]) if (match(x.name)) g.appendChild(card("custom", x));
        for (const x of items(k === "body" || k === "head" ? "skin" : k)) if (match(x.name)) g.appendChild(card("item", x));
        for (const c of g.children) if (c.dataset.mode === s.mode && (!c.dataset.id || c.dataset.id === s.id)) c.classList.add("sel");
        locker.querySelector(".brioStatus").textContent = `${labels[tab]}${tab === "skin" ? " / " + sub : ""}${tab === "emote" ? " / Slot " + (slot + 1) : ""}: ${s.name || s.id || s.mode || "Native"}`;
        locker.querySelector("[data-upload]").style.display = allowCustom ? "inline-block" : "none";
    }, /* BRIO: renderLocker
     * Render category/subcategory/emote-slot controls without creating a duplicate native selection UI.
     */
    renderLocker = () => {
        const a = locker.querySelector(".brioTabs"), b = locker.querySelector(".brioSubs"), sl = locker.querySelector(".brioSlots");
        a.textContent = b.textContent = sl.textContent = "";
        for (const x of [ "skin", "pickaxe", "wrap", "trail", "glider", "emote" ]) {
            const z = D.createElement("button");
            z.textContent = labels[x];
            z.className = x === tab ? "on" : "";
            z.onclick = () => {
                tab = x;
                renderLocker();
            };
            a.appendChild(z);
        }
        b.style.display = tab === "skin" ? "flex" : "none";
        if (tab === "skin") for (const x of [ "body", "head" ]) {
            const z = D.createElement("button");
            z.textContent = x[0].toUpperCase() + x.slice(1);
            z.className = x === sub ? "on" : "";
            z.onclick = () => {
                sub = x;
                renderLocker();
            };
            b.appendChild(z);
        }
        sl.style.display = tab === "emote" ? "flex" : "none";
        if (tab === "emote") for (let i = 0; i < 4; i++) {
            const z = D.createElement("button");
            z.textContent = `Slot ${i + 1}`;
            z.className = i === slot ? "on" : "";
            z.onclick = () => {
                slot = i;
                renderLocker();
            };
            sl.appendChild(z);
        }
        renderGrid();
    };
    locker.querySelector("[data-close]").onclick = () => locker.style.display = "none";
    locker.querySelector('input[type="text"]').oninput = renderGrid;
    locker.querySelector("[data-upload]").onclick = () => locker.querySelector('input[type="file"]').click();
    locker.querySelector('input[type="file"]').onchange = e => {
        const f = e.target.files?.[0], k = kcat();
        if (!f || ![ "body", "head", "pickaxe" ].includes(k)) return;
        const im = new Image, u = URL.createObjectURL(f);
        im.onload = async () => {
            URL.revokeObjectURL(u);
            const dims = {
                body: [ 300, 300 ],
                head: [ 350, 350 ],
                pickaxe: [ 300, 300 ]
            }[k], c = D.createElement("canvas");
            c.width = dims[0];
            c.height = dims[1];
            c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
            const n = S.custom[k].reduce((m, x) => Math.max(m, x.n || 0), 0) + 1, x = {
                key: `${k}:custom${n}`,
                category: k,
                id: `custom${n}`,
                name: `custom${n}`,
                n: n,
                data: c.toDataURL("image/png")
            };
            await putCustom(x);
            S.custom[k].push(x);
            setSel({
                mode: "custom",
                id: x.id,
                name: x.name
            });
        };
        im.src = u;
        e.target.value = "";
    };
    const EXTRA = {
        challenges: [ [ "playersInvisible", "All players invisible", "remote players only" ], [ "lootInvisible", "Loot invisible", "includes pickup visuals when complete" ], [ "buildsInvisible", "Builds invisible", "walls + special deployables + placement preview" ], [ "noMinimap", "No minimap", "planned" ], [ "noCrosshair", "No crosshair", "planned" ], [ "noInventoryHud", "No inventory/item bar", "planned" ], [ "invisibleStorm", "Invisible storm", "hide zone on minimap + full map" ], [ "noChestsVisible", "Chests invisible", "chests + ammo/grenade crates · proven" ], [ "noHealthShieldHud", "No health/shield HUD", "planned" ], [ "monochrome", "Monochrome vision", "game canvas grayscale · proven" ], [ "flashlightMode", "Flashlight mode", "configurable radius; mouse/player follow" ] ],
        modifiers: [ [ "transparentRoofs", "Transparent roofs", "static map roofs" ], [ "healthBars", "Player health bars", "remote players" ], [ "numericHealthShield", "Health/shield numbers", "numbers inside native bars · proven" ], [ "playerNames", "Player names", "remote players" ], [ "allGlidersInvisible", "All gliders invisible", "self + remote" ], [ "allTrailsInvisible", "All trails invisible", "self + remote" ], [ "screenChests", "Screen chests", "always-visible contents above detected containers: unresolved" ], [ "screenAirdrops", "Screen airdrops", "always-visible contents above detected airdrops: unresolved" ], [ "screenFishing", "Screen fishing spots", "always-visible contents above detected fishing spots: unresolved" ], [ "nearestPlayer", "Nearest player indicator", "off-screen only + distance" ], [ "nearestPlayerName", "Player name in nearest arrow", "below distance; follows upright label", true ], [ "nearestChest", "Nearest chest indicator", "hide while target is on-screen" ], [ "nearestAirdrop", "Nearest airdrop indicator", "hide while target is on-screen" ], [ "permanentMeteor", "Permanent meteor location", "automatic native waypoint retention · proven" ], [ "identifyBots", "Identify bots", "bounded native metadata/source recon; no classifier yet" ], [ "highContrastPlayers", "High-contrast players", "deferred; optional native yellow ring" ], [ "cleanLoot", "Remove loot glow/effects", "identified glow resource only · test" ], [ "transparentFoliage", "Transparent foliage", "identified canopy opacity 25% · test" ], [ "stormEdge", "Storm edge highlight", "planned" ], [ "stormCenter", "Safe-zone center direction", "planned" ], [ "stormDistance", "Storm-edge distance", "planned" ], [ "customCrosshair", "Enhanced/custom crosshair", "built-ins + upload" ], [ "lowHealthWarning", "Low-health visual warning", "HP below your threshold; local + remote outline · test" ], [ "lowAmmoWarning", "Low-ammo visual warning", "per-type thresholds; every gun slot + grappler charges · test" ], [ "lowMatsWarning", "Low-material warning", "per-material thresholds including scraps · test" ], [ null, "Show player inventories", "three compact rows below player" ], [ "inventorySlots", "Inventory: 5 item slots", "native appearance proven; slot ammo numbers removed", true ], [ "inventoryMaterials", "Inventory: build materials/counts", "wood / brick / metal / scraps · appearance proven", true ], [ "inventoryAmmo", "Inventory: ammo by type", "native icons + separate counts · appearance proven", true ], [ "inventorySize", "Inventory size", "Small / Medium / Large / XL", true, "select" ] ]
    };
    // V48: proven modifiers stay selectable without blue flags or recurring live chores.
    // Keep only changed warnings and unresolved contents/bot/foliage/glow routes in the primary test surface.
    const REQUIRED_TESTS = ["screenChests","screenAirdrops","screenFishing","lowHealthWarning","lowMatsWarning","lowAmmoWarning","identifyBots","cleanLoot","transparentFoliage"];
    const /* BRIO: renderWarningThresholds (V48)
     * Eleven labeled inputs in ONE horizontal nonwrapping row; narrow screens scroll horizontally.
     * Explicit indices preserve requested display order (shells before heavy) despite native reserve order.
     * Fieldset.disabled supplies actual keyboard/form disabling; opacity greys the corresponding group.
     */
    renderWarningThresholds = (p, settings) => {
        const row = D.createElement("div"); row.className = "brioThresholds";
        row.setAttribute("aria-label", "Warning thresholds: warn strictly below these values");
        for (const [kind,modifier,title,items] of [
            ["health","lowHealthWarning","Health",[["HP",0]]],
            ["ammo","lowAmmoWarning","Ammo / charges",[["Light",0],["Medium",1],["Shells",3],["Heavy",2],["Rockets",4],["Grappler",5]]],
            ["materials","lowMatsWarning","Materials",[["Wood",0],["Brick",1],["Metal",2],["Scraps",3]]]
        ]) {
            const group = D.createElement("fieldset"), legend = D.createElement("legend");
            group.dataset.warningModifier = modifier; group.disabled = !settings[modifier];
            legend.textContent = title + " · under"; group.appendChild(legend);
            for (const [name,index] of items) {
                const label = D.createElement("label"), input = D.createElement("input");
                label.appendChild(D.createTextNode(name)); input.type = "number";
                input.min = "0"; input.max = "1000000"; input.step = "1";
                input.dataset.warningKind = kind; input.dataset.warningIndex = index;
                input.setAttribute("aria-label", "Low " + name + " warning threshold");
                const current = () => {const t = extrasState().warningThresholds; return kind === "health" ? t.health : t[kind][index];};
                input.value = String(kind === "health" ? settings.warningThresholds.health : settings.warningThresholds[kind][index]);
                // Keep the last good value while blank/invalid input is being edited; normalize on blur/change.
                // Invalidate only BRIO's settings cache so native/remote draw decisions update immediately.
                input.oninput = () => {
                    if (input.value.trim() === "" || !input.checkValidity()) return;
                    const value = Number(input.value);
                    if (!Number.isSafeInteger(value) || value < 0 || value > 1000000) return;
                    const z = extrasState();
                    if (kind === "health") z.warningThresholds.health = value; else z.warningThresholds[kind][index] = value;
                    saveExtras(z); featureEx.at = -Infinity;
                };
                input.onchange = input.onblur = () => {input.oninput(); input.value = String(current());};
                label.appendChild(input); group.appendChild(label);
            }
            row.appendChild(group);
        }
        p.appendChild(row);
    };
    const /* BRIO: renderExtras
     * Render status and blue test flags from the same option registry used by the written live procedure.
     */
    renderExtras = () => {
        const a = extras.querySelector(".brioTabs"), p = extras.querySelector(".brioPage"), s = extrasState();
        if (![ "small", "medium", "large", "xl" ].includes(s.inventorySize)) {
            s.inventorySize = "medium";
            saveExtras(s);
        }
        a.textContent = p.textContent = "";
        for (const x of [ "challenges", "modifiers" ]) {
            const z = D.createElement("button");
            z.textContent = x[0].toUpperCase() + x.slice(1);
            z.className = x === extraTab ? "on" : "";
            z.onclick = () => {
                extraTab = x;
                renderExtras();
            };
            a.appendChild(z);
        }
        if (extraTab === "modifiers") renderWarningThresholds(p, s);
        for (const [id, name, note, child, kind] of EXTRA[extraTab]) {
            if (!id) {
                const g = D.createElement("div");
                g.className = "brioGroup";
                g.textContent = name + " · " + note;
                p.appendChild(g);
                continue;
            }
            const st = statusOf(id), r = D.createElement("div"), l = D.createElement("label"), b = D.createElement("span");
            r.className = `brioOpt${child ? " child" : ""} st-${st}`;
            l.innerHTML = `${name} <small style="color:#ccc">[${note}]</small>`;
            b.className = "brioBadge";
            b.textContent = st === "green" ? "PROVEN" : st === "yellow" ? "TESTING" : "UNPROVEN";
            if (REQUIRED_TESTS.includes(id)) {
                const flag = D.createElement("span");
                flag.textContent = "⚑ ON FOR TEST";
                flag.style = "background:#1164cf;color:white;font:bold 10px Arial;padding:4px 6px;border:1px solid #8bc7ff";
                r.appendChild(flag);
            }
            if (kind === "select") {
                const c = D.createElement("select");
                for (const [v, tx] of [ [ "small", "Small" ], [ "medium", "Medium" ], [ "large", "Large" ], [ "xl", "XL" ] ]) {
                    const o = D.createElement("option");
                    o.value = v;
                    o.textContent = tx;
                    c.appendChild(o);
                }
                c.value = s[id] || "medium";
                c.onchange = () => {
                    const z = extrasState();
                    z[id] = c.value;
                    saveExtras(z);
                };
                r.append(l, b, c);
            } else {
                const c = D.createElement("input");
                c.type = "checkbox";
                c.checked = !!s[id];
                c.onchange = () => {
                    const z = extrasState();
                    z[id] = c.checked;
                    saveExtras(z);
                    featureEx.at = -Infinity;
                    const group = p.querySelector(`[data-warning-modifier="${id}"]`);
                    if (group) group.disabled = !c.checked;
                    if (id === "monochrome") syncMonochrome(c.checked);
                };
                r.append(l, b, c);
            }
            p.appendChild(r);
        }
    };
    extras.querySelector("[data-close]").onclick = () => extras.style.display = "none";
    const /* BRIO: intercept
     * Intercept only the two native home buttons used for BRIO UI; ordinary Play remains native.
     */
    intercept = e => {
        const b = e.target?.closest?.("#loggedInLocker,#loggedInShop");
        if (!b) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (b.id === "loggedInLocker") {
            renderLocker();
            locker.style.display = "flex";
        } else {
            renderExtras();
            extras.style.display = "flex";
        }
    };
    D.addEventListener("click", intercept, true);
    const choose = (x, k) => {
        if (!x || x.mode === "native") return {
            mode: "native"
        };
        if (x.mode === "item") return x;
        if (x.mode === "custom" && [ "body", "head", "pickaxe" ].includes(k)) {
            const c = S.custom[k].find(v => v.id === x.id);
            return c ? {
                ...x,
                data: c.data
            } : {
                mode: "native"
            };
        }
        if (x.mode === "invisible" && BLANK[k]) return {
            mode: "invisible",
            data: BLANK[k],
            name: "Invisible"
        };
        if (x.mode === "invisible" && k === "trail") return {
            mode: "invisible",
            name: "Invisible"
        };
        if (x.mode === "random") {
            const a = items(k === "body" || k === "head" ? "skin" : k), v = a[Math.floor(Math.random() * a.length)];
            return v ? {
                mode: "item",
                id: v.id,
                name: v.name
            } : {
                mode: "native"
            };
        }
        return {
            mode: "native"
        };
    }, asset = (k, x) => x.mode === "custom" || x.mode === "invisible" ? x.data : k === "body" ? `/cosmetics/body/${x.id}.png` : k === "head" ? `/cosmetics/head/${x.id}.png` : k === "pickaxe" ? `/cosmetics/pickaxe/${x.id}.png` : k === "glider" ? `/cosmetics/glider/${x.id}.png` : k === "emote" ? `/cosmetics/emotes/${x.id}.png` : null, loadRes = (k, x) => {
        if (!x || x.mode === "native") return Promise.resolve(null);
        const u = asset(k, x);
        if (!u) return Promise.resolve(null);
        const ck = `${k}:${x.mode}:${x.id || ""}`;
        if (S.resources.has(ck)) return S.resources.get(ck);
        const p = new Promise((ok, no) => {
            const im = new Image;
            im["ÀA"] = 2;
            im.onload = () => {
                im["ÀA"] = 1;
                im["ÁÅe"] = im.width / 2;
                im["âÅÉ"] = im.height / 2;
                ok({
                    src: u,
                    ["ÁÄ"]: im,
                    __brio: true,
                    __kind: k
                });
            };
            im.onerror = () => no(new Error("asset load failed " + ck));
            im.src = u;
        });
        S.resources.set(ck, p);
        p.catch(() => S.resources.delete(ck));
        return p;
    }, held = r => r?.["Åé"]?.[r?.["ÈÆ"]]?.type || null, /* BRIO: nativeSnap
     * Remember renderer cosmetics before local adapters so cleanup can restore native resources/descriptors.
     */
    nativeSnap = r => ({
        body: r["Ëå"]?.["À"],
        head: r.head?.["À"],
        headBackup: r["Äâè"],
        pickaxe: r["ÉãÂ"],
        trail: r["Ëé"],
        trailTimer: r["åëÅ"],
        wrap: r["ÆÃÅ"],
        gliderId: r["aéÄ"],
        glider: r["äÀÊ"],
        gliderDisplay: r["ÂÅ"]?.["À"],
        limbs: {
            l: r["áË"]?.opacity,
            r: r["ÄÂ"]?.opacity,
            f: r["ÄãÀ"]?.opacity,
            s: r["èÅ"]?.opacity
        }
    }), restoreEmote = () => {
        const h = S.emoteEffect;
        if (!h) return;
        try {
            if (h.desc) Object.defineProperty(h.target, "À", h.desc); else h.target["À"] = h.base;
            if (h.desc && "value" in h.desc && h.desc.writable) h.target["À"] = h.base;
        } catch (_) {}
        S.emoteEffect = null;
    }, emoteSlot = v => {
        const m = v?.["ÁÄ"]?.__brioEmoteSlot;
        if (Number.isInteger(m) && m >= 0 && m < 4) return m;
        const id = String(v?.src || v?.["ÁÄ"]?.src || "").toLowerCase().match(/emote\d+/)?.[0], native = (read("locker2", {}).emotes || []).map(x => String(x).toLowerCase());
        return id ? native.indexOf(id) : -1;
    }, mapEmote = v => {
        const i = emoteSlot(v), to = i >= 0 ? S.emoteResolved[i] : null;
        return to || v;
    }, installEmote = r => {
        restoreEmote();
        const o = r?.["ÄÊâ"];
        if (!o) return;
        const desc = Object.getOwnPropertyDescriptor(o, "À"), h = {
            target: o,
            desc: desc,
            base: o["À"],
            current: o["À"]
        };
        Object.defineProperty(o, "À", {
            configurable: true,
            enumerable: desc?.enumerable ?? true,
            get() {
                return h.current;
            },
            set(v) {
                h.base = v;
                h.current = mapEmote(v);
            }
        });
        S.emoteEffect = h;
    }, restoreSrc = () => {
        if (!S.srcDesc) return;
        try {
            Object.defineProperty(HTMLImageElement.prototype, "src", S.srcDesc);
        } catch (_) {}
        S.srcDesc = null;
        clearTimeout(S.srcTimer);
    }, installSrc = R => {
        restoreSrc();
        if (!R.emotes.some(x => x.mode === "item")) return;
        const d = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
        if (!d?.set) return;
        const set = d.set;
        Object.defineProperty(HTMLImageElement.prototype, "src", {
            configurable: d.configurable,
            enumerable: d.enumerable,
            get: d.get,
            set(v) {
                const m = String(v).toLowerCase().split("?")[0].match(/(?:^|\/)buildart\/emote([0-3])\.png$/);
                if (m) {
                    const i = +m[1], x = R.emotes[i];
                    try {
                        this.__brioEmoteSlot = i;
                    } catch (_) {}
                    if (x?.mode === "item") return set.call(this, asset("emote", x));
                }
                set.call(this, v);
            }
        });
        S.srcDesc = d;
        S.srcTimer = setTimeout(restoreSrc, 72e4);
    };
    const restoreResourceMaps = () => {
        for (const map of [ S.roofSaved, S.buildSaved, S.lootSaved ]) {
            for (const {w: w, old: old} of map.values()) try {
                w["ÁÄ"] = old;
            } catch (_) {}
            map.clear();
        }
    };
    const cosmeticLock = (target, key, chooseValue) => {
        if (!target) return;
        const d = Object.getOwnPropertyDescriptor(target, key);
        if (d && !d.configurable) {
            log("COSMETIC ADAPTER UNAVAILABLE", {
                key: key,
                reason: "nonconfigurable native property"
            });
            return;
        }
        let native = target[key];
        const getNative = () => d?.get ? Reflect.apply(d.get, target, []) : native;
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() {
                return chooseValue(getNative());
            },
            set(v) {
                if (d?.set) Reflect.apply(d.set, target, [ v ]); else native = v;
            }
        });
        (S.cosmeticAdapters || (S.cosmeticAdapters = [])).push(() => {
            if (d) {
                Object.defineProperty(target, key, d);
                if ("value" in d && d.writable) target[key] = native;
            } else {
                delete target[key];
                target[key] = native;
            }
        });
    }, restoreCosmetics = () => {
        while (S.cosmeticAdapters?.length) try {
            S.cosmeticAdapters.pop()();
        } catch (e) {
            S.errors.push("cosmetic restore: " + String(e));
        }
    }, sceneObserve = node => {
        if (!node || typeof node !== "object" || !Array.isArray(node["âè"]) || typeof node.add !== "function" || typeof node.remove !== "function") return;
        if (!S.sceneRoots) S.sceneRoots = new Set;
        if (S.sceneRoots.size < 96) S.sceneRoots.add(node);
        if (!S.meteorObservers) S.meteorObservers = new Map;
        if (S.meteorObservers.has(node) || S.meteorObservers.size >= 96 || !extrasState().permanentMeteor) return;
        const restores = [];
        for (const key of [ "add", "âá", "Åæê" ]) {
            const orig = node[key], d = Object.getOwnPropertyDescriptor(node, key);
            if (typeof orig !== "function" || d && (!d.configurable && !d.writable) || d && !("value" in d)) continue;
            const wrap = function(...args) {
                const result = Reflect.apply(orig, this, args);
                for (const x of args) try {
                    meteorCandidate(x, this["âè"] || []);
                    captureRoof(x);
                    hudCandidate(x);
                } catch (e) {
                    if (S.errors.length < 100) S.errors.push("scene add: " + String(e));
                }
                return result;
            };
            try {
                Object.defineProperty(node, key, {
                    configurable: d?.configurable ?? true,
                    enumerable: d?.enumerable ?? true,
                    writable: true,
                    value: wrap
                });
                restores.push(() => {
                    if (node[key] === wrap) {
                        if (d) Object.defineProperty(node, key, d); else delete node[key];
                    }
                });
            } catch (_) {}
        }
        if (restores.length) S.meteorObservers.set(node, restores);
    }, sceneRoots = () => {
        const roots = new Set([...(S.sceneRoots || []), ...(S.renderExtraRoots || [])]);
        for (const x of [ S.renderer?.Eâ, S.renderer?.["â"], ...S.arrayHooks.keys() ]) {
            let p = x;
            for (let n = 0; p && n < 10; n++, p = p.parent) roots.add(p);
        }
        if (!S.windowSceneChecked) {
            S.windowSceneChecked = true;
            for (const key of Object.getOwnPropertyNames(W).slice(0, 1200)) {
                try {
                    const d = Object.getOwnPropertyDescriptor(W, key), v = d?.value;
                    if (v && typeof v === "object" && !(v instanceof Node) && Array.isArray(v["âè"]) && typeof v.add === "function") roots.add(v);
                } catch (_) {
                    S.sceneSkipped = (S.sceneSkipped || 0) + 1;
                }
            }
        }
        return roots;
    };
    const renderArrays = new Map;
    let renderDiscovery = null, renderSeen = new WeakSet;
    const nativeDrawable = n => !!(n && typeof n === "object" && !n.__brioHudClone && !String(n.type || "").startsWith("brio") && typeof n["éa"] === "function" && Array.isArray(n["âè"]) && n["ë"]);
    const observeRendered = n => {
        if (!nativeDrawable(n) || renderSeen.has(n)) return;
        renderSeen.add(n);
        try {
            meteorCandidate(n);
            hudCandidate(n);
            if (n.parent && !S.sceneRoots?.has(n.parent)) { const extra = S.renderExtraRoots || (S.renderExtraRoots = new Set); if (extra.size < 64) extra.add(n.parent); }
            sceneObserve(n.parent);
            sceneObserve(n);
            if (!n["À"] && !n.canvas && !("text" in n) && typeof n.add === "function") {
                observeRenderArray(n["âè"], true);
                if (Array.isArray(n["ÉE"])) observeRenderArray(n["ÉE"], true);
            }
        } catch (_) {}
    };
    const observeRenderArray = (a, nativeOwner = false, hudOwner = false) => {
        if (renderArrays.has(a) || renderArrays.size >= (hudOwner ? 160 : 128) || !nativeOwner && (!a.length || !a.slice(0, 3).some(nativeDrawable))) return;
        const restores = [];
        for (const key of [ "forEach", "push", "unshift" ]) {
            const d = Object.getOwnPropertyDescriptor(a, key), orig = key === "forEach" && a[key] === renderDiscovery?.wrap ? renderDiscovery.desc.value : a[key];
            if (typeof orig !== "function" || d && (!d.configurable || !("value" in d))) continue;
            const wrap = key === "forEach" ? function(callback, receiver) {
                return Reflect.apply(orig, this, [ function(n, i, array) {
                    observeRendered(n);
                    return Reflect.apply(callback, receiver, [ n, i, array ]);
                } ]);
            } : function(...nodes) {
                const result = Reflect.apply(orig, this, nodes);
                for (const n of nodes) {
                    observeRendered(n);
                    meteorCandidate(n, this);
                    hudCandidate(n);
                }
                return result;
            };
            Object.defineProperty(a, key, {
                configurable: true,
                writable: true,
                enumerable: d?.enumerable ?? false,
                value: wrap
            });
            restores.push(() => {
                if (a[key] === wrap) {
                    if (d) Object.defineProperty(a, key, d); else delete a[key];
                }
            });
        }
        renderArrays.set(a, restores);
        for (const n of a) observeRendered(n);
    };
    const stopRenderDiscovery = () => {
        if (!renderDiscovery) return;
        if (Array.prototype.forEach === renderDiscovery.wrap) Object.defineProperty(Array.prototype, "forEach", renderDiscovery.desc);
        clearTimeout(renderDiscovery.timer);
        renderDiscovery = null;
        log("NATIVE RENDER DISCOVERY RESTORED", {
            arrays: renderArrays.size,
            cap: 160, generalCap: 128, reservedHudArrays: 32
        });
    };
    const restoreRenderArrays = () => {
        for (const restores of renderArrays.values()) for (const restore of restores.reverse()) restore();
        renderArrays.clear();
        renderSeen = new WeakSet;
        S.renderExtraRoots?.clear();
    };
    const startRenderDiscovery = reason => {
        stopRenderDiscovery();
        const desc = Object.getOwnPropertyDescriptor(Array.prototype, "forEach"), orig = desc.value;
        const wrap = function(callback, receiver) {
            try {
                observeRenderArray(this);
            } catch (_) {}
            return Reflect.apply(orig, this, [ function(n, i, a) {
                // Discovery must inspect reached drawables even after the scoped-array cap.
                try { observeRendered(n); } catch (_) {}
                return Reflect.apply(callback, receiver, [ n, i, a ]);
            } ]);
        };
        Object.defineProperty(Array.prototype, "forEach", {
            ...desc,
            value: wrap
        });
        renderDiscovery = {
            desc: desc,
            wrap: wrap,
            timer: setTimeout(stopRenderDiscovery, 12e3)
        };
        log("NATIVE RENDER DISCOVERY", {
            reason: reason,
            durationMs: 12e3,
            cap: 160, generalCap: 128, reservedHudArrays: 32,
            surface: "native drawable child-array traversal; no Canvas hook"
        });
    };
    const /* BRIO: applyLocal
     * Apply selected local cosmetics after resource loading. Preserve native authority and current renderer identity.
     */
    applyLocal = async () => {
        const r = S.renderer;
        if (!r || !S.native) return;
        const epoch = S.runEpoch, s = S.playVisuals || state(), e = extrasState(), R = S.resolvedVisuals || (S.resolvedVisuals = {
            body: choose(s.body, "body"),
            head: choose(s.head, "head"),
            pickaxe: choose(s.pickaxe, "pickaxe"),
            trail: choose(s.trail, "trail"),
            wrap: choose(s.wrap, "wrap"),
            glider: choose(s.glider, "glider"),
            emotes: Array.from({
                length: 4
            }, (_, i) => choose(Array.isArray(s.emotes) ? s.emotes[i] : null, "emote"))
        });
        log("COSMETIC SELECTIONS", R);
        const safe = (k, x) => loadRes(k, x).catch(err => {
            log("COSMETIC ASSET FAILED", {
                category: k,
                mode: x?.mode,
                id: x?.id,
                error: String(err)
            });
            return null;
        });
        try {
            const [bo, he, pi, gl, igl, ...em] = await Promise.all([ safe("body", R.body), safe("head", R.head), safe("pickaxe", R.pickaxe), safe("glider", R.glider), e.allGlidersInvisible ? safe("glider", {
                mode: "invisible",
                data: BLANK.glider
            }) : Promise.resolve(null), ...R.emotes.map(x => safe("emote", x)) ]);
            if (S.destroyed || epoch !== S.runEpoch || r !== S.renderer) return;
            installSrc(R);
            if (bo) cosmeticLock(r["Ëå"], "À", () => bo);
            if (he) {
                cosmeticLock(r.head, "À", () => he);
                cosmeticLock(r, "Äâè", () => he);
            }
            if (pi) {
                cosmeticLock(r, "ÉãÂ", () => pi);
                cosmeticLock(r["ä"], "À", v => held(r) === "pickaxe" ? pi : v);
            }
            const hide = R.body.mode === "invisible";
            for (const [p, k] of [ [ "áË", "l" ], [ "ÄÂ", "r" ], [ "ÄãÀ", "f" ], [ "èÅ", "s" ] ]) if (r[p] && S.native.limbs[k] !== undefined) if (hide) cosmeticLock(r[p], "opacity", () => 0);
            if (R.trail.mode === "item") cosmeticLock(r, "Ëé", () => R.trail.id + "-");
            if (R.trail.mode === "invisible" || e.allTrailsInvisible) cosmeticLock(r, "åëÅ", () => NaN);
            if (R.wrap.mode === "item") cosmeticLock(r, "ÆÃÅ", () => R.wrap.id);
            const gg = igl || gl;
            if (gg) {
                cosmeticLock(r, "äÀÊ", () => gg);
                cosmeticLock(r["ÂÅ"], "À", () => gg);
            } else {
                r["aéÄ"] = S.native.gliderId;
                r["äÀÊ"] = S.native.glider;
                if (r["ÂÅ"] && S.native.gliderDisplay) r["ÂÅ"]["À"] = S.native.gliderDisplay;
            }
            S.emoteResolved = em.map((x, i) => R.emotes[i].mode === "item" ? x : null);
            installEmote(r);
            if (S.emoteEffect) S.emoteEffect.current = mapEmote(S.emoteEffect.base);
            log("LOCAL READY", {
                capturedName: r["Ée"],
                expected: S.localName,
                adapters: S.cosmeticAdapters?.length || 0,
                categories: Object.fromEntries([ ...[ "body", "head", "pickaxe", "trail", "wrap", "glider" ].map(k => [ k, {
                    mode: R[k].mode,
                    id: R[k].id || null
                } ]), [ "emotes", R.emotes.map(x => ({
                    mode: x.mode,
                    id: x.id || null
                })) ] ])
            });
        } catch (e2) {
            S.errors.push(String(e2));
            log("LOCAL ERROR", String(e2));
        }
    };
    const isPlayer = o => !!(o && typeof o === "object" && o["Ëå"] && o.head && o["Eâ"] && typeof o["Ée"] === "string"), isLocal = o => o === S.renderer, worldPos = r => {
        const p = r?.["â"]?.["ë"], x = p?.["É"], y = p?.["Ä"];
        return Number.isFinite(x) && Number.isFinite(y) ? {
            x: x,
            y: y
        } : null;
    }, localNameMatch = o => {
        if (!isPlayer(o)) return false;
        const n = String(o["Ée"] || ""), want = String(S.localName || "");
        if (n === want) return true;
        if (!n.startsWith("uL#") || !want.startsWith("uL#")) return false;
        return n === want.slice(0, n.length) || want === n.slice(0, want.length);
    }, /* BRIO: resourceSlots
     * Enumerate reached local drawable resource wrappers. Do not fetch/evaluate native engine strings as code.
     */
    resourceSlots = o => {
        const out = [], seen = new Set, walk = (v, d) => {
            if (!v || typeof v !== "object" || d > 4 || seen.has(v) || v === W || v === D || v instanceof Node) return;
            seen.add(v);
            if (v["ÁÄ"] && typeof v["ÁÄ"] === "object") {
                const p = norm(v.src || v["ÁÄ"]?.currentSrc || v["ÁÄ"]?.src);
                if (p && p !== "/") out.push({
                    w: v,
                    path: p
                });
            }
            for (const k of Object.keys(v).slice(0, 70)) {
                if ([ "parent", "owner", "stage", "game", "ÁÄ" ].includes(k)) continue;
                let x;
                try {
                    x = v[k];
                } catch (_) {
                    continue;
                }
                if (!x || typeof x !== "object" || x instanceof Node) continue;
                if (Array.isArray(x)) {
                    if (x.length > 24) continue;
                    for (const y of x) walk(y, d + 1);
                } else walk(x, d + 1);
            }
        };
        walk(o, 0);
        const u = [], ws = new Set;
        for (const x of out) if (!ws.has(x.w)) {
            ws.add(x.w);
            u.push(x);
        }
        return u;
    }, isWorld = o => !!(o && typeof o === "object" && o.id != null && [ "object", "buildable", "spellfield", "gun", "ammo", "chest", "airdrop" ].includes(String(o.type))), /* BRIO: collectPlayers
     * Collect players from reached active native arrays. Avoid stale/culled fallback players and bot guesses.
     */
    collectPlayers = () => {
        const out = [], seen = new Set;
        for (const a of [ S.rendererArray, ...S.arrayHooks.keys() ]) if (Array.isArray(a)) for (const x of a) if (isPlayer(x) && !seen.has(x)) {
            seen.add(x);
            out.push(x);
        }
        return out;
    }, /* BRIO: collectWorld
     * Collect reached active world objects only; private/disconnected engine registries are not assumed reachable.
     */
    collectWorld = () => {
        const out = [], seen = new Set;
        for (const a of [ S.rendererArray, ...S.arrayHooks.keys() ]) if (Array.isArray(a)) for (const x of a) if (isWorld(x) && !seen.has(x)) {
            seen.add(x);
            out.push(x);
        }
        return out;
    };
    const transparentImage = old => {
        if (!old) return Promise.resolve(null);
        if (S.transparent.has(old)) return S.transparent.get(old);
        const p = new Promise(resolve => {
            const make = () => {
                const width = old.naturalWidth || old.width, height = old.naturalHeight || old.height;
                if (!(width > 0 && height > 0)) {
                    resolve(null);
                    return;
                }
                const c = D.createElement("canvas");
                c.width = width;
                c.height = height;
                const im = new Image;
                im["ÀA"] = 2;
                im.onload = () => {
                    im["ÀA"] = 1;
                    im["ÁÅe"] = im.width / 2;
                    im["âÅÉ"] = im.height / 2;
                    resolve(im);
                };
                im.onerror = () => resolve(null);
                im.src = c.toDataURL("image/png");
            };
            if (old instanceof HTMLImageElement && !old.naturalWidth && (!old.complete || old["ÀA"] === 2)) {
                let timeout;
                const done = () => {
                    clearTimeout(timeout);
                    old.removeEventListener("load", loaded);
                    old.removeEventListener("error", failed);
                };
                const loaded = () => {
                    done();
                    make();
                }, failed = () => {
                    done();
                    resolve(null);
                };
                old.addEventListener("load", loaded, {
                    once: true
                });
                old.addEventListener("error", failed, {
                    once: true
                });
                timeout = setTimeout(failed, 5e3);
            } else make();
        });
        S.transparent.set(old, p);
        p.then(im => {
            if (!im) S.transparent.delete(old);
        });
        return p;
    }, blankWrapper = async (w, map, key) => {
        if (!w?.["ÁÄ"] || map.has(key)) return;
        const epoch = S.runEpoch, old = w["ÁÄ"], im = await transparentImage(old);
        if (S.destroyed || epoch !== S.runEpoch) return;
        if (im) {
            map.set(key, {
                w: w,
                old: old
            });
            w["ÁÄ"] = im;
        }
    }, captureRoof = o => {
        if (!extrasState().transparentRoofs) return;
        const w = o?.À, p = norm(w?.src || w?.["ÁÄ"]?.src || "");
        if (ROOFSET.has(p) && !S.roofSaved.has(p)) blankWrapper(w, S.roofSaved, p).then(maybeStop).catch(e => S.errors.push(String(e)));
    }, isBuild = o => {
        const txt = [ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"], ...resourceSlots(o).map(x => x.path) ].join(" ").toLowerCase();
        return /wall|campfirebuild|boostpadbuild|shieldbuild|shieldbubble/.test(txt) || resourceSlots(o).some(x => BUILDRE.test(x.path));
    }, blankBuild = o => {
        for (const x of resourceSlots(o)) if (x.path.startsWith("/buildart/") && (BUILDRE.test(x.path) || isBuild(o))) blankWrapper(x.w, S.buildSaved, x.path).catch(e => S.errors.push(String(e)));
    }, blankLoot = o => {
        for (const x of resourceSlots(o)) if (x.path.startsWith("/buildart/")) blankWrapper(x.w, S.lootSaved, x.path).catch(e => S.errors.push(String(e)));
    };
    const rememberRemote = r => {
        let e = S.remoteRefs.get(r.id);
        if (!e) {
            e = {
                r: r,
                id: r.id,
                name: r["Ée"],
                screen: null
            };
            S.remoteRefs.set(r.id, e);
        } else {
            e.r = r;
            e.name = r["Ée"];
        }
        return e;
    }, makeTrack = (r, e) => ({
        "ë": {
            "É": 0,
            "Ä": 0
        },
        size: 1,
        opacity: 1,
        A: 0,
        type: "brioTrack",
        visible: true,
        parent: null,
        "âè": [],
        "ÉE": [],
        "Eââ"(ctx) {
            try {
                const m = ctx.getTransform?.(), c = ctx.canvas;
                if (m && c) e.screen = {
                    x: m.e,
                    y: m.f,
                    a: m.a,
                    b: m.b,
                    c: m.c,
                    d: m.d,
                    at: performance.now(),
                    canvas: c
                };
            } catch (_) {}
        },
        "éa"(ctx) {
            this.Eââ(ctx);
        },
        "ÊÈA"() {
            try {
                this.parent?.remove?.(this);
            } catch (_) {}
            this.parent = null;
        }
    }), attachTrack = r => {
        if (!r || isLocal(r) || S.trackNodes.has(r) || !r["Eâ"]?.add) return;
        const e = rememberRemote(r), n = makeTrack(r, e);
        try {
            r["Eâ"].add(n);
            S.trackNodes.set(r, n);
        } catch (x) {
            S.errors.push(String(x));
        }
    }, attachLocalTrack = r => {
        if (!r || !r["Eâ"]?.add || S.localTrack?.node) return;
        const e = {
            screen: null
        }, n = makeTrack(r, e);
        try {
            r["Eâ"].add(n);
            S.localTrack = {
                state: e,
                node: n
            };
        } catch (x) {
            S.errors.push(String(x));
        }
    }, screenState = e => {
        const x = e?.screen;
        if (!x || performance.now() - x.at > 700 || !x.canvas) return null;
        const r = x.canvas.getBoundingClientRect?.();
        if (!r?.width || !r?.height) return null;
        return {
            x: r.left + x.x * (r.width / (x.canvas.width || r.width)),
            y: r.top + x.y * (r.height / (x.canvas.height || r.height)),
            rect: r
        };
    }, ensureArrow = (key, color) => {
        if (S[key]) return S[key];
        const u = D.createElement("div");
        u.style = "position:fixed;z-index:2147483644;pointer-events:none;width:176px;height:84px;display:none;transform-origin:50% 50%;filter:drop-shadow(0 2px 3px #000)";
        u.innerHTML = '<div class="shape" style="position:absolute;inset:0;clip-path:polygon(0 20%,68% 20%,68% 0,100% 50%,68% 100%,68% 80%,0 80%)"></div><span class="d" style="position:absolute;left:5px;top:23px;width:110px;height:38px;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;color:#fff;font:900 16px Arial;-webkit-text-stroke:1px #000;paint-order:stroke fill;text-shadow:1px 0 #000,-1px 0 #000,0 1px #000,0 -1px #000;box-sizing:border-box"></span>';
        u.querySelector(".shape").style.background = color;
        D.documentElement.appendChild(u);
        S[key] = u;
        return u;
    }, placeArrow = (u, dx, dy, dist, label, m = 76, rect = {
        left: 0,
        top: 0,
        width: innerWidth,
        height: innerHeight
    }) => {
        const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2, tx = Math.max(10, rect.width / 2 - m) / Math.max(Math.abs(dx), .001), ty = Math.max(10, rect.height / 2 - m) / Math.max(Math.abs(dy), .001), z = Math.max(0, Math.min(tx, ty)), ang = Math.atan2(dy, dx) * 180 / Math.PI;
        u.style.display = "block";
        u.style.left = cx + dx * z + "px";
        u.style.top = cy + dy * z + "px";
        u.style.transform = "translate(-50%,-50%) rotate(" + ang + "deg)";
        const d = u.querySelector(".d"), meters = Math.max(0, dist) / 100;
        const distanceText = (Math.round(meters * 10) / 10).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + "m";
        d.replaceChildren();
        const distance = D.createElement("span"); distance.textContent = distanceText; d.appendChild(distance);
        d.style.flexDirection = "column"; d.style.lineHeight = "18px";
        if (label) { const name = D.createElement("span"); name.className = "playerName"; name.textContent = String(label); name.style = "display:block;max-width:108px;overflow:hidden;text-overflow:ellipsis;font-size:16px;line-height:18px"; d.appendChild(name); }
        d.style.transform = ang > 90 || ang < -90 ? "rotate(180deg)" : "none";
        d.style.fontSize = Math.max(8, Math.min(16, 120 / Math.max(1, distanceText.length))) + "px";
    }, projectWorld = p => {
        const me = worldPos(S.renderer), raw = S.localTrack?.state?.screen;
        if (!me || !p || !raw?.canvas || performance.now() - raw.at > 700) return null;
        const rect = raw.canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return null;
        const kx = rect.width / (raw.canvas.width || rect.width), ky = rect.height / (raw.canvas.height || rect.height), dx = p.x - me.x, dy = p.y - me.y;
        return {
            x: rect.left + (raw.x + raw.a * dx + raw.c * dy) * kx,
            y: rect.top + (raw.y + raw.b * dx + raw.d * dy) * ky,
            rect: rect
        };
    }, nearestTick = () => nearestV40();
    const hudKinds = path => /\/inv[0-6]\.png$/.test(path) ? "slots" : /\/(?:wood|brick|metal|scrap|gear)\.png$/.test(path) ? "materials" : /\/(?:ammo|stack)[0-4]\.png$/.test(path) ? "ammo" : null;
    const /* BRIO: hudWalk
     * Traverse a small native widget subtree. Exclude BRIO clones and enforce the per-widget node cap.
     */
    hudWalk = (root, max = 100) => {
        const out = [], seen = new Set, stack = [ root ];
        while (stack.length && out.length < max) {
            const n = stack.pop();
            if (!n || seen.has(n) || typeof n !== "object") continue;
            seen.add(n);
            out.push(n);
            for (const k of [ "âè", "ÉE" ]) for (const c of n[k] || []) if (!String(c?.type || "").startsWith("brio")) stack.push(c);
        }
        return out;
    };
    const /* BRIO: hudPath
     * Identify native artwork by normalized resource path, independently of obfuscated constructor names.
     */
    hudPath = n => norm(n?.["À"]?.src || n?.["À"]?.["ÁÄ"]?.src || "");
    const hudCandidate = n => {
        if (n?.__brioHudClone || S.hudRejected?.has(n) || !hudKinds(hudPath(n))) return;
        if (!S.hudPending) S.hudPending = new WeakSet;
        if (S.hudPending.has(n) || S.hudSourceNodes?.has(n)) return;
        S.hudPending.add(n);
        const epoch = S.runEpoch;
        setTimeout(() => {
            S.hudPending.delete(n);
            if (S.destroyed || epoch !== S.runEpoch) return;
            try {
                hudInspect(n);
            } catch (e) {
                if (!S.hudInspectError) {
                    S.hudInspectError = true;
                    log("NATIVE HUD INSPECTION ERROR", String(e));
                }
            }
        }, 250);
    };
    const /* BRIO: slotCaption
     * Validate the native numbered caption below a slot. It is capture evidence, not slot-sizing geometry.
     */
    slotCaption = root => hudWalk(root, 32).find(n => (n.type === "text" || typeof n.text === "string") && /^[1-6]$/.test(String(n.text)) && Number(n["ë"]?.["Ä"]) > 0);
    const /* BRIO: slotUnit
     * Recognize both filled image roots and empty rectangle roots. Selected art may move inside persistent holders.
     */
    slotUnit = holder => {
        const candidates = [holder, ...(holder?.["âè"] || []), ...(holder?.["ÉE"] || [])];
        let group = null;
        for (const root of candidates) {
            if (!root || String(root.type || "").startsWith("brio")) continue;
            const cap = slotCaption(root), icons = hudWalk(root, 40).filter(n => hudKinds(hudPath(n)) === "slots");
            const square = Number(root.width) > 0 && Number(root.height) > 0 && Math.abs(root.width - root.height) < 2;
            if (cap && square && Number(cap["ë"]?.["Ä"]) >= root.height * .5) return root;
            if (cap && !root.width && icons.length === 1) group ||= root;
        }
        return group;
    };
    const /* BRIO: captureSlotRow
     * Capture five weapon slots from ordered native holders, excluding the leftmost pickaxe in a six-holder row. Reserve scoped HUD arrays for later replacements.
     */
    captureSlotRow = icon => {
        let unit = icon;
        for (let depth = 0; unit && depth < 4 && !slotUnit(unit); depth++) unit = unit.parent;
        if (!unit) return false;
        unit = slotUnit(unit);
        let row = unit.parent, holders = [];
        for (let depth = 0; row && depth < 3; depth++, row = row.parent) {
            holders = [...(row["âè"] || []), ...(row["ÉE"] || [])].map(holder => ({holder, root: slotUnit(holder)})).filter(x => x.root);
            if ((holders.length === 5 || holders.length === 6) && holders.some(x => x.root === unit)) break;
            holders = [];
        }
        if (!holders.length) return false;
        if (icon["À"]) S.hudSlotSprite = icon;
        (S.hudSourceNodes || (S.hudSourceNodes = new WeakSet)).add(icon);
        for (const k of ["âè", "ÉE"]) if (Array.isArray(row[k])) observeRenderArray(row[k], true, true);
        for (const {holder} of holders) for (const k of ["âè", "ÉE"]) if (Array.isArray(holder[k])) observeRenderArray(holder[k], true, true);
        holders.sort((a,b) => Number(a.holder["ë"]?.["É"] || 0) - Number(b.holder["ë"]?.["É"] || 0));
        if (new Set(holders.map(x => Number(x.holder["ë"]?.["É"] || 0))).size !== holders.length) return false;
        if (!S.hudTemplates) S.hudTemplates = {slots: [], materials: [], ammo: []};
        for (let rank = 0; rank < holders.length; rank++) {
            const {holder, root} = holders[rank], slotIndex = holders.length === 6 ? rank : rank + 1;
            if (slotIndex === 0) continue; // Native pickaxe holder is leftmost in the six-slot row.
            const nodes = hudWalk(root, 80), background = nodes.find(n => hudKinds(hudPath(n)) === "slots") || root;
            if (background["À"]) S.hudSlotSprite = background;
            S.hudSourceNodes.add(background);
            const previous = S.hudTemplates.slots.findIndex(r => r.slotIndex === slotIndex);
            if (previous >= 0 && S.hudTemplates.slots[previous].root === root) continue;
            const w = Math.abs(Number(background.width)), h = Math.abs(Number(background.height));
            if (!(w > 0 && h > 0) || !root.add) continue;
            const record = {root, icon: background, nodes, kind: "slots", path: hudPath(background), slotIndex,
                x: Number(holder["ë"]?.["É"]) || 0, y: Number(holder["ë"]?.["Ä"]) || 0, width: w, height: h,
                slotBounds: {left: -w/2, top: -h/2, width: w, height: h}, holder};
            const artwork = nodes.find(n => n !== background && isSlotArtwork(hudPath(n)) && n["À"]);
            if (artwork) (S.hudArtStyles || (S.hudArtStyles = new Map)).set(hudPath(artwork), {ratio: artwork.width/w, angle: Number(artwork.A)||0, size: Number(artwork.size)||1});
            if (previous >= 0) S.hudTemplates.slots[previous] = record; else S.hudTemplates.slots.push(record);
            S.hudVersion = (S.hudVersion || 0) + 1;
            if ((S.hudSlotLogs || 0) < 24) {S.hudSlotLogs = (S.hudSlotLogs || 0) + 1; log("NATIVE WEAPON SLOT", {slotIndex, rootType: root.type, path: record.path, bounds: record.slotBounds, holderPosition: holder["ë"], method: "ordered native holders; includes empty rectangles"});}
        }
        S.hudStatus = {captured: true, counts: Object.fromEntries(Object.entries(S.hudTemplates).map(([k,v]) => [k,v.length])), replica: "native slot holders and material/stack templates; visual comparison required"};
        ownMaterialWarnings();
        return true;
    };
    const /* BRIO: hudInspect
     * Reject pickup particles/player decorations before acquiring material/ammo HUD templates. Candidate roots may contain their own counts.
     */
    hudInspect = n => {
        const path = hudPath(n), kind = hudKinds(path);
        if (path && n?.["À"]?.["ÁÄ"]) (S.hudNativeImages || (S.hudNativeImages = new Map)).set(path, n["À"]["ÁÄ"]);
        if (!kind || S.hudSourceNodes?.has(n)) return;
        if (!S.hudSourceNodes) S.hudSourceNodes = new WeakSet;
        // Pickup particles share HUD icon resources. Resource names alone are insufficient.
        let ancestry = n;
        for (let depth = 0; ancestry && depth < 12; depth++, ancestry = ancestry.parent) {
            if (ancestry.type === "particle" || String(ancestry.type || "").startsWith("brio")) return;
            for (const r of collectPlayers()) if (ancestry === r["â"] || ancestry === r["Eâ"]) return;
        }
        if (kind === "slots") { captureSlotRow(n); return; }
        if (kind !== "slots") {
            let p = n, validated = false;
            for (let depth = 0; p && depth < 3; depth++, p = p.parent) {
                const nodes = hudWalk(p, 80), icons = nodes.filter(x => hudKinds(hudPath(x)) === kind);
                if (icons.length !== 1) break;
                if (kind === "ammo" && nodes.some(x => hudKinds(hudPath(x)) === "slots")) return;
                if (nodes.some(x => (x.type === "text" || typeof x.text === "string") && /^\d+$/.test(String(x.text)))) { validated = true; break; }
            }
            if (!validated) return; // Never blacklist a still-being-built widget.
        }
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) for (const k of ["âè", "ÉE"]) if (Array.isArray(p[k])) observeRenderArray(p[k], true, true);
        S.hudInspectionCount = (S.hudInspectionCount || 0) + 1;
        let unit = n;
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) {
            const nodes = hudWalk(p, 80), icons = nodes.filter(x => hudKinds(hudPath(x)) === kind);
            if (icons.length !== 1) break;
            unit = p;
            if (nodes.some(x => x.type === "text" || typeof x.text === "string")) break;
        }
        const nodes = hudWalk(unit), sourceCtor = unit.constructor;
        if (nodes.some(x => x.type === "particle" || /^\+\d+$/.test(String(x.text || "")))) return;
        if (!S.hudTemplates) S.hudTemplates = {
            slots: [],
            materials: [],
            ammo: []
        };
        const ammoIndex = path => +(path.match(/(?:ammo|stack)([0-4])/) || [])[1];
        const previous = S.hudTemplates[kind].findIndex(r => kind === "slots" ? r.x === (Number(unit["ë"]?.["É"]) || 0) : kind === "ammo" ? ammoIndex(r.path) === ammoIndex(path) : r.path === path);
        if (kind === "ammo" && previous >= 0 && /\/stack/.test(S.hudTemplates.ammo[previous].path) && !/\/stack/.test(path)) return;
        if (previous < 0 && S.hudTemplates[kind].length >= (kind === "slots" ? 6 : kind === "materials" ? 4 : 5)) return;
        const record = {
            root: unit,
            icon: n,
            path: path,
            nodes: nodes,
            kind: kind,
            x: Number(unit["ë"]?.["É"]) || 0,
            y: Number(unit["ë"]?.["Ä"]) || 0,
            width: Math.abs(Number(n.width)) || 0,
            height: Math.abs(Number(n.height)) || 0
        };
        if (kind === "slots") {
            const art = nodes.find(x => isSlotArtwork(hudPath(x)) && x["À"] && x !== n);
            if (art && n.width) { const styles = S.hudArtStyles || (S.hudArtStyles = new Map); styles.set(hudPath(art), {ratio: art.width / n.width, angle: Number(art.A) || 0, size: Number(art.size) || 1}); }
        }
        S.hudSourceNodes.add(n);
        if (previous >= 0) S.hudTemplates[kind][previous] = record; else S.hudTemplates[kind].push(record);
        S.hudVersion = (S.hudVersion || 0) + 1;
        S.hudStatus = {
            captured: true,
            counts: Object.fromEntries(Object.entries(S.hudTemplates).map(([k, v]) => [ k, v.length ])),
            replica: "V47 inventory appearance proven by user; captured native rows with documented fallback"
        };
        if ((S.hudWidgetLogs || 0) < 32) { S.hudWidgetLogs = (S.hudWidgetLogs || 0) + 1; log("NATIVE HUD WIDGET", {
            kind: kind,
            path: path,
            rootType: unit.type,
            rootKeys: Object.keys(unit).slice(0, 70),
            nativeDraw: String(n["Eââ"] || "").slice(0, 1400),
            constructor: typeof sourceCtor === "function" ? String(sourceCtor).slice(0, 1800) : null,
            nodes: nodes.map(x => ({
                type: x.type,
                nativeDraw: String(x["Eââ"] || "").slice(0, 2000),
                path: hudPath(x),
                position: x["ë"],
                width: x.width,
                height: x.height,
                text: x.text,
                fields: Object.fromEntries(Object.entries(x).filter(([k, v]) => [ "string", "number", "boolean" ].includes(typeof v) && ![ "src" ].includes(k)).slice(0, 40))
            })),
            note: "Native widget candidates. Requires rendered HUD ancestry/geometry validation."
        }); }
        ownMaterialWarnings();
    };
    const /* BRIO: hudBounds
     * Compute general widget extents for material/ammo replicas. Weapon display sizing uses inventoryBounds instead.
     */
    hudBounds = record => {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        for (const n of record.nodes) {
            if (!n["À"] && !(n.type === "text" || typeof n.text === "string") && !(n === record.root && Number(n.width) > 0 && Number(n.height) > 0)) continue;
            let x = 0, y = 0, p = n, depth = 0;
            while (p && p !== record.root && depth++ < 10) {
                x += Number(p["ë"]?.["É"]) || 0;
                y += Number(p["ë"]?.["Ä"]) || 0;
                p = p.parent;
            }
            const w = Math.abs(Number(n.width)) || String(n.text || "").length * 12 || 30, h = Math.abs(Number(n.height)) || Number(n.fontSize) || 18;
            left = Math.min(left, x - w / 2);
            right = Math.max(right, x + w / 2);
            top = Math.min(top, y - h / 2);
            bottom = Math.max(bottom, y + h / 2);
        }
        if (!Number.isFinite(left)) return {
            left: -15,
            right: 15,
            top: -15,
            bottom: 15,
            width: 30,
            height: 30
        };
        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom,
            width: right - left,
            height: bottom - top
        };
    };
    const /* BRIO: ownMaterialWarnings
     * V46 native cell/slot bindings preserved; V48 fourth-material and shared thresholds require live proof.\n     * All five slots include unequipped guns and grapplers. These own-HUD bounds never change remote replica sizing.\n     * On root replacement, remove the old BRIO overlay before rebinding; match reset owns complete removal.
     */
    ownMaterialWarnings = () => {
        if (!S.renderer || !S.hudTemplates) return;
        for (const [root, node] of S.hudWarnNodes || []) if (!root.parent) { try { root.remove?.(node); } catch (_) {} S.hudWarnNodes.delete(root); }
        for (const rec of [...S.hudTemplates.materials, ...S.hudTemplates.slots]) {
            const ammo = rec.kind === "slots", i = ammo ? rec.slotIndex : materialIndex(rec.path);
            if (i < 0 || !rec.root?.add) continue;
            const existing = S.hudWarnNodes?.get(rec.root);
            if (existing?.__brioHudRecord === rec) continue;
            if (existing) {rec.root.remove?.(existing); S.hudWarnNodes.delete(rec.root);}
            if (!S.hudWarnNodes) S.hudWarnNodes = new Map;
            const bounds = ammo ? rec.slotBounds : hudBounds(rec), draw = (ctx, s) => {
                if (ammo && (!rec.root.parent || !rec.holder.parent)) return;
                // V48 keeps the proven slot/cell bounds and changes only the threshold decision.
                const e = exFast(), low = ammo ? nativeSlotLow(e, S.renderer, i, rec) : belowWarning(e, "materials", i, matState(S.renderer)?.[i]);
                if (!low) return;
                ctx.save();
                try {
                    ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
                    ctx.shadowColor = "#ff2020";
                    ctx.shadowBlur = 12 / s;
                    ctx.strokeStyle = "#ff2020";
                    ctx.lineWidth = 3 / s;
                    ctx.strokeRect((bounds.left - 3) / s, (bounds.top - 3) / s, (bounds.width + 6) / s, (bounds.height + 6) / s);
                } finally {
                    ctx.restore();
                }
            };
            const overlay = nativeNode(draw);
            overlay.__brioHudRecord = rec;
            rec.root.add(overlay);
            S.hudWarnNodes.set(rec.root, overlay);
            // V48 log analysis found 1255 repeated gun bindings in two V47 matches.
            // Rebinding remains correct when native roots rebuild; diagnostics retain novel geometry only.
            // Cap64 signatures per Play, separate from snapshot budgets; no renderer objects are stored.
            const signature = JSON.stringify([ammo ? "slot" : "material",i,bounds]);
            if (!S.hudWarningSignatures) S.hudWarningSignatures = new Set;
            if (!S.hudWarningSignatures.has(signature) && S.hudWarningSignatures.size < 64) {
            S.hudWarningSignatures.add(signature);
            log(ammo ? "OWN GUN SLOT WARNING BINDING" : "OWN MATERIAL WARNING BINDING", {
                slotIndex: ammo ? i : undefined,
                material: ammo ? "gun slot" : [ "wood", "brick", "metal", "scraps" ][i],
                threshold: ammo ? "per ammo type from warningThresholds" : "<" + extrasState().warningThresholds.materials[i],
                bounds: bounds,
                scope: ammo ? "all native gun slots; loaded + reserve total; independent of selection" : "own native material HUD"
            });
            }
        }
    };
    const /* BRIO: cloneNativeWidget
     * Clone bounded native drawable trees through constructors or plain-object factories. Preserve draw methods, resources and styles; never attach clones to discovery.
     */
    cloneNativeWidget = rec => {
        let count = 0;
        const pairs = [], seen = new Map;
        const clone = n => {
            if (++count > 80 || seen.has(n)) throw Error("native HUD widget cycle/limit");
            const C = n.constructor;
            if (typeof C !== "function") throw Error("native HUD constructor unavailable");
            let args;
            if (n["À"]) args = [ n["À"], 0, 0, n.width, n.height, n.opacity ]; else if (n.type === "text" || typeof n.text === "string") args = [ n.text, 0, 0, n.fillStyle || n["Äe"] || "#fff", n.fontFamily || "Arial", n.fontSize || 16, n.fontWeight || "bold", n.opacity, n.textAlign || "center" ]; else if (n.type === "arc") args = [ 0, 0, n["éã"], n["Äe"], n.endAngle || Math.PI * 2, n.startAngle || 0, n.lineWidth ]; else if (n.width !== undefined && n.height !== undefined) args = [ 0, 0, n.width, n.height, n["Äe"] || n.fillStyle, n.opacity ]; else args = [];
            const plain = C === Object || C === W.Object || C.name === "Object";
            const c = plain ? Object.create(Object.getPrototypeOf(n)) : Reflect.construct(C, args);
            if (plain) {
                c["âè"] = [];
                c["ÉE"] = [];
                c["ë"] = {
                    "É": 0,
                    "Ä": 0
                };
                for (const k of Object.keys(n)) if (typeof n[k] === "function") c[k] = n[k];
            }
            c.__brioHudClone = true;
            seen.set(n, c);
            for (const [k, v] of Object.entries(n)) {
                if ([ "parent", "canvas", "aãÁ", "text", "ë", "âè", "ÉE" ].includes(k) || typeof v === "function") continue;
                if (v == null || [ "number", "string", "boolean" ].includes(typeof v)) try {
                    c[k] = v;
                } catch (_) {}
            }
            if (n["À"]) c["À"] = n["À"];
            if (c["ë"] && n["ë"]) {
                c["ë"]["É"] = n["ë"]["É"];
                c["ë"]["Ä"] = n["ë"]["Ä"];
            }
            if (typeof n.text === "string" || typeof n.text === "number") {
                c.text = n.text;

            }
            pairs.push({
                source: n,
                node: c,
                path: hudPath(n)
            });
            for (const key of [ "âè", "ÉE" ]) for (const child of n[key] || []) if (!String(child?.type || "").startsWith("brio")) {
                const copy = clone(child), method = key === "ÉE" && typeof c["âá"] === "function" ? "âá" : "add";
                if (typeof c[method] !== "function") throw Error("native HUD child attachment unavailable");
                c[method](copy);
            }
            if (n.text && typeof n.text === "object") c.text = seen.get(n.text);
            return c;
        };
        return {
            root: clone(rec.root),
            pairs: pairs,
            record: rec
        };
    };
    const /* BRIO: ensureNativeSlotArt
     * Supply drawable item art when an empty native rectangle has no image child. Do not change the native source widget.
     */
    ensureNativeSlotArt = unit => {
        if (unit.pairs.some(p => isSlotArtwork(p.path))) return;
        const background = unit.pairs.find(p => /\/inv[0-6]\.png$/.test(p.path)) || (S.hudSlotSprite ? {source: S.hudSlotSprite, node: S.hudSlotSprite} : null);
        if (!background || typeof unit.root.add !== "function") return;
        const source = background.source, art = Object.create(Object.getPrototypeOf(background.node));
        for (const [key, value] of Object.entries(background.node)) if (![ "parent", "ë", "âè", "ÉE", "canvas" ].includes(key)) art[key] = value;
        art.__brioHudClone = true;
        art["ë"] = {
            "É": 0,
            "Ä": 0
        };
        art["âè"] = [];
        art["ÉE"] = [];
        art.width = Math.abs(Number(source.width)) * .7;
        art.height = Math.abs(Number(source.height)) * .7;
        art.A = 0;
        art.opacity = 1;
        unit.root.add(art);
        unit.pairs.push({
            source: source,
            node: art,
            path: "brio-item-template"
        });
        if (!S.emptySlotArtLogged) {
            S.emptySlotArtLogged = true;
            log("NATIVE EMPTY SLOT ART", {
                mode: "native background drawable/image protocol; item art at native consumable 70% ratio",
                note: "Weapon-specific native geometry needs live/source confirmation; empty lobby slots must still populate."
            });
        }
    };
    const /* BRIO: nativeInvFor
     * Cache remote native clones by HUD version. Rebuild after template replacement; destroy superseded clones.
     */
    nativeInvFor = r => {
        if (!S.hudTemplates?.slots?.length) return null;
        if (!S.nativeInvClones) S.nativeInvClones = new Map;
        let cached = S.nativeInvClones.get(r);
        if (cached?.version === S.hudVersion) return cached;
        if (cached) for (const row of cached.rows) for (const unit of row.units) try {
            unit.root["ÊÈA"]?.();
        } catch (_) {}
        const rows = [];
        for (const [kind, raw] of Object.entries(S.hudTemplates)) {
            const sorted = raw.slice().sort((a, b) => kind === "slots" ? a.slotIndex - b.slotIndex : a.x - b.x || a.y - b.y), templates = kind === "slots" ? sorted.slice(-5) : sorted, units = [];
            for (const rec of templates) try {
                const unit = cloneNativeWidget(rec);
                if (kind === "slots") ensureNativeSlotArt(unit);
                units.push(unit);
            } catch (e) {
                if (!rec.unavailable) {
                    rec.unavailable = true;
                    log("NATIVE HUD REPLICA UNAVAILABLE", {
                        kind: kind,
                        path: rec.path,
                        reason: String(e)
                    });
                }
            }
            if (units.length) rows.push({
                kind: kind,
                units: units
            });
        }
        cached = {
            version: S.hudVersion,
            rows: rows
        };
        S.nativeInvClones.set(r, cached);
        return cached;
    };
    const /* BRIO: inventoryBounds
     * V45 presentation contract: fit the weapon background into an 18px cell, not caption/artwork extents. Own ammo-warning geometry remains slotBounds.
     */
    inventoryBounds = rec => rec.kind === "slots" ? rec.slotBounds || hudBounds(rec) : hudBounds(rec);
    const /* BRIO: drawNativeInv
     * V47 user-proven presentation: preserve complete native rows,18px slot backgrounds,size multipliers and V45 X.\n     * V48 only removes redundant slot-ammo text and applies shared numeric/charge warning decisions.\n     * Empty X stays outside the native downscale; source nodes/assets are never edited by remote rendering.
     */
    drawNativeInv = (ctx, s, r) => {
        const cache = nativeInvFor(r);
        if (!cache?.rows.length) return new Set;
        const drawn = new Set;
        const ex = extrasState(), m = matState(r), ammo = Array.isArray(r["åæ"]) ? r["åæ"] : [], slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [];
        let y = 0;
        for (const row of cache.rows) {
            if (!ex[{
                slots: "inventorySlots",
                materials: "inventoryMaterials",
                ammo: "inventoryAmmo"
            }[row.kind]]) continue;
            const required = {
                slots: 5,
                materials: 4,
                ammo: 5
            }[row.kind];
            if (row.units.length !== required) {
                y += 21;
                continue;
            }
            drawn.add(row.kind);
            const widths = row.units.map(u => inventoryBounds(u.record).width), factor = Math.min(18 / Math.max(...widths, 1), 18 / Math.max(...row.units.map(u => inventoryBounds(u.record).height), 1)), gap = 2 / factor, total = widths.reduce((a, b) => a + b, 0) + gap * (widths.length - 1);
            let x = -total / 2, maxHeight = 0;
            row.units.forEach((u, i) => {
                const b = inventoryBounds(u.record);
                let value;
                const material = materialIndex(u.record.path), ammoIndex = +(u.record.path.match(/(?:ammo|stack)([0-4])/) || [])[1];
                if (row.kind === "materials") value = m[material];
                if (row.kind === "ammo") value = ammo[ammoIndex];
                for (const pair of u.pairs) {
                    if (row.kind !== "slots" && (pair.source.type === "text" || typeof pair.source.text === "string") && /^\d+$/.test(String(pair.source.text))) {
                        pair.node.text = Number.isFinite(value) ? String(value) : "?";
                        pair.node.__brioLow = belowWarning(ex, row.kind, row.kind === "materials" ? material : ammoIndex, value);
                        if (pair.node.__brioLow && "fillStyle" in pair.node && pair.source.fillStyle !== "#000") pair.node.fillStyle = warningColor(true); else if ("fillStyle" in pair.source) pair.node.fillStyle = pair.source.fillStyle;
                    }
                    if (row.kind === "slots" && (pair.source.align === "left" || pair.source.textAlign === "left") && "text" in pair.source) {
                        // V48 removes ONLY clone slot-ammo text: native left-aligned fill/stroke count copies.
                        // Native sources and centered slot captions remain unchanged, as do emblems/art/fonts/size/X.
                        // Some native draw methods ignore their own opacity; suppress these clone methods explicitly.
                        pair.node.opacity = 0;
                        if (!pair.node.__brioSlotAmmoHidden) {
                            pair.node.__brioSlotAmmoHidden = true;
                            for (const method of ["éa","Eââ"]) if (typeof pair.node[method] === "function") pair.node[method] = () => {};
                        }
                    }
                    if (row.kind === "slots" && hudKinds(pair.path) === "ammo") {
                        const ai = S.ammoTypeMap?.get(String(slots[i]?.type || "").toLowerCase());
                        if (Number.isInteger(ai)) {const path = S.hudAssetPaths?.get("inventoryammo" + ai) || "/buildart/ammo" + ai + ".png"; pair.node["À"] = {src: path, "ÁÄ": S.hudNativeImages?.get(path) || invImage(path)}; pair.node.opacity = 1;} else pair.node.opacity = 0;
                    }
                    if (row.kind === "slots" && /\/inv[0-6]\.png$/.test(pair.path)) {
                        const rarity = Number(slots[i]?.["äã"]);
                        if (Number.isFinite(rarity) && rarity >= 0 && rarity <= 6) {
                            const path = "/buildart/inv" + rarity + ".png";
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": S.hudNativeImages?.get(path) || invImage(path)
                            };
                        }
                    }
                    if (row.kind === "slots" && isSlotArtwork(pair.path)) {
                        const path = itemPath(slots[i]?.type);
                        if (path) {
                            const im = S.hudNativeImages?.get(path) || invImage(path);
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": im
                            };
                            pair.node.opacity = 1;
                            const style = slotArtStyle(slots[i]?.type);
                            const base = u.pairs.find(p => /\/inv[0-6]\.png$/.test(p.path))?.source;
                            if (base) { pair.node.width = base.width * style.ratio; pair.node.height = base.height * style.ratio; pair.node.A = style.angle; pair.node.size = style.size; }
                        } else pair.node.opacity = 0;
                    }
                }
                ctx.save();
                ctx.translate(x * factor / s, y / s);
                ctx.scale(factor, factor);
                ctx.translate(-b.left / s, -b.top / s);
                const n = u.root;
                if (n["ë"]) {
                    n["ë"]["É"] = 0;
                    n["ë"]["Ä"] = 0;
                }
                n.A = 0;
                n.opacity = Number.isFinite(u.record.root.opacity) && u.record.root.opacity > 0 ? u.record.root.opacity : 1;
                if (typeof n["éa"] === "function") n["éa"](ctx, s, 1); else if (typeof n["Eââ"] === "function") n["Eââ"](ctx, s);
                ctx.restore();
                if (slots[i]?.type === "empty" && row.kind === "slots") drawEmptyX(ctx, x * factor, y, b.width * factor, b.height * factor, s);
                // V48 grappler exception: no separate reserve cell exists; warn on its unchanged remote slot.
                // No charge number is added back. New outline is conditional on the low-ammo modifier.
                if (row.kind === "slots" && String(slots[i]?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex,r,i+1))
                    drawRemoteChargeWarning(ctx,x*factor,y,b.width*factor,b.height*factor,s);
                x += b.width + gap;
                maxHeight = Math.max(maxHeight, b.height * factor);
            });
            y += 21;
        }
        return drawn;
    };
    const /* BRIO: resetNativeHud
     * Remove own overlays/remote clones and clear templates, captured art styles and per-match logs. Saved inventory size is untouched.
     */
    resetNativeHud = () => {
        for (const n of S.hudWarnNodes?.values() || []) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        S.hudWarnNodes?.clear();
        for (const c of S.nativeInvClones?.values() || []) for (const row of c.rows) for (const u of row.units) try {
            u.root["ÊÈA"]?.();
        } catch (_) {}
        S.nativeInvClones?.clear();
        S.hudTemplates = null;
        S.hudNativeImages?.clear();
        S.hudArtStyles?.clear();
        S.hudSourceNodes = new WeakSet;
        S.hudRejected = new WeakSet;
        S.hudInspectionCount = 0;
        S.hudWidgetLogs = 0;
        S.hudLastReport = -Infinity;
        S.hudStatus = {
            captured: false
        };
        S.hudVersion = 0;
        S.hudWarningSignatures = new Set; S.hudSlotLogs = 0; S.hudSlotSprite = null; S.slotWarningLast = null; S.slotWarningLogs = 0;
        S.hudPending = new WeakSet;
        S.hudInspectError = false;
        S.emptySlotArtLogged = false;
        S.sceneStartError = false;
        S.sceneSkipped = 0;
    };
    const isSlotArtwork = path => !!path && path !== "/" && !hudKinds(path) && !/\/(?:ammo|inventoryammo)[0-4]\.png$|\/disabled\.png$/.test(path);
    const GUN_TYPES = new Set(["scar","bolt","lmg","shotgun","heavy","smg","ump","rifle","ar-15","scoped ar","deagle","rpg","famas","tommy gun","drum","musket","heavy sniper","ak47","akƧ","combat","silencedpistol","aug","burst shotgun","grenade launcher","mgl","grenade pistol","vector","revolver","charge rifle","grenade sniper","sawedoff","signal flare","spas","grappler","crossbow","minigun"]);
    const /* BRIO: nativeSlotAmmoIndex (V48)
     * Grappler uses virtual type5; there is no sixth reserve/ammo row. Native flare is also loaded-only.
     * Other guns use the source map, overridden by a reached live own-slot ammo emblem when available.
     * Unknown mappings never receive an arbitrary default threshold.
     */
    nativeSlotAmmoIndex = (r,index,rec) => {
        const type = String(r?.["Åé"]?.[index]?.type || "").toLowerCase();
        if (!GUN_TYPES.has(type)) return undefined;
        if (type === "grappler" || type === "signal flare") return 5;
        const emblem = rec?.nodes?.find(n => /\/ammo[0-4]\.png$/.test(hudPath(n)));
        const i = emblem ? +(hudPath(emblem).match(/ammo([0-4])/)[1]) : S.ammoTypeMap?.get(type);
        return Number.isInteger(i) && i >= 0 && i < 5 ? i : undefined;
    };
    const /* BRIO: nativeSlotLow
     * Own slots compare displayed loaded+reserve; grappler/flare compare only loaded charges.
     * Remote displayed reserve numbers use the same per-type setting; no hidden magazine is added to that row.
     * Independent of selection. Empty slots, consumables, unknown/negative counts never warn.
     */
    nativeSlotLow = (e,r,index,rec) => belowWarning(e,"ammo",nativeSlotAmmoIndex(r,index,rec),nativeSlotAmmo(r,index,rec));
    const /* BRIO: drawRemoteChargeWarning
     * V48 charge-only exception: remote grappler lacks a separate ammo row, so outline its slot.
     * Pure drawing over finalized background bounds; no new per-match nodes/state or geometry changes.
     * Existing native/fallback inventory cleanup remains sufficient. Live appearance is pending.
     */
    drawRemoteChargeWarning = (ctx,x,y,width,height,scale) => {
        ctx.save();
        try {
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now()/140));
            ctx.strokeStyle = ctx.shadowColor = "#ff2020"; ctx.shadowBlur = 8/scale; ctx.lineWidth = 1.2/scale;
            ctx.strokeRect((x-1)/scale,(y-1)/scale,(width+2)/scale,(height+2)/scale);
        } finally {ctx.restore();}
    };
    const /* BRIO: nativeSlotAmmo
     * Known finite gun ammo only: loaded plus matching reserve, except grappler/flare loaded only. A live emblem overrides AST mapping; unknowns never warn.
     */
    nativeSlotAmmo = (r, index, rec) => {
        const type = String(r?.["Åé"]?.[index]?.type || "").toLowerCase();
        if (!GUN_TYPES.has(type)) return undefined;
        const loaded = r?.["áAæ"]?.[index - 1];
        if (!Number.isFinite(loaded) || loaded < 0) return undefined;
        if (type === "grappler" || type === "signal flare") return loaded;
        const ammoIndex = nativeSlotAmmoIndex(r,index,rec);
        const reserve = r?.["åæ"]?.[ammoIndex];
        return Number.isFinite(reserve) && reserve >= 0 ? loaded + reserve : undefined;
    };
    const /* BRIO: slotArtStyle
     * Prefer captured native item geometry; otherwise use source-mapped gun/consumable ratios and rotations.
     */
    slotArtStyle = type => {
        const raw = String(type || "").toLowerCase(), captured = S.hudArtStyles?.get(itemPath(type));
        if (captured) return captured;
        const gun = GUN_TYPES.has(raw), style = {ratio: gun ? 1.04 : .7, angle: gun ? Math.PI / 4 : 0, size: 1};
        if (raw === "deagle" || raw === "grappler") style.size = .8;
        if (raw === "revolver") style.size = .9;
        if (raw === "charge rifle" || raw === "grenade sniper" || raw === "landmine") style.size = 1.1;
        if (/feesh$/.test(raw)) {style.angle = Math.PI / 4; style.size = 1.2;}
        if (["grenade","mirv","smokegrenade","flashbang","molotov","flexsplash","gravitynade","invgravitynade","candycane","icicle"].includes(raw)) style.size = 1.2;
        return style;
    };
    const drawSlotArt = (ctx, path, type, x, y, size, s) => {
        const style = slotArtStyle(type), wh = size * style.ratio * style.size;
        ctx.save(); ctx.translate((x - size * .02) / s, y / s); ctx.rotate(style.angle);
        drawImg(ctx, path, -wh / 2, -wh / 2, wh, wh, s); ctx.restore();
    };
    const /* BRIO: drawEmptyX
     * V45 red-X primitive: 1.2px stroke and 2px corner inset in display coordinates. Never call under the native widget downscale.
     */
    drawEmptyX = (ctx, x, y, w, h, s) => {
        ctx.save(); ctx.strokeStyle = "#ff2020"; ctx.lineWidth = 1.2 / s;
        ctx.beginPath(); ctx.moveTo((x + 2) / s, (y + 2) / s); ctx.lineTo((x + w - 2) / s, (y + h - 2) / s);
        ctx.moveTo((x + w - 2) / s, (y + 2) / s); ctx.lineTo((x + 2) / s, (y + h - 2) / s); ctx.stroke(); ctx.restore();
    };
    const INV_SCALE = {
        small: .9375,
        medium: 1.25,
        large: 1.625,
        xl: 2.0625
    }, /* BRIO: invScale
     * Preserve the V45 Small/Medium/Large/XL multipliers. Changing capture geometry must not alter the user-selected scale.
     */
    invScale = () => INV_SCALE[extrasState().inventorySize] || 1.25, /* BRIO: invImage
     * Load local replica artwork with native ready/half-size bookkeeping and retryable failure behavior.
     */
    invImage = p => {
        let im = S.invAssets.get(p);
        if (im) return im;
        im = new Image;
        im["ÀA"] = 2;
        im.onload = () => {
            im["ÀA"] = 1;
            im["ÁÅe"] = im.width / 2;
            im["âÅÉ"] = im.height / 2;
        };
        im.onerror = () => {
            if (!im.__brioFailed) {
                im.__brioFailed = true;
                log("HUD ASSET FAILED", {
                    path: p
                });
            }
        };
        im.src = p;
        S.invAssets.set(p, im);
        return im;
    }, /* BRIO: itemPath
     * Resolve exact native side-view inventory assets. Held top-view weapon art is not an equivalent substitute.
     */
    itemPath = type => {
        const raw = String(type || "").toLowerCase().trim();
        if (!raw || raw === "empty" || raw === "pickaxe") return null;
        const path = S.hudAssetPaths?.get(raw) || `/buildart/${raw.replace(/[^a-z0-9]/g, "")}.png`;
        if (!(S.hudResolvedTypes || (S.hudResolvedTypes = new Set)).has(raw)) {S.hudResolvedTypes.add(raw); log("INVENTORY ASSET RESOLUTION", {type: raw, path, nativeAlias: S.hudAssetPaths?.has(raw) || false, capturedStyle: S.hudArtStyles?.has(path) || false});}
        return path;
    }, matState = r => {
        const a = Array.isArray(r?.["ÊÃÄ"]) ? r["ÊÃÄ"] : Array.isArray(r?.["Äâã"]) ? r["Äâã"] : [];
        return [ a[0], a[1], a[2], a[3] ];
    }, drawImg = (ctx, p, x, y, w, h, s) => {
        if (!p) return;
        const im = S.hudNativeImages?.get(p) || invImage(p);
        if (im.complete && im.naturalWidth) try {
            ctx.drawImage(im, x / s, y / s, w / s, h / s);
        } catch (_) {}
    }, /* BRIO: warningColor
     * Flash remote numeric warnings independently of own slot/cell borders; exact threshold values remain non-warning.
     */
    warningColor = low => low && Math.sin(performance.now() / 140) >= 0 ? "#ff2020" : "#fff", drawHudText = (ctx, v, x, y, s, low = false, size = 8) => {
        ctx.save();
        ctx.font = `${Math.max(3, size / s)}px "Arial Black"`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = Math.max(.5, 2 / s);
        ctx.strokeStyle = "#000";
        ctx.fillStyle = warningColor(low);
        ctx.strokeText(String(v), x / s, y / s);
        ctx.fillText(String(v), x / s, y / s);
        ctx.restore();
    }, drawTxt = (ctx, v, x, y, s, low = false) => drawHudText(ctx, v, x, y, s, low), /* BRIO: drawInv
     * Fallback V45 compact row layout for incomplete native capture. Complete rows use native clones, never a mixed partial row.
     */
    drawInv = (ctx, scale, r) => {
        const drawn = drawNativeInv(ctx, scale, r) || new Set;
        const ex = extrasState(), rows = [];
        if (ex.inventorySlots) rows.push("slots");
        if (ex.inventoryMaterials) rows.push("mats");
        if (ex.inventoryAmmo) rows.push("ammo");
        let yy = 0;
        for (const row of rows) {
            if (drawn.has(row === "mats" ? "materials" : row)) {
                yy += 21;
                continue;
            }
            if (row === "slots") {
                const slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [], sz = 18, g = 2, x0 = -(sz * 5 + g * 4) / 2;
                for (let i = 0; i < 5; i++) {
                    const sl = slots[i], x = x0 + i * (sz + g), key = String(sl?.type || "").toLowerCase().replace(/[^a-z0-9]/g, ""), raw = Number(sl?.["äã"]), bg = Number.isFinite(raw) && raw >= 0 && raw <= 6 ? raw : 0;
                    drawImg(ctx, `/buildart/inv${bg}.png`, x, yy, sz, sz, scale);
                    const path = itemPath(sl?.type);
                    if (path) drawSlotArt(ctx, path, sl?.type, x + sz / 2, yy + sz / 2, sz, scale);
                    else if (sl?.type === "empty") drawEmptyX(ctx, x, yy, sz, sz, scale);
                    // Fallback uses the same charge-only slot outline, without inventing a sixth reserve count.
                    if (String(sl?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex,r,i+1)) drawRemoteChargeWarning(ctx,x,yy,sz,sz,scale);
                }
            } else if (row === "mats") {
                const m = matState(r), vals = [ [ "/buildart/wood.png", m[0] ], [ "/buildart/brick.png", m[1] ], [ "/buildart/metal.png", m[2] ], [ "/buildart/scrap.png", m[3] ] ], cell = 29, x0 = -(cell * 4) / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 4 + 4) / scale, 18 / scale);
                vals.forEach(([p, v], i) => {
                    const x = x0 + i * cell;
                    drawImg(ctx, p, x, yy, 14, 14, scale);
                    drawTxt(ctx, v ?? "?", x + 21, yy + 7, scale, belowWarning(ex,"materials",i,v));
                });
            } else {
                const a = Array.isArray(r["åæ"]) ? r["åæ"].slice(0, 5) : [], cell = 27, x0 = -(cell * 5) / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 5 + 4) / scale, 18 / scale);
                for (let i = 0; i < 5; i++) {
                    const x = x0 + i * cell;
                    drawImg(ctx, S.hudAssetPaths?.get("stack" + i) || `/buildart/stack${i}.png`, x, yy, 14, 14, scale);
                    drawTxt(ctx, a[i] ?? "?", x + 20, yy + 7, scale, belowWarning(ex,"ammo",i,a[i]));
                }
            }
            yy += 21;
        }
    }, makeInv = r => ({
        "ë": {
            "É": 0,
            "Ä": 62
        },
        size: 1,
        opacity: 1,
        A: 0,
        type: "brioInventory",
        visible: true,
        parent: null,
        "âè": [],
        "ÉE": [],
        "Eââ"(ctx, scale) {
            const f = invScale();
            ctx.save();
            ctx.scale(f, f);
            drawInv(ctx, scale, r);
            ctx.restore();
        },
        "éa"(ctx, scale, alpha) {
            if (alpha <= 0) return;
            ctx.save();
            ctx.translate(this.ë.É / scale, this.ë.Ä / scale);
            ctx.globalAlpha = alpha;
            this.Eââ(ctx, scale);
            ctx.restore();
        },
        "ÊÈA"() {
            try {
                this.parent?.remove?.(this);
            } catch (_) {}
            this.parent = null;
        }
    }), /* BRIO: attachInv
     * Attach one inventory drawable to a reached remote player and retain it for generation-safe cleanup.
     */
    attachInv = r => {
        if (!r || isLocal(r) || S.invNodes.has(r) || !r["Eâ"]?.add) return;
        const n = makeInv(r);
        try {
            r["Eâ"].add(n);
            S.invNodes.set(r, n);
        } catch (e) {
            S.errors.push(String(e));
        }
    };
    const restoreInvTrace = () => {};
    const /* BRIO: automaticPhase
     * Use current local native glide state as one phase signal. Circle waiting/moving supplements it; rendering never waits for phase.
     */
    automaticPhase = () => {
        const r = S.renderer;
        if (r && S.botPhase !== "match" && Number.isFinite(r["ÀËá"]) && r["ÀËá"] >= 0 && Number.isFinite(r["âëä"]) && r["âëä"] > 0) botPhase("native glidingTicks/maxGlidingTicks");
    };
    const BOT_CLUSTER = [ "EÆÅ", "Éaê", "ÆÉÆ", "Áae", "áaá", "Éäæ", "ée", "ËÈä", "aAE", "áâÃ", "ËE", "ÈÆ" ], /* BRIO: botPhase
     * Record a session transition only. This does not label any remote player as a bot or establish human identity.
     */
    botPhase = reason => {
        if (S.botPhase === "match") return;
        S.botPhase = "match";
        S.botPhaseAt = performance.now();
        log("BOT PHASE", {
            phase: "match",
            automatic: true,
            evidence: reason,
            tracked: S.botWatch.size
        });
    }, /* BRIO: botSample
     * Capture bounded unlabelled player metadata; names, IDs, distances and isPreview are invalid classifiers.
     */
    botSample = () => {
        automaticPhase();
        const now = performance.now(), me = worldPos(S.renderer);
        for (const r of collectPlayers().filter(x => !isLocal(x))) {
            if (!S.botLogged.has(r.id)) {
                S.botLogged.add(r.id);
                log("BOT CANDIDATE", {
                    id: r.id,
                    name: r["Ée"],
                    phase: S.botPhase,
                    cluster: Object.fromEntries(BOT_CLUSTER.map(k => [ k, r[k] ]))
                });
            }
            let e = S.botWatch.get(r.id), p = worldPos(r);
            if (!e) {
                e = {
                    id: r.id,
                    name: r["Ée"],
                    samples: 0,
                    first: now,
                    lastAt: now,
                    lastPos: p ? {
                        ...p
                    } : null,
                    changes: Object.fromEntries(BOT_CLUSTER.map(k => [ k, 0 ])),
                    lastVals: Object.fromEntries(BOT_CLUSTER.map(k => [ k, r[k] ])),
                    phases: {
                        lobby: {
                            samples: 0,
                            min: null,
                            max: 0,
                            far5kHits: 0,
                            moved: 0
                        },
                        match: {
                            samples: 0,
                            min: null,
                            max: 0,
                            far5kHits: 0,
                            moved: 0
                        }
                    }
                };
                S.botWatch.set(r.id, e);
            }
            const f = e.phases[S.botPhase];
            e.samples++;
            e.lastAt = now;
            e.name = r["Ée"];
            f.samples++;
            if (p && e.lastPos) {
                f.moved += Math.hypot(p.x - e.lastPos.x, p.y - e.lastPos.y);
                e.lastPos = {
                    ...p
                };
            } else if (p) e.lastPos = {
                ...p
            };
            if (me && p) {
                const d = Math.hypot(p.x - me.x, p.y - me.y);
                f.max = Math.max(f.max, d);
                f.min = f.min == null ? d : Math.min(f.min, d);
                if (d > 5e3) f.far5kHits++;
            }
            for (const k of BOT_CLUSTER) {
                const v = r[k];
                if (e.lastVals[k] !== v) e.changes[k]++;
                e.lastVals[k] = v;
            }
        }
    }, /* BRIO: botStart
     * Arm automatic metadata observation from ordinary Play; no manual MATCH START or bot-classification button.
     */
    botStart = () => {
        if (S.botTimer) return;
        S.botWatch = new Map;
        S.botLogged = new Set;
        S.botPhaseAt = performance.now();
        botSample();
        botAuditReset();
        botAuditTick();
        S.botTimer = setInterval(() => {
            botSample();
            botAuditTick();
        }, 500);
        log("BOT WATCH", "START · automatic native gliding-state phase detection");
    }, /* BRIO: botStop
     * Stop bounded bot metadata sampling; export remains complete and no guessed classifier is introduced.
     */
    botStop = () => {
        if (!S.botTimer) return;
        clearInterval(S.botTimer);
        S.botTimer = 0;
        botSample();
        log("BOT WATCH STOP", {
            phaseMarkerUsed: S.botPhase === "match",
            players: [ ...S.botWatch.values() ].map(e => ({
                id: e.id,
                name: e.name,
                samples: e.samples,
                seconds: Math.round((e.lastAt - e.first) / 100) / 10,
                phases: Object.fromEntries(Object.entries(e.phases).map(([k, v]) => [ k, {
                    ...v,
                    min: v.min == null ? null : Math.round(v.min),
                    max: Math.round(v.max),
                    moved: Math.round(v.moved)
                } ])),
                clusterChanges: e.changes
            }))
        });
    };
    const nearestBy = pred => collectWorld().filter(o => pred(o) && worldPos(o)).sort((a, b) => {
        const me = worldPos(S.renderer) || {
            x: 0,
            y: 0
        }, pa = worldPos(a), pb = worldPos(b);
        return Math.hypot(pa.x - me.x, pa.y - me.y) - Math.hypot(pb.x - me.x, pb.y - me.y);
    })[0] || null, airdropPred = o => resourceSlots(o).some(x => /airdrop|supply|parachute/.test(x.path)) || /air.?drop|supply/i.test([ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"] ].join(" ")), fishingPred = o => resourceSlots(o).some(x => /\/buildart\/bubbles[01]\.png$/.test(x.path)) || /fish(?:ing)?spot|fishing/i.test([ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"] ].join(" ")), airdropObj = () => nearestBy(airdropPred), chestObj = () => nearestBy(o => o.type === "chest"), fishingObj = () => nearestBy(fishingPred), targetOnScreen = o => {
        const p = worldPos(o), sp = projectWorld(p);
        return !!(sp && sp.x >= sp.rect.left && sp.x <= sp.rect.right && sp.y >= sp.rect.top && sp.y <= sp.rect.bottom);
    }, /* BRIO: indicatorTick
     * Update the three nearest off-screen target arrows using active objects and the current native projection.
     */
    indicatorTick = () => indicatorsV40();
    const shallowState = o => {
        const out = {};
        for (const k of Object.keys(o || {}).slice(0, 90)) {
            let v;
            try {
                v = o[k];
            } catch (_) {
                continue;
            }
            if (typeof v === "number" && Number.isFinite(v)) out[k] = Math.round(v * 100) / 100; else if (typeof v === "boolean" || typeof v === "string" && v.length < 80) out[k] = v;
        }
        return out;
    };
    const /* BRIO: passiveTick
     * Observe current local/world metadata with novelty limits. Container disappearance and nearby loot are correlation only.
     */
    passiveTick = () => {
        try {
            const r = S.renderer;
            if (r) {
                const now = shallowState(r);
                if (!S.passiveLocal) {
                    S.passiveLocal = now;
                    log("PASSIVE LOCAL FIELDS", now);
                } else {
                    const changed = {};
                    for (const k of Object.keys(now)) if (now[k] !== S.passiveLocal[k] && /health|shield|ammo|mats|score|circle|storm|build/i.test(k)) changed[k] = now[k];
                    if (Object.keys(changed).length) log("PASSIVE LOCAL CHANGE", changed);
                    S.passiveLocal = now;
                }
            }
            for (const e of performance.getEntriesByType("resource")) {
                let p;
                try {
                    p = new URL(e.name).pathname.toLowerCase();
                } catch (_) {
                    continue;
                }
                if (!/\/(?:buildart|cosmetics)\//.test(p) || S.passiveAssets.has(p)) continue;
                S.passiveAssets.add(p);
                if (/(?:storm|zone|circle|crosshair|reticle|minimap|map|foliage|tree|bush|grass|chest|airdrop|fish|bubbles|glow|highlight|meteor|loot)/.test(p)) log("PASSIVE ASSET", p);
            }
            if (S.passiveAssets.size > 2500) {
                clearInterval(S.passiveTimer);
                S.passiveTimer = 0;
                log("PASSIVE ASSET STOP", "Resource set cap reached");
            }
        } catch (e) {
            S.errors.push("passive probe: " + String(e));
        }
    }, passiveAdded = o => {
        if (!o || ![ "buildable", "spellfield" ].includes(o.type)) return;
        const key = String(o.type) + ":" + String(o["Àâ"] ?? o["ÄæÅ"] ?? "");
        if (S.passiveBuilds.has(key)) return;
        S.passiveBuilds.add(key);
        if (S.passiveBuilds.size <= 25) log("PASSIVE BUILDABLE", {
            key: key,
            id: o.id,
            position: worldPos(o),
            fields: shallowState(o),
            resources: resourceSlots(o).map(x => x.path)
        });
    };
    const restoreRandom = () => {};
    const stopMeteorPersist = () => {
        const p = S.meteorPersist;
        if (p?.timer) clearInterval(p.timer);
        S.meteorPersist = null;
    }, restoreMeteor = () => {
        const h = S.meteorHook;
        if (!h) return;
        if (h.proto.drawImage === h.wrap) h.proto.drawImage = h.orig;
        clearTimeout(h.timer);
        S.meteorHook = null;
    }, meteorAutoStop = () => {
        const h = S.meteorAuto;
        if (h && h.proto.add === h.wrap) Object.defineProperty(h.proto, "add", h.desc);
        S.meteorAuto = null;
        for (const restores of S.meteorObservers?.values() || []) for (const restore of restores.reverse()) restore();
        S.meteorObservers?.clear();
        if (S.meteorAutoTimer) clearInterval(S.meteorAutoTimer);
        S.meteorAutoTimer = 0;
    }, /* BRIO: meteorCandidate
     * Accept source-identified native meteor sprites/waypoints and reject weakly retired nodes from prior matches.
     */
    meteorCandidate = (node, array = []) => {
        if (S.retiredMarkers?.has(node)) return;
        const path = norm(node?.icon?.["À"]?.src || node?.icon?.["À"]?.["ÁÄ"]?.src || node?.["À"]?.src || node?.["À"]?.["ÁÄ"]?.src || "");
        if (path === "/buildart/ping-meteor-icon.png" && node.parent?.icon === node) node = node.parent;
        if (extrasState().permanentMeteor && [ "/buildart/ping-meteor-icon.png", "/buildart/ping-meteor.png" ].includes(path) && !S.meteorSeen?.has(node) && !S.meteorPending?.has(node)) {
            (S.meteorPending || (S.meteorPending = new WeakSet)).add(node);
            holdMeteor(node, array);
        }
    }, /* BRIO: meteorScan
     * Resume the bounded breadth-first scan across reached roots, isolating hostile getters/proxies per node.
     */
    meteorScan = () => {
        if (!S.renderer || !extrasState().permanentMeteor && !extrasState().lowMatsWarning && (!extrasState().transparentRoofs || S.roofSaved.size === 21)) return;
        if (!S.sceneQueue || (S.sceneQueueAt || 0) >= S.sceneQueue.length) {
            S.sceneQueue = [ ...sceneRoots() ];
            S.sceneQueueAt = 0;
            S.sceneQueueSeen = new WeakSet;
        }
        const seen = S.sceneQueueSeen, stack = S.sceneQueue;
        let visits = 0;
        while (S.sceneQueueAt < stack.length && visits < 3e3) {
            visits++;
            const x = stack[S.sceneQueueAt++];
            if (!x || typeof x !== "object" || seen.has(x)) continue;
            seen.add(x);
            try {
                sceneObserve(x);
                meteorCandidate(x);
                captureRoof(x);
                for (const key of [ "âè", "ÉE" ]) if (Array.isArray(x[key])) for (const c of x[key]) stack.push(c);
                if (Array.isArray(x)) for (const c of x) stack.push(c);
                hudCandidate(x);
            } catch (_) {
                S.sceneSkipped = (S.sceneSkipped || 0) + 1;
            }
        }
        S.sceneScan = {
            visits: visits,
            limitReached: S.sceneQueueAt < stack.length,
            roots: S.sceneRoots?.size || 0,
            observers: S.meteorObservers?.size || 0,
            skipped: S.sceneSkipped || 0
        };
        if (!S.sceneScanLogged) {
            S.sceneScanLogged = true;
            log("SCENE CAPTURE", S.sceneScan);
        }
    }, /* BRIO: meteorAutoStart
     * Start scoped native container/scene discovery with watchdog coverage. Keep the 3000-node/second and observer/array caps.
     */
    meteorAutoStart = reason => {
        meteorAutoStop();
        if (S.destroyed || !S.renderer || !extrasState().permanentMeteor && !extrasState().transparentRoofs && !extrasState().lowMatsWarning && !extrasState().lowAmmoWarning) return;
        log("METEOR AUTOMATIC START", {
            reason: reason || "local capture",
            epoch: S.runEpoch
        });
        const tick = () => {
            try {
                meteorScan();
            } catch (e) {
                if (!S.sceneStartError) {
                    S.sceneStartError = true;
                    S.errors.push("scene scan: " + String(e));
                    log("SCENE CAPTURE ERROR", {
                        error: String(e),
                        stack: String(e.stack || "").slice(0, 1600)
                    });
                }
            }
        };
        S.meteorAutoTimer = setInterval(tick, 1e3);
        tick();
        log("METEOR AUTOMATIC", {
            enabled: !!extrasState().permanentMeteor,
            ownContainerObservers: S.meteorObservers?.size || 0,
            scanLimit: 3e3,
            note: "Timer armed before guarded scan; scoped native containers; no manual arm."
        });
    };
    const /* BRIO: applyRemote
     * Await cosmetic resources only for the current run. Recheck epoch after awaits before attaching or writing local visuals.
     */
    applyRemote = async r => {
        if (!r || isLocal(r)) return;
        const epoch = S.runEpoch;
        rememberRemote(r);
        const e = extrasState();
        try {
            if (e.playerNames && r["ÃÊ"]) r["ÃÊ"].opacity = 1;
            if ((e.healthBars || e.numericHealthShield) && r["Eâ"]?.add) {
                for (const [o, y] of [ [ r["æÄ"], -100 ], [ r["AÃå"], -114 ] ]) if (o) {
                    if (o.parent !== r["Eâ"]) r["Eâ"].add(o);
                    o.opacity = 1;
                    if (o["ë"]) o["ë"]["Ä"] = y;
                }
            }
            if (e.playersInvisible) {
                const [bo, he, pi] = await Promise.all([ loadRes("body", {
                    mode: "invisible",
                    data: BLANK.body
                }), loadRes("head", {
                    mode: "invisible",
                    data: BLANK.head
                }), loadRes("pickaxe", {
                    mode: "invisible",
                    data: BLANK.pickaxe
                }) ]);
                if (S.destroyed || epoch !== S.runEpoch) return;
                if (r["Ëå"]) r["Ëå"]["À"] = bo;
                if (r.head) r.head["À"] = he;
                r["Äâè"] = he;
                r["ÉãÂ"] = pi;
                for (const p of [ "áË", "ÄÂ", "ÄãÀ", "èÅ" ]) if (r[p]) r[p].opacity = 0;
            }
            if (e.playersInvisible || e.allTrailsInvisible) r["åëÅ"] = NaN;
            if (e.playersInvisible || e.allGlidersInvisible) {
                const gl = await loadRes("glider", {
                    mode: "invisible",
                    data: BLANK.glider
                });
                if (S.destroyed || epoch !== S.runEpoch) return;
                r["äÀÊ"] = gl;
                if (r["ÂÅ"]) r["ÂÅ"]["À"] = gl;
            }
            if (e.nearestPlayer) attachTrack(r);
            featurePlayer(r);
            if (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo) attachInv(r);
        } catch (x) {
            S.errors.push(String(x));
        }
    }, /* BRIO: queueRemote
     * Keep remote capture retryable but generation-bound. Delayed work from a previous Play must not recreate old overlays.
     */
    queueRemote = r => {
        if (!r || isLocal(r) || S.remoteQueued.has(r)) return;
        S.remoteQueued.add(r);
        const auditEpoch = S.runEpoch;
        setTimeout(() => {
            if (!S.destroyed && S.runEpoch === auditEpoch) replicaStateAudit(r);
        }, 2e3);
        for (const ms of [ 0, 250, 1200, 3e3 ]) setTimeout(() => {if (!S.destroyed && S.runEpoch === auditEpoch) applyRemote(r);}, ms);
    }, /* BRIO: queueWorld
     * Queue reached world customization without global polling or stale-generation attachments.
     */
    queueWorld = o => {
        if (!o || S.worldQueued.has(o)) return;
        S.worldQueued.add(o);
        const auditEpoch = S.runEpoch;
        setTimeout(() => {
            if (!S.destroyed && S.runEpoch === auditEpoch) replicaStateAudit(o);
        }, 1200);
        const epoch = S.runEpoch;
        for (const ms of [ 0, 250, 1200 ]) setTimeout(() => {
            if (S.destroyed || S.runEpoch !== epoch) return;
            const e = extrasState();
            if (e.buildsInvisible && isBuild(o)) blankBuild(o);
            if (e.lootInvisible && [ "gun", "ammo" ].includes(o.type)) blankLoot(o);
        }, ms);
    }, /* BRIO: handleAdded
     * Dispatch reached native objects to local/remote/world/HUD/meteor capture. Ignore BRIO-owned drawables.
     */
    handleAdded = (x, a) => {
        if (x?.__brioHudClone || String(x?.type || "").startsWith("brio")) return;
        try {
            meteorCandidate(x, a);
            sceneObserve(x?.parent);
            if (isPlayer(x)) {
                if (!S.renderer && localNameMatch(x)) onLocal(x, a); else if (S.renderer && !isLocal(x)) queueRemote(x);
            }
            captureRoof(x);
            hudCandidate(x);
            if (S.capture) sceneObserve(x);
            if (isWorld(x)) {
                reconAdded(x);
                passiveAdded(x);
                featureWorld(x);
                patchArray(a);
                queueWorld(x);
            }
        } catch (e) {
            if (S.errors.length < 100) S.errors.push("native capture: " + String(e));
        }
    };
    const /* BRIO: patchArray
     * Observe only reached native arrays after bounded broad discovery; delegate native push/unshift unchanged.
     */
    patchArray = a => {
        if (!Array.isArray(a) || S.arrayHooks.has(a)) return;
        const dp = Object.getOwnPropertyDescriptor(a, "push"), du = Object.getOwnPropertyDescriptor(a, "unshift"), p = function(...xs) {
            const n = Reflect.apply(NP, this, xs);
            for (const x of xs) handleAdded(x, this);
            return n;
        }, u = function(...xs) {
            const n = Reflect.apply(NU, this, xs);
            for (const x of xs) handleAdded(x, this);
            return n;
        };
        Object.defineProperty(a, "push", {
            configurable: true,
            writable: true,
            value: p
        });
        Object.defineProperty(a, "unshift", {
            configurable: true,
            writable: true,
            value: u
        });
        S.arrayHooks.set(a, {
            dp: dp,
            du: du
        });
        for (const x of a) handleAdded(x, a);
    }, /* BRIO: restoreArrays
     * Restore each original own descriptor rather than leaving per-array wrappers across matches.
     */
    restoreArrays = () => {
        for (const [a, h] of S.arrayHooks) try {
            h.dp ? Object.defineProperty(a, "push", h.dp) : delete a.push;
            h.du ? Object.defineProperty(a, "unshift", h.du) : delete a.unshift;
        } catch (_) {}
        S.arrayHooks.clear();
    }, /* BRIO: onLocal
     * Capture the current named local renderer once, start narrow timers and apply selected visuals without changing Play packets.
     */
    onLocal = (r, a) => {
        if (S.renderer) return;
        S.renderer = r;
        S.rendererArray = a;
        S.native = nativeSnap(r);
        const localAuditEpoch = S.runEpoch;
        setTimeout(() => {
            if (!S.destroyed && S.runEpoch === localAuditEpoch) replicaStateAudit(r);
        }, 2e3);
        const epoch = S.runEpoch;
        setTimeout(() => {
            if (S.renderer === r && !S.destroyed && epoch === S.runEpoch) meteorAutoStart("capture timer");
        }, 0);
        patchArray(a);
        attachLocalTrack(r);
        S.phaseTimer = setInterval(automaticPhase, 250);
        featurePlayer(r);
        log("LOCAL RENDERER", {
            id: r.id,
            name: r["Ée"],
            expected: S.localName
        });
        applyLocal();
        for (const x of a) if (isPlayer(x) && !isLocal(x)) queueRemote(x);
        if (!S.passiveTimer) {
            passiveTick();
            reconDom("match capture");
            S.passiveTimer = setInterval(() => {
                passiveTick();
                reconRuntime();
                reconContainers();
                runtimeV40();
            }, 12e3);
            if (!S.featureTimer) S.featureTimer = setInterval(featureTick, 2e3);
        }
        const e = extrasState();
        if (e.nearestPlayer && !S.nearestTimer) S.nearestTimer = setInterval(nearestTick, 250);
        if (e.identifyBots) botStart();
        if ((e.nearestChest || e.nearestAirdrop) && !S.indicatorTimer) S.indicatorTimer = setInterval(indicatorTick, 500);
        maybeStop();
    }, goals = () => ({
        renderer: !!S.renderer,
        roofs: !extrasState().transparentRoofs || S.roofSaved.size === 21
    }), stopCapture = why => {
        const c = S.capture;
        if (!c) return;
        clearTimeout(c.timer);
        if (Array.prototype.push === c.hp) Array.prototype.push = c.op;
        if (Array.prototype.unshift === c.hu) Array.prototype.unshift = c.ou;
        S.capture = null;
        log("GLOBAL HOOK RESTORED", {
            why: why,
            goals: goals()
        });
    }, maybeStop = () => {
        const g = goals();
        if (g.renderer && g.roofs) stopCapture("goals-met");
    };
    const /* BRIO: tagName
     * Apply a single dynamic uL# prefix within maxLength so capture can find the current local player without a hardcoded identity.
     */
    tagName = () => {
        const b = q("#nameBox");
        if (!b) return "uL#";
        let raw = String(b.value || "");
        raw = raw.replace(/^uL#/, "");
        const max = Number(b.maxLength) > 0 ? Number(b.maxLength) : Infinity;
        const tagged = ("uL#" + raw).slice(0, max);
        if (b.value !== tagged) {
            b.value = tagged;
            try {
                b.dispatchEvent(new Event("input", {
                    bubbles: true
                }));
                b.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
            } catch (_) {}
        }
        S.localName = tagged;
        return tagged;
    }, /* BRIO: arm
     * The ordinary-Play lifecycle boundary. Restore all old hooks/resources, detach old game nodes, clear runtime collections, increment epoch and rearm selected settings.
     */
    arm = () => {
        S.runEpoch = (S.runEpoch || 0) + 1;
        if (S.renderer) deepReport();
        deepStop();
        stopRenderDiscovery();
        restoreRenderArrays();
        clearInterval(S.phaseTimer);
        S.phaseTimer = 0;
        S.botPhase = "lobby"; S.botPhaseAt = 0; S.emoteResolved = [];
        restoreResourceMaps();
        restoreCosmetics();
        restoreEmote();
        restoreSrc();
        S.replicaAuditCount = 0;
        replicaAuditSeen = new WeakSet;
        S.playVisuals = state();
        S.resolvedVisuals = null;
        S.windowSceneChecked = false;
        S.sceneScanLogged = false;
        resetNativeHud();
        resetFeatures();
        syncMonochrome(!!extrasState().monochrome);
        if (S.featureTimer) {
            clearInterval(S.featureTimer);
            S.featureTimer = 0;
        }
        restoreMarkerHolds();
        reconNow.last = null;
        reconNow.stateLogs = 0;
        reconContainersSeen.clear();
        reconRemoved.clear(); reconCoverage.clear(); reconObjects = new WeakSet;
        reconNow.captures = 0;
        S.botWatch.clear(); S.botLogged.clear(); botAuditSeen.clear(); botAuditUntil = 0;
        S.manualCopy = false;
        for (const key of ["nearestUi", "chestUi", "airdropUi"]) if (S[key]) S[key].style.display = "none";
        stopCapture("rearm");
        restoreArrays();
        S.renderer = S.native = S.rendererArray = null;
        S.remoteRefs = new Map;
        S.remoteQueued = new WeakSet;
        S.worldQueued = new WeakSet;
        S.contentBase = null;
        S.contentCapture = null;
        S.autoContents.clear();
        S.autoSeen.clear();
        S.autoEvents = [];
        S.passiveAssets.clear();
        S.passiveBuilds.clear();
        S.passiveLocal = null;
        if (S.passiveTimer) {
            clearInterval(S.passiveTimer);
            S.passiveTimer = 0;
        }
        if (S.autoContentTimer) {
            clearInterval(S.autoContentTimer);
            S.autoContentTimer = 0;
        }
        restoreRandom();
        restoreMeteor();
        stopMeteorPersist();
        if (S.localTrack?.node) try {
            S.localTrack.node.parent?.remove?.(S.localTrack.node);
        } catch (_) {}
        S.localTrack = null;
        for (const n of S.trackNodes.values()) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        S.trackNodes.clear();
        for (const n of S.invNodes.values()) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        S.invNodes.clear();
        if (S.nearestTimer) {
            clearInterval(S.nearestTimer);
            S.nearestTimer = 0;
        }
        if (S.indicatorTimer) {
            clearInterval(S.indicatorTimer);
            S.indicatorTimer = 0;
        }
        if (S.botTimer) {
            clearInterval(S.botTimer);
            S.botTimer = 0;
        }
        S.localName = tagName();
        log("MATCH STATE RESET", {epoch: S.runEpoch, meteorMarkers: reconMarkers.length, remoteRefs: S.remoteRefs.size, inventoryNodes: S.invNodes.size, trackNodes: S.trackNodes.size, featureNodes: featureNodes.size, savedSelectionsPreserved: true});
        deepStart();
        startRenderDiscovery("Play");
        const chosen = extrasState(), flags = Object.fromEntries(REQUIRED_TESTS.map(id => [ id, !!chosen[id] ]));
        log("TEST SETTINGS AT PLAY", {
            requiredOn: flags,
            missing: REQUIRED_TESTS.filter(id => !chosen[id]),
            allSelected: chosen
        });
        locker.style.display = extras.style.display = "none";
        const op = Array.prototype.push, ou = Array.prototype.unshift, hp = function(...xs) {
            const n = Reflect.apply(op, this, xs);
            for (const x of xs) handleAdded(x, this);
            queueMicrotask(maybeStop);
            return n;
        }, hu = function(...xs) {
            const n = Reflect.apply(ou, this, xs);
            for (const x of xs) handleAdded(x, this);
            queueMicrotask(maybeStop);
            return n;
        };
        Array.prototype.push = hp;
        Array.prototype.unshift = hu;
        const timer = setTimeout(() => {
            if (Array.prototype.push === hp) Array.prototype.push = op;
            if (Array.prototype.unshift === hu) Array.prototype.unshift = ou;
            if (S.capture?.hp === hp) S.capture = null;
            log("GLOBAL HOOK TIMEOUT", goals());
        }, 12e3);
        S.capture = {
            op: op,
            ou: ou,
            hp: hp,
            hu: hu,
            timer: timer
        };
        log("PREMATCH ARMED", {
            taggedName: S.localName,
            extras: extrasState()
        });
    }, /* BRIO: bindPlay
     * Bind existing native Play capture events. Pointer/mouse preparation tags the name; click arms the run before native handlers.
     */
    bindPlay = () => {
        const e = q("#ready") || q("#play") || q("#playButton") || q("#loggedInPlay");
        if (!e) return log("PLAY BIND FAILED");
        S.play = e;
        const prep = () => tagName(), go = () => arm();
        e.addEventListener("pointerdown", prep, true);
        e.addEventListener("mousedown", prep, true);
        e.addEventListener("click", go, true);
        S.playHandlers = [ [ "pointerdown", prep ], [ "mousedown", prep ], [ "click", go ] ];
        log("PLAY BOUND", e.id);
    };
    const /* BRIO: verify
     * Report current capture/hooks/settings/errors without creating gameplay actions or treating missing evidence as a pass.
     */
    verify = () => {
        const o = {
            botAudit: {
                players: botAuditSeen.size,
                source: botAuditSource,
                classification: "unresolved; no heuristic assigned"
            },
            indicatorStats: indicatorStats,
            featureEntities: featureNodes.size,
            nativeHud: S.hudStatus || {
                captured: false
            },
            nativeRenderArrays: renderArrays.size,
            automaticPhase: {
                signal: "native local gliding state or decoded circle waiting/moving",
                phase: S.botPhase
            },
            meteorNativeHolds: reconMarkers.map(x => ({
                inNativeParent: (x.parent["âè"] || []).includes(x.node),
                removeAttempts: x.attempts,
                opacityWrites: x.opacityWrites,
                destroyAttempts: x.destroyAttempts
            })),
            passiveObjectKinds: reconCoverage.size,
            sourceLoaded: reconNow.source,
            version: S.v,
            taggedName: S.localName,
            renderer: !!S.renderer,
            capturedName: S.renderer?.["Ée"] || null,
            extras: extrasState(),
            inventoryScale: invScale(),
            roofs: S.roofSaved.size,
            remoteRefs: S.remoteRefs.size,
            botPlayers: S.botWatch.size,
            meteorAutomatic: {
                observer: (S.meteorObservers?.size || 0) > 0,
                observerCount: S.meteorObservers?.size || 0,
                scan: !!S.meteorAutoTimer,
                coverage: S.sceneScan || null,
                startError: !!S.sceneStartError
            },
            meteorNativeDraw: !!S.meteorSource,
            autoContainers: reconContainersSeen.size,
            passiveAssets: S.passiveAssets.size,
            passiveBuilds: S.passiveBuilds.size,
            phase: S.botPhase,
            chestFound: !!chestObj(),
            airdropFound: !!airdropObj(),
            fishingFound: !!fishingObj(),
            contentProbeActive: !!S.contentBase,
            errors: S.errors
        };
        log("VERIFY", o);
        return o;
    };
    const term = D.createElement("div");
    term.className = "brioTerm";
    term.style = "position:fixed;right:12px;top:12px;width:720px;height:430px;z-index:2147483647;background:#000;color:#fff;border:1px solid #fff;font:12px Consolas;display:flex;flex-direction:column";
    term.innerHTML = '<div class="head" style="display:flex;gap:6px;padding:6px"><b style="flex:1">BRIO v48</b><button data-a="min">—</button></div><div class="body" style="display:flex;gap:5px;padding:6px;flex-wrap:wrap"><button data-a="verify">VERIFY</button><button data-a="copy">COPY RESULTS</button></div><textarea class="body" style="flex:1;background:#000;color:#fff;border:0;padding:7px;resize:none"></textarea>';
    D.documentElement.appendChild(term);
    S.out = term.querySelector("textarea");
    let mini = false, drag = null;
    term.onclick = e => {
        const a = e.target?.dataset?.a;
        if (a === "min") {
            mini = !mini;
            term.classList.toggle("min", mini);
            e.target.textContent = mini ? "+" : "—";
        } else if (a === "verify") { deepReport(); verify(); } else if (a === "copy") {
            S.manualCopy = false; deepReport();
            if (S.botTimer) botStop();
            reconContainers();
            const x = "BRIO " + S.v + "\n" + S.log.join("\n") + "\n\n" + J(verify());
            Promise.resolve().then(() => {
                if (!navigator.clipboard?.writeText) throw Error("Clipboard API unavailable");
                return navigator.clipboard.writeText(x);
            }).then(() => log("COPY OK", x.length)).catch(() => {
                S.manualCopy = true; S.out.value = x;
                S.out.select();
                try {
                    D.execCommand("copy");
                } catch (_) {
                    log("COPY MANUALLY", "Select and copy the terminal text");
                }
            });
        }
    };
    term.querySelector(".head").onpointerdown = e => {
        if (!mini || e.target.closest("button")) return;
        const r = term.getBoundingClientRect();
        term.style.right = "auto";
        term.style.left = r.left + "px";
        drag = {
            id: e.pointerId,
            x: e.clientX - r.left,
            y: e.clientY - r.top
        };
        e.currentTarget.setPointerCapture?.(e.pointerId);
    };
    term.querySelector(".head").onpointermove = e => {
        if (!drag || drag.id !== e.pointerId) return;
        term.style.left = Math.max(0, Math.min(innerWidth - term.offsetWidth, e.clientX - drag.x)) + "px";
        term.style.top = Math.max(0, Math.min(innerHeight - term.offsetHeight, e.clientY - drag.y)) + "px";
    };
    term.querySelector(".head").onpointerup = () => drag = null;
    /* BRIO: destroy
     * Full injection teardown, unlike a match rearm: also restore home nodes,
     * remove styles/modals/terminal and delete the version key. Increment the
     * epoch first so pending promises cannot write into restored native state.
     */
    S.destroy = () => {
        S.destroyed = true;
        S.runEpoch = (S.runEpoch || 0) + 1;
        deepStop();
        stopRenderDiscovery();
        restoreRenderArrays();
        clearInterval(S.phaseTimer);
        S.phaseTimer = 0;
        restoreResourceMaps();
        restoreCosmetics();
        if (S.logFlush) clearTimeout(S.logFlush);
        resetNativeHud();
        resetFeatures();
        if (S.featureTimer) clearInterval(S.featureTimer);
        restoreMarkerHolds();
        stopCapture("destroy");
        restoreArrays();
        restoreSrc();
        restoreEmote();
        restoreMeteor();
        stopMeteorPersist();
        restoreRandom();
        restoreInvTrace();
        if (S.botTimer) clearInterval(S.botTimer);
        if (S.autoContentTimer) clearInterval(S.autoContentTimer);
        if (S.passiveTimer) clearInterval(S.passiveTimer);
        if (S.nearestTimer) clearInterval(S.nearestTimer);
        if (S.indicatorTimer) clearInterval(S.indicatorTimer);
        if (S.play) for (const [type, fn] of S.playHandlers) S.play.removeEventListener(type, fn, true);
        D.removeEventListener("click", intercept, true);
        for (const m of [ S.roofSaved, S.buildSaved, S.lootSaved ]) for (const {w: w, old: old} of m.values()) try {
            w["ÁÄ"] = old;
        } catch (_) {}
        if (S.localTrack?.node) try {
            S.localTrack.node.parent?.remove?.(S.localTrack.node);
        } catch (_) {}
        for (const n of [ ...S.trackNodes.values(), ...S.invNodes.values() ]) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        for (const u of [ S.nearestUi, S.chestUi, S.airdropUi ]) u?.remove?.();
        for (const id of [ "loggedInLocker", "loggedInShop" ]) {
            const e = D.getElementById(id), b = S.bak[id];
            if (e && b) {
                e.innerHTML = b.html;
                e.className = b.cls;
                e.setAttribute("style", b.style);
            }
        }
        style.remove();
        locker.remove();
        extras.remove();
        term.remove();
        delete W[K];
    };
    const botAuditSeen = new Map;
    let botAuditUntil = 0, botAuditSource = null;
    const /* BRIO: botAuditReset
     * Reset a short per-match audit; prior match human labels or reused IDs cannot carry into the new run.
     */
    botAuditReset = () => {
        botAuditSeen.clear();
        botAuditUntil = performance.now() + 45e3;
        log("BOT AUDIT PLAN", {
            mode: "bounded metadata audit: all own keys + two-level non-render metadata; explicit source terms + constructor references",
            limitSeconds: 45,
            maxPlayers: 60,
            maxSnapshotsPerPlayer: 2,
            note: "No bot classifier. Prior selected-field route is inconclusive; absence of a marker is not impossibility."
        });
    }, /* BRIO: botMeta
     * Read bounded renderer metadata for source corroboration. This audit is not an authoritative bot detector.
     */
    botMeta = r => {
        const out = {}, seen = new Set, skip = new Set([ "parent", "owner", "game", "stage", "Eâ", "â", "aá", "head", "Ëå", "Äâè", "ÉãÂ", "ä", "áË", "ÄÂ", "ÄãÀ", "èÅ", "ÃÊ", "æÄ", "AÃå", "ÄÊâ", "ÂÅ", "ÁÄ" ]);
        function walk(v, p, d) {
            if (!v || typeof v !== "object" || seen.has(v) || v instanceof Node || v instanceof HTMLImageElement || d > 2 || seen.size > 100 || ArrayBuffer.isView(v)) return;
            seen.add(v);
            for (const k of Object.getOwnPropertyNames(v).slice(0, 400)) {
                if (skip.has(k)) continue;
                let x;
                try {
                    x = v[k];
                } catch (_) {
                    continue;
                }
                const key = p + k;
                if (x == null || [ "boolean", "number", "string" ].includes(typeof x)) {
                    if (typeof x !== "string" || x.length < 180) out[key] = x;
                } else if (Array.isArray(x) && x.length <= 32 && x.every(y => y == null || [ "boolean", "number", "string" ].includes(typeof y))) out[key] = x.slice(); else if (x && typeof x === "object" && !Array.isArray(x)) walk(x, key + ".", d + 1);
            }
        }
        walk(r, "", 0);
        return out;
    }, botAuditTick = () => {
        if (performance.now() > botAuditUntil) return;
        for (const r of collectPlayers()) {
            if (isLocal(r)) continue;
            let rec = botAuditSeen.get(r);
            if (!rec) {
                if (botAuditSeen.size >= 60) continue;
                rec = {
                    at: performance.now(),
                    snap: null,
                    done: false
                };
                botAuditSeen.set(r, rec);
                rec.snap = botMeta(r);
                log("BOT METADATA AUDIT", {
                    id: r.id,
                    name: r["Ée"],
                    phase: S.botPhase,
                    keys: Object.getOwnPropertyNames(r),
                    fields: rec.snap,
                    knownHuman: null,
                    note: "Unlabelled in this match; field meanings require source corroboration"
                });
            } else if (!rec.done && performance.now() - rec.at >= 2e3) {
                rec.done = true;
                const fields = botMeta(r), changes = {};
                for (const k of Object.keys(fields)) if (J(fields[k]) !== J(rec.snap[k])) changes[k] = fields[k];
                log("BOT METADATA SETTLED", {
                    id: r.id,
                    name: r["Ée"],
                    phase: S.botPhase,
                    changes: changes
                });
            }
        }
    }, botSourceAudit = src => {
        const re = /\b(?:bot|isbot|is_bot|npc|isai|is_ai|robot|artificialintelligence|computerplayer)\b/gi, hits = [];
        let m;
        while ((m = re.exec(src)) && hits.length < 60) hits.push({
            term: m[0],
            at: m.index,
            excerpt: src.slice(Math.max(0, m.index - 350), m.index + 650)
        });
        const constructors = [];
        for (const term of [ '.ÃEÅ("player"', ".ÃEÅ('player'", "isBot", "isAI", "botType", "botDifficulty", "botName", "botNames" ]) {
            const at = src.indexOf(term);
            if (at >= 0) constructors.push({
                term: term,
                at: at,
                excerpt: src.slice(Math.max(0, at - 300), at + 1e4)
            });
        }
        botAuditSource = {
            termsFound: hits.length,
            constructorCandidates: constructors.length,
            scope: "escaped-literal-decoded bundle; string-table indirection may hide terms",
            exhausted: false
        };
        log("BOT SOURCE AUDIT", {
            ...botAuditSource,
            hits: hits,
            constructors: constructors,
            note: "No hits would not prove that server-only bot state is unavailable; follow constructor/replicated fields before closing route."
        });
    };
    // All probes below observe native results. They neither decode independently nor alter packets.
    const deep = {restore: null, timer: 0, until: 0, packets: 0, records: 0, bytes: 0, schemas: new Set, identities: new Map, subtypes: new Map, replicas: new Map, truncations: 0, errors: 0, engines: new WeakSet, engineRestores: [], source: null, lanes: {}, suppressed: {}, incomingState: new Map, environmentSeen: new WeakSet, epoch: 0, errorStages: {}, localId: null, circleState: null};
    const /* BRIO: deepError
     * Keep bounded stage-specific observation failures while returning native results unchanged. Registry exclusions are evidence gaps, not gameplay errors.
     */
    deepError = (stage, error) => {
        deep.errors++;
        deep.errorStages[stage] = (deep.errorStages[stage] || 0) + 1;
        if (deep.errorStages[stage] <= 2) log("PROBE OBSERVATION ERROR", {stage, epoch: deep.epoch, error: String(error)});
    };
    const /* BRIO: probeSnapshot
     * Snapshot data descriptors only, redact sensitive fields and mark accessors/cycles/truncation. Never invoke getters to obtain evidence.
     */
    probeSnapshot = value => {
        const seen = new WeakSet; let entries = 0, truncated = false;
        const walk = (v, depth) => {
            if (++entries > 1400 || depth > 8) { truncated = true; return "[CAP]"; }
            if (typeof v === "string") { if (v.length > 1000) {truncated = true; return v.slice(0, 1000) + "[CAP]";} return v; }
            if (v == null || typeof v === "boolean" || typeof v === "number") return v;
            if (typeof v !== "object") return "[" + typeof v + "]";
            if (Object.getOwnPropertyDescriptor(v, "éa")?.value || (Object.getOwnPropertyDescriptor(v, "ë")?.value && Array.isArray(Object.getOwnPropertyDescriptor(v, "âè")?.value))) return "[NATIVE DRAWABLE; OMITTED]";
            if (seen.has(v)) return "[CYCLE]";
            if (v instanceof Node) return "[DOM]";
            if (ArrayBuffer.isView(v)) { truncated = true; return {binaryBytes: v.byteLength}; }
            seen.add(v);
            const o = Array.isArray(v) ? [] : {};
            for (const key of Reflect.ownKeys(v).slice(0, 240)) {
                if (typeof key !== "string" || key === "length" || ["parent","ÁÄ","canvas"].includes(key)) continue;
                const desc = Object.getOwnPropertyDescriptor(v, key), meaning = schemaFields.get(key) || key;
                if (/token|password|email|(?:^|_)ip(?:$|_)/i.test(meaning)) {o[key] = "[REDACTED]"; continue;}
                o[key] = desc && "value" in desc ? walk(desc.value, depth + 1) : "[ACCESSOR; NOT INVOKED]";
                if (entries > 1400) break;
            }
            if (Reflect.ownKeys(v).length > 240) truncated = true;
            return o;
        };
        const data = walk(value, 0);
        return {data, entries, truncated};
    };
    const DEEP_LANES = {schema: 350, player: 350, container: 700, replica: 300, environment: 100};
    const /* BRIO: deepRecord
     * Enforce total and reserved-lane budgets before committing record bytes. One busy lane cannot consume another lane's records.
     */
    deepRecord = (label, obj, lane = label.startsWith("INCOMING SCHEMA") ? "schema" : label.startsWith("ENVIRONMENT") ? "environment" : obj.kind === "player" ? "player" : label.startsWith("DEEP TARGET") ? "replica" : "container") => {
        if (deep.records >= 1800 || deep.bytes >= 8e6 || (deep.lanes[lane] || 0) >= DEEP_LANES[lane]) {deep.suppressed[lane] = (deep.suppressed[lane] || 0) + 1; return false;}
        const snap = probeSnapshot(obj), bytes = JSON.stringify(snap).length;
        if (deep.bytes + bytes > 8e6) {deep.suppressed.bytes = (deep.suppressed.bytes || 0) + 1; return false;}
        if (snap.truncated) deep.truncations++;
        deep.bytes += bytes; deep.records++; deep.lanes[lane] = (deep.lanes[lane] || 0) + 1;
        log(label, snap); return true;
    };
    const /* BRIO: environmentProbe
     * Record a manifest and small target chunks separately from large terrain arrays so later fields remain observable.
     */
    environmentProbe = env => {
        if (!env || typeof env !== "object") return;
        const props = Object.getOwnPropertyDescriptors(env), fields = Object.keys(props);
        deepRecord("ENVIRONMENT MANIFEST", {fields: fields.map(key => ({key, meaning: schemaFields.get(key) || key, length: Array.isArray(props[key].value) ? props[key].value.length : undefined, accessor: !("value" in props[key])}))});
        for (const key of fields) {
            const value = props[key].value, meaning = schemaFields.get(key) || key;
            if (/chest|object|loot|seed|content|fish|drop|resourceNames/i.test(meaning)) {
                if (Array.isArray(value)) {
                    const count = Math.ceil(value.length / 24);
                    for (let chunk = 0; chunk < count; chunk++) if (!deepRecord("ENVIRONMENT TARGET CHUNK", {key, meaning, index: chunk, count, total: value.length, entries: value.slice(chunk*24,(chunk+1)*24)})) break;
                } else deepRecord("ENVIRONMENT TARGET FIELD", {key, meaning, value});
            }
        }
    };
    const /* BRIO: incomingDelta
     * Deduplicate exact field snapshots. Bound ordinary player/geometry/landing changes; novel container fields remain eligible within record limits.
     */
    incomingDelta = (p, kind, id, type) => {
        const identity = kind + ":" + id;
        let /* BRIO: state
     * Read cosmetic selections. Keep this namespace separate from the native locker and from Extras.
     */
    state = deep.incomingState.get(identity);
        if (!state) {
            if (deep.incomingState.size >= 600) return {packet: p, first: true};
            state = {values: new Map, changes: new Map}; deep.incomingState.set(identity, state);
        }
        const packet = {}, fields = [], capped = [];
        for (const [key, desc] of Object.entries(Object.getOwnPropertyDescriptors(p))) {
            if (["a","p","t","type","i","id","Ã","x","y","É","Ä","b","n"].includes(key)) continue;
            const value = "value" in desc ? desc.value : "[ACCESSOR; NOT INVOKED]", snap = probeSnapshot(value), fingerprint = JSON.stringify(snap.data);
            if (state.values.get(key) === fingerprint) continue;
            const seen = state.values.has(key), changes = state.changes.get(key) || 0;
            state.values.set(key, fingerprint);
            // Preserve first values of every field; routine player state must not starve containers.
            if (seen && changes >= 3 && (kind === "player" || ["health", "fullHealth", "width", "height", "landProgress", "landed"].includes(schemaFields.get(key) || key))) {capped.push(key); continue;}
            state.changes.set(key, changes + 1); packet[key] = snap.data; fields.push(key);
        }
        if (capped.length) deep.suppressed.routineFieldChanges = (deep.suppressed.routineFieldChanges || 0) + capped.length;
        const packed = Object.getOwnPropertyDescriptor(p, "a")?.value;
        if (Array.isArray(packed) && packed.length > 4) {packet.packedExtension = packed.slice(4); fields.push("packedExtension");}
        return {packet, fields};
    };
    const /* BRIO: incomingProbe
     * Observe the original native decode result before remapping. Retain only target identities; terrain/loot IDs must not consume the 600 target-ID budget.
     */
    incomingProbe = result => {
        if (S.destroyed || performance.now() > deep.until) return;
        const packets = Array.isArray(result) ? result : [result];
        for (const p of packets) {
            if (!p || typeof p !== "object" || deep.packets++ >= 80000) continue;
            const desc = Object.getOwnPropertyDescriptors(p), own = k => desc[k] && "value" in desc[k] ? desc[k].value : undefined;
            const type = own("t") ?? own("type"), packed = own("p"), update = own("a");
            const id = own("i") ?? own("id") ?? own("Ã") ?? (type === "x" ? packed?.[0] : type === "y" ? update?.[0] : undefined);
            let kind = own("b") ?? (type === "x" ? packed?.[1] : undefined);
            let subtype = own("t") != null ? own("type") : undefined;
            const targetObject = subtype => ["airdrop","bubbles","ammocrate","grenadecrate","meteorite"].includes(subtype);
            const targetKind = k => k === "player" || k === "chest" || k === "airdrop" || k === "object" && targetObject(subtype);
            if (type === "x" && id != null && targetKind(kind) && (deep.identities.has(id) || deep.identities.size < 600)) {deep.identities.set(id, kind); if (subtype) deep.subtypes.set(id, subtype);}
            kind ||= deep.identities.get(id); subtype ||= deep.subtypes.get(id);
            if (type === "x" && id != null && (deep.identities.has(id) || deep.identities.size < 600) && deep.identities.get(id) !== kind && targetKind(kind)) {deep.identities.set(id, kind); if (subtype) deep.subtypes.set(id, subtype);}
            const signature = String(type) + ":" + String(kind || "") + ":" + String(subtype || "") + ":" + Object.keys(desc).sort().join(",");
            if (!deep.schemas.has(signature) && deep.schemas.size < 350) {
                deep.schemas.add(signature); deepRecord("INCOMING SCHEMA FIRST", {type, kind, subtype, id, packet: p, scope: "native msgpack.decode return before native field remap; no mutation"});
            }
            if (type === "setID" && id != null) deep.localId = id;
            if (type === "circle") {
                const circleState = own("state");
                if (circleState !== undefined && circleState !== deep.circleState) {
                    log("NATIVE SESSION STATE", {previous: deep.circleState, state: circleState, epoch: S.runEpoch, packet: probeSnapshot(p)});
                    if (["waiting", "moving"].includes(circleState)) botPhase("native circle state=" + circleState);
                    if (circleState === "lobby" && deep.circleState && deep.circleState !== "lobby") {
                        restoreMarkerHolds();
                        for (const key of ["nearestUi","chestUi","airdropUi"]) if (S[key]) S[key].style.display = "none";
                    }
                    deep.circleState = circleState;
                }
            }
            if (kind === "player" && id === (deep.localId ?? S.renderer?.id) && Number.isFinite(own("glidingTicks")) && own("glidingTicks") >= 0 && own("maxGlidingTicks") > 0) botPhase("native incoming local gliding state");
            if (type === "e") {
                const env = own("envs") ?? own("È$");
                if (env && typeof env === "object" && !deep.environmentSeen.has(env)) {deep.environmentSeen.add(env); environmentProbe(env);}
            }
            const relevant = kind === "player" || kind === "chest" || kind === "object" && targetObject(subtype) || kind === "airdrop";
            if (relevant) {
                if (type === "y") {
                    const delta = incomingDelta(p, kind, id, type);
                    if (delta.fields?.length || delta.first) deepRecord("INCOMING TARGET PAYLOAD", {type, kind, subtype, id, ...delta, phase: S.botPhase, scope: "changed field values; bounded routine fields; novel/unknown container fields retained"});
                } else {
                    deepRecord("INCOMING TARGET PAYLOAD", {type, kind, subtype, id, packet: p, phase: S.botPhase});
                    if (type === "x") incomingDelta(p, kind, id, type);
                }
            }
        }
    };
    const /* BRIO: deepEngineProbe
     * Wrap only reached native registry callbacks, delegate once with original receiver/arguments/return, and retain exact restoration descriptors.
     */
    deepEngineProbe = engine => {
        if (!engine || deep.engines.has(engine)) return;
        const handlers = Object.getOwnPropertyDescriptor(engine, "áÉâ")?.value;
        const registry = Object.getOwnPropertyDescriptor(engine, "ÁÂ")?.value;
        if (!handlers || typeof handlers.x !== "function" || !registry) return;
        deep.engines.add(engine);
        for (const kind of ["player","chest","object"]) {
            const callbacks = Object.getOwnPropertyDescriptor(registry, kind)?.value;
            if (!callbacks) continue;
            for (const key of ["èæå","ëåä","remove"]) {
                const d = Object.getOwnPropertyDescriptor(callbacks, key); if (!d || !d.configurable || typeof d.value !== "function") continue;
                const original = d.value, wrapper = function(...args) {
                    try {if (performance.now() <= deep.until) {
                        const delta = key === "ëåä" ? incomingDelta(args[1] || {}, kind, args[0]?.id, "y") : {packet: args[1], fields: ["create/remove"]};
                        if (delta.fields?.length) deepRecord("NATIVE CALLBACK PAYLOAD", {kind, callback: key, id: args[0]?.id, payload: delta.packet, stage: "before native callback"});
                    }} catch (error) {deepError("native callback", error);}
                    return Reflect.apply(original, this, args);
                };
                Object.defineProperty(callbacks, key, {...d, value: wrapper});
                deep.engineRestores.push(() => {if (callbacks[key] === wrapper) Object.defineProperty(callbacks, key, d);});
            }
        }
        log("NATIVE ENGINE PROBE", {captured: true, callbacks: deep.engineRestores.length});
    };
    const /* BRIO: deepTick
     * Install the scoped decode observer, inspect target replicas, and attempt bounded reached-window registry discovery. Do not independently decode or send.
     */
    deepTick = () => {
        if (S.destroyed || performance.now() > deep.until) {deepStop("time cap"); return;}
        if (!deep.restore) {
            let codec; try { codec = typeof msgpack !== "undefined" ? msgpack : Object.getOwnPropertyDescriptor(W, "msgpack")?.value; } catch (_) {}
            const d = codec && Object.getOwnPropertyDescriptor(codec, "decode");
            if (d && typeof d.value === "function" && (d.configurable || d.writable)) {
                const original = d.value, wrapper = function(...args) {
                    const result = Reflect.apply(original, this, args);
                    try {incomingProbe(result);} catch (error) {deepError("incoming result", error);}
                    return result;
                };
                Object.defineProperty(codec, "decode", {...d, value: wrapper});
                deep.installedEver = true;
                deep.restore = () => {if (codec.decode === wrapper) Object.defineProperty(codec, "decode", d);};
                log("INCOMING DECODE PROBE", {installed: true, method: "native result observer", outgoingUntouched: true, returnedIdentityPreserved: true});
            }
        }
        const live = new Set;
        const localPosition = worldPos(S.renderer);
        for (const o of [...collectPlayers(), ...collectWorld()]) {
            const kind = isPlayer(o) ? "player" : reconKind(o); if (!kind) continue;
            if (o.id != null && deep.identities.size < 600) {deep.identities.set(o.id, kind === "player" ? "player" : o.type); if (o["Àâ"]) deep.subtypes.set(o.id, o["Àâ"]);}
            const key = kind + ":" + o.id; live.add(key);
            let rec = deep.replicas.get(key); if (!rec && deep.replicas.size >= 200) continue;
            const snapshot = probeSnapshot(o), signature = JSON.stringify(snapshot.data);
            if (!rec) {
                rec = {last: signature, absent: false, updates: 0, firstAt: performance.now()}; deep.replicas.set(key, rec);
                const proto = []; let p = Object.getPrototypeOf(o);
                for (let depth = 0; p && depth < 3; depth++, p = Object.getPrototypeOf(p)) proto.push(Reflect.ownKeys(p).map(k => {const d = Object.getOwnPropertyDescriptor(p, k); return {key: String(k), meaning: schemaFields.get(k) || null, accessor: !!(d.get || d.set), type: typeof d.value, value: d.value == null || ["number","string","boolean"].includes(typeof d.value) ? d.value : "[NONSCALAR]"};}));
                deepRecord("DEEP TARGET INITIAL", {kind, id: o.id, knownHuman: isLocal(o) ? "current local user" : null, snapshot, prototypeDescriptors: proto});
            } else if (rec.last !== signature && rec.updates++ < 5) {
                rec.last = signature; deepRecord("DEEP TARGET CHANGE", {kind, id: o.id, ageMs: Math.round(performance.now() - rec.firstAt), snapshot});
            }
            if (kind !== "player" && !rec.near && localPosition) {
                const position = worldPos(o), distance = position ? Math.hypot(position.x - localPosition.x, position.y - localPosition.y) : Infinity;
                if (distance < 300) {rec.near = true; deepRecord("DEEP CONTAINER NEARBY", {kind, id: o.id, distance, snapshot, semantics: "passive near-object sample; opening state is not inferred"});}
            }
            rec.absent = false;
        }
        for (const [key, rec] of deep.replicas) if (!live.has(key) && !rec.absent) {rec.absent = true; deepRecord("DEEP TARGET DISAPPEARED", {key, semantics: "culling/removal only; neither opened nor empty established"});}
        // One bounded own-data-only global scan per match; never invoke native getters.
        if (!deep.windowScanned) {
            deep.windowScanned = true;
            for (const key of Object.getOwnPropertyNames(W).slice(0, 1800)) try {
                const v = Object.getOwnPropertyDescriptor(W, key)?.value;
                if (!v || typeof v !== "object" || v instanceof Node || v === S || v === W) continue;
                deepEngineProbe(v);
                for (const d of Object.values(Object.getOwnPropertyDescriptors(v)).slice(0, 60)) if (d.value && typeof d.value === "object") deepEngineProbe(d.value);
            } catch (error) {deepError("window registry discovery", error);}
        }
    };
    const /* BRIO: deepReport
     * Report the probe's own epoch, not an already-incremented next Play. Include missing hooks, lanes, suppression and stage-specific errors.
     */
    deepReport = () => log("V48 PROBE COVERAGE", {
        incomingInstalled: !!deep.restore, incomingObservedThisRun: !!deep.installedEver, incomingPackets: deep.packets, incomingSchemas: deep.schemas.size, nativeEngineCaptured: deep.engineRestores.length > 0,
        targetedEntities: deep.replicas.size, records: deep.records, approximateBytes: deep.bytes, truncations: deep.truncations, errors: deep.errors, errorStages: deep.errorStages,
        lanes: deep.lanes, laneCaps: DEEP_LANES, suppressed: deep.suppressed, incomingTargetIds: deep.identities.size, circleState: deep.circleState, epoch: deep.epoch,
        caps: {packets: 80000, records: 1800, bytes: 8000000, entities: 200, durationMs: 900000},
        limitsReached: {packets: deep.packets >= 80000, records: deep.records >= 1800, bytes: deep.bytes >= 8e6, entities: deep.replicas.size >= 200}, source: deep.source,
        conclusion: "Coverage evidence only. Absence is not impossibility; bot/content classification remains unassigned."
    });
    const /* BRIO: deepStop
     * Restore decoder/callback observers and stop timers on time cap, next Play or destroy.
     */
    deepStop = reason => {
        clearInterval(deep.timer); deep.timer = 0;
        if (deep.restore) {deep.restore(); deep.restore = null;}
        while (deep.engineRestores.length) deep.engineRestores.pop()();
        if (reason) log("DEEP PROBES RESTORED", {reason});
    };
    const /* BRIO: deepStart
     * Reset all per-match evidence maps/counters under the new epoch. Cached raw source identity remains reusable.
     */
    deepStart = () => {
        deepStop(); deep.until = performance.now() + 900000; deep.packets = deep.records = deep.bytes = deep.truncations = deep.errors = 0;
        deep.epoch = S.runEpoch; deep.errorStages = {}; deep.installedEver = false; deep.lanes = {}; deep.suppressed = {}; deep.incomingState.clear(); deep.environmentSeen = new WeakSet; deep.localId = null; deep.circleState = null; deep.schemas.clear(); deep.identities.clear(); deep.subtypes.clear(); deep.replicas.clear(); deep.windowScanned = false; deep.engines = new WeakSet;
        log("V48 DEEP PROBE PLAN", {readOnly: true, source: "complete raw bundle + AST", targets: "all observed container kinds and players; environment target chunks", laneCaps: DEEP_LANES, updatePolicy: "changed fields only; reserve container/late-target capacity", noManualArm: true, noClassifier: true});
        const tick = () => { try { deepTick(); } catch (e) { deepError("target tick", e); } };
        tick(); deep.timer = setInterval(tick, 1000);
    };
    // Interpret only scalar AST arithmetic/aliases/branches; never call or execute source code.
    const /* BRIO: numericSourceConstants
     * Interpret only scalar AST literals/arithmetic/aliases/branches. No calls, eval, source execution or unknown-expression guessing.
     */
    numericSourceConstants = (ast, cutoff) => {
        const values = new Map;
        const readNumber = node => {
            if (!node) return undefined;
            if (node.type === "Literal" && ["number","boolean"].includes(typeof node.value)) return node.value;
            if (node.type === "Identifier") return values.get(node.name);
            if (node.type === "UnaryExpression") {const v = readNumber(node.argument); if (v === undefined) return; if (node.operator === "-") return -v; if (node.operator === "+") return +v; if (node.operator === "!") return !v; if (node.operator === "~") return ~v;}
            if (node.type === "BinaryExpression") {
                const a = readNumber(node.left), b = readNumber(node.right); if (a === undefined || b === undefined) return;
                switch (node.operator) {
                    case "+": return a+b; case "-": return a-b; case "*": return a*b; case "/": return a/b; case "%": return a%b;
                    case "<<": return a<<b; case ">>": return a>>b; case ">>>": return a>>>b; case "&": return a&b; case "|": return a|b; case "^": return a^b;
                    case "===": case "==": return a===b; case "!==": case "!=": return a!==b;
                    case "<": return a<b; case ">": return a>b; case "<=": return a<=b; case ">=": return a>=b;
                }
            }
            return undefined;
        };
        const invalidate = node => {
            if (!node || typeof node !== "object") return;
            if (node.type === "AssignmentExpression" && node.left?.type === "Identifier") values.delete(node.left.name);
            if (node.type === "UpdateExpression" && node.argument?.type === "Identifier") values.delete(node.argument.name);
            for (const v of Object.values(node)) if (Array.isArray(v)) v.forEach(invalidate); else if (v && typeof v === "object") invalidate(v);
        };
        const execute = node => {
            if (!node || node.start >= cutoff) return;
            if (node.type === "VariableDeclaration") for (const d of node.declarations) {if (d.id.type !== "Identifier") continue; const v = readNumber(d.init); if (v !== undefined) values.set(d.id.name,v); else values.delete(d.id.name);}
            else if (node.type === "ExpressionStatement") execute(node.expression);
            else if (node.type === "AssignmentExpression" && node.left.type === "Identifier") {const v = node.operator === "=" ? readNumber(node.right) : undefined; if (v !== undefined) values.set(node.left.name,v); else values.delete(node.left.name);}
            else if (node.type === "IfStatement") {const test = readNumber(node.test); if (test !== undefined) execute(test ? node.consequent : node.alternate); else {invalidate(node.consequent); invalidate(node.alternate);}}
            else if (node.type === "BlockStatement") node.body.forEach(execute);
            else if (node.type === "SequenceExpression") node.expressions.forEach(execute);
            else if (!["FunctionDeclaration","EmptyStatement"].includes(node.type)) invalidate(node);
        };
        const fn = ast.body.find(n => n.type === "ExpressionStatement" && n.expression?.type === "CallExpression" && n.expression.callee?.type === "FunctionExpression")?.expression.callee;
        (fn?.body.body || ast.body).forEach(execute);
        return values;
    };
    const /* BRIO: completeSourceAudit
     * Export reconstructable raw chunks and parse the native source as data. Source capture has its own 2M-character cap and SHA identity.
     */
    completeSourceAudit = async (raw, url) => {
        const size = 9000, count = Math.ceil(raw.length / size);
        if (raw.length > 2e6) {deep.source = {url, characters: raw.length, captured: false, reason: "2M source cap"}; deepReport(); return;}
        // JSON lines reconstruct exact raw source; no escape decoding or evaluation.
        for (let i = 0; i < count; i++) log("FULL NATIVE SOURCE CHUNK", {url, index: i, count, text: raw.slice(i * size, (i + 1) * size)});
        let hash = null; try {hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw))), b => b.toString(16).padStart(2, "0")).join("");} catch (_) {}
        try {
            const ast = parseNative(raw, {ecmaVersion: "latest", sourceType: "script", allowReturnOutsideFunction: true}), strings = [], members = new Map, assets = new Map, numericObjects = [], constants = new Map, objectNames = new WeakMap, dictionaries = new Map, registrations = [];
            const walk = node => {
                if (!node || typeof node !== "object") return;

                if (node.type === "VariableDeclarator" && node.init?.type === "ObjectExpression") objectNames.set(node.init, node.id?.name);
                if (node.type === "ObjectExpression") numericObjects.push(node);
                if (node.type === "CallExpression" && node.callee?.type === "MemberExpression" && (node.callee.property?.name || node.callee.property?.value) === "ÃEÅ" && ["player","chest","object","gun","ammo","spellfield","airdrop"].includes(node.arguments[0]?.value)) registrations.push(node);
                if (node.type === "Literal" && typeof node.value === "string") strings.push({value: node.value, at: node.start});
                if (node.type === "MemberExpression") {const key = node.computed ? node.property?.value : node.property?.name; if (typeof key === "string") {const a = members.get(key) || []; a.push(node.start); members.set(key, a);}}
                if (node.type === "Property" && typeof node.value?.value === "string" && /^(?:\.?\/)?buildart\//.test(node.value.value)) {const key = node.key.name || node.key.value; if (typeof key === "string") { assets.set(key, norm(node.value.value)); assets.set(key.toLowerCase(), norm(node.value.value)); }}
                if (node.type === "AssignmentExpression" && node.left?.type === "MemberExpression" && typeof node.right?.value === "string") {const key = node.left.computed ? node.left.property?.value : node.left.property?.name; if (typeof key === "string" && node.right.value.length < 100 && node.left.object?.type === "Identifier") {const owner = node.left.object.name, map = dictionaries.get(owner) || new Map; map.set(key, node.right.value); dictionaries.set(owner, map);}}
                for (const [key, v] of Object.entries(node)) if (!['start','end','loc'].includes(key)) { if (Array.isArray(v)) { for (const x of v) if (x?.type) walk(x); } else if (v?.type) walk(v); }
            };
            walk(ast); if (assets.size) S.hudAssetPaths = assets;
            for (const [owner, map] of dictionaries) if ([...map.values()].includes("isPreview") || [...map.values()].includes("weaponSlots")) {for (const [k,v] of map) schemaFields.set(k,v); log("DEEP FIELD DICTIONARY", {owner, entries: [...map]});}
            for (const call of registrations) {
                const kind = call.arguments[0].value;
                for (let i = 1; i < call.arguments.length && i < 5; i++) {
                    const fn = call.arguments[i]; if (!fn || !["FunctionExpression","ArrowFunctionExpression"].includes(fn.type)) continue;
                    const text = raw.slice(fn.start, fn.end), count = Math.ceil(text.length / 9000);
                    log("DEEP CALLBACK STRUCTURE", {kind, phase: ["create","frame","update","remove"][i-1], start: fn.start, end: fn.end, parameters: fn.params.map(x=>x.name || x.type), chunks: count});
                    for (let chunk = 0; chunk < count; chunk++) log("SOURCE CALLBACK CHUNK", {kind, phase: ["create","frame","update","remove"][i-1], index: chunk, count, text: text.slice(chunk*9000,(chunk+1)*9000)});
                }
            }
            for (const object of numericObjects) {
                if (objectNames.get(object) !== "äèä") continue;
                const resolved = numericSourceConstants(ast, object.start);
                const pairs = object.properties.filter(x => GUN_TYPES.has(String(x.key?.value || x.key?.name || "").toLowerCase())).map(x => [String(x.key.value || x.key.name).toLowerCase(), typeof x.value?.value === "number" ? x.value.value : resolved.get(x.value?.name)]).filter(x => Number.isInteger(x[1]) && x[1] >= 0 && x[1] < 5);
                if (pairs.length > (S.ammoTypeMap?.size || 3)) {S.ammoTypeMap = new Map(pairs); log("NATIVE AMMO TYPE MAP", {at: object.start, entries: pairs, note: "AST scalar arithmetic/alias/branch resolution; live slot emblem takes precedence; unknowns remain unknown"});}
            }
            const meanings = [...schemaFields].filter(([k,v]) => /droid|wander|bot|npc|ai|chest|content|loot|seed|fish|drop|object|ammo|weapon/i.test(v));
            for (const [key, meaning] of meanings) log("DEEP SEMANTIC REFERENCES", {field: key, meaning, total: members.get(key)?.length || 0, references: (members.get(key) || []).slice(0, 120).map(at => ({at, excerpt: raw.slice(Math.max(0, at - 180), at + 450)})), capped: (members.get(key)?.length || 0) > 120});
            log("DEEP SOURCE STRUCTURE", {strings: strings.length, properties: members.size, assets: assets.size, schemaFields: schemaFields.size, semanticStrings: strings.filter(x => /^(?:bot|isbot|isai|npc|droid|wander|seed|loot|contents|chest|airdrop|bubbles|ammocrate|grenadecrate|x|y|z|setID)$/i.test(x.value)), evaluation: false});
            deep.source = {url, characters: raw.length, chunks: count, sha256: hash, captured: true, astParsed: true};
        } catch (e) {deep.source = {url, characters: raw.length, chunks: count, sha256: hash, captured: true, astParsed: false, parseError: String(e)};}
        deepReport();
    };

    const schemaFields = new Map;
    const /* BRIO: sourceSchemaAudit
     * Map obfuscated native fields to source meanings without treating dictionary presence as a classifier/content list.
     */
    sourceSchemaAudit = src => {
        const anchor = src.indexOf('="isPreview"'), start = Math.max(0, anchor - 1600), end = anchor < 0 ? 0 : Math.min(src.length, anchor + 18e3), region = src.slice(start, end), pairs = [];
        for (const m of region.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*["']([^"'\n]{1,70})["']/g)) {
            if (pairs.length >= 240) break;
            schemaFields.set(m[2], m[3]);
            pairs.push({
                field: m[2],
                meaning: m[3],
                at: start + m.index
            });
        }
        log("DECODED FIELD SCHEMA", {
            found: anchor >= 0,
            start: start,
            end: end,
            pairs: pairs,
            botCandidates: pairs.filter(x => /bot|npc|(?:^|_)ai(?:$|_)|computerplayer/i.test(x.meaning)),
            contentsCandidates: pairs.filter(x => /contents|loot|seed|chest|drop|fish|weaponSlots|rarity|resources|object/i.test(x.meaning)),
            note: "Dictionary assignments only, not cosmetic names. isPreview is not a bot discriminator. No-hit does not establish server absence."
        });
        for (const kind of [ "player", "chest", "object" ]) {
            const token = '.ÃEÅ("' + kind + '"', at = src.indexOf(token);
            if (at < 0) continue;
            let pos = at + token.length, callbacks = 0;
            while (callbacks < 4) {
                const f = src.indexOf("function(", pos);
                if (f < 0 || f - pos > 500) break;
                const open = src.indexOf("{", f);
                let depth = 0, quote = "", escape = false, close = -1;
                for (let i = open; i < Math.min(src.length, open + 12e4); i++) {
                    const c = src[i];
                    if (quote) {
                        if (escape) escape = false; else if (c === "\\") escape = true; else if (c === quote) quote = "";
                        continue;
                    }
                    if (c === '"' || c === "'" || c === "`") {
                        quote = c;
                        continue;
                    }
                    if (c === "{") depth++;
                    if (c === "}" && ! --depth) {
                        close = i + 1;
                        break;
                    }
                }
                if (close < 0) break;
                const body = src.slice(f, close), phase = [ "create", "frame", "update", "remove" ][callbacks++], mappings = [];
                for (const m of body.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)/g)) {
                    if (mappings.length >= 180) break;
                    mappings.push({
                        target: m[2],
                        targetMeaning: schemaFields.get(m[2]) || null,
                        source: m[4],
                        sourceMeaning: schemaFields.get(m[4]) || null,
                        at: f + m.index
                    });
                }
                log("NATIVE CALLBACK AUDIT", {
                    kind: kind,
                    phase: phase,
                    start: f,
                    end: close,
                    characters: body.length,
                    mappings: mappings,
                    head: body.slice(0, 6500),
                    tail: body.length > 6500 ? body.slice(-1800) : "",
                    note: "Balanced callback candidate, not complete protocol exhaustion. Examine decoded create/update payload fields; source is never evaluated."
                });
                pos = close;
            }
        }
        for (const term of [ "inv0", "inv1", "ammo0", "wood.png", "isPreview", "lootSeed", "contents", "botNames", "isBot", "createWaypoint" ]) {
            let at = src.indexOf(term, term === "isPreview" ? 0 : 18e4), n = 0;
            while (at >= 0 && n++ < 3) {
                log("TARGETED NATIVE REFERENCE", {
                    term: term,
                    at: at,
                    excerpt: src.slice(Math.max(0, at - 700), at + 1400)
                });
                at = src.indexOf(term, at + term.length);
            }
        }
    };
    let replicaAuditSeen = new WeakSet;
    const /* BRIO: replicaStateAudit
     * Bound reached object/prototype inspection; source/live fields are evidence, not exact appearance or server completeness proof.
     */
    replicaStateAudit = o => {
        if (!o || replicaAuditSeen.has(o) || S.replicaAuditCount >= 80) return;
        const kind = isPlayer(o) ? "player" : reconKind(o);
        if (!kind) return;
        replicaAuditSeen.add(o);
        S.replicaAuditCount = (S.replicaAuditCount || 0) + 1;
        const entries = [], seen = new Set;
        function walk(v, path, depth) {
            if (!v || typeof v !== "object" || seen.has(v) || depth > 2 || seen.size >= 60 || v instanceof Node || ArrayBuffer.isView(v)) return;
            seen.add(v);
            for (const key of Object.getOwnPropertyNames(v).slice(0, 160)) {
                if ([ "parent", "ÁÄ", "â", "Eâ", "head", "Ëå", "ÄA", "canvas" ].includes(key)) continue;
                let x;
                try {
                    x = v[key];
                } catch (_) {
                    continue;
                }
                const label = schemaFields.get(key) || key;
                if (x == null || [ "number", "boolean", "string" ].includes(typeof x)) {
                    if (typeof x !== "string" || x.length <= 150) entries.push({
                        path: path + key,
                        meaning: label,
                        value: x
                    });
                } else if (Array.isArray(x) && x.length <= 8) for (let i = 0; i < x.length; i++) walk(x[i], path + key + "[" + i + "].", depth + 1); else if (x && typeof x === "object" && [ "new", "Âä", "áÆ", "ëa", "E_", "Åé" ].includes(key)) walk(x, path + key + ".", depth + 1);
                if (entries.length >= 240) return;
            }
        }
        walk(o, "", 0);
        log("NATIVE REPLICA SCHEMA SAMPLE", {
            id: o.id,
            kind: kind,
            phase: S.botPhase,
            knownHuman: isLocal(o) ? "local user this run" : null,
            fields: entries,
            note: "Read-only settled native/replica fields. No classifier; no opened/NONE inference."
        });
    };
    const registrationAudit = src => {
        for (const kind of [ "player", "chest", "object", "spellfield" ]) {
            const token = '.ÃEÅ("' + kind + '"', start = src.indexOf(token);
            if (start < 0) continue;
            const next = src.indexOf(".ÃEÅ(", start + token.length), end = Math.min(next < 0 ? src.length : next, start + 1e5), text = src.slice(start, end), fields = [ ...text.matchAll(/([\w$À-ÿ]+)\.([\w$À-ÿ]+)\s*=\s*([\w$À-ÿ]+)\.([\w$À-ÿ]+)/g) ].slice(0, 160).map(m => ({
                target: m[1] + "." + m[2],
                source: m[3] + "." + m[4],
                at: start + m.index
            }));
            log("NATIVE REGISTRATION AUDIT", {
                kind: kind,
                start: start,
                end: end,
                truncated: end === start + 1e5,
                fieldMappings: fields,
                note: "Source candidates only; constructor/update fields need runtime attribution. No contents or bot inference."
            });
            for (const word of [ "AÀ", "E_", "loot", "contents", "random", "isBot", "npc" ]) {
                let at = text.indexOf(word), n = 0;
                while (at >= 0 && n++ < 3) {
                    log("NATIVE REGISTRATION REFERENCE", {
                        kind: kind,
                        term: word,
                        at: start + at,
                        excerpt: text.slice(Math.max(0, at - 220), at + 700)
                    });
                    at = text.indexOf(word, at + word.length);
                }
            }
        }
    };
    const monoCanvases = new Map;
    const /* BRIO: resetMonochrome
     * Restore original canvas inline filters and remove the transient root selector on disable/cleanup.
     */
    resetMonochrome = () => {
        D.documentElement.removeAttribute("data-brio-mono-page");
        for (const [canvas, old] of monoCanvases) {
            canvas.style.filter = old;
            canvas.removeAttribute("data-brio-mono");
        }
        monoCanvases.clear();
    };
    const /* BRIO: syncMonochrome
     * Apply at Play/toggle immediately. Root CSS covers new unmarked canvases until this helper composes their original filter; no MutationObserver or render hook.
     */
    syncMonochrome = enabled => {
        if (!enabled) { resetMonochrome(); return; }
        D.documentElement.setAttribute("data-brio-mono-page", "");
        for (const canvas of D.querySelectorAll("canvas:not(#playerPreview)")) {
            if (monoCanvases.has(canvas)) continue;
            const old = canvas.style.filter;
            monoCanvases.set(canvas, old);
            canvas.style.filter = (old && old !== "none" ? old + " " : "") + "grayscale(1)";
            canvas.setAttribute("data-brio-mono", "");
        }
    };
    const featureNodes = new Map, featureRestore = [], featureEx = {
        value: extrasState(),
        at: -Infinity
    }, indicatorStats = {}, humanLabels = new Map;
    const /* BRIO: exFast
     * Cache Extras briefly for drawable callbacks; do not repeatedly parse storage for each node within a frame.
     */
    exFast = () => {
        const n = performance.now();
        if (n - featureEx.at > 500) {
            featureEx.value = extrasState();
            featureEx.at = n;
        }
        return featureEx.value;
    }, /* BRIO: nativeNode
     * Create a BRIO-owned drawable compatible with reached native containers, clearly marked to avoid recursive discovery.
     */
    nativeNode = (draw, y = 0) => ({
        "ë": {
            "É": 0,
            "Ä": y
        },
        size: 1,
        opacity: 1,
        A: 0,
        type: "brioFeature",
        visible: true,
        parent: null,
        "âè": [],
        "ÉE": [],
        "Eââ"(ctx, s = 1) {
            try {
                draw(ctx, Number.isFinite(s) && s > 0 ? s : 1);
            } catch (e) {
                if (S.errors.length < 100) S.errors.push("native feature: " + String(e));
            }
        },
        "éa"(ctx, s = 1, alpha = 1) {
            if (alpha <= 0) return;
            ctx.save();
            try {
                ctx.translate(this.ë.É / s, this.ë.Ä / s);
                ctx.globalAlpha = alpha;
                this.Eââ(ctx, s);
            } finally {
                ctx.restore();
            }
        },
        "ÊÈA"() {
            this.parent?.remove?.(this);
            this.parent = null;
        }
    }), /* BRIO: attachFeature
     * Attach one local visual node per entity/key and retain ownership for removal at culling/cleanup.
     */
    attachFeature = (o, key, parent, draw, y = 0) => {
        if (!parent?.add) return;
        let m = featureNodes.get(o);
        if (!m) {
            m = new Map;
            featureNodes.set(o, m);
        }
        if (m.has(key)) return;
        const n = nativeNode(draw, y);
        parent.add(n);
        m.set(key, n);
    }, featureRing = (ctx, r, s, color) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, 0, r / s, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3 / s;
        ctx.stroke();
        ctx.restore();
    }, /* BRIO: resetFeatures
     * Remove attached feature nodes, undo descriptor/opacity/monochrome adapters and reset only per-match feature caches.
     */
    resetFeatures = () => {
        resetMonochrome();
        for (const m of featureNodes.values()) for (const n of m.values()) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        featureNodes.clear();
        S.shieldHeights = new WeakSet;
        while (featureRestore.length) try {
            featureRestore.pop()();
        } catch (_) {}
        featureEx.at = -Infinity;
        for (const k of Object.keys(indicatorStats)) delete indicatorStats[k];
    }, /* BRIO: lockOpacity
     * Use a local opacity adapter with restoration. Keep native geometry and preserve original descriptor semantics.
     */
    lockOpacity = (node, key, value) => {
        if (!node || featureRestore.some(x => x.node === node)) return;
        const d = Object.getOwnPropertyDescriptor(node, "opacity");
        if (d && !d.configurable) return;
        let v = node.opacity;
        Object.defineProperty(node, "opacity", {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() {
                return exFast()[key] ? value : v;
            },
            set(x) {
                v = x;
            }
        });
        const restore = () => {
            if (d) Object.defineProperty(node, "opacity", d); else {
                delete node.opacity;
                node.opacity = v;
            }
        };
        restore.node = node;
        featureRestore.push(restore);
    }, /* BRIO: featurePlayer
     * Preserve proven bars/numbers/names/invisibility and low-health outline. High contrast remains optional/deferred, outside the required test surface.
     */
    featurePlayer = r => {
        if (!r?.Eâ) return;
        const e = exFast();
        if (!isLocal(r)) {
            const shield = r["AÃå"], hp = r["æÄ"];
            if (shield && hp && !S.shieldHeights?.has(shield)) {
                const d = Object.getOwnPropertyDescriptor(shield, "height");
                if (!d || d.configurable) {
                    let native = shield.height;
                    Object.defineProperty(shield, "height", {
                        configurable: true,
                        enumerable: d?.enumerable ?? true,
                        get: () => exFast().healthBars || exFast().numericHealthShield ? hp.height : native,
                        set: v => {
                            native = v;
                        }
                    });
                    (S.shieldHeights || (S.shieldHeights = new WeakSet)).add(shield);
                    featureRestore.push(() => {
                        if (d) {
                            Object.defineProperty(shield, "height", d);
                            if ("value" in d && d.writable) shield.height = native;
                        } else {
                            delete shield.height;
                            shield.height = native;
                        }
                    });
                }
            }
            if (e.numericHealthShield) for (const [key, field] of [ [ "æÄ", "åÈ" ], [ "AÃå", "Â$" ] ]) {
                const bar = r[key];
                if (bar?.add) attachFeature(r, "number:" + key, bar, (ctx, s) => {
                    if (!exFast().numericHealthShield) return;
                    const val = r[field], w = Math.abs(Number(bar.width)) / s, h = Math.abs(Number(bar.height)) / s;
                    if (!Number.isFinite(val) || !(w > 2 / s && h > 2 / s)) return;
                    const text = String(Math.round(val));
                    ctx.save();
                    try {
                        ctx.beginPath();
                        ctx.rect(-w / 2 + 1 / s, -h / 2 + 1 / s, w - 2 / s, h - 2 / s);
                        ctx.clip();
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillStyle = "#000";
                        ctx.strokeStyle = "#fff";
                        ctx.lineWidth = 2 / s;
                        ctx.lineJoin = "round";
                        let size = Math.min(10 / s, h - 2 / s);
                        ctx.font = "bold " + size + "px Arial";
                        const tw = ctx.measureText(text).width;
                        if (tw > w - 4 / s) {
                            size *= (w - 4 / s) / tw;
                            ctx.font = "bold " + size + "px Arial";
                        }
                        if (size >= 3 / s) {
                            ctx.strokeText(text, 0, 0);
                            ctx.fillText(text, 0, 0);
                        }
                    } finally {
                        ctx.restore();
                    }
                });
            }
            if (e.highContrastPlayers) attachFeature(r, "player", r.Eâ, (ctx, s) => {
                if (exFast().highContrastPlayers) featureRing(ctx, 55, s, "#ffea00");
            });
        }
        // V48 applies the existing separate outline to local + visible remote HP with one strict threshold.
        // Proven health/shield number and bar appearance is unchanged.
        if (e.lowHealthWarning) attachFeature(r, "warning", r.Eâ, (ctx, s) => {
            if (!belowWarning(exFast(),"health",0,r["åÈ"])) return;
            ctx.save();
            ctx.shadowColor = "#ff2020";
            ctx.shadowBlur = 12 / s;
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
            featureRing(ctx, 65, s, "#ff2020");
            ctx.restore();
        });
    }, /* BRIO: featureWorld
     * Only retained world modifiers: chest/crate hiding, transparent canopy and known loot-glow removal. Retired labels/radius/highlight/opaque foliage have no callbacks.
     */
    featureWorld = o => {
        const e = exFast();
        if (![ "noChestsVisible", "transparentFoliage", "cleanLoot" ].some(k => e[k])) return;
        const tag = String(o["Àâ"] || ""), rs = resourceSlots(o), root = o["â"];
        if (e.noChestsVisible && (o.type === "chest" || [ "ammocrate", "grenadecrate" ].includes(tag))) lockOpacity(root, "noChestsVisible", 0);
        const foliage = /^(?:tree\d*|jungletree|cherryblossom|bush\d*|grass\d*)$/i.test(tag);
        if (foliage) {
            if (e.transparentFoliage) lockOpacity(o["ÄA"] || root, "transparentFoliage", .25);
        }
        if (e.cleanLoot && [ "gun", "ammo" ].includes(o.type)) for (const x of rs) if (/(?:flareglow|glow|sparkle)/i.test(x.path)) for (const v of Object.values(o)) if (v && v["À"] === x.w) lockOpacity(v, "cleanLoot", 0);
    }, /* BRIO: featureTick
     * Maintain reached visuals and bounded HUD coverage/slot state. Monochrome startup does not depend on this two-second timer.
     */
    featureTick = () => {
        try {
            if (S.renderer && performance.now() - (S.hudLastReport || -Infinity) > 15e3) {
                S.hudLastReport = performance.now();
                const status = S.hudStatus || {
                    captured: false
                };
                log("NATIVE HUD CAPTURE STATUS", {
                    ...status,
                    ownWarningBindings: S.hudWarnNodes?.size || 0,
                    renderedArrays: renderArrays.size,
                    discoveryActive: !!renderDiscovery,
                    approximationFallback: !status.counts || status.counts.slots < 5 || status.counts.materials < 4 || status.counts.ammo < 5,
                    note: "V47 inventory appearance proven; capture coverage and fallback remain explicit. V48 warning boundaries/charges need live verification."
                });
            }
            if (S.renderer && !S.meteorAutoTimer && (extrasState().permanentMeteor || extrasState().lowMatsWarning || extrasState().lowAmmoWarning)) meteorAutoStart("feature watchdog");
            featureEx.value = extrasState();
            featureEx.at = performance.now();
            ownMaterialWarnings();
            const slotState = (S.hudTemplates?.slots || []).map(rec => ({slot: rec.slotIndex, type: S.renderer?.["Åé"]?.[rec.slotIndex]?.type, ammo: nativeSlotAmmo(S.renderer, rec.slotIndex, rec) ?? null, selected: S.renderer?.["ÈÆ"] === rec.slotIndex, ammoType: nativeSlotAmmoIndex(S.renderer, rec.slotIndex, rec) ?? null, threshold: featureEx.value.warningThresholds.ammo[nativeSlotAmmoIndex(S.renderer, rec.slotIndex, rec)] ?? null, low: nativeSlotLow(featureEx.value, S.renderer, rec.slotIndex, rec)}));
            const slotSignature = J(slotState);
            if (slotSignature !== S.slotWarningLast && (S.slotWarningLogs || 0) < 40) {S.slotWarningLast = slotSignature; S.slotWarningLogs = (S.slotWarningLogs || 0) + 1; log("GUN SLOT WARNING STATE", {epoch: S.runEpoch, slots: slotState, threshold: "strict per-type saved thresholds; native loaded+reserve, grappler/flare charges only; unknown/non-guns excluded"});}
            const e = featureEx.value;
            for (const r of collectPlayers()) featurePlayer(r);
            const world = collectWorld(), live = new Set([ ...collectPlayers(), ...world ]);
            for (const [r, c] of S.nativeInvClones || []) if (!live.has(r)) {
                for (const row of c.rows) for (const u of row.units) try {
                    u.root["ÊÈA"]?.();
                } catch (_) {}
                S.nativeInvClones.delete(r);
            }
            for (const o of world) featureWorld(o);
            for (const [o, m] of featureNodes) if (!live.has(o)) {
                for (const n of m.values()) try {
                    n.parent?.remove?.(n);
                } catch (_) {}
                featureNodes.delete(o);
            }
            syncMonochrome(!!e.monochrome);
        } catch (e) {
            log("FEATURE ERROR", String(e));
        }
    }, indicatorReport = (kind, target, reason, d) => {
        const prev = indicatorStats[kind], now = performance.now(), key = reason + ":" + (target?.id ?? "");
        if (!prev || prev.key !== key || now - prev.at > 1e4) {
            indicatorStats[kind] = {
                key: key,
                at: now,
                target: target?.id ?? null,
                reason: reason,
                distanceUnits: Number.isFinite(d) ? Math.round(d) : null,
                meters: Number.isFinite(d) ? Math.round(d / 10) / 10 : null
            };
            log("INDICATOR STATE", {
                kind: kind,
                ...indicatorStats[kind]
            });
        }
    }, validTarget = o => !!(o && !o["Äã"] && worldPos(o) && o["â"]?.visible !== false && o["â"]?.opacity !== 0), showIndicator = (kind, key, target, label, color, margin) => {
        const u = ensureArrow(key, color), me = worldPos(S.renderer), p = worldPos(target), sp = projectWorld(p);
        if (!target || !me || !p || !sp) {
            u.style.display = "none";
            indicatorReport(kind, target, !target ? "no active target" : "native transform unavailable");
            return;
        }
        const box = sp.rect, on = sp.x >= box.left && sp.x <= box.left + box.width && sp.y >= box.top && sp.y <= box.top + box.height, d = Math.hypot(p.x - me.x, p.y - me.y);
        if (on) {
            u.style.display = "none";
            indicatorReport(kind, target, "target on-screen", d);
            return;
        }
        placeArrow(u, sp.x - (box.left + box.width / 2), sp.y - (box.top + box.height / 2), d, label, margin, box);
        indicatorReport(kind, target, "off-screen arrow", d);
    }, nearestV40 = () => {
        try {
            const e = exFast();
            if (!e.nearestPlayer) {
                if (S.nearestUi) S.nearestUi.style.display = "none";
                return;
            }
            const active = collectPlayers().filter(r => !isLocal(r) && validTarget(r));
            for (const r of active) attachTrack(r);
            const me = worldPos(S.renderer);
            active.sort((a, b) => {
                const p = worldPos(a), q = worldPos(b);
                return me ? Math.hypot(p.x - me.x, p.y - me.y) - Math.hypot(q.x - me.x, q.y - me.y) : 0;
            });
            showIndicator("player", "nearestUi", active[0], e.nearestPlayerName ? active[0]?.["Ée"] || "" : "", "#a81020", 90);
        } catch (e) {
            log("PLAYER INDICATOR ERROR", String(e));
        }
    }, indicatorsV40 = () => {
        try {
            const e = exFast();
            for (const [k, pred, label, key, margin, color] of [ [ "nearestChest", o => o.type === "chest", "", "chestUi", 165, "#ffd21c" ], [ "nearestAirdrop", o => o.type === "airdrop" || o["Àâ"] === "airdrop", "", "airdropUi", 240, "#f28b16" ] ]) if (e[k]) showIndicator(k, key, nearestBy(o => validTarget(o) && pred(o)), label, color, margin); else if (S[key]) S[key].style.display = "none";
        } catch (e) {
            log("WORLD INDICATOR ERROR", String(e));
        }
    }, runtimeV40 = () => {
        const r = S.renderer;
        if (!r) return;
        const players = collectPlayers().filter(x => !isLocal(x)), world = collectWorld();
        log("PASSIVE RUNTIME COVERAGE", {
            activePlayers: players.length,
            worldObjects: world.length,
            worldKinds: [ ...new Set(world.map(x => x.type + ":" + (x["Àâ"] || x["Ée"] || ""))) ].slice(0, 60),
            magazine: r["áAæ"],
            features: Object.fromEntries([ ...featureNodes.values() ].flatMap(m => [ ...m.keys() ]).reduce((m, k) => m.set(k, (m.get(k) || 0) + 1), new Map)),
            indicators: indicatorStats,
            knownHumansThisLog: [ "current local renderer only" ],
            note: "Prior remote names/IDs are not current labels or classifiers"
        });
        for (const x of players.slice(0, 3)) log("REMOTE HUD SAMPLE", {
            id: x.id,
            name: x["Ée"],
            health: x["åÈ"],
            shield: x["Â$"],
            materials: matState(x),
            slot: x["ÈÆ"],
            magazine: x["áAæ"],
            ammo: x["åæ"],
            inventory: Array.isArray(x["Åé"]) ? x["Åé"].map(v => v ? {
                type: v.type,
                rarity: v["äã"]
            } : null) : null
        });
    };
    const reconCoverage = new Map; let reconObjects = new WeakSet;
    const reconContainersSeen = new Map, reconRemoved = new Set, reconMarkers = [], reconRestore = [], reconNow = {
        source: false,
        sourceUrl: "",
        captures: 0
    }, reconGroups = [ [ "meteor / permanentMeteor", /createWaypoint|ping-meteor-icon|ping-meteor/g ], [ "screenChests / screenAirdrops / screenFishing", /ammocrate|grenadecrate|legendarychest|bubbles|airdrop/g ], [ "HUD challenges / customCrosshair", /Minimap|crosshair|reticle|inventory|healthbar|shieldbar/g ], [ "storm modifiers / invisibleStorm", /movingIcon|circle|safezone|storm/g ], [ "transparentFoliage", /darktree|cherryblossom|tree0|grass0|bush/g ], [ "cleanLoot", /flareglow|glow|rarity|gunType/g ], [ "health / ammo / mats warnings / numericHealthShield", /fullHealth|weaponSlots|selectedWeapon|shield|mats|ammo/g ], [ "player indicators / highContrastPlayers", /playerCount|setID|playerNames|name/g ] ];
    const nativeAssetAudit = src => {
        const paths = S.hudAssetPaths || (S.hudAssetPaths = new Map);
        for (const m of src.matchAll(/["']([^"']{1,60})["']\s*:\s*["']((?:\.?\/)?buildart\/[^"']+\.png)["']/g)) if (paths.size < 2400) { paths.set(m[1], norm(m[2])); paths.set(m[1].toLowerCase(), norm(m[2])); }
        log("NATIVE HUD ASSET MAP", {
            count: paths.size,
            assets: [ ...paths ].filter(([k, v]) => /inv|ammo|wood|brick|metal|gear|scrap/.test(k)).slice(0, 80)
        });
        for (const term of [ "ÁæÆ", "inventoryammo", '"inv"', '"lobby"', "Å.À$", "ãÂÆ=", "Å.áÉâ", '"setID"', '"circle"', '"droid"', '"wander"', '"seed"', '"loot"' ]) {
            let at = src.indexOf(term, term === "inventoryammo" ? 23e4 : 0);
            if (at >= 0) log("V48 NATIVE SOURCE", {
                term: term,
                at: at,
                excerpt: src.slice(Math.max(0, at - 800), at + 8e3),
                note: "Read-only candidate; no source evaluation/protocol mutation."
            });
        }
    };
    const /* BRIO: reconSource
     * Collect bounded targeted source excerpts for remaining roadmap routes; no removed feature needs an active test flag.
     */
    reconSource = async () => {
        try {
            const urls = [ ...D.scripts ].map(x => x.src).filter(x => {
                try {
                    const u = new URL(x);
                    return u.origin === location.origin && /\/js\/[^/]+\.js$/.test(u.pathname);
                } catch (_) {
                    return false;
                }
            }), url = urls.find(x => /uOfrVi\.js/.test(x)) || urls.at(-1) || new URL("/js/uOfrVi.js", location.href).href;
            const controller = new AbortController, timeout = setTimeout(() => controller.abort(), 15e3);
            let raw;
            try {
                const r = await fetch(url, {
                    credentials: "same-origin",
                    signal: controller.signal
                });
                if (!r.ok) throw Error("HTTP " + r.status);
                raw = await r.text();
            } finally {
                clearTimeout(timeout);
            }
            await completeSourceAudit(raw, url);
            const src = raw.replace(/\\x([\da-f]{2})|\\u([\da-f]{4})|\\([0-7]{1,3})/gi, (_, a, b, c) => String.fromCharCode(parseInt(a || b || c, c ? 8 : 16)));
            reconNow.source = true;
            reconNow.sourceUrl = url;
            sourceSchemaAudit(src);
            nativeAssetAudit(src);
            botSourceAudit(src);
            registrationAudit(src);
            for (const term of [ 'Å.ÃEÅ("gun"', 'Å.ÃEÅ("object"', 'Å.ÃEÅ("spellfield"', 'Å.æÊÈ("circle"', "äèä=", "crosshair", "minimap" ]) {
                const at = src.indexOf(term, 23e4);
                if (at >= 0) log("TARGETED FEATURE SOURCE", {
                    term: term,
                    at: at,
                    excerpt: src.slice(Math.max(0, at - 250), at + 7e3)
                });
            }
            log("SOURCE LOADED", {
                url: url,
                length: raw.length,
                note: "source excerpts are candidates; no source code executed"
            });
            for (const [label, re] of reconGroups) {
                const matches = [];
                let m;
                while ((m = re.exec(src)) && matches.length < 1e3) matches.push({
                    at: m.index,
                    term: m[0]
                });
                const runtime = matches.filter(x => x.at > 18e4), chosen = runtime.filter((x, i, a) => !i || x.at - a[i - 1].at > 1e3).slice(0, 3);
                log("PASSIVE SOURCE SURFACE", {
                    label: label,
                    total: matches.length,
                    runtimeCandidates: runtime.length,
                    examples: chosen.map(x => ({
                        at: x.at,
                        term: x.term,
                        excerpt: src.slice(Math.max(0, x.at - 700), x.at + 1200)
                    }))
                });
            }
            const at = src.indexOf('"createWaypoint"');
            if (at >= 0) log("WAYPOINT HANDLER SOURCE", {
                at: at,
                excerpt: src.slice(at - 100, at + 5500)
            });
            log("RECON COVERAGE", {
                planned: EXTRA.challenges.concat(EXTRA.modifiers).filter(x => x[0]).map(x => ({
                    id: x[0],
                    status: statusOf(x[0]),
                    enabled: !!extrasState()[x[0]],
                    probe: "native runtime state + bounded source/asset candidates; feasibility unresolved unless green"
                })),
                screening: "always-visible pre-open contents above every detected container requested; authoritative contents unresolved; native proximity labels are not screening",
                cssSurfaces: [ "monochrome", "flashlightMode", "customCrosshair" ],
                note: "No hits does not establish impossibility"
            });
        } catch (e) {
            log("SOURCE RECON ERROR", String(e));
        }
    };
    const reconDom = label => {
        const nodes = [ ...D.querySelectorAll("[id]") ].filter(x => /map|cross|health|shield|inventory|ammo|hud|canvas|game/i.test(x.id) && !x.closest(".brioModal,.brioTerm")).slice(0, 45);
        log("HUD DOM CANDIDATES", {
            label: label,
            nodes: nodes.map(x => {
                const r = x.getBoundingClientRect();
                return {
                    id: x.id,
                    tag: x.tagName,
                    width: Math.round(r.width),
                    height: Math.round(r.height)
                };
            }),
            canvases: [ ...D.querySelectorAll("canvas") ].slice(0, 12).map(c => ({
                id: c.id,
                width: c.width,
                height: c.height,
                connected: c.isConnected
            }))
        });
    };
    const reconAdded = o => {
        if (!o || reconObjects.has(o) || !isWorld(o)) return;
        reconObjects.add(o);
        const tag = String(o["Àâ"] ?? o["Ée"] ?? o["ÄæÅ"] ?? ""), key = o.type + ":" + (tag || resourceSlots(o).map(x => x.path).join("|")), n = reconCoverage.get(key) || 0;
        reconCoverage.set(key, n + 1);
        if (n < 1 && reconCoverage.size < 100) log("PASSIVE NATIVE OBJECT", {
            key: key,
            id: o.id,
            fields: shallowState(o),
            resources: resourceSlots(o).map(x => x.path),
            note: "identity/state only; no contents attribution"
        });
    };
    const reconRuntime = () => {
        try {
            const r = S.renderer;
            if (!r) return;
            const cur = {
                magazine: r["áAæ"],
                health: r["åÈ"],
                shield: r["Â$"],
                slot: r["ÈÆ"],
                materials: matState(r),
                ammo: r["åæ"],
                inventory: Array.isArray(r["Åé"]) ? r["Åé"].map(x => x ? {
                    type: x.type,
                    rarity: x["äã"]
                } : null) : null
            };
            const key = JSON.stringify(cur);
            if (key !== reconNow.last) {
                reconNow.last = key;
                if ((reconNow.stateLogs || 0) < 25) {
                    reconNow.stateLogs = (reconNow.stateLogs || 0) + 1;
                    log("LOCAL HUD STATE", cur);
                }
            }
        } catch (e) {
            log("HUD RECON ERROR", String(e));
        }
    };
    const reconKind = o => {
        const p = resourceSlots(o).map(x => x.path).join(" "), v = [ o.type, o["Àâ"], o["ÄæÅ"], o["ÆåÃ"], p ].join(" ").toLowerCase();
        if (fishingPred(o)) return "fishing";
        if (airdropPred(o)) return "airdrop";
        if (/legendarychest/.test(v)) return "legendaryChest";
        if (o.type === "chest" || /chest(?:under)?\.png/.test(v)) return "chest";
        if (/grenadecrate|nadecrate/.test(v)) return "grenadeCrate";
        if (/ammocrate|ammobox/.test(v)) return "ammoCrate";
        return null;
    }, reconDeep = o => {
        const out = {}, seen = new Set;
        function walk(v, p, d) {
            if (!v || typeof v !== "object" || d > 3 || seen.has(v) || v === W || v === D || v instanceof Node || ArrayBuffer.isView(v) || seen.size > 120) return;
            seen.add(v);
            for (const k of Object.keys(v).slice(0, 50)) {
                if ([ "parent", "owner", "stage", "game", "ÁÄ" ].includes(k)) continue;
                let x;
                try {
                    x = v[k];
                } catch (_) {
                    continue;
                }
                const n = p + "." + k;
                if ([ "string", "number", "boolean" ].includes(typeof x)) {
                    if (typeof x !== "string" || x.length < 160) out[n] = x;
                } else if (Array.isArray(x) && x.length < 17 && x.every(y => [ "string", "number", "boolean" ].includes(typeof y))) out[n] = x.slice(); else if (x && typeof x === "object") walk(x, n, d + 1);
                if (Object.keys(out).length >= 150) return;
            }
        }
        walk(o, "$", 0);
        return Object.fromEntries(Object.entries(out).filter(([k]) => !/^\$\.(?:â|ÄA|æÄ|aAå|áãá|eÅé|new|Âä|áÆ|ëa|Åaá)(?:\.|$)/.test(k) && !/^\$\.(?:æëÃ|ÀÁ|cos)$/.test(k)));
    }, /* BRIO: reconContainers
     * Observe first/changed/removed container lifecycle metadata. Never infer NONE or contents from nearby drops or culling.
     */
    reconContainers = () => {
        try {
            const world = collectWorld(), live = new Set(world.map(o => o.id));
            for (const o of world) {
                const kind = reconKind(o);
                if (!kind) continue;
                const fields = reconDeep(o), fingerprint = J(fields), old = reconContainersSeen.get(o.id);
                if (!old && reconContainersSeen.size < 80) {
                    reconContainersSeen.set(o.id, {
                        kind: kind,
                        fingerprint: fingerprint,
                        position: worldPos(o),
                        changes: 0
                    });
                    log("PASSIVE CONTAINER BASE", {
                        id: o.id,
                        kind: kind,
                        position: worldPos(o),
                        fields: fields,
                        resources: resourceSlots(o).map(x => x.path),
                        note: "automatic sample; no manual probe needed"
                    });
                } else if (old && fingerprint !== old.fingerprint) {
                    old.fingerprint = fingerprint;
                    if (old.changes++ < 2) log("PASSIVE CONTAINER CHANGE", {
                        id: o.id,
                        kind: kind,
                        fields: fields
                    });
                }
            }
            for (const [id, old] of reconContainersSeen) if (!live.has(id) && !reconRemoved.has(id)) {
                reconRemoved.add(id);
                const p = old.position;
                log("PASSIVE CONTAINER REMOVED", {
                    id: id,
                    kind: old.kind,
                    nearbyLoot: world.filter(o => [ "gun", "ammo" ].includes(o.type)).map(o => ({
                        o: o,
                        p: worldPos(o)
                    })).filter(x => p && x.p && Math.hypot(x.p.x - p.x, x.p.y - p.y) < 500).slice(0, 20).map(x => ({
                        id: x.o.id,
                        type: x.o.type,
                        fields: shallowState(x.o),
                        position: x.p
                    })),
                    note: "correlation only; removal may be range/lifecycle, nearby loot may predate removal; no NONE inference"
                });
            }
        } catch (e) {
            log("CONTAINER RECON ERROR", String(e));
        }
    };
    const restoreMarkerCapture = () => {
        const h = S.markerCapture;
        if (!h) return;
        if (Array.prototype.push === h.p) Array.prototype.push = h.op;
        if (Array.prototype.unshift === h.u) Array.prototype.unshift = h.ou;
        clearTimeout(h.timer);
        S.markerCapture = null;
    }, /* BRIO: restoreMarkerHolds
     * Restore retention descriptors before detaching retained old nodes; weakly retire their identities to prevent stale recapture.
     */
    restoreMarkerHolds = () => {
        meteorAutoStop();
        S.meteorSeen = new WeakSet;
        S.meteorPending = new WeakSet;
        S.sceneRoots?.clear();
        S.sceneQueue = [];
        S.sceneQueueAt = 0; S.sceneQueueSeen = new WeakSet; S.sceneScan = null;
        restoreMarkerCapture();
        const oldMarkers = reconMarkers.slice();
        while (reconRestore.length) try {
            reconRestore.pop()();
        } catch (e) {
            S.errors.push("marker restore: " + String(e));
        }
        for (const {node, parent} of oldMarkers) {
            (S.retiredMarkers || (S.retiredMarkers = new WeakSet)).add(node);
            if (node.icon) S.retiredMarkers.add(node.icon);
            try { parent.remove?.(node); if (node.parent && node.parent !== parent) node.parent.remove?.(node); } catch (e) {S.errors.push("marker detach: " + String(e));}
        }
        if (oldMarkers.length) log("OLD MATCH METEORS REMOVED", {count: oldMarkers.length, epoch: S.runEpoch});
        reconMarkers.length = 0;
    };
    const /* BRIO: holdMeteor
     * Hold fresh native marker expiry/removal only in its captured epoch. Next Play cleanup detaches it before new discovery.
     */
    holdMeteor = (node, array) => {
        const epoch = S.runEpoch;
        queueMicrotask(() => {
            try {
                S.meteorPending?.delete(node);
                if (S.destroyed || epoch !== S.runEpoch || !extrasState().permanentMeteor || S.meteorSeen?.has(node)) return;
                const parent = node.parent;
                if (!parent || typeof parent.remove !== "function") {
                    log("METEOR NATIVE CAPTURE", {
                        parentFound: false,
                        keys: Object.keys(node),
                        arrayLength: array.length
                    });
                    return;
                }
                (S.meteorSeen || (S.meteorSeen = new WeakSet)).add(node);
                const record = {
                    node: node,
                    parent: parent,
                    attempts: 0,
                    opacityWrites: 0,
                    destroyAttempts: 0
                };
                reconMarkers.push(record);
                const desc = Object.getOwnPropertyDescriptor(parent, "remove"), orig = parent.remove, wrap = function(child, ...a) {
                    if (child === node && S.runEpoch === epoch && extrasState().permanentMeteor) {
                        record.attempts++;
                        if (record.attempts <= 3) log("METEOR NATIVE REMOVE BLOCKED", {
                            attempt: record.attempts
                        });
                        return;
                    }
                    return Reflect.apply(orig, this, [ child, ...a ]);
                };
                if (desc && !desc.configurable && !desc.writable) throw Error("native remove cannot be wrapped");
                Object.defineProperty(parent, "remove", {
                    configurable: desc?.configurable ?? true,
                    enumerable: desc?.enumerable ?? true,
                    writable: true,
                    value: wrap
                });
                reconRestore.push(() => {
                    if (parent.remove === wrap) {
                        if (desc) Object.defineProperty(parent, "remove", desc); else delete parent.remove;
                    }
                });
                for (const target of [ node, node.icon ]) {
                    if (!target) continue;
                    const d = Object.getOwnPropertyDescriptor(target, "opacity");
                    if (d && !d.configurable) continue;
                    let v = target.opacity;
                    Object.defineProperty(target, "opacity", {
                        configurable: true,
                        enumerable: d?.enumerable ?? true,
                        get() {
                            return S.runEpoch === epoch && extrasState().permanentMeteor ? 1 : v;
                        },
                        set(x) {
                            v = x;
                            record.opacityWrites++;
                        }
                    });
                    reconRestore.push(() => {
                        if (d) {
                            Object.defineProperty(target, "opacity", d);
                            if ("value" in d && d.writable) target.opacity = v;
                        } else {
                            delete target.opacity;
                            target.opacity = v;
                        }
                    });
                }
                const expiredDesc = Object.getOwnPropertyDescriptor(node, "Äã");
                if (!expiredDesc || expiredDesc.configurable) {
                    let expired = node["Äã"];
                    Object.defineProperty(node, "Äã", {
                        configurable: true,
                        enumerable: expiredDesc?.enumerable ?? true,
                        get: () => S.runEpoch === epoch && extrasState().permanentMeteor ? false : expired,
                        set: v => {
                            expired = v;
                        }
                    });
                    reconRestore.push(() => {
                        if (expiredDesc) {
                            Object.defineProperty(node, "Äã", expiredDesc);
                            if ("value" in expiredDesc && expiredDesc.writable) node["Äã"] = expired;
                        } else {
                            delete node["Äã"];
                            node["Äã"] = expired;
                        }
                    });
                }
                const destroyDesc = Object.getOwnPropertyDescriptor(node, "ÊÈA"), destroy = node["ÊÈA"];
                if (typeof destroy === "function" && (!destroyDesc || destroyDesc.configurable || destroyDesc.writable)) {
                    const dw = function(...a) {
                        if (S.runEpoch === epoch && extrasState().permanentMeteor) {
                            record.destroyAttempts++;
                            return;
                        }
                        return Reflect.apply(destroy, this, a);
                    };
                    node["ÊÈA"] = dw;
                    reconRestore.push(() => {
                        if (node["ÊÈA"] === dw) {
                            if (destroyDesc) Object.defineProperty(node, "ÊÈA", destroyDesc); else delete node["ÊÈA"];
                        }
                    });
                }
                node.visible = true;
                if (node.icon) node.icon.visible = true;
                reconNow.captures++;
                log("METEOR NATIVE HOLD INSTALLED", {
                    position: node["ë"],
                    id: node["èÆÂ"],
                    parentKeys: Object.keys(parent).slice(0, 25),
                    mode: "automatic capture; native retention; verify minimap and full map visually"
                });
            } catch (e) {
                S.errors.push("meteor hold: " + String(e));
                log("METEOR HOLD ERROR", String(e));
            }
        });
    };
    patchButtons();
    renderExtras();
    reconDom("home");
    log("V39 HUMAN GROUND TRUTH", {
        labels: [ {
            id: 953,
            name: "VIRA",
            phase: "lobby",
            maxDistance: 1255
        }, {
            id: 971,
            name: "Yourmomfat.I OWN U KID:)",
            lobbyDistance: 4458,
            matchSamples: 459
        } ],
        scope: "prior match only; no name-based classifier"
    });
    reconSource();
    loadCustom().finally(() => {
        renderLocker();
        bindPlay();
        log("READY", {
            version: S.v,
            nameRule: "prepend uL# at Play; dynamic local capture",
            inventoryScales: INV_SCALE,
            activeTests: REQUIRED_TESTS.map(id => EXTRA.modifiers.find(x => x[0] === id)?.[1] || id),
            inventoryArt: "native invN slot backgrounds from captured HUD traces",
            lobbyProbe: "Native local gliding state or decoded circle waiting/moving separates lobby and match automatically",
            meteor: "automatic native waypoint capture · testing; retention visually verified in V40"
        });
    });
})();
