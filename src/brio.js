(() => {
    "use strict";
    const W = window, D = document, K = "__brio_unlocker_v43";
    for (const k of [ K, "__brio_unlocker_v42", "__brio_unlocker_v41", "__brio_unlocker_v40", "__brio_unlocker_v39", "__brio_recon38", "__brio_unlocker_v37", "__brio_unlocker_v36", "__brio_unlocker_v35", "__brio_unlocker_v33", "__brio_unlocker_v32", "__brio_unlocker_v31", "__brio_unlocker_v30", "__brio_unlocker_v29", "__brio_unlocker_v28", "__brio_unlocker_v27" ]) try {
        W[k]?.destroy?.();
    } catch (_) {}
    const NP = Array.prototype.push, NU = Array.prototype.unshift;
    const S = {
        v: "43",
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
            S.errors.push(String(e));
        }
    }, state = () => read("br_local_visuals", {}), saveState = s => write("br_local_visuals", s), extrasState = () => read("brio_extras_state", {}), saveExtras = s => write("brio_extras_state", s), norm = u => {
        try {
            return new URL(String(u || ""), location.href).pathname.toLowerCase();
        } catch (_) {
            return String(u || "").split(/[?#]/)[0].toLowerCase();
        }
    }, clean = x => {
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
    }, log = (m, o) => {
        const z = `[${(new Date).toISOString().slice(11, 23)}] ${m}${o === undefined ? "" : " " + J(o)}`;
        S.log.push(z);
        if (S.out) {
            if (!S.logFlush) S.logFlush = setTimeout(() => {
                S.logFlush = 0;
                if (S.out) {
                    S.out.value = S.log.join("\n");
                    S.out.scrollTop = S.out.scrollHeight;
                }
            }, 200);
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
            if (!r.result.objectStoreNames.contains("customAssets")) r.result.createObjectStore("customAssets", {
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
            log("CUSTOM CACHE", Object.fromEntries(Object.entries(S.custom).map(([k, v]) => [ k, v.length ])));
        } catch (e) {
            S.errors.push(String(e));
            log("CUSTOM CACHE ERROR", String(e));
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
    const STATUS = {
        green: new Set([ "playersInvisible", "lootInvisible", "buildsInvisible", "transparentRoofs", "healthBars", "playerNames", "allGlidersInvisible", "allTrailsInvisible", "inventorySlots", "inventoryMaterials", "inventoryAmmo", "inventorySize", "permanentMeteor" ]),
        yellow: new Set([ "inventorySlots", "inventoryMaterials", "inventoryAmmo", "screenChests", "screenAirdrops", "screenFishing", "identifyBots", "nearestPlayer", "nearestChest", "nearestAirdrop", "permanentMeteor", "numericHealthShield", "lowHealthWarning", "lowMatsWarning", "noChestsVisible", "noFoliage", "transparentFoliage", "monochrome", "highlightLoot", "cleanLoot", "highContrastPlayers", "buildMaterialLabels", "deployableLabels", "deployableRadius" ])
    }, statusOf = id => STATUS.yellow.has(id) ? "yellow" : STATUS.green.has(id) ? "green" : "red";
    const style = D.createElement("style");
    style.textContent = `#ad,#preroll,#buildroyale-io_300x250,#buildroyale-io_300x250_2,#buildroyale-io_728x90,#buildroyale-io_300x600,#buildroyale-io_970x250,#disableAdsButton,iframe[src*="doubleclick" i],iframe[src*="googlesyndication" i]{display:none!important;visibility:hidden!important;width:0!important;height:0!important;margin:0!important;padding:0!important;border:0!important;pointer-events:none!important}#loggedInLocker.b18,#loggedInShop.b18{box-sizing:border-box!important;width:178px!important;height:53px!important;display:inline-flex!important;align-items:center!important;gap:8px!important;padding:0 12px!important;margin-top:7px!important;border:4px solid #090909!important;border-radius:9px!important;background:#65aee0!important;color:#fff!important;cursor:pointer!important;transition:none!important;overflow:hidden!important}#loggedInLocker.b18{margin-right:0!important}#loggedInShop.b18{margin-right:80px!important}#loggedInLocker.b18>img,#loggedInShop.b18>img{display:none!important}#loggedInLocker.b18>.bi,#loggedInShop.b18>.bi{width:42px;height:42px;flex:0 0 42px;background:center/contain no-repeat;pointer-events:none}#loggedInLocker.b18>p,#loggedInShop.b18>p{position:static!important;margin:0!important;flex:1;text-align:center;font-size:23px!important;color:#fff!important;-webkit-text-stroke:1px #000;pointer-events:none}.brioModal{position:fixed;z-index:2147483645;left:50%;top:50%;transform:translate(-50%,-50%);width:min(980px,96vw);height:min(700px,92vh);display:none;flex-direction:column;background:#000;color:#fff;border:2px solid #fff;font:14px Arial}.brioModal header,.brioTabs,.brioTools,.brioSubs,.brioSlots{display:flex;gap:6px;align-items:center;padding:7px;border-bottom:1px solid #555;flex-wrap:wrap}.brioModal header b{flex:1;font-size:20px}.brioModal button{background:#111;color:#fff;border:1px solid #777;padding:6px;cursor:pointer}.brioModal button.on{background:#555}.brioModal input[type=text]{background:#111;color:#fff;border:1px solid #777;padding:6px;width:220px;cursor:text}.brioModal select{background:#111;color:#fff;border:1px solid #777;padding:5px;min-width:110px}.brioGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:6px;padding:8px;overflow:auto;flex:1;align-content:start}.brioCard{height:126px;border:1px solid #555;background:#090909;text-align:center;position:relative;overflow:hidden;cursor:pointer}.brioCard.sel{outline:3px solid #fff}.brioCard img{width:82px;height:82px;object-fit:contain;margin-top:4px}.brioCard .n{position:absolute;left:3px;right:3px;bottom:5px;font-size:12px}.brioCard .sync{position:absolute;right:3px;top:3px;font-size:9px;border:1px solid #6a6;padding:2px}.brioCard.sp{height:82px;display:flex;align-items:center;justify-content:center;font-weight:bold}.brioPage{padding:8px;overflow:auto}.brioOpt{display:flex;gap:10px;padding:10px;border-bottom:1px solid #333;align-items:center}.brioOpt label{flex:1}.brioOpt.child{padding-left:34px}.brioOpt.st-green{background:#153d22}.brioOpt.st-yellow{background:#665700}.brioOpt.st-red{background:#4b1717}.brioBadge{font:700 10px Arial;padding:3px 5px;border:1px solid #aaa;min-width:58px;text-align:center}.brioGroup{padding:12px 10px 5px;font-weight:bold;border-bottom:1px solid #555;color:#9fd4ff}.brioLegend{display:flex;gap:12px;padding:7px;border-bottom:1px solid #555;font-size:11px}.brioLegend span{padding:3px 6px}.brioStatus{padding:7px;border-top:1px solid #555;font:12px Consolas;white-space:pre-wrap}.brioTerm.min .body{display:none!important}.brioTerm.min{width:460px!important;height:34px!important}.brioTerm.min .head{cursor:move!important}`;
    D.documentElement.appendChild(style);
    const patchButtons = () => {
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
    }, renderGrid = () => {
        const g = locker.querySelector(".brioGrid"), sr = t(locker.querySelector('input[type="text"]').value).toLowerCase(), k = kcat(), s = sel(), allowInvisible = [ "body", "head", "pickaxe", "trail", "glider" ].includes(k), allowCustom = [ "body", "head", "pickaxe" ].includes(k), match = x => !sr || String(x).toLowerCase().includes(sr);
        g.textContent = "";
        for (const m of [ "native", "random", ...allowInvisible ? [ "invisible" ] : [] ]) if (match(m)) g.appendChild(card(m));
        if (allowCustom) for (const x of S.custom[k]) if (match(x.name)) g.appendChild(card("custom", x));
        for (const x of items(k === "body" || k === "head" ? "skin" : k)) if (match(x.name)) g.appendChild(card("item", x));
        for (const c of g.children) if (c.dataset.mode === s.mode && (!c.dataset.id || c.dataset.id === s.id)) c.classList.add("sel");
        locker.querySelector(".brioStatus").textContent = `${labels[tab]}${tab === "skin" ? " / " + sub : ""}${tab === "emote" ? " / Slot " + (slot + 1) : ""}: ${s.name || s.id || s.mode || "Native"}`;
        locker.querySelector("[data-upload]").style.display = allowCustom ? "inline-block" : "none";
    }, renderLocker = () => {
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
        challenges: [ [ "playersInvisible", "All players invisible", "remote players only" ], [ "lootInvisible", "Loot invisible", "includes pickup visuals when complete" ], [ "buildsInvisible", "Builds invisible", "walls + special deployables + placement preview" ], [ "noMinimap", "No minimap", "planned" ], [ "noCrosshair", "No crosshair", "planned" ], [ "noInventoryHud", "No inventory/item bar", "planned" ], [ "invisibleStorm", "Invisible storm", "hide zone on minimap + full map" ], [ "noChestsVisible", "Chests invisible", "chests + ammo/grenade crates · test" ], [ "noFoliage", "Foliage invisible", "identified native entities · test" ], [ "noHealthShieldHud", "No health/shield HUD", "planned" ], [ "monochrome", "Monochrome vision", "game canvas grayscale · test" ], [ "flashlightMode", "Flashlight mode", "configurable radius; mouse/player follow" ] ],
        modifiers: [ [ "transparentRoofs", "Transparent roofs", "static map roofs" ], [ "highlightLoot", "Highlight loot", "native yellow pickup ring · test" ], [ "healthBars", "Player health bars", "remote players" ], [ "numericHealthShield", "Health/shield numbers", "numbers inside native bars · test" ], [ "playerNames", "Player names", "remote players" ], [ "allGlidersInvisible", "All gliders invisible", "self + remote" ], [ "allTrailsInvisible", "All trails invisible", "self + remote" ], [ "screenChests", "Screen chests", "normal + legendary + ammo/grenade crates · active" ], [ "screenAirdrops", "Screen airdrops", "contents + object identity · active" ], [ "screenFishing", "Screen fishing spots", "contents; NONE is a valid result · active" ], [ "nearestPlayer", "Nearest player indicator", "off-screen only + distance" ], [ "nearestChest", "Nearest chest indicator", "hide while target is on-screen" ], [ "nearestAirdrop", "Nearest airdrop indicator", "hide while target is on-screen" ], [ "permanentMeteor", "Permanent meteor location", "automatic native waypoint retention · test" ], [ "identifyBots", "Identify bots", "bounded native metadata/source recon; no classifier yet" ], [ "highContrastPlayers", "High-contrast players", "native yellow silhouette ring · test" ], [ "cleanLoot", "Remove loot glow/effects", "identified glow resource only · test" ], [ "transparentFoliage", "Transparent foliage", "identified canopy opacity 25% · test" ], [ "buildMaterialLabels", "Build material labels", "wood/brick/metal from native sprite · test" ], [ "deployableLabels", "Deployable labels", "campfire/boostpad/shield/drill · test" ], [ "deployableRadius", "Deployable effect-radius display", "current native spellfield radius · test" ], [ "stormEdge", "Storm edge highlight", "planned" ], [ "stormCenter", "Safe-zone center direction", "planned" ], [ "stormDistance", "Storm-edge distance", "planned" ], [ "customCrosshair", "Enhanced/custom crosshair", "built-ins + upload" ], [ "lowHealthWarning", "Low-health visual warning", "HP ≤30; red glowing/flashing player outline" ], [ "lowAmmoWarning", "Low-ammo visual warning", "magazine + ammo-type mapping recon" ], [ "lowMatsWarning", "Low-material warning", "own HUD: each wood/brick/metal count <30; red flashing outline" ], [ null, "Show player inventories", "three compact rows below player" ], [ "inventorySlots", "Inventory: 5 item slots", "native widget replica; capture/layout testing", true ], [ "inventoryMaterials", "Inventory: build materials/counts", "wood / brick / metal / special", true ], [ "inventoryAmmo", "Inventory: ammo by type", "native icons + counts", true ], [ "inventorySize", "Inventory size", "Small / Medium / Large / XL", true, "select" ] ]
    };
    const REQUIRED_TESTS = [ "inventorySlots", "inventoryMaterials", "inventoryAmmo", "screenChests", "screenAirdrops", "screenFishing", "healthBars", "nearestPlayer", "nearestChest", "nearestAirdrop", "permanentMeteor", "numericHealthShield", "lowHealthWarning", "lowMatsWarning", "identifyBots" ];
    const renderExtras = () => {
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
                };
                r.append(l, b, c);
            }
            p.appendChild(r);
        }
    };
    extras.querySelector("[data-close]").onclick = () => extras.style.display = "none";
    const intercept = e => {
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
        const roots = new Set(S.sceneRoots || []);
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
    }, resourceSlots = o => {
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
    }, isWorld = o => !!(o && typeof o === "object" && o.id != null && [ "object", "buildable", "spellfield", "gun", "ammo", "chest", "airdrop" ].includes(String(o.type))), collectPlayers = () => {
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
        u.style = "position:fixed;z-index:2147483644;pointer-events:none;width:144px;height:72px;display:none;transform-origin:50% 50%;filter:drop-shadow(0 2px 3px #000)";
        u.innerHTML = '<div class="shape" style="position:absolute;inset:0;clip-path:polygon(0 20%,68% 20%,68% 0,100% 50%,68% 100%,68% 80%,0 80%)"></div><span class="d" style="position:absolute;left:5px;top:20px;width:88px;height:32px;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;color:#fff;font:900 16px Arial;-webkit-text-stroke:1px #000;paint-order:stroke fill;text-shadow:1px 0 #000,-1px 0 #000,0 1px #000,0 -1px #000;box-sizing:border-box"></span>';
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
        d.textContent = (Math.round(meters * 10) / 10).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + "m";
        d.style.transform = ang > 90 || ang < -90 ? "rotate(180deg)" : "none";
        d.style.fontSize = Math.max(8, Math.min(16, 120 / Math.max(1, d.textContent.length))) + "px";
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
    const hudKinds = path => /\/inv[0-6]\.png$/.test(path) ? "slots" : /\/(?:wood|brick|metal|scrap)\.png$/.test(path) ? "materials" : /\/ammo[0-4]\.png$/.test(path) ? "ammo" : null;
    const hudWalk = (root, max = 100) => {
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
    const hudPath = n => norm(n?.["À"]?.src || n?.["À"]?.["ÁÄ"]?.src || "");
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
    const hudInspect = n => {
        const path = hudPath(n), kind = hudKinds(path);
        if (!kind || S.hudSourceNodes?.has(n) || (S.hudInspectionCount || 0) >= 80) return;
        S.hudInspectionCount = (S.hudInspectionCount || 0) + 1;
        if (!S.hudSourceNodes) S.hudSourceNodes = new WeakSet;
        let anchor = kind === "slots" ? n : null, p = n.parent;
        for (let depth = 0; !anchor && p && depth < 5; depth++, p = p.parent) {
            const nodes = hudWalk(p, 180);
            if (nodes.some(x => hudKinds(hudPath(x)) === "slots")) anchor = p;
        }
        if (!anchor) {
            if (n.parent) {
                (S.hudRejected || (S.hudRejected = new WeakSet)).add(n);
            }
            return;
        }
        let unit = n;
        for (let p = n.parent, depth = 0; p && depth < 3; depth++, p = p.parent) {
            const nodes = hudWalk(p, 80), icons = nodes.filter(x => hudKinds(hudPath(x)) === kind);
            if (icons.length !== 1) break;
            unit = p;
            if (nodes.some(x => x.type === "text" || typeof x.text === "string")) break;
        }
        const nodes = hudWalk(unit), sourceCtor = unit.constructor;
        if (!S.hudTemplates) S.hudTemplates = {
            slots: [],
            materials: [],
            ammo: []
        };
        if (S.hudTemplates[kind].length >= (kind === "slots" ? 6 : kind === "materials" ? 4 : 5)) return;
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
        S.hudSourceNodes.add(n);
        S.hudTemplates[kind].push(record);
        S.hudVersion = (S.hudVersion || 0) + 1;
        S.hudStatus = {
            captured: true,
            counts: Object.fromEntries(Object.entries(S.hudTemplates).map(([k, v]) => [ k, v.length ])),
            replica: "native constructors/geometry; visual proof pending"
        };
        log("NATIVE HUD WIDGET", {
            kind: kind,
            path: path,
            rootType: unit.type,
            rootKeys: Object.keys(unit).slice(0, 70),
            constructor: typeof sourceCtor === "function" ? String(sourceCtor).slice(0, 1800) : null,
            nodes: nodes.map(x => ({
                type: x.type,
                path: hudPath(x),
                position: x["ë"],
                width: x.width,
                height: x.height,
                text: x.text,
                fields: Object.fromEntries(Object.entries(x).filter(([k, v]) => [ "string", "number", "boolean" ].includes(typeof v) && ![ "src" ].includes(k)).slice(0, 40))
            })),
            note: "Native widget candidates. Requires rendered HUD ancestry/geometry validation."
        });
        ownMaterialWarnings();
    };
    const hudBounds = record => {
        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        for (const n of record.nodes) {
            if (!n["À"] && !(n.type === "text" || typeof n.text === "string")) continue;
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
    const ownMaterialWarnings = () => {
        if (!S.renderer || !S.hudTemplates) return;
        const mats = matState(S.renderer);
        for (const rec of S.hudTemplates.materials) {
            const i = [ "wood", "brick", "metal" ].findIndex(k => rec.path.endsWith("/" + k + ".png"));
            if (i < 0 || !rec.root?.add || S.hudWarnNodes?.has(rec.root)) continue;
            if (!S.hudWarnNodes) S.hudWarnNodes = new Map;
            const bounds = hudBounds(rec), draw = (ctx, s) => {
                const raw = Array.isArray(S.renderer?.["ÊÃÄ"]) ? S.renderer["ÊÃÄ"] : S.renderer?.["Äâã"], value = raw?.[i];
                if (!exFast().lowMatsWarning || !Number.isFinite(value) || value >= 30) return;
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
            rec.root.add(overlay);
            S.hudWarnNodes.set(rec.root, overlay);
            log("OWN MATERIAL WARNING BINDING", {
                material: [ "wood", "brick", "metal" ][i],
                threshold: "<30",
                bounds: bounds,
                scope: "own native HUD only"
            });
        }
    };
    const cloneNativeWidget = rec => {
        let count = 0;
        const pairs = [], seen = new Map;
        const clone = n => {
            if (++count > 80 || seen.has(n)) throw Error("native HUD widget cycle/limit");
            const C = n.constructor;
            if (typeof C !== "function" || C === Object || C === W.Object) throw Error("native HUD constructor unavailable");
            let args;
            if (n["À"]) args = [ n["À"], 0, 0, n.width, n.height, n.opacity ]; else if (n.type === "text" || typeof n.text === "string") args = [ n.text, 0, 0, n.fillStyle || n["Äe"] || "#fff", n.fontFamily || "Arial", n.fontSize || 16, n.fontWeight || "bold", n.opacity, n.textAlign || "center" ]; else if (n.type === "arc") args = [ 0, 0, n["éã"], n["Äe"], n.endAngle || Math.PI * 2, n.startAngle || 0, n.lineWidth ]; else if (n.width !== undefined && n.height !== undefined) args = [ 0, 0, n.width, n.height, n["Äe"] || n.fillStyle, n.opacity ]; else args = [];
            const c = Reflect.construct(C, args);
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
            if ("text" in n) c.text = n.text;
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
            return c;
        };
        return {
            root: clone(rec.root),
            pairs: pairs,
            record: rec
        };
    };
    const nativeInvFor = r => {
        if (!S.hudTemplates?.slots?.length) return null;
        if (!S.nativeInvClones) S.nativeInvClones = new Map;
        let cached = S.nativeInvClones.get(r);
        if (cached?.version === S.hudVersion) return cached;
        if (cached) for (const row of cached.rows) for (const unit of row.units) try {
            unit.root["ÊÈA"]?.();
        } catch (_) {}
        const rows = [];
        for (const [kind, raw] of Object.entries(S.hudTemplates)) {
            const sorted = raw.slice().sort((a, b) => a.x - b.x || a.y - b.y), templates = kind === "slots" ? sorted.slice(-5) : sorted, units = [];
            for (const rec of templates) try {
                units.push(cloneNativeWidget(rec));
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
    const drawNativeInv = (ctx, s, r) => {
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
            const widths = row.units.map(u => hudBounds(u.record).width), factor = Math.min(18 / Math.max(...widths, 1), 18 / Math.max(...row.units.map(u => hudBounds(u.record).height), 1)), gap = 2 / factor, total = widths.reduce((a, b) => a + b, 0) + gap * (widths.length - 1);
            let x = -total / 2, maxHeight = 0;
            row.units.forEach((u, i) => {
                const b = hudBounds(u.record);
                let value;
                const material = [ "wood", "brick", "metal", "scrap" ].findIndex(k => u.record.path.endsWith("/" + k + ".png")), ammoIndex = +(u.record.path.match(/ammo([0-4])/) || [])[1];
                if (row.kind === "materials") value = m[material];
                if (row.kind === "ammo") value = ammo[ammoIndex];
                for (const pair of u.pairs) {
                    if (value !== undefined && (pair.source.type === "text" || typeof pair.source.text === "string") && /^\d+$/.test(String(pair.source.text))) pair.node.text = String(value);
                    if (row.kind === "slots" && /\/inv[0-6]\.png$/.test(pair.path)) {
                        const rarity = Number(slots[i]?.["äã"]);
                        if (Number.isFinite(rarity) && rarity >= 0 && rarity <= 6) {
                            const path = "/buildart/inv" + rarity + ".png";
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": invImage(path)
                            };
                        }
                    }
                    if (row.kind === "slots" && pair.path && !/\/inv[0-6]\.png$/.test(pair.path)) {
                        const path = itemPath(slots[i]?.type);
                        if (path) {
                            const im = invImage(path);
                            pair.node["À"] = {
                                src: path,
                                "ÁÄ": im
                            };
                            pair.node.opacity = 1;
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
                n.opacity = 1;
                if (typeof n["éa"] === "function") n["éa"](ctx, s, 1); else if (typeof n["Eââ"] === "function") n["Eââ"](ctx, s);
                ctx.restore();
                x += b.width + gap;
                maxHeight = Math.max(maxHeight, b.height * factor);
            });
            y += 21;
        }
        return drawn;
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
        S.hudSourceNodes = new WeakSet;
        S.hudRejected = new WeakSet;
        S.hudInspectionCount = 0;
        S.hudStatus = {
            captured: false
        };
        S.hudVersion = 0;
        S.hudPending = new WeakSet;
        S.hudInspectError = false;
        S.sceneStartError = false;
        S.sceneSkipped = 0;
    };
    const INV_SCALE = {
        small: .9375,
        medium: 1.25,
        large: 1.625,
        xl: 2.0625
    }, invScale = () => INV_SCALE[extrasState().inventorySize] || 1.25, NATIVE_INV_BG = {
        feesh: 1,
        flexsplash: 3,
        rpg: 2,
        silencedpistol: 0,
        aug: 3,
        flaregun: 6,
        scar: 2
    }, invImage = p => {
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
    }, itemPath = type => {
        const raw = String(type || "").toLowerCase().trim();
        if (!raw || raw === "empty" || raw === "pickaxe") return null;
        return `/buildart/${raw.replace(/[^a-z0-9]/g, "")}.png`;
    }, matState = r => {
        const a = Array.isArray(r?.["ÊÃÄ"]) ? r["ÊÃÄ"] : Array.isArray(r?.["Äâã"]) ? r["Äâã"] : [];
        return [ a[0] ?? 0, a[1] ?? 0, a[2] ?? 0, a[3] ?? 0 ];
    }, drawImg = (ctx, p, x, y, w, h, s) => {
        if (!p) return;
        const im = invImage(p);
        if (im.complete && im.naturalWidth) try {
            ctx.drawImage(im, x / s, y / s, w / s, h / s);
        } catch (_) {}
    }, drawTxt = (ctx, v, x, y, s) => {
        ctx.save();
        ctx.font = `${Math.max(5, 8 / s)}px Arial Black`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = Math.max(.5, 2 / s);
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#fff";
        ctx.strokeText(String(v), x / s, y / s);
        ctx.fillText(String(v), x / s, y / s);
        ctx.restore();
    }, drawInv = (ctx, scale, r) => {
        const drawn = drawNativeInv(ctx, scale, r) || new Set;
        const ex = extrasState(), rows = [];
        if (ex.inventorySlots) rows.push("slots");
        if (ex.inventoryMaterials) rows.push("mats");
        if (ex.inventoryAmmo) rows.push("ammo");
        let yy = 0;
        for (const row of rows) {
            if (drawn.has(row)) {
                yy += 21;
                continue;
            }
            if (row === "slots") {
                const slots = Array.isArray(r["Åé"]) ? r["Åé"].slice(1, 6) : [], sz = 18, g = 2, x0 = -(sz * 5 + g * 4) / 2;
                for (let i = 0; i < 5; i++) {
                    const sl = slots[i], x = x0 + i * (sz + g), key = String(sl?.type || "").toLowerCase().replace(/[^a-z0-9]/g, ""), raw = Number(sl?.["äã"]), bg = NATIVE_INV_BG[key] ?? (Number.isFinite(raw) && raw >= 0 && raw <= 6 ? raw : 0);
                    drawImg(ctx, `/buildart/inv${bg}.png`, x, yy, sz, sz, scale);
                    drawImg(ctx, itemPath(sl?.type), x + 1, yy + 1, sz - 2, sz - 2, scale);
                }
            } else if (row === "mats") {
                const m = matState(r), vals = [ [ "/buildart/wood.png", m[0] ], [ "/buildart/brick.png", m[1] ], [ "/buildart/metal.png", m[2] ], [ "/buildart/scrap.png", m[3] ] ], cell = 29, x0 = -(cell * 4) / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 4 + 4) / scale, 18 / scale);
                vals.forEach(([p, v], i) => {
                    const x = x0 + i * cell;
                    drawImg(ctx, p, x, yy, 14, 14, scale);
                    drawTxt(ctx, v, x + 21, yy + 7, scale);
                });
            } else {
                const a = Array.isArray(r["åæ"]) ? r["åæ"].slice(0, 5) : [], cell = 27, x0 = -(cell * 5) / 2;
                ctx.fillStyle = "#000b";
                ctx.fillRect((x0 - 2) / scale, (yy - 1) / scale, (cell * 5 + 4) / scale, 18 / scale);
                for (let i = 0; i < 5; i++) {
                    const x = x0 + i * cell;
                    drawImg(ctx, `/buildart/ammo${i}.png`, x, yy, 14, 14, scale);
                    drawTxt(ctx, a[i] ?? 0, x + 20, yy + 7, scale);
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
    }), attachInv = r => {
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
    const BOT_CLUSTER = [ "EÆÅ", "Éaê", "ÆÉÆ", "Áae", "áaá", "Éäæ", "ée", "ËÈä", "aAE", "áâÃ", "ËE", "ÈÆ" ], botPhase = () => {
        if (S.botPhase === "match") return;
        S.botPhase = "match";
        S.botPhaseAt = performance.now();
        log("BOT PHASE", {
            phase: "match",
            tracked: S.botWatch.size
        });
    }, botSample = () => {
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
    }, botStart = () => {
        if (S.botTimer) return;
        S.botWatch = new Map;
        S.botLogged = new Set;
        S.botPhase = "lobby";
        S.botPhaseAt = performance.now();
        botSample();
        botAuditReset();
        botAuditTick();
        S.botTimer = setInterval(() => {
            botSample();
            botAuditTick();
        }, 500);
        log("BOT WATCH", "START · phase-separated stable ID tracking; press MATCH START at transition");
    }, botStop = () => {
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
    }, indicatorTick = () => indicatorsV40();
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
    const passiveTick = () => {
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
    }, meteorCandidate = (node, array = []) => {
        const path = norm(node?.icon?.["À"]?.src || node?.icon?.["À"]?.["ÁÄ"]?.src || "");
        if (extrasState().permanentMeteor && path === "/buildart/ping-meteor-icon.png" && !S.meteorSeen?.has(node) && !S.meteorPending?.has(node)) {
            (S.meteorPending || (S.meteorPending = new WeakSet)).add(node);
            holdMeteor(node, array);
        }
    }, meteorScan = () => {
        if (!S.renderer || !extrasState().permanentMeteor && !extrasState().lowMatsWarning && (!extrasState().transparentRoofs || S.roofSaved.size === 21)) return;
        const seen = new Set, stack = [ ...sceneRoots() ];
        let visits = 0;
        while (stack.length && visits++ < 3e3) {
            const x = stack.pop();
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
            limitReached: stack.length > 0,
            roots: S.sceneRoots?.size || 0,
            observers: S.meteorObservers?.size || 0,
            skipped: S.sceneSkipped || 0
        };
        if (!S.sceneScanLogged) {
            S.sceneScanLogged = true;
            log("SCENE CAPTURE", S.sceneScan);
        }
    }, meteorAutoStart = reason => {
        meteorAutoStop();
        if (S.destroyed || !S.renderer || !extrasState().permanentMeteor && !extrasState().transparentRoofs && !extrasState().lowMatsWarning) return;
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
    const applyRemote = async r => {
        if (!r || isLocal(r)) return;
        rememberRemote(r);
        const e = extrasState();
        try {
            if (e.playerNames && r["ÃÊ"]) r["ÃÊ"].opacity = 1;
            if ((e.healthBars || e.numericHealthShield) && r["Eâ"]?.add) {
                for (const [o, y] of [ [ r["æÄ"], -100 ], [ r["AÃå"], -110 ] ]) if (o) {
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
                r["äÀÊ"] = gl;
                if (r["ÂÅ"]) r["ÂÅ"]["À"] = gl;
            }
            if (e.nearestPlayer) attachTrack(r);
            featurePlayer(r);
            if (e.inventorySlots || e.inventoryMaterials || e.inventoryAmmo) attachInv(r);
        } catch (x) {
            S.errors.push(String(x));
        }
    }, queueRemote = r => {
        if (!r || isLocal(r) || S.remoteQueued.has(r)) return;
        S.remoteQueued.add(r);
        const auditEpoch = S.runEpoch;
        setTimeout(() => {
            if (!S.destroyed && S.runEpoch === auditEpoch) replicaStateAudit(r);
        }, 2e3);
        for (const ms of [ 0, 250, 1200, 3e3 ]) setTimeout(() => applyRemote(r), ms);
    }, queueWorld = o => {
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
    }, handleAdded = (x, a) => {
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
    const tagName = () => {
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
    }, arm = () => {
        S.runEpoch = (S.runEpoch || 0) + 1;
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
        if (S.featureTimer) {
            clearInterval(S.featureTimer);
            S.featureTimer = 0;
        }
        restoreMarkerHolds();
        reconNow.last = null;
        reconNow.stateLogs = 0;
        reconContainersSeen.clear();
        reconRemoved.clear();
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
    }, bindPlay = () => {
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
    const verify = () => {
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
    term.innerHTML = '<div class="head" style="display:flex;gap:6px;padding:6px"><b style="flex:1">BRIO v43</b><button data-a="min">—</button></div><div class="body" style="display:flex;gap:5px;padding:6px;flex-wrap:wrap"><button data-a="phase">MATCH START</button><button data-a="verify">VERIFY</button><button data-a="copy">COPY RESULTS</button></div><textarea class="body" style="flex:1;background:#000;color:#fff;border:0;padding:7px;resize:none"></textarea>';
    D.documentElement.appendChild(term);
    S.out = term.querySelector("textarea");
    let mini = false, drag = null;
    term.onclick = e => {
        const a = e.target?.dataset?.a;
        if (a === "min") {
            mini = !mini;
            term.classList.toggle("min", mini);
            e.target.textContent = mini ? "+" : "—";
        } else if (a === "phase") botPhase(); else if (a === "verify") verify(); else if (a === "copy") {
            if (S.botTimer) botStop();
            reconContainers();
            const x = "BRIO " + S.v + "\n" + S.log.join("\n") + "\n\n" + J(verify());
            Promise.resolve().then(() => {
                if (!navigator.clipboard?.writeText) throw Error("Clipboard API unavailable");
                return navigator.clipboard.writeText(x);
            }).then(() => log("COPY OK", x.length)).catch(() => {
                S.out.value = x;
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
    S.destroy = () => {
        S.destroyed = true;
        S.runEpoch = (S.runEpoch || 0) + 1;
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
    const botAuditReset = () => {
        botAuditSeen.clear();
        botAuditUntil = performance.now() + 45e3;
        log("BOT AUDIT PLAN", {
            mode: "bounded metadata audit: all own keys + two-level non-render metadata; explicit source terms + constructor references",
            limitSeconds: 45,
            maxPlayers: 60,
            maxSnapshotsPerPlayer: 2,
            note: "No bot classifier. Prior selected-field route is inconclusive; absence of a marker is not impossibility."
        });
    }, botMeta = r => {
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
    const schemaFields = new Map;
    const sourceSchemaAudit = src => {
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
    const replicaStateAudit = o => {
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
    const featureNodes = new Map, featureRestore = [], featureEx = {
        value: extrasState(),
        at: -Infinity
    }, indicatorStats = {}, humanLabels = new Map;
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
    }), attachFeature = (o, key, parent, draw, y = 0) => {
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
    }, featureText = (ctx, text, x, y, s, color = "#fff") => {
        ctx.save();
        ctx.font = "bold " + 13 / s + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3 / s;
        ctx.strokeStyle = "#000";
        ctx.fillStyle = color;
        ctx.strokeText(String(text), x / s, y / s);
        ctx.fillText(String(text), x / s, y / s);
        ctx.restore();
    }, featureRing = (ctx, r, s, color) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, 0, r / s, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3 / s;
        ctx.stroke();
        ctx.restore();
    }, resetFeatures = () => {
        for (const m of featureNodes.values()) for (const n of m.values()) try {
            n.parent?.remove?.(n);
        } catch (_) {}
        featureNodes.clear();
        while (featureRestore.length) try {
            featureRestore.pop()();
        } catch (_) {}
        featureEx.at = -Infinity;
        for (const k of Object.keys(indicatorStats)) delete indicatorStats[k];
    }, lockOpacity = (node, key, value) => {
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
    }, featurePlayer = r => {
        if (!r?.Eâ) return;
        const e = exFast();
        if (!isLocal(r)) {
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
        if (isLocal(r) && e.lowHealthWarning) attachFeature(r, "warning", r.Eâ, (ctx, s) => {
            if (!exFast().lowHealthWarning || !Number.isFinite(r["åÈ"]) || r["åÈ"] > 30) return;
            ctx.save();
            ctx.shadowColor = "#ff2020";
            ctx.shadowBlur = 12 / s;
            ctx.globalAlpha *= .25 + .75 * (.5 + .5 * Math.sin(performance.now() / 140));
            featureRing(ctx, 65, s, "#ff2020");
            ctx.restore();
        });
    }, featureWorld = o => {
        const e = exFast();
        if (![ "noChestsVisible", "noFoliage", "transparentFoliage", "cleanLoot", "highlightLoot", "buildMaterialLabels", "deployableLabels", "deployableRadius" ].some(k => e[k])) return;
        const tag = String(o["Àâ"] || ""), rs = resourceSlots(o), root = o["â"];
        if (e.noChestsVisible && (o.type === "chest" || [ "ammocrate", "grenadecrate" ].includes(tag))) lockOpacity(root, "noChestsVisible", 0);
        const foliage = /^(?:tree\d*|jungletree|cherryblossom|bush\d*|grass\d*)$/i.test(tag);
        if (foliage) {
            if (e.noFoliage) lockOpacity(root, "noFoliage", 0); else if (e.transparentFoliage) lockOpacity(o["ÄA"] || root, "transparentFoliage", .25);
        }
        if (e.cleanLoot && [ "gun", "ammo" ].includes(o.type)) for (const x of rs) if (/(?:flareglow|glow|sparkle)/i.test(x.path)) for (const v of Object.values(o)) if (v && v["À"] === x.w) lockOpacity(v, "cleanLoot", 0);
        if (e.highlightLoot && [ "gun", "ammo" ].includes(o.type)) attachFeature(o, "loot", root, (ctx, s) => {
            if (exFast().highlightLoot) featureRing(ctx, 32, s, "#ffe600");
        });
        const special = String(o["ÆåÃ"] || ""), material = rs.map(x => x.path.match(/\/(wood|brick|metal)[0-2]\.png$/)?.[1]).find(Boolean);
        if (e.buildMaterialLabels && material || e.deployableLabels && /^(?:campfire|boostpad|shield|drill)build$/.test(special)) attachFeature(o, "buildLabel", root, (ctx, s) => {
            const z = exFast(), a = [];
            if (z.buildMaterialLabels && material) a.push(material.toUpperCase());
            if (z.deployableLabels && special) a.push(special.replace(/build$/, "").toUpperCase());
            if (a.length) featureText(ctx, a.join(" · "), 0, -45, s);
        });
        if (e.deployableRadius && o.type === "spellfield" && [ "campfireheal", "shield", "drillslow" ].includes(o["Ée"])) attachFeature(o, "radius", root, (ctx, s) => {
            if (exFast().deployableRadius && Number.isFinite(o["éã"]) && o["éã"] > 0) {
                featureRing(ctx, o["éã"], s, "#4edbff");
                featureText(ctx, o["Ée"] + " r=" + Math.round(o["éã"]), 0, -o["éã"] - 15, s, "#4edbff");
            }
        });
    }, featureTick = () => {
        try {
            if (S.renderer && performance.now() - (S.hudLastReport || -Infinity) > 15e3) {
                S.hudLastReport = performance.now();
                const status = S.hudStatus || {
                    captured: false
                };
                log("NATIVE HUD CAPTURE STATUS", {
                    ...status,
                    ownWarningBindings: S.hudWarnNodes?.size || 0,
                    approximationFallback: !status.captured,
                    note: "Exact native appearance is pending; missing/private HUD roots require the captured constructor/source route."
                });
            }
            if (S.renderer && !S.meteorAutoTimer && (extrasState().permanentMeteor || extrasState().lowMatsWarning)) meteorAutoStart("feature watchdog");
            featureEx.value = extrasState();
            featureEx.at = performance.now();
            ownMaterialWarnings();
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
            for (const c of D.querySelectorAll("canvas")) if (c.id !== "playerPreview") {
                if (e.monochrome && !c.hasAttribute("data-brio-mono")) {
                    const old = c.style.filter;
                    c.setAttribute("data-brio-mono", "");
                    c.style.filter = (old && old !== "none" ? old + " " : "") + "grayscale(1)";
                    featureRestore.push(() => {
                        c.style.filter = old;
                        c.removeAttribute("data-brio-mono");
                    });
                }
            }
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
            showIndicator("player", "nearestUi", active[0], "", "#a81020", 90);
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
            knownHumansThisLog: [ ...humanLabels ],
            note: "Human labels tied to V39 IDs only; names are not a classifier"
        });
        for (const x of players.slice(0, 3)) log("REMOTE HUD SAMPLE", {
            id: x.id,
            name: x["Ée"],
            health: x["åÈ"],
            shield: x["Â$"],
            materials: matState(x),
            slot: x["ÈÆ"],
            magazine: x["áAæ"],
            inventory: Array.isArray(x["Åé"]) ? x["Åé"].map(v => v ? {
                type: v.type,
                rarity: v["äã"]
            } : null) : null
        });
    };
    const reconCoverage = new Map, reconObjects = new WeakSet, reconContainersSeen = new Map, reconRemoved = new Set, reconMarkers = [], reconRestore = [], reconNow = {
        source: false,
        sourceUrl: "",
        captures: 0
    }, reconGroups = [ [ "meteor / permanentMeteor", /createWaypoint|ping-meteor-icon|ping-meteor/g ], [ "screenChests / screenAirdrops / screenFishing", /ammocrate|grenadecrate|legendarychest|bubbles|airdrop/g ], [ "HUD challenges / customCrosshair", /Minimap|crosshair|reticle|inventory|healthbar|shieldbar/g ], [ "storm modifiers / invisibleStorm", /movingIcon|circle|safezone|storm/g ], [ "foliage challenges / transparentFoliage", /darktree|cherryblossom|tree0|grass0|bush/g ], [ "loot highlighting / cleanLoot", /flareglow|glow|rarity|gunType/g ], [ "buildMaterialLabels / deployableLabels / deployableRadius", /campfirebuild|boostpadbuild|shieldbuild|spellfield/g ], [ "health / ammo / mats warnings / numericHealthShield", /fullHealth|weaponSlots|selectedWeapon|shield|mats|ammo/g ], [ "player indicators / highContrastPlayers", /playerCount|setID|playerNames|name/g ] ];
    const reconSource = async () => {
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
            const src = raw.replace(/\\x([\da-f]{2})|\\u([\da-f]{4})|\\([0-7]{1,3})/gi, (_, a, b, c) => String.fromCharCode(parseInt(a || b || c, c ? 8 : 16)));
            reconNow.source = true;
            reconNow.sourceUrl = url;
            sourceSchemaAudit(src);
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
                screening: "unresolved; repeated before/after task retired, not scrapped",
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
    }, reconContainers = () => {
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
    }, restoreMarkerHolds = () => {
        meteorAutoStop();
        S.meteorSeen = new WeakSet;
        S.meteorPending = new WeakSet;
        S.sceneRoots?.clear();
        restoreMarkerCapture();
        while (reconRestore.length) try {
            reconRestore.pop()();
        } catch (e) {
            S.errors.push("marker restore: " + String(e));
        }
        reconMarkers.length = 0;
    };
    const holdMeteor = (node, array) => {
        queueMicrotask(() => {
            try {
                S.meteorPending?.delete(node);
                if (S.destroyed || !extrasState().permanentMeteor || S.meteorSeen?.has(node)) return;
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
                    if (child === node && extrasState().permanentMeteor) {
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
                            return extrasState().permanentMeteor ? 1 : v;
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
                const destroyDesc = Object.getOwnPropertyDescriptor(node, "ÊÈA"), destroy = node["ÊÈA"];
                if (typeof destroy === "function" && (!destroyDesc || destroyDesc.configurable || destroyDesc.writable)) {
                    const dw = function(...a) {
                        if (extrasState().permanentMeteor) {
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
            lobbyProbe: "MATCH START separates lobby and match samples",
            meteor: "automatic native waypoint capture · testing; retention visually verified in V40"
        });
    });
})();