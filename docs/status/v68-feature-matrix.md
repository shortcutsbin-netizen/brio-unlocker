# V68 complete modifier/challenge status

29 modifiers/preferences + 20 challenges = 49 retained options. 22 PROVEN; 27 BUILT · CHECK; 0 planned-but-unimplemented controls. State does not automatically change after a local test.

## modifiers

| Option | ID | State | Scope / remaining check |
|---|---|---|---|
| Transparent roofs | `transparentRoofs` | PROVEN | static map roofs; exceptions only. |
| Player health bars | `healthBars` | PROVEN | remote players; exceptions only. |
| Health/shield numbers | `numericHealthShield` | PROVEN | numbers inside native bars · proven; exceptions only. |
| Player names | `playerNames` | PROVEN | remote players; exceptions only. |
| All gliders invisible | `allGlidersInvisible` | PROVEN | self + remote; exceptions only. |
| All trails invisible | `allTrailsInvisible` | PROVEN | self + remote; exceptions only. |
| Nearest player indicator | `nearestPlayer` | PROVEN | off-screen only + distance; exceptions only. |
| Player name in nearest arrow | `nearestPlayerName` | PROVEN | below distance; follows upright label; exceptions only. |
| Nearest chest indicator | `nearestChest` | PROVEN | hide while target is on-screen; exceptions only. |
| Nearest airdrop indicator | `nearestAirdrop` | PROVEN | hide while target is on-screen; exceptions only. |
| Permanent meteor location | `permanentMeteor` | PROVEN | automatic native waypoint retention · proven; exceptions only. |
| High-contrast players | `highContrastPlayers` | BUILT · CHECK | yellow contrast halo around remote players; hidden-player challenges take precedence; native appearance/toggle/restore approval pending. |
| Transparent foliage | `transparentFoliage` | PROVEN | canopy opacity 25% · proven; exceptions only. |
| Storm edge highlight | `stormEdge` | BUILT · CHECK | all four projected next-zone edges; bold cyan; matches minimap target; native appearance/toggle/restore approval pending. |
| Safe-zone center direction | `stormCenter` | BUILT · CHECK | purple off-screen arrow to projected safe-zone center; target retained while moving; native appearance/toggle/restore approval pending. |
| Build health outlines | `buildHealth` | PROVEN | green >75%; yellow >50%; orange >25%; red ≤25%; exceptions only. |
| Breakable object health outlines | `objectHealth` | PROVEN | same bands; includes vehicles; exceptions only. |
| Nearest safe-zone edge | `safeZoneIndicator` | BUILT · CHECK | blue by default; distance built in; target zone during movement; native appearance/toggle/restore approval pending. |
| Loot indicator | `lootIndicator` | BUILT · CHECK | selected source guns in gold/red rarity; closest12 off-screen pickups; native appearance/toggle/restore approval pending. |
| Highlight ammo for owned guns | `highlightOwnedAmmo` | BUILT · CHECK | native pickup ammo matches current carried gun types; native appearance/toggle/restore approval pending. |
| Longer bullet trails | `longerBulletTrails` | BUILT · CHECK | 1.2s observed bullet/throwable history; no trajectory prediction; native appearance/toggle/restore approval pending. |
| Enhanced/custom crosshair | `customCrosshair` | BUILT · CHECK | dot/cross/ring + PNG/WebP upload; native hit marker retained; native appearance/toggle/restore approval pending. |
| Low-health visual warning | `lowHealthWarning` | PROVEN | own HP at or below threshold · proven; exceptions only. |
| Low-ammo visual warning | `lowAmmoWarning` | PROVEN | inclusive thresholds; grappler5, flare exempt · proven; exceptions only. |
| Low-material warning | `lowMatsWarning` | PROVEN | inclusive thresholds including scraps · proven; exceptions only. |
| Inventory: 5 item slots | `inventorySlots` | BUILT · CHECK | larger row aligned to ammo; no counts/hotkeys; native appearance/toggle/restore approval pending. |
| Inventory: build materials/counts | `inventoryMaterials` | BUILT · CHECK | larger icons/counts; wood / brick / metal / scraps; native appearance/toggle/restore approval pending. |
| Inventory: ammo by type | `inventoryAmmo` | PROVEN | native icons + separate counts · proven; exceptions only. |
| Inventory size | `inventorySize` | PROVEN | Small / Medium / Large / XL; exceptions only. |

## challenges

