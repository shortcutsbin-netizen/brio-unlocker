# V57 findings — more angle recon, then final spread

The complete V56 upload is 17,799,726 bytes, SHA-256 `d95ddf5c66157e153286ae4fa76a6adbd0821984b802cb46fa9e76a02ac63cb7`, Git blob `69477fae6aa9f56b12435a78d581ad69a65072c7`. The read-only analyzer parses every one of 16,017 JSON events without malformed JSON across eight terminal matches. All 85 source chunks reconstruct the unchanged supplied engine. No native visual adapter cap is reached; peak active instances 1,730. This does not establish latency/pixel success.

There are 23 observed weapons. With the user-confirmed Charge Rifle and Grenade Pistol exceptions, all **44 applicable shot targets** are met, but only **13 modes** meet the existing qualified-angle sample threshold (minimum of twelve or that gun's smaller shot target). **31 modes need angle evidence**, including eight with zero accepted groups. A zero `maxAbsDegrees` without qualified groups is unknown, not zero spread. Shot-count completion therefore cannot finalize the marker. V57 is explicitly the additional recon branch requested by the user.

The log contains 1,363 projectile angle rejections for “native ADS acknowledgement differs”. Held right-click correctly classifies the shot counts, but native steadying also reflects recoil and is not a reliable acknowledgement. Hip Combat, SMG, LMG, AUG and Silenced Pistol have zero accepted angles despite completed counts. Additional 698 projectiles are rejected for ambiguous multi-discharge windows, 183 for turning, 29 for alignment and 18 for input transitions. These are per-projectile rejection tallies, not independent shot totals. We retain ambiguity/freshness/stability/alignment/input/switch/ownership/deduplication checks rather than retroactively fabricating angles from previously rejected data.

V57 removes only the steadying acknowledgement check; single-spread guns do not need an ADS input transition. Seventeen recorder helper token streams, firing/storage/scope/threshold contracts and all other angular filters are preservation-tested against V56. Comments may change. Counts remain in `brio_spread_recon_v55` with the same revision; no migration/reset or forced rerecording. Old rejected/ADS aggregate records stay intact as history, and the export labels the new angular policy.

Charge Rifle and Grenade Pistol now use the hip record for either input. Charge Rifle's ADS cell says **No ADS mode**; Grenade Pistol's says **Same spread as No ADS**. These cells have no checkbox or required target. We do not merge old ADS records into hip data or mark unobserved angles proven. V56 Charge Rifle hip has 28 shots/3 angle groups; Grenade Pistol hip has 10 shots/6 angle groups. No second ADS run is requested for either.

The sidebar distinguishes **SHOTS COMPLETE · ANGLES NEEDED** (amber) from **✓ SHOTS COMPLETE · OBSERVED WIDTH READY** (green). Applicable-mode totals exclude the two redundant ADS columns; each cell shows qualified-angle count/target and observed width, or unknown. Existing resize/persistence/open-through-Play and flush materials remain. The compact muzzle V remains an empirical observation, using a sufficiently sampled scalar bin or mode envelope; sampled zero is allowed, unknown zero is suppressed. Nothing claims exact server maximum, probability, ballistic range or rarity equality. Final constants cannot be synthesized reliably yet.

The next unbuilt test surface is **Safe-zone center direction**, stable ID `stormCenter`. It is a purple-by-default off-screen center arrow, independent of the blue nearest-edge arrow. It reuses the validated axis-aligned square projected waiting zone, preserving that destination during movement and updating on the next waiting zone. Existing projection/camera freshness, meters, upright labels and 500ms feature timer remain; no global hook/new timer or world-state change. Color is separately saved. Disable, on-screen center, missing/stale projection, match end, Play/destroy and Hell suppress it; destroy removes the node. The ordinary test profile includes it and its existing Extras row now shows TESTING/TEST PROFILE in Indicators. No denied proposal is added.

Contents and bot classification remain unresolved. Eight runs still fail to capture the native engine registry; the first reports two cross-origin registry-discovery errors. Several schema/player/replica lanes cap, so no hits/absence can prove impossibility. Existing bounded passive routes continue; no new pre-open contents inference, bot heuristic, special hunt or requested source file.

## Recorded evidence by weapon

Hip/ADS cells below are **qualified angle groups**, not shot progress (all applicable shot targets are already met). Observed clips are native high-water lower bounds until a fuller reload.

| Weapon | Observed clip | Shot target per applicable mode | Hip angles | ADS angles | Angle target |
|---|---:|---:|---:|---:|---:|
| revolver | 6 | 18 | 10 | 17 | 12 |
| scoped ar | 20 | 60 | 3 | 60 | 12 |
| combat | 10 | 30 | 0 | 25 | 12 |
| scar | 30 | 90 | 3 | 130 | 12 |
| smg | 30 | 90 | 0 | 24 | 12 |
| spas | 4 | 12 | 2 | 10 | 12 |
| silencedpistol | 12 | 36 | 0 | 31 | 12 |
| famas | 30 | 90 | 1 | 30 | 12 |
| bolt | 1 | 10 | 4 | 0 | 10 |
| charge rifle | 9 | 27 | 3 | No mode | 12 |
| sawedoff | 2 | 10 | 4 | 4 | 10 |
| lmg | 50 | 150 | 0 | 52 | 12 |
| shotgun | 5 | 15 | 10 | 0 | 12 |
| rifle | 3 | 10 | 2 | 5 | 10 |
| aug | 24 | 72 | 0 | 48 | 12 |
| rpg | 1 | 10 | 9 | 1 | 10 |
| heavy sniper | 1 | 10 | 10 | 0 | 10 |
| ak47 | 25 | 75 | 3 | 68 | 12 |
| musket | 2 | 10 | 5 | 5 | 10 |
| drum | 10 | 30 | 2 | 32 | 12 |
| vector | 36 | 108 | 3 | 50 | 12 |
| crossbow | 2 | 10 | 5 | 3 | 10 |
| grenade pistol | 1 | 10 | 6 | Shared | 10 |

Run `node tools/analysis/analyze-v57.cjs` to reproduce the aggregate report. Original full log/source/archives stay exact; no raw identities, packet examples, settings or timestamps are copied into the public derivative. All older explicit proof/pending/unresolved/denied decisions remain.
