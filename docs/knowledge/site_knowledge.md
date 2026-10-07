# V51 current handoff — 2026-10-07

Current source src/brio.js; direct zero-comment dist/brio-v51.min.js; immutable versions/v51/brio-v51.min.js and readable versions/v51/brio.js. User explicitly authorizes publishing all prepared V50 documentation/analyses/observations/knowledge updates and ongoing appropriate commits to the public shortcutsbin-netizen/brio-unlocker test repository. Do not remove any files without permission. Keep direct dist/brio-v49.min.js as well as its archived duplicate; all historical releases/logs remain exact. Approved V50 handoff published at2bb795375743a4562f29cb60a9c0bb165d6ca616. V50 has NEVER been live-tested; every changed V50 test carries into docs/test-procedures/v51-test-procedure.md. All new V51 visuals remain live-pending too. Existing explicit proof remains distinct from fixture checks.

User decisions recorded for all42 IDs in docs/proposals/v51-decisions.md; denied features are not implemented. Solo only. M04 Show bullet spread draws a selected-gun cone along native aim; native spread/100 reticle scalar is known, but interpreting it as half-angle degrees remains PROVISIONAL. UI and calibration logs state this; fixed600-world-unit visualization length does not claim range/hit probability. M06 replaces native deathPass battle-pass area with a bounded Match breakdown after native death event on win/loss, preserving header/buttons and dedicated Battle Pass browse. Terminal totals, observed HP/shield loss, elimination names, observed own projectile counts (not shots), sampled movement and held-item time are available. Per-player damage rankings cannot be reliably attributed: native loss events have no authoritative attacker/victim. Render explicit unavailable, never nearby-player guesses or fabricated zero rankings.

M09 builds/M10 breakable objects (M25 vehicles included) get outline colors: >75% green; >50..75 yellow; >25..50 orange; <=25 red. Missing/invalid max/current health produces no outline. M12 nearest safe-zone edge uses native square geometry, blue by default, M13 distance built in. During movement it points toward decoded TARGET safe zone, not private interpolated current edge. Inline swatch/color customization for player/chest/airdrop/safe-zone/loot indicators. M16 Loot indicator dynamically combines native ammo-table gun keys with exact side-view inventory assets; select multiple gun+rarity pairs gold4/red5. Match only observed current gun pickups, nearest12 offscreen arrows with native inv4/inv5 backgrounds/art. Gold spawn eligibility is not inferred or promised for every gun. M20 Highlight ammo for owned guns uses current native weapon slots/ammo mapping and actual stackN ground pickup assets; materials excluded. M22 Longer bullet trails includes M23 throwables as observed past flight, never predicted trajectories. Max128 histories x32 points,1.2s expiry,30ms per native-drawn projectile sampling; simulation/lifetimes unchanged.

C01 No map hides mini/full native map scenes; saved noMinimap ID retained. C06 No pickup labels; C09 No hit-confirmation marker; C10 No floating damage numbers (shared healing text pool also hidden); C11 No reload/charge progress; C12 Invisible bullets/throwables; C15 Hide weapons (local+remote guns/pickaxe/build preview); C16 No storm countdown. Actual timer asset paths are timer.png/storm.png, with text-child/counter-holder validation. Progress uses full native reload33arc/22text/40circle or charge8cells/progress6px signatures; never body-grip/damage-direction branches. Projectile hiding silences shared detached trail particles, including player trails, because owner metadata is unavailable. Existing remote All players invisible scope remains; Hell now includes Hide weapons, so local held art also disappears while local body stays native.

Hell is the display title of saved goodFlippinLuck; effective settings derive every gameplay challenge/highest tier ON, every modifier OFF/locked without erasing preferences. Monochrome/flashlight stay independent. Warning reset, five loot tiers, two build tiers, reopened remote held/trails, larger remote inventories and all V50 HUD restoration checks remain required. Proven warning decisions/selected-border motion/foliage/meteor/monochrome/cosmetics retain proof, no recurring unrelated chores. Color changes require only changed color checks for the proven existing arrows.

New local500ms sampler; current native arrays only, no persistent broad browser hooks. Native HUD signature inspections capped48 children; existing draw-gate4096/scoped96containers/render128+32/3000node/sec limits retained. Postgame names use textContent. Decoder delegates once, preserves identity/exceptions/descriptors; stats read before deep log caps but only within existing15-minute decode-observer lifetime. Source callback recon now includes bullet/throwable/car/baller alongside existing classes. Stats metadata bounded256players/100eliminations/64held types/40spread calibration pairs; all reset at ordinary Play/destroy. Full source/deep container/bot budgets unchanged; no fake contents/NONE/bot classifiers. Private/capped evidence is not proof of absence.

Reference engine unchanged SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Focused reproducible analysis tools/analysis/analyze-v51.cjs outputs docs/analysis/engine/v51-approved-mechanics.json with exact source coordinates; general analyzer defaults to v51-engine-analysis.json and never overwrites V50 reports. Complete code/payload regression, source annotation/vendor audit, zero-comment archive equality are recorded in docs/audits/v51-validation.md and source map. No V50/V51 live log supplied; latest actual run remains V49. Native live pixels, units, private registries and performance require user observation.

Main HTML root was established in V50; a separately named /index.html was not. DevTools Network > reload > main buildroyale.io document > Response can be saved as docs/game-sources/index.html; Sources may label it(index). Do not assume unseen modules. All previous knowledge follows unchanged below; current user decisions take precedence over historical directions.

---

# Current game update — V50, 2026-10-06

Current release V50, 2026-10-06. Source src/brio.js; direct zero-comment dist/brio-v50.min.js; identical immutable versions/v50/brio-v50.min.js. Previous exact V49 source frozen at versions/v49/brio.js; prior dist moved byte-for-byte to dist/archived/brio-v49.min.js. Never overwrite historical releases/logs/assets. Current input logs/runs/v49-log.txt (3,209,375 bytes; Git blob fea72dfda00e7a5d94f936dd342a5fed6f4479d7), explicit report logs/observations/v49-2026-10-06-observations.md, supplied exact docs/game-sources/main.css (45,118 bytes). Current handoff: docs/findings/v50-findings.md, docs/status/v50-status.md, docs/test-procedures/v50-test-procedure.md, docs/proposals/v50-additional-features.md, docs/audits/v50-source-map.md and docs/analysis/{runs,engine,source}/v50-*.

Latest explicit proof: threshold warning decisions inclusive<=, local-only HP, flare exemption, grappler5/scraps, saved values, selected own-border lift and transparent foliage work. Retain prior meteor/reset, monochrome, indicators/names, cosmetics and chest hiding proof. No recurring live chores/blue flags for them. High contrast retained/deferred/unflagged. V50 changes only warning controls/reset, remote inventory presentation, tiers and new/reopened challenge dependencies. Remote art/V45 red-X primitive/external size multipliers retained; slots/materials intentionally larger, slot hotkeys/counts removed only from clones. Native own HUD preserved. Parent warning rows remain green; new reset controls get CHECK RESET.

Defaults HP20; ammo native order light30/medium30/heavy10/shells15/rockets5/grappler5; materials wood30/brick30/metal30/scraps1. One inline child row per warning, one reset per group, disabled/grey inputs and reset when warning off. Reset only that group, never other values or enables. Zero warns known zero, unknown/negative do not; gun warnings loaded+matching reserve, grappler charges only, flare exempt; remote numeric resource warnings share thresholds; HP warning native local only.

Standalone Remove loot glow/effects removed from UI/saved effective modifier keys, but proven code retained internally. Mask loot tiers: item art hidden/rarity retained; rarity hidden/art retained; popups only; locations only (uniform yellow square, no popup); all invisible. Native gun/consumable/throwable pickups use gun branches, materials/ammo use ammo branches. .âê artwork/.ÀÅ glow+future particle children independent, highest gates full root; native proximity popup cached top canvas gated by identity/source-backed dimensions/type. Container/vehicle prompts remain except in composite. Do not confuse this with unresolved always-visible pre-open container contents.

Invisible builds: Blueprints only keeps genuine aiming ÁÆ while èÂ building and explicit world AÀ=true preview, hides COMPLETE placed root incl blue base. All invisible hides previews too. AÀ is isPreview, never AI. All players invisible reopened for remote physical/held/muzzle/glider/grapple/shadow/emote/preview branches; native local body/held art retains established remote-only scope. Detached walking/landing trail particles have no stable owner, so all exact native/custom trail particles (including local) are gated, UI explicit. Native opacity/lifetimes/simulation unchanged.

Good flippin luck derives effective highest-tier gameplay challenges from the registry, forces every modifier false/locked, gates native remote information assistance, and never erases saved choices/values. Off restores previous modifiers/tiers/visuals, bar parents/offsets/latest native opacity, roof resources and indicator/bot-observer timers even when enabled before Play. Monochrome/flashlight are explicitly visual-only/excluded. Future gameplay challenges auto-join; future tiers must define composite highest value. Terminal EXTRAS reopens the SAME existing modal in match/minimized; no new settings surface or manual arm.

New No minimap/crosshair/inventory/health-shield HUD/Invisible storm gates are reached-instance native éa wrappers, not CSS/global Canvas hooks. Keep timer/kills/player counters when minimap off, selected ammo when HP/shield off, map terrain/teammate markers when storm off. Signatures validated from source graph/resources. All gates/delegation/descriptors/nodes restored at Play/destroy; clones excluded. New cap4096 draw instances per Play; signature scans <=48 children/cache, existing96 container observers now exclude image/text leaves to reserve late parent discovery. Existing12s global push/unshift and separate12s forEach,128+32 render arrays,64 extra roots,3000node/sec scan and deep caps remain unchanged. Never add broad persistent hooks.

V49 one Play:18713 packets,1260 records,275 schemas,307 player/376 container/300 replica/2 environment; replica capped300,57 truncations,4 registry discovery errors; private native engine unavailable. Creates43 default+4 legendary chests,48ammo crates,38grenade crates,26bubbles,4airdrops are recorded lifecycle events, not unique opens.5slots/4materials/5ammo native capture,9 own warnings,160 arrays.85 source chunks reconstruct unchanged engine SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Nine circular native text geometry reports lost in V49 are summarized as plain data in V50. Contents/bot classifier still unresolved; no inferred lists/NONE/name/ID/isPreview classifications. Missing/private/capped coverage never establishes impossibility.

Normal blue flags6: screenChests,screenAirdrops,screenFishing,identifyBots,inventorySlots,inventoryMaterials; ammo enabled only as presentation dependency. Challenges nine CYCLE FOR TEST flags are independent/cycle checks, not simultaneous all-on baseline. At most3 extra action TYPES per match; repeats allowed: settings changes, naturally encountered loot/popup inspection, aim/place builds. Match A inventory+tiers+individual native HUD switches, Match B composite pre-Play/live/restoration; optional full map stays within cap. Ordinary Play/export, passive container/bot observation; no special contents hunt, old arm/before-after buttons, meteor/mono/cosmetic/warning-decision chores. Unencountered conditions are not failures. Full COPY RESULTS logs/runs/v50-log.txt plus changed-surface visual outcomes.

35 integration scenarios per source/payload (70 total): previous32 dependency checks plus3 full challenge fixtures (prototype methods, own methods, composite initially ON), actual UI/reset/tiers/late trails/cached popup signatures/negative lookalikes/native HUDs/placed-preview transition/held replacement/modifier exclusion+timer restore/secondPlay/destroy/native returns/errors. Fixtures are not live pixel proof. Every763 non-vendored executable blocks and536 functions annotated; npm test audits adjacency and unchanged vendored Acorn SHA. Dist/archive260447 bytes, SHA2567486aaf8894ea7eaa367ddb6c5c5e28852f755c1ad678cc6a82744a3972e413d, zero parsed comments. Engine analysis read-only AST includes57 callbacks/198 decoded dictionary fields, proposed routes and exact CSS hash. Additional42 table ideas are proposals only pending user approval; never implement them merely because a route exists.

Root https://buildroyale.io/ serves the HTML document; a separately named /index.html is not established. Ask for DevTools Network -> reload -> main document buildroyale.io/ -> Response -> copy as docs/game-sources/index.html to confirm loaded script/module/worker dependencies. Sources may call it (index). main.css covers DOM/home/menu, not gameplay canvas HUD. scheme.js is only deployment flag, msgpack.js codec; packet remapper is internal ãè.éèé. Never execute fetched source/change encode/send/native authority.

---

# Current game update — V49, 2026-10-06

Current release V49, 2026-10-06. Readable src/brio.js; direct zero-comment dist/brio-v49.min.js; immutable versions/v49/brio-v49.min.js. Exact latest input logs/runs/v48-log.txt is 4,667,213 bytes, blob4cd9538ea9e76fa70f26411db88dfddb2d13c058. User observations separately labeled logs/observations/v48-2026-10-06-observations.md. Current handoff docs/findings/v49-findings.md, docs/status/v49-status.md, docs/test-procedures/v49-test-procedure.md, docs/analysis/runs/v49-v48-analysis.json and docs/analysis/engine/v49-engine-analysis.json. docs/relocations.json maps every old path to its new path with original blob SHA; docs/README.md explains layout. Current user directions supersede historical sections, retained byte-for-byte.

V48 user confirms custom threshold values work; log confirms defaults first Play, custom HP35/ammo[50,100,5,15,5,10]/mats[350,30,10,1] next Play. Saved choice parsing/persistence proven. V49 adjusts child-row UI under each warning option (health1/ammo6/material4 each one nonwrapping row), inclusive count<=threshold, grappler default5, local-only health ring, signal flare fully exempt, and live native selected-slot borders. Valid saved custom values remain untouched; missing/invalid values use new defaults. Zero means known zero warns, NOT a per-type off switch. Toggle corresponding modifier to disable warnings/grey controls. Defaults HP20; native ammo order[light30,medium30,heavy10,shells15,rockets5,grappler5]; mats[wood30,brick30,metal30,scraps1]. Unknown/negative state never warns. Local gun totals loaded+matching reserve, grappler charges only; remote reserves use same inclusive per-type thresholds and known grappler charge slot outline. Health warning is solely native local player; remote resource warnings retained.

Native frame shifts aÃ[selected].ë.Ä=-10. HUD reconstruction replaces child arrays while stale parent pointers may survive (v48 own binding count13). V49 own gun warning is attached to stable holder and measures current live invN background/empty rectangle through bounded32-node HUD walk and validated transform chain each draw. Native lift/size/position tracked; stale/hidden/unreachable targets suppress. Matched overlay cleanup verifies actual array membership, not parent pointer alone. Remote proven inventory art/layout/fonts/18px cells/red X and slot-count removal unchanged.

Loot glow/effects FAILED explicit V48 report; no Highlight loot option returns. Native gun/ammo constructor places rarity glow in ÀÅ; gun frame emits polygon particles into that branch. V49 only gates ÀÅ opacity0, preserving item root and âê artwork and native simulation. Includes future particle children via native éa early-return gate. Toggle-off/cleanup restores latest native opacity writes; descriptor restoration corrected and fixture-tested. V49 live glow/particle appearance still pending.

Inventory presentation, mono startup/restoration, meteor persistence/reset, arrow names/indicators, cosmetics/invisibility, chest hiding retain explicit proof/no recurring flags. High contrast retained/deferred/unflagged. Retired labels/radius/Highlight loot/invisible-foliage remain removed. Only9 flags: warnings3,screening3,bots,cleanLoot,transparentFoliage. Proven inventory rows enabled as remote resource display dependencies, not full appearance retests. V49 manual extras <=3 action types: threshold/option edits; normal slot switching; brief loot-effects observation. No meteor/mono/cosmetic/map chores, no special popup hunt.

Contents must always appear above every detected unopened normal/legendary chest/crate/airdrop/fishing object immediately, independent of proximity. Native nearby type names do not qualify. Still unresolved/unimplemented; no fake label,contents inference/NONE/bot heuristics. V48 has2Plays:1130/1485deep records,19718/31167packets; container261/483 below700; replica300 capped both, player301/350. Native registry missing both,2/3registry errors; snapshots55/73truncations.91chest creates90default/1legendary;93ammo/87grenade crates,54bubbles,9airdrops. Recorded lifecycle events not unique openings. Full85source chunks match unchanged engine SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Missing/private/capped records cannot prove universal server absence.

Supplied docs/game-sources/scheme.js (36bytes) only sets window.VULTR_SCHEME='build_prod'; NOT protocol remapping. docs/game-sources/msgpack.js (51128bytes) is the codec with extension support. Actual ãè.éèé is INTERNAL engine function at238073..238330: recursive reverse-dictionary key rename, arrays retain indices, unknown keys logged/retained. This corrects previous external-remapper assumption. Native decoder probe already sees original decoded fields before remapping; no new encode/send/independent decode/source execution. Static analyzer emits complete function and new source hashes; runtime logs bounded SOURCE PACKET REMAPPER once with raw source audit. No authoritative pre-open content/classifier identified. Request main Sources > buildroyale.io > (index) document as docs/game-sources/index.html before next pass: confirm loaded scripts/worker/modules and versions, identify any client source still unaccounted for. Do not assume additional modules exist.

Repo cleanup relocates all old docs/logs/tools/releases by purpose, preserving exact original bytes/duplicate artifacts and source/packet evidence. History links use relocation guide; old textual paths remain historical rather than being rewritten. Knowledge update prepended; previous full bytes remain suffix.32integrated scenarios against source/payload include previous29 adapted to inclusive/local-only semantics plus selected-lift/stale-parent-array and own/prototype loot-gating/late-particle/native-write/toggle/restoration cases. Fixtures are not live pixel/private/server proof. Source extensively annotated/minified zero comments; previous immutable archives remain exact.


# Current site update — V48, 2026-10-06

Current release V48, 2026-10-06. Source src/brio.js; direct comment-free dist/brio-v48.min.js and identical immutable versions/brio-v48.min.js. Latest exact input logs/v47-log.txt:5,141,313bytes, Git blob2982ae782b7cfbcbfdbf6a2fa6046666714c8b61. Explicit user report summarized separately in logs/v47-2026-10-06-observations.md. Read docs/v48-findings.md, v48-status.md, v48-test-procedure.md, v48-v47-analysis.json and v48-engine-analysis.json. Latest user directions supersede historical sections, which remain byte-preserved.

V47 user confirms finalized remote inventory presentation and instantaneous monochrome entry; prior explicit meteor retention/reset, arrow names, cosmetics/X-invisible modifiers and chest hiding remain proven. Remove these from recurring required tests. Keep options and regression checks. V48 changes remote slot-ammo text removal (fill/stroke clones, no native source mutation), shared warning settings and charge/scrap warnings; preserve native assets,18px slots,size multipliers,captions,red X and separate ammo row.

