# All-feature status — V46

Latest live evidence is the V45 log and explicit user feedback. The general report that everything looked correct supports continuity, but does not prove every option or exact pixel identity. V46 changes remain YELLOW until the live test; fixtures are implementation evidence.

| Item | Current status |
|---|---|
| Native (un)Locker/Extras, ads, category/search, saved settings | Completed baseline; preserved |
| Body/head/pickaxe Native/Random/bundled/Invisible/Custom and upload/cache | Completed baseline; preserved; fixture modes pass |
| Wrap Native/Random/bundled; trail/glider Native/Random/bundled/Invisible | Completed baseline; preserved |
| Four independent Native/Random/bundled emote slots | Completed baseline; preserved |
| Dynamic Play capture, direct Console payload/export, cleanup/reinjection | Baseline preserved; V46 two-Play/runtime reset fixture passes; live reset pending |
| Player/loot/build invisibility, special/preview builds, trails/gliders hiding | Established baseline; preserved; secondary live restoration comparison available |
| Transparent roofs and player names | Established baseline; preserved; V45 roof capture remains 21 |
| Equal-height health/shield bars, black numbers with white outlines | Explicit V44 visual confirmation; V45 general report correct; preserved |
| Low-health flashing/glowing player outline | Explicit V44 confirmation; preserved |
| Three distance arrows, upright labels, on-screen/stale suppression | Explicit V44 confirmation; preserved; V46 label geometry changed and needs live check |
| Optional player name under distance | V45 too small by user report; V46 enlarged to 16px, live readability pending |
| Meteor retention on minimap/full map | User confirms V45 in-match retention; V46 preserves it and fixes attached old nodes |
| Match boundary cleanup and saved-choice reapplication | V45 old meteor persisted; V46 removal/retirement/epoch reset tested, same-session second live match essential |
| Remote inventory five slots/row toggles/size/attachment | Baseline preserved; V45 general appearance looked correct |
| Native inline inventory appearance and empty-slot red X | V45 general report correct, not explicit pixel proof; V46 six-holder/empty-rectangle capture changes need comparison |
| Own individual low-material borders | User explicitly confirms V45 correct; V46 preserves behavior and root-inclusive validation |
| Own low-ammo gun-slot borders | V45 misplaced; V46 attaches to every gun's native slot, independent of selection, loaded + reserve below 20; live pending |
| Remote material/ammo warning numbers | Explicit V44 confirmation; preserved and tested at boundaries |
| Pre-open normal/legendary chest, ammo/grenade crate, airdrop, fishing contents/NONE | Unresolved. V45 target record budget starved containers; normal/crates/fishing exercised, legendary/airdrop unconfirmed. V46 reserves evidence capacity; no inferred contents or NONE |
| Identify bots | Unresolved. No authoritative player classifier. droid remains aggregate count, wander dictionary-only, isPreview invalid; UI retained |
| Automatic phase from normal Play | V45 log remained lobby; V46 adds decoded circle/local incoming glide evidence, fixture passes; live phase pending |
| Chest/foliage hiding, transparent foliage, monochrome | Implemented; specific visual proof pending; transparent foliage included in primary flags, hiding/monochrome secondary |
| Loot highlighting/effect removal, high-contrast players | Implemented; primary V46 blue flags, explicit visual proof pending |
| Build/deployable labels and radius | Implemented; primary flags with third extra action, actual object/radius encounter required |
| HUD hiding, storm visibility/edge/center/distance | Planned/unimplemented; retained roadmap |
| Flashlight/custom crosshair | Planned/unimplemented; retained roadmap |

No feature is called impossible or removed. No outgoing/entitlement mutation, bot guess, inferred NONE or source execution. See `v46-findings.md` for evidence bounds and `v46-test-procedure.md` for the 24 matching primary flags and optional secondary comparisons.