| Option | ID | State | Scope / remaining check |
|---|---|---|---|
| All players invisible | `playersInvisible` | BUILT · CHECK | remote body, held items/builds, glider/grapple; all trail particles; native appearance/toggle/restore approval pending. |
| Mask loot | `lootInvisible` | BUILT · CHECK | five information levels; native appearance/toggle/restore approval pending. |
| Builds invisible | `buildsInvisible` | BUILT · CHECK | placement preview separate from placed blue base; native appearance/toggle/restore approval pending. |
| No map | `noMinimap` | BUILT · CHECK | minimap + full map + counters/countdown; status announcements retained; native appearance/toggle/restore approval pending. |
| No crosshair | `noCrosshair` | BUILT · CHECK | native arms/center/hit marker; native appearance/toggle/restore approval pending. |
| No inventory/item bar | `noInventoryHud` | BUILT · CHECK | native item/material/ammo/build widgets + own HUD name; native appearance/toggle/restore approval pending. |
| Invisible storm | `invisibleStorm` | BUILT · CHECK | world storm + minimap/full-map shading/border; native appearance/toggle/restore approval pending. |
| Chests invisible | `noChestsVisible` | PROVEN | chests + ammo/grenade crates · proven; exceptions only. |
| No health/shield HUD | `noHealthShieldHud` | BUILT · CHECK | native own bars; ammo counter retained; native appearance/toggle/restore approval pending. |
| Hide interaction prompts | `noInfoPopups` | BUILT · CHECK | build/inventory/pickup instructions only; status messages and kill feed always visible; native appearance/toggle/restore approval pending. |
| No pickup labels | `noPickupLabels` | BUILT · CHECK | ground loot visible; native nearby pickup popup hidden; native appearance/toggle/restore approval pending. |
| No hit-confirmation marker | `noHitMarker` | BUILT · CHECK | crosshair retained; native appearance/toggle/restore approval pending. |
| Hide damage direction | `noDamageDirection` | BUILT · CHECK | native incoming-damage arrow; independent of floating numbers; native appearance/toggle/restore approval pending. |
| No floating damage numbers | `noDamageNumbers` | BUILT · CHECK | native damage/healing text pools; native appearance/toggle/restore approval pending. |
| No reload/charge progress | `noWeaponProgress` | BUILT · CHECK | native progress HUD retained in simulation; native appearance/toggle/restore approval pending. |
| Invisible bullets/throwables | `invisibleProjectiles` | BUILT · CHECK | also silences shared detached trails; native physics/sounds retained; native appearance/toggle/restore approval pending. |
| Hide weapons | `hideWeapons` | BUILT · CHECK | local + remote held art and aiming build previews; native appearance/toggle/restore approval pending. |
| Monochrome vision | `monochrome` | PROVEN | game canvas grayscale · proven; exceptions only. |
| Flashlight mode | `flashlightMode` | PROVEN | player/cursor light radius; visual-only, excluded from Hell; exceptions only. |
| Hell | `goodFlippinLuck` | BUILT · CHECK | all gameplay challenges, highest tiers; every modifier locked off; native appearance/toggle/restore approval pending. |

## Always-on approved surfaces

Match breakdown: built/local tests pass, final native appearance remains pending. Native totals and observed counters only; no accuracy/damage rankings. Cosmetics: existing user proof retained.

## Removed / merged

All spread display, controls, angle collection and storage writes: removed at user request. Historical local-storage data/logs/archives are untouched. Standalone countdown challenge stays removed; countdown is part of No map. Standalone storm distance: removed as a duplicate of distance already included in the safe-zone arrow (M13 merge). Bots and exact pre-open contents stay retired. Previously denied V51 proposals and V47 retired labels/radius/Highlight loot/invisible foliage remain absent. No new mechanics are inferred from this cleanup.

## General Advantages preset

Built, focused visual check pending:19requested enables +Large size/default warnings; turns Hell off, unrelated choices retained, no locks. It is an action, not an additional modifier/challenge.

## Review boundary

Storm-edge now outlines the projected next zone matching minimap, all four sides with a stronger line. Status announcements, elimination banners and kill feed remain native-visible; the map countdown hides with No map/Hell. Hide interaction prompts retains only interaction instructions/pickup prompts; No map also hides countdown; No inventory hides own HUD name. High-contrast halo still awaits explicit visual approval. V68 logs an exhaustive completion audit at native match end and COPY RESULTS. Reached/suppressed routes are context evidence, not pixel passes. One focused match combining editable preset and brief No map/No inventory/Hell checks; maximum two total, no repeat requirement. Unencountered checks stay unobserved.