Threshold UI is one total horizontally scrollable nonwrapping row: HP + Light/Medium/Shells/Heavy/Rockets/Grappler + Wood/Brick/Metal/Scraps. Corresponding fieldsets disabled/grey when modifier off. Defaults strict-under HP20; ammo native-order[30,30,10,15,5,1]; mats[30,30,30,1]. Grappler1 provisional because user omitted its default. Native reference proves wAmmo[slot-1] charge-only HUD for grappler/flare, mats[3] gear uses scrap.png. Own gun borders use loaded+matchingreserve except charge-only grappler/flare; remote reserve numbers use the same per-type settings. Remote grappler charge warning outlines its unchanged slot because no separate ammo row exists; no count reintroduced. HP outline shares threshold for local/visible remote players. Zero disables one type; equality,unknown/negative counts never warn; invalid input/storage keeps valid values/defaults. Settings persist Play/reinjection; transient HUD/probe/meteor state resets.

Only9 blue flags: screenChests/screenAirdrops/screenFishing/lowHealthWarning/lowMatsWarning/lowAmmoWarning/identifyBots/cleanLoot/transparentFoliage. Proven inventory rows/healthBars may be enabled as display dependencies without recurring geometry chores. High contrast retained/deferred/unflagged. Retired labels/radius/highlight/invisible-foliage remain removed. No meteor/monochrome/fullmap/cosmetic chores. See focused procedure for defaults/custom/equality/zero/disabled/persistence and available grappler; at most3extra actiontypes. Unencountered conditions are not failures.

Contents goal: always-visible contents above every detected unopened chest/legendary/crate/airdrop/fishing spot immediately, independent of interaction distance. Native proximity names do not meet it. Current source/runtime has no authoritative list; feature unresolved, not implemented/impossible. V47 log has2Plays,70chest creates66default/4legendary,64ammo crates75grenade crates69bubbles5airdrops. Deep records1375/1303; container373/312 below700, player/replica lanes capped350/300; registry unavailable both,4registry observation errors first/0second. Packets29102/20712; full85source chunks match reference SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Known container fields remain geometry/health/landing/chestType. No authoritative contents/bot field,seed/NONE inference or name/ID/isPreview classifier. Missing/private/capped evidence cannot prove absence.

Request next-pass docs/scheme.js and docs/msgpack.js from Sources > buildroyale.io > js: native external ãè.éèé remaps msgpack.decode output; scheme may resolve packed fields/indirection, msgpack confirms codec/extensions/nested decode. File names are user-reported; inspect files before asserting definitions. No external source execution/outgoing changes. Rebinding diagnostics now retain64novel geometry signatures perPlay instead of1255repeat V47 events, with unchanged live binding behavior. Historical archive/log/engine bytes preserved; comments extensive in source,zero in minified.29integrated scenarios against source/payload, including25prior baseline with explicit legacy threshold settings and4new warning/control/native/fallback/charge/migration/secondPlay cases. Fixtures do not prove live pixels.


# Current site update — V47, 2026-10-06

Current readable source src/brio.js; direct comment-free dist/brio-v47.min.js and identical immutable versions/brio-v47.min.js. Latest exact run logs/v46-log.txt (7,532,752 bytes, blob83ba1c7c4c05a7828004f043684a19cc9e401a1e), with explicit logs/v46-2026-10-06-observations.md. Read root AGENTS.md and docs/v47-findings.md, v47-status.md, v47-test-procedure.md, v47-v46-analysis.json, v47-engine-analysis.json. All previous text below retains original bytes as historical evidence; older test/feature instructions do not override this section or the latest user.

User confirms V46 larger arrow names, meteor persistence/no next-match carryover, all cosmetics/X-invisible modifiers, monochrome effect/restoration and chest hiding. Inventory icons correct, but size/X worse than v45. Labels/radius/highlight/high contrast were off. No contents popup noticed. Own gun-border appearance has no new explicit verdict. Do not infer passes for disabled options.

V47 restores v45 remote weapon display: fit native background into18px independently of caption/art extents; draw unchanged v45 X after native downscale restoration (1.2px displayed stroke,2px inset). Preserve Small.9375/Medium1.25/Large1.625/XL2.0625 and v46 all-gun-slot capture/warnings. Remove build/deployable labels, deployable radius, Highlight loot and opaque foliage UI/callbacks/required flags; ignore stale saved keys. Keep transparent foliage. Keep high contrast's existing implementation/UI but defer it and remove its blue flag. Current primary surface19 matching flags, no build/deployable chores. Screening rows honestly say unresolved passive recon, no inferred NONE or implemented popup.

Monochrome applies in Play/toggle synchronously; root CSS covers new unmarked canvases and helper preserves/composes original inline filters, restoring on disable/cleanup. No MutationObserver/render hook. Intended to remove old two-second timer gap; actual loading frames await live check. Preserved name/meteor/cosmetic mechanisms remain controls.

V46 four actual Plays; chronological deep record totals1190/1285/907/1660, errors10/0/3/3; last container700/replica300 lanes capped. 82chest creates:73default/9legendary;122ammo crates/89grenade crates/191bubbles/14airdrops,273airdropupdates, including repeated native lifecycle events (not unique opened counts). Known fields geometry/health/landing/chestType only; no proven loot list/seed/NONE/classifier. Native environment river/riverWidth/locations/resources/resourceNames/houses/zoomed; target resourceNames not a contents list. Native registry missing; HUD5slots/4materials/1ammo, fallback. Fullsource85chunks matches reference SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Native circle real lobby/moving/waiting signals confirmed; label rearm epoch was off byone and is corrected inV47.

V47 only remembers target player/chest/object/airdrop IDs within600, bounds routine container health/geometry/landing values, retains novel fields within unchanged1800/8MB/15min budgets with reserved schema350/player350/container700/replica300/environment100. Stage-specific errors get bounded examples; source separate2Mchars. Decoder/callback identity/arguments/returns/exceptions unchanged, original calledonce, restore oncleanup. No outgoing/ownership mutation/source execution/bot or contents guesses. Caps/missing events cannot prove universal impossibility; features unresolved, not retired on nohits.

Readable source111comments/100stable BRIO helper anchors, maintenance map/native key glossary/restore ownership/async guard/cap/regression contracts. Vendored Acorn untouched; minified comments zero. 25integrated scenarios against source and payload, including restored18px/X, retired keys/UI, deferredcontrast,700nontargetIDs/1000landingupdates/lateunknownfield, immediate/newcanvas/secondPlay mono/restore plus prior23baseline scenarios. Fixtures not pixel/loading proof. Current live procedure:19primary flags, normalPlay, optional2s container pause and postexpiryfullmap (at most2extra actiontypes), secondPlay mono without reinject to check entryflash/oldmarker; optionalthirdPlay monooff/chesthide. CompleteCOPY logs/v47-log.txt plus actualvisualverdicts/conditions; no mandatory specialemote/build/manualarm chores.

---


# Current site update — V46, 2026-10-06

Latest live evidence: unchanged logs/v45-log.txt (2,961,380 bytes; blob904fbb61c8a131d1c4e6d19b9f81652059cd3d9a) and logs/v45-2026-10-06-observations.md. Current source src/brio.js, direct comment-free payload dist/brio-v46.min.js and identical immutable versions/brio-v46.min.js. Read root AGENTS.md, docs/v46-findings.md, v46-status.md, v46-test-procedure.md, v46-v45-analysis.json and v46-engine-analysis.json. Previous sections below retain their original bytes and are historical, including old release instructions.

User V45 feedback: general appearance correct; materials correct; in-match meteor worked; names too small; low-ammo box misplaced; old meteor remained next match. Normal chests, ammo/grenade crates and fishing were exercised; legendary chest/airdrop not confirmed. Do not convert a general visual report into exhaustive pixel proof.

V46: nearest-player name 16px/18px with larger upright two-line label; five ordered native weapon holders excluding pickaxe, including empty rectangle roots; red glow attaches to each gun slot independently of selection. Finite nonnegative displayed ammo below20 warns (loaded + matching reserve; grappler/signal flare loaded only); exactly20/consumables/unknown do not. Live native ammo emblem overrides AST; safe scalar alias/arithmetic interpretation resolves33 reference mappings, rifle index2. Own material and remote numeric warnings preserved. Native material validation includes icon root itself. Six-slot/rebuild fixtures pass; live geometry still requires explicit observation.

Ordinary Play restores/detaches prior retained meteors, weakly retires old nodes/icons, clears per-match world/HUD/inventory/tracking/container/bot/scene state and prevents queued/awaited old-generation work. Saved selections/custom cache persist; source/image cache and diagnostic export persist. Fresh meteor retention remains enabled. MATCH STATE RESET logs zero runtime collections and epoch; two Plays without reinjection tested. User live second match is essential. Native circle waiting/moving and current incoming local glide pair supplement phase; no bot inference.

V45 source chunks85 reconstruct exact reference SHA25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4. Incoming20,184; schemas281; replicas80; recordcap1800; approximate snapshot436,249; truncations22; error1; private engine missing. Target payloads1724: playerupdates1706/create10/remove6/setID2. Repeated players exhausted records before useful container payloads. No negative contents/bot conclusion is justified. Native HUD ended slots2/materials4/ammo0; filled/empty native root distinction and broad ancestor capture explain misplaced ammo warning. Phase remained lobby despite real gameplay.

V46 retains 1800records/8MB/15min/80000packets/200replicas/600incomingIDs/350schemas with reserved lanes schema350/player350/container700/replica300/environment100. Changed-field dedup and bounded initial player changes preserve container capacity; environment manifests and 24-entry target chunks preserve fields beyond terrain truncation. Lane caps/suppression/epoch/circle/missing hooks explicit. Decoder/native callbacks delegate once unchanged; no network/outgoing/ownership mutation or source execution. Contents/bots remain unresolved; renderer list routes, droid/wander/isPreview/name/ID heuristics stay retired. Unencountered conditions/caps are not impossibility.

23 integrated scenarios pass for source and payload; build verifies zero minified comments and exact archive identity. Fixtures are not live proof. Primary live procedure has24 matching blue flags and at most3 extra gameplay action types: two-second unopened-container pause, post-expiry full map, brief builds/deployables. Same-session second normal Play verifies reset; optional later hiding/monochrome/cosmetic-mode comparisons cover conflicting settings. No manual arm/content/emote chores. COPY RESULTS exports complete log across both matches to logs/v46-log.txt. All implemented and planned features remain tracked in status; no old bytes are overwritten.

---


# Current site update — V45, 2026-10-05

Newest live run logs/v44-log.txt (exact blob92a6245973fb4d68e535128fa74d4f78f101b42c,798834 bytes). Read labeled observations, docs/v45-findings.md, v45-status.md, v45-test-procedure.md and v45-engine-analysis.json. Current editable src/brio.js, direct complete dist/brio-v45.min.js, identical archive versions/brio-v45.min.js. Root AGENTS.md is current authority. Earlier updates below are historical and retain their exact wording/bytes.

V44 user explicitly confirms meteor on both maps, equal bars/numbers, low-health warning, nearest arrows and remote warning numbers. These are preserved/proven. Own HUD warnings failed: all4 captured records were +5 pickup particles, with0 slots/0 ammo. V45 rejects particle/slot-emblem false HUD captures, observes actual rendered callbacks past general capacity, reserves32 HUD arrays beyond128 general, scans up to64 overflow reached parents with unchanged3000/second scan/96 native observer caps. Templates/own borders follow live rebuilds without the earlier80-capture lifetime cutoff; detailed widget logs cap32. Own finite materials<30/ammo-type<20 get independent red glow/flashing borders; remote numbers retain confirmed behavior. Exactly30/20/unknown do not warn.

Full native docs/engine.js was added by user while this turn ran, at8728b6b31f0f2eccb7142f5842dfa08dfbe9ae60. Raw SHA-25642ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4,764701 characters. Original bytes preserved. AST analysis156450 nodes/198 schema fields/20 callbacks. Own ammo cells use stack0..4, not inventoryammoN emblems (ammoN.png). Source inventory side assets scar/heavysniper are separate from held top-view art. Native gun ratio1.04/anglepi/4, consumable ratio.7 with per-type changes; V45 captures native alias/style/method/font/background bounds/opacity, keeps slot emblems separate and binds remote captions/ammo data. Adds red X only to empty slots and optional player name below arrow distance with upright rotation. Exact pixel match remains live-pending; fallback/incomplete rows explicitly reported.

Contents: full chest create reads only chestType, update empty; generic object handling exposes geometry/health/landing/subtype, hasWeapon pertains meteorite, not fishing/NONE. These renderer list routes are closed for this source. Bots: droid dictionary + aggregate HUD references only; wander dictionary-only; player callbacks no authoritative classifier. No impossibility conclusion or UI retirement. Native server selection timing and incoming unknown/discarded fields remain unresolved. Names/IDs/distances/isPreview/cosmetic Robot and old labels remain invalid classifiers; only current local user is human ground truth.

V45 deep suite uses original native decode return snapshots before remapping, optional reachable registry callback taps, first/change/near/disappearance/prototype records including late players/containers, full raw runtime source chunks/hash plus AST dictionary/callback/reference audit. No outgoing/entitlement/socket changes or independent decoder; native returns/this/args/exceptions preserved. Deep15min/1s ticks;80000 packets/1800 records/approx8MB snapshots/200 replica identities/600 incoming target IDs/350schemas; snapshots depth8/1400values/240keys. Cap/omission/accessor/error/unavailable coverage explicit, source max2M chars separate. Terrain subtype filter prevents budget starvation. Entire fetched source is reconstructed from9000-character JSON chunk text, never executed. Full-source/current hash is needed to assess deployment identity; private callback hooks are not assumed reachable. No finite log can establish universal impossibility when caps/routes/events are unexercised.

Eighteen scenarios pass against source and exact direct payload, including actual full engine parsing/chunk reconstruction, stack HUD/slot emblem separation, pickup rejection, capped discovery, repeated HUD replacements beyond80, own/remote thresholds/unknowns, native text and asset preservation, two-line upright labels, decode/registry preservation/restoration and earlier cosmetics/emotes/roof/meteor/lifecycle fixtures. Live V45 pending. Next run all17 blue flags, normal Play only, pause unopened encountered containers, full map after meteor expiry, then complete COPY RESULTS plus visuals. Terminal preview is bounded but export complete. No special recon/emote/start button or >2 extra gameplay action types.

---

# Current site update — V44, 2026-10-05

Latest full run logs/v43-log.txt (790 lines, 812161 bytes); labeled observations logs/v43-2026-10-05-observations.md. Read docs/v44-findings.md, docs/v44-status.md and docs/v44-test-procedure.md. Editable src/brio.js; complete direct Console payload dist/brio-v44.min.js; identical archive versions/brio-v44.min.js. Old logs/releases/literal knowledge appendices remain unchanged. V43 dist duplicate removed with exact archive retained. Authenticated GitHub read/write works.

User says black numbers/white outline improved; native HUD matching and own material warnings failed, meteor persists on neither map. V43 had zero native HUD capture/bindings; meteor startup/96 observers ran but capped repeated depth-first scan acquired no marker. V44 adds a 12-second automatic Play native forEach discovery, then at most128 own rendered-child-array observers (including validated empty container child arrays); global method restored. Resumed breadth-first scene scan remains3000 visits/1000ms, native container observers96. Both meteor group/icon and direct sprite expiry paths retained/restored. No persistent broad Canvas hook or outgoing/source-evaluation change.

Remote inline inventory reuses actual captured native image resources/relative geometry/draw methods and parsed source asset aliases; supports native plain-object factories as well as constructors, missing lobby item artwork and rarity updates. Exact weapon geometry, selected-slot/quantity captions and closed font arguments remain live/source-pending; incomplete rows report fallback. Do not claim pixel identity. Own wood/brick/metal outline <30 is retained. New remote material numbers<30 and ammo-type numbers<20 flash red; unknown counts do not warn; fourth material semantics are not invented. Low ammo joins16 blue flags. Shield height follows health height with restored native writes; black/white numbers and upright arrow labels retained.

No MATCH START product/test button. Ordinary Play arms everything; phase from finite native local glidingTicks>=0 and maxGlidingTicks>0 is logged automatically. V43 native callback maps these fields; samples include lobby -1/-1 and gliding148/200. Unsupported/unobserved mode transition must remain unresolved; rendering does not depend on phase. Next test only pause-unopened-container and post-expiry full-map actions, then COPY RESULTS.

Contents and bots remain unresolved, not proven impossible. V43 renderer chest create341 chars/update15 empty narrows only that path; raw receive/discarded creation payload/packing indirection/loot timing remain. V44 adds source decoder/handler/droid/wander/seed/loot/HUD asset candidates, never evaluates them or invents classifications. User only confirms chest interactions; captured ammo/grenade/fishing/drop objects do not prove exercise. Current local renderer alone is human ground truth. Do not reuse V39 labels or treat isPreview/cosmetic Robot/aggregate droid score as bot identity.

Ten integrated scenarios pass against source and exact minified payload, including detached plain-object HUD/empty map arrays, late markers after global restoration, missing lobby art, native alias lookup, warning boundaries/unknowns, shield restoration and automatic phase/no button, plus prior cosmetics/emotes/roofs/arrows/features/export/lifecycle cases. Live acquisition/pixels remain pending. Full feature status includes completed/preserved baseline, changed/yellow surfaces, unresolved recon and planned items. This update supersedes old test/style/access instructions below.

---

# Current site update — V43, 2026-10-05

V42 source log still records `/js/uOfrVi.js`, 764701 characters; offsets/obfuscated fields are deployment-specific. Direct source access from this execution environment was unavailable, so source reasoning uses preserved log evidence and V43's bounded same-origin runtime inspection. No logged/fixture draw is pixel proof.

V42's meteor timer/observers/hold never initialized; no startup/scene entry exists. V43 initializes through an epoch timer, logs before discovery, arms timer before guarded scanning, isolates throwing scene/window fields, and repairs missing timer through watchdog. The unguarded V42 path fails in a hostile-property fixture, but the site's exact thrown property remains unknown. Scans keep 3000-node/1000ms and 96-container limits; disconnected map roots remain unproven. Proven V40 native retention is retained; new acquisition awaits live feedback.

Native source dictionary evidence: `AÀ=isPreview`, `Åé=weaponSlots`, `ÈÆ=selectedWeapon`, `äã=rarity`, `áé=mats`, `áAæ=wAmmo`, `åæ=ammo`, `E_=locker`, `Â$=shield`. These are semantics, not AI/contents evidence. V43 audits actual dictionary assignments, separates create/frame/update/remove callback candidates, and samples settled native/replica own fields under decoded names (including newly arriving players). No outgoing hooks or classifier. Chest/drop/fishing pre-open selection/seed/table/payload and private/raw receive routes are not excluded. No impossibility conclusion or UI removal.

Own material warnings bind only captured native HUD wood/brick/metal display geometry and finite raw local counts<30; no fourth-material assumption, summed warning or remote outlines. Glowing/flashing health outline remains local HP≤30. Numeric bars now black/white, native scaled fit/clip. Arrow colors/white-black meter text/shaft rotation and freshness suppression unchanged.

