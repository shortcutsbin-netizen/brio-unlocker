# V45 findings and investigation boundaries

V44 is the newest live run. See its complete log and separately labeled visual observations. V45 is a tested development release; it is not a live visual pass.

## V44 diagnosis

The log records 21 roof resources, 74 native kinds, 49 container baselines (14 chest, 11 ammo-crate, 13 grenade-crate, 9 fishing, 2 airdrop), 23 container changes, 48 removals, 80 replica samples and 14 tracked players. These are logged records, not proof of contents, distinct interactions or bot classes. The user believes all openable types were exercised.

All four captured material widgets are floating pickup particles with a +5 child label. There are zero slots and zero ammo widgets. Four warning bindings therefore targeted pickup particles rather than the native HUD. The old approximationFallback=false report was wrong for incomplete rows. V45 rejects particles, requires numeric native display ancestry, reports fallback per incomplete row, and removes the misleading lifetime 80-inspection cutoff: only live templates are capped; replacement captures remain eligible. Widget detail logs cap at 32, not the functionality. Warning nodes follow live replacements and cleanup.

The user confirms V44 meteor persistence on the two requested maps, bars/numbers, low-health outline and nearest arrows. Those paths retain their behavior. V45 adds the requested optional arrow name beneath distance; the two lines share upright rotation and names enter as textContent.

## Native HUD evidence

The user added the complete reference docs/engine.js while this turn was running. Its raw SHA-256 is 42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4, 764701 characters. tools/analyze-engine.cjs parses it without executing it; docs/v45-engine-analysis.json records raw offsets, fields, resource mappings and decoder sites. Raw-source offsets differ from the old escape-decoded log offsets.

Own materials are native rectangular cells with material icon and text children. Own ammo-by-type cells use stack0 through stack4 images; inventoryammoN maps to ammoN.png and is a small slot/selected-weapon emblem. V44 only recognized the latter. V45 recognizes both, prefers stack row templates for each ammo index, and rejects emblems inside weapon slots as own ammo-row widgets. Own wood/brick/metal borders warn independently below 30; own ammo display borders below 20. Known values at 30/20 and unknown counts do not warn. Remote values retain the confirmed flashing red behavior.

Native inventory uses source alias assets such as scar.png / heavysniper.png, with separate held top-view resources topscar.png / topheavysniper.png. Inventory guns use 1.04 times slot dimensions and a pi/4 angle before type-specific changes; consumables use .7 times slot dimensions with item-specific changes. V45 uses AST-decoded exact aliases and actual captured native artwork geometry, preserves native text methods/font fields and background opacity, and applies the source-supported fallback geometry where capture is incomplete. Materials/ ammo replicas retain their native background bounds; a duplicate fallback material row was fixed. Weapon artwork binding excludes ammo emblems and blank text-node paths. Ammo emblems and left-aligned quantity captions bind remote state, not the local player's value. Inferred unknown reserve/type mappings remain unknown. The empty-slot X is added in both paths.

This is a substantive acquisition/asset/layout correction, not a claim that native appearance is complete. Closed-over native style, selection/captions, offsets and any unsupported construction remain subject to the next visual comparison. Capture count, mock drawing or source parsing cannot certify pixel identity.

General child-array discovery remains 12 seconds. It now inspects reached drawable callbacks even when ordinary observer capacity is full, reserves up to 32 additional validated HUD arrays beyond the ordinary 128, and records up to 64 reached overflow parent roots for the existing bounded scene scan. Native meteor container observers remain capped at 96; scan remains 3000 visits/second. No permanent broad Canvas, Array or RAF hook is added. All descriptors are restored on rearm/destroy.

## Contents: what is now narrowed

The full AST audit found the complete chest create/frame/update/remove callbacks. The create callback reads only chestType for art; update has no fields. The object callbacks read type, size, health, subtype, landing/progress and hasWeapon. hasWeapon applies to meteorite artwork, not fishing/NONE. Airdrop landing and bubble animation are not content selections. Ammo/grenade crates follow the generic object path. No verified pre-open list, item identity, rarity, loot table or selection seed is exposed by these renderer callbacks.

This closes the specific renderer-callback-as-content-list approach for this bundle. It does not establish that the original creation payload, an unknown field, environment metadata or server protocol carries no useful data. It also does not establish when the server selects contents. The V44 log never observed the native decoder result before field remapping, and generic source excerpts were incomplete. No contents option is removed; no guessed NONE is displayed.

