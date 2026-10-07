# V51 complete live procedure (includes all untested V50 checks)

Copy raw file from dist/brio-v51.min.js; paste on Build Royale home, confirm BRIO v51. Ordinary Play only. Terminal EXTRAS opens settings even minimized; Close returns to play. No manual arm. Solo. Every changed V50 item below is still untested; fixture success is not visual proof. No dedicated recurring meteor/monochrome/cosmetic/foliage/warning-decision/selected-border chores; high contrast off/deferred. Normal play and COPY RESULTS export are not additional special action types.

## Home: reset and color controls

Enable each warning, enter temporary custom values, Reset to default. Check independent defaults: HP20; light30/medium30/heavy10/shells15/rockets5/grappler5; wood30/brick30/metal30/scraps1. Only that group resets; other groups/enables remain unchanged. Disable one warning and confirm inputs/reset grey/inactive. Multi-threshold group stays on one line (narrow screen may scroll horizontally). Restore preferences. Parent warning proof is retained; CHECK RESET concerns new UI only.

For player/chest/airdrop/safe-zone/loot indicators, check inline color selector/swatch, change one color per enabled indicator, confirm preview, and confirm controls grey when disabled. Safe-zone default is blue. Set at least one gold and one red **gun+rarity pair** in Loot indicator, choosing naturally plausible guns; multi-choice works. Available choices come from client gun/ammo/asset routes; not every gold gun spawn is proven. Settings survive next Play/reinjection by design. No new standalone Remove glow/Highlight loot option should appear; retained effect code belongs to Mask rarity.

## Match A — V50 inventory/loot/build/player surface

Hell OFF. Enable the16 normal blue switches: Screen chests/airdrops/fishing, Identify bots, remote inventory slots/materials, player/chest/airdrop indicators (color changes only), Show bullet spread, Build health outlines, Breakable object health outlines, Nearest safe-zone edge, Loot indicator, Highlight ammo for owned guns, Longer bullet trails. Enable remote ammo as width/reference dependency. Screening/bots remain passive unresolved recon, not promised custom labels/classification. Keep selected loot pairs/colors from home.

At most three extra action types: Extras edits; inspect naturally encountered ground loot/nearby popup; aim/place builds. Repeats allowed. Shooting/harvesting/weapon switching/movement are ordinary play.

1. Remote player inventory: no hotkeys/redundant slot counts; larger materials; item row same width as ammo strip at current size. Retain native art/X look and report any regression. Current native/fallback acquisition is logged. Observe existing arrows only to confirm changed colors.
2. Cycle Mask loot on naturally encountered gun/ammo/material/consumable/throwable ground pickups; record kinds actually encountered:

| Tier | Item art | Bubble/particles | Native nearby popup | Yellow position outline |
|---|---|---|---|---|
| Mask item | Hidden | Visible | Visible when near | No |
| Mask rarity | Visible | Hidden | Visible when near | No |
| Popups only | Hidden | Hidden | Visible when near | No |
| Locations only | Hidden | Hidden | Hidden | Yes |
| All invisible | Hidden | Hidden | Hidden | No |

Toggle off: art/effects/popup return. Mask loot alone preserves chest/vehicle prompts. This is unrelated to unresolved always-visible custom container contents. No forced special loot hunt.

3. Invisible builds: Blueprints only shows aiming preview, hides entire placed wall including blue base, next aiming preview returns. All invisible also hides aiming preview. Toggle off restores placed art. Record any special build naturally encountered; no forced hunt.
4. All players invisible: remote body/pickaxe/held gun/held-build preview/glider/grapple/rope/shadow/emote and newly emitted trails disappear. Local body/held art stays visible with Hide weapons OFF. Detached trails have no owner, so ALL native/custom trails including local disappear; UI states scope. Toggle off restores native draws; report remaining cue and item/mode.
5. Briefly check the carried V50 independent widgets with toggles: No map hides mini AND full map (full-map check may wait for Match B); No crosshair hides full reticle; No inventory hides item/material/ammo bar; No health/shield HUD leaves selected-ammo counter; Invisible storm hides world shade and map shade/outline while map terrain/markers remain when No map OFF. Each returns on disable. Timer/player/kills stay under No map alone.
6. End game: Match breakdown replaces battle-pass area on loss or win, header/Play/spectate stay native. Check available native totals, eliminated names and observed counters; per-player damage rankings explicitly unavailable. Note a win if one occurs; do not force a win. Native dedicated Battle Pass browsing should return its original panel.

## Match B — new modifiers and independent challenges