Remote inventory native replicas capture widget constructors, child resources/geometry/style, and clone through existing native constructors; remote material/ammo count, item art/rarity bindings are applied. Native load bookkeeping is set on replica art. Already-generated replica widgets are excluded from discovery; inactive-player clones clean up. Five-item attachment/size/row toggles remain. Source logging exposes unsupported constructors/missing private HUD roots; unavailable rows retain old fallback with explicit status. Exact native selection/count-caption/closed-over-font binding still needs source/live evidence where unresolved. Do not claim pixel identity yet.

Latest detailed evidence: `docs/v43-findings.md`; next run: `docs/v43-test-procedure.md`. This update supersedes earlier pending/style directions; old field/source/history evidence follows.

---

# Current site update — V42, 2026-10-05

This update supersedes the pending-V41 status in the preserved snapshot below. The deployed bundle recorded in the V41 run is still `/js/uOfrVi.js`, 764701 characters; obfuscated fields remain deployment-specific. V41 observed a native meteorite, airdrop and fishing bubbles, but acquired no meteor map hold and captured zero roofs. V40 marker parent evidence lists native `add`, front-add and remove methods as own properties. A prototype-only add search is insufficient for that observed shape.

V42 observes own or inherited native add/front-add methods on actual reached container instances (96-container cap), retains return values/descriptors, and performs bounded scene scans (3000-node limit, 1000ms) rooted in captured container ancestry/arrays and shape-validated own window data properties once per run. Does not invoke window getters, but no claim that private disconnected map roots are reachable. Scene coverage is logged. Already-present recognized roof drawables are eligible; unloaded art is not replaced with a 1×1 blank. Candidates lacking a parent remain retryable. V40 retention mechanism is retained; automatic acquisition needs live proof.

Cosmetic adapters affect local drawable resources/approved visual fields, with latest native writes restored at cleanup; selected pickaxe art is applied only when held item is a pickaxe. Four emote selections preserve the exact icon-path exception and map an already-active native effect once assets resolve. Selected category modes/IDs and independent failures are logged. Native network, entitlement and remote cosmetic authority remain unchanged.

Numbers use their respective native bar coordinates divided by the native draw scale, white fill/black rounded outline, interior clipping, fitted fonts and tiny-geometry suppression. Indicator labels remain contained, white/black outline, meter units, arrow-following rotation with only a 180° adjustment outside ±90°. Colors/fresh affine projection/active-target suppression remain unchanged. Live appearance is pending.

V41 bot source terms were cosmetic Robot/robot catalog entries, not AI fields. MATCH START did establish phase separation; no classifier follows. Container removals and nearby loot still do not establish pre-open contents/NONE. V42 captures bounded registration field mappings and reference excerpts for player/chest/object/spellfield, with offsets/truncation; these require source/runtime attribution. All previous unresolved routes and retired failed routes remain as documented. See `docs/v42-findings.md` and test procedure.

The original full field map, source evidence and historical archive follow.

---

# Build Royale — Current site/runtime knowledge

Snapshot date: 2026-10-05. Repository: https://github.com/shortcutsbin-netizen/brio-unlocker .

These current sections supersede the historical originals retained below. The corrected, direct-JavaScript V41 has **not been run in a live match at this cutoff**. The user plans to run it, upload its log, and then open a new thread. A subsequently uploaded V41 log and the user's observations must be analyzed before assuming success or changing the script.

Precedence: current explicit user instructions → current root AGENTS.md → current sections of these two knowledge documents → historical archives. Source code establishes implementation, not proof. A log establishes recorded events, not visual correctness. Explicit user visual confirmation is required to promote visual behavior to proven.

## 1. Current architecture and boundaries

Local renderer capture, native resource substitution and native container attachments are the established architecture. Network/protocol research in the historical appendix remains reference material, not a direction to manipulate packets. Capture the renderer matching the current dynamic `uL#` Play name and known body/head/container structure. The old fixed name `unlocker_test_player` is obsolete.

The latest inspected deployed bundle was `https://buildroyale.io/js/uOfrVi.js`, 764701 characters. Bundle names, obfuscated field names and source offsets are deployment-specific; verify against the actual page before relying on them. Source fetches should be bounded/cached and passive. Earlier offsets below are anchors to inspect, not stable APIs.

The exact current implementation and all six raw uploaded logs are embedded in `project_knowledge.md`; this document provides the field map and evidence interpretation. Neither a minified-bundle no-hit nor missing own property establishes server-side absence.

## 2. Renderer/resource field map

| Meaning | Current observed native fields / paths | Caveat |
|---|---|---|
| Player name / identity | `Ée`, `id` | IDs match-scoped; name is not bot/human classification |
| Player render container | `Eâ` | Native add/remove lifecycle; attach diagnostics narrowly |
| World position | `â.ë.É`, `â.ë.Ä` | Validate finite coordinates; culling is not despawn evidence |
| Body / head | `Ëå.À`, `head.À`, backup `Äâè` | Native wrapper snapshot/restoration |
| Pickaxe / held art | `ÉãÂ`, `ä.À` if `Åé[ÈÆ].type === 'pickaxe'` | Inventory selected item matters |
| Trail | `Ëé` ID plus `-`; timer `åëÅ` | Invisible sets timer NaN; preserve original |
| Wrap | `ÆÃÅ` | Runtime `/cosmetics/wraps/<id>0.png`, `<id>1.png`; locker `/cosmetics/combos/<id>.png` |
| Glider | `aéÄ`, state `äÀÊ`, displayed `ÂÅ.À` | Invisible blank700×700 |
| Emote effect | `ÄÊâ.À` | Native incoming emote ID matched to four `locker2.emotes`; exact icon setter exception |
| Limbs/shadow | `áË`, `ÄÂ`, `ÄãÀ`, `èÅ` | Hide with invisible body, restore original opacity |
| Name / remote bars | `ÃÊ`, health `æÄ`, shield `AÃå` | Remote bars need native reveal/visibility path |
| Health / shield values | `åÈ`, `Â$` | Native bar children/geometry live test pending |
| Inventory / selected / magazine | `Åé`, `ÈÆ`, `áAæ` | Slots1..5 excluding pickaxe |
| Ammo / materials | `åæ`, `ÊÃÄ`, fallback `Äâã` | First3 mats wood/brick/metal; fourth meaning not authoritatively established |
| Loaded native image bookkeeping | `ÀA`:1 loaded/2 loading; `ÁÅe`, `âÅÉ` half dimensions | Preserve geometry in transparent replacement |
| Resource wrapper | `{src, ÁÄ, ...}` | Paths may carry querystrings; normalize carefully |
| Native object classes | `type`:object/buildable/spellfield/gun/ammo/chest/airdrop | Structural checks plus actual assets |
| Object tags / build kind / removed | `Àâ`, `ÆåÃ`, `Äã` | Removal may be culling/lifecycle; not guaranteed opened |
| Spellfield label / radius | `Ée`, `éã` | Radius must be finite positive current native value |
| Attached drawable | `ë`, `size`, `opacity`, `A`, `visible`, `parent`; children `âè`, `ÉE`; draw `Eââ`, adapter `éa`, destroy `ÊÈA` | Native coordinate system and lifecycle must be respected |
| Catalog / allowed IDs | window `Åèa`, `åÆÆ` | Dynamic; SYNC does not mean owned/purchased |

Body resource300², head350², pickaxe300²; browser-generated blanks match dimensions and native load bookkeeping. Prefer replacing cached wrappers with same-geometry transparent assets rather than broad draw suppression.

## 3. Native HUD and indicator geometry

Native remote name position y≈-100; shield y≈-110. V41 numeric child drawings use their own bar width/height, centered at(0,0), with interior clip `(-w/2+1,-h/2+1,w-2,h-2)` and font ≤10, height-2, fit measured text width. Font below3 or width/height≤2 suppresses text. Mock widths60/40,height10 produced clips[-29,-4,58,8] and[-19,-4,38,8]. Actual bar local geometry remains pending live verification.

Remote inventory node is attached at Eâ local y62 with selectable scales small0.9375,medium1.25,large1.625,xl2.0625; medium default. Five compact item slots use native `/buildart/invN.png` backgrounds with art path normalization. Known background mapping: feesh1,flexsplash3,rpg2,silencedpistol0,aug3,flaregun6,scar2; fallback native item `äã`0..6, otherwise0. This is partial mapping, not a proof of complete native rarity/color equivalence. Materials use wood/brick/metal/scrap icons; fourth counter/icon is implemented but its semantic name should not be declared proven. Ammo artammo0..4 with five counters.

A native attached tracker reads the full canvas affine transform during draw. Projection uses its a,b,c,d,e,f, canvas backing dimensions, CSS bounding rect and local/world positions. Freshness≤700ms. Player arrow250ms; chest/drop500ms. Eligible off-screen targets only; on-screen, stale transform, no current active target hide their corresponding independent arrow. Never use stale culled renderer references to pretend global coverage. Distinct90/165/240 margins; colors and labels are specified in project knowledge.

## 4. Container/content recon: what is and is not established

| Target | Observed identity/resources/state | Required remaining evidence |
|---|---|---|
| Normal chest | typechest; chestunder/chest art | Contents available before opening with proven attribution |
| Legendary chest | Same class, legendarychestunder/chest art | Same pre-open attribution; variant identity is insufficient |
| Ammo crate | typeobject; Àâammocrate; åÈ/ËÆ40 in examples | Pre-open payload/seed/table or deterministic creation linkage |
| Grenade crate | Àâgrenadecrate | Same |
| Airdrop | typeobject; Àâairdrop; airdrop.png; åÈ/ËÆ100; exampleflags Êeä0,ÊÂãtrue,ÄÅ_true | Authoritative pre-open contents linkage |
| Fishing spot | typeobject; Àâbubbles; bubbles0/1 | Pre-interaction contents; valid NONE only from evidence that no item is selected |

Open/removal loot correlation is diagnostic, not pre-open contents proof. Culling, object removal, visibility changes, lack of nearby loot or absent records do not establish opened, empty or NONE. Do not implement prediction from these alone or silently redefine 'Screen chests' into a location indicator. The three location indicators are separate completed/recon surfaces.

Historical V35 object IDs (examples only, not reusable identity):2079 normal chest produced combat/invgravitynade/bandages/brick/stack3;2236 legendary scopedar/invgravitynade/bandages/stack1;1654 ammo crate→stack3;2106 grenade→mirv;3103 airdrop stack3/autoshotgun/mini/medkit/flexsplash/metal;fishing bluefeesh or no item. Deep unopened metadata showed no obvious preselected content but did not exhaust constructor/network/client table possibilities. Source object spawn anchors: uOfrVi.js1:363839 `Object.x`;1:366060 `Eáè.Å.áÁæ`;1:365727 `Eáè.Å.ääÀ`;26:308379 `äëè`. Broad random-call traces had thousands of calls and did not attribute loot generation. Historical random anchors26:293209 `Object.áÂå` as `ÂÉÀ`,1:367732 `Eáè.Å.ÀÆ`,26:312686 `äëè`,26:299701 `éa`.

V40 recorded69 native kinds,49 baseline/removal events,24 state changes; source excerpts below cover generic object, gun, spellfield and circular geometry. Analyze these plus V41 source/container events for genuinely new fields and constructor/callsite evidence before selecting the next narrowly scoped probe.

## 5. Builds, foliage, loot and unfinished visual features

Native ordinary walls use wood/brick/metal0..2 resources; observed full healthwood50,brick70,metal90, Build0 variants0/1/2. Historical special build examples:campfire5028 BuildType1 variant0 health30/full80,campirebase0..2,campfirefire0/1, spellfield5029;shieldbubble5043 variant2 health200/full750,shieldbuild0..2,spell5044;boostpad8014 variant1 health20/full80,boostpad0..2. These IDs are per-match examples. Transparent build art must include placement preview and special deployables, not only walls.

V41 optional visual implementations await live proof: noChestsVisible hides recognized chests/ammo/grenade crates; noFoliage targets known tree/jungle/cherry/bush/grass resources; transparentFoliage applies25% canopy/root opacity; monochrome applies canvas grayscale with lifecycle cleanup; highlightLoot native yellow radius32 ring for gun/ammo; cleanLoot targets identified flareglow/glowsparkle resources only; highContrastPlayers yellow radius55 ring; buildMaterialLabels reads native wood/brick/metal sprite; deployableLabels campfire/boostpad/shield/drill; deployableRadius positive native spellfield radius for campfireheal/shield/drillslow; lowHealthWarning localHP≤30 radius65/label; lowMatsWarning sum first3 mats<30. No implemented claim for planned minimap/crosshair/HUD/storm/flashlight/custom-crosshair/low-ammo surfaces unless actual source and evidence support it.

Current static roof list (21 exact normalized paths):

```text
/buildart/barnroof.png
/buildart/cabinroof.png
/buildart/castlebottomleftroof.png
/buildart/castlebottomrightroof.png
/buildart/castlecenterroof.png
/buildart/castletopleftroof.png
/buildart/castletoprightroof.png
/buildart/gymroof.png
/buildart/house0roof.png
/buildart/house1roof.png
/buildart/house2roof.png
/buildart/house3roof.png
/buildart/house4roof.png
/buildart/house5roof.png
/buildart/japanroof.png
/buildart/jungle_shack_roof.png
/buildart/museumroof.png
/buildart/observatoryroof.png
/buildart/pavilionroof.png
/buildart/potatopalaceroof.png
/buildart/shackroof.png
```

## 6. Meteor: failed routes, proven mechanism and new acquisition

V35 captured map canvas1800×1800, cropped minimap500×500 and meteor ping image draw args[-56.25,-56.25,112.5,112.5], transform e765.787506,f1099.845001 with other terms identity. A100ms canvas repaint produced1020 paints/no logged errors but **failed visibly after native expiry on both maps**. This route is retired; draw calls and error-free logs did not prove persistence. V36/37 source/native-object recon followed. V38 introduced a separate UI and was rejected; V39 rebased the established V37 UI and added passive content/source recon and native meteor hold. V40 native hold was visually confirmed.

Native createWaypoint uses payload `å.ë` position, `Aáã` marker type, `èÆÂ` ID. Native marker collection `ëê.âè` removes existing matching IDs/sets `EÁA` opacity; creates native marker/icon, lifetime `aÈÊ = 20*1000`, adds pingmeteoricon and black/color arcs radius1000 with native animation helpers, then `ëê.add(marker)`. Inspect exact handler source before assigning every image to full-map versus minimap. V40 held native nodeID999999 at pos972,-356.1: intercepted its parent's remove, held node/icon opacity1 despite native writes and blocked native `ÊÈA` destruction. One removal/60 opacity writes with successful user observation establish this hold.

V41 automatically observes the captured container's native prototype `add`, preserving Reflect.apply(original) behavior, then identifies added native meteor resources; bounded ancestor-child scan (1000ms,max3000nodes) backs it up. WeakSet deduplication and cleanup exist. No manual arm. Observe actual V41 acquisition log before deciding whether prototype selection, parent timing/dedup, traversal reachability, native replacement or lifecycle restoration needs repair. Do not claim these speculative concerns as failures without evidence.

## 7. Bot audit: route not exhausted

User-verified humans V39: VIRA (ID953 that match,lobby distance max1255), Yourmomfat.I OWN U KID:) (ID971 that match,lobby4458,match459samples). Earlier labels in archived logs include Hey!, usersecond, meandyou=imbetter, CHUDblankla, teresitac***idy and FATAHHWEeze; retain exact context in raw logs rather than applying names as classifiers. Snowy(she/her) was explicitly labeled bot historically; QuynLegends remained uncertain. ID/name reuse across games invalidates inherited classifications.

Distance>5000/>10000 and sampled cluster fields did not produce a reliable human/bot discriminator; verified humans appeared at smaller distances. V40 phases were all lobby despite gameplay, invalidating cross-phase inference. No safe classifier is implemented. User may later supply behavioral mechanics; do not guess them now.

V41 samples up to400 own fields and shallow non-render metadata (depth2,max100objects,primitive arrays≤32), skipping render/image/typed-array structures, with ~2s settled sample,45s audit window,60players/two snapshots cap. Searches explicit bot/isbot/is_bot/npc/isai/is_ai/robot/artificialintelligence/computerplayer terms, capped60 excerpts/~1k; player-constructor context windows~10k. Decodes literal x/u/octal escape forms without evaluating source. `new`/constructor references and string-table indirection require investigation if source no-hits occur. Server-only hidden data is a possibility, not yet an exhaustively established conclusion. Bot sampling itself runs500ms and phase is switched by MATCH START.

## 8. Source excerpt archive and historical reference

The following source excerpts are preserved exactly as captured from V40's deployed bundle; they may become stale after deployment. Their numeric names are source offsets, not native object IDs. Use current loaded bundle first when it differs. Historical site knowledge follows in a literal fenced archive to prevent its outdated 'current' sections overriding this snapshot. Full historical project/V35 context and raw logs are in project_knowledge.md.


## V40 captured source: source40_285615.txt

Frozen historical evidence. It does not override the current sections above.

