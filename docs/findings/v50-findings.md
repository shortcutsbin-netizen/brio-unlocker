# V50 findings — 2026-10-06

## Exact input and proof

V49 export: `logs/runs/v49-log.txt`, 3,209,375 bytes, SHA-256 `fa7de3f1552d00c500a1f5614fa2334073801c34efc0474aa484d17743bf2c99`. Explicit observations are separate. The supplied `main.css` is 45,118 bytes and preserved exactly. Engine is unchanged: 838,390 bytes, SHA-256 `42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4`.

One Play recorded 18,713 incoming packets, 1,260 deep records, 275 schemas, 307 player / 376 container / 300 replica / 2 environment records. Replica lane reached its300 cap; 57 truncations and4 window-registry discovery errors remain explicit. Native engine registry was private/unavailable. Container creates include43 default and4 legendary chests,48 ammo crates,38 grenade crates,26 fishing-bubble objects and4 airdrops. These are recorded lifecycle events, not unique openings. No authoritative pre-open loot list or bot flag appeared in these recorded routes. Missing/private/capped records cannot establish impossibility.

Native HUD capture is complete for5 slots/4 materials/5 ammo cells,9 own-warning bindings and160 retained render arrays.85 complete source chunks exactly match the supplied engine. Nine geometry lines became `[object Object]` because native widget `.text` was itself a drawable with a circular parent; V50 logs string/summary data instead, preserving useful reports without expanding probes.

## Native adapters

- Player physical `ÄA` contains body, limbs, held art/muzzle children, backpacks and glider changes. Build preview `ÁÆ`, grapple `Eå`, rope `æE` and external shadows require separate gates. Local native body/held art stays visible under the established remote-player challenge scope.
- Detached walking/landing trail pools use exact native `/buildart/trailN-[01].png` / custom `/cosmetics/trails/trailN-[01].png` paths. Owner metadata is absent; suppressing only the regular trail timer misses native update/landing emitters. Reached draw-instance gates hide all such particles, including local trails, while opacity/lifetime/simulation remain native. UI explains that scope.
- Genuine aiming blueprint `ÁÆ` plus live `èÂ` build mode is independent from the blue child that native creates inside every placed build. Hide the complete placed root, retaining explicit `AÀ=true` previews only in Blueprints only. All invisible gates both. `AÀ` means isPreview and never identifies bots.
- Loot native `.âê` artwork and `.ÀÅ` rarity/particle branch are separate. Reuse the V49 proven effect adapter internally; add reversible per-instance draw gates, uniform70-unit yellow location square, whole-root highest tier and native popup gate. All gun/consumable/throwable ground items share native gun handling; material/ammo pickups share native ammo handling.
- Native pickup labels are rasterized before injection into a cached top-scene canvas sprite: height120, canvas128, canvas width exactly sprite width+8 (decoded constant), banner width400..1200. Recover that relationship or tag the popup's offscreen canvas through reached child draws; no global Canvas hook. Mask loot popup predicates use actual local `ÁãÀ` gun/material/ammo/consumable type; preserve container/vehicle prompts except in Good flippin luck.
- Native HUD is canvas scene graph, not CSS. Minimap is the square custom-painted map child beside native waiting/moving/player counters. Crosshair has five white rectangles plus the hit-marker child. Health/shield rows are identified by health/shield art and row coordinates; keep selected ammo. Inventory gates use validated template units and smallest complete shared ancestor, excluding health/map roots and clones. Storm uses world `borderScene` and a separate map scene with four red shades plus50px outlined white/black square. Full-map terrain/teammate dots remain when only Invisible storm is active.
- Good flippin luck derives effective values from the challenge registry; saved modifiers/tier choices are never erased. Native remote info gates and reversible name/bar-parent adapters prevent prior assistance leaking. Disabling the preset restores reached visual adapters and restarts selected indicator/bot-observer timers, including when the preset was active before Play. Monochrome/flashlight remain independent visual-only options.
- The existing96 scoped-container observer budget now excludes native image/text leaves that inherit add/remove. Otherwise leaf captures crowd out late-created parent containers, including trail pools. Existing128+32 render-array/3000-node scan budgets remain; no new broad persistent hook. Signature scans are bounded48 children and cached to avoid repeatedly copying large scene roots.

## Presentation and annotations

Warning controls are inline child line items with HP1/ammo6/material4 values and one Reset to default per group. Disabled groups reject both typing and reset. Existing custom values remain valid; reset affects only that group, never enable switches or other groups. Decisions remain inclusive/proven.

Terminal EXTRAS reopens the same settings modal during play, including while minimized. This makes the requested tier/preset cycling reachable when native home buttons are hidden; it adds no separate settings surface or manual arm.

Remote rows share139 logical-pixel width before existing size multiplier. Five slot backgrounds26.2px plus2px gaps fill the ammo-strip width. Materials25.2px native scale, fallback20px icons, replace previous18px sizing. Ammo icon/text heights retain their existing values; spacing distributes across the common width. Clone-only text removal covers ammo counts and centered hotkey captions; native own HUD remains intact. Native artwork, external Small/Medium/Large/XL multipliers and the V45 red-X primitive are preserved.

Every one of763 non-vendored executable blocks and536 functions has adjacent annotation. Stable helper anchors plus branch/loop/fallback/cleanup comments identify purpose, current version/proof, conditions and restoration ownership. Source map and reproducible audit are retained. Vendored Acorn line is byte-identical to frozen V49; source annotation pass produces the exact same minified program. Dist and immutable payload contain zero parsed comments.

## Supporting document and unresolved work

Public root `https://buildroyale.io/` responds with the HTML document; this does not establish a separately named `/index.html`. In DevTools Network, reload, select the main `buildroyale.io/` document, open Response and copy the HTML into `docs/game-sources/index.html`. Sources may label it `(index)` or `buildroyale.io` instead. Raw HTML helps identify loaded script/module/worker URLs and remaining client dependencies. `main.css` is useful for native home/menu interactions but not gameplay canvas widget ownership. No other unseen file is being assumed.

Pre-open contents and reliable bot classification remain unfinished rather than faked. Their normal-profile flags preserve passive recon with existing limits. Additional approved mechanics can reuse this finite, read-only evidence; the current proposal table makes native support and unit/ownership gaps explicit.