V45 observes the native msgpack.decode return before the native remapper can mutate/discard fields. It calls the original method once with original this/arguments, preserves the returned object identity and exceptions, and snapshots without modifying it. It never encodes, sends, independently decodes, or changes a socket. Relevant create/update/remove records follow exact packet entity IDs. Object subtype filtering includes chest, ammo/grenade crates, airdrop, fishing/bubbles and meteorite, preventing terrain from consuming the whole target budget. Movement-only schemas are sampled, while extended packed updates and nonmovement fields remain eligible. First schemas also cover other packet types/environment metadata.

Reachable native engine registry callbacks are observed separately before their original callback. Private engines can be unreachable; the log states whether this path installed. It is supplementary to decoder coverage, not a prerequisite or assumed success. Per-target first/change/near/disappearance snapshots and prototype descriptor manifests cover late arrivals and hidden scalar metadata without invoking accessors. Near/disappeared does not mean unopened/opened/empty. Loot creation never proves which container produced it.

## Bots: what is now narrowed

The raw AST has 198 decoded field mappings. droid has exactly three member references: its dictionary mapping and two uses in the aggregate players HUD count. wander has one, the dictionary assignment only. isPreview is not AI. Robot cosmetic names are unrelated. The complete native player create/update callbacks do not consume an authoritative per-player bot marker. No current remote renderer or native replica has yielded a validated discriminator.

These specific droid/wander/cosmetic/selected-renderer routes are closed as classifiers for this source. Static literal absence alone is not a universal client/protocol impossibility proof. V45 captures complete incoming player creation/update fields, dictionary indirection references, own/prototype metadata and late arrivals to examine fields the renderer does not retain. Only the current local user is positive human ground truth. Names, IDs, movement, distances and old human labels are not classifiers. No behavioral classifier is silently introduced. Server AI code/selection state is not in the supplied client bundle.

Both investigations are now concentrated on raw incoming/discarded/opaque data and any actionable metadata those probes reveal. V45 opens the deepest accessible remaining passive surfaces in one run. It cannot truthfully guarantee that an unavailable hook, capped snapshot, unencountered event or all future protocols have been exhausted. Evaluate its coverage report before considering a negative conclusion or UI retirement.

## V45 probe coverage and limits

The fetched runtime bundle is exported as exact reconstructable 9000-character FULL NATIVE SOURCE CHUNK records with optional SHA-256, then parsed with vendored Acorn 8.19.0 (MIT). No fetched source is executed. Entire relevant callbacks are chunked separately; complete dictionary and semantic references include droid/wander/contents/seed references. Live bundle must be compared with the reference hash rather than presumed identical.

Deep probes last at most 15 minutes from ordinary Play. They run a 1-second targeted sampling tick, not a whole-world high-frequency scan. Limits: 80000 observed packets, 1800 deep records, approximate 8MB deep snapshot text, 200 targeted replica identities, 600 incoming target identities, 350 first schemas; each snapshot depth 8, 1400 values and 240 keys/object. String/binary/circular/accessor omissions are explicit. Source capture has a 2M-character ceiling and sits outside the deep snapshot byte budget. Semantic reference logs cap at 120 per mapped field while the entire raw bundle remains preserved. Complete logs can be much larger than V44. Terminal preview is bounded; COPY RESULTS preserves the whole log and clipboard-failure manual selection is frozen.

V45 PROBE COVERAGE reports decoder and registry installation, packet/schema/entity/record counts, snapshot truncations/errors, limits reached and source/AST status. A missing hook or cap is an evidence gap. Decoder/callback/native HUD and global/scoped discovery descriptors restore at cleanup; outgoing routines are untouched. Source/fixture time/data/images are not live observations.

## Validation

Clean npm ci, build, source/payload parsing, and eighteen integrated scenarios run on both complete source and exact minified payload. Coverage includes earlier cosmetic modes/custom cache/four emotes/failure isolation/native resets/roofs/lifecycle; native/plain-object and initially empty HUD; particle rejection; saturated discovery with late map markers; repeated native HUD rebuilds beyond 80 captures; actual stack cells versus weapon emblems; own and remote 29/30/31 and 19/20/21/unknown boundaries; safe two-line labels and upright rotation in 25 directions; decoder return identity/immutability/exceptions/descriptors and restoration; native registry callback payload preservation/restoration; exact full source chunk reconstruction; and the entire supplied engine as a parser/alias fixture. This last fixture parses real source but still draws mock HUD objects.

The live V45 visual run remains pending. Old releases, logs and engine bytes remain intact.
