(() => {
    "use strict";
    const RELEASE = "70";
    const W = window, D = document, K = "__brio_unlocker_v" + RELEASE;
    for (const k of [ K, "__brio_unlocker_v69", "__brio_unlocker_v68", "__brio_unlocker_v67", "__brio_unlocker_v66", "__brio_unlocker_v65", "__brio_unlocker_v64", "__brio_unlocker_v63", "__brio_unlocker_v62", "__brio_unlocker_v61", "__brio_unlocker_v60", "__brio_unlocker_v59", "__brio_unlocker_v58", "__brio_unlocker_v57", "__brio_unlocker_v56", "__brio_unlocker_v55", "__brio_unlocker_v54", "__brio_unlocker_v53", "__brio_unlocker_v52", "__brio_unlocker_v51", "__brio_unlocker_v50", "__brio_unlocker_v49", "__brio_unlocker_v48", "__brio_unlocker_v47", "__brio_unlocker_v46", "__brio_unlocker_v45", "__brio_unlocker_v44", "__brio_unlocker_v43", "__brio_unlocker_v42", "__brio_unlocker_v41", "__brio_unlocker_v40", "__brio_unlocker_v39", "__brio_recon38", "__brio_unlocker_v37", "__brio_unlocker_v36", "__brio_unlocker_v35", "__brio_unlocker_v33", "__brio_unlocker_v32", "__brio_unlocker_v31", "__brio_unlocker_v30", "__brio_unlocker_v29", "__brio_unlocker_v28", "__brio_unlocker_v27" ]) try {
        W[k]?.destroy?.();
    } catch (_) {}
    const parseNative = (() => {
        const exports = {}, module = {
            exports: exports
        };
        (function(e, t) {
            typeof exports === "object" && typeof module !== "undefined" ? t(exports) : typeof define === "function" && define.amd ? define([ "exports" ], t) : (e = typeof globalThis !== "undefined" ? globalThis : e || self,
            t(e.acorn = {}));
        })(this, function(e) {
            "use strict";
            var t = [ 509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 31, 4, 33, 15, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 7, 0, 259, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 481, 1, 61, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 12, 2, 9, 1, 3, 0, 33, 1, 1357, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239 ];
            var i = [ 0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 13, 65, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 18, 21, 18, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 18, 0, 182, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 22, 0, 239, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 111, 6, 206, 13, 310, 2314, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7386, 37, 33, 96, 114, 14, 913, 15, 50, 7710, 3, 2, 6, 2, 1, 2, 296, 10, 0, 30, 2, 3, 0, 15, 4, 8, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 340, 2, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 129, 15, 6, 55, 50, 49, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4382, 2, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489, 39815, 11327 ];
            var s = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄ-׉ؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୓-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫰ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
            var r = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆ՘ՙՠ-ֈ֋֌א-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿ₏-₟ℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-꟝꟢꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩ꭬꭭ꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
            var a = {
                3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                5: "class enum extends super const export import",
                6: "enum",
                strict: "implements interface let package private protected public static yield",
                strictBind: "eval arguments"
            };
            var n = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
            var o = {
                5: n,
                "5module": n + " export import",
                6: n + " const class extends export import super"
            };
            var h = /^in(stanceof)?$/;
            var p = new RegExp("[" + r + "]");
            var u = new RegExp("[" + r + s + "]");
            function l(e, t) {
                var i = 65536;
                for (var s = 0; s < t.length; s += 2) {
                    i += t[s];
                    if (i > e) return false;
                    i += t[s + 1];
                    if (i >= e) return true;
                }
                return false;
            }
            function c(e, t) {
                if (e < 65) return e === 36;
                if (e < 91) return true;
                if (e < 97) return e === 95;
                if (e < 123) return true;
                if (e <= 65535) return e >= 170 && p.test(String.fromCharCode(e));
                if (t === false) return false;
                return l(e, i);
            }
            function f(e, s) {
                if (e < 48) return e === 36;
                if (e < 58) return true;
                if (e < 65) return false;
                if (e < 91) return true;
                if (e < 97) return e === 95;
                if (e < 123) return true;
                if (e <= 65535) return e >= 170 && u.test(String.fromCharCode(e));
                if (s === false) return false;
                return l(e, i) || l(e, t);
            }
            var d = function(t, i) {
                i === void 0 && (i = {});
                this.label = t;
                this.keyword = i.keyword;
                this.beforeExpr = !!i.beforeExpr;
                this.startsExpr = !!i.startsExpr;
                this.isLoop = !!i.isLoop;
                this.isAssign = !!i.isAssign;
                this.prefix = !!i.prefix;
                this.postfix = !!i.postfix;
                this.binop = i.binop || null;
                this.updateContext = null;
            };
            function m(e, t) {
                return new d(e, {
                    beforeExpr: true,
                    binop: t
                });
            }
            var v = {
                beforeExpr: true
            }, g = {
                startsExpr: true
            };
            var x = {};
            function y(e, t) {
                t === void 0 && (t = {});
                t.keyword = e;
                return x[e] = new d(e, t);
            }
            var b = {
                num: new d("num", g),
                regexp: new d("regexp", g),
                string: new d("string", g),
                name: new d("name", g),
                privateId: new d("privateId", g),
                eof: new d("eof"),
                bracketL: new d("[", {
                    beforeExpr: true,
                    startsExpr: true
                }),
                bracketR: new d("]"),
                braceL: new d("{", {
                    beforeExpr: true,
                    startsExpr: true
                }),
                braceR: new d("}"),
                parenL: new d("(", {
                    beforeExpr: true,
                    startsExpr: true
                }),
                parenR: new d(")"),
                comma: new d(",", v),
                semi: new d(";", v),
                colon: new d(":", v),
                dot: new d("."),
                question: new d("?", v),
                questionDot: new d("?."),
                arrow: new d("=>", v),
                template: new d("template"),
                invalidTemplate: new d("invalidTemplate"),
                ellipsis: new d("...", v),
                backQuote: new d("`", g),
                dollarBraceL: new d("${", {
                    beforeExpr: true,
                    startsExpr: true
                }),
                eq: new d("=", {
                    beforeExpr: true,
                    isAssign: true
                }),
                assign: new d("_=", {
                    beforeExpr: true,
                    isAssign: true
                }),
                incDec: new d("++/--", {
                    prefix: true,
                    postfix: true,
                    startsExpr: true
                }),
                prefix: new d("!/~", {
                    beforeExpr: true,
                    prefix: true,
                    startsExpr: true
                }),
                logicalOR: m("||", 1),
                logicalAND: m("&&", 2),
                bitwiseOR: m("|", 3),
                bitwiseXOR: m("^", 4),
                bitwiseAND: m("&", 5),
                equality: m("==/!=/===/!==", 6),
                relational: m("</>/<=/>=", 7),
                bitShift: m("<</>>/>>>", 8),
                plusMin: new d("+/-", {
                    beforeExpr: true,
                    binop: 9,
                    prefix: true,
                    startsExpr: true
                }),
                modulo: m("%", 10),
                star: m("*", 10),
                slash: m("/", 10),
                starstar: new d("**", {
                    beforeExpr: true
                }),
                coalesce: m("??", 1),
                _break: y("break"),
                _case: y("case", v),
                _catch: y("catch"),
                _continue: y("continue"),
                _debugger: y("debugger"),
                _default: y("default", v),
                _do: y("do", {
                    isLoop: true,
                    beforeExpr: true
                }),
                _else: y("else", v),
                _finally: y("finally"),
                _for: y("for", {
                    isLoop: true
                }),
                _function: y("function", g),
                _if: y("if"),
                _return: y("return", v),
                _switch: y("switch"),
                _throw: y("throw", v),
                _try: y("try"),
                _var: y("var"),
                _const: y("const"),
                _while: y("while", {
                    isLoop: true
                }),
                _with: y("with"),
                _new: y("new", {
                    beforeExpr: true,
                    startsExpr: true
                }),
                _this: y("this", g),
                _super: y("super", g),
                _class: y("class", g),
                _extends: y("extends", v),
                _export: y("export"),
                _import: y("import", g),
                _null: y("null", g),
                _true: y("true", g),
                _false: y("false", g),
                _in: y("in", {
                    beforeExpr: true,
                    binop: 7
                }),
                _instanceof: y("instanceof", {
                    beforeExpr: true,
                    binop: 7
                }),
                _typeof: y("typeof", {
                    beforeExpr: true,
                    prefix: true,
                    startsExpr: true
                }),
                _void: y("void", {
                    beforeExpr: true,
                    prefix: true,
                    startsExpr: true
                }),
                _delete: y("delete", {
                    beforeExpr: true,
                    prefix: true,
                    startsExpr: true
                })
            };
            var k = /\r\n?|\n|\u2028|\u2029/;
            var _ = new RegExp(k.source, "g");
            function w(e) {
                return e === 10 || e === 13 || e === 8232 || e === 8233;
            }
            function S(e, t, i) {
                i === void 0 && (i = e.length);
                for (var s = t; s < i; s++) {
                    var r = e.charCodeAt(s);
                    if (w(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
                }
                return -1;
            }
            var C = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
            var E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
            var A = Object.prototype;
            var I = A.hasOwnProperty;
            var P = A.toString;
            var V = Object.hasOwn || function(e, t) {
                return I.call(e, t);
            };
            var N = Array.isArray || function(e) {
                return P.call(e) === "[object Array]";
            };
            var T = Object.create(null);
            function L(e) {
                return T[e] || (T[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
            }
            function R(e) {
                if (e <= 65535) return String.fromCharCode(e);
                e -= 65536;
                return String.fromCharCode(55296 + (e >> 10), 56320 + (e & 1023));
            }
            var D = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
            var O = function(t, i) {
                this.line = t;
                this.column = i;
            };
            O.prototype.offset = function(t) {
                return new O(this.line, this.column + t);
            };
            var B = function(t, i, s) {
                this.start = i;
                this.end = s;
                t.sourceFile !== null && (this.source = t.sourceFile);
            };
            function M(e, t) {
                for (var i = 1, s = 0; ;) {
                    var r = S(e, s, t);
                    if (r < 0) return new O(i, t - s);
                    ++i;
                    s = r;
                }
            }
            var F = {
                ecmaVersion: null,
                sourceType: "script",
                strict: false,
                onInsertedSemicolon: null,
                onTrailingComma: null,
                allowReserved: null,
                allowReturnOutsideFunction: false,
                allowImportExportEverywhere: false,
                allowAwaitOutsideFunction: null,
                allowSuperOutsideMethod: null,
                allowHashBang: false,
                checkPrivateFields: true,
                locations: false,
                startLocation: null,
                onToken: null,
                onComment: null,
                ranges: false,
                program: null,
                sourceFile: null,
                directSourceFile: null,
                preserveParens: false
            };
            var U = false;
            function q(e) {
                var t = {};
                for (var i in F) t[i] = e && V(e, i) ? e[i] : F[i];
                if (t.ecmaVersion === "latest") t.ecmaVersion = 1e8; else if (t.ecmaVersion == null) {
                    if (!U && typeof console === "object" && console.warn) {
                        U = true;
                        console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
                    }
                    t.ecmaVersion = 11;
                } else t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009);
                t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5);
                e && e.allowHashBang != null || (t.allowHashBang = t.ecmaVersion >= 14);
                if (N(t.onToken)) {
                    var s = t.onToken;
                    t.onToken = function(e) {
                        return s.push(e);
                    };
                }
                N(t.onComment) && (t.onComment = j(t, t.onComment));
                if (t.sourceType === "commonjs" && t.allowAwaitOutsideFunction) throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
                return t;
            }
            function j(e, t) {
                return function(i, s, r, a, n, o) {
                    var h = {
                        type: i ? "Block" : "Line",
                        value: s,
                        start: r,
                        end: a
                    };
                    e.locations && (h.loc = new B(this, n, o));
                    e.ranges && (h.range = [ r, a ]);
                    t.push(h);
                };
            }
            var G = 1, H = 2, W = 4, z = 8, K = 16, Q = 32, Y = 64, X = 128, Z = 256, $ = 512, J = 1024, ee = G | H | Z;
            function te(e, t) {
                return H | (e ? W : 0) | (t ? z : 0);
            }
            var ie = 0, se = 1, re = 2, ae = 3, ne = 4, oe = 5;
            var he = function(t, i, s) {
                this.options = t = q(t);
                this.sourceFile = t.sourceFile;
                this.keywords = L(o[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
                var r = "";
                if (t.allowReserved !== true) {
                    r = a[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3];
                    t.sourceType === "module" && (r += " await");
                }
                this.reservedWords = L(r);
                var n = (r ? r + " " : "") + a.strict;
                this.reservedWordsStrict = L(n);
                this.reservedWordsStrictBind = L(n + " " + a.strictBind);
                this.input = String(i);
                this.containsEsc = false;
                this.pos = s || 0;
                this.curLine = 1;
                if (t.startLocation) {
                    this.lineStart = this.pos - t.startLocation.column;
                    this.curLine = t.startLocation.line;
                } else if (s) {
                    this.lineStart = this.input.lastIndexOf("\n", s - 1) + 1;
                    this.options.locations && (this.curLine = this.input.slice(0, this.lineStart).split(k).length);
                } else this.lineStart = 0;
                this.type = b.eof;
                this.value = null;
                this.start = this.end = this.pos;
                this.startLoc = this.endLoc = this.curPosition();
                this.lastTokEndLoc = this.lastTokStartLoc = null;
                this.lastTokStart = this.lastTokEnd = this.pos;
                this.context = this.initialContext();
                this.exprAllowed = true;
                this.inModule = t.sourceType === "module";
                this.strict = this.inModule || t.strict === true || this.strictDirective(this.pos);
                this.potentialArrowAt = -1;
                this.potentialArrowInForAwait = false;
                this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
                this.labels = [];
                this.undefinedExports = Object.create(null);
                this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2);
                this.scopeStack = [];
                this.enterScope(this.options.sourceType === "commonjs" ? H : G);
                this.regexpState = null;
                this.privateNameStack = [];
            };
            var pe = {
                inFunction: {
                    configurable: true
                },
                inGenerator: {
                    configurable: true
                },
                inAsync: {
                    configurable: true
                },
                canAwait: {
                    configurable: true
                },
                allowReturn: {
                    configurable: true
                },
                allowSuper: {
                    configurable: true
                },
                allowDirectSuper: {
                    configurable: true
                },
                treatFunctionsAsVar: {
                    configurable: true
                },
                allowNewDotTarget: {
                    configurable: true
                },
                allowUsing: {
                    configurable: true
                },
                inClassStaticBlock: {
                    configurable: true
                }
            };
            he.prototype.parse = function() {
                var t = this;
                var i = this.options.program || this.startNode();
                this.nextToken();
                return this.catchStackOverflow(function() {
                    return t.parseTopLevel(i);
                });
            };
            pe.inFunction.get = function() {
                return (this.currentVarScope().flags & H) > 0;
            };
            pe.inGenerator.get = function() {
                return (this.currentVarScope().flags & z) > 0;
            };
            pe.inAsync.get = function() {
                return (this.currentVarScope().flags & W) > 0;
            };
            pe.canAwait.get = function() {
                for (var e = this.scopeStack.length - 1; e >= 0; e--) {
                    var t = this.scopeStack[e];
                    var i = t.flags;
                    if (i & (Z | $)) return false;
                    if (i & H) return (i & W) > 0;
                }
                return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
            };
            pe.allowReturn.get = function() {
                if (this.inFunction) return true;
                if (this.options.allowReturnOutsideFunction && this.currentVarScope().flags & G) return true;
                return false;
            };
            pe.allowSuper.get = function() {
                var e = this.currentThisScope();
                var t = e.flags;
                return (t & Y) > 0 || this.options.allowSuperOutsideMethod;
            };
            pe.allowDirectSuper.get = function() {
                return (this.currentThisScope().flags & X) > 0;
            };
            pe.treatFunctionsAsVar.get = function() {
                return this.treatFunctionsAsVarInScope(this.currentScope());
            };
            pe.allowNewDotTarget.get = function() {
                for (var e = this.scopeStack.length - 1; e >= 0; e--) {
                    var t = this.scopeStack[e];
                    var i = t.flags;
                    if (i & (Z | $) || i & H && !(i & K)) return true;
                }
                return false;
            };
            pe.allowUsing.get = function() {
                var e = this.currentScope();
                var t = e.flags;
                if (t & J) return false;
                if (!this.inModule && t & G) return false;
                return true;
            };
            pe.inClassStaticBlock.get = function() {
                return (this.currentVarScope().flags & Z) > 0;
            };
            he.extend = function() {
                var t = [], i = arguments.length;
                while (i--) t[i] = arguments[i];
                var s = this;
                for (var r = 0; r < t.length; r++) s = t[r](s);
                return s;
            };
            he.parse = function(t, i) {
                return new this(i, t).parse();
            };
            he.parseExpressionAt = function(t, i, s) {
                var r = new this(s, t, i);
                r.nextToken();
                return r.parseExpression();
            };
            he.tokenizer = function(t, i) {
                return new this(i, t);
            };
            Object.defineProperties(he.prototype, pe);
            var ue = he.prototype;
            var le = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
            ue.strictDirective = function(e) {
                if (this.options.ecmaVersion < 5) return false;
                for (;;) {
                    E.lastIndex = e;
                    e += E.exec(this.input)[0].length;
                    var t = le.exec(this.input.slice(e));
                    if (!t) return false;
                    if ((t[1] || t[2]) === "use strict") {
                        E.lastIndex = e + t[0].length;
                        var i = E.exec(this.input), s = i.index + i[0].length;
                        var r = this.input.charAt(s);
                        return r === ";" || r === "}" || k.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || r === "!" && this.input.charAt(s + 1) === "=" || r === "i" && ce(this, s));
                    }
                    e += t[0].length;
                    E.lastIndex = e;
                    e += E.exec(this.input)[0].length;
                    this.input[e] === ";" && e++;
                }
            };
            function ce(e, t) {
                var i = t + 1, s = Math.min(e.input.length, t + 11);
                while (i < s) {
                    var r = e.fullCharCodeAt(i);
                    if (!f(r, true)) break;
                    i += r <= 65535 ? 1 : 2;
                }
                return i === t + 2 && e.input.slice(t, i) === "in" || i === t + 10 && e.input.slice(t, i) === "instanceof";
            }
            ue.eat = function(e) {
                if (this.type === e) {
                    this.next();
                    return true;
                }
                return false;
            };
            ue.isContextual = function(e) {
                return this.type === b.name && this.value === e && !this.containsEsc;
            };
            ue.eatContextual = function(e) {
                if (!this.isContextual(e)) return false;
                this.next();
                return true;
            };
            ue.catchStackOverflow = function(e) {
                try {
                    return e();
                } catch (e) {
                    if (!(e instanceof Error && (/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message) || /\btoo much recursion\b/i.test(e.message)))) throw e;
                    this.raise(this.start, "Not enough stack space to parse input");
                }
            };
            ue.expectContextual = function(e) {
                this.eatContextual(e) || this.unexpected();
            };
            ue.canInsertSemicolon = function() {
                return this.type === b.eof || this.type === b.braceR || k.test(this.input.slice(this.lastTokEnd, this.start));
            };
            ue.insertSemicolon = function() {
                if (this.canInsertSemicolon()) {
                    this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
                    return true;
                }
            };
            ue.semicolon = function() {
                this.eat(b.semi) || this.insertSemicolon() || this.unexpected();
            };
            ue.afterTrailingComma = function(e, t) {
                if (this.type === e) {
                    this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
                    t || this.next();
                    return true;
                }
            };
            ue.expect = function(e) {
                this.eat(e) || this.unexpected();
            };
            ue.unexpected = function(e) {
                this.raise(e != null ? e : this.start, "Unexpected token");
            };
            var fe = function() {
                this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
            };
            ue.checkPatternErrors = function(e, t) {
                if (!e) return;
                e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
                var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
                i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
            };
            ue.checkExpressionErrors = function(e, t) {
                if (!e) return false;
                var i = e.shorthandAssign;
                var s = e.doubleProto;
                if (!t) return i >= 0 || s >= 0;
                i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns");
                s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
            };
            ue.checkYieldAwaitInDefaultParams = function() {
                this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value");
                this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
            };
            ue.isSimpleAssignTarget = function(e) {
                if (e.type === "ParenthesizedExpression") return this.isSimpleAssignTarget(e.expression);
                return e.type === "Identifier" || e.type === "MemberExpression";
            };
            var de = he.prototype;
            de.parseTopLevel = function(e) {
                var t = Object.create(null);
                e.body || (e.body = []);
                while (this.type !== b.eof) {
                    var i = this.parseStatement(null, true, t);
                    e.body.push(i);
                }
                if (this.inModule) for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
                    var a = r[s];
                    this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
                }
                this.adaptDirectivePrologue(e.body);
                this.next();
                e.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
                return this.finishNode(e, "Program");
            };
            var me = {
                kind: "loop"
            }, ve = {
                kind: "switch"
            };
            de.isLet = function(e) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return false;
                E.lastIndex = this.pos;
                var t = E.exec(this.input);
                var i = this.pos + t[0].length, s = this.fullCharCodeAt(i);
                if (s === 91 || s === 92) return true;
                if (e) return false;
                if (s === 123) return true;
                if (c(s)) {
                    var r = i;
                    do {
                        i += s <= 65535 ? 1 : 2;
                    } while (f(s = this.fullCharCodeAt(i)));
                    if (s === 92) return true;
                    var a = this.input.slice(r, i);
                    if (!h.test(a)) return true;
                }
                return false;
            };
            de.isAsyncFunction = function() {
                if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return false;
                E.lastIndex = this.pos;
                var e = E.exec(this.input);
                var i, t = this.pos + e[0].length;
                return !k.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(f(i = this.fullCharCodeAt(t + 8)) || i === 92));
            };
            de.isUsingKeyword = function(e, t) {
                if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using")) return false;
                E.lastIndex = this.pos;
                var i = E.exec(this.input);
                var s = this.pos + i[0].length;
                if (k.test(this.input.slice(this.pos, s))) return false;
                if (e) {
                    var a, r = s + 5;
                    if (this.input.slice(s, r) !== "using" || r === this.input.length || f(a = this.fullCharCodeAt(r)) || a === 92) return false;
                    E.lastIndex = r;
                    var n = E.exec(this.input);
                    s = r + n[0].length;
                    if (n && k.test(this.input.slice(r, s))) return false;
                }
                var o = this.fullCharCodeAt(s);
                if (!c(o) && o !== 92) return false;
                var p = s;
                do {
                    s += o <= 65535 ? 1 : 2;
                } while (f(o = this.fullCharCodeAt(s)));
                if (o === 92) return true;
                var u = this.input.slice(p, s);
                if (h.test(u)) return false;
                if (t && !e && u === "of") {
                    E.lastIndex = s;
                    var l = E.exec(this.input);
                    s += l[0].length;
                    if (this.input.charCodeAt(s) !== 61 || (o = this.input.charCodeAt(s + 1)) === 61 || o === 62) return false;
                }
                return true;
            };
            de.isAwaitUsing = function(e) {
                return this.isUsingKeyword(true, e);
            };
            de.isUsing = function(e) {
                return this.isUsingKeyword(false, e);
            };
            de.parseStatement = function(e, t, i) {
                var a, s = this.type, r = this.startNode();
                if (this.isLet(e)) {
                    s = b._var;
                    a = "let";
                }
                switch (s) {
                  case b._break:
                  case b._continue:
                    return this.parseBreakContinueStatement(r, s.keyword);

                  case b._debugger:
                    return this.parseDebuggerStatement(r);

                  case b._do:
                    return this.parseDoStatement(r);

                  case b._for:
                    return this.parseForStatement(r);

                  case b._function:
                    e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected();
                    return this.parseFunctionStatement(r, false, !e);

                  case b._class:
                    e && this.unexpected();
                    return this.parseClass(r, true);

                  case b._if:
                    return this.parseIfStatement(r);

                  case b._return:
                    return this.parseReturnStatement(r);

                  case b._switch:
                    return this.parseSwitchStatement(r);

                  case b._throw:
                    return this.parseThrowStatement(r);

                  case b._try:
                    return this.parseTryStatement(r);

                  case b._const:
                  case b._var:
                    a = a || this.value;
                    e && a !== "var" && this.unexpected();
                    return this.parseVarStatement(r, a);

                  case b._while:
                    return this.parseWhileStatement(r);

                  case b._with:
                    return this.parseWithStatement(r);

                  case b.braceL:
                    return this.parseBlock(true, r);

                  case b.semi:
                    return this.parseEmptyStatement(r);

                  case b._export:
                  case b._import:
                    if (this.options.ecmaVersion > 10 && s === b._import) {
                        E.lastIndex = this.pos;
                        var n = E.exec(this.input);
                        var o = this.pos + n[0].length, h = this.input.charCodeAt(o);
                        if (h === 40 || h === 46) return this.parseExpressionStatement(r, this.parseExpression());
                    }
                    if (!this.options.allowImportExportEverywhere) {
                        t || this.raise(this.start, "'import' and 'export' may only appear at the top level");
                        this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
                    }
                    return s === b._import ? this.parseImport(r) : this.parseExport(r, i);

                  default:
                    if (this.isAsyncFunction()) {
                        e && this.unexpected();
                        this.next();
                        return this.parseFunctionStatement(r, true, !e);
                    }
                    var p = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
                    if (p) {
                        this.allowUsing || this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement");
                        e && this.raise(this.start, "Using declaration is not allowed in single-statement positions");
                        if (p === "await using") {
                            this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function");
                            this.next();
                        }
                        this.next();
                        this.parseVar(r, false, p);
                        this.semicolon();
                        return this.finishNode(r, "VariableDeclaration");
                    }
                    var u = this.value, l = this.parseExpression();
                    return s === b.name && l.type === "Identifier" && this.eat(b.colon) ? this.parseLabeledStatement(r, u, l, e) : this.parseExpressionStatement(r, l);
                }
            };
            de.parseBreakContinueStatement = function(e, t) {
                var i = t === "break";
                this.next();
                if (this.eat(b.semi) || this.insertSemicolon()) e.label = null; else if (this.type !== b.name) this.unexpected(); else {
                    e.label = this.parseIdent();
                    this.semicolon();
                }
                var s = 0;
                for (;s < this.labels.length; ++s) {
                    var r = this.labels[s];
                    if (e.label == null || r.name === e.label.name) {
                        if (r.kind != null && (i || r.kind === "loop")) break;
                        if (e.label && i) break;
                    }
                }
                s === this.labels.length && this.raise(e.start, "Unsyntactic " + t);
                return this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
            };
            de.parseDebuggerStatement = function(e) {
                this.next();
                this.semicolon();
                return this.finishNode(e, "DebuggerStatement");
            };
            de.parseDoStatement = function(e) {
                this.next();
                this.labels.push(me);
                e.body = this.parseStatement("do");
                this.labels.pop();
                this.expect(b._while);
                e.test = this.parseParenExpression();
                this.options.ecmaVersion >= 6 ? this.eat(b.semi) : this.semicolon();
                return this.finishNode(e, "DoWhileStatement");
            };
            de.parseForStatement = function(e) {
                this.next();
                var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
                this.labels.push(me);
                this.enterScope(0);
                this.expect(b.parenL);
                if (this.type === b.semi) {
                    t > -1 && this.unexpected(t);
                    return this.parseFor(e, null);
                }
                var i = this.isLet();
                if (this.type === b._var || this.type === b._const || i) {
                    var s = this.startNode(), r = i ? "let" : this.value;
                    this.next();
                    this.parseVar(s, true, r);
                    this.finishNode(s, "VariableDeclaration");
                    return this.parseForAfterInit(e, s, t);
                }
                var a = this.isContextual("let"), n = false;
                var o = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
                if (o) {
                    var h = this.startNode();
                    this.next();
                    if (o === "await using") {
                        this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function");
                        this.next();
                    }
                    this.parseVar(h, true, o);
                    this.finishNode(h, "VariableDeclaration");
                    return this.parseForAfterInit(e, h, t);
                }
                var p = this.containsEsc;
                var u = new fe;
                var l = this.start;
                var c = t > -1 ? this.parseExprSubscripts(u, "await") : this.parseExpression(true, u);
                if (this.type === b._in || (n = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
                    if (t > -1) {
                        this.type === b._in && this.unexpected(t);
                        e.await = true;
                    } else n && this.options.ecmaVersion >= 8 && (c.start !== l || p || c.type !== "Identifier" || c.name !== "async" ? this.options.ecmaVersion >= 9 && (e.await = false) : this.unexpected());
                    a && n && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'.");
                    this.toAssignable(c, false, u);
                    this.checkLValPattern(c);
                    return this.parseForIn(e, c);
                }
                this.checkExpressionErrors(u, true);
                t > -1 && this.unexpected(t);
                return this.parseFor(e, c);
            };
            de.parseForAfterInit = function(e, t, i) {
                if ((this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1) {
                    if (this.type === b._in) {
                        t.kind !== "using" && t.kind !== "await using" || t.declarations[0].init || this.raise(this.start, "Using declaration is not allowed in for-in loops");
                        this.options.ecmaVersion >= 9 && i > -1 && this.unexpected(i);
                    } else this.options.ecmaVersion >= 9 && (e.await = i > -1);
                    return this.parseForIn(e, t);
                }
                i > -1 && this.unexpected(i);
                return this.parseFor(e, t);
            };
            de.parseFunctionStatement = function(e, t, i) {
                this.next();
                return this.parseFunction(e, xe | (i ? 0 : ye), false, t);
            };
            de.parseIfStatement = function(e) {
                this.next();
                e.test = this.parseParenExpression();
                e.consequent = this.parseStatement("if");
                e.alternate = this.eat(b._else) ? this.parseStatement("if") : null;
                return this.finishNode(e, "IfStatement");
            };
            de.parseReturnStatement = function(e) {
                this.allowReturn || this.raise(this.start, "'return' outside of function");
                this.next();
                if (this.eat(b.semi) || this.insertSemicolon()) e.argument = null; else {
                    e.argument = this.parseExpression();
                    this.semicolon();
                }
                return this.finishNode(e, "ReturnStatement");
            };
            de.parseSwitchStatement = function(e) {
                this.next();
                e.discriminant = this.parseParenExpression();
                e.cases = [];
                this.expect(b.braceL);
                this.labels.push(ve);
                this.enterScope(J);
                var t;
                for (var i = false; this.type !== b.braceR; ) if (this.type === b._case || this.type === b._default) {
                    var s = this.type === b._case;
                    t && this.finishNode(t, "SwitchCase");
                    e.cases.push(t = this.startNode());
                    t.consequent = [];
                    this.next();
                    if (s) t.test = this.parseExpression(); else {
                        i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
                        i = true;
                        t.test = null;
                    }
                    this.expect(b.colon);
                } else {
                    t || this.unexpected();
                    t.consequent.push(this.parseStatement(null));
                }
                this.exitScope();
                t && this.finishNode(t, "SwitchCase");
                this.next();
                this.labels.pop();
                return this.finishNode(e, "SwitchStatement");
            };
            de.parseThrowStatement = function(e) {
                this.next();
                k.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw");
                e.argument = this.parseExpression();
                this.semicolon();
                return this.finishNode(e, "ThrowStatement");
            };
            var ge = [];
            de.parseCatchClauseParam = function() {
                var e = this.parseBindingAtom();
                var t = e.type === "Identifier";
                this.enterScope(t ? Q : 0);
                this.checkLValPattern(e, t ? ne : re);
                this.expect(b.parenR);
                return e;
            };
            de.parseTryStatement = function(e) {
                this.next();
                e.block = this.parseBlock();
                e.handler = null;
                if (this.type === b._catch) {
                    var t = this.startNode();
                    this.next();
                    if (this.eat(b.parenL)) t.param = this.parseCatchClauseParam(); else {
                        this.options.ecmaVersion < 10 && this.unexpected();
                        t.param = null;
                        this.enterScope(0);
                    }
                    t.body = this.parseBlock(false);
                    this.exitScope();
                    e.handler = this.finishNode(t, "CatchClause");
                }
                e.finalizer = this.eat(b._finally) ? this.parseBlock() : null;
                e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause");
                return this.finishNode(e, "TryStatement");
            };
            de.parseVarStatement = function(e, t, i) {
                this.next();
                this.parseVar(e, false, t, i);
                this.semicolon();
                return this.finishNode(e, "VariableDeclaration");
            };
            de.parseWhileStatement = function(e) {
                this.next();
                e.test = this.parseParenExpression();
                this.labels.push(me);
                e.body = this.parseStatement("while");
                this.labels.pop();
                return this.finishNode(e, "WhileStatement");
            };
            de.parseWithStatement = function(e) {
                this.strict && this.raise(this.start, "'with' in strict mode");
                this.next();
                e.object = this.parseParenExpression();
                e.body = this.parseStatement("with");
                return this.finishNode(e, "WithStatement");
            };
            de.parseEmptyStatement = function(e) {
                this.next();
                return this.finishNode(e, "EmptyStatement");
            };
            de.parseLabeledStatement = function(e, t, i, s) {
                for (var r = 0, a = this.labels; r < a.length; r += 1) {
                    var n = a[r];
                    n.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
                }
                var o = this.type.isLoop ? "loop" : this.type === b._switch ? "switch" : null;
                for (var h = this.labels.length - 1; h >= 0; h--) {
                    var p = this.labels[h];
                    if (p.statementStart !== e.start) break;
                    p.statementStart = this.start;
                    p.kind = o;
                }
                this.labels.push({
                    name: t,
                    kind: o,
                    statementStart: this.start
                });
                e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label");
                this.labels.pop();
                e.label = i;
                return this.finishNode(e, "LabeledStatement");
            };
            de.parseExpressionStatement = function(e, t) {
                e.expression = t;
                this.semicolon();
                return this.finishNode(e, "ExpressionStatement");
            };
            de.parseBlock = function(e, t, i) {
                e === void 0 && (e = true);
                t === void 0 && (t = this.startNode());
                t.body = [];
                this.expect(b.braceL);
                e && this.enterScope(0);
                while (this.type !== b.braceR) {
                    var s = this.parseStatement(null);
                    t.body.push(s);
                }
                i && (this.strict = false);
                this.next();
                e && this.exitScope();
                return this.finishNode(t, "BlockStatement");
            };
            de.parseFor = function(e, t) {
                e.init = t;
                this.expect(b.semi);
                e.test = this.type === b.semi ? null : this.parseExpression();
                this.expect(b.semi);
                e.update = this.type === b.parenR ? null : this.parseExpression();
                this.expect(b.parenR);
                e.body = this.parseStatement("for");
                this.exitScope();
                this.labels.pop();
                return this.finishNode(e, "ForStatement");
            };
            de.parseForIn = function(e, t) {
                var i = this.type === b._in;
                this.next();
                t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
                e.left = t;
                e.right = i ? this.parseExpression() : this.parseMaybeAssign();
                this.expect(b.parenR);
                e.body = this.parseStatement("for");
                this.exitScope();
                this.labels.pop();
                return this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
            };
            de.parseVar = function(e, t, i, s) {
                e.declarations = [];
                e.kind = i;
                for (;;) {
                    var r = this.startNode();
                    this.parseVarId(r, i);
                    this.eat(b.eq) ? r.init = this.parseMaybeAssign(t) : s || i !== "const" || this.type === b._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? s || i !== "using" && i !== "await using" || !(this.options.ecmaVersion >= 17) || this.type === b._in || this.isContextual("of") ? s || r.id.type === "Identifier" || t && (this.type === b._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : this.unexpected();
                    e.declarations.push(this.finishNode(r, "VariableDeclarator"));
                    if (!this.eat(b.comma)) break;
                }
                return e;
            };
            de.parseVarId = function(e, t) {
                e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom();
                this.checkLValPattern(e.id, t === "var" ? se : re, false);
            };
            var xe = 1, ye = 2, be = 4;
            de.parseFunction = function(e, t, i, s, r) {
                this.initFunction(e);
                if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) {
                    this.type === b.star && t & ye && this.unexpected();
                    e.generator = this.eat(b.star);
                }
                this.options.ecmaVersion >= 8 && (e.async = !!s);
                if (t & xe) {
                    e.id = t & be && this.type !== b.name ? null : this.parseIdent();
                    !e.id || t & ye || this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? se : re : ae);
                }
                var a = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
                this.yieldPos = 0;
                this.awaitPos = 0;
                this.awaitIdentPos = 0;
                this.enterScope(te(e.async, e.generator));
                t & xe || (e.id = this.type === b.name ? this.parseIdent() : null);
                this.parseFunctionParams(e);
                this.parseFunctionBody(e, i, false, r);
                this.yieldPos = a;
                this.awaitPos = n;
                this.awaitIdentPos = o;
                return this.finishNode(e, t & xe ? "FunctionDeclaration" : "FunctionExpression");
            };
            de.parseFunctionParams = function(e) {
                this.expect(b.parenL);
                e.params = this.parseBindingList(b.parenR, false, this.options.ecmaVersion >= 8);
                this.checkYieldAwaitInDefaultParams();
            };
            de.parseClass = function(e, t) {
                this.next();
                var i = this.strict;
                this.strict = true;
                this.parseClassId(e, t);
                this.parseClassSuper(e);
                var s = this.enterClassBody();
                var r = this.startNode();
                var a = false;
                r.body = [];
                this.expect(b.braceL);
                while (this.type !== b.braceR) {
                    var n = this.parseClassElement(e.superClass !== null);
                    if (n) {
                        r.body.push(n);
                        if (n.type === "MethodDefinition" && n.kind === "constructor") {
                            a && this.raiseRecoverable(n.start, "Duplicate constructor in the same class");
                            a = true;
                        } else n.key && n.key.type === "PrivateIdentifier" && ke(s, n) && this.raiseRecoverable(n.key.start, "Identifier '#" + n.key.name + "' has already been declared");
                    }
                }
                this.strict = i;
                this.next();
                e.body = this.finishNode(r, "ClassBody");
                this.exitClassBody();
                return this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
            };
            de.parseClassElement = function(e) {
                if (this.eat(b.semi)) return null;
                var t = this.options.ecmaVersion;
                var i = this.startNode();
                var s = "";
                var r = false;
                var a = false;
                var n = "method";
                var o = false;
                if (this.eatContextual("static")) {
                    if (t >= 13 && this.eat(b.braceL)) {
                        this.parseClassStaticBlock(i);
                        return i;
                    }
                    this.isClassElementNameStart() || this.type === b.star ? o = true : s = "static";
                }
                i.static = o;
                !s && t >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== b.star || this.canInsertSemicolon() ? s = "async" : a = true);
                !s && (t >= 9 || !a) && this.eat(b.star) && (r = true);
                if (!s && !a && !r) {
                    var h = this.value;
                    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? n = h : s = h);
                }
                if (s) {
                    i.computed = false;
                    i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
                    i.key.name = s;
                    this.finishNode(i.key, "Identifier");
                } else this.parseClassElementName(i);
                if (t < 13 || this.type === b.parenL || n !== "method" || r || a) {
                    var p = !i.static && _e(i, "constructor");
                    var u = p && e;
                    p && n !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier");
                    i.kind = p ? "constructor" : n;
                    this.parseClassMethod(i, r, a, u);
                } else this.parseClassField(i);
                return i;
            };
            de.isClassElementNameStart = function() {
                return this.type === b.name || this.type === b.privateId || this.type === b.num || this.type === b.string || this.type === b.bracketL || this.type.keyword;
            };
            de.parseClassElementName = function(e) {
                if (this.type === b.privateId) {
                    this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'");
                    e.computed = false;
                    e.key = this.parsePrivateIdent();
                } else this.parsePropertyName(e);
            };
            de.parseClassMethod = function(e, t, i, s) {
                var r = e.key;
                if (e.kind === "constructor") {
                    t && this.raise(r.start, "Constructor can't be a generator");
                    i && this.raise(r.start, "Constructor can't be an async method");
                } else e.static && _e(e, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
                var a = e.value = this.parseMethod(t, i, s);
                e.kind === "get" && a.params.length !== 0 && this.raiseRecoverable(a.start, "getter should have no params");
                e.kind === "set" && a.params.length !== 1 && this.raiseRecoverable(a.start, "setter should have exactly one param");
                e.kind === "set" && a.params[0].type === "RestElement" && this.raiseRecoverable(a.params[0].start, "Setter cannot use rest params");
                return this.finishNode(e, "MethodDefinition");
            };
            de.parseClassField = function(e) {
                _e(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && _e(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'");
                if (this.eat(b.eq)) {
                    this.enterScope($ | Y);
                    e.value = this.parseMaybeAssign();
                    this.exitScope();
                } else e.value = null;
                this.semicolon();
                return this.finishNode(e, "PropertyDefinition");
            };
            de.parseClassStaticBlock = function(e) {
                e.body = [];
                var t = this.labels;
                this.labels = [];
                this.enterScope(Z | Y);
                while (this.type !== b.braceR) {
                    var i = this.parseStatement(null);
                    e.body.push(i);
                }
                this.next();
                this.exitScope();
                this.labels = t;
                return this.finishNode(e, "StaticBlock");
            };
            de.parseClassId = function(e, t) {
                if (this.type === b.name) {
                    e.id = this.parseIdent();
                    t && this.checkLValSimple(e.id, re, false);
                } else {
                    t === true && this.unexpected();
                    e.id = null;
                }
            };
            de.parseClassSuper = function(e) {
                e.superClass = this.eat(b._extends) ? this.parseExprSubscripts(null, false) : null;
            };
            de.enterClassBody = function() {
                var e = {
                    declared: Object.create(null),
                    used: []
                };
                this.privateNameStack.push(e);
                return e.declared;
            };
            de.exitClassBody = function() {
                var e = this.privateNameStack.pop();
                var t = e.declared;
                var i = e.used;
                if (!this.options.checkPrivateFields) return;
                var s = this.privateNameStack.length;
                var r = s === 0 ? null : this.privateNameStack[s - 1];
                for (var a = 0; a < i.length; ++a) {
                    var n = i[a];
                    V(t, n.name) || (r ? r.used.push(n) : this.raiseRecoverable(n.start, "Private field '#" + n.name + "' must be declared in an enclosing class"));
                }
            };
            function ke(e, t) {
                var i = t.key.name;
                var s = e[i];
                var r = "true";
                t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (r = (t.static ? "s" : "i") + t.kind);
                if (s === "iget" && r === "iset" || s === "iset" && r === "iget" || s === "sget" && r === "sset" || s === "sset" && r === "sget") {
                    e[i] = "true";
                    return false;
                }
                if (s) return true;
                e[i] = r;
                return false;
            }
            function _e(e, t) {
                var i = e.computed;
                var s = e.key;
                return !i && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
            }
            de.parseExportAllDeclaration = function(e, t) {
                if (this.options.ecmaVersion >= 11) if (this.eatContextual("as")) {
                    e.exported = this.parseModuleExportName();
                    this.checkExport(t, e.exported, this.lastTokStart);
                } else e.exported = null;
                this.expectContextual("from");
                this.type !== b.string && this.unexpected();
                e.source = this.parseExprAtom();
                this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
                this.semicolon();
                return this.finishNode(e, "ExportAllDeclaration");
            };
            de.parseExport = function(e, t) {
                this.next();
                if (this.eat(b.star)) return this.parseExportAllDeclaration(e, t);
                if (this.eat(b._default)) {
                    this.checkExport(t, "default", this.lastTokStart);
                    e.declaration = this.parseExportDefaultDeclaration();
                    return this.finishNode(e, "ExportDefaultDeclaration");
                }
                if (this.shouldParseExportStatement()) {
                    e.declaration = this.parseExportDeclaration(e);
                    e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start);
                    e.specifiers = [];
                    e.source = null;
                    this.options.ecmaVersion >= 16 && (e.attributes = []);
                } else {
                    e.declaration = null;
                    e.specifiers = this.parseExportSpecifiers(t);
                    if (this.eatContextual("from")) {
                        this.type !== b.string && this.unexpected();
                        e.source = this.parseExprAtom();
                        this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
                    } else {
                        for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
                            var r = s[i];
                            this.checkUnreserved(r.local);
                            this.checkLocalExport(r.local);
                            r.local.type === "Literal" && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
                        }
                        e.source = null;
                        this.options.ecmaVersion >= 16 && (e.attributes = []);
                    }
                    this.semicolon();
                }
                return this.finishNode(e, "ExportNamedDeclaration");
            };
            de.parseExportDeclaration = function(e) {
                return this.parseStatement(null);
            };
            de.parseExportDefaultDeclaration = function() {
                var e;
                if (this.type === b._function || (e = this.isAsyncFunction())) {
                    var t = this.startNode();
                    this.next();
                    e && this.next();
                    return this.parseFunction(t, xe | be, false, e);
                }
                if (this.type === b._class) {
                    var i = this.startNode();
                    return this.parseClass(i, "nullableID");
                }
                var s = this.parseMaybeAssign();
                this.semicolon();
                return s;
            };
            de.checkExport = function(e, t, i) {
                if (!e) return;
                typeof t !== "string" && (t = t.type === "Identifier" ? t.name : t.value);
                V(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'");
                e[t] = true;
            };
            de.checkPatternExport = function(e, t) {
                var i = t.type;
                if (i === "Identifier") this.checkExport(e, t, t.start); else if (i === "ObjectPattern") for (var s = 0, r = t.properties; s < r.length; s += 1) {
                    var a = r[s];
                    this.checkPatternExport(e, a);
                } else if (i === "ArrayPattern") for (var n = 0, o = t.elements; n < o.length; n += 1) {
                    var h = o[n];
                    h && this.checkPatternExport(e, h);
                } else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
            };
            de.checkVariableExport = function(e, t) {
                if (!e) return;
                for (var i = 0, s = t; i < s.length; i += 1) {
                    var r = s[i];
                    this.checkPatternExport(e, r.id);
                }
            };
            de.shouldParseExportStatement = function() {
                return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
            };
            de.parseExportSpecifier = function(e) {
                var t = this.startNode();
                t.local = this.parseModuleExportName();
                t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local;
                this.checkExport(e, t.exported, t.exported.start);
                return this.finishNode(t, "ExportSpecifier");
            };
            de.parseExportSpecifiers = function(e) {
                var t = [], i = true;
                this.expect(b.braceL);
                while (!this.eat(b.braceR)) {
                    if (i) i = false; else {
                        this.expect(b.comma);
                        if (this.afterTrailingComma(b.braceR)) break;
                    }
                    t.push(this.parseExportSpecifier(e));
                }
                return t;
            };
            de.parseImport = function(e) {
                this.next();
                if (this.type === b.string) {
                    e.specifiers = ge;
                    e.source = this.parseExprAtom();
                } else {
                    e.specifiers = this.parseImportSpecifiers();
                    this.expectContextual("from");
                    e.source = this.type === b.string ? this.parseExprAtom() : this.unexpected();
                }
                this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
                this.semicolon();
                return this.finishNode(e, "ImportDeclaration");
            };
            de.parseImportSpecifier = function() {
                var e = this.startNode();
                e.imported = this.parseModuleExportName();
                if (this.eatContextual("as")) e.local = this.parseIdent(); else {
                    this.checkUnreserved(e.imported);
                    e.local = e.imported;
                }
                this.checkLValSimple(e.local, re);
                return this.finishNode(e, "ImportSpecifier");
            };
            de.parseImportDefaultSpecifier = function() {
                var e = this.startNode();
                e.local = this.parseIdent();
                this.checkLValSimple(e.local, re);
                return this.finishNode(e, "ImportDefaultSpecifier");
            };
            de.parseImportNamespaceSpecifier = function() {
                var e = this.startNode();
                this.next();
                this.expectContextual("as");
                e.local = this.parseIdent();
                this.checkLValSimple(e.local, re);
                return this.finishNode(e, "ImportNamespaceSpecifier");
            };
            de.parseImportSpecifiers = function() {
                var e = [], t = true;
                if (this.type === b.name) {
                    e.push(this.parseImportDefaultSpecifier());
                    if (!this.eat(b.comma)) return e;
                }
                if (this.type === b.star) {
                    e.push(this.parseImportNamespaceSpecifier());
                    return e;
                }
                this.expect(b.braceL);
                while (!this.eat(b.braceR)) {
                    if (t) t = false; else {
                        this.expect(b.comma);
                        if (this.afterTrailingComma(b.braceR)) break;
                    }
                    e.push(this.parseImportSpecifier());
                }
                return e;
            };
            de.parseWithClause = function() {
                var e = [];
                if (!this.eat(b._with)) return e;
                this.expect(b.braceL);
                var t = {};
                var i = true;
                while (!this.eat(b.braceR)) {
                    if (i) i = false; else {
                        this.expect(b.comma);
                        if (this.afterTrailingComma(b.braceR)) break;
                    }
                    var s = this.parseImportAttribute();
                    var r = s.key.type === "Identifier" ? s.key.name : s.key.value;
                    V(t, r) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + r + "'");
                    t[r] = true;
                    e.push(s);
                }
                return e;
            };
            de.parseImportAttribute = function() {
                var e = this.startNode();
                e.key = this.type === b.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
                this.expect(b.colon);
                this.type !== b.string && this.unexpected();
                e.value = this.parseExprAtom();
                return this.finishNode(e, "ImportAttribute");
            };
            de.parseModuleExportName = function() {
                if (this.options.ecmaVersion >= 13 && this.type === b.string) {
                    var e = this.parseLiteral(this.value);
                    D.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate.");
                    return e;
                }
                return this.parseIdent(true);
            };
            de.adaptDirectivePrologue = function(e) {
                for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
            };
            de.isDirectiveCandidate = function(e) {
                return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value === "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
            };
            var we = he.prototype;
            we.toAssignable = function(e, t, i) {
                if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
                  case "Identifier":
                    this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
                    break;

                  case "ObjectPattern":
                  case "ArrayPattern":
                  case "AssignmentPattern":
                  case "RestElement":
                    break;

                  case "ObjectExpression":
                    e.type = "ObjectPattern";
                    i && this.checkPatternErrors(i, true);
                    for (var s = 0, r = e.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.toAssignable(a, t);
                        a.type !== "RestElement" || a.argument.type !== "ArrayPattern" && a.argument.type !== "ObjectPattern" || this.raise(a.argument.start, "Unexpected token");
                    }
                    break;

                  case "Property":
                    e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter");
                    this.toAssignable(e.value, t);
                    break;

                  case "ArrayExpression":
                    e.type = "ArrayPattern";
                    i && this.checkPatternErrors(i, true);
                    this.toAssignableList(e.elements, t);
                    break;

                  case "SpreadElement":
                    e.type = "RestElement";
                    this.toAssignable(e.argument, t);
                    e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
                    break;

                  case "AssignmentExpression":
                    e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value.");
                    e.type = "AssignmentPattern";
                    delete e.operator;
                    this.toAssignable(e.left, t);
                    break;

                  case "ParenthesizedExpression":
                    this.toAssignable(e.expression, t, i);
                    break;

                  case "ChainExpression":
                    this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                    break;

                  case "MemberExpression":
                    if (!t) break;

                  default:
                    this.raise(e.start, "Assigning to rvalue");
                } else i && this.checkPatternErrors(i, true);
                return e;
            };
            we.toAssignableList = function(e, t) {
                var i = e.length;
                for (var s = 0; s < i; s++) {
                    var r = e[s];
                    r && this.toAssignable(r, t);
                }
                if (i) {
                    var a = e[i - 1];
                    this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
                }
                return e;
            };
            we.parseSpread = function(e) {
                var t = this.startNode();
                this.next();
                t.argument = this.parseMaybeAssign(false, e);
                return this.finishNode(t, "SpreadElement");
            };
            we.parseRestBinding = function() {
                var e = this.startNode();
                this.next();
                this.options.ecmaVersion === 6 && this.type !== b.name && this.unexpected();
                e.argument = this.parseBindingAtom();
                return this.finishNode(e, "RestElement");
            };
            we.parseBindingAtom = function() {
                if (this.options.ecmaVersion >= 6) switch (this.type) {
                  case b.bracketL:
                    var e = this.startNode();
                    this.next();
                    e.elements = this.parseBindingList(b.bracketR, true, true);
                    return this.finishNode(e, "ArrayPattern");

                  case b.braceL:
                    return this.parseObj(true);
                }
                return this.parseIdent();
            };
            we.parseBindingList = function(e, t, i, s) {
                var r = [], a = true;
                while (!this.eat(e)) {
                    a ? a = false : this.expect(b.comma);
                    if (t && this.type === b.comma) r.push(null); else {
                        if (i && this.afterTrailingComma(e)) break;
                        if (this.type === b.ellipsis) {
                            var n = this.parseRestBinding();
                            this.parseBindingListItem(n);
                            r.push(n);
                            this.type === b.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                            this.expect(e);
                            break;
                        }
                        r.push(this.parseAssignableListItem(s));
                    }
                }
                return r;
            };
            we.parseAssignableListItem = function(e) {
                var t = this.parseMaybeDefault(this.start, this.startLoc);
                this.parseBindingListItem(t);
                return t;
            };
            we.parseBindingListItem = function(e) {
                return e;
            };
            we.parseMaybeDefault = function(e, t, i) {
                i = i || this.parseBindingAtom();
                if (this.options.ecmaVersion < 6 || !this.eat(b.eq)) return i;
                var s = this.startNodeAt(e, t);
                s.left = i;
                s.right = this.parseMaybeAssign();
                return this.finishNode(s, "AssignmentPattern");
            };
            we.checkLValSimple = function(e, t, i) {
                t === void 0 && (t = ie);
                var s = t !== ie;
                switch (e.type) {
                  case "Identifier":
                    this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode");
                    if (s) {
                        t === re && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name");
                        if (i) {
                            V(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash");
                            i[e.name] = true;
                        }
                        t !== oe && this.declareName(e.name, t, e.start);
                    }
                    break;

                  case "ChainExpression":
                    this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                    break;

                  case "MemberExpression":
                    s && this.raiseRecoverable(e.start, "Binding member expression");
                    break;

                  case "ParenthesizedExpression":
                    s && this.raiseRecoverable(e.start, "Binding parenthesized expression");
                    return this.checkLValSimple(e.expression, t, i);

                  default:
                    this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
                }
            };
            we.checkLValPattern = function(e, t, i) {
                t === void 0 && (t = ie);
                switch (e.type) {
                  case "ObjectPattern":
                    for (var s = 0, r = e.properties; s < r.length; s += 1) {
                        var a = r[s];
                        this.checkLValInnerPattern(a, t, i);
                    }
                    break;

                  case "ArrayPattern":
                    for (var n = 0, o = e.elements; n < o.length; n += 1) {
                        var h = o[n];
                        h && this.checkLValInnerPattern(h, t, i);
                    }
                    break;

                  default:
                    this.checkLValSimple(e, t, i);
                }
            };
            we.checkLValInnerPattern = function(e, t, i) {
                t === void 0 && (t = ie);
                switch (e.type) {
                  case "Property":
                    this.checkLValInnerPattern(e.value, t, i);
                    break;

                  case "AssignmentPattern":
                    this.checkLValPattern(e.left, t, i);
                    break;

                  case "RestElement":
                    this.checkLValPattern(e.argument, t, i);
                    break;

                  default:
                    this.checkLValPattern(e, t, i);
                }
            };
            var Se = function(t, i, s, r, a) {
                this.token = t;
                this.isExpr = !!i;
                this.preserveSpace = !!s;
                this.override = r;
                this.generator = !!a;
            };
            var Ce = {
                b_stat: new Se("{", false),
                b_expr: new Se("{", true),
                b_tmpl: new Se("${", false),
                p_stat: new Se("(", false),
                p_expr: new Se("(", true),
                q_tmpl: new Se("`", true, true, function(e) {
                    return e.tryReadTemplateToken();
                }),
                f_stat: new Se("function", false),
                f_expr: new Se("function", true),
                f_expr_gen: new Se("function", true, false, null, true),
                f_gen: new Se("function", false, false, null, true)
            };
            var Ee = he.prototype;
            Ee.initialContext = function() {
                return [ Ce.b_stat ];
            };
            Ee.curContext = function() {
                return this.context[this.context.length - 1];
            };
            Ee.braceIsBlock = function(e) {
                var t = this.curContext();
                if (t === Ce.f_expr || t === Ce.f_stat) return true;
                if (e === b.colon && (t === Ce.b_stat || t === Ce.b_expr)) return !t.isExpr;
                if (e === b._return || e === b.name && this.exprAllowed) return k.test(this.input.slice(this.lastTokEnd, this.start));
                if (e === b._else || e === b.semi || e === b.eof || e === b.parenR || e === b.arrow) return true;
                if (e === b.braceL) return t === Ce.b_stat;
                if (e === b._var || e === b._const || e === b.name) return false;
                return !this.exprAllowed;
            };
            Ee.inGeneratorContext = function() {
                for (var e = this.context.length - 1; e >= 1; e--) {
                    var t = this.context[e];
                    if (t.token === "function") return t.generator;
                }
                return false;
            };
            Ee.updateContext = function(e) {
                var t, i = this.type;
                i.keyword && e === b.dot ? this.exprAllowed = false : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
            };
            Ee.overrideContext = function(e) {
                this.curContext() !== e && (this.context[this.context.length - 1] = e);
            };
            b.parenR.updateContext = b.braceR.updateContext = function() {
                if (this.context.length === 1) {
                    this.exprAllowed = true;
                    return;
                }
                var e = this.context.pop();
                e === Ce.b_stat && this.curContext().token === "function" && (e = this.context.pop());
                this.exprAllowed = !e.isExpr;
            };
            b.braceL.updateContext = function(e) {
                this.context.push(this.braceIsBlock(e) ? Ce.b_stat : Ce.b_expr);
                this.exprAllowed = true;
            };
            b.dollarBraceL.updateContext = function() {
                this.context.push(Ce.b_tmpl);
                this.exprAllowed = true;
            };
            b.parenL.updateContext = function(e) {
                var t = e === b._if || e === b._for || e === b._with || e === b._while;
                this.context.push(t ? Ce.p_stat : Ce.p_expr);
                this.exprAllowed = true;
            };
            b.incDec.updateContext = function() {};
            b._function.updateContext = b._class.updateContext = function(e) {
                !e.beforeExpr || e === b._else || e === b.semi && this.curContext() !== Ce.p_stat || e === b._return && k.test(this.input.slice(this.lastTokEnd, this.start)) || (e === b.colon || e === b.braceL) && this.curContext() === Ce.b_stat ? this.context.push(Ce.f_stat) : this.context.push(Ce.f_expr);
                this.exprAllowed = false;
            };
            b.colon.updateContext = function() {
                this.curContext().token === "function" && this.context.pop();
                this.exprAllowed = true;
            };
            b.backQuote.updateContext = function() {
                this.curContext() === Ce.q_tmpl ? this.context.pop() : this.context.push(Ce.q_tmpl);
                this.exprAllowed = false;
            };
            b.star.updateContext = function(e) {
                if (e === b._function) {
                    var t = this.context.length - 1;
                    this.context[t] === Ce.f_expr ? this.context[t] = Ce.f_expr_gen : this.context[t] = Ce.f_gen;
                }
                this.exprAllowed = true;
            };
            b.name.updateContext = function(e) {
                var t = false;
                this.options.ecmaVersion >= 6 && e !== b.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = true);
                this.exprAllowed = t;
            };
            var Ae = he.prototype;
            Ae.checkPropClash = function(e, t, i) {
                if (this.options.ecmaVersion >= 9 && e.type === "SpreadElement") return;
                if (this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand)) return;
                var s = e.key;
                var r;
                switch (s.type) {
                  case "Identifier":
                    r = s.name;
                    break;

                  case "Literal":
                    r = String(s.value);
                    break;

                  default:
                    return;
                }
                var a = e.kind;
                if (this.options.ecmaVersion >= 6) {
                    if (r === "__proto__" && a === "init") {
                        t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property"));
                        t.proto = true;
                    }
                    return;
                }
                r = "$" + r;
                var n = t[r];
                if (n) {
                    var o;
                    o = a === "init" ? this.strict && n.init || n.get || n.set : n.init || n[a];
                    o && this.raiseRecoverable(s.start, "Redefinition of property");
                } else n = t[r] = {
                    init: false,
                    get: false,
                    set: false
                };
                n[a] = true;
            };
            Ae.parseExpression = function(e, t) {
                var i = this;
                return this.catchStackOverflow(function() {
                    var s = i.start, r = i.startLoc;
                    var a = i.parseMaybeAssign(e, t);
                    if (i.type === b.comma) {
                        var n = i.startNodeAt(s, r);
                        n.expressions = [ a ];
                        while (i.eat(b.comma)) n.expressions.push(i.parseMaybeAssign(e, t));
                        return i.finishNode(n, "SequenceExpression");
                    }
                    return a;
                });
            };
            Ae.parseMaybeAssign = function(e, t, i) {
                if (this.isContextual("yield")) {
                    if (this.inGenerator) return this.parseYield(e);
                    this.exprAllowed = false;
                }
                var s = false, r = -1, a = -1, n = -1;
                if (t) {
                    r = t.parenthesizedAssign;
                    a = t.trailingComma;
                    n = t.doubleProto;
                    t.parenthesizedAssign = t.trailingComma = -1;
                } else {
                    t = new fe;
                    s = true;
                }
                var o = this.start, h = this.startLoc;
                if (this.type === b.parenL || this.type === b.name) {
                    this.potentialArrowAt = this.start;
                    this.potentialArrowInForAwait = e === "await";
                }
                var p = this.parseMaybeConditional(e, t);
                i && (p = i.call(this, p, o, h));
                if (this.type.isAssign) {
                    var u = this.startNodeAt(o, h);
                    u.operator = this.value;
                    this.type === b.eq && (p = this.toAssignable(p, false, t));
                    if (!s) {
                        t.parenthesizedAssign = t.trailingComma = -1;
                        t.shorthandAssign >= p.start && (t.shorthandAssign = -1);
                        t.doubleProto >= p.start && (t.doubleProto = -1);
                    }
                    this.type === b.eq ? this.checkLValPattern(p) : this.checkLValSimple(p);
                    u.left = p;
                    this.next();
                    u.right = this.parseMaybeAssign(e);
                    n > -1 && (t.doubleProto = n);
                    return this.finishNode(u, "AssignmentExpression");
                }
                s && this.checkExpressionErrors(t, true);
                r > -1 && (t.parenthesizedAssign = r);
                a > -1 && (t.trailingComma = a);
                return p;
            };
            Ae.parseMaybeConditional = function(e, t) {
                var i = this.start, s = this.startLoc;
                var r = this.parseExprOps(e, t);
                if (this.checkExpressionErrors(t)) return r;
                if (!(r.type === "ArrowFunctionExpression" && r.start === i) && this.eat(b.question)) {
                    var a = this.startNodeAt(i, s);
                    a.test = r;
                    a.consequent = this.parseMaybeAssign();
                    this.expect(b.colon);
                    a.alternate = this.parseMaybeAssign(e);
                    return this.finishNode(a, "ConditionalExpression");
                }
                return r;
            };
            Ae.parseExprOps = function(e, t) {
                var i = this.start, s = this.startLoc;
                var r = this.parseMaybeUnary(t, false, false, e);
                if (this.checkExpressionErrors(t)) return r;
                return r.start === i && r.type === "ArrowFunctionExpression" ? r : this.parseExprOp(r, i, s, -1, e);
            };
            Ae.parseExprOp = function(e, t, i, s, r) {
                var a = this.type.binop;
                if (a != null && (!r || this.type !== b._in) && a > s) {
                    var n = this.type === b.logicalOR || this.type === b.logicalAND;
                    var o = this.type === b.coalesce;
                    o && (a = b.logicalAND.binop);
                    var h = this.value;
                    this.next();
                    var p = this.start, u = this.startLoc;
                    var l = this.parseExprOp(this.parseMaybeUnary(null, false, false, r), p, u, a, r);
                    var c = this.buildBinary(t, i, e, l, h, n || o);
                    (n && this.type === b.coalesce || o && (this.type === b.logicalOR || this.type === b.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
                    return this.parseExprOp(c, t, i, s, r);
                }
                return e;
            };
            Ae.buildBinary = function(e, t, i, s, r, a) {
                s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
                var n = this.startNodeAt(e, t);
                n.left = i;
                n.operator = r;
                n.right = s;
                return this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression");
            };
            Ae.parseMaybeUnary = function(e, t, i, s) {
                var n, r = this.start, a = this.startLoc;
                if (this.isContextual("await") && this.canAwait) {
                    n = this.parseAwait(s);
                    t = true;
                } else if (this.type.prefix) {
                    var o = this.startNode(), h = this.type === b.incDec;
                    o.operator = this.value;
                    o.prefix = true;
                    this.next();
                    o.argument = this.parseMaybeUnary(null, true, h, s);
                    this.checkExpressionErrors(e, true);
                    h ? this.checkLValSimple(o.argument) : this.strict && o.operator === "delete" && Ie(o.argument) ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : o.operator === "delete" && Pe(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : t = true;
                    n = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression");
                } else if (t || this.type !== b.privateId) {
                    n = this.parseExprSubscripts(e, s);
                    if (this.checkExpressionErrors(e)) return n;
                    while (this.type.postfix && !this.canInsertSemicolon()) {
                        var p = this.startNodeAt(r, a);
                        p.operator = this.value;
                        p.prefix = false;
                        p.argument = n;
                        this.checkLValSimple(n);
                        this.next();
                        n = this.finishNode(p, "UpdateExpression");
                    }
                } else {
                    (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected();
                    n = this.parsePrivateIdent();
                    this.type !== b._in && this.unexpected();
                }
                if (i || n.type === "ArrowFunctionExpression" && n.start === r || !this.eat(b.starstar)) return n;
                if (!t) return this.buildBinary(r, a, n, this.parseMaybeUnary(null, false, false, s), "**", false);
                this.unexpected(this.lastTokStart);
            };
            function Ie(e) {
                return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Ie(e.expression);
            }
            function Pe(e) {
                return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Pe(e.expression) || e.type === "ParenthesizedExpression" && Pe(e.expression);
            }
            Ae.parseExprSubscripts = function(e, t) {
                var i = this.start, s = this.startLoc;
                var r = -1, a = -1;
                if (e) {
                    r = e.doubleProto;
                    a = e.shorthandAssign;
                    e.doubleProto = e.shorthandAssign = -1;
                }
                var n = this.parseExprAtom(e, t);
                if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return n;
                var o = this.parseSubscripts(n, i, s, false, t);
                if (e) {
                    if (o.end > n.end) {
                        this.checkExpressionErrors(e, true);
                        e.parenthesizedAssign >= o.start && (e.parenthesizedAssign = -1);
                        e.parenthesizedBind >= o.start && (e.parenthesizedBind = -1);
                        e.trailingComma >= o.start && (e.trailingComma = -1);
                    }
                    r > -1 && (e.doubleProto = r);
                    a > -1 && (e.shorthandAssign = a);
                }
                return o;
            };
            Ae.parseSubscripts = function(e, t, i, s, r) {
                var a = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start;
                var n = false;
                while (true) {
                    var o = this.parseSubscript(e, t, i, s, a, n, r);
                    o.optional && (n = true);
                    if (o.end === e.end || o.type === "ArrowFunctionExpression") {
                        if (n) {
                            var h = this.startNodeAt(t, i);
                            h.expression = o;
                            o = this.finishNode(h, "ChainExpression");
                        }
                        return o;
                    }
                    e = o;
                    a = false;
                }
            };
            Ae.shouldParseAsyncArrow = function() {
                return !this.canInsertSemicolon() && this.eat(b.arrow);
            };
            Ae.parseSubscriptAsyncArrow = function(e, t, i, s) {
                return this.parseArrowExpression(this.startNodeAt(e, t), i, true, s);
            };
            Ae.parseSubscript = function(e, t, i, s, r, a, n) {
                var o = this.options.ecmaVersion >= 11;
                var h = o && this.eat(b.questionDot);
                s && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
                var p = this.eat(b.bracketL);
                if (p || h && this.type !== b.parenL && this.type !== b.backQuote || this.eat(b.dot)) {
                    var u = this.startNodeAt(t, i);
                    u.object = e;
                    if (p) {
                        u.property = this.parseExpression();
                        this.expect(b.bracketR);
                    } else this.type === b.privateId && e.type !== "Super" ? u.property = this.parsePrivateIdent() : u.property = this.parseIdent(this.options.allowReserved !== "never");
                    u.computed = !!p;
                    o && (u.optional = h);
                    e = this.finishNode(u, "MemberExpression");
                } else if (!s && this.eat(b.parenL)) {
                    var l = new fe, c = this.yieldPos, f = this.awaitPos, d = this.awaitIdentPos;
                    this.yieldPos = 0;
                    this.awaitPos = 0;
                    this.awaitIdentPos = 0;
                    var m = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, false, l);
                    if (r && !h && this.shouldParseAsyncArrow()) {
                        this.checkPatternErrors(l, false);
                        this.checkYieldAwaitInDefaultParams();
                        this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
                        this.yieldPos = c;
                        this.awaitPos = f;
                        this.awaitIdentPos = d;
                        return this.parseSubscriptAsyncArrow(t, i, m, n);
                    }
                    this.checkExpressionErrors(l, true);
                    this.yieldPos = c || this.yieldPos;
                    this.awaitPos = f || this.awaitPos;
                    this.awaitIdentPos = d || this.awaitIdentPos;
                    var v = this.startNodeAt(t, i);
                    v.callee = e;
                    v.arguments = m;
                    o && (v.optional = h);
                    e = this.finishNode(v, "CallExpression");
                } else if (this.type === b.backQuote) {
                    (h || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                    var g = this.startNodeAt(t, i);
                    g.tag = e;
                    g.quasi = this.parseTemplate({
                        isTagged: true
                    });
                    e = this.finishNode(g, "TaggedTemplateExpression");
                }
                return e;
            };
            Ae.parseExprAtom = function(e, t, i) {
                this.type === b.slash && this.readRegexp();
                var s, r = this.potentialArrowAt === this.start;
                switch (this.type) {
                  case b._super:
                    this.allowSuper || this.raise(this.start, "'super' keyword outside a method");
                    s = this.startNode();
                    this.next();
                    this.type !== b.parenL || this.allowDirectSuper || this.raise(s.start, "super() call outside constructor of a subclass");
                    this.type !== b.dot && this.type !== b.bracketL && this.type !== b.parenL && this.unexpected();
                    return this.finishNode(s, "Super");

                  case b._this:
                    s = this.startNode();
                    this.next();
                    return this.finishNode(s, "ThisExpression");

                  case b.name:
                    var a = this.start, n = this.startLoc, o = this.containsEsc;
                    var h = this.parseIdent(false);
                    if (this.options.ecmaVersion >= 8 && !o && h.name === "async" && !this.canInsertSemicolon() && this.eat(b._function)) {
                        this.overrideContext(Ce.f_expr);
                        return this.parseFunction(this.startNodeAt(a, n), 0, false, true, t);
                    }
                    if (r && !this.canInsertSemicolon()) {
                        if (this.eat(b.arrow)) return this.parseArrowExpression(this.startNodeAt(a, n), [ h ], false, t);
                        if (this.options.ecmaVersion >= 8 && h.name === "async" && this.type === b.name && !o && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
                            h = this.parseIdent(false);
                            !this.canInsertSemicolon() && this.eat(b.arrow) || this.unexpected();
                            return this.parseArrowExpression(this.startNodeAt(a, n), [ h ], true, t);
                        }
                    }
                    return h;

                  case b.regexp:
                    var p = this.value;
                    s = this.parseLiteral(p.value);
                    s.regex = {
                        pattern: p.pattern,
                        flags: p.flags
                    };
                    return s;

                  case b.num:
                  case b.string:
                    return this.parseLiteral(this.value);

                  case b._null:
                  case b._true:
                  case b._false:
                    s = this.startNode();
                    s.value = this.type === b._null ? null : this.type === b._true;
                    s.raw = this.type.keyword;
                    this.next();
                    return this.finishNode(s, "Literal");

                  case b.parenL:
                    var u = this.start, l = this.parseParenAndDistinguishExpression(r, t);
                    if (e) {
                        e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l) && (e.parenthesizedAssign = u);
                        e.parenthesizedBind < 0 && (e.parenthesizedBind = u);
                    }
                    return l;

                  case b.bracketL:
                    s = this.startNode();
                    this.next();
                    s.elements = this.parseExprList(b.bracketR, true, true, e);
                    return this.finishNode(s, "ArrayExpression");

                  case b.braceL:
                    this.overrideContext(Ce.b_expr);
                    return this.parseObj(false, e);

                  case b._function:
                    s = this.startNode();
                    this.next();
                    return this.parseFunction(s, 0);

                  case b._class:
                    return this.parseClass(this.startNode(), false);

                  case b._new:
                    return this.parseNew();

                  case b.backQuote:
                    return this.parseTemplate();

                  case b._import:
                    return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();

                  default:
                    return this.parseExprAtomDefault();
                }
            };
            Ae.parseExprAtomDefault = function() {
                this.unexpected();
            };
            Ae.parseExprImport = function(e) {
                var t = this.startNode();
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
                this.next();
                if (this.type === b.parenL && !e) return this.parseDynamicImport(t);
                if (this.type === b.dot) {
                    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
                    i.name = "import";
                    t.meta = this.finishNode(i, "Identifier");
                    return this.parseImportMeta(t);
                }
                this.unexpected();
            };
            Ae.parseDynamicImport = function(e) {
                this.next();
                e.source = this.parseMaybeAssign();
                if (this.options.ecmaVersion >= 16) if (this.eat(b.parenR)) e.options = null; else {
                    this.expect(b.comma);
                    if (this.afterTrailingComma(b.parenR)) e.options = null; else {
                        e.options = this.parseMaybeAssign();
                        if (!this.eat(b.parenR)) {
                            this.expect(b.comma);
                            this.afterTrailingComma(b.parenR) || this.unexpected();
                        }
                    }
                } else if (!this.eat(b.parenR)) {
                    var t = this.start;
                    this.eat(b.comma) && this.eat(b.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
                }
                return this.finishNode(e, "ImportExpression");
            };
            Ae.parseImportMeta = function(e) {
                this.next();
                var t = this.containsEsc;
                e.property = this.parseIdent(true);
                e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'");
                t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters");
                this.options.sourceType === "module" || this.options.allowImportExportEverywhere || this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module");
                return this.finishNode(e, "MetaProperty");
            };
            Ae.parseLiteral = function(e) {
                var t = this.startNode();
                t.value = e;
                t.raw = this.input.slice(this.start, this.end);
                t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, ""));
                this.next();
                return this.finishNode(t, "Literal");
            };
            Ae.parseParenExpression = function() {
                this.expect(b.parenL);
                var e = this.parseExpression();
                this.expect(b.parenR);
                return e;
            };
            Ae.shouldParseArrow = function(e) {
                return !this.canInsertSemicolon();
            };
            Ae.parseParenAndDistinguishExpression = function(e, t) {
                var r, i = this.start, s = this.startLoc, a = this.options.ecmaVersion >= 8;
                if (this.options.ecmaVersion >= 6) {
                    this.next();
                    var n = this.start, o = this.startLoc;
                    var h = [], p = true, u = false;
                    var d, l = new fe, c = this.yieldPos, f = this.awaitPos;
                    this.yieldPos = 0;
                    this.awaitPos = 0;
                    while (this.type !== b.parenR) {
                        p ? p = false : this.expect(b.comma);
                        if (a && this.afterTrailingComma(b.parenR, true)) {
                            u = true;
                            break;
                        }
                        if (this.type === b.ellipsis) {
                            d = this.start;
                            h.push(this.parseParenItem(this.parseRestBinding()));
                            this.type === b.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                            break;
                        }
                        h.push(this.parseMaybeAssign(false, l, this.parseParenItem));
                    }
                    var m = this.lastTokEnd, v = this.lastTokEndLoc;
                    this.expect(b.parenR);
                    if (e && this.shouldParseArrow(h) && this.eat(b.arrow)) {
                        this.checkPatternErrors(l, false);
                        this.checkYieldAwaitInDefaultParams();
                        this.yieldPos = c;
                        this.awaitPos = f;
                        return this.parseParenArrowList(i, s, h, t);
                    }
                    h.length && !u || this.unexpected(this.lastTokStart);
                    d && this.unexpected(d);
                    this.checkExpressionErrors(l, true);
                    this.yieldPos = c || this.yieldPos;
                    this.awaitPos = f || this.awaitPos;
                    if (h.length > 1) {
                        r = this.startNodeAt(n, o);
                        r.expressions = h;
                        this.finishNodeAt(r, "SequenceExpression", m, v);
                    } else r = h[0];
                } else r = this.parseParenExpression();
                if (this.options.preserveParens) {
                    var g = this.startNodeAt(i, s);
                    g.expression = r;
                    return this.finishNode(g, "ParenthesizedExpression");
                }
                return r;
            };
            Ae.parseParenItem = function(e) {
                return e;
            };
            Ae.parseParenArrowList = function(e, t, i, s) {
                return this.parseArrowExpression(this.startNodeAt(e, t), i, false, s);
            };
            var Ve = [];
            Ae.parseNew = function() {
                this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                var e = this.startNode();
                this.next();
                if (this.options.ecmaVersion >= 6 && this.type === b.dot) {
                    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
                    t.name = "new";
                    e.meta = this.finishNode(t, "Identifier");
                    this.next();
                    var i = this.containsEsc;
                    e.property = this.parseIdent(true);
                    e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'");
                    i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters");
                    this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block");
                    return this.finishNode(e, "MetaProperty");
                }
                var s = this.start, r = this.startLoc;
                e.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), s, r, true, false);
                e.callee.type === "Super" && this.raiseRecoverable(s, "Invalid use of 'super'");
                this.eat(b.parenL) ? e.arguments = this.parseExprList(b.parenR, this.options.ecmaVersion >= 8, false) : e.arguments = Ve;
                return this.finishNode(e, "NewExpression");
            };
            Ae.parseTemplateElement = function(e) {
                var t = e.isTagged;
                var i = this.startNode();
                if (this.type === b.invalidTemplate) {
                    t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
                    i.value = {
                        raw: this.value.replace(/\r\n?/g, "\n"),
                        cooked: null
                    };
                } else i.value = {
                    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                    cooked: this.value
                };
                this.next();
                i.tail = this.type === b.backQuote;
                return this.finishNode(i, "TemplateElement");
            };
            Ae.parseTemplate = function(e) {
                e === void 0 && (e = {});
                var t = e.isTagged;
                t === void 0 && (t = false);
                var i = this.startNode();
                this.next();
                i.expressions = [];
                var s = this.parseTemplateElement({
                    isTagged: t
                });
                i.quasis = [ s ];
                while (!s.tail) {
                    this.type === b.eof && this.raise(this.pos, "Unterminated template literal");
                    this.expect(b.dollarBraceL);
                    i.expressions.push(this.parseExpression());
                    this.expect(b.braceR);
                    i.quasis.push(s = this.parseTemplateElement({
                        isTagged: t
                    }));
                }
                this.next();
                return this.finishNode(i, "TemplateLiteral");
            };
            Ae.isAsyncProp = function(e) {
                return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === b.name || this.type === b.num || this.type === b.string || this.type === b.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === b.star) && !k.test(this.input.slice(this.lastTokEnd, this.start));
            };
            Ae.parseObj = function(e, t) {
                var i = this.startNode(), s = true, r = {};
                i.properties = [];
                this.next();
                while (!this.eat(b.braceR)) {
                    if (s) s = false; else {
                        this.expect(b.comma);
                        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(b.braceR)) break;
                    }
                    var a = this.parseProperty(e, t);
                    e || this.checkPropClash(a, r, t);
                    i.properties.push(a);
                }
                return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
            };
            Ae.parseProperty = function(e, t) {
                var s, r, a, n, i = this.startNode();
                if (this.options.ecmaVersion >= 9 && this.eat(b.ellipsis)) {
                    if (e) {
                        i.argument = this.parseIdent(false);
                        this.type === b.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                        return this.finishNode(i, "RestElement");
                    }
                    i.argument = this.parseMaybeAssign(false, t);
                    this.type === b.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start);
                    return this.finishNode(i, "SpreadElement");
                }
                if (this.options.ecmaVersion >= 6) {
                    i.method = false;
                    i.shorthand = false;
                    if (e || t) {
                        a = this.start;
                        n = this.startLoc;
                    }
                    e || (s = this.eat(b.star));
                }
                var o = this.containsEsc;
                this.parsePropertyName(i);
                if (!e && !o && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i)) {
                    r = true;
                    s = this.options.ecmaVersion >= 9 && this.eat(b.star);
                    this.parsePropertyName(i);
                } else r = false;
                this.parsePropertyValue(i, e, s, r, a, n, t, o);
                return this.finishNode(i, "Property");
            };
            Ae.parseGetterSetter = function(e) {
                var t = e.key.name;
                this.parsePropertyName(e);
                e.value = this.parseMethod(false);
                e.kind = t;
                var i = e.kind === "get" ? 0 : 1;
                if (e.value.params.length !== i) {
                    var s = e.value.start;
                    e.kind === "get" ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param");
                } else e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
            };
            Ae.parsePropertyValue = function(e, t, i, s, r, a, n, o) {
                (i || s) && this.type === b.colon && this.unexpected();
                if (this.eat(b.colon)) {
                    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, n);
                    e.kind = "init";
                } else if (this.options.ecmaVersion >= 6 && this.type === b.parenL) {
                    t && this.unexpected();
                    e.method = true;
                    e.value = this.parseMethod(i, s);
                    e.kind = "init";
                } else if (t || o || !(this.options.ecmaVersion >= 5) || e.computed || e.key.type !== "Identifier" || e.key.name !== "get" && e.key.name !== "set" || this.type === b.comma || this.type === b.braceR || this.type === b.eq) if (this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier") {
                    (i || s) && this.unexpected();
                    this.checkUnreserved(e.key);
                    e.key.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = r);
                    if (t) e.value = this.parseMaybeDefault(r, a, this.copyNode(e.key)); else if (this.type === b.eq && n) {
                        n.shorthandAssign < 0 && (n.shorthandAssign = this.start);
                        e.value = this.parseMaybeDefault(r, a, this.copyNode(e.key));
                    } else e.value = this.copyNode(e.key);
                    e.kind = "init";
                    e.shorthand = true;
                } else this.unexpected(); else {
                    (i || s) && this.unexpected();
                    this.parseGetterSetter(e);
                }
            };
            Ae.parsePropertyName = function(e) {
                if (this.options.ecmaVersion >= 6) {
                    if (this.eat(b.bracketL)) {
                        e.computed = true;
                        e.key = this.parseMaybeAssign();
                        this.expect(b.bracketR);
                        return e.key;
                    }
                    e.computed = false;
                }
                return e.key = this.type === b.num || this.type === b.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
            };
            Ae.initFunction = function(e) {
                e.id = null;
                this.options.ecmaVersion >= 6 && (e.generator = e.expression = false);
                this.options.ecmaVersion >= 8 && (e.async = false);
            };
            Ae.parseMethod = function(e, t, i) {
                var s = this.startNode(), r = this.yieldPos, a = this.awaitPos, n = this.awaitIdentPos;
                this.initFunction(s);
                this.options.ecmaVersion >= 6 && (s.generator = e);
                this.options.ecmaVersion >= 8 && (s.async = !!t);
                this.yieldPos = 0;
                this.awaitPos = 0;
                this.awaitIdentPos = 0;
                this.enterScope(te(t, s.generator) | Y | (i ? X : 0));
                this.expect(b.parenL);
                s.params = this.parseBindingList(b.parenR, false, this.options.ecmaVersion >= 8);
                this.checkYieldAwaitInDefaultParams();
                this.parseFunctionBody(s, false, true, false);
                this.yieldPos = r;
                this.awaitPos = a;
                this.awaitIdentPos = n;
                return this.finishNode(s, "FunctionExpression");
            };
            Ae.parseArrowExpression = function(e, t, i, s) {
                var r = this.yieldPos, a = this.awaitPos, n = this.awaitIdentPos;
                this.enterScope(te(i, false) | K);
                this.initFunction(e);
                this.options.ecmaVersion >= 8 && (e.async = !!i);
                this.yieldPos = 0;
                this.awaitPos = 0;
                this.awaitIdentPos = 0;
                e.params = this.toAssignableList(t, true);
                this.parseFunctionBody(e, true, false, s);
                this.yieldPos = r;
                this.awaitPos = a;
                this.awaitIdentPos = n;
                return this.finishNode(e, "ArrowFunctionExpression");
            };
            Ae.parseFunctionBody = function(e, t, i, s) {
                var r = t && this.type !== b.braceL;
                var a = this.strict, n = false;
                if (r) {
                    e.body = this.parseMaybeAssign(s);
                    e.expression = true;
                    this.checkParams(e, false);
                } else {
                    var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
                    if (!a || o) {
                        n = this.strictDirective(this.end);
                        n && o && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                    }
                    var h = this.labels;
                    this.labels = [];
                    n && (this.strict = true);
                    this.checkParams(e, !a && !n && !t && !i && this.isSimpleParamList(e.params));
                    this.strict && e.id && this.checkLValSimple(e.id, oe);
                    e.body = this.parseBlock(false, void 0, n && !a);
                    e.expression = false;
                    this.adaptDirectivePrologue(e.body.body);
                    this.labels = h;
                }
                this.exitScope();
            };
            Ae.isSimpleParamList = function(e) {
                for (var t = 0, i = e; t < i.length; t += 1) {
                    var s = i[t];
                    if (s.type !== "Identifier") return false;
                }
                return true;
            };
            Ae.checkParams = function(e, t) {
                var i = Object.create(null);
                for (var s = 0, r = e.params; s < r.length; s += 1) {
                    var a = r[s];
                    this.checkLValInnerPattern(a, se, t ? null : i);
                }
            };
            Ae.parseExprList = function(e, t, i, s) {
                var r = [], a = true;
                while (!this.eat(e)) {
                    if (a) a = false; else {
                        this.expect(b.comma);
                        if (t && this.afterTrailingComma(e)) break;
                    }
                    var n = void 0;
                    if (i && this.type === b.comma) n = null; else if (this.type === b.ellipsis) {
                        n = this.parseSpread(s);
                        s && this.type === b.comma && s.trailingComma < 0 && (s.trailingComma = this.start);
                    } else n = this.parseMaybeAssign(false, s);
                    r.push(n);
                }
                return r;
            };
            Ae.checkUnreserved = function(e) {
                var t = e.start;
                var i = e.end;
                var s = e.name;
                this.inGenerator && s === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator");
                this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function");
                this.currentThisScope().flags & ee || s !== "arguments" || this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer");
                !this.inClassStaticBlock || s !== "arguments" && s !== "await" || this.raise(t, "Cannot use " + s + " in class static initialization block");
                this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'");
                if (this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1) return;
                var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
                if (r.test(s)) {
                    this.inAsync || s !== "await" || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function");
                    this.raiseRecoverable(t, "The keyword '" + s + "' is reserved");
                }
            };
            Ae.parseIdent = function(e) {
                var t = this.parseIdentNode();
                this.next(!!e);
                this.finishNode(t, "Identifier");
                if (!e) {
                    this.checkUnreserved(t);
                    t.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = t.start);
                }
                return t;
            };
            Ae.parseIdentNode = function() {
                var e = this.startNode();
                if (this.type === b.name) e.name = this.value; else if (this.type.keyword) {
                    e.name = this.type.keyword;
                    e.name !== "class" && e.name !== "function" || this.lastTokEnd === this.lastTokStart + 1 && this.input.charCodeAt(this.lastTokStart) === 46 || this.context.pop();
                    this.type = b.name;
                } else this.unexpected();
                return e;
            };
            Ae.parsePrivateIdent = function() {
                var e = this.startNode();
                this.type === b.privateId ? e.name = this.value : this.unexpected();
                this.next();
                this.finishNode(e, "PrivateIdentifier");
                this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e));
                return e;
            };
            Ae.parseYield = function(e) {
                this.yieldPos || (this.yieldPos = this.start);
                var t = this.startNode();
                this.next();
                if (this.type === b.semi || this.canInsertSemicolon() || this.type !== b.star && !this.type.startsExpr) {
                    t.delegate = false;
                    t.argument = null;
                } else {
                    t.delegate = this.eat(b.star);
                    t.argument = this.parseMaybeAssign(e);
                }
                return this.finishNode(t, "YieldExpression");
            };
            Ae.parseAwait = function(e) {
                this.awaitPos || (this.awaitPos = this.start);
                var t = this.startNode();
                this.next();
                t.argument = this.parseMaybeUnary(null, true, false, e);
                return this.finishNode(t, "AwaitExpression");
            };
            var Ne = he.prototype;
            Ne.raise = function(e, t) {
                var i = M(this.input, e);
                t += " (" + i.line + ":" + i.column + ")";
                this.sourceFile && (t += " in " + this.sourceFile);
                var s = new SyntaxError(t);
                s.pos = e;
                s.loc = i;
                s.raisedAt = this.pos;
                throw s;
            };
            Ne.raiseRecoverable = Ne.raise;
            Ne.curPosition = function() {
                if (this.options.locations) return new O(this.curLine, this.pos - this.lineStart);
            };
            var Te = he.prototype;
            var Le = function(t) {
                this.flags = t;
                this.var = [];
                this.lexical = [];
                this.functions = [];
            };
            Te.enterScope = function(e) {
                this.scopeStack.push(new Le(e));
            };
            Te.exitScope = function() {
                this.scopeStack.pop();
            };
            Te.treatFunctionsAsVarInScope = function(e) {
                return e.flags & H || !this.inModule && e.flags & G;
            };
            Te.declareName = function(e, t, i) {
                var s = false;
                if (t === re) {
                    var r = this.currentScope();
                    s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1;
                    r.lexical.push(e);
                    this.inModule && r.flags & G && delete this.undefinedExports[e];
                } else if (t === ne) {
                    var a = this.currentScope();
                    a.lexical.push(e);
                } else if (t === ae) {
                    var n = this.currentScope();
                    s = this.treatFunctionsAsVar ? n.lexical.indexOf(e) > -1 : n.lexical.indexOf(e) > -1 || n.var.indexOf(e) > -1;
                    n.functions.push(e);
                } else for (var o = this.scopeStack.length - 1; o >= 0; --o) {
                    var h = this.scopeStack[o];
                    if (h.lexical.indexOf(e) > -1 && !(h.flags & Q && h.lexical[0] === e) || !this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1) {
                        s = true;
                        break;
                    }
                    h.var.push(e);
                    this.inModule && h.flags & G && delete this.undefinedExports[e];
                    if (h.flags & ee) break;
                }
                s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
            };
            Te.checkLocalExport = function(e) {
                this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
            };
            Te.currentScope = function() {
                return this.scopeStack[this.scopeStack.length - 1];
            };
            Te.currentVarScope = function() {
                for (var e = this.scopeStack.length - 1; ;e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & (ee | $ | Z)) return t;
                }
            };
            Te.currentThisScope = function() {
                for (var e = this.scopeStack.length - 1; ;e--) {
                    var t = this.scopeStack[e];
                    if (t.flags & (ee | $ | Z) && !(t.flags & K)) return t;
                }
            };
            var Re = function(t, i, s) {
                this.type = "";
                this.start = i;
                this.end = 0;
                t.options.locations && (this.loc = new B(t, s));
                t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile);
                t.options.ranges && (this.range = [ i, 0 ]);
            };
            var De = he.prototype;
            De.startNode = function() {
                return new Re(this, this.start, this.startLoc);
            };
            De.startNodeAt = function(e, t) {
                return new Re(this, e, t);
            };
            function Oe(e, t, i, s) {
                e.type = t;
                e.end = i;
                this.options.locations && (e.loc.end = s);
                this.options.ranges && (e.range[1] = i);
                return e;
            }
            De.finishNode = function(e, t) {
                return Oe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
            };
            De.finishNodeAt = function(e, t, i, s) {
                return Oe.call(this, e, t, i, s);
            };
            De.copyNode = function(e) {
                var t = new Re(this, e.start, this.startLoc);
                for (var i in e) t[i] = e[i];
                return t;
            };
            var Be = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";
            var Me = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
            var Fe = Me + " Extended_Pictographic";
            var Ue = Fe;
            var qe = Ue + " EBase EComp EMod EPres ExtPict";
            var je = qe;
            var Ge = je;
            var He = {
                9: Me,
                10: Fe,
                11: Ue,
                12: qe,
                13: je,
                14: Ge
            };
            var We = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
            var ze = {
                9: "",
                10: "",
                11: "",
                12: "",
                13: "",
                14: We
            };
            var Ke = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
            var Qe = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
            var Ye = Qe + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
            var Xe = Ye + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
            var Ze = Xe + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
            var $e = Ze + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
            var Je = $e + " " + Be;
            var et = {
                9: Qe,
                10: Ye,
                11: Xe,
                12: Ze,
                13: $e,
                14: Je
            };
            var tt = {};
            function it(e) {
                var t = tt[e] = {
                    binary: L(He[e] + " " + Ke),
                    binaryOfStrings: L(ze[e]),
                    nonBinary: {
                        General_Category: L(Ke),
                        Script: L(et[e])
                    }
                };
                t.nonBinary.Script_Extensions = t.nonBinary.Script;
                t.nonBinary.gc = t.nonBinary.General_Category;
                t.nonBinary.sc = t.nonBinary.Script;
                t.nonBinary.scx = t.nonBinary.Script_Extensions;
            }
            for (var st = 0, rt = [ 9, 10, 11, 12, 13, 14 ]; st < rt.length; st += 1) {
                var at = rt[st];
                it(at);
            }
            var nt = he.prototype;
            var ot = function(t, i) {
                this.parent = t;
                this.base = i || this;
            };
            ot.prototype.separatedFrom = function(t) {
                for (var i = this; i; i = i.parent) for (var s = t; s; s = s.parent) if (i.base === s.base && i !== s) return true;
                return false;
            };
            ot.prototype.sibling = function() {
                return new ot(this.parent, this.base);
            };
            var ht = function(t) {
                this.parser = t;
                this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : "");
                this.unicodeProperties = tt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion];
                this.source = "";
                this.flags = "";
                this.start = 0;
                this.switchU = false;
                this.switchV = false;
                this.switchN = false;
                this.pos = 0;
                this.lastIntValue = 0;
                this.lastStringValue = "";
                this.lastAssertionIsQuantifiable = false;
                this.numCapturingParens = 0;
                this.maxBackReference = 0;
                this.groupNames = Object.create(null);
                this.backReferenceNames = [];
                this.branchID = null;
            };
            ht.prototype.reset = function(t, i, s) {
                var r = s.indexOf("v") !== -1;
                var a = s.indexOf("u") !== -1;
                this.start = t | 0;
                this.source = i + "";
                this.flags = s;
                if (r && this.parser.options.ecmaVersion >= 15) {
                    this.switchU = true;
                    this.switchV = true;
                    this.switchN = true;
                } else {
                    this.switchU = a && this.parser.options.ecmaVersion >= 6;
                    this.switchV = false;
                    this.switchN = a && this.parser.options.ecmaVersion >= 9;
                }
            };
            ht.prototype.raise = function(t) {
                this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
            };
            ht.prototype.at = function(t, i) {
                i === void 0 && (i = false);
                var s = this.source;
                var r = s.length;
                if (t >= r) return -1;
                var a = s.charCodeAt(t);
                if (!(i || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= r) return a;
                var n = s.charCodeAt(t + 1);
                return n >= 56320 && n <= 57343 ? (a << 10) + n - 56613888 : a;
            };
            ht.prototype.nextIndex = function(t, i) {
                i === void 0 && (i = false);
                var s = this.source;
                var r = s.length;
                if (t >= r) return r;
                var n, a = s.charCodeAt(t);
                if (!(i || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= r || (n = s.charCodeAt(t + 1)) < 56320 || n > 57343) return t + 1;
                return t + 2;
            };
            ht.prototype.current = function(t) {
                t === void 0 && (t = false);
                return this.at(this.pos, t);
            };
            ht.prototype.lookahead = function(t) {
                t === void 0 && (t = false);
                return this.at(this.nextIndex(this.pos, t), t);
            };
            ht.prototype.advance = function(t) {
                t === void 0 && (t = false);
                this.pos = this.nextIndex(this.pos, t);
            };
            ht.prototype.eat = function(t, i) {
                i === void 0 && (i = false);
                if (this.current(i) === t) {
                    this.advance(i);
                    return true;
                }
                return false;
            };
            ht.prototype.eatChars = function(t, i) {
                i === void 0 && (i = false);
                var s = this.pos;
                for (var r = 0, a = t; r < a.length; r += 1) {
                    var n = a[r];
                    var o = this.at(s, i);
                    if (o === -1 || o !== n) return false;
                    s = this.nextIndex(s, i);
                }
                this.pos = s;
                return true;
            };
            nt.validateRegExpFlags = function(e) {
                var t = e.validFlags;
                var i = e.flags;
                var s = false;
                var r = false;
                for (var a = 0; a < i.length; a++) {
                    var n = i.charAt(a);
                    t.indexOf(n) === -1 && this.raise(e.start, "Invalid regular expression flag");
                    i.indexOf(n, a + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
                    n === "u" && (s = true);
                    n === "v" && (r = true);
                }
                this.options.ecmaVersion >= 15 && s && r && this.raise(e.start, "Invalid regular expression flag");
            };
            function pt(e) {
                for (var t in e) return true;
                return false;
            }
            nt.validateRegExpPattern = function(e) {
                this.regexp_pattern(e);
                if (!e.switchN && this.options.ecmaVersion >= 9 && pt(e.groupNames)) {
                    e.switchN = true;
                    this.regexp_pattern(e);
                }
            };
            nt.regexp_pattern = function(e) {
                e.pos = 0;
                e.lastIntValue = 0;
                e.lastStringValue = "";
                e.lastAssertionIsQuantifiable = false;
                e.numCapturingParens = 0;
                e.maxBackReference = 0;
                e.groupNames = Object.create(null);
                e.backReferenceNames.length = 0;
                e.branchID = null;
                this.regexp_disjunction(e);
                if (e.pos !== e.source.length) {
                    e.eat(41) && e.raise("Unmatched ')'");
                    (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets");
                }
                e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
                for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
                    var s = i[t];
                    e.groupNames[s] || e.raise("Invalid named capture referenced");
                }
            };
            nt.regexp_disjunction = function(e) {
                var t = this.options.ecmaVersion >= 16;
                t && (e.branchID = new ot(e.branchID, null));
                this.regexp_alternative(e);
                while (e.eat(124)) {
                    t && (e.branchID = e.branchID.sibling());
                    this.regexp_alternative(e);
                }
                t && (e.branchID = e.branchID.parent);
                this.regexp_eatQuantifier(e, true) && e.raise("Nothing to repeat");
                e.eat(123) && e.raise("Lone quantifier brackets");
            };
            nt.regexp_alternative = function(e) {
                while (e.pos < e.source.length && this.regexp_eatTerm(e)) ;
            };
            nt.regexp_eatTerm = function(e) {
                if (this.regexp_eatAssertion(e)) {
                    e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier");
                    return true;
                }
                if (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) {
                    this.regexp_eatQuantifier(e);
                    return true;
                }
                return false;
            };
            nt.regexp_eatAssertion = function(e) {
                var t = e.pos;
                e.lastAssertionIsQuantifiable = false;
                if (e.eat(94) || e.eat(36)) return true;
                if (e.eat(92)) {
                    if (e.eat(66) || e.eat(98)) return true;
                    e.pos = t;
                }
                if (e.eat(40) && e.eat(63)) {
                    var i = false;
                    this.options.ecmaVersion >= 9 && (i = e.eat(60));
                    if (e.eat(61) || e.eat(33)) {
                        this.regexp_disjunction(e);
                        e.eat(41) || e.raise("Unterminated group");
                        e.lastAssertionIsQuantifiable = !i;
                        return true;
                    }
                }
                e.pos = t;
                return false;
            };
            nt.regexp_eatQuantifier = function(e, t) {
                t === void 0 && (t = false);
                if (this.regexp_eatQuantifierPrefix(e, t)) {
                    e.eat(63);
                    return true;
                }
                return false;
            };
            nt.regexp_eatQuantifierPrefix = function(e, t) {
                return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
            };
            nt.regexp_eatBracedQuantifier = function(e, t) {
                var i = e.pos;
                if (e.eat(123)) {
                    var s = 0, r = -1;
                    if (this.regexp_eatDecimalDigits(e)) {
                        s = e.lastIntValue;
                        e.eat(44) && this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue);
                        if (e.eat(125)) {
                            r !== -1 && r < s && !t && e.raise("numbers out of order in {} quantifier");
                            return true;
                        }
                    }
                    e.switchU && !t && e.raise("Incomplete quantifier");
                    e.pos = i;
                }
                return false;
            };
            nt.regexp_eatAtom = function(e) {
                return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
            };
            nt.regexp_eatReverseSolidusAtomEscape = function(e) {
                var t = e.pos;
                if (e.eat(92)) {
                    if (this.regexp_eatAtomEscape(e)) return true;
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatUncapturingGroup = function(e) {
                var t = e.pos;
                if (e.eat(40)) {
                    if (e.eat(63)) {
                        if (this.options.ecmaVersion >= 16) {
                            var i = this.regexp_eatModifiers(e);
                            var s = e.eat(45);
                            if (i || s) {
                                for (var r = 0; r < i.length; r++) {
                                    var a = i.charAt(r);
                                    i.indexOf(a, r + 1) > -1 && e.raise("Duplicate regular expression modifiers");
                                }
                                if (s) {
                                    var n = this.regexp_eatModifiers(e);
                                    i || n || e.current() !== 58 || e.raise("Invalid regular expression modifiers");
                                    for (var o = 0; o < n.length; o++) {
                                        var h = n.charAt(o);
                                        (n.indexOf(h, o + 1) > -1 || i.indexOf(h) > -1) && e.raise("Duplicate regular expression modifiers");
                                    }
                                }
                            }
                        }
                        if (e.eat(58)) {
                            this.regexp_disjunction(e);
                            if (e.eat(41)) return true;
                            e.raise("Unterminated group");
                        }
                    }
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatCapturingGroup = function(e) {
                if (e.eat(40)) {
                    this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group");
                    this.regexp_disjunction(e);
                    if (e.eat(41)) {
                        e.numCapturingParens += 1;
                        return true;
                    }
                    e.raise("Unterminated group");
                }
                return false;
            };
            nt.regexp_eatModifiers = function(e) {
                var t = "";
                var i = 0;
                while ((i = e.current()) !== -1 && ut(i)) {
                    t += R(i);
                    e.advance();
                }
                return t;
            };
            function ut(e) {
                return e === 105 || e === 109 || e === 115;
            }
            nt.regexp_eatExtendedAtom = function(e) {
                return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
            };
            nt.regexp_eatInvalidBracedQuantifier = function(e) {
                this.regexp_eatBracedQuantifier(e, true) && e.raise("Nothing to repeat");
                return false;
            };
            nt.regexp_eatSyntaxCharacter = function(e) {
                var t = e.current();
                if (lt(t)) {
                    e.lastIntValue = t;
                    e.advance();
                    return true;
                }
                return false;
            };
            function lt(e) {
                return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
            }
            nt.regexp_eatPatternCharacters = function(e) {
                var t = e.pos;
                var i = 0;
                while ((i = e.current()) !== -1 && !lt(i)) e.advance();
                return e.pos !== t;
            };
            nt.regexp_eatExtendedPatternCharacter = function(e) {
                var t = e.current();
                if (t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124) {
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_groupSpecifier = function(e) {
                if (e.eat(63)) {
                    this.regexp_eatGroupName(e) || e.raise("Invalid group");
                    var t = this.options.ecmaVersion >= 16;
                    var i = e.groupNames[e.lastStringValue];
                    if (i) if (t) for (var s = 0, r = i; s < r.length; s += 1) {
                        var a = r[s];
                        a.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
                    } else e.raise("Duplicate capture group name");
                    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = true;
                }
            };
            nt.regexp_eatGroupName = function(e) {
                e.lastStringValue = "";
                if (e.eat(60)) {
                    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return true;
                    e.raise("Invalid capture group name");
                }
                return false;
            };
            nt.regexp_eatRegExpIdentifierName = function(e) {
                e.lastStringValue = "";
                if (this.regexp_eatRegExpIdentifierStart(e)) {
                    e.lastStringValue += R(e.lastIntValue);
                    while (this.regexp_eatRegExpIdentifierPart(e)) e.lastStringValue += R(e.lastIntValue);
                    return true;
                }
                return false;
            };
            nt.regexp_eatRegExpIdentifierStart = function(e) {
                var t = e.pos;
                var i = this.options.ecmaVersion >= 11;
                var s = e.current(i);
                e.advance(i);
                s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue);
                if (ct(s)) {
                    e.lastIntValue = s;
                    return true;
                }
                e.pos = t;
                return false;
            };
            function ct(e) {
                return c(e, true) || e === 36 || e === 95;
            }
            nt.regexp_eatRegExpIdentifierPart = function(e) {
                var t = e.pos;
                var i = this.options.ecmaVersion >= 11;
                var s = e.current(i);
                e.advance(i);
                s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue);
                if (ft(s)) {
                    e.lastIntValue = s;
                    return true;
                }
                e.pos = t;
                return false;
            };
            function ft(e) {
                return f(e, true) || e === 36 || e === 95 || e === 8204 || e === 8205;
            }
            nt.regexp_eatAtomEscape = function(e) {
                if (this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) return true;
                if (e.switchU) {
                    e.current() === 99 && e.raise("Invalid unicode escape");
                    e.raise("Invalid escape");
                }
                return false;
            };
            nt.regexp_eatBackReference = function(e) {
                var t = e.pos;
                if (this.regexp_eatDecimalEscape(e)) {
                    var i = e.lastIntValue;
                    if (e.switchU) {
                        i > e.maxBackReference && (e.maxBackReference = i);
                        return true;
                    }
                    if (i <= e.numCapturingParens) return true;
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatKGroupName = function(e) {
                if (e.eat(107)) {
                    if (this.regexp_eatGroupName(e)) {
                        e.backReferenceNames.push(e.lastStringValue);
                        return true;
                    }
                    e.raise("Invalid named reference");
                }
                return false;
            };
            nt.regexp_eatCharacterEscape = function(e) {
                return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
            };
            nt.regexp_eatCControlLetter = function(e) {
                var t = e.pos;
                if (e.eat(99)) {
                    if (this.regexp_eatControlLetter(e)) return true;
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatZero = function(e) {
                if (e.current() === 48 && !Ct(e.lookahead())) {
                    e.lastIntValue = 0;
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_eatControlEscape = function(e) {
                var t = e.current();
                if (t === 116) {
                    e.lastIntValue = 9;
                    e.advance();
                    return true;
                }
                if (t === 110) {
                    e.lastIntValue = 10;
                    e.advance();
                    return true;
                }
                if (t === 118) {
                    e.lastIntValue = 11;
                    e.advance();
                    return true;
                }
                if (t === 102) {
                    e.lastIntValue = 12;
                    e.advance();
                    return true;
                }
                if (t === 114) {
                    e.lastIntValue = 13;
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_eatControlLetter = function(e) {
                var t = e.current();
                if (dt(t)) {
                    e.lastIntValue = t % 32;
                    e.advance();
                    return true;
                }
                return false;
            };
            function dt(e) {
                return e >= 65 && e <= 90 || e >= 97 && e <= 122;
            }
            nt.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
                t === void 0 && (t = false);
                var i = e.pos;
                var s = t || e.switchU;
                if (e.eat(117)) {
                    if (this.regexp_eatFixedHexDigits(e, 4)) {
                        var r = e.lastIntValue;
                        if (s && r >= 55296 && r <= 56319) {
                            var a = e.pos;
                            if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                                var n = e.lastIntValue;
                                if (n >= 56320 && n <= 57343) {
                                    e.lastIntValue = 1024 * (r - 55296) + (n - 56320) + 65536;
                                    return true;
                                }
                            }
                            e.pos = a;
                            e.lastIntValue = r;
                        }
                        return true;
                    }
                    if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && mt(e.lastIntValue)) return true;
                    s && e.raise("Invalid unicode escape");
                    e.pos = i;
                }
                return false;
            };
            function mt(e) {
                return e >= 0 && e <= 1114111;
            }
            nt.regexp_eatIdentityEscape = function(e) {
                if (e.switchU) {
                    if (this.regexp_eatSyntaxCharacter(e)) return true;
                    if (e.eat(47)) {
                        e.lastIntValue = 47;
                        return true;
                    }
                    return false;
                }
                var t = e.current();
                if (t !== 99 && (!e.switchN || t !== 107)) {
                    e.lastIntValue = t;
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_eatDecimalEscape = function(e) {
                e.lastIntValue = 0;
                var t = e.current();
                if (t >= 49 && t <= 57) {
                    do {
                        e.lastIntValue = 10 * e.lastIntValue + (t - 48);
                        e.advance();
                    } while ((t = e.current()) >= 48 && t <= 57);
                    return true;
                }
                return false;
            };
            var vt = 0;
            var gt = 1;
            var xt = 2;
            nt.regexp_eatCharacterClassEscape = function(e) {
                var t = e.current();
                if (yt(t)) {
                    e.lastIntValue = -1;
                    e.advance();
                    return gt;
                }
                var i = false;
                if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
                    e.lastIntValue = -1;
                    e.advance();
                    var s;
                    if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) {
                        i && s === xt && e.raise("Invalid property name");
                        return s;
                    }
                    e.raise("Invalid property name");
                }
                return vt;
            };
            function yt(e) {
                return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
            }
            nt.regexp_eatUnicodePropertyValueExpression = function(e) {
                var t = e.pos;
                if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                    var i = e.lastStringValue;
                    if (this.regexp_eatUnicodePropertyValue(e)) {
                        var s = e.lastStringValue;
                        this.regexp_validateUnicodePropertyNameAndValue(e, i, s);
                        return gt;
                    }
                }
                e.pos = t;
                if (this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
                    var r = e.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameOrValue(e, r);
                }
                return vt;
            };
            nt.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
                V(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name");
                e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
            };
            nt.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
                if (e.unicodeProperties.binary.test(t)) return gt;
                if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return xt;
                e.raise("Invalid property name");
            };
            nt.regexp_eatUnicodePropertyName = function(e) {
                var t = 0;
                e.lastStringValue = "";
                while (bt(t = e.current())) {
                    e.lastStringValue += R(t);
                    e.advance();
                }
                return e.lastStringValue !== "";
            };
            function bt(e) {
                return dt(e) || e === 95;
            }
            nt.regexp_eatUnicodePropertyValue = function(e) {
                var t = 0;
                e.lastStringValue = "";
                while (kt(t = e.current())) {
                    e.lastStringValue += R(t);
                    e.advance();
                }
                return e.lastStringValue !== "";
            };
            function kt(e) {
                return bt(e) || Ct(e);
            }
            nt.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
                return this.regexp_eatUnicodePropertyValue(e);
            };
            nt.regexp_eatCharacterClass = function(e) {
                if (e.eat(91)) {
                    var t = e.eat(94);
                    var i = this.regexp_classContents(e);
                    e.eat(93) || e.raise("Unterminated character class");
                    t && i === xt && e.raise("Negated character class may contain strings");
                    return true;
                }
                return false;
            };
            nt.regexp_classContents = function(e) {
                if (e.current() === 93) return gt;
                if (e.switchV) return this.regexp_classSetExpression(e);
                this.regexp_nonEmptyClassRanges(e);
                return gt;
            };
            nt.regexp_nonEmptyClassRanges = function(e) {
                while (this.regexp_eatClassAtom(e)) {
                    var t = e.lastIntValue;
                    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                        var i = e.lastIntValue;
                        !e.switchU || t !== -1 && i !== -1 || e.raise("Invalid character class");
                        t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
                    }
                }
            };
            nt.regexp_eatClassAtom = function(e) {
                var t = e.pos;
                if (e.eat(92)) {
                    if (this.regexp_eatClassEscape(e)) return true;
                    if (e.switchU) {
                        var i = e.current();
                        (i === 99 || It(i)) && e.raise("Invalid class escape");
                        e.raise("Invalid escape");
                    }
                    e.pos = t;
                }
                var s = e.current();
                if (s !== 93) {
                    e.lastIntValue = s;
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_eatClassEscape = function(e) {
                var t = e.pos;
                if (e.eat(98)) {
                    e.lastIntValue = 8;
                    return true;
                }
                if (e.switchU && e.eat(45)) {
                    e.lastIntValue = 45;
                    return true;
                }
                if (!e.switchU && e.eat(99)) {
                    if (this.regexp_eatClassControlLetter(e)) return true;
                    e.pos = t;
                }
                return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
            };
            nt.regexp_classSetExpression = function(e) {
                var i, t = gt;
                if (this.regexp_eatClassSetRange(e)) ; else if (i = this.regexp_eatClassSetOperand(e)) {
                    i === xt && (t = xt);
                    var s = e.pos;
                    while (e.eatChars([ 38, 38 ])) {
                        if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
                            i !== xt && (t = gt);
                            continue;
                        }
                        e.raise("Invalid character in character class");
                    }
                    if (s !== e.pos) return t;
                    while (e.eatChars([ 45, 45 ])) {
                        if (this.regexp_eatClassSetOperand(e)) continue;
                        e.raise("Invalid character in character class");
                    }
                    if (s !== e.pos) return t;
                } else e.raise("Invalid character in character class");
                for (;;) {
                    if (this.regexp_eatClassSetRange(e)) continue;
                    i = this.regexp_eatClassSetOperand(e);
                    if (!i) return t;
                    i === xt && (t = xt);
                }
            };
            nt.regexp_eatClassSetRange = function(e) {
                var t = e.pos;
                if (this.regexp_eatClassSetCharacter(e)) {
                    var i = e.lastIntValue;
                    if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
                        var s = e.lastIntValue;
                        i !== -1 && s !== -1 && i > s && e.raise("Range out of order in character class");
                        return true;
                    }
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatClassSetOperand = function(e) {
                if (this.regexp_eatClassSetCharacter(e)) return gt;
                return this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
            };
            nt.regexp_eatNestedClass = function(e) {
                var t = e.pos;
                if (e.eat(91)) {
                    var i = e.eat(94);
                    var s = this.regexp_classContents(e);
                    if (e.eat(93)) {
                        i && s === xt && e.raise("Negated character class may contain strings");
                        return s;
                    }
                    e.pos = t;
                }
                if (e.eat(92)) {
                    var r = this.regexp_eatCharacterClassEscape(e);
                    if (r) return r;
                    e.pos = t;
                }
                return null;
            };
            nt.regexp_eatClassStringDisjunction = function(e) {
                var t = e.pos;
                if (e.eatChars([ 92, 113 ])) {
                    if (e.eat(123)) {
                        var i = this.regexp_classStringDisjunctionContents(e);
                        if (e.eat(125)) return i;
                    } else e.raise("Invalid escape");
                    e.pos = t;
                }
                return null;
            };
            nt.regexp_classStringDisjunctionContents = function(e) {
                var t = this.regexp_classString(e);
                while (e.eat(124)) this.regexp_classString(e) === xt && (t = xt);
                return t;
            };
            nt.regexp_classString = function(e) {
                var t = 0;
                while (this.regexp_eatClassSetCharacter(e)) t++;
                return t === 1 ? gt : xt;
            };
            nt.regexp_eatClassSetCharacter = function(e) {
                var t = e.pos;
                if (e.eat(92)) {
                    if (this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e)) return true;
                    if (e.eat(98)) {
                        e.lastIntValue = 8;
                        return true;
                    }
                    e.pos = t;
                    return false;
                }
                var i = e.current();
                if (i < 0 || i === e.lookahead() && _t(i)) return false;
                if (wt(i)) return false;
                e.advance();
                e.lastIntValue = i;
                return true;
            };
            function _t(e) {
                return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
            }
            function wt(e) {
                return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
            }
            nt.regexp_eatClassSetReservedPunctuator = function(e) {
                var t = e.current();
                if (St(t)) {
                    e.lastIntValue = t;
                    e.advance();
                    return true;
                }
                return false;
            };
            function St(e) {
                return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
            }
            nt.regexp_eatClassControlLetter = function(e) {
                var t = e.current();
                if (Ct(t) || t === 95) {
                    e.lastIntValue = t % 32;
                    e.advance();
                    return true;
                }
                return false;
            };
            nt.regexp_eatHexEscapeSequence = function(e) {
                var t = e.pos;
                if (e.eat(120)) {
                    if (this.regexp_eatFixedHexDigits(e, 2)) return true;
                    e.switchU && e.raise("Invalid escape");
                    e.pos = t;
                }
                return false;
            };
            nt.regexp_eatDecimalDigits = function(e) {
                var t = e.pos;
                var i = 0;
                e.lastIntValue = 0;
                while (Ct(i = e.current())) {
                    e.lastIntValue = 10 * e.lastIntValue + (i - 48);
                    e.advance();
                }
                return e.pos !== t;
            };
            function Ct(e) {
                return e >= 48 && e <= 57;
            }
            nt.regexp_eatHexDigits = function(e) {
                var t = e.pos;
                var i = 0;
                e.lastIntValue = 0;
                while (Et(i = e.current())) {
                    e.lastIntValue = 16 * e.lastIntValue + At(i);
                    e.advance();
                }
                return e.pos !== t;
            };
            function Et(e) {
                return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
            }
            function At(e) {
                if (e >= 65 && e <= 70) return e - 65 + 10;
                if (e >= 97 && e <= 102) return e - 97 + 10;
                return e - 48;
            }
            nt.regexp_eatLegacyOctalEscapeSequence = function(e) {
                if (this.regexp_eatOctalDigit(e)) {
                    var t = e.lastIntValue;
                    if (this.regexp_eatOctalDigit(e)) {
                        var i = e.lastIntValue;
                        t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
                    } else e.lastIntValue = t;
                    return true;
                }
                return false;
            };
            nt.regexp_eatOctalDigit = function(e) {
                var t = e.current();
                if (It(t)) {
                    e.lastIntValue = t - 48;
                    e.advance();
                    return true;
                }
                e.lastIntValue = 0;
                return false;
            };
            function It(e) {
                return e >= 48 && e <= 55;
            }
            nt.regexp_eatFixedHexDigits = function(e, t) {
                var i = e.pos;
                e.lastIntValue = 0;
                for (var s = 0; s < t; ++s) {
                    var r = e.current();
                    if (!Et(r)) {
                        e.pos = i;
                        return false;
                    }
                    e.lastIntValue = 16 * e.lastIntValue + At(r);
                    e.advance();
                }
                return true;
            };
            var Pt = function(t) {
                this.type = t.type;
                this.value = t.value;
                this.start = t.start;
                this.end = t.end;
                t.options.locations && (this.loc = new B(t, t.startLoc, t.endLoc));
                t.options.ranges && (this.range = [ t.start, t.end ]);
            };
            var Vt = he.prototype;
            Vt.next = function(e) {
                !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
                this.options.onToken && this.options.onToken(new Pt(this));
                this.lastTokEnd = this.end;
                this.lastTokStart = this.start;
                this.lastTokEndLoc = this.endLoc;
                this.lastTokStartLoc = this.startLoc;
                this.nextToken();
            };
            Vt.getToken = function() {
                this.next();
                return new Pt(this);
            };
            typeof Symbol !== "undefined" && (Vt[Symbol.iterator] = function() {
                var e = this;
                return {
                    next: function() {
                        var t = e.getToken();
                        return {
                            done: t.type === b.eof,
                            value: t
                        };
                    }
                };
            });
            Vt.nextToken = function() {
                var e = this.curContext();
                e && e.preserveSpace || this.skipSpace();
                this.start = this.pos;
                this.options.locations && (this.startLoc = this.curPosition());
                if (this.pos >= this.input.length) return this.finishToken(b.eof);
                if (e.override) return e.override(this);
                this.readToken(this.fullCharCodeAtPos());
            };
            Vt.readToken = function(e) {
                if (c(e, this.options.ecmaVersion >= 6) || e === 92) return this.readWord();
                return this.getTokenFromCode(e);
            };
            Vt.fullCharCodeAt = function(e) {
                var t = this.input.charCodeAt(e);
                if (t <= 55295 || t >= 56320) return t;
                var i = this.input.charCodeAt(e + 1);
                return i <= 56319 || i >= 57344 ? t : (t << 10) + i - 56613888;
            };
            Vt.fullCharCodeAtPos = function() {
                return this.fullCharCodeAt(this.pos);
            };
            Vt.skipBlockComment = function() {
                var e = this.options.onComment && this.curPosition();
                var t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
                i === -1 && this.raise(this.pos - 2, "Unterminated comment");
                this.pos = i + 2;
                if (this.options.locations) for (var s = void 0, r = t; (s = S(this.input, r, this.pos)) > -1; ) {
                    ++this.curLine;
                    r = this.lineStart = s;
                }
                this.options.onComment && this.options.onComment(true, this.input.slice(t + 2, i), t, this.pos, e, this.curPosition());
            };
            Vt.skipLineComment = function(e) {
                var t = this.pos;
                var i = this.options.onComment && this.curPosition();
                var s = this.input.charCodeAt(this.pos += e);
                while (this.pos < this.input.length && !w(s)) s = this.input.charCodeAt(++this.pos);
                this.options.onComment && this.options.onComment(false, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
            };
            Vt.skipSpace = function() {
                e: while (this.pos < this.input.length) {
                    var e = this.input.charCodeAt(this.pos);
                    switch (e) {
                      case 32:
                      case 160:
                        ++this.pos;
                        break;

                      case 13:
                        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;

                      case 10:
                      case 8232:
                      case 8233:
                        ++this.pos;
                        if (this.options.locations) {
                            ++this.curLine;
                            this.lineStart = this.pos;
                        }
                        break;

                      case 47:
                        switch (this.input.charCodeAt(this.pos + 1)) {
                          case 42:
                            this.skipBlockComment();
                            break;

                          case 47:
                            this.skipLineComment(2);
                            break;

                          default:
                            break e;
                        }
                        break;

                      default:
                        if (!(e > 8 && e < 14 || e >= 5760 && C.test(String.fromCharCode(e)))) break e;
                        ++this.pos;
                    }
                }
            };
            Vt.finishToken = function(e, t) {
                this.end = this.pos;
                this.options.locations && (this.endLoc = this.curPosition());
                var i = this.type;
                this.type = e;
                this.value = t;
                this.updateContext(i);
            };
            Vt.readToken_dot = function() {
                var e = this.input.charCodeAt(this.pos + 1);
                if (e >= 48 && e <= 57) return this.readNumber(true);
                var t = this.input.charCodeAt(this.pos + 2);
                if (this.options.ecmaVersion >= 6 && e === 46 && t === 46) {
                    this.pos += 3;
                    return this.finishToken(b.ellipsis);
                }
                ++this.pos;
                return this.finishToken(b.dot);
            };
            Vt.readToken_slash = function() {
                var e = this.input.charCodeAt(this.pos + 1);
                if (this.exprAllowed) {
                    ++this.pos;
                    return this.readRegexp();
                }
                if (e === 61) return this.finishOp(b.assign, 2);
                return this.finishOp(b.slash, 1);
            };
            Vt.readToken_mult_modulo_exp = function(e) {
                var t = this.input.charCodeAt(this.pos + 1);
                var i = 1;
                var s = e === 42 ? b.star : b.modulo;
                if (this.options.ecmaVersion >= 7 && e === 42 && t === 42) {
                    ++i;
                    s = b.starstar;
                    t = this.input.charCodeAt(this.pos + 2);
                }
                if (t === 61) return this.finishOp(b.assign, i + 1);
                return this.finishOp(s, i);
            };
            Vt.readToken_pipe_amp = function(e) {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t === e) {
                    if (this.options.ecmaVersion >= 12) {
                        var i = this.input.charCodeAt(this.pos + 2);
                        if (i === 61) return this.finishOp(b.assign, 3);
                    }
                    return this.finishOp(e === 124 ? b.logicalOR : b.logicalAND, 2);
                }
                if (t === 61) return this.finishOp(b.assign, 2);
                return this.finishOp(e === 124 ? b.bitwiseOR : b.bitwiseAND, 1);
            };
            Vt.readToken_caret = function() {
                var e = this.input.charCodeAt(this.pos + 1);
                if (e === 61) return this.finishOp(b.assign, 2);
                return this.finishOp(b.bitwiseXOR, 1);
            };
            Vt.readToken_plus_min = function(e) {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t === e) {
                    if (t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || k.test(this.input.slice(this.lastTokEnd, this.pos)))) {
                        this.skipLineComment(3);
                        this.skipSpace();
                        return this.nextToken();
                    }
                    return this.finishOp(b.incDec, 2);
                }
                if (t === 61) return this.finishOp(b.assign, 2);
                return this.finishOp(b.plusMin, 1);
            };
            Vt.readToken_lt_gt = function(e) {
                var t = this.input.charCodeAt(this.pos + 1);
                var i = 1;
                if (t === e) {
                    i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
                    if (this.input.charCodeAt(this.pos + i) === 61) return this.finishOp(b.assign, i + 1);
                    return this.finishOp(b.bitShift, i);
                }
                if (t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
                    this.skipLineComment(4);
                    this.skipSpace();
                    return this.nextToken();
                }
                t === 61 && (i = 2);
                return this.finishOp(b.relational, i);
            };
            Vt.readToken_eq_excl = function(e) {
                var t = this.input.charCodeAt(this.pos + 1);
                if (t === 61) return this.finishOp(b.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
                if (e === 61 && t === 62 && this.options.ecmaVersion >= 6) {
                    this.pos += 2;
                    return this.finishToken(b.arrow);
                }
                return this.finishOp(e === 61 ? b.eq : b.prefix, 1);
            };
            Vt.readToken_question = function() {
                var e = this.options.ecmaVersion;
                if (e >= 11) {
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (t === 46) {
                        var i = this.input.charCodeAt(this.pos + 2);
                        if (i < 48 || i > 57) return this.finishOp(b.questionDot, 2);
                    }
                    if (t === 63) {
                        if (e >= 12) {
                            var s = this.input.charCodeAt(this.pos + 2);
                            if (s === 61) return this.finishOp(b.assign, 3);
                        }
                        return this.finishOp(b.coalesce, 2);
                    }
                }
                return this.finishOp(b.question, 1);
            };
            Vt.readToken_numberSign = function() {
                var e = this.options.ecmaVersion;
                var t = 35;
                if (e >= 13) {
                    ++this.pos;
                    t = this.fullCharCodeAtPos();
                    if (c(t, true) || t === 92) return this.finishToken(b.privateId, this.readWord1());
                }
                this.raise(this.pos, "Unexpected character '" + R(t) + "'");
            };
            Vt.getTokenFromCode = function(e) {
                switch (e) {
                  case 46:
                    return this.readToken_dot();

                  case 40:
                    ++this.pos;
                    return this.finishToken(b.parenL);

                  case 41:
                    ++this.pos;
                    return this.finishToken(b.parenR);

                  case 59:
                    ++this.pos;
                    return this.finishToken(b.semi);

                  case 44:
                    ++this.pos;
                    return this.finishToken(b.comma);

                  case 91:
                    ++this.pos;
                    return this.finishToken(b.bracketL);

                  case 93:
                    ++this.pos;
                    return this.finishToken(b.bracketR);

                  case 123:
                    ++this.pos;
                    return this.finishToken(b.braceL);

                  case 125:
                    ++this.pos;
                    return this.finishToken(b.braceR);

                  case 58:
                    ++this.pos;
                    return this.finishToken(b.colon);

                  case 96:
                    if (this.options.ecmaVersion < 6) break;
                    ++this.pos;
                    return this.finishToken(b.backQuote);

                  case 48:
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (t === 120 || t === 88) return this.readRadixNumber(16);
                    if (this.options.ecmaVersion >= 6) {
                        if (t === 111 || t === 79) return this.readRadixNumber(8);
                        if (t === 98 || t === 66) return this.readRadixNumber(2);
                    }

                  case 49:
                  case 50:
                  case 51:
                  case 52:
                  case 53:
                  case 54:
                  case 55:
                  case 56:
                  case 57:
                    return this.readNumber(false);

                  case 34:
                  case 39:
                    return this.readString(e);

                  case 47:
                    return this.readToken_slash();

                  case 37:
                  case 42:
                    return this.readToken_mult_modulo_exp(e);

                  case 124:
                  case 38:
                    return this.readToken_pipe_amp(e);

                  case 94:
                    return this.readToken_caret();

                  case 43:
                  case 45:
                    return this.readToken_plus_min(e);

                  case 60:
                  case 62:
                    return this.readToken_lt_gt(e);

                  case 61:
                  case 33:
                    return this.readToken_eq_excl(e);

                  case 63:
                    return this.readToken_question();

                  case 126:
                    return this.finishOp(b.prefix, 1);

                  case 35:
                    return this.readToken_numberSign();
                }
                this.raise(this.pos, "Unexpected character '" + R(e) + "'");
            };
            Vt.finishOp = function(e, t) {
                var i = this.input.slice(this.pos, this.pos + t);
                this.pos += t;
                return this.finishToken(e, i);
            };
            Vt.readRegexp = function() {
                var e, t, i = this.pos;
                for (;;) {
                    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
                    var s = this.input.charAt(this.pos);
                    k.test(s) && this.raise(i, "Unterminated regular expression");
                    if (e) e = false; else {
                        if (s === "[") t = true; else if (s === "]" && t) t = false; else if (s === "/" && !t) break;
                        e = s === "\\";
                    }
                    ++this.pos;
                }
                var r = this.input.slice(i, this.pos);
                ++this.pos;
                var a = this.pos;
                var n = this.readWord1();
                this.containsEsc && this.unexpected(a);
                var o = this.regexpState || (this.regexpState = new ht(this));
                o.reset(i, r, n);
                this.validateRegExpFlags(o);
                this.validateRegExpPattern(o);
                var h = null;
                try {
                    h = new RegExp(r, n);
                } catch (e) {}
                return this.finishToken(b.regexp, {
                    pattern: r,
                    flags: n,
                    value: h
                });
            };
            Vt.readInt = function(e, t, i) {
                var s = this.options.ecmaVersion >= 12 && t === void 0;
                var r = i && this.input.charCodeAt(this.pos) === 48;
                var a = this.pos, n = 0, o = 0;
                for (var h = 0, p = t == null ? 1 / 0 : t; h < p; ++h, ++this.pos) {
                    var u = this.input.charCodeAt(this.pos), l = void 0;
                    if (s && u === 95) {
                        r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
                        o === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
                        h === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
                        o = u;
                        continue;
                    }
                    l = u >= 97 ? u - 97 + 10 : u >= 65 ? u - 65 + 10 : u >= 48 && u <= 57 ? u - 48 : 1 / 0;
                    if (l >= e) break;
                    o = u;
                    n = n * e + l;
                }
                s && o === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
                if (this.pos === a || t != null && this.pos - a !== t) return null;
                return n;
            };
            function Nt(e, t) {
                if (t) return parseInt(e, 8);
                return parseFloat(e.replace(/_/g, ""));
            }
            function Tt(e) {
                if (typeof BigInt !== "function") return null;
                return BigInt(e.replace(/_/g, ""));
            }
            Vt.readRadixNumber = function(e) {
                var t = this.pos;
                this.pos += 2;
                var i = this.readInt(e);
                i == null && this.raise(this.start + 2, "Expected number in radix " + e);
                if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
                    i = Tt(this.input.slice(t, this.pos));
                    ++this.pos;
                } else c(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                return this.finishToken(b.num, i);
            };
            Vt.readNumber = function(e) {
                var t = this.pos;
                e || this.readInt(10, void 0, true) !== null || this.raise(t, "Invalid number");
                var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
                i && this.strict && this.raise(t, "Invalid number");
                var s = this.input.charCodeAt(this.pos);
                if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
                    var r = Tt(this.input.slice(t, this.pos));
                    ++this.pos;
                    c(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                    return this.finishToken(b.num, r);
                }
                i && /[89]/.test(this.input.slice(t, this.pos)) && (i = false);
                if (s === 46 && !i) {
                    ++this.pos;
                    this.readInt(10);
                    s = this.input.charCodeAt(this.pos);
                }
                if ((s === 69 || s === 101) && !i) {
                    s = this.input.charCodeAt(++this.pos);
                    s !== 43 && s !== 45 || ++this.pos;
                    this.readInt(10) === null && this.raise(t, "Invalid number");
                }
                c(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                var a = Nt(this.input.slice(t, this.pos), i);
                return this.finishToken(b.num, a);
            };
            Vt.readCodePoint = function() {
                var t, e = this.input.charCodeAt(this.pos);
                if (e === 123) {
                    this.options.ecmaVersion < 6 && this.unexpected();
                    var i = ++this.pos;
                    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
                    ++this.pos;
                    t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
                } else t = this.readHexChar(4);
                return t;
            };
            Vt.readString = function(e) {
                var t = "", i = ++this.pos;
                for (;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                    var s = this.input.charCodeAt(this.pos);
                    if (s === e) break;
                    if (s === 92) {
                        t += this.input.slice(i, this.pos);
                        t += this.readEscapedChar(false);
                        i = this.pos;
                    } else if (s === 8232 || s === 8233) {
                        this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant");
                        ++this.pos;
                        if (this.options.locations) {
                            this.curLine++;
                            this.lineStart = this.pos;
                        }
                    } else {
                        w(s) && this.raise(this.start, "Unterminated string constant");
                        ++this.pos;
                    }
                }
                t += this.input.slice(i, this.pos++);
                return this.finishToken(b.string, t);
            };
            var Lt = {};
            Vt.tryReadTemplateToken = function() {
                this.inTemplateElement = true;
                try {
                    this.readTmplToken();
                } catch (e) {
                    if (e !== Lt) throw e;
                    this.readInvalidTemplateToken();
                }
                this.inTemplateElement = false;
            };
            Vt.invalidStringToken = function(e, t) {
                if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Lt;
                this.raise(e, t);
            };
            Vt.readTmplToken = function() {
                var e = "", t = this.pos;
                for (;;) {
                    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                    var i = this.input.charCodeAt(this.pos);
                    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
                        if (this.pos === this.start && (this.type === b.template || this.type === b.invalidTemplate)) {
                            if (i === 36) {
                                this.pos += 2;
                                return this.finishToken(b.dollarBraceL);
                            }
                            ++this.pos;
                            return this.finishToken(b.backQuote);
                        }
                        e += this.input.slice(t, this.pos);
                        return this.finishToken(b.template, e);
                    }
                    if (i === 92) {
                        e += this.input.slice(t, this.pos);
                        e += this.readEscapedChar(true);
                        t = this.pos;
                    } else if (w(i)) {
                        e += this.input.slice(t, this.pos);
                        ++this.pos;
                        switch (i) {
                          case 13:
                            this.input.charCodeAt(this.pos) === 10 && ++this.pos;

                          case 10:
                            e += "\n";
                            break;

                          default:
                            e += String.fromCharCode(i);
                            break;
                        }
                        if (this.options.locations) {
                            ++this.curLine;
                            this.lineStart = this.pos;
                        }
                        t = this.pos;
                    } else ++this.pos;
                }
            };
            Vt.readInvalidTemplateToken = function() {
                for (;this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                  case "\\":
                    ++this.pos;
                    break;

                  case "$":
                    if (this.input[this.pos + 1] !== "{") break;

                  case "`":
                    return this.finishToken(b.invalidTemplate, this.input.slice(this.start, this.pos));

                  case "\r":
                    this.input[this.pos + 1] === "\n" && ++this.pos;

                  case "\n":
                  case "\u2028":
                  case "\u2029":
                    ++this.curLine;
                    this.lineStart = this.pos + 1;
                    break;
                }
                this.raise(this.start, "Unterminated template");
            };
            Vt.readEscapedChar = function(e) {
                var t = this.input.charCodeAt(++this.pos);
                ++this.pos;
                switch (t) {
                  case 110:
                    return "\n";

                  case 114:
                    return "\r";

                  case 120:
                    return String.fromCharCode(this.readHexChar(2));

                  case 117:
                    return R(this.readCodePoint());

                  case 116:
                    return "\t";

                  case 98:
                    return "\b";

                  case 118:
                    return "\v";

                  case 102:
                    return "\f";

                  case 13:
                    this.input.charCodeAt(this.pos) === 10 && ++this.pos;

                  case 10:
                    if (this.options.locations) {
                        this.lineStart = this.pos;
                        ++this.curLine;
                    }
                    return "";

                  case 56:
                  case 57:
                    this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
                    if (e) {
                        var i = this.pos - 1;
                        this.invalidStringToken(i, "Invalid escape sequence in template string");
                    }

                  default:
                    if (t >= 48 && t <= 55) {
                        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
                        var r = parseInt(s, 8);
                        if (r > 255) {
                            s = s.slice(0, -1);
                            r = parseInt(s, 8);
                        }
                        this.pos += s.length - 1;
                        t = this.input.charCodeAt(this.pos);
                        s === "0" && t !== 56 && t !== 57 || !this.strict && !e || this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode");
                        return String.fromCharCode(r);
                    }
                    if (w(t)) {
                        if (this.options.locations) {
                            this.lineStart = this.pos;
                            ++this.curLine;
                        }
                        return "";
                    }
                    return String.fromCharCode(t);
                }
            };
            Vt.readHexChar = function(e) {
                var t = this.pos;
                var i = this.readInt(16, e);
                i === null && this.invalidStringToken(t, "Bad character escape sequence");
                return i;
            };
            Vt.readWord1 = function() {
                this.containsEsc = false;
                var e = "", t = true, i = this.pos;
                var s = this.options.ecmaVersion >= 6;
                while (this.pos < this.input.length) {
                    var r = this.fullCharCodeAtPos();
                    if (f(r, s)) this.pos += r <= 65535 ? 1 : 2; else {
                        if (r !== 92) break;
                        this.containsEsc = true;
                        e += this.input.slice(i, this.pos);
                        var a = this.pos;
                        this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
                        ++this.pos;
                        var n = this.readCodePoint();
                        (t ? c : f)(n, s) || this.invalidStringToken(a, "Invalid Unicode escape");
                        e += R(n);
                        i = this.pos;
                    }
                    t = false;
                }
                return e + this.input.slice(i, this.pos);
            };
            Vt.readWord = function() {
                var e = this.readWord1();
                var t = b.name;
                this.keywords.test(e) && (t = x[e]);
                return this.finishToken(t, e);
            };
            var Rt = "8.19.0";
            he.acorn = {
                Parser: he,
                version: Rt,
                defaultOptions: F,
                Position: O,
                SourceLocation: B,
                getLineInfo: M,
                Node: Re,
                TokenType: d,
                tokTypes: b,
                keywordTypes: x,
                TokContext: Se,
                tokContexts: Ce,
                isIdentifierChar: f,
                isIdentifierStart: c,
                Token: Pt,
                isNewLine: w,
                lineBreak: k,
                lineBreakG: _,
                nonASCIIwhitespace: C
            };
            function Dt(e, t) {
                return he.parse(e, t);
            }
            function Ot(e, t, i) {
                return he.parseExpressionAt(e, t, i);
            }
            function Bt(e, t) {
                return he.tokenizer(e, t);
            }
            e.Node = Re;
            e.Parser = he;
            e.Position = O;
            e.SourceLocation = B;
            e.TokContext = Se;
            e.Token = Pt;
            e.TokenType = d;
            e.defaultOptions = F;
            e.getLineInfo = M;
            e.isIdentifierChar = f;
            e.isIdentifierStart = c;
            e.isNewLine = w;
            e.keywordTypes = x;
            e.lineBreak = k;
            e.lineBreakG = _;
            e.nonASCIIwhitespace = C;
            e.parse = Dt;
            e.parseExpressionAt = Ot;
            e.tokContexts = Ce;
            e.tokTypes = b;
            e.tokenizer = Bt;
            e.version = Rt;
        });
        return exports.parse;
    })();
    const NP = Array.prototype.push, NU = Array.prototype.unshift;
    const S = {
        v: RELEASE,
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
            pickaxe: [],
            glider: []
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
        localTrack: null,
        botPhase: "lobby",
        botPhaseAt: 0
    };
    W[K] = S;
    const ownedTimeouts = new Set, ownedIntervals = new Set, ownedFrames = new Set;
    const setTimeout = (fn, ms, ...args) => {
        const id = W.setTimeout(() => {
            ownedTimeouts.delete(id);
            S.destroyed || fn(...args);
        }, ms);
        ownedTimeouts.add(id);
        return id;
    };
    const clearTimeout = id => {
        ownedTimeouts.delete(id);
        W.clearTimeout(id);
    };
    const setInterval = (fn, ms, ...args) => {
        const id = W.setInterval(() => {
            S.destroyed || fn(...args);
        }, ms);
        ownedIntervals.add(id);
        return id;
    };
    const clearInterval = id => {
        ownedIntervals.delete(id);
        W.clearInterval(id);
    };
    const requestAnimationFrame = fn => {
        const id = W.requestAnimationFrame(t => {
            ownedFrames.delete(id);
            S.destroyed || fn(t);
        });
        ownedFrames.add(id);
        return id;
    };
    const cancelAnimationFrame = id => {
        ownedFrames.delete(id);
        W.cancelAnimationFrame(id);
    };
    let productionSourceController = null, productionResourceGeneration = 0, productionFrame = 0, productionHomeTimer = 0, productionLastFocus = null, productionSessionResize = null, productionPartyObserver = null;
    const productionImages = new Set, productionReaders = new Set, productionImageCancels = new Map, productionPreviewImages = new Map, productionMapRestores = new Map, productionHomeRestores = [], productionHomeNodes = [], productionAdStyles = new Map, productionObjectURLs = new Set;
    const Image = new Proxy(W.Image, {
        construct(target, args) {
            const im = Reflect.construct(target, args);
            productionImages.add(im);
            const done = () => {
                productionImages.delete(im);
                im.removeEventListener("load", done);
                im.removeEventListener("error", done);
            };
            im.addEventListener("load", done);
            im.addEventListener("error", done);
            return im;
        }
    });
    const productionRelease = {
        release: "70",
        display: "1.70",
        testingControls: true
    }, productionVersion = "v" + productionRelease.display;
    const productionHeadScale = .7;
    const productionUI = {
        filter: "All",
        search: "",
        groups: {
            modifiers: "Indicators",
            challenges: "Visibility"
        },
        paused: false,
        last: "body",
        message: ""
    };
    const productionAssetBase = "https://raw.githubusercontent.com/shortcutsbin-netizen/brio-unlocker/fc55b05fc99b2f821b79b9afa12612cbced46537/docs/design/";
    const productionKits = [ {
        name: "Trail Warden",
        key: "trail-warden",
        atlas: "assets/trail-warden-atlas.webp"
    }, {
        name: "Citrus Circuit",
        key: "citrus-circuit",
        atlas: "assets/citrus-circuit-atlas.webp"
    }, {
        name: "Nightglass",
        key: "nightglass",
        atlas: "assets/nightglass-atlas.webp"
    }, {
        name: "Kiln Current",
        key: "kiln-current",
        atlas: "assets/kiln-current-atlas.webp"
    }, {
        name: "Margin Runner",
        key: "margin-runner",
        atlas: "assets/margin-runner-atlas.webp"
    }, {
        name: "Tide Archivist",
        key: "tide-archivist",
        atlas: "assets/tide-archivist-atlas.webp"
    }, {
        name: "Glass Orchard",
        key: "glass-orchard",
        atlas: "assets/glass-orchard-atlas.webp"
    }, {
        name: "Rivet Sonata",
        key: "rivet-sonata",
        atlas: "assets/rivet-sonata-atlas.webp"
    }, {
        name: "Polar Frequency",
        key: "polar-frequency",
        atlas: "assets/polar-frequency-atlas.webp"
    }, {
        name: "Morrow Loom",
        key: "morrow-loom",
        atlas: "assets/morrow-loom-atlas.webp"
    }, {
        name: "Prismwake",
        key: "prismwake",
        atlas: "assets/prismwake-atlas.webp"
    }, {
        name: "Cinder Apiary",
        key: "cinder-apiary",
        atlas: "assets/cinder-apiary-atlas.webp"
    }, {
        name: "Flux Foundry",
        key: "flux-foundry",
        atlas: "assets/flux-foundry-atlas.webp"
    }, {
        name: "Lunar Marquetry",
        key: "lunar-marquetry",
        atlas: "assets/lunar-marquetry-atlas.webp"
    }, {
        name: "Hush Velvet",
        key: "hush-velvet",
        atlas: "assets/hush-velvet-atlas.webp"
    }, {
        name: "Pepper Forge",
        key: "pepper-forge",
        atlas: "assets/pepper-forge-atlas.webp"
    } ];
    const productionGroups = {
        modifiers: [ [ "Indicators", [ "nearestPlayer", "nearestPlayerName", "nearestChest", "nearestAirdrop", "safeZoneIndicator", "stormCenter", "lootIndicator" ] ], [ "Warnings", [ "lowHealthWarning", "lowAmmoWarning", "lowMatsWarning" ] ], [ "Inventories", [ "inventorySlots", "inventoryMaterials", "inventoryAmmo", "inventorySize" ] ], [ "Players", [ "healthBars", "numericHealthShield", "playerNames", "highContrastPlayers" ] ], [ "World", [ "transparentRoofs", "transparentFoliage", "buildHealth", "objectHealth", "stormEdge", "allGlidersInvisible", "allTrailsInvisible", "permanentMeteor" ] ], [ "Aim & trails", [ "customCrosshair", "highlightOwnedAmmo", "longerBulletTrails" ] ] ],
        challenges: [ [ "Visibility", [ "playersInvisible", "lootInvisible", "buildsInvisible", "invisibleStorm", "noChestsVisible", "invisibleProjectiles", "hideWeapons" ] ], [ "HUD & feedback", [ "noMinimap", "noCrosshair", "noInventoryHud", "noHealthShieldHud", "noInfoPopups", "noPickupLabels", "noHitMarker", "noDamageDirection", "noDamageNumbers", "noWeaponProgress" ] ], [ "Visual modes", [ "monochrome", "flashlightMode" ] ] ]
    }, productionCopy = {
        transparentRoofs: "See beneath roofs without losing the building outline.",
        healthBars: "Keep other players’ health in view.",
        numericHealthShield: "Show exact health and shield values inside the bars.",
        playerNames: "Show names above other players.",
        allGlidersInvisible: "Hide glider artwork for you and other players.",
        allTrailsInvisible: "Hide cosmetic trails for everyone.",
        nearestPlayer: "Point to the closest off-screen player.",
        nearestPlayerName: "Add their name beneath the distance.",
        nearestChest: "Find the nearest chest outside your view.",
        nearestAirdrop: "Keep the nearest off-screen airdrop in sight.",
        permanentMeteor: "Keep the meteor marked for the rest of the match.",
        highContrastPlayers: "Add a yellow halo around visible players.",
        transparentFoliage: "See through leafy cover without removing it.",
        stormEdge: "Trace the next safe zone, matching the minimap.",
        stormCenter: "Point toward the center of the next safe zone.",
        buildHealth: "Read remaining build health at a glance.",
        objectHealth: "Color-code the health of breakable objects and vehicles.",
        safeZoneIndicator: "Find the closest edge of the next safe zone.",
        lootIndicator: "Point to your selected gold and red weapon drops.",
        highlightOwnedAmmo: "Outline ammo that fits a weapon you carry.",
        longerBulletTrails: "Briefly retain trails from observed projectiles.",
        customCrosshair: "Choose a shape, color and size that feels right.",
        lowHealthWarning: "Flash a warning around you at or below the limit.",
        lowAmmoWarning: "Warn on each carried weapon’s inventory slot.",
        lowMatsWarning: "Warn on each material counter when supplies run low.",
        inventorySlots: "See other players’ carried items.",
        inventoryMaterials: "Show their wood, brick, metal and scraps.",
        inventoryAmmo: "Show their ammo and grappler charges.",
        playersInvisible: "Hide other players’ bodies and held gear. All trail particles disappear too.",
        lootInvisible: "Choose how much dropped-loot information remains.",
        buildsInvisible: "Hide placed builds. Choose whether previews remain.",
        noCrosshair: "Remove the crosshair and hit marker.",
        invisibleStorm: "Hide storm shading and zone borders in the world and on maps.",
        noChestsVisible: "Hide chests, ammo crates and grenade crates.",
        noHealthShieldHud: "Hide your health and shield bars. Keep the current ammo counter.",
        noInfoPopups: "Hide build, inventory and interaction instructions.",
        noPickupLabels: "Hide nearby item labels. Keep the loot itself visible.",
        noHitMarker: "Hide hit confirmations. Keep the crosshair.",
        noDamageDirection: "Hide where incoming damage came from.",
        noDamageNumbers: "Remove floating damage and healing numbers.",
        noWeaponProgress: "Hide reload and charge indicators.",
        invisibleProjectiles: "Hide bullets, throwables and their detached trails.",
        hideWeapons: "Hide held weapons and aiming build previews.",
        monochrome: "Trade all colors for black and white.",
        flashlightMode: "Keep a soft pool of visibility around you or your cursor."
    }, productionDescriptions = {
        hell: "All modifiers disabled. Invisible players, builds, build previews, loot (including rarity and pickup positions), chests, ammo crates, grenade crates, storm, and projectiles. No maps, storm countdown, inventory, ammo, materials, health/shield HUD, crosshair, hit markers, pickup labels, damage numbers, or reload progress. Good luck.",
        advantages: "Show other players' inventories/materials/ammo (large) and health/shield/names, nearest player (including player name) and airdrop indicators, visual warnings for low health/materials/ammo (default thresholds), permanent meteor location, longer bullet trails, transparent roofs and foliage, next storm edge highlight, highlight ammo for owned guns, and make all gliders invisible. General competitive advantages."
    }, productionReticles = [ [ "Pinpoint", "" ], [ "Split rail", "" ], [ "Halo", "" ], [ "Pilot", "" ], [ "Compass", "" ], [ "Apex", "" ], [ "T-bar", "" ], [ "Diamond", "" ], [ "Four-dot", "" ], [ "Open arc", "" ], [ "Classic", "" ], [ "Fine cross", "" ], [ "Cross-dot", "" ], [ "T-dot", "" ], [ "Ring cross", "" ], [ "Square", "" ], [ "Square-dot", "" ], [ "Triangle", "" ], [ "Triangle-dot", "" ], [ "Five-dot", "" ], [ "Side posts", "" ], [ "Goalpost", "" ], [ "Needle", "" ], [ "Double chevron", "" ], [ "Three-spoke", "" ], [ "Diagonal", "" ], [ "X-dot", "" ], [ "Scope", "" ], [ "Corner", "" ], [ "Horseshoe", "" ], [ "Dash-dot", "" ], [ "Diamond cross", "" ], [ "Star", "" ], [ "Pixel", "" ], [ "Duplex", "" ], [ "Box cross", "" ] ];
    const productionIcons = {
        "rotate-ccw": [ [ "path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        } ], [ "path", {
            d: "M3 3v5h5"
        } ] ],
        shuffle: [ [ "path", {
            d: "m18 14 4 4-4 4"
        } ], [ "path", {
            d: "m18 2 4 4-4 4"
        } ], [ "path", {
            d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
        } ], [ "path", {
            d: "M2 6h1.972a4 4 0 0 1 3.6 2.2"
        } ], [ "path", {
            d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
        } ] ],
        "eye-off": [ [ "path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
        } ], [ "path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242"
        } ], [ "path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
        } ], [ "path", {
            d: "m2 2 20 20"
        } ] ],
        x: [ [ "path", {
            d: "M18 6 6 18"
        } ], [ "path", {
            d: "m6 6 12 12"
        } ] ],
        shapes: [ [ "path", {
            d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
        } ], [ "rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
        } ], [ "circle", {
            cx: "17.5",
            cy: "17.5",
            r: "3.5"
        } ] ],
        pickaxe: [ [ "path", {
            d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"
        } ], [ "path", {
            d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"
        } ], [ "path", {
            d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"
        } ], [ "path", {
            d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"
        } ] ],
        paintbrush: [ [ "path", {
            d: "m14.622 17.897-10.68-2.913"
        } ], [ "path", {
            d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
        } ], [ "path", {
            d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
        } ] ],
        route: [ [ "circle", {
            cx: "6",
            cy: "19",
            r: "3"
        } ], [ "path", {
            d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
        } ], [ "circle", {
            cx: "18",
            cy: "5",
            r: "3"
        } ] ],
        wind: [ [ "path", {
            d: "M12.8 19.6A2 2 0 1 0 14 16H2"
        } ], [ "path", {
            d: "M17.5 8a2.5 2.5 0 1 1 2 4H2"
        } ], [ "path", {
            d: "M9.8 4.4A2 2 0 1 1 11 8H2"
        } ] ],
        smile: [ [ "circle", {
            cx: "12",
            cy: "12",
            r: "10"
        } ], [ "path", {
            d: "M8 14s1.5 2 4 2 4-2 4-2"
        } ], [ "line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        } ], [ "line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        } ] ],
        search: [ [ "path", {
            d: "m21 21-4.34-4.34"
        } ], [ "circle", {
            cx: "11",
            cy: "11",
            r: "8"
        } ] ],
        upload: [ [ "path", {
            d: "M12 3v12"
        } ], [ "path", {
            d: "m17 8-5-5-5 5"
        } ], [ "path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        } ] ],
        "arrow-up-right": [ [ "path", {
            d: "M7 7h10v10"
        } ], [ "path", {
            d: "M7 17 17 7"
        } ] ],
        shirt: [ [ "path", {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
        } ] ],
        "sliders-horizontal": [ [ "path", {
            d: "M10 5H3"
        } ], [ "path", {
            d: "M12 19H3"
        } ], [ "path", {
            d: "M14 3v4"
        } ], [ "path", {
            d: "M16 17v4"
        } ], [ "path", {
            d: "M21 12h-9"
        } ], [ "path", {
            d: "M21 19h-5"
        } ], [ "path", {
            d: "M21 5h-7"
        } ], [ "path", {
            d: "M8 10v4"
        } ], [ "path", {
            d: "M8 12H3"
        } ] ],
        flame: [ [ "path", {
            d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
        } ] ],
        "code-xml": [ [ "path", {
            d: "m18 16 4-4-4-4"
        } ], [ "path", {
            d: "m6 8-4 4 4 4"
        } ], [ "path", {
            d: "m14.5 4-5 16"
        } ] ],
        "messages-square": [ [ "path", {
            d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        } ], [ "path", {
            d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
        } ] ],
        "arrow-right": [ [ "path", {
            d: "M5 12h14"
        } ], [ "path", {
            d: "m12 5 7 7-7 7"
        } ] ]
    };
    const productionSessionFactory = (() => {
        const weaponKeys = [ "pickaxe", "scar", "shotgun", "bolt", "deagle", "drum", "musket", "heavy sniper", "riffle", "famas", "smg", "ump", "scoped ar", "tommy gun", "rpg", "ak47", "combat", "aug", "silencedpistol", "lmg", "burst shotgun", "grenade launcher", "grenade pistol", "mgl", "vector", "revolver", "charge riffle", "sawedoff", "spas", "Other" ];
        const fields = [ "eliminations", "damage", "builds", "seconds", "hpLoss", "shieldLoss", "distanceMeters", "ownProjectiles", "observedPlayers" ];
        function createSession() {
            let closed = false, lastEpoch = -1;
            const totals = Object.fromEntries(fields.map(k => [ k, 0 ])), coverage = Object.fromEntries(fields.map(k => [ k, 0 ])), weapons = Object.fromEntries(weaponKeys.map(k => [ k, 0 ]));
            let completed = 0, wins = 0, placements = 0, placementSum = 0, best = null, weaponMatches = 0;
            const valid = x => typeof x === "number" && Number.isFinite(x) && x >= 0;
            function add(epoch, result) {
                if (closed || !Number.isSafeInteger(epoch) || epoch <= lastEpoch || !result || result.terminal !== true) return false;
                lastEpoch = epoch;
                completed++;
                if (valid(result.place) && Number.isInteger(result.place) && result.place > 0) {
                    placements++;
                    placementSum += result.place;
                    result.place === 1 && wins++;
                    best = best === null ? result.place : Math.min(best, result.place);
                }
                for (const k of fields) if (valid(result[k])) {
                    totals[k] += result[k];
                    coverage[k]++;
                }
                let hasWeapon = false;
                if (result.weaponSeconds && typeof result.weaponSeconds === "object") for (const [raw, v] of Object.entries(result.weaponSeconds)) {
                    if (!valid(v)) continue;
                    const k = Object.hasOwn(weapons, raw) ? raw : "Other";
                    weapons[k] += v;
                    hasWeapon = true;
                }
                hasWeapon && weaponMatches++;
                return true;
            }
            const average = k => coverage[k] ? totals[k] / coverage[k] : null;
            function snapshot() {
                return {
                    completed: completed,
                    wins: wins,
                    placements: placements,
                    best: best,
                    winRate: placements ? wins / placements * 100 : null,
                    averagePlacement: placements ? placementSum / placements : null,
                    killsPerGame: average("eliminations"),
                    damagePerGame: average("damage"),
                    buildsPerGame: average("builds"),
                    averageSeconds: average("seconds"),
                    totals: {
                        ...totals
                    },
                    coverage: {
                        ...coverage
                    },
                    weapons: {
                        ...weapons
                    },
                    weaponMatches: weaponMatches,
                    closed: closed
                };
            }
            function destroy() {
                closed = true;
                lastEpoch = -1;
                completed = wins = placements = placementSum = weaponMatches = 0;
                best = null;
                for (const k of fields) totals[k] = coverage[k] = 0;
                for (const k of weaponKeys) weapons[k] = 0;
            }
            return {
                add: add,
                snapshot: snapshot,
                destroy: destroy
            };
        }
        return createSession;
    })();
    const productionSession = productionSessionFactory();
    const productionEscape = x => String(x ?? "").replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
    const productionIcon = name => {
        const parts = productionIcons[name] || [];
        return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + parts.map(([tag, attrs]) => "<" + tag + " " + Object.entries(attrs).map(([k, v]) => k + '="' + productionEscape(v) + '"').join(" ") + "></" + tag + ">").join("") + "</svg>";
    };
    function productionError(where, error) {
        if (S.destroyed) return;
        const message = String(where + ": " + (error?.message || error)).slice(0, 240);
        if (!S.errors.includes(message)) {
            S.errors.length >= 20 && S.errors.shift();
            productionError("Runtime", message);
        }
        productionUI.message = message;
        for (const n of D.querySelectorAll("[data-brio-message]")) n.textContent = message;
    }
    function productionOriginals(k) {
        if (![ "head", "body", "pickaxe", "glider" ].includes(k)) return [];
        return productionKits.map(set => ({
            id: "brio-" + set.key,
            name: set.name,
            data: productionAssetBase + "d4/exports/" + set.key + "/" + (k === "pickaxe" ? "pickaxe-held" : k) + ".png",
            original: true,
            thumbnail: productionAssetBase + "d4/" + set.atlas,
            piece: [ "head", "body", "pickaxe", "glider" ].indexOf(k)
        }));
    }
    function productionClearPreview() {
        for (const im of productionPreviewImages.values()) {
            productionImages.delete(im);
            im.onload = im.onerror = null;
            im.src = "";
        }
        productionPreviewImages.clear();
    }
    function productionReleaseResources() {
        productionResourceGeneration++;
        for (const cancel of productionImageCancels.values()) cancel();
        productionImageCancels.clear();
        S.resources.clear();
    }
    const productionTrailLocks = new Map;
    function productionIsTrail(node) {
        const r = node?.["À"];
        return [ r?.src, r?.id, r?.name, r?.["ÁÄ"]?.src, hudPath(node) ].some(x => typeof x === "string" && /(?:^|\/)(?:trail\d+-[01](?:\.png)?|cosmetics\/trails\/trail\d+\.png)(?:[?#].*)?$/i.test(x));
    }
    function productionTrailEmission(r) {
        if (!r || productionTrailLocks.has(r) || productionTrailLocks.size >= 256 || !Object.hasOwn(r, "åëÅ")) return;
        const d = Object.getOwnPropertyDescriptor(r, "åëÅ");
        if (!d?.configurable || !("value" in d) && (!d.get || !d.set)) return;
        let native = d.value;
        const get = function() {
            const e = exFast();
            return e.playersInvisible || e.allTrailsInvisible || e.goodFlippinLuck ? 0 : d.get ? Reflect.apply(d.get, this, []) : native;
        }, set = function(value) {
            native = Number.isFinite(value) ? value : 0;
            d.set && Reflect.apply(d.set, this, [ native ]);
        };
        Object.defineProperty(r, "åëÅ", {
            configurable: true,
            enumerable: d.enumerable,
            get: get,
            set: set
        });
        const restore = () => {
            if (Object.getOwnPropertyDescriptor(r, "åëÅ")?.get === get) {
                Object.defineProperty(r, "åëÅ", d);
                "value" in d && d.writable && (r["åëÅ"] = native);
            }
            productionTrailLocks.delete(r);
        };
        productionTrailLocks.set(r, restore);
        featureRestore.push(restore);
    }
    function productionMapPrototype(node) {
        node?.["Ée"] === "mapScene" && gateNativeDraw(node, "fullMap", e => !!e.noMinimap);
    }
    function productionInstallMapTraversal() {
        const d = Object.getOwnPropertyDescriptor(Array.prototype, "forEach"), original = d.value;
        const wrapper = function(callback, receiver) {
            if (!S.destroyed && featureEx.value.noMinimap && Array.isArray(this)) try {
                const first = Object.getOwnPropertyDescriptor(this, "0")?.value, root = first && typeof first === "object" ? Object.getOwnPropertyDescriptor(first, "parent")?.value : null;
                if (root && Object.getOwnPropertyDescriptor(root, "Ée")?.value === "mapScene" && (Object.getOwnPropertyDescriptor(root, "âè")?.value === this || Object.getOwnPropertyDescriptor(root, "ÉE")?.value === this)) return;
            } catch (_) {}
            return Reflect.apply(original, this, [ callback, receiver ]);
        };
        Object.defineProperty(Array.prototype, "forEach", {
            ...d,
            value: wrapper
        });
        productionMapRestores.set(Array.prototype, () => {
            Array.prototype.forEach === wrapper && Object.defineProperty(Array.prototype, "forEach", d);
        });
    }
    function productionHeader(name) {
        return `<div class="bu-topbar"><div class="bu-brand"><div class="bu-monogram">BU</div><div class="bu-wordmark">BRIO UNLOCKED</div></div><div class="bu-header-nav"><span>${name} · ${productionVersion}</span><button class="bu-close" data-close aria-label="Close ${name}">${productionIcon("x")}</button></div></div>`;
    }
    function productionShell(name, side, content, footer) {
        return `<div class="bu-surface">${productionHeader(name)}<div class="bu-main"><aside class="bu-sidebar">${side}</aside><div class="bu-workspace">${content}</div></div><div class="bu-equipped">${footer}</div></div>`;
    }
    function productionShow(menu) {
        productionLastFocus = D.activeElement;
        locker.style.display = extras.style.display = "none";
        menu.style.display = "flex";
        menu.querySelector("[data-close]")?.focus();
        menu === locker && productionPreview();
    }
    function productionClose(menu) {
        menu.style.display = "none";
        cancelAnimationFrame(productionFrame);
        productionFrame = 0;
        productionClearPreview();
        productionLastFocus?.focus?.();
    }
    function productionSelected(k) {
        const z = state();
        return k === "emote" ? z.emotes?.[slot] || {
            mode: "native"
        } : z[k] || {
            mode: "native"
        };
    }
    function productionCurrentArt(k, selection) {
        const x = selection || productionSelected(k);
        if (x.mode === "invisible") return "";
        if (x.mode === "custom") return [ ...S.custom[k] || [], ...productionOriginals(k) ].find(v => v.id === x.id)?.data || "";
        if (x.mode === "item") return preview(k, x.id);
        const selected = S.native?.[k], src = nativeResourcePath(selected);
        if (src && src !== "/") return src;
        return k === "body" ? "/cosmetics/body/player.png" : k === "head" ? "/cosmetics/head/player.png" : k === "pickaxe" ? "/cosmetics/pickaxe/pickaxe.png" : k === "glider" ? "/cosmetics/glider/glider.png" : "";
    }
    function productionLocker() {
        if (S.destroyed) return;
        cancelAnimationFrame(productionFrame);
        productionClearPreview();
        const k = kcat(), selected = sel(), custom = [ "head", "body", "pickaxe", "glider" ].includes(k), query = productionUI.search.toLowerCase();
        const side = '<div class="bu-eyebrow">Your collection</div>' + Object.entries(labels).map(([id, name]) => `<button data-category="${id}" class="${id === tab ? "active" : ""}">${productionIcon({
            skin: "shapes",
            pickaxe: "pickaxe",
            wrap: "paintbrush",
            trail: "route",
            glider: "wind",
            emote: "smile"
        }[id])}${name}</button>`).join("");
        const rows = [ ...productionOriginals(k).map(x => ({
            ...x,
            mode: "custom",
            source: "Originals"
        })), ...(S.custom[k] || []).map(x => ({
            ...x,
            mode: "custom",
            source: "Uploads"
        })), ...items(k === "head" || k === "body" ? "skin" : k).map(x => ({
            ...x,
            mode: "item",
            source: "Native"
        })) ].filter(x => (productionUI.filter === "All" || x.source === productionUI.filter) && x.name.toLowerCase().includes(query));
        const cards = rows.map(x => `<button class="bu-item brioCard ${selected.mode === x.mode && selected.id === x.id ? "selected sel" : ""}" data-mode="${x.mode}" data-id="${productionEscape(x.id)}" aria-pressed="${selected.mode === x.mode && selected.id === x.id}"><span class="bu-art">${x.thumbnail ? `<span class="bu-original-thumb"><img loading="lazy" decoding="async" src="${productionEscape(x.thumbnail)}" alt="${productionEscape(x.name)}" style="left:${-x.piece % 2 * 100}%;top:${100 * -Math.floor(x.piece / 2)}%"></span>` : `<img loading="lazy" decoding="async" src="${productionEscape(x.data || preview(k, x.id))}" alt="${productionEscape(x.name)}"${k === "pickaxe" ? ' style="transform:rotate(-45deg)"' : ""}>`}</span><span class="bu-itemname">${productionEscape(x.name)}</span></button>`).join("");
        const emotes = Array.from({
            length: 4
        }, (_, i) => {
            const choice = state().emotes?.[i], src = choice?.mode === "item" ? preview("emote", choice.id) : S.native?.emotes?.[i]?.src;
            return `<div>${src ? `<img src="${productionEscape(src)}" alt="${productionEscape(choice?.name || "Native emote")}">` : "<span>Native</span>"}<small>${i + 1}</small></div>`;
        }).join("");
        const previewHTML = `<section class="bu-player-preview"><div><span class="bu-eyebrow">Loadout</span><strong>${tab === "emote" ? "Emotes" : productionUI.last === "glider" ? "Gliding" : productionUI.last === "wrap" ? "Weapon" : "Running"}</strong><button class="bu-btn ghost" data-preview-pause aria-pressed="${productionUI.paused}">${productionUI.paused ? "Animate" : "Pause"}</button></div>${tab === "emote" ? `<div class="bu-emote-preview">${emotes}</div>` : '<canvas width="600" height="200" data-player-preview aria-label="Animated loadout preview"></canvas>'}</section>`;
        const content = previewHTML + `<div class="bu-titleline"><h2>${labels[tab]}</h2></div>` + (tab === "skin" ? `<div class="bu-segment">${[ "body", "head" ].map(p => `<button data-part="${p}" class="${sub === p ? "active" : ""}">${p === "body" ? "Body" : "Head"}</button>`).join("")}</div>` : "") + (tab === "emote" ? `<div class="bu-slotbar">${[ 0, 1, 2, 3 ].map(i => `<button data-slot="${i}" class="${slot === i ? "active" : ""}">Slot ${i + 1}</button>`).join("")}</div>` : "") + `<div class="bu-segment">${[ "All", ...custom ? [ "Originals", ...k === "glider" ? [] : [ "Uploads" ] ] : [] ].map(v => `<button data-filter="${v}" class="${productionUI.filter === v ? "active" : ""}">${v}</button>`).join("")}</div><div class="bu-toolbar"><label class="bu-search">${productionIcon("search")}<input data-search type="text" placeholder="Search ${labels[tab].toLowerCase()}" value="${productionEscape(productionUI.search)}" aria-label="Search cosmetics"></label>${custom && k !== "glider" ? '<button class="bu-btn" data-upload>Import</button><input type="file" accept="image/*" data-import hidden>' : ""}</div><div class="bu-modebar">${[ "native", "random", ...[ "body", "head", "pickaxe", "trail", "glider" ].includes(k) ? [ "invisible" ] : [] ].map(mode => `<button class="bu-mode ${selected.mode === mode ? "active" : ""}" data-mode="${mode}" aria-pressed="${selected.mode === mode}">${mode === "native" ? "Game default" : mode[0].toUpperCase() + mode.slice(1)}</button>`).join("")}</div><div class="bu-grid brioGrid">${cards || '<div class="bu-empty">No matching cosmetics.</div>'}</div>`;
        locker.innerHTML = productionShell("Unlocker", side, content, `<span>${productionEscape(k)} selected · <strong>${productionEscape(selected.name || selected.id || selected.mode || "Native")}</strong></span><span data-brio-message>${productionEscape(productionUI.message)}</span>`);
        locker.querySelector("[data-search]").oninput = e => {
            const start = e.target.selectionStart;
            productionUI.search = e.target.value;
            productionLocker();
            const input = locker.querySelector("[data-search]");
            input.focus();
            input.setSelectionRange(start, start);
        };
        const upload = locker.querySelector("[data-import]");
        upload && (upload.onchange = productionImport);
        productionPreview();
    }
    async function productionImport(event) {
        const f = event.target.files?.[0], k = kcat();
        event.target.value = "";
        if (!f || ![ "body", "head", "pickaxe" ].includes(k)) return;
        if (f.size > 1e7) {
            productionError("Import", "Choose an image under 10 MB");
            return;
        }
        const url = URL.createObjectURL(f);
        productionObjectURLs.add(url);
        const im = new Image;
        productionImages.add(im);
        const done = () => {
            URL.revokeObjectURL(url);
            productionObjectURLs.delete(url);
            productionImages.delete(im);
            im.onload = im.onerror = null;
        };
        im.onerror = () => {
            done();
            productionError("Import", "Image could not be decoded");
        };
        im.onload = async () => {
            if (S.destroyed) {
                done();
                return;
            }
            try {
                if (!im.naturalWidth || !im.naturalHeight || im.naturalWidth * im.naturalHeight > 25e6) throw Error("Image dimensions exceed the import limit");
                const c = D.createElement("canvas");
                c.width = c.height = k === "head" ? 350 : 300;
                const scale = Math.min(c.width / im.naturalWidth, c.height / im.naturalHeight), ctx = c.getContext("2d");
                ctx.drawImage(im, (c.width - im.naturalWidth * scale) / 2, (c.height - im.naturalHeight * scale) / 2, im.naturalWidth * scale, im.naturalHeight * scale);
                const n = S.custom[k].reduce((m, x) => Math.max(m, x.n || 0), 0) + 1, x = {
                    key: k + ":custom" + n,
                    category: k,
                    id: "custom" + n,
                    name: f.name.replace(/\.[^.]+$/, "").slice(0, 60) || "Custom " + n,
                    n: n,
                    data: c.toDataURL("image/png")
                };
                await putCustom(x);
                if (S.destroyed) return;
                S.custom[k].push(x);
                const saved = state();
                saved.enabled = true;
                saved[k] = {
                    mode: "custom",
                    id: x.id,
                    name: x.name
                };
                saveState(saved);
                productionUI.filter = "Uploads";
                productionLocker();
            } catch (error) {
                productionError("Import", error);
            } finally {
                done();
            }
        };
        im.src = url;
    }
    const productionRedOnly = new Set([ "vector", "heavy sniper", "minigun", "grenade launcher", "grenade pistol", "crossbow", "drum" ]);
    const productionNoLootRarity = new Set([ "grappler", "mirv", "signal flare" ]);
    const productionLootTiers = type => productionNoLootRarity.has(type) ? [] : productionRedOnly.has(type) ? [ 5 ] : [ 4, 5 ];
    const productionLootChoiceAllowed = key => {
        const match = String(key).match(/^(.*):([45])$/);
        return !!match && productionLootTiers(match[1]).includes(+match[2]);
    };
    const productionPalette = [ "#f0edda", "#ff8d4c", "#b8e1c0", "#25d4da", "#a878ff", "#f35d79", "#ffd21c", "#171b19" ];
    function productionColors(key, value, disabled = false) {
        return `<div class="bu-palette">${productionPalette.map(c => `<button class="bu-swatch" style="--sw:${c}" data-color="${key}:${c}" aria-label="${key} ${c}" aria-pressed="${value === c}" ${disabled ? "disabled" : ""}></button>`).join("")}<label class="bu-hex">HEX <input data-hex="${key}" aria-label="${key} hex color" value="${value}" maxlength="7" spellcheck="false" ${disabled ? "disabled" : ""}></label></div>`;
    }
    function productionOption(row, s, e) {
        const [id, label, note, , kind] = row, on = !!e[id], locked = !!s.goodFlippinLuck && (extraTab === "modifiers" || id !== "goodFlippinLuck" && kind !== "visual");
        let controls = "";
        if (id === "inventorySize") return `<div class="bu-option" data-extra-id="${id}"><div><label>Inventory size</label><p>Other players’ item, material and ammo panels.</p><div class="bu-tier">${[ "small", "medium", "large", "xl" ].map(v => `<button data-size="${v}" class="${s.inventorySize === v ? "active" : ""}" aria-pressed="${s.inventorySize === v}" ${locked ? "disabled" : ""}>${v.toUpperCase()}</button>`).join("")}</div></div></div>`;
        if ([ "lowHealthWarning", "lowAmmoWarning", "lowMatsWarning" ].includes(id)) {
            const k = id === "lowHealthWarning" ? "health" : id === "lowAmmoWarning" ? "ammo" : "materials", names = k === "health" ? [ "Health" ] : k === "ammo" ? [ "Light", "Medium", "Heavy", "Shells", "Rockets", "Grappler" ] : [ "Wood", "Brick", "Metal", "Scraps" ];
            controls = `<fieldset class="bu-feature-settings" ${!on || locked ? "disabled" : ""}><div class="bu-thresholds">${names.map((n, i) => `<label>${n}<input type="number" min="0" max="1000000" step="1" data-threshold="${k}:${i}" value="${k === "health" ? s.warningThresholds.health : s.warningThresholds[k][i]}" aria-label="${n} warning threshold"></label>`).join("")}</div><button class="bu-btn ghost" data-reset-warning="${k}">Reset to default</button></fieldset>`;
        }
        if (id === "lootInvisible" || id === "buildsInvisible") {
            const key = id === "lootInvisible" ? "lootMaskTier" : "buildMaskTier", tiers = id === "lootInvisible" ? [ [ "item", "Art" ], [ "rarity", "Rarity" ], [ "popups", "Art + rarity" ], [ "locations", "Positions only" ], [ "all", "Everything" ] ] : [ [ "blueprints", "Keep previews" ], [ "all", "Everything" ] ];
            controls = `<fieldset class="bu-tier" data-challenge-tier="${key}" ${!on || locked ? "disabled" : ""}>${tiers.map(([v, l]) => `<button data-tier="${key}:${v}" class="${e[key] === v ? "active" : ""}" aria-pressed="${e[key] === v}">${l}</button>`).join("")}</fieldset>`;
        }
        Object.hasOwn(INDICATOR_COLORS, id) && (controls += productionColors(id, s.indicatorColors[id], !on || locked));
        id === "lootIndicator" && (controls += `<details><summary>Loot choices · gold / red</summary><fieldset class="bu-tier" ${!on || locked ? "disabled" : ""}>${weaponChoices().filter(type => productionLootTiers(type).length).map(type => `<div class="bu-loot-choice"><img loading="lazy" src="${productionEscape(S.hudAssetPaths?.get(type) || "/buildart/" + type + ".png")}" alt=""><span>${productionEscape(type)}</span>${productionLootTiers(type).map(r => `<button data-loot-choice="${productionEscape(type + ":" + r)}" class="${s.lootChoices.includes(type + ":" + r) ? "active" : ""}" aria-pressed="${s.lootChoices.includes(type + ":" + r)}">${r === 4 ? "Gold" : "Red"}</button>`).join("")}</div>`).join("")}</fieldset></details>`);
        id === "flashlightMode" && (controls = `<fieldset class="bu-feature-settings" ${on ? "" : "disabled"}><div class="bu-tier">${[ "player", "cursor" ].map(v => `<button data-follow="${v}" class="${s.flashlightFollow === v ? "active" : ""}" aria-pressed="${s.flashlightFollow === v}">Follow ${v}</button>`).join("")}</div><label class="bu-hex">Radius <input data-radius type="number" min="80" max="600" value="${s.flashlightRadius}" aria-label="Flashlight radius"></label></fieldset>`);
        id === "customCrosshair" && (controls = `<fieldset class="bu-feature-settings" ${!on || locked ? "disabled" : ""}><div class="bu-inline-reticles">${productionReticles.map(([name], i) => [ "shape" + i, name ]).concat([ [ "cross", "Cross" ], [ "dot", "Dot" ], [ "ring", "Ring" ] ]).map(([style, name], i) => `<button data-reticle="${style}" class="${s.reticleStyle === style ? "selected" : ""}" aria-pressed="${s.reticleStyle === style}" aria-label="${name}"><canvas width="160" height="160" data-shape="${i < 36 ? i : style}"></canvas><span>${name}</span></button>`).join("")}</div><button class="bu-btn ghost" data-reticle="image">Use uploaded image</button>${productionColors("reticle", s.reticleColor)}<label class="bu-reticle-size">Size <input type="range" min="6" max="64" value="${s.reticleSize}" data-reticle-size aria-label="Crosshair size"><output>${s.reticleSize}px</output></label><button class="bu-btn ghost" data-reticle-import>Import crosshair</button><input type="file" data-reticle-file accept="image/png,image/webp" hidden></fieldset>`);
        return `<div class="bu-option brioOpt" data-extra-id="${id}"><div><label for="bu-${id}">${productionEscape(label.replace("Enhanced/custom crosshair", "Custom crosshair"))}</label><p>${productionEscape(productionCopy[id] || note)}</p>${controls}</div><label class="bu-toggle"><input id="bu-${id}" type="checkbox" data-toggle="${id}" aria-label="${productionEscape(label)}" ${on ? "checked" : ""} ${locked ? "disabled" : ""}><span>${on ? "ON" : "OFF"}</span></label></div>`;
    }
    function productionExtras() {
        if (S.destroyed) return;
        const focus = extras.contains(D.activeElement) ? D.activeElement : null, focusId = focus?.id, focusData = focus ? Object.entries(focus.dataset).find(([key]) => [ "toggle", "extraTab", "group", "color", "reticle", "size", "follow", "resetWarning", "tier", "lootChoice" ].includes(key)) : null;
        const s = storedExtras(), e = extrasState(), groups = productionGroups[extraTab], current = groups.find(x => x[0] === productionUI.groups[extraTab]) || groups[0];
        const side = '<div class="bu-eyebrow">Extras</div>' + [ "modifiers", "challenges" ].map(id => `<button data-extra-tab="${id}" class="${id === extraTab ? "active" : ""}">${productionIcon(id === "modifiers" ? "sliders-horizontal" : "flame")}${id === "modifiers" ? "Modifiers" : "Challenges"}</button>`).join("");
        const preset = extraTab === "modifiers" ? `<div class="bu-preset"><div><strong>General Advantages</strong><p class="bu-preset-description">${productionDescriptions.advantages}</p></div><button class="bu-btn mint" data-advantages>Use preset ${productionIcon("arrow-up-right")}</button></div>` : `<div class="bu-hell"><div><h2>HELL</h2><p class="bu-hell-description">${productionDescriptions.hell}</p></div><label class="bu-toggle"><input type="checkbox" data-toggle="goodFlippinLuck" aria-label="Hell" ${s.goodFlippinLuck ? "checked" : ""}><span>${s.goodFlippinLuck ? "ON" : "OFF"}</span></label></div>`;
        extras.innerHTML = productionShell("Extras", side, `<div class="bu-titleline"><h2>${extraTab === "modifiers" ? "Modifiers" : "Challenges"}</h2></div>${preset}<div class="bu-groupbar" role="tablist" aria-label="${extraTab} groups">${groups.map(([g]) => `<button data-group="${g}" role="tab" aria-selected="${g === current[0]}" class="${g === current[0] ? "active" : ""}">${g}</button>`).join("")}</div><div class="bu-settings" role="tabpanel">${current[1].map(id => EXTRA[extraTab].find(row => row[0] === id)).filter(Boolean).map(row => productionOption(row, s, e)).join("")}</div>`, `<span>${s.goodFlippinLuck ? "HELL ACTIVE · Your saved modifiers resume when it ends." : "Saved automatically"}</span><span data-brio-message>${productionEscape(productionUI.message)}</span><button class="bu-btn ghost" data-close>Done</button>`);
        for (const canvas of extras.querySelectorAll("[data-shape]")) {
            const ctx = canvas.getContext("2d");
            ctx.save();
            ctx.translate(80, 80);
            productionPaintReticle(ctx, /^\d+$/.test(canvas.dataset.shape) ? +canvas.dataset.shape : canvas.dataset.shape, s.reticleColor, s.reticleSize * 2);
            ctx.restore();
        }
        for (const input of extras.querySelectorAll("[data-hex]")) input.onchange = () => {
            /^#[0-9a-f]{6}$/i.test(input.value) ? productionSetColor(input.dataset.hex, input.value) : input.value = input.dataset.hex === "reticle" ? storedExtras().reticleColor : storedExtras().indicatorColors[input.dataset.hex];
        };
        for (const input of extras.querySelectorAll("[data-threshold]")) input.onchange = () => {
            const [k, i] = input.dataset.threshold.split(":"), n = Number(input.value), z = storedExtras();
            if (input.value !== "" && Number.isSafeInteger(n) && n >= 0 && n <= 1e6) {
                k === "health" ? z.warningThresholds.health = n : z.warningThresholds[k][+i] = n;
                productionSave(z, false);
            } else input.value = k === "health" ? z.warningThresholds.health : z.warningThresholds[k][+i];
        };
        const size = extras.querySelector("[data-reticle-size]");
        size && (size.oninput = () => {
            const z = storedExtras();
            z.reticleSize = +size.value;
            productionSave(z, false);
            size.nextElementSibling.value = size.value + "px";
            for (const c of extras.querySelectorAll("[data-shape]")) {
                const ctx = c.getContext("2d");
                ctx.clearRect(0, 0, 160, 160);
                ctx.save();
                ctx.translate(80, 80);
                productionPaintReticle(ctx, /^\d+$/.test(c.dataset.shape) ? +c.dataset.shape : c.dataset.shape, z.reticleColor, z.reticleSize * 2);
                ctx.restore();
            }
        });
        const radius = extras.querySelector("[data-radius]");
        radius && (radius.onchange = () => {
            const n = Number(radius.value);
            if (radius.value && Number.isFinite(n) && n >= 80 && n <= 600) {
                const z = storedExtras();
                z.flashlightRadius = n;
                productionSave(z, false);
            } else radius.value = storedExtras().flashlightRadius;
        });
        const file = extras.querySelector("[data-reticle-file]");
        file && (file.onchange = productionImportReticle);
        if (focusId) D.getElementById(focusId)?.focus(); else if (focusData) {
            const [key, value] = focusData;
            [ ...extras.querySelectorAll("button,input") ].find(n => n.dataset[key] === value)?.focus();
        }
    }
    function productionSave(z, rerender = true) {
        saveExtras(z);
        featureEx.at = -1 / 0;
        syncFeatureSettings();
        productionTrackEffects();
        rerender && productionExtras();
    }
    function productionSetColor(key, value) {
        const z = storedExtras();
        key === "reticle" ? z.reticleColor = value : Object.hasOwn(INDICATOR_COLORS, key) && (z.indicatorColors[key] = value);
        productionSave(z);
    }
    async function productionImportReticle(e) {
        const f = e.target.files?.[0];
        e.target.value = "";
        if (!f) return;
        try {
            if (![ "image/png", "image/webp" ].includes(f.type) || f.size > 25e4) throw Error("Use PNG or WebP under 250 KB");
            const data = await new Promise((resolve, reject) => {
                const r = new FileReader;
                productionReaders.add(r);
                r.onload = () => {
                    productionReaders.delete(r);
                    resolve(r.result);
                };
                r.onerror = r.onabort = () => {
                    productionReaders.delete(r);
                    reject(Error("Unable to read image"));
                };
                r.readAsDataURL(f);
            });
            if (S.destroyed) return;
            const im = new Image;
            await new Promise((resolve, reject) => {
                im.onload = resolve;
                im.onerror = () => reject(Error("Unable to decode image"));
                im.src = data;
            });
            if (S.destroyed) return;
            if (im.naturalWidth > 512 || im.naturalHeight > 512) throw Error("Use an image no larger than 512 × 512");
            write("brio_crosshair_image_v63", data);
            const z = storedExtras();
            z.reticleStyle = "image";
            v63ReticleImage(true);
            productionSave(z);
        } catch (error) {
            productionError("Crosshair", error);
        }
    }
    function productionMenuClick(event) {
        const b = event.target.closest("button,input[data-toggle]");
        if (!b || b.disabled) return;
        const menu = b.closest("[data-brio-menu]");
        if (!menu) return;
        if (b.hasAttribute("data-close")) {
            productionClose(menu);
            return;
        }
        if (menu === locker) {
            if (b.dataset.category) {
                tab = b.dataset.category;
                productionUI.filter = "All";
                productionUI.search = "";
            } else if (b.dataset.part) sub = b.dataset.part; else if (b.dataset.slot !== void 0) slot = +b.dataset.slot; else if (b.dataset.filter) productionUI.filter = b.dataset.filter; else {
                if (!b.hasAttribute("data-preview-pause")) {
                    if (b.hasAttribute("data-upload")) {
                        locker.querySelector("[data-import]").click();
                        return;
                    }
                    if (b.dataset.mode) {
                        const k = kcat(), x = b.dataset.id ? [ ...productionOriginals(k), ...S.custom[k] || [], ...items(k === "head" || k === "body" ? "skin" : k) ].find(x => x.id === b.dataset.id) : null;
                        productionUI.last = k;
                        setSel({
                            mode: b.dataset.mode,
                            ...x ? {
                                id: x.id,
                                name: x.name
                            } : {}
                        });
                        return;
                    }
                    return;
                }
                productionUI.paused = !productionUI.paused;
            }
            productionLocker();
            return;
        }
        if (b.dataset.extraTab) {
            extraTab = b.dataset.extraTab;
            productionExtras();
            return;
        }
        if (b.dataset.group) {
            productionUI.groups[extraTab] = b.dataset.group;
            productionExtras();
            return;
        }
        if (b.hasAttribute("data-advantages")) {
            v68Advantages();
            return;
        }
        const z = storedExtras();
        if (b.dataset.toggle) z[b.dataset.toggle] = b.checked; else if (b.dataset.size) z.inventorySize = b.dataset.size; else if (b.dataset.tier) {
            const [key, value] = b.dataset.tier.split(":");
            z[key] = value;
        } else if (b.dataset.follow) z.flashlightFollow = b.dataset.follow; else {
            if (b.dataset.color) {
                const [key, value] = b.dataset.color.split(":");
                productionSetColor(key, value);
                return;
            }
            if (b.dataset.reticle) z.reticleStyle = b.dataset.reticle; else if (b.dataset.resetWarning) {
                const k = b.dataset.resetWarning;
                z.warningThresholds[k] = normalizeWarningThresholds(null)[k];
            } else {
                if (!b.dataset.lootChoice) {
                    if (b.hasAttribute("data-reticle-import")) {
                        extras.querySelector("[data-reticle-file]").click();
                        return;
                    }
                    return;
                }
                {
                    const key = b.dataset.lootChoice;
                    z.lootChoices = z.lootChoices.includes(key) ? z.lootChoices.filter(x => x !== key) : [ ...z.lootChoices, key ];
                }
            }
        }
        productionSave(z);
    }
    function productionKeys(event) {
        const menu = locker.style.display === "flex" ? locker : extras.style.display === "flex" ? extras : null;
        if (!menu) return;
        if (event.key === "Escape") {
            event.preventDefault();
            event.stopImmediatePropagation();
            productionClose(menu);
        } else if (event.key === "Tab") {
            const focusable = [ ...menu.querySelectorAll('button:not(:disabled),input:not(:disabled),a[href],[tabindex="0"]') ].filter(n => !n.hidden && n.getAttribute("type") !== "file"), first = focusable[0], last = focusable.at(-1);
            if (event.shiftKey && D.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && D.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        }
    }
    function productionArrow(key, color) {
        if (S[key]) {
            S[key].style.color = color;
            return S[key];
        }
        const u = D.createElement("div");
        u.className = "brioArrow brio-product bu-indicator";
        u.style = "position:fixed;z-index:2147483644;pointer-events:none;display:none;width:100px;height:112px;";
        u.style.color = color;
        u.innerHTML = '<div class="bu-arrow shape"></div><span class="bu-distance d"></span>';
        D.documentElement.appendChild(u);
        S[key] = u;
        return u;
    }
    function productionPlaceArrow(u, dx, dy, dist, label, m, rect) {
        const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2, z = Math.max(0, Math.min(Math.max(10, rect.width / 2 - m) / Math.max(Math.abs(dx), .001), Math.max(10, rect.height / 2 - m) / Math.max(Math.abs(dy), .001)));
        u.style.display = "grid";
        u.style.left = cx + dx * z + "px";
        u.style.top = cy + dy * z + "px";
        u.style.transform = "translate(-50%,-50%)";
        u.querySelector(".shape").style.transform = "rotate(" + (Math.atan2(dy, dx) * 180 / Math.PI + 90) + "deg)";
        const d = u.querySelector(".d");
        d.replaceChildren();
        const distance = D.createElement("span");
        distance.textContent = (Math.max(0, dist) / 100).toLocaleString(void 0, {
            maximumFractionDigits: 1
        }) + "m";
        d.append(distance);
        if (label) {
            const name = D.createElement("span");
            name.className = "bu-targetname playerName";
            name.textContent = String(label).slice(0, 60);
            d.append(name);
        }
    }
    let productionMatchEffects = null;
    function productionBeginMatch() {
        productionMatchEffects = {
            modifiers: new Set,
            challenges: new Set,
            hell: false,
            advantages: false,
            advantagesEdited: false
        };
        productionTrackEffects(true);
    }
    function productionTrackEffects(force = false) {
        if (!productionMatchEffects || !force && (!v55.stats || v55.stats.finished || !S.renderer)) return;
        const e = extrasState(), m = productionMatchEffects;
        for (const [id] of EXTRA.modifiers) id && id !== "inventorySize" && e[id] && m.modifiers.add(id);
        for (const [id] of EXTRA.challenges) id && e[id] && m.challenges.add(id);
        m.hell ||= !!e.goodFlippinLuck;
        const included = GENERAL_ADVANTAGES.every(id => !!e[id]);
        if (!e.goodFlippinLuck && (included || e.generalAdvantagesPreset && GENERAL_ADVANTAGES.some(id => !!e[id]))) {
            m.advantages = true;
            m.advantagesEdited ||= !included || e.inventorySize !== "large" || JSON.stringify(e.warningThresholds) !== JSON.stringify(normalizeWarningThresholds(null));
        }
    }
    function productionEffectsHTML() {
        const m = productionMatchEffects || {
            modifiers: new Set,
            challenges: new Set
        }, adv = new Set(GENERAL_ADVANTAGES), hell = new Set(EXTRA.challenges.filter(([id, , , , kind]) => id && kind !== "visual").map(([id]) => id));
        return '<div class="bu-report-effects">' + [ "modifiers", "challenges" ].map(kind => {
            const collapsed = kind === "modifiers" && m.advantages ? m.advantagesEdited ? "General Advantages (edited)" : "General Advantages" : kind === "challenges" && m.hell ? "HELL" : null, covered = kind === "modifiers" ? adv : hell, rows = EXTRA[kind].filter(([id]) => id && m[kind].has(id) && !(collapsed && covered.has(id)));
            return "<section data-used-" + kind + "><h3>" + (kind === "modifiers" ? "Modifiers" : "Challenges") + '</h3><p class="bu-effect-caption">Used during this match</p><div class="bu-effect-list">' + (collapsed ? '<span class="preset">' + collapsed + "</span>" : "") + rows.map(([, label]) => "<span>" + productionEscape(label) + "</span>").join("") + (collapsed || rows.length ? "" : "<span>None</span>") + "</div></section>";
        }).join("") + "</div>";
    }
    function productionFinish(stats) {
        if (S.destroyed || !stats?.terminal) return;
        const t = stats.terminal;
        productionSession.add(S.matchEpoch || 0, {
            terminal: true,
            place: t.place,
            eliminations: t.eliminations,
            damage: t.damage,
            builds: t.walls,
            seconds: t.seconds,
            hpLoss: stats.hpLoss,
            shieldLoss: stats.shieldLoss,
            distanceMeters: stats.distance / 100,
            ownProjectiles: stats.ownProjectiles,
            observedPlayers: stats.names.size,
            weaponSeconds: Object.fromEntries(stats.weaponSeconds)
        });
        productionRenderSession();
    }
    const productionNum = x => Number.isFinite(x) ? x.toLocaleString(void 0, {
        maximumFractionDigits: 1
    }) : "—", productionTime = x => Number.isFinite(x) ? Math.floor(Math.round(x) / 60) + ":" + String(Math.round(x) % 60).padStart(2, "0") : "—";
    function productionPostGame() {
        const stats = v55.stats, screen = q("#deathscreen"), host = q("#deathPass");
        if (!stats?.finished || !screen || !host || getComputedStyle(screen).display === "none") return;
        const browsing = screen.querySelector(".statsContainer")?.style.display === "none";
        if (browsing) {
            v55.post && (v55.post.hidden = true);
            for (const [node, [value, priority]] of v55.postStyles) node.style.setProperty("display", value, priority);
            return;
        }
        if (!v55.post || v55.post.parentNode !== host) {
            v55.post = D.createElement("div");
            v55.post.className = "brio-product";
            v55.post.dataset.brioPostgame = "";
            v55.post.style = "box-sizing:border-box;width:100%;max-height:56vh;overflow:auto;text-align:left";
            host.appendChild(v55.post);
        }
        v55.post.hidden = false;
        for (const child of host.children) if (child !== v55.post) {
            v55.postStyles.has(child) || v55.postStyles.set(child, [ child.style.getPropertyValue("display"), child.style.getPropertyPriority("display") ]);
            child.style.setProperty("display", "none", "important");
        }
        if (v55.post.dataset.epoch === String(S.matchEpoch)) return;
        v55.post.dataset.epoch = String(S.matchEpoch);
        productionFinish(stats);
        const t = stats.terminal, weapon = [ ...stats.weaponSeconds ].sort((a, b) => b[1] - a[1]), total = weapon.reduce((sum, [, v]) => sum + v, 0), loss = stats.hpLoss + stats.shieldLoss, colors = [ "#b8e1c0", "#ff8d4c", "#87988d", "#c5b88b" ];
        v55.post.innerHTML = `<section class="bu-report" aria-label="BRIO match statistics panel"><header class="bu-report-head"><div><span class="bu-eyebrow">BRIO UNLOCKED · ${productionVersion}</span><h2>Match report</h2></div><span class="bu-report-place">${Number.isInteger(t.place) && t.place > 0 ? "#" + t.place : "—"} <small>PLACEMENT</small></span></header><div class="bu-report-totals">${[ [ "Eliminations", productionNum(t.eliminations) ], [ "Damage", productionNum(t.damage) ], [ "Builds", productionNum(t.walls) ], [ "Time alive", productionTime(t.seconds) ] ].map(([l, v]) => `<div><strong>${v}</strong><span>${l}</span></div>`).join("")}</div><div class="bu-report-body"><section><h3>Weapon time</h3><div class="bu-stacked" aria-label="Sampled holding time">${weapon.map(([n, v], i) => `<span style="width:${total ? v / total * 100 : 0}%;background:${colors[i % 4]}"></span>`).join("")}</div>${weapon.map(([n, v], i) => `<div class="bu-report-line"><span><i style="background:${colors[i % 4]}"></i>${productionEscape(n.toUpperCase())}</span><strong>${Math.round(v)}s <small>${total ? Math.round(v / total * 100) : 0}%</small></strong></div>`).join("")}<small class="bu-sampling">Sampled holding time</small><h3 class="bu-later">Eliminated <span>${stats.eliminated.length}</span></h3><div class="bu-victims">${stats.eliminated.length ? stats.eliminated.map((n, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${productionEscape(n)}</div>`).join("") : "<div>No elimination names observed</div>"}</div></section><section><h3>Observed loss</h3><div class="bu-loss"><div class="bu-loss-ring" style="background:conic-gradient(var(--bu-orange) 0 ${loss ? stats.hpLoss / loss * 100 : 0}%,var(--bu-mint) 0 100%)" aria-label="Observed HP and shield loss"><strong>${productionNum(loss)}<small>TOTAL</small></strong></div><div><div class="bu-report-line">HP <strong>${productionNum(stats.hpLoss)}</strong></div><div class="bu-report-line">Shield <strong>${productionNum(stats.shieldLoss)}</strong></div></div></div><div class="bu-report-line"><span>Travelled</span><strong>${productionNum(stats.distance / 100)} m</strong></div><div class="bu-report-line"><span>Your projectiles observed</span><strong>${productionNum(stats.ownProjectiles)}</strong></div><div class="bu-report-line"><span>Players observed</span><strong>${stats.names.size}</strong></div><details class="bu-derived"><summary>Match rates</summary>${[ [ "Damage / minute", t.seconds > 0 && Number.isFinite(t.damage) ? t.damage * 60 / t.seconds : null ], [ "Builds / minute", t.seconds > 0 && Number.isFinite(t.walls) ? t.walls * 60 / t.seconds : null ], [ "Damage / elimination", t.eliminations > 0 && Number.isFinite(t.damage) ? t.damage / t.eliminations : null ] ].map(([l, v]) => `<div class="bu-report-line">${l}<strong>${productionNum(v)}</strong></div>`).join("")}</details></section></div>${productionEffectsHTML()}<p class="bu-report-note">Observed samples cover this script’s recording only. Travel excludes ${stats.teleports} large position jumps. Damage attribution and accuracy are unavailable.</p></section>`;
    }
    function productionRenderSession() {
        for (const host of productionHomeNodes.filter(n => n.dataset.brioSession !== void 0)) host.innerHTML = productionSessionPanel();
    }
    function productionSessionPanel() {
        const q = productionSession.snapshot(), m = q.completed, coverage = k => `${q.coverage[k]}/${m} matches`, stats = [ [ "Wins", q.placements ? productionNum(q.wins) : "—", `${q.placements} outcomes known` ], [ "Win rate", q.winRate === null ? "—" : productionNum(q.winRate) + "%", `${q.placements} outcomes known` ], [ "Eliminations", m ? productionNum(q.totals.eliminations) : "—", coverage("eliminations") ], [ "Kills / game", productionNum(q.killsPerGame), coverage("eliminations") ], [ "Avg. place", productionNum(q.averagePlacement), `${q.placements} placements known` ], [ "Avg. survival", productionTime(q.averageSeconds), coverage("seconds") ] ], rows = [ [ "Damage", q.coverage.damage ? productionNum(q.totals.damage) : "—", coverage("damage") ], [ "Builds placed", q.coverage.builds ? productionNum(q.totals.builds) : "—", coverage("builds") ], [ "Time alive", q.coverage.seconds ? productionTime(q.totals.seconds) : "—", coverage("seconds") ], [ "Best placement", q.best === null ? "—" : "#" + q.best, `${q.placements} placements known` ], [ "Damage / game", productionNum(q.damagePerGame), coverage("damage") ], [ "Builds / game", productionNum(q.buildsPerGame), coverage("builds") ] ], observed = [ [ "Travelled", productionNum(q.totals.distanceMeters) + " m", coverage("distanceMeters") ], [ "HP lost", productionNum(q.totals.hpLoss), coverage("hpLoss") ], [ "Shield lost", productionNum(q.totals.shieldLoss), coverage("shieldLoss") ], [ "Your projectiles", productionNum(q.totals.ownProjectiles), coverage("ownProjectiles") ] ], weapons = Object.entries(q.weapons).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]), weaponTotal = weapons.reduce((a, [, v]) => a + v, 0);
        return `<section class="bu-session-panel" aria-label="Session statistics"><header><div><span class="bu-eyebrow">BRIO UNLOCKED</span><h3>This session</h3></div><span class="bu-session-count">${m} <small>MATCHES</small></span></header><div class="bu-session-scroll" role="region" aria-label="Scrollable session statistics">${m ? `<div class="bu-session-kpis">${stats.map(([l, v, c]) => `<div data-tooltip="${productionEscape(c)}"><strong>${v}</strong><span>${l}</span></div>`).join("")}</div>${q.placements < m ? `<p class="bu-session-coverage">${q.placements} of ${m} results have placement data.</p>` : ""}<div class="bu-session-outcome"><div class="bu-session-ring" style="--win:${q.winRate || 0}%" role="img" aria-label="${q.winRate === null ? "No known outcomes" : productionNum(q.winRate) + " percent wins"}"><strong>${q.winRate === null ? "—" : Math.round(q.winRate) + "%"}</strong></div><span>Win rate<small>${q.placements} known outcomes</small></span></div><h4>Totals & averages</h4>${rows.map(([l, v, c]) => `<div class="bu-session-line"><span>${l}</span><strong data-tooltip="${productionEscape(c)}">${v}</strong></div>`).join("")}<h4>Weapon time <small>${q.weaponMatches}/${m} matches</small></h4>${weaponTotal ? `<div class="bu-session-stack" role="img" aria-label="Sampled weapon holding time">${weapons.map(([n, v], i) => `<i style="width:${v / weaponTotal * 100}%;background:${[ "#b8e1c0", "#ff8d4c", "#87988d", "#c5b88b" ][i % 4]}"></i>`).join("")}</div>${weapons.map(([n, v]) => `<div class="bu-session-line"><span>${productionEscape(n.toUpperCase())}</span><strong>${Math.round(v / weaponTotal * 100)}%</strong></div>`).join("")}` : '<p class="bu-session-coverage">No holding-time samples</p>'}<h4>Observed</h4>${observed.map(([l, v, c], i) => `<div class="bu-session-line"><span>${l}<small>${c}</small></span><strong>${q.coverage[[ "distanceMeters", "hpLoss", "shieldLoss", "ownProjectiles" ][i]] ? v : "—"}</strong></div>`).join("")}<p class="bu-session-coverage">Observed samples may not cover each match in full.</p>` : '<div class="bu-session-empty"><strong>No completed matches</strong><p>Your session begins with the first result.</p></div>'}</div><footer>Resets when the script runs again.</footer></section>`;
    }
    function productionPreview() {
        cancelAnimationFrame(productionFrame);
        const canvas = locker.querySelector("[data-player-preview]");
        if (!canvas || locker.style.display !== "flex") return;
        const ctx = canvas.getContext("2d");
        const get = src => {
            if (!src) return null;
            if (!productionPreviewImages.has(src)) {
                if (productionPreviewImages.size >= 8) {
                    const first = productionPreviewImages.keys().next().value, old = productionPreviewImages.get(first);
                    productionImages.delete(old);
                    old.onload = old.onerror = null;
                    old.src = "";
                    productionPreviewImages.delete(first);
                }
                const im = new Image;
                im.decoding = "async";
                im.onload = () => {
                    !S.destroyed && canvas.isConnected && draw(performance.now());
                };
                /^https?:/.test(src) && new URL(src, location.href).origin !== location.origin && (im.crossOrigin = "anonymous");
                im.src = src;
                productionPreviewImages.set(src, im);
            }
            return productionPreviewImages.get(src);
        };
        const part = (key, x, y, w, h, rotation = 0) => {
            const selected = productionSelected(key);
            if (selected.mode === "invisible") return;
            let src = productionCurrentArt(key);
            if (key === "wrap") {
                const im = wrappedGun();
                if (!im) return;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                ctx.drawImage(im, -w / 2, -h / 2, w, h);
                ctx.restore();
                return;
            }
            key === "trail" && (src = selected.mode === "item" ? "/cosmetics/trails/" + selected.id + ".png" : "/cosmetics/trails/" + String(S.native?.trail || "trail0").replace(/-$/, "") + ".png");
            if (key === "head" && selected.mode === "custom" && String(selected.id).startsWith("brio-")) {
                w *= productionHeadScale;
                h *= productionHeadScale;
            }
            const im = get(src);
            if (!im?.complete || !im.naturalWidth) return;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.drawImage(im, -w / 2, -h / 2, w, h);
            ctx.restore();
        };
        let composite = null, compositeKey = "";
        const wrappedGun = () => {
            const selected = productionSelected("wrap"), id = selected.mode === "item" ? selected.id : "nowrap", basePath = S.hudAssetPaths?.get("scar") || "/buildart/scar.png", base = get(basePath);
            if (!base?.complete || !base.naturalWidth) return null;
            if (id === "nowrap" || id === "empty") return base;
            const index = S.previewScarIndex;
            if (!Number.isInteger(index)) return null;
            const paths = [ S.hudAssetPaths?.get("redsheet") || "/buildart/redsheet.png", S.hudAssetPaths?.get("greensheet") || "/buildart/greensheet.png", "/cosmetics/wraps/" + id + "0.png", "/cosmetics/wraps/" + id + "1.png" ], images = paths.map(get);
            if (images.some(im => !im?.complete || !im.naturalWidth)) return null;
            const signature = [ id, basePath, index, ...paths ].join("|");
            if (composite && compositeKey === signature) return composite;
            const out = D.createElement("canvas"), mask = D.createElement("canvas");
            out.width = out.height = 350;
            mask.width = 350;
            mask.height = 195;
            const o = out.getContext("2d"), m = mask.getContext("2d");
            o.drawImage(base, 0, 0, 350, 350);
            for (let i = 0; i < 2; i++) {
                m.globalCompositeOperation = "source-over";
                m.clearRect(0, 0, 350, 195);
                m.drawImage(images[i], index % 6 * 350, 195 * Math.floor(index / 6), 350, 195, 0, 0, 350, 195);
                m.globalCompositeOperation = "source-in";
                m.drawImage(images[i + 2], 0, -77.5, 350, 350);
                o.drawImage(mask, 0, 77.5);
            }
            mask.width = mask.height = 0;
            compositeKey = signature;
            composite = out;
            return composite;
        };
        const draw = t => {
            cancelAnimationFrame(productionFrame);
            productionFrame = 0;
            if (S.destroyed || !canvas.isConnected || locker.style.display !== "flex") return;
            const reduced = W.matchMedia?.("(prefers-reduced-motion: reduce)").matches, animate = !productionUI.paused && !reduced && !D.hidden, c = animate ? Math.cos(t / 175) : 0, gliding = productionUI.last === "glider";
            ctx.clearRect(0, 0, 600, 200);
            ctx.strokeStyle = "#b8e1c020";
            ctx.beginPath();
            ctx.ellipse(305, 160, 66, 8, 0, 0, Math.PI * 2);
            ctx.stroke();
            if (productionSelected("trail").mode !== "invisible") for (let j = 3; j >= 0; j--) {
                ctx.globalAlpha = (4 - j) / 5;
                part("trail", 305 - j * 21 - (animate ? t / 18 % 21 : 0), 105 + Math.sin(j) * 3, 45 - j * 5, 45 - j * 5);
            }
            ctx.globalAlpha = 1;
            ctx.save();
            ctx.translate(305, 105);
            ctx.scale(1.12, 1.12);
            const circle = (x, y, r, color) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            };
            const hide = productionSelected("body").mode === "invisible";
            if (!gliding && !hide) {
                circle(2 - 15 * c, 15, 7, "#090d0a");
                circle(2 + 15 * c, -15, 7, "#090d0a");
                circle(2 - 15 * c, 15, 4, "#8b4513");
                circle(2 + 15 * c, -15, 4, "#8b4513");
            }
            part("body", 0, 0, 100, 100, Math.PI / 2 + (gliding ? 0 : c / 16));
            ctx.save();
            ctx.rotate(gliding ? 0 : -c / 8);
            if (!hide) {
                circle(22, 25, 11, "#0b110c");
                circle(22, 25, 9, "#b38638");
                circle(22, -25, 11, "#0b110c");
                circle(22, -25, 9, "#b38638");
            }
            gliding || (productionUI.last === "wrap" ? part("wrap", 24, -13, 110, 110, Math.PI / 2 + .2) : part("pickaxe", 24, 0, 110, 110, Math.PI / 2 + .01));
            ctx.restore();
            part("head", 0, 0, 120, 120, Math.PI / 2 + (gliding ? 0 : c / 32));
            ctx.restore();
            gliding && part("glider", 305, 105, 200, 200, -Math.PI / 2);
            animate && (productionFrame = requestAnimationFrame(draw));
        };
        for (const key of [ "head", "body", ...productionUI.last === "wrap" ? [] : productionUI.last === "glider" ? [ "glider" ] : [ "pickaxe" ] ]) get(productionCurrentArt(key));
        for (const im of productionPreviewImages.values()) im.complete || (im.onload = () => {
            !S.destroyed && canvas.isConnected && draw(performance.now());
        });
        productionFrame = requestAnimationFrame(draw);
    }
    function productionPaintReticle(c, i, color, size) {
        c.save();
        c.scale(size / 24, size / 24);
        c.strokeStyle = color;
        c.fillStyle = color;
        c.lineWidth = 1.8;
        c.lineCap = "round";
        c.lineJoin = "round";
        c.shadowColor = "#111";
        c.shadowBlur = 0;
        c.shadowOffsetY = .6;
        const dot = () => {
            c.beginPath();
            c.arc(0, 0, 1.3, 0, Math.PI * 2);
            c.fill();
        };
        i === 0 && dot();
        if (i === 1) {
            c.beginPath();
            for (const [x, y, x2, y2] of [ [ 0, -12, 0, -6 ], [ 0, 6, 0, 12 ], [ -12, 0, -6, 0 ], [ 6, 0, 12, 0 ] ]) {
                c.moveTo(x, y);
                c.lineTo(x2, y2);
            }
            c.stroke();
        }
        if (i === 2) {
            c.beginPath();
            c.arc(0, 0, 9, 0, Math.PI * 2);
            c.stroke();
            dot();
        }
        if (i === 3) {
            c.beginPath();
            for (const [x, y] of [ [ -1, -1 ], [ 1, -1 ], [ 1, 1 ], [ -1, 1 ] ]) {
                c.moveTo(x * 11, y * 5);
                c.lineTo(x * 11, y * 11);
                c.lineTo(x * 5, y * 11);
            }
            c.stroke();
            dot();
        }
        if (i === 4) {
            c.beginPath();
            for (let k = 0; k < 4; k++) {
                c.save();
                c.rotate(k * Math.PI / 2);
                c.moveTo(-3, -13);
                c.lineTo(0, -9);
                c.lineTo(3, -13);
                c.stroke();
                c.beginPath();
                c.restore();
            }
            dot();
        }
        if (i === 5) {
            c.beginPath();
            c.moveTo(-10, 9);
            c.lineTo(0, 2);
            c.lineTo(10, 9);
            c.stroke();
            dot();
        }
        if (i === 6) {
            c.beginPath();
            c.moveTo(-11, 0);
            c.lineTo(-5, 0);
            c.moveTo(5, 0);
            c.lineTo(11, 0);
            c.moveTo(0, 5);
            c.lineTo(0, 13);
            c.stroke();
        }
        if (i === 7) {
            c.beginPath();
            c.moveTo(0, -6);
            c.lineTo(6, 0);
            c.lineTo(0, 6);
            c.lineTo(-6, 0);
            c.closePath();
            c.stroke();
        }
        if (i === 8) for (const [x, y] of [ [ 0, -9 ], [ 9, 0 ], [ 0, 9 ], [ -9, 0 ] ]) {
            c.beginPath();
            c.arc(x, y, 1.6, 0, 7);
            c.fill();
        }
        if (i === 9) {
            for (const a of [ 0, Math.PI ]) {
                c.beginPath();
                c.arc(0, 0, 10, a + .5, a + 2.64);
                c.stroke();
            }
            dot();
        }
        const lines = segments => {
            c.beginPath();
            for (const [x, y, a, b] of segments) {
                c.moveTo(x, y);
                c.lineTo(a, b);
            }
            c.stroke();
        }, cross = (gap = 0, len = 12) => lines([ [ -len, 0, -gap, 0 ], [ gap, 0, len, 0 ], [ 0, -len, 0, -gap ], [ 0, gap, 0, len ] ]), ring = r => {
            c.beginPath();
            c.arc(0, 0, r, 0, Math.PI * 2);
            c.stroke();
        }, polygon = points => {
            c.beginPath();
            points.forEach(([x, y], k) => k ? c.lineTo(x, y) : c.moveTo(x, y));
            c.closePath();
            c.stroke();
        };
        i === 10 && cross();
        if (i === 11) {
            c.lineWidth = .9;
            cross(0, 14);
        }
        if (i === 12) {
            cross(5);
            dot();
        }
        if (i === 13) {
            lines([ [ -12, 0, -5, 0 ], [ 5, 0, 12, 0 ], [ 0, 5, 0, 13 ] ]);
            dot();
        }
        if (i === 14) {
            ring(7);
            cross(10, 15);
        }
        i === 15 && polygon([ [ -7, -7 ], [ 7, -7 ], [ 7, 7 ], [ -7, 7 ] ]);
        if (i === 16) {
            polygon([ [ -8, -8 ], [ 8, -8 ], [ 8, 8 ], [ -8, 8 ] ]);
            dot();
        }
        if (i === 17 || i === 18) {
            polygon([ [ 0, -9 ], [ 9, 7 ], [ -9, 7 ] ]);
            i === 18 && dot();
        }
        if (i === 19) for (const [x, y] of [ [ 0, 0 ], [ 0, -9 ], [ 9, 0 ], [ 0, 9 ], [ -9, 0 ] ]) {
            c.beginPath();
            c.arc(x, y, 1.3, 0, 7);
            c.fill();
        }
        i === 20 && lines([ [ -14, 0, -5, 0 ], [ 5, 0, 14, 0 ] ]);
        i === 21 && lines([ [ -9, -8, -9, 6 ], [ -9, 6, 9, 6 ], [ 9, 6, 9, -8 ] ]);
        i === 22 && lines([ [ 0, -15, 0, -4 ], [ 0, 4, 0, 15 ] ]);
        i === 23 && lines([ [ -8, 0, 0, -6 ], [ 0, -6, 8, 0 ], [ -8, 8, 0, 2 ], [ 0, 2, 8, 8 ] ]);
        if (i === 24) for (let a = 0; a < 3; a++) {
            const angle = -Math.PI / 2 + a * Math.PI * 2 / 3;
            lines([ [ Math.cos(angle) * 5, Math.sin(angle) * 5, Math.cos(angle) * 13, Math.sin(angle) * 13 ] ]);
        }
        if (i === 25 || i === 26) {
            lines([ [ -10, -10, -4, -4 ], [ 4, 4, 10, 10 ], [ 10, -10, 4, -4 ], [ -4, 4, -10, 10 ] ]);
            i === 26 && dot();
        }
        if (i === 27) {
            c.lineWidth = .9;
            ring(12);
            cross(0, 17);
            dot();
        }
        i === 28 && lines([ [ -9, 7, -9, -9 ], [ -9, -9, 7, -9 ] ]);
        if (i === 29) {
            c.beginPath();
            c.arc(0, 0, 10, Math.PI * .7, Math.PI * 2.3);
            c.stroke();
            dot();
        }
        if (i === 30) {
            dot();
            lines([ [ 0, 7, 0, 14 ] ]);
        }
        if (i === 31) {
            polygon([ [ 0, -5 ], [ 5, 0 ], [ 0, 5 ], [ -5, 0 ] ]);
            cross(8, 15);
        }
        if (i === 32) for (let a = 0; a < 8; a++) {
            const angle = a * Math.PI / 4;
            lines([ [ Math.cos(angle) * 7, Math.sin(angle) * 7, Math.cos(angle) * 12, Math.sin(angle) * 12 ] ]);
        }
        i === 33 && c.fillRect(-1.5, -1.5, 3, 3);
        if (i === 34) {
            c.lineWidth = .9;
            cross(2, 9);
            c.lineWidth = 3.3;
            cross(10, 16);
        }
        if (i === 35) {
            polygon([ [ -5, -5 ], [ 5, -5 ], [ 5, 5 ], [ -5, 5 ] ]);
            cross(9, 15);
        }
        if (i === "dot") {
            c.beginPath();
            c.arc(0, 0, 3, 0, Math.PI * 2);
            c.fill();
        } else if (i === "ring") {
            c.beginPath();
            c.arc(0, 0, 12, 0, Math.PI * 2);
            c.stroke();
        } else i === "cross" && lines([ [ -12, 0, -3.6, 0 ], [ 3.6, 0, 12, 0 ], [ 0, -12, 0, -3.6 ], [ 0, 3.6, 0, 12 ] ]);
        c.restore();
    }
    function productionHome() {
        if (S.destroyed) return;
        const install = (id, kind, markup) => {
            const host = D.getElementById(id);
            if (!host || host.querySelector(":scope > [data-brio-home]")) return;
            const savedStyle = host.getAttribute("style");
            const n = D.createElement("div");
            n.className = "brio-product";
            n.dataset.brioHome = kind;
            kind === "session" && (n.dataset.brioSession = "");
            n.innerHTML = markup;
            productionHomeNodes.push(n);
            host.appendChild(n);
            for (const child of host.children) if (child !== n) {
                productionAdStyles.has(child) || productionAdStyles.set(child, [ child.style.getPropertyValue("display"), child.style.getPropertyPriority("display") ]);
                child.style.setProperty("display", "none", "important");
            }
            const observer = new MutationObserver(records => {
                for (const node of productionAdStyles.keys()) node.isConnected || productionAdStyles.delete(node);
                for (const record of records) for (const child of record.addedNodes) if (child.nodeType === 1 && child !== n) {
                    productionAdStyles.has(child) || productionAdStyles.set(child, [ child.style.getPropertyValue("display"), child.style.getPropertyPriority("display") ]);
                    child.style.setProperty("display", "none", "important");
                }
            });
            observer.observe(host, {
                childList: true
            });
            productionHomeRestores.push(() => {
                observer.disconnect();
                savedStyle === null ? host.removeAttribute("style") : host.setAttribute("style", savedStyle);
            });
            host.style.width = kind === "session" ? "300px" : "728px";
            host.style.height = kind === "session" ? "250px" : "90px";
            host.style.maxWidth = "100%";
            if (kind === "session" && host.parentElement?.id === "bio32container") {
                const parent = host.parentElement, oldHeight = parent.style.height;
                productionHomeRestores.push(() => {
                    parent.style.height = oldHeight;
                });
            }
            host.style.marginInline = "auto";
            if (kind === "social" && host.parentElement?.id === "ref3") {
                const parent = host.parentElement, oldHeight = parent.style.height;
                parent.style.height = "90px";
                productionHomeRestores.push(() => {
                    parent.style.height = oldHeight;
                });
            }
        };
        install("buildroyale-io_970x250", "social", `<div class="bu-social"><div class="bu-admark">BU</div><div><h3>BRIO UNLOCKED <span class="bu-version">${productionVersion}</span></h3><p>Cosmetics unlocked. Modifiers & challenges. Your setup.</p></div><div class="bu-social-links"><a class="bu-btn primary" href="https://github.com/shortcutsbin-netizen/brio-unlocker" target="_blank" rel="noopener noreferrer">${productionIcon("code-xml")}GitHub ${productionIcon("arrow-up-right")}</a><span class="bu-discord-badge" aria-label="Discord handle ads0210"><img src="${productionAssetBase}d3/assets/discord.svg" alt="">ads0210</span></div></div>`);
        install("buildroyale-io_300x250", "session", productionSessionPanel());
        const logo = D.getElementById("logobr");
        if (logo && !logo.dataset.brioLogo) {
            const attrs = [ "src", "srcset", "alt" ].map(k => [ k, logo.getAttribute(k) ]);
            logo.dataset.brioLogo = "";
            logo.removeAttribute("srcset");
            logo.src = productionAssetBase + "d3/assets/logo-review.webp";
            logo.alt = "BRIO UNLOCKED";
            productionHomeRestores.push(() => {
                for (const [k, v] of attrs) v === null ? logo.removeAttribute(k) : logo.setAttribute(k, v);
                delete logo.dataset.brioLogo;
            });
        }
        productionLayoutSession();
        productionSettings.style.display = productionRelease.testingControls && S.renderer && !v55.stats?.finished ? "block" : "none";
    }
    function productionLayoutSession() {
        const host = D.getElementById("buildroyale-io_300x250"), n = host?.querySelector("[data-brio-session]");
        if (!n) return;
        const box = host.getBoundingClientRect();
        if (!box.width) return;
        const scale = box.width / 300;
        let top = 12;
        for (const id of [ "joinparty", "createparty", "partystuff" ]) {
            const el = D.getElementById(id);
            if (!el) continue;
            const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
            r.width && r.height && cs.visibility !== "hidden" && cs.display !== "none" && r.right > box.left && r.left < box.right && (top = Math.max(top, r.bottom + 12));
        }
        const available = Math.floor((box.bottom - top) / scale), height = Math.min(480, available);
        n.hidden = height < 140;
        if (n.hidden) {
            host.style.height = "0px";
            host.style.pointerEvents = "none";
            host.parentElement?.id === "bio32container" && (host.parentElement.style.height = "30px");
            return;
        }
        host.style.pointerEvents = "";
        host.style.height = height + "px";
        n.style.setProperty("--bu-session-height", height + "px");
        host.parentElement?.id === "bio32container" && (host.parentElement.style.height = height + 30 + "px");
    }
    const productionSettings = D.createElement("button");
    productionSettings.className = "brioSettings";
    productionSettings.textContent = "Extras";
    productionSettings.setAttribute("aria-label", "Open BRIO Extras");
    productionSettings.onclick = () => {
        productionExtras();
        productionShow(extras);
    };
    function productionInit() {
        productionInstallMapTraversal();
        style.textContent += '@font-face{font-family:\'D1 Barlow\';font-style:normal;font-weight:800;font-display:swap;src:url(data:font/woff;base64,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) format(\'woff\')}@font-face{font-family:\'D1 DM\';font-style:normal;font-weight:400;font-display:swap;src:url(data:font/woff;base64,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) format(\'woff\')}@font-face{font-family:\'D1 DM\';font-style:normal;font-weight:600;font-display:swap;src:url(data:font/woff;base64,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) format(\'woff\')}.brio-product{--bu-ink:#171b19;--bu-panel:#202622;--bu-raised:#2a322c;--bu-line:#414c42;--bu-muted:#aeb9ac;--bu-paper:#f0edda;--bu-orange:#ff8d4c;--bu-mint:#b8e1c0;--bu-danger:#f57c6c;color:var(--bu-paper);font:400 14px/1.45"D1 DM",sans-serif;color-scheme:dark;isolation:isolate;width:100%}.brio-product *{box-sizing:border-box;font-family:inherit}.brio-product button,.brio-product input,.brio-product select{font:inherit}.brio-product button,.brio-product a{touch-action:manipulation}.brio-product button{color:inherit;border:0;cursor:pointer}.brio-product button:disabled{opacity:.4;cursor:not-allowed}.brio-product button:focus-visible,.brio-product a:focus-visible,.brio-product input:focus-visible,.brio-product select:focus-visible{outline:3px solid var(--bu-orange);outline-offset:3px}.brio-product h1,.brio-product h2,.brio-product h3,.brio-product p{margin:0}.brio-product h1,.brio-product h2,.brio-product h3{font-family:"D1 Barlow",sans-serif;font-weight:800;line-height:.98;text-transform:uppercase;letter-spacing:.015em}.brio-product h1{font-size:44px}.brio-product h2{font-size:34px}.brio-product h3{font-size:24px}.brio-product small{font-size:12px}.brio-product svg{display:block}.brio-product [data-lucide]{width:18px;height:18px;display:inline-block;flex-shrink:0}.brio-product .bu-eyebrow{font-size:11px;letter-spacing:.14em;font-weight:600;text-transform:uppercase;color:var(--bu-muted)}.brio-product .bu-surface{position:relative;z-index:1;background:var(--bu-panel);border:1px solid #606d58;border-radius:10px;box-shadow:0 20px 60px #0007;overflow:hidden}.brio-product .bu-topbar{height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 23px;border-bottom:1px solid var(--bu-line);gap:12px}.brio-product .bu-brand{display:flex;align-items:center;gap:11px}.brio-product .bu-monogram{font:800 24px/.9"D1 Barlow",sans-serif;border:2px solid var(--bu-orange);border-radius:3px;padding:5px;color:var(--bu-orange);transform:skew(-7deg)}.brio-product .bu-wordmark{font:800 19px/.94"D1 Barlow",sans-serif;letter-spacing:.05em}.brio-product .bu-wordmark span{font:400 10px"D1 DM",sans-serif;letter-spacing:.22em;color:var(--bu-muted);display:block;margin-top:4px}.brio-product .bu-header-nav{display:flex;gap:24px;align-items:center;font-size:13px}.brio-product .bu-header-nav strong{font-weight:600;color:var(--bu-orange)}.brio-product .bu-close{width:32px;height:32px;border:1px solid var(--bu-line)!important;border-radius:50%;background:transparent;display:grid;place-items:center}.brio-product .bu-main{display:grid;grid-template-columns:178px minmax(0,1fr)}.brio-product .bu-sidebar{background:#1a211b;border-right:1px solid var(--bu-line);padding:23px 12px;display:flex;flex-direction:column;gap:7px}.brio-product .bu-sidebar .bu-eyebrow{padding:0 12px 12px}.brio-product .bu-sidebar button{display:flex;gap:10px;align-items:center;background:transparent;text-align:left;padding:11px 12px;border-radius:5px;color:var(--bu-muted)}.brio-product .bu-sidebar button.active{background:#b8e1c012;color:var(--bu-mint);box-shadow:inset 3px 0 var(--bu-mint)}.brio-product .bu-workspace{padding:24px;min-width:0}.brio-product .bu-titleline{display:flex;justify-content:space-between;align-items:end;gap:14px;margin-bottom:20px}.brio-product .bu-titleline p{color:var(--bu-muted);margin-top:8px;font-size:13px}.brio-product .bu-segment{display:flex;gap:4px;background:#151c16;padding:4px;border-radius:6px;flex-wrap:wrap}.brio-product .bu-segment button{padding:7px 13px;background:transparent;border-radius:4px;color:var(--bu-muted);font-size:12px}.brio-product .bu-segment button.active{background:var(--bu-raised);color:var(--bu-paper)}.brio-product .bu-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:38px;padding:9px 15px;border-radius:5px;background:var(--bu-raised);border:1px solid var(--bu-line);text-decoration:none;color:var(--bu-paper);font-size:12px;font-weight:600}.brio-product .bu-btn.primary{background:var(--bu-orange);color:#20190f;border-color:var(--bu-orange)}.brio-product .bu-btn.ghost{background:transparent}.brio-product .bu-btn.mint{background:var(--bu-mint);color:var(--bu-ink);border-color:var(--bu-mint)}.brio-product .bu-toolbar{display:flex;gap:10px;align-items:center;margin:16px 0}.brio-product .bu-search{display:flex;align-items:center;gap:8px;background:#171e18;border:1px solid var(--bu-line);padding:8px 11px;border-radius:5px;flex:1;min-width:0;color:var(--bu-muted)}.brio-product .bu-search input{border:0;background:transparent;color:var(--bu-paper);width:100%;min-width:0;outline-offset:8px}.brio-product .bu-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;max-height:290px;overflow:auto;scrollbar-width:thin;scrollbar-color:#53624f transparent;padding-right:4px;grid-auto-rows:140px}.brio-product .bu-item{padding:0;background:#182019;border:1px solid var(--bu-line);border-radius:6px;position:relative;text-align:left;overflow:hidden;min-width:0}.brio-product .bu-item.selected{border:1px solid var(--bu-mint);box-shadow:inset 0 0 0 1px var(--bu-mint)}.brio-product .bu-item.selected:after{content:"✓";position:absolute;right:8px;top:6px;color:var(--bu-mint);font-size:15px}.brio-product .bu-art{height:104px;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#c2ddaa0f,transparent 70%)}.brio-product .bu-art img{max-width:80%;max-height:85%;object-fit:contain}.brio-product .bu-item .bu-itemname{display:block;padding:9px 11px;background:#263026;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.brio-product .bu-equipped{display:flex;align-items:center;justify-content:space-between;padding:15px 22px;background:#151c16;border-top:1px solid var(--bu-line);gap:14px;font-size:12px}.brio-product .bu-equipped strong{color:var(--bu-mint)}.brio-product .bu-option{border-bottom:1px solid var(--bu-line);padding:13px 0;display:flex;align-items:center;justify-content:space-between;gap:18px}.brio-product .bu-option:last-child{border-bottom:0}.brio-product .bu-option label{display:block;font-weight:600;font-size:13px}.brio-product .bu-option p{font-size:12px;color:var(--bu-muted);margin-top:3px;max-width:400px}.brio-product .bu-preset{padding:17px 18px;border:1px solid #8da68a;background:#b8e1c00b;border-radius:6px;margin:0 0 15px;display:flex;justify-content:space-between;align-items:center;gap:14px}.brio-product .bu-preset strong{display:block;font:800 25px/1"D1 Barlow",sans-serif;text-transform:uppercase}.brio-product .bu-preset p{font-size:11px;color:var(--bu-muted);margin-top:5px}.brio-product .bu-groupbar{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px}.brio-product .bu-groupbar button{padding:7px 10px;background:transparent;border-bottom:2px solid transparent;font-size:12px;color:var(--bu-muted)}.brio-product .bu-groupbar button.active{color:var(--bu-mint);border-color:var(--bu-mint)}.brio-product .bu-settings{height:330px;overflow:auto;padding-right:7px;scrollbar-width:thin;scrollbar-color:#53624f transparent}.brio-product .bu-thresholds{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0 4px}.brio-product .bu-thresholds label{font-size:10px;color:var(--bu-muted);display:grid;gap:4px}.brio-product .bu-thresholds input{width:58px;background:#151d16;border:1px solid var(--bu-line);border-radius:4px;color:var(--bu-paper);padding:5px 7px;font-size:12px}.brio-product .bu-tier{display:flex;gap:4px;flex-wrap:wrap;margin:10px 0 5px}.brio-product .bu-tier button{font-size:11px;border-radius:4px;padding:5px 8px;background:#171e18;border:1px solid var(--bu-line)}.brio-product .bu-tier button.active{border-color:var(--bu-orange);color:var(--bu-orange)}.brio-product .bu-hell{display:grid;grid-template-columns:1fr auto;align-items:center;gap:18px;padding:20px;background:linear-gradient(105deg,#4a2d23,#2e2620);border:1px solid #986347;border-radius:6px;position:relative;margin-bottom:18px}.brio-product .bu-hell h2{font-size:42px;color:var(--bu-orange)}.brio-product .bu-hell p{font-size:12px;color:#d1b9a8;max-width:410px;margin-top:7px}.brio-product .bu-hell small{display:block;color:#d1b9a8;margin-top:10px}.brio-product .bu-social{width:min(728px,100%);min-height:90px;border:1px solid #7c8b64;border-radius:8px;background:#20291e;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:15px 20px;position:relative;overflow:hidden}.brio-product .bu-social:before{content:"";position:absolute;width:5px;inset:0 auto 0 0;background:var(--bu-orange)}.brio-product .bu-social h3{font-size:25px}.brio-product .bu-social p{font-size:11px;color:var(--bu-muted);margin-top:4px}.brio-product .bu-social-links{display:flex;gap:9px;flex:none}.brio-product .bu-social .bu-btn{padding:9px 11px;font-size:11px}.brio-product input[type=color]{width:30px;height:30px;padding:0;border:0;background:transparent}.brio-product input[type=range]{accent-color:var(--bu-orange);max-width:170px}.brio-product .bu-indicator{color:var(--bu-indicator-color,var(--bu-orange));display:grid;justify-items:center;gap:7px;filter:drop-shadow(0 3px 1px #0009)}.brio-product .bu-arrow{position:relative;width:60px;height:62px;transform:rotate(var(--bu-bearing,0deg));display:grid;place-items:center}.brio-product .bu-arrow:before{content:"";width:56px;height:48px;background:#111a12;clip-path:polygon(50%0,100% 100%,50% 76%,0 100%)}.brio-product .bu-arrow:after{content:"";position:absolute;width:42px;height:37px;top:7px;background:currentColor;clip-path:polygon(50%0,100% 100%,50% 74%,0 100%)}.brio-product .bu-distance{font:800 29px/1"D1 Barlow",sans-serif;color:#fff9e8;letter-spacing:.02em}.brio-product .bu-distance small{font-size:17px;margin-left:3px}.brio-product .bu-targetname{font-size:12px;font-weight:600;color:#f0edda;background:#172018cc;padding:3px 9px;border-radius:3px}.brio-product .bu-slotbar{display:flex;gap:6px;margin-bottom:12px}.brio-product .bu-slotbar button{background:#19221b;border:1px solid var(--bu-line);border-radius:4px;padding:7px 10px;font-size:11px}.brio-product .bu-slotbar button.active{color:var(--bu-mint);border-color:var(--bu-mint)}.brio-product .bu-empty{padding:35px 10px;text-align:center;color:var(--bu-muted);grid-column:1/-1}.brio-product .bu-feature-settings select{background:#172018;color:var(--bu-paper);border:1px solid var(--bu-line);padding:5px;border-radius:4px}.brio-product .bu-feature-settings{padding-bottom:12px}@media (max-width:760px){.brio-product .bu-main{grid-template-columns:140px 1fr}.brio-product .bu-workspace{padding:18px}.brio-product .bu-sidebar{padding:17px 7px}.brio-product .bu-sidebar button{padding:10px 8px;font-size:12px}.brio-product h1{font-size:36px}.brio-product .bu-header-nav{gap:14px}.brio-product .bu-preset{display:block}.brio-product .bu-preset button{margin-top:12px}.brio-product .bu-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.brio-product .bu-art{height:90px}.brio-product .bu-social{padding:14px;flex-wrap:wrap;gap:10px}.brio-product .bu-social-links{width:100%}.brio-product .bu-titleline{align-items:start}}@media (max-width:500px){.brio-product .bu-main{display:block}.brio-product .bu-sidebar{flex-direction:row;flex-wrap:wrap;border-right:0;border-bottom:1px solid var(--bu-line);padding:10px;gap:2px}.brio-product .bu-sidebar .bu-eyebrow{display:none}.brio-product .bu-sidebar button{font-size:11px;padding:7px}.brio-product .bu-sidebar [data-lucide]{display:none}.brio-product .bu-sidebar button.active{box-shadow:none}.brio-product .bu-topbar{padding:0 14px;height:60px}.brio-product .bu-header-nav{gap:12px;font-size:11px}.brio-product .bu-wordmark{font-size:16px}.brio-product .bu-wordmark span{font-size:9px}.brio-product .bu-monogram{font-size:20px}.brio-product .bu-workspace{padding:15px}.brio-product .bu-settings{height:auto;max-height:460px}.brio-product .bu-option{gap:10px}.brio-product .bu-toolbar{flex-wrap:wrap}.brio-product .bu-search{flex-basis:100%}.brio-product .bu-equipped{padding:13px;flex-wrap:wrap}.brio-product .bu-social .bu-btn{padding:9px 13px}}@media (prefers-reduced-motion:reduce){.brio-product *{transition:none!important}}.brio-product .bu-modebar{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:15px}.brio-product .bu-modebar>span{margin-right:5px}.brio-product .bu-mode{display:flex;align-items:center;gap:7px;padding:6px 9px;border-radius:4px;border:1px solid var(--bu-line);background:transparent;color:var(--bu-muted);font-size:11px}.brio-product .bu-mode.active{border-color:var(--bu-mint);color:var(--bu-mint);background:#b8e1c00d}.brio-product .bu-mode [data-lucide]{width:13px;height:13px}.brio-product .bu-social{position:static;transform:none;left:auto;bottom:auto;width:min(820px,100%);display:flex;align-items:center;gap:16px;padding:18px 22px;background:linear-gradient(115deg,#303c2b,#1b241d 70%);border:1px solid #637454;border-left:5px solid var(--bu-orange);border-radius:7px;min-height:110px}.brio-product .bu-admark{font:800 40px"D1 Barlow";color:var(--bu-orange);transform:skew(-6deg)}.brio-product .bu-social h3{font-size:28px}.brio-product .bu-social p{max-width:290px;line-height:1.5}.brio-product .bu-social-links{display:flex;flex-direction:column;gap:7px;margin-left:auto;align-items:center}.brio-product .bu-player-preview{display:flex;justify-content:space-between;align-items:center;min-height:140px;margin:-5px -5px 24px;padding:8px 18px;background:radial-gradient(ellipse at 70% 50%,#b8e1c00e,transparent 65%),#182019;border:1px solid var(--bu-line);border-radius:7px}.brio-product .bu-player-preview>div:first-child{display:flex;align-items:flex-start;flex-direction:column;gap:7px}.brio-product .bu-player-preview strong{font:800 25px"D1 Barlow";text-transform:uppercase}.brio-product .bu-player-preview canvas{width:min(420px,75%);height:140px;object-fit:contain}.brio-product .bu-player-preview .bu-btn{font-size:10px;min-height:28px;padding:4px 9px}.brio-product .bu-emote-preview{display:grid;grid-template-columns:repeat(4,1fr);width:75%;gap:10px}.brio-product .bu-emote-preview>div{display:grid;justify-items:center;gap:7px}.brio-product .bu-emote-preview img{width:100%;max-width:68px;aspect-ratio:1;object-fit:contain}.brio-product .bu-grid{max-height:320px}.brio-product .bu-option{padding:16px;border:1px solid var(--bu-line);border-radius:7px;margin-bottom:9px;align-items:flex-start;background:#19211b}.brio-product .bu-option>div{min-width:0;flex:1}.brio-product .bu-option:last-child{border:1px solid var(--bu-line)}.brio-product .bu-option:has(input[data-feature]:checked){border-color:#647b5d;background:#202b22}.brio-product .bu-toggle{flex:none;position:relative;display:block;width:53px;height:31px;align-self:start}.brio-product .bu-toggle input{appearance:none;width:53px;height:31px;border-radius:5px;border:1px solid #64715f;background:#141c17;margin:0}.brio-product .bu-toggle input:checked{background:var(--bu-mint);border-color:var(--bu-mint)}.brio-product .bu-toggle span{position:absolute;inset:0;display:grid;place-items:center;font-size:10px;font-weight:600;pointer-events:none;color:var(--bu-muted);letter-spacing:.08em}.brio-product .bu-toggle:has(input:checked) span{color:#1a281b}.brio-product .bu-toggle:has(input:disabled){opacity:.45}.brio-product .bu-settings{height:auto;max-height:570px;padding-right:5px}.brio-product .bu-hell{align-items:flex-start;padding:22px;background:linear-gradient(120deg,#39251f,#251e1a);gap:20px}.brio-product .bu-hell h2{font-size:42px;color:var(--bu-orange)}.brio-product .bu-hell ul{padding-left:17px;margin:13px 0 0;font-size:12px;color:#d9c4b5;display:grid;gap:7px;line-height:1.5}.brio-product .bu-palette{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin:12px 0 3px;max-width:480px}.brio-product .bu-swatch{width:23px;height:23px;min-width:23px;border-radius:50%;border:3px solid #19211b;background:var(--sw);box-shadow:0 0 0 1px #64715f}.brio-product .bu-swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--bu-paper);border-color:#19211b}.brio-product .bu-hex{display:flex!important;align-items:center;gap:7px;font-size:10px!important;color:var(--bu-muted);font-weight:400!important;margin-left:3px}.brio-product .bu-hex input{width:86px;min-width:0;border:1px solid var(--bu-line);border-radius:4px;padding:5px 7px;color:var(--bu-paper);background:#151d17;font-size:12px}.brio-product .bu-hex input[aria-invalid=true]{border-color:var(--bu-danger)}.brio-product .bu-inline-reticles{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin:13px 0}.brio-product .bu-inline-reticles button{display:flex;flex-direction:column;align-items:center;padding:5px 3px 8px;background:#141b16;border:1px solid var(--bu-line);border-radius:5px;min-width:0;gap:4px}.brio-product .bu-inline-reticles button.selected{border-color:var(--bu-mint);background:#b8e1c00a}.brio-product .bu-inline-reticles canvas{width:100%;max-width:92px;aspect-ratio:1;height:auto}.brio-product .bu-inline-reticles span{font-size:10px;overflow-wrap:anywhere}.brio-product .bu-reticle-size{display:flex!important;align-items:center;gap:12px;margin-top:17px;font-size:12px!important}.brio-product .bu-reticle-size input{width:min(230px,65%);accent-color:var(--bu-mint)}.brio-product .bu-tier{flex-wrap:wrap}.brio-product .bu-report{border:1px solid #65735c;border-radius:8px;overflow:hidden;background:#202822;box-shadow:0 18px 45px #0005}.brio-product .bu-report-head{padding:22px 25px;display:flex;align-items:center;justify-content:space-between;gap:18px;background:#29342a}.brio-product .bu-report-head h2{font-size:32px;margin-top:8px}.brio-product .bu-report-head .bu-eyebrow{color:var(--bu-mint);font-size:10px}.brio-product .bu-report-place{font:800 42px"D1 Barlow";color:var(--bu-orange);display:flex;align-items:center;gap:10px}.brio-product .bu-report-place small{font:600 9px"D1 DM";letter-spacing:.1em}.brio-product .bu-report-totals{display:grid;grid-template-columns:repeat(4,1fr);padding:20px 25px;background:#171f19;border-top:1px solid var(--bu-line);border-bottom:1px solid var(--bu-line)}.brio-product .bu-report-totals>div{display:flex;flex-direction:column;border-right:1px solid var(--bu-line);padding-left:18px;gap:4px}.brio-product .bu-report-totals>div:first-child{padding-left:0}.brio-product .bu-report-totals>div:last-child{border:0}.brio-product .bu-report-totals strong{font:800 35px"D1 Barlow"}.brio-product .bu-report-totals span{font-size:11px;color:var(--bu-muted)}.brio-product .bu-report-body{display:grid;grid-template-columns:1.1fr 1fr;gap:32px;padding:25px}.brio-product .bu-report h3{font:600 11px"D1 DM";letter-spacing:.1em;text-transform:uppercase;color:var(--bu-muted);margin-bottom:16px}.brio-product .bu-stacked{height:12px;border-radius:3px;overflow:hidden;display:flex;margin-bottom:16px}.brio-product .bu-report-line{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:12px;padding:7px 0;color:var(--bu-muted)}.brio-product .bu-report-line>span{display:flex;align-items:center;gap:7px}.brio-product .bu-report-line i{width:7px;height:7px;border-radius:2px}.brio-product .bu-report-line strong{font-size:12px;color:var(--bu-paper);white-space:nowrap}.brio-product .bu-report-line small{font-size:10px;color:var(--bu-muted);margin-left:8px}.brio-product .bu-sampling{font-size:10px;color:#8b9b88}.brio-product .bu-later{margin-top:26px!important;display:flex;justify-content:space-between}.brio-product .bu-victims{max-height:108px;overflow:auto;scrollbar-width:thin;border-top:1px solid var(--bu-line)}.brio-product .bu-victims>div{display:flex;gap:13px;padding:8px 0;border-bottom:1px solid #414c4244;font-size:11px;letter-spacing:.05em}.brio-product .bu-victims span{color:#87988d}.brio-product .bu-loss{display:flex;gap:20px;align-items:center;margin:0 0 15px}.brio-product .bu-loss>div:last-child{flex:1}.brio-product .bu-loss-ring{width:100px;height:100px;border-radius:50%;background:conic-gradient(var(--bu-orange)0 40.678%,var(--bu-mint) 40.678% 100%);display:grid;place-items:center;flex:none}.brio-product .bu-loss-ring strong{border-radius:50%;width:76px;height:76px;background:#202822;display:flex;flex-direction:column;align-items:center;justify-content:center;font:800 30px"D1 Barlow"}.brio-product .bu-loss-ring small{font:400 8px"D1 DM";letter-spacing:.14em;color:var(--bu-muted)}.brio-product .bu-derived{border-top:1px solid var(--bu-line);margin-top:15px;padding-top:14px;font-size:11px;color:var(--bu-mint)}.brio-product .bu-derived summary{cursor:pointer}@media (max-width:850px){.brio-product .bu-social{flex-wrap:wrap}.brio-product .bu-social-links{flex-direction:row;flex-wrap:wrap;margin-left:0}}@media (max-width:650px){.brio-product .bu-inline-reticles{grid-template-columns:repeat(3,minmax(0,1fr))}.brio-product .bu-report-body{gap:22px;padding:20px}.brio-product .bu-loss{gap:10px;flex-wrap:wrap}.brio-product .bu-report-place{font-size:34px}.brio-product .bu-report-place small{display:none}.brio-product .bu-option{padding:12px;gap:9px}.brio-product .bu-hex{flex-wrap:wrap}}@media (max-width:500px){.brio-product .bu-report-body{grid-template-columns:1fr}.brio-product .bu-report-totals{grid-template-columns:repeat(2,1fr);gap:18px;padding:20px}.brio-product .bu-report-totals>div:nth-child(3){padding-left:0}.brio-product .bu-report-totals>div:nth-child(2){border:0}.brio-product .bu-report-head{padding:20px}.brio-product .bu-player-preview{padding:10px;gap:4px}.brio-product .bu-player-preview canvas{width:69%}.brio-product .bu-player-preview strong{font-size:20px}.brio-product .bu-social{padding:16px;gap:12px}.brio-product .bu-admark{display:none}.brio-product .bu-social h3{font-size:26px}.brio-product .bu-preset{flex-wrap:wrap}.brio-product .bu-inline-reticles span{font-size:9px}}.brio-product .bu-social{width:min(728px,100%);min-height:90px;padding:12px 16px}.brio-product .bu-social h3{font-size:26px}@media (max-width:500px){.brio-product .bu-player-preview canvas{object-fit:cover}}.brio-product .bu-social-links{flex-direction:row;gap:9px;flex-wrap:wrap;justify-content:flex-end}.brio-product .bu-social{gap:12px}.brio-product .bu-social p{max-width:245px}.brio-product .bu-discord-badge{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 14px;min-height:38px;background:#5865f2;border:1px solid #7984ff;border-radius:5px;color:#fff;font-size:12px;font-weight:600;user-select:text;white-space:nowrap}.brio-product .bu-discord-badge img{width:19px;height:19px;filter:invert(1)}.brio-product .bu-preset{align-items:flex-start;gap:18px}.brio-product .bu-preset>div{flex:1;min-width:0}.brio-product .bu-preset>.bu-btn{flex:none}.brio-product .bu-hell ul{display:block;margin-top:15px}.brio-product .bu-hell li{margin:5px 0}.brio-product .bu-report-totals>div{align-items:center;text-align:center;padding-left:0}.brio-product .bu-inline-reticles{max-height:390px;overflow-y:auto;padding:3px;scrollbar-width:thin;scrollbar-color:#64715f transparent}@media (max-width:750px){.brio-product .bu-preset{flex-wrap:wrap}.brio-product .bu-preset>div{flex-basis:100%}.brio-product .bu-social-links{justify-content:flex-start}}@media (max-width:500px){.brio-product .bu-inline-reticles{max-height:355px}.brio-product .bu-report-totals>div:nth-child(3){padding-left:0}}.brio-product .bu-social:before{display:none}.brio-product .bu-preset-description,.brio-product .bu-hell-description{font-size:12px!important;line-height:1.7!important;color:var(--bu-muted);margin-top:14px!important;max-width:none!important;white-space:normal}.brio-product .bu-preset{align-items:flex-start}.brio-product .bu-hell-description{color:#dcc6b9}.brio-product .bu-session-panel{width:300px;max-width:100%;height:250px;background:#202822;border:1px solid #65735c;border-radius:7px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 15px 40px #0004}.brio-product .bu-session-panel header{background:#29342a;display:flex;justify-content:space-between;align-items:center;padding:12px 14px;gap:12px;border-bottom:1px solid var(--bu-line);flex:none}.brio-product .bu-session-panel h3{font-size:25px;margin-top:4px}.brio-product .bu-session-panel header .bu-eyebrow{font-size:8px;letter-spacing:.12em;color:var(--bu-mint)}.brio-product .bu-session-count{display:flex;align-items:center;gap:6px;font:800 28px"D1 Barlow";color:var(--bu-orange)}.brio-product .bu-session-count small{font:400 8px"D1 DM";letter-spacing:.08em;color:var(--bu-muted)}.brio-product .bu-session-scroll{overflow-y:auto;min-height:0;flex:1;padding:14px;scrollbar-width:thin;scrollbar-color:#91a58a #202822;overscroll-behavior:contain}.brio-product .bu-session-kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px 8px}.brio-product .bu-session-kpis>div{display:flex;align-items:center;flex-direction:column;text-align:center;gap:4px;min-width:0}.brio-product .bu-session-kpis strong{font:800 27px/1"D1 Barlow";color:var(--bu-paper)}.brio-product .bu-session-kpis span{font-size:9px;line-height:1.3;color:var(--bu-muted);white-space:nowrap}.brio-product .bu-session-panel h4{font-size:10px;letter-spacing:.1em;font-weight:600;text-transform:uppercase;color:var(--bu-mint);margin:19px 0 8px;display:flex;justify-content:space-between;gap:6px}.brio-product .bu-session-panel h4 small{font-size:9px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--bu-muted)}.brio-product .bu-session-line{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;border-bottom:1px solid #414c4233;font-size:11px;color:var(--bu-muted)}.brio-product .bu-session-line strong{font-size:11px;color:var(--bu-paper)}.brio-product .bu-session-line small{display:block;font-size:9px;color:#93a28f;margin-top:2px}.brio-product .bu-session-stack{display:flex;height:7px;overflow:hidden;border-radius:2px;margin:12px 0}.brio-product .bu-session-coverage{font-size:10px;line-height:1.5;color:#b4c0af;margin-top:12px}.brio-product .bu-session-panel footer{padding:6px 14px;border-top:1px solid var(--bu-line);font-size:9px;color:var(--bu-muted);background:#182019;flex:none}.brio-product .bu-session-empty{min-height:112px;display:flex;flex-direction:column;justify-content:center;text-align:center;gap:8px}.brio-product .bu-session-empty strong{font-size:13px}.brio-product .bu-session-empty p{font-size:11px;color:var(--bu-muted)}.brio-product .bu-session-kpis span{font-size:11px}.brio-product .bu-session-panel footer{font-size:10px}.brio-product .bu-preset,.brio-product .bu-hell{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:14px 18px}.brio-product .bu-preset>div,.brio-product .bu-hell>div{display:contents}.brio-product .bu-preset strong,.brio-product .bu-hell h2{grid-column:1;grid-row:1;justify-self:center;text-align:center;font-size:30px;line-height:1.1;align-self:center}.brio-product .bu-preset>.bu-btn,.brio-product .bu-hell>.bu-toggle{grid-column:2;grid-row:1;align-self:center}.brio-product .bu-preset-description,.brio-product .bu-hell-description{grid-column:1/-1;grid-row:2;margin:0!important;width:100%}.brioModal.brio-product{position:fixed;inset:50% auto auto 50%;transform:translate(-50%,-50%);width:min(980px,96vw);height:min(760px,94vh);display:none;z-index:2147483645;flex-direction:column;background:#171b19;border:1px solid #62715f;border-radius:9px;box-shadow:0 24px 90px #000c;overflow:hidden}\n.brio-product .bu-surface{width:100%;height:100%;min-height:0;display:flex;flex-direction:column}.brio-product .bu-main{min-height:0;flex:1}.brio-product .bu-workspace{overflow-y:auto;min-width:0}.brio-product .bu-settings,.brio-product .bu-grid{height:auto;max-height:none;overflow:visible}.brio-product .bu-option>div{min-width:0;flex:1}.brio-product .bu-option p{max-width:none}.brio-product .bu-option fieldset{border:0;padding:0;margin:8px 0;min-width:0}.brio-product .bu-option fieldset:disabled{opacity:.45}.brio-product .bu-option .bu-feature-settings{width:100%}.brio-product .bu-preset,.brio-product .bu-hell{grid-template-columns:minmax(0,1fr) auto;display:grid;align-items:center;gap:12px}.brio-product .bu-preset>div,.brio-product .bu-hell>div{display:contents}.brio-product .bu-preset strong,.brio-product .bu-hell h2{grid-column:1;grid-row:1;text-align:center;font-size:30px;line-height:1.1}.brio-product .bu-preset>.bu-btn,.brio-product .bu-hell>.bu-toggle{grid-column:2;grid-row:1}.brio-product .bu-preset p,.brio-product .bu-hell p{grid-column:1/-1;grid-row:2;width:100%;max-width:none;margin:0;line-height:1.55}.brio-product .bu-inline-reticles{grid-template-columns:repeat(auto-fill,minmax(80px,1fr))}.brio-product .bu-loot-choice{display:flex;gap:6px;align-items:center}.brio-product .bu-loot-choice img{width:30px;height:30px;object-fit:contain}.brio-product .bu-loot-choice span{font-size:12px;min-width:80px}.brio-product [data-brio-message]{font-size:11px;max-width:45%;overflow-wrap:anywhere;color:#f5b79e}.brio-product .bu-grid .bu-art img{width:100%;height:100%;object-fit:contain}.brio-product .bu-item{min-width:0}.brio-product .bu-itemname{overflow-wrap:anywhere}.brio-product .bu-report-note{font-size:11px;padding:12px 20px;color:var(--bu-muted)}.brio-product .bu-social{width:100%;height:90px;min-height:90px;padding:12px 16px}.brio-product .bu-social a{text-decoration:none}.brio-product .bu-session-scroll{overscroll-behavior:contain}.brio-product.bu-indicator{display:grid;justify-items:center;gap:0;overflow:visible;isolation:auto;width:100px}.brio-product.bu-indicator .bu-distance{font-size:23px;display:flex;align-items:center;flex-direction:column;white-space:nowrap;line-height:1.1}.brio-product.bu-indicator .bu-targetname{font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis}.brioSettings{position:fixed;right:12px;bottom:12px;z-index:2147483644;background:#202622;color:#f0edda;border:1px solid #aeb9ac;border-radius:6px;padding:8px 14px;font:600 13px \'D1 DM\',sans-serif;cursor:pointer;display:none}.brio-product .bu-player-preview canvas{max-width:100%;object-fit:contain}.brio-product .bu-titleline{margin-top:12px}.brio-product .bu-thresholds{flex-wrap:wrap}.brio-product .bu-settings details summary{cursor:pointer}.brio-product .bu-report-totals>div{text-align:center}.brio-product .bu-session-panel{height:250px;width:300px;max-width:100%}.brio-product [hidden]{display:none!important}\n@media(max-width:650px){.brioModal.brio-product{width:98vw;height:96vh}.brio-product .bu-topbar{padding:12px;gap:8px}.brio-product .bu-wordmark{font-size:19px}.brio-product .bu-header-nav{font-size:10px}.brio-product .bu-social{gap:8px;padding:10px;flex-wrap:wrap;height:auto}.brio-product .bu-admark{display:none}.brio-product .bu-main{overflow:hidden}.brio-product .bu-sidebar{overflow:auto}.brio-product .bu-preset strong{font-size:24px}.brio-product .bu-report-body{grid-template-columns:1fr}.brio-product .bu-equipped{flex-wrap:wrap;gap:4px}}\n\n.brio-product,.brio-product *{text-shadow:none;-webkit-text-stroke:0}.brio-product .bu-art{display:flex;align-items:center;justify-content:center}\n\n.brio-product .bu-original-thumb{position:relative;display:block;width:104px;height:104px;overflow:hidden}.brio-product .bu-original-thumb img{position:absolute;width:200%!important;height:200%!important;max-width:none;object-fit:fill!important;margin:0}\n\n/* Atlas images must remain square at twice the viewport size; ordinary card image caps must never compress them. */\n.brio-product .bu-original-thumb{flex:0 0 104px;min-width:104px;min-height:104px}.brio-product .bu-original-thumb img{min-width:208px;min-height:208px;max-width:none!important;max-height:none!important;aspect-ratio:1;object-fit:fill!important}\n.brio-product .bu-session-panel{height:var(--bu-session-height,250px);width:100%}.brio-product .bu-session-outcome{display:flex;align-items:center;gap:14px;margin:16px 0}.brio-product .bu-session-outcome small{display:block;font-size:10px;color:var(--bu-muted);margin-top:5px}.brio-product .bu-session-ring{width:68px;height:68px;flex:0 0 68px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(var(--bu-mint) var(--win),#414c42 0)}.brio-product .bu-session-ring strong{width:52px;height:52px;border-radius:50%;background:#202822;display:grid;place-items:center;font:800 22px \'D1 Barlow\'}.brio-product .bu-social h3{display:flex;align-items:center;gap:10px;white-space:nowrap}.brio-product .bu-version{font:600 11px \'D1 DM\';text-transform:none;letter-spacing:.02em;color:var(--bu-orange);border:1px solid #ff8d4c77;background:#ff8d4c10;border-radius:4px;padding:4px 6px}.brio-product .bu-report-effects{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:18px 24px;border-top:1px solid var(--bu-line)}.brio-product .bu-report-effects h3{font-size:21px}.brio-product .bu-effect-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.brio-product .bu-effect-list span{border:1px solid var(--bu-line);padding:5px 8px;border-radius:4px;font-size:11px}.brio-product .bu-effect-list .preset{color:var(--bu-orange);border-color:#ff8d4c77}.brio-product .bu-effect-caption{font-size:10px;color:var(--bu-muted);margin-top:5px}@media(max-width:500px){.brio-product .bu-report-effects{grid-template-columns:1fr}.brio-product .bu-social h3{font-size:21px;gap:6px}}\n/* Restore the established ad suppression while preserving the two BRIO-owned replacement hosts. */\n#ad,#preroll,#buildroyale-io_300x250_2,#buildroyale-io_300x600,#buildroyale-io_728x90,#disableAdsButton,[id^="google_ads_iframe"],iframe[src*="doubleclick" i],iframe[src*="googlesyndication" i],iframe[src*="adnxs" i],iframe[src*="amazon-adsystem" i],[id^="buildroyale-io_"]:not(#buildroyale-io_970x250):not(#buildroyale-io_300x250){display:none!important;visibility:hidden!important;width:0!important;height:0!important;pointer-events:none!important}\n\n.brio-product .bu-art{height:112px}\n';
        productionRelease.testingControls && D.documentElement.appendChild(productionSettings);
        locker.addEventListener("click", productionMenuClick);
        extras.addEventListener("click", productionMenuClick);
        D.addEventListener("keydown", productionKeys, true);
        productionHome();
        W.addEventListener("resize", productionLayoutSession, {
            passive: true
        });
        if (W.ResizeObserver) {
            productionSessionResize = new W.ResizeObserver(productionLayoutSession);
            for (const id of [ "buildroyale-io_300x250", "partystuff", "joinparty", "createparty" ]) {
                const el = D.getElementById(id);
                el && productionSessionResize.observe(el);
            }
        }
        const party = D.getElementById("partystuff");
        if (party) {
            productionPartyObserver = new MutationObserver(productionLayoutSession);
            productionPartyObserver.observe(party, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }
        productionHomeTimer = setInterval(productionHome, 1e3);
        S.session = () => productionSession.snapshot();
    }
    function productionDestroy() {
        for (const id of ownedTimeouts) W.clearTimeout(id);
        ownedTimeouts.clear();
        for (const id of ownedIntervals) W.clearInterval(id);
        ownedIntervals.clear();
        for (const id of ownedFrames) W.cancelAnimationFrame(id);
        ownedFrames.clear();
        W.removeEventListener("resize", productionLayoutSession);
        productionSessionResize?.disconnect();
        productionPartyObserver?.disconnect();
        for (const reader of productionReaders) reader.abort();
        productionReaders.clear();
        productionSourceController?.abort();
        clearInterval(productionHomeTimer);
        cancelAnimationFrame(productionFrame);
        productionSession.destroy();
        productionMatchEffects = null;
        productionClearPreview();
        productionReleaseResources();
        for (const im of productionImages) {
            im.onload = im.onerror = null;
            im.src = "";
        }
        productionImages.clear();
        for (const url of productionObjectURLs) URL.revokeObjectURL(url);
        productionObjectURLs.clear();
        for (const restore of [ ...productionMapRestores.values() ].reverse()) restore();
        productionMapRestores.clear();
        for (const restore of productionHomeRestores.reverse()) restore();
        for (const [node, [v, p]] of productionAdStyles) node.style.setProperty("display", v, p);
        productionAdStyles.clear();
        productionHomeRestores.length = 0;
        for (const n of productionHomeNodes) n.remove();
        productionHomeNodes.length = 0;
        productionSettings.remove();
        locker.removeEventListener("click", productionMenuClick);
        extras.removeEventListener("click", productionMenuClick);
        D.removeEventListener("keydown", productionKeys, true);
        S.resources.clear();
        S.remoteRefs.clear();
        S.trackNodes.clear();
        S.invNodes.clear();
        S.invAssets.clear();
        S.custom = {};
        S.resolvedVisuals = null;
        S.playVisuals = null;
        S.emoteResolved = [];
        S.localTrack = null;
        S.bak = {};
        S.roofSaved.clear();
        S.buildSaved.clear();
        S.lootSaved.clear();
        S.native = null;
        S.renderer = null;
    }
    const INDICATOR_COLORS = {
        nearestPlayer: "#a81020",
        nearestChest: "#ffd21c",
        nearestAirdrop: "#f28b16",
        safeZoneIndicator: "#168cff",
        stormCenter: "#b578ff",
        lootIndicator: "#ffd21c"
    };
    const v55 = {
        deferred: new Set,
        perf: null,
        playerChecks: new WeakMap,
        outlineQueue: new Set,
        outlinePreparing: false,
        timer: 0,
        zone: null,
        zoneAt: 0,
        paths: new Map,
        lootUis: new Map,
        stats: null,
        post: null,
        postStyles: new Map,
        outlines: new Map,
        outlineFailures: new Set
    };
    const v55PrepareOutline = () => {
        if (!v55.outlineQueue.size) return;
        const image = v55.outlineQueue.values().next().value;
        v55.outlineQueue.delete(image);
        v55.outlinePreparing = true;
        try {
            v55OutlineMask(image);
        } finally {
            v55.outlinePreparing = false;
        }
    };
    const EMPTY_DAMAGE_POOL = Object.freeze([]);
    const v55PlayerPreflight = r => {
        const pool = r["Áa"] || EMPTY_DAMAGE_POOL, previous = v55.playerChecks.get(r), last = pool[pool.length - 1];
        if (previous && previous.a === r["aá"] && previous.b === r["ä"] && previous.c === r["ÁÆ"] && previous.direction === r["ÁÄå"] && previous.pool === pool && previous.length === pool.length && previous.last === last) return;
        for (const node of [ r["aá"], r["ä"], r["áË"], r["ÄÂ"], r["ÁÆ"] ]) gateNativeDraw(node, "heldWeapons", e => !!e.hideWeapons);
        gateNativeDraw(r["ÁÄå"], "damageDirection", e => !!e.noDamageDirection);
        for (let i = Math.max(0, pool.length - 64); i < pool.length; i++) gateNativeDraw(pool[i], "damageNumbers", e => !!e.noDamageNumbers);
        v55.playerChecks.set(r, {
            a: r["aá"],
            b: r["ä"],
            c: r["ÁÆ"],
            direction: r["ÁÄå"],
            pool: pool,
            length: pool.length,
            last: last
        });
    };
    const v55DeferredNative = root => {
        if (!root || root["À"] || root.canvas || "text" in root || root.__brioHudClone || String(root.type || "").startsWith("brio") || !Array.isArray(root["âè"]) || root["âè"].length + (root["ÉE"]?.length || 0) !== 0 || v55.deferred.has(root) || v55.deferred.size >= 32) return;
        const epoch = S.runEpoch, pending = v55.deferred, first = v55.deferred.size === 0;
        v55.deferred.add(root);
        if (!first) return;
        queueMicrotask(() => {
            if (S.destroyed || S.runEpoch !== epoch || v55.deferred !== pending) return;
            const roots = [ ...pending ];
            pending.clear();
            for (const node of roots) try {
                for (const child of hudWalk(node, 80)) hudCandidate(child);
            } catch (e) {
                S.errors.length < 100 && productionError("Runtime", "deferred native subtree: " + String(e));
            }
        });
    };
    const v55InventoryRoot = root => {
        if (nativeDrawGates.get(root)?.gates.has("inventoryHud")) return;
        const front = root["âè"] || [], back = root["ÉE"] || [], length = front.length + back.length;
        if (length < 6 || length > 128) return;
        S.inventoryRootChecks || (S.inventoryRootChecks = new WeakMap);
        const now = performance.now(), old = S.inventoryRootChecks.get(root);
        if (old && old.length === length && now - old.at < 1e3) return;
        S.inventoryRootChecks.set(root, {
            length: length,
            at: now
        });
        let slots = 0, q = false, tab = false;
        for (const list of [ front, back ]) for (const n of list) {
            if (!n || n.__brioHudClone || String(n.type || "").startsWith("brio")) continue;
            n.text === "Press Q to Build" && (q = true);
            n.text === "Press Tab to Manage Inventory" && (tab = true);
            const a = n["âè"] || [], b = n["ÉE"] || [];
            if (a.length + b.length > 20) continue;
            [ ...a, ...b ].some(c => c?.width === 100 && c?.height === 100 && (c.type === "rectangle" || /\/inv[0-6]\.png$/i.test(hudPath(c)))) && slots++;
        }
        if (slots < 5) return;
        const materials = new Set, stack = [ [ root, 0 ] ], seen = new Set;
        let visits = 0, selected = false;
        while (stack.length && visits++ < 180) {
            const [n, depth] = stack.pop();
            if (!n || seen.has(n) || n.__brioHudClone || String(n.type || "").startsWith("brio")) continue;
            seen.add(n);
            const m = hudPath(n).match(/\/(wood|brick|metal|scrap)\.png$/i);
            m && materials.add(m[1].toLowerCase());
            n.width === 105 && n.height === 105 && n.lineWidth === 5 && (selected = true);
            if (depth < 3) for (const key of [ "âè", "ÉE" ]) for (const child of (n[key] || []).slice(0, 64)) stack.push([ child, depth + 1 ]);
        }
        (materials.size >= 3 || q && tab && selected) && gateNativeDraw(root, "inventoryHud", e => !!e.noInventoryHud);
    };
    const v66View = {
        pointer: null,
        root: null
    };
    const v66Pointer = e => {
        if ([ "blur", "pagehide", "visibilitychange" ].includes(e.type)) {
            v66View.pointer = null;
            v66View.root = null;
            v63FlashlightHide();
            return;
        }
        if (!S.renderer || v55.stats?.finished || e.target?.tagName !== "CANVAS" || !Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) return;
        v66View.pointer = {
            x: e.clientX,
            y: e.clientY,
            canvas: e.target
        };
    };
    const v66RootProjection = (r, ctx, s) => {
        v66View.root = null;
        if (!ctx?.getTransform || !Number.isFinite(s) || s <= 0) return;
        const m = ctx.getTransform(), p = r["â"]?.["ë"], size = r["â"]?.size;
        if (!p || ![ m.a, m.b, m.c, m.d, m.e, m.f, p["É"], p["Ä"], size, r["â"].A ].every(Number.isFinite) || size <= 0) return;
        v66View.root = {
            r: r,
            canvas: ctx.canvas,
            x: m.e + (m.a * p["É"] + m.c * p["Ä"]) / s,
            y: m.f + (m.b * p["É"] + m.d * p["Ä"]) / s,
            unit: Math.hypot(m.a, m.b) * size / s,
            at: performance.now()
        };
    };
    const v63Visual = {
        light: null,
        hudScene: null,
        fadeAt: null,
        lightAt: -1 / 0,
        rect: null,
        rectAt: -1 / 0,
        canvas: null,
        image: null,
        imageSource: "",
        imageRequested: false,
        imageReady: false,
        upload: 0,
        crosshairDraws: 0,
        lightFrames: 0
    };
    const v63NormalizeVisuals = value => {
        value.reticleStyle = [ "dot", "cross", "ring", "image", ...productionReticles.map((_, i) => "shape" + i) ].includes(value.reticleStyle) ? value.reticleStyle : "cross";
        value.reticleColor = /^#[0-9a-f]{6}$/i.test(value.reticleColor || "") ? value.reticleColor : "#ffffff";
        value.reticleSize = Number.isFinite(value.reticleSize) ? Math.max(6, Math.min(64, value.reticleSize)) : 24;
        value.flashlightFollow = value.flashlightFollow === "cursor" ? "cursor" : "player";
        value.flashlightRadius = Number.isFinite(value.flashlightRadius) ? Math.max(80, Math.min(600, value.flashlightRadius)) : 220;
    };
    const v63ReticleImage = force => {
        if (v63Visual.imageRequested && !force) return;
        v63Visual.imageRequested = true;
        v63Visual.imageReady = false;
        v63Visual.image = null;
        const source = read("brio_crosshair_image_v63", "");
        v63Visual.imageSource = source;
        if (typeof source !== "string" || source.length > 35e4 || !/^data:image\/(png|webp);base64,[A-Za-z0-9+/=]+$/.test(source)) return;
        const image = new Image;
        v63Visual.image = image;
        image.onload = () => {
            v63Visual.image === image && image.naturalWidth > 0 && image.naturalHeight > 0 && image.naturalWidth <= 512 && image.naturalHeight <= 512 && (v63Visual.imageReady = true);
        };
        image.onerror = () => {
            v63Visual.image === image && (v63Visual.imageReady = false);
        };
        image.src = source;
    };
    const v63ReticleEnabled = e => {
        if (!e.customCrosshair || e.noCrosshair || e.goodFlippinLuck || !S.renderer || v55.stats?.finished) return false;
        if (e.reticleStyle === "image") {
            v63ReticleImage(false);
            return v63Visual.imageReady;
        }
        return true;
    };
    const v63ReticleDraw = (root, ctx, s) => {
        v63Visual.reticleRoot = null;
        const e = exFast();
        if (!v63ReticleEnabled(e) || !ctx?.getTransform || !ctx.setTransform || !Number.isFinite(s) || s <= 0) return;
        const m = ctx.getTransform(), p = root["ë"];
        if (![ m.a, m.b, m.c, m.d, m.e, m.f, p?.["É"], p?.["Ä"] ].every(Number.isFinite) || Math.abs(m.a * m.d - m.b * m.c) < 1e-12) return;
        const x = m.e + (m.a * p["É"] + m.c * p["Ä"]) / s, y = m.f + (m.b * p["É"] + m.d * p["Ä"]) / s, r = e.reticleSize / 2;
        ctx.save();
        try {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(x, y);
            ctx.globalAlpha = 1;
            ctx.strokeStyle = e.reticleColor;
            ctx.fillStyle = e.reticleColor;
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.beginPath();
            if (e.reticleStyle === "image") {
                const image = v63Visual.image, k = e.reticleSize / Math.max(image.naturalWidth, image.naturalHeight);
                ctx.drawImage(image, -image.naturalWidth * k / 2, -image.naturalHeight * k / 2, image.naturalWidth * k, image.naturalHeight * k);
            } else if (/^shape\d+$/.test(e.reticleStyle)) productionPaintReticle(ctx, Number(e.reticleStyle.slice(5)), e.reticleColor, e.reticleSize); else if (e.reticleStyle === "dot") {
                ctx.arc(0, 0, Math.max(1, e.reticleSize / 8), 0, Math.PI * 2);
                ctx.fill();
            } else if (e.reticleStyle === "ring") {
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                const gap = Math.max(2, r * .3);
                for (const sign of [ -1, 1 ]) {
                    ctx.moveTo(sign * gap, 0);
                    ctx.lineTo(sign * r, 0);
                    ctx.moveTo(0, sign * gap);
                    ctx.lineTo(0, sign * r);
                }
                ctx.stroke();
            }
        } finally {
            ctx.restore();
        }
        v63Visual.reticleRoot = root;
        v63Visual.crosshairDraws++;
    };
    const v63FlashlightHide = (smooth = false) => {
        if (smooth && v63Visual.light) {
            v63Visual.fadeAt === null && (v63Visual.fadeAt = performance.now());
            return;
        }
        v63Visual.light = null;
        v63Visual.fadeAt = null;
    };
    const v64FlashlightBoundary = scene => {
        if (!scene || v63Visual.hudScene === scene) return;
        const a = scene["âè"] || [], b = scene["ÉE"] || [];
        if (a.length + b.length > 32) return;
        let inventory = false, health = false;
        for (const child of [ ...a, ...b ]) {
            const gates = nativeDrawGates.get(child)?.gates;
            inventory ||= !!gates?.has("inventoryHud");
            const c = child["âè"] || [], d = child["ÉE"] || [];
            c.length + d.length <= 48 && (health ||= [ ...c, ...d ].filter(n => nativeDrawGates.get(n)?.gates.has("healthShieldHud")).length >= 2);
        }
        if (!inventory || !health) return;
        gateNativeDraw(scene, "v64FlashlightBoundary", () => false, v63FlashlightFrame);
        nativeDrawGates.get(scene)?.gates.has("v64FlashlightBoundary") && (v63Visual.hudScene = scene);
    };
    const v63FlashlightFrame = ctx => {
        const e = exFast(), root = v66View.root, now = performance.now();
        if (!e.flashlightMode || !S.renderer || D.hidden || !ctx?.createRadialGradient || !ctx.setTransform) {
            v63FlashlightHide();
            return;
        }
        let alpha = 1, geometry = v63Visual.light;
        if (v55.stats?.finished) {
            if (v63Visual.fadeAt === null || !geometry) return;
            const t = Math.min(1, Math.max(0, (now - v63Visual.fadeAt) / 300));
            alpha = 1 - t * t * (3 - 2 * t);
            if (t === 1) {
                v63FlashlightHide();
                return;
            }
        } else {
            if (!root || root.canvas !== ctx.canvas || now - root.at > 100) {
                v63FlashlightHide();
                return;
            }
            const canvas = ctx.canvas;
            if (v63Visual.canvas !== canvas || now - v63Visual.rectAt > 250) {
                v63Visual.canvas = canvas;
                v63Visual.rect = canvas.getBoundingClientRect();
                v63Visual.rectAt = now;
            }
            const rect = v63Visual.rect, pointer = v66View.pointer;
            if (!rect || ![ rect.left, rect.top, rect.width, rect.height ].every(Number.isFinite) || rect.width <= 0 || rect.height <= 0 || canvas.width <= 0 || canvas.height <= 0) {
                v63FlashlightHide();
                return;
            }
            const x = e.flashlightFollow === "cursor" ? pointer?.canvas === canvas ? pointer.x - rect.left : NaN : root.x * rect.width / canvas.width;
            const y = e.flashlightFollow === "cursor" ? pointer?.canvas === canvas ? pointer.y - rect.top : NaN : root.y * rect.height / canvas.height;
            if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0 || x > rect.width || y > rect.height) {
                v63FlashlightHide();
                return;
            }
            geometry = {
                x: x,
                y: y,
                r: e.flashlightRadius,
                width: rect.width,
                height: rect.height,
                canvas: canvas
            };
            v63Visual.light = geometry;
        }
        if (geometry.canvas !== ctx.canvas) return;
        ctx.save();
        try {
            ctx.setTransform(ctx.canvas.width / geometry.width, 0, 0, ctx.canvas.height / geometry.height, 0, 0);
            ctx.globalAlpha = alpha;
            const gradient = ctx.createRadialGradient(geometry.x, geometry.y, geometry.r * .8, geometry.x, geometry.y, geometry.r);
            gradient.addColorStop(0, "rgba(0,0,0,0)");
            gradient.addColorStop(1, "rgba(0,0,0,.96)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, geometry.width, geometry.height);
        } finally {
            ctx.restore();
        }
        v63Visual.lightFrames++;
    };
    const v63VisualReset = () => {
        v63Visual.reticleRoot = null;
        v63FlashlightHide();
        v63Visual.hudScene = null;
        v63Visual.lightAt = v63Visual.rectAt = -1 / 0;
        v63Visual.rect = null;
        v63Visual.canvas = null;
        v63Visual.image = null;
        v63Visual.imageSource = "";
        v63Visual.imageRequested = v63Visual.imageReady = false;
        v63Visual.upload++;
        v63Visual.crosshairDraws = v63Visual.lightFrames = 0;
    };
    const weaponChoices = () => [ ...GUN_TYPES ].filter(type => type !== "akƧ" && (!S.weaponCatalog || S.weaponCatalog.has(type))).sort();
    const indicatorColor = (e, id) => e.indicatorColors?.[id] || INDICATOR_COLORS[id];
    const v55HealthColor = (hp, max) => {
        if (!Number.isFinite(hp) || !Number.isFinite(max) || max <= 0 || hp < 0) return null;
        const ratio = hp / max;
        return ratio > .75 ? "#20da50" : ratio > .5 ? "#ffd21c" : ratio > .25 ? "#ff851b" : "#ff3030";
    };
    const v55ObjectBody = o => o["ÄA"] || o["ÄÀè"] || o["â"];
    const v55GroundType = o => {
        const name = o["Ëá"] || o.new?.["Ëá"] || o.gunType;
        if (GUN_TYPES.has(name)) return name;
        const path = hudPath(o["âê"]);
        for (const type of weaponChoices()) if (path && path === itemPath(type)) return type;
        return null;
    };
    const v55AmmoIndex = o => {
        const path = hudPath(o["âê"]), m = path.match(/\/stack([0-4])\.png$/i);
        return m ? +m[1] : void 0;
    };
    const v55OutlineMask = image => {
        if (image?.tagName === "IMG" && !image.naturalWidth) return null;
        if (!image || !(image.naturalWidth || image.width) || !(image.naturalHeight || image.height)) return null;
        if (v55.outlines.has(image)) return v55.outlines.get(image);
        if (v55.outlines.size >= 64) return null;
        if (!v55.outlinePreparing) {
            v55.outlineQueue.size + v55.outlines.size < 64 && v55.outlineQueue.add(image);
            return null;
        }
        let record = null;
        try {
            const sample = D.createElement("canvas");
            sample.width = sample.height = 128;
            const c = sample.getContext("2d", {
                willReadFrequently: true
            });
            c.drawImage(image, 2, 2, 124, 124);
            const pixels = c.getImageData(0, 0, 128, 128), data = pixels.data, mask = c.createImageData(128, 128), out = mask.data;
            let edges = 0;
            for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
                const at = (y * 128 + x) * 4;
                if (data[at + 3] >= 24) continue;
                let found = false;
                for (let dy = -2; dy <= 2 && !found; dy++) for (let dx = -2; dx <= 2; dx++) {
                    const nx = x + dx, ny = y + dy;
                    if (nx >= 0 && nx < 128 && ny >= 0 && ny < 128 && data[(ny * 128 + nx) * 4 + 3] >= 24) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    out[at] = out[at + 1] = out[at + 2] = 255;
                    out[at + 3] = 255;
                    edges++;
                }
            }
            if (edges) {
                c.putImageData(mask, 0, 0);
                record = {
                    mask: sample,
                    colors: new Map
                };
            }
        } catch (e) {
            const reason = String(e).slice(0, 160);
            v55.outlineFailures.size < 8 && !v55.outlineFailures.has(reason) && v55.outlineFailures.add(reason);
        }
        v55.outlines.set(image, record);
        record && !S.outlineMaskLogged && (S.outlineMaskLogged = true);
        return record;
    };
    const v55Outline = (ctx, s, body, color) => {
        try {
            let drawn = 0, visits = 0;
            const walk = (node, scale, depth, root = false) => {
                if (!node || ++visits > 48 || depth > 3 || node.visible === false || node.opacity <= 0 || node.__brioHudClone || String(node.type || "").startsWith("brio")) return;
                ctx.save();
                root || (ctx.globalAlpha *= Number.isFinite(node.opacity) ? node.opacity : 1);
                if (!root) {
                    ctx.translate((Number(node["ë"]?.["É"]) || 0) / scale, (Number(node["ë"]?.["Ä"]) || 0) / scale);
                    ctx.rotate(Number(node.A) || 0);
                    scale /= Number(node.size) || 1;
                }
                const image = node["À"]?.["ÁÄ"], w = Math.abs(Number(node.width)), h = Math.abs(Number(node.height)), rec = image && w > 0 && h > 0 && drawn < 16 ? v55OutlineMask(image) : null;
                if (rec) {
                    let tint = rec.colors.get(color);
                    if (!tint) {
                        tint = D.createElement("canvas");
                        tint.width = tint.height = 128;
                        const c = tint.getContext("2d");
                        c.drawImage(rec.mask, 0, 0);
                        c.globalCompositeOperation = "source-in";
                        c.fillStyle = color;
                        c.fillRect(0, 0, 128, 128);
                        rec.colors.set(color, tint);
                    }
                    ctx.drawImage(tint, 64 * -w / 124 / scale, 64 * -h / 124 / scale, w * 128 / 124 / scale, h * 128 / 124 / scale);
                    drawn++;
                }
                for (const key of [ "âè", "ÉE" ]) {
                    const list = node[key] || [];
                    for (let i = 0; i < Math.min(24, list.length) && visits < 48; i++) walk(list[i], scale, depth + 1);
                }
                ctx.restore();
            };
            walk(body, s, 0, true);
            return drawn > 0;
        } finally {}
    };
    const v55World = o => {
        if (!o?.["â"]) return;
        const root = o["â"];
        if ([ "bullet", "throwable" ].includes(o.type)) {
            gateNativeDraw(root, "projectile", e => !!e.invisibleProjectiles, () => v55TrailSample(o));
            o.type === "bullet" && o["Ëé"] && gateNativeDraw(o["Ëé"], "projectileNativeTrail", e => !!e.invisibleProjectiles);
        }
        if ([ "object", "buildable", "car", "baller" ].includes(o.type) && o["AÀ"] !== true) {
            const body = v55ObjectBody(o), build = isBuild(o);
            attachFeature(o, "durability", body, (ctx, s) => {
                const e = exFast(), color = v55HealthColor(o["åÈ"], o["ËÆ"]);
                if (!color || !(build ? e.buildHealth : e.objectHealth) || o["Äã"]) return;
                const w = Math.abs(Number(body.width)), h = Math.abs(Number(body.height));
                if (!(w > 0 && h > 0)) return;
                if (v55Outline(ctx, s, body, color)) return;
                ctx.save();
                ctx.strokeStyle = color;
                ctx.lineWidth = 3 / s;
                ctx.strokeRect((-w / 2 - 2) / s, (-h / 2 - 2) / s, (w + 4) / s, (h + 4) / s);
                ctx.restore();
            });
        }
        o.type === "ammo" && attachFeature(o, "ownedAmmo", root, (ctx, s) => {
            const e = exFast(), index = v55AmmoIndex(o);
            if (!e.highlightOwnedAmmo || index === void 0 || e.maskLootArt || o["Äã"]) return;
            const owned = (S.renderer?.["Åé"] || []).some((slot, i) => slot && GUN_TYPES.has(slot.type) && nativeSlotAmmoIndex(S.renderer, i) === index && slot.type !== "signal flare" && slot.type !== "grappler");
            if (owned) {
                ctx.save();
                ctx.strokeStyle = "#34ff75";
                ctx.lineWidth = 3 / s;
                ctx.strokeRect(-35 / s, -35 / s, 70 / s, 70 / s);
                ctx.restore();
            }
        });
    };
    const v55TrailSample = o => {
        if (!exFast().longerBulletTrails || o["Äã"]) return;
        const now = performance.now(), p = worldPos(o);
        if (!p) return;
        let path = v55.paths.get(o);
        if (!path) {
            v55.paths.size >= 128 && v55.paths.delete(v55.paths.keys().next().value);
            path = {
                points: [],
                at: -1 / 0,
                type: o.type
            };
            v55.paths.set(o, path);
        }
        if (now - path.at < 30) return;
        path.at = now;
        path.points.push({
            ...p,
            at: now
        });
        path.points.length > 32 && path.points.shift();
    };
    const v55Player = r => {
        if (!r?.["â"]) return;
        v55PlayerPreflight(r);
        gateNativeDraw(r["â"], "v55PlayerChildren", () => false, (ctx, nativeScale) => {
            v55PlayerPreflight(r);
            isLocal(r) && v66RootProjection(r, ctx, nativeScale);
        });
        if (!isLocal(r)) return;
        attachFeature(r, "projectileHistory", r["â"], (ctx, s) => {
            if (!exFast().longerBulletTrails) return;
            const now = performance.now(), me = worldPos(r), angle = Number(r["â"].A) || 0;
            if (!me) return;
            ctx.save();
            ctx.rotate(-angle);
            ctx.lineWidth = 2 / s;
            for (const [o, path] of v55.paths) {
                while (path.points.length && now - path.points[0].at > 1200) path.points.shift();
                if (!path.points.length) {
                    v55.paths.delete(o);
                    continue;
                }
                if (exFast().invisibleProjectiles) continue;
                ctx.strokeStyle = path.type === "throwable" ? "#ffb060" : "#ffe99a";
                ctx.globalAlpha = .6 * Math.max(0, 1 - (now - path.at) / 1200);
                ctx.beginPath();
                path.points.forEach((p, i) => i ? ctx.lineTo((p.x - me.x) / s, (p.y - me.y) / s) : ctx.moveTo((p.x - me.x) / s, (p.y - me.y) / s));
                ctx.stroke();
            }
            ctx.restore();
        });
    };
    const v55SafePoint = (zone, me) => {
        if (!zone || !me || !Number.isFinite(zone.radius) || zone.radius < 0) return null;
        const {x: x, y: y, radius: r} = zone;
        if (r === 0) return {
            x: x,
            y: y
        };
        const px = Math.max(x - r, Math.min(x + r, me.x)), py = Math.max(y - r, Math.min(y + r, me.y));
        if (px !== me.x || py !== me.y) return {
            x: px,
            y: py
        };
        const edges = [ [ me.x, y - r ], [ x + r, me.y ], [ me.x, y + r ], [ x - r, me.y ] ];
        edges.sort((a, b) => Math.hypot(a[0] - me.x, a[1] - me.y) - Math.hypot(b[0] - me.x, b[1] - me.y));
        return {
            x: edges[0][0],
            y: edges[0][1]
        };
    };
    const v55Indicators = () => {
        const e = exFast(), me = worldPos(S.renderer);
        if (e.safeZoneIndicator && me && v55.zone && performance.now() - v55.zoneAt < 9e5) {
            const p = v55SafePoint(v55.zone, me), target = p ? {
                "â": {
                    "ë": {
                        "É": p.x,
                        "Ä": p.y
                    }
                }
            } : null;
            showIndicator("safeZone", "safeZoneUi", target, "", indicatorColor(e, "safeZoneIndicator"), 110);
        } else S.safeZoneUi && (S.safeZoneUi.style.display = "none");
        if (e.stormCenter && me && !v55.stats?.finished && v55.zone && performance.now() - v55.zoneAt < 9e5) {
            const target = {
                "â": {
                    "ë": {
                        "É": v55.zone.x,
                        "Ä": v55.zone.y
                    }
                }
            };
            showIndicator("stormCenter", "stormCenterUi", target, "", indicatorColor(e, "stormCenter"), 165);
        } else S.stormCenterUi && (S.stormCenterUi.style.display = "none");
        const selected = new Set(e.lootChoices || []), matches = e.lootIndicator && me ? collectWorld().filter(o => o.type === "gun" && validTarget(o) && selected.has(v55GroundType(o) + ":" + o["äã"]) && !targetOnScreen(o)) : [];
        matches.sort((a, b) => {
            const p = worldPos(a), q = worldPos(b);
            return Math.hypot(p.x - me.x, p.y - me.y) - Math.hypot(q.x - me.x, q.y - me.y);
        });
        const live = new Set(matches.slice(0, 12));
        for (const [o, u] of v55.lootUis) if (!live.has(o)) {
            u.remove();
            v55.lootUis.delete(o);
        }
        for (const o of live) {
            let u = v55.lootUis.get(o);
            if (!u) {
                u = ensureArrow("lootUi" + o.id, indicatorColor(e, "lootIndicator"));
                delete S["lootUi" + o.id];
                v55.lootUis.set(o, u);
            }
            const p = worldPos(o), sp = projectWorld(p);
            if (!sp) {
                u.style.display = "none";
                continue;
            }
            u.querySelector(".shape").style.background = indicatorColor(e, "lootIndicator");
            u.style.width = "112px";
            u.style.height = "56px";
            u.querySelector(".shape").style.clipPath = "polygon(10% 40%,75% 40%,75% 20%,100% 50%,75% 80%,75% 60%,10% 60%)";
            placeArrow(u, sp.x - sp.rect.left - sp.rect.width / 2, sp.y - sp.rect.top - sp.rect.height / 2, Math.hypot(p.x - me.x, p.y - me.y), "", 75, sp.rect);
            const signature = v55GroundType(o) + ":" + o["äã"];
            if (u.dataset.item === signature) {
                u.querySelector(".d").replaceChildren(u.__brioItemIcon);
                continue;
            }
            u.dataset.item = signature;
            const d = u.querySelector(".d");
            d.style.left = "5px";
            d.style.top = "6px";
            d.style.width = "48px";
            d.style.height = "44px";
            const icon = D.createElement("span");
            icon.style = "position:relative;display:block;width:38px;height:38px";
            const bg = D.createElement("img"), art = D.createElement("img");
            bg.src = S.hudAssetPaths?.get("inv" + o["äã"]) || "/buildart/inv" + o["äã"] + ".png";
            art.src = itemPath(v55GroundType(o));
            bg.style = art.style = "position:absolute;inset:0;width:100%;height:100%;object-fit:contain";
            art.style.transform = "rotate(45deg) scale(.78)";
            icon.append(bg, art);
            u.__brioItemIcon = icon;
            d.replaceChildren(icon);
        }
    };
    const v55NativeCandidate = (node, readyList) => {
        const roots = readyList ? [ node ] : [ node, node.parent ].filter(Boolean);
        const children = root => {
            const a = root["âè"] || [], b = root["ÉE"] || [];
            return a.length + b.length > 48 ? [] : [ ...a, ...b ].filter(n => n && !n.__brioHudClone && !String(n.type || "").startsWith("brio"));
        };
        const color = n => String(n?.["Äe"] || n?.fillStyle || "").toUpperCase();
        for (const root of roots) {
            root["Ée"] === "mapScene" && gateNativeDraw(root, "fullMap", e => !!e.noMinimap);
            const list = readyList || children(root);
            list.some(n => n.type === "arc" && n["éã"] === 33 && color(n) === "#FFF") && list.some(n => n.type === "text" && n.fontSize === 22) && list.some(n => n["éã"] === 40 && color(n) === "#000") && gateNativeDraw(root, "reloadProgress", e => !!e.noWeaponProgress);
            Array.isArray(root["Àä_"]) && root["Àä_"].length === 8 && Object.hasOwn(root, "Eé_") && Object.hasOwn(root, "Æéá") && root["èeÊ"]?.height === 6 && color(root["èeÊ"]) === "#1ADAE0" && gateNativeDraw(root, "chargeProgress", e => !!e.noWeaponProgress);
            const white = list.filter(n => color(n) === "#FFF" && !n["À"] && Number.isFinite(n.width) && Number.isFinite(n.height));
            if (white.length === 5 && white.filter(n => n.height === 20 && n.width < 20).length === 2 && white.filter(n => n.width === 20 && n.height < 20).length === 2 && white.some(n => n.width === n.height && n.width < 20)) for (const marker of list) {
                const red = children(marker).filter(n => color(n) === "#F00" && !n["À"] && Number.isFinite(n.width) && Number.isFinite(n.height));
                red.length === 4 && gateNativeDraw(marker, "hitConfirmation", e => !!e.noHitMarker);
            }
        }
    };
    const packetFieldCache = new Map;
    let packetFieldRevision = -1;
    const v55PacketValue = (packet, name) => {
        if (Object.hasOwn(packet, name)) return packet[name];
        if (packetFieldRevision !== schemaFields.size) {
            packetFieldCache.clear();
            packetFieldRevision = schemaFields.size;
        }
        let fields = packetFieldCache.get(name);
        if (!fields) {
            fields = [];
            for (const [field, meaning] of schemaFields) meaning === name && fields.push(field);
            packetFieldCache.set(name, fields);
        }
        for (const field of fields) if (Object.hasOwn(packet, field)) return packet[field];
        return;
    };
    const v55StatsObserve = result => {
        try {
            const stats = v55.stats;
            if (!stats || stats.finished) return;
            for (const p of Array.isArray(result) ? result : [ result ]) {
                if (!p || typeof p !== "object") continue;
                const type = p.t ?? p.type, value = name => v55PacketValue(p, name);
                type === "setID" && (stats.localId = value("i") ?? p.id);
                if (type === "circle") {
                    const c = value("circle"), position = c?.position ?? c?.["ë"], radius = c?.radius ?? c?.["éã"];
                    const state = p.state || v55.zoneState;
                    if (state !== "moving" && Array.isArray(position) && position.length === 2 && position.every(Number.isFinite) && Number.isFinite(radius) && radius >= 0) {
                        v55.zone = {
                            x: position[0],
                            y: position[1],
                            radius: radius,
                            state: state,
                            source: "projected waiting border"
                        };
                        v55.zoneAt = performance.now();
                    }
                    if (p.state) {
                        [ "waiting", "moving" ].includes(p.state) && setMatchPhase("native circle state");
                        v55.zoneState = p.state;
                        packetObserver.circleState = p.state;
                    }
                }
                type === "elim" && !value("knock") && stats.eliminated.length < 100 && stats.eliminated.push(String(value("name") || "<unnamed>"));
                if (type === "x") {
                    const kind = p.b ?? p.p?.[1], id = p.i ?? p.p?.[0];
                    kind === "player" && stats.names.size < 256 && stats.names.set(id, String(value("name") || "<unnamed>"));
                    kind === "bullet" && value("pi") === (stats.localId ?? S.renderer?.id) && stats.ownProjectiles++;
                }
                if (type === "y") {
                    const id = p.i ?? p.a?.[0];
                    if (id === (stats.localId ?? S.renderer?.id)) for (const [name, key] of [ [ "hLost", "hpLoss" ], [ "sLost", "shieldLoss" ] ]) {
                        const n = value(name);
                        Number.isFinite(n) && n > 0 && (stats[key] += n);
                    }
                }
                if (type === "death") {
                    stats.terminal = {
                        place: value("place"),
                        eliminations: value("eliminations"),
                        damage: value("damageToEnemies"),
                        walls: value("wallsBuilt"),
                        seconds: value("timeAlive"),
                        killer: String(value("name") || "")
                    };
                    stats.finished = true;
                    productionFinish(stats);
                    v63FlashlightHide(true);
                    stopPacketObserver("native match end");
                }
            }
        } finally {}
    };
    const v55Sample = () => {
        if (S.destroyed) return;
        v55PrepareOutline();
        const stats = v55.stats, now = performance.now(), r = S.renderer;
        if (stats && !stats.finished && r && S.matchPhase === "match") {
            const dt = Math.max(0, Math.min(.75, (now - stats.sampleAt) / 1e3)), p = worldPos(r), type = r["Åé"]?.[r["ÈÆ"]]?.type;
            type && (stats.weaponSeconds.has(type) || stats.weaponSeconds.size < 64) && stats.weaponSeconds.set(type, (stats.weaponSeconds.get(type) || 0) + dt);
            if (p && stats.position) {
                const d = Math.hypot(p.x - stats.position.x, p.y - stats.position.y);
                d < 1200 ? stats.distance += d : stats.teleports++;
            }
            stats.position = p;
            stats.sampleAt = now;
        } else stats && (stats.sampleAt = now);
        if (r) {
            v55Player(r);
            v55Indicators();
        }
        stats?.finished && v55PostGame();
    };
    const v55PostGame = () => productionPostGame();
    const v55Reset = (start = false) => {
        v66View.pointer = null;
        v66View.root = null;
        v55.playerChecks = new WeakMap;
        v55.deferred = new Set;
        v55.outlineQueue.clear();
        packetFieldCache.clear();
        packetFieldRevision = -1;
        clearInterval(v55.timer);
        v55.timer = 0;
        v55.zone = null;
        v55.zoneState = null;
        v55.zoneAt = 0;
        v55.outlines.clear();
        v55.outlineFailures.clear();
        S.outlineMaskLogged = false;
        v55.paths.clear();
        for (const u of v55.lootUis.values()) u.remove();
        v55.lootUis.clear();
        S.safeZoneUi && (S.safeZoneUi.style.display = "none");
        S.stormCenterUi && (S.stormCenterUi.style.display = "none");
        v55.post?.remove();
        v55.post = null;
        for (const [node, [value, priority]] of v55.postStyles) node.style.setProperty("display", value, priority);
        v55.postStyles.clear();
        v55.stats = start ? {
            localId: null,
            names: new Map,
            eliminated: [],
            hpLoss: 0,
            shieldLoss: 0,
            ownProjectiles: 0,
            weaponSeconds: new Map,
            distance: 0,
            teleports: 0,
            position: null,
            sampleAt: performance.now(),
            finished: false
        } : null;
        start && (v55.timer = setInterval(v55Sample, 500));
    };
    const GUN_TYPES = new Set([ "scar", "bolt", "lmg", "shotgun", "heavy", "smg", "ump", "rifle", "ar-15", "scoped ar", "deagle", "rpg", "famas", "tommy gun", "drum", "musket", "heavy sniper", "ak47", "akƧ", "combat", "silencedpistol", "aug", "burst shotgun", "grenade launcher", "mgl", "grenade pistol", "vector", "revolver", "charge rifle", "grenade sniper", "sawedoff", "signal flare", "spas", "grappler", "crossbow", "minigun" ]);
    const WARNING_DEFAULTS = {
        health: 20,
        ammo: [ 30, 30, 10, 15, 5, 5 ],
        materials: [ 30, 30, 30, 1 ]
    };
    const normalizeWarningThresholds = stored => {
        const valid = (v, fallback) => Number.isSafeInteger(v) && v >= 0 && v <= 1e6 ? v : fallback;
        return {
            health: valid(stored?.health, WARNING_DEFAULTS.health),
            ammo: WARNING_DEFAULTS.ammo.map((v, i) => valid(stored?.ammo?.[i], v)),
            materials: WARNING_DEFAULTS.materials.map((v, i) => valid(stored?.materials?.[i], v))
        };
    };
    const belowWarning = (e, kind, index, value) => !!e[{
        health: "lowHealthWarning",
        ammo: "lowAmmoWarning",
        materials: "lowMatsWarning"
    }[kind]] && Number.isFinite(value) && value >= 0 && value <= (kind === "health" ? e.warningThresholds.health : e.warningThresholds[kind][index]);
    const materialIndex = path => [ "wood", "brick", "metal", "scrap" ].findIndex(k => path?.endsWith("/" + k + ".png") || k === "scrap" && path?.endsWith("/gear.png"));
    const q = s => D.querySelector(s), t = x => (x ?? "").toString().replace(/\s+/g, " ").trim(), read = (k, d) => {
        try {
            return JSON.parse(localStorage.getItem(k) || "") || d;
        } catch (_) {
            return d;
        }
    }, write = (k, v) => {
        try {
            localStorage.setItem(k, JSON.stringify(v));
        } catch (e) {
            productionError("Runtime", String(e));
        }
    }, state = () => read("br_local_visuals", {}), saveState = s => write("br_local_visuals", s), storedExtras = () => {
        const stored = read("brio_extras_state", {}), value = stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
        for (const key of [ "buildMaterialLabels", "deployableLabels", "deployableRadius", "highlightLoot", "noFoliage", "cleanLoot", "playerIds" ]) delete value[key];
        for (const key of [ "screenChests", "screenAirdrops", "screenFishing", "identifyBots", "contentsReconFocus", "showBulletSpread", "spreadColor", "spreadSize", "stormDistance", "noStormTimer" ]) delete value[key];
        v63NormalizeVisuals(value);
        value.warningThresholds = normalizeWarningThresholds(value.warningThresholds);
        value.indicatorColors = Object.fromEntries(Object.entries(INDICATOR_COLORS).map(([id, color]) => [ id, /^#[0-9a-f]{6}$/i.test(value.indicatorColors?.[id] || "") ? value.indicatorColors[id] : color ]));
        value.lootChoices = Array.isArray(value.lootChoices) ? [ ...new Set(value.lootChoices.filter(x => typeof x === "string" && /:[45]$/.test(x) && GUN_TYPES.has(x.slice(0, -2)) && productionLootChoiceAllowed(x))) ].slice(0, 128) : [];
        LOOT_TIERS.some(([id]) => id === value.lootMaskTier) || (value.lootMaskTier = "item");
        BUILD_TIERS.some(([id]) => id === value.buildMaskTier) || (value.buildMaskTier = "all");
        return value;
    }, extrasState = () => {
        const value = storedExtras();
        if (value.goodFlippinLuck) {
            for (const [id, , , , kind] of EXTRA.challenges) id && id !== "goodFlippinLuck" && kind !== "visual" && (value[id] = true);
            for (const [id] of EXTRA.modifiers) id && (value[id] = false);
            value.lootMaskTier = "all";
            value.buildMaskTier = "all";
        }
        value.maskLootArt = !!value.lootInvisible && value.lootMaskTier !== "rarity";
        value.cleanLoot = !!value.lootInvisible && value.lootMaskTier !== "item";
        value.maskLootPopup = !!value.lootInvisible && [ "locations", "all" ].includes(value.lootMaskTier);
        value.maskLootOutline = !!value.lootInvisible && value.lootMaskTier === "locations";
        return value;
    }, saveExtras = s => write("brio_extras_state", s), norm = u => {
        try {
            return new URL(String(u || ""), location.href).pathname.toLowerCase();
        } catch (_) {
            return String(u || "").split(/[?#]/)[0].toLowerCase();
        }
    };
    const ROOFS = [ "/buildart/barnroof.png", "/buildart/cabinroof.png", "/buildart/castlebottomleftroof.png", "/buildart/castlebottomrightroof.png", "/buildart/castlecenterroof.png", "/buildart/castletopleftroof.png", "/buildart/castletoprightroof.png", "/buildart/gymroof.png", "/buildart/house0roof.png", "/buildart/house1roof.png", "/buildart/house2roof.png", "/buildart/house3roof.png", "/buildart/house4roof.png", "/buildart/house5roof.png", "/buildart/japanroof.png", "/buildart/jungle_shack_roof.png", "/buildart/museumroof.png", "/buildart/observatoryroof.png", "/buildart/pavilionroof.png", "/buildart/potatopalaceroof.png", "/buildart/shackroof.png" ], ROOFSET = new Set(ROOFS), BUILDRE = /(?:wood|brick|metal)[0-2]\.png$|campfire|boostpad|shieldbuild|shieldbubble/i;
    const mkBlank = (w, h) => {
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
    const catalog = () => W["Åèa"] && typeof W["Åèa"] === "object" ? W["Åèa"] : {}, syncSet = () => new Set(Array.isArray(W["åÆÆ"]) ? W["åÆÆ"].map(String) : []), items = typ => Object.entries(catalog()).filter(([id, v]) => v?.type === typ && !(typ === "skin" && (id === "player" || id === "skin1" || t(v?.name).toLowerCase() === "default"))).map(([id, v]) => ({
        id: id,
        name: v.name || id,
        sync: syncSet().has(id)
    })).sort((a, b) => a.name.localeCompare(b.name));
    const openDB = () => new Promise((ok, no) => {
        const r = indexedDB.open("brio_unlocker", 1);
        r.onupgradeneeded = () => {
            r.result.objectStoreNames.contains("customAssets") || r.result.createObjectStore("customAssets", {
                keyPath: "key"
            });
        };
        r.onsuccess = () => ok(r.result);
        r.onerror = () => no(r.error);
    }), loadCustom = async () => {
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
        } catch (e) {
            productionError("Runtime", String(e));
        }
    }, putCustom = async x => {
        const d = await openDB();
        await new Promise((ok, no) => {
            const tr = d.transaction("customAssets", "readwrite");
            tr.objectStore("customAssets").put(x);
            tr.oncomplete = ok;
            tr.onerror = () => no(tr.error);
        });
        d.close();
    };
    const v66Completion = {
        scene: null,
        node: null,
        reached: Object.create(null)
    };
    const v66StormSegments = () => {
        const z = v55.zone;
        if (!z || ![ z.x, z.y, z.radius, v55.zoneAt ].every(Number.isFinite) || z.radius <= 0 || performance.now() - v55.zoneAt > 9e5) return [];
        const left = z.x - z.radius, right = z.x + z.radius, top = z.y - z.radius, bottom = z.y + z.radius;
        if (![ left, right, top, bottom ].every(Number.isFinite)) return [];
        return [ [ left, top, right, top ], [ right, top, right, bottom ], [ right, bottom, left, bottom ], [ left, bottom, left, top ] ];
    };
    const v66StormScene = scene => {
        if (scene?.["Ée"] !== "borderScene" || v66Completion.scene === scene || !scene.add) return;
        const list = scene["âè"];
        if (!Array.isArray(list) || list.length < 4 || !list.slice(0, 4).every(n => n && String(n["Äe"] || n.fillStyle || "").toUpperCase() === "#F00" && !n["À"])) return;
        v66Completion.node?.parent?.remove?.(v66Completion.node);
        const node = nativeNode((ctx, s) => {
            const e = exFast();
            if (!e.stormEdge || e.invisibleStorm || e.goodFlippinLuck || !S.renderer || v55.stats?.finished || !Number.isFinite(s) || s <= 0) return;
            const segments = v66StormSegments();
            if (!segments.length) return;
            ctx.save();
            try {
                ctx.beginPath();
                for (const [x1, y1, x2, y2] of segments) {
                    ctx.moveTo(x1 / s, y1 / s);
                    ctx.lineTo(x2 / s, y2 / s);
                }
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.strokeStyle = "rgba(0,0,0,.65)";
                ctx.lineWidth = 14 / s;
                ctx.stroke();
                ctx.strokeStyle = "#65d9ff";
                ctx.lineWidth = 8 / s;
                ctx.stroke();
            } finally {
                ctx.restore();
            }
        });
        v66Completion.scene = scene;
        v66Completion.node = node;
        scene.add(node);
    };
    const v66Reset = () => {
        v66Completion.node?.parent?.remove?.(v66Completion.node);
        v66Completion.node = null;
        v66Completion.scene = null;
        v66Completion.reached = Object.create(null);
    };
    const style = D.createElement("style");
    style.textContent = "[data-brio-mono-page] canvas:not(#playerPreview):not([data-brio-mono]){filter:grayscale(1)!important}#loggedInLocker.b18,#loggedInShop.b18{box-sizing:border-box!important;width:178px!important;height:53px!important;display:inline-flex!important;align-items:center!important;gap:8px!important;padding:0 12px!important;margin-top:7px!important;border:4px solid #090909!important;border-radius:9px!important;background:#65aee0!important;color:#fff!important;cursor:pointer!important;transition:none!important;overflow:hidden!important}#loggedInLocker.b18{margin-right:0!important}#loggedInShop.b18{margin-right:80px!important}#loggedInLocker.b18>img,#loggedInShop.b18>img{display:none!important}#loggedInLocker.b18>.bi,#loggedInShop.b18>.bi{width:42px;height:42px;flex:0 0 42px;background:center/contain no-repeat;pointer-events:none}#loggedInLocker.b18>p,#loggedInShop.b18>p{position:static!important;margin:0!important;flex:1;text-align:center;font-size:23px!important;color:#fff!important;-webkit-text-stroke:1px #000;pointer-events:none}";
    D.documentElement.appendChild(style);
    const patchButtons = () => {
        for (const [id, label, ico] of [ [ "loggedInLocker", "(un)Locker", "/buildart/icon-locker.png" ], [ "loggedInShop", "Extras", "/buildart/icon-shop.png" ] ]) {
            const e = D.getElementById(id);
            if (!e) continue;
            S.bak[id] || (S.bak[id] = {
                html: e.innerHTML,
                cls: e.className,
                style: e.getAttribute("style") || ""
            });
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
    locker.dataset.brioMenu = "locker";
    extras.dataset.brioMenu = "extras";
    locker.classList.add("brio-product");
    extras.classList.add("brio-product");
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
    }, setSel = x => {
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
    }, preview = (k, id) => k === "body" ? `/cosmetics/body/${id}.png?2` : k === "head" ? `/cosmetics/head/${id}.png?2` : k === "pickaxe" ? `/cosmetics/pickaxe/${id}.png?2` : k === "wrap" ? `/cosmetics/combos/${id}.png?2` : k === "trail" ? `/cosmetics/trails/${id}.png?2` : k === "glider" ? `/cosmetics/glider/${id}.png?2` : `/cosmetics/emotes/${id}.png?2`, renderGrid = () => productionLocker(), renderLocker = () => productionLocker();
    const LOOT_TIERS = [ [ "item", "Mask item" ], [ "rarity", "Mask rarity" ], [ "popups", "Popups only" ], [ "locations", "Locations only" ], [ "all", "All invisible" ] ], BUILD_TIERS = [ [ "blueprints", "Blueprints only" ], [ "all", "All invisible" ] ];
    const EXTRA = {
        challenges: [ [ "playersInvisible", "All players invisible", "remote body, held items/builds, glider/grapple; all trail particles" ], [ "lootInvisible", "Mask loot", "five information levels", false, "lootTier" ], [ "buildsInvisible", "Builds invisible", "placement preview separate from placed blue base", false, "buildTier" ], [ "noMinimap", "No map", "minimap + full map + counters/countdown; status announcements retained" ], [ "noCrosshair", "No crosshair", "native arms/center/hit marker" ], [ "noInventoryHud", "No inventory/item bar", "native item/material/ammo/build widgets + own HUD name" ], [ "invisibleStorm", "Invisible storm", "world storm + minimap/full-map shading/border" ], [ "noChestsVisible", "Chests invisible", "chests + ammo/grenade crates · proven" ], [ "noHealthShieldHud", "No health/shield HUD", "native own bars; ammo counter retained" ], [ "noInfoPopups", "Hide interaction prompts", "build/inventory/pickup instructions only; status messages and kill feed always visible" ], [ "noPickupLabels", "No pickup labels", "ground loot visible; native nearby pickup popup hidden" ], [ "noHitMarker", "No hit-confirmation marker", "crosshair retained" ], [ "noDamageDirection", "Hide damage direction", "native incoming-damage arrow; independent of floating numbers" ], [ "noDamageNumbers", "No floating damage numbers", "native damage/healing text pools" ], [ "noWeaponProgress", "No reload/charge progress", "native progress HUD retained in simulation" ], [ "invisibleProjectiles", "Invisible bullets/throwables", "also silences shared detached trails; native physics/sounds retained" ], [ "hideWeapons", "Hide weapons", "local + remote held art and aiming build previews" ], [ "monochrome", "Monochrome vision", "game canvas grayscale · proven", false, "visual" ], [ "flashlightMode", "Flashlight mode", "player/cursor light radius; visual-only, excluded from Hell", false, "visual" ], [ "goodFlippinLuck", "Hell", "all gameplay challenges, highest tiers; every modifier locked off" ] ],
        modifiers: [ [ "transparentRoofs", "Transparent roofs", "static map roofs" ], [ "healthBars", "Player health bars", "remote players" ], [ "numericHealthShield", "Health/shield numbers", "numbers inside native bars · proven" ], [ "playerNames", "Player names", "remote players" ], [ "allGlidersInvisible", "All gliders invisible", "self + remote" ], [ "allTrailsInvisible", "All trails invisible", "self + remote" ], [ "nearestPlayer", "Nearest player indicator", "off-screen only + distance" ], [ "nearestPlayerName", "Player name in nearest arrow", "below distance; follows upright label", true ], [ "nearestChest", "Nearest chest indicator", "hide while target is on-screen" ], [ "nearestAirdrop", "Nearest airdrop indicator", "hide while target is on-screen" ], [ "permanentMeteor", "Permanent meteor location", "automatic native waypoint retention · proven" ], [ "highContrastPlayers", "High-contrast players", "yellow contrast halo around remote players; hidden-player challenges take precedence" ], [ "transparentFoliage", "Transparent foliage", "canopy opacity 25% · proven" ], [ "stormEdge", "Storm edge highlight", "all four projected next-zone edges; bold cyan; matches minimap target" ], [ "stormCenter", "Safe-zone center direction", "purple off-screen arrow to projected safe-zone center; target retained while moving" ], [ "buildHealth", "Build health outlines", "green >75%; yellow >50%; orange >25%; red ≤25%" ], [ "objectHealth", "Breakable object health outlines", "same bands; includes vehicles" ], [ "safeZoneIndicator", "Nearest safe-zone edge", "blue by default; distance built in; target zone during movement" ], [ "lootIndicator", "Loot indicator", "selected source guns in gold/red rarity; closest12 off-screen pickups" ], [ "highlightOwnedAmmo", "Highlight ammo for owned guns", "native pickup ammo matches current carried gun types" ], [ "longerBulletTrails", "Longer bullet trails", "1.2s observed bullet/throwable history; no trajectory prediction" ], [ "customCrosshair", "Enhanced/custom crosshair", "dot/cross/ring + PNG/WebP upload; native hit marker retained" ], [ "lowHealthWarning", "Low-health visual warning", "own HP at or below threshold · proven" ], [ "lowAmmoWarning", "Low-ammo visual warning", "inclusive thresholds; grappler5, flare exempt · proven" ], [ "lowMatsWarning", "Low-material warning", "inclusive thresholds including scraps · proven" ], [ null, "Show player inventories", "three rows below player" ], [ "inventorySlots", "Inventory: 5 item slots", "larger row aligned to ammo; no counts/hotkeys", true ], [ "inventoryMaterials", "Inventory: build materials/counts", "larger icons/counts; wood / brick / metal / scraps", true ], [ "inventoryAmmo", "Inventory: ammo by type", "native icons + separate counts · proven", true ], [ "inventorySize", "Inventory size", "Small / Medium / Large / XL", true, "select" ] ]
    };
    const REQUIRED_TESTS = [ "highContrastPlayers", "stormEdge", "customCrosshair", "inventorySlots", "inventoryMaterials", "nearestPlayer", "nearestChest", "nearestAirdrop", "safeZoneIndicator", "stormCenter", "lootIndicator", "highlightOwnedAmmo", "longerBulletTrails" ], CHALLENGE_TESTS = [ "playersInvisible", "lootInvisible", "buildsInvisible", "noMinimap", "noCrosshair", "noInventoryHud", "invisibleStorm", "noHealthShieldHud", "goodFlippinLuck", "noDamageDirection", "noInfoPopups", "noPickupLabels", "noHitMarker", "noDamageNumbers", "noWeaponProgress", "invisibleProjectiles", "hideWeapons" ];
    const nativeScanNeeded = e => !!e.permanentMeteor || !!e.transparentRoofs || !!e.lowMatsWarning || !!e.lowAmmoWarning || !!e.inventorySlots || !!e.inventoryMaterials || !!e.inventoryAmmo || !!e.allTrailsInvisible || [ "safeZoneIndicator", "stormCenter", "lootIndicator", "highlightOwnedAmmo", "longerBulletTrails", "customCrosshair", "flashlightMode" ].some(id => !!e[id]) || CHALLENGE_TESTS.some(id => !!e[id]);
    new Set, new Set;
    const GENERAL_ADVANTAGES = [ "nearestPlayer", "nearestPlayerName", "nearestAirdrop", "lowHealthWarning", "lowAmmoWarning", "lowMatsWarning", "inventorySlots", "inventoryMaterials", "inventoryAmmo", "healthBars", "numericHealthShield", "playerNames", "transparentRoofs", "transparentFoliage", "stormEdge", "allGlidersInvisible", "permanentMeteor", "highlightOwnedAmmo", "longerBulletTrails" ];
    const v68Advantages = () => {
        const z = storedExtras(), included = new Set(GENERAL_ADVANTAGES);
        for (const [id] of EXTRA.modifiers) id && id !== "inventorySize" && (z[id] = included.has(id));
        z.inventorySize = "large";
        z.warningThresholds = normalizeWarningThresholds(null);
        z.goodFlippinLuck = false;
        z.generalAdvantagesPreset = true;
        saveExtras(z);
        featureEx.at = -1 / 0;
        syncFeatureSettings();
        productionTrackEffects();
        renderExtras();
    };
    const renderExtras = () => productionExtras();
    const intercept = e => {
        const b = e.target?.closest?.("#loggedInLocker,#loggedInShop");
        if (!b) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (b.id === "loggedInLocker") {
            renderLocker();
            productionShow(locker);
        } else {
            renderExtras();
            productionShow(extras);
        }
    };
    D.addEventListener("click", intercept, true);
    const choose = (x, k) => {
        if (!x || x.mode === "native") return {
            mode: "native"
        };
        if (x.mode === "item") return x;
        if (x.mode === "custom" && [ "body", "head", "pickaxe", "glider" ].includes(k)) {
            const c = [ ...S.custom[k], ...productionOriginals(k) ].find(v => v.id === x.id);
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
        if (!x || x.mode === "native" || S.destroyed) return Promise.resolve(null);
        const u = asset(k, x);
        if (!u) return Promise.resolve(null);
        const ck = k + ":" + x.mode + ":" + (x.id || "");
        if (S.resources.has(ck)) return S.resources.get(ck);
        const generation = productionResourceGeneration;
        const p = new Promise((ok, no) => {
            const im = new Image;
            productionImages.add(im);
            im["ÀA"] = 2;
            const release = () => {
                productionImages.delete(im);
                productionImageCancels.delete(im);
                im.onload = im.onerror = null;
            };
            im.onload = () => {
                release();
                if (S.destroyed || generation !== productionResourceGeneration) {
                    im.src = "";
                    ok(null);
                    return;
                }
                im["ÀA"] = 1;
                im["ÁÅe"] = im.width / 2;
                im["âÅÉ"] = im.height / 2;
                let drawable = im;
                if (k === "head" && x.mode === "custom" && String(x.id).startsWith("brio-")) {
                    drawable = D.createElement("canvas");
                    drawable.width = im.width;
                    drawable.height = im.height;
                    const w = im.width * productionHeadScale, h = im.height * productionHeadScale;
                    drawable.getContext("2d").drawImage(im, (im.width - w) / 2, (im.height - h) / 2, w, h);
                    drawable["ÀA"] = 1;
                    drawable["ÁÅe"] = drawable.width / 2;
                    drawable["âÅÉ"] = drawable.height / 2;
                }
                ok({
                    src: u,
                    "ÁÄ": drawable,
                    __brio: true,
                    __kind: k
                });
            };
            im.onerror = () => {
                release();
                const error = Error("Unable to load " + k + " artwork");
                S.destroyed || generation !== productionResourceGeneration || productionError("Artwork", error);
                no(error);
            };
            productionImageCancels.set(im, () => {
                release();
                im.src = "";
                ok(null);
            });
            /^https?:/.test(u) && new URL(u, location.href).origin !== location.origin && (im.crossOrigin = "anonymous");
            im.src = u;
        });
        S.resources.set(ck, p);
        p.catch(() => {
            S.resources.get(ck) === p && S.resources.delete(ck);
        });
        return p;
    }, held = r => r?.["Åé"]?.[r?.["ÈÆ"]]?.type || null, nativeSnap = r => ({
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
            h.desc ? Object.defineProperty(h.target, "À", h.desc) : h.target["À"] = h.base;
            h.desc && "value" in h.desc && h.desc.writable && (h.target["À"] = h.base);
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
        if (d && !d.configurable) return;
        let native = target[key];
        const getNative = () => d?.get ? Reflect.apply(d.get, target, []) : native;
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() {
                return chooseValue(getNative());
            },
            set(v) {
                d?.set ? Reflect.apply(d.set, target, [ v ]) : native = v;
            }
        });
        (S.cosmeticAdapters || (S.cosmeticAdapters = [])).push(() => {
            if (d) {
                Object.defineProperty(target, key, d);
                "value" in d && d.writable && (target[key] = native);
            } else {
                delete target[key];
                target[key] = native;
            }
        });
    }, restoreCosmetics = () => {
        while (S.cosmeticAdapters?.length) try {
            S.cosmeticAdapters.pop()();
        } catch (e) {
            productionError("Runtime", "cosmetic restore: " + String(e));
        }
    }, sceneObserve = node => {
        productionMapPrototype(node);
        if (!node || typeof node !== "object" || !Array.isArray(node["âè"]) || typeof node.add !== "function" || typeof node.remove !== "function") return;
        if (node.__brioHudClone || String(node.type || "").startsWith("brio") || node["À"] || node.canvas || "text" in node) return;
        S.sceneRoots || (S.sceneRoots = new Set);
        S.sceneRoots.size < 96 && S.sceneRoots.add(node);
        S.meteorObservers || (S.meteorObservers = new Map);
        if (S.meteorObservers.has(node) || S.meteorObservers.size >= 96) return;
        const restores = [];
        for (const key of [ "add", "âá", "Åæê" ]) {
            const orig = node[key], d = Object.getOwnPropertyDescriptor(node, key);
            if (typeof orig !== "function" || d && !d.configurable && !d.writable || d && !("value" in d)) continue;
            const wrap = function(...args) {
                const result = Reflect.apply(orig, this, args);
                for (const x of args) try {
                    meteorCandidate(x, this["âè"] || []);
                    captureRoof(x);
                    for (const child of hudWalk(x, 80)) hudCandidate(child);
                    v55DeferredNative(x);
                    handleAdded(x);
                } catch (e) {
                    S.errors.length < 100 && productionError("Runtime", "scene add: " + String(e));
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
                    node[key] === wrap && (d ? Object.defineProperty(node, key, d) : delete node[key]);
                });
            } catch (_) {}
        }
        restores.length && S.meteorObservers.set(node, restores);
    }, sceneRoots = () => {
        const roots = new Set([ ...S.sceneRoots || [], ...S.renderExtraRoots || [] ]);
        for (const x of [ S.renderer?.Eâ, S.renderer?.["â"], ...S.arrayHooks.keys() ]) {
            let p = x;
            for (let n = 0; p && n < 10; n++, p = p.parent) roots.add(p);
        }
        if (!S.windowSceneChecked) {
            S.windowSceneChecked = true;
            for (const key of Object.getOwnPropertyNames(W).slice(0, 1200)) try {
                const d = Object.getOwnPropertyDescriptor(W, key), v = d?.value;
                !v || typeof v !== "object" || v instanceof Node || !Array.isArray(v["âè"]) || typeof v.add !== "function" || roots.add(v);
            } catch (_) {
                S.sceneSkipped = (S.sceneSkipped || 0) + 1;
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
            if (n.parent && !S.sceneRoots?.has(n.parent)) {
                const extra = S.renderExtraRoots || (S.renderExtraRoots = new Set);
                extra.size < 64 && extra.add(n.parent);
            }
            sceneObserve(n.parent);
            sceneObserve(n);
            if (!n["À"] && !n.canvas && !("text" in n) && typeof n.add === "function") {
                observeRenderArray(n["âè"], true);
                Array.isArray(n["ÉE"]) && observeRenderArray(n["ÉE"], true);
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
                a[key] === wrap && (d ? Object.defineProperty(a, key, d) : delete a[key]);
            });
        }
        renderArrays.set(a, restores);
        for (const n of a) observeRendered(n);
    };
    const stopRenderDiscovery = () => {
        if (!renderDiscovery) return;
        Array.prototype.forEach === renderDiscovery.wrap && Object.defineProperty(Array.prototype, "forEach", renderDiscovery.desc);
        clearTimeout(renderDiscovery.timer);
        renderDiscovery = null;
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
                try {
                    observeRendered(n);
                } catch (_) {}
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
    };
    const applyLocal = async () => {
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
        const safe = (k, x) => loadRes(k, x).catch(err => null);
        try {
            const [bo, he, pi, gl, igl, ...em] = await Promise.all([ safe("body", R.body), safe("head", R.head), safe("pickaxe", R.pickaxe), safe("glider", R.glider), e.allGlidersInvisible ? safe("glider", {
                mode: "invisible",
                data: BLANK.glider
            }) : Promise.resolve(null), ...R.emotes.map(x => safe("emote", x)) ]);
            if (S.destroyed || epoch !== S.runEpoch || r !== S.renderer) return;
            installSrc(R);
            bo && cosmeticLock(r["Ëå"], "À", () => bo);
            if (he) {
                cosmeticLock(r.head, "À", () => he);
                cosmeticLock(r, "Äâè", () => he);
            }
            if (pi) {
                cosmeticLock(r, "ÉãÂ", () => pi);
                cosmeticLock(r["ä"], "À", v => held(r) === "pickaxe" ? pi : v);
            }
            const hide = R.body.mode === "invisible";
            for (const [p, k] of [ [ "áË", "l" ], [ "ÄÂ", "r" ], [ "ÄãÀ", "f" ], [ "èÅ", "s" ] ]) r[p] && S.native.limbs[k] !== void 0 && hide && cosmeticLock(r[p], "opacity", () => 0);
            R.trail.mode === "item" && cosmeticLock(r, "Ëé", () => R.trail.id + "-");
            (R.trail.mode === "invisible" || e.allTrailsInvisible) && cosmeticLock(r, "åëÅ", native => R.trail.mode === "invisible" || exFast().allTrailsInvisible ? NaN : native);
            R.wrap.mode === "item" && cosmeticLock(r, "ÆÃÅ", () => R.wrap.id);
            const gg = igl || gl;
            if (gg) {
                cosmeticLock(r, "äÀÊ", native => exFast().allGlidersInvisible && igl ? igl : gl || native);
                cosmeticLock(r["ÂÅ"], "À", native => exFast().allGlidersInvisible && igl ? igl : gl || native);
            } else {
                r["aéÄ"] = S.native.gliderId;
                r["äÀÊ"] = S.native.glider;
                r["ÂÅ"] && S.native.gliderDisplay && (r["ÂÅ"]["À"] = S.native.gliderDisplay);
            }
            S.emoteResolved = em.map((x, i) => R.emotes[i].mode === "item" ? x : null);
            installEmote(r);
            S.emoteEffect && (S.emoteEffect.current = mapEmote(S.emoteEffect.base));
        } catch (e2) {
            productionError("Runtime", String(e2));
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
    }, resourceSlots = o => {
        const out = [], seen = new Set, walk = (v, d) => {
            if (!v || typeof v !== "object" || d > 4 || seen.has(v) || v === W || v === D || v instanceof Node) return;
            seen.add(v);
            if (v["ÁÄ"] && typeof v["ÁÄ"] === "object") {
                const p = norm(v.src || v["ÁÄ"]?.currentSrc || v["ÁÄ"]?.src);
                p && p !== "/" && out.push({
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
    }, isWorld = o => !!(o && typeof o === "object" && o.id != null && [ "object", "buildable", "spellfield", "gun", "ammo", "chest", "airdrop", "car", "baller", "bullet", "throwable" ].includes(String(o.type))), collectPlayers = () => {
        const out = [], seen = new Set;
        for (const a of [ S.rendererArray, ...S.arrayHooks.keys() ]) if (Array.isArray(a)) for (const x of a) if (isPlayer(x) && !seen.has(x)) {
            seen.add(x);
            out.push(x);
        }
        return out;
    }, collectWorld = () => {
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
            if (!(old instanceof HTMLImageElement) || old.naturalWidth || old.complete && old["ÀA"] !== 2) make(); else {
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
            }
        });
        S.transparent.set(old, p);
        p.then(im => {
            im || S.transparent.delete(old);
        });
        return p;
    }, blankWrapper = async (w, map, key) => {
        if (!w?.["ÁÄ"] || map.has(key)) return;
        const epoch = S.runEpoch, old = w["ÁÄ"], im = await transparentImage(old);
        if (S.destroyed || epoch !== S.runEpoch) return;
        if (map === S.roofSaved && !exFast().transparentRoofs) return;
        if (im) {
            map.set(key, {
                w: w,
                old: old
            });
            w["ÁÄ"] = im;
        }
    }, captureRoof = o => {
        if (!exFast().transparentRoofs) return;
        const w = o?.À, p = nativeResourcePath(w);
        ROOFSET.has(p) && !S.roofSaved.has(p) && blankWrapper(w, S.roofSaved, p).then(maybeStop).catch(e => productionError("Runtime", String(e)));
    }, isBuild = o => {
        const txt = [ o?.type, o?.["Àâ"], o?.["ÄæÅ"], o?.["ÆåÃ"], ...resourceSlots(o).map(x => x.path) ].join(" ").toLowerCase();
        return /wall|campfirebuild|boostpadbuild|shieldbuild|shieldbubble/.test(txt) || resourceSlots(o).some(x => BUILDRE.test(x.path));
    };
    const rememberRemote = r => {
        let e = S.remoteRefs.get(r.id);
        if (e) {
            e.r = r;
            e.name = r["Ée"];
        } else {
            e = {
                r: r,
                id: r.id,
                name: r["Ée"],
                screen: null
            };
            S.remoteRefs.set(r.id, e);
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
                m && c && (e.screen = {
                    x: m.e,
                    y: m.f,
                    a: m.a,
                    b: m.b,
                    c: m.c,
                    d: m.d,
                    at: performance.now(),
                    canvas: c
                });
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
            productionError("Runtime", String(x));
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
            productionError("Runtime", String(x));
        }
    }, ensureArrow = (key, color) => productionArrow(key, color), placeArrow = (u, dx, dy, dist, label, m = 76, rect = {
        left: 0,
        top: 0,
        width: innerWidth,
        height: innerHeight
    }) => productionPlaceArrow(u, dx, dy, dist, label, m, rect), projectWorld = p => {
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
    let nativeResourcePaths = new WeakMap;
    const nativeResourcePath = resource => {
        if (!resource || typeof resource !== "object") return "/";
        const source = resource.src || resource["ÁÄ"]?.src || "", old = nativeResourcePaths.get(resource);
        if (old && old.source === source) return old.path;
        const path = norm(source);
        nativeResourcePaths.set(resource, {
            source: source,
            path: path
        });
        return path;
    };
    const hudKinds = path => /\/inv[0-6]\.png$/.test(path) ? "slots" : /\/(?:wood|brick|metal|scrap|gear)\.png$/.test(path) ? "materials" : /\/(?:ammo|stack)[0-4]\.png$/.test(path) ? "ammo" : null;
    const hudWalk = (root, max = 100) => {
        const out = [], seen = new Set, stack = [ root ];
        while (stack.length && out.length < max) {
            const n = stack.pop();
            if (!n || seen.has(n) || typeof n !== "object") continue;
            seen.add(n);
            out.push(n);
            for (const k of [ "âè", "ÉE" ]) for (const c of n[k] || []) String(c?.type || "").startsWith("brio") || stack.push(c);
        }
        return out;
    };
    const hudPath = n => nativeResourcePath(n?.["À"]);
    const hudCandidate = n => {
        try {
            nativeVisualCandidate(n);
            if (n?.__brioHudClone || S.hudRejected?.has(n) || !hudKinds(hudPath(n))) return;
            S.hudPending || (S.hudPending = new WeakSet);
            if (S.hudPending.has(n) || S.hudSourceNodes?.has(n)) return;
            S.hudPending.add(n);
            const epoch = S.runEpoch;
            setTimeout(() => {
                S.hudPending.delete(n);
                if (S.destroyed || epoch !== S.runEpoch) return;
                try {
                    hudInspect(n);
                } catch (e) {
                    S.hudInspectError || (S.hudInspectError = true);
                }
            }, 250);
        } finally {}
    };
    const slotCaption = root => hudWalk(root, 32).find(n => (n.type === "text" || typeof n.text === "string") && /^[1-6]$/.test(String(n.text)) && Number(n["ë"]?.["Ä"]) > 0);
    const slotUnit = holder => {
        const candidates = [ holder, ...holder?.["âè"] || [], ...holder?.["ÉE"] || [] ];
        let group = null;
        for (const root of candidates) {
            if (!root || String(root.type || "").startsWith("brio")) continue;
            const cap = slotCaption(root), icons = hudWalk(root, 40).filter(n => hudKinds(hudPath(n)) === "slots");
            const square = Number(root.width) > 0 && Number(root.height) > 0 && Math.abs(root.width - root.height) < 2;
            if (cap && square && Number(cap["ë"]?.["Ä"]) >= root.height * .5) return root;
            cap && !root.width && icons.length === 1 && (group ||= root);
        }
        return group;
    };
    const captureSlotRow = icon => {
        let unit = icon;
        for (let depth = 0; unit && depth < 4 && !slotUnit(unit); depth++) unit = unit.parent;
        if (!unit) return false;
        unit = slotUnit(unit);
        let row = unit.parent, holders = [];
        for (let depth = 0; row && depth < 3; depth++, row = row.parent) {
            holders = [ ...row["âè"] || [], ...row["ÉE"] || [] ].map(holder => ({
                holder: holder,
                root: slotUnit(holder)
            })).filter(x => x.root);
            if ((holders.length === 5 || holders.length === 6) && holders.some(x => x.root === unit)) break;
            holders = [];
        }
        if (!holders.length) return false;
        icon["À"] && (S.hudSlotSprite = icon);
        (S.hudSourceNodes || (S.hudSourceNodes = new WeakSet)).add(icon);
        for (const k of [ "âè", "ÉE" ]) Array.isArray(row[k]) && observeRenderArray(row[k], true, true);
        for (const {holder: holder} of holders) for (const k of [ "âè", "ÉE" ]) Array.isArray(holder[k]) && observeRenderArray(holder[k], true, true);
        holders.sort((a, b) => Number(a.holder["ë"]?.["É"] || 0) - Number(b.holder["ë"]?.["É"] || 0));
        if (new Set(holders.map(x => Number(x.holder["ë"]?.["É"] || 0))).size !== holders.length) return false;
        S.hudTemplates || (S.hudTemplates = {
            slots: [],
            materials: [],
            ammo: []
        });
        for (let rank = 0; rank < holders.length; rank++) {
            const {holder: holder, root: root} = holders[rank], slotIndex = holders.length === 6 ? rank : rank + 1;
            if (slotIndex === 0) continue;
            const nodes = hudWalk(root, 80), background = nodes.find(n => hudKinds(hudPath(n)) === "slots") || root;
            background["À"] && (S.hudSlotSprite = background);
            S.hudSourceNodes.add(background);
            const previous = S.hudTemplates.slots.findIndex(r => r.slotIndex === slotIndex);
            if (previous >= 0 && S.hudTemplates.slots[previous].root === root) continue;
            const w = Math.abs(Number(background.width)), h = Math.abs(Number(background.height));
            if (!(w > 0 && h > 0) || !root.add) continue;
            const record = {
                root: root,
                icon: background,
                nodes: nodes,
                kind: "slots",
                path: hudPath(background),
                slotIndex: slotIndex,
                x: Number(holder["ë"]?.["É"]) || 0,
                y: Number(holder["ë"]?.["Ä"]) || 0,
                width: w,
                height: h,
                slotBounds: {
                    left: -w / 2,
                    top: -h / 2,
                    width: w,
                    height: h
                },
                holder: holder
            };
            const artwork = nodes.find(n => n !== background && isSlotArtwork(hudPath(n)) && n["À"]);
            artwork && (S.hudArtStyles || (S.hudArtStyles = new Map)).set(hudPath(artwork), {
                ratio: artwork.width / w,
                angle: Number(artwork.A) || 0,
                size: Number(artwork.size) || 1
            });
            previous >= 0 ? S.hudTemplates.slots[previous] = record : S.hudTemplates.slots.push(record);
            S.hudVersion = (S.hudVersion || 0) + 1;
            (S.hudSlotLogs || 0) < 24 && (S.hudSlotLogs = (S.hudSlotLogs || 0) + 1);
        }
        S.hudStatus = {
            captured: true,
            counts: Object.fromEntries(Object.entries(S.hudTemplates).map(([k, v]) => [ k, v.length ])),
            replica: "native slot holders and material/stack templates; visual comparison required"
        };
        ownMaterialWarnings();
        return true;
    };
    const hudInspect = n => {
        const path = hudPath(n), kind = hudKinds(path);
        path && n?.["À"]?.["ÁÄ"] && (S.hudNativeImages || (S.hudNativeImages = new Map)).set(path, n["À"]["ÁÄ"]);
        if (!kind || S.hudSourceNodes?.has(n)) return;
        S.hudSourceNodes || (S.hudSourceNodes = new WeakSet);
        let ancestry = n;
        for (let depth = 0; ancestry && depth < 12; depth++, ancestry = ancestry.parent) {
            if (ancestry.type === "particle" || String(ancestry.type || "").startsWith("brio")) return;
            for (const r of collectPlayers()) if (ancestry === r["â"] || ancestry === r["Eâ"]) return;
        }
        if (kind === "slots") {
            captureSlotRow(n);
            return;
        }
        if (kind !== "slots") {
            let p = n, validated = false;
            for (let depth = 0; p && depth < 3; depth++, p = p.parent) {
                const nodes = hudWalk(p, 80), icons = nodes.filter(x => hudKinds(hudPath(x)) === kind);
                if (icons.length !== 1) break;
                if (kind === "ammo" && nodes.some(x => hudKinds(hudPath(x)) === "slots")) return;
                if (nodes.some(x => (x.type === "text" || typeof x.text === "string") && /^\d+$/.test(String(x.text)))) {
                    validated = true;
                    break;
                }
            }
            if (!validated) return;
        }
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) for (const k of [ "âè", "ÉE" ]) Array.isArray(p[k]) && observeRenderArray(p[k], true, true);
        S.hudInspectionCount = (S.hudInspectionCount || 0) + 1;
        let unit = n;
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) {
            const nodes = hudWalk(p, 80), icons = nodes.filter(x => hudKinds(hudPath(x)) === kind);
            if (icons.length !== 1) break;
            unit = p;
            if (nodes.some(x => x.type === "text" || typeof x.text === "string")) break;
        }
        const nodes = hudWalk(unit);
        unit.constructor;
        if (nodes.some(x => x.type === "particle" || /^\+\d+$/.test(String(x.text || "")))) return;
        S.hudTemplates || (S.hudTemplates = {
            slots: [],
            materials: [],
            ammo: []
        });
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
            if (art && n.width) {
                const styles = S.hudArtStyles || (S.hudArtStyles = new Map);
                styles.set(hudPath(art), {
                    ratio: art.width / n.width,
                    angle: Number(art.A) || 0,
                    size: Number(art.size) || 1
                });
            }
        }
        S.hudSourceNodes.add(n);
        previous >= 0 ? S.hudTemplates[kind][previous] = record : S.hudTemplates[kind].push(record);
        S.hudVersion = (S.hudVersion || 0) + 1;
        S.hudStatus = {
            captured: true,
            counts: Object.fromEntries(Object.entries(S.hudTemplates).map(([k, v]) => [ k, v.length ])),
            replica: "V47 inventory appearance proven by user; captured native rows with documented fallback"
        };
        (S.hudWidgetLogs || 0) < 32 && (S.hudWidgetLogs = (S.hudWidgetLogs || 0) + 1);
        ownMaterialWarnings();
    };
    const hudBounds = record => {
        let left = 1 / 0, right = -1 / 0, top = 1 / 0, bottom = -1 / 0;
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
    const liveSlotWarningBounds = rec => {
        const holder = rec.holder;
        if (!holder?.parent) return null;
        const nodes = hudWalk(holder, 32).filter(n => n !== holder && n.visible !== false && !(Number.isFinite(n.opacity) && n.opacity <= 0));
        const images = nodes.filter(n => hudKinds(hudPath(n)) === "slots" && Number(n.width) > 0 && Number(n.height) > 0);
        const background = images.includes(rec.icon) ? rec.icon : images[images.length - 1] || nodes.find(n => n.type === "rectangle" && n.width === n.height && n.width > 0);
        if (!background) return null;
        let a = 1, b = 0, c = 0, d = 1, x = 0, y = 0, n = background, depth = 0;
        while (n && n !== holder && depth++ < 8) {
            const parent = n.parent;
            if (!parent || ![ ...parent["âè"] || [], ...parent["ÉE"] || [] ].includes(n)) return null;
            if (n.visible === false || Number.isFinite(n.opacity) && n.opacity <= 0) return null;
            const size = Number.isFinite(n.size) ? n.size : 1, angle = Number(n.A) || 0, ca = Math.cos(angle) * size, sa = Math.sin(angle) * size;
            const na = ca * a - sa * b, nb = sa * a + ca * b, nc = ca * c - sa * d, nd = sa * c + ca * d;
            const nx = ca * x - sa * y + (Number(n["ë"]?.["É"]) || 0), ny = sa * x + ca * y + (Number(n["ë"]?.["Ä"]) || 0);
            a = na;
            b = nb;
            c = nc;
            d = nd;
            x = nx;
            y = ny;
            n = parent;
        }
        if (n !== holder) return null;
        const hw = Math.abs(Number(background.width)) / 2, hh = Math.abs(Number(background.height)) / 2;
        const dx = Math.abs(a) * hw + Math.abs(c) * hh, dy = Math.abs(b) * hw + Math.abs(d) * hh;
        return {
            left: x - dx,
            top: y - dy,
            width: 2 * dx,
            height: 2 * dy
        };
    };
    const ownMaterialWarnings = () => {
        if (!S.renderer || !S.hudTemplates) return;
        for (const [owner, node] of S.hudWarnNodes || []) if (!owner.parent || ![ ...owner.parent["âè"] || [], ...owner.parent["ÉE"] || [] ].includes(owner) || ![ ...owner["âè"] || [], ...owner["ÉE"] || [] ].includes(node)) {
            try {
                owner.remove?.(node);
            } catch (_) {}
            S.hudWarnNodes.delete(owner);
        }
        for (const rec of [ ...S.hudTemplates.materials, ...S.hudTemplates.slots ]) {
            const ammo = rec.kind === "slots", i = ammo ? rec.slotIndex : materialIndex(rec.path);
            const owner = ammo ? rec.holder : rec.root;
            if (i < 0 || !owner?.add) continue;
            const existing = S.hudWarnNodes?.get(owner);
            if (existing?.__brioHudRecord === rec) continue;
            if (existing) {
                owner.remove?.(existing);
                S.hudWarnNodes.delete(owner);
            }
            S.hudWarnNodes || (S.hudWarnNodes = new Map);
            const bounds = ammo ? rec.slotBounds : hudBounds(rec), draw = (ctx, s) => {
                const liveBounds = ammo ? liveSlotWarningBounds(rec) : bounds;
                if (!liveBounds) return;
                const e = exFast(), low = ammo ? nativeSlotLow(e, S.renderer, i, rec) : belowWarning(e, "materials", i, matState(S.renderer)?.[i]);
                if (!low) return;
                ctx.save();
                try {
                    ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
                    ctx.shadowColor = "#ff2020";
                    ctx.shadowBlur = 12 / s;
                    ctx.strokeStyle = "#ff2020";
                    ctx.lineWidth = 3 / s;
                    ctx.strokeRect((liveBounds.left - 3) / s, (liveBounds.top - 3) / s, (liveBounds.width + 6) / s, (liveBounds.height + 6) / s);
                } finally {
                    ctx.restore();
                }
            };
            const overlay = nativeNode(draw);
            overlay.__brioHudRecord = rec;
            owner.add(overlay);
            S.hudWarnNodes.set(owner, overlay);
            const signature = JSON.stringify([ ammo ? "slot" : "material", i, bounds ]);
            S.hudWarningSignatures || (S.hudWarningSignatures = new Set);
            !S.hudWarningSignatures.has(signature) && S.hudWarningSignatures.size < 64 && S.hudWarningSignatures.add(signature);
        }
    };
    const cloneNativeWidget = rec => {
        let count = 0;
        const pairs = [], seen = new Map;
        const clone = n => {
            if (++count > 80 || seen.has(n)) throw Error("native HUD widget cycle/limit");
            const C = n.constructor;
            if (typeof C !== "function") throw Error("native HUD constructor unavailable");
            let args;
            args = n["À"] ? [ n["À"], 0, 0, n.width, n.height, n.opacity ] : n.type === "text" || typeof n.text === "string" ? [ n.text, 0, 0, n.fillStyle || n["Äe"] || "#fff", n.fontFamily || "Arial", n.fontSize || 16, n.fontWeight || "bold", n.opacity, n.textAlign || "center" ] : n.type === "arc" ? [ 0, 0, n["éã"], n["Äe"], n.endAngle || Math.PI * 2, n.startAngle || 0, n.lineWidth ] : n.width !== void 0 && n.height !== void 0 ? [ 0, 0, n.width, n.height, n["Äe"] || n.fillStyle, n.opacity ] : [];
            const plain = C === Object || C === W.Object || C.name === "Object";
            const c = plain ? Object.create(Object.getPrototypeOf(n)) : Reflect.construct(C, args);
            if (plain) {
                c["âè"] = [];
                c["ÉE"] = [];
                c["ë"] = {
                    "É": 0,
                    "Ä": 0
                };
                for (const k of Object.keys(n)) typeof n[k] === "function" && (c[k] = n[k]);
            }
            c.__brioHudClone = true;
            seen.set(n, c);
            for (const [k, v] of Object.entries(n)) {
                if ([ "parent", "canvas", "aãÁ", "text", "ë", "âè", "ÉE" ].includes(k) || typeof v === "function") continue;
                if (v == null || [ "number", "string", "boolean" ].includes(typeof v)) try {
                    c[k] = v;
                } catch (_) {}
            }
            n["À"] && (c["À"] = n["À"]);
            if (c["ë"] && n["ë"]) {
                c["ë"]["É"] = n["ë"]["É"];
                c["ë"]["Ä"] = n["ë"]["Ä"];
            }
            typeof n.text !== "string" && typeof n.text !== "number" || (c.text = n.text);
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
            n.text && typeof n.text === "object" && (c.text = seen.get(n.text));
            return c;
        };
        return {
            root: clone(rec.root),
            pairs: pairs,
            record: rec
        };
    };
    const ensureNativeSlotArt = unit => {
        if (unit.pairs.some(p => isSlotArtwork(p.path))) return;
        const background = unit.pairs.find(p => /\/inv[0-6]\.png$/.test(p.path)) || (S.hudSlotSprite ? {
            source: S.hudSlotSprite,
            node: S.hudSlotSprite
        } : null);
        if (!background || typeof unit.root.add !== "function") return;
        const source = background.source, art = Object.create(Object.getPrototypeOf(background.node));
        for (const [key, value] of Object.entries(background.node)) [ "parent", "ë", "âè", "ÉE", "canvas" ].includes(key) || (art[key] = value);
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
        S.emptySlotArtLogged || (S.emptySlotArtLogged = true);
    };
    const nativeInvFor = r => {
        if (!S.hudTemplates?.slots?.length) return null;
        S.nativeInvClones || (S.nativeInvClones = new Map);
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
                kind === "slots" && ensureNativeSlotArt(unit);
                units.push(unit);
            } catch (e) {
                rec.unavailable || (rec.unavailable = true);
            }
            units.length && rows.push({
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
    const inventoryBounds = rec => rec.kind === "slots" && rec.slotBounds || hudBounds(rec);
    const REMOTE_ROW_WIDTH = 139, REMOTE_ROW_HEIGHT = {
        slots: 26.2,
        materials: 25.2,
        ammo: 18
    }, remoteRowAdvance = kind => ({
        slots: 30,
        materials: 29,
        ammo: 21
    }[kind]);
    const drawNativeInv = (ctx, s, r) => {
        try {
            const cache = nativeInvFor(r);
            if (!cache?.rows.length) return new Set;
            const drawn = new Set;
            const ex = exFast(), m = matState(r), ammo = Array.isArray(r["åæ"]) ? r["åæ"] : [], slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [];
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
                    y += remoteRowAdvance(row.kind);
                    continue;
                }
                drawn.add(row.kind);
                const widths = row.units.map(u => inventoryBounds(u.record).width), height = REMOTE_ROW_HEIGHT[row.kind], factor = Math.min(height / Math.max(...widths, 1), height / Math.max(...row.units.map(u => inventoryBounds(u.record).height), 1)), gap = row.kind === "materials" ? 0 : (REMOTE_ROW_WIDTH / factor - widths.reduce((a, b) => a + b, 0)) / (widths.length - 1), total = row.kind === "materials" ? widths.reduce((a, b) => a + b, 0) : REMOTE_ROW_WIDTH / factor;
                let x = -total / 2, maxHeight = 0;
                row.units.forEach((u, i) => {
                    const b = inventoryBounds(u.record);
                    let value;
                    const material = materialIndex(u.record.path), ammoIndex = +(u.record.path.match(/(?:ammo|stack)([0-4])/) || [])[1];
                    row.kind === "materials" && (value = m[material]);
                    row.kind === "ammo" && (value = ammo[ammoIndex]);
                    for (const pair of u.pairs) {
                        if (row.kind !== "slots" && (pair.source.type === "text" || typeof pair.source.text === "string") && /^\d+$/.test(String(pair.source.text))) {
                            pair.node.text = Number.isFinite(value) ? String(value) : "?";
                            pair.node.__brioLow = belowWarning(ex, row.kind, row.kind === "materials" ? material : ammoIndex, value);
                            pair.node.__brioLow && "fillStyle" in pair.node && pair.source.fillStyle !== "#000" ? pair.node.fillStyle = warningColor(true) : "fillStyle" in pair.source && (pair.node.fillStyle = pair.source.fillStyle);
                        }
                        if (row.kind === "slots" && (pair.source.type === "text" || typeof pair.source.text === "string")) {
                            pair.node.opacity = 0;
                            if (!pair.node.__brioSlotAmmoHidden) {
                                pair.node.__brioSlotAmmoHidden = true;
                                for (const method of [ "éa", "Eââ" ]) typeof pair.node[method] === "function" && (pair.node[method] = () => {});
                            }
                        }
                        if (row.kind === "slots" && hudKinds(pair.path) === "ammo") {
                            const ai = S.ammoTypeMap?.get(String(slots[i]?.type || "").toLowerCase());
                            if (Number.isInteger(ai)) {
                                const path = S.hudAssetPaths?.get("inventoryammo" + ai) || "/buildart/ammo" + ai + ".png";
                                pair.node["À"] = {
                                    src: path,
                                    "ÁÄ": S.hudNativeImages?.get(path) || invImage(path)
                                };
                                pair.node.opacity = 1;
                            } else pair.node.opacity = 0;
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
                                if (base) {
                                    pair.node.width = base.width * style.ratio;
                                    pair.node.height = base.height * style.ratio;
                                    pair.node.A = style.angle;
                                    pair.node.size = style.size;
                                }
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
                    typeof n["éa"] === "function" ? n["éa"](ctx, s, 1) : typeof n["Eââ"] === "function" && n["Eââ"](ctx, s);
                    ctx.restore();
                    slots[i]?.type === "empty" && row.kind === "slots" && drawEmptyX(ctx, x * factor, y, b.width * factor, b.height * factor, s);
                    row.kind === "slots" && String(slots[i]?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex, r, i + 1) && drawRemoteChargeWarning(ctx, x * factor, y, b.width * factor, b.height * factor, s);
                    x += b.width + gap;
                    maxHeight = Math.max(maxHeight, b.height * factor);
                });
                y += remoteRowAdvance(row.kind);
            }
            return drawn;
        } finally {}
    };
    const resetNativeHud = () => {
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
        S.hudLastReport = -1 / 0;
        S.hudStatus = {
            captured: false
        };
        S.hudVersion = 0;
        S.hudWarningSignatures = new Set;
        S.hudSlotLogs = 0;
        S.hudSlotSprite = null;
        S.slotWarningLast = null;
        S.slotWarningLogs = 0;
        S.hudPending = new WeakSet;
        S.hudInspectError = false;
        S.emptySlotArtLogged = false;
        S.sceneStartError = false;
        S.sceneSkipped = 0;
    };
    const isSlotArtwork = path => !!path && path !== "/" && !hudKinds(path) && !/\/(?:ammo|inventoryammo)[0-4]\.png$|\/disabled\.png$/.test(path);
    const nativeSlotAmmoIndex = (r, index, rec) => {
        const type = String(r?.["Åé"]?.[index]?.type || "").toLowerCase();
        if (!GUN_TYPES.has(type)) return;
        if (type === "signal flare") return;
        if (type === "grappler") return 5;
        const emblem = rec?.nodes?.find(n => /\/ammo[0-4]\.png$/.test(hudPath(n)));
        const i = emblem ? +hudPath(emblem).match(/ammo([0-4])/)[1] : S.ammoTypeMap?.get(type);
        return Number.isInteger(i) && i >= 0 && i < 5 ? i : void 0;
    };
    const nativeSlotLow = (e, r, index, rec) => String(r?.["Åé"]?.[index]?.type || "").toLowerCase() !== "signal flare" && belowWarning(e, "ammo", nativeSlotAmmoIndex(r, index, rec), nativeSlotAmmo(r, index, rec));
    const drawRemoteChargeWarning = (ctx, x, y, width, height, scale) => {
        ctx.save();
        try {
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
            ctx.strokeStyle = ctx.shadowColor = "#ff2020";
            ctx.shadowBlur = 8 / scale;
            ctx.lineWidth = 1.2 / scale;
            ctx.strokeRect((x - 1) / scale, (y - 1) / scale, (width + 2) / scale, (height + 2) / scale);
        } finally {
            ctx.restore();
        }
    };
    const nativeSlotAmmo = (r, index, rec) => {
        const type = String(r?.["Åé"]?.[index]?.type || "").toLowerCase();
        if (!GUN_TYPES.has(type)) return;
        const loaded = r?.["áAæ"]?.[index - 1];
        if (!Number.isFinite(loaded) || loaded < 0) return;
        if (type === "grappler" || type === "signal flare") return loaded;
        const ammoIndex = nativeSlotAmmoIndex(r, index, rec);
        const reserve = r?.["åæ"]?.[ammoIndex];
        return Number.isFinite(reserve) && reserve >= 0 ? loaded + reserve : void 0;
    };
    const slotArtStyle = type => {
        const raw = String(type || "").toLowerCase(), captured = S.hudArtStyles?.get(itemPath(type));
        if (captured) return captured;
        const gun = GUN_TYPES.has(raw), style = {
            ratio: gun ? 1.04 : .7,
            angle: gun ? Math.PI / 4 : 0,
            size: 1
        };
        raw !== "deagle" && raw !== "grappler" || (style.size = .8);
        raw === "revolver" && (style.size = .9);
        raw !== "charge rifle" && raw !== "grenade sniper" && raw !== "landmine" || (style.size = 1.1);
        if (/feesh$/.test(raw)) {
            style.angle = Math.PI / 4;
            style.size = 1.2;
        }
        [ "grenade", "mirv", "smokegrenade", "flashbang", "molotov", "flexsplash", "gravitynade", "invgravitynade", "candycane", "icicle" ].includes(raw) && (style.size = 1.2);
        return style;
    };
    const drawSlotArt = (ctx, path, type, x, y, size, s) => {
        const style = slotArtStyle(type), wh = size * style.ratio * style.size;
        ctx.save();
        ctx.translate((x - size * .02) / s, y / s);
        ctx.rotate(style.angle);
        drawImg(ctx, path, -wh / 2, -wh / 2, wh, wh, s);
        ctx.restore();
    };
    const drawEmptyX = (ctx, x, y, w, h, s) => {
        ctx.save();
        ctx.strokeStyle = "#ff2020";
        ctx.lineWidth = 1.2 / s;
        ctx.beginPath();
        ctx.moveTo((x + 2) / s, (y + 2) / s);
        ctx.lineTo((x + w - 2) / s, (y + h - 2) / s);
        ctx.moveTo((x + w - 2) / s, (y + 2) / s);
        ctx.lineTo((x + 2) / s, (y + h - 2) / s);
        ctx.stroke();
        ctx.restore();
    };
    const INV_SCALE = {
        small: .9375,
        medium: 1.25,
        large: 1.625,
        xl: 2.0625
    }, invScale = () => INV_SCALE[exFast().inventorySize] || 1.25, invImage = p => {
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
            im.__brioFailed || (im.__brioFailed = true);
        };
        im.src = p;
        S.invAssets.set(p, im);
        return im;
    }, itemPath = type => {
        const raw = String(type || "").toLowerCase().trim();
        if (!raw || raw === "empty" || raw === "pickaxe") return null;
        const path = S.hudAssetPaths?.get(raw) || `/buildart/${raw.replace(/[^a-z0-9]/g, "")}.png`;
        (S.hudResolvedTypes || (S.hudResolvedTypes = new Set)).has(raw) || S.hudResolvedTypes.add(raw);
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
    }, warningColor = low => low && Math.sin(performance.now() / 140) >= 0 ? "#ff2020" : "#fff", drawHudText = (ctx, v, x, y, s, low = false, size = 8) => {
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
    }, drawTxt = (ctx, v, x, y, s, low = false) => drawHudText(ctx, v, x, y, s, low), drawInv = (ctx, scale, r) => {
        try {
            const drawn = drawNativeInv(ctx, scale, r) || new Set;
            const ex = exFast(), rows = [];
            ex.inventorySlots && rows.push("slots");
            ex.inventoryMaterials && rows.push("mats");
            ex.inventoryAmmo && rows.push("ammo");
            let yy = 0;
            for (const row of rows) {
                if (drawn.has(row === "mats" ? "materials" : row)) {
                    yy += remoteRowAdvance(row === "mats" ? "materials" : row);
                    continue;
                }
                if (row === "slots") {
                    const slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [], sz = REMOTE_ROW_HEIGHT.slots, g = 2, x0 = -REMOTE_ROW_WIDTH / 2;
                    for (let i = 0; i < 5; i++) {
                        const sl = slots[i], x = x0 + i * (sz + g), raw = (String(sl?.type || "").toLowerCase().replace(/[^a-z0-9]/g, ""),
                        Number(sl?.["äã"])), bg = Number.isFinite(raw) && raw >= 0 && raw <= 6 ? raw : 0;
                        drawImg(ctx, `/buildart/inv${bg}.png`, x, yy, sz, sz, scale);
                        const path = itemPath(sl?.type);
                        path ? drawSlotArt(ctx, path, sl?.type, x + sz / 2, yy + sz / 2, sz, scale) : sl?.type === "empty" && drawEmptyX(ctx, x, yy, sz, sz, scale);
                        String(sl?.type || "").toLowerCase() === "grappler" && nativeSlotLow(ex, r, i + 1) && drawRemoteChargeWarning(ctx, x, yy, sz, sz, scale);
                    }
                } else if (row === "mats") {
                    const m = matState(r), vals = [ [ "/buildart/wood.png", m[0] ], [ "/buildart/brick.png", m[1] ], [ "/buildart/metal.png", m[2] ], [ "/buildart/scrap.png", m[3] ] ], cell = REMOTE_ROW_WIDTH / 4, x0 = -REMOTE_ROW_WIDTH / 2;
                    ctx.fillStyle = "#000b";
                    ctx.fillRect(x0 / scale, (yy - 1) / scale, REMOTE_ROW_WIDTH / scale, 25.2 / scale);
                    vals.forEach(([p, v], i) => {
                        const x = x0 + i * cell;
                        drawImg(ctx, p, x, yy, 20, 20, scale);
                        drawHudText(ctx, v ?? "?", x + 27, yy + 10, scale, belowWarning(ex, "materials", i, v), 10);
                    });
                } else {
                    const a = Array.isArray(r["åæ"]) ? r["åæ"].slice(0, 5) : [], cell = 27, x0 = 5 * -cell / 2;
                    ctx.fillStyle = "#000b";
                    ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 5 + 4) / scale, 18 / scale);
                    for (let i = 0; i < 5; i++) {
                        const x = x0 + i * cell;
                        drawImg(ctx, S.hudAssetPaths?.get("stack" + i) || `/buildart/stack${i}.png`, x, yy, 14, 14, scale);
                        drawTxt(ctx, a[i] ?? "?", x + 20, yy + 7, scale, belowWarning(ex, "ammo", i, a[i]));
                    }
                }
                yy += remoteRowAdvance(row === "mats" ? "materials" : row);
            }
        } finally {}
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
    }), attachInv = r => {
        if (!r || isLocal(r) || S.invNodes.has(r) || !r["Eâ"]?.add) return;
        const n = makeInv(r);
        try {
            r["Eâ"].add(n);
            S.invNodes.set(r, n);
        } catch (e) {
            productionError("Runtime", String(e));
        }
    };
    const automaticPhase = () => {
        const r = S.renderer;
        r && S.matchPhase !== "match" && Number.isFinite(r["ÀËá"]) && r["ÀËá"] >= 0 && Number.isFinite(r["âëä"]) && r["âëä"] > 0 && setMatchPhase("native glidingTicks/maxGlidingTicks");
    };
    const setMatchPhase = reason => {
        if (S.matchPhase === "match") return;
        S.matchPhase = "match";
        S.matchPhaseAt = performance.now();
    };
    const nearestBy = pred => collectWorld().filter(o => pred(o) && worldPos(o)).sort((a, b) => {
        const me = worldPos(S.renderer) || {
            x: 0,
            y: 0
        }, pa = worldPos(a), pb = worldPos(b);
        return Math.hypot(pa.x - me.x, pa.y - me.y) - Math.hypot(pb.x - me.x, pb.y - me.y);
    })[0] || null, targetOnScreen = o => {
        const p = worldPos(o), sp = projectWorld(p);
        return !!(sp && sp.x >= sp.rect.left && sp.x <= sp.rect.right && sp.y >= sp.rect.top && sp.y <= sp.rect.bottom);
    }, indicatorTick = () => {
        indicatorsV40();
        v55Indicators();
    };
    const meteorAutoStop = () => {
        const h = S.meteorAuto;
        h && h.proto.add === h.wrap && Object.defineProperty(h.proto, "add", h.desc);
        S.meteorAuto = null;
        for (const restores of S.meteorObservers?.values() || []) for (const restore of restores.reverse()) restore();
        S.meteorObservers?.clear();
        S.meteorAutoTimer && clearInterval(S.meteorAutoTimer);
        S.meteorAutoTimer = 0;
    }, meteorCandidate = (node, array = []) => {
        if (S.retiredMarkers?.has(node)) return;
        const path = nativeResourcePath(node?.icon?.["À"] || node?.["À"]);
        path === "/buildart/ping-meteor-icon.png" && node.parent?.icon === node && (node = node.parent);
        if (exFast().permanentMeteor && [ "/buildart/ping-meteor-icon.png", "/buildart/ping-meteor.png" ].includes(path) && !S.meteorSeen?.has(node) && !S.meteorPending?.has(node)) {
            (S.meteorPending || (S.meteorPending = new WeakSet)).add(node);
            holdMeteor(node, array);
        }
    }, meteorScan = () => {
        try {
            if (!S.renderer || !nativeScanNeeded(exFast())) return;
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
            S.sceneScanLogged || (S.sceneScanLogged = true);
        } finally {}
    }, meteorAutoStart = reason => {
        meteorAutoStop();
        if (S.destroyed || !S.renderer || !nativeScanNeeded(exFast())) return;
        const tick = () => {
            try {
                meteorScan();
            } catch (e) {
                if (!S.sceneStartError) {
                    S.sceneStartError = true;
                    productionError("Runtime", "scene scan: " + String(e));
                }
            }
        };
        S.meteorAutoTimer = setInterval(tick, 1e3);
        tick();
    };
    const applyRemote = async r => {
        if (!r || isLocal(r)) return;
        const epoch = S.runEpoch;
        rememberRemote(r);
        const e = exFast();
        try {
            remoteInformation(r);
            if (S.destroyed || epoch !== S.runEpoch) return;
            e.nearestPlayer && attachTrack(r);
            featurePlayer(r);
            (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo) && attachInv(r);
        } catch (x) {
            productionError("Runtime", String(x));
        }
    }, queueRemote = r => {
        if (!r || isLocal(r) || S.remoteQueued.has(r)) return;
        S.remoteQueued.add(r);
        const auditEpoch = S.runEpoch;
        for (const ms of [ 0, 250, 1200, 3e3 ]) setTimeout(() => {
            S.destroyed || S.runEpoch !== auditEpoch || applyRemote(r);
        }, ms);
    }, queueWorld = o => {
        if (!o || S.worldQueued.has(o)) return;
        S.worldQueued.add(o);
        S.runEpoch;
        const epoch = S.runEpoch;
        for (const ms of [ 0, 250, 1200 ]) setTimeout(() => {
            if (S.destroyed || S.runEpoch !== epoch) return;
            exFast();
            featureWorld(o);
        }, ms);
    }, handleAdded = (x, a) => {
        if (x?.__brioHudClone || String(x?.type || "").startsWith("brio")) return;
        try {
            meteorCandidate(x, a);
            sceneObserve(x?.parent);
            isPlayer(x) && (!S.renderer && localNameMatch(x) ? onLocal(x, a) : S.renderer && !isLocal(x) && queueRemote(x));
            captureRoof(x);
            hudCandidate(x);
            S.capture && sceneObserve(x);
            if (isWorld(x)) {
                featureWorld(x);
                patchArray(a);
                queueWorld(x);
            }
        } catch (e) {
            S.errors.length < 100 && productionError("Runtime", "native capture: " + String(e));
        }
    };
    const patchArray = a => {
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
    }, restoreArrays = () => {
        for (const [a, h] of S.arrayHooks) try {
            h.dp ? Object.defineProperty(a, "push", h.dp) : delete a.push;
            h.du ? Object.defineProperty(a, "unshift", h.du) : delete a.unshift;
        } catch (_) {}
        S.arrayHooks.clear();
    }, onLocal = (r, a) => {
        if (S.renderer) return;
        S.renderer = r;
        S.rendererArray = a;
        S.native = nativeSnap(r);
        S.runEpoch;
        const epoch = S.runEpoch;
        setTimeout(() => {
            S.renderer !== r || S.destroyed || epoch !== S.runEpoch || meteorAutoStart("capture timer");
        }, 0);
        patchArray(a);
        attachLocalTrack(r);
        S.phaseTimer = setInterval(automaticPhase, 250);
        featurePlayer(r);
        applyLocal();
        for (const x of a) isPlayer(x) && !isLocal(x) && queueRemote(x);
        S.featureTimer || (S.featureTimer = setInterval(featureTick, 2e3));
        const e = extrasState();
        e.nearestPlayer && !S.nearestTimer && (S.nearestTimer = setInterval(nearestTick, 250));
        e.identifyBots;
        !e.nearestChest && !e.nearestAirdrop || S.indicatorTimer || (S.indicatorTimer = setInterval(indicatorTick, 500));
        maybeStop();
    }, goals = () => ({
        renderer: !!S.renderer,
        roofs: !extrasState().transparentRoofs || S.roofSaved.size === 21
    }), stopCapture = why => {
        const c = S.capture;
        if (!c) return;
        clearTimeout(c.timer);
        Array.prototype.push === c.hp && (Array.prototype.push = c.op);
        Array.prototype.unshift === c.hu && (Array.prototype.unshift = c.ou);
        S.capture = null;
    }, maybeStop = () => {
        const g = goals();
        g.renderer && g.roofs && stopCapture("goals-met");
    };
    const tagName = () => {
        const b = q("#nameBox");
        if (!b) return "uL#";
        let raw = String(b.value || "");
        raw = raw.replace(/^uL#/, "");
        const max = Number(b.maxLength) > 0 ? Number(b.maxLength) : 1 / 0;
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
    }, arm = () => {
        S.runEpoch = (S.runEpoch || 0) + 1;
        v55Reset(true);
        S.renderer;
        stopPacketObserver();
        stopRenderDiscovery();
        restoreRenderArrays();
        clearInterval(S.phaseTimer);
        S.phaseTimer = 0;
        S.matchPhase = "lobby";
        S.matchPhaseAt = 0;
        S.emoteResolved = [];
        restoreResourceMaps();
        restoreCosmetics();
        restoreEmote();
        restoreSrc();
        productionReleaseResources();
        S.matchEpoch = (S.matchEpoch || 0) + 1;
        productionBeginMatch();
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
        for (const key of [ "nearestUi", "chestUi", "airdropUi", "stormCenterUi" ]) S[key] && (S[key].style.display = "none");
        stopCapture("rearm");
        restoreArrays();
        S.renderer = S.native = S.rendererArray = null;
        S.remoteRefs = new Map;
        S.remoteQueued = new WeakSet;
        S.worldQueued = new WeakSet;
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
        S.localName = tagName();
        startPacketObserver();
        startRenderDiscovery("Play");
        const chosen = extrasState(), required = chosen.goodFlippinLuck ? CHALLENGE_TESTS : REQUIRED_TESTS;
        Object.fromEntries(required.map(id => [ id, !!chosen[id] ]));
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
            Array.prototype.push === hp && (Array.prototype.push = op);
            Array.prototype.unshift === hu && (Array.prototype.unshift = ou);
            S.capture?.hp === hp && (S.capture = null);
        }, 12e3);
        S.capture = {
            op: op,
            ou: ou,
            hp: hp,
            hu: hu,
            timer: timer
        };
    }, bindPlay = () => {
        const e = q("#ready") || q("#play") || q("#playButton") || q("#loggedInPlay");
        if (!e) return;
        S.play = e;
        const prep = () => tagName(), go = () => arm();
        e.addEventListener("pointerdown", prep, true);
        e.addEventListener("mousedown", prep, true);
        e.addEventListener("click", go, true);
        S.playHandlers = [ [ "pointerdown", prep ], [ "mousedown", prep ], [ "click", go ] ];
    };
    for (const event of [ "mousemove", "blur", "pagehide" ]) W.addEventListener(event, v66Pointer, {
        capture: true,
        passive: true
    });
    D.addEventListener("visibilitychange", v66Pointer, {
        passive: true
    });
    S.destroy = () => {
        for (const event of [ "mousemove", "blur", "pagehide" ]) W.removeEventListener(event, v66Pointer, true);
        D.removeEventListener("visibilitychange", v66Pointer);
        S.destroyed = true;
        v55Reset(false);
        S.runEpoch = (S.runEpoch || 0) + 1;
        stopPacketObserver();
        stopRenderDiscovery();
        restoreRenderArrays();
        clearInterval(S.phaseTimer);
        S.phaseTimer = 0;
        restoreResourceMaps();
        restoreCosmetics();
        resetNativeHud();
        resetFeatures();
        S.featureTimer && clearInterval(S.featureTimer);
        restoreMarkerHolds();
        stopCapture("destroy");
        restoreArrays();
        restoreSrc();
        restoreEmote();
        S.nearestTimer && clearInterval(S.nearestTimer);
        S.indicatorTimer && clearInterval(S.indicatorTimer);
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
        for (const u of [ S.nearestUi, S.chestUi, S.airdropUi, S.stormCenterUi ]) u?.remove?.();
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
        productionDestroy();
        delete W[K];
    };

    const packetObserver = {
        timer: 0,
        restore: null,
        circleState: null
    };
    const stopPacketObserver = () => {
        clearInterval(packetObserver.timer);
        packetObserver.timer = 0;
        packetObserver.restore?.();
        packetObserver.restore = null;
    };
    const startPacketObserver = () => {
        stopPacketObserver();
        const tick = () => {
            if (S.destroyed) return;
            let codec;
            try {
                codec = typeof msgpack !== "undefined" ? msgpack : W.msgpack;
            } catch (_) {}
            const d = codec && Object.getOwnPropertyDescriptor(codec, "decode");
            if (!packetObserver.restore && typeof d?.value === "function" && (d.configurable || d.writable)) {
                const original = d.value, wrapper = function(...args) {
                    const result = Reflect.apply(original, this, args);
                    try {
                        v55StatsObserve(result);
                    } catch (error) {
                        productionError("Match statistics", error);
                    }
                    return result;
                };
                Object.defineProperty(codec, "decode", {
                    ...d,
                    value: wrapper
                });
                packetObserver.restore = () => {
                    codec.decode === wrapper && Object.defineProperty(codec, "decode", d);
                };
            }
        };
        tick();
        packetObserver.timer = setInterval(tick, 1e3);
    };
    const numericSourceConstants = (ast, cutoff) => {
        const values = new Map;
        const readNumber = node => {
            if (!node) return;
            if (node.type === "Literal" && [ "number", "boolean" ].includes(typeof node.value)) return node.value;
            if (node.type === "Identifier") return values.get(node.name);
            if (node.type === "UnaryExpression") {
                const v = readNumber(node.argument);
                if (v === void 0) return;
                if (node.operator === "-") return -v;
                if (node.operator === "+") return +v;
                if (node.operator === "!") return !v;
                if (node.operator === "~") return ~v;
            }
            if (node.type === "BinaryExpression") {
                const a = readNumber(node.left), b = readNumber(node.right);
                if (a === void 0 || b === void 0) return;
                switch (node.operator) {
                  case "+":
                    return a + b;

                  case "-":
                    return a - b;

                  case "*":
                    return a * b;

                  case "/":
                    return a / b;

                  case "%":
                    return a % b;

                  case "<<":
                    return a << b;

                  case ">>":
                    return a >> b;

                  case ">>>":
                    return a >>> b;

                  case "&":
                    return a & b;

                  case "|":
                    return a | b;

                  case "^":
                    return a ^ b;

                  case "===":
                  case "==":
                    return a === b;

                  case "!==":
                  case "!=":
                    return a !== b;

                  case "<":
                    return a < b;

                  case ">":
                    return a > b;

                  case "<=":
                    return a <= b;

                  case ">=":
                    return a >= b;
                }
            }
            return;
        };
        const invalidate = node => {
            if (!node || typeof node !== "object") return;
            node.type === "AssignmentExpression" && node.left?.type === "Identifier" && values.delete(node.left.name);
            node.type === "UpdateExpression" && node.argument?.type === "Identifier" && values.delete(node.argument.name);
            for (const v of Object.values(node)) Array.isArray(v) ? v.forEach(invalidate) : v && typeof v === "object" && invalidate(v);
        };
        const execute = node => {
            if (!node || node.start >= cutoff) return;
            if (node.type === "VariableDeclaration") for (const d of node.declarations) {
                if (d.id.type !== "Identifier") continue;
                const v = readNumber(d.init);
                v !== void 0 ? values.set(d.id.name, v) : values.delete(d.id.name);
            } else if (node.type === "ExpressionStatement") execute(node.expression); else if (node.type === "AssignmentExpression" && node.left.type === "Identifier") {
                const v = node.operator === "=" ? readNumber(node.right) : void 0;
                v !== void 0 ? values.set(node.left.name, v) : values.delete(node.left.name);
            } else if (node.type === "IfStatement") {
                const test = readNumber(node.test);
                if (test !== void 0) execute(test ? node.consequent : node.alternate); else {
                    invalidate(node.consequent);
                    invalidate(node.alternate);
                }
            } else node.type === "BlockStatement" ? node.body.forEach(execute) : node.type === "SequenceExpression" ? node.expressions.forEach(execute) : [ "FunctionDeclaration", "EmptyStatement" ].includes(node.type) || invalidate(node);
        };
        const fn = ast.body.find(n => n.type === "ExpressionStatement" && n.expression?.type === "CallExpression" && n.expression.callee?.type === "FunctionExpression")?.expression.callee;
        (fn?.body.body || ast.body).forEach(execute);
        return values;
    };
    const completeSourceAudit = async raw => {
        if (typeof raw !== "string" || raw.length > 2e6) throw Error("Unsupported game source size");
        const ast = parseNative(raw, {
            ecmaVersion: "latest",
            sourceType: "script",
            allowReturnOutsideFunction: true
        }), assets = new Map, dictionaries = new Map, numeric = [];
        const walk = n => {
            if (!n?.type) return;
            if (n.type === "VariableDeclarator" && n.id?.name === "ÀæÀ" && n.init?.type === "ArrayExpression") {
                const index = n.init.elements.findIndex(x => x?.value === "scar");
                index >= 0 && index < 64 && (S.previewScarIndex = index);
            }
            n.type === "VariableDeclarator" && n.id?.name === "äèä" && n.init?.type === "ObjectExpression" && numeric.push(n.init);
            if (n.type === "Property" && typeof n.value?.value === "string" && /^(?:\.?\/)?buildart\//.test(n.value.value)) {
                const k = n.key.name || n.key.value;
                if (typeof k === "string") {
                    assets.set(k, norm(n.value.value));
                    assets.set(k.toLowerCase(), norm(n.value.value));
                }
            }
            if (n.type === "AssignmentExpression" && n.left?.type === "MemberExpression" && n.left.object?.type === "Identifier" && typeof n.right?.value === "string" && n.right.value.length < 100) {
                const key = n.left.computed ? n.left.property.value : n.left.property.name;
                if (typeof key === "string") {
                    const map = dictionaries.get(n.left.object.name) || new Map;
                    map.set(key, n.right.value);
                    dictionaries.set(n.left.object.name, map);
                }
            }
            for (const [k, v] of Object.entries(n)) [ "start", "end", "loc" ].includes(k) || (Array.isArray(v) ? v.forEach(walk) : v?.type && walk(v));
        };
        walk(ast);
        if (S.destroyed) return;
        assets.size && (S.hudAssetPaths = assets);
        for (const map of dictionaries.values()) if ([ ...map.values() ].includes("isPreview") || [ ...map.values() ].includes("weaponSlots")) for (const [k, v] of map) schemaFields.set(k, v);
        for (const object of numeric) {
            const resolved = numericSourceConstants(ast, object.start), pairs = object.properties.map(x => [ String(x.key?.value || x.key?.name || "").toLowerCase(), typeof x.value?.value === "number" ? x.value.value : resolved.get(x.value?.name) ]).filter(([k, v]) => k && Number.isInteger(v) && v >= 0 && v < 5);
            if (pairs.length > (S.ammoTypeMap?.size || 3)) {
                S.ammoTypeMap = new Map(pairs);
                for (const [type] of pairs) assets.has(type) && GUN_TYPES.add(type);
            }
        }
        S.weaponCatalog = new Set([ ...GUN_TYPES ].filter(type => assets.has(type)));
    };
    const schemaFields = new Map;
    new WeakSet;
    const monoCanvases = new Map;
    const resetMonochrome = () => {
        D.documentElement.removeAttribute("data-brio-mono-page");
        for (const [canvas, old] of monoCanvases) {
            canvas.style.filter = old;
            canvas.removeAttribute("data-brio-mono");
        }
        monoCanvases.clear();
    };
    const syncMonochrome = enabled => {
        if (!enabled) {
            resetMonochrome();
            return;
        }
        D.documentElement.setAttribute("data-brio-mono-page", "");
        for (const canvas of D.querySelectorAll("canvas:not(#playerPreview)")) {
            if (monoCanvases.has(canvas)) continue;
            const old = canvas.style.filter;
            monoCanvases.set(canvas, old);
            canvas.style.filter = (old && old !== "none" ? old + " " : "") + "grayscale(1)";
            canvas.setAttribute("data-brio-mono", "");
        }
    };
    const nativeDrawGates = new Map, remoteInfoRecords = (new Map, new Map, new Map);
    let pickupCanvases = new WeakSet, nativeCandidateCache = new WeakMap, gateInsertions = 0;
    const gateAnchor = node => {
        let root = node;
        for (let i = 0; i < 16 && root.parent; i++) root = root.parent;
        return root;
    };
    const restoreNativeGate = (node, record) => {
        node["éa"] === record.wrapper && (record.descriptor ? Object.defineProperty(node, "éa", record.descriptor) : delete node["éa"]);
        nativeDrawGates.delete(node);
        nativeCandidateCache.delete(node);
    };
    let gateRetirementCursor = null;
    const reclaimNativeGates = (budget = 256) => {
        let retired = 0, visits = 0;
        const memberships = new WeakMap;
        gateRetirementCursor || (gateRetirementCursor = nativeDrawGates.entries());
        while (visits++ < budget) {
            let next = gateRetirementCursor.next();
            if (next.done) {
                gateRetirementCursor = null;
                break;
            }
            const [node, record] = next.value;
            let current = node, connected = true, depth = 0;
            while (current.parent && depth++ < 16) {
                const parent = current.parent;
                let children = memberships.get(parent);
                if (!children) {
                    children = new Set;
                    for (const key of [ "âè", "ÉE" ]) for (const child of parent[key] || []) children.add(child);
                    memberships.set(parent, children);
                }
                if (!children.has(current)) {
                    connected = false;
                    break;
                }
                current = parent;
            }
            record.anchor === node && node.parent && (record.anchor = current);
            if (!connected || current !== record.anchor && !current.parent && current !== node || !node.parent && record.anchor !== node) {
                restoreNativeGate(node, record);
                retired++;
            } else connected && current !== record.anchor && (record.anchor = current);
        }
        S.visualGateRetired = (S.visualGateRetired || 0) + retired;
        return retired;
    };
    const gateNativeDraw = (node, key, predicate, before) => {
        if (!node || node.__brioHudClone || String(node.type || "").startsWith("brio")) return;
        let record = nativeDrawGates.get(node);
        if (!record) {
            const original = node["éa"], descriptor = Object.getOwnPropertyDescriptor(node, "éa");
            if (typeof original !== "function" || descriptor && (!descriptor.configurable || !("value" in descriptor))) return;
            const transient = key === "trailParticles";
            ++gateInsertions % 256 === 0 && reclaimNativeGates();
            const cap = transient ? 3072 : 4096;
            if (nativeDrawGates.size >= cap) {
                S.visualGateCap = true;
                S.visualGateCapKeys || (S.visualGateCapKeys = new Set);
                S.visualGateCapKeys.has(key) || S.visualGateCapKeys.add(key);
                return;
            }
            record = {
                original: original,
                descriptor: descriptor,
                gates: new Map,
                anchor: gateAnchor(node)
            };
            const wrapper = function(...args) {
                if (!this?.__brioHudClone) {
                    record.anchor === this && this.parent && (record.anchor = gateAnchor(this));
                    const settings = exFast();
                    for (const [category, rule] of record.gates) {
                        try {
                            rule.before?.(...args);
                        } catch (error) {
                            S.errors.length < 100 && productionError("Runtime", "draw preflight: " + String(error));
                        }
                        if (rule.predicate(settings)) return;
                    }
                }
                return Reflect.apply(original, this, args);
            };
            Object.defineProperty(node, "éa", {
                value: wrapper,
                writable: true,
                configurable: true,
                enumerable: descriptor?.enumerable ?? false
            });
            record.wrapper = wrapper;
            nativeDrawGates.set(node, record);
        }
        record.gates.has(key) || record.gates.set(key, {
            predicate: predicate,
            before: before
        });
    };
    const PICKUP_LOOT_TYPES = new Set([ "mini", "pot", "giantsnowball", "flex", "candycane", "bandages", "medkit", "feesh", "bluefeesh", "alezfeesh", "tryagainfeesh", "thatfeesh", "snowball", "icicle", "grenade", "landmine", "mirv", "smokegrenade", "invgravitynade", "gravitynade", "flashbang", "molotov", "flexsplash", "wood", "brick", "metal", "gear", "scrap", "stack0", "stack1", "stack2", "stack3", "stack4" ]), pickupPopupHidden = e => !!e.noInfoPopups || !!e.goodFlippinLuck || (!!e.maskLootPopup || !!e.noPickupLabels) && (GUN_TYPES.has(String(S.renderer?.["ÁãÀ"] || "").toLowerCase()) || PICKUP_LOOT_TYPES.has(String(S.renderer?.["ÁãÀ"] || "").toLowerCase()));
    const nativeVisualCandidate = node => {
        if (!node || typeof node !== "object" || node.__brioHudClone || String(node.type || "").startsWith("brio")) return;
        const nodes = [ node, node.parent ].filter(n => n && typeof n === "object");
        for (const root of nodes) {
            root["Ée"] === "mapScene" && gateNativeDraw(root, "fullMap", e => !!e.noMinimap);
            v66StormScene(root);
            root["Ée"] === "borderScene" && gateNativeDraw(root, "stormWorld", e => !!e.invisibleStorm);
            const front = root["âè"], back = root["ÉE"], length = (front?.length || 0) + (back?.length || 0), now = performance.now();
            v55InventoryRoot(root);
            v64FlashlightBoundary(root.parent);
            if (length > 48) continue;
            const previous = nativeCandidateCache.get(root);
            if (previous && previous.front === front && previous.back === back && previous.length === length && now - previous.at < 1e3) continue;
            nativeCandidateCache.set(root, {
                front: front,
                back: back,
                length: length,
                at: now
            });
            const children = [ ...root["âè"] || [], ...root["ÉE"] || [] ].filter(n => n && !n.__brioHudClone && !String(n.type || "").startsWith("brio"));
            v55NativeCandidate(root, children);
            const color = n => String(n?.["Äe"] || n?.fillStyle || "").toUpperCase();
            const texts = children.filter(n => n.type === "text");
            for (const text of texts) /^Press (?:Q to Build|Tab to Manage Inventory|Space to Pick Up)$/.test(String(text.text || "")) && gateNativeDraw(text, "infoPrompt", e => !!e.noInfoPopups || !!e.noInventoryHud && /^Press (?:Q|Tab)/.test(text.text));
            const stageArt = children.some(n => /\/buildart\/(?:wood|brick|metal|fortified|campfire|boostpad|shield|drill)[0-2]\.png$/i.test(hudPath(n)));
            stageArt && children.some(n => /\/buildart\/blue[^/]+\.png$/i.test(hudPath(n))) && gateNativeDraw(root.parent || root, "placedBuild", e => !!e.buildsInvisible);
            const rarity = children.find(n => n["À"]?.["ÁÄ"]?.tagName === "CANVAS" && n["À"]["ÁÄ"].width === 200 && n["À"]["ÁÄ"].height === 200 && typeof n["À"]["ÁÄ"]["Äe"] === "string" && n.width === 100 && n.height === 100);
            const pickup = children.find(n => n !== rarity && n["À"] && n.width >= 70 && n.width <= 140 && n.height >= 70 && n.height <= 140 && /\/buildart\//i.test(hudPath(n)));
            if (rarity && pickup) {
                gateNativeDraw(root, "lootAll", e => !!e.lootInvisible && e.lootMaskTier === "all");
                gateNativeDraw(pickup, "lootArt", e => !!e.maskLootArt);
                gateNativeDraw(rarity, "lootRarity", e => !!e.cleanLoot);
            }
            if (children.some(n => /\/(?:waitingIcon|movingIcon|timer|storm|playersIcon)\.png$/i.test(hudPath(n)))) for (const map of children) if (Number(map.width) >= 200 && map.width === map.height && Object.hasOwn(map, "Eââ") && /aaÀ|aÀÁ|drawImage/.test(String(map["Eââ"]))) {
                for (const counter of children) /\/(?:playersIcon|killsIcon|timer|storm|waitingIcon|movingIcon)\.png$/i.test(hudPath(counter)) && gateNativeDraw(counter, "mapHud", e => !!e.noMinimap);
                gateNativeDraw(map, "minimap", e => !!e.noMinimap);
            }
            const stormBorder = children.find(n => Number(n.lineWidth) === 50 && [ "#FFF", "#000" ].includes(color(n)) && !n["À"]);
            const shades = children.filter(n => color(n) === "#F00" && !n["À"] && Number.isFinite(n.width) && Number.isFinite(n.height));
            if (Array.isArray(root["Éèå"]) && stormBorder && shades.length === 4) for (const n of [ ...shades, stormBorder ]) gateNativeDraw(n, "stormMap", e => !!e.invisibleStorm);
            const arms = children.filter(n => color(n) === "#FFF" && !n["À"] && !n.lineWidth && Number.isFinite(n.width) && Number.isFinite(n.height));
            if (arms.length === 5 && arms.filter(n => n.height === 20 && n.width < 20).length === 2 && arms.filter(n => n.width === 20 && n.height < 20).length === 2 && arms.some(n => n.width === n.height && n.width < 20)) {
                gateNativeDraw(root, "crosshair", e => !!e.noCrosshair);
                gateNativeDraw(root, "customCrosshairDraw", () => false, (ctx, s) => {
                    v63ReticleDraw(root, ctx, s);
                });
                for (const arm of arms) gateNativeDraw(arm, "customCrosshairArms", e => v63ReticleEnabled(e) && v63Visual.reticleRoot === root);
            }
            const health = children.find(n => /\/health\.png$/i.test(hudPath(n))), shield = children.find(n => /\/shield\.png$/i.test(hudPath(n)));
            if (health && shield) {
                const ys = [ health["ë"]?.["Ä"], shield["ë"]?.["Ä"] ];
                const topY = Math.min(...ys.filter(Number.isFinite)), ammoIcon = children.find(n => n.width === 40 && n.height === 40 && n["À"] && Number(n["ë"]?.["Ä"]) < topY - 40);
                if (ammoIcon) for (const n of children) n["ë"]?.["Ä"] === ammoIcon["ë"]["Ä"] && gateNativeDraw(n, "inventoryAmmoHud", e => !!e.noInventoryHud);
                for (const n of children) n.type === "text" && n.fontSize === 26 && n.align === "left" && n["ë"]?.["Ä"] === topY - 35 && gateNativeDraw(n, "inventoryNameHud", e => !!e.noInventoryHud);
                for (const n of children) (ys.includes(n["ë"]?.["Ä"]) || n["åÈ"] && n["Â$"]) && gateNativeDraw(n, "healthShieldHud", e => !!e.noHealthShieldHud);
            }
            v64FlashlightBoundary(root.parent);
            if (root.stroke && root.fill && root["ÅÉ"] && root["ä"] && root["èèÆ"] === .8) for (const child of children) gateNativeDraw(child, "pickupRaster", () => false, ctx => {
                ctx?.canvas?.tagName === "CANVAS" && pickupCanvases.add(ctx.canvas);
            });
        }
        /\/buildart\/redarrow\.png$/i.test(hudPath(node)) && node.parent && (node.parent["âè"]?.length || 0) + (node.parent["ÉE"]?.length || 0) === 1 && gateNativeDraw(node.parent, "damageDirection", e => !!e.noDamageDirection);
        const image = node["À"]?.["ÁÄ"];
        image?.tagName === "CANVAS" && node.parent?.["Ée"] === "top" && node.height === 120 && node.width >= 400 && node.width <= 1200 && image.height === 128 && image.width === node.width + 8 && pickupCanvases.add(image);
        image && pickupCanvases.has(image) && gateNativeDraw(node, "pickupPopup", pickupPopupHidden);
        productionIsTrail(node) && gateNativeDraw(node, "trailParticles", e => !!e.playersInvisible || !!e.allTrailsInvisible || !!e.invisibleProjectiles);
    };
    const nativeInventoryChallenge = () => {
        const templates = S.hudTemplates;
        if (!templates) return;
        for (const rec of [ ...templates.slots, ...templates.materials, ...templates.ammo ]) gateNativeDraw(rec.kind === "slots" ? rec.holder : rec.root, "inventoryHudUnit", e => !!e.noInventoryHud);
        let root = templates.slots[0]?.holder, depth = 0;
        while (root && depth++ < 6) {
            const paths = hudWalk(root, 240).filter(n => n !== root && !n.__brioHudClone).map(hudPath);
            if (paths.some(p => /\/(?:health|shield|playersIcon|waitingIcon|timer|storm)\.png$/i.test(p))) break;
            if (paths.filter(p => /\/inv[0-6]\.png$/.test(p)).length >= 5 && paths.some(p => /\/(?:wood|brick|metal|scrap)\.png$/.test(p)) && paths.some(p => /\/stack[0-4]\.png$/.test(p))) {
                gateNativeDraw(root, "inventoryHud", e => !!e.noInventoryHud);
                break;
            }
            root = root.parent;
        }
    };
    const remoteInformation = r => {
        if (isLocal(r) || !r["Eâ"]?.add) return;
        let record = remoteInfoRecords.get(r);
        if (!record) {
            record = {
                bars: []
            };
            remoteInfoRecords.set(r, record);
            r["ÃÊ"] && lockOpacity(r["ÃÊ"], e => !!e.playerNames, 1);
            for (const [bar, y] of [ [ r["æÄ"], -100 ], [ r["AÃå"], -114 ] ]) if (bar) {
                const saved = {
                    bar: bar,
                    parent: bar.parent,
                    y: bar["ë"]?.["Ä"],
                    targetY: y,
                    active: false
                };
                record.bars.push(saved);
                lockOpacity(bar, e => !!e.healthBars || !!e.numericHealthShield, 1);
            }
            featureRestore.push(() => restoreRemoteInformation(record));
        }
        const enabled = !!exFast().healthBars || !!exFast().numericHealthShield;
        for (const saved of record.bars) if (enabled) {
            if (saved.bar.parent !== r["Eâ"]) {
                saved.bar.parent?.remove?.(saved.bar);
                r["Eâ"].add(saved.bar);
            }
            saved.bar["ë"] && (saved.bar["ë"]["Ä"] = saved.targetY);
            saved.active = true;
        } else restoreRemoteInformation({
            bars: [ saved ]
        });
    }, restoreRemoteInformation = record => {
        for (const saved of record.bars) if (saved.active) {
            if (saved.bar.parent !== saved.parent) {
                saved.bar.parent?.remove?.(saved.bar);
                saved.parent?.add?.(saved.bar);
            }
            saved.bar["ë"] && (saved.bar["ë"]["Ä"] = saved.y);
            saved.active = false;
        }
    };
    const syncFeatureSettings = () => {
        featureEx.at = -1 / 0;
        const e = exFast();
        if (!e.transparentRoofs) {
            for (const {w: w, old: old} of S.roofSaved.values()) w["ÁÄ"] = old;
            S.roofSaved.clear();
        }
        for (const r of collectPlayers()) {
            featurePlayer(r);
            !isLocal(r) && (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo) && attachInv(r);
        }
        for (const o of collectWorld()) featureWorld(o);
        if (S.renderer) {
            e.nearestPlayer && !S.nearestTimer && (S.nearestTimer = setInterval(nearestTick, 250));
            if (!e.nearestPlayer && S.nearestTimer) {
                clearInterval(S.nearestTimer);
                S.nearestTimer = 0;
            }
            !e.nearestChest && !e.nearestAirdrop || S.indicatorTimer || (S.indicatorTimer = setInterval(indicatorTick, 500));
            if (!e.nearestChest && !e.nearestAirdrop && S.indicatorTimer) {
                clearInterval(S.indicatorTimer);
                S.indicatorTimer = 0;
            }
        }
        S.renderer && !S.meteorAutoTimer && nativeScanNeeded(e) && meteorAutoStart("visual settings changed");
        reclaimNativeGates();
        e.flashlightMode || v63FlashlightHide();
        nativeInventoryChallenge();
        indicatorTick();
        syncMonochrome(!!e.monochrome);
    };
    const featureNodes = new Map, featureRestore = [], featureEx = {
        value: extrasState(),
        at: -1 / 0
    }, indicatorStats = {};

    const exFast = () => {
        const n = performance.now();
        if (n - featureEx.at > 500) {
            featureEx.value = extrasState();
            featureEx.at = n;
        }
        return featureEx.value;
    }, nativeNode = (draw, y = 0) => ({
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
                S.errors.length < 100 && productionError("Runtime", "native feature: " + String(e));
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
    }), attachFeature = (o, key, parent, draw, y = 0) => {
        if (!parent?.add) return;
        let m = featureNodes.get(o);
        if (!m) {
            m = new Map;
            featureNodes.set(o, m);
        }
        if (m.has(key)) return;
        const n = nativeNode((ctx, s) => {
            const id = key === "durability" ? isBuild(o) ? "buildHealth" : "objectHealth" : key === "ownedAmmo" ? "highlightOwnedAmmo" : key === "projectileHistory" ? "longerBulletTrails" : key === "warning" ? "lowHealthWarning" : key.startsWith("number:") ? "numericHealthShield" : null;
            id && exFast()[id];
            draw(ctx, s);
        }, y);
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
    }, resetFeatures = () => {
        resetMonochrome();
        v63VisualReset();
        v66Reset();
        for (const m of featureNodes.values()) for (const n of m.values()) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        featureNodes.clear();
        S.shieldHeights = new WeakSet;
        S.cleanLootEvidence = new Set;
        while (featureRestore.length) try {
            featureRestore.pop()();
        } catch (_) {}
        for (const [node, record] of nativeDrawGates) try {
            restoreNativeGate(node, record);
        } catch (e) {
            productionError("Runtime", "draw gate restore: " + String(e));
        }
        nativeDrawGates.clear();
        remoteInfoRecords.clear();
        gateInsertions = 0;
        gateRetirementCursor = null;
        nativeResourcePaths = new WeakMap;
        S.inventoryRootChecks = new WeakMap;
        S.visualGateRetired = 0;
        S.visualGateCapKeys = new Set;
        pickupCanvases = new WeakSet;
        nativeCandidateCache = new WeakMap;
        S.visualGateCap = false;
        S.challengeLastReport = -1 / 0;
        featureEx.at = -1 / 0;
        for (const k of Object.keys(indicatorStats)) ;
    }, lockOpacity = (node, key, value) => {
        if (!node || featureRestore.some(x => x.node === node)) return;
        const d = Object.getOwnPropertyDescriptor(node, "opacity");
        if (d && !d.configurable) return;
        let v = node.opacity;
        Object.defineProperty(node, "opacity", {
            configurable: true,
            enumerable: d?.enumerable ?? true,
            get() {
                return (typeof key === "function" ? key(exFast()) : exFast()[key]) ? value : d?.get ? Reflect.apply(d.get, node, []) : v;
            },
            set(x) {
                v = x;
                d?.set && Reflect.apply(d.set, node, [ x ]);
            }
        });
        const restore = () => {
            if (d) {
                Object.defineProperty(node, "opacity", d);
                "value" in d && d.writable && (node.opacity = v);
            } else {
                delete node.opacity;
                node.opacity = v;
            }
        };
        restore.node = node;
        featureRestore.push(restore);
    }, featurePlayer = r => {
        productionTrailEmission(r);
        if (!r?.Eâ) return;
        const e = exFast();
        v55Player(r);
        if (!isLocal(r)) {
            for (const node of [ r["ÄA"], r["Ëå"], r.head, r["aá"], r["ä"], r["ÁÆ"], r["Eå"], r["æE"], r["ÈËè"], r["ÄÊâ"] ]) gateNativeDraw(node, "playerPhysical", settings => !!settings.playersInvisible);
            gateNativeDraw(r["Eâ"], "combinedPlayerInfo", settings => !!settings.goodFlippinLuck);
            remoteInformation(r);
        }
        gateNativeDraw(r["ÂÅ"], "glider", settings => !!settings.allGlidersInvisible || !isLocal(r) && !!settings.playersInvisible);
        gateNativeDraw(r["ÁÆ"], "buildPreview", settings => !!settings.buildsInvisible && (settings.buildMaskTier === "all" || !r["èÂ"]));
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
                            "value" in d && d.writable && (shield.height = native);
                        } else {
                            delete shield.height;
                            shield.height = native;
                        }
                    });
                }
            }
            if (e.numericHealthShield) for (const [key, field] of [ [ "æÄ", "åÈ" ], [ "AÃå", "Â$" ] ]) {
                const bar = r[key];
                bar?.add && attachFeature(r, "number:" + key, bar, (ctx, s) => {
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
            e.highContrastPlayers && attachFeature(r, "player", r.Eâ, (ctx, s) => {
                if (exFast().highContrastPlayers && !exFast().playersInvisible && !exFast().goodFlippinLuck && !v55.stats?.finished) {
                    ctx.save();
                    try {
                        ctx.shadowColor = "#ffea00";
                        ctx.shadowBlur = 4;
                        featureRing(ctx, 55, s, "#ffea00");
                    } finally {
                        ctx.restore();
                    }
                }
            });
        }
        isLocal(r) && e.lowHealthWarning && attachFeature(r, "warning", r.Eâ, (ctx, s) => {
            if (!isLocal(r) || !belowWarning(exFast(), "health", 0, r["åÈ"])) return;
            ctx.save();
            ctx.shadowColor = "#ff2020";
            ctx.shadowBlur = 12 / s;
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
            featureRing(ctx, 65, s, "#ff2020");
            ctx.restore();
        });
    }, featureWorld = o => {
        const e = exFast();
        v55World(o);
        gateNativeDraw(o["Eâ"], "objectInfo", settings => !!settings.noInfoPopups);
        const tag = String(o["Àâ"] || ""), root = (resourceSlots(o), o["â"]);
        isBuild(o) && gateNativeDraw(root, "placedBuild", settings => !!settings.buildsInvisible && (settings.buildMaskTier === "all" || o["AÀ"] !== true));
        e.noChestsVisible && (o.type === "chest" || [ "ammocrate", "grenadecrate" ].includes(tag)) && lockOpacity(root, "noChestsVisible", 0);
        const foliage = /^(?:tree\d*|jungletree|cherryblossom|bush\d*|grass\d*)$/i.test(tag);
        foliage && e.transparentFoliage && lockOpacity(o["ÄA"] || root, "transparentFoliage", .25);
        if ([ "gun", "ammo" ].includes(o.type) && e.cleanLoot) {
            const effect = o["ÀÅ"];
            if (effect && effect !== root && effect !== o["âê"] && effect.parent === root) {
                lockOpacity(effect, "cleanLoot", 0);
                S.cleanLootEvidence || (S.cleanLootEvidence = new Set);
                const key = o.type + ":" + hudPath(effect);
                S.cleanLootEvidence.size < 12 && !S.cleanLootEvidence.has(key) && S.cleanLootEvidence.add(key);
            }
        }
        if ([ "gun", "ammo" ].includes(o.type)) {
            gateNativeDraw(o["âê"], "lootArt", settings => !!settings.maskLootArt);
            gateNativeDraw(o["ÀÅ"], "lootRarity", settings => !!settings.cleanLoot);
            gateNativeDraw(root, "lootAll", settings => !!settings.lootInvisible && settings.lootMaskTier === "all");
            attachFeature(o, "lootLocation", root, (ctx, s) => {
                if (!exFast().maskLootOutline) return;
                ctx.save();
                ctx.strokeStyle = "#ffd21c";
                ctx.lineWidth = 3 / s;
                ctx.strokeRect(-35 / s, -35 / s, 70 / s, 70 / s);
                ctx.restore();
            });
        }
    }, featureTick = () => {
        try {
            S.renderer && !S.meteorAutoTimer && nativeScanNeeded(exFast()) && meteorAutoStart("feature watchdog");
            featureEx.value = extrasState();
            featureEx.at = performance.now();
            automaticPhase();
            ownMaterialWarnings();
            reclaimNativeGates();
            featureEx.value.flashlightMode || v63FlashlightHide();
            nativeInventoryChallenge();
            const e = exFast(), players = collectPlayers(), world = collectWorld(), live = new Set([ ...players, ...world ]);
            for (const r of players) featurePlayer(r);
            for (const [r, c] of S.nativeInvClones || []) if (!live.has(r)) {
                for (const row of c.rows) for (const u of row.units) u.root["ÊÈA"]?.();
                S.nativeInvClones.delete(r);
            }
            for (const o of world) featureWorld(o);
            for (const [o, m] of featureNodes) if (!live.has(o)) {
                for (const n of m.values()) n.parent?.remove?.(n);
                featureNodes.delete(o);
            }
            syncMonochrome(!!e.monochrome);
        } catch (error) {
            productionError("Feature maintenance", error);
        }
    }, validTarget = o => !!(o && !o["Äã"] && worldPos(o) && o["â"]?.visible !== false && o["â"]?.opacity !== 0), showIndicator = (kind, key, target, label, color, margin) => {
        const u = ensureArrow(key, color), me = worldPos(S.renderer), p = worldPos(target), sp = projectWorld(p);
        if (!target || !me || !p || !sp) {
            u.style.display = "none";
            return;
        }
        const box = sp.rect, on = sp.x >= box.left && sp.x <= box.left + box.width && sp.y >= box.top && sp.y <= box.top + box.height, d = Math.hypot(p.x - me.x, p.y - me.y);
        if (on) {
            u.style.display = "none";
            return;
        }
        placeArrow(u, sp.x - (box.left + box.width / 2), sp.y - (box.top + box.height / 2), d, label, margin, box);
    }, nearestV40 = () => {
        try {
            const e = exFast();
            if (!e.nearestPlayer) {
                S.nearestUi && (S.nearestUi.style.display = "none");
                return;
            }
            const active = collectPlayers().filter(r => !isLocal(r) && validTarget(r));
            for (const r of active) attachTrack(r);
            const me = worldPos(S.renderer);
            active.sort((a, b) => {
                const p = worldPos(a), q = worldPos(b);
                return me ? Math.hypot(p.x - me.x, p.y - me.y) - Math.hypot(q.x - me.x, q.y - me.y) : 0;
            });
            showIndicator("player", "nearestUi", active[0], e.nearestPlayerName && active[0]?.["Ée"] || "", indicatorColor(e, "nearestPlayer"), 90);
        } catch (e) {}
    }, indicatorsV40 = () => {
        try {
            const e = exFast();
            for (const [k, pred, label, key, margin, color] of [ [ "nearestChest", o => o.type === "chest", "", "chestUi", 165, "#ffd21c" ], [ "nearestAirdrop", o => o.type === "airdrop" || o["Àâ"] === "airdrop", "", "airdropUi", 240, "#f28b16" ] ]) e[k] ? showIndicator(k, key, nearestBy(o => validTarget(o) && pred(o)), label, indicatorColor(e, k) || color, margin) : S[key] && (S[key].style.display = "none");
        } catch (e) {}
    };

    new WeakSet;
    new Map, new Set;
    const meteorMarkers = [], meteorRestores = [];
    const loadGameBindings = async () => {
        const controller = new AbortController;
        productionSourceController = controller;
        const timeout = setTimeout(() => controller.abort(), 15e3);
        try {
            const urls = [ ...D.scripts ].map(x => x.src).filter(x => {
                try {
                    const u = new URL(x);
                    return u.origin === location.origin && /\/js\/[^/]+\.js$/.test(u.pathname);
                } catch (_) {
                    return false;
                }
            }), url = urls.find(x => /uOfrVi\.js/.test(x)) || urls.at(-1) || new URL("/js/uOfrVi.js", location.href).href;
            const r = await fetch(url, {
                credentials: "same-origin",
                signal: controller.signal
            });
            if (!r.ok) throw Error("HTTP " + r.status);
            const raw = await r.text();
            S.destroyed || await completeSourceAudit(raw);
        } catch (error) {
            S.destroyed || productionError("Game compatibility", error);
        } finally {
            clearTimeout(timeout);
            productionSourceController === controller && (productionSourceController = null);
        }
    };
    const restoreMarkerCapture = () => {
        const h = S.markerCapture;
        if (!h) return;
        Array.prototype.push === h.p && (Array.prototype.push = h.op);
        Array.prototype.unshift === h.u && (Array.prototype.unshift = h.ou);
        clearTimeout(h.timer);
        S.markerCapture = null;
    }, restoreMarkerHolds = () => {
        meteorAutoStop();
        S.meteorSeen = new WeakSet;
        S.meteorPending = new WeakSet;
        S.sceneRoots?.clear();
        S.sceneQueue = [];
        S.sceneQueueAt = 0;
        S.sceneQueueSeen = new WeakSet;
        S.sceneScan = null;
        restoreMarkerCapture();
        const oldMarkers = meteorMarkers.slice();
        while (meteorRestores.length) try {
            meteorRestores.pop()();
        } catch (e) {
            productionError("Runtime", "marker restore: " + String(e));
        }
        for (const {node: node, parent: parent} of oldMarkers) {
            (S.retiredMarkers || (S.retiredMarkers = new WeakSet)).add(node);
            node.icon && S.retiredMarkers.add(node.icon);
            try {
                parent.remove?.(node);
                node.parent && node.parent !== parent && node.parent.remove?.(node);
            } catch (e) {
                productionError("Runtime", "marker detach: " + String(e));
            }
        }
        oldMarkers.length;
        meteorMarkers.length = 0;
    };
    const holdMeteor = (node, array) => {
        const epoch = S.runEpoch;
        queueMicrotask(() => {
            try {
                S.meteorPending?.delete(node);
                if (S.destroyed || epoch !== S.runEpoch || !exFast().permanentMeteor || S.meteorSeen?.has(node)) return;
                const parent = node.parent;
                if (!parent || typeof parent.remove !== "function") return;
                (S.meteorSeen || (S.meteorSeen = new WeakSet)).add(node);
                const record = {
                    node: node,
                    parent: parent,
                    attempts: 0,
                    opacityWrites: 0,
                    destroyAttempts: 0
                };
                meteorMarkers.push(record);
                const desc = Object.getOwnPropertyDescriptor(parent, "remove"), orig = parent.remove, wrap = function(child, ...a) {
                    if (child === node && S.runEpoch === epoch && exFast().permanentMeteor) {
                        record.attempts++;
                        record.attempts;
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
                meteorRestores.push(() => {
                    parent.remove === wrap && (desc ? Object.defineProperty(parent, "remove", desc) : delete parent.remove);
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
                            return S.runEpoch === epoch && exFast().permanentMeteor ? 1 : v;
                        },
                        set(x) {
                            v = x;
                            record.opacityWrites++;
                        }
                    });
                    meteorRestores.push(() => {
                        if (d) {
                            Object.defineProperty(target, "opacity", d);
                            "value" in d && d.writable && (target.opacity = v);
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
                        get: () => (S.runEpoch !== epoch || !exFast().permanentMeteor) && expired,
                        set: v => {
                            expired = v;
                        }
                    });
                    meteorRestores.push(() => {
                        if (expiredDesc) {
                            Object.defineProperty(node, "Äã", expiredDesc);
                            "value" in expiredDesc && expiredDesc.writable && (node["Äã"] = expired);
                        } else {
                            delete node["Äã"];
                            node["Äã"] = expired;
                        }
                    });
                }
                const destroyDesc = Object.getOwnPropertyDescriptor(node, "ÊÈA"), destroy = node["ÊÈA"];
                if (typeof destroy === "function" && (!destroyDesc || destroyDesc.configurable || destroyDesc.writable)) {
                    const dw = function(...a) {
                        if (S.runEpoch === epoch && exFast().permanentMeteor) {
                            record.destroyAttempts++;
                            return;
                        }
                        return Reflect.apply(destroy, this, a);
                    };
                    node["ÊÈA"] = dw;
                    meteorRestores.push(() => {
                        node["ÊÈA"] === dw && (destroyDesc ? Object.defineProperty(node, "ÊÈA", destroyDesc) : delete node["ÊÈA"]);
                    });
                }
                node.visible = true;
                node.icon && (node.icon.visible = true);
            } catch (e) {
                productionError("Runtime", "meteor hold: " + String(e));
            }
        });
    };
    productionInit();
    patchButtons();
    renderExtras();
    loadGameBindings();
    loadCustom().finally(() => {
        if (S.destroyed) return;
        renderLocker();
        bindPlay();
    });
})();
