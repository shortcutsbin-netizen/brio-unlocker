# V43 findings — 2026-10-05

Read the complete unchanged `logs/v42-log.txt` (479 lines, 402760 bytes) and the labeled `logs/v42-2026-10-05-observations.md`. Source is implementation evidence; recorded events are not pixel verification.

## V42 results

All ten required flags were enabled. Dynamic local capture and cosmetic asset resolution completed with 10 adapters; selected IDs/modes are recorded. All-gliders-invisible was also enabled, so the selected custom glider was intentionally hidden. MATCH START established match phase at 19:03:58.031. Roof capture recorded all 21 paths again; the user did not explicitly confirm roof pixels in this turn.

Meteor persistence **visually failed**. A native meteorite was observed at 19:05:39.836. No AUTOMATIC/SCENE startup event exists; VERIFY reports no timer, zero observers and no hold. This is an initialization failure, not evidence that scanning exhausted disconnected roots. V42 queues startup in an unguarded microtask and scans before arming its timer. A throwing native-looking window property reproduces the missing timer/startup in the V42 fixture; it is an evidenced failure mode, not proof of the exact site's thrown property. V43 isolates those reads, uses an epoch-guarded startup timer, arms the scan timer before guarded discovery, logs entry/errors, and has a watchdog. Native marker acquisition/visible retention still require a live run.

Indicators recorded player 27 off-screen/19 on-screen/29 no-target; chest 16/12/32; airdrop 3/1/36. These are state records, not frame counts or accuracy. Health/shield numbers remain hard to read according to the user. V43 changes only their fill/outline to black/white, retaining native scaling, containment and tiny-geometry suppression. Arrow text remains white/black and upright.

Inventory attachment/size remains established, but the user confirms artwork/layout does not equal the native own-player HUD. V42 still draws a handmade approximation. V43 adds bounded capture of native inventory widget constructors, children, resources, geometry and style fields; clones through those existing constructors and binds remote material/ammo values and item art/rarity. It retains compact player-relative placement/size and excludes the pickaxe from the established five-item display. No source-string execution. Fully unavailable/incomplete rows keep the existing fallback, with capture/constructor failures logged. Exact slot count-caption/selection style binding and native constructors whose font behavior is closed over unknown argument names may still need the new source evidence. Do not call the result pixel-identical without live confirmation. New artwork path is yellow; established tracking/size is not being revoked.

## Warnings requested

Low health: local player HP ≤30 retains the red outline; now glowing/flashing, without LOW MATS text/ring. Low materials: the user clarified **only their own HUD**, not every remote inventory. Wood, brick and metal independently flash/glow red around their captured native material display at a finite known count <30. Exactly 30 is not low. Scrap/special is not assigned an unverified material meaning or included. No summed-material trigger. Missing own-HUD capture is reported; it must not silently be called a warning pass.

## Contents and bots: interim report

| Surface | Evidence / status | Remaining route in V43 |
|---|---|---|
| Normal/legendary chests, ammo/grenade crates | Identity and state known; pre-open contents unresolved. V42: 28 container baselines, 16 changes, 27 removals across targets. | Decode source field dictionary; inspect separate native create/update callbacks; sample settled native/replica fields under decoded semantics. |
| Airdrops and fishing | Objects/resources recognized; no authoritative selected contents or NONE. | Same constructor/replica route, including payload/seed/table candidates. Removal/nearby loot never becomes a prediction. |
| Identify bots | V42 audited 10 players (two settled records), tracked 11; explicit Robot/robot hits are cosmetic names. No safe classifier. | Decoded dictionary and create/update mappings plus settled per-new-player samples, including the local user as this-run human ground truth. |

Historical native dictionary evidence explicitly maps `AÀ` to `isPreview`, not AI. V43 reads that dictionary from the actual loaded source; it does not hardcode a bot meaning. Callback excerpts and semantic field mappings address a previously incomplete registration/encoded-field route. Late newly captured players receive one bounded settled replica sample instead of relying solely on the first 45-second audit window. Caps remain: at most 80 eligible replica samples per run, depth two/60 objects/240 entries; source dictionary 240 pairs, phase field mappings 180 each, finite excerpts. The balanced source callback reader emits candidates, not proof of a complete parser/protocol audit.

**There is no verified impossibility conclusion.** Private/raw receive payloads, indirection/loot tables and server selection timing are not exhaustively excluded. Keep Screen chests/airdrops/fishing in the UI as unresolved; do not fabricate a contents feature or remove it from a no-hit. Static bot detection likewise remains unresolved. Broad random traces, before/after buttons, name/ID/distance heuristics and failed map repaint remain retired routes.

## Validation and next step

Source and full standalone minified payload are parsed. Eight integrated fixtures cover V42's seven existing scenarios plus real-constructor-like native HUD widgets, constructor cloning/remote count updates, own-only independent warnings at 29/30/31, native image bookkeeping, decoded schema/create/update probes and hostile scene-property recovery. Previous cosmetic modes, all four emotes, failure isolation, roof capture/restoration, three arrows/upright directions/suppression, native meteor hold/late parent retry, scaled bar clipping, lifecycle/export/reinjection remain checked. Fixtures are mocks; actual game pixels and private HUD/map-root reachability are pending.

Next: V43 live run per `docs/v43-test-procedure.md`. If native HUD candidates cannot be reached/constructed, use logged fields and source references for a precise route; do not promote the approximation. If meteor startup runs but marker remains absent, use actual observer/scan coverage to investigate private map roots. Analyze complete results before changing again.
