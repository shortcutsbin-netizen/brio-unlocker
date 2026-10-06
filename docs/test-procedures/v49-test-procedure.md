# V49 focused live procedure

Copy the complete raw dist/brio-v49.min.js into Console on home. Ordinary Play, no manual arm/start. COPY RESULTS goes to logs/runs/v49-log.txt; visual verdicts separately under logs/observations/. Missing resources/conditions are untested, not failures.

## Settings

Enable9 blue options: Low-health visual warning, Low-ammo visual warning, Low-material warning; Screen chests, Screen airdrops, Screen fishing spots; Identify bots; Remove loot glow/effects; Transparent foliage.

Enable proven inventory slots/materials/ammo rows as remote resource-display dependencies. Keep preferred proven inventory size and other visuals. High contrast remains deferred/off; avoid player/loot/chest hiding while observing corrections. There is no Highlight loot modifier. The loot option here is **Remove loot glow/effects**.

Each warning has its threshold inputs directly underneath it, in one horizontal child row. Controls grey/disable when that warning is off. Valid saved custom values remain; missing/invalid settings use these defaults:

| Health | Light | Medium | Shells | Heavy | Rockets | Grappler | Wood | Brick | Metal | Scraps |
|---|---|---|---|---|---|---|---|---|---|---|
| 20 | 30 | 30 | 15 | 10 | 5 | 5 | 30 | 30 | 30 | 1 |

**Inclusive**: count<=threshold warns. Zero threshold warns only for known zero count; it is not an off switch. Unknown/negative values never warn. Flare gun always exempt. Own guns compare loaded+reserve; grappler charges only. Remote separate ammo row remains reserve counts with same per-type thresholds. HP circles belong to native local player only; remote resource warnings remain.

## Match: changed behavior only

1. Confirm inline group placement and grey/enable behavior when each warning toggles off/on. Existing value saving is proven; do not repeat the full11-field persistence suite.
2. For an available gun/material/grappler and known HP count N, set threshold N: warning ON. Set N-1 when N>0: warning OFF. At scraps1/threshold1, warning ON. If you naturally have zero counts, threshold0 should warn. Check naturally available remote resource counts the same way; remote HP circles must never appear.
3. Switch between low-ammo slots: the red outline must rise/fall with the native selected slot and stay around its actual border, including unequipped slots. Ordinary pickups/drops should rebind correctly. Available flare with0/1 shot must never receive a warning even with a very high charge threshold. Use a grappler if found; no forced rare-resource hunt.
4. Observe ground guns/items/ammo/materials of available rarities. With Remove loot glow/effects ON, rarity glow and triangle/sparkle particles should vanish, while item art remains. Turn OFF: effects return; turn ON: future emitted particles remain hidden. There is no loot highlight test.
5. Report transparent foliage if naturally visible. Ordinary containers collect passive evidence; note normal/legendary/ammo/grenade/airdrop/fishing types encountered. Screening is still unresolved: no popup hunt/proximity pause or expectation of an implemented custom label. If actual custom contents appear, report whether above unopened objects before interaction range; native type labels do not count.

At most3 extra manual action types: threshold/option edits; normal slot switching; brief loot-effects observation. Ordinary looting/Play/export are usual workflow. A second ordinary match is optional only if needed for missing resources or unexpected lifecycle behavior. No meteor/monochrome/cosmetic/map/whole-inventory appearance chores.

## Return

Full log plus explicit equality/HP-scope/flare/selected-border/loot-particle/inline-control/foliage verdicts and unencountered conditions. Fixture checks alone cannot establish live appearance.