Use the same normal blue modifier selections, with Mask loot/Invisible builds/All players invisible OFF unless checking their interaction. Enable targets/colors selected above. Three extra action types maximum: Extras edits; brief naturally encountered loot inspection; one full-map open/close.

1. In ordinary gunfire/movement/weapon switching, cone follows selected gun/aim and changes spread; suppress for pickaxe/build mode/grappler/flare. Angular interpretation is PROVISIONAL: report whether actual emitted bullets visibly escape/mismatch cone and name gun/state. Calibration records packet/native spread, not a verified hit probability or range. Length is a fixed display choice.
2. Observe normal harvesting/build damage: green>75%; yellow>50..75%; orange>25..50%; red<=25. Build outlines stay around placed build; object outlines include breakable trees/rocks/vehicles (same toggle). They should follow position/rotation/size and stop on removal. Unknown max means no outline, not red. Record unencountered boundary/vehicle cases rather than force all.
3. Safe-zone arrow: blue/custom color, square nearest edge and meters built in. Arrow hides when target is onscreen/transform unavailable. During movement target is next decoded safe zone, not interpolated current storm edge.
4. Selected offscreen gold/red guns produce plain arrow plus correct inventory image/rarity background. Multiple selected types can coexist, capped nearest12. Unselected/other rarities absent. Onscreen/picked-up/culled loot arrow disappears; changing selection/toggle works. No unopened-container content inference; absent spawned variants are not failures. Owned-ammo highlight follows current carried gun types, actual ammo only; unrelated ammo/materials unhighlighted. Longer trails follow past bullet AND throwable positions and fade/expire without changing native flight. Throwables only if naturally acquired.
5. Toggle each new challenge ON/OFF independently: No pickup labels keeps visible ground loot, hides nearby loot popup (container/vehicle prompts kept); No hit-confirmation marker leaves white crosshair; No floating damage numbers hides damage/heal pool, leaves health bars; No reload/charge progress hides native progress HUD, leaves held artwork/damage-direction cues; Invisible bullets/throwables hides projectile art and shared detached trails, leaves simulation/audio; Hide weapons hides own/remote held guns/pickaxe/build previews, keeps bodies; No storm countdown hides timer/icon/text, keeps minimap/player/kills with No map OFF. Check late newly emitted projectiles/text too. Each restores on disable.
6. Open full map once while toggling No map OFF/ON/OFF: whole map disappears/restores; No map alone leaves timer/player/kills. Invisible storm alone leaves terrain/markers. This covers adapted V50 scope plus C01.
7. End-game Match breakdown again; compare native totals/observed losses/elimination names to play, no fabricated player damage rankings. Header/Play/spectate remain; no battle-pass bleed/late duplication. Next Play restores native panel/declarations and starts fresh stats. Observe dedicated Battle Pass browse when available after return home.

## Match C — Hell, before Play and live restoration

On home leave a few modifiers/colors/loot pairs/tiers saved ON and enable Hell. Start ordinary Play. Every gameplay challenge locked ON at highest tiers, modifiers unchecked/locked, warning reset inputs and color/loot selectors inactive; monochrome/flashlight remain independent. Native/BRIO remote names/bars/arrows/inventories must not assist. Native local body/audio stay; **local held art now hidden through Hide weapons**, unlike V50 preset scope. Loot art/effects/popups, remote physical/held/trails, placed builds/blueprints, mini/full maps, crosshair/hit marker, inventory/HP-shield HUD, storm shade/countdown, chests/crates, damage/progress and projectile art all hidden. Player/kills counters are not newly challenged.

Disable Hell once live: saved modifier/tier/color/loot choices restore, including selected assistance timers/arrows/bar parents/HUD/art. Previously saved independent challenges remain ON. Re-enable once live to cover other activation path. Settings changes are one extra action type; optional map inspection is second. Containers/fishing/airdrops/legendary variants/bots continue passive capture, no before/after buttons or guessed classifier/NONE checks. End-game sheet still appears. All three Play epochs exercise changed cleanup without extra proven meteor/mono chores.

## Export

After matches, COPY RESULTS once; upload entire output as logs/runs/v51-log.txt. Report pass/fail/not encountered for every changed surface, named gun/cue/health boundary/color/rarity where relevant; include win/loss coverage. Unencountered, private, missing or capped conditions remain unknown. No V50 live log is needed; V50 is deliberately untested and its checks are all represented here. Supply main HTML document if available: DevTools Network > reload > main buildroyale.io document > Response, save as index.html; Sources may call it(index), not index.html.
