# V48 focused live procedure

Copy the complete raw dist/brio-v48.min.js into Console on Build Royale home. Ordinary Play, no arm/start button. Save full COPY RESULTS as logs/v48-log.txt with separate observations. Unencountered conditions are untested, not failures.

## Settings

Enable the9 blue rows: Screen chests, Screen airdrops, Screen fishing spots, Low-health visual warning, Low-material warning, Low-ammo visual warning, Identify bots, Remove loot glow/effects, Transparent foliage.

Enable proven Inventory:5 item slots, Inventory:build materials/counts, Inventory:ammo by type as display dependencies. Keep preferred proven size/names/bars/cosmetics. High contrast deferred/off; avoid chest/player hiding for comparisons. No mandatory meteor, arrows, cosmetics, monochrome or map-expiry retests.

All11 inputs are in one horizontal row (scroll on narrow screens). Each group greys/disables with its warning option. Comparisons are **strictly under**, equality never warns:

| HP | Light | Medium | Shells | Heavy | Rockets | Grappler charges | Wood | Brick | Metal | Scraps |
|---|---|---|---|---|---|---|---|---|---|---|
| 20 | 30 | 30 | 15 | 10 | 5 | 1 provisional | 30 | 30 | 30 | 1 |

Own guns compare loaded+reserve, including unequipped slots. Remote separate ammo row displays reserves with the same type thresholds; its numbers need not equal loaded+reserve. Grappler compares charges only, with no sixth reserve row. Native flare is also charge-only and shares that threshold. Scraps are the fourth material.

## Match 1: defaults and available resources

Play normally. Check naturally available warnings: HP outlines on own/remote players; red borders around corresponding native material/gun slots, no displaced bottom-left box; remote material/ammo numbers flash red under their thresholds.

If a grappler is available, use charges and switch away/back. Its own slot should warn below its setting even unequipped; a visible remote grappler slot likewise warns when known charges are low. Unknown charges must not falsely warn. Missing grappler/remote state is explicitly untested.

Confirm remote slot ammo numbers are gone, with captions/art/X/size and separate ammo row intact. This is the only new inventory appearance check.

Normal/legendary chests, ammo/grenade crates, airdrops and fishing spots collect passive evidence during ordinary encounters. No popup hunt or repeated pre/post chores: contents remain unresolved. If any custom contents appear, report whether above the unopened object before interaction range; native proximity type names do not count. Report foliage and loot-glow verdicts when visible. No bot label promised.

## Match 2: custom boundaries and persistence

Before a second ordinary Play, without reload/reinjection, edit settings to easy-to-observe values. Prefer thresholds based on known counts instead of exhausting every ammo type. All11 values should survive closing/reopening Extras and this Play.

For known count N, threshold N stops the warning; N+1 shows it. Try an available gun, material (scraps if present), grappler if present, and known HP. Zero disables a single type. Give shells/heavy distinct thresholds to detect index swaps; adjust remaining types through the same row and report unencountered types.

Toggle the three warning options off/on: controls grey/enable and warnings disappear/return. Changes apply promptly to local/remote drawings with known values. Blank/invalid fields keep the last valid choice when you leave them.

At most3 extra action types per match: edit/toggle controls; use/switch an available grappler; briefly observe remote HUD warnings. Ordinary Play/looting and COPY RESULTS are usual workflow. No forced depletion/damage or rare-resource guarantees.

## Report

Provide defaults/custom values, equality/zero/disabled outcomes, own gun position including unequipped/grappler, scraps, remote warnings/slot-count removal, foliage/glow verdicts, encountered container types and unexpected behavior. Logs alone cannot prove appearance; unseen conditions stay untested.
