# V46 findings — 2026-10-06

## Evidence from V45

Input: unchanged `logs/v45-log.txt` (2,961,380 bytes; Git blob `904fbb61c8a131d1c4e6d19b9f81652059cd3d9a`). Explicit visual feedback is in `logs/v45-2026-10-06-observations.md`. The runtime source reconstructs from all 85 chunks to the exact `docs/engine.js` bytes, SHA-256 `42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4`. AST parsing succeeds. Reproduce the recorded evidence with `node tools/analyze-log.cjs`; output is `docs/v46-v45-analysis.json`.

The deep record cap was exhausted at 1,800 records with 20,184 incoming packets, 281 schema signatures, 80 targeted replicas, 436,249 approximate snapshot characters, 22 truncations and one probe error. Of 1,724 target payload records, 1,706 were player updates, ten player creates, six player removals and two player setID packets. No recorded container target payload follows from this exhausted budget. The private native registry was not captured. User interaction with containers therefore does not close the pre-open contents evidence gap. Legendary chest/airdrop interaction is also unconfirmed.

The native HUD report ended at two slot templates, four material templates and zero ammo-row templates; three own warning bindings were present. Slot traces repeatedly identified pickaxe inventory art and broad/artless parent roots. Filled native slots are image roots, empty native slots are rectangles, and both sit within six persistent holders including the leftmost pickaxe. Selected item roots move upward independently of those holders. Treating an arbitrary ancestor as the cell explains the misplaced border and incomplete acquisition. Native material icon roots can themselves contain the numeric caption; validation must include the candidate root.

The user confirms materials and in-match meteor retention visually. V45 cleanup restored retention hooks but left retained marker nodes attached to native parents. A later Play could recapture them. The recorded automatic phase never advanced beyond lobby despite actual gameplay: the native renderer gliding pair alone was insufficient in this run.

## V46 behavior

- Nearest-player names use 16px type with an 18px line, up from 10px/12px. The two-line label and arrow are larger; text stays safe, upright and clipped with an ellipsis for long names. The option remains independently switchable.
- Capture all five weapon slots from ordered native holders, excluding pickaxe, including empty rectangle roots. Attach each glow directly to its native slot root and use its background dimensions, excluding text/art extents. Replacements are observed through scoped holder arrays. Selection has no role in warning eligibility.
- Each known gun warns when its displayed slot count is finite, nonnegative and below 20. Normal guns use loaded plus reserve; grappler/signal flare use loaded only. Live slot ammo emblems take priority over source mappings. Unknown mappings/counts and consumables do not warn. Exactly 20 does not warn. Own material borders and remote material/ammo number warnings retain their existing thresholds.
- Safe scalar AST interpretation resolves obfuscated arithmetic/aliases and branches without executing source or calls. The reference yields 33 gun/ammo mappings rather than 14; `rifle` maps to sniper ammo index 2. Native slot emblems remain the live authority.
- At ordinary Play, restore scoped hooks/adapters, detach retained meteor nodes, weakly retire those nodes/icons, clear runtime HUD/inventory/tracking/world/container/bot/scene state, hide old arrows, and invalidate delayed async work. Saved choices/custom data and reusable source/assets persist. Epoch guards apply before queued remote work and after resource awaits. Fresh marker nodes in the next match can still be retained. A decoded transition back to native lobby also removes held markers.
- Use decoded native circle waiting/moving and current local incoming gliding state as additional automatic phase evidence. This is session metadata, not a bot classifier. Rendering does not wait for a phase signal.

## Bounded evidence improvements

The total remains 1,800 records/approximately 8 MB/15 minutes, 80,000 packets, 200 replica identities, 600 incoming identities and 350 schemas. Reserved record lanes are schema 350, player 350, container 700, replica 300, environment 100. Capacity in one lane cannot be consumed by another; unused capacity may remain unused, and suppression is explicit.

Incoming/native updates retain changed field values; player fields retain their first value and a bounded initial change sample. Repeated position/effects/team traffic no longer consumes the container reserve. Newly seen fields remain eligible within caps. Target identities/subtypes can be seeded from reached native replicas when creation was missed. Environment manifests and target arrays are recorded separately in 24-entry chunks, preserving later chest/object fields that a giant terrain snapshot previously truncated. Environment objects are weakly remembered. Unknown/discarded incoming fields and packed extensions remain evidence, not contents/bot conclusions.

Original native decode/callback return values, identity, exceptions, descriptors, receiver and arguments are preserved. No independent decode/send, outgoing packet or ownership behavior changes. Coverage now includes lanes, suppression, target identities, circle state and run epoch. Full runtime source capture remains separately capped at 2M characters in reconstructable chunks.

## Verification and limits

`npm ci`, `npm run build` and `npm test`: 23 integrated scenarios run against both readable source and the actual standalone payload. They include native/prototype/plain-object/detached HUDs, filled/empty six-slot layouts, selection offsets, slot replacement, 19/20/21 ammo boundaries, unequipped guns, consumables/unknown/invalid counts, material/remote warnings, safe arrow names and directions, source arithmetic mapping against the full native reference, saturated discovery, decoder/callback behavior, repeated-player traffic with a late airdrop/environment tail, two consecutive Plays, stale queued work, fresh/old meteors, cleanup/reinjection and existing cosmetic modes.

Build parsing uses VM and Acorn, and rejects any minified comment. Dist and the new immutable v46 archive must be byte-identical. No old log/source/release bytes are changed. The reproducible static engine tool now defaults to `docs/v46-engine-analysis.json`; the v45 report is retained.

These are controlled fixtures, not a live browser proof. V46 name readability, all-slot glow geometry, empty-slot native replication, actual ammo-row acquisition and next-match cleanup await the user's live pass. Contents/bot classification remain unresolved. No absence, missing hook, unencountered container, truncation or cap proves impossibility, and no feature is retired on that basis.
