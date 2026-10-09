/* BRIO v53 maintenance map — 2026-10-09
 * V53 repairs nested inventory/damage leaks and hot paths; spread uses measured samples, never guessed units. User confirms build/object outline colors and stats baseline; changed routes remain live-pending.
 * Hell is the composite title; saved goodFlippinLuck/noMinimap IDs remain compatible.
 * Damage rankings are unavailable; spread angle interpretation requires live calibration.
 * V49 user proves warnings (including selected-slot lift), transparent foliage and loot effect suppression.
 * Meteor, monochrome, indicators, cosmetics and chest hiding retain proof; no recurring tests for them.
 * V50 changes warning controls/reset only, remote inventory captions/size, tiered loot/build masking,
 * remote held-item/trail hiding and independent/composite HUD challenges. Those new visuals are live-pending.
 * Standalone cleanLoot is retired from UI, retained internally as the proven Mask rarity effect adapter.
 * Contents must eventually be visible above every detected container, independent of proximity.
 * Current client/source/packet evidence has no authoritative loot list; no fake label/popup/NONE/classifier.
 * See docs/status/v53-status.md and docs/audits/v53-source-map.md for proof state and block/helper locations.
 * A. Home UI/settings/custom cache; B. native resources/cosmetic adapters;
 * C. player/world discovery; D. HUD acquisition and remote inventory presentation;
 * E. arrows/warnings; F. ordinary-Play epoch lifecycle; G. passive source/payload evidence;
 * H. local feature drawables/monochrome; I. scoped scene/meteor retention; J. startup/destroy.
 * Search stable "BRIO: helperName" and nested "BRIO block/branch" anchors for targeted edits.
 * tests/regression.cjs retains established dependencies; tests/challenges.cjs exercises new reversible paths.
 * Do not edit the vendored Acorn parser below: it parses source DATA and has an external MIT notice.
 * Native key guide: ë.{É,Ä}=position; âè/ÉE=child arrays; À.{src,ÁÄ}=image resource;
 * éa/Eââ=native draw entry points; Åé=weapon slots incl pickaxe index0; ÈÆ=selected slot;
 * áAæ=loaded ammo by slot-1; åæ=reserve ammo by type; ÊÃÄ=material counts;
 * åÈ/Â$=health/shield; Àâ=world subtype; ÀËá/âëä=local gliding ticks/max ticks.
 * Protocol x/y/z=create/update/remove. Observe native decode return; never encode/send/mutate packets.
 * Preserve V45 X primitive/native artwork; V50 intentionally enlarges remote slots/materials to the ammo strip.
 * Hell derives effective challenge values without erasing saved modifiers/tiers; visual-only
 * monochrome/flashlight are excluded. Detached trail particles have no owner, so this challenge hides all trails.
 * Saved choices/custom cache persist; native references/hooks/nodes reset at normal Play.
 * Any async/deferred capture must check runEpoch before mutation and again after awaits.
 * Source comments are authoring aids only: tools/build.cjs enforces ZERO comments in dist/archive.
 */
(() => { /* BRIO block: startup — Own this injection; destroy prior releases before creating UI or native adapters. Saved choices survive; per-Play game state does not. */
    "use strict";
    const W = window, D = document, K = "__brio_unlocker_v53";
    for (const k of [ K, "__brio_unlocker_v52", "__brio_unlocker_v51", "__brio_unlocker_v50", "__brio_unlocker_v49", "__brio_unlocker_v48", "__brio_unlocker_v47", "__brio_unlocker_v46", "__brio_unlocker_v45", "__brio_unlocker_v44", "__brio_unlocker_v43", "__brio_unlocker_v42", "__brio_unlocker_v41", "__brio_unlocker_v40", "__brio_unlocker_v39", "__brio_recon38", "__brio_unlocker_v37", "__brio_unlocker_v36", "__brio_unlocker_v35", "__brio_unlocker_v33", "__brio_unlocker_v32", "__brio_unlocker_v31", "__brio_unlocker_v30", "__brio_unlocker_v29", "__brio_unlocker_v28", "__brio_unlocker_v27" ]) try { /* BRIO guarded: startup — Keep the existing exception boundary for startup. Own the injection lifecycle; native state is restored at the next Play or destroy. */
        W[k]?.destroy?.();
    } catch (_) { /* BRIO fallback: startup — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
    // Acorn 8.19.0 (MIT), vendored locally; parses source data without evaluation.
    const parseNative = (() => { /* BRIO block: parseNative — Load the unchanged audited Acorn parser locally. It parses fetched source as DATA and exposes only parse; the supplied engine is never evaluated. */  const exports = {}, module = {exports};
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports):typeof define==="function"&&define.amd?define(["exports"],t):(e=typeof globalThis!=="undefined"?globalThis:e||self,t(e.acorn={}))})(this,function(e){"use strict";var t=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,7,9,32,4,318,1,31,4,33,15,71,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,3,0,158,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,68,8,2,0,3,0,2,3,2,4,2,0,15,1,83,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,7,19,58,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,199,7,137,9,54,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,55,9,7,0,259,3,10,1,2,0,49,6,4,4,14,10,5350,0,7,14,11465,27,2343,9,87,9,39,4,60,6,26,9,535,9,470,0,2,54,8,3,82,0,12,1,19628,1,4178,9,519,45,3,22,481,1,61,4,4,5,9,7,3,6,31,3,149,2,12,2,9,1,3,0,33,1,1357,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,101,0,161,6,10,9,357,0,62,13,499,13,245,1,2,9,233,0,3,0,8,1,6,0,475,6,110,6,6,9,4759,9,787719,239];var i=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,4,51,13,310,10,21,11,7,25,5,2,41,2,13,65,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,7,25,39,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,39,27,10,22,251,41,7,1,17,5,18,21,18,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,20,1,64,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,31,9,2,0,3,0,2,37,2,0,26,0,2,0,45,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,18,0,182,32,32,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,24,43,22,0,239,18,16,0,2,12,2,33,125,0,80,921,103,111,6,206,13,310,2314,96,16,1071,18,5,26,3994,6,582,6842,29,1763,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,433,44,212,63,33,24,3,24,45,74,6,0,67,12,65,1,2,0,15,4,10,7386,37,33,96,114,14,913,15,50,7710,3,2,6,2,1,2,296,10,0,30,2,3,0,15,4,8,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,340,2,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,129,15,6,55,50,49,61,147,44,11,6,17,0,322,29,19,43,485,27,229,29,3,0,208,30,2,2,2,1,2,6,3,4,10,1,225,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4382,2,5773,3,7472,16,621,2467,541,1507,4938,6,8489,39815,11327];var s="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄ-׉ؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୓-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫰ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";var r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆ՘ՙՠ-ֈ֋֌א-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿ₏-₟ℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-꟝꟢꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩ꭬꭭ꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";var a={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"};var n="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var o={5:n,"5module":n+" export import",6:n+" const class extends export import super"};var h=/^in(stanceof)?$/;var p=new RegExp("["+r+"]");var u=new RegExp("["+r+s+"]");function l(e,t){var i=65536;for(var s=0;s<t.length;s+=2){i+=t[s];if(i>e){return false}i+=t[s+1];if(i>=e){return true}}return false}function c(e,t){if(e<65){return e===36}if(e<91){return true}if(e<97){return e===95}if(e<123){return true}if(e<=65535){return e>=170&&p.test(String.fromCharCode(e))}if(t===false){return false}return l(e,i)}function f(e,s){if(e<48){return e===36}if(e<58){return true}if(e<65){return false}if(e<91){return true}if(e<97){return e===95}if(e<123){return true}if(e<=65535){return e>=170&&u.test(String.fromCharCode(e))}if(s===false){return false}return l(e,i)||l(e,t)}var d=function e(t,i){if(i===void 0)i={};this.label=t;this.keyword=i.keyword;this.beforeExpr=!!i.beforeExpr;this.startsExpr=!!i.startsExpr;this.isLoop=!!i.isLoop;this.isAssign=!!i.isAssign;this.prefix=!!i.prefix;this.postfix=!!i.postfix;this.binop=i.binop||null;this.updateContext=null};function m(e,t){return new d(e,{beforeExpr:true,binop:t})}var v={beforeExpr:true},g={startsExpr:true};var x={};function y(e,t){if(t===void 0)t={};t.keyword=e;return x[e]=new d(e,t)}var b={num:new d("num",g),regexp:new d("regexp",g),string:new d("string",g),name:new d("name",g),privateId:new d("privateId",g),eof:new d("eof"),bracketL:new d("[",{beforeExpr:true,startsExpr:true}),bracketR:new d("]"),braceL:new d("{",{beforeExpr:true,startsExpr:true}),braceR:new d("}"),parenL:new d("(",{beforeExpr:true,startsExpr:true}),parenR:new d(")"),comma:new d(",",v),semi:new d(";",v),colon:new d(":",v),dot:new d("."),question:new d("?",v),questionDot:new d("?."),arrow:new d("=>",v),template:new d("template"),invalidTemplate:new d("invalidTemplate"),ellipsis:new d("...",v),backQuote:new d("`",g),dollarBraceL:new d("${",{beforeExpr:true,startsExpr:true}),eq:new d("=",{beforeExpr:true,isAssign:true}),assign:new d("_=",{beforeExpr:true,isAssign:true}),incDec:new d("++/--",{prefix:true,postfix:true,startsExpr:true}),prefix:new d("!/~",{beforeExpr:true,prefix:true,startsExpr:true}),logicalOR:m("||",1),logicalAND:m("&&",2),bitwiseOR:m("|",3),bitwiseXOR:m("^",4),bitwiseAND:m("&",5),equality:m("==/!=/===/!==",6),relational:m("</>/<=/>=",7),bitShift:m("<</>>/>>>",8),plusMin:new d("+/-",{beforeExpr:true,binop:9,prefix:true,startsExpr:true}),modulo:m("%",10),star:m("*",10),slash:m("/",10),starstar:new d("**",{beforeExpr:true}),coalesce:m("??",1),_break:y("break"),_case:y("case",v),_catch:y("catch"),_continue:y("continue"),_debugger:y("debugger"),_default:y("default",v),_do:y("do",{isLoop:true,beforeExpr:true}),_else:y("else",v),_finally:y("finally"),_for:y("for",{isLoop:true}),_function:y("function",g),_if:y("if"),_return:y("return",v),_switch:y("switch"),_throw:y("throw",v),_try:y("try"),_var:y("var"),_const:y("const"),_while:y("while",{isLoop:true}),_with:y("with"),_new:y("new",{beforeExpr:true,startsExpr:true}),_this:y("this",g),_super:y("super",g),_class:y("class",g),_extends:y("extends",v),_export:y("export"),_import:y("import",g),_null:y("null",g),_true:y("true",g),_false:y("false",g),_in:y("in",{beforeExpr:true,binop:7}),_instanceof:y("instanceof",{beforeExpr:true,binop:7}),_typeof:y("typeof",{beforeExpr:true,prefix:true,startsExpr:true}),_void:y("void",{beforeExpr:true,prefix:true,startsExpr:true}),_delete:y("delete",{beforeExpr:true,prefix:true,startsExpr:true})};var k=/\r\n?|\n|\u2028|\u2029/;var _=new RegExp(k.source,"g");function w(e){return e===10||e===13||e===8232||e===8233}function S(e,t,i){if(i===void 0)i=e.length;for(var s=t;s<i;s++){var r=e.charCodeAt(s);if(w(r)){return s<i-1&&r===13&&e.charCodeAt(s+1)===10?s+2:s+1}}return-1}var C=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;var E=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;var A=Object.prototype;var I=A.hasOwnProperty;var P=A.toString;var V=Object.hasOwn||function(e,t){return I.call(e,t)};var N=Array.isArray||function(e){return P.call(e)==="[object Array]"};var T=Object.create(null);function L(e){return T[e]||(T[e]=new RegExp("^(?:"+e.replace(/ /g,"|")+")$"))}function R(e){if(e<=65535){return String.fromCharCode(e)}e-=65536;return String.fromCharCode((e>>10)+55296,(e&1023)+56320)}var D=/(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;var O=function e(t,i){this.line=t;this.column=i};O.prototype.offset=function e(t){return new O(this.line,this.column+t)};var B=function e(t,i,s){this.start=i;this.end=s;if(t.sourceFile!==null){this.source=t.sourceFile}};function M(e,t){for(var i=1,s=0;;){var r=S(e,s,t);if(r<0){return new O(i,t-s)}++i;s=r}}var F={ecmaVersion:null,sourceType:"script",strict:false,onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:false,allowImportExportEverywhere:false,allowAwaitOutsideFunction:null,allowSuperOutsideMethod:null,allowHashBang:false,checkPrivateFields:true,locations:false,startLocation:null,onToken:null,onComment:null,ranges:false,program:null,sourceFile:null,directSourceFile:null,preserveParens:false};var U=false;function q(e){var t={};for(var i in F){t[i]=e&&V(e,i)?e[i]:F[i]}if(t.ecmaVersion==="latest"){t.ecmaVersion=1e8}else if(t.ecmaVersion==null){if(!U&&typeof console==="object"&&console.warn){U=true;console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")}t.ecmaVersion=11}else if(t.ecmaVersion>=2015){t.ecmaVersion-=2009}if(t.allowReserved==null){t.allowReserved=t.ecmaVersion<5}if(!e||e.allowHashBang==null){t.allowHashBang=t.ecmaVersion>=14}if(N(t.onToken)){var s=t.onToken;t.onToken=function(e){return s.push(e)}}if(N(t.onComment)){t.onComment=j(t,t.onComment)}if(t.sourceType==="commonjs"&&t.allowAwaitOutsideFunction){throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs")}return t}function j(e,t){return function(i,s,r,a,n,o){var h={type:i?"Block":"Line",value:s,start:r,end:a};if(e.locations){h.loc=new B(this,n,o)}if(e.ranges){h.range=[r,a]}t.push(h)}}var G=1,H=2,W=4,z=8,K=16,Q=32,Y=64,X=128,Z=256,$=512,J=1024,ee=G|H|Z;function te(e,t){return H|(e?W:0)|(t?z:0)}var ie=0,se=1,re=2,ae=3,ne=4,oe=5;var he=function e(t,i,s){this.options=t=q(t);this.sourceFile=t.sourceFile;this.keywords=L(o[t.ecmaVersion>=6?6:t.sourceType==="module"?"5module":5]);var r="";if(t.allowReserved!==true){r=a[t.ecmaVersion>=6?6:t.ecmaVersion===5?5:3];if(t.sourceType==="module"){r+=" await"}}this.reservedWords=L(r);var n=(r?r+" ":"")+a.strict;this.reservedWordsStrict=L(n);this.reservedWordsStrictBind=L(n+" "+a.strictBind);this.input=String(i);this.containsEsc=false;this.pos=s||0;this.curLine=1;if(t.startLocation){this.lineStart=this.pos-t.startLocation.column;this.curLine=t.startLocation.line}else if(s){this.lineStart=this.input.lastIndexOf("\n",s-1)+1;if(this.options.locations){this.curLine=this.input.slice(0,this.lineStart).split(k).length}}else{this.lineStart=0}this.type=b.eof;this.value=null;this.start=this.end=this.pos;this.startLoc=this.endLoc=this.curPosition();this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos;this.context=this.initialContext();this.exprAllowed=true;this.inModule=t.sourceType==="module";this.strict=this.inModule||t.strict===true||this.strictDirective(this.pos);this.potentialArrowAt=-1;this.potentialArrowInForAwait=false;this.yieldPos=this.awaitPos=this.awaitIdentPos=0;this.labels=[];this.undefinedExports=Object.create(null);if(this.pos===0&&t.allowHashBang&&this.input.slice(0,2)==="#!"){this.skipLineComment(2)}this.scopeStack=[];this.enterScope(this.options.sourceType==="commonjs"?H:G);this.regexpState=null;this.privateNameStack=[]};var pe={inFunction:{configurable:true},inGenerator:{configurable:true},inAsync:{configurable:true},canAwait:{configurable:true},allowReturn:{configurable:true},allowSuper:{configurable:true},allowDirectSuper:{configurable:true},treatFunctionsAsVar:{configurable:true},allowNewDotTarget:{configurable:true},allowUsing:{configurable:true},inClassStaticBlock:{configurable:true}};he.prototype.parse=function e(){var t=this;var i=this.options.program||this.startNode();this.nextToken();return this.catchStackOverflow(function(){return t.parseTopLevel(i)})};pe.inFunction.get=function(){return(this.currentVarScope().flags&H)>0};pe.inGenerator.get=function(){return(this.currentVarScope().flags&z)>0};pe.inAsync.get=function(){return(this.currentVarScope().flags&W)>0};pe.canAwait.get=function(){for(var e=this.scopeStack.length-1;e>=0;e--){var t=this.scopeStack[e];var i=t.flags;if(i&(Z|$)){return false}if(i&H){return(i&W)>0}}return this.inModule&&this.options.ecmaVersion>=13||this.options.allowAwaitOutsideFunction};pe.allowReturn.get=function(){if(this.inFunction){return true}if(this.options.allowReturnOutsideFunction&&this.currentVarScope().flags&G){return true}return false};pe.allowSuper.get=function(){var e=this.currentThisScope();var t=e.flags;return(t&Y)>0||this.options.allowSuperOutsideMethod};pe.allowDirectSuper.get=function(){return(this.currentThisScope().flags&X)>0};pe.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())};pe.allowNewDotTarget.get=function(){for(var e=this.scopeStack.length-1;e>=0;e--){var t=this.scopeStack[e];var i=t.flags;if(i&(Z|$)||i&H&&!(i&K)){return true}}return false};pe.allowUsing.get=function(){var e=this.currentScope();var t=e.flags;if(t&J){return false}if(!this.inModule&&t&G){return false}return true};pe.inClassStaticBlock.get=function(){return(this.currentVarScope().flags&Z)>0};he.extend=function e(){var t=[],i=arguments.length;while(i--)t[i]=arguments[i];var s=this;for(var r=0;r<t.length;r++){s=t[r](s)}return s};he.parse=function e(t,i){return new this(i,t).parse()};he.parseExpressionAt=function e(t,i,s){var r=new this(s,t,i);r.nextToken();return r.parseExpression()};he.tokenizer=function e(t,i){return new this(i,t)};Object.defineProperties(he.prototype,pe);var ue=he.prototype;var le=/^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;ue.strictDirective=function(e){if(this.options.ecmaVersion<5){return false}for(;;){E.lastIndex=e;e+=E.exec(this.input)[0].length;var t=le.exec(this.input.slice(e));if(!t){return false}if((t[1]||t[2])==="use strict"){E.lastIndex=e+t[0].length;var i=E.exec(this.input),s=i.index+i[0].length;var r=this.input.charAt(s);return r===";"||r==="}"||k.test(i[0])&&!(/[(`.[+\-/*%<>=,?^&]/.test(r)||r==="!"&&this.input.charAt(s+1)==="="||r==="i"&&ce(this,s))}e+=t[0].length;E.lastIndex=e;e+=E.exec(this.input)[0].length;if(this.input[e]===";"){e++}}};function ce(e,t){var i=t+1,s=Math.min(e.input.length,t+11);while(i<s){var r=e.fullCharCodeAt(i);if(!f(r,true)){break}i+=r<=65535?1:2}return i===t+2&&e.input.slice(t,i)==="in"||i===t+10&&e.input.slice(t,i)==="instanceof"}ue.eat=function(e){if(this.type===e){this.next();return true}else{return false}};ue.isContextual=function(e){return this.type===b.name&&this.value===e&&!this.containsEsc};ue.eatContextual=function(e){if(!this.isContextual(e)){return false}this.next();return true};ue.catchStackOverflow=function(e){try{return e()}catch(e){if(e instanceof Error&&(/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message)||/\btoo much recursion\b/i.test(e.message))){this.raise(this.start,"Not enough stack space to parse input")}else{throw e}}};ue.expectContextual=function(e){if(!this.eatContextual(e)){this.unexpected()}};ue.canInsertSemicolon=function(){return this.type===b.eof||this.type===b.braceR||k.test(this.input.slice(this.lastTokEnd,this.start))};ue.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon){this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc)}return true}};ue.semicolon=function(){if(!this.eat(b.semi)&&!this.insertSemicolon()){this.unexpected()}};ue.afterTrailingComma=function(e,t){if(this.type===e){if(this.options.onTrailingComma){this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc)}if(!t){this.next()}return true}};ue.expect=function(e){this.eat(e)||this.unexpected()};ue.unexpected=function(e){this.raise(e!=null?e:this.start,"Unexpected token")};var fe=function e(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1};ue.checkPatternErrors=function(e,t){if(!e){return}if(e.trailingComma>-1){this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element")}var i=t?e.parenthesizedAssign:e.parenthesizedBind;if(i>-1){this.raiseRecoverable(i,t?"Assigning to rvalue":"Parenthesized pattern")}};ue.checkExpressionErrors=function(e,t){if(!e){return false}var i=e.shorthandAssign;var s=e.doubleProto;if(!t){return i>=0||s>=0}if(i>=0){this.raise(i,"Shorthand property assignments are valid only in destructuring patterns")}if(s>=0){this.raiseRecoverable(s,"Redefinition of __proto__ property")}};ue.checkYieldAwaitInDefaultParams=function(){if(this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)){this.raise(this.yieldPos,"Yield expression cannot be a default value")}if(this.awaitPos){this.raise(this.awaitPos,"Await expression cannot be a default value")}};ue.isSimpleAssignTarget=function(e){if(e.type==="ParenthesizedExpression"){return this.isSimpleAssignTarget(e.expression)}return e.type==="Identifier"||e.type==="MemberExpression"};var de=he.prototype;de.parseTopLevel=function(e){var t=Object.create(null);if(!e.body){e.body=[]}while(this.type!==b.eof){var i=this.parseStatement(null,true,t);e.body.push(i)}if(this.inModule){for(var s=0,r=Object.keys(this.undefinedExports);s<r.length;s+=1){var a=r[s];this.raiseRecoverable(this.undefinedExports[a].start,"Export '"+a+"' is not defined")}}this.adaptDirectivePrologue(e.body);this.next();e.sourceType=this.options.sourceType==="commonjs"?"script":this.options.sourceType;return this.finishNode(e,"Program")};var me={kind:"loop"},ve={kind:"switch"};de.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let")){return false}E.lastIndex=this.pos;var t=E.exec(this.input);var i=this.pos+t[0].length,s=this.fullCharCodeAt(i);if(s===91||s===92){return true}if(e){return false}if(s===123){return true}if(c(s)){var r=i;do{i+=s<=65535?1:2}while(f(s=this.fullCharCodeAt(i)));if(s===92){return true}var a=this.input.slice(r,i);if(!h.test(a)){return true}}return false};de.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async")){return false}E.lastIndex=this.pos;var e=E.exec(this.input);var t=this.pos+e[0].length,i;return!k.test(this.input.slice(this.pos,t))&&this.input.slice(t,t+8)==="function"&&(t+8===this.input.length||!(f(i=this.fullCharCodeAt(t+8))||i===92))};de.isUsingKeyword=function(e,t){if(this.options.ecmaVersion<17||!this.isContextual(e?"await":"using")){return false}E.lastIndex=this.pos;var i=E.exec(this.input);var s=this.pos+i[0].length;if(k.test(this.input.slice(this.pos,s))){return false}if(e){var r=s+5,a;if(this.input.slice(s,r)!=="using"||r===this.input.length||f(a=this.fullCharCodeAt(r))||a===92){return false}E.lastIndex=r;var n=E.exec(this.input);s=r+n[0].length;if(n&&k.test(this.input.slice(r,s))){return false}}var o=this.fullCharCodeAt(s);if(!c(o)&&o!==92){return false}var p=s;do{s+=o<=65535?1:2}while(f(o=this.fullCharCodeAt(s)));if(o===92){return true}var u=this.input.slice(p,s);if(h.test(u)){return false}if(t&&!e&&u==="of"){E.lastIndex=s;var l=E.exec(this.input);s=s+l[0].length;if(this.input.charCodeAt(s)!==61||(o=this.input.charCodeAt(s+1))===61||o===62){return false}}return true};de.isAwaitUsing=function(e){return this.isUsingKeyword(true,e)};de.isUsing=function(e){return this.isUsingKeyword(false,e)};de.parseStatement=function(e,t,i){var s=this.type,r=this.startNode(),a;if(this.isLet(e)){s=b._var;a="let"}switch(s){case b._break:case b._continue:return this.parseBreakContinueStatement(r,s.keyword);case b._debugger:return this.parseDebuggerStatement(r);case b._do:return this.parseDoStatement(r);case b._for:return this.parseForStatement(r);case b._function:if(e&&(this.strict||e!=="if"&&e!=="label")&&this.options.ecmaVersion>=6){this.unexpected()}return this.parseFunctionStatement(r,false,!e);case b._class:if(e){this.unexpected()}return this.parseClass(r,true);case b._if:return this.parseIfStatement(r);case b._return:return this.parseReturnStatement(r);case b._switch:return this.parseSwitchStatement(r);case b._throw:return this.parseThrowStatement(r);case b._try:return this.parseTryStatement(r);case b._const:case b._var:a=a||this.value;if(e&&a!=="var"){this.unexpected()}return this.parseVarStatement(r,a);case b._while:return this.parseWhileStatement(r);case b._with:return this.parseWithStatement(r);case b.braceL:return this.parseBlock(true,r);case b.semi:return this.parseEmptyStatement(r);case b._export:case b._import:if(this.options.ecmaVersion>10&&s===b._import){E.lastIndex=this.pos;var n=E.exec(this.input);var o=this.pos+n[0].length,h=this.input.charCodeAt(o);if(h===40||h===46){return this.parseExpressionStatement(r,this.parseExpression())}}if(!this.options.allowImportExportEverywhere){if(!t){this.raise(this.start,"'import' and 'export' may only appear at the top level")}if(!this.inModule){this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")}}return s===b._import?this.parseImport(r):this.parseExport(r,i);default:if(this.isAsyncFunction()){if(e){this.unexpected()}this.next();return this.parseFunctionStatement(r,true,!e)}var p=this.isAwaitUsing(false)?"await using":this.isUsing(false)?"using":null;if(p){if(!this.allowUsing){this.raise(this.start,"Using declaration cannot appear in the top level when source type is `script` or in the bare case statement")}if(e){this.raise(this.start,"Using declaration is not allowed in single-statement positions")}if(p==="await using"){if(!this.canAwait){this.raise(this.start,"Await using cannot appear outside of async function")}this.next()}this.next();this.parseVar(r,false,p);this.semicolon();return this.finishNode(r,"VariableDeclaration")}var u=this.value,l=this.parseExpression();if(s===b.name&&l.type==="Identifier"&&this.eat(b.colon)){return this.parseLabeledStatement(r,u,l,e)}else{return this.parseExpressionStatement(r,l)}}};de.parseBreakContinueStatement=function(e,t){var i=t==="break";this.next();if(this.eat(b.semi)||this.insertSemicolon()){e.label=null}else if(this.type!==b.name){this.unexpected()}else{e.label=this.parseIdent();this.semicolon()}var s=0;for(;s<this.labels.length;++s){var r=this.labels[s];if(e.label==null||r.name===e.label.name){if(r.kind!=null&&(i||r.kind==="loop")){break}if(e.label&&i){break}}}if(s===this.labels.length){this.raise(e.start,"Unsyntactic "+t)}return this.finishNode(e,i?"BreakStatement":"ContinueStatement")};de.parseDebuggerStatement=function(e){this.next();this.semicolon();return this.finishNode(e,"DebuggerStatement")};de.parseDoStatement=function(e){this.next();this.labels.push(me);e.body=this.parseStatement("do");this.labels.pop();this.expect(b._while);e.test=this.parseParenExpression();if(this.options.ecmaVersion>=6){this.eat(b.semi)}else{this.semicolon()}return this.finishNode(e,"DoWhileStatement")};de.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&this.canAwait&&this.eatContextual("await")?this.lastTokStart:-1;this.labels.push(me);this.enterScope(0);this.expect(b.parenL);if(this.type===b.semi){if(t>-1){this.unexpected(t)}return this.parseFor(e,null)}var i=this.isLet();if(this.type===b._var||this.type===b._const||i){var s=this.startNode(),r=i?"let":this.value;this.next();this.parseVar(s,true,r);this.finishNode(s,"VariableDeclaration");return this.parseForAfterInit(e,s,t)}var a=this.isContextual("let"),n=false;var o=this.isUsing(true)?"using":this.isAwaitUsing(true)?"await using":null;if(o){var h=this.startNode();this.next();if(o==="await using"){if(!this.canAwait){this.raise(this.start,"Await using cannot appear outside of async function")}this.next()}this.parseVar(h,true,o);this.finishNode(h,"VariableDeclaration");return this.parseForAfterInit(e,h,t)}var p=this.containsEsc;var u=new fe;var l=this.start;var c=t>-1?this.parseExprSubscripts(u,"await"):this.parseExpression(true,u);if(this.type===b._in||(n=this.options.ecmaVersion>=6&&this.isContextual("of"))){if(t>-1){if(this.type===b._in){this.unexpected(t)}e.await=true}else if(n&&this.options.ecmaVersion>=8){if(c.start===l&&!p&&c.type==="Identifier"&&c.name==="async"){this.unexpected()}else if(this.options.ecmaVersion>=9){e.await=false}}if(a&&n){this.raise(c.start,"The left-hand side of a for-of loop may not start with 'let'.")}this.toAssignable(c,false,u);this.checkLValPattern(c);return this.parseForIn(e,c)}else{this.checkExpressionErrors(u,true)}if(t>-1){this.unexpected(t)}return this.parseFor(e,c)};de.parseForAfterInit=function(e,t,i){if((this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&t.declarations.length===1){if(this.type===b._in){if((t.kind==="using"||t.kind==="await using")&&!t.declarations[0].init){this.raise(this.start,"Using declaration is not allowed in for-in loops")}if(this.options.ecmaVersion>=9&&i>-1){this.unexpected(i)}}else if(this.options.ecmaVersion>=9){e.await=i>-1}return this.parseForIn(e,t)}if(i>-1){this.unexpected(i)}return this.parseFor(e,t)};de.parseFunctionStatement=function(e,t,i){this.next();return this.parseFunction(e,xe|(i?0:ye),false,t)};de.parseIfStatement=function(e){this.next();e.test=this.parseParenExpression();e.consequent=this.parseStatement("if");e.alternate=this.eat(b._else)?this.parseStatement("if"):null;return this.finishNode(e,"IfStatement")};de.parseReturnStatement=function(e){if(!this.allowReturn){this.raise(this.start,"'return' outside of function")}this.next();if(this.eat(b.semi)||this.insertSemicolon()){e.argument=null}else{e.argument=this.parseExpression();this.semicolon()}return this.finishNode(e,"ReturnStatement")};de.parseSwitchStatement=function(e){this.next();e.discriminant=this.parseParenExpression();e.cases=[];this.expect(b.braceL);this.labels.push(ve);this.enterScope(J);var t;for(var i=false;this.type!==b.braceR;){if(this.type===b._case||this.type===b._default){var s=this.type===b._case;if(t){this.finishNode(t,"SwitchCase")}e.cases.push(t=this.startNode());t.consequent=[];this.next();if(s){t.test=this.parseExpression()}else{if(i){this.raiseRecoverable(this.lastTokStart,"Multiple default clauses")}i=true;t.test=null}this.expect(b.colon)}else{if(!t){this.unexpected()}t.consequent.push(this.parseStatement(null))}}this.exitScope();if(t){this.finishNode(t,"SwitchCase")}this.next();this.labels.pop();return this.finishNode(e,"SwitchStatement")};de.parseThrowStatement=function(e){this.next();if(k.test(this.input.slice(this.lastTokEnd,this.start))){this.raise(this.lastTokEnd,"Illegal newline after throw")}e.argument=this.parseExpression();this.semicolon();return this.finishNode(e,"ThrowStatement")};var ge=[];de.parseCatchClauseParam=function(){var e=this.parseBindingAtom();var t=e.type==="Identifier";this.enterScope(t?Q:0);this.checkLValPattern(e,t?ne:re);this.expect(b.parenR);return e};de.parseTryStatement=function(e){this.next();e.block=this.parseBlock();e.handler=null;if(this.type===b._catch){var t=this.startNode();this.next();if(this.eat(b.parenL)){t.param=this.parseCatchClauseParam()}else{if(this.options.ecmaVersion<10){this.unexpected()}t.param=null;this.enterScope(0)}t.body=this.parseBlock(false);this.exitScope();e.handler=this.finishNode(t,"CatchClause")}e.finalizer=this.eat(b._finally)?this.parseBlock():null;if(!e.handler&&!e.finalizer){this.raise(e.start,"Missing catch or finally clause")}return this.finishNode(e,"TryStatement")};de.parseVarStatement=function(e,t,i){this.next();this.parseVar(e,false,t,i);this.semicolon();return this.finishNode(e,"VariableDeclaration")};de.parseWhileStatement=function(e){this.next();e.test=this.parseParenExpression();this.labels.push(me);e.body=this.parseStatement("while");this.labels.pop();return this.finishNode(e,"WhileStatement")};de.parseWithStatement=function(e){if(this.strict){this.raise(this.start,"'with' in strict mode")}this.next();e.object=this.parseParenExpression();e.body=this.parseStatement("with");return this.finishNode(e,"WithStatement")};de.parseEmptyStatement=function(e){this.next();return this.finishNode(e,"EmptyStatement")};de.parseLabeledStatement=function(e,t,i,s){for(var r=0,a=this.labels;r<a.length;r+=1){var n=a[r];if(n.name===t){this.raise(i.start,"Label '"+t+"' is already declared")}}var o=this.type.isLoop?"loop":this.type===b._switch?"switch":null;for(var h=this.labels.length-1;h>=0;h--){var p=this.labels[h];if(p.statementStart===e.start){p.statementStart=this.start;p.kind=o}else{break}}this.labels.push({name:t,kind:o,statementStart:this.start});e.body=this.parseStatement(s?s.indexOf("label")===-1?s+"label":s:"label");this.labels.pop();e.label=i;return this.finishNode(e,"LabeledStatement")};de.parseExpressionStatement=function(e,t){e.expression=t;this.semicolon();return this.finishNode(e,"ExpressionStatement")};de.parseBlock=function(e,t,i){if(e===void 0)e=true;if(t===void 0)t=this.startNode();t.body=[];this.expect(b.braceL);if(e){this.enterScope(0)}while(this.type!==b.braceR){var s=this.parseStatement(null);t.body.push(s)}if(i){this.strict=false}this.next();if(e){this.exitScope()}return this.finishNode(t,"BlockStatement")};de.parseFor=function(e,t){e.init=t;this.expect(b.semi);e.test=this.type===b.semi?null:this.parseExpression();this.expect(b.semi);e.update=this.type===b.parenR?null:this.parseExpression();this.expect(b.parenR);e.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(e,"ForStatement")};de.parseForIn=function(e,t){var i=this.type===b._in;this.next();if(t.type==="VariableDeclaration"&&t.declarations[0].init!=null&&(!i||this.options.ecmaVersion<8||this.strict||t.kind!=="var"||t.declarations[0].id.type!=="Identifier")){this.raise(t.start,(i?"for-in":"for-of")+" loop variable declaration may not have an initializer")}e.left=t;e.right=i?this.parseExpression():this.parseMaybeAssign();this.expect(b.parenR);e.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(e,i?"ForInStatement":"ForOfStatement")};de.parseVar=function(e,t,i,s){e.declarations=[];e.kind=i;for(;;){var r=this.startNode();this.parseVarId(r,i);if(this.eat(b.eq)){r.init=this.parseMaybeAssign(t)}else if(!s&&i==="const"&&!(this.type===b._in||this.options.ecmaVersion>=6&&this.isContextual("of"))){this.unexpected()}else if(!s&&(i==="using"||i==="await using")&&this.options.ecmaVersion>=17&&this.type!==b._in&&!this.isContextual("of")){this.raise(this.lastTokEnd,"Missing initializer in "+i+" declaration")}else if(!s&&r.id.type!=="Identifier"&&!(t&&(this.type===b._in||this.isContextual("of")))){this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value")}else{r.init=null}e.declarations.push(this.finishNode(r,"VariableDeclarator"));if(!this.eat(b.comma)){break}}return e};de.parseVarId=function(e,t){e.id=t==="using"||t==="await using"?this.parseIdent():this.parseBindingAtom();this.checkLValPattern(e.id,t==="var"?se:re,false)};var xe=1,ye=2,be=4;de.parseFunction=function(e,t,i,s,r){this.initFunction(e);if(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!s){if(this.type===b.star&&t&ye){this.unexpected()}e.generator=this.eat(b.star)}if(this.options.ecmaVersion>=8){e.async=!!s}if(t&xe){e.id=t&be&&this.type!==b.name?null:this.parseIdent();if(e.id&&!(t&ye)){this.checkLValSimple(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?se:re:ae)}}var a=this.yieldPos,n=this.awaitPos,o=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(te(e.async,e.generator));if(!(t&xe)){e.id=this.type===b.name?this.parseIdent():null}this.parseFunctionParams(e);this.parseFunctionBody(e,i,false,r);this.yieldPos=a;this.awaitPos=n;this.awaitIdentPos=o;return this.finishNode(e,t&xe?"FunctionDeclaration":"FunctionExpression")};de.parseFunctionParams=function(e){this.expect(b.parenL);e.params=this.parseBindingList(b.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams()};de.parseClass=function(e,t){this.next();var i=this.strict;this.strict=true;this.parseClassId(e,t);this.parseClassSuper(e);var s=this.enterClassBody();var r=this.startNode();var a=false;r.body=[];this.expect(b.braceL);while(this.type!==b.braceR){var n=this.parseClassElement(e.superClass!==null);if(n){r.body.push(n);if(n.type==="MethodDefinition"&&n.kind==="constructor"){if(a){this.raiseRecoverable(n.start,"Duplicate constructor in the same class")}a=true}else if(n.key&&n.key.type==="PrivateIdentifier"&&ke(s,n)){this.raiseRecoverable(n.key.start,"Identifier '#"+n.key.name+"' has already been declared")}}}this.strict=i;this.next();e.body=this.finishNode(r,"ClassBody");this.exitClassBody();return this.finishNode(e,t?"ClassDeclaration":"ClassExpression")};de.parseClassElement=function(e){if(this.eat(b.semi)){return null}var t=this.options.ecmaVersion;var i=this.startNode();var s="";var r=false;var a=false;var n="method";var o=false;if(this.eatContextual("static")){if(t>=13&&this.eat(b.braceL)){this.parseClassStaticBlock(i);return i}if(this.isClassElementNameStart()||this.type===b.star){o=true}else{s="static"}}i.static=o;if(!s&&t>=8&&this.eatContextual("async")){if((this.isClassElementNameStart()||this.type===b.star)&&!this.canInsertSemicolon()){a=true}else{s="async"}}if(!s&&(t>=9||!a)&&this.eat(b.star)){r=true}if(!s&&!a&&!r){var h=this.value;if(this.eatContextual("get")||this.eatContextual("set")){if(this.isClassElementNameStart()){n=h}else{s=h}}}if(s){i.computed=false;i.key=this.startNodeAt(this.lastTokStart,this.lastTokStartLoc);i.key.name=s;this.finishNode(i.key,"Identifier")}else{this.parseClassElementName(i)}if(t<13||this.type===b.parenL||n!=="method"||r||a){var p=!i.static&&_e(i,"constructor");var u=p&&e;if(p&&n!=="method"){this.raise(i.key.start,"Constructor can't have get/set modifier")}i.kind=p?"constructor":n;this.parseClassMethod(i,r,a,u)}else{this.parseClassField(i)}return i};de.isClassElementNameStart=function(){return this.type===b.name||this.type===b.privateId||this.type===b.num||this.type===b.string||this.type===b.bracketL||this.type.keyword};de.parseClassElementName=function(e){if(this.type===b.privateId){if(this.value==="constructor"){this.raise(this.start,"Classes can't have an element named '#constructor'")}e.computed=false;e.key=this.parsePrivateIdent()}else{this.parsePropertyName(e)}};de.parseClassMethod=function(e,t,i,s){var r=e.key;if(e.kind==="constructor"){if(t){this.raise(r.start,"Constructor can't be a generator")}if(i){this.raise(r.start,"Constructor can't be an async method")}}else if(e.static&&_e(e,"prototype")){this.raise(r.start,"Classes may not have a static property named prototype")}var a=e.value=this.parseMethod(t,i,s);if(e.kind==="get"&&a.params.length!==0){this.raiseRecoverable(a.start,"getter should have no params")}if(e.kind==="set"&&a.params.length!==1){this.raiseRecoverable(a.start,"setter should have exactly one param")}if(e.kind==="set"&&a.params[0].type==="RestElement"){this.raiseRecoverable(a.params[0].start,"Setter cannot use rest params")}return this.finishNode(e,"MethodDefinition")};de.parseClassField=function(e){if(_e(e,"constructor")){this.raise(e.key.start,"Classes can't have a field named 'constructor'")}else if(e.static&&_e(e,"prototype")){this.raise(e.key.start,"Classes can't have a static field named 'prototype'")}if(this.eat(b.eq)){this.enterScope($|Y);e.value=this.parseMaybeAssign();this.exitScope()}else{e.value=null}this.semicolon();return this.finishNode(e,"PropertyDefinition")};de.parseClassStaticBlock=function(e){e.body=[];var t=this.labels;this.labels=[];this.enterScope(Z|Y);while(this.type!==b.braceR){var i=this.parseStatement(null);e.body.push(i)}this.next();this.exitScope();this.labels=t;return this.finishNode(e,"StaticBlock")};de.parseClassId=function(e,t){if(this.type===b.name){e.id=this.parseIdent();if(t){this.checkLValSimple(e.id,re,false)}}else{if(t===true){this.unexpected()}e.id=null}};de.parseClassSuper=function(e){e.superClass=this.eat(b._extends)?this.parseExprSubscripts(null,false):null};de.enterClassBody=function(){var e={declared:Object.create(null),used:[]};this.privateNameStack.push(e);return e.declared};de.exitClassBody=function(){var e=this.privateNameStack.pop();var t=e.declared;var i=e.used;if(!this.options.checkPrivateFields){return}var s=this.privateNameStack.length;var r=s===0?null:this.privateNameStack[s-1];for(var a=0;a<i.length;++a){var n=i[a];if(!V(t,n.name)){if(r){r.used.push(n)}else{this.raiseRecoverable(n.start,"Private field '#"+n.name+"' must be declared in an enclosing class")}}}};function ke(e,t){var i=t.key.name;var s=e[i];var r="true";if(t.type==="MethodDefinition"&&(t.kind==="get"||t.kind==="set")){r=(t.static?"s":"i")+t.kind}if(s==="iget"&&r==="iset"||s==="iset"&&r==="iget"||s==="sget"&&r==="sset"||s==="sset"&&r==="sget"){e[i]="true";return false}else if(!s){e[i]=r;return false}else{return true}}function _e(e,t){var i=e.computed;var s=e.key;return!i&&(s.type==="Identifier"&&s.name===t||s.type==="Literal"&&s.value===t)}de.parseExportAllDeclaration=function(e,t){if(this.options.ecmaVersion>=11){if(this.eatContextual("as")){e.exported=this.parseModuleExportName();this.checkExport(t,e.exported,this.lastTokStart)}else{e.exported=null}}this.expectContextual("from");if(this.type!==b.string){this.unexpected()}e.source=this.parseExprAtom();if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}this.semicolon();return this.finishNode(e,"ExportAllDeclaration")};de.parseExport=function(e,t){this.next();if(this.eat(b.star)){return this.parseExportAllDeclaration(e,t)}if(this.eat(b._default)){this.checkExport(t,"default",this.lastTokStart);e.declaration=this.parseExportDefaultDeclaration();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement()){e.declaration=this.parseExportDeclaration(e);if(e.declaration.type==="VariableDeclaration"){this.checkVariableExport(t,e.declaration.declarations)}else{this.checkExport(t,e.declaration.id,e.declaration.id.start)}e.specifiers=[];e.source=null;if(this.options.ecmaVersion>=16){e.attributes=[]}}else{e.declaration=null;e.specifiers=this.parseExportSpecifiers(t);if(this.eatContextual("from")){if(this.type!==b.string){this.unexpected()}e.source=this.parseExprAtom();if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}}else{for(var i=0,s=e.specifiers;i<s.length;i+=1){var r=s[i];this.checkUnreserved(r.local);this.checkLocalExport(r.local);if(r.local.type==="Literal"){this.raise(r.local.start,"A string literal cannot be used as an exported binding without `from`.")}}e.source=null;if(this.options.ecmaVersion>=16){e.attributes=[]}}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")};de.parseExportDeclaration=function(e){return this.parseStatement(null)};de.parseExportDefaultDeclaration=function(){var e;if(this.type===b._function||(e=this.isAsyncFunction())){var t=this.startNode();this.next();if(e){this.next()}return this.parseFunction(t,xe|be,false,e)}else if(this.type===b._class){var i=this.startNode();return this.parseClass(i,"nullableID")}else{var s=this.parseMaybeAssign();this.semicolon();return s}};de.checkExport=function(e,t,i){if(!e){return}if(typeof t!=="string"){t=t.type==="Identifier"?t.name:t.value}if(V(e,t)){this.raiseRecoverable(i,"Duplicate export '"+t+"'")}e[t]=true};de.checkPatternExport=function(e,t){var i=t.type;if(i==="Identifier"){this.checkExport(e,t,t.start)}else if(i==="ObjectPattern"){for(var s=0,r=t.properties;s<r.length;s+=1){var a=r[s];this.checkPatternExport(e,a)}}else if(i==="ArrayPattern"){for(var n=0,o=t.elements;n<o.length;n+=1){var h=o[n];if(h){this.checkPatternExport(e,h)}}}else if(i==="Property"){this.checkPatternExport(e,t.value)}else if(i==="AssignmentPattern"){this.checkPatternExport(e,t.left)}else if(i==="RestElement"){this.checkPatternExport(e,t.argument)}};de.checkVariableExport=function(e,t){if(!e){return}for(var i=0,s=t;i<s.length;i+=1){var r=s[i];this.checkPatternExport(e,r.id)}};de.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction()};de.parseExportSpecifier=function(e){var t=this.startNode();t.local=this.parseModuleExportName();t.exported=this.eatContextual("as")?this.parseModuleExportName():t.local;this.checkExport(e,t.exported,t.exported.start);return this.finishNode(t,"ExportSpecifier")};de.parseExportSpecifiers=function(e){var t=[],i=true;this.expect(b.braceL);while(!this.eat(b.braceR)){if(!i){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{i=false}t.push(this.parseExportSpecifier(e))}return t};de.parseImport=function(e){this.next();if(this.type===b.string){e.specifiers=ge;e.source=this.parseExprAtom()}else{e.specifiers=this.parseImportSpecifiers();this.expectContextual("from");e.source=this.type===b.string?this.parseExprAtom():this.unexpected()}if(this.options.ecmaVersion>=16){e.attributes=this.parseWithClause()}this.semicolon();return this.finishNode(e,"ImportDeclaration")};de.parseImportSpecifier=function(){var e=this.startNode();e.imported=this.parseModuleExportName();if(this.eatContextual("as")){e.local=this.parseIdent()}else{this.checkUnreserved(e.imported);e.local=e.imported}this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportSpecifier")};de.parseImportDefaultSpecifier=function(){var e=this.startNode();e.local=this.parseIdent();this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportDefaultSpecifier")};de.parseImportNamespaceSpecifier=function(){var e=this.startNode();this.next();this.expectContextual("as");e.local=this.parseIdent();this.checkLValSimple(e.local,re);return this.finishNode(e,"ImportNamespaceSpecifier")};de.parseImportSpecifiers=function(){var e=[],t=true;if(this.type===b.name){e.push(this.parseImportDefaultSpecifier());if(!this.eat(b.comma)){return e}}if(this.type===b.star){e.push(this.parseImportNamespaceSpecifier());return e}this.expect(b.braceL);while(!this.eat(b.braceR)){if(!t){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{t=false}e.push(this.parseImportSpecifier())}return e};de.parseWithClause=function(){var e=[];if(!this.eat(b._with)){return e}this.expect(b.braceL);var t={};var i=true;while(!this.eat(b.braceR)){if(!i){this.expect(b.comma);if(this.afterTrailingComma(b.braceR)){break}}else{i=false}var s=this.parseImportAttribute();var r=s.key.type==="Identifier"?s.key.name:s.key.value;if(V(t,r)){this.raiseRecoverable(s.key.start,"Duplicate attribute key '"+r+"'")}t[r]=true;e.push(s)}return e};de.parseImportAttribute=function(){var e=this.startNode();e.key=this.type===b.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never");this.expect(b.colon);if(this.type!==b.string){this.unexpected()}e.value=this.parseExprAtom();return this.finishNode(e,"ImportAttribute")};de.parseModuleExportName=function(){if(this.options.ecmaVersion>=13&&this.type===b.string){var e=this.parseLiteral(this.value);if(D.test(e.value)){this.raise(e.start,"An export name cannot include a lone surrogate.")}return e}return this.parseIdent(true)};de.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t){e[t].directive=e[t].expression.raw.slice(1,-1)}};de.isDirectiveCandidate=function(e){return this.options.ecmaVersion>=5&&e.type==="ExpressionStatement"&&e.expression.type==="Literal"&&typeof e.expression.value==="string"&&(this.input[e.start]==='"'||this.input[e.start]==="'")};var we=he.prototype;we.toAssignable=function(e,t,i){if(this.options.ecmaVersion>=6&&e){switch(e.type){case"Identifier":if(this.inAsync&&e.name==="await"){this.raise(e.start,"Cannot use 'await' as identifier inside an async function")}break;case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern";if(i){this.checkPatternErrors(i,true)}for(var s=0,r=e.properties;s<r.length;s+=1){var a=r[s];this.toAssignable(a,t);if(a.type==="RestElement"&&(a.argument.type==="ArrayPattern"||a.argument.type==="ObjectPattern")){this.raise(a.argument.start,"Unexpected token")}}break;case"Property":if(e.kind!=="init"){this.raise(e.key.start,"Object pattern can't contain getter or setter")}this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern";if(i){this.checkPatternErrors(i,true)}this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement";this.toAssignable(e.argument,t);if(e.argument.type==="AssignmentPattern"){this.raise(e.argument.start,"Rest elements cannot have a default value")}break;case"AssignmentExpression":if(e.operator!=="="){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.")}e.type="AssignmentPattern";delete e.operator;this.toAssignable(e.left,t);break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,i);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(!t){break}default:this.raise(e.start,"Assigning to rvalue")}}else if(i){this.checkPatternErrors(i,true)}return e};we.toAssignableList=function(e,t){var i=e.length;for(var s=0;s<i;s++){var r=e[s];if(r){this.toAssignable(r,t)}}if(i){var a=e[i-1];if(this.options.ecmaVersion===6&&t&&a&&a.type==="RestElement"&&a.argument.type!=="Identifier"){this.unexpected(a.argument.start)}}return e};we.parseSpread=function(e){var t=this.startNode();this.next();t.argument=this.parseMaybeAssign(false,e);return this.finishNode(t,"SpreadElement")};we.parseRestBinding=function(){var e=this.startNode();this.next();if(this.options.ecmaVersion===6&&this.type!==b.name){this.unexpected()}e.argument=this.parseBindingAtom();return this.finishNode(e,"RestElement")};we.parseBindingAtom=function(){if(this.options.ecmaVersion>=6){switch(this.type){case b.bracketL:var e=this.startNode();this.next();e.elements=this.parseBindingList(b.bracketR,true,true);return this.finishNode(e,"ArrayPattern");case b.braceL:return this.parseObj(true)}}return this.parseIdent()};we.parseBindingList=function(e,t,i,s){var r=[],a=true;while(!this.eat(e)){if(a){a=false}else{this.expect(b.comma)}if(t&&this.type===b.comma){r.push(null)}else if(i&&this.afterTrailingComma(e)){break}else if(this.type===b.ellipsis){var n=this.parseRestBinding();this.parseBindingListItem(n);r.push(n);if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}this.expect(e);break}else{r.push(this.parseAssignableListItem(s))}}return r};we.parseAssignableListItem=function(e){var t=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(t);return t};we.parseBindingListItem=function(e){return e};we.parseMaybeDefault=function(e,t,i){i=i||this.parseBindingAtom();if(this.options.ecmaVersion<6||!this.eat(b.eq)){return i}var s=this.startNodeAt(e,t);s.left=i;s.right=this.parseMaybeAssign();return this.finishNode(s,"AssignmentPattern")};we.checkLValSimple=function(e,t,i){if(t===void 0)t=ie;var s=t!==ie;switch(e.type){case"Identifier":if(this.strict&&this.reservedWordsStrictBind.test(e.name)){this.raiseRecoverable(e.start,(s?"Binding ":"Assigning to ")+e.name+" in strict mode")}if(s){if(t===re&&e.name==="let"){this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name")}if(i){if(V(i,e.name)){this.raiseRecoverable(e.start,"Argument name clash")}i[e.name]=true}if(t!==oe){this.declareName(e.name,t,e.start)}}break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(s){this.raiseRecoverable(e.start,"Binding member expression")}break;case"ParenthesizedExpression":if(s){this.raiseRecoverable(e.start,"Binding parenthesized expression")}return this.checkLValSimple(e.expression,t,i);default:this.raise(e.start,(s?"Binding":"Assigning to")+" rvalue")}};we.checkLValPattern=function(e,t,i){if(t===void 0)t=ie;switch(e.type){case"ObjectPattern":for(var s=0,r=e.properties;s<r.length;s+=1){var a=r[s];this.checkLValInnerPattern(a,t,i)}break;case"ArrayPattern":for(var n=0,o=e.elements;n<o.length;n+=1){var h=o[n];if(h){this.checkLValInnerPattern(h,t,i)}}break;default:this.checkLValSimple(e,t,i)}};we.checkLValInnerPattern=function(e,t,i){if(t===void 0)t=ie;switch(e.type){case"Property":this.checkLValInnerPattern(e.value,t,i);break;case"AssignmentPattern":this.checkLValPattern(e.left,t,i);break;case"RestElement":this.checkLValPattern(e.argument,t,i);break;default:this.checkLValPattern(e,t,i)}};var Se=function e(t,i,s,r,a){this.token=t;this.isExpr=!!i;this.preserveSpace=!!s;this.override=r;this.generator=!!a};var Ce={b_stat:new Se("{",false),b_expr:new Se("{",true),b_tmpl:new Se("${",false),p_stat:new Se("(",false),p_expr:new Se("(",true),q_tmpl:new Se("`",true,true,function(e){return e.tryReadTemplateToken()}),f_stat:new Se("function",false),f_expr:new Se("function",true),f_expr_gen:new Se("function",true,false,null,true),f_gen:new Se("function",false,false,null,true)};var Ee=he.prototype;Ee.initialContext=function(){return[Ce.b_stat]};Ee.curContext=function(){return this.context[this.context.length-1]};Ee.braceIsBlock=function(e){var t=this.curContext();if(t===Ce.f_expr||t===Ce.f_stat){return true}if(e===b.colon&&(t===Ce.b_stat||t===Ce.b_expr)){return!t.isExpr}if(e===b._return||e===b.name&&this.exprAllowed){return k.test(this.input.slice(this.lastTokEnd,this.start))}if(e===b._else||e===b.semi||e===b.eof||e===b.parenR||e===b.arrow){return true}if(e===b.braceL){return t===Ce.b_stat}if(e===b._var||e===b._const||e===b.name){return false}return!this.exprAllowed};Ee.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if(t.token==="function"){return t.generator}}return false};Ee.updateContext=function(e){var t,i=this.type;if(i.keyword&&e===b.dot){this.exprAllowed=false}else if(t=i.updateContext){t.call(this,e)}else{this.exprAllowed=i.beforeExpr}};Ee.overrideContext=function(e){if(this.curContext()!==e){this.context[this.context.length-1]=e}};b.parenR.updateContext=b.braceR.updateContext=function(){if(this.context.length===1){this.exprAllowed=true;return}var e=this.context.pop();if(e===Ce.b_stat&&this.curContext().token==="function"){e=this.context.pop()}this.exprAllowed=!e.isExpr};b.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Ce.b_stat:Ce.b_expr);this.exprAllowed=true};b.dollarBraceL.updateContext=function(){this.context.push(Ce.b_tmpl);this.exprAllowed=true};b.parenL.updateContext=function(e){var t=e===b._if||e===b._for||e===b._with||e===b._while;this.context.push(t?Ce.p_stat:Ce.p_expr);this.exprAllowed=true};b.incDec.updateContext=function(){};b._function.updateContext=b._class.updateContext=function(e){if(e.beforeExpr&&e!==b._else&&!(e===b.semi&&this.curContext()!==Ce.p_stat)&&!(e===b._return&&k.test(this.input.slice(this.lastTokEnd,this.start)))&&!((e===b.colon||e===b.braceL)&&this.curContext()===Ce.b_stat)){this.context.push(Ce.f_expr)}else{this.context.push(Ce.f_stat)}this.exprAllowed=false};b.colon.updateContext=function(){if(this.curContext().token==="function"){this.context.pop()}this.exprAllowed=true};b.backQuote.updateContext=function(){if(this.curContext()===Ce.q_tmpl){this.context.pop()}else{this.context.push(Ce.q_tmpl)}this.exprAllowed=false};b.star.updateContext=function(e){if(e===b._function){var t=this.context.length-1;if(this.context[t]===Ce.f_expr){this.context[t]=Ce.f_expr_gen}else{this.context[t]=Ce.f_gen}}this.exprAllowed=true};b.name.updateContext=function(e){var t=false;if(this.options.ecmaVersion>=6&&e!==b.dot){if(this.value==="of"&&!this.exprAllowed||this.value==="yield"&&this.inGeneratorContext()){t=true}}this.exprAllowed=t};var Ae=he.prototype;Ae.checkPropClash=function(e,t,i){if(this.options.ecmaVersion>=9&&e.type==="SpreadElement"){return}if(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand)){return}var s=e.key;var r;switch(s.type){case"Identifier":r=s.name;break;case"Literal":r=String(s.value);break;default:return}var a=e.kind;if(this.options.ecmaVersion>=6){if(r==="__proto__"&&a==="init"){if(t.proto){if(i){if(i.doubleProto<0){i.doubleProto=s.start}}else{this.raiseRecoverable(s.start,"Redefinition of __proto__ property")}}t.proto=true}return}r="$"+r;var n=t[r];if(n){var o;if(a==="init"){o=this.strict&&n.init||n.get||n.set}else{o=n.init||n[a]}if(o){this.raiseRecoverable(s.start,"Redefinition of property")}}else{n=t[r]={init:false,get:false,set:false}}n[a]=true};Ae.parseExpression=function(e,t){var i=this;return this.catchStackOverflow(function(){var s=i.start,r=i.startLoc;var a=i.parseMaybeAssign(e,t);if(i.type===b.comma){var n=i.startNodeAt(s,r);n.expressions=[a];while(i.eat(b.comma)){n.expressions.push(i.parseMaybeAssign(e,t))}return i.finishNode(n,"SequenceExpression")}return a})};Ae.parseMaybeAssign=function(e,t,i){if(this.isContextual("yield")){if(this.inGenerator){return this.parseYield(e)}else{this.exprAllowed=false}}var s=false,r=-1,a=-1,n=-1;if(t){r=t.parenthesizedAssign;a=t.trailingComma;n=t.doubleProto;t.parenthesizedAssign=t.trailingComma=-1}else{t=new fe;s=true}var o=this.start,h=this.startLoc;if(this.type===b.parenL||this.type===b.name){this.potentialArrowAt=this.start;this.potentialArrowInForAwait=e==="await"}var p=this.parseMaybeConditional(e,t);if(i){p=i.call(this,p,o,h)}if(this.type.isAssign){var u=this.startNodeAt(o,h);u.operator=this.value;if(this.type===b.eq){p=this.toAssignable(p,false,t)}if(!s){t.parenthesizedAssign=t.trailingComma=-1;if(t.shorthandAssign>=p.start){t.shorthandAssign=-1}if(t.doubleProto>=p.start){t.doubleProto=-1}}if(this.type===b.eq){this.checkLValPattern(p)}else{this.checkLValSimple(p)}u.left=p;this.next();u.right=this.parseMaybeAssign(e);if(n>-1){t.doubleProto=n}return this.finishNode(u,"AssignmentExpression")}else{if(s){this.checkExpressionErrors(t,true)}}if(r>-1){t.parenthesizedAssign=r}if(a>-1){t.trailingComma=a}return p};Ae.parseMaybeConditional=function(e,t){var i=this.start,s=this.startLoc;var r=this.parseExprOps(e,t);if(this.checkExpressionErrors(t)){return r}if(!(r.type==="ArrowFunctionExpression"&&r.start===i)&&this.eat(b.question)){var a=this.startNodeAt(i,s);a.test=r;a.consequent=this.parseMaybeAssign();this.expect(b.colon);a.alternate=this.parseMaybeAssign(e);return this.finishNode(a,"ConditionalExpression")}return r};Ae.parseExprOps=function(e,t){var i=this.start,s=this.startLoc;var r=this.parseMaybeUnary(t,false,false,e);if(this.checkExpressionErrors(t)){return r}return r.start===i&&r.type==="ArrowFunctionExpression"?r:this.parseExprOp(r,i,s,-1,e)};Ae.parseExprOp=function(e,t,i,s,r){var a=this.type.binop;if(a!=null&&(!r||this.type!==b._in)){if(a>s){var n=this.type===b.logicalOR||this.type===b.logicalAND;var o=this.type===b.coalesce;if(o){a=b.logicalAND.binop}var h=this.value;this.next();var p=this.start,u=this.startLoc;var l=this.parseExprOp(this.parseMaybeUnary(null,false,false,r),p,u,a,r);var c=this.buildBinary(t,i,e,l,h,n||o);if(n&&this.type===b.coalesce||o&&(this.type===b.logicalOR||this.type===b.logicalAND)){this.raiseRecoverable(this.start,"Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses")}return this.parseExprOp(c,t,i,s,r)}}return e};Ae.buildBinary=function(e,t,i,s,r,a){if(s.type==="PrivateIdentifier"){this.raise(s.start,"Private identifier can only be left side of binary expression")}var n=this.startNodeAt(e,t);n.left=i;n.operator=r;n.right=s;return this.finishNode(n,a?"LogicalExpression":"BinaryExpression")};Ae.parseMaybeUnary=function(e,t,i,s){var r=this.start,a=this.startLoc,n;if(this.isContextual("await")&&this.canAwait){n=this.parseAwait(s);t=true}else if(this.type.prefix){var o=this.startNode(),h=this.type===b.incDec;o.operator=this.value;o.prefix=true;this.next();o.argument=this.parseMaybeUnary(null,true,h,s);this.checkExpressionErrors(e,true);if(h){this.checkLValSimple(o.argument)}else if(this.strict&&o.operator==="delete"&&Ie(o.argument)){this.raiseRecoverable(o.start,"Deleting local variable in strict mode")}else if(o.operator==="delete"&&Pe(o.argument)){this.raiseRecoverable(o.start,"Private fields can not be deleted")}else{t=true}n=this.finishNode(o,h?"UpdateExpression":"UnaryExpression")}else if(!t&&this.type===b.privateId){if((s||this.privateNameStack.length===0)&&this.options.checkPrivateFields){this.unexpected()}n=this.parsePrivateIdent();if(this.type!==b._in){this.unexpected()}}else{n=this.parseExprSubscripts(e,s);if(this.checkExpressionErrors(e)){return n}while(this.type.postfix&&!this.canInsertSemicolon()){var p=this.startNodeAt(r,a);p.operator=this.value;p.prefix=false;p.argument=n;this.checkLValSimple(n);this.next();n=this.finishNode(p,"UpdateExpression")}}if(!i&&!(n.type==="ArrowFunctionExpression"&&n.start===r)&&this.eat(b.starstar)){if(t){this.unexpected(this.lastTokStart)}else{return this.buildBinary(r,a,n,this.parseMaybeUnary(null,false,false,s),"**",false)}}else{return n}};function Ie(e){return e.type==="Identifier"||e.type==="ParenthesizedExpression"&&Ie(e.expression)}function Pe(e){return e.type==="MemberExpression"&&e.property.type==="PrivateIdentifier"||e.type==="ChainExpression"&&Pe(e.expression)||e.type==="ParenthesizedExpression"&&Pe(e.expression)}Ae.parseExprSubscripts=function(e,t){var i=this.start,s=this.startLoc;var r=-1,a=-1;if(e){r=e.doubleProto;a=e.shorthandAssign;e.doubleProto=e.shorthandAssign=-1}var n=this.parseExprAtom(e,t);if(n.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")"){return n}var o=this.parseSubscripts(n,i,s,false,t);if(e){if(o.end>n.end){this.checkExpressionErrors(e,true);if(e.parenthesizedAssign>=o.start){e.parenthesizedAssign=-1}if(e.parenthesizedBind>=o.start){e.parenthesizedBind=-1}if(e.trailingComma>=o.start){e.trailingComma=-1}}if(r>-1){e.doubleProto=r}if(a>-1){e.shorthandAssign=a}}return o};Ae.parseSubscripts=function(e,t,i,s,r){var a=this.options.ecmaVersion>=8&&e.type==="Identifier"&&e.name==="async"&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&e.end-e.start===5&&this.potentialArrowAt===e.start;var n=false;while(true){var o=this.parseSubscript(e,t,i,s,a,n,r);if(o.optional){n=true}if(o.end===e.end||o.type==="ArrowFunctionExpression"){if(n){var h=this.startNodeAt(t,i);h.expression=o;o=this.finishNode(h,"ChainExpression")}return o}e=o;a=false}};Ae.shouldParseAsyncArrow=function(){return!this.canInsertSemicolon()&&this.eat(b.arrow)};Ae.parseSubscriptAsyncArrow=function(e,t,i,s){return this.parseArrowExpression(this.startNodeAt(e,t),i,true,s)};Ae.parseSubscript=function(e,t,i,s,r,a,n){var o=this.options.ecmaVersion>=11;var h=o&&this.eat(b.questionDot);if(s&&h){this.raise(this.lastTokStart,"Optional chaining cannot appear in the callee of new expressions")}var p=this.eat(b.bracketL);if(p||h&&this.type!==b.parenL&&this.type!==b.backQuote||this.eat(b.dot)){var u=this.startNodeAt(t,i);u.object=e;if(p){u.property=this.parseExpression();this.expect(b.bracketR)}else if(this.type===b.privateId&&e.type!=="Super"){u.property=this.parsePrivateIdent()}else{u.property=this.parseIdent(this.options.allowReserved!=="never")}u.computed=!!p;if(o){u.optional=h}e=this.finishNode(u,"MemberExpression")}else if(!s&&this.eat(b.parenL)){var l=new fe,c=this.yieldPos,f=this.awaitPos,d=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;var m=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,false,l);if(r&&!h&&this.shouldParseAsyncArrow()){this.checkPatternErrors(l,false);this.checkYieldAwaitInDefaultParams();if(this.awaitIdentPos>0){this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function")}this.yieldPos=c;this.awaitPos=f;this.awaitIdentPos=d;return this.parseSubscriptAsyncArrow(t,i,m,n)}this.checkExpressionErrors(l,true);this.yieldPos=c||this.yieldPos;this.awaitPos=f||this.awaitPos;this.awaitIdentPos=d||this.awaitIdentPos;var v=this.startNodeAt(t,i);v.callee=e;v.arguments=m;if(o){v.optional=h}e=this.finishNode(v,"CallExpression")}else if(this.type===b.backQuote){if(h||a){this.raise(this.start,"Optional chaining cannot appear in the tag of tagged template expressions")}var g=this.startNodeAt(t,i);g.tag=e;g.quasi=this.parseTemplate({isTagged:true});e=this.finishNode(g,"TaggedTemplateExpression")}return e};Ae.parseExprAtom=function(e,t,i){if(this.type===b.slash){this.readRegexp()}var s,r=this.potentialArrowAt===this.start;switch(this.type){case b._super:if(!this.allowSuper){this.raise(this.start,"'super' keyword outside a method")}s=this.startNode();this.next();if(this.type===b.parenL&&!this.allowDirectSuper){this.raise(s.start,"super() call outside constructor of a subclass")}if(this.type!==b.dot&&this.type!==b.bracketL&&this.type!==b.parenL){this.unexpected()}return this.finishNode(s,"Super");case b._this:s=this.startNode();this.next();return this.finishNode(s,"ThisExpression");case b.name:var a=this.start,n=this.startLoc,o=this.containsEsc;var h=this.parseIdent(false);if(this.options.ecmaVersion>=8&&!o&&h.name==="async"&&!this.canInsertSemicolon()&&this.eat(b._function)){this.overrideContext(Ce.f_expr);return this.parseFunction(this.startNodeAt(a,n),0,false,true,t)}if(r&&!this.canInsertSemicolon()){if(this.eat(b.arrow)){return this.parseArrowExpression(this.startNodeAt(a,n),[h],false,t)}if(this.options.ecmaVersion>=8&&h.name==="async"&&this.type===b.name&&!o&&(!this.potentialArrowInForAwait||this.value!=="of"||this.containsEsc)){h=this.parseIdent(false);if(this.canInsertSemicolon()||!this.eat(b.arrow)){this.unexpected()}return this.parseArrowExpression(this.startNodeAt(a,n),[h],true,t)}}return h;case b.regexp:var p=this.value;s=this.parseLiteral(p.value);s.regex={pattern:p.pattern,flags:p.flags};return s;case b.num:case b.string:return this.parseLiteral(this.value);case b._null:case b._true:case b._false:s=this.startNode();s.value=this.type===b._null?null:this.type===b._true;s.raw=this.type.keyword;this.next();return this.finishNode(s,"Literal");case b.parenL:var u=this.start,l=this.parseParenAndDistinguishExpression(r,t);if(e){if(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(l)){e.parenthesizedAssign=u}if(e.parenthesizedBind<0){e.parenthesizedBind=u}}return l;case b.bracketL:s=this.startNode();this.next();s.elements=this.parseExprList(b.bracketR,true,true,e);return this.finishNode(s,"ArrayExpression");case b.braceL:this.overrideContext(Ce.b_expr);return this.parseObj(false,e);case b._function:s=this.startNode();this.next();return this.parseFunction(s,0);case b._class:return this.parseClass(this.startNode(),false);case b._new:return this.parseNew();case b.backQuote:return this.parseTemplate();case b._import:if(this.options.ecmaVersion>=11){return this.parseExprImport(i)}else{return this.unexpected()}default:return this.parseExprAtomDefault()}};Ae.parseExprAtomDefault=function(){this.unexpected()};Ae.parseExprImport=function(e){var t=this.startNode();if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword import")}this.next();if(this.type===b.parenL&&!e){return this.parseDynamicImport(t)}else if(this.type===b.dot){var i=this.startNodeAt(t.start,t.loc&&t.loc.start);i.name="import";t.meta=this.finishNode(i,"Identifier");return this.parseImportMeta(t)}else{this.unexpected()}};Ae.parseDynamicImport=function(e){this.next();e.source=this.parseMaybeAssign();if(this.options.ecmaVersion>=16){if(!this.eat(b.parenR)){this.expect(b.comma);if(!this.afterTrailingComma(b.parenR)){e.options=this.parseMaybeAssign();if(!this.eat(b.parenR)){this.expect(b.comma);if(!this.afterTrailingComma(b.parenR)){this.unexpected()}}}else{e.options=null}}else{e.options=null}}else{if(!this.eat(b.parenR)){var t=this.start;if(this.eat(b.comma)&&this.eat(b.parenR)){this.raiseRecoverable(t,"Trailing comma is not allowed in import()")}else{this.unexpected(t)}}}return this.finishNode(e,"ImportExpression")};Ae.parseImportMeta=function(e){this.next();var t=this.containsEsc;e.property=this.parseIdent(true);if(e.property.name!=="meta"){this.raiseRecoverable(e.property.start,"The only valid meta property for import is 'import.meta'")}if(t){this.raiseRecoverable(e.start,"'import.meta' must not contain escaped characters")}if(this.options.sourceType!=="module"&&!this.options.allowImportExportEverywhere){this.raiseRecoverable(e.start,"Cannot use 'import.meta' outside a module")}return this.finishNode(e,"MetaProperty")};Ae.parseLiteral=function(e){var t=this.startNode();t.value=e;t.raw=this.input.slice(this.start,this.end);if(t.raw.charCodeAt(t.raw.length-1)===110){t.bigint=t.value!=null?t.value.toString():t.raw.slice(0,-1).replace(/_/g,"")}this.next();return this.finishNode(t,"Literal")};Ae.parseParenExpression=function(){this.expect(b.parenL);var e=this.parseExpression();this.expect(b.parenR);return e};Ae.shouldParseArrow=function(e){return!this.canInsertSemicolon()};Ae.parseParenAndDistinguishExpression=function(e,t){var i=this.start,s=this.startLoc,r,a=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var n=this.start,o=this.startLoc;var h=[],p=true,u=false;var l=new fe,c=this.yieldPos,f=this.awaitPos,d;this.yieldPos=0;this.awaitPos=0;while(this.type!==b.parenR){p?p=false:this.expect(b.comma);if(a&&this.afterTrailingComma(b.parenR,true)){u=true;break}else if(this.type===b.ellipsis){d=this.start;h.push(this.parseParenItem(this.parseRestBinding()));if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}break}else{h.push(this.parseMaybeAssign(false,l,this.parseParenItem))}}var m=this.lastTokEnd,v=this.lastTokEndLoc;this.expect(b.parenR);if(e&&this.shouldParseArrow(h)&&this.eat(b.arrow)){this.checkPatternErrors(l,false);this.checkYieldAwaitInDefaultParams();this.yieldPos=c;this.awaitPos=f;return this.parseParenArrowList(i,s,h,t)}if(!h.length||u){this.unexpected(this.lastTokStart)}if(d){this.unexpected(d)}this.checkExpressionErrors(l,true);this.yieldPos=c||this.yieldPos;this.awaitPos=f||this.awaitPos;if(h.length>1){r=this.startNodeAt(n,o);r.expressions=h;this.finishNodeAt(r,"SequenceExpression",m,v)}else{r=h[0]}}else{r=this.parseParenExpression()}if(this.options.preserveParens){var g=this.startNodeAt(i,s);g.expression=r;return this.finishNode(g,"ParenthesizedExpression")}else{return r}};Ae.parseParenItem=function(e){return e};Ae.parseParenArrowList=function(e,t,i,s){return this.parseArrowExpression(this.startNodeAt(e,t),i,false,s)};var Ve=[];Ae.parseNew=function(){if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword new")}var e=this.startNode();this.next();if(this.options.ecmaVersion>=6&&this.type===b.dot){var t=this.startNodeAt(e.start,e.loc&&e.loc.start);t.name="new";e.meta=this.finishNode(t,"Identifier");this.next();var i=this.containsEsc;e.property=this.parseIdent(true);if(e.property.name!=="target"){this.raiseRecoverable(e.property.start,"The only valid meta property for new is 'new.target'")}if(i){this.raiseRecoverable(e.start,"'new.target' must not contain escaped characters")}if(!this.allowNewDotTarget){this.raiseRecoverable(e.start,"'new.target' can only be used in functions and class static block")}return this.finishNode(e,"MetaProperty")}var s=this.start,r=this.startLoc;e.callee=this.parseSubscripts(this.parseExprAtom(null,false,true),s,r,true,false);if(e.callee.type==="Super"){this.raiseRecoverable(s,"Invalid use of 'super'")}if(this.eat(b.parenL)){e.arguments=this.parseExprList(b.parenR,this.options.ecmaVersion>=8,false)}else{e.arguments=Ve}return this.finishNode(e,"NewExpression")};Ae.parseTemplateElement=function(e){var t=e.isTagged;var i=this.startNode();if(this.type===b.invalidTemplate){if(!t){this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal")}i.value={raw:this.value.replace(/\r\n?/g,"\n"),cooked:null}}else{i.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value}}this.next();i.tail=this.type===b.backQuote;return this.finishNode(i,"TemplateElement")};Ae.parseTemplate=function(e){if(e===void 0)e={};var t=e.isTagged;if(t===void 0)t=false;var i=this.startNode();this.next();i.expressions=[];var s=this.parseTemplateElement({isTagged:t});i.quasis=[s];while(!s.tail){if(this.type===b.eof){this.raise(this.pos,"Unterminated template literal")}this.expect(b.dollarBraceL);i.expressions.push(this.parseExpression());this.expect(b.braceR);i.quasis.push(s=this.parseTemplateElement({isTagged:t}))}this.next();return this.finishNode(i,"TemplateLiteral")};Ae.isAsyncProp=function(e){return!e.computed&&e.key.type==="Identifier"&&e.key.name==="async"&&(this.type===b.name||this.type===b.num||this.type===b.string||this.type===b.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===b.star)&&!k.test(this.input.slice(this.lastTokEnd,this.start))};Ae.parseObj=function(e,t){var i=this.startNode(),s=true,r={};i.properties=[];this.next();while(!this.eat(b.braceR)){if(!s){this.expect(b.comma);if(this.options.ecmaVersion>=5&&this.afterTrailingComma(b.braceR)){break}}else{s=false}var a=this.parseProperty(e,t);if(!e){this.checkPropClash(a,r,t)}i.properties.push(a)}return this.finishNode(i,e?"ObjectPattern":"ObjectExpression")};Ae.parseProperty=function(e,t){var i=this.startNode(),s,r,a,n;if(this.options.ecmaVersion>=9&&this.eat(b.ellipsis)){if(e){i.argument=this.parseIdent(false);if(this.type===b.comma){this.raiseRecoverable(this.start,"Comma is not permitted after the rest element")}return this.finishNode(i,"RestElement")}i.argument=this.parseMaybeAssign(false,t);if(this.type===b.comma&&t&&t.trailingComma<0){t.trailingComma=this.start}return this.finishNode(i,"SpreadElement")}if(this.options.ecmaVersion>=6){i.method=false;i.shorthand=false;if(e||t){a=this.start;n=this.startLoc}if(!e){s=this.eat(b.star)}}var o=this.containsEsc;this.parsePropertyName(i);if(!e&&!o&&this.options.ecmaVersion>=8&&!s&&this.isAsyncProp(i)){r=true;s=this.options.ecmaVersion>=9&&this.eat(b.star);this.parsePropertyName(i)}else{r=false}this.parsePropertyValue(i,e,s,r,a,n,t,o);return this.finishNode(i,"Property")};Ae.parseGetterSetter=function(e){var t=e.key.name;this.parsePropertyName(e);e.value=this.parseMethod(false);e.kind=t;var i=e.kind==="get"?0:1;if(e.value.params.length!==i){var s=e.value.start;if(e.kind==="get"){this.raiseRecoverable(s,"getter should have no params")}else{this.raiseRecoverable(s,"setter should have exactly one param")}}else{if(e.kind==="set"&&e.value.params[0].type==="RestElement"){this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}}};Ae.parsePropertyValue=function(e,t,i,s,r,a,n,o){if((i||s)&&this.type===b.colon){this.unexpected()}if(this.eat(b.colon)){e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(false,n);e.kind="init"}else if(this.options.ecmaVersion>=6&&this.type===b.parenL){if(t){this.unexpected()}e.method=true;e.value=this.parseMethod(i,s);e.kind="init"}else if(!t&&!o&&this.options.ecmaVersion>=5&&!e.computed&&e.key.type==="Identifier"&&(e.key.name==="get"||e.key.name==="set")&&(this.type!==b.comma&&this.type!==b.braceR&&this.type!==b.eq)){if(i||s){this.unexpected()}this.parseGetterSetter(e)}else if(this.options.ecmaVersion>=6&&!e.computed&&e.key.type==="Identifier"){if(i||s){this.unexpected()}this.checkUnreserved(e.key);if(e.key.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=r}if(t){e.value=this.parseMaybeDefault(r,a,this.copyNode(e.key))}else if(this.type===b.eq&&n){if(n.shorthandAssign<0){n.shorthandAssign=this.start}e.value=this.parseMaybeDefault(r,a,this.copyNode(e.key))}else{e.value=this.copyNode(e.key)}e.kind="init";e.shorthand=true}else{this.unexpected()}};Ae.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(b.bracketL)){e.computed=true;e.key=this.parseMaybeAssign();this.expect(b.bracketR);return e.key}else{e.computed=false}}return e.key=this.type===b.num||this.type===b.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never")};Ae.initFunction=function(e){e.id=null;if(this.options.ecmaVersion>=6){e.generator=e.expression=false}if(this.options.ecmaVersion>=8){e.async=false}};Ae.parseMethod=function(e,t,i){var s=this.startNode(),r=this.yieldPos,a=this.awaitPos,n=this.awaitIdentPos;this.initFunction(s);if(this.options.ecmaVersion>=6){s.generator=e}if(this.options.ecmaVersion>=8){s.async=!!t}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(te(t,s.generator)|Y|(i?X:0));this.expect(b.parenL);s.params=this.parseBindingList(b.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams();this.parseFunctionBody(s,false,true,false);this.yieldPos=r;this.awaitPos=a;this.awaitIdentPos=n;return this.finishNode(s,"FunctionExpression")};Ae.parseArrowExpression=function(e,t,i,s){var r=this.yieldPos,a=this.awaitPos,n=this.awaitIdentPos;this.enterScope(te(i,false)|K);this.initFunction(e);if(this.options.ecmaVersion>=8){e.async=!!i}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;e.params=this.toAssignableList(t,true);this.parseFunctionBody(e,true,false,s);this.yieldPos=r;this.awaitPos=a;this.awaitIdentPos=n;return this.finishNode(e,"ArrowFunctionExpression")};Ae.parseFunctionBody=function(e,t,i,s){var r=t&&this.type!==b.braceL;var a=this.strict,n=false;if(r){e.body=this.parseMaybeAssign(s);e.expression=true;this.checkParams(e,false)}else{var o=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);if(!a||o){n=this.strictDirective(this.end);if(n&&o){this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list")}}var h=this.labels;this.labels=[];if(n){this.strict=true}this.checkParams(e,!a&&!n&&!t&&!i&&this.isSimpleParamList(e.params));if(this.strict&&e.id){this.checkLValSimple(e.id,oe)}e.body=this.parseBlock(false,undefined,n&&!a);e.expression=false;this.adaptDirectivePrologue(e.body.body);this.labels=h}this.exitScope()};Ae.isSimpleParamList=function(e){for(var t=0,i=e;t<i.length;t+=1){var s=i[t];if(s.type!=="Identifier"){return false}}return true};Ae.checkParams=function(e,t){var i=Object.create(null);for(var s=0,r=e.params;s<r.length;s+=1){var a=r[s];this.checkLValInnerPattern(a,se,t?null:i)}};Ae.parseExprList=function(e,t,i,s){var r=[],a=true;while(!this.eat(e)){if(!a){this.expect(b.comma);if(t&&this.afterTrailingComma(e)){break}}else{a=false}var n=void 0;if(i&&this.type===b.comma){n=null}else if(this.type===b.ellipsis){n=this.parseSpread(s);if(s&&this.type===b.comma&&s.trailingComma<0){s.trailingComma=this.start}}else{n=this.parseMaybeAssign(false,s)}r.push(n)}return r};Ae.checkUnreserved=function(e){var t=e.start;var i=e.end;var s=e.name;if(this.inGenerator&&s==="yield"){this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator")}if(this.inAsync&&s==="await"){this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function")}if(!(this.currentThisScope().flags&ee)&&s==="arguments"){this.raiseRecoverable(t,"Cannot use 'arguments' in class field initializer")}if(this.inClassStaticBlock&&(s==="arguments"||s==="await")){this.raise(t,"Cannot use "+s+" in class static initialization block")}if(this.keywords.test(s)){this.raise(t,"Unexpected keyword '"+s+"'")}if(this.options.ecmaVersion<6&&this.input.slice(t,i).indexOf("\\")!==-1){return}var r=this.strict?this.reservedWordsStrict:this.reservedWords;if(r.test(s)){if(!this.inAsync&&s==="await"){this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function")}this.raiseRecoverable(t,"The keyword '"+s+"' is reserved")}};Ae.parseIdent=function(e){var t=this.parseIdentNode();this.next(!!e);this.finishNode(t,"Identifier");if(!e){this.checkUnreserved(t);if(t.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=t.start}}return t};Ae.parseIdentNode=function(){var e=this.startNode();if(this.type===b.name){e.name=this.value}else if(this.type.keyword){e.name=this.type.keyword;if((e.name==="class"||e.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)){this.context.pop()}this.type=b.name}else{this.unexpected()}return e};Ae.parsePrivateIdent=function(){var e=this.startNode();if(this.type===b.privateId){e.name=this.value}else{this.unexpected()}this.next();this.finishNode(e,"PrivateIdentifier");if(this.options.checkPrivateFields){if(this.privateNameStack.length===0){this.raise(e.start,"Private field '#"+e.name+"' must be declared in an enclosing class")}else{this.privateNameStack[this.privateNameStack.length-1].used.push(e)}}return e};Ae.parseYield=function(e){if(!this.yieldPos){this.yieldPos=this.start}var t=this.startNode();this.next();if(this.type===b.semi||this.canInsertSemicolon()||this.type!==b.star&&!this.type.startsExpr){t.delegate=false;t.argument=null}else{t.delegate=this.eat(b.star);t.argument=this.parseMaybeAssign(e)}return this.finishNode(t,"YieldExpression")};Ae.parseAwait=function(e){if(!this.awaitPos){this.awaitPos=this.start}var t=this.startNode();this.next();t.argument=this.parseMaybeUnary(null,true,false,e);return this.finishNode(t,"AwaitExpression")};var Ne=he.prototype;Ne.raise=function(e,t){var i=M(this.input,e);t+=" ("+i.line+":"+i.column+")";if(this.sourceFile){t+=" in "+this.sourceFile}var s=new SyntaxError(t);s.pos=e;s.loc=i;s.raisedAt=this.pos;throw s};Ne.raiseRecoverable=Ne.raise;Ne.curPosition=function(){if(this.options.locations){return new O(this.curLine,this.pos-this.lineStart)}};var Te=he.prototype;var Le=function e(t){this.flags=t;this.var=[];this.lexical=[];this.functions=[]};Te.enterScope=function(e){this.scopeStack.push(new Le(e))};Te.exitScope=function(){this.scopeStack.pop()};Te.treatFunctionsAsVarInScope=function(e){return e.flags&H||!this.inModule&&e.flags&G};Te.declareName=function(e,t,i){var s=false;if(t===re){var r=this.currentScope();s=r.lexical.indexOf(e)>-1||r.functions.indexOf(e)>-1||r.var.indexOf(e)>-1;r.lexical.push(e);if(this.inModule&&r.flags&G){delete this.undefinedExports[e]}}else if(t===ne){var a=this.currentScope();a.lexical.push(e)}else if(t===ae){var n=this.currentScope();if(this.treatFunctionsAsVar){s=n.lexical.indexOf(e)>-1}else{s=n.lexical.indexOf(e)>-1||n.var.indexOf(e)>-1}n.functions.push(e)}else{for(var o=this.scopeStack.length-1;o>=0;--o){var h=this.scopeStack[o];if(h.lexical.indexOf(e)>-1&&!(h.flags&Q&&h.lexical[0]===e)||!this.treatFunctionsAsVarInScope(h)&&h.functions.indexOf(e)>-1){s=true;break}h.var.push(e);if(this.inModule&&h.flags&G){delete this.undefinedExports[e]}if(h.flags&ee){break}}}if(s){this.raiseRecoverable(i,"Identifier '"+e+"' has already been declared")}};Te.checkLocalExport=function(e){if(this.scopeStack[0].lexical.indexOf(e.name)===-1&&this.scopeStack[0].var.indexOf(e.name)===-1){this.undefinedExports[e.name]=e}};Te.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]};Te.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&(ee|$|Z)){return t}}};Te.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&(ee|$|Z)&&!(t.flags&K)){return t}}};var Re=function e(t,i,s){this.type="";this.start=i;this.end=0;if(t.options.locations){this.loc=new B(t,s)}if(t.options.directSourceFile){this.sourceFile=t.options.directSourceFile}if(t.options.ranges){this.range=[i,0]}};var De=he.prototype;De.startNode=function(){return new Re(this,this.start,this.startLoc)};De.startNodeAt=function(e,t){return new Re(this,e,t)};function Oe(e,t,i,s){e.type=t;e.end=i;if(this.options.locations){e.loc.end=s}if(this.options.ranges){e.range[1]=i}return e}De.finishNode=function(e,t){return Oe.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)};De.finishNodeAt=function(e,t,i,s){return Oe.call(this,e,t,i,s)};De.copyNode=function(e){var t=new Re(this,e.start,this.startLoc);for(var i in e){t[i]=e[i]}return t};var Be="Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";var Me="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";var Fe=Me+" Extended_Pictographic";var Ue=Fe;var qe=Ue+" EBase EComp EMod EPres ExtPict";var je=qe;var Ge=je;var He={9:Me,10:Fe,11:Ue,12:qe,13:je,14:Ge};var We="Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";var ze={9:"",10:"",11:"",12:"",13:"",14:We};var Ke="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";var Qe="Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";var Ye=Qe+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";var Xe=Ye+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";var Ze=Xe+" Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";var $e=Ze+" Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";var Je=$e+" "+Be;var et={9:Qe,10:Ye,11:Xe,12:Ze,13:$e,14:Je};var tt={};function it(e){var t=tt[e]={binary:L(He[e]+" "+Ke),binaryOfStrings:L(ze[e]),nonBinary:{General_Category:L(Ke),Script:L(et[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script;t.nonBinary.gc=t.nonBinary.General_Category;t.nonBinary.sc=t.nonBinary.Script;t.nonBinary.scx=t.nonBinary.Script_Extensions}for(var st=0,rt=[9,10,11,12,13,14];st<rt.length;st+=1){var at=rt[st];it(at)}var nt=he.prototype;var ot=function e(t,i){this.parent=t;this.base=i||this};ot.prototype.separatedFrom=function e(t){for(var i=this;i;i=i.parent){for(var s=t;s;s=s.parent){if(i.base===s.base&&i!==s){return true}}}return false};ot.prototype.sibling=function e(){return new ot(this.parent,this.base)};var ht=function e(t){this.parser=t;this.validFlags="gim"+(t.options.ecmaVersion>=6?"uy":"")+(t.options.ecmaVersion>=9?"s":"")+(t.options.ecmaVersion>=13?"d":"")+(t.options.ecmaVersion>=15?"v":"");this.unicodeProperties=tt[t.options.ecmaVersion>=14?14:t.options.ecmaVersion];this.source="";this.flags="";this.start=0;this.switchU=false;this.switchV=false;this.switchN=false;this.pos=0;this.lastIntValue=0;this.lastStringValue="";this.lastAssertionIsQuantifiable=false;this.numCapturingParens=0;this.maxBackReference=0;this.groupNames=Object.create(null);this.backReferenceNames=[];this.branchID=null};ht.prototype.reset=function e(t,i,s){var r=s.indexOf("v")!==-1;var a=s.indexOf("u")!==-1;this.start=t|0;this.source=i+"";this.flags=s;if(r&&this.parser.options.ecmaVersion>=15){this.switchU=true;this.switchV=true;this.switchN=true}else{this.switchU=a&&this.parser.options.ecmaVersion>=6;this.switchV=false;this.switchN=a&&this.parser.options.ecmaVersion>=9}};ht.prototype.raise=function e(t){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+t)};ht.prototype.at=function e(t,i){if(i===void 0)i=false;var s=this.source;var r=s.length;if(t>=r){return-1}var a=s.charCodeAt(t);if(!(i||this.switchU)||a<=55295||a>=57344||t+1>=r){return a}var n=s.charCodeAt(t+1);return n>=56320&&n<=57343?(a<<10)+n-56613888:a};ht.prototype.nextIndex=function e(t,i){if(i===void 0)i=false;var s=this.source;var r=s.length;if(t>=r){return r}var a=s.charCodeAt(t),n;if(!(i||this.switchU)||a<=55295||a>=57344||t+1>=r||(n=s.charCodeAt(t+1))<56320||n>57343){return t+1}return t+2};ht.prototype.current=function e(t){if(t===void 0)t=false;return this.at(this.pos,t)};ht.prototype.lookahead=function e(t){if(t===void 0)t=false;return this.at(this.nextIndex(this.pos,t),t)};ht.prototype.advance=function e(t){if(t===void 0)t=false;this.pos=this.nextIndex(this.pos,t)};ht.prototype.eat=function e(t,i){if(i===void 0)i=false;if(this.current(i)===t){this.advance(i);return true}return false};ht.prototype.eatChars=function e(t,i){if(i===void 0)i=false;var s=this.pos;for(var r=0,a=t;r<a.length;r+=1){var n=a[r];var o=this.at(s,i);if(o===-1||o!==n){return false}s=this.nextIndex(s,i)}this.pos=s;return true};nt.validateRegExpFlags=function(e){var t=e.validFlags;var i=e.flags;var s=false;var r=false;for(var a=0;a<i.length;a++){var n=i.charAt(a);if(t.indexOf(n)===-1){this.raise(e.start,"Invalid regular expression flag")}if(i.indexOf(n,a+1)>-1){this.raise(e.start,"Duplicate regular expression flag")}if(n==="u"){s=true}if(n==="v"){r=true}}if(this.options.ecmaVersion>=15&&s&&r){this.raise(e.start,"Invalid regular expression flag")}};function pt(e){for(var t in e){return true}return false}nt.validateRegExpPattern=function(e){this.regexp_pattern(e);if(!e.switchN&&this.options.ecmaVersion>=9&&pt(e.groupNames)){e.switchN=true;this.regexp_pattern(e)}};nt.regexp_pattern=function(e){e.pos=0;e.lastIntValue=0;e.lastStringValue="";e.lastAssertionIsQuantifiable=false;e.numCapturingParens=0;e.maxBackReference=0;e.groupNames=Object.create(null);e.backReferenceNames.length=0;e.branchID=null;this.regexp_disjunction(e);if(e.pos!==e.source.length){if(e.eat(41)){e.raise("Unmatched ')'")}if(e.eat(93)||e.eat(125)){e.raise("Lone quantifier brackets")}}if(e.maxBackReference>e.numCapturingParens){e.raise("Invalid escape")}for(var t=0,i=e.backReferenceNames;t<i.length;t+=1){var s=i[t];if(!e.groupNames[s]){e.raise("Invalid named capture referenced")}}};nt.regexp_disjunction=function(e){var t=this.options.ecmaVersion>=16;if(t){e.branchID=new ot(e.branchID,null)}this.regexp_alternative(e);while(e.eat(124)){if(t){e.branchID=e.branchID.sibling()}this.regexp_alternative(e)}if(t){e.branchID=e.branchID.parent}if(this.regexp_eatQuantifier(e,true)){e.raise("Nothing to repeat")}if(e.eat(123)){e.raise("Lone quantifier brackets")}};nt.regexp_alternative=function(e){while(e.pos<e.source.length&&this.regexp_eatTerm(e)){}};nt.regexp_eatTerm=function(e){if(this.regexp_eatAssertion(e)){if(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)){if(e.switchU){e.raise("Invalid quantifier")}}return true}if(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e)){this.regexp_eatQuantifier(e);return true}return false};nt.regexp_eatAssertion=function(e){var t=e.pos;e.lastAssertionIsQuantifiable=false;if(e.eat(94)||e.eat(36)){return true}if(e.eat(92)){if(e.eat(66)||e.eat(98)){return true}e.pos=t}if(e.eat(40)&&e.eat(63)){var i=false;if(this.options.ecmaVersion>=9){i=e.eat(60)}if(e.eat(61)||e.eat(33)){this.regexp_disjunction(e);if(!e.eat(41)){e.raise("Unterminated group")}e.lastAssertionIsQuantifiable=!i;return true}}e.pos=t;return false};nt.regexp_eatQuantifier=function(e,t){if(t===void 0)t=false;if(this.regexp_eatQuantifierPrefix(e,t)){e.eat(63);return true}return false};nt.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)};nt.regexp_eatBracedQuantifier=function(e,t){var i=e.pos;if(e.eat(123)){var s=0,r=-1;if(this.regexp_eatDecimalDigits(e)){s=e.lastIntValue;if(e.eat(44)&&this.regexp_eatDecimalDigits(e)){r=e.lastIntValue}if(e.eat(125)){if(r!==-1&&r<s&&!t){e.raise("numbers out of order in {} quantifier")}return true}}if(e.switchU&&!t){e.raise("Incomplete quantifier")}e.pos=i}return false};nt.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)};nt.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e)){return true}e.pos=t}return false};nt.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)){if(this.options.ecmaVersion>=16){var i=this.regexp_eatModifiers(e);var s=e.eat(45);if(i||s){for(var r=0;r<i.length;r++){var a=i.charAt(r);if(i.indexOf(a,r+1)>-1){e.raise("Duplicate regular expression modifiers")}}if(s){var n=this.regexp_eatModifiers(e);if(!i&&!n&&e.current()===58){e.raise("Invalid regular expression modifiers")}for(var o=0;o<n.length;o++){var h=n.charAt(o);if(n.indexOf(h,o+1)>-1||i.indexOf(h)>-1){e.raise("Duplicate regular expression modifiers")}}}}}if(e.eat(58)){this.regexp_disjunction(e);if(e.eat(41)){return true}e.raise("Unterminated group")}}e.pos=t}return false};nt.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9){this.regexp_groupSpecifier(e)}else if(e.current()===63){e.raise("Invalid group")}this.regexp_disjunction(e);if(e.eat(41)){e.numCapturingParens+=1;return true}e.raise("Unterminated group")}return false};nt.regexp_eatModifiers=function(e){var t="";var i=0;while((i=e.current())!==-1&&ut(i)){t+=R(i);e.advance()}return t};function ut(e){return e===105||e===109||e===115}nt.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)};nt.regexp_eatInvalidBracedQuantifier=function(e){if(this.regexp_eatBracedQuantifier(e,true)){e.raise("Nothing to repeat")}return false};nt.regexp_eatSyntaxCharacter=function(e){var t=e.current();if(lt(t)){e.lastIntValue=t;e.advance();return true}return false};function lt(e){return e===36||e>=40&&e<=43||e===46||e===63||e>=91&&e<=94||e>=123&&e<=125}nt.regexp_eatPatternCharacters=function(e){var t=e.pos;var i=0;while((i=e.current())!==-1&&!lt(i)){e.advance()}return e.pos!==t};nt.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();if(t!==-1&&t!==36&&!(t>=40&&t<=43)&&t!==46&&t!==63&&t!==91&&t!==94&&t!==124){e.advance();return true}return false};nt.regexp_groupSpecifier=function(e){if(e.eat(63)){if(!this.regexp_eatGroupName(e)){e.raise("Invalid group")}var t=this.options.ecmaVersion>=16;var i=e.groupNames[e.lastStringValue];if(i){if(t){for(var s=0,r=i;s<r.length;s+=1){var a=r[s];if(!a.separatedFrom(e.branchID)){e.raise("Duplicate capture group name")}}}else{e.raise("Duplicate capture group name")}}if(t){(i||(e.groupNames[e.lastStringValue]=[])).push(e.branchID)}else{e.groupNames[e.lastStringValue]=true}}};nt.regexp_eatGroupName=function(e){e.lastStringValue="";if(e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62)){return true}e.raise("Invalid capture group name")}return false};nt.regexp_eatRegExpIdentifierName=function(e){e.lastStringValue="";if(this.regexp_eatRegExpIdentifierStart(e)){e.lastStringValue+=R(e.lastIntValue);while(this.regexp_eatRegExpIdentifierPart(e)){e.lastStringValue+=R(e.lastIntValue)}return true}return false};nt.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos;var i=this.options.ecmaVersion>=11;var s=e.current(i);e.advance(i);if(s===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,i)){s=e.lastIntValue}if(ct(s)){e.lastIntValue=s;return true}e.pos=t;return false};function ct(e){return c(e,true)||e===36||e===95}nt.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos;var i=this.options.ecmaVersion>=11;var s=e.current(i);e.advance(i);if(s===92&&this.regexp_eatRegExpUnicodeEscapeSequence(e,i)){s=e.lastIntValue}if(ft(s)){e.lastIntValue=s;return true}e.pos=t;return false};function ft(e){return f(e,true)||e===36||e===95||e===8204||e===8205}nt.regexp_eatAtomEscape=function(e){if(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e)){return true}if(e.switchU){if(e.current()===99){e.raise("Invalid unicode escape")}e.raise("Invalid escape")}return false};nt.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var i=e.lastIntValue;if(e.switchU){if(i>e.maxBackReference){e.maxBackReference=i}return true}if(i<=e.numCapturingParens){return true}e.pos=t}return false};nt.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e)){e.backReferenceNames.push(e.lastStringValue);return true}e.raise("Invalid named reference")}return false};nt.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e,false)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)};nt.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e)){return true}e.pos=t}return false};nt.regexp_eatZero=function(e){if(e.current()===48&&!Ct(e.lookahead())){e.lastIntValue=0;e.advance();return true}return false};nt.regexp_eatControlEscape=function(e){var t=e.current();if(t===116){e.lastIntValue=9;e.advance();return true}if(t===110){e.lastIntValue=10;e.advance();return true}if(t===118){e.lastIntValue=11;e.advance();return true}if(t===102){e.lastIntValue=12;e.advance();return true}if(t===114){e.lastIntValue=13;e.advance();return true}return false};nt.regexp_eatControlLetter=function(e){var t=e.current();if(dt(t)){e.lastIntValue=t%32;e.advance();return true}return false};function dt(e){return e>=65&&e<=90||e>=97&&e<=122}nt.regexp_eatRegExpUnicodeEscapeSequence=function(e,t){if(t===void 0)t=false;var i=e.pos;var s=t||e.switchU;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var r=e.lastIntValue;if(s&&r>=55296&&r<=56319){var a=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var n=e.lastIntValue;if(n>=56320&&n<=57343){e.lastIntValue=(r-55296)*1024+(n-56320)+65536;return true}}e.pos=a;e.lastIntValue=r}return true}if(s&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&mt(e.lastIntValue)){return true}if(s){e.raise("Invalid unicode escape")}e.pos=i}return false};function mt(e){return e>=0&&e<=1114111}nt.regexp_eatIdentityEscape=function(e){if(e.switchU){if(this.regexp_eatSyntaxCharacter(e)){return true}if(e.eat(47)){e.lastIntValue=47;return true}return false}var t=e.current();if(t!==99&&(!e.switchN||t!==107)){e.lastIntValue=t;e.advance();return true}return false};nt.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48);e.advance()}while((t=e.current())>=48&&t<=57);return true}return false};var vt=0;var gt=1;var xt=2;nt.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(yt(t)){e.lastIntValue=-1;e.advance();return gt}var i=false;if(e.switchU&&this.options.ecmaVersion>=9&&((i=t===80)||t===112)){e.lastIntValue=-1;e.advance();var s;if(e.eat(123)&&(s=this.regexp_eatUnicodePropertyValueExpression(e))&&e.eat(125)){if(i&&s===xt){e.raise("Invalid property name")}return s}e.raise("Invalid property name")}return vt};function yt(e){return e===100||e===68||e===115||e===83||e===119||e===87}nt.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var i=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var s=e.lastStringValue;this.regexp_validateUnicodePropertyNameAndValue(e,i,s);return gt}}e.pos=t;if(this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var r=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,r)}return vt};nt.regexp_validateUnicodePropertyNameAndValue=function(e,t,i){if(!V(e.unicodeProperties.nonBinary,t)){e.raise("Invalid property name")}if(!e.unicodeProperties.nonBinary[t].test(i)){e.raise("Invalid property value")}};nt.regexp_validateUnicodePropertyNameOrValue=function(e,t){if(e.unicodeProperties.binary.test(t)){return gt}if(e.switchV&&e.unicodeProperties.binaryOfStrings.test(t)){return xt}e.raise("Invalid property name")};nt.regexp_eatUnicodePropertyName=function(e){var t=0;e.lastStringValue="";while(bt(t=e.current())){e.lastStringValue+=R(t);e.advance()}return e.lastStringValue!==""};function bt(e){return dt(e)||e===95}nt.regexp_eatUnicodePropertyValue=function(e){var t=0;e.lastStringValue="";while(kt(t=e.current())){e.lastStringValue+=R(t);e.advance()}return e.lastStringValue!==""};function kt(e){return bt(e)||Ct(e)}nt.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)};nt.regexp_eatCharacterClass=function(e){if(e.eat(91)){var t=e.eat(94);var i=this.regexp_classContents(e);if(!e.eat(93)){e.raise("Unterminated character class")}if(t&&i===xt){e.raise("Negated character class may contain strings")}return true}return false};nt.regexp_classContents=function(e){if(e.current()===93){return gt}if(e.switchV){return this.regexp_classSetExpression(e)}this.regexp_nonEmptyClassRanges(e);return gt};nt.regexp_nonEmptyClassRanges=function(e){while(this.regexp_eatClassAtom(e)){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var i=e.lastIntValue;if(e.switchU&&(t===-1||i===-1)){e.raise("Invalid character class")}if(t!==-1&&i!==-1&&t>i){e.raise("Range out of order in character class")}}}};nt.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e)){return true}if(e.switchU){var i=e.current();if(i===99||It(i)){e.raise("Invalid class escape")}e.raise("Invalid escape")}e.pos=t}var s=e.current();if(s!==93){e.lastIntValue=s;e.advance();return true}return false};nt.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98)){e.lastIntValue=8;return true}if(e.switchU&&e.eat(45)){e.lastIntValue=45;return true}if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e)){return true}e.pos=t}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)};nt.regexp_classSetExpression=function(e){var t=gt,i;if(this.regexp_eatClassSetRange(e));else if(i=this.regexp_eatClassSetOperand(e)){if(i===xt){t=xt}var s=e.pos;while(e.eatChars([38,38])){if(e.current()!==38&&(i=this.regexp_eatClassSetOperand(e))){if(i!==xt){t=gt}continue}e.raise("Invalid character in character class")}if(s!==e.pos){return t}while(e.eatChars([45,45])){if(this.regexp_eatClassSetOperand(e)){continue}e.raise("Invalid character in character class")}if(s!==e.pos){return t}}else{e.raise("Invalid character in character class")}for(;;){if(this.regexp_eatClassSetRange(e)){continue}i=this.regexp_eatClassSetOperand(e);if(!i){return t}if(i===xt){t=xt}}};nt.regexp_eatClassSetRange=function(e){var t=e.pos;if(this.regexp_eatClassSetCharacter(e)){var i=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassSetCharacter(e)){var s=e.lastIntValue;if(i!==-1&&s!==-1&&i>s){e.raise("Range out of order in character class")}return true}e.pos=t}return false};nt.regexp_eatClassSetOperand=function(e){if(this.regexp_eatClassSetCharacter(e)){return gt}return this.regexp_eatClassStringDisjunction(e)||this.regexp_eatNestedClass(e)};nt.regexp_eatNestedClass=function(e){var t=e.pos;if(e.eat(91)){var i=e.eat(94);var s=this.regexp_classContents(e);if(e.eat(93)){if(i&&s===xt){e.raise("Negated character class may contain strings")}return s}e.pos=t}if(e.eat(92)){var r=this.regexp_eatCharacterClassEscape(e);if(r){return r}e.pos=t}return null};nt.regexp_eatClassStringDisjunction=function(e){var t=e.pos;if(e.eatChars([92,113])){if(e.eat(123)){var i=this.regexp_classStringDisjunctionContents(e);if(e.eat(125)){return i}}else{e.raise("Invalid escape")}e.pos=t}return null};nt.regexp_classStringDisjunctionContents=function(e){var t=this.regexp_classString(e);while(e.eat(124)){if(this.regexp_classString(e)===xt){t=xt}}return t};nt.regexp_classString=function(e){var t=0;while(this.regexp_eatClassSetCharacter(e)){t++}return t===1?gt:xt};nt.regexp_eatClassSetCharacter=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatCharacterEscape(e)||this.regexp_eatClassSetReservedPunctuator(e)){return true}if(e.eat(98)){e.lastIntValue=8;return true}e.pos=t;return false}var i=e.current();if(i<0||i===e.lookahead()&&_t(i)){return false}if(wt(i)){return false}e.advance();e.lastIntValue=i;return true};function _t(e){return e===33||e>=35&&e<=38||e>=42&&e<=44||e===46||e>=58&&e<=64||e===94||e===96||e===126}function wt(e){return e===40||e===41||e===45||e===47||e>=91&&e<=93||e>=123&&e<=125}nt.regexp_eatClassSetReservedPunctuator=function(e){var t=e.current();if(St(t)){e.lastIntValue=t;e.advance();return true}return false};function St(e){return e===33||e===35||e===37||e===38||e===44||e===45||e>=58&&e<=62||e===64||e===96||e===126}nt.regexp_eatClassControlLetter=function(e){var t=e.current();if(Ct(t)||t===95){e.lastIntValue=t%32;e.advance();return true}return false};nt.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2)){return true}if(e.switchU){e.raise("Invalid escape")}e.pos=t}return false};nt.regexp_eatDecimalDigits=function(e){var t=e.pos;var i=0;e.lastIntValue=0;while(Ct(i=e.current())){e.lastIntValue=10*e.lastIntValue+(i-48);e.advance()}return e.pos!==t};function Ct(e){return e>=48&&e<=57}nt.regexp_eatHexDigits=function(e){var t=e.pos;var i=0;e.lastIntValue=0;while(Et(i=e.current())){e.lastIntValue=16*e.lastIntValue+At(i);e.advance()}return e.pos!==t};function Et(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function At(e){if(e>=65&&e<=70){return 10+(e-65)}if(e>=97&&e<=102){return 10+(e-97)}return e-48}nt.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var i=e.lastIntValue;if(t<=3&&this.regexp_eatOctalDigit(e)){e.lastIntValue=t*64+i*8+e.lastIntValue}else{e.lastIntValue=t*8+i}}else{e.lastIntValue=t}return true}return false};nt.regexp_eatOctalDigit=function(e){var t=e.current();if(It(t)){e.lastIntValue=t-48;e.advance();return true}e.lastIntValue=0;return false};function It(e){return e>=48&&e<=55}nt.regexp_eatFixedHexDigits=function(e,t){var i=e.pos;e.lastIntValue=0;for(var s=0;s<t;++s){var r=e.current();if(!Et(r)){e.pos=i;return false}e.lastIntValue=16*e.lastIntValue+At(r);e.advance()}return true};var Pt=function e(t){this.type=t.type;this.value=t.value;this.start=t.start;this.end=t.end;if(t.options.locations){this.loc=new B(t,t.startLoc,t.endLoc)}if(t.options.ranges){this.range=[t.start,t.end]}};var Vt=he.prototype;Vt.next=function(e){if(!e&&this.type.keyword&&this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword)}if(this.options.onToken){this.options.onToken(new Pt(this))}this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken()};Vt.getToken=function(){this.next();return new Pt(this)};if(typeof Symbol!=="undefined"){Vt[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===b.eof,value:t}}}}}Vt.nextToken=function(){var e=this.curContext();if(!e||!e.preserveSpace){this.skipSpace()}this.start=this.pos;if(this.options.locations){this.startLoc=this.curPosition()}if(this.pos>=this.input.length){return this.finishToken(b.eof)}if(e.override){return e.override(this)}else{this.readToken(this.fullCharCodeAtPos())}};Vt.readToken=function(e){if(c(e,this.options.ecmaVersion>=6)||e===92){return this.readWord()}return this.getTokenFromCode(e)};Vt.fullCharCodeAt=function(e){var t=this.input.charCodeAt(e);if(t<=55295||t>=56320){return t}var i=this.input.charCodeAt(e+1);return i<=56319||i>=57344?t:(t<<10)+i-56613888};Vt.fullCharCodeAtPos=function(){return this.fullCharCodeAt(this.pos)};Vt.skipBlockComment=function(){var e=this.options.onComment&&this.curPosition();var t=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(i===-1){this.raise(this.pos-2,"Unterminated comment")}this.pos=i+2;if(this.options.locations){for(var s=void 0,r=t;(s=S(this.input,r,this.pos))>-1;){++this.curLine;r=this.lineStart=s}}if(this.options.onComment){this.options.onComment(true,this.input.slice(t+2,i),t,this.pos,e,this.curPosition())}};Vt.skipLineComment=function(e){var t=this.pos;var i=this.options.onComment&&this.curPosition();var s=this.input.charCodeAt(this.pos+=e);while(this.pos<this.input.length&&!w(s)){s=this.input.charCodeAt(++this.pos)}if(this.options.onComment){this.options.onComment(false,this.input.slice(t+e,this.pos),t,this.pos,i,this.curPosition())}};Vt.skipSpace=function(){e:while(this.pos<this.input.length){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:if(this.input.charCodeAt(this.pos+1)===10){++this.pos}case 10:case 8232:case 8233:++this.pos;if(this.options.locations){++this.curLine;this.lineStart=this.pos}break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(e>8&&e<14||e>=5760&&C.test(String.fromCharCode(e))){++this.pos}else{break e}}}};Vt.finishToken=function(e,t){this.end=this.pos;if(this.options.locations){this.endLoc=this.curPosition()}var i=this.type;this.type=e;this.value=t;this.updateContext(i)};Vt.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57){return this.readNumber(true)}var t=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&e===46&&t===46){this.pos+=3;return this.finishToken(b.ellipsis)}else{++this.pos;return this.finishToken(b.dot)}};Vt.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp()}if(e===61){return this.finishOp(b.assign,2)}return this.finishOp(b.slash,1)};Vt.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1);var i=1;var s=e===42?b.star:b.modulo;if(this.options.ecmaVersion>=7&&e===42&&t===42){++i;s=b.starstar;t=this.input.charCodeAt(this.pos+2)}if(t===61){return this.finishOp(b.assign,i+1)}return this.finishOp(s,i)};Vt.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(this.options.ecmaVersion>=12){var i=this.input.charCodeAt(this.pos+2);if(i===61){return this.finishOp(b.assign,3)}}return this.finishOp(e===124?b.logicalOR:b.logicalAND,2)}if(t===61){return this.finishOp(b.assign,2)}return this.finishOp(e===124?b.bitwiseOR:b.bitwiseAND,1)};Vt.readToken_caret=function(){var e=this.input.charCodeAt(this.pos+1);if(e===61){return this.finishOp(b.assign,2)}return this.finishOp(b.bitwiseXOR,1)};Vt.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===e){if(t===45&&!this.inModule&&this.input.charCodeAt(this.pos+2)===62&&(this.lastTokEnd===0||k.test(this.input.slice(this.lastTokEnd,this.pos)))){this.skipLineComment(3);this.skipSpace();return this.nextToken()}return this.finishOp(b.incDec,2)}if(t===61){return this.finishOp(b.assign,2)}return this.finishOp(b.plusMin,1)};Vt.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1);var i=1;if(t===e){i=e===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+i)===61){return this.finishOp(b.assign,i+1)}return this.finishOp(b.bitShift,i)}if(t===33&&e===60&&!this.inModule&&this.input.charCodeAt(this.pos+2)===45&&this.input.charCodeAt(this.pos+3)===45){this.skipLineComment(4);this.skipSpace();return this.nextToken()}if(t===61){i=2}return this.finishOp(b.relational,i)};Vt.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);if(t===61){return this.finishOp(b.equality,this.input.charCodeAt(this.pos+2)===61?3:2)}if(e===61&&t===62&&this.options.ecmaVersion>=6){this.pos+=2;return this.finishToken(b.arrow)}return this.finishOp(e===61?b.eq:b.prefix,1)};Vt.readToken_question=function(){var e=this.options.ecmaVersion;if(e>=11){var t=this.input.charCodeAt(this.pos+1);if(t===46){var i=this.input.charCodeAt(this.pos+2);if(i<48||i>57){return this.finishOp(b.questionDot,2)}}if(t===63){if(e>=12){var s=this.input.charCodeAt(this.pos+2);if(s===61){return this.finishOp(b.assign,3)}}return this.finishOp(b.coalesce,2)}}return this.finishOp(b.question,1)};Vt.readToken_numberSign=function(){var e=this.options.ecmaVersion;var t=35;if(e>=13){++this.pos;t=this.fullCharCodeAtPos();if(c(t,true)||t===92){return this.finishToken(b.privateId,this.readWord1())}}this.raise(this.pos,"Unexpected character '"+R(t)+"'")};Vt.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:++this.pos;return this.finishToken(b.parenL);case 41:++this.pos;return this.finishToken(b.parenR);case 59:++this.pos;return this.finishToken(b.semi);case 44:++this.pos;return this.finishToken(b.comma);case 91:++this.pos;return this.finishToken(b.bracketL);case 93:++this.pos;return this.finishToken(b.bracketR);case 123:++this.pos;return this.finishToken(b.braceL);case 125:++this.pos;return this.finishToken(b.braceR);case 58:++this.pos;return this.finishToken(b.colon);case 96:if(this.options.ecmaVersion<6){break}++this.pos;return this.finishToken(b.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(t===120||t===88){return this.readRadixNumber(16)}if(this.options.ecmaVersion>=6){if(t===111||t===79){return this.readRadixNumber(8)}if(t===98||t===66){return this.readRadixNumber(2)}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(false);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 63:return this.readToken_question();case 126:return this.finishOp(b.prefix,1);case 35:return this.readToken_numberSign()}this.raise(this.pos,"Unexpected character '"+R(e)+"'")};Vt.finishOp=function(e,t){var i=this.input.slice(this.pos,this.pos+t);this.pos+=t;return this.finishToken(e,i)};Vt.readRegexp=function(){var e,t,i=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(i,"Unterminated regular expression")}var s=this.input.charAt(this.pos);if(k.test(s)){this.raise(i,"Unterminated regular expression")}if(!e){if(s==="["){t=true}else if(s==="]"&&t){t=false}else if(s==="/"&&!t){break}e=s==="\\"}else{e=false}++this.pos}var r=this.input.slice(i,this.pos);++this.pos;var a=this.pos;var n=this.readWord1();if(this.containsEsc){this.unexpected(a)}var o=this.regexpState||(this.regexpState=new ht(this));o.reset(i,r,n);this.validateRegExpFlags(o);this.validateRegExpPattern(o);var h=null;try{h=new RegExp(r,n)}catch(e){}return this.finishToken(b.regexp,{pattern:r,flags:n,value:h})};Vt.readInt=function(e,t,i){var s=this.options.ecmaVersion>=12&&t===undefined;var r=i&&this.input.charCodeAt(this.pos)===48;var a=this.pos,n=0,o=0;for(var h=0,p=t==null?Infinity:t;h<p;++h,++this.pos){var u=this.input.charCodeAt(this.pos),l=void 0;if(s&&u===95){if(r){this.raiseRecoverable(this.pos,"Numeric separator is not allowed in legacy octal numeric literals")}if(o===95){this.raiseRecoverable(this.pos,"Numeric separator must be exactly one underscore")}if(h===0){this.raiseRecoverable(this.pos,"Numeric separator is not allowed at the first of digits")}o=u;continue}if(u>=97){l=u-97+10}else if(u>=65){l=u-65+10}else if(u>=48&&u<=57){l=u-48}else{l=Infinity}if(l>=e){break}o=u;n=n*e+l}if(s&&o===95){this.raiseRecoverable(this.pos-1,"Numeric separator is not allowed at the last of digits")}if(this.pos===a||t!=null&&this.pos-a!==t){return null}return n};function Nt(e,t){if(t){return parseInt(e,8)}return parseFloat(e.replace(/_/g,""))}function Tt(e){if(typeof BigInt!=="function"){return null}return BigInt(e.replace(/_/g,""))}Vt.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var i=this.readInt(e);if(i==null){this.raise(this.start+2,"Expected number in radix "+e)}if(this.options.ecmaVersion>=11&&this.input.charCodeAt(this.pos)===110){i=Tt(this.input.slice(t,this.pos));++this.pos}else if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}return this.finishToken(b.num,i)};Vt.readNumber=function(e){var t=this.pos;if(!e&&this.readInt(10,undefined,true)===null){this.raise(t,"Invalid number")}var i=this.pos-t>=2&&this.input.charCodeAt(t)===48;if(i&&this.strict){this.raise(t,"Invalid number")}var s=this.input.charCodeAt(this.pos);if(!i&&!e&&this.options.ecmaVersion>=11&&s===110){var r=Tt(this.input.slice(t,this.pos));++this.pos;if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}return this.finishToken(b.num,r)}if(i&&/[89]/.test(this.input.slice(t,this.pos))){i=false}if(s===46&&!i){++this.pos;this.readInt(10);s=this.input.charCodeAt(this.pos)}if((s===69||s===101)&&!i){s=this.input.charCodeAt(++this.pos);if(s===43||s===45){++this.pos}if(this.readInt(10)===null){this.raise(t,"Invalid number")}}if(c(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}var a=Nt(this.input.slice(t,this.pos),i);return this.finishToken(b.num,a)};Vt.readCodePoint=function(){var e=this.input.charCodeAt(this.pos),t;if(e===123){if(this.options.ecmaVersion<6){this.unexpected()}var i=++this.pos;t=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos);++this.pos;if(t>1114111){this.invalidStringToken(i,"Code point out of bounds")}}else{t=this.readHexChar(4)}return t};Vt.readString=function(e){var t="",i=++this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated string constant")}var s=this.input.charCodeAt(this.pos);if(s===e){break}if(s===92){t+=this.input.slice(i,this.pos);t+=this.readEscapedChar(false);i=this.pos}else if(s===8232||s===8233){if(this.options.ecmaVersion<10){this.raise(this.start,"Unterminated string constant")}++this.pos;if(this.options.locations){this.curLine++;this.lineStart=this.pos}}else{if(w(s)){this.raise(this.start,"Unterminated string constant")}++this.pos}}t+=this.input.slice(i,this.pos++);return this.finishToken(b.string,t)};var Lt={};Vt.tryReadTemplateToken=function(){this.inTemplateElement=true;try{this.readTmplToken()}catch(e){if(e===Lt){this.readInvalidTemplateToken()}else{throw e}}this.inTemplateElement=false};Vt.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9){throw Lt}else{this.raise(e,t)}};Vt.readTmplToken=function(){var e="",t=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated template")}var i=this.input.charCodeAt(this.pos);if(i===96||i===36&&this.input.charCodeAt(this.pos+1)===123){if(this.pos===this.start&&(this.type===b.template||this.type===b.invalidTemplate)){if(i===36){this.pos+=2;return this.finishToken(b.dollarBraceL)}else{++this.pos;return this.finishToken(b.backQuote)}}e+=this.input.slice(t,this.pos);return this.finishToken(b.template,e)}if(i===92){e+=this.input.slice(t,this.pos);e+=this.readEscapedChar(true);t=this.pos}else if(w(i)){e+=this.input.slice(t,this.pos);++this.pos;switch(i){case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos}case 10:e+="\n";break;default:e+=String.fromCharCode(i);break}if(this.options.locations){++this.curLine;this.lineStart=this.pos}t=this.pos}else{++this.pos}}};Vt.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++){switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if(this.input[this.pos+1]!=="{"){break}case"`":return this.finishToken(b.invalidTemplate,this.input.slice(this.start,this.pos));case"\r":if(this.input[this.pos+1]==="\n"){++this.pos}case"\n":case"\u2028":case"\u2029":++this.curLine;this.lineStart=this.pos+1;break}}this.raise(this.start,"Unterminated template")};Vt.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);++this.pos;switch(t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return R(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos}case 10:if(this.options.locations){this.lineStart=this.pos;++this.curLine}return"";case 56:case 57:if(this.strict){this.invalidStringToken(this.pos-1,"Invalid escape sequence")}if(e){var i=this.pos-1;this.invalidStringToken(i,"Invalid escape sequence in template string")}default:if(t>=48&&t<=55){var s=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0];var r=parseInt(s,8);if(r>255){s=s.slice(0,-1);r=parseInt(s,8)}this.pos+=s.length-1;t=this.input.charCodeAt(this.pos);if((s!=="0"||t===56||t===57)&&(this.strict||e)){this.invalidStringToken(this.pos-1-s.length,e?"Octal literal in template string":"Octal literal in strict mode")}return String.fromCharCode(r)}if(w(t)){if(this.options.locations){this.lineStart=this.pos;++this.curLine}return""}return String.fromCharCode(t)}};Vt.readHexChar=function(e){var t=this.pos;var i=this.readInt(16,e);if(i===null){this.invalidStringToken(t,"Bad character escape sequence")}return i};Vt.readWord1=function(){this.containsEsc=false;var e="",t=true,i=this.pos;var s=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var r=this.fullCharCodeAtPos();if(f(r,s)){this.pos+=r<=65535?1:2}else if(r===92){this.containsEsc=true;e+=this.input.slice(i,this.pos);var a=this.pos;if(this.input.charCodeAt(++this.pos)!==117){this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX")}++this.pos;var n=this.readCodePoint();if(!(t?c:f)(n,s)){this.invalidStringToken(a,"Invalid Unicode escape")}e+=R(n);i=this.pos}else{break}t=false}return e+this.input.slice(i,this.pos)};Vt.readWord=function(){var e=this.readWord1();var t=b.name;if(this.keywords.test(e)){t=x[e]}return this.finishToken(t,e)};var Rt="8.19.0";he.acorn={Parser:he,version:Rt,defaultOptions:F,Position:O,SourceLocation:B,getLineInfo:M,Node:Re,TokenType:d,tokTypes:b,keywordTypes:x,TokContext:Se,tokContexts:Ce,isIdentifierChar:f,isIdentifierStart:c,Token:Pt,isNewLine:w,lineBreak:k,lineBreakG:_,nonASCIIwhitespace:C};function Dt(e,t){return he.parse(e,t)}function Ot(e,t,i){return he.parseExpressionAt(e,t,i)}function Bt(e,t){return he.tokenizer(e,t)}e.Node=Re;e.Parser=he;e.Position=O;e.SourceLocation=B;e.TokContext=Se;e.Token=Pt;e.TokenType=d;e.defaultOptions=F;e.getLineInfo=M;e.isIdentifierChar=f;e.isIdentifierStart=c;e.isNewLine=w;e.keywordTypes=x;e.lineBreak=k;e.lineBreakG=_;e.nonASCIIwhitespace=C;e.parse=Dt;e.parseExpressionAt=Ot;e.tokContexts=Ce;e.tokTypes=b;e.tokenizer=Bt;e.version=Rt});
    return exports.parse; })();
    const NP = Array.prototype.push, NU = Array.prototype.unshift;
    const S = {
        v: "53",
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
    /* BRIO: V52 approved adapters, 2026-10-07; ALL new visuals live-pending.
     * Keep existing V50 draw gates/cleanup and passive budgets. Solo-only information.
     * Limits:128 projectile histories x32 points x1.2s,256 named entities,100 eliminations,
     * one500ms sampler. No network sends, source evaluation, physics or hit prediction.
     * Native aim is positive X. Server spread/100 is a reticle scalar with no known angle conversion; draw observed envelopes only.
     * Exact gun/rarity, stable stationary server aim, raw signed offsets and scalar bins support calibration without fake bounds.
     * Stats damage attribution is unavailable; NEVER attach nearby-player guesses to damage.
     */
    const INDICATOR_COLORS={nearestPlayer:'#a81020',nearestChest:'#ffd21c',nearestAirdrop:'#f28b16',safeZoneIndicator:'#168cff',lootIndicator:'#ffd21c'};
    const v53={deferred:new Set,perf:null,playerChecks:new WeakMap,outlineQueue:new Set,outlinePreparing:false,timer:0,zone:null,zoneAt:0,paths:new Map,lootUis:new Map,stats:null,post:null,postStyles:new Map,shotChecks:new Map,outlines:new Map,outlineFailures:new Set};
    /* BRIO: V53 performance telemetry. Only BRIO-owned callbacks are timed (one in64 calls);
     * no native RAF/Canvas/Array/protocol timing hook is installed. Per-phase histograms are capped64 keys.
     * Native local draws supply cadence, not ping/server latency. Long tasks include all page work.
     * A user-clicked24-second comparison temporarily pauses diagnostics, then modifiers, retaining challenges,
     * cosmetics and raw preferences. The same epoch/end/destroy cleanup always restores the saved behavior. */
    const v53PerfBegin=name=>{ /* BRIO block V53: v53PerfBegin — Count scoped BRIO calls and time only one in64; bound phase/name rows and preserve native delegation. */
        const p=v53.perf;if(!p)return null;const key=p.phase+'|'+name;
        let r=p.rows.get(key);if(!r){ /* BRIO block V53: v53PerfBegin — Count scoped BRIO calls and time only one in64; bound phase/name rows and preserve native delegation. */ if(p.rows.size>=64)return null;r={phase:p.phase,name,calls:0,samples:0,totalMs:0,maxMs:0,buckets:[0,0,0,0,0]};p.rows.set(key,r);}
        r.calls++;return (r.calls-1)%64===0?{r,at:performance.now()}:null;
    };
    const v53PerfEnd=(name,token)=>{ /* BRIO block V53: v53PerfEnd — Aggregate elapsed sampled BRIO cost into five fixed buckets; never retain per-frame samples. */
        if(!token)return;const ms=Math.max(0,performance.now()-token.at),r=token.r;
        r.samples++;r.totalMs+=ms;r.maxMs=Math.max(r.maxMs,ms);r.buckets[ms<=.1?0:ms<=1?1:ms<=4?2:ms<=16?3:4]++;
    };
    const v53Quiet=/* BRIO expr V53: v53Quiet — Read the user-authorized temporary diagnostic pause; keep raw preferences and native packets unchanged. */ ()=>!!v53.perf?.comparison&&v53.perf.comparison.index>=1;
    const v53ModsPaused=/* BRIO expr V53: v53ModsPaused — Read the last comparison phase only; gameplay challenges/cosmetics remain effective. */ ()=>!!v53.perf?.comparison&&v53.perf.comparison.index===2;
    const v53Frame=ctx=>{ /* BRIO block V53: v53Frame — Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps. */
        const p=v53.perf,canvas=ctx?.canvas;if(!p||!canvas||D.hidden)return;
        const known=S.localTrack?.state?.screen?.canvas;if(known&&canvas!==known)return;
        const now=performance.now();if(p.lastFrame!=null&&now-p.lastFrame<4)return;
        let r=p.frames.get(p.phase);if(!r){ /* BRIO block V53: v53Frame — Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps. */ r={phase:p.phase,frames:0,intervals:0,sumMs:0,maxMs:0,over33Ms:0,over50Ms:0,gapsOver250Ms:0};p.frames.set(p.phase,r);}
        r.frames++;if(p.lastFrame!=null){ /* BRIO block V53: v53Frame — Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps. */ const dt=now-p.lastFrame;if(dt<=250){ /* BRIO block V53: v53Frame — Measure visible reached-local draw cadence, excluding duplicate draws and separating long/menu gaps. */ r.intervals++;r.sumMs+=dt;r.maxMs=Math.max(r.maxMs,dt);if(dt>33)r.over33Ms++;if(dt>50)r.over50Ms++;}else r.gapsOver250Ms++;}p.lastFrame=now;
    };
    const v53PerfReport=()=>{ /* BRIO block V53: v53PerfReport — Report bounded sampled costs/cadence and explicit attribution limits; nested callback rows overlap. */
        const p=v53.perf;if(!p)return null;
        return {phase:p.phase,comparison:p.comparison?{phase:p.comparison.index,remainingSeconds:Math.max(0,Math.ceil((p.comparison.until-performance.now())/1000))}:null,
            sampledCallbacks:[...p.rows.values()].map(/* BRIO expr V53: v53PerfReport — Report bounded sampled costs/cadence and explicit attribution limits; nested callback rows overlap. */ r=>({...r,meanSampleMs:r.samples?r.totalMs/r.samples:0})),cadence:[...p.frames.values()].map(/* BRIO expr V53: v53PerfReport — Report bounded sampled costs/cadence and explicit attribution limits; nested callback rows overlap. */ r=>({...r,meanIntervalMs:r.intervals?r.sumMs/r.intervals:null})),
            deferredSubtrees:p.deferredSubtrees,settingsReads:p.settingsReads,pathNormalizations:p.pathNormalizations,hudSignatureScans:p.hudScans,inventoryChecks:p.inventoryChecks,retirementVisits:p.retirementVisits,maskPreparations:p.maskPreparations,diagnosticSkipped:p.diagnosticSkipped,longTasks:p.longTasks,
            limits:'one in64 callback samples; cadence from visible native local draws; page long tasks are not attributed; phases have different gameplay, so this is not a controlled ping/FPS benchmark'};
    };
    const v53PerfFinish=reason=>{ /* BRIO block V53: v53PerfFinish — Restore temporary comparison behavior and record completion/cancellation without writing preferences. */
        const p=v53.perf;if(!p?.comparison)return;
        p.comparison=null;p.phase='normal';p.lastFrame=null;p.pausedSettings=null;featureEx.at=-Infinity;
        syncFeatureSettings();log('V53 PERFORMANCE COMPARISON END',{reason,metrics:v53PerfReport(),savedPreferencesUnchanged:true});
    };
    const v53PerfAdvance=()=>{ /* BRIO block V53: v53PerfAdvance — Advance each eight-second comparison phase only after the explicit click; restore on completion. */
        const p=v53.perf,c=p?.comparison;if(!c||performance.now()<c.until)return;
        if(c.index>=2){ /* BRIO block V53: v53PerfAdvance — Advance each eight-second comparison phase only after the explicit click; restore on completion. */ v53PerfFinish('complete');return;}
        c.index++;c.until=performance.now()+8000;p.phase=c.index===1?'quiet diagnostics':'modifiers paused';p.lastFrame=null;p.pausedSettings=null;featureEx.at=-Infinity;
        syncFeatureSettings();log('V53 PERFORMANCE PHASE',{phase:p.phase,seconds:8,gameplayChallengesUnchanged:true});
    };
    const v53PerfStart=()=>{ /* BRIO block V53: v53PerfStart — Start or cancel an explicit24-second diagnostic/modifier comparison during a live native match. */
        const p=v53.perf;if(!p||!S.renderer||v53.stats?.finished||S.destroyed)return;
        if(p.comparison){ /* BRIO block V53: v53PerfStart — Start or cancel an explicit24-second diagnostic/modifier comparison during a live native match. */ v53PerfFinish('user cancelled');return;}
        p.comparison={index:0,until:performance.now()+8000};p.phase='comparison normal';p.lastFrame=null;
        log('V53 PERFORMANCE PHASE',{phase:p.phase,seconds:8,plan:['normal modifiers + diagnostics','same modifiers, quiet diagnostics','quiet diagnostics, modifiers temporarily paused'],automaticRestore:true});
    };
    const v53PerfReset=start=>{ /* BRIO block V53: v53PerfReset — Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy. */
        const old=v53.perf;if(old?.comparison){ /* BRIO block V53: v53PerfReset — Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy. */ old.comparison=null;featureEx.at=-Infinity;}old?.observer?.disconnect?.();
        v53.perf=start?{phase:'normal',comparison:null,rows:new Map,frames:new Map,lastFrame:null,deferredSubtrees:0,pathNormalizations:0,settingsReads:0,hudScans:0,inventoryChecks:0,retirementVisits:0,maskPreparations:0,diagnosticSkipped:0,longTasks:{supported:false,count:0,totalMs:0,maxMs:0,byPhase:{}},observer:null,pausedSettings:null}:null;
        if(start&&typeof W.PerformanceObserver==='function')try{ /* BRIO block V53: v53PerfReset — Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy. */
            const p=v53.perf,observer=new W.PerformanceObserver(list=>{ /* BRIO block V53: v53PerfReset — Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy. */ if(v53.perf!==p)return;for(const e of list.getEntries()){ /* BRIO block V53: v53PerfReset — Disconnect the optional long-task observer and clear phase/aggregate state at native Play/destroy. */ const n=Number(e.duration);if(!Number.isFinite(n))continue;const t=p.longTasks;t.count++;t.totalMs+=n;t.maxMs=Math.max(t.maxMs,n);t.byPhase[p.phase]=(t.byPhase[p.phase]||0)+1;}});
            observer.observe({type:'longtask',buffered:false});p.observer=observer;p.longTasks.supported=true;
        }catch(_){/* Optional browser API: callback costs/cadence remain available if longtask is unsupported. */}
    };
    const v53PrepareOutline=()=>{ /* BRIO block V53: v53PrepareOutline — Prepare at most one queued asset per500ms sampler tick; no alpha readback in native drawing. */
        if(v53Quiet()||!v53.outlineQueue.size)return;const image=v53.outlineQueue.values().next().value;v53.outlineQueue.delete(image);
        const t=v53PerfBegin('outline preparation');v53.outlinePreparing=true;
        try{ /* BRIO block V53: v53PrepareOutline — Prepare at most one queued asset per500ms sampler tick; no alpha readback in native drawing. */ v53OutlineMask(image);if(v53.perf)v53.perf.maskPreparations++;}finally{ /* BRIO block V53: v53PrepareOutline — Prepare at most one queued asset per500ms sampler tick; no alpha readback in native drawing. */ v53.outlinePreparing=false;v53PerfEnd('outline preparation',t);}
    };
    const EMPTY_DAMAGE_POOL=Object.freeze([]);
    const v53PlayerPreflight=r=>{ /* BRIO block V53: v53PlayerPreflight — Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text. */
        const pool=r['Áa']||EMPTY_DAMAGE_POOL,previous=v53.playerChecks.get(r),last=pool[pool.length-1];
        if(previous&&previous.a===r['aá']&&previous.b===r['ä']&&previous.c===r['ÁÆ']&&previous.direction===r['ÁÄå']&&previous.pool===pool&&previous.length===pool.length&&previous.last===last)return;
        for(const node of [r['aá'],r['ä'],r['áË'],r['ÄÂ'],r['ÁÆ']])gateNativeDraw(node,'heldWeapons',/* BRIO expr V53: v53PlayerPreflight — Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text. */ e=>!!e.hideWeapons);
        gateNativeDraw(r['ÁÄå'],'damageDirection',/* BRIO expr V53: v53PlayerPreflight — Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text. */ e=>!!e.noDamageDirection);
        for(let i=Math.max(0,pool.length-64);i<pool.length;i++)gateNativeDraw(pool[i],'damageNumbers',/* BRIO expr V53: v53PlayerPreflight — Use unchanged pointer/pool-length checks before gating held replacements, direction arrows and new damage text. */ e=>!!e.noDamageNumbers);
        v53.playerChecks.set(r,{a:r['aá'],b:r['ä'],c:r['ÁÆ'],direction:r['ÁÄå'],pool,length:pool.length,last});
    };
    const v53DeferredNative=root=>{
        /* BRIO: native constructors may attach an EMPTY HUD root to an observed scene, then populate
         * it after add returns. A saturated96-container budget cannot observe its later adds. Coalesce
         * at most32 such roots per event turn and inspect their completed<=80-node subtrees in one
         * epoch-guarded microtask before the next browser frame. No timer/global hook/cap increase. */
        if(!root||root['À']||root.canvas||'text'in root||root.__brioHudClone||String(root.type||'').startsWith('brio')||!Array.isArray(root['âè'])||(root['âè'].length+(root['ÉE']?.length||0))!==0||v53.deferred.has(root)||v53.deferred.size>=32)return;
        const epoch=S.runEpoch,pending=v53.deferred,first=v53.deferred.size===0;v53.deferred.add(root);if(!first)return;
        queueMicrotask(()=>{ /* BRIO block V53: v53DeferredNative — Inspect up to32 completed native roots with80-node and epoch guards; isolate errors without broad hooks. */
            if(S.destroyed||S.runEpoch!==epoch||v53.deferred!==pending)return;const roots=[...pending];pending.clear();
            for(const node of roots)try{ /* BRIO block V53: v53DeferredNative — Inspect up to32 completed native roots with80-node and epoch guards; isolate errors without broad hooks. */ for(const child of hudWalk(node,80))hudCandidate(child);if(v53.perf)v53.perf.deferredSubtrees++;}catch(e){ /* BRIO block V53: v53DeferredNative — Inspect up to32 completed native roots with80-node and epoch guards; isolate errors without broad hooks. */ if(S.errors.length<100)S.errors.push('deferred native subtree: '+String(e));}
        });
    };
    const v53InventoryRoot=root=>{
        /* Exact native èê: six100px slot holders, two source prompt strings, nested materials and105px
         * selection outline. Material icon depth is3, not2. Validate before generic48-child cap; never match
         * broad world scenes or remote inventory clones. Changed descendants get a one-second retry. */
        if(nativeDrawGates.get(root)?.gates.has('inventoryHud'))return;
        const front=root['âè']||[],back=root['ÉE']||[],length=front.length+back.length;if(length<6||length>128)return;
        if(!S.inventoryRootChecks)S.inventoryRootChecks=new WeakMap;
        const now=performance.now(),old=S.inventoryRootChecks.get(root);if(old&&old.length===length&&now-old.at<1000)return;
        S.inventoryRootChecks.set(root,{length,at:now});
        let slots=0,q=false,tab=false;for(const list of [front,back])for(const n of list){ /* BRIO block V53: v53InventoryRoot — Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection. */
            if(!n||n.__brioHudClone||String(n.type||'').startsWith('brio'))continue;
            if(n.text==='Press Q to Build')q=true;if(n.text==='Press Tab to Manage Inventory')tab=true;
            const a=n['âè']||[],b=n['ÉE']||[];if(a.length+b.length>20)continue;
            if([...a,...b].some(/* BRIO expr V53: v53InventoryRoot — Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection. */ c=>c?.width===100&&c?.height===100&&(c.type==='rectangle'||/\/inv[0-6]\.png$/i.test(hudPath(c)))))slots++;
        }
        if(slots<5)return;if(v53.perf)v53.perf.inventoryChecks++;
        const materials=new Set,stack=[[root,0]],seen=new Set;let visits=0,selected=false;
        while(stack.length&&visits++<180){ /* BRIO block V53: v53InventoryRoot — Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection. */ const [n,depth]=stack.pop();if(!n||seen.has(n)||n.__brioHudClone||String(n.type||'').startsWith('brio'))continue;seen.add(n);
            const m=hudPath(n).match(/\/(wood|brick|metal|scrap)\.png$/i);if(m)materials.add(m[1].toLowerCase());
            if(n.width===105&&n.height===105&&n.lineWidth===5)selected=true;
            if(depth<3)for(const key of ['âè','ÉE'])for(const child of (n[key]||[]).slice(0,64))stack.push([child,depth+1]);
        }
        if(materials.size>=3||q&&tab&&selected){ /* BRIO block V53: v53InventoryRoot — Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection. */ gateNativeDraw(root,'inventoryHud',/* BRIO expr V53: v53InventoryRoot — Validate six-slot ancestry and depth3 material icons; gate the complete native inventory including pickaxe/selection. */ e=>!!e.noInventoryHud);log('V53 COMPLETE INVENTORY',{slots,materials:[...materials],prompts:q&&tab,selectionOutline:selected,visits,mode:'whole native inventory root including pickaxe/empty/selected/build controls'});}
    };
    const v53CalibrationStatus=()=>{ /* BRIO block V53: v53CalibrationStatus — Show measured-sample readiness and temporary performance phase; never claim received scalar is a firing angle. */
        const p=S.renderer,slot=p?.['Åé']?.[p?.['ÈÆ']],key=slot?.type+':'+slot?.['äã'],rec=v53.shotChecks.get(key);
        const status=!GUN_TYPES.has(slot?.type)?'Hold a gun to measure spread':rec&&rec.accepted>=12?'Observed envelope: '+rec.accepted+' projectiles · '+slot.type+' / rarity '+slot['äã']:'Measuring '+(slot?.type||'gun')+' / rarity '+(slot?.['äã']??'?')+': '+(rec?.accepted||0)+' stable projectiles; cone waits for12';
        const node=D.querySelector('[data-spread-status]');if(node&&node.textContent!==status)node.textContent=status;
        const b=D.querySelector('[data-a=perf]');if(b){ /* BRIO block V53: v53CalibrationStatus — Show measured-sample readiness and temporary performance phase; never claim received scalar is a firing angle. */ b.disabled=!v53.perf||!S.renderer||!!v53.stats?.finished;b.textContent=v53.perf?.comparison?'PERF: '+v53.perf.phase+' (cancel)':'PERF CHECK (24s)';}
    };

    const weaponChoices=/* BRIO expr V52: weaponChoices — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ ()=>[...GUN_TYPES].filter(/* BRIO expr V52: weaponChoices — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ type=>type!=='akƧ'&&(!S.weaponCatalog||S.weaponCatalog.has(type))).sort();
    const indicatorColor=/* BRIO expr V52: indicatorColor — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ (e,id)=>e.indicatorColors?.[id]||INDICATOR_COLORS[id];
    const renderIndicatorControls=(parent,settings,id,locked)=>{
        /* BRIO: renderIndicatorControls V52 — isolate color and loot controls from native/global label CSS.
         * Each exact source-backed weapon has two explicit pressed-state buttons, not unlabeled checkboxes.
         * Preserve absent selections, raw settings and locked composite behavior. Selection never infers spawns. */
        const row=D.createElement('div');row.className='brioColor';
        const label=D.createElement('label'),input=D.createElement('input');label.textContent='Color';input.type='color';input.dataset.indicatorColor=id;
        input.value=indicatorColor(settings,id);input.disabled=locked||!settings[id];input.setAttribute('aria-label',id+' indicator color');
        input.oninput=()=>{ /* Persist only this validated swatch; refresh reached indicators immediately. */ const z=storedExtras();z.indicatorColors[id]=input.value;saveExtras(z);featureEx.at=-Infinity;indicatorTick();nearestTick();};
        label.appendChild(input);row.appendChild(label);parent.appendChild(row);
        if(id!=='lootIndicator')return;
        const choices=D.createElement('fieldset');choices.dataset.lootChoices='';choices.className='brioLootChoices';choices.disabled=locked||!settings[id];parent.style.flexWrap='wrap';
        const legend=D.createElement('legend');legend.textContent='Weapons to track';choices.appendChild(legend);
        const summary=D.createElement('small');summary.className='brioLootSummary';choices.appendChild(summary);
        const update=()=>{ /* Report selected weapon/rarity pairs, including saved choices absent from this catalog. */ summary.textContent=storedExtras().lootChoices.length+' selections · Gold and Red are separate choices';};update();
        const grid=D.createElement('div');grid.className='brioLootGrid';choices.appendChild(grid);
        for(const type of weaponChoices()){
            /* Exact dynamic weapon catalog, with readable artwork/name and consistent two-column rarity buttons. */
            const group=D.createElement('div');group.className='brioLootWeapon';const art=D.createElement('img');art.src=itemPath(type);art.alt='';const name=D.createElement('span');name.textContent=type;group.append(art,name);
            for(const [rarity,title]of [[4,'Gold'],[5,'Red']]){
                /* Independent multiselect button; aria-pressed and native disabled fieldset provide keyboard semantics. */
                const c=D.createElement('button'),key=type+':'+rarity;c.type='button';c.dataset.lootChoice=key;c.dataset.rarity=rarity;c.textContent=title;c.setAttribute('aria-label',type+' '+title);c.setAttribute('aria-pressed',String(settings.lootChoices.includes(key)));
                c.onclick=()=>{ /* Persist one pair and update its visual state without rebuilding scroll position. */ const z=storedExtras(),set=new Set(z.lootChoices);set.has(key)?set.delete(key):set.add(key);z.lootChoices=[...set];saveExtras(z);c.setAttribute('aria-pressed',String(set.has(key)));featureEx.at=-Infinity;update();v53Indicators();};group.appendChild(c);
            }
            grid.appendChild(group);
        }
        parent.appendChild(choices);
    };
    const v53HealthColor=(hp,max)=>{
        /* Exact boundaries requested:75 yellow,50 orange,25 red. Unknown health never implies red. */
        if(!Number.isFinite(hp)||!Number.isFinite(max)||max<=0||hp<0)return null;
        const ratio=hp/max;return ratio>.75?'#20da50':ratio>.5?'#ffd21c':ratio>.25?'#ff851b':'#ff3030';
    };
    const v53ObjectBody=/* BRIO expr V52: v53ObjectBody — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ o=>o['ÄA']||o['ÄÀè']||o['â'];
    const v53GroundType=o=>{
        /* Prefer native gunType/new packet fields. Asset lookup is exact, never a cosmetic substring. */
        const name=o['Ëá']||o.new?.['Ëá']||o.gunType;if(GUN_TYPES.has(name))return name;
        const path=hudPath(o['âê']);for(const type of weaponChoices())if(path&&path===itemPath(type))return type;
        return null;
    };
    const v53AmmoIndex=o=>{
        /* Ground ammo constructor does not retain ammo index; its stackN resource is authoritative. */
        const path=hudPath(o['âê']),m=path.match(/\/stack([0-4])\.png$/i);return m?+m[1]:undefined;
    };
    const v53OutlineMask=image=>{
        /* BRIO: v53OutlineMask — one alpha read per loaded asset, maximum64 cached128px masks.
         * Dilate opaque pixels into adjacent transparency (including holes) to outline artwork itself.
         * Never read the game canvas or edit native images. Tainted/unreadable assets retain a logged box fallback. */
        if(image?.tagName==='IMG'&&!image.naturalWidth)return null;
        if(!image||!(image.naturalWidth||image.width)||!(image.naturalHeight||image.height))return null;
        if(v53.outlines.has(image))return v53.outlines.get(image);
        if(v53.outlines.size>=64)return null;
        if(!v53.outlinePreparing){ /* BRIO block V53: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ if(v53.outlineQueue.size+v53.outlines.size<64)v53.outlineQueue.add(image);return null;} // Fixed per-Play cache prevents expensive eviction/readback thrashing.
        let record=null;
        try{
            /* Alpha processing is amortized by exact image identity; expensive readback never occurs each frame. */
            const sample=D.createElement('canvas');sample.width=sample.height=128;const c=sample.getContext('2d',{willReadFrequently:true});c.drawImage(image,2,2,124,124);
            const pixels=c.getImageData(0,0,128,128),data=pixels.data,mask=c.createImageData(128,128),out=mask.data;let edges=0;
            for(let y=0;y<128;y++)for(let x=0;x<128;x++){
                /* Only transparent pixels neighbouring visible alpha become the exterior contour. */
                const at=(y*128+x)*4;if(data[at+3]>=24)continue;let found=false;
                for(let dy=-2;dy<=2&&!found;dy++)for(let dx=-2;dx<=2;dx++){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ const nx=x+dx,ny=y+dy;if(nx>=0&&nx<128&&ny>=0&&ny<128&&data[(ny*128+nx)*4+3]>=24){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ found=true;break;}}
                if(found){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ out[at]=out[at+1]=out[at+2]=255;out[at+3]=255;edges++;}
            }
            if(edges){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ c.putImageData(mask,0,0);record={mask:sample,colors:new Map};}
        }catch(e){ /* Security/missing canvas operations are an optional visual fallback, not a gameplay exception. */ const reason=String(e).slice(0,160);if(v53.outlineFailures.size<8&&!v53.outlineFailures.has(reason)){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ v53.outlineFailures.add(reason);log('V53 OUTLINE FALLBACK',{reason});}}
        v53.outlines.set(image,record);if(record&&!S.outlineMaskLogged){ /* BRIO block V52: v53OutlineMask — Cache bounded alpha silhouettes once per loaded asset; unreadable assets preserve rectangle fallback. */ S.outlineMaskLogged=true;log('V53 OUTLINE MASK',{resolution:128,assetCap:64,mode:'cached alpha silhouette; native transforms retained'});}return record;
    };
    const v53Outline=(ctx,s,body,color)=>{ /* BRIO V53: v53Outline — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('outline draw');try{
        /* BRIO: v53Outline — replay only reached visible image geometry into cached contour overlays.
         * Reproduce native child translate/rotate/effective scale, bounded16 images/depth3. Native art and
         * simulation draw unchanged. Build stage growth/opacity changes read live, never bake the whole scene. */
        let drawn=0,visits=0;
        const walk=(node,scale,depth,root=false)=>{
            /* Avoid stale/hidden stages and ignore our overlay descendants. Native root transform is already applied. */
            if(!node||++visits>48||depth>3||node.visible===false||node.opacity<=0||node.__brioHudClone||String(node.type||'').startsWith('brio'))return;
            ctx.save();if(!root)ctx.globalAlpha*=Number.isFinite(node.opacity)?node.opacity:1;if(!root){ /* BRIO block V52: walk — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ ctx.translate((Number(node['ë']?.['É'])||0)/scale,(Number(node['ë']?.['Ä'])||0)/scale);ctx.rotate(Number(node.A)||0);scale/=Number(node.size)||1;}
            const image=node['À']?.['ÁÄ'],w=Math.abs(Number(node.width)),h=Math.abs(Number(node.height)),rec=image&&w>0&&h>0&&drawn<16?v53OutlineMask(image):null;
            if(rec){ /* Four requested health colors use lazy cached tints; current physical bounds stay live. */ let tint=rec.colors.get(color);if(!tint){ /* BRIO block V52: walk — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ tint=D.createElement('canvas');tint.width=tint.height=128;const c=tint.getContext('2d');c.drawImage(rec.mask,0,0);c.globalCompositeOperation='source-in';c.fillStyle=color;c.fillRect(0,0,128,128);rec.colors.set(color,tint);}ctx.drawImage(tint,-w*64/124/scale,-h*64/124/scale,w*128/124/scale,h*128/124/scale);drawn++;}
            for(const key of ['âè','ÉE']){ /* BRIO block V53: walk — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ const list=node[key]||[];for(let i=0;i<Math.min(24,list.length)&&visits<48;i++)walk(list[i],scale,depth+1);}ctx.restore();
        };
        walk(body,s,0,true);return drawn>0;

        }finally{ /* BRIO block V53: v53Outline — Follow only visible native image transforms, with bounded subtree work and cached contour tints. */ v53PerfEnd('outline draw',cost);}
    };
    const v53World=o=>{ /* BRIO block V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */
        if(!o?.['â'])return;
        const root=o['â'];
        if(['bullet','throwable'].includes(o.type)){
            /* Gate actual projectile art; past-path sampling reads positions before draw and is bounded. */
            gateNativeDraw(root,'projectile',/* BRIO expr V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */ e=>!!e.invisibleProjectiles,/* BRIO expr V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */ ()=>v53TrailSample(o));
            if(o.type==='bullet'&&o['Ëé'])gateNativeDraw(o['Ëé'],'projectileNativeTrail',/* BRIO expr V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */ e=>!!e.invisibleProjectiles);
        }
        if(['object','buildable','car','baller'].includes(o.type)&&o['AÀ']!==true){
            /* Border follows the current native body transform/size; whole placed-build root remains gated.
             * Vehicles join breakable objects, never get a separate toggle. Non-breakable/missing health skip. */
            const body=v53ObjectBody(o),build=isBuild(o);attachFeature(o,'durability',body,(ctx,s)=>{ /* BRIO block V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */
                const e=exFast(),color=v53HealthColor(o['åÈ'],o['ËÆ']);if(!color||!(build?e.buildHealth:e.objectHealth)||o['Äã'])return;
                const w=Math.abs(Number(body.width)),h=Math.abs(Number(body.height));if(!(w>0&&h>0))return;
                if(v53Outline(ctx,s,body,color))return;
                /* Preserve the user-confirmed rectangle when no readable artwork is available. */ ctx.save();ctx.strokeStyle=color;ctx.lineWidth=3/s;ctx.strokeRect((-w/2-2)/s,(-h/2-2)/s,(w+4)/s,(h+4)/s);ctx.restore();
            });
        }
        if(o.type==='ammo')attachFeature(o,'ownedAmmo',root,(ctx,s)=>{ /* BRIO block V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */
            const e=exFast(),index=v53AmmoIndex(o);if(!e.highlightOwnedAmmo||index===undefined||e.maskLootArt||o['Äã'])return;
            const owned=(S.renderer?.['Åé']||[]).some(/* BRIO expr V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */ (slot,i)=>slot&&GUN_TYPES.has(slot.type)&&nativeSlotAmmoIndex(S.renderer,i)===index&&slot.type!=='signal flare'&&slot.type!=='grappler');
            if(owned){ /* BRIO block V52: v53World — Attach draw-only object health/ammo/projectile adapters; never change native health, collision or lifetime. */ ctx.save();ctx.strokeStyle='#34ff75';ctx.lineWidth=3/s;ctx.strokeRect(-35/s,-35/s,70/s,70/s);ctx.restore();}
        });
    };
    const v53TrailSample=o=>{
        /* Observed histories only. Sample at most every30ms while native draws the reached projectile;
         * existing path survives removal for1200ms. At128 histories, evict oldest instead of growing memory. */
        if(!exFast().longerBulletTrails||o['Äã'])return;const now=performance.now(),p=worldPos(o);if(!p)return;
        let path=v53.paths.get(o);if(!path){ /* BRIO block V52: v53TrailSample — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ if(v53.paths.size>=128)v53.paths.delete(v53.paths.keys().next().value);path={points:[],at:-Infinity,type:o.type};v53.paths.set(o,path);}
        if(now-path.at<30)return;path.at=now;path.points.push({...p,at:now});if(path.points.length>32)path.points.shift();
    };
    const v53Player=r=>{ /* BRIO block V52: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */
        if(!r?.['â'])return;
        /* Native aá/ä/áË/ÄÂ are held-art subtrees; ÁÆ preview is separate. Current replacement is rescanned.
         * Hide weapons covers local+remote held art; player invisibility retains its established remote scope. */
        v53PlayerPreflight(r);
        gateNativeDraw(r['â'],'v53PlayerChildren',/* BRIO expr V53: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */ ()=>false,ctx=>{
            /* Detect native held/pool replacements before first draw with O(1) unchanged-state checks. */
            v53PlayerPreflight(r);if(isLocal(r))v53Frame(ctx);
        });
        if(!isLocal(r))return;
        attachFeature(r,'spreadCone',r['â'],(ctx,s)=>{
            /* BRIO: measured spread only. Source does not establish scalar-to-angle units, so do not draw
             * the old guessed degree cone. A label distinguishes a finite observed envelope from a bound.
             * Native parent rotation supplies positive-X aim; no extra rotation or camera-space guess. */
            const e=exFast(),slot=r['Åé']?.[r['ÈÆ']],rec=v53.shotChecks.get(slot?.type+':'+slot?.['äã']);
            if(!e.showBulletSpread||r['èÂ']||['grappler','signal flare'].includes(slot?.type)||!rec||rec.accepted<12||!Number.isFinite(s)||s<=0)return;
            const half=rec.maxAbsDegrees*Math.PI/180,length=600/s;
            ctx.save();ctx.fillStyle='rgba(80,180,255,.10)';ctx.strokeStyle='#72caff';ctx.lineWidth=2/s;
            ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(-half)*length,Math.sin(-half)*length);ctx.arc(0,0,length,-half,half);ctx.closePath();ctx.fill();ctx.stroke();
            ctx.rotate(-(Number(r['â'].A)||0));ctx.font=12/s+'px Arial';ctx.textAlign='center';ctx.fillStyle='#fff';ctx.strokeStyle='#000';ctx.lineWidth=3/s;
            ctx.strokeText('Observed spread · '+rec.accepted+' projectiles',0,-85/s);ctx.fillText('Observed spread · '+rec.accepted+' projectiles',0,-85/s);ctx.restore();
        });
        attachFeature(r,'projectileHistory',r['â'],(ctx,s)=>{ /* BRIO block V52: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */
            if(!exFast().longerBulletTrails)return;const now=performance.now(),me=worldPos(r),angle=Number(r['â'].A)||0;if(!me)return;
            ctx.save();ctx.rotate(-angle);ctx.lineWidth=2/s;
            for(const [o,path]of v53.paths){ /* BRIO block V52: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */
                while(path.points.length&&now-path.points[0].at>1200)path.points.shift();if(!path.points.length){ /* BRIO block V52: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */ v53.paths.delete(o);continue;}
                if(exFast().invisibleProjectiles)continue;ctx.strokeStyle=path.type==='throwable'?'#ffb060':'#ffe99a';ctx.globalAlpha=.6*Math.max(0,1-(now-path.at)/1200);ctx.beginPath();
                path.points.forEach(/* BRIO expr V52: v53Player — Gate held weapons/progress/damage text independently; render local spread and retained projectile history. */ (p,i)=>i?ctx.lineTo((p.x-me.x)/s,(p.y-me.y)/s):ctx.moveTo((p.x-me.x)/s,(p.y-me.y)/s));ctx.stroke();
            }
            ctx.restore();
        });
    };
    const v53SafePoint=(zone,me)=>{
        /* Native circle is an AXIS-ALIGNED SQUARE with center(position) and half-side(radius).
         * Outside clamp to nearest boundary; inside choose closest edge. Retain the native projected waiting border
         * throughout movement; moving circle packets represent the current interpolated border. */
        if(!zone||!me||!Number.isFinite(zone.radius)||zone.radius<0)return null;const {x,y,radius:r}=zone;if(r===0)return {x,y};
        const px=Math.max(x-r,Math.min(x+r,me.x)),py=Math.max(y-r,Math.min(y+r,me.y));
        if(px!==me.x||py!==me.y)return {x:px,y:py};
        const edges=[[me.x,y-r],[x+r,me.y],[me.x,y+r],[x-r,me.y]];edges.sort(/* BRIO expr V52: v53SafePoint — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ (a,b)=>Math.hypot(a[0]-me.x,a[1]-me.y)-Math.hypot(b[0]-me.x,b[1]-me.y));return {x:edges[0][0],y:edges[0][1]};
    };
    const v53Indicators=()=>{ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */
        const e=exFast(),me=worldPos(S.renderer);
        if(e.safeZoneIndicator&&me&&v53.zone&&performance.now()-v53.zoneAt<900000){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */
            const p=v53SafePoint(v53.zone,me),target=p?{'â':{'ë':{'É':p.x,'Ä':p.y}}}:null;showIndicator('safeZone','safeZoneUi',target,'',indicatorColor(e,'safeZoneIndicator'),110);
        }else if(S.safeZoneUi)S.safeZoneUi.style.display='none';
        const selected=new Set(e.lootChoices||[]),matches=e.lootIndicator&&me?collectWorld().filter(/* BRIO expr V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ o=>o.type==='gun'&&validTarget(o)&&selected.has(v53GroundType(o)+':'+o['äã'])&&!targetOnScreen(o)):[];
        matches.sort((a,b)=>{ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ const p=worldPos(a),q=worldPos(b);return Math.hypot(p.x-me.x,p.y-me.y)-Math.hypot(q.x-me.x,q.y-me.y);});
        /* Closest12 selected pickups have separate plain arrows+inventory artwork; cap DOM/update work.
         * No visibility inference from unopened containers. Each arrow disappears on culling/pickup. */
        const live=new Set(matches.slice(0,12));for(const [o,u]of v53.lootUis)if(!live.has(o)){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ u.remove();v53.lootUis.delete(o);}
        for(const o of live){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */
            let u=v53.lootUis.get(o);if(!u){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ u=ensureArrow('lootUi'+o.id,indicatorColor(e,'lootIndicator'));delete S['lootUi'+o.id];v53.lootUis.set(o,u);}
            const p=worldPos(o),sp=projectWorld(p);if(!sp){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ u.style.display='none';continue;}
            u.querySelector('.shape').style.background=indicatorColor(e,'lootIndicator');u.style.width='112px';u.style.height='56px';u.querySelector('.shape').style.clipPath='polygon(10% 40%,75% 40%,75% 20%,100% 50%,75% 80%,75% 60%,10% 60%)';
            placeArrow(u,sp.x-sp.rect.left-sp.rect.width/2,sp.y-sp.rect.top-sp.rect.height/2,Math.hypot(p.x-me.x,p.y-me.y),'',75,sp.rect);
            const signature=v53GroundType(o)+':'+o['äã'];if(u.dataset.item===signature){ /* BRIO block V52: v53Indicators — Use current targets, bounded DOM arrows and source-backed square zone geometry; suppress stale arrows. */ u.querySelector('.d').replaceChildren(u.__brioItemIcon);continue;}u.dataset.item=signature;const d=u.querySelector('.d');d.style.left='5px';d.style.top='6px';d.style.width='48px';d.style.height='44px';const icon=D.createElement('span');icon.style='position:relative;display:block;width:38px;height:38px';
            const bg=D.createElement('img'),art=D.createElement('img');bg.src=S.hudAssetPaths?.get('inv'+o['äã'])||'/buildart/inv'+o['äã']+'.png';art.src=itemPath(v53GroundType(o));bg.style=art.style='position:absolute;inset:0;width:100%;height:100%;object-fit:contain';art.style.transform='rotate(45deg) scale(.78)';icon.append(bg,art);u.__brioItemIcon=icon;d.replaceChildren(icon);
        }
    };
    /* BRIO: v53NativeCandidate — exact native HUD signatures from supplied engine.
     * Full map has mapScene identity; progress roots use the complete reload/charge constructor shape.
     * Hit marker requires its four red rectangles under the five-arm native crosshair.
     * Countdown identifies the source timer/storm asset plus its text child and counter holder.
     * Every adapter delegates original draws unchanged when disabled; no resource/state deletion.
     */
    const v53NativeCandidate=(node,readyList)=>{ /* BRIO block V52: v53NativeCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
        const roots=readyList?[node]:[node,node.parent].filter(Boolean);
        const children=root=>{ /* BRIO: bounded native HUD signature — ignore broad scenes; inspect at most48 native children. */ const a=root['âè']||[],b=root['ÉE']||[];return a.length+b.length>48?[]:[...a,...b].filter(/* BRIO expr V52: children — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n&&!n.__brioHudClone&&!String(n.type||'').startsWith('brio'));};
        const color=/* BRIO expr V52: color — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>String(n?.['Äe']||n?.fillStyle||'').toUpperCase();
        for(const root of roots){ /* BRIO block V52: v53NativeCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
            if(root['Ée']==='mapScene')gateNativeDraw(root,'fullMap',/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noMinimap);
            const list=readyList||children(root);
            if(list.some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.type==='arc'&&n['éã']===33&&color(n)==='#FFF')&&list.some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.type==='text'&&n.fontSize===22)&&list.some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n['éã']===40&&color(n)==='#000'))gateNativeDraw(root,'reloadProgress',/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noWeaponProgress);
            if(Array.isArray(root['Àä_'])&&root['Àä_'].length===8&&Object.hasOwn(root,'Eé_')&&Object.hasOwn(root,'Æéá')&&root['èeÊ']?.height===6&&color(root['èeÊ'])==='#1ADAE0')gateNativeDraw(root,'chargeProgress',/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noWeaponProgress);
            const white=list.filter(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>color(n)==='#FFF'&&!n['À']&&Number.isFinite(n.width)&&Number.isFinite(n.height));
            if(white.length===5&&white.filter(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.height===20&&n.width<20).length===2&&white.filter(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.width===20&&n.height<20).length===2&&white.some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.width===n.height&&n.width<20))for(const marker of list){ /* BRIO block V52: v53NativeCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
                const red=children(marker).filter(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>color(n)==='#F00'&&!n['À']&&Number.isFinite(n.width)&&Number.isFinite(n.height));
                if(red.length===4)gateNativeDraw(marker,'hitConfirmation',/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noHitMarker);
            }
            if(/\/(?:timer|storm|waitingIcon|movingIcon)\.png$/i.test(hudPath(root))&&root.width===32&&root.height===32&&list.some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.type==='text')&&children(root.parent||{}).some(/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>/\/(?:playersIcon|killsIcon)\.png$/i.test(hudPath(n))))gateNativeDraw(root,'stormCountdown',/* BRIO expr V52: v53NativeCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noStormTimer);
        }
    };
    /* BRIO: field lookup cache follows source dictionary revision, not every packet. Native decoder return
     * observation is read-only and precedes remapping. No getters/independent decode/encode are introduced. */
    const packetFieldCache=new Map;let packetFieldRevision=-1;
    const v53PacketValue=(packet,name)=>{ /* BRIO block V53: v53PacketValue — Cache decoded native-field aliases per dictionary size; preserve original packet objects/values. */
        if(Object.hasOwn(packet,name))return packet[name];
        if(packetFieldRevision!==schemaFields.size){ /* BRIO block V53: v53PacketValue — Cache decoded native-field aliases per dictionary size; preserve original packet objects/values. */ packetFieldCache.clear();packetFieldRevision=schemaFields.size;}
        let fields=packetFieldCache.get(name);if(!fields){ /* BRIO block V53: v53PacketValue — Cache decoded native-field aliases per dictionary size; preserve original packet objects/values. */ fields=[];for(const [field,meaning]of schemaFields)if(meaning===name)fields.push(field);packetFieldCache.set(name,fields);}
        for(const field of fields)if(Object.hasOwn(packet,field))return packet[field];return undefined;
    };
    const v53AngleDifference=(a,b)=>{
        /* Modular signed radians in[-PI,PI): unlike V52's exported atan2 summaries, this is directly
         * auditable from the raw angles. Supplied V52 examples differ from their claimed offsets by90deg;
         * the cause is unknown. Never reuse those summary numbers to calibrate or infer an axis. */
        const turn=Math.PI*2;return ((a-b+Math.PI)%turn+turn)%turn-Math.PI;
    };
    const v53AimObserve=p=>{ /* BRIO block V53: v53AimObserve — Retain fresh local server aim/scalar/stability/position with gun/rarity context; no authority changes. */
        const stats=v53.stats,a=p.a,now=performance.now();if(!stats||!Array.isArray(a)||!Number.isFinite(a[3]))return;
        const angle=a[3]/100,raw=v53PacketValue(p,'spread'),old=stats.serverAim,r=S.renderer,slot=r?.['Åé']?.[r?.['ÈÆ']];
        const moving=old&&Number.isFinite(a[1])&&Number.isFinite(a[2])&&Math.hypot(a[1]-old.x,a[2]-old.y)>3;
        const changed=!old||Math.abs(v53AngleDifference(angle,old.angle))>.0088||moving;
        stats.serverAim={angle,spread:Number.isFinite(raw)?raw/100:old?.spread,rawSpread:Number.isFinite(raw)?raw:old?.rawSpread,x:a[1],y:a[2],at:now,stableSince:changed?now:old.stableSince,weapon:slot?.type,rarity:slot?.['äã']};
    };
    const v53ShotCompare=(p,localId)=>{
        /* Bounded empirical samples per exact gun/rarity and received scalar bin. Valid samples require
         * fresh<=150ms server aim, >=150ms stationary stable aim, <=1deg client/server disagreement and
         * matching selected gun/rarity. Reject movement/turning/switching/unknown rarity rather than fit them.
         * Projectiles include pellets, which are correlated; finite extrema never establish a maximum. */
        if(v53PacketValue(p,'pi')!==localId)return;
        const r=S.renderer,slot=r?.['Åé']?.[r?.['ÈÆ']],rotation=p.p?.[4],weapon=v53PacketValue(p,'bulletType'),rarity=slot?.['äã'],aim=r?.['â']?.A,server=v53.stats?.serverAim,now=performance.now();
        if(!Number.isFinite(rotation)||!GUN_TYPES.has(weapon)||['grappler','signal flare'].includes(weapon))return;
        const key=weapon+':'+rarity;let rec=v53.shotChecks.get(key);if(!rec){ /* BRIO block V53: v53ShotCompare — Read native shot/aim angles into bounded calibration summaries; never send or fit gameplay state. */ if(v53.shotChecks.size>=96)return;rec={weapon,rarity:Number.isInteger(rarity)?rarity:null,total:0,accepted:0,rejected:{},maxAbsDegrees:0,minDegrees:Infinity,maxDegrees:-Infinity,bins:{},examples:[],bound:'observed extrema only; server maximum unknown; pellets are correlated'};v53.shotChecks.set(key,rec);}
        rec.total++;let reason=null;
        if(!Number.isInteger(rarity)||rarity<0||rarity>5)reason='unknown rarity';
        else if(!server||now-server.at>150)reason='stale server aim';
        else if(now-server.stableSince<150)reason='moving or turning';
        else if(slot.type!==weapon||server.weapon!==weapon||server.rarity!==rarity)reason='weapon switch or mismatch';
        else if(!Number.isFinite(aim)||Math.abs(v53AngleDifference(aim,server.angle))>Math.PI/180)reason='client/server aim disagree';
        else if(!Number.isFinite(server.spread)||server.spread<0)reason='missing scalar';
        else if(r['èÂ'])reason='build mode';
        if(reason){ /* BRIO block V53: v53ShotCompare — Read native shot/aim angles into bounded calibration summaries; never send or fit gameplay state. */ rec.rejected[reason]=(rec.rejected[reason]||0)+1;return;}
        const angle=rotation/100,offset=v53AngleDifference(angle,server.angle)*180/Math.PI;
        rec.accepted++;rec.maxAbsDegrees=Math.max(rec.maxAbsDegrees,Math.abs(offset));rec.minDegrees=Math.min(rec.minDegrees,offset);rec.maxDegrees=Math.max(rec.maxDegrees,offset);
        const bin=String(Math.round(server.spread*2)/2);let b=rec.bins[bin];if(!b&&Object.keys(rec.bins).length<48)b=rec.bins[bin]={scalarBin:Number(bin),samples:0,minDegrees:offset,maxDegrees:offset,maxRatio:0};
        if(b){ /* BRIO block V53: v53ShotCompare — Read native shot/aim angles into bounded calibration summaries; never send or fit gameplay state. */ b.samples++;b.minDegrees=Math.min(b.minDegrees,offset);b.maxDegrees=Math.max(b.maxDegrees,offset);if(server.spread>0)b.maxRatio=Math.max(b.maxRatio,Math.abs(offset)/server.spread);}
        if(rec.examples.length<24)rec.examples.push({packetAngle:angle,serverAim:server.angle,clientAim:aim,rawDifferenceRadians:angle-server.angle,signedOffsetDegrees:offset,rawSpread:server.rawSpread,scalar:server.spread,serverAimAgeMs:now-server.at,stableMs:now-server.stableSince,rarity});
    };

    const v53StatsObserve=result=>{ /* BRIO V53: v53StatsObserve — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('match counters');try{
        /* Reuse the existing native decode observer. Separate counters are independent of deep log caps.
         * Decoder delegates unchanged. Original object identity/packed arrays are NEVER remapped/mutated. */
        const stats=v53.stats;if(!stats||stats.finished)return;
        for(const p of Array.isArray(result)?result:[result]){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */
            if(!p||typeof p!=='object')continue;const type=p.t??p.type,value=/* BRIO expr V52: value — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ name=>v53PacketValue(p,name);
            if(type==='setID')stats.localId=value('i')??p.id;
            // V52: retain the newest authoritative local packet angle separately from instantaneous client aim.
            // Packed rotation/100 is radians. This independent250ms measurement lane survives deep log caps;
            // packet ordering and turning still limit inference, so both offsets are reported rather than auto-fitted.
            if(type==='y'&&(p.i??p.a?.[0])===(stats.localId??S.renderer?.id))v53AimObserve(p);
            if(type==='circle'){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */
                const c=value('circle'),position=c?.position??c?.['ë'],radius=c?.radius??c?.['éã'];
                const state=p.state||v53.zoneState;
                if(state!=='moving'&&Array.isArray(position)&&position.length===2&&position.every(Number.isFinite)&&Number.isFinite(radius)&&radius>=0){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */ v53.zone={x:position[0],y:position[1],radius,state,source:'projected waiting border'};v53.zoneAt=performance.now();log('V53 PROJECTED ZONE',{...v53.zone,epoch:S.runEpoch});}
                if(p.state)v53.zoneState=p.state;
            }
            if(type==='elim'&&!value('knock')&&stats.eliminated.length<100)stats.eliminated.push(String(value('name')||'<unnamed>'));
            if(type==='x'){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */
                const kind=p.b??p.p?.[1],id=p.i??p.p?.[0];if(kind==='player'&&stats.names.size<256)stats.names.set(id,String(value('name')||'<unnamed>'));
                if(kind==='bullet'&&value('pi')===(stats.localId??S.renderer?.id)){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */ stats.ownProjectiles++;v53ShotCompare(p,stats.localId??S.renderer?.id);}
            }
            if(type==='y'||type==='z'){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */
                const id=p.i??p.a?.[0];if(id===(stats.localId??S.renderer?.id))for(const [name,key]of [['hLost','hpLoss'],['sLost','shieldLoss']]){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */ const n=value(name);if(Number.isFinite(n)&&n>0)stats[key]+=n;}
            }
            if(type==='death'){ /* BRIO block V52: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */
                stats.terminal={place:value('place'),eliminations:value('eliminations'),damage:value('damageToEnemies'),walls:value('wallsBuilt'),seconds:value('timeAlive'),killer:String(value('name')||'')};stats.finished=true;v53PerfFinish('native match end');
                log('V53 AUTOMATIC AUDIT',v53Audit(true));log('V53 POSTGAME COUNTERS',{epoch:S.runEpoch,terminal:stats.terminal,hpLoss:stats.hpLoss,shieldLoss:stats.shieldLoss,eliminated:stats.eliminated,ownProjectiles:stats.ownProjectiles,attribution:'unavailable: no authoritative attacker/victim on observed loss events'});
            }
        }

        }finally{ /* BRIO block V53: v53StatsObserve — Read original decoded packets once, using bounded local counters; never guess damage attribution. */ v53PerfEnd('match counters',cost);}
    };
    const v53Sample=()=>{ /* BRIO block V52: v53Sample — Sample bounded movement/weapon-time history; exclude teleports and finished matches. */
        if(S.destroyed)return;v53PerfAdvance();v53PrepareOutline();v53CalibrationStatus();const stats=v53.stats,now=performance.now(),r=S.renderer;
        if(stats&&!stats.finished&&r&&S.botPhase==='match'){ /* BRIO block V52: v53Sample — Sample bounded movement/weapon-time history; exclude teleports and finished matches. */
            const dt=Math.max(0,Math.min(.75,(now-stats.sampleAt)/1000)),p=worldPos(r),type=r['Åé']?.[r['ÈÆ']]?.type;
            if(type&&(stats.weaponSeconds.has(type)||stats.weaponSeconds.size<64))stats.weaponSeconds.set(type,(stats.weaponSeconds.get(type)||0)+dt);
            if(p&&stats.position){ /* BRIO block V52: v53Sample — Sample bounded movement/weapon-time history; exclude teleports and finished matches. */ const d=Math.hypot(p.x-stats.position.x,p.y-stats.position.y);if(d<1200)stats.distance+=d;else stats.teleports++;}
            stats.position=p;stats.sampleAt=now;
        }else if(stats)stats.sampleAt=now;
        /* New held/progress/damage children can arrive between featureTick's 2s cadence; existing scan caps stay. */
        if(r){ /* BRIO block V52: v53Sample — Sample bounded movement/weapon-time history; exclude teleports and finished matches. */ v53Player(r);v53Indicators();}
        if(stats?.finished)v53PostGame();
    };
    const v53PostGame=()=>{
        /* Exact native source: end-game content is #deathPass; win/loss both dispatch death.
         * Only replace this visual area AFTER terminal packet+visible deathscreen. Store original display
         * declarations on its direct native children; do not delete/pass through their state or handlers.
         * Keep header/buttons and dedicated Battle Pass browsing untouched. Retry handles late async render. */
        const stats=v53.stats,screen=q('#deathscreen'),host=q('#deathPass');if(!stats?.finished||!screen||!host||screen.style.display==='none'||getComputedStyle(screen).display==='none')return;
        const browsing=screen.querySelector('.statsContainer')?.style.display==='none';if(browsing){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ if(v53.post)v53.post.style.display='none';for(const [node,[value,priority]]of v53.postStyles)node.style.setProperty('display',value,priority);return;}if(v53.post)v53.post.style.display='';
        if(!v53.post||v53.post.parentNode!==host){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ v53.post=D.createElement('section');v53.post.dataset.brioPostgame='';v53.post.style='box-sizing:border-box;width:100%;max-height:56vh;overflow:auto;background:#10141c;color:#fff;padding:18px;text-align:left;font:14px Arial';host.appendChild(v53.post);}
        for(const child of host.children)if(child!==v53.post){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ if(!v53.postStyles.has(child))v53.postStyles.set(child,[child.style.getPropertyValue('display'),child.style.getPropertyPriority('display')]);child.style.setProperty('display','none','important');}
        if(v53.post.dataset.epoch===String(S.runEpoch))return;v53.post.dataset.epoch=String(S.runEpoch);
        const heading=D.createElement('h2');heading.textContent='Match breakdown';heading.style='color:#f5f8ff;margin:0 0 14px;font:bold 22px Arial';v53.post.appendChild(heading);
        const table=D.createElement('div');table.dataset.statGrid='';table.style='display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;color:#f2f6fc';
        const shown=/* BRIO expr V52: shown — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ x=>Number.isFinite(x)?String(Math.round(x*10)/10):'Unavailable';
        for(const [label,value]of [['Placement',stats.terminal.place?('#'+stats.terminal.place):'Unavailable'],['Eliminations',shown(stats.terminal.eliminations)],['Damage dealt',shown(stats.terminal.damage)],['Builds placed',shown(stats.terminal.walls)],['Time alive (seconds)',shown(stats.terminal.seconds)],['Observed HP lost',shown(stats.hpLoss)],['Observed shield lost',shown(stats.shieldLoss)],['Sampled travel (meters)',shown(stats.distance/100)],['Players observed',stats.names.size],['Observed own projectiles (not shots)',stats.ownProjectiles]]){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */
            const row=D.createElement('article');row.style='background:#1b2635;border:1px solid #415169;border-radius:6px;padding:12px;color:#f2f6fc';for(const [index,text]of [label,value].entries()){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ const cell=D.createElement('div');cell.textContent=String(text);cell.style=index?'color:#f5f8ff;font:bold 24px Arial;padding-top:8px':'color:#bfd0e4;font:12px Arial';row.appendChild(cell);}table.appendChild(row);
        }
        v53.post.appendChild(table);
        for(const [title,values]of [['Players eliminated (native elim events)',stats.eliminated.length?stats.eliminated:['No elimination names observed']],['Time holding each item (sampled)',[...stats.weaponSeconds].sort(/* BRIO expr V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ (a,b)=>b[1]-a[1]).map(/* BRIO expr V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ ([name,seconds])=>name+': '+Math.round(seconds)+'s')]]){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */
            const h=D.createElement('h3');h.textContent=title;h.style='color:#d6e8ff;font:bold 15px Arial';const list=D.createElement('ul');list.style='color:#f2f6fc';for(const value of values){ /* BRIO block V52: v53PostGame — Replace only the native deathPass presentation after a terminal match event; preserve Play/spectate controls. */ const li=D.createElement('li');li.textContent=value;list.appendChild(li);}v53.post.append(h,list);
        }
        const note=D.createElement('p');note.style='color:#c7d3e2;font:12px Arial;line-height:1.5';note.textContent='Per-player damage dealt/received: unavailable. Native observed loss events identify no attacker/victim; proximity is not attribution. Observed counters cover this injection, with a 15-minute decoder observer and bounded sampling; travel excludes '+stats.teleports+' large position jumps.';v53.post.appendChild(note);
    };
    const v53Reset=(start=false)=>{ /* BRIO block V52: v53Reset — Clear per-match references and restore owned DOM changes at Play/destroy; retain saved choices. */
        v53PerfReset(start);v53.playerChecks=new WeakMap;v53.deferred=new Set;v53.outlineQueue.clear();packetFieldCache.clear();packetFieldRevision=-1;
        clearInterval(v53.timer);v53.timer=0;v53.zone=null;v53.zoneState=null;v53.zoneAt=0;v53.shotChecks=new Map;v53.outlines.clear();v53.outlineFailures.clear();S.outlineMaskLogged=false;v53.paths.clear();
        for(const u of v53.lootUis.values())u.remove();v53.lootUis.clear();if(S.safeZoneUi)S.safeZoneUi.style.display='none';
        v53.post?.remove();v53.post=null;for(const [node,[value,priority]]of v53.postStyles)node.style.setProperty('display',value,priority);v53.postStyles.clear();
        v53.stats=start?{localId:null,names:new Map,eliminated:[],hpLoss:0,shieldLoss:0,calibrations:new Set,ownProjectiles:0,weaponSeconds:new Map,distance:0,teleports:0,position:null,sampleAt:performance.now(),finished:false}:null;
        if(start)v53.timer=setInterval(v53Sample,500);
    };

    /* BRIO: warningThresholds (V49 decision semantics; V49 user-proven, V50 controls/reset live-pending)
     * Shared thresholds for own HUD and remote resource counts; health ring is local-only.
     * Native reserve order: light/medium/heavy/shells/rockets; virtual index5 holds the grappler threshold.
     * Grappler charges are wAmmo[slot-1] (áAæ), NOT reserve ammo, confirmed in the native HUD constructor.
     * Materials mats[0..3] (ÊÃÄ): fourth native key gear uses buildart/scrap.png.
     * V49 user correction: warn at OR below the value, grappler default5, flare entirely exempt.
     * Existing valid custom values persist; changing a default does not overwrite the user's saved threshold.
     */
    const GUN_TYPES = new Set(["scar","bolt","lmg","shotgun","heavy","smg","ump","rifle","ar-15","scoped ar","deagle","rpg","famas","tommy gun","drum","musket","heavy sniper","ak47","akƧ","combat","silencedpistol","aug","burst shotgun","grenade launcher","mgl","grenade pistol","vector","revolver","charge rifle","grenade sniper","sawedoff","signal flare","spas","grappler","crossbow","minigun"]);
    const WARNING_DEFAULTS = {health:20, ammo:[30,30,10,15,5,5], materials:[30,30,30,1]};
    const /* BRIO: normalizeWarningThresholds
     * Migrate missing/invalid persisted settings, preserving valid independent values. Never alter game state.
     * Blank/null/negative/NaN/objects must not coerce to zero; V49 zero warns for a known empty count.
     * Safe nonnegative integers up to one million are supported by both storage and UI.
     */
    normalizeWarningThresholds = stored => { /* BRIO block: normalizeWarningThresholds — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const valid = /* BRIO expr: valid — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (v, fallback) => Number.isSafeInteger(v) && v >= 0 && v <= 1000000 ? v : fallback;
        return {health:valid(stored?.health, WARNING_DEFAULTS.health),
            ammo:WARNING_DEFAULTS.ammo.map(/* BRIO expr: normalizeWarningThresholds / WARNING_DEFAULTS.ammo.map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ (v,i) => valid(stored?.ammo?.[i],v)),
            materials:WARNING_DEFAULTS.materials.map(/* BRIO expr: normalizeWarningThresholds / WARNING_DEFAULTS.materials.map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ (v,i) => valid(stored?.materials?.[i],v))};
    };
    const /* BRIO: belowWarning
     * V49 inclusive comparison: equality warns, as now explicitly requested. Unknown/negative/disabled never warn.
     * The same thresholds apply to displayed remote reserves and local loaded+reserve slot totals.
     */
    belowWarning = /* BRIO expr: belowWarning — Use proven inclusive thresholds; unknown/negative values and disabled warnings never produce an alert. */ (e, kind, index, value) => !!e[{health:"lowHealthWarning",ammo:"lowAmmoWarning",materials:"lowMatsWarning"}[kind]] &&
        Number.isFinite(value) && value >= 0 && value <= (kind === "health" ? e.warningThresholds.health : e.warningThresholds[kind][index]);
    const /* BRIO: materialIndex
     * Native gear and captured scrap icon are both mats[3]; unknown resource paths never receive a guessed index.
     */
    materialIndex = /* BRIO expr: materialIndex — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ path => ["wood","brick","metal","scrap"].findIndex(/* BRIO expr: materialIndex / ["wood","brick","metal","scrap"].findIndex callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ k => path?.endsWith("/"+k+".png") || k === "scrap" && path?.endsWith("/gear.png"));
    const q = /* BRIO expr: q — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ s => D.querySelector(s), t = /* BRIO expr: t — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => (x ?? "").toString().replace(/\s+/g, " ").trim(), /* BRIO: read
     * Read persisted JSON defensively. Missing/corrupt settings use the supplied default; runtime state is never stored here.
     */
    read = (k, d) => { /* BRIO block: read — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        try { /* BRIO guarded: read — Keep the existing exception boundary for read. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            if(k==='brio_extras_state'&&v53.perf)v53.perf.settingsReads++;
            return JSON.parse(localStorage.getItem(k) || "") || d;
        } catch (_) { /* BRIO fallback: read — Handle failure in read through its existing fallback/report path; optional native fields may be unavailable. */
            return d;
        }
    }, /* BRIO: write
     * Persist user choices only. Storage errors go to diagnostics rather than interrupting native Play.
     */
    write = (k, v) => { /* BRIO block: write — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        try { /* BRIO guarded: write — Keep the existing exception boundary for write. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            localStorage.setItem(k, JSON.stringify(v));
        } catch (e) { /* BRIO fallback: write — Handle failure in write through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(e));
        }
    }, /* BRIO: state
     * Read cosmetic selections. Keep this namespace separate from the native locker and from Extras.
     */
    state = /* BRIO expr: state — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => read("br_local_visuals", {}), saveState = /* BRIO expr: saveState — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ s => write("br_local_visuals", s), /* BRIO: extrasState
     * Read current Extras while discarding user-retired options. Old saved true values must never reactivate removed features.
     */
    storedExtras = () => { /* BRIO block: storedExtras — Normalize saved user preferences without persisting challenge-derived overrides. */
        const stored = read("brio_extras_state", {}), value = stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
        for (const key of ["buildMaterialLabels", "deployableLabels", "deployableRadius", "highlightLoot", "noFoliage", "cleanLoot", "playerIds"]) delete value[key];
        // V48 choices persist across Play/reinjection. No per-match references belong in this settings record.
        value.warningThresholds = normalizeWarningThresholds(value.warningThresholds);
        value.indicatorColors=Object.fromEntries(Object.entries(INDICATOR_COLORS).map(/* BRIO expr V52: storedExtras — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ ([id,color])=>[id,/^#[0-9a-f]{6}$/i.test(value.indicatorColors?.[id]||'')?value.indicatorColors[id]:color]));
        value.lootChoices=Array.isArray(value.lootChoices)?[...new Set(value.lootChoices.filter(/* BRIO expr V52: storedExtras — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ x=>typeof x==='string'&&/:[45]$/.test(x)&&GUN_TYPES.has(x.slice(0,-2))))].slice(0,128):[];
        // V50 migrations preserve the previous challenges' actual semantics: art-only loot, completely hidden builds.
        if (!LOOT_TIERS.some(/* BRIO expr: storedExtras / LOOT_TIERS.some callback — Normalize saved user preferences without persisting challenge-derived overrides. */ ([id]) => id === value.lootMaskTier)) value.lootMaskTier = "item";
        if (!BUILD_TIERS.some(/* BRIO expr: storedExtras / BUILD_TIERS.some callback — Normalize saved user preferences without persisting challenge-derived overrides. */ ([id]) => id === value.buildMaskTier)) value.buildMaskTier = "all";
        return value;
    }, /* BRIO: extrasState (V50; effective settings, never persisted)
     * Derive the composite from the option registry so every future gameplay challenge joins automatically.
     * Visual-only rows declare their exception explicitly. All modifier switches, including future ones, are forced off.
     * User preferences and threshold values remain in storedExtras; disabling the composite restores them.
     * Internal mask flags retain the proven V49 cleanLoot adapter without exposing the retired modifier.
     */
    extrasState = () => { /* BRIO block: extrasState — Derive effective challenge values while retaining the separately saved preferences. */
        const value = storedExtras();
        if (value.goodFlippinLuck) { /* BRIO branch: extrasState — Accept value.goodFlippinLuck. Derive effective challenge values while retaining the separately saved preferences. */
            for (const [id,,,,kind] of EXTRA.challenges) if (id && id !== "goodFlippinLuck" && kind !== "visual") value[id] = true;
            for (const [id] of EXTRA.modifiers) if (id) value[id] = false;
            value.lootMaskTier = "all"; value.buildMaskTier = "all";
        }
        value.maskLootArt = !!value.lootInvisible && value.lootMaskTier !== "rarity";
        value.cleanLoot = !!value.lootInvisible && value.lootMaskTier !== "item";
        value.maskLootPopup = !!value.lootInvisible && ["locations","all"].includes(value.lootMaskTier);
        value.maskLootOutline = !!value.lootInvisible && value.lootMaskTier === "locations";
        return value;
    }, /* BRIO: saveExtras
     * Save raw user selections only; derived forced-off flags must never erase independent preferences.
     */
    saveExtras = /* BRIO expr: saveExtras — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ s => write("brio_extras_state", s), norm = u => { /* BRIO block: norm — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        try { /* BRIO guarded: norm — Keep the existing exception boundary for norm. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            return new URL(String(u || ""), location.href).pathname.toLowerCase();
        } catch (_) { /* BRIO fallback: norm — Handle failure in norm through its existing fallback/report path; optional native fields may be unavailable. */
            return String(u || "").split(/[?#]/)[0].toLowerCase();
        }
    }, /* BRIO: clean
     * Sanitize terminal diagnostics, preserving complete source through its separate reconstructable chunk path.
     */
    clean = x => { /* BRIO block: clean — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (typeof x === "string") return x.startsWith("data:image/") ? `[data-url ${x.length} chars]` : x.length > 12e3 ? x.slice(0, 11997) + "..." : x;
        if (Array.isArray(x)) return x.map(clean);
        if (x && typeof x === "object") { /* BRIO branch: clean — Accept x && typeof x === "object". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const o = {};
            for (const [k, v] of Object.entries(x)) o[k] = clean(v);
            return o;
        }
        return x;
    }, J = x => { /* BRIO block: J — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        try { /* BRIO guarded: J — Keep the existing exception boundary for J. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            return JSON.stringify(clean(x));
        } catch (_) { /* BRIO fallback: J — Handle failure in J through its existing fallback/report path; optional native fields may be unavailable. */
            return String(x);
        }
    }, /* BRIO: log
     * Append the complete diagnostic history; only the terminal preview is bounded. COPY RESULTS must keep all epochs.
     */
    log = (m, o) => { /* BRIO V53: log — sample BRIO serialization cost; native events remain untouched and quiet-phase omissions are counted. */
        const cost=v53PerfBegin('log serialization');try{ /* BRIO block: log — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if(v53Quiet()&&!/PERFORMANCE|AUTOMATIC AUDIT|POSTGAME|ERROR|FAIL|MATCH STATE|TEST SETTINGS|NATIVE SESSION/.test(m)){ /* BRIO block V53: log — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53.perf.diagnosticSkipped++;return;}
        const z = `[${(new Date).toISOString().slice(11, 23)}] ${m}${o === undefined ? "" : " " + J(o)}`;
        S.log.push(z);
        if (S.out && !term.classList.contains("min")) { /* BRIO branch: log — Accept S.out. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!S.logFlush) S.logFlush = setTimeout(() => { /* BRIO block: log — setTimeout callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                S.logFlush = 0;
                if (S.out && !S.manualCopy && !term.classList.contains("min") && !v53Quiet()) { /* BRIO branch: log — Accept S.out && !S.manualCopy. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    S.out.value = S.log.slice(-80).join("\n").slice(-64000);
                    S.out.scrollTop = S.out.scrollHeight;
                }
            }, 200);
        }

        }finally{ /* BRIO block V53: log — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('log serialization',cost);}
    };
    const ROOFS = [ "/buildart/barnroof.png", "/buildart/cabinroof.png", "/buildart/castlebottomleftroof.png", "/buildart/castlebottomrightroof.png", "/buildart/castlecenterroof.png", "/buildart/castletopleftroof.png", "/buildart/castletoprightroof.png", "/buildart/gymroof.png", "/buildart/house0roof.png", "/buildart/house1roof.png", "/buildart/house2roof.png", "/buildart/house3roof.png", "/buildart/house4roof.png", "/buildart/house5roof.png", "/buildart/japanroof.png", "/buildart/jungle_shack_roof.png", "/buildart/museumroof.png", "/buildart/observatoryroof.png", "/buildart/pavilionroof.png", "/buildart/potatopalaceroof.png", "/buildart/shackroof.png" ], ROOFSET = new Set(ROOFS), BUILDRE = /(?:wood|brick|metal)[0-2]\.png$|campfire|boostpad|shieldbuild|shieldbubble/i;
    const /* BRIO: mkBlank
     * Create transparent, native-sized resources for invisible modes. Never change native image dimensions/bookkeeping.
     */
    mkBlank = (w, h) => { /* BRIO block: mkBlank — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    catalog = /* BRIO expr: catalog — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => W["Åèa"] && typeof W["Åèa"] === "object" ? W["Åèa"] : {}, syncSet = /* BRIO expr: syncSet — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => new Set(Array.isArray(W["åÆÆ"]) ? W["åÆÆ"].map(String) : []), items = /* BRIO expr: items — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ typ => Object.entries(catalog()).filter(/* BRIO expr: items / Object.entries(catalog()).filter callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ ([id, v]) => v?.type === typ && !(typ === "skin" && (id === "player" || id === "skin1" || t(v?.name).toLowerCase() === "default"))).map(/* BRIO expr: items / Object.entries(catalog()).filter(([id, v]) => v?.type === typ && !(typ === "skin" && (id === "player" || id == callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ ([id, v]) => ({
        id: id,
        name: v.name || id,
        sync: syncSet().has(id)
    })).sort(/* BRIO expr: items / Object.entries(catalog()).filter(([id, v]) => v?.type === typ && !(typ === "skin" && (id === "player" || id == callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (a, b) => a.name.localeCompare(b.name));
    const /* BRIO: openDB
     * Open the category-scoped custom asset cache. Never clear user uploads at a match boundary.
     */
    openDB = /* BRIO expr: openDB — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => new Promise((ok, no) => { /* BRIO block: openDB — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const r = indexedDB.open("brio_unlocker", 1);
        r.onupgradeneeded = () => { /* BRIO block: r.onupgradeneeded — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!r.result.objectStoreNames.contains("customAssets")) r.result.createObjectStore("customAssets", {
                keyPath: "key"
            });
        };
        r.onsuccess = /* BRIO expr: r.onsuccess — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => ok(r.result);
        r.onerror = /* BRIO expr: r.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => no(r.error);
    }), /* BRIO: loadCustom
     * Restore custom assets and historic IDs before rendering selection UI; tolerate unavailable browser storage.
     */
    loadCustom = async () => { /* BRIO block: loadCustom — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        for (const k in S.custom) S.custom[k] = [];
        try { /* BRIO guarded: loadCustom — Keep the existing exception boundary for loadCustom. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const d = await openDB(), r = d.transaction("customAssets").objectStore("customAssets").getAll(), a = await new Promise((ok, no) => { /* BRIO block: loadCustom — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                r.onsuccess = /* BRIO expr: r.onsuccess — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => ok(r.result || []);
                r.onerror = /* BRIO expr: r.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => no(r.error);
            });
            d.close();
            for (const x of a) if (S.custom[x.category]) { /* BRIO branch: loadCustom — Accept S.custom[x.category]. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                x.n = x.n || +(String(x.id || "").match(/\d+/) || [ 1 ])[0] || 1;
                x.id = x.id || `custom${x.n}`;
                x.name = x.name || x.id;
                S.custom[x.category].push(x);
            }
            for (const k in S.custom) S.custom[k].sort(/* BRIO expr: loadCustom / S.custom[k].sort callback — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ (a, b) => (a.n || 0) - (b.n || 0));
            log("CUSTOM CACHE", Object.fromEntries(Object.entries(S.custom).map(/* BRIO expr: loadCustom / Object.entries(S.custom).map callback — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ ([k, v]) => [ k, v.length ])));
        } catch (e) { /* BRIO fallback: loadCustom — Handle failure in loadCustom through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(e));
            log("CUSTOM CACHE ERROR", String(e));
        }
    }, /* BRIO: putCustom
     * Persist uploaded artwork transactionally. These durable records outlive Play, cleanup and reinjection.
     */
    putCustom = async x => { /* BRIO block: putCustom — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const d = await openDB();
        await new Promise((ok, no) => { /* BRIO block: putCustom — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const tr = d.transaction("customAssets", "readwrite");
            tr.objectStore("customAssets").put(x);
            tr.oncomplete = ok;
            tr.onerror = /* BRIO expr: tr.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => no(tr.error);
        });
        d.close();
    };
    const STATUS = {
        green: new Set([ "transparentRoofs", "healthBars", "playerNames", "allGlidersInvisible", "allTrailsInvisible", "inventoryAmmo", "inventorySize", "permanentMeteor", "numericHealthShield", "lowHealthWarning", "nearestPlayer", "nearestChest", "nearestAirdrop", "nearestPlayerName", "noChestsVisible", "monochrome", "lowMatsWarning", "lowAmmoWarning", "transparentFoliage", "noMinimap" ]),
        yellow: new Set([ "showBulletSpread","buildHealth","objectHealth","safeZoneIndicator","lootIndicator","highlightOwnedAmmo","longerBulletTrails","noDamageDirection","noInfoPopups","noPickupLabels","noHitMarker","noDamageNumbers","noWeaponProgress","invisibleProjectiles","hideWeapons","noStormTimer", "screenChests", "screenAirdrops", "screenFishing", "identifyBots", "highContrastPlayers", "playersInvisible", "lootInvisible", "buildsInvisible", "noCrosshair", "noInventoryHud", "invisibleStorm", "noHealthShieldHud", "goodFlippinLuck", "inventorySlots", "inventoryMaterials" ])
    }, statusOf = /* BRIO expr: statusOf — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ id => STATUS.yellow.has(id) ? "yellow" : STATUS.green.has(id) ? "green" : "red";
    const style = D.createElement("style");
    style.textContent = `[data-brio-mono-page] canvas:not(#playerPreview):not([data-brio-mono]){filter:grayscale(1)!important}#ad,#preroll,#buildroyale-io_300x250,#buildroyale-io_300x250_2,#buildroyale-io_728x90,#buildroyale-io_300x600,#buildroyale-io_970x250,#disableAdsButton,iframe[src*="doubleclick" i],iframe[src*="googlesyndication" i]{display:none!important;visibility:hidden!important;width:0!important;height:0!important;margin:0!important;padding:0!important;border:0!important;pointer-events:none!important}#loggedInLocker.b18,#loggedInShop.b18{box-sizing:border-box!important;width:178px!important;height:53px!important;display:inline-flex!important;align-items:center!important;gap:8px!important;padding:0 12px!important;margin-top:7px!important;border:4px solid #090909!important;border-radius:9px!important;background:#65aee0!important;color:#fff!important;cursor:pointer!important;transition:none!important;overflow:hidden!important}#loggedInLocker.b18{margin-right:0!important}#loggedInShop.b18{margin-right:80px!important}#loggedInLocker.b18>img,#loggedInShop.b18>img{display:none!important}#loggedInLocker.b18>.bi,#loggedInShop.b18>.bi{width:42px;height:42px;flex:0 0 42px;background:center/contain no-repeat;pointer-events:none}#loggedInLocker.b18>p,#loggedInShop.b18>p{position:static!important;margin:0!important;flex:1;text-align:center;font-size:23px!important;color:#fff!important;-webkit-text-stroke:1px #000;pointer-events:none}.brioModal{position:fixed;z-index:2147483645;left:50%;top:50%;transform:translate(-50%,-50%);width:min(980px,96vw);height:min(700px,92vh);display:none;flex-direction:column;background:#000;color:#fff;border:2px solid #fff;font:14px Arial}.brioModal header,.brioTabs,.brioTools,.brioSubs,.brioSlots{display:flex;gap:6px;align-items:center;padding:7px;border-bottom:1px solid #555;flex-wrap:wrap}.brioModal header b{flex:1;font-size:20px}.brioModal button{background:#111;color:#fff;border:1px solid #777;padding:6px;cursor:pointer}.brioModal button.on{background:#555}.brioModal input[type=text]{background:#111;color:#fff;border:1px solid #777;padding:6px;width:220px;cursor:text}.brioModal select{background:#111;color:#fff;border:1px solid #777;padding:5px;min-width:110px}.brioGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:6px;padding:8px;overflow:auto;flex:1;align-content:start}.brioCard{height:126px;border:1px solid #555;background:#090909;text-align:center;position:relative;overflow:hidden;cursor:pointer}.brioCard.sel{outline:3px solid #fff}.brioCard img{width:82px;height:82px;object-fit:contain;margin-top:4px}.brioCard .n{position:absolute;left:3px;right:3px;bottom:5px;font-size:12px}.brioCard .sync{position:absolute;right:3px;top:3px;font-size:9px;border:1px solid #6a6;padding:2px}.brioCard.sp{height:82px;display:flex;align-items:center;justify-content:center;font-weight:bold}.brioThresholds{display:flex;flex-wrap:nowrap;gap:8px;overflow-x:auto;padding:6px 10px 10px 34px;border-bottom:1px solid #555}.brioThresholds fieldset{display:flex;align-items:center;flex:0 0 auto;gap:8px;border:0;margin:0;padding:2px 0;min-width:0}.brioThresholds fieldset:disabled{opacity:.4}.brioThresholds fieldset label{display:flex;flex:0 0 auto;flex-direction:row;align-items:center;gap:4px;font-size:11px;white-space:nowrap}.brioThresholds input{width:56px;box-sizing:border-box;background:#111;color:#fff;border:1px solid #777;padding:4px}.brioThresholds input:disabled{cursor:not-allowed}.brioThresholds button{white-space:nowrap}.brioTier{display:flex;align-items:center;gap:12px;padding:6px 10px 10px 34px;border-bottom:1px solid #333}.brioModal :disabled{cursor:not-allowed}.brioOpt.locked{opacity:.55}.brioLockNote{padding:8px;color:#ffd21c}.brioPage{padding:8px;overflow:auto}.brioOpt{display:flex;gap:10px;padding:10px;border-bottom:1px solid #333;align-items:center}.brioOpt label{flex:1}.brioOpt.child{padding-left:34px}.brioOpt.st-green{background:#153d22}.brioOpt.st-yellow{background:#665700}.brioOpt.st-red{background:#4b1717}.brioBadge{font:700 10px Arial;padding:3px 5px;border:1px solid #aaa;min-width:58px;text-align:center}.brioGroup{padding:12px 10px 5px;font-weight:bold;border-bottom:1px solid #555;color:#9fd4ff}.brioLegend{display:flex;gap:12px;padding:7px;border-bottom:1px solid #555;font-size:11px}.brioLegend span{padding:3px 6px}.brioStatus{padding:7px;border-top:1px solid #555;font:12px Consolas;white-space:pre-wrap}.brioTerm.min .body{display:none!important}.brioTerm.min{width:460px!important;height:34px!important}.brioTerm.min .head{cursor:move!important}`;
    /* BRIO: V52 Extras layout — explicit rows/grid/pressed states; no broad native page redesign. */
    style.textContent+=`.brioOpt>label{flex:1;min-width:180px}.brioColor{flex:0 0 auto}.brioColor label{display:inline-flex;gap:6px;align-items:center;flex:none}.brioColor input{width:32px;height:26px;padding:0;border:1px solid #ddd}.brioTier{margin:0;border:0;border-bottom:1px solid #333;flex-wrap:wrap;min-width:0}.brioTier legend{font-size:11px;color:#ccd6e0}.brioTier button[aria-pressed=true]{background:#28609a;border:2px solid #d2eaff}.brioTier:disabled,.brioLootChoices:disabled{opacity:.45}.brioLootChoices{flex-basis:100%;min-width:0;margin:0;padding:8px;border:1px solid #9aa9bb}.brioLootChoices legend{color:white;font-weight:bold}.brioLootSummary{display:block;padding:0 0 8px;color:#e2e9f1}.brioLootGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px}.brioLootWeapon{display:grid;grid-template-columns:36px minmax(85px,1fr) 52px 52px;align-items:center;gap:4px;padding:5px;background:#15202d;border:1px solid #536171;color:white}.brioLootWeapon img{width:32px;height:32px;object-fit:contain}.brioLootWeapon span{font:12px Arial;overflow-wrap:anywhere}.brioLootWeapon button{min-width:0;font:12px Arial;padding:6px 3px}.brioLootWeapon button[data-rarity="4"]{color:#ffff75}.brioLootWeapon button[data-rarity="5"]{color:#ff9292}.brioLootWeapon button[aria-pressed=true]{background:#364f70;border:2px solid white}.brioTestSetup{display:flex;gap:8px;padding:8px;flex-wrap:wrap}.brioTier button:disabled,.brioLootChoices button:disabled{cursor:not-allowed}`;
    D.documentElement.appendChild(style);
    const /* BRIO: patchButtons
     * Modify the actual native Locker/Shop nodes and preserve original markup/styles for destroy.
     */
    patchButtons = () => { /* BRIO block: patchButtons — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        for (const [id, label, ico] of [ [ "loggedInLocker", "(un)Locker", "/buildart/icon-locker.png" ], [ "loggedInShop", "Extras", "/buildart/icon-shop.png" ] ]) { /* BRIO loop: patchButtons — Iterate [ [ "loggedInLocker", "(un)Locker", "/buildart/icon-locker.png" ], [ "loggedInShop", "Extr. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const e = D.getElementById(id);
            if (!e) continue;
            if (!S.bak[id]) S.bak[id] = {
                html: e.innerHTML,
                cls: e.className,
                style: e.getAttribute("style") || ""
            };
            let i = e.querySelector(":scope>.bi");
            if (!i) { /* BRIO branch: patchButtons — Accept !i. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                i = D.createElement("span");
                i.className = "bi";
                e.prepend(i);
            }
            i.style.backgroundImage = `url(${ico})`;
            let p = e.querySelector(":scope>p");
            if (!p) { /* BRIO branch: patchButtons — Accept !p. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
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
    }, kcat = /* BRIO expr: kcat — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => tab === "skin" ? sub : tab, sel = () => { /* BRIO block: sel — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const s = state();
        return tab === "emote" ? (Array.isArray(s.emotes) ? s.emotes[slot] : null) || {
            mode: "native"
        } : s[kcat()] || {
            mode: "native"
        };
    }, /* BRIO: setSel
     * Change one selected cosmetic/category/emote slot. Rendering and saved preferences share this entry point.
     */
    setSel = x => { /* BRIO block: setSel — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const s = state();
        s.enabled = true;
        if (tab === "emote") { /* BRIO branch: setSel — Accept tab === "emote". Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const a = Array.isArray(s.emotes) ? s.emotes.slice(0, 4) : [];
            while (a.length < 4) a.push({
                mode: "native"
            });
            a[slot] = x;
            s.emotes = a;
        } else s[kcat()] = x;
        saveState(s);
        renderGrid();
    }, preview = /* BRIO expr: preview — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (k, id) => k === "body" ? `/cosmetics/body/${id}.png?2` : k === "head" ? `/cosmetics/head/${id}.png?2` : k === "pickaxe" ? `/cosmetics/pickaxe/${id}.png?2` : k === "wrap" ? `/cosmetics/combos/${id}.png?2` : k === "trail" ? `/cosmetics/trails/${id}.png?2` : k === "glider" ? `/cosmetics/glider/${id}.png?2` : `/cosmetics/emotes/${id}.png?2`, card = (mode, x) => { /* BRIO block: card — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const k = kcat(), c = D.createElement("div");
        c.className = "brioCard" + (mode === "item" || mode === "custom" ? "" : " sp");
        c.dataset.mode = mode;
        if (x?.id) c.dataset.id = x.id;
        if (mode === "item") { /* BRIO branch: card — Accept mode === "item". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            c.innerHTML = `${x.sync ? '<span class="sync">SYNC</span>' : ""}<img loading="lazy" src="${preview(k, x.id)}"><div class="n">${x.name}</div>`;
            c.querySelector("img").onerror = /* BRIO expr: c.querySelector("img").onerror — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => c.remove();
            c.onclick = /* BRIO expr: c.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => setSel({
                mode: "item",
                id: x.id,
                name: x.name
            });
        } else if (mode === "custom") { /* BRIO branch: card — Accept mode === "custom". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            c.innerHTML = `<img src="${x.data}"><div class="n">${x.name}</div>`;
            c.onclick = /* BRIO expr: c.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => setSel({
                mode: "custom",
                id: x.id,
                name: x.name
            });
        } else { /* BRIO branch: card — Alternative for mode === "custom". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            c.textContent = mode[0].toUpperCase() + mode.slice(1);
            c.onclick = /* BRIO expr: c.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => setSel({
                mode: mode
            });
        }
        return c;
    }, /* BRIO: renderGrid
     * Build native/random/bundled/invisible/custom choices from the supported category and search.
     */
    renderGrid = () => { /* BRIO block: renderGrid — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const g = locker.querySelector(".brioGrid"), sr = t(locker.querySelector('input[type="text"]').value).toLowerCase(), k = kcat(), s = sel(), allowInvisible = [ "body", "head", "pickaxe", "trail", "glider" ].includes(k), allowCustom = [ "body", "head", "pickaxe" ].includes(k), match = /* BRIO expr: match — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => !sr || String(x).toLowerCase().includes(sr);
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
    renderLocker = () => { /* BRIO block: renderLocker — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const a = locker.querySelector(".brioTabs"), b = locker.querySelector(".brioSubs"), sl = locker.querySelector(".brioSlots");
        a.textContent = b.textContent = sl.textContent = "";
        for (const x of [ "skin", "pickaxe", "wrap", "trail", "glider", "emote" ]) { /* BRIO loop: renderLocker — Iterate [ "skin", "pickaxe", "wrap", "trail", "glider", "emote" ]. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const z = D.createElement("button");
            z.textContent = labels[x];
            z.className = x === tab ? "on" : "";
            z.onclick = () => { /* BRIO block: z.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                tab = x;
                renderLocker();
            };
            a.appendChild(z);
        }
        b.style.display = tab === "skin" ? "flex" : "none";
        if (tab === "skin") for (const x of [ "body", "head" ]) { /* BRIO loop: renderLocker — Iterate [ "body", "head" ]. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const z = D.createElement("button");
            z.textContent = x[0].toUpperCase() + x.slice(1);
            z.className = x === sub ? "on" : "";
            z.onclick = () => { /* BRIO block: z.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                sub = x;
                renderLocker();
            };
            b.appendChild(z);
        }
        sl.style.display = tab === "emote" ? "flex" : "none";
        if (tab === "emote") for (let i = 0; i < 4; i++) { /* BRIO loop: renderLocker — Iterate i < 4. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const z = D.createElement("button");
            z.textContent = `Slot ${i + 1}`;
            z.className = i === slot ? "on" : "";
            z.onclick = () => { /* BRIO block: z.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                slot = i;
                renderLocker();
            };
            sl.appendChild(z);
        }
        renderGrid();
    };
    locker.querySelector("[data-close]").onclick = /* BRIO expr: locker.querySelector("[data-close]").onclick — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => locker.style.display = "none";
    locker.querySelector('input[type="text"]').oninput = renderGrid;
    locker.querySelector("[data-upload]").onclick = /* BRIO expr: locker.querySelector("[data-upload]").onclick — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => locker.querySelector('input[type="file"]').click();
    locker.querySelector('input[type="file"]').onchange = e => { /* BRIO block: locker.querySelector('input[type="file"]').onchange — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const f = e.target.files?.[0], k = kcat();
        if (!f || ![ "body", "head", "pickaxe" ].includes(k)) return;
        const im = new Image, u = URL.createObjectURL(f);
        im.onload = async () => { /* BRIO block: im.onload — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            URL.revokeObjectURL(u);
            const dims = {
                body: [ 300, 300 ],
                head: [ 350, 350 ],
                pickaxe: [ 300, 300 ]
            }[k], c = D.createElement("canvas");
            c.width = dims[0];
            c.height = dims[1];
            c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
            const n = S.custom[k].reduce(/* BRIO expr: im.onload / S.custom[k].reduce callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (m, x) => Math.max(m, x.n || 0), 0) + 1, x = {
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
    /* BRIO: challengeRegistry (V50; new tiers/composite live-pending)
     * Boolean IDs remain stable for saved V49 selections. Tier strings are separately normalized.
     * Fifth column "visual" explicitly excludes monochrome/flashlight from the aggregate challenge.
     * Future gameplay challenge rows automatically join Good flippin luck; modifiers automatically lock off.
     */
    const LOOT_TIERS = [["item","Mask item"],["rarity","Mask rarity"],["popups","Popups only"],["locations","Locations only"],["all","All invisible"]],
        BUILD_TIERS = [["blueprints","Blueprints only"],["all","All invisible"]];
    const EXTRA = {
        challenges: [
            ["playersInvisible","All players invisible","remote body, held items/builds, glider/grapple; all trail particles"],
            ["lootInvisible","Mask loot","five information levels",false,"lootTier"],
            ["buildsInvisible","Builds invisible","placement preview separate from placed blue base",false,"buildTier"],
            ["noMinimap","No map","minimap + full map + player/kill counters"],
            ["noCrosshair","No crosshair","native arms/center/hit marker"],
            ["noInventoryHud","No inventory/item bar","native item/material/ammo/build widgets"],
            ["invisibleStorm","Invisible storm","world storm + minimap/full-map shading/border"],
            ["noChestsVisible","Chests invisible","chests + ammo/grenade crates · proven"],
            ["noHealthShieldHud","No health/shield HUD","native own bars; ammo counter retained"],
            ["noInfoPopups","Hide info popups","native announcements, kill feed, elimination banners and gameplay prompts"],
            ["noPickupLabels","No pickup labels","ground loot visible; native nearby pickup popup hidden"],
            ["noHitMarker","No hit-confirmation marker","crosshair retained"],
            ["noDamageDirection","Hide damage direction","native incoming-damage arrow; independent of floating numbers"],
            ["noDamageNumbers","No floating damage numbers","native damage/healing text pools"],
            ["noWeaponProgress","No reload/charge progress","native progress HUD retained in simulation"],
            ["invisibleProjectiles","Invisible bullets/throwables","also silences shared detached trails; native physics/sounds retained"],
            ["hideWeapons","Hide weapons","local + remote held art and aiming build previews"],
            ["noStormTimer","No storm countdown","timer icon/text; player/kill counters retained"],
            ["monochrome","Monochrome vision","game canvas grayscale · proven",false,"visual"],
            ["flashlightMode","Flashlight mode","planned; visual-only, excluded from combined challenge",false,"visual"],
            ["goodFlippinLuck","Hell","all gameplay challenges, highest tiers; every modifier locked off"]
        ],
        modifiers: [ [ "transparentRoofs", "Transparent roofs", "static map roofs" ], [ "healthBars", "Player health bars", "remote players" ], [ "numericHealthShield", "Health/shield numbers", "numbers inside native bars · proven" ], [ "playerNames", "Player names", "remote players" ], [ "allGlidersInvisible", "All gliders invisible", "self + remote" ], [ "allTrailsInvisible", "All trails invisible", "self + remote" ], [ "screenChests", "Screen chests", "always-visible contents above detected containers: unresolved" ], [ "screenAirdrops", "Screen airdrops", "always-visible contents above detected airdrops: unresolved" ], [ "screenFishing", "Screen fishing spots", "always-visible contents above detected fishing spots: unresolved" ], [ "nearestPlayer", "Nearest player indicator", "off-screen only + distance" ], [ "nearestPlayerName", "Player name in nearest arrow", "below distance; follows upright label", true ], [ "nearestChest", "Nearest chest indicator", "hide while target is on-screen" ], [ "nearestAirdrop", "Nearest airdrop indicator", "hide while target is on-screen" ], [ "permanentMeteor", "Permanent meteor location", "automatic native waypoint retention · proven" ], [ "identifyBots", "Identify bots", "bounded native metadata/source recon; no classifier yet" ], [ "highContrastPlayers", "High-contrast players", "deferred; optional native yellow ring" ], [ "transparentFoliage", "Transparent foliage", "canopy opacity 25% · proven" ], [ "stormEdge", "Storm edge highlight", "planned" ], [ "stormCenter", "Safe-zone center direction", "planned" ], [ "stormDistance", "Storm-edge distance", "planned" ],
            ["showBulletSpread","Show bullet spread","measured shot envelope by gun/rarity; calibration required, no guaranteed maximum"],
            ["buildHealth","Build health outlines","green >75%; yellow >50%; orange >25%; red ≤25%"],
            ["objectHealth","Breakable object health outlines","same bands; includes vehicles"],
            ["safeZoneIndicator","Nearest safe-zone edge","blue by default; distance built in; target zone during movement"],
            ["lootIndicator","Loot indicator","selected source guns in gold/red rarity; closest12 off-screen pickups"],
            ["highlightOwnedAmmo","Highlight ammo for owned guns","native pickup ammo matches current carried gun types"],
            ["longerBulletTrails","Longer bullet trails","1.2s observed bullet/throwable history; no trajectory prediction"], [ "customCrosshair", "Enhanced/custom crosshair", "built-ins + upload" ], [ "lowHealthWarning", "Low-health visual warning", "own HP at or below threshold · proven" ], [ "lowAmmoWarning", "Low-ammo visual warning", "inclusive thresholds; grappler5, flare exempt · proven" ], [ "lowMatsWarning", "Low-material warning", "inclusive thresholds including scraps · proven" ], [ null, "Show player inventories", "three rows below player" ], [ "inventorySlots", "Inventory: 5 item slots", "larger row aligned to ammo; no counts/hotkeys", true ], [ "inventoryMaterials", "Inventory: build materials/counts", "larger icons/counts; wood / brick / metal / scraps", true ], [ "inventoryAmmo", "Inventory: ammo by type", "native icons + separate counts · proven", true ], [ "inventorySize", "Inventory size", "Small / Medium / Large / XL", true, "select" ] ]
    };
    // V50 flags distinguish normal-profile switches from challenges to cycle; no impossible all-on requirement.
    // Warning decisions/foliage/slot-border motion are PROVEN. Only their new reset buttons get UI-check badges.
    const REQUIRED_TESTS = ["screenChests","screenAirdrops","screenFishing","identifyBots","inventorySlots","inventoryMaterials","nearestPlayer","nearestChest","nearestAirdrop","showBulletSpread","buildHealth","objectHealth","safeZoneIndicator","lootIndicator","highlightOwnedAmmo","longerBulletTrails"],
        CHALLENGE_TESTS = ["playersInvisible","lootInvisible","buildsInvisible","noMinimap","noCrosshair","noInventoryHud","invisibleStorm","noHealthShieldHud","goodFlippinLuck","noDamageDirection","noInfoPopups","noPickupLabels","noHitMarker","noDamageNumbers","noWeaponProgress","invisibleProjectiles","hideWeapons","noStormTimer"];
    /* BRIO: nativeScanNeeded (V50)
     * Reuse the existing3000-node/second scene scanner even when the composite disables every modifier.
     * A modifier-only guard would strand map/popup/trail widgets created after12-second initial discovery.
     */
    const nativeScanNeeded = /* BRIO expr: nativeScanNeeded — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ e => !!e.permanentMeteor || !!e.transparentRoofs || !!e.lowMatsWarning || !!e.lowAmmoWarning ||
        !!e.inventorySlots || !!e.inventoryMaterials || !!e.inventoryAmmo || !!e.allTrailsInvisible ||
        ["showBulletSpread","buildHealth","objectHealth","safeZoneIndicator","lootIndicator","highlightOwnedAmmo","longerBulletTrails"].some(/* BRIO expr V52: nativeScanNeeded — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ id=>!!e[id]) || CHALLENGE_TESTS.some(/* BRIO expr: nativeScanNeeded / CHALLENGE_TESTS.some callback — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ id => !!e[id]);
    const /* BRIO: renderWarningThresholds (V50; controls/reset live-pending, decisions proven)
     * V49 inline child row directly under each warning option, like nearest-player name under its indicator.
     * Each group stays on one nonwrapping horizontal row; all11 fields remain labeled and persisted.
     * Explicit indices preserve requested display order (shells before heavy) despite native reserve order.
     * Fieldset.disabled supplies actual keyboard/form disabling; opacity greys the corresponding group.
     */
    renderWarningThresholds = (p, settings, modifierId) => { /* BRIO block: renderWarningThresholds — Edit/reset only the matching warning group; disabled groups reject edits. V50 controls live-pending; warning decisions proven. */
        const row = D.createElement("div"); row.className = "brioThresholds";
        row.setAttribute("aria-label", "Warning thresholds: warn at or below these values");
        for (const [kind,modifier,title,items] of [
            ["health","lowHealthWarning","Health",[["HP",0]]],
            ["ammo","lowAmmoWarning","Ammo / charges",[["Light",0],["Medium",1],["Shells",3],["Heavy",2],["Rockets",4],["Grappler",5]]],
            ["materials","lowMatsWarning","Materials",[["Wood",0],["Brick",1],["Metal",2],["Scraps",3]]]
        ]) { /* BRIO loop: renderWarningThresholds — Iterate [ ["health","lowHealthWarning","Health",[["HP",0]]], ["ammo","lowAmmoWarning","Ammo / char. Edit/reset only the matching warning group; disabled groups reject edits. V50 controls live-pending; warning decisions proven. */
            if (modifier !== modifierId) continue;
            const group = D.createElement("fieldset");
            group.dataset.warningModifier = modifier; group.disabled = !settings[modifier];
            group.setAttribute("aria-label", title + " · at or below");
            for (const [name,index] of items) { /* BRIO loop: renderWarningThresholds — Iterate items. Edit/reset only the matching warning group; disabled groups reject edits. V50 controls live-pending; warning decisions proven. */
                const label = D.createElement("label"), input = D.createElement("input");
                label.appendChild(D.createTextNode(name)); input.type = "number";
                input.min = "0"; input.max = "1000000"; input.step = "1";
                input.dataset.warningKind = kind; input.dataset.warningIndex = index;
                input.setAttribute("aria-label", "Low " + name + " warning threshold");
                const current = () => { /* BRIO block: current — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const t = storedExtras().warningThresholds; return kind === "health" ? t.health : t[kind][index];};
                input.value = String(kind === "health" ? settings.warningThresholds.health : settings.warningThresholds[kind][index]);
                // Keep the last good value while blank/invalid input is being edited; normalize on blur/change.
                // Invalidate only BRIO's settings cache so native/remote draw decisions update immediately.
                input.oninput = () => { /* BRIO block: input.oninput — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    if (input.value.trim() === "" || !input.checkValidity()) return;
                    const value = Number(input.value);
                    if (!Number.isSafeInteger(value) || value < 0 || value > 1000000) return;
                    const z = storedExtras();
                    if (kind === "health") z.warningThresholds.health = value; else z.warningThresholds[kind][index] = value;
                    saveExtras(z); featureEx.at = -Infinity;
                };
                input.onchange = input.onblur = () => { /* BRIO block: input.onblur — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ input.oninput(); input.value = String(current());};
                label.appendChild(input); group.appendChild(label);
            }
            // V50 reset only this warning group, leaving other values, selections and the enable switch untouched.
            const reset = D.createElement("button"); reset.type = "button"; reset.textContent = "Reset to default";
            reset.dataset.warningReset = kind;
            reset.onclick = () => { /* BRIO block: reset.onclick — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
                const z = storedExtras();
                z.warningThresholds[kind] = kind === "health" ? WARNING_DEFAULTS.health : [...WARNING_DEFAULTS[kind]];
                saveExtras(z); featureEx.at = -Infinity;
                for (const input of group.querySelectorAll("input")) input.value = String(kind === "health" ? z.warningThresholds.health : z.warningThresholds[kind][+input.dataset.warningIndex]);
                log("WARNING DEFAULT RESET", {kind, values:z.warningThresholds[kind]});
            };
            group.appendChild(reset);
            const badge = D.createElement("small"); badge.textContent = "⚑ CHECK RESET";
            row.append(group,badge);
        }
        p.appendChild(row);
    };
    /* BRIO: renderChallengeTier (V50; tier choices persist independently of checkbox)
     * The composite displays and locks the highest tier without overwriting saved individual tier choices.
     * Changing a tier invalidates draw-time gates immediately; native art/particles/state need no reconstruction.
     */
    const renderChallengeTier = (p, settings, id, locked) => {
        /* BRIO: renderChallengeTier V52 — one mutually exclusive button per level, persistent independently
         * of the enable checkbox. Hell displays highest effective level without overwriting saved tiers. */
        const row=D.createElement('fieldset'),loot=id==='lootInvisible',key=loot?'lootMaskTier':'buildMaskTier';row.className='brioTier';row.dataset.challengeTier=key;row.disabled=locked||!settings[id];
        const legend=D.createElement('legend');legend.textContent='Level';row.appendChild(legend);
        for(const [value,name]of loot?LOOT_TIERS:BUILD_TIERS){
            /* Pressed state makes the currently selected level explicit; HTML fieldset disables every button. */
            const button=D.createElement('button');button.type='button';button.textContent=name;button.dataset.tier=value;button.setAttribute('aria-pressed',String(value===settings[key]));
            button.onclick=()=>{ /* Change only this saved tier; existing reached draw predicates read it immediately. */ const z=storedExtras();z[key]=value;saveExtras(z);featureEx.at=-Infinity;for(const b of row.querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.tier===value));syncFeatureSettings();log('CHALLENGE TIER',{id,tier:value});};row.appendChild(button);
        }
        p.appendChild(row);
    };
    const modifierRows=()=>{
        /* BRIO: modifierRows V52 — render groups from stable registry IDs, minimum three real entries.
         * Keep the registry unchanged for saved settings/Hell derivation. Two-member groups join Miscellaneous. */
        const definitions=[['Indicators',['nearestPlayer','nearestPlayerName','nearestChest','nearestAirdrop','safeZoneIndicator','lootIndicator']],['Warnings',['lowHealthWarning','lowAmmoWarning','lowMatsWarning']],['Player inventories',['inventorySlots','inventoryMaterials','inventoryAmmo','inventorySize']],['Content screening',['screenChests','screenAirdrops','screenFishing']],['Player information',['healthBars','numericHealthShield','playerNames','identifyBots','highContrastPlayers']],['World appearance',['transparentRoofs','transparentFoliage','buildHealth','objectHealth']]],used=new Set,rows=[];
        for(const [title,ids]of definitions){ /* A group counts modifiers, not headings or subordinate name controls. */ const members=EXTRA.modifiers.filter(/* BRIO expr V52: modifierRows — Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous. */ r=>r[0]&&ids.includes(r[0]));if(members.filter(/* BRIO expr V52: modifierRows — Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous. */ r=>r[0]!=='nearestPlayerName').length<3)continue;rows.push([null,title,'']);for(const member of members){ /* BRIO block V52: modifierRows — Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous. */ used.add(member[0]);rows.push(member);}}
        rows.push([null,'Miscellaneous','']);rows.push(...EXTRA.modifiers.filter(/* BRIO expr V52: modifierRows — Group stable modifier IDs into sections of at least three, with remaining IDs in Miscellaneous. */ r=>r[0]&&!used.has(r[0])));return rows;
    };
    const testSetup=restore=>{
        /* BRIO: testSetup V52 — explicit user-clicked, reversible test profile replaces sixteen toggle chores.
         * Persist a separate backup once, so reload/reinjection cannot lose prior preferences. Never start a match,
         * cycle challenges automatically, change cosmetics, invent loot eligibility, or alter warning thresholds. */
        const backup=read('brio_test_backup',null);if(restore){ /* Restore exactly the user's pre-profile preferences. */ if(backup){ /* BRIO block V52: testSetup — Apply or restore an explicit one-click test profile without erasing saved preferences or cosmetics. */ saveExtras(backup);localStorage.removeItem('brio_test_backup');}else return;}
        else { /* A normal-play profile exercises supported modifiers and collects unresolved routes passively. */ const z=storedExtras();if(!backup)write('brio_test_backup',z);for(const [id]of EXTRA.challenges)if(id)z[id]=false;for(const id of [...REQUIRED_TESTS,'inventoryAmmo','healthBars','numericHealthShield','playerNames','nearestPlayerName','lowHealthWarning','lowAmmoWarning','lowMatsWarning'])z[id]=true;z.allTrailsInvisible=false;z.highContrastPlayers=false;z.lootChoices=weaponChoices().flatMap(/* BRIO expr V52: testSetup — Apply or restore an explicit one-click test profile without erasing saved preferences or cosmetics. */ type=>[type+':4',type+':5']);saveExtras(z);extraTab='modifiers';}
        featureEx.at=-Infinity;syncFeatureSettings();renderExtras();log('V53 TEST PROFILE',{restored:!!restore,automaticChallengeCycling:false});
    };
    const /* BRIO: renderExtras
     * Render status and blue test flags from the same option registry used by the written live procedure.
     */
    renderExtras = () => { /* BRIO block: renderExtras — Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
        const a = extras.querySelector(".brioTabs"), p = extras.querySelector(".brioPage"), s = storedExtras(), effective = extrasState();
        if (![ "small", "medium", "large", "xl" ].includes(s.inventorySize)) { /* BRIO branch: renderExtras — Accept ![ "small", "medium", "large", "xl" ].includes(s.inventorySize). Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
            s.inventorySize = "medium";
            saveExtras(s);
        }
        a.textContent = p.textContent = "";
        for (const x of [ "challenges", "modifiers" ]) { /* BRIO loop: renderExtras — Iterate [ "challenges", "modifiers" ]. Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
            const z = D.createElement("button");
            z.textContent = x[0].toUpperCase() + x.slice(1);
            z.className = x === extraTab ? "on" : "";
            z.onclick = () => { /* BRIO block: z.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                extraTab = x;
                renderExtras();
            };
            a.appendChild(z);
        }
        const setup=D.createElement('div');setup.className='brioTestSetup';
        for(const [label,restore]of [['Set up normal test',false],['Restore saved settings',true]]){ /* Explicit profile actions keep routine testing reversible and one-click. */ const b=D.createElement('button');b.type='button';b.textContent=label;b.dataset.testSetup=restore?'restore':'normal';b.onclick=/* BRIO expr V52: renderExtras — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ ()=>testSetup(restore);b.disabled=restore&&!read('brio_test_backup',null);setup.appendChild(b);}
        const spreadStatus=D.createElement('small');spreadStatus.dataset.spreadStatus='';spreadStatus.style='display:block;color:#cad9ef;padding:6px';setup.appendChild(spreadStatus);
        p.appendChild(setup);v53CalibrationStatus();
        if (s.goodFlippinLuck) { /* BRIO branch: renderExtras — Accept s.goodFlippinLuck. Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
            const note = D.createElement("div"); note.className = "brioLockNote";
            note.textContent = "Hell is active: gameplay challenges use their highest tiers; all modifiers are off. Turn it off to restore your saved choices.";
            p.appendChild(note);
        }
        for (const [id, name, note, child, kind] of (extraTab === "modifiers" ? modifierRows() : EXTRA.challenges)) { /* BRIO loop: renderExtras — Iterate EXTRA[extraTab]. Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
            if (!id) { /* BRIO branch: renderExtras — Accept !id. Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
                const g = D.createElement("div");
                g.className = "brioGroup";
                g.textContent = name + (note ? " · " + note : "");
                p.appendChild(g);
                continue;
            }
            const locked = !!s.goodFlippinLuck && (extraTab === "modifiers" || id !== "goodFlippinLuck" && kind !== "visual"), st = statusOf(id), r = D.createElement("div"), l = D.createElement("label"), b = D.createElement("span");
            r.className = `brioOpt${child ? " child" : ""} st-${st}${locked ? " locked" : ""}`; r.dataset.extraId = id;
            l.innerHTML = `${name} <small style="color:#ccc">[${note}]</small>`;
            b.className = "brioBadge";
            b.textContent = st === "green" ? "PROVEN" : st === "yellow" ? "TESTING" : "UNPROVEN";
            if (REQUIRED_TESTS.includes(id) || CHALLENGE_TESTS.includes(id)) { /* BRIO branch: renderExtras — Accept REQUIRED_TESTS.includes(id) || CHALLENGE_TESTS.includes(id). Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
                const flag = D.createElement("span");
                flag.textContent = CHALLENGE_TESTS.includes(id) ? "AUTO CHECK" : "TEST PROFILE";
                flag.style = "background:#1164cf;color:white;font:bold 10px Arial;padding:4px 6px;border:1px solid #8bc7ff";
                r.appendChild(flag);
            }
            if (kind === "select") { /* BRIO branch: renderExtras — Accept kind === "select". Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
                const c = D.createElement("select");
                for (const [v, tx] of [ [ "small", "Small" ], [ "medium", "Medium" ], [ "large", "Large" ], [ "xl", "XL" ] ]) { /* BRIO loop: renderExtras — Iterate [ [ "small", "Small" ], [ "medium", "Medium" ], [ "large", "Large" ], [ "xl", "XL" ] ]. Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
                    const o = D.createElement("option");
                    o.value = v;
                    o.textContent = tx;
                    c.appendChild(o);
                }
                c.value = s[id] || "medium"; c.disabled = locked;
                c.onchange = () => { /* BRIO block: c.onchange — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    const z = storedExtras();
                    z[id] = c.value;
                    saveExtras(z);
                };
                r.append(l, b, c);
            } else { /* BRIO branch: renderExtras — Alternative for kind === "select". Keep checkboxes, tier locks, inline values and test flags consistent with effective settings. */
                const c = D.createElement("input");
                c.type = "checkbox";
                c.checked = !!effective[id]; c.disabled = locked;
                c.onchange = () => { /* BRIO block: c.onchange — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    const z = storedExtras();
                    z[id] = c.checked;
                    saveExtras(z);
                    featureEx.at = -Infinity;
                    const group = p.querySelector(`[data-warning-modifier="${id}"]`);
                    if (group) group.disabled = !c.checked;
                    const color=p.querySelector(`[data-indicator-color="${id}"]`);if(color)color.disabled=!c.checked;
                    if(id==='lootIndicator'){ /* BRIO block V52: renderExtras — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ const choices=p.querySelector('[data-loot-choices]');if(choices)choices.disabled=!c.checked;}
                    const tier = p.querySelector(`[data-challenge-tier="${id === "lootInvisible" ? "lootMaskTier" : id === "buildsInvisible" ? "buildMaskTier" : ""}"]`);
                    if (tier) tier.disabled = !c.checked;
                    if (id === "monochrome") syncMonochrome(c.checked);
                    if (id === "goodFlippinLuck") { /* BRIO branch: c.onchange — Accept id === "goodFlippinLuck". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                        syncFeatureSettings(); renderExtras();
                    } else syncFeatureSettings();
                };
                r.append(l, b, c);
            }
            p.appendChild(r);
            if (["lowHealthWarning","lowAmmoWarning","lowMatsWarning"].includes(id)) renderWarningThresholds(p,effective,id);
            if (kind === "lootTier" || kind === "buildTier") renderChallengeTier(p,effective,id,locked);
            if(Object.hasOwn(INDICATOR_COLORS,id))renderIndicatorControls(r,effective,id,locked);
        }
    };
    extras.querySelector("[data-close]").onclick = /* BRIO expr: extras.querySelector("[data-close]").onclick — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => extras.style.display = "none";
    const /* BRIO: intercept
     * Intercept only the two native home buttons used for BRIO UI; ordinary Play remains native.
     */
    intercept = e => { /* BRIO block: intercept — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const b = e.target?.closest?.("#loggedInLocker,#loggedInShop");
        if (!b) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (b.id === "loggedInLocker") { /* BRIO branch: intercept — Accept b.id === "loggedInLocker". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            renderLocker();
            locker.style.display = "flex";
        } else { /* BRIO branch: intercept — Alternative for b.id === "loggedInLocker". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            renderExtras();
            extras.style.display = "flex";
        }
    };
    D.addEventListener("click", intercept, true);
    const choose = (x, k) => { /* BRIO block: choose — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!x || x.mode === "native") return {
            mode: "native"
        };
        if (x.mode === "item") return x;
        if (x.mode === "custom" && [ "body", "head", "pickaxe" ].includes(k)) { /* BRIO branch: choose — Accept x.mode === "custom" && [ "body", "head", "pickaxe" ].includes(k). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const c = S.custom[k].find(/* BRIO expr: choose / S.custom[k].find callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ v => v.id === x.id);
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
        if (x.mode === "random") { /* BRIO branch: choose — Accept x.mode === "random". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    }, asset = /* BRIO expr: asset — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (k, x) => x.mode === "custom" || x.mode === "invisible" ? x.data : k === "body" ? `/cosmetics/body/${x.id}.png` : k === "head" ? `/cosmetics/head/${x.id}.png` : k === "pickaxe" ? `/cosmetics/pickaxe/${x.id}.png` : k === "glider" ? `/cosmetics/glider/${x.id}.png` : k === "emote" ? `/cosmetics/emotes/${x.id}.png` : null, loadRes = (k, x) => { /* BRIO block: loadRes — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!x || x.mode === "native") return Promise.resolve(null);
        const u = asset(k, x);
        if (!u) return Promise.resolve(null);
        const ck = `${k}:${x.mode}:${x.id || ""}`;
        if (S.resources.has(ck)) return S.resources.get(ck);
        const p = new Promise((ok, no) => { /* BRIO block: loadRes — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const im = new Image;
            im["ÀA"] = 2;
            im.onload = () => { /* BRIO block: im.onload — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
            im.onerror = /* BRIO expr: im.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => no(new Error("asset load failed " + ck));
            im.src = u;
        });
        S.resources.set(ck, p);
        p.catch(/* BRIO expr: loadRes / p.catch callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => S.resources.delete(ck));
        return p;
    }, held = /* BRIO expr: held — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ r => r?.["Åé"]?.[r?.["ÈÆ"]]?.type || null, /* BRIO: nativeSnap
     * Remember renderer cosmetics before local adapters so cleanup can restore native resources/descriptors.
     */
    nativeSnap = /* BRIO expr: nativeSnap — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ r => ({
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
    }), restoreEmote = () => { /* BRIO block: restoreEmote — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        const h = S.emoteEffect;
        if (!h) return;
        try { /* BRIO guarded: restoreEmote — Keep the existing exception boundary for restoreEmote. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            if (h.desc) Object.defineProperty(h.target, "À", h.desc); else h.target["À"] = h.base;
            if (h.desc && "value" in h.desc && h.desc.writable) h.target["À"] = h.base;
        } catch (_) { /* BRIO fallback: restoreEmote — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.emoteEffect = null;
    }, emoteSlot = v => { /* BRIO block: emoteSlot — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const m = v?.["ÁÄ"]?.__brioEmoteSlot;
        if (Number.isInteger(m) && m >= 0 && m < 4) return m;
        const id = String(v?.src || v?.["ÁÄ"]?.src || "").toLowerCase().match(/emote\d+/)?.[0], native = (read("locker2", {}).emotes || []).map(/* BRIO expr: emoteSlot / (read("locker2", {}).emotes || []).map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ x => String(x).toLowerCase());
        return id ? native.indexOf(id) : -1;
    }, mapEmote = v => { /* BRIO block: mapEmote — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const i = emoteSlot(v), to = i >= 0 ? S.emoteResolved[i] : null;
        return to || v;
    }, installEmote = r => { /* BRIO block: installEmote — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
            get() { /* BRIO block: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                return h.current;
            },
            set(v) { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                h.base = v;
                h.current = mapEmote(v);
            }
        });
        S.emoteEffect = h;
    }, restoreSrc = () => { /* BRIO block: restoreSrc — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        if (!S.srcDesc) return;
        try { /* BRIO guarded: restoreSrc — Keep the existing exception boundary for restoreSrc. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            Object.defineProperty(HTMLImageElement.prototype, "src", S.srcDesc);
        } catch (_) { /* BRIO fallback: restoreSrc — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.srcDesc = null;
        clearTimeout(S.srcTimer);
    }, installSrc = R => { /* BRIO block: installSrc — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        restoreSrc();
        if (!R.emotes.some(/* BRIO expr: installSrc / R.emotes.some callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => x.mode === "item")) return;
        const d = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
        if (!d?.set) return;
        const set = d.set;
        Object.defineProperty(HTMLImageElement.prototype, "src", {
            configurable: d.configurable,
            enumerable: d.enumerable,
            get: d.get,
            set(v) { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const m = String(v).toLowerCase().split("?")[0].match(/(?:^|\/)buildart\/emote([0-3])\.png$/);
                if (m) { /* BRIO branch: set — Accept m. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    const i = +m[1], x = R.emotes[i];
                    try { /* BRIO guarded: set — Keep the existing exception boundary for set. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                        this.__brioEmoteSlot = i;
                    } catch (_) { /* BRIO fallback: set — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
                    if (x?.mode === "item") return set.call(this, asset("emote", x));
                }
                set.call(this, v);
            }
        });
        S.srcDesc = d;
        S.srcTimer = setTimeout(restoreSrc, 72e4);
    };
    const restoreResourceMaps = () => { /* BRIO block: restoreResourceMaps — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        for (const map of [ S.roofSaved, S.buildSaved, S.lootSaved ]) { /* BRIO loop: restoreResourceMaps — Iterate [ S.roofSaved, S.buildSaved, S.lootSaved ]. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            for (const {w: w, old: old} of map.values()) try { /* BRIO guarded: restoreResourceMaps — Keep the existing exception boundary for restoreResourceMaps. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                w["ÁÄ"] = old;
            } catch (_) { /* BRIO fallback: restoreResourceMaps — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            map.clear();
        }
    };
    const cosmeticLock = (target, key, chooseValue) => { /* BRIO block: cosmeticLock — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!target) return;
        const d = Object.getOwnPropertyDescriptor(target, key);
        if (d && !d.configurable) { /* BRIO branch: cosmeticLock — Accept d && !d.configurable. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            log("COSMETIC ADAPTER UNAVAILABLE", {
                key: key,
                reason: "nonconfigurable native property"
            });
            return;
        }
        let native = target[key];
        const getNative = /* BRIO expr: getNative — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => d?.get ? Reflect.apply(d.get, target, []) : native;
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() { /* BRIO block: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                return chooseValue(getNative());
            },
            set(v) { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (d?.set) Reflect.apply(d.set, target, [ v ]); else native = v;
            }
        });
        (S.cosmeticAdapters || (S.cosmeticAdapters = [])).push(() => { /* BRIO block: cosmeticLock — (S.cosmeticAdapters || (S.cosmeticAdapters = [])).push callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (d) { /* BRIO branch: cosmeticLock — Accept d. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                Object.defineProperty(target, key, d);
                if ("value" in d && d.writable) target[key] = native;
            } else { /* BRIO branch: cosmeticLock — Alternative for d. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                delete target[key];
                target[key] = native;
            }
        });
    }, restoreCosmetics = () => { /* BRIO block: restoreCosmetics — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        while (S.cosmeticAdapters?.length) try { /* BRIO guarded: restoreCosmetics — Keep the existing exception boundary for restoreCosmetics. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            S.cosmeticAdapters.pop()();
        } catch (e) { /* BRIO fallback: restoreCosmetics — Handle failure in restoreCosmetics through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push("cosmetic restore: " + String(e));
        }
    }, sceneObserve = node => { /* BRIO block: sceneObserve — Observe only reached native containers, reserving the96-parent budget; delegate original add/remove behavior. */
        if (!node || typeof node !== "object" || !Array.isArray(node["âè"]) || typeof node.add !== "function" || typeof node.remove !== "function") return;
        // V50 reserve the96-container budget for actual containers. Native image/text subclasses inherit add/remove
        // too; observing every leaf exhausted the budget before late top-scene popup/trail parents arrived.
        // Leaf assets still pass through rendered-array discovery and the bounded scene walk; BRIO clones never qualify.
        if (node.__brioHudClone || String(node.type||"").startsWith("brio") || node["À"] || node.canvas || "text" in node) return;
        if (!S.sceneRoots) S.sceneRoots = new Set;
        if (S.sceneRoots.size < 96) S.sceneRoots.add(node);
        if (!S.meteorObservers) S.meteorObservers = new Map;
        if (S.meteorObservers.has(node) || S.meteorObservers.size >= 96 ) return;
        const restores = [];
        for (const key of [ "add", "âá", "Åæê" ]) { /* BRIO loop: sceneObserve — Iterate [ "add", "âá", "Åæê" ]. Observe only reached native containers, reserving the96-parent budget; delegate original add/remove behavior. */
            const orig = node[key], d = Object.getOwnPropertyDescriptor(node, key);
            if (typeof orig !== "function" || d && (!d.configurable && !d.writable) || d && !("value" in d)) continue;
            const wrap = function(...args) { /* BRIO block: wrap — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const result = Reflect.apply(orig, this, args);
                for (const x of args) try { /* BRIO guarded: wrap — Keep the existing exception boundary for wrap. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    meteorCandidate(x, this["âè"] || []);
                    captureRoof(x);
                    // V52: native add often receives a completed particle/build subtree, not its leaves.
                    // Inspect at most80 reached children before its first draw; do not wait for a whole-scene scan.
                    for(const child of hudWalk(x,80))hudCandidate(child);v53DeferredNative(x);
                    handleAdded(x);
                } catch (e) { /* BRIO fallback: wrap — Handle failure in wrap through its existing fallback/report path; optional native fields may be unavailable. */
                    if (S.errors.length < 100) S.errors.push("scene add: " + String(e));
                }
                return result;
            };
            try { /* BRIO guarded: sceneObserve — Keep the existing exception boundary for sceneObserve. Observe only reached native containers, reserving the96-parent budget; delegate original add/remove behavior. */
                Object.defineProperty(node, key, {
                    configurable: d?.configurable ?? true,
                    enumerable: d?.enumerable ?? true,
                    writable: true,
                    value: wrap
                });
                restores.push(() => { /* BRIO block: sceneObserve — restores.push callback. Observe only reached native containers, reserving the96-parent budget; delegate original add/remove behavior. */
                    if (node[key] === wrap) { /* BRIO branch: sceneObserve — Accept node[key] === wrap. Observe only reached native containers, reserving the96-parent budget; delegate original add/remove behavior. */
                        if (d) Object.defineProperty(node, key, d); else delete node[key];
                    }
                });
            } catch (_) { /* BRIO fallback: sceneObserve — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        }
        if (restores.length) S.meteorObservers.set(node, restores);
    }, sceneRoots = () => { /* BRIO block: sceneRoots — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const roots = new Set([...(S.sceneRoots || []), ...(S.renderExtraRoots || [])]);
        for (const x of [ S.renderer?.Eâ, S.renderer?.["â"], ...S.arrayHooks.keys() ]) { /* BRIO loop: sceneRoots — Iterate [ S.renderer?.Eâ, S.renderer?.["â"], ...S.arrayHooks.keys() ]. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            let p = x;
            for (let n = 0; p && n < 10; n++, p = p.parent) roots.add(p);
        }
        if (!S.windowSceneChecked) { /* BRIO branch: sceneRoots — Accept !S.windowSceneChecked. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            S.windowSceneChecked = true;
            for (const key of Object.getOwnPropertyNames(W).slice(0, 1200)) { /* BRIO loop: sceneRoots — Iterate Object.getOwnPropertyNames(W).slice(0, 1200). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                try { /* BRIO guarded: sceneRoots — Keep the existing exception boundary for sceneRoots. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    const d = Object.getOwnPropertyDescriptor(W, key), v = d?.value;
                    if (v && typeof v === "object" && !(v instanceof Node) && Array.isArray(v["âè"]) && typeof v.add === "function") roots.add(v);
                } catch (_) { /* BRIO fallback: sceneRoots — Handle failure in sceneRoots through its existing fallback/report path; optional native fields may be unavailable. */
                    S.sceneSkipped = (S.sceneSkipped || 0) + 1;
                }
            }
        }
        return roots;
    };
    const renderArrays = new Map;
    let renderDiscovery = null, renderSeen = new WeakSet;
    const nativeDrawable = /* BRIO expr: nativeDrawable — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ n => !!(n && typeof n === "object" && !n.__brioHudClone && !String(n.type || "").startsWith("brio") && typeof n["éa"] === "function" && Array.isArray(n["âè"]) && n["ë"]);
    const observeRendered = n => { /* BRIO block: observeRendered — Capture reached rendered arrays within the existing128+32 budget; exclude BRIO clones. */
        if (!nativeDrawable(n) || renderSeen.has(n)) return;
        renderSeen.add(n);
        try { /* BRIO guarded: observeRendered — Keep the existing exception boundary for observeRendered. Capture reached rendered arrays within the existing128+32 budget; exclude BRIO clones. */
            meteorCandidate(n);
            hudCandidate(n);
            if (n.parent && !S.sceneRoots?.has(n.parent)) { /* BRIO branch: observeRendered — Accept n.parent && !S.sceneRoots?.has(n.parent). Capture reached rendered arrays within the existing128+32 budget; exclude BRIO clones. */  const extra = S.renderExtraRoots || (S.renderExtraRoots = new Set); if (extra.size < 64) extra.add(n.parent); }
            sceneObserve(n.parent);
            sceneObserve(n);
            if (!n["À"] && !n.canvas && !("text" in n) && typeof n.add === "function") { /* BRIO branch: observeRendered — Accept !n["À"] && !n.canvas && !("text" in n) && typeof n.add === "function". Capture reached rendered arrays within the existing128+32 budget; exclude BRIO clones. */
                observeRenderArray(n["âè"], true);
                if (Array.isArray(n["ÉE"])) observeRenderArray(n["ÉE"], true);
            }
        } catch (_) { /* BRIO fallback: observeRendered — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
    };
    const observeRenderArray = (a, nativeOwner = false, hudOwner = false) => { /* BRIO block: observeRenderArray — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        if (renderArrays.has(a) || renderArrays.size >= (hudOwner ? 160 : 128) || !nativeOwner && (!a.length || !a.slice(0, 3).some(nativeDrawable))) return;
        const restores = [];
        for (const key of [ "forEach", "push", "unshift" ]) { /* BRIO loop: observeRenderArray — Iterate [ "forEach", "push", "unshift" ]. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            const d = Object.getOwnPropertyDescriptor(a, key), orig = key === "forEach" && a[key] === renderDiscovery?.wrap ? renderDiscovery.desc.value : a[key];
            if (typeof orig !== "function" || d && (!d.configurable || !("value" in d))) continue;
            const wrap = key === "forEach" ? function(callback, receiver) { /* BRIO block: observeRenderArray — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                return Reflect.apply(orig, this, [ function(n, i, array) { /* BRIO block: observeRenderArray — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                    observeRendered(n);
                    return Reflect.apply(callback, receiver, [ n, i, array ]);
                } ]);
            } : function(...nodes) { /* BRIO block: observeRenderArray — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                const result = Reflect.apply(orig, this, nodes);
                for (const n of nodes) { /* BRIO loop: observeRenderArray — Iterate nodes. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
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
            restores.push(() => { /* BRIO block: observeRenderArray — restores.push callback. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                if (a[key] === wrap) { /* BRIO branch: observeRenderArray — Accept a[key] === wrap. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                    if (d) Object.defineProperty(a, key, d); else delete a[key];
                }
            });
        }
        renderArrays.set(a, restores);
        for (const n of a) observeRendered(n);
    };
    const stopRenderDiscovery = () => { /* BRIO block: stopRenderDiscovery — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        if (!renderDiscovery) return;
        if (Array.prototype.forEach === renderDiscovery.wrap) Object.defineProperty(Array.prototype, "forEach", renderDiscovery.desc);
        clearTimeout(renderDiscovery.timer);
        renderDiscovery = null;
        log("NATIVE RENDER DISCOVERY RESTORED", {
            arrays: renderArrays.size,
            cap: 160, generalCap: 128, reservedHudArrays: 32
        });
    };
    const restoreRenderArrays = () => { /* BRIO block: restoreRenderArrays — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        for (const restores of renderArrays.values()) for (const restore of restores.reverse()) restore();
        renderArrays.clear();
        renderSeen = new WeakSet;
        S.renderExtraRoots?.clear();
    };
    const startRenderDiscovery = reason => { /* BRIO block: startRenderDiscovery — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        stopRenderDiscovery();
        const desc = Object.getOwnPropertyDescriptor(Array.prototype, "forEach"), orig = desc.value;
        const wrap = function(callback, receiver) { /* BRIO block: wrap — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: wrap — Keep the existing exception boundary for wrap. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                observeRenderArray(this);
            } catch (_) { /* BRIO fallback: wrap — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            return Reflect.apply(orig, this, [ function(n, i, a) {
                // Discovery must inspect reached drawables even after the scoped-array cap.
                try { /* BRIO guarded: wrap — Keep the existing exception boundary for wrap. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  observeRendered(n); } catch (_) { /* BRIO fallback: wrap — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
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
    applyLocal = async () => { /* BRIO block: applyLocal — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
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
            }, /* BRIO expr: applyLocal / Array.from callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ (_, i) => choose(Array.isArray(s.emotes) ? s.emotes[i] : null, "emote"))
        });
        log("COSMETIC SELECTIONS", R);
        const safe = /* BRIO expr: safe — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (k, x) => loadRes(k, x).catch(err => { /* BRIO block: safe — loadRes(k, x).catch callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            log("COSMETIC ASSET FAILED", {
                category: k,
                mode: x?.mode,
                id: x?.id,
                error: String(err)
            });
            return null;
        });
        try { /* BRIO guarded: applyLocal — Keep the existing exception boundary for applyLocal. Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
            const [bo, he, pi, gl, igl, ...em] = await Promise.all([ safe("body", R.body), safe("head", R.head), safe("pickaxe", R.pickaxe), safe("glider", R.glider), e.allGlidersInvisible ? safe("glider", {
                mode: "invisible",
                data: BLANK.glider
            }) : Promise.resolve(null), ...R.emotes.map(/* BRIO expr: applyLocal / R.emotes.map callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ x => safe("emote", x)) ]);
            if (S.destroyed || epoch !== S.runEpoch || r !== S.renderer) return;
            installSrc(R);
            if (bo) cosmeticLock(r["Ëå"], "À", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => bo);
            if (he) { /* BRIO branch: applyLocal — Accept he. Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
                cosmeticLock(r.head, "À", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => he);
                cosmeticLock(r, "Äâè", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => he);
            }
            if (pi) { /* BRIO branch: applyLocal — Accept pi. Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
                cosmeticLock(r, "ÉãÂ", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => pi);
                cosmeticLock(r["ä"], "À", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ v => held(r) === "pickaxe" ? pi : v);
            }
            const hide = R.body.mode === "invisible";
            for (const [p, k] of [ [ "áË", "l" ], [ "ÄÂ", "r" ], [ "ÄãÀ", "f" ], [ "èÅ", "s" ] ]) if (r[p] && S.native.limbs[k] !== undefined) if (hide) cosmeticLock(r[p], "opacity", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => 0);
            if (R.trail.mode === "item") cosmeticLock(r, "Ëé", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => R.trail.id + "-");
            if (R.trail.mode === "invisible" || e.allTrailsInvisible) cosmeticLock(r, "åëÅ", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ native => R.trail.mode === "invisible" || exFast().allTrailsInvisible ? NaN : native);
            if (R.wrap.mode === "item") cosmeticLock(r, "ÆÃÅ", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ () => R.wrap.id);
            const gg = igl || gl;
            if (gg) { /* BRIO branch: applyLocal — Accept gg. Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
                cosmeticLock(r, "äÀÊ", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ native => exFast().allGlidersInvisible && igl ? igl : gl || native);
                cosmeticLock(r["ÂÅ"], "À", /* BRIO expr: applyLocal / cosmeticLock callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ native => exFast().allGlidersInvisible && igl ? igl : gl || native);
            } else { /* BRIO branch: applyLocal — Alternative for gg. Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */
                r["aéÄ"] = S.native.gliderId;
                r["äÀÊ"] = S.native.glider;
                if (r["ÂÅ"] && S.native.gliderDisplay) r["ÂÅ"]["À"] = S.native.gliderDisplay;
            }
            S.emoteResolved = em.map(/* BRIO expr: applyLocal / em.map callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ (x, i) => R.emotes[i].mode === "item" ? x : null);
            installEmote(r);
            if (S.emoteEffect) S.emoteEffect.current = mapEmote(S.emoteEffect.base);
            log("LOCAL READY", {
                capturedName: r["Ée"],
                expected: S.localName,
                adapters: S.cosmeticAdapters?.length || 0,
                categories: Object.fromEntries([ ...[ "body", "head", "pickaxe", "trail", "wrap", "glider" ].map(/* BRIO expr: applyLocal / [ "body", "head", "pickaxe", "trail", "wrap", "glider" ].map callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ k => [ k, {
                    mode: R[k].mode,
                    id: R[k].id || null
                } ]), [ "emotes", R.emotes.map(/* BRIO expr: applyLocal / R.emotes.map callback — Apply saved local cosmetics through native-compatible adapters; native ownership/network state stays native. */ x => ({
                    mode: x.mode,
                    id: x.id || null
                })) ] ])
            });
        } catch (e2) { /* BRIO fallback: applyLocal — Handle failure in applyLocal through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(e2));
            log("LOCAL ERROR", String(e2));
        }
    };
    const isPlayer = /* BRIO expr: isPlayer — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => !!(o && typeof o === "object" && o["Ëå"] && o.head && o["Eâ"] && typeof o["Ée"] === "string"), isLocal = /* BRIO expr: isLocal — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ o => o === S.renderer, worldPos = r => { /* BRIO block: worldPos — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const p = r?.["â"]?.["ë"], x = p?.["É"], y = p?.["Ä"];
        return Number.isFinite(x) && Number.isFinite(y) ? {
            x: x,
            y: y
        } : null;
    }, localNameMatch = o => { /* BRIO block: localNameMatch — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!isPlayer(o)) return false;
        const n = String(o["Ée"] || ""), want = String(S.localName || "");
        if (n === want) return true;
        if (!n.startsWith("uL#") || !want.startsWith("uL#")) return false;
        return n === want.slice(0, n.length) || want === n.slice(0, want.length);
    }, /* BRIO: resourceSlots
     * Enumerate reached local drawable resource wrappers. Do not fetch/evaluate native engine strings as code.
     */
    resourceSlots = o => { /* BRIO block: resourceSlots — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const out = [], seen = new Set, walk = (v, d) => { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!v || typeof v !== "object" || d > 4 || seen.has(v) || v === W || v === D || v instanceof Node) return;
            seen.add(v);
            if (v["ÁÄ"] && typeof v["ÁÄ"] === "object") { /* BRIO branch: walk — Accept v["ÁÄ"] && typeof v["ÁÄ"] === "object". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const p = norm(v.src || v["ÁÄ"]?.currentSrc || v["ÁÄ"]?.src);
                if (p && p !== "/") out.push({
                    w: v,
                    path: p
                });
            }
            for (const k of Object.keys(v).slice(0, 70)) { /* BRIO loop: walk — Iterate Object.keys(v).slice(0, 70). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if ([ "parent", "owner", "stage", "game", "ÁÄ" ].includes(k)) continue;
                let x;
                try { /* BRIO guarded: walk — Keep the existing exception boundary for walk. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    x = v[k];
                } catch (_) { /* BRIO fallback: walk — Handle failure in walk through its existing fallback/report path; optional native fields may be unavailable. */
                    continue;
                }
                if (!x || typeof x !== "object" || x instanceof Node) continue;
                if (Array.isArray(x)) { /* BRIO branch: walk — Accept Array.isArray(x). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    if (x.length > 24) continue;
                    for (const y of x) walk(y, d + 1);
                } else walk(x, d + 1);
            }
        };
        walk(o, 0);
        const u = [], ws = new Set;
        for (const x of out) if (!ws.has(x.w)) { /* BRIO branch: resourceSlots — Accept !ws.has(x.w). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            ws.add(x.w);
            u.push(x);
        }
        return u;
    }, isWorld = /* BRIO expr: isWorld — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => !!(o && typeof o === "object" && o.id != null && [ "object", "buildable", "spellfield", "gun", "ammo", "chest", "airdrop", "car", "baller", "bullet", "throwable" ].includes(String(o.type))), /* BRIO: collectPlayers
     * Collect players from reached active native arrays. Avoid stale/culled fallback players and bot guesses.
     */
    collectPlayers = () => { /* BRIO block: collectPlayers — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        const out = [], seen = new Set;
        for (const a of [ S.rendererArray, ...S.arrayHooks.keys() ]) if (Array.isArray(a)) for (const x of a) if (isPlayer(x) && !seen.has(x)) { /* BRIO branch: collectPlayers — Accept isPlayer(x) && !seen.has(x). Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            seen.add(x);
            out.push(x);
        }
        return out;
    }, /* BRIO: collectWorld
     * Collect reached active world objects only; private/disconnected engine registries are not assumed reachable.
     */
    collectWorld = () => { /* BRIO block: collectWorld — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        const out = [], seen = new Set;
        for (const a of [ S.rendererArray, ...S.arrayHooks.keys() ]) if (Array.isArray(a)) for (const x of a) if (isWorld(x) && !seen.has(x)) { /* BRIO branch: collectWorld — Accept isWorld(x) && !seen.has(x). Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            seen.add(x);
            out.push(x);
        }
        return out;
    };
    const transparentImage = old => { /* BRIO block: transparentImage — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!old) return Promise.resolve(null);
        if (S.transparent.has(old)) return S.transparent.get(old);
        const p = new Promise(resolve => { /* BRIO block: transparentImage — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const make = () => { /* BRIO block: make — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const width = old.naturalWidth || old.width, height = old.naturalHeight || old.height;
                if (!(width > 0 && height > 0)) { /* BRIO branch: make — Accept !(width > 0 && height > 0). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    resolve(null);
                    return;
                }
                const c = D.createElement("canvas");
                c.width = width;
                c.height = height;
                const im = new Image;
                im["ÀA"] = 2;
                im.onload = () => { /* BRIO block: im.onload — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    im["ÀA"] = 1;
                    im["ÁÅe"] = im.width / 2;
                    im["âÅÉ"] = im.height / 2;
                    resolve(im);
                };
                im.onerror = /* BRIO expr: im.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => resolve(null);
                im.src = c.toDataURL("image/png");
            };
            if (old instanceof HTMLImageElement && !old.naturalWidth && (!old.complete || old["ÀA"] === 2)) { /* BRIO branch: transparentImage — Accept old instanceof HTMLImageElement && !old.naturalWidth && (!old.complete || old["ÀA"] === 2). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                let timeout;
                const done = () => { /* BRIO block: done — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    clearTimeout(timeout);
                    old.removeEventListener("load", loaded);
                    old.removeEventListener("error", failed);
                };
                const loaded = () => { /* BRIO block: loaded — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    done();
                    make();
                }, failed = () => { /* BRIO block: failed — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
        p.then(im => { /* BRIO block: transparentImage — p.then callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!im) S.transparent.delete(old);
        });
        return p;
    }, blankWrapper = async (w, map, key) => { /* BRIO block: blankWrapper — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!w?.["ÁÄ"] || map.has(key)) return;
        const epoch = S.runEpoch, old = w["ÁÄ"], im = await transparentImage(old);
        if (S.destroyed || epoch !== S.runEpoch) return;
        // Respect a modifier/composite change while native-sized transparent images were loading.
        if (map === S.roofSaved && !exFast().transparentRoofs) return;
        if (im) { /* BRIO branch: blankWrapper — Accept im. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            map.set(key, {
                w: w,
                old: old
            });
            w["ÁÄ"] = im;
        }
    }, captureRoof = o => { /* BRIO block: captureRoof — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!exFast().transparentRoofs) return;
        const w = o?.À, p = nativeResourcePath(w);
        if (ROOFSET.has(p) && !S.roofSaved.has(p)) blankWrapper(w, S.roofSaved, p).then(maybeStop).catch(/* BRIO expr: captureRoof / blankWrapper(w, S.roofSaved, p).then(maybeStop).catch callback — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ e => S.errors.push(String(e)));
    }, isBuild = o => { /* BRIO block: isBuild — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const txt = [ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"], ...resourceSlots(o).map(/* BRIO expr: isBuild / resourceSlots(o).map callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => x.path) ].join(" ").toLowerCase();
        return /wall|campfirebuild|boostpadbuild|shieldbuild|shieldbubble/.test(txt) || resourceSlots(o).some(/* BRIO expr: isBuild / resourceSlots(o).some callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => BUILDRE.test(x.path));
    }, /* BRIO: blankBuild (legacy; retained for historical audit, inactive in V50)
     * Shared transparent resources cannot implement independent tiers. New challenges use featureWorld draw gates.
     */ blankBuild = o => { /* BRIO block: blankBuild — Historical inactive resource mechanism only; V50 tiers use draw gates instead of shared images. */
        for (const x of resourceSlots(o)) if (x.path.startsWith("/buildart/") && (BUILDRE.test(x.path) || isBuild(o))) blankWrapper(x.w, S.buildSaved, x.path).catch(/* BRIO expr: blankBuild / blankWrapper(x.w, S.buildSaved, x.path).catch callback — Historical inactive resource mechanism only; V50 tiers use draw gates instead of shared images. */ e => S.errors.push(String(e)));
    }, /* BRIO: blankLoot (legacy; retained for historical audit, inactive in V50)
     * Keep the old mechanism recorded; active art/rarity/popup tiers never rewrite shared loot resources.
     */ blankLoot = o => { /* BRIO block: blankLoot — Historical inactive resource mechanism only; retain for audit and use draw gates for active tier semantics. */
        for (const x of resourceSlots(o)) if (x.path.startsWith("/buildart/")) blankWrapper(x.w, S.lootSaved, x.path).catch(/* BRIO expr: blankLoot / blankWrapper(x.w, S.lootSaved, x.path).catch callback — Historical inactive resource mechanism only; retain for audit and use draw gates for active tier semantics. */ e => S.errors.push(String(e)));
    };
    const rememberRemote = r => { /* BRIO block: rememberRemote — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        let e = S.remoteRefs.get(r.id);
        if (!e) { /* BRIO branch: rememberRemote — Accept !e. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            e = {
                r: r,
                id: r.id,
                name: r["Ée"],
                screen: null
            };
            S.remoteRefs.set(r.id, e);
        } else { /* BRIO branch: rememberRemote — Alternative for !e. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            e.r = r;
            e.name = r["Ée"];
        }
        return e;
    }, makeTrack = /* BRIO expr: makeTrack — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (r, e) => ({
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
        "Eââ"(ctx) { /* BRIO block: Eââ — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: Eââ — Keep the existing exception boundary for Eââ. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
            } catch (_) { /* BRIO fallback: Eââ — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        },
        "éa"(ctx) { /* BRIO block: éa — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            this.Eââ(ctx);
        },
        "ÊÈA"() { /* BRIO block: ÊÈA — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: ÊÈA — Keep the existing exception boundary for ÊÈA. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                this.parent?.remove?.(this);
            } catch (_) { /* BRIO fallback: ÊÈA — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            this.parent = null;
        }
    }), attachTrack = r => { /* BRIO block: attachTrack — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!r || isLocal(r) || S.trackNodes.has(r) || !r["Eâ"]?.add) return;
        const e = rememberRemote(r), n = makeTrack(r, e);
        try { /* BRIO guarded: attachTrack — Keep the existing exception boundary for attachTrack. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            r["Eâ"].add(n);
            S.trackNodes.set(r, n);
        } catch (x) { /* BRIO fallback: attachTrack — Handle failure in attachTrack through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(x));
        }
    }, attachLocalTrack = r => { /* BRIO block: attachLocalTrack — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!r || !r["Eâ"]?.add || S.localTrack?.node) return;
        const e = {
            screen: null
        }, n = makeTrack(r, e);
        try { /* BRIO guarded: attachLocalTrack — Keep the existing exception boundary for attachLocalTrack. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            r["Eâ"].add(n);
            S.localTrack = {
                state: e,
                node: n
            };
        } catch (x) { /* BRIO fallback: attachLocalTrack — Handle failure in attachLocalTrack through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(x));
        }
    }, screenState = e => { /* BRIO block: screenState — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const x = e?.screen;
        if (!x || performance.now() - x.at > 700 || !x.canvas) return null;
        const r = x.canvas.getBoundingClientRect?.();
        if (!r?.width || !r?.height) return null;
        return {
            x: r.left + x.x * (r.width / (x.canvas.width || r.width)),
            y: r.top + x.y * (r.height / (x.canvas.height || r.height)),
            rect: r
        };
    }, ensureArrow = (key, color) => { /* BRIO block: ensureArrow — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (S[key]) { /* BRIO block V52: ensureArrow — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ S[key].querySelector(".shape").style.background=color;return S[key];}
        const u = D.createElement("div");u.className="brioArrow";
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
    }) => { /* BRIO block: placeArrow — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
        if (label) { /* BRIO branch: placeArrow — Accept label. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  const name = D.createElement("span"); name.className = "playerName"; name.textContent = String(label); name.style = "display:block;max-width:108px;overflow:hidden;text-overflow:ellipsis;font-size:16px;line-height:18px"; d.appendChild(name); }
        d.style.transform = ang > 90 || ang < -90 ? "rotate(180deg)" : "none";
        d.style.fontSize = Math.max(8, Math.min(16, 120 / Math.max(1, distanceText.length))) + "px";
    }, projectWorld = p => { /* BRIO block: projectWorld — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    }, nearestTick = /* BRIO expr: nearestTick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => nearestV40();
    /* BRIO: nativeResourcePath — normalize each weakly owned native resource once per source value.
     * Resource/image replacements remain live; caching never changes images or keeps detached native nodes alive. */
    let nativeResourcePaths=new WeakMap;
    const nativeResourcePath=resource=>{ /* BRIO block V53: nativeResourcePath — Normalize weakly held native paths only when the source changes; never alter native resources. */
        if(!resource||typeof resource!=='object')return '/';const source=resource.src||resource['ÁÄ']?.src||'',old=nativeResourcePaths.get(resource);
        if(old&&old.source===source)return old.path;const path=norm(source);nativeResourcePaths.set(resource,{source,path});if(v53.perf)v53.perf.pathNormalizations++;return path;
    };
    const hudKinds = /* BRIO expr: hudKinds — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ path => /\/inv[0-6]\.png$/.test(path) ? "slots" : /\/(?:wood|brick|metal|scrap|gear)\.png$/.test(path) ? "materials" : /\/(?:ammo|stack)[0-4]\.png$/.test(path) ? "ammo" : null;
    const /* BRIO: hudWalk
     * Traverse a small native widget subtree. Exclude BRIO clones and enforce the per-widget node cap.
     */
    hudWalk = (root, max = 100) => { /* BRIO block: hudWalk — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const out = [], seen = new Set, stack = [ root ];
        while (stack.length && out.length < max) { /* BRIO loop: hudWalk — Iterate stack.length && out.length < max. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    hudPath = /* BRIO expr: hudPath — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => nativeResourcePath(n?.["À"]);
    const hudCandidate = n => { /* BRIO V53: hudCandidate — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('HUD discovery');try{
        // V50 visual discovery also inspects native non-inventory widgets; clone/BRIO exclusion lives in the candidate.
        nativeVisualCandidate(n);
        if (n?.__brioHudClone || S.hudRejected?.has(n) || !hudKinds(hudPath(n))) return;
        if (!S.hudPending) S.hudPending = new WeakSet;
        if (S.hudPending.has(n) || S.hudSourceNodes?.has(n)) return;
        S.hudPending.add(n);
        const epoch = S.runEpoch;
        setTimeout(() => { /* BRIO block: hudCandidate — setTimeout callback. Validate native HUD resources/owners before storing templates; new visual widgets reuse existing discovery. */
            S.hudPending.delete(n);
            if (S.destroyed || epoch !== S.runEpoch) return;
            try { /* BRIO guarded: hudCandidate — Keep the existing exception boundary for hudCandidate. Validate native HUD resources/owners before storing templates; new visual widgets reuse existing discovery. */
                hudInspect(n);
            } catch (e) { /* BRIO fallback: hudCandidate — Handle failure in hudCandidate through its existing fallback/report path; optional native fields may be unavailable. */
                if (!S.hudInspectError) { /* BRIO branch: hudCandidate — Accept !S.hudInspectError. Validate native HUD resources/owners before storing templates; new visual widgets reuse existing discovery. */
                    S.hudInspectError = true;
                    log("NATIVE HUD INSPECTION ERROR", String(e));
                }
            }
        }, 250);

        }finally{ /* BRIO block V53: hudCandidate — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('HUD discovery',cost);}
    };
    const /* BRIO: slotCaption
     * Validate the native numbered caption below a slot. It is capture evidence, not slot-sizing geometry.
     */
    slotCaption = /* BRIO expr: slotCaption — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ root => hudWalk(root, 32).find(/* BRIO expr: slotCaption / hudWalk(root, 32).find callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => (n.type === "text" || typeof n.text === "string") && /^[1-6]$/.test(String(n.text)) && Number(n["ë"]?.["Ä"]) > 0);
    const /* BRIO: slotUnit
     * Recognize both filled image roots and empty rectangle roots. Selected art may move inside persistent holders.
     */
    slotUnit = holder => { /* BRIO block: slotUnit — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const candidates = [holder, ...(holder?.["âè"] || []), ...(holder?.["ÉE"] || [])];
        let group = null;
        for (const root of candidates) { /* BRIO loop: slotUnit — Iterate candidates. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            if (!root || String(root.type || "").startsWith("brio")) continue;
            const cap = slotCaption(root), icons = hudWalk(root, 40).filter(/* BRIO expr: slotUnit / hudWalk(root, 40).filter callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => hudKinds(hudPath(n)) === "slots");
            const square = Number(root.width) > 0 && Number(root.height) > 0 && Math.abs(root.width - root.height) < 2;
            if (cap && square && Number(cap["ë"]?.["Ä"]) >= root.height * .5) return root;
            if (cap && !root.width && icons.length === 1) group ||= root;
        }
        return group;
    };
    const /* BRIO: captureSlotRow
     * Capture five weapon slots from ordered native holders, excluding the leftmost pickaxe in a six-holder row. Reserve scoped HUD arrays for later replacements.
     */
    captureSlotRow = icon => { /* BRIO block: captureSlotRow — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        let unit = icon;
        for (let depth = 0; unit && depth < 4 && !slotUnit(unit); depth++) unit = unit.parent;
        if (!unit) return false;
        unit = slotUnit(unit);
        let row = unit.parent, holders = [];
        for (let depth = 0; row && depth < 3; depth++, row = row.parent) { /* BRIO loop: captureSlotRow — Iterate row && depth < 3. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            holders = [...(row["âè"] || []), ...(row["ÉE"] || [])].map(/* BRIO expr: captureSlotRow / [...(row["âè"] || []), ...(row["ÉE"] || [])].map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ holder => ({holder, root: slotUnit(holder)})).filter(/* BRIO expr: captureSlotRow / [...(row["âè"] || []), ...(row["ÉE"] || [])].map(holder => ({holder, root: slotUnit(holder)})).filter callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ x => x.root);
            if ((holders.length === 5 || holders.length === 6) && holders.some(/* BRIO expr: captureSlotRow / holders.some callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ x => x.root === unit)) break;
            holders = [];
        }
        if (!holders.length) return false;
        if (icon["À"]) S.hudSlotSprite = icon;
        (S.hudSourceNodes || (S.hudSourceNodes = new WeakSet)).add(icon);
        for (const k of ["âè", "ÉE"]) if (Array.isArray(row[k])) observeRenderArray(row[k], true, true);
        for (const {holder} of holders) for (const k of ["âè", "ÉE"]) if (Array.isArray(holder[k])) observeRenderArray(holder[k], true, true);
        holders.sort(/* BRIO expr: captureSlotRow / holders.sort callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ (a,b) => Number(a.holder["ë"]?.["É"] || 0) - Number(b.holder["ë"]?.["É"] || 0));
        if (new Set(holders.map(/* BRIO expr: captureSlotRow / holders.map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ x => Number(x.holder["ë"]?.["É"] || 0))).size !== holders.length) return false;
        if (!S.hudTemplates) S.hudTemplates = {slots: [], materials: [], ammo: []};
        for (let rank = 0; rank < holders.length; rank++) { /* BRIO loop: captureSlotRow — Iterate rank < holders.length. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            const {holder, root} = holders[rank], slotIndex = holders.length === 6 ? rank : rank + 1;
            if (slotIndex === 0) continue; // Native pickaxe holder is leftmost in the six-slot row.
            const nodes = hudWalk(root, 80), background = nodes.find(/* BRIO expr: captureSlotRow / nodes.find callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => hudKinds(hudPath(n)) === "slots") || root;
            if (background["À"]) S.hudSlotSprite = background;
            S.hudSourceNodes.add(background);
            const previous = S.hudTemplates.slots.findIndex(/* BRIO expr: captureSlotRow / S.hudTemplates.slots.findIndex callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ r => r.slotIndex === slotIndex);
            if (previous >= 0 && S.hudTemplates.slots[previous].root === root) continue;
            const w = Math.abs(Number(background.width)), h = Math.abs(Number(background.height));
            if (!(w > 0 && h > 0) || !root.add) continue;
            const record = {root, icon: background, nodes, kind: "slots", path: hudPath(background), slotIndex,
                x: Number(holder["ë"]?.["É"]) || 0, y: Number(holder["ë"]?.["Ä"]) || 0, width: w, height: h,
                slotBounds: {left: -w/2, top: -h/2, width: w, height: h}, holder};
            const artwork = nodes.find(/* BRIO expr: captureSlotRow / nodes.find callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => n !== background && isSlotArtwork(hudPath(n)) && n["À"]);
            if (artwork) (S.hudArtStyles || (S.hudArtStyles = new Map)).set(hudPath(artwork), {ratio: artwork.width/w, angle: Number(artwork.A)||0, size: Number(artwork.size)||1});
            if (previous >= 0) S.hudTemplates.slots[previous] = record; else S.hudTemplates.slots.push(record);
            S.hudVersion = (S.hudVersion || 0) + 1;
            if ((S.hudSlotLogs || 0) < 24) { /* BRIO branch: captureSlotRow — Accept (S.hudSlotLogs || 0) < 24. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ S.hudSlotLogs = (S.hudSlotLogs || 0) + 1; log("NATIVE WEAPON SLOT", {slotIndex, rootType: root.type, path: record.path, bounds: record.slotBounds, holderPosition: holder["ë"], method: "ordered native holders; includes empty rectangles"});}
        }
        S.hudStatus = {captured: true, counts: Object.fromEntries(Object.entries(S.hudTemplates).map(/* BRIO expr: captureSlotRow / Object.entries(S.hudTemplates).map callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ ([k,v]) => [k,v.length])), replica: "native slot holders and material/stack templates; visual comparison required"};
        ownMaterialWarnings();
        return true;
    };
    const /* BRIO: hudInspect
     * Reject pickup particles/player decorations before acquiring material/ammo HUD templates. Candidate roots may contain their own counts.
     */
    hudInspect = n => { /* BRIO block: hudInspect — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
        const path = hudPath(n), kind = hudKinds(path);
        if (path && n?.["À"]?.["ÁÄ"]) (S.hudNativeImages || (S.hudNativeImages = new Map)).set(path, n["À"]["ÁÄ"]);
        if (!kind || S.hudSourceNodes?.has(n)) return;
        if (!S.hudSourceNodes) S.hudSourceNodes = new WeakSet;
        // Pickup particles share HUD icon resources. Resource names alone are insufficient.
        let ancestry = n;
        for (let depth = 0; ancestry && depth < 12; depth++, ancestry = ancestry.parent) { /* BRIO loop: hudInspect — Iterate ancestry && depth < 12. Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
            if (ancestry.type === "particle" || String(ancestry.type || "").startsWith("brio")) return;
            for (const r of collectPlayers()) if (ancestry === r["â"] || ancestry === r["Eâ"]) return;
        }
        if (kind === "slots") { /* BRIO branch: hudInspect — Accept kind === "slots". Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */  captureSlotRow(n); return; }
        if (kind !== "slots") { /* BRIO branch: hudInspect — Accept kind !== "slots". Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
            let p = n, validated = false;
            for (let depth = 0; p && depth < 3; depth++, p = p.parent) { /* BRIO loop: hudInspect — Iterate p && depth < 3. Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
                const nodes = hudWalk(p, 80), icons = nodes.filter(/* BRIO expr: hudInspect / nodes.filter callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => hudKinds(hudPath(x)) === kind);
                if (icons.length !== 1) break;
                if (kind === "ammo" && nodes.some(/* BRIO expr: hudInspect / nodes.some callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => hudKinds(hudPath(x)) === "slots")) return;
                if (nodes.some(/* BRIO expr: hudInspect / nodes.some callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => (x.type === "text" || typeof x.text === "string") && /^\d+$/.test(String(x.text)))) { /* BRIO branch: hudInspect — Accept nodes.some(x => (x.type === "text" || typeof x.text === "string") && /^\d+$/.test(String(x.text))). Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */  validated = true; break; }
            }
            if (!validated) return; // Never blacklist a still-being-built widget.
        }
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) for (const k of ["âè", "ÉE"]) if (Array.isArray(p[k])) observeRenderArray(p[k], true, true);
        S.hudInspectionCount = (S.hudInspectionCount || 0) + 1;
        let unit = n;
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) { /* BRIO loop: hudInspect — Iterate p && depth < 3. Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
            const nodes = hudWalk(p, 80), icons = nodes.filter(/* BRIO expr: hudInspect / nodes.filter callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => hudKinds(hudPath(x)) === kind);
            if (icons.length !== 1) break;
            unit = p;
            if (nodes.some(/* BRIO expr: hudInspect / nodes.some callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => x.type === "text" || typeof x.text === "string")) break;
        }
        const nodes = hudWalk(unit), sourceCtor = unit.constructor;
        if (nodes.some(/* BRIO expr: hudInspect / nodes.some callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => x.type === "particle" || /^\+\d+$/.test(String(x.text || "")))) return;
        if (!S.hudTemplates) S.hudTemplates = {
            slots: [],
            materials: [],
            ammo: []
        };
        const ammoIndex = /* BRIO expr: ammoIndex — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ path => +(path.match(/(?:ammo|stack)([0-4])/) || [])[1];
        const previous = S.hudTemplates[kind].findIndex(/* BRIO expr: hudInspect / S.hudTemplates[kind].findIndex callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ r => kind === "slots" ? r.x === (Number(unit["ë"]?.["É"]) || 0) : kind === "ammo" ? ammoIndex(r.path) === ammoIndex(path) : r.path === path);
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
        if (kind === "slots") { /* BRIO branch: hudInspect — Accept kind === "slots". Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */
            const art = nodes.find(/* BRIO expr: hudInspect / nodes.find callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => isSlotArtwork(hudPath(x)) && x["À"] && x !== n);
            if (art && n.width) { /* BRIO branch: hudInspect — Accept art && n.width. Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */  const styles = S.hudArtStyles || (S.hudArtStyles = new Map); styles.set(hudPath(art), {ratio: art.width / n.width, angle: Number(art.A) || 0, size: Number(art.size) || 1}); }
        }
        S.hudSourceNodes.add(n);
        if (previous >= 0) S.hudTemplates[kind][previous] = record; else S.hudTemplates[kind].push(record);
        S.hudVersion = (S.hudVersion || 0) + 1;
        S.hudStatus = {
            captured: true,
            counts: Object.fromEntries(Object.entries(S.hudTemplates).map(/* BRIO expr: hudInspect / Object.entries(S.hudTemplates).map callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ ([k, v]) => [ k, v.length ])),
            replica: "V47 inventory appearance proven by user; captured native rows with documented fallback"
        };
        if ((S.hudWidgetLogs || 0) < 32) { /* BRIO branch: hudInspect — Accept (S.hudWidgetLogs || 0) < 32. Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */  S.hudWidgetLogs = (S.hudWidgetLogs || 0) + 1; log("NATIVE HUD WIDGET", {
            kind: kind,
            path: path,
            rootType: unit.type,
            rootKeys: Object.keys(unit).slice(0, 70),
            nativeDraw: String(n["Eââ"] || "").slice(0, 1400),
            constructor: typeof sourceCtor === "function" ? String(sourceCtor).slice(0, 1800) : null,
            nodes: nodes.map(/* BRIO expr: hudInspect / nodes.map callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ x => ({
                type: x.type,
                nativeDraw: String(x["Eââ"] || "").slice(0, 2000),
                path: hudPath(x),
                position: x["ë"],
                width: x.width,
                height: x.height,
                // V50 native rectangular widgets expose a text NODE here, whose parent points back to the widget.
                // Summarize that node instead of serializing the cycle: v49 lost9geometry reports as [object Object].
                text: typeof x.text === "string" ? x.text : typeof x.text?.text === "string" ? {nativeText:x.text.text,type:x.text.type} : null,
                fields: Object.fromEntries(Object.entries(x).filter(/* BRIO expr: hudInspect / Object.entries(x).filter callback — Inspect bounded native widget geometry and serialize text as plain data to avoid circular log loss. */ ([k, v]) => [ "string", "number", "boolean" ].includes(typeof v) && ![ "src" ].includes(k)).slice(0, 40))
            })),
            note: "Native widget candidates. Requires rendered HUD ancestry/geometry validation."
        }); }
        ownMaterialWarnings();
    };
    const /* BRIO: hudBounds
     * Compute general widget extents for material/ammo replicas. Weapon display sizing uses inventoryBounds instead.
     */
    hudBounds = record => { /* BRIO block: hudBounds — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        for (const n of record.nodes) { /* BRIO loop: hudBounds — Iterate record.nodes. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            if (!n["À"] && !(n.type === "text" || typeof n.text === "string") && !(n === record.root && Number(n.width) > 0 && Number(n.height) > 0)) continue;
            let x = 0, y = 0, p = n, depth = 0;
            while (p && p !== record.root && depth++ < 10) { /* BRIO loop: hudBounds — Iterate p && p !== record.root && depth++ < 10. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    const /* BRIO: liveSlotWarningBounds (V49; user reported selected-slot lift mismatch)
     * Native player frame moves current aÃ[selected].ë.Ä=-10; full HUD reconstruction can replace
     * child arrays WITHOUT clearing old parent pointers. Captured root.parent alone is insufficient.
     * Attach the warning to the stable native holder; derive bounds from its CURRENT background.
     * At most32 live HUD nodes, no world scan/global draw hook. Prefer invN artwork background;
     * rectangle is the native empty-slot fallback. Captions/item art never define border bounds.
     * Compose only the reached local transform chain. A stale/hidden/non-reachable background suppresses the box.
     * Keep native own-slot motion separate from V50 remote presentation sizes; the V45 X primitive is unchanged.
     */
    liveSlotWarningBounds = rec => { /* BRIO block: liveSlotWarningBounds — Follow current live native slot transforms/child membership; raised selected-slot alignment is user-proven. */
        const holder = rec.holder;
        if (!holder?.parent) return null;
        const nodes = hudWalk(holder,32).filter(/* BRIO expr: liveSlotWarningBounds / hudWalk(holder,32).filter callback — Follow current live native slot transforms/child membership; raised selected-slot alignment is user-proven. */ n => n !== holder && n.visible !== false && !(Number.isFinite(n.opacity) && n.opacity <= 0));
        const images = nodes.filter(/* BRIO expr: liveSlotWarningBounds / nodes.filter callback — Follow current live native slot transforms/child membership; raised selected-slot alignment is user-proven. */ n => hudKinds(hudPath(n)) === "slots" && Number(n.width)>0 && Number(n.height)>0);
        const background = images.includes(rec.icon) ? rec.icon : images[images.length-1] ||
            nodes.find(/* BRIO expr: liveSlotWarningBounds / nodes.find callback — Follow current live native slot transforms/child membership; raised selected-slot alignment is user-proven. */ n => n.type === "rectangle" && n.width === n.height && n.width > 0);
        if (!background) return null;
        let a=1,b=0,c=0,d=1,x=0,y=0,n=background,depth=0;
        while(n && n !== holder && depth++ < 8) { /* BRIO loop: liveSlotWarningBounds — Iterate n && n !== holder && depth++ < 8. Follow current live native slot transforms/child membership; raised selected-slot alignment is user-proven. */
            const parent=n.parent;
            if (!parent || ![...(parent["âè"]||[]),...(parent["ÉE"]||[])].includes(n)) return null;
            if (n.visible === false || Number.isFinite(n.opacity) && n.opacity <= 0) return null;
            const size=Number.isFinite(n.size)?n.size:1, angle=Number(n.A)||0, ca=Math.cos(angle)*size,sa=Math.sin(angle)*size;
            const na=ca*a-sa*b,nb=sa*a+ca*b,nc=ca*c-sa*d,nd=sa*c+ca*d;
            const nx=ca*x-sa*y+(Number(n["ë"]?.["É"])||0),ny=sa*x+ca*y+(Number(n["ë"]?.["Ä"])||0);
            a=na;b=nb;c=nc;d=nd;x=nx;y=ny;n=parent;
        }
        if(n !== holder)return null;
        const hw=Math.abs(Number(background.width))/2,hh=Math.abs(Number(background.height))/2;
        const dx=Math.abs(a)*hw+Math.abs(c)*hh,dy=Math.abs(b)*hw+Math.abs(d)*hh;
        return {left:x-dx,top:y-dy,width:2*dx,height:2*dy};
    };
    const /* BRIO: ownMaterialWarnings
     * V46 native cell/slot bindings preserved; V48 fourth-material and shared thresholds require live proof.\n     * All five slots include unequipped guns and grapplers. These own-HUD bounds never change remote replica sizing.\n     * On root replacement, remove the old BRIO overlay before rebinding; match reset owns complete removal.
     */
    ownMaterialWarnings = () => { /* BRIO block: ownMaterialWarnings — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        if (!S.renderer || !S.hudTemplates) return;
        // Current native child arrays, not leftover parent pointers, decide whether an overlay is still live.
        for (const [owner,node] of S.hudWarnNodes || []) if (!owner.parent || ![...(owner.parent["âè"]||[]),...(owner.parent["ÉE"]||[])].includes(owner) || ![...(owner["âè"]||[]),...(owner["ÉE"]||[])].includes(node)) { /* BRIO branch: ownMaterialWarnings — Accept !owner.parent || ![...(owner.parent["âè"]||[]),...(owner.parent["ÉE"]||[])].includes(owner) || ![...(owner["âè. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            try { /* BRIO guarded: ownMaterialWarnings — Keep the existing exception boundary for ownMaterialWarnings. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ owner.remove?.(node);} catch(_) { /* BRIO fallback: ownMaterialWarnings — Intentionally empty: preserve the surrounding fallback/delegation contract. */ } S.hudWarnNodes.delete(owner);
        }
        for (const rec of [...S.hudTemplates.materials, ...S.hudTemplates.slots]) { /* BRIO loop: ownMaterialWarnings — Iterate [...S.hudTemplates.materials, ...S.hudTemplates.slots]. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            const ammo = rec.kind === "slots", i = ammo ? rec.slotIndex : materialIndex(rec.path);
            const owner = ammo ? rec.holder : rec.root;
            if (i < 0 || !owner?.add) continue;
            const existing = S.hudWarnNodes?.get(owner);
            if (existing?.__brioHudRecord === rec) continue;
            if (existing) { /* BRIO branch: ownMaterialWarnings — Accept existing. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ owner.remove?.(existing); S.hudWarnNodes.delete(owner);}
            if (!S.hudWarnNodes) S.hudWarnNodes = new Map;
            const bounds = ammo ? rec.slotBounds : hudBounds(rec), draw = (ctx, s) => { /* BRIO block: draw — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const liveBounds = ammo ? liveSlotWarningBounds(rec) : bounds;
                if (!liveBounds) return;
                // V48 keeps the proven slot/cell bounds and changes only the threshold decision.
                const e = exFast(), low = ammo ? nativeSlotLow(e, S.renderer, i, rec) : belowWarning(e, "materials", i, matState(S.renderer)?.[i]);
                if (!low) return;
                ctx.save();
                try { /* BRIO guarded: draw — Keep the existing exception boundary for draw. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
                    ctx.shadowColor = "#ff2020";
                    ctx.shadowBlur = 12 / s;
                    ctx.strokeStyle = "#ff2020";
                    ctx.lineWidth = 3 / s;
                    ctx.strokeRect((liveBounds.left - 3) / s, (liveBounds.top - 3) / s, (liveBounds.width + 6) / s, (liveBounds.height + 6) / s);
                } finally { /* BRIO cleanup: draw — Always finish owned cleanup after success or failure. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    ctx.restore();
                }
            };
            const overlay = nativeNode(draw);
            overlay.__brioHudRecord = rec;
            owner.add(overlay);
            S.hudWarnNodes.set(owner, overlay);
            // V48 log analysis found 1255 repeated gun bindings in two V47 matches.
            // Rebinding remains correct when native roots rebuild; diagnostics retain novel geometry only.
            // Cap64 signatures per Play, separate from snapshot budgets; no renderer objects are stored.
            const signature = JSON.stringify([ammo ? "slot" : "material",i,bounds]);
            if (!S.hudWarningSignatures) S.hudWarningSignatures = new Set;
            if (!S.hudWarningSignatures.has(signature) && S.hudWarningSignatures.size < 64) { /* BRIO branch: ownMaterialWarnings — Accept !S.hudWarningSignatures.has(signature) && S.hudWarningSignatures.size < 64. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    cloneNativeWidget = rec => { /* BRIO block: cloneNativeWidget — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        let count = 0;
        const pairs = [], seen = new Map;
        const clone = n => { /* BRIO block: clone — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (++count > 80 || seen.has(n)) throw Error("native HUD widget cycle/limit");
            const C = n.constructor;
            if (typeof C !== "function") throw Error("native HUD constructor unavailable");
            let args;
            if (n["À"]) args = [ n["À"], 0, 0, n.width, n.height, n.opacity ]; else if (n.type === "text" || typeof n.text === "string") args = [ n.text, 0, 0, n.fillStyle || n["Äe"] || "#fff", n.fontFamily || "Arial", n.fontSize || 16, n.fontWeight || "bold", n.opacity, n.textAlign || "center" ]; else if (n.type === "arc") args = [ 0, 0, n["éã"], n["Äe"], n.endAngle || Math.PI * 2, n.startAngle || 0, n.lineWidth ]; else if (n.width !== undefined && n.height !== undefined) args = [ 0, 0, n.width, n.height, n["Äe"] || n.fillStyle, n.opacity ]; else args = [];
            const plain = C === Object || C === W.Object || C.name === "Object";
            const c = plain ? Object.create(Object.getPrototypeOf(n)) : Reflect.construct(C, args);
            if (plain) { /* BRIO branch: clone — Accept plain. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
            for (const [k, v] of Object.entries(n)) { /* BRIO loop: clone — Iterate Object.entries(n). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if ([ "parent", "canvas", "aãÁ", "text", "ë", "âè", "ÉE" ].includes(k) || typeof v === "function") continue;
                if (v == null || [ "number", "string", "boolean" ].includes(typeof v)) try { /* BRIO guarded: clone — Keep the existing exception boundary for clone. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    c[k] = v;
                } catch (_) { /* BRIO fallback: clone — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            }
            if (n["À"]) c["À"] = n["À"];
            if (c["ë"] && n["ë"]) { /* BRIO branch: clone — Accept c["ë"] && n["ë"]. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                c["ë"]["É"] = n["ë"]["É"];
                c["ë"]["Ä"] = n["ë"]["Ä"];
            }
            if (typeof n.text === "string" || typeof n.text === "number") { /* BRIO branch: clone — Accept typeof n.text === "string" || typeof n.text === "number". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                c.text = n.text;

            }
            pairs.push({
                source: n,
                node: c,
                path: hudPath(n)
            });
            for (const key of [ "âè", "ÉE" ]) for (const child of n[key] || []) if (!String(child?.type || "").startsWith("brio")) { /* BRIO branch: clone — Accept !String(child?.type || "").startsWith("brio"). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    ensureNativeSlotArt = unit => { /* BRIO block: ensureNativeSlotArt — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        if (unit.pairs.some(/* BRIO expr: ensureNativeSlotArt / unit.pairs.some callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ p => isSlotArtwork(p.path))) return;
        const background = unit.pairs.find(/* BRIO expr: ensureNativeSlotArt / unit.pairs.find callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ p => /\/inv[0-6]\.png$/.test(p.path)) || (S.hudSlotSprite ? {source: S.hudSlotSprite, node: S.hudSlotSprite} : null);
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
        if (!S.emptySlotArtLogged) { /* BRIO branch: ensureNativeSlotArt — Accept !S.emptySlotArtLogged. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    nativeInvFor = r => { /* BRIO block: nativeInvFor — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        if (!S.hudTemplates?.slots?.length) return null;
        if (!S.nativeInvClones) S.nativeInvClones = new Map;
        let cached = S.nativeInvClones.get(r);
        if (cached?.version === S.hudVersion) return cached;
        if (cached) for (const row of cached.rows) for (const unit of row.units) try { /* BRIO guarded: nativeInvFor — Keep the existing exception boundary for nativeInvFor. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            unit.root["ÊÈA"]?.();
        } catch (_) { /* BRIO fallback: nativeInvFor — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        const rows = [];
        for (const [kind, raw] of Object.entries(S.hudTemplates)) { /* BRIO loop: nativeInvFor — Iterate Object.entries(S.hudTemplates). Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            const sorted = raw.slice().sort(/* BRIO expr: nativeInvFor / raw.slice().sort callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ (a, b) => kind === "slots" ? a.slotIndex - b.slotIndex : a.x - b.x || a.y - b.y), templates = kind === "slots" ? sorted.slice(-5) : sorted, units = [];
            for (const rec of templates) try { /* BRIO guarded: nativeInvFor — Keep the existing exception boundary for nativeInvFor. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
                const unit = cloneNativeWidget(rec);
                if (kind === "slots") ensureNativeSlotArt(unit);
                units.push(unit);
            } catch (e) { /* BRIO fallback: nativeInvFor — Handle failure in nativeInvFor through its existing fallback/report path; optional native fields may be unavailable. */
                if (!rec.unavailable) { /* BRIO branch: nativeInvFor — Accept !rec.unavailable. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
     * Fit the weapon BACKGROUND rather than caption/artwork extents. V50 row metrics intentionally enlarge the prior18px cell; own warning geometry stays independent.
     */
    inventoryBounds = /* BRIO expr: inventoryBounds — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ rec => rec.kind === "slots" ? rec.slotBounds || hudBounds(rec) : hudBounds(rec);
    /* BRIO: remoteRowMetrics (V50; requested size change, live-pending)
     * One139px strip width matches the established fallback ammo strip incl2px side padding.
     * Five square backgrounds grow proportionally to26.2px; materials25.2px vs previous18px.
     * Ammo icon/text height, native art, external size multipliers and V45 red-X primitive stay unchanged.
     * Fixed per-kind advances are shared by complete native clones and fallback rows to avoid overlap.
     */
    const REMOTE_ROW_WIDTH = 139, REMOTE_ROW_HEIGHT = {slots:26.2,materials:25.2,ammo:18},
        remoteRowAdvance = /* BRIO expr: remoteRowAdvance — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ kind => ({slots:30,materials:29,ammo:21})[kind];
    const /* BRIO: drawNativeInv
     * V47 proved art/X; V50 intentionally enlarges slots/materials while keeping external size multipliers and V45 X.
     * V48 removes redundant slot-ammo text and applies shared numeric/charge warning decisions.\n     * Empty X stays outside the native downscale; source nodes/assets are never edited by remote rendering.
     */
    drawNativeInv = (ctx, s, r) => { /* BRIO V53: drawNativeInv — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('native inventory clones');try{ /* BRIO block: drawNativeInv — Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
        const cache = nativeInvFor(r);
        if (!cache?.rows.length) return new Set;
        const drawn = new Set;
        const ex = exFast(), m = matState(r), ammo = Array.isArray(r["åæ"]) ? r["åæ"] : [], slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [];
        let y = 0;
        for (const row of cache.rows) { /* BRIO loop: drawNativeInv — Iterate cache.rows. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
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
            if (row.units.length !== required) { /* BRIO branch: drawNativeInv — Accept row.units.length !== required. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                y += remoteRowAdvance(row.kind);
                continue;
            }
            drawn.add(row.kind);
            const widths = row.units.map(/* BRIO expr: drawNativeInv / row.units.map callback — Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */ u => inventoryBounds(u.record).width), height = REMOTE_ROW_HEIGHT[row.kind],
                factor = Math.min(height / Math.max(...widths,1),height / Math.max(...row.units.map(/* BRIO expr: drawNativeInv / row.units.map callback — Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */ u => inventoryBounds(u.record).height),1)),
                gap = (REMOTE_ROW_WIDTH / factor - widths.reduce(/* BRIO expr: drawNativeInv / widths.reduce callback — Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */ (a,b) => a+b,0)) / (widths.length-1), total = REMOTE_ROW_WIDTH / factor;
            let x = -total / 2, maxHeight = 0;
            row.units.forEach((u, i) => { /* BRIO block: drawNativeInv — row.units.forEach callback. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                const b = inventoryBounds(u.record);
                let value;
                const material = materialIndex(u.record.path), ammoIndex = +(u.record.path.match(/(?:ammo|stack)([0-4])/) || [])[1];
                if (row.kind === "materials") value = m[material];
                if (row.kind === "ammo") value = ammo[ammoIndex];
                for (const pair of u.pairs) { /* BRIO loop: drawNativeInv — Iterate u.pairs. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                    if (row.kind !== "slots" && (pair.source.type === "text" || typeof pair.source.text === "string") && /^\d+$/.test(String(pair.source.text))) { /* BRIO branch: drawNativeInv — Accept row.kind !== "slots" && (pair.source.type === "text" || typeof pair.source.text === "string") && /^\d+$/.test(. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                        pair.node.text = Number.isFinite(value) ? String(value) : "?";
                        pair.node.__brioLow = belowWarning(ex, row.kind, row.kind === "materials" ? material : ammoIndex, value);
                        if (pair.node.__brioLow && "fillStyle" in pair.node && pair.source.fillStyle !== "#000") pair.node.fillStyle = warningColor(true); else if ("fillStyle" in pair.source) pair.node.fillStyle = pair.source.fillStyle;
                    }
                    if (row.kind === "slots" && (pair.source.type === "text" || typeof pair.source.text === "string")) {
                        // V50 removes every clone-only text/caption, including centered native hotkeys and V48 ammo counts.
                        // The own native HUD retains its labels; art/emblems and separate ammo counts are preserved.
                        // Some native draw methods ignore their own opacity; suppress these clone methods explicitly.
                        pair.node.opacity = 0;
                        if (!pair.node.__brioSlotAmmoHidden) { /* BRIO branch: drawNativeInv — Accept !pair.node.__brioSlotAmmoHidden. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                            pair.node.__brioSlotAmmoHidden = true;
                            for (const method of ["éa","Eââ"]) if (typeof pair.node[method] === "function") pair.node[method] = () => { /* BRIO block: pair.node[method] — Intentionally empty: preserve the surrounding fallback/delegation contract. */ };
                        }
                    }
                    if (row.kind === "slots" && hudKinds(pair.path) === "ammo") { /* BRIO branch: drawNativeInv — Accept row.kind === "slots" && hudKinds(pair.path) === "ammo". Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                        const ai = S.ammoTypeMap?.get(String(slots[i]?.type || "").toLowerCase());
                        if (Number.isInteger(ai)) { /* BRIO branch: drawNativeInv — Accept Number.isInteger(ai). Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */ const path = S.hudAssetPaths?.get("inventoryammo" + ai) || "/buildart/ammo" + ai + ".png"; pair.node["À"] = {src: path, "ÁÄ": S.hudNativeImages?.get(path) || invImage(path)}; pair.node.opacity = 1;} else pair.node.opacity = 0;
                    }
                    if (row.kind === "slots" && /\/inv[0-6]\.png$/.test(pair.path)) { /* BRIO branch: drawNativeInv — Accept row.kind === "slots" && /\/inv[0-6]\.png$/.test(pair.path). Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                        const rarity = Number(slots[i]?.["äã"]);
                        if (Number.isFinite(rarity) && rarity >= 0 && rarity <= 6) { /* BRIO branch: drawNativeInv — Accept Number.isFinite(rarity) && rarity >= 0 && rarity <= 6. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                            const path = "/buildart/inv" + rarity + ".png";
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": S.hudNativeImages?.get(path) || invImage(path)
                            };
                        }
                    }
                    if (row.kind === "slots" && isSlotArtwork(pair.path)) { /* BRIO branch: drawNativeInv — Accept row.kind === "slots" && isSlotArtwork(pair.path). Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                        const path = itemPath(slots[i]?.type);
                        if (path) { /* BRIO branch: drawNativeInv — Accept path. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                            const im = S.hudNativeImages?.get(path) || invImage(path);
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": im
                            };
                            pair.node.opacity = 1;
                            const style = slotArtStyle(slots[i]?.type);
                            const base = u.pairs.find(/* BRIO expr: drawNativeInv / u.pairs.find callback — Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */ p => /\/inv[0-6]\.png$/.test(p.path))?.source;
                            if (base) { /* BRIO branch: drawNativeInv — Accept base. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */  pair.node.width = base.width * style.ratio; pair.node.height = base.height * style.ratio; pair.node.A = style.angle; pair.node.size = style.size; }
                        } else pair.node.opacity = 0;
                    }
                }
                ctx.save();
                ctx.translate(x * factor / s, y / s);
                ctx.scale(factor, factor);
                ctx.translate(-b.left / s, -b.top / s);
                const n = u.root;
                if (n["ë"]) { /* BRIO branch: drawNativeInv — Accept n["ë"]. Draw remote native clones with V50 enlarged slots/materials and no slot text; preserve native art and V45 X. */
                    n["ë"]["É"] = 0;
                    n["ë"]["Ä"] = 0;
                }
                n.A = 0;
                n.opacity = Number.isFinite(u.record.root.opacity) && u.record.root.opacity > 0 ? u.record.root.opacity : 1;
                if (typeof n["éa"] === "function") n["éa"](ctx, s, 1); else if (typeof n["Eââ"] === "function") n["Eââ"](ctx, s);
                ctx.restore();
                if (slots[i]?.type === "empty" && row.kind === "slots") drawEmptyX(ctx, x * factor, y, b.width * factor, b.height * factor, s);
                // V48 grappler exception: no separate reserve cell exists; warn on its remote slot using current row metrics.
                // No charge number is added back. New outline is conditional on the low-ammo modifier.
                if (row.kind === "slots" && String(slots[i]?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex,r,i+1))
                    drawRemoteChargeWarning(ctx,x*factor,y,b.width*factor,b.height*factor,s);
                x += b.width + gap;
                maxHeight = Math.max(maxHeight, b.height * factor);
            });
            y += remoteRowAdvance(row.kind);
        }
        return drawn;

        }finally{ /* BRIO block V53: drawNativeInv — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('native inventory clones',cost);}
    };
    const /* BRIO: resetNativeHud
     * Remove own overlays/remote clones and clear templates, captured art styles and per-match logs. Saved inventory size is untouched.
     */
    resetNativeHud = () => { /* BRIO block: resetNativeHud — Release native templates, clone caches and warning overlays at the Play boundary. */
        for (const n of S.hudWarnNodes?.values() || []) try { /* BRIO guarded: resetNativeHud — Keep the existing exception boundary for resetNativeHud. Release native templates, clone caches and warning overlays at the Play boundary. */
            n.parent?.remove?.(n);
        } catch (_) { /* BRIO fallback: resetNativeHud — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.hudWarnNodes?.clear();
        for (const c of S.nativeInvClones?.values() || []) for (const row of c.rows) for (const u of row.units) try { /* BRIO guarded: resetNativeHud — Keep the existing exception boundary for resetNativeHud. Release native templates, clone caches and warning overlays at the Play boundary. */
            u.root["ÊÈA"]?.();
        } catch (_) { /* BRIO fallback: resetNativeHud — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
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
    const isSlotArtwork = /* BRIO expr: isSlotArtwork — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ path => !!path && path !== "/" && !hudKinds(path) && !/\/(?:ammo|inventoryammo)[0-4]\.png$|\/disabled\.png$/.test(path);

    const /* BRIO: nativeSlotAmmoIndex (V48)
     * Grappler uses virtual type5; there is no sixth reserve/ammo row. Flare is single-use and exempt from every low-ammo warning.
     * Other guns use the source map, overridden by a reached live own-slot ammo emblem when available.
     * Unknown mappings never receive an arbitrary default threshold.
     */
    nativeSlotAmmoIndex = (r,index,rec) => { /* BRIO block: nativeSlotAmmoIndex — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const type = String(r?.["Åé"]?.[index]?.type || "").toLowerCase();
        if (!GUN_TYPES.has(type)) return undefined;
        if (type === "signal flare") return undefined;
        if (type === "grappler") return 5;
        const emblem = rec?.nodes?.find(/* BRIO expr: nativeSlotAmmoIndex / rec?.nodes?.find callback — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ n => /\/ammo[0-4]\.png$/.test(hudPath(n)));
        const i = emblem ? +(hudPath(emblem).match(/ammo([0-4])/)[1]) : S.ammoTypeMap?.get(type);
        return Number.isInteger(i) && i >= 0 && i < 5 ? i : undefined;
    };
    const /* BRIO: nativeSlotLow
     * Own slots compare displayed loaded+reserve; grappler uses charges; flare is exempt.
     * Remote displayed reserve numbers use the same per-type setting; no hidden magazine is added to that row.
     * Independent of selection. Empty slots, consumables, unknown/negative counts never warn.
     */
    nativeSlotLow = /* BRIO expr: nativeSlotLow — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ (e,r,index,rec) => String(r?.["Åé"]?.[index]?.type || "").toLowerCase() !== "signal flare" && belowWarning(e,"ammo",nativeSlotAmmoIndex(r,index,rec),nativeSlotAmmo(r,index,rec));
    const /* BRIO: drawRemoteChargeWarning
     * V49 charge-only exception: remote grappler lacks a separate ammo row, so outline its slot.
     * Pure drawing over finalized background bounds; no new per-match nodes/state or geometry changes.
     * Existing native/fallback inventory cleanup remains sufficient. Live appearance is pending.
     */
    drawRemoteChargeWarning = (ctx,x,y,width,height,scale) => { /* BRIO block: drawRemoteChargeWarning — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        ctx.save();
        try { /* BRIO guarded: drawRemoteChargeWarning — Keep the existing exception boundary for drawRemoteChargeWarning. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now()/140));
            ctx.strokeStyle = ctx.shadowColor = "#ff2020"; ctx.shadowBlur = 8/scale; ctx.lineWidth = 1.2/scale;
            ctx.strokeRect((x-1)/scale,(y-1)/scale,(width+2)/scale,(height+2)/scale);
        } finally { /* BRIO cleanup: drawRemoteChargeWarning — Always finish owned cleanup after success or failure. Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ ctx.restore();}
    };
    const /* BRIO: nativeSlotAmmo
     * Known finite gun ammo only: loaded plus matching reserve, except grappler/flare loaded only. A live emblem overrides AST mapping; unknowns never warn.
     */
    nativeSlotAmmo = (r, index, rec) => { /* BRIO block: nativeSlotAmmo — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    slotArtStyle = type => { /* BRIO block: slotArtStyle — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const raw = String(type || "").toLowerCase(), captured = S.hudArtStyles?.get(itemPath(type));
        if (captured) return captured;
        const gun = GUN_TYPES.has(raw), style = {ratio: gun ? 1.04 : .7, angle: gun ? Math.PI / 4 : 0, size: 1};
        if (raw === "deagle" || raw === "grappler") style.size = .8;
        if (raw === "revolver") style.size = .9;
        if (raw === "charge rifle" || raw === "grenade sniper" || raw === "landmine") style.size = 1.1;
        if (/feesh$/.test(raw)) { /* BRIO branch: slotArtStyle — Accept /feesh$/.test(raw). Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ style.angle = Math.PI / 4; style.size = 1.2;}
        if (["grenade","mirv","smokegrenade","flashbang","molotov","flexsplash","gravitynade","invgravitynade","candycane","icicle"].includes(raw)) style.size = 1.2;
        return style;
    };
    const drawSlotArt = (ctx, path, type, x, y, size, s) => { /* BRIO block: drawSlotArt — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        const style = slotArtStyle(type), wh = size * style.ratio * style.size;
        ctx.save(); ctx.translate((x - size * .02) / s, y / s); ctx.rotate(style.angle);
        drawImg(ctx, path, -wh / 2, -wh / 2, wh, wh, s); ctx.restore();
    };
    const /* BRIO: drawEmptyX
     * V45 red-X primitive: 1.2px stroke and 2px corner inset in display coordinates. Never call under the native widget downscale.
     */
    drawEmptyX = (ctx, x, y, w, h, s) => { /* BRIO block: drawEmptyX — Retain the V45 red-X primitive explicitly requested by the user; no new geometry redesign. */
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
    invScale = /* BRIO expr: invScale — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ () => INV_SCALE[exFast().inventorySize] || 1.25, /* BRIO: invImage
     * Load local replica artwork with native ready/half-size bookkeeping and retryable failure behavior.
     */
    invImage = p => { /* BRIO block: invImage — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
        let im = S.invAssets.get(p);
        if (im) return im;
        im = new Image;
        im["ÀA"] = 2;
        im.onload = () => { /* BRIO block: im.onload — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            im["ÀA"] = 1;
            im["ÁÅe"] = im.width / 2;
            im["âÅÉ"] = im.height / 2;
        };
        im.onerror = () => { /* BRIO block: im.onerror — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!im.__brioFailed) { /* BRIO branch: im.onerror — Accept !im.__brioFailed. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    itemPath = type => { /* BRIO block: itemPath — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const raw = String(type || "").toLowerCase().trim();
        if (!raw || raw === "empty" || raw === "pickaxe") return null;
        const path = S.hudAssetPaths?.get(raw) || `/buildart/${raw.replace(/[^a-z0-9]/g, "")}.png`;
        if (!(S.hudResolvedTypes || (S.hudResolvedTypes = new Set)).has(raw)) { /* BRIO branch: itemPath — Accept !(S.hudResolvedTypes || (S.hudResolvedTypes = new Set)).has(raw). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ S.hudResolvedTypes.add(raw); log("INVENTORY ASSET RESOLUTION", {type: raw, path, nativeAlias: S.hudAssetPaths?.has(raw) || false, capturedStyle: S.hudArtStyles?.has(path) || false});}
        return path;
    }, matState = r => { /* BRIO block: matState — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const a = Array.isArray(r?.["ÊÃÄ"]) ? r["ÊÃÄ"] : Array.isArray(r?.["Äâã"]) ? r["Äâã"] : [];
        return [ a[0], a[1], a[2], a[3] ];
    }, drawImg = (ctx, p, x, y, w, h, s) => { /* BRIO block: drawImg — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!p) return;
        const im = S.hudNativeImages?.get(p) || invImage(p);
        if (im.complete && im.naturalWidth) try { /* BRIO guarded: drawImg — Keep the existing exception boundary for drawImg. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            ctx.drawImage(im, x / s, y / s, w / s, h / s);
        } catch (_) { /* BRIO fallback: drawImg — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
    }, /* BRIO: warningColor
     * Flash remote numeric warnings independently of own slot/cell borders; V49 equality now warns; unknown counts remain non-warning.
     */
    warningColor = /* BRIO expr: warningColor — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ low => low && Math.sin(performance.now() / 140) >= 0 ? "#ff2020" : "#fff", drawHudText = (ctx, v, x, y, s, low = false, size = 8) => { /* BRIO block: drawHudText — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
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
    }, drawTxt = /* BRIO expr: drawTxt — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (ctx, v, x, y, s, low = false) => drawHudText(ctx, v, x, y, s, low), /* BRIO: drawInv
     * Fallback V45 compact row layout for incomplete native capture. Complete rows use native clones, never a mixed partial row.
     */
    drawInv = (ctx, scale, r) => { /* BRIO V53: drawInv — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('remote inventory draw');try{ /* BRIO block: drawInv — Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
        const drawn = drawNativeInv(ctx, scale, r) || new Set;
        const ex = exFast(), rows = [];
        if (ex.inventorySlots) rows.push("slots");
        if (ex.inventoryMaterials) rows.push("mats");
        if (ex.inventoryAmmo) rows.push("ammo");
        let yy = 0;
        for (const row of rows) { /* BRIO loop: drawInv — Iterate rows. Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
            if (drawn.has(row === "mats" ? "materials" : row)) { /* BRIO branch: drawInv — Accept drawn.has(row === "mats" ? "materials" : row). Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                yy += remoteRowAdvance(row === "mats" ? "materials" : row);
                continue;
            }
            if (row === "slots") { /* BRIO branch: drawInv — Accept row === "slots". Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                const slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [], sz = REMOTE_ROW_HEIGHT.slots, g = 2, x0 = -REMOTE_ROW_WIDTH / 2;
                for (let i = 0; i < 5; i++) { /* BRIO loop: drawInv — Iterate i < 5. Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                    const sl = slots[i], x = x0 + i * (sz + g), key = String(sl?.type || "").toLowerCase().replace(/[^a-z0-9]/g, ""), raw = Number(sl?.["äã"]), bg = Number.isFinite(raw) && raw >= 0 && raw <= 6 ? raw : 0;
                    drawImg(ctx, `/buildart/inv${bg}.png`, x, yy, sz, sz, scale);
                    const path = itemPath(sl?.type);
                    if (path) drawSlotArt(ctx, path, sl?.type, x + sz / 2, yy + sz / 2, sz, scale);
                    else if (sl?.type === "empty") drawEmptyX(ctx, x, yy, sz, sz, scale);
                    // Fallback uses the same charge-only slot outline, without inventing a sixth reserve count.
                    if (String(sl?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex,r,i+1)) drawRemoteChargeWarning(ctx,x,yy,sz,sz,scale);
                }
            } else if (row === "mats") { /* BRIO branch: drawInv — Accept row === "mats". Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                const m = matState(r), vals = [ [ "/buildart/wood.png", m[0] ], [ "/buildart/brick.png", m[1] ], [ "/buildart/metal.png", m[2] ], [ "/buildart/scrap.png", m[3] ] ], cell = REMOTE_ROW_WIDTH / 4, x0 = -REMOTE_ROW_WIDTH / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect(x0 / scale, (yy - 1) / scale, REMOTE_ROW_WIDTH / scale, 25.2 / scale);
                vals.forEach(([p, v], i) => { /* BRIO block: drawInv — vals.forEach callback. Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                    const x = x0 + i * cell;
                    drawImg(ctx, p, x, yy, 20, 20, scale);
                    drawHudText(ctx, v ?? "?", x + 27, yy + 10, scale, belowWarning(ex,"materials",i,v),10);
                });
            } else { /* BRIO branch: drawInv — Alternative for row === "mats". Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                const a = Array.isArray(r["åæ"]) ? r["åæ"].slice(0, 5) : [], cell = 27, x0 = -(cell * 5) / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 5 + 4) / scale, 18 / scale);
                for (let i = 0; i < 5; i++) { /* BRIO loop: drawInv — Iterate i < 5. Draw bounded fallback remote inventory when validated native widgets are unavailable; avoid claiming pixel identity. */
                    const x = x0 + i * cell;
                    drawImg(ctx, S.hudAssetPaths?.get("stack" + i) || `/buildart/stack${i}.png`, x, yy, 14, 14, scale);
                    drawTxt(ctx, a[i] ?? "?", x + 20, yy + 7, scale, belowWarning(ex,"ammo",i,a[i]));
                }
            }
            yy += remoteRowAdvance(row === "mats" ? "materials" : row);
        }

        }finally{ /* BRIO block V53: drawInv — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('remote inventory draw',cost);}
    }, makeInv = /* BRIO expr: makeInv — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */ r => ({
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
        "Eââ"(ctx, scale) { /* BRIO block: Eââ — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const f = invScale();
            ctx.save();
            ctx.scale(f, f);
            drawInv(ctx, scale, r);
            ctx.restore();
        },
        "éa"(ctx, scale, alpha) { /* BRIO block: éa — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (alpha <= 0) return;
            ctx.save();
            ctx.translate(this.ë.É / scale, this.ë.Ä / scale);
            ctx.globalAlpha = alpha;
            this.Eââ(ctx, scale);
            ctx.restore();
        },
        "ÊÈA"() { /* BRIO block: ÊÈA — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: ÊÈA — Keep the existing exception boundary for ÊÈA. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                this.parent?.remove?.(this);
            } catch (_) { /* BRIO fallback: ÊÈA — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            this.parent = null;
        }
    }), /* BRIO: attachInv
     * Attach one inventory drawable to a reached remote player and retain it for generation-safe cleanup.
     */
    attachInv = r => { /* BRIO block: attachInv — Attach one owned remote inventory drawable, preserving native own HUD and cleanup ownership. */
        if (!r || isLocal(r) || S.invNodes.has(r) || !r["Eâ"]?.add) return;
        const n = makeInv(r);
        try { /* BRIO guarded: attachInv — Keep the existing exception boundary for attachInv. Attach one owned remote inventory drawable, preserving native own HUD and cleanup ownership. */
            r["Eâ"].add(n);
            S.invNodes.set(r, n);
        } catch (e) { /* BRIO fallback: attachInv — Handle failure in attachInv through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(e));
        }
    };
    const restoreInvTrace = () => { /* BRIO block: restoreInvTrace — Intentionally empty: preserve the surrounding fallback/delegation contract. */ };
    const /* BRIO: automaticPhase
     * Use current local native glide state as one phase signal. Circle waiting/moving supplements it; rendering never waits for phase.
     */
    automaticPhase = () => { /* BRIO block: automaticPhase — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        const r = S.renderer;
        if (r && S.botPhase !== "match" && Number.isFinite(r["ÀËá"]) && r["ÀËá"] >= 0 && Number.isFinite(r["âëä"]) && r["âëä"] > 0) botPhase("native glidingTicks/maxGlidingTicks");
    };
    const BOT_CLUSTER = [ "EÆÅ", "Éaê", "ÆÉÆ", "Áae", "áaá", "Éäæ", "ée", "ËÈä", "aAE", "áâÃ", "ËE", "ÈÆ" ], /* BRIO: botPhase
     * Record a session transition only. This does not label any remote player as a bot or establish human identity.
     */
    botPhase = reason => { /* BRIO block: botPhase — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
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
    botSample = () => { /* BRIO V53: botSample — sample bounded passive diagnostic cost; the explicit comparison quiet phase skips this probe without claiming absence. */
        if(v53Quiet())return;const cost=v53PerfBegin('botSample');try{ /* BRIO block: botSample — Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
        automaticPhase();
        const now = performance.now(), me = worldPos(S.renderer);
        for (const r of collectPlayers().filter(/* BRIO expr: botSample / collectPlayers().filter callback — Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */ x => !isLocal(x))) { /* BRIO loop: botSample — Iterate collectPlayers().filter(x => !isLocal(x)). Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
            if (!S.botLogged.has(r.id)) { /* BRIO branch: botSample — Accept !S.botLogged.has(r.id). Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
                S.botLogged.add(r.id);
                log("BOT CANDIDATE", {
                    id: r.id,
                    name: r["Ée"],
                    phase: S.botPhase,
                    cluster: Object.fromEntries(BOT_CLUSTER.map(/* BRIO expr: botSample / BOT_CLUSTER.map callback — Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */ k => [ k, r[k] ]))
                });
            }
            let e = S.botWatch.get(r.id), p = worldPos(r);
            if (!e) { /* BRIO branch: botSample — Accept !e. Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
                e = {
                    id: r.id,
                    name: r["Ée"],
                    samples: 0,
                    first: now,
                    lastAt: now,
                    lastPos: p ? {
                        ...p
                    } : null,
                    changes: Object.fromEntries(BOT_CLUSTER.map(/* BRIO expr: botSample / BOT_CLUSTER.map callback — Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */ k => [ k, 0 ])),
                    lastVals: Object.fromEntries(BOT_CLUSTER.map(/* BRIO expr: botSample / BOT_CLUSTER.map callback — Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */ k => [ k, r[k] ])),
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
            if (p && e.lastPos) { /* BRIO branch: botSample — Accept p && e.lastPos. Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
                f.moved += Math.hypot(p.x - e.lastPos.x, p.y - e.lastPos.y);
                e.lastPos = {
                    ...p
                };
            } else if (p) e.lastPos = {
                ...p
            };
            if (me && p) { /* BRIO branch: botSample — Accept me && p. Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
                const d = Math.hypot(p.x - me.x, p.y - me.y);
                f.max = Math.max(f.max, d);
                f.min = f.min == null ? d : Math.min(f.min, d);
                if (d > 5e3) f.far5kHits++;
            }
            for (const k of BOT_CLUSTER) { /* BRIO loop: botSample — Iterate BOT_CLUSTER. Collect passive unresolved classifier evidence; names/IDs/isPreview never establish bot identity. */
                const v = r[k];
                if (e.lastVals[k] !== v) e.changes[k]++;
                e.lastVals[k] = v;
            }
        }

        }finally{ /* BRIO block V53: botSample — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('botSample',cost);}
    }, /* BRIO: botStart
     * Arm automatic metadata observation from ordinary Play; no manual MATCH START or bot-classification button.
     */
    botStart = () => { /* BRIO block: botStart — Run the existing bounded passive observer while effective bot inspection is enabled. */
        if (S.botTimer) return;
        S.botWatch = new Map;
        S.botLogged = new Set;
        S.botPhaseAt = performance.now();
        botSample();
        botAuditReset();
        botAuditTick();
        S.botTimer = setInterval(() => { /* BRIO block: botStart — setInterval callback. Run the existing bounded passive observer while effective bot inspection is enabled. */
            botSample();
            botAuditTick();
        }, 500);
        log("BOT WATCH", "START · automatic native gliding-state phase detection");
    }, /* BRIO: botStop
     * Stop bounded bot metadata sampling; export remains complete and no guessed classifier is introduced.
     */
    botStop = () => { /* BRIO block: botStop — Stop passive bot observation without making an unsupported classification. */
        if (!S.botTimer) return;
        clearInterval(S.botTimer);
        S.botTimer = 0;
        botSample();
        log("BOT WATCH STOP", {
            phaseMarkerUsed: S.botPhase === "match",
            players: [ ...S.botWatch.values() ].map(/* BRIO expr: botStop / [ ...S.botWatch.values() ].map callback — Stop passive bot observation without making an unsupported classification. */ e => ({
                id: e.id,
                name: e.name,
                samples: e.samples,
                seconds: Math.round((e.lastAt - e.first) / 100) / 10,
                phases: Object.fromEntries(Object.entries(e.phases).map(/* BRIO expr: botStop / Object.entries(e.phases).map callback — Stop passive bot observation without making an unsupported classification. */ ([k, v]) => [ k, {
                    ...v,
                    min: v.min == null ? null : Math.round(v.min),
                    max: Math.round(v.max),
                    moved: Math.round(v.moved)
                } ])),
                clusterChanges: e.changes
            }))
        });
    };
    const nearestBy = /* BRIO expr: nearestBy — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ pred => collectWorld().filter(/* BRIO expr: nearestBy / collectWorld().filter callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => pred(o) && worldPos(o)).sort((a, b) => { /* BRIO block: nearestBy — collectWorld().filter(o => pred(o) && worldPos(o)).sort callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const me = worldPos(S.renderer) || {
            x: 0,
            y: 0
        }, pa = worldPos(a), pb = worldPos(b);
        return Math.hypot(pa.x - me.x, pa.y - me.y) - Math.hypot(pb.x - me.x, pb.y - me.y);
    })[0] || null, airdropPred = /* BRIO expr: airdropPred — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => resourceSlots(o).some(/* BRIO expr: airdropPred / resourceSlots(o).some callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => /airdrop|supply|parachute/.test(x.path)) || /air.?drop|supply/i.test([ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"] ].join(" ")), fishingPred = /* BRIO expr: fishingPred — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => resourceSlots(o).some(/* BRIO expr: fishingPred / resourceSlots(o).some callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => /\/buildart\/bubbles[01]\.png$/.test(x.path)) || /fish(?:ing)?spot|fishing/i.test([ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"] ].join(" ")), airdropObj = /* BRIO expr: airdropObj — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => nearestBy(airdropPred), chestObj = /* BRIO expr: chestObj — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => nearestBy(/* BRIO expr: chestObj / nearestBy callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => o.type === "chest"), fishingObj = /* BRIO expr: fishingObj — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => nearestBy(fishingPred), targetOnScreen = o => { /* BRIO block: targetOnScreen — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const p = worldPos(o), sp = projectWorld(p);
        return !!(sp && sp.x >= sp.rect.left && sp.x <= sp.rect.right && sp.y >= sp.rect.top && sp.y <= sp.rect.bottom);
    }, /* BRIO: indicatorTick
     * Update the three nearest off-screen target arrows using active objects and the current native projection.
     */
    indicatorTick = /* BRIO expr: indicatorTick — Update proven target arrows plus V52 safe-zone/selected-loot arrows; suppress stale/on-screen geometry. */ () => { /* BRIO block V52: indicatorTick — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ indicatorsV40();v53Indicators();};
    const shallowState = o => { /* BRIO block: shallowState — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        const out = {};
        for (const k of Object.keys(o || {}).slice(0, 90)) { /* BRIO loop: shallowState — Iterate Object.keys(o || {}).slice(0, 90). Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            let v;
            try { /* BRIO guarded: shallowState — Keep the existing exception boundary for shallowState. Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
                v = o[k];
            } catch (_) { /* BRIO fallback: shallowState — Handle failure in shallowState through its existing fallback/report path; optional native fields may be unavailable. */
                continue;
            }
            if (typeof v === "number" && Number.isFinite(v)) out[k] = Math.round(v * 100) / 100; else if (typeof v === "boolean" || typeof v === "string" && v.length < 80) out[k] = v;
        }
        return out;
    };
    const /* BRIO: passiveTick
     * Observe current local/world metadata with novelty limits. Container disappearance and nearby loot are correlation only.
     */
    passiveTick = () => { /* BRIO V53: passiveTick — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        if(v53Quiet())return;const cost=v53PerfBegin('passive recon');try{ /* BRIO block: passiveTick — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        try { /* BRIO guarded: passiveTick — Keep the existing exception boundary for passiveTick. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const r = S.renderer;
            if (r) { /* BRIO branch: passiveTick — Accept r. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                const now = shallowState(r);
                if (!S.passiveLocal) { /* BRIO branch: passiveTick — Accept !S.passiveLocal. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    S.passiveLocal = now;
                    log("PASSIVE LOCAL FIELDS", now);
                } else { /* BRIO branch: passiveTick — Alternative for !S.passiveLocal. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    const changed = {};
                    for (const k of Object.keys(now)) if (now[k] !== S.passiveLocal[k] && /health|shield|ammo|mats|score|circle|storm|build/i.test(k)) changed[k] = now[k];
                    if (Object.keys(changed).length) log("PASSIVE LOCAL CHANGE", changed);
                    S.passiveLocal = now;
                }
            }
            for (const e of performance.getEntriesByType("resource")) { /* BRIO loop: passiveTick — Iterate performance.getEntriesByType("resource"). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                let p;
                try { /* BRIO guarded: passiveTick — Keep the existing exception boundary for passiveTick. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    p = new URL(e.name).pathname.toLowerCase();
                } catch (_) { /* BRIO fallback: passiveTick — Handle failure in passiveTick through its existing fallback/report path; optional native fields may be unavailable. */
                    continue;
                }
                if (!/\/(?:buildart|cosmetics)\//.test(p) || S.passiveAssets.has(p)) continue;
                S.passiveAssets.add(p);
                if (/(?:storm|zone|circle|crosshair|reticle|minimap|map|foliage|tree|bush|grass|chest|airdrop|fish|bubbles|glow|highlight|meteor|loot)/.test(p)) log("PASSIVE ASSET", p);
            }
            if (S.passiveAssets.size > 2500) { /* BRIO branch: passiveTick — Accept S.passiveAssets.size > 2500. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                clearInterval(S.passiveTimer);
                S.passiveTimer = 0;
                log("PASSIVE ASSET STOP", "Resource set cap reached");
            }
        } catch (e) { /* BRIO fallback: passiveTick — Handle failure in passiveTick through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push("passive probe: " + String(e));
        }

        }finally{ /* BRIO block V53: passiveTick — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('passive recon',cost);}
    }, passiveAdded = o => { /* BRIO block: passiveAdded — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        if (!o || ![ "buildable", "spellfield" ].includes(o.type)) return;
        const key = String(o.type) + ":" + String(o["Àâ"] ?? o["ÄæÅ"] ?? "");
        if (S.passiveBuilds.has(key)) return;
        S.passiveBuilds.add(key);
        if (S.passiveBuilds.size <= 25) log("PASSIVE BUILDABLE", {
            key: key,
            id: o.id,
            position: worldPos(o),
            fields: shallowState(o),
            resources: resourceSlots(o).map(/* BRIO expr: passiveAdded / resourceSlots(o).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.path)
        });
    };
    const restoreRandom = () => { /* BRIO block: restoreRandom — Intentionally empty: preserve the surrounding fallback/delegation contract. */ };
    const stopMeteorPersist = () => { /* BRIO block: stopMeteorPersist — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        const p = S.meteorPersist;
        if (p?.timer) clearInterval(p.timer);
        S.meteorPersist = null;
    }, restoreMeteor = () => { /* BRIO block: restoreMeteor — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        const h = S.meteorHook;
        if (!h) return;
        if (h.proto.drawImage === h.wrap) h.proto.drawImage = h.orig;
        clearTimeout(h.timer);
        S.meteorHook = null;
    }, meteorAutoStop = () => { /* BRIO block: meteorAutoStop — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
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
    meteorCandidate = (node, array = []) => { /* BRIO block: meteorCandidate — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (S.retiredMarkers?.has(node)) return;
        const path = nativeResourcePath(node?.icon?.["À"] || node?.["À"]);
        if (path === "/buildart/ping-meteor-icon.png" && node.parent?.icon === node) node = node.parent;
        if (exFast().permanentMeteor && [ "/buildart/ping-meteor-icon.png", "/buildart/ping-meteor.png" ].includes(path) && !S.meteorSeen?.has(node) && !S.meteorPending?.has(node)) { /* BRIO branch: meteorCandidate — Accept exFast().permanentMeteor && [ "/buildart/ping-meteor-icon.png", "/buildart/ping-meteor.png" ].includes(pa. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            (S.meteorPending || (S.meteorPending = new WeakSet)).add(node);
            holdMeteor(node, array);
        }
    }, /* BRIO: meteorScan
     * Resume the bounded breadth-first scan across reached roots, isolating hostile getters/proxies per node.
     */
    meteorScan = () => { /* BRIO V53: meteorScan — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('scene scan');try{ /* BRIO block: meteorScan — Walk already reached scene roots with the3000-node/second budget; preserve cursor across slices. */
        if (!S.renderer || !nativeScanNeeded(exFast())) return;
        if (!S.sceneQueue || (S.sceneQueueAt || 0) >= S.sceneQueue.length) { /* BRIO branch: meteorScan — Accept !S.sceneQueue || (S.sceneQueueAt || 0) >= S.sceneQueue.length. Walk already reached scene roots with the3000-node/second budget; preserve cursor across slices. */
            S.sceneQueue = [ ...sceneRoots() ];
            S.sceneQueueAt = 0;
            S.sceneQueueSeen = new WeakSet;
        }
        const seen = S.sceneQueueSeen, stack = S.sceneQueue;
        let visits = 0;
        while (S.sceneQueueAt < stack.length && visits < 3e3) { /* BRIO loop: meteorScan — Iterate S.sceneQueueAt < stack.length && visits < 3e3. Walk already reached scene roots with the3000-node/second budget; preserve cursor across slices. */
            visits++;
            const x = stack[S.sceneQueueAt++];
            if (!x || typeof x !== "object" || seen.has(x)) continue;
            seen.add(x);
            try { /* BRIO guarded: meteorScan — Keep the existing exception boundary for meteorScan. Walk already reached scene roots with the3000-node/second budget; preserve cursor across slices. */
                sceneObserve(x);
                meteorCandidate(x);
                captureRoof(x);
                for (const key of [ "âè", "ÉE" ]) if (Array.isArray(x[key])) for (const c of x[key]) stack.push(c);
                if (Array.isArray(x)) for (const c of x) stack.push(c);
                hudCandidate(x);
            } catch (_) { /* BRIO fallback: meteorScan — Handle failure in meteorScan through its existing fallback/report path; optional native fields may be unavailable. */
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
        if (!S.sceneScanLogged) { /* BRIO branch: meteorScan — Accept !S.sceneScanLogged. Walk already reached scene roots with the3000-node/second budget; preserve cursor across slices. */
            S.sceneScanLogged = true;
            log("SCENE CAPTURE", S.sceneScan);
        }

        }finally{ /* BRIO block V53: meteorScan — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('scene scan',cost);}
    }, /* BRIO: meteorAutoStart
     * Start scoped native container/scene discovery with watchdog coverage. Keep the 3000-node/second and observer/array caps.
     */
    meteorAutoStart = reason => { /* BRIO block: meteorAutoStart — Keep bounded native scene capture available even when the composite disables every modifier. */
        meteorAutoStop();
        if (S.destroyed || !S.renderer || !nativeScanNeeded(exFast())) return;
        log("METEOR AUTOMATIC START", {
            reason: reason || "local capture",
            epoch: S.runEpoch
        });
        const tick = () => { /* BRIO block: tick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: tick — Keep the existing exception boundary for tick. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                meteorScan();
            } catch (e) { /* BRIO fallback: tick — Handle failure in tick through its existing fallback/report path; optional native fields may be unavailable. */
                if (!S.sceneStartError) { /* BRIO branch: tick — Accept !S.sceneStartError. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    applyRemote = async r => { /* BRIO block: applyRemote — Apply only the current effective modifiers to a reached remote player; preserve native authority. */
        if (!r || isLocal(r)) return;
        const epoch = S.runEpoch;
        rememberRemote(r);
        const e = exFast();
        try {
            // V50 remoteInformation owns reversible names/bar attachment and composite modifier exclusion.
            remoteInformation(r);
            // V50 replaces one-shot shared-resource edits with reversible draw gates in featurePlayer.
            // Held weapons change resources natively; their owning physical branch stays hidden through those changes.
            if (S.destroyed || epoch !== S.runEpoch) return;
            if (e.nearestPlayer) attachTrack(r);
            featurePlayer(r);
            if (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo) attachInv(r);
        } catch (x) { /* BRIO fallback: applyRemote — Handle failure in applyRemote through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push(String(x));
        }
    }, /* BRIO: queueRemote
     * Keep remote capture retryable but generation-bound. Delayed work from a previous Play must not recreate old overlays.
     */
    queueRemote = r => { /* BRIO block: queueRemote — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!r || isLocal(r) || S.remoteQueued.has(r)) return;
        S.remoteQueued.add(r);
        const auditEpoch = S.runEpoch;
        setTimeout(() => { /* BRIO block: queueRemote — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            if (!S.destroyed && S.runEpoch === auditEpoch) replicaStateAudit(r);
        }, 2e3);
        for (const ms of [ 0, 250, 1200, 3e3 ]) setTimeout(() => { /* BRIO block: queueRemote — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */ if (!S.destroyed && S.runEpoch === auditEpoch) applyRemote(r);}, ms);
    }, /* BRIO: queueWorld
     * Queue reached world customization without global polling or stale-generation attachments.
     */
    queueWorld = o => { /* BRIO block: queueWorld — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!o || S.worldQueued.has(o)) return;
        S.worldQueued.add(o);
        const auditEpoch = S.runEpoch;
        setTimeout(() => { /* BRIO block: queueWorld — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            if (!S.destroyed && S.runEpoch === auditEpoch) replicaStateAudit(o);
        }, 1200);
        const epoch = S.runEpoch;
        for (const ms of [ 0, 250, 1200 ]) setTimeout(() => { /* BRIO block: queueWorld — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            if (S.destroyed || S.runEpoch !== epoch) return;
            const e = exFast();
            // V50 tier predicates gate actual branches; shared transparent resource edits would leak between tiers.
            featureWorld(o);
        }, ms);
    }, /* BRIO: handleAdded
     * Dispatch reached native objects to local/remote/world/HUD/meteor capture. Ignore BRIO-owned drawables.
     */
    handleAdded = (x, a) => { /* BRIO block: handleAdded — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (x?.__brioHudClone || String(x?.type || "").startsWith("brio")) return;
        try { /* BRIO guarded: handleAdded — Keep the existing exception boundary for handleAdded. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            meteorCandidate(x, a);
            sceneObserve(x?.parent);
            if (isPlayer(x)) { /* BRIO branch: handleAdded — Accept isPlayer(x). Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                if (!S.renderer && localNameMatch(x)) onLocal(x, a); else if (S.renderer && !isLocal(x)) queueRemote(x);
            }
            captureRoof(x);
            hudCandidate(x);
            if (S.capture) sceneObserve(x);
            if (isWorld(x)) { /* BRIO branch: handleAdded — Accept isWorld(x). Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                reconAdded(x);
                passiveAdded(x);
                featureWorld(x);
                patchArray(a);
                queueWorld(x);
            }
        } catch (e) { /* BRIO fallback: handleAdded — Handle failure in handleAdded through its existing fallback/report path; optional native fields may be unavailable. */
            if (S.errors.length < 100) S.errors.push("native capture: " + String(e));
        }
    };
    const /* BRIO: patchArray
     * Observe only reached native arrays after bounded broad discovery; delegate native push/unshift unchanged.
     */
    patchArray = a => { /* BRIO block: patchArray — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (!Array.isArray(a) || S.arrayHooks.has(a)) return;
        const dp = Object.getOwnPropertyDescriptor(a, "push"), du = Object.getOwnPropertyDescriptor(a, "unshift"), p = function(...xs) { /* BRIO block: p — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const n = Reflect.apply(NP, this, xs);
            for (const x of xs) handleAdded(x, this);
            return n;
        }, u = function(...xs) { /* BRIO block: u — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    restoreArrays = () => { /* BRIO block: restoreArrays — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        for (const [a, h] of S.arrayHooks) try { /* BRIO guarded: restoreArrays — Keep the existing exception boundary for restoreArrays. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            h.dp ? Object.defineProperty(a, "push", h.dp) : delete a.push;
            h.du ? Object.defineProperty(a, "unshift", h.du) : delete a.unshift;
        } catch (_) { /* BRIO fallback: restoreArrays — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.arrayHooks.clear();
    }, /* BRIO: onLocal
     * Capture the current named local renderer once, start narrow timers and apply selected visuals without changing Play packets.
     */
    onLocal = (r, a) => { /* BRIO block: onLocal — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        if (S.renderer) return;
        S.renderer = r;
        S.rendererArray = a;
        S.native = nativeSnap(r);
        const localAuditEpoch = S.runEpoch;
        setTimeout(() => { /* BRIO block: onLocal — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            if (!S.destroyed && S.runEpoch === localAuditEpoch) replicaStateAudit(r);
        }, 2e3);
        const epoch = S.runEpoch;
        setTimeout(() => { /* BRIO block: onLocal — setTimeout callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
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
        if (!S.passiveTimer) { /* BRIO branch: onLocal — Accept !S.passiveTimer. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            passiveTick();
            reconDom("match capture");
            S.passiveTimer = setInterval(() => { /* BRIO block: onLocal — setInterval callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
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
    }, goals = /* BRIO expr: goals — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => ({
        renderer: !!S.renderer,
        roofs: !extrasState().transparentRoofs || S.roofSaved.size === 21
    }), stopCapture = why => { /* BRIO block: stopCapture — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
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
    }, maybeStop = () => { /* BRIO block: maybeStop — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        const g = goals();
        if (g.renderer && g.roofs) stopCapture("goals-met");
    };
    const /* BRIO: tagName
     * Apply a single dynamic uL# prefix within maxLength so capture can find the current local player without a hardcoded identity.
     */
    tagName = () => { /* BRIO block: tagName — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const b = q("#nameBox");
        if (!b) return "uL#";
        let raw = String(b.value || "");
        raw = raw.replace(/^uL#/, "");
        const max = Number(b.maxLength) > 0 ? Number(b.maxLength) : Infinity;
        const tagged = ("uL#" + raw).slice(0, max);
        if (b.value !== tagged) { /* BRIO branch: tagName — Accept b.value !== tagged. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            b.value = tagged;
            try { /* BRIO guarded: tagName — Keep the existing exception boundary for tagName. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                b.dispatchEvent(new Event("input", {
                    bubbles: true
                }));
                b.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
            } catch (_) { /* BRIO fallback: tagName — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        }
        S.localName = tagged;
        return tagged;
    }, /* BRIO: arm
     * The ordinary-Play lifecycle boundary. Restore all old hooks/resources, detach old game nodes, clear runtime collections, increment epoch and rearm selected settings.
     */
    arm = () => { /* BRIO block: arm — Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
        S.runEpoch = (S.runEpoch || 0) + 1;
        v53Reset(true);
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
        if (S.featureTimer) { /* BRIO branch: arm — Accept S.featureTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
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
        if (S.passiveTimer) { /* BRIO branch: arm — Accept S.passiveTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            clearInterval(S.passiveTimer);
            S.passiveTimer = 0;
        }
        if (S.autoContentTimer) { /* BRIO branch: arm — Accept S.autoContentTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            clearInterval(S.autoContentTimer);
            S.autoContentTimer = 0;
        }
        restoreRandom();
        restoreMeteor();
        stopMeteorPersist();
        if (S.localTrack?.node) try { /* BRIO guarded: arm — Keep the existing exception boundary for arm. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            S.localTrack.node.parent?.remove?.(S.localTrack.node);
        } catch (_) { /* BRIO fallback: arm — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.localTrack = null;
        for (const n of S.trackNodes.values()) try { /* BRIO guarded: arm — Keep the existing exception boundary for arm. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            n.parent?.remove?.(n);
        } catch (_) { /* BRIO fallback: arm — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.trackNodes.clear();
        for (const n of S.invNodes.values()) try { /* BRIO guarded: arm — Keep the existing exception boundary for arm. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            n.parent?.remove?.(n);
        } catch (_) { /* BRIO fallback: arm — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        S.invNodes.clear();
        if (S.nearestTimer) { /* BRIO branch: arm — Accept S.nearestTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            clearInterval(S.nearestTimer);
            S.nearestTimer = 0;
        }
        if (S.indicatorTimer) { /* BRIO branch: arm — Accept S.indicatorTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            clearInterval(S.indicatorTimer);
            S.indicatorTimer = 0;
        }
        if (S.botTimer) { /* BRIO branch: arm — Accept S.botTimer. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
            clearInterval(S.botTimer);
            S.botTimer = 0;
        }
        S.localName = tagName();
        log("MATCH STATE RESET", {epoch: S.runEpoch, meteorMarkers: reconMarkers.length, remoteRefs: S.remoteRefs.size, inventoryNodes: S.invNodes.size, trackNodes: S.trackNodes.size, featureNodes: featureNodes.size, savedSelectionsPreserved: true});
        deepStart();
        startRenderDiscovery("Play");
        const chosen = extrasState(), required = chosen.goodFlippinLuck ? CHALLENGE_TESTS : REQUIRED_TESTS, flags = Object.fromEntries(required.map(/* BRIO expr: arm / required.map callback — Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */ id => [ id, !!chosen[id] ]));
        log("TEST SETTINGS AT PLAY", {
            requiredOn: flags,
            missing: required.filter(/* BRIO expr: arm / required.filter callback — Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */ id => !chosen[id]),
            profile:chosen.goodFlippinLuck ? "combined challenge" : "normal / tier comparison",
            allSelected: chosen, savedSelections:storedExtras()
        });
        locker.style.display = extras.style.display = "none";
        const op = Array.prototype.push, ou = Array.prototype.unshift, hp = function(...xs) { /* BRIO block: hp — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const n = Reflect.apply(op, this, xs);
            for (const x of xs) handleAdded(x, this);
            queueMicrotask(maybeStop);
            return n;
        }, hu = function(...xs) { /* BRIO block: hu — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const n = Reflect.apply(ou, this, xs);
            for (const x of xs) handleAdded(x, this);
            queueMicrotask(maybeStop);
            return n;
        };
        Array.prototype.push = hp;
        Array.prototype.unshift = hu;
        const timer = setTimeout(() => { /* BRIO block: arm — setTimeout callback. Start a fresh ordinary-Play epoch; clear transient game state and retain saved choices/custom assets. */
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
    bindPlay = () => { /* BRIO block: bindPlay — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const e = q("#ready") || q("#play") || q("#playButton") || q("#loggedInPlay");
        if (!e) return log("PLAY BIND FAILED");
        S.play = e;
        const prep = /* BRIO expr: prep — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => tagName(), go = /* BRIO expr: go — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => arm();
        e.addEventListener("pointerdown", prep, true);
        e.addEventListener("mousedown", prep, true);
        e.addEventListener("click", go, true);
        S.playHandlers = [ [ "pointerdown", prep ], [ "mousedown", prep ], [ "click", go ] ];
        log("PLAY BOUND", e.id);
    };
    const /* BRIO: verify
     * Report current capture/hooks/settings/errors without creating gameplay actions or treating missing evidence as a pass.
     */
    verify = () => { /* BRIO block: verify — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
            meteorNativeHolds: reconMarkers.map(/* BRIO expr: verify / reconMarkers.map callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => ({
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
    // V50 reopens the SAME Extras modal during play, including from the minimized terminal. Native home
    // buttons disappear in a match; a reachable control is necessary for tier cycling/preset restoration.
    term.innerHTML = '<div class="head" style="display:flex;gap:6px;padding:6px"><b style="flex:1">BRIO v53</b><button data-a="extras">EXTRAS</button><button data-a="perf" disabled title="24-second comparison; challenges/preferences retained, modifiers temporarily pause">PERF CHECK (24s)</button><button data-a="min">—</button></div><div class="body" style="display:flex;gap:5px;padding:6px;flex-wrap:wrap"><button data-a="verify">VERIFY</button><button data-a="copy">COPY RESULTS</button></div><textarea class="body" style="flex:1;background:#000;color:#fff;border:0;padding:7px;resize:none"></textarea>';
    D.documentElement.appendChild(term);
    S.out = term.querySelector("textarea");
    let mini = false, drag = null;
    term.onclick = e => { /* BRIO block: term.onclick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const a = e.target?.dataset?.a;
        if(a === "perf"){ /* BRIO block V53: V53 adapter — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfStart();v53CalibrationStatus();}
        else if (a === "extras") { /* BRIO branch: term.onclick — V50 live-controls entry, fixture checked/live-pending: reopen existing Extras without arming a Play or changing saved selections. */
            renderExtras(); extras.style.display = "flex";
        } else if (a === "min") { /* BRIO branch: term.onclick — Accept a === "min". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            mini = !mini;
            term.classList.toggle("min", mini);
            e.target.textContent = mini ? "+" : "—";
        } else if (a === "verify") { /* BRIO branch: term.onclick — Accept a === "verify". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  deepReport(); verify(); } else if (a === "copy") { /* BRIO branch: term.onclick — Accept a === "copy". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            v53PerfFinish('results export');log('V53 EXPORT AUDIT',v53Audit(true));S.manualCopy = false; deepReport();
            if (S.botTimer) botStop();
            reconContainers();
            const x = "BRIO " + S.v + "\n" + S.log.join("\n") + "\n\n" + J(verify());
            Promise.resolve().then(() => { /* BRIO block: term.onclick — Promise.resolve().then callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (!navigator.clipboard?.writeText) throw Error("Clipboard API unavailable");
                return navigator.clipboard.writeText(x);
            }).then(/* BRIO expr: term.onclick / Promise.resolve().then(() => { if (!navigator.clipboard?.writeText) throw Error("Clipboard API unavailable");  callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => log("COPY OK", x.length)).catch(() => { /* BRIO block: term.onclick — Promise.resolve().then(() => { if (!navigator.clipboard?.writeText) throw Error("Clipboard API unavailable");  callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                S.manualCopy = true; S.out.value = x;
                S.out.select();
                try { /* BRIO guarded: term.onclick — Keep the existing exception boundary for term.onclick. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    D.execCommand("copy");
                } catch (_) { /* BRIO fallback: term.onclick — Handle failure in term.onclick through its existing fallback/report path; optional native fields may be unavailable. */
                    log("COPY MANUALLY", "Select and copy the terminal text");
                }
            });
        }
    };
    term.querySelector(".head").onpointerdown = e => { /* BRIO block: term.querySelector(".head").onpointerdown — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
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
    term.querySelector(".head").onpointermove = e => { /* BRIO block: term.querySelector(".head").onpointermove — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
        if (!drag || drag.id !== e.pointerId) return;
        term.style.left = Math.max(0, Math.min(innerWidth - term.offsetWidth, e.clientX - drag.x)) + "px";
        term.style.top = Math.max(0, Math.min(innerHeight - term.offsetHeight, e.clientY - drag.y)) + "px";
    };
    term.querySelector(".head").onpointerup = /* BRIO expr: term.querySelector(".head").onpointerup — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ () => drag = null;
    /* BRIO: destroy
     * Full injection teardown, unlike a match rearm: also restore home nodes,
     * remove styles/modals/terminal and delete the version key. Increment the
     * epoch first so pending promises cannot write into restored native state.
     */
    S.destroy = () => { /* BRIO block: S.destroy — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        S.destroyed = true;
        v53Reset(false);
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
        for (const m of [ S.roofSaved, S.buildSaved, S.lootSaved ]) for (const {w: w, old: old} of m.values()) try { /* BRIO guarded: S.destroy — Keep the existing exception boundary for S.destroy. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            w["ÁÄ"] = old;
        } catch (_) { /* BRIO fallback: S.destroy — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        if (S.localTrack?.node) try { /* BRIO guarded: S.destroy — Keep the existing exception boundary for S.destroy. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            S.localTrack.node.parent?.remove?.(S.localTrack.node);
        } catch (_) { /* BRIO fallback: S.destroy — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        for (const n of [ ...S.trackNodes.values(), ...S.invNodes.values() ]) try { /* BRIO guarded: S.destroy — Keep the existing exception boundary for S.destroy. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            n.parent?.remove?.(n);
        } catch (_) { /* BRIO fallback: S.destroy — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        for (const u of [ S.nearestUi, S.chestUi, S.airdropUi ]) u?.remove?.();
        for (const id of [ "loggedInLocker", "loggedInShop" ]) { /* BRIO loop: S.destroy — Iterate [ "loggedInLocker", "loggedInShop" ]. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            const e = D.getElementById(id), b = S.bak[id];
            if (e && b) { /* BRIO branch: S.destroy — Accept e && b. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
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
    botAuditReset = () => { /* BRIO block: botAuditReset — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
    botMeta = r => { /* BRIO block: botMeta — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const out = {}, seen = new Set, skip = new Set([ "parent", "owner", "game", "stage", "Eâ", "â", "aá", "head", "Ëå", "Äâè", "ÉãÂ", "ä", "áË", "ÄÂ", "ÄãÀ", "èÅ", "ÃÊ", "æÄ", "AÃå", "ÄÊâ", "ÂÅ", "ÁÄ" ]);
        function walk(v, p, d) { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!v || typeof v !== "object" || seen.has(v) || v instanceof Node || v instanceof HTMLImageElement || d > 2 || seen.size > 100 || ArrayBuffer.isView(v)) return;
            seen.add(v);
            for (const k of Object.getOwnPropertyNames(v).slice(0, 400)) { /* BRIO loop: walk — Iterate Object.getOwnPropertyNames(v).slice(0, 400). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (skip.has(k)) continue;
                let x;
                try { /* BRIO guarded: walk — Keep the existing exception boundary for walk. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    x = v[k];
                } catch (_) { /* BRIO fallback: walk — Handle failure in walk through its existing fallback/report path; optional native fields may be unavailable. */
                    continue;
                }
                const key = p + k;
                if (x == null || [ "boolean", "number", "string" ].includes(typeof x)) { /* BRIO branch: walk — Accept x == null || [ "boolean", "number", "string" ].includes(typeof x). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    if (typeof x !== "string" || x.length < 180) out[key] = x;
                } else if (Array.isArray(x) && x.length <= 32 && x.every(/* BRIO expr: walk / x.every callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ y => y == null || [ "boolean", "number", "string" ].includes(typeof y))) out[key] = x.slice(); else if (x && typeof x === "object" && !Array.isArray(x)) walk(x, key + ".", d + 1);
            }
        }
        walk(r, "", 0);
        return out;
    }, botAuditTick = () => { /* BRIO block: botAuditTick — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        if (performance.now() > botAuditUntil) return;
        for (const r of collectPlayers()) { /* BRIO loop: botAuditTick — Iterate collectPlayers(). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            if (isLocal(r)) continue;
            let rec = botAuditSeen.get(r);
            if (!rec) { /* BRIO branch: botAuditTick — Accept !rec. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
            } else if (!rec.done && performance.now() - rec.at >= 2e3) { /* BRIO branch: botAuditTick — Accept !rec.done && performance.now() - rec.at >= 2e3. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
    }, botSourceAudit = src => { /* BRIO block: botSourceAudit — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const re = /\b(?:bot|isbot|is_bot|npc|isai|is_ai|robot|artificialintelligence|computerplayer)\b/gi, hits = [];
        let m;
        while ((m = re.exec(src)) && hits.length < 60) hits.push({
            term: m[0],
            at: m.index,
            excerpt: src.slice(Math.max(0, m.index - 350), m.index + 650)
        });
        const constructors = [];
        for (const term of [ '.ÃEÅ("player"', ".ÃEÅ('player'", "isBot", "isAI", "botType", "botDifficulty", "botName", "botNames" ]) { /* BRIO loop: botSourceAudit — Iterate [ '.ÃEÅ("player"', ".ÃEÅ('player'", "isBot", "isAI", "botType", "botDifficulty", "botName". Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
    deepError = (stage, error) => { /* BRIO block: deepError — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        deep.errors++;
        deep.errorStages[stage] = (deep.errorStages[stage] || 0) + 1;
        if (deep.errorStages[stage] <= 2) log("PROBE OBSERVATION ERROR", {stage, epoch: deep.epoch, error: String(error)});
    };
    const /* BRIO: probeSnapshot
     * Snapshot data descriptors only, redact sensitive fields and mark accessors/cycles/truncation. Never invoke getters to obtain evidence.
     */
    probeSnapshot = value => { /* BRIO block: probeSnapshot — Copy bounded own data without invoking accessors; redact sensitive fields and report omissions. */
        const seen = new WeakSet; let entries = 0, truncated = false;
        const walk = (v, depth) => { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (++entries > 1400 || depth > 8) { /* BRIO branch: walk — Accept ++entries > 1400 || depth > 8. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  truncated = true; return "[CAP]"; }
            if (typeof v === "string") { /* BRIO branch: walk — Accept typeof v === "string". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  if (v.length > 1000) { /* BRIO branch: walk — Accept v.length > 1000. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ truncated = true; return v.slice(0, 1000) + "[CAP]";} return v; }
            if (v == null || typeof v === "boolean" || typeof v === "number") return v;
            if (typeof v !== "object") return "[" + typeof v + "]";
            if (Object.getOwnPropertyDescriptor(v, "éa")?.value || (Object.getOwnPropertyDescriptor(v, "ë")?.value && Array.isArray(Object.getOwnPropertyDescriptor(v, "âè")?.value))) return "[NATIVE DRAWABLE; OMITTED]";
            if (seen.has(v)) return "[CYCLE]";
            if (v instanceof Node) return "[DOM]";
            if (ArrayBuffer.isView(v)) { /* BRIO branch: walk — Accept ArrayBuffer.isView(v). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  truncated = true; return {binaryBytes: v.byteLength}; }
            seen.add(v);
            const o = Array.isArray(v) ? [] : {};
            for (const key of Reflect.ownKeys(v).slice(0, 240)) { /* BRIO loop: walk — Iterate Reflect.ownKeys(v).slice(0, 240). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (typeof key !== "string" || key === "length" || ["parent","ÁÄ","canvas"].includes(key)) continue;
                const desc = Object.getOwnPropertyDescriptor(v, key), meaning = schemaFields.get(key) || key;
                if (/token|password|email|(?:^|_)ip(?:$|_)/i.test(meaning)) { /* BRIO branch: walk — Accept /token|password|email|(?:^|_)ip(?:$|_)/i.test(meaning). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o[key] = "[REDACTED]"; continue;}
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
    deepRecord = (label, obj, lane = label.startsWith("INCOMING SCHEMA") ? "schema" : label.startsWith("ENVIRONMENT") ? "environment" : obj.kind === "player" ? "player" : label.startsWith("DEEP TARGET") ? "replica" : "container") => { /* BRIO block: deepRecord — Bound record count and approximate text size by reserved lane; omitted/capped records do not establish absence. */
        if (deep.records >= 1800 || deep.bytes >= 8e6 || (deep.lanes[lane] || 0) >= DEEP_LANES[lane]) { /* BRIO branch: deepRecord — Accept deep.records >= 1800 || deep.bytes >= 8e6 || (deep.lanes[lane] || 0) >= DEEP_LANES[lane]. Bound record count and approximate text size by reserved lane; omitted/capped records do not establish absence. */ deep.suppressed[lane] = (deep.suppressed[lane] || 0) + 1; return false;}
        const snap = probeSnapshot(obj), bytes = JSON.stringify(snap).length;
        if (deep.bytes + bytes > 8e6) { /* BRIO branch: deepRecord — Accept deep.bytes + bytes > 8e6. Bound record count and approximate text size by reserved lane; omitted/capped records do not establish absence. */ deep.suppressed.bytes = (deep.suppressed.bytes || 0) + 1; return false;}
        if (snap.truncated) deep.truncations++;
        deep.bytes += bytes; deep.records++; deep.lanes[lane] = (deep.lanes[lane] || 0) + 1;
        log(label, snap); return true;
    };
    const /* BRIO: environmentProbe
     * Record a manifest and small target chunks separately from large terrain arrays so later fields remain observable.
     */
    environmentProbe = env => { /* BRIO block: environmentProbe — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        if (!env || typeof env !== "object") return;
        const props = Object.getOwnPropertyDescriptors(env), fields = Object.keys(props);
        deepRecord("ENVIRONMENT MANIFEST", {fields: fields.map(/* BRIO expr: environmentProbe / fields.map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ key => ({key, meaning: schemaFields.get(key) || key, length: Array.isArray(props[key].value) ? props[key].value.length : undefined, accessor: !("value" in props[key])}))});
        for (const key of fields) { /* BRIO loop: environmentProbe — Iterate fields. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const value = props[key].value, meaning = schemaFields.get(key) || key;
            if (/chest|object|loot|seed|content|fish|drop|resourceNames/i.test(meaning)) { /* BRIO branch: environmentProbe — Accept /chest|object|loot|seed|content|fish|drop|resourceNames/i.test(meaning). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                if (Array.isArray(value)) { /* BRIO branch: environmentProbe — Accept Array.isArray(value). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    const count = Math.ceil(value.length / 24);
                    for (let chunk = 0; chunk < count; chunk++) if (!deepRecord("ENVIRONMENT TARGET CHUNK", {key, meaning, index: chunk, count, total: value.length, entries: value.slice(chunk*24,(chunk+1)*24)})) break;
                } else deepRecord("ENVIRONMENT TARGET FIELD", {key, meaning, value});
            }
        }
    };
    const /* BRIO: incomingDelta
     * Deduplicate exact field snapshots. Bound ordinary player/geometry/landing changes; novel container fields remain eligible within record limits.
     */
    incomingDelta = (p, kind, id, type) => { /* BRIO block: incomingDelta — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const identity = kind + ":" + id;
        let /* BRIO: state
     * Read cosmetic selections. Keep this namespace separate from the native locker and from Extras.
     */
    state = deep.incomingState.get(identity);
        if (!state) { /* BRIO branch: incomingDelta — Accept !state. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (deep.incomingState.size >= 600) return {packet: p, first: true};
            state = {values: new Map, changes: new Map}; deep.incomingState.set(identity, state);
        }
        const packet = {}, fields = [], capped = [];
        for (const [key, desc] of Object.entries(Object.getOwnPropertyDescriptors(p))) { /* BRIO loop: incomingDelta — Iterate Object.entries(Object.getOwnPropertyDescriptors(p)). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (["a","p","t","type","i","id","Ã","x","y","É","Ä","b","n"].includes(key)) continue;
            const value = "value" in desc ? desc.value : "[ACCESSOR; NOT INVOKED]", snap = probeSnapshot(value), fingerprint = JSON.stringify(snap.data);
            if (state.values.get(key) === fingerprint) continue;
            const seen = state.values.has(key), changes = state.changes.get(key) || 0;
            state.values.set(key, fingerprint);
            // Preserve first values of every field; routine player state must not starve containers.
            if (seen && changes >= 3 && (kind === "player" || ["health", "fullHealth", "width", "height", "landProgress", "landed"].includes(schemaFields.get(key) || key))) { /* BRIO branch: incomingDelta — Accept seen && changes >= 3 && (kind === "player" || ["health", "fullHealth", "width", "height", "landProgress", "lan. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ capped.push(key); continue;}
            state.changes.set(key, changes + 1); packet[key] = snap.data; fields.push(key);
        }
        if (capped.length) deep.suppressed.routineFieldChanges = (deep.suppressed.routineFieldChanges || 0) + capped.length;
        const packed = Object.getOwnPropertyDescriptor(p, "a")?.value;
        if (Array.isArray(packed) && packed.length > 4) { /* BRIO branch: incomingDelta — Accept Array.isArray(packed) && packed.length > 4. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ packet.packedExtension = packed.slice(4); fields.push("packedExtension");}
        return {packet, fields};
    };
    const /* BRIO: incomingProbe
     * Observe the original native decode result before remapping. Retain only target identities; terrain/loot IDs must not consume the 600 target-ID budget.
     */
    incomingProbe = result => { /* BRIO V53: incomingProbe — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('packet recon');try{ /* BRIO block: incomingProbe — Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
        if (S.destroyed || performance.now() > deep.until || v53Quiet()) return;
        const packets = Array.isArray(result) ? result : [result];
        for (const p of packets) { /* BRIO loop: incomingProbe — Iterate packets. Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
            if (!p || typeof p !== "object" || deep.packets++ >= 80000) continue;
            const desc = Object.getOwnPropertyDescriptors(p), own = /* BRIO expr: own — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ k => desc[k] && "value" in desc[k] ? desc[k].value : undefined;
            const type = own("t") ?? own("type"), packed = own("p"), update = own("a");
            const id = own("i") ?? own("id") ?? own("Ã") ?? (type === "x" ? packed?.[0] : type === "y" ? update?.[0] : undefined);
            let kind = own("b") ?? (type === "x" ? packed?.[1] : undefined);
            let subtype = own("t") != null ? own("type") : undefined;
            const targetObject = /* BRIO expr: targetObject — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ subtype => ["airdrop","bubbles","ammocrate","grenadecrate","meteorite"].includes(subtype);
            const targetKind = /* BRIO expr: targetKind — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ k => k === "player" || k === "chest" || k === "airdrop" || k === "object" && targetObject(subtype);
            if (type === "x" && id != null && targetKind(kind) && (deep.identities.has(id) || deep.identities.size < 600)) { /* BRIO branch: incomingProbe — Accept type === "x" && id != null && targetKind(kind) && (deep.identities.has(id) || deep.identities.size < 600). Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */ deep.identities.set(id, kind); if (subtype) deep.subtypes.set(id, subtype);}
            kind ||= deep.identities.get(id); subtype ||= deep.subtypes.get(id);
            if (type === "x" && id != null && (deep.identities.has(id) || deep.identities.size < 600) && deep.identities.get(id) !== kind && targetKind(kind)) { /* BRIO branch: incomingProbe — Accept type === "x" && id != null && (deep.identities.has(id) || deep.identities.size < 600) && deep.identities.get(i. Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */ deep.identities.set(id, kind); if (subtype) deep.subtypes.set(id, subtype);}
            const signature = String(type) + ":" + String(kind || "") + ":" + String(subtype || "") + ":" + Object.keys(desc).sort().join(",");
            if (!deep.schemas.has(signature) && deep.schemas.size < 350) { /* BRIO branch: incomingProbe — Accept !deep.schemas.has(signature) && deep.schemas.size < 350. Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                deep.schemas.add(signature); deepRecord("INCOMING SCHEMA FIRST", {type, kind, subtype, id, packet: p, scope: "native msgpack.decode return before native field remap; no mutation"});
            }
            if (type === "setID" && id != null) deep.localId = id;
            if (type === "circle") { /* BRIO branch: incomingProbe — Accept type === "circle". Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                const circleState = own("state");
                if (circleState !== undefined && circleState !== deep.circleState) { /* BRIO branch: incomingProbe — Accept circleState !== undefined && circleState !== deep.circleState. Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                    log("NATIVE SESSION STATE", {previous: deep.circleState, state: circleState, epoch: S.runEpoch, packet: probeSnapshot(p)});
                    if (["waiting", "moving"].includes(circleState)) botPhase("native circle state=" + circleState);
                    if (circleState === "lobby" && deep.circleState && deep.circleState !== "lobby") { /* BRIO branch: incomingProbe — Accept circleState === "lobby" && deep.circleState && deep.circleState !== "lobby". Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                        restoreMarkerHolds();
                        for (const key of ["nearestUi","chestUi","airdropUi"]) if (S[key]) S[key].style.display = "none";
                    }
                    deep.circleState = circleState;
                }
            }
            if (kind === "player" && id === (deep.localId ?? S.renderer?.id) && Number.isFinite(own("glidingTicks")) && own("glidingTicks") >= 0 && own("maxGlidingTicks") > 0) botPhase("native incoming local gliding state");
            if (type === "e") { /* BRIO branch: incomingProbe — Accept type === "e". Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                const env = own("envs") ?? own("È$");
                if (env && typeof env === "object" && !deep.environmentSeen.has(env)) { /* BRIO branch: incomingProbe — Accept env && typeof env === "object" && !deep.environmentSeen.has(env). Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */ deep.environmentSeen.add(env); environmentProbe(env);}
            }
            const relevant = kind === "player" || kind === "chest" || kind === "object" && targetObject(subtype) || kind === "airdrop";
            if (relevant) { /* BRIO branch: incomingProbe — Accept relevant. Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                if (type === "y") { /* BRIO branch: incomingProbe — Accept type === "y". Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                    const delta = incomingDelta(p, kind, id, type);
                    if (delta.fields?.length || delta.first) deepRecord("INCOMING TARGET PAYLOAD", {type, kind, subtype, id, ...delta, phase: S.botPhase, scope: "changed field values; bounded routine fields; novel/unknown container fields retained"});
                } else { /* BRIO branch: incomingProbe — Alternative for type === "y". Observe decoded native data read-only, with bounded snapshots; delegate native decoding unchanged. */
                    deepRecord("INCOMING TARGET PAYLOAD", {type, kind, subtype, id, packet: p, phase: S.botPhase});
                    if (type === "x") incomingDelta(p, kind, id, type);
                }
            }
        }

        }finally{ /* BRIO block V53: incomingProbe — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('packet recon',cost);}
    };
    const /* BRIO: deepEngineProbe
     * Wrap only reached native registry callbacks, delegate once with original receiver/arguments/return, and retain exact restoration descriptors.
     */
    deepEngineProbe = engine => { /* BRIO block: deepEngineProbe — Observe only reached native callbacks; missing/private registries remain explicit evidence gaps. */
        if (!engine || deep.engines.has(engine)) return;
        const handlers = Object.getOwnPropertyDescriptor(engine, "áÉâ")?.value;
        const registry = Object.getOwnPropertyDescriptor(engine, "ÁÂ")?.value;
        if (!handlers || typeof handlers.x !== "function" || !registry) return;
        deep.engines.add(engine);
        for (const kind of ["player","chest","object"]) { /* BRIO loop: deepEngineProbe — Iterate ["player","chest","object"]. Observe only reached native callbacks; missing/private registries remain explicit evidence gaps. */
            const callbacks = Object.getOwnPropertyDescriptor(registry, kind)?.value;
            if (!callbacks) continue;
            for (const key of ["èæå","ëåä","remove"]) { /* BRIO loop: deepEngineProbe — Iterate ["èæå","ëåä","remove"]. Observe only reached native callbacks; missing/private registries remain explicit evidence gaps. */
                const d = Object.getOwnPropertyDescriptor(callbacks, key); if (!d || !d.configurable || typeof d.value !== "function") continue;
                const original = d.value, wrapper = function(...args) { /* BRIO block: wrapper — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    try { /* BRIO guarded: wrapper — Keep the existing exception boundary for wrapper. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ if (performance.now() <= deep.until) { /* BRIO branch: wrapper — Accept performance.now() <= deep.until. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                        const delta = key === "ëåä" ? incomingDelta(args[1] || {}, kind, args[0]?.id, "y") : {packet: args[1], fields: ["create/remove"]};
                        if (delta.fields?.length) deepRecord("NATIVE CALLBACK PAYLOAD", {kind, callback: key, id: args[0]?.id, payload: delta.packet, stage: "before native callback"});
                    }} catch (error) { /* BRIO fallback: wrapper — Handle failure in wrapper through its existing fallback/report path; optional native fields may be unavailable. */ deepError("native callback", error);}
                    return Reflect.apply(original, this, args);
                };
                Object.defineProperty(callbacks, key, {...d, value: wrapper});
                deep.engineRestores.push(() => { /* BRIO block: deepEngineProbe — deep.engineRestores.push callback. Observe only reached native callbacks; missing/private registries remain explicit evidence gaps. */ if (callbacks[key] === wrapper) Object.defineProperty(callbacks, key, d);});
            }
        }
        log("NATIVE ENGINE PROBE", {captured: true, callbacks: deep.engineRestores.length});
    };
    const /* BRIO: deepTick
     * Install the scoped decode observer, inspect target replicas, and attempt bounded reached-window registry discovery. Do not independently decode or send.
     */
    deepTick = () => { /* BRIO V53: deepTick — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('replica recon');try{ /* BRIO block: deepTick — Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
        if (S.destroyed || performance.now() > deep.until) { /* BRIO branch: deepTick — Accept S.destroyed || performance.now() > deep.until. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */ deepStop("time cap"); return;}
        if (!deep.restore) { /* BRIO branch: deepTick — Accept !deep.restore. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
            let codec; try { /* BRIO guarded: deepTick — Keep the existing exception boundary for deepTick. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */  codec = typeof msgpack !== "undefined" ? msgpack : Object.getOwnPropertyDescriptor(W, "msgpack")?.value; } catch (_) { /* BRIO fallback: deepTick — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
            const d = codec && Object.getOwnPropertyDescriptor(codec, "decode");
            if (d && typeof d.value === "function" && (d.configurable || d.writable)) { /* BRIO branch: deepTick — Accept d && typeof d.value === "function" && (d.configurable || d.writable). Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
                const original = d.value, wrapper = function(...args) { /* BRIO block: wrapper — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    const result = Reflect.apply(original, this, args);
                    try { /* BRIO block V52: wrapper — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ v53StatsObserve(result);} catch(error) { /* BRIO block V52: wrapper — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ deepError("v53 stats",error);}
                    try { /* BRIO guarded: wrapper — Keep the existing exception boundary for wrapper. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ incomingProbe(result);} catch (error) { /* BRIO fallback: wrapper — Handle failure in wrapper through its existing fallback/report path; optional native fields may be unavailable. */ deepError("incoming result", error);}
                    return result;
                };
                Object.defineProperty(codec, "decode", {...d, value: wrapper});
                deep.installedEver = true;
                deep.restore = () => { /* BRIO block: deep.restore — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ if (codec.decode === wrapper) Object.defineProperty(codec, "decode", d);};
                log("INCOMING DECODE PROBE", {installed: true, method: "native result observer", outgoingUntouched: true, returnedIdentityPreserved: true});
            }
        }
        if(v53Quiet())return;
        const live = new Set;
        const localPosition = worldPos(S.renderer);
        for (const o of [...collectPlayers(), ...collectWorld()]) { /* BRIO loop: deepTick — Iterate [...collectPlayers(), ...collectWorld()]. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
            const kind = isPlayer(o) ? "player" : reconKind(o); if (!kind) continue;
            if (o.id != null && deep.identities.size < 600) { /* BRIO branch: deepTick — Accept o.id != null && deep.identities.size < 600. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */ deep.identities.set(o.id, kind === "player" ? "player" : o.type); if (o["Àâ"]) deep.subtypes.set(o.id, o["Àâ"]);}
            const key = kind + ":" + o.id; live.add(key);
            let rec = deep.replicas.get(key); if (!rec && deep.replicas.size >= 200) continue;
            if(deep.records>=1800||deep.bytes>=8e6||(deep.lanes.replica||0)>=DEEP_LANES.replica)continue;
            const snapshot = probeSnapshot(o), signature = JSON.stringify(snapshot.data);
            if (!rec) { /* BRIO branch: deepTick — Accept !rec. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
                rec = {last: signature, absent: false, updates: 0, firstAt: performance.now()}; deep.replicas.set(key, rec);
                const proto = []; let p = Object.getPrototypeOf(o);
                for (let depth = 0; p && depth < 3; depth++, p = Object.getPrototypeOf(p)) proto.push(Reflect.ownKeys(p).map(k => { /* BRIO block: deepTick — Reflect.ownKeys(p).map callback. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */ const d = Object.getOwnPropertyDescriptor(p, k); return {key: String(k), meaning: schemaFields.get(k) || null, accessor: !!(d.get || d.set), type: typeof d.value, value: d.value == null || ["number","string","boolean"].includes(typeof d.value) ? d.value : "[NONSCALAR]"};}));
                deepRecord("DEEP TARGET INITIAL", {kind, id: o.id, knownHuman: isLocal(o) ? "current local user" : null, snapshot, prototypeDescriptors: proto});
            } else if (rec.last !== signature && rec.updates++ < 5) { /* BRIO branch: deepTick — Accept rec.last !== signature && rec.updates++ < 5. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
                rec.last = signature; deepRecord("DEEP TARGET CHANGE", {kind, id: o.id, ageMs: Math.round(performance.now() - rec.firstAt), snapshot});
            }
            if (kind !== "player" && !rec.near && localPosition) { /* BRIO branch: deepTick — Accept kind !== "player" && !rec.near && localPosition. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
                const position = worldPos(o), distance = position ? Math.hypot(position.x - localPosition.x, position.y - localPosition.y) : Infinity;
                if (distance < 300) { /* BRIO branch: deepTick — Accept distance < 300. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */ rec.near = true; deepRecord("DEEP CONTAINER NEARBY", {kind, id: o.id, distance, snapshot, semantics: "passive near-object sample; opening state is not inferred"});}
            }
            rec.absent = false;
        }
        for (const [key, rec] of deep.replicas) if (!live.has(key) && !rec.absent) { /* BRIO branch: deepTick — Accept !live.has(key) && !rec.absent. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */ rec.absent = true; deepRecord("DEEP TARGET DISAPPEARED", {key, semantics: "culling/removal only; neither opened nor empty established"});}
        // One bounded own-data-only global scan per match; never invoke native getters.
        if (!deep.windowScanned) { /* BRIO branch: deepTick — Accept !deep.windowScanned. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
            deep.windowScanned = true;
            for (const key of Object.getOwnPropertyNames(W).slice(0, 1800)) try { /* BRIO guarded: deepTick — Keep the existing exception boundary for deepTick. Collect useful novel passive evidence within independent player/container/schema/replica/environment budgets. */
                const v = Object.getOwnPropertyDescriptor(W, key)?.value;
                if (!v || typeof v !== "object" || v instanceof Node || v === S || v === W) continue;
                deepEngineProbe(v);
                for (const d of Object.values(Object.getOwnPropertyDescriptors(v)).slice(0, 60)) if (d.value && typeof d.value === "object") deepEngineProbe(d.value);
            } catch (error) { /* BRIO fallback: deepTick — Handle failure in deepTick through its existing fallback/report path; optional native fields may be unavailable. */ deepError("window registry discovery", error);}
        }

        }finally{ /* BRIO block V53: deepTick — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('replica recon',cost);}
    };
    const /* BRIO: deepReport
     * Report the probe's own epoch, not an already-incremented next Play. Include missing hooks, lanes, suppression and stage-specific errors.
     */
    deepReport = /* BRIO expr: deepReport — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ () => log("V53 PROBE COVERAGE", {
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
    deepStop = reason => { /* BRIO block: deepStop — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        clearInterval(deep.timer); deep.timer = 0;
        if (deep.restore) { /* BRIO branch: deepStop — Accept deep.restore. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ deep.restore(); deep.restore = null;}
        while (deep.engineRestores.length) deep.engineRestores.pop()();
        if (reason) log("DEEP PROBES RESTORED", {reason});
    };
    const /* BRIO: deepStart
     * Reset all per-match evidence maps/counters under the new epoch. Cached raw source identity remains reusable.
     */
    deepStart = () => { /* BRIO block: deepStart — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        deepStop(); deep.until = performance.now() + 900000; deep.packets = deep.records = deep.bytes = deep.truncations = deep.errors = 0;
        deep.epoch = S.runEpoch; deep.errorStages = {}; deep.installedEver = false; deep.lanes = {}; deep.suppressed = {}; deep.incomingState.clear(); deep.environmentSeen = new WeakSet; deep.localId = null; deep.circleState = null; deep.schemas.clear(); deep.identities.clear(); deep.subtypes.clear(); deep.replicas.clear(); deep.windowScanned = false; deep.engines = new WeakSet;
        log("V50 DEEP PROBE PLAN", {readOnly: true, source: "complete raw bundle + AST", targets: "all observed container kinds and players; environment target chunks", laneCaps: DEEP_LANES, updatePolicy: "changed fields only; reserve container/late-target capacity", noManualArm: true, noClassifier: true});
        const tick = () => { /* BRIO block: tick — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  try { /* BRIO guarded: tick — Keep the existing exception boundary for tick. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  deepTick(); } catch (e) { /* BRIO fallback: tick — Handle failure in tick through its existing fallback/report path; optional native fields may be unavailable. */  deepError("target tick", e); } };
        tick(); deep.timer = setInterval(tick, 1000);
    };
    // Interpret only scalar AST arithmetic/aliases/branches; never call or execute source code.
    const /* BRIO: numericSourceConstants
     * Interpret only scalar AST literals/arithmetic/aliases/branches. No calls, eval, source execution or unknown-expression guessing.
     */
    numericSourceConstants = (ast, cutoff) => { /* BRIO block: numericSourceConstants — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const values = new Map;
        const readNumber = node => { /* BRIO block: readNumber — Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
            if (!node) return undefined;
            if (node.type === "Literal" && ["number","boolean"].includes(typeof node.value)) return node.value;
            if (node.type === "Identifier") return values.get(node.name);
            if (node.type === "UnaryExpression") { /* BRIO branch: readNumber — Accept node.type === "UnaryExpression". Keep home UI, normalized saved choices and category-scoped custom assets consistent. */ const v = readNumber(node.argument); if (v === undefined) return; if (node.operator === "-") return -v; if (node.operator === "+") return +v; if (node.operator === "!") return !v; if (node.operator === "~") return ~v;}
            if (node.type === "BinaryExpression") { /* BRIO branch: readNumber — Accept node.type === "BinaryExpression". Keep home UI, normalized saved choices and category-scoped custom assets consistent. */
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
        const invalidate = node => { /* BRIO block: invalidate — Use validated native resources/geometry and known values; retain cleanup ownership and current proof distinctions. */
            if (!node || typeof node !== "object") return;
            if (node.type === "AssignmentExpression" && node.left?.type === "Identifier") values.delete(node.left.name);
            if (node.type === "UpdateExpression" && node.argument?.type === "Identifier") values.delete(node.argument.name);
            for (const v of Object.values(node)) if (Array.isArray(v)) v.forEach(invalidate); else if (v && typeof v === "object") invalidate(v);
        };
        const execute = node => { /* BRIO block: execute — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!node || node.start >= cutoff) return;
            if (node.type === "VariableDeclaration") for (const d of node.declarations) { /* BRIO loop: execute — Iterate node.declarations. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ if (d.id.type !== "Identifier") continue; const v = readNumber(d.init); if (v !== undefined) values.set(d.id.name,v); else values.delete(d.id.name);}
            else if (node.type === "ExpressionStatement") execute(node.expression);
            else if (node.type === "AssignmentExpression" && node.left.type === "Identifier") { /* BRIO branch: execute — Accept node.type === "AssignmentExpression" && node.left.type === "Identifier". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const v = node.operator === "=" ? readNumber(node.right) : undefined; if (v !== undefined) values.set(node.left.name,v); else values.delete(node.left.name);}
            else if (node.type === "IfStatement") { /* BRIO branch: execute — Accept node.type === "IfStatement". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const test = readNumber(node.test); if (test !== undefined) execute(test ? node.consequent : node.alternate); else { /* BRIO branch: execute — Alternative for test !== undefined. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ invalidate(node.consequent); invalidate(node.alternate);}}
            else if (node.type === "BlockStatement") node.body.forEach(execute);
            else if (node.type === "SequenceExpression") node.expressions.forEach(execute);
            else if (!["FunctionDeclaration","EmptyStatement"].includes(node.type)) invalidate(node);
        };
        const fn = ast.body.find(/* BRIO expr: numericSourceConstants / ast.body.find callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ n => n.type === "ExpressionStatement" && n.expression?.type === "CallExpression" && n.expression.callee?.type === "FunctionExpression")?.expression.callee;
        (fn?.body.body || ast.body).forEach(execute);
        return values;
    };
    const /* BRIO: completeSourceAudit
     * Export reconstructable raw chunks and parse the native source as data. Source capture has its own 2M-character cap and SHA identity.
     */
    completeSourceAudit = async (raw, url) => { /* BRIO block: completeSourceAudit — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */
        const size = 9000, count = Math.ceil(raw.length / size);
        if (raw.length > 2e6) { /* BRIO branch: completeSourceAudit — Accept raw.length > 2e6. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ deep.source = {url, characters: raw.length, captured: false, reason: "2M source cap"}; deepReport(); return;}
        // JSON lines reconstruct exact raw source; no escape decoding or evaluation.
        for (let i = 0; i < count; i++) log("FULL NATIVE SOURCE CHUNK", {url, index: i, count, text: raw.slice(i * size, (i + 1) * size)});
        let hash = null; try { /* BRIO guarded: completeSourceAudit — Keep the existing exception boundary for completeSourceAudit. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw))), /* BRIO expr: completeSourceAudit / Array.from callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ b => b.toString(16).padStart(2, "0")).join("");} catch (_) { /* BRIO fallback: completeSourceAudit — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        try { /* BRIO guarded: completeSourceAudit — Keep the existing exception boundary for completeSourceAudit. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */
            const ast = parseNative(raw, {ecmaVersion: "latest", sourceType: "script", allowReturnOutsideFunction: true}), strings = [], members = new Map, assets = new Map, remappers = [], numericObjects = [], constants = new Map, objectNames = new WeakMap, dictionaries = new Map, registrations = [];
            const walk = node => { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (!node || typeof node !== "object") return;

                // V49 supplied scheme.js is only a deployment flag. Audit the actual INTERNAL decoder-key remapper.
                // This is source text/AST evidence, never execution; retain bounded complete function text for handoff.
                if (node.type === "FunctionDeclaration" && node.id?.name === "éèé") remappers.push(node);
                if (node.type === "VariableDeclarator" && node.init?.type === "ObjectExpression") objectNames.set(node.init, node.id?.name);
                if (node.type === "ObjectExpression") numericObjects.push(node);
                if (node.type === "CallExpression" && node.callee?.type === "MemberExpression" && (node.callee.property?.name || node.callee.property?.value) === "ÃEÅ" && ["player","chest","object","gun","ammo","spellfield","airdrop","bullet","throwable","car","baller"].includes(node.arguments[0]?.value)) registrations.push(node);
                if (node.type === "Literal" && typeof node.value === "string") strings.push({value: node.value, at: node.start});
                if (node.type === "MemberExpression") { /* BRIO branch: walk — Accept node.type === "MemberExpression". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const key = node.computed ? node.property?.value : node.property?.name; if (typeof key === "string") { /* BRIO branch: walk — Accept typeof key === "string". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const a = members.get(key) || []; a.push(node.start); members.set(key, a);}}
                if (node.type === "Property" && typeof node.value?.value === "string" && /^(?:\.?\/)?buildart\//.test(node.value.value)) { /* BRIO branch: walk — Accept node.type === "Property" && typeof node.value?.value === "string" && /^(?:\.?\/)?buildart\//.test(node.value.v. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const key = node.key.name || node.key.value; if (typeof key === "string") { /* BRIO branch: walk — Accept typeof key === "string". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  assets.set(key, norm(node.value.value)); assets.set(key.toLowerCase(), norm(node.value.value)); }}
                if (node.type === "AssignmentExpression" && node.left?.type === "MemberExpression" && typeof node.right?.value === "string") { /* BRIO branch: walk — Accept node.type === "AssignmentExpression" && node.left?.type === "MemberExpression" && typeof node.right?.value ===. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const key = node.left.computed ? node.left.property?.value : node.left.property?.name; if (typeof key === "string" && node.right.value.length < 100 && node.left.object?.type === "Identifier") { /* BRIO branch: walk — Accept typeof key === "string" && node.right.value.length < 100 && node.left.object?.type === "Identifier". Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ const owner = node.left.object.name, map = dictionaries.get(owner) || new Map; map.set(key, node.right.value); dictionaries.set(owner, map);}}
                for (const [key, v] of Object.entries(node)) if (!['start','end','loc'].includes(key)) { /* BRIO branch: walk — Accept !['start','end','loc'].includes(key). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  if (Array.isArray(v)) { /* BRIO branch: walk — Accept Array.isArray(v). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */  for (const x of v) if (x?.type) walk(x); } else if (v?.type) walk(v); }
            };
            walk(ast);
            for (const fn of remappers.slice(0,2)) log("SOURCE PACKET REMAPPER", {start:fn.start,end:fn.end,source:raw.slice(fn.start,Math.min(fn.end,fn.start+1800)),note:"V49 source evidence: internal recursive key rename. Unknown fields are retained, not a contents generator; no server-absence conclusion."});
            if (assets.size) { /* BRIO block V52: completeSourceAudit — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ S.hudAssetPaths = assets;S.weaponCatalog=new Set([...GUN_TYPES].filter(/* BRIO expr V52: completeSourceAudit — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ type=>assets.has(type)));log("V53 WEAPON CATALOG",{types:[...S.weaponCatalog],rarities:{gold:4,red:5},limits:"client gun artwork only; gold spawn eligibility unresolved; actual pickups matched"});}
            for (const [owner, map] of dictionaries) if ([...map.values()].includes("isPreview") || [...map.values()].includes("weaponSlots")) { /* BRIO branch: completeSourceAudit — Accept [...map.values()].includes("isPreview") || [...map.values()].includes("weaponSlots"). Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ for (const [k,v] of map) schemaFields.set(k,v); log("DEEP FIELD DICTIONARY", {owner, entries: [...map]});}
            for (const call of registrations) { /* BRIO loop: completeSourceAudit — Iterate registrations. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */
                const kind = call.arguments[0].value;
                for (let i = 1; i < call.arguments.length && i < 5; i++) { /* BRIO loop: completeSourceAudit — Iterate i < call.arguments.length && i < 5. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */
                    const fn = call.arguments[i]; if (!fn || !["FunctionExpression","ArrowFunctionExpression"].includes(fn.type)) continue;
                    const text = raw.slice(fn.start, fn.end), count = Math.ceil(text.length / 9000);
                    log("DEEP CALLBACK STRUCTURE", {kind, phase: ["create","frame","update","remove"][i-1], start: fn.start, end: fn.end, parameters: fn.params.map(/* BRIO expr: completeSourceAudit / fn.params.map callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ x=>x.name || x.type), chunks: count});
                    for (let chunk = 0; chunk < count; chunk++) log("SOURCE CALLBACK CHUNK", {kind, phase: ["create","frame","update","remove"][i-1], index: chunk, count, text: text.slice(chunk*9000,(chunk+1)*9000)});
                }
            }
            for (const object of numericObjects) { /* BRIO loop: completeSourceAudit — Iterate numericObjects. Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */
                if (objectNames.get(object) !== "äèä") continue;
                const resolved = numericSourceConstants(ast, object.start);
                const pairs = object.properties.filter(/* BRIO expr: completeSourceAudit / object.properties.filter callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ x => typeof (x.key?.value || x.key?.name) === "string").map(/* BRIO expr: completeSourceAudit / object.properties.filter(x => typeof (x.key?.value || x.key?.name) === "string").map callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ x => [String(x.key.value || x.key.name).toLowerCase(), typeof x.value?.value === "number" ? x.value.value : resolved.get(x.value?.name)]).filter(/* BRIO expr: completeSourceAudit / object.properties.filter(x => typeof (x.key?.value || x.key?.name) === "string").map(x => callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ x => Number.isInteger(x[1]) && x[1] >= 0 && x[1] < 5);
                if (pairs.length > (S.ammoTypeMap?.size || 3)) { /* BRIO branch: completeSourceAudit — Accept pairs.length > (S.ammoTypeMap?.size || 3). Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ S.ammoTypeMap = new Map(pairs); for(const [type,index]of pairs)if(index>=0&&index<=4&&assets.has(type))GUN_TYPES.add(type);S.weaponCatalog=new Set([...GUN_TYPES].filter(/* BRIO expr V52: completeSourceAudit — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ type=>assets.has(type)));log("V53 DYNAMIC GUN CHOICES",{types:[...S.weaponCatalog],source:"native ammo table (0..4) plus exact item assets and known gun constructors",goldEligibility:"unresolved; runtime pickups only"}); log("NATIVE AMMO TYPE MAP", {at: object.start, entries: pairs, note: "AST scalar arithmetic/alias/branch resolution; live slot emblem takes precedence; unknowns remain unknown"});}
            }
            const meanings = [...schemaFields].filter(/* BRIO expr: completeSourceAudit / [...schemaFields].filter callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ ([k,v]) => /droid|wander|bot|npc|ai|chest|content|loot|seed|fish|drop|object|ammo|weapon/i.test(v));
            for (const [key, meaning] of meanings) log("DEEP SEMANTIC REFERENCES", {field: key, meaning, total: members.get(key)?.length || 0, references: (members.get(key) || []).slice(0, 120).map(/* BRIO expr: completeSourceAudit / (members.get(key) || []).slice(0, 120).map callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ at => ({at, excerpt: raw.slice(Math.max(0, at - 180), at + 450)})), capped: (members.get(key)?.length || 0) > 120});
            log("DEEP SOURCE STRUCTURE", {strings: strings.length, properties: members.size, assets: assets.size, schemaFields: schemaFields.size, semanticStrings: strings.filter(/* BRIO expr: completeSourceAudit / strings.filter callback — Parse and retain bounded complete raw source/AST evidence; never execute source or infer server absence. */ x => /^(?:bot|isbot|isai|npc|droid|wander|seed|loot|contents|chest|airdrop|bubbles|ammocrate|grenadecrate|x|y|z|setID)$/i.test(x.value)), evaluation: false});
            deep.source = {url, characters: raw.length, chunks: count, sha256: hash, captured: true, astParsed: true};
        } catch (e) { /* BRIO fallback: completeSourceAudit — Handle failure in completeSourceAudit through its existing fallback/report path; optional native fields may be unavailable. */ deep.source = {url, characters: raw.length, chunks: count, sha256: hash, captured: true, astParsed: false, parseError: String(e)};}
        deepReport();
    };

    const schemaFields = new Map;
    const /* BRIO: sourceSchemaAudit
     * Map obfuscated native fields to source meanings without treating dictionary presence as a classifier/content list.
     */
    sourceSchemaAudit = src => { /* BRIO block: sourceSchemaAudit — Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
        const anchor = src.indexOf('="isPreview"'), start = Math.max(0, anchor - 1600), end = anchor < 0 ? 0 : Math.min(src.length, anchor + 18e3), region = src.slice(start, end), pairs = [];
        for (const m of region.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*["']([^"'\n]{1,70})["']/g)) { /* BRIO loop: sourceSchemaAudit — Iterate region.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*["']([^"'\n]{1,7. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
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
            botCandidates: pairs.filter(/* BRIO expr: sourceSchemaAudit / pairs.filter callback — Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */ x => /bot|npc|(?:^|_)ai(?:$|_)|computerplayer/i.test(x.meaning)),
            contentsCandidates: pairs.filter(/* BRIO expr: sourceSchemaAudit / pairs.filter callback — Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */ x => /contents|loot|seed|chest|drop|fish|weaponSlots|rarity|resources|object/i.test(x.meaning)),
            note: "Dictionary assignments only, not cosmetic names. isPreview is not a bot discriminator. No-hit does not establish server absence."
        });
        for (const kind of [ "player", "chest", "object" ]) { /* BRIO loop: sourceSchemaAudit — Iterate [ "player", "chest", "object" ]. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
            const token = '.ÃEÅ("' + kind + '"', at = src.indexOf(token);
            if (at < 0) continue;
            let pos = at + token.length, callbacks = 0;
            while (callbacks < 4) { /* BRIO loop: sourceSchemaAudit — Iterate callbacks < 4. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
                const f = src.indexOf("function(", pos);
                if (f < 0 || f - pos > 500) break;
                const open = src.indexOf("{", f);
                let depth = 0, quote = "", escape = false, close = -1;
                for (let i = open; i < Math.min(src.length, open + 12e4); i++) { /* BRIO loop: sourceSchemaAudit — Iterate i < Math.min(src.length, open + 12e4). Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
                    const c = src[i];
                    if (quote) { /* BRIO branch: sourceSchemaAudit — Accept quote. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
                        if (escape) escape = false; else if (c === "\\") escape = true; else if (c === quote) quote = "";
                        continue;
                    }
                    if (c === '"' || c === "'" || c === "`") { /* BRIO branch: sourceSchemaAudit — Accept c === '"' || c === "'" || c === "`". Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
                        quote = c;
                        continue;
                    }
                    if (c === "{") depth++;
                    if (c === "}" && ! --depth) { /* BRIO branch: sourceSchemaAudit — Accept c === "}" && ! --depth. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
                        close = i + 1;
                        break;
                    }
                }
                if (close < 0) break;
                const body = src.slice(f, close), phase = [ "create", "frame", "update", "remove" ][callbacks++], mappings = [];
                for (const m of body.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)/g)) { /* BRIO loop: sourceSchemaAudit — Iterate body.matchAll(/([A-Za-z_$À-ÿ][\w$À-ÿ]*)\.([A-Za-z_$À-ÿ][\w$À-ÿ]*)\s*=\s*([A-Za-z_$À-ÿ][\w$. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
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
        for (const term of [ "inv0", "inv1", "ammo0", "wood.png", "isPreview", "lootSeed", "contents", "botNames", "isBot", "createWaypoint" ]) { /* BRIO loop: sourceSchemaAudit — Iterate [ "inv0", "inv1", "ammo0", "wood.png", "isPreview", "lootSeed", "contents", "botNames", "i. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
            let at = src.indexOf(term, term === "isPreview" ? 0 : 18e4), n = 0;
            while (at >= 0 && n++ < 3) { /* BRIO loop: sourceSchemaAudit — Iterate at >= 0 && n++ < 3. Record source dictionary/callback meanings read-only; isPreview is not a bot classifier. */
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
    replicaStateAudit = o => { /* BRIO block: replicaStateAudit — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        if (!o || replicaAuditSeen.has(o) || S.replicaAuditCount >= 80) return;
        const kind = isPlayer(o) ? "player" : reconKind(o);
        if (!kind) return;
        replicaAuditSeen.add(o);
        S.replicaAuditCount = (S.replicaAuditCount || 0) + 1;
        const entries = [], seen = new Set;
        function walk(v, path, depth) { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!v || typeof v !== "object" || seen.has(v) || depth > 2 || seen.size >= 60 || v instanceof Node || ArrayBuffer.isView(v)) return;
            seen.add(v);
            for (const key of Object.getOwnPropertyNames(v).slice(0, 160)) { /* BRIO loop: walk — Iterate Object.getOwnPropertyNames(v).slice(0, 160). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if ([ "parent", "ÁÄ", "â", "Eâ", "head", "Ëå", "ÄA", "canvas" ].includes(key)) continue;
                let x;
                try { /* BRIO guarded: walk — Keep the existing exception boundary for walk. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    x = v[key];
                } catch (_) { /* BRIO fallback: walk — Handle failure in walk through its existing fallback/report path; optional native fields may be unavailable. */
                    continue;
                }
                const label = schemaFields.get(key) || key;
                if (x == null || [ "number", "boolean", "string" ].includes(typeof x)) { /* BRIO branch: walk — Accept x == null || [ "number", "boolean", "string" ].includes(typeof x). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    const registrationAudit = src => { /* BRIO block: registrationAudit — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        for (const kind of [ "player", "chest", "object", "spellfield" ]) { /* BRIO loop: registrationAudit — Iterate [ "player", "chest", "object", "spellfield" ]. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const token = '.ÃEÅ("' + kind + '"', start = src.indexOf(token);
            if (start < 0) continue;
            const next = src.indexOf(".ÃEÅ(", start + token.length), end = Math.min(next < 0 ? src.length : next, start + 1e5), text = src.slice(start, end), fields = [ ...text.matchAll(/([\w$À-ÿ]+)\.([\w$À-ÿ]+)\s*=\s*([\w$À-ÿ]+)\.([\w$À-ÿ]+)/g) ].slice(0, 160).map(/* BRIO expr: registrationAudit / [ ...text.matchAll(/([\w$À-ÿ]+)\.([\w$À-ÿ]+)\s*=\s*([\w$À-ÿ]+)\.([\w$À-ÿ]+)/g) ].slice(0, 160).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ m => ({
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
            for (const word of [ "AÀ", "E_", "loot", "contents", "random", "isBot", "npc" ]) { /* BRIO loop: registrationAudit — Iterate [ "AÀ", "E_", "loot", "contents", "random", "isBot", "npc" ]. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                let at = text.indexOf(word), n = 0;
                while (at >= 0 && n++ < 3) { /* BRIO loop: registrationAudit — Iterate at >= 0 && n++ < 3. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
    resetMonochrome = () => { /* BRIO block: resetMonochrome — Remove only BRIO grayscale state and restore saved native canvas filters. */
        D.documentElement.removeAttribute("data-brio-mono-page");
        for (const [canvas, old] of monoCanvases) { /* BRIO loop: resetMonochrome — Iterate monoCanvases. Remove only BRIO grayscale state and restore saved native canvas filters. */
            canvas.style.filter = old;
            canvas.removeAttribute("data-brio-mono");
        }
        monoCanvases.clear();
    };
    const /* BRIO: syncMonochrome
     * Apply at Play/toggle immediately. Root CSS covers new unmarked canvases until this helper composes their original filter; no MutationObserver or render hook.
     */
    syncMonochrome = enabled => { /* BRIO block: syncMonochrome — Maintain the user-proven page/canvas grayscale adapters and restore the prior filters when disabled. */
        if (!enabled) { /* BRIO branch: syncMonochrome — Accept !enabled. Maintain the user-proven page/canvas grayscale adapters and restore the prior filters when disabled. */  resetMonochrome(); return; }
        D.documentElement.setAttribute("data-brio-mono-page", "");
        for (const canvas of D.querySelectorAll("canvas:not(#playerPreview)")) { /* BRIO loop: syncMonochrome — Iterate D.querySelectorAll("canvas:not(#playerPreview)"). Maintain the user-proven page/canvas grayscale adapters and restore the prior filters when disabled. */
            if (monoCanvases.has(canvas)) continue;
            const old = canvas.style.filter;
            monoCanvases.set(canvas, old);
            canvas.style.filter = (old && old !== "none" ? old + " " : "") + "grayscale(1)";
            canvas.setAttribute("data-brio-mono", "");
        }
    };
    /* BRIO: nativeDrawGates (V50; new challenge adapters, live-pending)
     * Own-method wrappers affect only reached native drawable instances, never Canvas/RAF/protocol.
     * Gating éa suppresses the whole branch (including future children), while native opacity, fades,
     * lifetimes, physics and culling keep their original values. Disabled calls preserve this/args/result/errors.
     * Native clones bypass source-widget gates; BRIO-owned nodes never become capture candidates.
     * V52 uses a4096 concurrently reached instance cap with central retirement/restoration; coverage includes suppressed calls.
     */
    /* BRIO: V52 bounded gate lifecycle — the budget limits concurrently reached nodes, not all particles
     * ever created. Restore disconnected instances centrally; never store a per-particle cleanup closure.
     * Reserve1024 slots for essential world/HUD branches. Reclaim disconnected instances at256 insertions/each feature tick.
     * Parent links AND actual native child-array membership detect stale links left by removal/culling.
     * No global/prototype render hook, node deletion, opacity/resource/physics changes or automatic challenge cycle. */
    const nativeDrawGates=new Map,nativeVisualCoverage=new Map,nativeVisualSuppressed=new Map,remoteInfoRecords=new Map;
    let infoCanvases=new WeakSet,pickupCanvases=new WeakSet,nativeCandidateCache=new WeakMap,gateInsertions=0;
    const gateAnchor=node=>{ /* Resolve a reached native root with bounded depth; unattached constructors update on first draw. */ let root=node;for(let i=0;i<16&&root.parent;i++)root=root.parent;return root;};
    const restoreNativeGate=(node,record)=>{ /* Restore only our own wrapper; do not overwrite a later native method replacement. */ if(node['éa']===record.wrapper){ /* BRIO block V52: restoreNativeGate — Restore only our own wrapper descriptor and release the retired instance reference. */ if(record.descriptor)Object.defineProperty(node,'éa',record.descriptor);else delete node['éa'];}nativeDrawGates.delete(node);nativeCandidateCache.delete(node);};
    let gateRetirementCursor=null;
    const reclaimNativeGates=(budget=256)=>{
        /* V53 fixed work cap, including high occupancy. The old>=3072 condition swept the entire map
         * for every attempted insertion. Advance a retained iterator; parent membership sets are built
         * once per pass, so thousands of siblings no longer multiply linear includes scans. */
        let retired=0,visits=0;const memberships=new WeakMap;
        if(!gateRetirementCursor)gateRetirementCursor=nativeDrawGates.entries();
        while(visits++<budget){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ let next=gateRetirementCursor.next();if(next.done){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ gateRetirementCursor=null;break;}
            const [node,record]=next.value;let current=node,connected=true,depth=0;
            while(current.parent&&depth++<16){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ const parent=current.parent;let children=memberships.get(parent);if(!children){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ children=new Set;for(const key of ['âè','ÉE'])for(const child of parent[key]||[])children.add(child);memberships.set(parent,children);}
                if(!children.has(current)){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ connected=false;break;}current=parent;
            }
            if(record.anchor===node&&node.parent)record.anchor=current;
            if(!connected||current!==record.anchor&&!current.parent&&current!==node||!node.parent&&record.anchor!==node){ /* BRIO block V53: reclaimNativeGates — Restore disconnected native branches so historical particles cannot exhaust current capture capacity. */ restoreNativeGate(node,record);retired++;}
            else if(connected&&current!==record.anchor)record.anchor=current;
        }
        if(v53.perf)v53.perf.retirementVisits+=Math.min(visits,budget);S.visualGateRetired=(S.visualGateRetired||0)+retired;return retired;
    };

    const gateNativeDraw=(node,key,predicate,before)=>{
        /* Install one reversible own-instance dispatcher. Disabled calls preserve receiver/args/results/exceptions;
         * BRIO replicas bypass source gates. Suppressed counters describe draw attempts, never pixel proof. */
        if(!node||node.__brioHudClone||String(node.type||'').startsWith('brio'))return;
        let record=nativeDrawGates.get(node);
        if(!record){ /* BRIO block V52: gateNativeDraw — Gate reached own-instance native draws reversibly; preserve native state and delegate disabled calls. */
            const original=node['éa'],descriptor=Object.getOwnPropertyDescriptor(node,'éa');
            if(typeof original!=='function'||descriptor&&(!descriptor.configurable||!('value'in descriptor)))return;
            const transient=key==='trailParticles';if(++gateInsertions%256===0)reclaimNativeGates();
            const cap=transient?3072:4096;
            if(nativeDrawGates.size>=cap){ /* Keep core capacity available even during unusually dense active particles. */ S.visualGateCap=true;if(!S.visualGateCapKeys)S.visualGateCapKeys=new Set;if(!S.visualGateCapKeys.has(key)){ /* BRIO block V52: gateNativeDraw — Gate reached own-instance native draws reversibly; preserve native state and delegate disabled calls. */ S.visualGateCapKeys.add(key);log('NATIVE VISUAL GATE CAP',{cap,category:key,concurrent:true});}return;}
            record={original,descriptor,gates:new Map,anchor:gateAnchor(node)};
            const wrapper=function(...args){
                /* Native preflight may discover replacement held/damage children; predicates always read effective settings. */
                const timing=v53PerfBegin('native gate preflight');
                if(!this?.__brioHudClone){ /* BRIO block V52: wrapper — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
                    if(record.anchor===this&&this.parent)record.anchor=gateAnchor(this);
                    const settings=exFast();for(const [category,rule]of record.gates){ /* BRIO block V52: wrapper — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ rule.before?.(args[0]);if(rule.predicate(settings)){ /* BRIO block V52: wrapper — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ nativeVisualSuppressed.set(category,(nativeVisualSuppressed.get(category)||0)+1);v53PerfEnd('native gate preflight',timing);return;}}
                }
                v53PerfEnd('native gate preflight',timing);return Reflect.apply(original,this,args);
            };
            Object.defineProperty(node,'éa',{value:wrapper,writable:true,configurable:true,enumerable:descriptor?.enumerable??false});record.wrapper=wrapper;nativeDrawGates.set(node,record);
        }
        if(!record.gates.has(key)){ /* Category totals record installations over this match, separate from active occupancy. */ record.gates.set(key,{predicate,before});nativeVisualCoverage.set(key,(nativeVisualCoverage.get(key)||0)+1);if(nativeVisualCoverage.get(key)===1)log('NATIVE VISUAL BRANCH',{category:key,type:node.type||null,path:hudPath(node),mode:'scoped éa gate; native state unchanged'});}
    };
    const v53Audit=(detail=false)=>{
        /* BRIO: v53Audit — passive evidence replaces manual exhaustive option cycles. Every enabled category is
         * reached/unobserved plus suppressed draw count; missing capture is explicit. This does NOT certify pixels. */
        const expected={playersInvisible:['playerPhysical','trailParticles'],lootInvisible:['lootAll','lootArt','lootRarity'],buildsInvisible:['placedBuild','buildPreview'],noMinimap:['mapHud','fullMap'],noCrosshair:['crosshair'],noInventoryHud:['inventoryHud'],invisibleStorm:['stormWorld','stormMap'],noHealthShieldHud:['healthShieldHud'],noInfoPopups:['announcements','killFeed','infoPrompt','eliminationBanner','waitingInfo'],invisibleProjectiles:['projectile'],hideWeapons:['heldWeapons'],noStormTimer:['stormCountdown'],noPickupLabels:['pickupPopup'],noWeaponProgress:['reloadProgress','chargeProgress'],noHitMarker:['hitConfirmation'],noDamageNumbers:['damageNumbers'],noDamageDirection:['damageDirection']},e=exFast(),rows=[],active=new Map;
        for(const record of nativeDrawGates.values())for(const key of record.gates.keys())active.set(key,(active.get(key)||0)+1);
        for(const [id,keys]of Object.entries(expected))if(e[id])for(const key of keys)rows.push({challenge:id,branch:key,reached:nativeVisualCoverage.has(key),activeAdapters:active.get(key)||0,suppressedDraws:nativeVisualSuppressed.get(key)||0});
        return {epoch:S.runEpoch,rows,activeAdapters:nativeDrawGates.size,retiredAdapters:S.visualGateRetired||0,capHit:!!S.visualGateCap,shotComparisons:[...v53.shotChecks.values()].map(/* BRIO expr V53: v53Audit — Report bounded reached/unobserved/suppressed native draw evidence without claiming pixel proof. */ r=>({...r,examples:detail?r.examples:[]})),outlineAssets:v53.outlines.size,performance:v53PerfReport(),spreadMeasurement:'v53 modular signed angles; stable aim/stationary samples by gun/rarity; observed envelope only',scope:'native draw coverage; unobserved conditions are not failures; visible leak reporting still required'};
    };
    /* BRIO: pickupPopupHidden (V50)
     * Native closeR/gunType updates set local ÁãÀ before rasterizing the shared popup. Restrict Mask loot to
     * actual gun/consumable/ammo/material names; native container/vehicle prompts remain independent.
     * The composite additionally suppresses all native pickup prompts because its containers are hidden too.
     */
    const PICKUP_LOOT_TYPES = new Set(["mini","pot","giantsnowball","flex","candycane","bandages","medkit","feesh","bluefeesh","alezfeesh","tryagainfeesh","thatfeesh","snowball","icicle","grenade","landmine","mirv","smokegrenade","invgravitynade","gravitynade","flashbang","molotov","flexsplash","wood","brick","metal","gear","scrap","stack0","stack1","stack2","stack3","stack4"]),
        pickupPopupHidden = /* BRIO expr: pickupPopupHidden — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ e => !!e.noInfoPopups || !!e.goodFlippinLuck || (!!e.maskLootPopup || !!e.noPickupLabels) && (GUN_TYPES.has(String(S.renderer?.["ÁãÀ"]||"").toLowerCase()) || PICKUP_LOOT_TYPES.has(String(S.renderer?.["ÁãÀ"]||"").toLowerCase()));
    /* BRIO: nativeVisualCandidate (V50; evidence from supplied engine + main.css)
     * Gameplay HUD is drawn in native scene graphs; main.css has no gameplay HUD selectors.
     * Match actual constructor signatures/relationships, not arbitrary screen regions or private globals.
     * Invoked by the existing bounded scene walk and scoped rendered-array/add observers. No new broad hook.
     * Always bind these small adapters so later toggles work without waiting for another native constructor.
     */
    const nativeVisualCandidate = node => { /* BRIO block: nativeVisualCandidate — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
        if (!node || typeof node !== "object" || node.__brioHudClone || String(node.type||"").startsWith("brio")) return;
        // Broad discovery can see diagnostic strings/numbers and incomplete parents; never use them as weak keys.
        const nodes = [node,node.parent].filter(/* BRIO expr: nativeVisualCandidate / [node,node.parent].filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => n && typeof n === "object");
        for (const root of nodes) {
            // Generic HUD/storm/popup scans fit48 children; the complete inventory validates up to128 before this cap.
            // A world scene with thousands of loot nodes must never be copied once per child during render capture.
            if(root["Ée"]==="mapScene")gateNativeDraw(root,"fullMap",/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noMinimap);
            if (root["Ée"] === "borderScene") gateNativeDraw(root,"stormWorld",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.invisibleStorm);
            const front = root["âè"], back = root["ÉE"], length = (front?.length||0)+(back?.length||0), now = performance.now();
            v53InventoryRoot(root);
            if (length>48) continue;
            const previous = nativeCandidateCache.get(root);
            if (previous && previous.front===front && previous.back===back && previous.length===length && now-previous.at<1000) continue;
            nativeCandidateCache.set(root,{front,back,length,at:now});if(v53.perf)v53.perf.hudScans++;
            const children = [...(root["âè"]||[]),...(root["ÉE"]||[])].filter(/* BRIO expr: nativeVisualCandidate / [...(root["âè"]||[]),...(root["ÉE"]||[])].filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => n && !n.__brioHudClone && !String(n.type||"").startsWith("brio"));
            v53NativeCandidate(root,children);
            const color = /* BRIO expr: color — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ n => String(n?.["Äe"] || n?.fillStyle || "").toUpperCase();
            /* BRIO: V52 source-backed complete HUD signatures. Gate the inventory parent rather than only
             * occupied invN images: its six empty rectangles, pickaxe, lifted selection and build binds share it.
             * Four material units in the immediate children validate this exact root; no screen-region guesses. */
            /* V53 complete inventory recognition happens before the48-child generic cap. It follows
             * the source's material wrapper→rectangle→icon depth; old shallow occupied-slot logic failed in Hell. */
            /* Feed rows have exactly three left-aligned text cells and a black backing; announcements carry
             * the source âáE lifetime plus yellow text. Native fades/lifetimes and post-game DOM remain native. */
            const texts=children.filter(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.type==='text'),black=children.filter(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>color(n)==='#000'&&n.type==='rectangle');
            // Source waiting banner has ÈåÈ state and a35px centered message with black backing.
            if(Object.hasOwn(root,'ÈåÈ')&&texts.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.fontSize===35&&n.align==='center')&&black.length)gateNativeDraw(root,'waitingInfo',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups);
            // Elimination banner is rasterized offscreen from two35px centered labels and a black rectangle.
            // Hide the entire raster root and tag its canvas; the separately drawn cached HUD sprite is gated below.
            if(texts.length===2&&texts.every(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.fontSize===35&&n.align==='center')&&texts.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>['Eliminated','Knocked'].includes(n.text))&&black.length){ /* BRIO block V52: nativeVisualCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
                gateNativeDraw(root,'eliminationRaster',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups,ctx=>{ /* BRIO block V52: nativeVisualCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ if(ctx?.canvas?.tagName==='CANVAS')infoCanvases.add(ctx.canvas);});
            }
            if(Object.hasOwn(root,'âáE')&&texts.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>String(n.fillStyle||n['Äe']).toUpperCase()==='#E9B116')&&black.length)gateNativeDraw(root,'announcements',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups);
            if(texts.length===3&&black.length===1&&texts.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>['Eliminated','Knocked','Infected'].includes(n.text))&&texts.every(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.align==='left'&&n.fontSize===26))gateNativeDraw(root.parent||root,'killFeed',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups);
            for(const text of texts)if(/^(?:Press (?:Q to Build|Tab to Manage Inventory|Space to Pick Up)|Eliminated|Knocked)$/.test(String(text.text||'')))gateNativeDraw(text,'infoPrompt',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups||!!e.noInventoryHud&&/^Press (?:Q|Tab)/.test(text.text));
            /* Genuine placed builds include stage art and a blue underlay, whereas a live placement preview
             * has blue art only. Suppress their complete root including native health labels/new stage children. */
            const stageArt=children.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>/\/buildart\/(?:wood|brick|metal|fortified|campfire|boostpad|shield|drill)[0-2]\.png$/i.test(hudPath(n)));
            if(stageArt&&children.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>/\/buildart\/blue[^/]+\.png$/i.test(hudPath(n))))gateNativeDraw(root.parent||root,'placedBuild',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.buildsInvisible);
            /* BRIO: V52 ground loot raster signature — native rarity sprites are a200px square canvas,
             * drawn100px with canvas.Äe set by the rarity constructor, and paired with110px pickup art.
             * Independent branch gates preserve all five levels and future particles; do not gate HUD inventory. */
            const rarity=children.find(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n['À']?.['ÁÄ']?.tagName==='CANVAS'&&n['À']['ÁÄ'].width===200&&n['À']['ÁÄ'].height===200&&typeof n['À']['ÁÄ']['Äe']==='string'&&n.width===100&&n.height===100);
            const pickup=children.find(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n!==rarity&&n['À']&&n.width>=70&&n.width<=140&&n.height>=70&&n.height<=140&&/\/buildart\//i.test(hudPath(n)));
            if(rarity&&pickup){ /* Source constructor creates exactly these art/effect siblings; root gating retains particles. */ gateNativeDraw(root,'lootAll',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.lootInvisible&&e.lootMaskTier==='all');gateNativeDraw(pickup,'lootArt',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.maskLootArt);gateNativeDraw(rarity,'lootRarity',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.cleanLoot);}
            // Native borderScene contains only the four world storm shade rectangles. Map overlay is separate.
            // Minimap texture is the square, custom-painted child of the waiting/player/kills counter holder.
            if (children.some(/* BRIO expr: nativeVisualCandidate / children.some callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => /\/(?:waitingIcon|movingIcon|timer|storm|playersIcon)\.png$/i.test(hudPath(n)))) { /* BRIO branch: nativeVisualCandidate — Accept children.some(n => /\/(?:waitingIcon|movingIcon|timer|storm|playersIcon)\.png$/i.test(hudPath(n))). Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
                for (const map of children) if (Number(map.width)>=200 && map.width===map.height && Object.hasOwn(map,"Eââ") && /aaÀ|aÀÁ|drawImage/.test(String(map["Eââ"])))
                    { /* V52 No map includes the complete player/kill/timer holder, as requested. */ gateNativeDraw(root,"mapHud",/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noMinimap);gateNativeDraw(map,"minimap",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.noMinimap);}
            }
            // The map overlay scene has four red shade rectangles + a50px outlined white/black storm square.
            const stormBorder = children.find(/* BRIO expr: nativeVisualCandidate / children.find callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => Number(n.lineWidth)===50 && ["#FFF","#000"].includes(color(n)) && !n["À"]);
            const shades = children.filter(/* BRIO expr: nativeVisualCandidate / children.filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => color(n)==="#F00" && !n["À"] && Number.isFinite(n.width) && Number.isFinite(n.height));
            if (Array.isArray(root["Éèå"]) && stormBorder && shades.length===4) { /* BRIO branch: nativeVisualCandidate — Accept Array.isArray(root["Éèå"]) && stormBorder && shades.length===4. Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
                for (const n of [...shades,stormBorder]) gateNativeDraw(n,"stormMap",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.invisibleStorm);
            }
            // Five white rectangles form the native crosshair; its red four-arm hit marker shares this root.
            const arms = children.filter(/* BRIO expr: nativeVisualCandidate / children.filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => color(n)==="#FFF" && !n["À"] && !n.lineWidth && Number.isFinite(n.width) && Number.isFinite(n.height));
            if (arms.length===5 && arms.filter(/* BRIO expr: nativeVisualCandidate / arms.filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => n.height===20 && n.width<20).length===2 && arms.filter(/* BRIO expr: nativeVisualCandidate / arms.filter callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => n.width===20 && n.height<20).length===2 && arms.some(/* BRIO expr: nativeVisualCandidate / arms.some callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => n.width===n.height && n.width<20))
                gateNativeDraw(root,"crosshair",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.noCrosshair);
            // Health/shield icons identify only the native HUD rows; keep the selected-ammo counter above them.
            const health = children.find(/* BRIO expr: nativeVisualCandidate / children.find callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => /\/health\.png$/i.test(hudPath(n))), shield = children.find(/* BRIO expr: nativeVisualCandidate / children.find callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ n => /\/shield\.png$/i.test(hudPath(n)));
            if (health && shield) { /* BRIO branch: nativeVisualCandidate — Accept health && shield. Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
                const ys = [health["ë"]?.["Ä"],shield["ë"]?.["Ä"]];
                // V52: loaded/reserve ammo icon+two counts live above the health rows, outside èê inventory.
                // Gate their exact source40px-icon/same-Y group with No inventory; No health retains this group.
                const topY=Math.min(...ys.filter(Number.isFinite)),ammoIcon=children.find(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>n.width===40&&n.height===40&&n['À']&&Number(n['ë']?.['Ä'])<topY-40);
                if(ammoIcon)for(const n of children)if(n['ë']?.['Ä']===ammoIcon['ë']['Ä'])gateNativeDraw(n,'inventoryAmmoHud',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInventoryHud);
                // Native local name is a26px left-aligned label35px above the shield row.
                for(const n of children)if(n.type==='text'&&n.fontSize===26&&n.align==='left'&&n['ë']?.['Ä']===topY-35)gateNativeDraw(n,'infoPrompt',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups);

                for (const n of children) if (ys.includes(n["ë"]?.["Ä"]) || n["åÈ"] && n["Â$"])
                    gateNativeDraw(n,"healthShieldHud",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.noHealthShieldHud);
            }
            // Native popup root has explicit art/title/fill/stroke fields. Tag its offscreen canvas from a child
            // draw (discovery can occur after the parent's draw has already begun), then gate the cached sprite.
            if (root.stroke && root.fill && root["ÅÉ"] && root["ä"] && root["èèÆ"]===.8) { /* BRIO branch: nativeVisualCandidate — Accept root.stroke && root.fill && root["ÅÉ"] && root["ä"] && root["èèÆ"]===.8. Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
                for (const child of children) gateNativeDraw(child,"pickupRaster",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ () => false,ctx => { /* BRIO block: nativeVisualCandidate — gateNativeDraw callback. Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */
                    if (ctx?.canvas?.tagName === "CANVAS") pickupCanvases.add(ctx.canvas);
                });
            }
        }
        // Cached popup art is drawn in top, not in the otherwise private popup root. Weak identity survives redraws.

        if(/\/buildart\/redarrow\.png$/i.test(hudPath(node))&&node.parent&&(node.parent["âè"]?.length||0)+(node.parent["ÉE"]?.length||0)===1)gateNativeDraw(node.parent,"damageDirection",/* BRIO expr V53: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noDamageDirection);
        const image = node["À"]?.["ÁÄ"];
        // The popup is rasterized once during native startup, often BEFORE injection. Its cached top-scene
        // sprite has height120 and exactly8px canvas padding (ÁÀ$=8), with width changed by bannerWidth.
        // This complete source-backed relationship recovers an already-created cache without guessing a screen area.
        if (image?.tagName === "CANVAS" && node.parent?.["Ée"] === "top" && node.height===120 && node.width>=400 && node.width<=1200 && image.height===128 && image.width===node.width+8)
            pickupCanvases.add(image);
        // Recover a pre-created native elimination cache only under a validated gameplay HUD parent.
        // Its source canvas and displayed sprite both have height35+25=60 and exactly equal widths.
        if(image?.tagName==='CANVAS'&&image.height===60&&node.height===60&&node.width===image.width){ /* BRIO block V52: nativeVisualCandidate — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */
            const siblings=[...(node.parent?.['âè']||[]).slice(0,48),...(node.parent?.['ÉE']||[]).slice(0,48)];
            if(siblings.some(/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ n=>nativeDrawGates.get(n)?.gates.has('inventoryHud')||nativeDrawGates.get(n)?.gates.has('mapHud')))infoCanvases.add(image);
        }
        if(image&&infoCanvases.has(image))gateNativeDraw(node,'eliminationBanner',/* BRIO expr V52: nativeVisualCandidate — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ e=>!!e.noInfoPopups);
        if (image && pickupCanvases.has(image)) gateNativeDraw(node,"pickupPopup",pickupPopupHidden);
        // Trail pools and one-shot landing particles use these exact native art paths. Hide the drawable branch,
        // not its shared resource. Pools retain native opacity/lifetime; their future children are also silenced.
        // No reliable owner is stored on detached trail particles. The player challenge therefore silences ALL
        // trail particles (including local trails), explicitly stated in its UI; local body/held art stays visible.
        if (/\/(?:buildart|cosmetics\/trails)\/trail\d+-[01]\.png$/i.test(hudPath(node)))
            gateNativeDraw(node,"trailParticles",/* BRIO expr: nativeVisualCandidate / gateNativeDraw callback — Recognize source-backed scene relationships within existing capture caps; never gate arbitrary screen regions. V50 live-pending. */ e => !!e.playersInvisible || !!e.allTrailsInvisible || !!e.invisibleProjectiles);
    };
    /* BRIO: nativeInventoryChallenge (V50)
     * Template ownership identifies the native inventory common ancestor. Hide rows early as they arrive,
     * then hide the smallest ancestor containing >=5slot backgrounds + material + reserve ammo icons.
     * Reject health/map holders so a partial template cannot hide the whole game HUD. Clones bypass gates.
     */
    const nativeInventoryChallenge = () => { /* BRIO block: nativeInventoryChallenge — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */
        const templates = S.hudTemplates;
        if (!templates) return;
        for (const rec of [...templates.slots,...templates.materials,...templates.ammo]) { /* BRIO loop: nativeInventoryChallenge — Iterate [...templates.slots,...templates.materials,...templates.ammo]. Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */
            gateNativeDraw(rec.kind === "slots" ? rec.holder : rec.root,"inventoryHudUnit",/* BRIO expr: nativeInventoryChallenge / gateNativeDraw callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ e => !!e.noInventoryHud);
        }
        let root = templates.slots[0]?.holder, depth = 0;
        while (root && depth++<6) { /* BRIO loop: nativeInventoryChallenge — Iterate root && depth++<6. Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */
            const paths = hudWalk(root,240).filter(/* BRIO expr: nativeInventoryChallenge / hudWalk(root,240).filter callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ n => n!==root && !n.__brioHudClone).map(hudPath);
            if (paths.some(/* BRIO expr: nativeInventoryChallenge / paths.some callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ p => /\/(?:health|shield|playersIcon|waitingIcon|timer|storm)\.png$/i.test(p))) break;
            if (paths.filter(/* BRIO expr: nativeInventoryChallenge / paths.filter callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ p => /\/inv[0-6]\.png$/.test(p)).length>=5 && paths.some(/* BRIO expr: nativeInventoryChallenge / paths.some callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ p => /\/(?:wood|brick|metal|scrap)\.png$/.test(p)) && paths.some(/* BRIO expr: nativeInventoryChallenge / paths.some callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ p => /\/stack[0-4]\.png$/.test(p))) { /* BRIO branch: nativeInventoryChallenge — Accept paths.filter(p => /\/inv[0-6]\.png$/.test(p)).length>=5 && paths.some(p => /\/(?:wood|brick|metal|scrap)\.png$. Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */
                gateNativeDraw(root,"inventoryHud",/* BRIO expr: nativeInventoryChallenge / gateNativeDraw callback — Gate native inventory units/common ancestor while excluding BRIO clones and unrelated HUD widgets. V50 live-pending. */ e => !!e.noInventoryHud); break;
            }
            root = root.parent;
        }
    };
    /* BRIO: remoteInformation (V50; modifier exclusion/restore for the composite)
     * Preserve native parents/vertical offsets before attaching optional bars. Names/bars use reversible
     * opacity adapters; independent native name updates continue and are restored when the option is off.
     * A previously detached bar must be detached again when assistance is disabled, rather than left visible.
     */
    const remoteInformation = r => { /* BRIO block: remoteInformation — Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */
        if (isLocal(r) || !r["Eâ"]?.add) return;
        let record = remoteInfoRecords.get(r);
        if (!record) { /* BRIO branch: remoteInformation — Accept !record. Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */
            record = {bars:[]}; remoteInfoRecords.set(r,record);
            if (r["ÃÊ"]) lockOpacity(r["ÃÊ"],/* BRIO expr: remoteInformation / lockOpacity callback — Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */ e => !!e.playerNames,1);
            for (const [bar,y] of [[r["æÄ"],-100],[r["AÃå"],-114]]) if (bar) { /* BRIO branch: remoteInformation — Accept bar. Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */
                const saved = {bar,parent:bar.parent,y:bar["ë"]?.["Ä"],targetY:y,active:false}; record.bars.push(saved);
                lockOpacity(bar,/* BRIO expr: remoteInformation / lockOpacity callback — Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */ e => !!e.healthBars || !!e.numericHealthShield,1);
            }
            featureRestore.push(/* BRIO expr: remoteInformation / featureRestore.push callback — Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */ () => restoreRemoteInformation(record));
        }
        const enabled = !!exFast().healthBars || !!exFast().numericHealthShield;
        for (const saved of record.bars) { /* BRIO loop: remoteInformation — Iterate record.bars. Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */
            if (enabled) { /* BRIO branch: remoteInformation — Accept enabled. Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */
                if (saved.bar.parent !== r["Eâ"]) { /* BRIO branch: remoteInformation — Accept saved.bar.parent !== r["Eâ"]. Preserve native bar parents/offsets and opacity writes when optional assistance is disabled. */ saved.bar.parent?.remove?.(saved.bar); r["Eâ"].add(saved.bar);}
                if (saved.bar["ë"]) saved.bar["ë"]["Ä"] = saved.targetY;
                saved.active = true;
            } else restoreRemoteInformation({bars:[saved]});
        }
    }, restoreRemoteInformation = record => { /* BRIO block: restoreRemoteInformation — Restore native bar attachment and vertical offsets when assistance is disabled or the run ends. */
        for (const saved of record.bars) if (saved.active) { /* BRIO branch: restoreRemoteInformation — Accept saved.active. Restore native bar attachment and vertical offsets when assistance is disabled or the run ends. */
            if (saved.bar.parent !== saved.parent) { /* BRIO branch: restoreRemoteInformation — Accept saved.bar.parent !== saved.parent. Restore native bar attachment and vertical offsets when assistance is disabled or the run ends. */ saved.bar.parent?.remove?.(saved.bar); saved.parent?.add?.(saved.bar);}
            if (saved.bar["ë"]) saved.bar["ë"]["Ä"] = saved.y;
            saved.active = false;
        }
    };
    /* BRIO: syncFeatureSettings (V50)
     * Apply toggles to already reached objects immediately. Draw gates read current settings without rebuilding
     * native children; restore roof images that were blanked by the now-disabled modifier. No saved choices reset.
     */
    const syncFeatureSettings = () => { /* BRIO block: syncFeatureSettings — Apply effective changes immediately; restart saved assistance after the composite is disabled. */
        featureEx.at = -Infinity;
        const e = exFast();
        if (!e.transparentRoofs) { /* BRIO branch: syncFeatureSettings — Accept !e.transparentRoofs. Apply effective changes immediately; restart saved assistance after the composite is disabled. */
            for (const {w,old} of S.roofSaved.values()) w["ÁÄ"] = old;
            S.roofSaved.clear();
        }
        for (const r of collectPlayers()) { /* BRIO loop: syncFeatureSettings — Iterate collectPlayers(). Apply effective changes immediately; restart saved assistance after the composite is disabled. */
            featurePlayer(r);
            if (!isLocal(r) && (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo)) attachInv(r);
        }
        for (const o of collectWorld()) featureWorld(o);
        // Starting with the combined challenge creates no indicator timers. Restore them when saved assistance returns;
        // disabled modifiers stop their own timers rather than leaving stale arrows or relying on another Play.
        if (S.renderer) { /* BRIO branch: syncFeatureSettings — Accept S.renderer. Apply effective changes immediately; restart saved assistance after the composite is disabled. */
            if (e.nearestPlayer && !S.nearestTimer) S.nearestTimer = setInterval(nearestTick,250);
            if (!e.nearestPlayer && S.nearestTimer) { /* BRIO branch: syncFeatureSettings — Accept !e.nearestPlayer && S.nearestTimer. Apply effective changes immediately; restart saved assistance after the composite is disabled. */ clearInterval(S.nearestTimer); S.nearestTimer = 0;}
            if ((e.nearestChest || e.nearestAirdrop) && !S.indicatorTimer) S.indicatorTimer = setInterval(indicatorTick,500);
            if (!e.nearestChest && !e.nearestAirdrop && S.indicatorTimer) { /* BRIO branch: syncFeatureSettings — Accept !e.nearestChest && !e.nearestAirdrop && S.indicatorTimer. Apply effective changes immediately; restart saved assistance after the composite is disabled. */ clearInterval(S.indicatorTimer); S.indicatorTimer = 0;}
            if (e.identifyBots && !S.botTimer) botStart();
            if (!e.identifyBots && S.botTimer) { /* BRIO branch: syncFeatureSettings — Accept !e.identifyBots && S.botTimer. Apply effective changes immediately; restart saved assistance after the composite is disabled. */ clearInterval(S.botTimer); S.botTimer = 0;}
        }
        if (S.renderer && !S.meteorAutoTimer && nativeScanNeeded(e)) meteorAutoStart("visual settings changed");
        reclaimNativeGates();
            nativeInventoryChallenge(); indicatorTick(); syncMonochrome(!!e.monochrome);
    };

    const featureNodes = new Map, featureRestore = [], featureEx = {
        value: extrasState(),
        at: -Infinity
    }, indicatorStats = {}, humanLabels = new Map;
    const /* BRIO: exFast
     * Cache Extras briefly for drawable callbacks; do not repeatedly parse storage for each node within a frame.
     */
    exFast = () => { /* BRIO block: exFast — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const n = performance.now();
        if (n - featureEx.at > 500) { /* BRIO branch: exFast — Accept n - featureEx.at > 500. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            featureEx.value = extrasState();
            featureEx.at = n;
        }
        if(v53ModsPaused()){ /* BRIO block V53: exFast — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */
            const p=v53.perf;if(p.pausedSource!==featureEx.value){ /* BRIO block V53: exFast — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ p.pausedSource=featureEx.value;p.pausedSettings={...featureEx.value};for(const [id]of EXTRA.modifiers)if(id)p.pausedSettings[id]=false;}
            return p.pausedSettings;
        }
        return featureEx.value;
    }, /* BRIO: nativeNode
     * Create a BRIO-owned drawable compatible with reached native containers, clearly marked to avoid recursive discovery.
     */
    nativeNode = /* BRIO expr: nativeNode — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (draw, y = 0) => ({
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
        "Eââ"(ctx, s = 1) { /* BRIO block: Eââ — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            try { /* BRIO guarded: Eââ — Keep the existing exception boundary for Eââ. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                draw(ctx, Number.isFinite(s) && s > 0 ? s : 1);
            } catch (e) { /* BRIO fallback: Eââ — Handle failure in Eââ through its existing fallback/report path; optional native fields may be unavailable. */
                if (S.errors.length < 100) S.errors.push("native feature: " + String(e));
            }
        },
        "éa"(ctx, s = 1, alpha = 1) { /* BRIO block: éa — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (alpha <= 0) return;
            ctx.save();
            try { /* BRIO guarded: éa — Keep the existing exception boundary for éa. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                ctx.translate(this.ë.É / s, this.ë.Ä / s);
                ctx.globalAlpha = alpha;
                this.Eââ(ctx, s);
            } finally { /* BRIO cleanup: éa — Always finish owned cleanup after success or failure. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                ctx.restore();
            }
        },
        "ÊÈA"() { /* BRIO block: ÊÈA — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            this.parent?.remove?.(this);
            this.parent = null;
        }
    }), /* BRIO: attachFeature
     * Attach one local visual node per entity/key and retain ownership for removal at culling/cleanup.
     */
    attachFeature = (o, key, parent, draw, y = 0) => { /* BRIO block: attachFeature — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        if (!parent?.add) return;
        let m = featureNodes.get(o);
        if (!m) { /* BRIO branch: attachFeature — Accept !m. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            m = new Map;
            featureNodes.set(o, m);
        }
        if (m.has(key)) return;
        const n = nativeNode(draw, y);
        parent.add(n);
        m.set(key, n);
    }, featureRing = (ctx, r, s, color) => { /* BRIO block: featureRing — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    resetFeatures = () => { /* BRIO block: resetFeatures — Restore all owned adapters/resources/nodes before discarding this Play's captured native references. */
        resetMonochrome();
        for (const m of featureNodes.values()) for (const n of m.values()) try { /* BRIO guarded: resetFeatures — Keep the existing exception boundary for resetFeatures. Restore all owned adapters/resources/nodes before discarding this Play's captured native references. */
            n.parent?.remove?.(n);
        } catch (_) { /* BRIO fallback: resetFeatures — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        featureNodes.clear();
        S.shieldHeights = new WeakSet;
        S.cleanLootEvidence = new Set;
        while (featureRestore.length) try { /* BRIO guarded: resetFeatures — Keep the existing exception boundary for resetFeatures. Restore all owned adapters/resources/nodes before discarding this Play's captured native references. */
            featureRestore.pop()();
        } catch (_) { /* BRIO fallback: resetFeatures — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
        for(const [node,record]of nativeDrawGates)try { /* Restore active own-instance gates centrally, including attached particles. */ restoreNativeGate(node,record);}catch(e){ /* BRIO block V52: resetFeatures — Keep this branch bounded and reversible under the enclosing helper. V52 live-pending; regression proof is separate. */ S.errors.push('draw gate restore: '+String(e));}
        nativeDrawGates.clear();nativeVisualCoverage.clear();nativeVisualSuppressed.clear();remoteInfoRecords.clear();gateInsertions=0;gateRetirementCursor=null;nativeResourcePaths=new WeakMap;S.inventoryRootChecks=new WeakMap;S.visualGateRetired=0;S.visualGateCapKeys=new Set;
        infoCanvases=new WeakSet;pickupCanvases = new WeakSet; nativeCandidateCache = new WeakMap; S.visualGateCap = false; S.challengeLastReport = -Infinity;
        featureEx.at = -Infinity;
        for (const k of Object.keys(indicatorStats)) delete indicatorStats[k];
    }, /* BRIO: lockOpacity
     * Use a local opacity adapter with restoration. Keep native geometry and preserve original descriptor semantics.
     */
    lockOpacity = (node, key, value) => { /* BRIO block: lockOpacity — Preserve native opacity writes and accessor semantics while the current effective predicate overrides rendering. */
        if (!node || featureRestore.some(/* BRIO expr: lockOpacity / featureRestore.some callback — Preserve native opacity writes and accessor semantics while the current effective predicate overrides rendering. */ x => x.node === node)) return;
        const d = Object.getOwnPropertyDescriptor(node, "opacity");
        if (d && !d.configurable) return;
        let v = node.opacity;
        Object.defineProperty(node, "opacity", {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() { /* BRIO block: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                return (typeof key === "function" ? key(exFast()) : exFast()[key]) ? value : d?.get ? Reflect.apply(d.get,node,[]) : v;
            },
            set(x) { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                v = x;
                if (d?.set) Reflect.apply(d.set,node,[x]);
            }
        });
        const restore = () => { /* BRIO block: restore — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            if (d) { /* BRIO branch: restore — Accept d. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
                Object.defineProperty(node, "opacity", d);
                // V49 restore latest native pulsing/fade writes, not the stale initial value.
                if ("value" in d && d.writable) node.opacity = v;
            } else { /* BRIO branch: restore — Alternative for d. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
                delete node.opacity;
                node.opacity = v;
            }
        };
        restore.node = node;
        featureRestore.push(restore);
    }, /* BRIO: featurePlayer
     * Retain proven bars/numbers/names/local low-health ring; reopen held-item/trail invisibility in V50. High contrast stays deferred/unflagged.
     */
    featurePlayer = r => { /* BRIO block: featurePlayer — Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
        if (!r?.Eâ) return;
        const e = exFast();
        v53Player(r);
        // V50 physical root includes body/head/limbs/held art/backpacks/muzzle children/glider changes.
        // External build preview, grapple/rope and shadow are separate native branches and need their own gates.
        if (!isLocal(r)) { /* BRIO branch: featurePlayer — Accept !isLocal(r). Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
            for (const node of [r["ÄA"],r["Ëå"],r.head,r["aá"],r["ä"],r["ÁÆ"],r["Eå"],r["æE"],r["ÈËè"],r["ÄÊâ"]])
                gateNativeDraw(node,"playerPhysical",/* BRIO expr: featurePlayer / gateNativeDraw callback — Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */ settings => !!settings.playersInvisible);
            // The combined challenge also removes native remote name/status overlays, including teammate labels.
            gateNativeDraw(r["Eâ"],"combinedPlayerInfo",/* BRIO expr: featurePlayer / gateNativeDraw callback — Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */ settings => !!settings.goodFlippinLuck);
            remoteInformation(r);
        }
        gateNativeDraw(r["ÂÅ"],"glider",/* BRIO expr: featurePlayer / gateNativeDraw callback — Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */ settings => !!settings.allGlidersInvisible || !isLocal(r) && !!settings.playersInvisible);
        // Genuine placement previews are distinct from the blue child inside every placed wall/buildable.
        // End the preview immediately outside build mode; preserve the next genuine aiming preview.
        gateNativeDraw(r["ÁÆ"],"buildPreview",/* BRIO expr: featurePlayer / gateNativeDraw callback — Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */ settings => !!settings.buildsInvisible && (settings.buildMaskTier === "all" || !r["èÂ"]));
        if (!isLocal(r)) { /* BRIO branch: featurePlayer — Accept !isLocal(r). Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
            const shield = r["AÃå"], hp = r["æÄ"];
            if (shield && hp && !S.shieldHeights?.has(shield)) { /* BRIO branch: featurePlayer — Accept shield && hp && !S.shieldHeights?.has(shield). Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                const d = Object.getOwnPropertyDescriptor(shield, "height");
                if (!d || d.configurable) { /* BRIO branch: featurePlayer — Accept !d || d.configurable. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                    let native = shield.height;
                    Object.defineProperty(shield, "height", {
                        configurable: true,
                        enumerable: d?.enumerable ?? true,
                        get: /* BRIO expr: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => exFast().healthBars || exFast().numericHealthShield ? hp.height : native,
                        set: v => { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                            native = v;
                        }
                    });
                    (S.shieldHeights || (S.shieldHeights = new WeakSet)).add(shield);
                    featureRestore.push(() => { /* BRIO block: featurePlayer — featureRestore.push callback. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                        if (d) { /* BRIO branch: featurePlayer — Accept d. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                            Object.defineProperty(shield, "height", d);
                            if ("value" in d && d.writable) shield.height = native;
                        } else { /* BRIO branch: featurePlayer — Alternative for d. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                            delete shield.height;
                            shield.height = native;
                        }
                    });
                }
            }
            if (e.numericHealthShield) for (const [key, field] of [ [ "æÄ", "åÈ" ], [ "AÃå", "Â$" ] ]) { /* BRIO loop: featurePlayer — Iterate [ [ "æÄ", "åÈ" ], [ "AÃå", "Â$" ] ]. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                const bar = r[key];
                if (bar?.add) attachFeature(r, "number:" + key, bar, (ctx, s) => { /* BRIO block: featurePlayer — attachFeature callback. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                    if (!exFast().numericHealthShield) return;
                    const val = r[field], w = Math.abs(Number(bar.width)) / s, h = Math.abs(Number(bar.height)) / s;
                    if (!Number.isFinite(val) || !(w > 2 / s && h > 2 / s)) return;
                    const text = String(Math.round(val));
                    ctx.save();
                    try { /* BRIO guarded: featurePlayer — Keep the existing exception boundary for featurePlayer. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
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
                        if (tw > w - 4 / s) { /* BRIO branch: featurePlayer — Accept tw > w - 4 / s. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                            size *= (w - 4 / s) / tw;
                            ctx.font = "bold " + size + "px Arial";
                        }
                        if (size >= 3 / s) { /* BRIO branch: featurePlayer — Accept size >= 3 / s. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                            ctx.strokeText(text, 0, 0);
                            ctx.fillText(text, 0, 0);
                        }
                    } finally { /* BRIO cleanup: featurePlayer — Always finish owned cleanup after success or failure. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                        ctx.restore();
                    }
                });
            }
            if (e.highContrastPlayers) attachFeature(r, "player", r.Eâ, (ctx, s) => { /* BRIO block: featurePlayer — attachFeature callback. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
                if (exFast().highContrastPlayers) featureRing(ctx, 55, s, "#ffea00");
            });
        }
        // V49 corrects V48 remote circles: only the current native player receives a low-health outline.
        // Proven health/shield number and bar appearance is unchanged.
        if (isLocal(r) && e.lowHealthWarning) attachFeature(r, "warning", r.Eâ, (ctx, s) => { /* BRIO block: featurePlayer — attachFeature callback. Attach reversible local render adapters to known player branches; V50 held/trail paths live-pending. */
            if (!isLocal(r) || !belowWarning(exFast(),"health",0,r["åÈ"])) return;
            ctx.save();
            ctx.shadowColor = "#ff2020";
            ctx.shadowBlur = 12 / s;
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
            featureRing(ctx, 65, s, "#ff2020");
            ctx.restore();
        });
    }, /* BRIO: featureWorld
     * World visual registry: proven chest/canopy/effect adapters plus V50 tiered loot/build gates. Retired labels/radius/standalone highlight/glow controls have no UI callbacks.
     */
    featureWorld = o => { /* BRIO block: featureWorld — Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */
        const e = exFast();
        v53World(o);
        gateNativeDraw(o["Eâ"],"objectInfo",/* BRIO expr V52: featureWorld — Read current native/settings data within the enclosing annotated helper; no authority mutation. Live-pending. */ settings=>!!settings.noInfoPopups);
        const tag = String(o["Àâ"] || ""), rs = resourceSlots(o), root = o["â"];
        // V50 hide the COMPLETE placed branch, including native blue base/special-effect children.
        // Only explicit isPreview=true world replicas may remain in Blueprints only; no bot/distance guesses.
        if (isBuild(o)) gateNativeDraw(root,"placedBuild",/* BRIO expr: featureWorld / gateNativeDraw callback — Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */ settings => !!settings.buildsInvisible && (settings.buildMaskTier === "all" || o["AÀ"] !== true));
        if (e.noChestsVisible && (o.type === "chest" || [ "ammocrate", "grenadecrate" ].includes(tag))) lockOpacity(root, "noChestsVisible", 0);
        const foliage = /^(?:tree\d*|jungletree|cherryblossom|bush\d*|grass\d*)$/i.test(tag);
        if (foliage) { /* BRIO branch: featureWorld — Accept foliage. Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */
            if (e.transparentFoliage) lockOpacity(o["ÄA"] || root, "transparentFoliage", .25);
        }
        if (["gun","ammo"].includes(o.type) && e.cleanLoot) {
            // V49 engine gun/ammo create assigns ÀÅ as the dedicated rarity glow drawable.
            // Gun frame emits particle polygons INTO ÀÅ. Native éa returns before drawing child arrays at opacity0.
            // Hide that branch, not the item root/artwork âê; native simulation/add/removal continues untouched.
            // lockOpacity restores the latest native value on toggle-off/cleanup, including native pulsing writes.
            const effect = o["ÀÅ"];
            if (effect && effect !== root && effect !== o["âê"] && effect.parent === root) { /* BRIO branch: featureWorld — Accept effect && effect !== root && effect !== o["âê"] && effect.parent === root. Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */
                lockOpacity(effect,"cleanLoot",0);
                if (!S.cleanLootEvidence) S.cleanLootEvidence=new Set;
                const key=o.type+":"+hudPath(effect);
                if(S.cleanLootEvidence.size<12 && !S.cleanLootEvidence.has(key)) { /* BRIO branch: featureWorld — Accept S.cleanLootEvidence.size<12 && !S.cleanLootEvidence.has(key). Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */
                    S.cleanLootEvidence.add(key);
                    log("LOOT EFFECT BRANCH",{kind:o.type,path:hudPath(effect),children:(effect["âè"]?.length||0)+(effect["ÉE"]?.length||0),scope:"native ÀÅ rarity glow + child particles; item artwork preserved"});
                }
            }
        }
        if (["gun","ammo"].includes(o.type)) {
            // V50 art/effects are independent. Gate the whole root only for the highest invisible tier.
            gateNativeDraw(o["âê"],"lootArt",/* BRIO expr: featureWorld / gateNativeDraw callback — Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */ settings => !!settings.maskLootArt);
            gateNativeDraw(o["ÀÅ"],"lootRarity",/* BRIO expr: featureWorld / gateNativeDraw callback — Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */ settings => !!settings.cleanLoot);
            gateNativeDraw(root,"lootAll",/* BRIO expr: featureWorld / gateNativeDraw callback — Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */ settings => !!settings.lootInvisible && settings.lootMaskTier === "all");
            attachFeature(o,"lootLocation",root,(ctx,s) => { /* BRIO block: featureWorld — attachFeature callback. Apply independent art/effect/build gates without rewriting shared native resources; V50 tiers live-pending. */
                if (!exFast().maskLootOutline) return;
                // Same70-unit yellow square for every kind/rarity reveals only its native location.
                ctx.save(); ctx.strokeStyle = "#ffd21c"; ctx.lineWidth = 3/s;
                ctx.strokeRect(-35/s,-35/s,70/s,70/s); ctx.restore();
            });
        }
    }, /* BRIO: featureTick
     * Maintain reached visuals and bounded HUD coverage/slot state. Monochrome startup does not depend on this two-second timer.
     */
    featureTick = () => { /* BRIO V53: featureTick — sample this BRIO callback's inclusive cost; return values/errors survive finally. Nested timing rows overlap and must not be summed. */
        const cost=v53PerfBegin('feature maintenance');try{ /* BRIO block: featureTick — Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
        try { /* BRIO guarded: featureTick — Keep the existing exception boundary for featureTick. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
            if (S.renderer && performance.now() - (S.hudLastReport || -Infinity) > 15e3) { /* BRIO branch: featureTick — Accept S.renderer && performance.now() - (S.hudLastReport || -Infinity) > 15e3. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
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
                    note: "Warnings/selected native borders proven. V50 remote sizing/caption removal is the narrow changed presentation."
                });
            }
            if (S.renderer && performance.now() - (S.challengeLastReport || -Infinity) > 15e3) { /* BRIO branch: featureTick — Accept S.renderer && performance.now() - (S.challengeLastReport || -Infinity) > 15e3. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
                S.challengeLastReport = performance.now();
                log("CHALLENGE BRANCH COVERAGE", {epoch:S.runEpoch,tiers:{loot:exFast().lootMaskTier,builds:exFast().buildMaskTier},combined:!!exFast().goodFlippinLuck,
                    installed:Object.fromEntries(nativeVisualCoverage),suppressed:Object.fromEntries(nativeVisualSuppressed),adapterInstances:nativeDrawGates.size,retired:S.visualGateRetired||0,cap:4096,automaticAudit:v53Audit(),
                    v53:{zone:v53.zone,lootArrows:v53.lootUis.size,projectileHistories:v53.paths.size,statsActive:!!v53.stats&&!v53.stats.finished,localSpread:S.renderer?.["ËÂ"],weaponChoices:S.weaponCatalog?.size||0},
                    limits:"Reached branches only. Missing categories require live capture; fixtures are not pixel proof."});
            }
            if (S.renderer && !S.meteorAutoTimer && nativeScanNeeded(exFast())) meteorAutoStart("feature watchdog");
            featureEx.value = extrasState();
            featureEx.at = performance.now();
            ownMaterialWarnings();
            reclaimNativeGates();
            nativeInventoryChallenge();
            const slotState = (S.hudTemplates?.slots || []).map(/* BRIO expr: featureTick / (S.hudTemplates?.slots || []).map callback — Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */ rec => ({slot: rec.slotIndex, type: S.renderer?.["Åé"]?.[rec.slotIndex]?.type, ammo: nativeSlotAmmo(S.renderer, rec.slotIndex, rec) ?? null, selected: S.renderer?.["ÈÆ"] === rec.slotIndex, ammoType: nativeSlotAmmoIndex(S.renderer, rec.slotIndex, rec) ?? null, threshold: featureEx.value.warningThresholds.ammo[nativeSlotAmmoIndex(S.renderer, rec.slotIndex, rec)] ?? null, low: nativeSlotLow(featureEx.value, S.renderer, rec.slotIndex, rec)}));
            const slotSignature = J(slotState);
            if (slotSignature !== S.slotWarningLast && (S.slotWarningLogs || 0) < 40) { /* BRIO branch: featureTick — Accept slotSignature !== S.slotWarningLast && (S.slotWarningLogs || 0) < 40. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */ S.slotWarningLast = slotSignature; S.slotWarningLogs = (S.slotWarningLogs || 0) + 1; log("GUN SLOT WARNING STATE", {epoch: S.runEpoch, slots: slotState, threshold: "inclusive per-type saved thresholds; loaded+reserve, grappler charges only; flare/non-guns/unknown excluded"});}
            const e = exFast();
            for (const r of collectPlayers()) featurePlayer(r);
            const world = collectWorld(), live = new Set([ ...collectPlayers(), ...world ]);
            for (const [r, c] of S.nativeInvClones || []) if (!live.has(r)) { /* BRIO branch: featureTick — Accept !live.has(r). Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
                for (const row of c.rows) for (const u of row.units) try { /* BRIO guarded: featureTick — Keep the existing exception boundary for featureTick. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
                    u.root["ÊÈA"]?.();
                } catch (_) { /* BRIO fallback: featureTick — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
                S.nativeInvClones.delete(r);
            }
            for (const o of world) featureWorld(o);
            for (const [o, m] of featureNodes) if (!live.has(o)) { /* BRIO branch: featureTick — Accept !live.has(o). Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
                for (const n of m.values()) try { /* BRIO guarded: featureTick — Keep the existing exception boundary for featureTick. Update existing visual/recon adapters within their cadence; logs describe coverage, not live visual proof. */
                    n.parent?.remove?.(n);
                } catch (_) { /* BRIO fallback: featureTick — Intentionally empty: preserve the surrounding fallback/delegation contract. */ }
                featureNodes.delete(o);
            }
            syncMonochrome(!!e.monochrome);
        } catch (e) { /* BRIO fallback: featureTick — Handle failure in featureTick through its existing fallback/report path; optional native fields may be unavailable. */
            log("FEATURE ERROR", String(e));
        }

        }finally{ /* BRIO block V53: featureTick — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('feature maintenance',cost);}
    }, indicatorReport = (kind, target, reason, d) => { /* BRIO block: indicatorReport — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const prev = indicatorStats[kind], now = performance.now(), key = reason + ":" + (target?.id ?? "");
        if (!prev || prev.key !== key || now - prev.at > 1e4) { /* BRIO branch: indicatorReport — Accept !prev || prev.key !== key || now - prev.at > 1e4. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
    }, validTarget = /* BRIO expr: validTarget — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => !!(o && !o["Äã"] && worldPos(o) && o["â"]?.visible !== false && o["â"]?.opacity !== 0), showIndicator = (kind, key, target, label, color, margin) => { /* BRIO block: showIndicator — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const u = ensureArrow(key, color), me = worldPos(S.renderer), p = worldPos(target), sp = projectWorld(p);
        if (!target || !me || !p || !sp) { /* BRIO branch: showIndicator — Accept !target || !me || !p || !sp. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            u.style.display = "none";
            indicatorReport(kind, target, !target ? "no active target" : "native transform unavailable");
            return;
        }
        const box = sp.rect, on = sp.x >= box.left && sp.x <= box.left + box.width && sp.y >= box.top && sp.y <= box.top + box.height, d = Math.hypot(p.x - me.x, p.y - me.y);
        if (on) { /* BRIO branch: showIndicator — Accept on. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            u.style.display = "none";
            indicatorReport(kind, target, "target on-screen", d);
            return;
        }
        placeArrow(u, sp.x - (box.left + box.width / 2), sp.y - (box.top + box.height / 2), d, label, margin, box);
        indicatorReport(kind, target, "off-screen arrow", d);
    }, nearestV40 = () => { /* BRIO block: nearestV40 — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        try { /* BRIO guarded: nearestV40 — Keep the existing exception boundary for nearestV40. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const e = exFast();
            if (!e.nearestPlayer) { /* BRIO branch: nearestV40 — Accept !e.nearestPlayer. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if (S.nearestUi) S.nearestUi.style.display = "none";
                return;
            }
            const active = collectPlayers().filter(/* BRIO expr: nearestV40 / collectPlayers().filter callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ r => !isLocal(r) && validTarget(r));
            for (const r of active) attachTrack(r);
            const me = worldPos(S.renderer);
            active.sort((a, b) => { /* BRIO block: nearestV40 — active.sort callback. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                const p = worldPos(a), q = worldPos(b);
                return me ? Math.hypot(p.x - me.x, p.y - me.y) - Math.hypot(q.x - me.x, q.y - me.y) : 0;
            });
            showIndicator("player", "nearestUi", active[0], e.nearestPlayerName ? active[0]?.["Ée"] || "" : "", indicatorColor(e,"nearestPlayer"), 90);
        } catch (e) { /* BRIO fallback: nearestV40 — Handle failure in nearestV40 through its existing fallback/report path; optional native fields may be unavailable. */
            log("PLAYER INDICATOR ERROR", String(e));
        }
    }, indicatorsV40 = () => { /* BRIO block: indicatorsV40 — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        try { /* BRIO guarded: indicatorsV40 — Keep the existing exception boundary for indicatorsV40. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            const e = exFast();
            for (const [k, pred, label, key, margin, color] of [ [ "nearestChest", /* BRIO expr: indicatorsV40 — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => o.type === "chest", "", "chestUi", 165, "#ffd21c" ], [ "nearestAirdrop", /* BRIO expr: indicatorsV40 — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => o.type === "airdrop" || o["Àâ"] === "airdrop", "", "airdropUi", 240, "#f28b16" ] ]) if (e[k]) showIndicator(k, key, nearestBy(/* BRIO expr: indicatorsV40 / nearestBy callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ o => validTarget(o) && pred(o)), label, indicatorColor(e,k)||color, margin); else if (S[key]) S[key].style.display = "none";
        } catch (e) { /* BRIO fallback: indicatorsV40 — Handle failure in indicatorsV40 through its existing fallback/report path; optional native fields may be unavailable. */
            log("WORLD INDICATOR ERROR", String(e));
        }
    }, runtimeV40 = () => { /* BRIO block: runtimeV40 — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
        const r = S.renderer;
        if (!r) return;
        const players = collectPlayers().filter(/* BRIO expr: runtimeV40 / collectPlayers().filter callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => !isLocal(x)), world = collectWorld();
        log("PASSIVE RUNTIME COVERAGE", {
            activePlayers: players.length,
            worldObjects: world.length,
            worldKinds: [ ...new Set(world.map(/* BRIO expr: runtimeV40 / world.map callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ x => x.type + ":" + (x["Àâ"] || x["Ée"] || ""))) ].slice(0, 60),
            magazine: r["áAæ"],
            features: Object.fromEntries([ ...featureNodes.values() ].flatMap(/* BRIO expr: runtimeV40 / [ ...featureNodes.values() ].flatMap callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ m => [ ...m.keys() ]).reduce(/* BRIO expr: runtimeV40 / [ ...featureNodes.values() ].flatMap(m => [ ...m.keys() ]).reduce callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ (m, k) => m.set(k, (m.get(k) || 0) + 1), new Map)),
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
            inventory: Array.isArray(x["Åé"]) ? x["Åé"].map(/* BRIO expr: runtimeV40 / x["Åé"].map callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ v => v ? {
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
    const nativeAssetAudit = src => { /* BRIO block: nativeAssetAudit — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const paths = S.hudAssetPaths || (S.hudAssetPaths = new Map);
        for (const m of src.matchAll(/["']([^"']{1,60})["']\s*:\s*["']((?:\.?\/)?buildart\/[^"']+\.png)["']/g)) if (paths.size < 2400) { /* BRIO branch: nativeAssetAudit — Accept paths.size < 2400. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */  paths.set(m[1], norm(m[2])); paths.set(m[1].toLowerCase(), norm(m[2])); }
        log("NATIVE HUD ASSET MAP", {
            count: paths.size,
            assets: [ ...paths ].filter(/* BRIO expr: nativeAssetAudit / [ ...paths ].filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ ([k, v]) => /inv|ammo|wood|brick|metal|gear|scrap/.test(k)).slice(0, 80)
        });
        for (const term of [ "ÁæÆ", "inventoryammo", '"inv"', '"lobby"', "Å.À$", "ãÂÆ=", "Å.áÉâ", '"setID"', '"circle"', '"droid"', '"wander"', '"seed"', '"loot"' ]) { /* BRIO loop: nativeAssetAudit — Iterate [ "ÁæÆ", "inventoryammo", '"inv"', '"lobby"', "Å.À$", "ãÂÆ=", "Å.áÉâ", '"setID"', '"circle. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            let at = src.indexOf(term, term === "inventoryammo" ? 23e4 : 0);
            if (at >= 0) log("V53 NATIVE SOURCE", {
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
    reconSource = async () => { /* BRIO block: reconSource — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        try { /* BRIO guarded: reconSource — Keep the existing exception boundary for reconSource. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const urls = [ ...D.scripts ].map(/* BRIO expr: reconSource / [ ...D.scripts ].map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.src).filter(x => { /* BRIO block: reconSource — [ ...D.scripts ].map(x => x.src).filter callback. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                try { /* BRIO guarded: reconSource — Keep the existing exception boundary for reconSource. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    const u = new URL(x);
                    return u.origin === location.origin && /\/js\/[^/]+\.js$/.test(u.pathname);
                } catch (_) { /* BRIO fallback: reconSource — Handle failure in reconSource through its existing fallback/report path; optional native fields may be unavailable. */
                    return false;
                }
            }), url = urls.find(/* BRIO expr: reconSource / urls.find callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => /uOfrVi\.js/.test(x)) || urls.at(-1) || new URL("/js/uOfrVi.js", location.href).href;
            const controller = new AbortController, timeout = setTimeout(/* BRIO expr: reconSource / setTimeout callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ () => controller.abort(), 15e3);
            let raw;
            try { /* BRIO guarded: reconSource — Keep the existing exception boundary for reconSource. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                const r = await fetch(url, {
                    credentials: "same-origin",
                    signal: controller.signal
                });
                if (!r.ok) throw Error("HTTP " + r.status);
                raw = await r.text();
            } finally { /* BRIO cleanup: reconSource — Always finish owned cleanup after success or failure. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                clearTimeout(timeout);
            }
            await completeSourceAudit(raw, url);
            const src = raw.replace(/\\x([\da-f]{2})|\\u([\da-f]{4})|\\([0-7]{1,3})/gi, /* BRIO expr: reconSource / raw.replace callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ (_, a, b, c) => String.fromCharCode(parseInt(a || b || c, c ? 8 : 16)));
            reconNow.source = true;
            reconNow.sourceUrl = url;
            sourceSchemaAudit(src);
            nativeAssetAudit(src);
            botSourceAudit(src);
            registrationAudit(src);
            for (const term of [ 'Å.ÃEÅ("gun"', 'Å.ÃEÅ("object"', 'Å.ÃEÅ("spellfield"', 'Å.æÊÈ("circle"', "äèä=", "crosshair", "minimap" ]) { /* BRIO loop: reconSource — Iterate [ 'Å.ÃEÅ("gun"', 'Å.ÃEÅ("object"', 'Å.ÃEÅ("spellfield"', 'Å.æÊÈ("circle"', "äèä=", "crossh. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
            for (const [label, re] of reconGroups) { /* BRIO loop: reconSource — Iterate reconGroups. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                const matches = [];
                let m;
                while ((m = re.exec(src)) && matches.length < 1e3) matches.push({
                    at: m.index,
                    term: m[0]
                });
                const runtime = matches.filter(/* BRIO expr: reconSource / matches.filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.at > 18e4), chosen = runtime.filter(/* BRIO expr: reconSource / runtime.filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ (x, i, a) => !i || x.at - a[i - 1].at > 1e3).slice(0, 3);
                log("PASSIVE SOURCE SURFACE", {
                    label: label,
                    total: matches.length,
                    runtimeCandidates: runtime.length,
                    examples: chosen.map(/* BRIO expr: reconSource / chosen.map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => ({
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
                planned: EXTRA.challenges.concat(EXTRA.modifiers).filter(/* BRIO expr: reconSource / EXTRA.challenges.concat(EXTRA.modifiers).filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x[0]).map(/* BRIO expr: reconSource / EXTRA.challenges.concat(EXTRA.modifiers).filter(x => x[0]).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => ({
                    id: x[0],
                    status: statusOf(x[0]),
                    enabled: !!extrasState()[x[0]],
                    probe: "native runtime state + bounded source/asset candidates; feasibility unresolved unless green"
                })),
                screening: "always-visible pre-open contents above every detected container requested; authoritative contents unresolved; native proximity labels are not screening",
                cssSurfaces: [ "monochrome", "flashlightMode", "customCrosshair" ],
                note: "No hits does not establish impossibility"
            });
        } catch (e) { /* BRIO fallback: reconSource — Handle failure in reconSource through its existing fallback/report path; optional native fields may be unavailable. */
            log("SOURCE RECON ERROR", String(e));
        }
    };
    const reconDom = label => { /* BRIO block: reconDom — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const nodes = [ ...D.querySelectorAll("[id]") ].filter(/* BRIO expr: reconDom / [ ...D.querySelectorAll("[id]") ].filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => /map|cross|health|shield|inventory|ammo|hud|canvas|game/i.test(x.id) && !x.closest(".brioModal,.brioTerm")).slice(0, 45);
        log("HUD DOM CANDIDATES", {
            label: label,
            nodes: nodes.map(x => { /* BRIO block: reconDom — nodes.map callback. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                const r = x.getBoundingClientRect();
                return {
                    id: x.id,
                    tag: x.tagName,
                    width: Math.round(r.width),
                    height: Math.round(r.height)
                };
            }),
            canvases: [ ...D.querySelectorAll("canvas") ].slice(0, 12).map(/* BRIO expr: reconDom / [ ...D.querySelectorAll("canvas") ].slice(0, 12).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ c => ({
                id: c.id,
                width: c.width,
                height: c.height,
                connected: c.isConnected
            }))
        });
    };
    const reconAdded = o => { /* BRIO block: reconAdded — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        if (!o || reconObjects.has(o) || !isWorld(o)) return;
        reconObjects.add(o);
        const tag = String(o["Àâ"] ?? o["Ée"] ?? o["ÄæÅ"] ?? ""), key = o.type + ":" + (tag || resourceSlots(o).map(/* BRIO expr: reconAdded / resourceSlots(o).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.path).join("|")), n = reconCoverage.get(key) || 0;
        reconCoverage.set(key, n + 1);
        if (n < 1 && reconCoverage.size < 100) log("PASSIVE NATIVE OBJECT", {
            key: key,
            id: o.id,
            fields: shallowState(o),
            resources: resourceSlots(o).map(/* BRIO expr: reconAdded / resourceSlots(o).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.path),
            note: "identity/state only; no contents attribution"
        });
    };
    const reconRuntime = () => { /* BRIO block: reconRuntime — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        try { /* BRIO guarded: reconRuntime — Keep the existing exception boundary for reconRuntime. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const r = S.renderer;
            if (!r) return;
            const cur = {
                magazine: r["áAæ"],
                health: r["åÈ"],
                shield: r["Â$"],
                slot: r["ÈÆ"],
                materials: matState(r),
                ammo: r["åæ"],
                inventory: Array.isArray(r["Åé"]) ? r["Åé"].map(/* BRIO expr: reconRuntime / r["Åé"].map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x ? {
                    type: x.type,
                    rarity: x["äã"]
                } : null) : null
            };
            const key = JSON.stringify(cur);
            if (key !== reconNow.last) { /* BRIO branch: reconRuntime — Accept key !== reconNow.last. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                reconNow.last = key;
                if ((reconNow.stateLogs || 0) < 25) { /* BRIO branch: reconRuntime — Accept (reconNow.stateLogs || 0) < 25. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    reconNow.stateLogs = (reconNow.stateLogs || 0) + 1;
                    log("LOCAL HUD STATE", cur);
                }
            }
        } catch (e) { /* BRIO fallback: reconRuntime — Handle failure in reconRuntime through its existing fallback/report path; optional native fields may be unavailable. */
            log("HUD RECON ERROR", String(e));
        }
    };
    const reconKind = o => { /* BRIO block: reconKind — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const p = resourceSlots(o).map(/* BRIO expr: reconKind / resourceSlots(o).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.path).join(" "), v = [ o.type, o["Àâ"], o["ÄæÅ"], o["ÆåÃ"], p ].join(" ").toLowerCase();
        if (fishingPred(o)) return "fishing";
        if (airdropPred(o)) return "airdrop";
        if (/legendarychest/.test(v)) return "legendaryChest";
        if (o.type === "chest" || /chest(?:under)?\.png/.test(v)) return "chest";
        if (/grenadecrate|nadecrate/.test(v)) return "grenadeCrate";
        if (/ammocrate|ammobox/.test(v)) return "ammoCrate";
        return null;
    }, reconDeep = o => { /* BRIO block: reconDeep — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        const out = {}, seen = new Set;
        function walk(v, p, d) { /* BRIO block: walk — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
            if (!v || typeof v !== "object" || d > 3 || seen.has(v) || v === W || v === D || v instanceof Node || ArrayBuffer.isView(v) || seen.size > 120) return;
            seen.add(v);
            for (const k of Object.keys(v).slice(0, 50)) { /* BRIO loop: walk — Iterate Object.keys(v).slice(0, 50). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                if ([ "parent", "owner", "stage", "game", "ÁÄ" ].includes(k)) continue;
                let x;
                try { /* BRIO guarded: walk — Keep the existing exception boundary for walk. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    x = v[k];
                } catch (_) { /* BRIO fallback: walk — Handle failure in walk through its existing fallback/report path; optional native fields may be unavailable. */
                    continue;
                }
                const n = p + "." + k;
                if ([ "string", "number", "boolean" ].includes(typeof x)) { /* BRIO branch: walk — Accept [ "string", "number", "boolean" ].includes(typeof x). Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    if (typeof x !== "string" || x.length < 160) out[n] = x;
                } else if (Array.isArray(x) && x.length < 17 && x.every(/* BRIO expr: walk / x.every callback — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ y => [ "string", "number", "boolean" ].includes(typeof y))) out[n] = x.slice(); else if (x && typeof x === "object") walk(x, n, d + 1);
                if (Object.keys(out).length >= 150) return;
            }
        }
        walk(o, "$", 0);
        return Object.fromEntries(Object.entries(out).filter(/* BRIO expr: reconDeep / Object.entries(out).filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ ([k]) => !/^\$\.(?:â|ÄA|æÄ|aAå|áãá|eÅé|new|Âä|áÆ|ëa|Åaá)(?:\.|$)/.test(k) && !/^\$\.(?:æëÃ|ÀÁ|cos)$/.test(k)));
    }, /* BRIO: reconContainers
     * Observe first/changed/removed container lifecycle metadata. Never infer NONE or contents from nearby drops or culling.
     */
    reconContainers = () => { /* BRIO V53: reconContainers — sample bounded passive diagnostic cost; the explicit comparison quiet phase skips this probe without claiming absence. */
        if(v53Quiet())return;const cost=v53PerfBegin('reconContainers');try{ /* BRIO block: reconContainers — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
        try { /* BRIO guarded: reconContainers — Keep the existing exception boundary for reconContainers. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
            const world = collectWorld(), live = new Set(world.map(/* BRIO expr: reconContainers / world.map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ o => o.id));
            for (const o of world) { /* BRIO loop: reconContainers — Iterate world. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                const kind = reconKind(o);
                if (!kind) continue;
                const fields = reconDeep(o), fingerprint = J(fields), old = reconContainersSeen.get(o.id);
                if (!old && reconContainersSeen.size < 80) { /* BRIO branch: reconContainers — Accept !old && reconContainersSeen.size < 80. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
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
                        resources: resourceSlots(o).map(/* BRIO expr: reconContainers / resourceSlots(o).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => x.path),
                        note: "automatic sample; no manual probe needed"
                    });
                } else if (old && fingerprint !== old.fingerprint) { /* BRIO branch: reconContainers — Accept old && fingerprint !== old.fingerprint. Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                    old.fingerprint = fingerprint;
                    if (old.changes++ < 2) log("PASSIVE CONTAINER CHANGE", {
                        id: o.id,
                        kind: kind,
                        fields: fields
                    });
                }
            }
            for (const [id, old] of reconContainersSeen) if (!live.has(id) && !reconRemoved.has(id)) { /* BRIO branch: reconContainers — Accept !live.has(id) && !reconRemoved.has(id). Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */
                reconRemoved.add(id);
                const p = old.position;
                log("PASSIVE CONTAINER REMOVED", {
                    id: id,
                    kind: old.kind,
                    nearbyLoot: world.filter(/* BRIO expr: reconContainers / world.filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ o => [ "gun", "ammo" ].includes(o.type)).map(/* BRIO expr: reconContainers / world.filter(o => [ "gun", "ammo" ].includes(o.type)).map callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ o => ({
                        o: o,
                        p: worldPos(o)
                    })).filter(/* BRIO expr: reconContainers / world.filter(o => [ "gun", "ammo" ].includes(o.type)).map(o => ({ o: o, p: worldPos(o) })).filter callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => p && x.p && Math.hypot(x.p.x - p.x, x.p.y - p.y) < 500).slice(0, 20).map(/* BRIO expr: reconContainers / world.filter(o => [ "gun", "ammo" ].includes(o.type)).map(o => ({ o: o, p: worldPos(o) })).filter(x => p && x. callback — Keep this evidence path read-only and bounded; unresolved/capped observations are not negative proof. */ x => ({
                        id: x.o.id,
                        type: x.o.type,
                        fields: shallowState(x.o),
                        position: x.p
                    })),
                    note: "correlation only; removal may be range/lifecycle, nearby loot may predate removal; no NONE inference"
                });
            }
        } catch (e) { /* BRIO fallback: reconContainers — Handle failure in reconContainers through its existing fallback/report path; optional native fields may be unavailable. */
            log("CONTAINER RECON ERROR", String(e));
        }

        }finally{ /* BRIO block V53: reconContainers — Keep this branch bounded and reversible under the enclosing helper. V53 live-pending; regression proof is separate. */ v53PerfEnd('reconContainers',cost);}
    };
    const restoreMarkerCapture = () => { /* BRIO block: restoreMarkerCapture — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        const h = S.markerCapture;
        if (!h) return;
        if (Array.prototype.push === h.p) Array.prototype.push = h.op;
        if (Array.prototype.unshift === h.u) Array.prototype.unshift = h.ou;
        clearTimeout(h.timer);
        S.markerCapture = null;
    }, /* BRIO: restoreMarkerHolds
     * Restore retention descriptors before detaching retained old nodes; weakly retire their identities to prevent stale recapture.
     */
    restoreMarkerHolds = () => { /* BRIO block: restoreMarkerHolds — Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
        meteorAutoStop();
        S.meteorSeen = new WeakSet;
        S.meteorPending = new WeakSet;
        S.sceneRoots?.clear();
        S.sceneQueue = [];
        S.sceneQueueAt = 0; S.sceneQueueSeen = new WeakSet; S.sceneScan = null;
        restoreMarkerCapture();
        const oldMarkers = reconMarkers.slice();
        while (reconRestore.length) try { /* BRIO guarded: restoreMarkerHolds — Keep the existing exception boundary for restoreMarkerHolds. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            reconRestore.pop()();
        } catch (e) { /* BRIO fallback: restoreMarkerHolds — Handle failure in restoreMarkerHolds through its existing fallback/report path; optional native fields may be unavailable. */
            S.errors.push("marker restore: " + String(e));
        }
        for (const {node, parent} of oldMarkers) { /* BRIO loop: restoreMarkerHolds — Iterate oldMarkers. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */
            (S.retiredMarkers || (S.retiredMarkers = new WeakSet)).add(node);
            if (node.icon) S.retiredMarkers.add(node.icon);
            try { /* BRIO guarded: restoreMarkerHolds — Keep the existing exception boundary for restoreMarkerHolds. Release only BRIO-owned state/adapters; preserve saved preferences and original native behavior. */  parent.remove?.(node); if (node.parent && node.parent !== parent) node.parent.remove?.(node); } catch (e) { /* BRIO fallback: restoreMarkerHolds — Handle failure in restoreMarkerHolds through its existing fallback/report path; optional native fields may be unavailable. */ S.errors.push("marker detach: " + String(e));}
        }
        if (oldMarkers.length) log("OLD MATCH METEORS REMOVED", {count: oldMarkers.length, epoch: S.runEpoch});
        reconMarkers.length = 0;
    };
    const /* BRIO: holdMeteor
     * Hold fresh native marker expiry/removal only in its captured epoch. Next Play cleanup detaches it before new discovery.
     */
    holdMeteor = (node, array) => { /* BRIO block: holdMeteor — Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
        const epoch = S.runEpoch;
        queueMicrotask(() => { /* BRIO block: holdMeteor — queueMicrotask callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
            try { /* BRIO guarded: holdMeteor — Keep the existing exception boundary for holdMeteor. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                S.meteorPending?.delete(node);
                if (S.destroyed || epoch !== S.runEpoch || !exFast().permanentMeteor || S.meteorSeen?.has(node)) return;
                const parent = node.parent;
                if (!parent || typeof parent.remove !== "function") { /* BRIO branch: holdMeteor — Accept !parent || typeof parent.remove !== "function". Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
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
                const desc = Object.getOwnPropertyDescriptor(parent, "remove"), orig = parent.remove, wrap = function(child, ...a) { /* BRIO block: wrap — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                    if (child === node && S.runEpoch === epoch && exFast().permanentMeteor) { /* BRIO branch: wrap — Accept child === node && S.runEpoch === epoch && exFast().permanentMeteor. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
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
                reconRestore.push(() => { /* BRIO block: holdMeteor — reconRestore.push callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                    if (parent.remove === wrap) { /* BRIO branch: holdMeteor — Accept parent.remove === wrap. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                        if (desc) Object.defineProperty(parent, "remove", desc); else delete parent.remove;
                    }
                });
                for (const target of [ node, node.icon ]) { /* BRIO loop: holdMeteor — Iterate [ node, node.icon ]. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                    if (!target) continue;
                    const d = Object.getOwnPropertyDescriptor(target, "opacity");
                    if (d && !d.configurable) continue;
                    let v = target.opacity;
                    Object.defineProperty(target, "opacity", {
                        configurable: true,
                        enumerable: d?.enumerable ?? true,
                        get() { /* BRIO block: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                            return S.runEpoch === epoch && exFast().permanentMeteor ? 1 : v;
                        },
                        set(x) { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                            v = x;
                            record.opacityWrites++;
                        }
                    });
                    reconRestore.push(() => { /* BRIO block: holdMeteor — reconRestore.push callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                        if (d) { /* BRIO branch: holdMeteor — Accept d. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                            Object.defineProperty(target, "opacity", d);
                            if ("value" in d && d.writable) target.opacity = v;
                        } else { /* BRIO branch: holdMeteor — Alternative for d. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                            delete target.opacity;
                            target.opacity = v;
                        }
                    });
                }
                const expiredDesc = Object.getOwnPropertyDescriptor(node, "Äã");
                if (!expiredDesc || expiredDesc.configurable) { /* BRIO branch: holdMeteor — Accept !expiredDesc || expiredDesc.configurable. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                    let expired = node["Äã"];
                    Object.defineProperty(node, "Äã", {
                        configurable: true,
                        enumerable: expiredDesc?.enumerable ?? true,
                        get: /* BRIO expr: get — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */ () => S.runEpoch === epoch && exFast().permanentMeteor ? false : expired,
                        set: v => { /* BRIO block: set — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                            expired = v;
                        }
                    });
                    reconRestore.push(() => { /* BRIO block: holdMeteor — reconRestore.push callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                        if (expiredDesc) { /* BRIO branch: holdMeteor — Accept expiredDesc. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                            Object.defineProperty(node, "Äã", expiredDesc);
                            if ("value" in expiredDesc && expiredDesc.writable) node["Äã"] = expired;
                        } else { /* BRIO branch: holdMeteor — Alternative for expiredDesc. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                            delete node["Äã"];
                            node["Äã"] = expired;
                        }
                    });
                }
                const destroyDesc = Object.getOwnPropertyDescriptor(node, "ÊÈA"), destroy = node["ÊÈA"];
                if (typeof destroy === "function" && (!destroyDesc || destroyDesc.configurable || destroyDesc.writable)) { /* BRIO branch: holdMeteor — Accept typeof destroy === "function" && (!destroyDesc || destroyDesc.configurable || destroyDesc.writable). Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                    const dw = function(...a) { /* BRIO block: dw — Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                        if (S.runEpoch === epoch && exFast().permanentMeteor) { /* BRIO branch: dw — Accept S.runEpoch === epoch && exFast().permanentMeteor. Preserve the established native-compatible behavior; follow the enclosing helper's version/proof annotation. */
                            record.destroyAttempts++;
                            return;
                        }
                        return Reflect.apply(destroy, this, a);
                    };
                    node["ÊÈA"] = dw;
                    reconRestore.push(() => { /* BRIO block: holdMeteor — reconRestore.push callback. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
                        if (node["ÊÈA"] === dw) { /* BRIO branch: holdMeteor — Accept node["ÊÈA"] === dw. Use only reached native objects and existing bounded discovery; discard transient references at Play cleanup. */
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
            } catch (e) { /* BRIO fallback: holdMeteor — Handle failure in holdMeteor through its existing fallback/report path; optional native fields may be unavailable. */
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
    loadCustom().finally(() => { /* BRIO block: startup — loadCustom().finally callback. Own the injection lifecycle; native state is restored at the next Play or destroy. */
        renderLocker();
        bindPlay();
        log("READY", {measurementRevision:"v53-modular-signed-rotation-observed-envelope",mathChecks:{atan2ZeroOne:Math.atan2(0,1),atan2OneZero:Math.atan2(1,0),quarterTurn:Math.PI/2},
            version: S.v,
            nameRule: "prepend uL# at Play; dynamic local capture",
            inventoryScales: INV_SCALE,
            activeTests: [...REQUIRED_TESTS,...CHALLENGE_TESTS].map(/* BRIO expr: startup / [...REQUIRED_TESTS,...CHALLENGE_TESTS].map callback — Own the injection lifecycle; native state is restored at the next Play or destroy. */ id => [...EXTRA.modifiers,...EXTRA.challenges].find(/* BRIO expr: startup / [...EXTRA.modifiers,...EXTRA.challenges].find callback — Own the injection lifecycle; native state is restored at the next Play or destroy. */ x => x[0] === id)?.[1] || id),
            inventoryArt: "native invN slot backgrounds from captured HUD traces",
            lobbyProbe: "Native local gliding state or decoded circle waiting/moving separates lobby and match automatically",
            meteor: "automatic native waypoint capture · testing; retention visually verified in V40"
        });
    });
})();
