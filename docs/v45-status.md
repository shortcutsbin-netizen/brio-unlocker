# All-feature status — V45

Newest live evidence: V44 user observations and log. V45 source/payload fixture passes are implementation evidence, not pixel proof. Completed baseline remains preserved; amended visual dependencies require live confirmation.

| Item | Status |
|---|---|
| Native (un)Locker/Extras nodes, ad hiding, category/search UI, saved settings | Completed baseline; preserved |
| Body/head/pickaxe Native/Random/bundled/Invisible/Custom and upload/cache | Completed baseline; preserved |
| Wrap Native/Random/bundled; trail/glider Native/Random/bundled/Invisible | Completed baseline; preserved |
| Four independent Native/Random/bundled emote slots | Completed baseline; preserved |
| Dynamic Play capture, local visual authority, direct Console payload/export, cleanup/reinjection | Completed baseline; preserved; ordinary Play only |
| Player/loot/build invisibility, special/preview builds, all trails/gliders hiding | Established baseline; preserved |
| Transparent roofs and player names | Established baseline; 21 roof resources recorded again |
| Equal-height health/shield bars and black numbers/white outlines | User-confirmed good in V44; preserved |
| Local low-health flashing/glowing player outline | User-confirmed good in V44; preserved |
| Three distance indicators, upright labels and on-screen/stale suppression | User-confirmed fine in V44; preserved |
| Optional player name beneath arrow distance | Added in V45; live pending |
| Meteor persistence on minimap/full map | User-confirmed working in V44; hold mechanism preserved; discovery capacity regression fixtures pass |
| Inventory attachment, five slots/three row toggles/size settings | Established baseline; preserved |
| Native inline inventory appearance | V44 still visually wrong. V45 rejects particles, captures actual live HUD replacements, uses exact native aliases/stack assets/geometry/fonts/opacity. Full pixel match remains pending |
| Empty-slot corner-to-corner red X | Added in both inventory paths; live pending |
| Own materials below30 / ammo-type below20 glowing/flashing cell borders | V44 failed. Correct native rectangle/stack-cell acquisition and threshold binding added in V45; live pending |
| Remote material/ammo numbers flashing below30/below20 | User-confirmed worked in V44; preserved with native replica binding tests |
| Screen normal/legendary chests, ammo/grenade crates, airdrops, fishing contents/NONE | Unresolved. Renderer callbacks do not expose contents; V45 adds incoming-before-remap, complete source, optional native callback and targeted lifecycle probes. Impossibility unproven; UI retained |
| Identify bots | Unresolved. droid is aggregate count; wander dictionary-only; no proven player classifier. V45 examines incoming/opaque fields/prototype metadata; UI retained |
| Automatic phase from ordinary Play | Native gliding pair confirmed in V44 log; no manual start control |
| Chest/foliage hiding, transparent foliage, monochrome | Implemented; explicit visual validation still pending |
| Loot highlighting/effect removal, high-contrast players | Implemented; explicit visual validation still pending |
| Build/deployable labels and effect radius | Implemented; explicit visual validation still pending |
| HUD hiding, storm visibility/edge/center/distance | Planned/unimplemented; reference source retained |
| Flashlight/custom crosshair | Planned/unimplemented; reference source retained |

No bot guess, inferred NONE, entitlement change or outgoing mutation is introduced. Full investigation boundaries and fixture coverage are in v45-findings.md.