````````javascript
(Á["campfirefire0"]);if(EæÃ!==äe){äe.add(ÄÃ);}else {EÈ[Ã$.ÄÆÊ.áÅ$].add(ÄÃ);}return ÄÃ;},function(ÁÄ,á){const parent=á.parent;const éã=á.éã;let ëå=Ã$.ÆÊÅ(éã);ÁÄ.ë.É=parent.â.ë.É+ëå.É;ÁÄ.ë.Ä=parent.â.ë.Ä+ëå.Ä;ÁÄ.width=10;ÁÄ.height=ÉãÅ;ÁÄ.opacity=ËÊ;});Å.ÃEÅ("spellfield",function(á,å){á.â=new Å.À$;á.â.opacity=åÀ;á.aÀÊ=new Å.À$;á.éã=0XA;if(á.AÀ){á.éã=å.éã;}á.ÃÊÊ=å.éã;á.Ée=å.Ée;let áåÀ=0.1;let Äe="#FFFFFF";let ëèÄ=Äe;let Æ=0.1;let ÄÃé=Æ;á.padding=0x0;á.âÁE=á.padding;á.áÊâ=4;let åÅÀ=0.01;let ËËÆ=0.6;let eÅê=true;let EÄê=eÅê;let áéË=012;let Æáã=false;let ãÅA=02;let ëËÁ=0x0;á.èåá=new Å.AË(ãÊ,0x0,1);á.áÃ_=new Å.arc(æÉ,ãÀ,ÊA,"",2*Math.PI,0);let À=new Å.À(Á["aoegrid"],ëÁ,æÉ,0X1f4,0x1f4);let ÃÄÂ=ÆË.ÂÆÂ("#11E1EF");á.áäÅ=Å.ÉÊá(À,500,0x1f4,ÊÅ,function(ÊÄ,ÉÆ){const ÁâÄ=ÉÆ.getImageData(ãÊ,ÀË,ÊÄ.width,ÊÄ.height);const Áæ=ÁâÄ.data;for(let Ã=EÊ;Áæ.length>Ã;Ã+=4){Áæ[Ã]=ÃÄÂ.r;Áæ[Ã+01]=ÃÄÂ.g;Áæ[Ã+2]=ÃÄÂ.b;}ÉÆ.putImageData(ÁâÄ,0x0,0X0);});switch(á.Ée){case "drillslow":Äe="#E6D814",ëèÄ=Äe;á.aÃÉ=new Å.À(Á["quake"],00,èÊ,0764,0X1F4);á.â.add(á.aÃÉ);break;case "healsplash":Äe="#EC63EE",ëèÄ=Äe;áåÀ=0.2;Æ=0.3;ÄÃé=Æ;áéË=0X12C;ëËÁ=áéË-åÃá;ãÅA=ÄÄE;break;case "campfireheal":Äe="#3CE133",ëèÄ=Äe;break;case "fire":Æ=0.2;ÄÃé=0.2;Äe="#EE7017",ëèÄ=Äe;break;case "shield":Äe="#11E1EF";ëèÄ=Äe;Æ=0.2;ÄÃé=0.4;ËËÆ=0.8;EÄê=EÈâ;Æáã=true;break;default:break;}á.èåá.éã=á.éã+á.padding;á.èåá.Äe=Äe;á.èåá.opacity=Æ;eÅê&&(á.â.Åæê(á.èåá));á.áÃ_.éã=(á.éã+á.âÁE)-(á.áÊâ/ÂÊ);á.áÃ_.Äe=ëèÄ;á.áÃ_.opacity=ÄÃé;á.áÃ_.lineWidth=á.áÊâ;EÄê&&(á.â.Åæê(á.áÃ_));á.áåÀ=áåÀ;á.åÅÀ=åÅÀ;á.áäÅ.opacity=ËËÆ;Æáã&&(á.â.Åæê(á.áäÅ),á.áäÅ.width=Eê*á.éã,á.áäÅ.height=á.éã*2);á.ÅéÁ=ëËÁ;á.ÁÆA=0;á.ãâÂ=-ãA;á.ÀÁ=Math.cos(á.ÅéÁ);á.áéË=áéË;á.ãÅA=ãÅA;EÈ[Ã$.ÄÆÊ.ããÃ].âá(á.â);EÈ[Ã$.ÄÆÊ.áÅ$].add(á.aÀÊ);(á.Ée==="shield")&&(á.â.remove(á.áäÅ),á.aÀÊ.add(á.áäÅ));},function(á){á.ÁÆA=Math.round(á.ÅéÁ);á.ÀÁ=Math.cos(á.ÅéÁ);á.áäÅ.A=Å.ÂÂ(á.áäÅ.A,á.áäÅ.A+((á.åÅÀ*Å.æè.EA)*Math.PI),0.1);if((((0===(á.ÁÆA%á.áéË))&&(á.ãâÂ!==á.ÁÆA))&&(aÂ==æÁ))&&(ÊÁa!==á.AÀ)){á.ãâÂ=á.ÁÆA;for(let Ã=åÄ;á.ãÅA>Ã;Ã++){if(á.Ée==="drillslow"){Å.ÁåÁ("slow",{parent:á,éã:á.éã},{Åáê:0.8,Âèæ:00,ãÅa:-0.5,ëÃ:ÄÅ,éâË:0.1,åÃÆ:0.5});}else if("campfireheal"===á.Ée){Å.ÁåÁ("heal",{parent:á,éã:á.éã},{ëÃ:0.05,Âèæ:(Math.PI*Math.random())*ÅÃ,ãÅa:-0.5,Åáê:0.8,åÃÆ:0.5,ÂaÀ:-0.2,ÀÀ$:-0.2});}else if("healsplash"===á.Ée){Å.ÁåÁ("heal",{parent:á,éã:á.ÃÊÊ,opacity:0.5},{ëÃ:0.05,Âèæ:2*(Math.random()*Math.PI),ãÅa:-äA,Åáê:ÅÀ,åÃÆ:1.2,ÂaÀ:-0.4,ÀÀ$:-0.4});}else ("fire"===á.Ée)&&(Å.ÁåÁ("fire",{parent:á,éã:á.éã},{ëÃ:0X0,ãÅa:-0.9,ÀÀ$:-1.2,åÃÆ:0.9,Åáê:1,ÂaÀ:-1.2,Âèæ:00}));}}if(á.ÃÊÊ!==á.éã){á.éã=Å.ÂÂ(á.éã,á.ÃÊÊ,á.áåÀ);á.áäÅ.width=0x2*á.éã;á.áäÅ.height=Ãa*á.éã;á.èåá.éã=Math.max(00,á.éã+á.padding);á.áÃ_.éã=Math.max(0x0,(á.éã+á.âÁE)-(á.áÊâ/ÈA));}if("drillslow"===á.Ée){let Éê=0x2*(Math.random()*Math.PI);let Âeä=0.5;á.aÃÉ.ä$=èäÉ;á.aÃÉ.ë.É=(Math.sin(Éê)*á.aÃÉ.ä$)*Âeä;á.aÃÉ.ë.Ä=(á.aÃÉ.ä$*Math.cos(Éê))*Âeä;á.aÃÉ.opacity=(Math.cos(á.ÅéÁ/20)+ÊÅ)/éÉ;á.aÃÉ.width=ÁË*á.éã;á.aÃÉ.height=0x2*á.éã;(á.aÃÉ.opacity<0.02)&&(á.aÃÉ.A=0X2*(Math.PI*Math.random()));}if(á.Äã){á.â.opacity-=Å.æè.EA*0.04;if(00>=á.â.opacity){for(var Ã=Áè;Å.âè.length>Ã;Ã++){if(á.id==Å.âè[Ã].id){(null!=Å.âè[Ã].â.parent)&&(Å.âè[Ã].â.parent.remove(Å.âè[Ã].â));á.aÀÊ.parent.remove(á.aÀÊ);Å.âè.splice(Ã,äA);}}}}else (A$>á.â.opacity)?(á.â.opacity+=Å.æè.EA*0.04):(á.â.opacity=åE);á.ÅéÁ+=Å.æè.EA;á.aÀÊ.ë.É=á.â.ë.É;á.aÀÊ.ë.Ä=á.â.ë.Ä;á.aÀÊ.opacity=á.â.opacity;á.aÀÊ.A=á.â.A;},function(á,å){if(å.éã!==Eá$){á.ÃÊÊ=å.éã;}},function(á){á.Äã=ËÃæ;á.ÃÊÊ=00;return true;});};function ÊÅÈ(Å,äe){Å.ÃEÅ("house",function(á,å){á.â=new Å.À$;},function(á){},function(á,å){},function(á){});};function ÉäÄ(Å,äe,aæ,top,ËäÊ){Å.ÃEÅ("throwable",function(á,å){á.â=new Å.À$;á.â.æê=new Å.À(Á["snowball"],0,0,062,062);á.â.add(á.â.æê);á.âéÅ=1.4;á.â.æê.size=á.âéÅ;á.â.æê.opacity=ÀÈ;á.èaÀ=å.èaÀ;á.æÁË=éëé;á.ÁÈ=ëÁ;á.ÄÀã=ëÁ;á.áAÆ=EÉå;á.ãé=å.ãé;á.Äã=ëÁÁ;á.t=0X0;á.Ãåæ=æÉ;á.Åa=å.Åa;(1===á.Åa)?(ËäÊ.add(á.â)):(äe.add(á.â));Ã$.ÄEæ(á);á.â.æê.À=Á[á.ãé];const ÄÆè=éëé;let ÂÆÈ=0257;let ÉåA=0x32;switch(á.ãé){case "grenade":ÂÆÈ=200;á.Ãåæ=0.9;break;case "mirv":ÂÆÈ=0XB4;á.Ãåæ=0.85;break;case "babymirv":ÂÆÈ=0120;á.Ãåæ=0.4;break;case "landmine":ÂÆÈ=0x32;á.â.æê.À=Á["landmine"];á.Ãåæ=0.95;if(å.ÁÀÀ){á.â.æê.À=Á["landmine-primed"];}break;case "smokegrenade":á.Ãåæ=0;ÂÆÈ=0372;á.aeÁ=å.aeÁ;á.ÊÈÃ=ËÉã;á.äÅæ=0;break;case "snowball":á.áAÆ=äÆã;break;case "icicle":á.â.æê.A=0.76*Math.PI;á.áAÆ=ÉÄæ;break;case "flashbang":á.Ãåæ=0;ÂÆÈ=400;á.ÂÀá=Å.AË(0X0,aÂ,400,"#FFF");á.ÂÀá.opacity=0x0;á.â.add(á.ÂÀá);break;case "flexsplash":case "molotov":á.Ãåæ=åÄ;ÂÆÈ=0X190;break;case "gravitynade":á.Ãåæ=ãÀ;ÂÆÈ=0550;á.ÊÊ=Å.À(Á["gravitynade-wave"],ÃÈ,Áè,0x387,0644*2.15);á.ÊÊ.size=0X1;á.ÊÊ.opacity=ÀË;á.â.add(á.ÊÊ);break;case "invgravitynade":á.Ãåæ=0x0;ÂÆÈ=0500;á.ÊÊ=Å.À(Á["invgravitynade-wave"],0X0,ÀË,0644*2.15,0X1a4*2.15);á.ÊÊ.size=0X0;á.ÊÊ.opacity=01;á.â.add(á.ÊÊ);break;default:á.â.æê.À=Á[á.ãé];break;}if(ÄÆè){for(let Ã=ãÊ;Ã<ÉåA;Ã++){let Éê=((Math.PI*Äå)*Ã)/ÉåA;let ë={É:ÂÆÈ*Math.sin(Éê),Ä:ÂÆÈ*Math.cos(Éê)};let áÅÁ=Å.AË(ë.É,ë.Ä,5,"#FFF",áÈ);á.â.add(áÅÁ);}}},function(á){if(á.èaÀ){Aã("snowball",Å.Åâ.â.ë,new Å.æÈ(á.â.ë.É,á.â.ë.Ä));á.ÁÈ=ÄÅ;á.æÁË=äèé;á.â.æê.opacity=0.3;}if(á.æÁË){var Á_=Math.floor(Math.random()*0X2);if((ÃÈ==(á.ÄÀã%ÆAá))&&á.áAÆ){let eÂ=new Å.Èâ$(new Å.À(Á["trail0-"+Á_],á.â.ë.É+Math.random(),á.â.ë.Ä+Math.random(),aaa,ÄÄE,ÀÈ),(Math.floor(Math.random()*ÅÃ)-0.5)*0.07,1.8,0,ËÊ,-äÁÀ,-èë_);(á.Åa===ÅÁ)?(ËäÊ.âá(eÂ)):(aæ.add(eÂ));}á.â.æê.opacity=Å.ÁÅ(á.â.æê.opacity,äA,0.3);let Êäæ=2.6;let ãÈ=10;let âéÅ=á.âéÅ;let äEe=(á.ÁÈ*Math.PI)/ãÈ;let äËÃ=Êäæ-âéÅ;let È=âéÅ+(äËÃ*Math.cos(äEe));á.â.æê.size=Å.ÅÅ(á.â.æê.size,È);if(á.ÁÈ>=ãÈ){á.â.æê.size=á.âéÅ;á.â.æê.opacity=1;á.æÁË=false;}if(á.áAÆ){á.ÄÀã++;}}else (false===á.Äã)&&(á.â.æê.size=á.âéÅ,á.â.æê.opacity=0X1);(((á.ãé==="smokegrenade")&&á.aeÁ)&&(á.ÊÈÃ===ÉÉé))&&(á.ÊÈÃ=ÂÉÃ,Aã("smoke",Å.Åâ.â.ë,new Å.æÈ(á.â.ë.É,á.â.ë.Ä)));if(á.ÊÈÃ){var Á_=Math.floor(Math.random()*ÈÄ);let äÉ=0.15;let ËÂ=0XA0;if((á.äÅæ%éæ_)==0x0){let ÀËé=Math.random()*(Math.PI*áá);let eÂ=new Å.Èâ$(new Å.À(Á["trail0-"+Á_],(á.â.ë.É+(Math.random()*ËÂ))-(ËÂ/0x2),(á.â.ë.Ä+(Math.random()*ËÂ))-(ËÂ/èäÉ),074,0X3C,01),(Math.floor(Math.random()*ÅÃ)-0.5)*0.005,0.09,Math.sin(ÀËé)*äÉ,Math.cos(ÀËé)*äÉ,-4.6,-4.6);(éâ===á.Åa)?(ËäÊ.add(eÂ)):(top.âá(eÂ));}á.äÅæ++;}if(á.Äã){if(á.eëÆ){á.ÂåÁ.size=á.Ãåæ;Ã$.èèä(á);}let Ãaæ=0.06;if(("molotov"===á.ãé)||("flexsplash"===á.ãé)){Ãaæ=0.1;}á.â.æê.opacity-=Å.æè.EA*Ãaæ;(("flashbang"===á.ãé)&&(0X0<á.ÂÀá.opacity))&&(á.ÂÀá.opacity-=0.04*Å.æè.EA);if(á.ãé==="invgravitynade"){if(0x1>á.ÊÊ.size){á.ÊÊ.size+=Å.æè.EA*0.1;(ÊA<á.ÊÊ.size)&&(á.ÊÊ.size=1);}else (Èâ<á.ÊÊ.opacity)&&(á.ÊÊ.opacity-=Å.æè.EA*0.1);}if("gravitynade"===á.ãé){if(0x0<á.ÊÊ.size){á.ÊÊ.size-=Å.æè.EA*0.1;if(á.ÊÊ.size<0x0){á.ÊÊ.size=èÊ;}}else if(0<á.ÊÊ.opacity){á.ÊÊ.opacity-=Å.æè.EA*0.1;}}if((á.Ãåæ===ËÊ)||((á.Ãåæ>0X0)&&(1<=á.t))){if(0x0>=á.â.æê.opacity){for(var Ã=00;Ã<Å.âè.length;Ã++){if(Å.âè[Ã].id==á.id){(Å.âè[Ã].â.parent!=null)&&(Å.âè[Ã].â.parent.remove(Å.âè[Ã].â));Å.âè.splice(Ã,01);}}}}}},function(á,å){á.ÁÈ++;á.èaÀ=å.èaÀ;if(undefined!==å.Åa){á.Åa=å.Åa;}if(å.Åa!==undefined){á.Åa=å.Åa;if(á.Åa===0x1){(á.â.parent!==ËäÊ)&&(á.â.parent.remove(á.â),ËäÊ.âá(á.â));}else {if(äe!==á.â.parent){á.â.parent.remove(á.â);äe.add(á.â);}}}if(á.ãé==="smokegrenade"){á.aeÁ=å.aeÁ;}((á.ãé==="landmine")&&å.ÁÀ
````````


## V40 captured source: source40_413942.txt

Frozen historical evidence. It does not override the current sections above.

````````javascript
#000",2*Math.PI,0X0,äa));}á.ÀÅ.add(ÅÊ);á.â.âá(á.ÀÅ);var È=0XC8;var ÊÄ=è[Ê[254]][Ê[240]]("canvas");ÊÄ.width=ÊÄ.height=È;var ÉÆ=ÊÄ.getContext("2d");ÉÆ.translate(È/ÅÃ,È/éÉ);á.â.éa(ÉÆ,Ãae/È,äA);âeæ.push(Äê.Êå(ÊÄ));ÊÄ.Äe=ÅÁä[Ã].Äe;}var ÁäÅ=0x0;var eåè=ãâ;Å.ÃEÅ("gun",function(á,å){á.ÉëÉ=ÃÈ;á.â=new Å.À$;á.â.opacity=0x0;á.äã=å.äã;á.ÃáÃ=å.äã;á.ÀEE=ãÊ;á.âê=new Å.À(Á[å.Ëá],-Êâä,05,0156,0156);á.âê.A=Math.PI/ëëÊ;if((((((((((((å.Ëá=="mini")||("pot"==å.Ëá))||(å.Ëá=="giantsnowball"))||("flex"==å.Ëá))||("candycane"==å.Ëá))||("bandages"==å.Ëá))||(å.Ëá=="medkit"))||(å.Ëá=="feesh"))||("bluefeesh"==å.Ëá))||(å.Ëá=="alezfeesh"))||(å.Ëá=="tryagainfeesh"))||(å.Ëá=="thatfeesh")){á.âê.size=0.4;á.âê.A=00;if(("mini"==å.Ëá)||(å.Ëá=="pot")){á.âê.ë.Ä=-02;á.âê.ë.É=0.6;}else if(å.Ëá==="candycane"){á.âê.size=0.6;á.âê.ë.É=ÀË;á.âê.ë.Ä=eê;}else if("feesh"===å.Ëá){á.âê.A=Math.PI/ÊÁæ;á.âê.size=0.6;á.âê.ë.É=ëä;á.âê.ë.Ä=Èâ;}else if(å.Ëá==="bluefeesh"){á.âê.A=Math.PI/ÁÉÅ;á.âê.size=0.6;á.âê.ë.É=ÄÅ;á.âê.ë.Ä=00;}else if(å.Ëá==="thatfeesh"){á.âê.A=Math.PI/æãÄ;á.âê.size=0.6;á.âê.ë.É=0;á.âê.ë.Ä=0;}else if("alezfeesh"===å.Ëá){á.âê.A=Math.PI/ÁÉÀ;á.âê.size=0.6;á.âê.ë.É=ÄÅ;á.âê.ë.Ä=00;}else if(å.Ëá==="tryagainfeesh"){á.âê.A=Math.PI/AÁ_;á.âê.size=0.6;á.âê.ë.É=00;á.âê.ë.Ä=00;}else {á.âê.ë.É=ëÁ;á.âê.ë.Ä=00;á.âê.size=0.5;}}else if(å.Ëá=="snowball"){á.âê.size=0.65;á.âê.ë.Ä=-0.5;á.âê.ë.É=åE;}else if("icicle"==å.Ëá){á.âê.size=0.65;á.âê.ë.Ä=-0.5;á.âê.ë.É=Äæ;á.âê.A=åÀ;}else if("crossbow"==å.Ëá){á.âê.size=0x1;á.âê.ë.Ä=0;á.âê.ë.É=æÉ;}else if((["grenade","landmine","mirv","smokegrenade","invgravitynade","gravitynade","flashbang","molotov","flexsplash"]).includes(å.Ëá)){á.âê.A=0;á.âê.size=0.6;á.âê.ë.Ä=ãA;á.âê.ë.É=-3;if("landmine"===å.Ëá){á.âê.ë.Ä=00;á.âê.ë.É=ãâ;}}else if(å.Ëá=="deagle"){á.âê.size=0.6;}else if(å.Ëá=="revolver"){á.âê.size=0.8;á.âê.ë.Ä=-ÁË;á.âê.ë.É=Ãa;}else if("grappler"==å.Ëá){á.âê.size=0.8;á.âê.ë.Ä=-ÈA;á.âê.ë.É=-ÄÅÉ;}else if("signal flare"==å.Ëá){á.âê.size=0.8;á.âê.ë.Ä=-åáæ;á.âê.ë.É=-ÁÉÀ;}else if(å.Ëá=="sawedoff"){á.âê.size=0.9;}else if(å.Ëá=="vector"){á.âê.ë.Ä=-ee;}else if("grenade sniper"==å.Ëá){á.âê.ë.Ä=-0x2;}else if("minigun"==å.Ëá){á.âê.ë.Ä=-Äå;}else (å.Ëá=="charge rifle")&&(á.âê.size=0x1,á.âê.ë.Ä=-02,á.âê.ë.É=-ÀåÁ);á.â.add(á.âê);á.ÀÅ=new Å.À(âeæ[å.äã],0x0,Èâ,0x64,0X64);á.â.âá(á.ÀÅ);á.Eëa=00;á.æÊa=AÈä;if(4===á.äã){á.æÊa=áÉÉ-ëA$;}else if(á.äã===05){á.æÊa=012-Êaå;}else if(á.äã===ÀâÄ){á.æÊa=ÊÄá-05;}else if(7===á.äã){á.æÊa=2;}aæ.add(á.â);},function(á){á.ÉëÉ+=Å.æè.EA/ãáe;var ÄÊÁ=eåè;á.âê.width=á.âê.height=(áÈä*-ÄÊÁ)+0156;á.ÀÅ.size=(ÄÊÁ*0.02)+0.8;if(á.Äã){á.â.opacity-=Å.æè.EA*0.07;if(á.â.opacity<=eê){for(var Ã=ãÊ;Ã<Å.âè.length;Ã++){if(Å.âè[Ã].id==á.id){(Å.âè[Ã].â.parent!=null)&&(Å.âè[Ã].â.parent.remove(Å.âè[Ã].â));Å.âè.splice(Ã,éâ);}}}}else (1>á.â.opacity)&&(á.â.opacity+=0.07*Å.æè.EA,á.â.opacity=Math.min(á.â.opacity,åE));if(æÁ==Áè){á.Eëa+=Å.æè.EA;if(á.æÊa<á.Eëa){var èËÈ=new Å.èËÈ(0,00,[new Å.æÈ(-0x32,0X28),new Å.æÈ(eê,-0x28),new Å.æÈ(0x32,0X28)],åáå(ÅÁä[á.äã].Äe,ÉÆA));if(äÂÀ!=èËÈ.Äe.length){èËÈ.Äe=ÅÁä[á.äã].Äe;}èËÈ.size=0.4;èËÈ.opacity=0.7;èËÈ.áÉÆ=ãÊê;èËÈ.ëèÄ=åáå(ÅÁä[á.äã].Äe,0x2);if(0x7!=èËÈ.ëèÄ.length){èËÈ.ëèÄ=èËÈ.Äe;}èËÈ.lineWidth=èëé;if(0X5===á.äã){á.ÀEE+=(ÉÉ*Math.PI)/03;á.ÀEE+=0.1;}else if(06===á.äã){á.ÀEE+=(Math.PI*ee)/0X3;á.ÀEE+=0.2;}else (á.äã===Ëâã)?(á.ÀEE+=(Math.PI*á$)/0X4,á.ÀEE+=0.08):(á.ÀEE+=1.8);var ÀÄÊ=(eAA*0.6)/á.æÊa;if(èÅE===á.äã){ÀÄÊ=1.1;}else if(á.äã===7){ÀÄÊ=1.2;}var eÂ=new Å.Èâ$(èËÈ,(Math.floor(Math.random()*éÀ)-0.5)*0.04,0.35,Math.sin(á.ÀEE)*ÀÄÊ,Math.cos(á.ÀEE)*ÀÄÊ);if(ÊÉÅ==á.äã){eÂ.åÈá=0.1;}á.ÀÅ.add(eÂ);á.Eëa=ëä;}}},function(á,å){},function(á){á.Äã=true;return true;});var ÁEÆ;for(var Ã=0x0;Ã<01;Ã++){var á={};á.â=new Å.À$;á.ÊáÄ=new Å.À(Á["gridshine"],0X0,0,170,170,0.55);á.ÊáÄ.width=á.ÊáÄ.height=0176;á.â.âá(á.ÊáÄ);á.Äã=false;á.ÀÅ=new Å.À$;á.ÀÅ.add(new Å.AË(00,Ea,(0X46/éÀ)+03,ÅÁä[Ã].Äe,0.3));var ÅÊ=new Å.arc(EÊ,0,0X46/2,ÅÁä[Ã].Äe,éÉ*Math.PI,æÉ,aëÉ);ÅÊ.opacity=0.5;(æÁ==0x0)&&(ÅÊ.add(new Å.arc(Áè,0,(0x46/02)+aåÀ,"#000",á$*Math.PI,00,0x1)));á.ÀÅ.add(ÅÊ);á.â.âá(á.ÀÅ);á.ÀÅ.opacity=0.5;var È=200;var ÊÄ=è[Ê[254]][Ê[240]]("canvas");ÊÄ.width=ÊÄ.height=È;var ÉÆ=ÊÄ.getContext("2d");ÉÆ.translate(È/Ãa,È/Ãa);á.â.éa(ÉÆ,ËÂÈ/È,0x1);ÁEÆ=Äê.Êå(ÊÄ);}Å.ÃEÅ("ammo",function(á,å){á.ÉëÉ=00;á.â=new Å.À$;á.â.opacity=0;å.äã=0x0;var type="empty";if(undefined!==å.æá_){switch(å.æá_){case 0:type="wood";break;case 01:type="brick";break;case 0X2:type="metal";break;case 03:type="gear";break;}}else (å.åæ!==EáÆ)&&(type="stack"+å.åæ);á.âê=new Å.À(Á[type],æÉ,æÉ,110,110);á.âê.A=ãÊ;á.âê.size=0.45;á.â.add(á.âê);á.Äã=false;á.ÀÅ=new Å.À(ÁEÆ,0,0,ÈEÁ,100);á.â.âá(á.ÀÅ);var ÂèÅ=0.5;á.ÀÅ.opacity*=ÂèÅ;aæ.add(á.â);},function(á){á.ÉëÉ+=Å.æè.EA/ÉÀÅ;á.âê.width=á.âê.height=(-eåè*Âáá)+0x6e;á.ÀÅ.size=(0.02*eåè)+0.8;if(á.Äã){á.â.opacity-=Å.æè.EA*0.07;if(á.â.opacity<=0){for(var Ã=0X0;Ã<Å.âè.length;Ã++){if(á.id==Å.âè[Ã].id){if(Å.âè[Ã].â.parent!=null)Å.âè[Ã].â.parent.remove(Å.âè[Ã].â);Å.âè.splice(Ã,01);}}}}else (á.â.opacity<Ââ)&&(á.â.opacity+=Å.æè.EA*0.07,á.â.opacity=Math.min(á.â.opacity,Ââ));á.Eëa+=Å.æè.EA;},function(á,å){},function(á){á.Äã=true;return true;});Å.ÃEÅ("layerSwap",function(á,å){á.â=new Å.À$;let áëÀ=ÊÊÉ;if(áëÀ){let ÆaÆ=new Å.ÅÈE(æÉ,ãâ,å.width,å.height,"#23D823",åEË,0.4);á.â.add(ÆaÆ);top.add(á.â);}},function(á){},function(á,å){});Å.ÃEÅ("baller",function(á,å){á.â=new Å.À(Á["baller0"],0X0,00,250,0Xfa);á.Eå=new Å.À(Á["grapple"],Áè,ëÁ,0x28,0X28);á.æE=new Å.À(Á["rope"],æÉ,ëä,Ãèé,Áè);äe.add(á.æE);á.EÀÂ=null;á.ÂÃè=true;á.AÅa=Âëa;á.Aå=á.AÅa;á.Àá$=017;äe.add(á.Eå);äe.add(á.â);á.åéâ=Èâ;á.ÉËå=ëä;á.Eå.áËé=new Å.æÈ;if(å.AÀ){á.AÀ=true;}á.ËÆ=å.h;á.åÈ=å.ch;á.éÁá="baller";},function(á){if(null==á.EÀÂ){á.Eå.ë.É=á.â.ë.É+(á.Aå*Math.sin(á.â.A));á.Eå.ë.Ä=á.â.ë.Ä+(á.Aå*Math.cos(á.â.A));á.Eå.A=á.â.A+(Math.PI/ÂÊ);á.æE.height=00;}else {á.Eå.ë.É=Å.ÅÅ(á.Eå.áËé.É,á.EÀÂ.É);á.Eå.ë.Ä=Å.ÅÅ(á.Eå.áËé.Ä,á.EÀÂ.Ä);á.Aå-=á.Àá$;á.æE.ë.É=((á.â.ë.É+(Math.sin(á.â.A)*á.Aå))+á.Eå.ë.É)/0x2;á.æE.ë.Ä=((á.â.ë.Ä+(á.Aå*Math.cos(á.â.A)))+á.Eå.ë.Ä)/2;var èaA=á.Eå.ë.É-(á.â.ë.É+(á.Aå*Math.sin(á.â.A)));var ÊãË=á.Eå.ë.Ä-(á.â.ë.Ä+(Math.cos(á.â.A)*á.Aå));á.æE.height=Math.sqrt((èaA*èaA)+(ÊãË*ÊãË));á.æE.A=Math.atan2(ÊãË,èaA)+(Math.PI/0x2);á.Aå=á.AÅa;á.ÂÃè&&(á.Eå.A=á.â.A+(Math.PI/äEå));}!á.AÀ&&(á.Eå.parent.remove(á.Eå),á.â.parent.remove(á.â),äe.add(á.Eå),äe.add(á.â));var äËê=Math.max(Math.min(4-Math.ceil((á.åÈ/á.ËÆ)*Êaå),Êâä),0);if(á.éÁá!=("baller"+äËê)){á.â.À=Á["baller"+äËê];}á.éÁá="baller"+äËê;if(á.Äã){á.â.opacity-=0.07*Å.æè.EA;á.Eå.opacity=á.â.opacity;á.æE.opacity=á.â.opacity;if(á.â.opacity<=00){á.Eå.parent.remove(á.Eå);á.æE.parent.remove(á.æE);for(var Ã=0x0;Å.âè.length>Ã;Ã++){if(Å.âè[Ã].id==á.id){if(Å.âè[Ã].â.parent!=null)Å.âè[Ã].â.parent.remove(Å.âè[Ã].â);Å.âè.splice(Ã,ãA);}}}}},function(á,å){isNaN(á.new.ë.É)&&(console.log("NaN baller"),console.log(á));if(null!=á.EÀÂ){á.Eå.áËé.É=á.Eå.ë.É;á.Eå.áËé.Ä=á.Eå.ë.Ä;}á.ÂÃè&&(á.EÀÂ=null,á.ÂÃè=false);if(undefined!==å.Eå){if(false==å.Eå){á.ÂÃè=true;á.EÀÂ=new Å.æÈ;á.EÀÂ.É=á.â.ë.É+(Math.sin(á.â.A)*á.Aå);á.EÀÂ.Ä=á.â.ë.Ä+(Math.cos(á.â.A)*á.Aå);}else {Aã("grapple",Å.Åâ.â.ë,á.â.ë,ÆE).volume/=Äëâ;á.EÀÂ=new Å.æÈ(å.Eå[ëÁ],å.Eå[0x1]);á.Eå.áËé=new Å.æÈ;á.Eå.áËé.É=á.â.ë.É+(á.Aå*Math.sin(á.â.A));á.Eå.áËé.Ä=á.â.ë.Ä+(á.Aå*Math.cos(á.â.A));}}if(å.h!==Eá$){á.åÈ=å.h;(á.åÈ<0)&&(á.åÈ=æÉ);}if(å.Æeå){var ãÃÉ=Aã("bounce",Å.Åâ.â.ë,á
````````


## V40 captured source: source40_421018.txt

Frozen historical evidence. It does not override the current sections above.

````````javascript
.æÈ;á.Eå.áËé.É=á.â.ë.É+(á.Aå*Math.sin(á.â.A));á.Eå.áËé.Ä=á.â.ë.Ä+(á.Aå*Math.cos(á.â.A));}}if(å.h!==Eá$){á.åÈ=å.h;(á.åÈ<0)&&(á.åÈ=æÉ);}if(å.Æeå){var ãÃÉ=Aã("bounce",Å.Åâ.â.ë,á.â.ë);if(null!=ãÃÉ){ãÃÉ.volume*=0.6;}}},function(á){á.Äã=ÈâÄ;return true;});Å.ÃEÅ("object",function(á,å){á.Àâ=å.type;á.â=new Å.À$;á.ÄA=new Å.À$;if(("pumpkin"==å.type)&&(Math.random()>0.5)){å.type="pumpkin1";}if(å.type==="ballista"){á.ÄA=new Å.À(Á["ballista-base"],0,00,ÄÃè,äÃâ);}else (("wall"!=å.type)||("buildable"!=å.type))&&(á.ÄA=new Å.À(Á[å.type],0,00,å.width,å.height));if((å.width==æÉ)||(eê==å.height)){á.ÄA.width=00;á.ÄA.height=0X0;}á.â.add(á.ÄA);á.Eâ=new Å.À$;á.ä$=0X0;á.Äã=ÉÄæ;á.åÈ=å.åÈ;á.ËÆ=å.ËÆ;á.Èáä=0X1F4;var EÂÄ=50;á.æÄ=new Å.ÅÆ(Åå,EÂÄ,á.åÈ,eäæ,"#0D0");á.æÄ.width=ëä;á.aAå=new Å.ÅÆ(0,EÂÄ,ËÉê,016,"#000",0.3);á.Eâ.add(á.aAå);á.Eâ.add(á.æÄ);var â$=Ãèé;var Éæ$=-25;var eÅ="bold";á.áãá=new Å.text(á.ËÆ,Éæ$+03,EÂÄ,"#FFF","Arial",â$,eÅ,0.9,"left");(á.ËÆ==0X64)&&(á.áãá.canvas=áÊA);á.Eâ.add(á.áãá);á.eÅé=new Å.text("/",Éæ$+01,EÂÄ,"#FFF","Arial",â$,eÅ,0.5,"center");á.eÅé.canvas=Åáé;á.Eâ.add(á.eÅé);á.ãéÃ=new Å.text("100",Éæ$-aÆæ,EÂÄ,"#FFF","Arial",â$,eÅ,éâ,"right");á.Eâ.add(á.ãéÃ);á.Eâ.opacity=ëä;á.â.add(á.Eâ);á.EEã=new Å.æÈ(0x0,0);á.ÄA.ë=á.EEã;á.Àè=new Å.æÈ(0x0,00);á.åaæ=0.01;á.âÁÁ=0.5;á.Aã=æAe;if(á.Àâ=="wall"){if(ÂÂÀ[å.ÄæÅ]=="brickwall"){á.Aã=éaÉ;}else (("metalwall"==ÂÂÀ[å.ÄæÅ])||(ÂÂÀ[å.ÄæÅ]=="fortifiedwall"))&&(á.Aã=ÉÄâ);}else if(á.Àâ=="rock"){á.Aã=éaÉ;}else if("trash"==á.Àâ){á.ÄA.size=1.34;á.Aã=ÉÄâ;}else if(á.Àâ=="silo"){á.Aã=ÉÄâ;}else if(å.type=="hay"){á.ÄA.size=ÊÅ;}else if("basketballnet"==å.type){á.ÄA.width=0454;á.ÄA.height=0xC8;á.Aã=ÉÄâ;}else if("bench"==å.type){á.ÄA.width=450;á.ÄA.height=0226;á.Aã=ÉÄâ;}else if(å.type=="metalbench"){á.ÄA.width=0310;á.ÄA.height=0310;á.Aã=ÉÄâ;}else if(å.type==="telescope"){let Ãåå=new Å.À(Á["telescopescope"],Áè,aÂ,300,300);á.ÄA.add(Ãåå);á.Aã=ÉÄâ;}else if(å.type==="ballista"){let Ãåå=new Å.À(Á["ballista-top"],0X0,ãÀ,300,0X12C);á.ÄA.add(Ãåå);}else if(((("bluecontainer"==å.type)||("redcontainer"===å.type))||(å.type==="steel"))||(å.type==="specialdumpster")){á.Aã=ÉÄâ;}else if(((å.type==="brickpile")||("largeamber"===å.type))||("marble"===å.type)){á.Aã=éaÉ;}else if((("castlewall1"===å.type)||(å.type==="castlewall2"))||("castlewall3"===å.type)){á.ÄA.size=1.04;á.Aã=éaÉ;á.ÄA.height=200;}else if(å.type==="castletower"){á.ÄA.size=1.02;á.Aã=éaÉ;}else if(å.type=="barrier"){á.ÄA.width=0X32;á.ÄA.height=250;}else if(å.type=="ropebarrier"){á.ÄA.width=0XD4;á.ÄA.height=0X3E;}else if("trikeskull"==å.type){á.ÄA.width=0X190;á.ÄA.height=0372;}else if("rack"==å.type){á.ÄA.width=0x96;á.ÄA.height=0x15e;á.Aã=ÉÄâ;}else if(å.type=="counter"){á.ÄA.width=0X190;á.ÄA.height=eäÊ;á.Aã=ÉÄâ;}else if("geyser"==å.type){á.ÄA.width=0xC8;á.ÄA.height=0xC8;}else if("corn"==å.type){á.ÄA.size=1.9;}else if(å.type.indexOf("pumpkin")!==-ÊA){á.ÄA.size=1.2;}else if("table"==å.type){á.ÄA.width=0XAF;á.ÄA.height=0175;}else if(å.type=="chair"){á.ÄA.width=0125;á.ÄA.height=0X55;}else if((å.type=="couch")||("junglecouch"==å.type)){á.ÄA.size=1.3;}else if(å.type=="desk"){á.ÄA.size=1.2;}else if(å.type=="meteorite"){á.ËÉE=å.ËÉE;á.Êeä=å.Êeä;á.ÊÂã=å.ÊÂã;á.ÄÅ_=false;á.Aã=éaÉ;}else if(å.type=="airdrop"){á.Êeä=å.Êeä;á.ÊÂã=å.ÊÂã;á.ÄÅ_=false;}if(å.type=="wall"){á.ÄæÅ=ÂÂÀ[å.ÄæÅ];äe.Åæê(á.â);á.ÄA.opacity=0.9;á.ÄA.âá(new Å.À(Á[("blue"+á.ÄæÅ)+"_build"],0x0,aÂ,(Æã*áä$)/2,Æã,0.7));á.Ëã$=new Å.À(Á[á.ÄæÅ+"_stage0"],Åå,0x0,Æã*áä$,Æã*éÀ);á.ÀÁê=new Å.À(Á[á.ÄæÅ+"_stage1"],0,0X0,Æã*áä$,Æã*2);á.eaâ=new Å.À(Á[á.ÄæÅ+"_stage2"],ÃÈ,ëä,Æã*áä$,Æã*2);á.éá=[];á.Éé=[á.Ëã$];á.ÄA.add(á.Ëã$);á.ÄA.add(á.ÀÁê);á.ÄA.add(á.eaâ);á.Ëã$.opacity=00;á.ÀÁê.opacity=0;á.eaâ.opacity=00;((((0.8<(å.åÈ/á.ËÆ))&&(á.eaâ.opacity<Àã))&&(0X0>á.Éé.indexOf(á.eaâ)))&&(Ea>á.éá.indexOf(á.eaâ)))&&(á.Éé.push(á.eaâ));if(((((å.åÈ/á.ËÆ)>=0.4)&&(Æa>á.ÀÁê.opacity))&&(ÄÅ>á.Éé.indexOf(á.ÀÁê)))&&(0>á.éá.indexOf(á.ÀÁê))){á.Éé.push(á.ÀÁê);}}else if("buildable"==å.type){á.EÅ=å.EÅ;á.ëËæ=å.ÆåÃ;á.ÆåÃ=æä[á.EÅ].EéÆ[á.ëËæ];let È=âëÊ[á.EÅ][á.ëËæ][ëä];let áå=âëÊ[á.EÅ][á.ëËæ][0x1];äe.âá(á.â);á.â.parent=äe;á.ÄA.opacity=0x1;á.ÄA.âá(new Å.À(Á[("blue"+á.ÆåÃ)+"_build"],Åå,0X0,(È*áå)/2,È,0.7));á.ãée=new Å.À(Á[á.ÆåÃ+"_stage0"],00,0x0,È*áå,È*0x2);á.ÉÂÉ=new Å.À(Á[á.ÆåÃ+"_stage1"],ãÀ,Áè,È*áå,È*éÉ);á.áäá=new Å.À(Á[á.ÆåÃ+"_stage2"],0,èÊ,È*áå,È*0X2);á.éá=[];á.Éé=[á.ãée];á.ÄA.add(á.ãée);á.ÄA.add(á.ÉÂÉ);á.ÄA.add(á.áäá);á.ãée.opacity=0X0;á.ÉÂÉ.opacity=0;á.áäá.opacity=ËÊ;if(á.ÆåÃ==="drillbuild"){á.Aã=ÉÄâ;}else ("shieldbuild"===á.ÆåÃ)&&(á.Aã=èéË);(á.ÆåÃ==="campfirebuild")&&(á.ÀÁ=0X0,á.ÈÆê=new Å.À(Á["campfirefire0"],00,00,(È*áå)/ÁË,È),á.èaÅ=new Å.À(Á["campfirefire1"],0,0X0,(È*áå)/2,È),á.ÄA.add(á.ÈÆê),á.ÄA.add(á.èaÅ));(((((å.åÈ/á.ËÆ)>0.8)&&(01>á.áäá.opacity))&&(EÊ>á.Éé.indexOf(á.áäá)))&&(á.éá.indexOf(á.áäá)<èÊ))&&(á.Éé.push(á.áäá));((((0.4<=(å.åÈ/á.ËÆ))&&(éâ>á.ÉÂÉ.opacity))&&(0>á.Éé.indexOf(á.ÉÂÉ)))&&(0>á.éá.indexOf(á.ÉÂÉ)))&&(á.Éé.push(á.ÉÂÉ));}else if(((("tree"==å.type.substring(0x0,0x4))||(å.type=="rock"))||(å.type=="jungletree"))||(å.type=="cherryblossom")){á.ÄA.width=á.ÄA.height=äEå*á.ÄA.width;á.â.A=Math.PI*(Math.random()*ÂÊ);if(å.type=="rock"){äe.âá(á.â);}else {éÅ.âá(á.â);}if(èé){(å.type.substring(00,4)=="tree")&&(á.ÄA.À=Á["christmastree"+((å.type.substring(4,éÂÈ)*AÃ)+Math.floor(Math.random()*Äå))]);}}else if((å.type=="couch")&&(å.type=="museumcase")){äe.Åæê(á.â);}else if((((((((((((((((((((((å.type=="trash")||("chair"==å.type))||(å.type=="table"))||("couch"==å.type))||(å.type=="bench"))||(å.type=="metalbench"))||("counter"==å.type))||(å.type==="barrier"))||("redcontainer"===å.type))||("bluecontainer"===å.type))||("crate"===å.type))||(å.type==="planks"))||("steel"===å.type))||(å.type==="marble"))||(å.type==="brickpile"))||(å.type==="ropebarrier"))||(å.type==="largeamber"))||(å.type==="museumcounter"))||("trikeskull"===å.type))||(å.type==="rack"))||(å.type==="grenadecrate"))||("ammocrate"===å.type)){äe.âá(á.â);}else if(("geyser"===å.type)||("button"===å.type)){if("geyser"===å.type){á.ÀÁ=0x0;}aæ.âá(á.â);}else if(((å.type=="basketballnet")||("telescope"===å.type))||("ballista"===å.type)){éÅ.âá(á.â);}else if("meteorite"==å.type){éÅ.âá(á.â);á.AÀÉ=Èáé;á.ÄA.A=-Math.PI/ÃEæ;if(á.ÊÂã){á.ÄÅ_=true;!á.ËÉE&&(á.ÄA.À=Á["meteorite1"]);}else {á.ÄA.opacity=0;á.æÀ$=new Å.À(Á["meteoriteshadow"],0X0,0,å.width,å.height);á.æÀ$.opacity=0.2;á.æÀ$.size=00;á.â.add(á.æÀ$);}}else if(å.type=="airdrop"){éÅ.âá(á.â);if(á.ÊÂã){á.ÄÅ_=ãÊê;á.ÄA.À=Á["airdrop"];}else {á.ÄA.opacity=eê;á.ÁáÄ=new Å.À(Á["airdropshadow"],eê,0,å.width,å.height);á.ÁáÄ.opacity=0.2;á.ÁáÄ.size=ÃÈ;á.â.add(á.ÁáÄ);}}else if("bubbles"===å.type){á.ÀÁ=00;let ÊÈÀ=0X19;let äËÅ=new Å.À(Á["bubbles0"],ãÀ,0x0,ÊÈÀ*0x2,ÊÈÀ*Eê);let ÀèÅ=new Å.À(Á["bubbles1"],0,ëä,ÊÈÀ*02,ÊÈÀ*0x2);á.ÄA.opacity=Åå;á.ÄA.size=0X0;á.ÄA.add(äËÅ);á.ÄA.add(ÀèÅ);äe.âá(á.â);á.Aã=èéË;}else {äe.add(á.â);}},function(á){if("meteorite"==á.Àâ){if(!á.ÄÅ_&&á.ÊÂã){á.ÄA.opacity=ÅÁ;á.â.remove(á.æÀ$);á.ÄÅ_=true;á.ä$=10;Aã("explosion1",Å.Åâ.â.ë,new Å.æÈ(á.â.ë.É,á.â.ë.Ä));Ã$.ÄEæ(á);á.â.remove(á.ÂåÁ);á.â.âá(á.ÂåÁ);á.ÂåÁ.size=1.2;á.AÀÉ=true;}else if(!á.ÊÂã){let áäå=100-á.Êeä;let Êaá=áäå/0144;á.æÀ$.size=Å.ÁÅ(ÄÅ,Åã,eÊ.ÄãÂ(Êaá));á.æÀ$.opacity=Å.ÁÅ(0.2,0.5,eÊ.ÄãÂ(Êaá));let Éê=(Math.PI*Math.random())*02;let Âeä=0.3;á.æÀ$.ë.É=((01-eÊ.ÄãÂ(Êaá))*-0xc8)+(Âeä*(Math.sin(Éê)*á.ä$));á.æÀ$.ë.Ä=Âeä*(á.ä$
````````


## V40 captured source: source40_466515.txt

Frozen historical evidence. It does not override the current sections above.

````````javascript
Ée;(Ée=="")&&(Ée="<unnamed>");(Åã==å.ÅèÁ)?(áâ_.text="Eliminated:"):(áâ_.text="Eliminated By:");ÅÉã.text=Ée;áâ_.opacity=Àã;ÅÉã.opacity=0X1;ËËã.opacity=0.3;}if((å.ÅèÁ==Àã)&&(éáe>0x3)){ÅÉã.text=ÉËe.text;áâ_.opacity=1;ÅÉã.opacity=0X1;ËËã.opacity=0.3;}});Å.æÊÈ("circle",function(å){ãÉÃ=ÈâÄ;if(å.state!==ÄÂÄ){ÃÄ=å.state;if(("waiting"==ÃÄ)||("lobby"==ÃÄ)){ÅÉÅ.À=Á["waitingIcon"];}else if(ÃÄ=="moving"){ÅÉÅ.À=Á["movingIcon"];}}if(å.time!==ÂÈ_){Èá=å.time;var aãe="0:";if(Èá<10)aãe+="0";aãe+=Math.max(Èá,ËÊ);Êä$.text=aãe;}if(å.AË!==eÈÊ){if(ÃÄ=="moving"){áÊ.ë[ÄÅ]=Å.ÅÅ(áÊ.ë[0],å.AË.ë[aÂ]);áÊ.ë[ÊA]=Å.ÅÅ(áÊ.ë[0X1],å.AË.ë[1]);EÃÊ=áÊ;áÊ=å.AË;EÃÊ.éã=áÉä;áÊ.width=Math.min(áÊ.width,aÂ);}else {âÊ.width=âÊ.height=äEå*å.AË.éã;âÊ.ë=new Å.æÈ(å.AË.ë[0],å.AË.ë[0X1]);}}});Å.æÊÈ("forceSpectate",function(å){Áaa=AèÄ;ÈæÊ=å.âÈ;if(ÈæÊ){for(let Ã=ËÊ;áã.length>Ã;Ã++){const ËE=áã[Ã];ËE.ÄËá=false;}if(undefined!==Å.Åâ){((ÄaÂ!==Å.Åâ.ËE)&&(Æe$!==áã[Å.Åâ.ËE]))&&(áã[Å.Åâ.ËE].ÄËá=ÀËÅ);(Å.Åâ.ÂA$===true)&&(Ëæ.opacity=0x1);}Å.Åâ.èëã=false;for(let Ã=èÊ;EÈ.length>Ã;Ã++){const äe=EÈ[Ã];äe.size=0X1;}Eåè=Äá;}else {for(let Ã=Åå;Ã<áã.length;Ã++){const ËE=áã[Ã];ËE.ÄËá=ËÄÁ;}Å.Åâ.èëã=true;Ëæ.opacity=Ea;}èê.opacity=ÄÅ;aËã=true;});var ÄÃÊ=ëÁ;var ÀéÄ=0.1;var ÅÃÂ=0;var Eåè=åE;è[Ê[254]][Ê[32]][Ê[260]]("mousewheel",function(ãE){(Ë.c==ãE.target)&&(ãE.preventDefault());},{áeé:èâ});è[Ê[254]][Ê[260]]("wheel",function(ãE){if(Å.EÆ&&!Áaa){return;}if(ÅÃÂ<ÊÅ){return;}ÅÃÂ=ëä;if(ãE.wheelDelta){ÄÃÊ+=ãE.wheelDelta;}else {ÄÃÊ-=ãE.deltaY;}if(ÀéÄ>Math.abs(ÄÃÊ)){return;}if(Âe)return;if(Áaa){if(ãE.wheelDelta<=aÂ){Eåè-=0.05;}else (ÄÅ<=ãE.wheelDelta)&&(Eåè+=0.05);for(let Ã=0x0;Ã<EÈ.length;Ã++){const äe=EÈ[Ã];äe.size=Eåè;}Å.ÈÈ.push({type:"selectChange",zoom:Eåè});}if(Å.Åâ.Åé===undefined){return;}if(ÄÃÊ<=-ÀéÄ){ÈÆ+=ÀÈ;(ÈÆ>(åÁÄ-01))&&(ÈÆ=ëä);ÀÃÈ+=Äæ;if((æä.length-0X1)<ÀÃÈ){ÀÃÈ=åÀ;}while(Å.Åâ.Åé[ÈÆ].type=="empty"){ÈÆ++;(ÈÆ>(åÁÄ-1))&&(ÈÆ=0X0);}}else if(ÄÃÊ>=ÀéÄ){ÈÆ-=áÈ;if(0X0>ÈÆ){ÈÆ=åÁÄ-0x1;}ÀÃÈ-=01;if(0X0>ÀÃÈ){ÀÃÈ=æä.length-0x1;}while(Å.Åâ.Åé[ÈÆ].type=="empty"){ÈÆ--;}}ÄÃÊ=00;Å.Åâ.èÂ?(Å.ÈÈ.push({type:"selectChange",ââA:ÀÃÈ})):(Å.ÈÈ.push({type:"selectChange",ä:ÈÆ}));});è["sendCommand"]=function(éÆÉ,ÁáÅ){Å.ÈÈ.push({type:"command",éÆÉ:éÆÉ,ÁáÅ:ÁáÅ});};function aÊé(){for(var Ã=ãâ;Ã<5;Ã++){var á=ÃA.âè[Ã];var ÅåË=Math.floor(ÂÊ*Math.random());if(Åå==ÅåË){á.Äe="#F00";}else {á.Äe="#0F0";}á.opacity=01;}for(var Ã=0;Å.âè.length>Ã;Ã++){const á=Å.âè[Ã];if((á.type=="object")&&(á.ÄA.À!==undefined)){const ÆAA=á.ÄA.À.src;if(Éá!==ÆAA){if("buildart/christmastree0.png"===ÆAA)á.ÄA.À=Á["christmastree1"];else if(ÆAA==="buildart/christmastree1.png")á.ÄA.À=Á["christmastree0"];else if(ÆAA=="buildart/christmastree2.png")á.ÄA.À=Á["christmastree3"];else (ÆAA==="buildart/christmastree3.png")&&(á.ÄA.À=Á["christmastree2"]);}}}setTimeout(aÊé,01274);};if(èé)aÊé();function âAé(À$){(À$.type=="text")&&(À$.aãÁ="");for(var Ã=Ea;Ã<À$.âè.length;Ã++)âAé(À$.âè[Ã]);for(var Ã=åÀ;Ã<À$.ÉE.length;Ã++)âAé(À$.ÉE[Ã]);};function aaá(){for(var Ã=èÊ;Ã<EÈ.length;Ã++)âAé(EÈ[Ã]);âAé(áÃ$);âAé(Êéá);è[Ê[254]][Ê[175]]("loadingDesktop").style.visibility="hidden";è[Ê[254]][Ê[175]]("loadingDesktop").style.display="none";è[Ê[254]][Ê[175]]("loadingDesktop").style.opacity=00;EÀè(éãÃ);};aaá();const áæÃ=ÅÄ;const æãä=ëÁ;const ÈëE={æëÊ:áæÃ,aÊA:0X0,Ae_:è[Ê[254]][Ê[32]][Ê[272]],ÂÃå:è[Ê[254]][Ê[32]][Ê[127]],áæÄ:"color: #E20000; -webkit-text-stroke: 1px black; font-size: 45px; font-weight: bold; font-family: Chewy;",ËÊÃ:"color: #FFFFFF; -webkit-text-stroke: 1px black; font-size: 16px; font-family: Chewy;",Äëæ:"color: #E20000; -webkit-text-stroke: 1px black; font-size: 40px; font-weight: bold; font-family: Chewy;",ëÁÈ:"color: #FFFFFF; -webkit-text-stroke: 1px black; font-size: 20px; font-family: Chewy;"};function æÉ_(){const ëéÉ=è[Ê[254]][Ê[240]]("iframe");ëéÉ.style.display="none";è[Ê[254]][Ê[32]][Ê[25]](ëéÉ);const éÊ_=ëéÉ.contentWindow.console.log;(æãä===ÈëE.æëÊ)?(éÊ_("%c      Stop right there!      
"+"  You are being scammed!         ",ÈëE.áæÄ),éÊ_(("%c  Pasting code here could give attackers access to your personal information or take control on  
"+"  your account. This is a common scam tactic. If someone has asked you to paste something here,  
")+"  they are trying to deceive you. Please close this console and stay safe.                       ",ÈëE.ËÊÃ)):(éÊ_("%cStop right there! You might be getting scammed!",ÈëE.Äëæ),éÊ_(("%cIf someone told you to paste some code here, they're probably a bad person. "+"Pasting code here could give them access to your personal information or your account. ")+"This is a well known scam tactic. Please close this console and stay safe.",ÈëE.ëÁÈ));è[Ê[254]][Ê[32]][Ê[343]](ëéÉ);};function ÃÄá(){const ÄaÆ=Date.now();const ÆáÆ=è[Ê[254]][Ê[32]][Ê[272]];const AâÃ=è[Ê[254]][Ê[32]][Ê[127]];if((ÄaÆ-ÈëE.aÊA)>0x7d0){let ÅÀ_=00;if(0X96<Math.abs(ÆáÆ-ÈëE.Ae_)){ÈëE.æëÊ=æãä;ÅÀ_=æá;}if(Math.abs(AâÃ-ÈëE.ÂÃå)>150){ÈëE.æëÊ=áæÃ;ÅÀ_=A$;}(ÅÀ_===1)&&(ÈëE.aÊA=ÄaÆ,ÈëE.Ae_=ÆáÆ,ÈëE.ÂÃå=AâÃ,è[Ê[109]](æÉ_,0X3E8));}};function èAË(){ÃÄá();è.Ëéê=(0x1/(Ë.áå/Ë.ãê))/Å[Ê[6]];èÀá=è.ÀâÃ();if(Å.EÆ&&(Eâ.opacity===01))EÀè(éãÃ);else åãÉ(éãÃ);document[Ê[175]]("battlePass").style.transform=`scale(${è.Ëéê}) translate(-50%, -50%)`;document[Ê[175]]("deathscreentopleft").style.transform=`scale(${Math.min(01,è.Ëéê)})`;document[Ê[175]]("deathscreenbottom").style.transform=`scale(${Math.min(1,è.Ëéê)})`;(((è.Ëéê<1)&&Å.AÈ)&&(01===Å.AÈ[Ê[44]]))&&(document[Ê[175]]("deathscreen").style.transform=`scale(${Math.min(ÊÅ,1.1*è.Ëéê)})`);};aáâ.èAË=èAË;è[Ê[260]]("resize",èAË);};function èÂÂ(){var ÄãÆ=èää();var ÉëË=ÄãÆ&&!ÄãÆ["isOwned"];è[Ê[254]][Ê[175]]("disableAdsButton").style.display=ÉëË?"":"none";};let âAä=è.setInterval(function(){if(!è[Ê[254]].fonts.check("12px Arial Black"))return;for(let Ée in áëè){if(Á[Ée].ÁÄ.ÀA!==ÊA){return;}}if(Éaã===0X1)return;if(gameWrapper.enabled)setTimeout(äÀá,ããá);else äÀá();},100);è[Ê[109]](function(){if(01===Éaã)return;äÀá();},0x1388);function ëÃá(){if((new RegExp("iPad|iPhone|iPod"))["test"](è["navigator"]["platform"]))return ãÊê;else {return (è["navigator"]["maxTouchPoints"]&&(è["navigator"]["maxTouchPoints"]>Ãa))&&(new RegExp("MacIntel"))["test"](è["navigator"]["platform"]);}};function Ääá(){return (è["navigator"]["maxTouchPoints"]&&(è["navigator"]["maxTouchPoints"]>0x2))&&(new RegExp("MacIntel"))["test"](è["navigator"]["platform"]);};const ãE$=Ääá()||ëÃá();const ËÅê=navigator.userAgent||"";const ÀèÂ=navigator.vendor||"";const AËá=((ÀèÂ.indexOf("Apple")>-0X1)&&(ËÅê.indexOf('CriOS')===-01))&&(ËÅê.indexOf('FxiOS')===-Àã);{const Êæa=ÆË[Ê[115]]("brtoken");(Êæa&&(Êæa.length>00))&&(è.éé=Êæa,ÉÅê(Êæa,Ââ,0));}})();
````````


## Historical original site knowledge (unabridged)

Frozen historical evidence. It does not override the current sections above.

````````markdown
# Build Royale — Client, Protocol, Cosmetic, and Rendering Architecture Reference

## Current runtime addendum — verified through 2026-09-25

This current addendum supersedes older assumptions where they conflict. The historical 2026-09-22 architecture reference is retained later in this file because it remains useful for protocol, locker, and asset-system background.

The strongest architectural change since the original reference is that BRIO no longer needs to operate through the network or even through decoded replicated player state. A cleaner **direct local-renderer capture** was found and proven.

---

# A. Current local-renderer architecture

The current browser creates a renderer object for the local player after Play.

BRIO temporarily observes array insertions until the renderer matching:

```text
name = unlocker_test_player
```

appears.

Current recognition is based on the name plus known player-renderer members such as body/head/container/limb objects.

The temporary `Array.prototype.push` interception is removed immediately after capture.

Current flow:

```text
Play
  ↓
temporary Array.prototype.push observation
  ↓
local renderer object created
  ↓
identify by renderer name + player-renderer shape
  ↓
restore Array.prototype.push immediately
  ↓
snapshot native renderer state
  ↓
direct local field/resource substitutions
```

This is currently preferable to:

- start-packet modification;
- WebSocket mutation;
- MessagePack encode/decode rewriting;
- browser heap enumeration;
- persistent image-source interception.

The user reported normal gameplay performance with this direct-renderer design.

---

# B. Current renderer field map

The following names are from the observed current minified build and can change across deployments.

They should be treated as **functional relationships**, not stable API names.

## Player identity / root

```text
renderer["Ée"]   display name
renderer.id      entity/renderer ID
renderer["Eâ"]   player display/container
renderer["â"]    broader transform/root object
```

## Body / head

```text
renderer["Ëå"]["À"]  body resource
renderer.head["À"]   head resource
renderer["Äâè"]      head backup/current resource
```

Direct assignment of independent resources here is proven.

This permits:

```text
body = skin A
head = skin B
```

locally even though the native locker/protocol has only one `skin` ID.

## Pickaxe

```text
renderer["ÉãÂ"]      pickaxe resource
renderer["ä"]["À"]   current held-item sprite resource
```

When the currently held weapon type is `pickaxe`, BRIO updates both so the replacement appears immediately.

## Trail

```text
renderer["Ëé"]       trail asset prefix
renderer["åëÅ"]      trail emission timing/state
```

Bundled trail example:

```text
trail20 → renderer["Ëé"] = "trail20-"
```

Trail images then resolve through paired buildart resources such as:

```text
buildart/trail20-0.png
buildart/trail20-1.png
```

### Invisible Trail

Visually proven in Round 17:

```text
preserve the valid/native renderer["Ëé"]
set renderer["åëÅ"] = NaN
```

This suppresses the local trail without introducing synthetic/missing asset URLs.

## Wrap

```text
renderer["ÆÃÅ"]  active local wrap ID
```

Bundled substitution is proven.

The actual runtime weapon textures follow:

```text
/cosmetics/wraps/<wrap>0.png
/cosmetics/wraps/<wrap>1.png
```

This distinction is important:

```text
/cosmetics/combos/<id>.png
```

is useful as catalog/locker artwork, but is not the complete runtime gun-texture mechanism.

## Glider

Observed local renderer fields:

```text
renderer["aéÄ"]       glider ID/state
renderer["äÀÊ"]       loaded glider resource
renderer["ÂÅ"]["À"]   visible glider sprite resource
```

Bundled gliders work through direct resource assignment.

### Invisible Glider

Visually proven in Round 17:

```text
construct/load a transparent 700×700 local resource
assign it directly as the local renderer glider resource/sprite
```

No network or source interception is required.

## Emote

Active emote display:

```text
renderer["ÄÊâ"]["À"]
```

The game normally assigns one of the four native-slot resources here.

BRIO installs a narrow property wrapper on this single local renderer field so an incoming native slot resource can be mapped to the selected bundled BRIO emote.

This is local-renderer state only.

### Emote popup/menu

The popup uses four slot-icon resources:

```text
buildart/emote0.png
buildart/emote1.png
buildart/emote2.png
buildart/emote3.png
```

BRIO's current implementation uses an exact-path `HTMLImageElement.src` redirect only for those four icon requests.

This is the one remaining persistent browser-image hook in the current cosmetic implementation.

It has not produced a reported performance issue when limited to those exact four paths.

## Limbs / shadow

Additional primitives are separate from cosmetic body/head sprites:

```text
renderer["áË"]   left-side limb primitive
renderer["ÄÂ"]   right-side limb primitive
renderer["ÄãÀ"]  feet primitive
renderer["èÅ"]   small player shadow primitive
```

These are why a transparent body/head alone did not produce full invisibility.

For Invisible Body, visually proven local behavior is:

```text
left opacity   = 0
right opacity  = 0
feet opacity   = 0
shadow opacity = 0
```

Restore their captured native opacities when the body is no longer Invisible.

---

# C. Game resource wrapper shape used by direct substitution

BRIO successfully constructs resource wrappers around loaded local `HTMLImageElement` objects.

Observed useful shape:

```javascript
{
  src: <resource URL or data URL>,
  ÁÄ: <HTMLImageElement>,
  __brio: true,
  __kind: <category>,
  __name: <display/debug name>
}
```

The loaded image is marked similarly to the game's resource representation:

```text
image["ÀA"]  = 1
image["ÁÅe"] = image.width / 2
image["âÅÉ"] = image.height / 2
```

This shape has worked for:

```text
Body
Head
Pickaxe
Glider
```

including data-URL Custom/Invisible resources where currently supported.

---

# D. Current supported cosmetic behavior

## Body / Head

Supported:

```text
Native
Random
bundled catalog
Invisible
Custom upload
```

Tested bundled example:

```text
Body = Magma
Head = Devil
```

Independent mixed body/head rendering works.

Custom body/head data-URL resources work.

## Pickaxe

Supported:

```text
Native
Random
bundled catalog
Invisible
Custom upload
```

Preferred recurring test item:

```text
OG Champions Pickaxe
ID: trophy
```

Invisible Pickaxe was visually confirmed after Round 16.

## Wrap

Supported:

```text
Native
Random
bundled catalog
```

Not supported:

```text
Invisible
Custom
```

Custom runtime wrap attempts were part of the bad-performance path and are intentionally dropped.

## Trail

Supported:

```text
Native
Random
bundled catalog
Invisible
```

Not supported:

```text
Custom
```

## Glider

Supported:

```text
Native
Random
bundled catalog
Invisible
```

Not supported:

```text
Custom
```

## Emotes

Four independent slots.

Supported:

```text
Native
Random
bundled catalog
```

Not supported:

```text
Invisible
Custom
```

Both the visible emote effect and the popup/menu icon must be substituted for a complete local result.

---

# E. Catalog, preview, and invalid-asset handling

Current catalog source:

```javascript
window.Åèa
```

Current allowed/native-valid set:

```javascript
window.åÆÆ
```

The UI should label membership in that set:

```text
SYNC
```

Do not equate this marker with guaranteed account-specific ownership.

The fresh test account exposed mostly the global baseline set.

Catalog counts are deployment-dependent and should not be hardcoded.

Recent builds showed approximately:

```text
skins      179–181
pickaxes   167
wraps       76
trails     156
gliders      7
emotes     209
```

Preview asset validation now removes items whose preview:

- errors;
- has zero natural dimensions;
- is effectively fully transparent/empty.

Known examples encountered include:

```text
emote50
trumperpick
```

Use dynamic detection rather than relying on these exact names.

---

# F. Current local UI architecture

Known stable native elements:

```text
#loggedInLocker
#loggedInShop
```

BRIO must preserve those DOM nodes because native responsive/layout code manipulates them.

Capture-phase click interception prevents the native Locker/Shop action.

Current labels:

```text
(un)Locker
Extras
```

The custom Locker is home-screen configuration.

There is intentionally **no user-facing in-match cosmetic menu**.

Search must filter every entry type, including Native/Random/Invisible/custom entries.

The search control must use a text/I-beam cursor.

---

# G. Custom upload persistence

Database:

```text
IndexedDB database: brio_unlocker
object store: customAssets
```

Current supported upload categories:

```text
body
head
pickaxe
```

Current sizes:

```text
body     300×300
head     350×350
pickaxe  300×300
```

Records are category-specific and numbered:

```text
custom1
custom2
...
```

Unsupported historical custom records for other categories may remain stored but are hidden/ignored.

---

# H. Performance findings

## Good path

Normal performance was reported with:

- temporary renderer capture restored immediately;
- direct local renderer resource assignment;
- bundled Wrap/Trail/Glider field substitution;
- Invisible Body/Head/Pickaxe;
- Invisible Trail using the timer/state field;
- Invisible Glider using a transparent local resource;
- narrow emote effect/menu mapping.

## Bad path

Severe slowdown occurred when unresolved categories were represented with synthetic IDs and a broad/long-lived image-source hook waited for paths throughout gameplay.

A later custom-extra-category test similarly produced poor performance.

Therefore do not bring back:

```text
synthetic custom Trail path + broad source hook
synthetic custom Wrap path + broad source hook
custom Glider through broad interception
custom/Invisible Emote through broad interception
```

unless a future mechanism is independently proven clean.

---

# I. Player HUD renderer mapping

The game already constructs display objects for remote-player labels/bars.

Current observed fields:

```text
renderer["ÃÊ"]   name text/display
renderer["æÄ"]   health bar
renderer["AÃå"]  shield bar
renderer["Eâ"]   player display/container
```

Observed player-state values include:

```text
renderer["åÈ"]   health
renderer["Â$"]   shield
```

Round 17 example player snapshot:

```text
local unlocker_test_player: health 100, shield 0
Tbnreth:                  health 100, shield 0
bigfreesh:                health 100, shield 0
```

Native hidden-state observations:

```text
name opacity   0
health parent  not attached to player container
shield parent  not attached to player container
health width   ~100 at health 100
shield width   0 at shield 0
```

Attaching the existing health/shield display objects and raising their opacity worked.

The first tested y positions:

```text
health -82
shield -92
```

caused the health bar to overlap the player name.

Round 18 tests:

```text
health y = -100
shield y = -110
```

while preserving existing x positions.

It still needs visual verification with:

```text
actual health damage
non-zero shield
shield damage/change
```

before considering the modifier complete.

---

# J. Renderer-array lifecycle

The array containing local/remote renderer objects is useful for current-match discovery.

Important Round 17 observation:

At the active-match player snapshot:

```text
rendererArrayLength = 49
players = 3
```

After death/return flow, diagnostics showed:

```text
rendererArrayLength = 0
playerCount = 0
```

while the temporary HUD preview flag was still on.

Therefore modifier code that attaches temporary remote-player UI must handle match-end cleanup.

Round 18's preview automatically disables itself after repeated scans find no remote players.

The final production lifecycle should similarly clean up on renderer-array teardown / match transition.

---

# K. Build-system clarification

Earlier assumptions about normal player-built floors/ramps/roofs were incorrect for Build Royale.

The user clarified:

> The normal player-built structure is a wall. It has wood, brick, and metal variants.

Existing earlier mapping remains useful:

```text
chosenBuild = 0 → wall

chosenVariant:
0 = wood
1 = brick
2 = metal
```

Historical maximum wall health:

```text
wood   50
brick  70
metal  90
```

### Special deployables

The game also has special build/deploy items described by the user as:

```text
campfire
booster pad / boost pad
shield bubble type item
```

Exact internal identifiers are not yet mapped.

### Roofs

Roofs relevant to the planned Transparent Roofs modifier are:

```text
static map-building roof components
```

not ordinary player-created structures.

This distinction must be preserved in future implementation.

---

# L. Persistent world-object reconnaissance

A V16 world snapshot already exposed renderer/world objects corresponding to categories such as:

```text
gun
ammo
chest
build/wall-like renderer objects
```

An eight-second `Array.prototype.push` probe was not useful because it filled with transient mouse/update objects.

The new preferred technique is **snapshot/delta over persistent renderer arrays**:

```text
capture baseline IDs/references
        ↓
user takes arbitrary time to perform one action
        ↓
scan the persistent renderer arrays again
        ↓
report newly persistent objects
```

This requires no continuous hook during the user's action.

Round 18 uses this to map:

```text
wood wall
brick wall
metal wall
campfire
booster pad
shield bubble
loot changes
```

and can temporarily set the most recently captured wall renderer opacity to zero as a direct implementation test for the Builds Invisible challenge.

---

# M. Static-roof reconnaissance

Because roofs belong to static buildings, creation/delta capture is not appropriate.

Round 18 instead takes two nearby-renderer snapshots:

```text
ROOF OUTSIDE
walk underneath the same roof
ROOF INSIDE/DIFF
```

The comparison records changes to:

- renderer/resource paths;
- opacity values;
- type/kind metadata;
- nearby persistent object membership.

This is intended to identify the renderer object the game itself fades/hides when the local player enters a building.

A successful result may make `Transparent roofs` a simple local opacity assignment rather than a separate custom overlay.

---

# N. Loot modifier reconnaissance

Planned features:

```text
Challenge: Loot invisible
Modifier:  Highlight loot
```

The persistent world renderer graph appears to include loose:

```text
gun
ammo
```

and:

```text
chest
```

objects.

Still unresolved:

- whether `Loot invisible` should include chests or only loose pickups;
- final highlight visual style;
- the clean renderer property for a highlight.

Round 18 captures clean loot deltas plus a list of nearby ground loot.

---

# O. Current match/player construction model vs BRIO

The historical protocol architecture remains correct:

```text
locker2
   ↓
native internal locker
   ↓
start packet
   ↓
server authoritative player
   ↓
replication
   ↓
renderer
```

But BRIO no longer needs to alter that chain.

Current BRIO layer is:

```text
server-authoritative replicated player
             ↓
native renderer object created locally
             ↓
BRIO captures local renderer only
             ↓
BRIO substitutes renderer resources/fields locally
             ↓
Canvas renderer
```

This is an important separation:

```text
authoritative game state remains native
local visual state can differ
```

---

# P. Current unresolved product semantics

Architecture mapping is incomplete until the user specifies these product meanings:

1. `Builds invisible`: normal walls only, or walls + campfire/booster/shield bubble?
2. `All players invisible`: remote players only, or local player too?
3. `Player health bars` / `Player names`: remote players only or local player too?
4. `Loot invisible`: loose pickups only or chests too?
5. `Highlight loot`: glow/outline/rarity tint/icon/brightness/etc.?
6. `Minimal HUD`: which exact native HUD elements remain?
7. `Transparent roofs`: every static roof continuously or only roofs near/over the player?

These are product questions rather than current technical blockers.

---

# Q. Current next executable round

Next script:

```text
brio_round18.js
```

Its exact procedure and new-thread behavior are documented in:

```text
brio_thread_handoff_context.md
```

The new thread should wait for Round 18 output before changing the architecture again.

---

# Historical 2026-09-22 architecture reference retained below

The original reference below remains useful for:

- locker persistence;
- protocol mapping;
- account/entitlement architecture;
- MessagePack structure;
- server-authoritative player creation;
- asset loader/cache behavior;
- historical build/wall assets.

**If an older section conflicts with the Current Runtime Addendum above, use the addendum.**

---

# Build Royale — Client, Protocol, Cosmetic, and Rendering Architecture Reference

## Scope and snapshot

This section documents the browser-side architecture of `buildroyale.io` as observed and mapped on **2026-09-22**. It is intended as a technical reference for how the site loads cosmetics, persists locker state, authenticates an account, starts a match, represents players, replicates cosmetic state, and renders player assets.

The production JavaScript bundle examined was:

```text
https://buildroyale.io/js/uOfrVi.js
```

Observed bundle size:

```text
838,390 bytes
```

The bundle is heavily minified and obfuscated. Internal identifiers such as `E_`, `Á`, `ÈÀE`, `ãè`, `Eâ$`, `EæÊ`, `åÆÆ`, etc. are implementation names from the observed build and may change between deployments. The functional relationships documented below are more important than the individual obfuscated symbol names.

---

# 1. High-level architecture

The relevant application flow is:

```text
browser startup
    │
    ├─ load game bundle/assets
    │
    ├─ authenticate account
    │     ├─ account identity
    │     ├─ opaque session token
    │     └─ account cosmetic entitlements
    │
    ├─ initialize local cosmetic catalog
    │
    ├─ initialize locally allowed cosmetic set
    │
    ├─ restore locker2
    │     ↓
    │   internal locker object
    │
    ├─ render lobby / locker previews
    │
    └─ Play
          ↓
      matchmaking
          ↓
      game WebSocket
          ↓
      MessagePack start packet
          ↓
      server creates authoritative player
          ↓
      replicated player/entity state
          ↓
      local renderer
```

Cosmetic selection in the locker is primarily a browser-side state operation. The network-relevant cosmetic transition occurs when the client joins a match and serializes the current locker into the initial player-start message.

---

# 2. Cosmetic asset layout

Known directly addressable cosmetic assets include:

```text
Skins:
  /cosmetics/body/<id>.png
  /cosmetics/head/<id>.png

Pickaxes:
  /cosmetics/pickaxe/<id>.png

Gliders:
  /cosmetics/glider/<id>.png

Emotes:
  /cosmetics/emotes/<id>.png

Wrap-related assets:
  /cosmetics/combos/<id>.png
  /cosmetics/wraps/0
  /cosmetics/wraps/1

Trails / effects:
  several trail assets are represented through buildart resources
  e.g. buildart/<trail>-0.png
       buildart/<trail>-1.png
```

A prior asset inventory observed approximately:

```text
verified assets: 982 / 1365

skins       178
gliders       7
wraps        76
pickaxes    162
trails      154
emotes      208
```

The bundle also maintains a central asset registry, referred to in the minified build as `Á`, which maps logical asset names to source paths and loaded render objects.

---

# 3. Local locker persistence

The browser persists the selected cosmetic configuration in:

```javascript
localStorage["locker2"]
```

or equivalently:

```javascript
localStorage.getItem("locker2")
```

The stored value is JSON with the public schema:

```json
{
  "wrap": "sun",
  "skin": "tennis",
  "pickaxe": "tennispic",
  "trail": "trail2",
  "emotes": [
    "emote31",
    "emote37",
    "emote36",
    "emote171"
  ],
  "glider": "glider"
}
```

The recognized locker fields are:

```text
skin
wrap
pickaxe
trail
glider
emotes
```

There are no separate persisted cosmetic fields for body and head. A skin is represented by one skin ID.

---

# 4. Internal locker representation

Internally, the bundle uses obfuscated property names. The protocol mapper `ãè` translates between internal names and the public/wire names.

Relevant mappings include:

```text
internal      public/wire
--------      -----------
E_            locker
Æ_            skin
ÀÈã           pickaxe
Eã            emotes
Ëé            trail
ÂÅ            glider

éA            hair
Åa            layer
aâÈ           pickaxeSkin
aéÄ           gliderSkin
```

The same mapper is used in both directions:

```javascript
ãè.åÂê(...)
```

maps internal names to public/protocol names.

```javascript
ãè.éèé(...)
```

maps public/protocol names back into the internal representation.

This mapping layer is used for persisted locker data and network messages.

---

# 5. Native locker load/save functions

Two globally reachable functions are particularly important to locker state.

## Save internal locker to localStorage

Observed behavior:

```javascript
window.EæÊ = function() {
    if (loggedIn) {
        localStorage["locker2"] =
            JSON.stringify(
                protocolMapper.encode(
                    JSON.parse(JSON.stringify(internalLocker))
                )
            );
    }
};
```

Conceptually:

```text
internal locker
    ↓
convert internal field names → public names
    ↓
JSON
    ↓
localStorage["locker2"]
```

## Reload localStorage locker into the game

Observed behavior:

```javascript
window.Eâ$ = function() {
    if (!loggedIn) return;

    try {
        internalLocker =
            protocolMapper.decode(
                JSON.parse(localStorage["locker2"])
            );
    } catch (...) {}

    ...
}
```

Conceptually:

```text
localStorage["locker2"]
    ↓
parse JSON
    ↓
convert public names → internal names
    ↓
internal locker
    ↓
refresh native preview/render state
```

Therefore the normal browser-side commit pattern is:

```javascript
localStorage.setItem("locker2", JSON.stringify(locker));

if (typeof window.Eâ$ === "function") {
    window.Eâ$();
}
```

---

# 6. Cosmetic catalog and allowed-ID set

The game maintains at least two relevant cosmetic collections.

## Cosmetic catalog

The complete client catalog is exposed in the observed build through:

```javascript
window.Åèa
```

Catalog entries contain metadata such as cosmetic ID, type, and display name.

Types observed include:

```text
skin
pickaxe
wrap
trail
glider
emote
```

## Locally allowed cosmetic IDs

The game also maintains:

```javascript
window.åÆÆ
```

This is the list the native locker uses when deciding which catalog entries are normally selectable.

It is not purely the account-specific ownership list.

Observed composition:

```text
account-specific server entitlements: 57
built-in/client baseline cosmetics:   53
-----------------------------------------
window.åÆÆ total:                    110
```

The 53 baseline IDs observed were:

```text
glider
pickaxe
nowrap
player

trail0 ... trail10

emote0 ... emote37
```

This accounts exactly for:

```text
4 base IDs
+ 11 trails
+ 38 emotes
= 53
```

The remaining IDs in `window.åÆÆ` came from account-specific entitlement data returned by login.

---

# 7. Account/login response structure

The browser authenticates against the Build Royale login service.

A normal login response was observed as a top-level array:

```text
index 0 → array(4)
index 1 → array(4)
index 2 → array(4)
index 3 → string
index 4 → cosmetic entitlement array
index 5 → statistics object
index 6 → account/game-state object
```

The important cosmetic/session fields are:

```text
response[3] = opaque session token
response[4] = account-specific cosmetic entitlement IDs
response[6].id = account ID used by the game
```

The token observed by the client is a short opaque string rather than a JWT.

The account object at `[6]` included fields such as:

```text
id
currency
totalCurrency
xp
claimed
premium
missionProgress
missionClaimed
ads
```

The statistics object at `[5]` contains gameplay counters such as wins, kills, games, damage, weapon-specific kill counts, walls built, etc.

No separate body/head entitlement model was observed.

---

# 8. Native cosmetic ownership behavior

The native locker builds its selectable entries from the client catalog plus the locally allowed-ID set.

Conceptually:

```javascript
const available = Array.from(window.åÆÆ);
```

Catalog entries outside the normal allowed range can still be displayed, but the native interface normally presents them as locked rather than giving them the standard selection handler.

The client also contains a local preview condition that can permit rendering an ID even when it is outside the normal allowed set.

This is a browser/rendering behavior only.

The account-specific entitlement source remains the server-provided login response.

---

# 9. Skin composition

A native skin consists of one cosmetic ID.

The same ID is used to construct both:

```text
/cosmetics/body/<skin>.png
/cosmetics/head/<skin>.png
```

For example:

```text
skin = tennis

body:
  /cosmetics/body/tennis.png

head:
  /cosmetics/head/tennis.png
```

The native locker preview follows the same model.

No native protocol field was found for:

```text
headSkin
bodySkin
skinHead
skinBody
cosmeticHead
cosmeticBody
outfit
torso
face
```

The protocol vocabulary contains only one relevant cosmetic field:

```text
skin
```

Therefore body/head composition is normally determined from one shared skin ID.

---

# 10. `hair` and `layer`

Two player fields initially looked potentially cosmetic-specific but serve different roles.

## `hair`

The player renderer uses `hair` for the default/built-in appearance system.

Conceptually:

```text
body = player<hair>
head = hair<hair>
```

Additional built-in/custom cases exist for larger numeric hair values and some special player states.

If `hair` is a string, the renderer can resolve resources using patterns similar to:

```text
<hair>body
<hair>head
```

When a normal cosmetic `locker.skin` is present, the skin's body/head assets override the default hair-based appearance where applicable.

Thus `hair` is a legacy/default appearance selector, not an independent paid-cosmetic head selection field.

## `layer`

`layer` is associated with rendering/world-layer placement.

It is not a cosmetic body/head layering selector.

---

# 11. Matchmaking

A matchmaking endpoint observed for the production build queue is:

```text
GET https://build_matchmaking_ea.buildroyale.io/RESTservers?queue=build_prod
```

The result leads the browser to a match-specific WebSocket endpoint with the general form:

```text
wss://ip_<hash>.buildroyale.io/ws
```

The exact hostname varies between matches.

---

# 12. Game WebSocket protocol

The game WebSocket uses a MessagePack-style binary protocol.

The browser bundle itself uses:

```javascript
msgpack.encode(...)
msgpack.decode(...)
```

with the internal/public field-name mapper wrapped around the MessagePack serialization.

Outbound messages conceptually follow:

```javascript
msgpack.encode(
    protocolMapper.encode(message)
)
```

Inbound messages follow:

```javascript
protocolMapper.decode(
    msgpack.decode(frame)
)
```

The protocol therefore contains structured maps, arrays, strings, integers, floats, booleans, etc., rather than an opaque proprietary bitstream.

---

# 13. Match-start packet

When Play begins, the client constructs an internal match-start object.

The observed internal structure is conceptually:

```javascript
{
    type: "start",
    name: <player name>,
    party: <party>,
    p: <player/start data>,
    ws: <weapon-related value>,
    loc2: <location/origin value>,
    locker: deepClone(internalLocker),
    moar: <additional client value>
}
```

After the field mapper runs, the public/wire object contains keys:

```text
acid
loc2
locker
moar
name
p
party
t
token
ws
```

with:

```text
t = "start"
```

A representative wire locker is:

```json
{
  "wrap": "ice",
  "skin": "tennis",
  "pickaxe": "club",
  "trail": "trail1",
  "emotes": [
    "emote0",
    "emote1",
    "emote2",
    "emote3"
  ],
  "glider": "glider"
}
```

The match-start message also includes:

```text
acid  = authenticated account ID
token = same opaque session token returned by login
```

The browser does not transmit `window.åÆÆ` or the account's complete entitlement array with the match-start message.

---

# 14. Player/entity model

Player entities use a `p` array with the structure:

```text
p = [
    entityId,
    "player",
    x,
    y,
    z,
    active
]
```

For example:

```text
[923,"player",-5532,1435,116,true]
```

The strongly established portions are:

```text
p[0] = entity ID
p[1] = entity type
```

with:

```text
p[1] === "player"
```

for player entities.

The remaining numeric fields behave as position/spatial state, followed by an active boolean.

---

# 15. Replicated player state

The server sends player/entity objects back to clients containing both gameplay state and cosmetic state.

Observed player keys include:

```text
t
p
name
health
score
shield
weaponSlots
selectedWeapon
building
sprinting
cookingNade
steadying
hair
canBuild
chosenBuild
chosenVariant
effects
diving
glidingTicks
maxGlidingTicks
mats
wAmmo
ammo
knocked
frt
pickaxeSkin
v
locker
flashed
grapple
gliderSkin
layer
house
```

A representative replicated locker has the same basic schema:

```json
{
  "skin": "tennis",
  "wrap": "ice",
  "pickaxe": "club",
  "trail": "trail1",
  "glider": null,
  "emotes": [
    "emote0",
    "emote1",
    "emote2",
    "emote3"
  ]
}
```

The replicated player can also contain:

```text
pickaxeSkin
gliderSkin
hair
layer
```

These should not be interpreted as duplicates of the locker IDs.

---

# 16. Authoritative cosmetic state

The client sends its requested locker in the `start` message.

The server then creates and distributes the authoritative player object.

Observed architecture:

```text
requested local locker
      ↓
start {
    acid,
    token,
    locker
}
      ↓
server-side player creation / validation
      ↓
authoritative player.locker
      ↓
players replication
      ↓
all connected clients
```

Account-specific entitlement state is associated with the authenticated account/session rather than being supplied as a client-side ownership array in the match packet.

Cosmetics belonging to the globally permitted baseline set are also accepted even though they do not appear in the account-specific `/login[4]` entitlement array.

Thus there are at least two legitimate authorization classes:

```text
account-specific entitlement
global/baseline cosmetic
```

---

# 17. Glider state

Glider representation has a notable distinction.

The outbound locker can contain:

```json
"glider": "glider"
```

while the authoritative replicated locker contains:

```json
"glider": null
```

and the surrounding player object contains:

```json
"gliderSkin": "glider"
```

This is normal for the observed baseline glider.

Therefore:

```text
locker.glider
```

must not be treated as the complete active glider-rendering state.

---

# 18. Pickaxe state

Similarly, a replicated player may contain:

```json
"locker": {
  "pickaxe": "club"
},
"pickaxeSkin": "pickaxe"
```

The cosmetic ID used for the visible pickaxe is derived from the locker in the player renderer.

`pickaxeSkin:"pickaxe"` is a separate gameplay/render state value rather than a direct copy of the cosmetic locker ID.

---

# 19. Player renderer — skin

The player constructor initializes default appearance from `hair`, then applies the cosmetic locker skin.

Conceptually:

```javascript
if (player.locker === undefined) {
    player.locker = {
        wrap:null,
        pickaxe:null,
        skin:null,
        glider:null,
        trail:null
    };
}

if (player.locker.skin != null) {
    body.image =
        load("cosmetics/body/" +
             player.locker.skin +
             ".png");
}

head.image = defaultHairImage;

if (skinMayOverrideHead &&
    player.locker.skin != null) {

    head.image =
        load("cosmetics/head/" +
             player.locker.skin +
             ".png");
}
```

Thus the normal match renderer derives:

```text
body from locker.skin
head from locker.skin
```

using the exact same ID.

---

# 20. Renderer asset caching

The game uses an internal image/resource loading function observed as `ÈÀE(...)`.

The loader caches by URL/path string.

That means these can be distinct cache entries:

```text
cosmetics/body/tennis.png
cosmetics/body/tennis.png?2
```

even though they resolve to the same underlying file.

This distinction is important because lobby previews and match rendering do not always request identical URL strings.

Observed pattern:

```text
lobby/preview body:
  cosmetics/body/<skin>.png?<cache value>

match body:
  cosmetics/body/<skin>.png
```

For the head:

```text
lobby/preview head:
  cosmetics/head/<skin>.png

match head:
  cosmetics/head/<skin>.png
```

The no-query head cache entry can therefore be shared between preview and match rendering, whereas body preview and match body may occupy different cache entries.

Pickaxe rendering similarly uses direct paths such as:

```text
cosmetics/pickaxe/<id>.png
```

for match rendering.

---

# 21. Canvas rendering

The game uses Canvas 2D rendering extensively.

Observed drawing call stack includes:

```text
CanvasRenderingContext2D.drawImage
```

and bundle functions around the main rendering loop.

Representative player asset draw sizes observed include approximately:

```text
body:
  [-50,-50,100,100]

head:
  [-60,-60,120,120]

pickaxe:
  [-55,-55,110,110]
```

Glider assets are rendered at a larger scale.

Trail rendering can reference paired buildart resources such as:

```text
buildart/trail2-0.png
buildart/trail2-1.png
```

---

# 22. No native independent body/head protocol

Static protocol-map analysis found no wire fields corresponding to independent cosmetic body/head IDs.

Searching the complete decoded protocol mapping yielded relevant cosmetic/player terms including:

```text
hair
pickaxeSkin
skin
player
locker
players
playerCount
logPlayers
layer
gliderSkin
```

No mapped protocol fields were found for:

```text
head
body
headSkin
bodySkin
skinHead
skinBody
cosmeticHead
cosmeticBody
outfit
avatar
face
torso
```

This matches the renderer architecture: one `locker.skin` ID is used to derive both cosmetic body and cosmetic head.

---

# 23. Match-time cosmetic messages

The client-generated gameplay packet types discovered from the main gameplay queue include:

```text
build
command
emote
getEnvs
getID
getObject
mouse
mouse2
needammo
pickup
reload
s
selectBuild
selectBuildVariant
selectChange
splitammo
splitmat
switch
teamPing
updateControls
```

Matchmaking/lobby messages observed include:

```text
changename
create
join
kick
ready
setqueue
unready
```

No native post-start packet was identified for:

```text
skin change
locker change
cosmetic update
head change
body change
```

The initial cosmetic state is therefore established during player creation rather than through a later dedicated cosmetic-update message.

---

# 24. Server-originating message types

During an initial-match capture window, server message types observed included:

```text
e
players
x
setID
y
circle
z
```

The authoritative player object is delivered as part of normal player/entity replication.

No separate later cosmetic-authorization message was observed.

---

# 25. Build/world state

The protocol also represents player-built structures and build state.

Known player build-control fields include:

```text
building
canBuild
chosenBuild
chosenVariant
mats
```

Observed:

```text
chosenBuild = 0
```

corresponds to a wall.

Material variants observed:

```text
0 = wood
1 = brick
2 = metal
```

Observed maximum build health values:

```text
wood  = 50
brick = 70
metal = 90
```

---

# 26. Build assets

Known wall-related resources include:

```text
Wood:
  bluewood.png
  redwood.png
  wood0.png
  wood1.png
  wood2.png

Brick:
  corresponding brick stage assets
  brick0.png
  brick1.png
  brick2.png

Metal:
  corresponding metal stage assets
  metal0.png
  metal1.png
  metal2.png
```

The central asset registry contains logical entries for staged build sprites, including patterns such as:

```text
brickwall_stage2
fortifiedwall_stage2
```

and associated `buildart/...` files.

Additional assets:

```text
build1.png
build2.png
build3.png
```

appear to be build/HUD-related rather than ordinary completed wall sprites.

---

# 27. Obfuscation/string architecture

The main bundle uses a shared encoded string table.

Observed initialization follows the general structure:

```javascript
for (...) {
    strings[i] =
        window.atob(
            decode(strings[i])
        );
}
```

The decoder combines an XOR operation with a rolling counter.

The decoded shared string array contained approximately:

```text
365 entries
```

Examples of decoded strings included:

```text
filter
appendChild
body
start
wrap
head
```

After decoding escaped literals and replacing numeric string-table references, common architectural terms became directly searchable throughout the minified bundle.

This static decoding was important because raw literal searches for terms such as:

```text
locker
skin
head
body
```

are otherwise incomplete due to hexadecimal/octal/unicode escape sequences and string-table indirection.

---

# 28. Protocol field mapping

The bundle contains a centralized public/internal protocol vocabulary.

Relevant mappings include:

```text
hair
pickaxeSkin
skin
player
pickaxe
locker
emotes
trail
glider
gliderSkin
layer
```

Outbound and inbound network objects are transformed through this mapping before and after MessagePack serialization.

The presence of a field in the public player object therefore generally corresponds to an explicitly recognized protocol field rather than an arbitrary property copied from JavaScript.

---

# 29. Cosmetic trust model

The browser's locally allowed cosmetic list and the server's authoritative match behavior serve different purposes.

Conceptually:

```text
                    ACCOUNT SERVICE
                          │
           ┌──────────────┴──────────────┐
           │                             │
      session/account              entitlement list
           │                             │
           │                             ▼
           │                       browser locker UI
           │                       / local preview
           │
           ▼
       MATCH SERVER
           ▲
           │
   requested locker
           │
        browser
```

The client uses the entitlement list for native UI and local-preview decisions.

The match server receives:

```text
account/session identity
requested locker
```

rather than the complete browser ownership list.

The authoritative replicated locker is produced during server-side player initialization.

---

# 30. Architectural summary

The most concise current model is:

```text
                    BUILD ROYALE CLIENT
                            │
                 cosmetic catalog
                            │
               ┌────────────┴────────────┐
               │                         │
       account entitlements        built-in defaults
               │                         │
               └────────────┬────────────┘
                            │
                         åÆÆ
                            │
                       native locker
                            │
                     internal locker E_
                            │
                  localStorage locker2
                            │
                            │ Play
                            ▼
              MessagePack t:"start"
              {
                acid,
                token,
                locker
              }
                            │
                            ▼
                    MATCH SERVER
                            │
                    player creation
                            │
                  authoritative locker
                            │
                            ▼
                    players/entities
                            │
                            ▼
                    CLIENT RENDERER
                            │
           ┌────────────────┼────────────────┐
           │                │                │
      locker.skin      locker.pickaxe    other locker/
           │                │            derived state
     body + head          pickaxe
           │
       Canvas 2D
```

The significant architectural conclusions are:

1. Cosmetic selection is persisted locally in `locker2`.
2. The native internal locker and `locker2` are converted through a public/internal field mapper.
3. A skin is represented by one ID; native rendering derives both body and head from it.
4. Match initialization explicitly sends the selected locker.
5. Authentication identity and the opaque login token are included with match start.
6. The browser's complete allowed/ownership list is not sent in the match-start packet.
7. The server creates an authoritative player/locker representation and replicates it to clients.
8. Player cosmetics are rendered from the replicated player state plus local/default derived state such as `hair`, `pickaxeSkin`, and `gliderSkin`.
9. Lobby-preview and match-render asset paths can use different cache keys.
10. No native post-start cosmetic-update packet has been identified in the current client.
11. Build/world entities use the same broader replicated entity architecture and have separate material/stage asset mappings.

This should be treated as the baseline site-architecture model for subsequent client-side work.
````````
