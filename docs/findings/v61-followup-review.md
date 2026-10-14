# V61 follow-up review — 2026-10-14

**No repeated chest run is required. V62 has not been developed.** Cone correction is blocked on source/visual evidence; current source remainsV61. User rejects V61 alignment. Source/log review is complete enough to request specific artifacts, not another quota run.

## Evidence

Full log5,488,100bytes SHA2565d4f3ff7cae2e59de08a007e70983ad625eea2208018384701d2e0e878c00e2c;3282 valid JSON events,0 malformed,2 terminal matches.85 chunks exactly match repository engine. All44 spread modes still complete.16 cone records are only finite checks, first8 musket/hip samples per match; no numeric transform/projection verification. Never claim they prove correct origin/direction/ADS. Caps logged for trailParticles3072 both matches; no reported essential4096 cap. This bounds active transient wrappers and does not by itself explain cone misalignment.

| Observed kind | Payload records | Run/identity pairs |
|---|---:|---:|
| Chest |209|38|
| Ammo crate |155|27|
| Grenade crate |160|27|
| Fishing/bubbles |80|16|
| Meteorite |9|2|

Shallow samples additionally include5legendary-chest samples. Counts above are lifecycle observations, not openings or guaranteed unique physical objects. No airdrop payload this run; V60 already has65records/7run-identity pairs, so another airdrop hunt is unjustified.

Focused lanes:run1 schema75/container289/replica162/environment2;run2 schema92/container362/replica200/environment2. Both below total/bytes/packet budgets, native registry unavailable, one snapshot truncation each. Run1 has3window-registry errors (cross-origin access shown);run2zero. End-report decoder installed=false reflects stopped hook, but observedThisRun=true with21429/28417packets; do not mistake stopped-at-export for no observation. Player lane0 suppresses294/348record attempts and player schemas intentionally skipped. V61 is not a valid completed test of the new bot provenance hypothesis.

## Screening assessment

The observed original decoded container packets provide identity/type/position, chestType, geometry/health, and landing state where applicable. Replicas provide animation, rendering, lifecycle and physical metadata. No authoritative pre-open item list or proven deterministic loot seed/routine has been found. Native chest create branches on type only; update callback is empty; frame handles glow/fading and removal. Object callbacks for crates/fishing/airdrops have been inspected; no reliable pre-open contents route established. Nearby loot, disappearing entities and aggregate type names cannot substitute for exact pre-open contents.

Current judgement: exact always-visible pre-open contents are unsupported and feasibility looks low from the supplied client view. Not a proven impossibility. Remaining routes are source-manifest closure (index/HAR and actual loaded modules/workers/maps if any), unknown/side-channel packet fields and schema indirection, private authoritative client registries and bounded targeted replicas, and a source-backed deterministic seed/generation route if one exists. There is no evidence that a discoverable seed or additional module actually exists. If loot only arrives when opened, or is held exclusively by the server, this modifier cannot recover it from prior client information. Client source cannot determine unobserved server selection timing. More ordinary openings without a new probe/source route would mostly repeat evidence.

## Bot provenance assessment

A human may originate input in a browser while a bot originates decisions on the server, but both remote entities can be instantiated by the same server create/update replication path. Current native player constructor is shared, with cosmetics, health/shield, selected weapon/inventory/ammo, movement/building/gliding/steadying and related state. No verified bot/controller-origin flag has been established. isPreview means preview; zombie/infected are roles, not bot proof. Decoded droid references include a skin/dictionary/HUD path; wander is dictionary-only. Escaped literals were parsed, not searched only as raw text. No literal isBot/isAI/npc or worker/wasm loader identified in supplied engine; that does not inventory the whole loaded app.

A final passive pass can reserve explicit small player lanes and collect original create descriptors/unknown fields before remapping/discard, correlate with current local authoritative human identity, compare source-backed constructor/update paths and controller metadata, and describe bounded update/aim/action patterns as unlabelled evidence. A genuine separate AI/controller flag or provenance route could support implementation; creation timing, regular update frequency, sharp turns, missing cosmetics/account-looking fields, names/IDs or apparent precision alone cannot. Without independent known-bot ground truth, clusters cannot validate labels. Server AI code is obtainable through browser exports only if actually shipped to the client; no guessed bot.js/server code request or attempt to access private server files is justified.

## Requested artifacts and retrieval

1. **docs/game-sources/index.html**: DevTools→Network, enable Preserve log/Disable cache, reload home, select main Document request→Response, copy raw response to UTF-8index.html. Prefer original response, not modified Elements DOM. Justification: inline bootstrap, script/module URLs, worker/WASM registration, source manifest.
2. **docs/game-sources/client-load.har**: same Network capture, home loaded; Export HAR(sanitized). Initial home reload is enough to begin; no full match. Includes resources/initiators and any captured bodies. HAR is not promised to include WebSocket message bodies or every source body. Use sanitized export; do not enable sensitive-header export. If a first-party script/map/worker body is missing, save that specific response separately after review. Source-map/worker existence is unproven.
3. **Hip and ADS screenshot or short clip**: native gun, mouse cursor, full player, cone and a few actual bullets visible, gun/mode identified. Prefer musket because it appears in first cone samples; any clear affected gun works. No all-gun/no chest quotas. If obtaining fresh visual evidence needs another run, keepV61 and use v61-log-2.txt as user directed; V62 remains paused.
4. **Original held-art PNGs if convenient**: Network filter topmusket.png and topscar.png→Open in new tab→Save image. Also flash0.png/flash1.png/flash2.png if available. Source paths are buildart/topmusket.png,buildart/topscar.png,buildart/flashN.png; preserve original names. Exact transparent artwork bounds help establish real barrel relative to110-unit image, rather than continuing to assume image edge/flash center equals barrel. Low priority if full HAR captures them.

Fresh engine.js/msgpack.js/scheme.js/main.css copies are not requested merely for repetition: current captured engine hash matches. A newly loaded engine/script not represented by current files should be saved under its real network filename. Native behavioral AI server code cannot be retrieved from DevTools unless a public client resource actually contains it.

## Next decision

Read uploaded source/visual artifacts first. Then implement an evidence-supported cone change and final bounded bot provenance probe inV62, with container capture reserved separately. Do not claim visual proof from fixtures or silently publish another guessed angular offset. Current approval to publish scoped work persists; no subagents/deletions/force push.
