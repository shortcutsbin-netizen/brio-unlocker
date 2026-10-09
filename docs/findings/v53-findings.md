# V53 findings — 2026-10-09

V53 repairs the source-backed complete-inventory acquisition and incoming-damage arrow routes, removes speculative spread width, and reduces repeated work in draw/discovery/logging paths. It adds bounded timing and an explicit 24-second comparison so the next log can distinguish diagnostic overhead from modifier overhead. Actual game latency and unseen server spread bounds remain unresolved.

## Complete input and evidence

The entire V52 export was analyzed: **4,099,701 bytes**, SHA256 `48c9cd47104c1354b0985112a3fa0e41f92a7d3ac88308e3da9617c76bccb5cd`, **3,090 JSON events**, two Play epochs. All 85 exported engine chunks reproduce the supplied **838,390-byte** engine, SHA256 `42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4`. Analysis reads text/AST and original decoded records; it never executes the engine.

[User observations](../../logs/observations/v52-2026-10-09-observations.md) establish visible inventory/damage leaks, wrong cones, delays, and successful map hiding. [Reproducible focused analysis](../analysis/runs/v53-v52-focused-analysis.json) contains event counts, source coordinates, anonymous run aggregates, and shot-arithmetic discrepancy counts. Raw identities, timestamps, packet/audit/settings examples and source excerpts are excluded from this derivative. Run `node tools/analysis/analyze-v53.cjs` to regenerate it.

| V52 evidence | Normal epoch | Hell epoch | Implication |
|---|---:|---:|---|
| Maximum concurrently active native adapters | 658 | 637 | Neither reached the 4096 cap; the remaining leaks are not explained by V51's cumulative-cap starvation |
| Adapter cap hits | 0 | 0 | Preserve retirement/core reservation; investigate acquisition/signatures |
| Complete inventory root installations | 1 | 0 | Hell lacked the parent gate that includes pickaxe/selection/build widgets |
| Deep probe records | 1104 | 540 | Useful recon; capped/private records do not establish absence |
| Native terminal placement / eliminations / damage / walls / seconds | 1 / 3 / 390 / 2 / 190 | 28 / 0 / 0 / 3 / 20 | Native terminal totals retained; no inferred accuracy/attacker rankings |

Four private cross-origin registry-discovery errors occurred, two per epoch. No authoritative unopened-content or bot-classification route was established. These are unresolved surfaces, not proof of impossibility. No HTML-file request is needed for this pass.

## Hell and inventory

Source materials are nested **inventory → material wrapper → rectangle → icon**, depth three. V52's depth-two scan missed that layout; individual slot gates could not cover sibling pickaxe, empty-slot, selection/lift/switch/build controls. V53 validates the complete native parent before the generic 48-child discovery limit: 6–128 immediate children, at least five inventory holders, a bounded 180-node/depth-three scan, and either three material identities or the exact native Q/Tab prompts plus 105×105 five-pixel selection outline. Cached checks run at most once per second for an unchanged child count. BRIO clones and unrelated containers fail the signature. Own current-ammo HUD remains independently included in Hide inventory.

The log records 2,589 Hell suppression attempts for floating damage numbers, but the incoming-damage direction art is a separate route: local `r.ÁÄå` root / `r.Èâã` image, `/buildart/redarrow.png`. New **Hide damage direction** is an independent gameplay challenge, included automatically in Hell. A cheap native-player preflight detects replaced/late held-art and damage children before their first draw; unchanged pointers/pool length/last element return without allocating a new array. Existing floating-damage-number behavior is retained.

Stronger fixtures also reproduced native constructors that attach an empty feed root before populating it. V53 coalesces at most 32 eligible roots per event turn and revisits each completed subtree with an 80-node bound in one microtask. Epoch plus Set-identity guards prevent stale work affecting the next Play. This uses the existing scoped add wrapper and does not raise the 96-container budget or introduce a global hook.

**No map** now has explicit user proof for hiding. Its independent restoration remains fixture-verified; an unmentioned live action is not proof. Other unreported Hell routes remain pending rather than marked complete.

## Spread: source facts, bad summaries, measured replacement

The supplied client maps decoded `spread` to `ËÂ` and divides it by 100 for its reticle scalar. It does **not establish a scalar-to-angle conversion or a per-gun/per-rarity authoritative firing table**. The native aim axis is positive X (`-atan2(dx,dy)+PI/2`); decoded local/bullet rotations divided by 100 are radians. No guessed degree conversion is retained.

**41 exported V52 shot offsets disagree with their own raw packet/client angles.** For example, bullet 3.09 radians versus client aim 3.16554 radians gives about −4.328°, while that record reports 94.33°. The frozen V52 source uses ordinary `atan2(sin(delta),cos(delta))`; the cause of the exported disagreement is unknown. Do not use those summary offsets as calibration or infer a unit/axis error from them. V53 records signed modular subtraction/wrapping, raw inputs, a measurement-revision identifier, and READY math-identity probes for direct auditing.

Show bullet spread now draws a clearly labeled **observed envelope**, only after at least 12 accepted local projectiles for the current exact gun/rarity. No accepted samples means no speculative cone. The fixed 600-world-unit length is display geometry, not range. It uses the maximum observed absolute angular offset for that gun/rarity across received scalar bins; this is neither a guaranteed current-bloom width nor a theoretical maximum/probability bound.

Acceptance requires known local shooter/rotation and selected rarity, authoritative aim no older than 150 ms, at least 150 ms stable position/aim, matching gun/rarity, client/server aim agreement within one degree, valid received scalar, and no build mode. Grappler/signal flare are excluded. Rejection reasons remain visible in the export. Each of at most 96 gun/rarity summaries retains up to 48 scalar bins and 24 raw examples; correlated shotgun pellets are counted as projectiles, never independent shots. These observations reuse the original native decoder during its existing 15-minute observer window without independent decode or protocol changes.

One short stationary burst followed by three paused single shots gives initial/repeated-fire evidence with no manual angle measurement or rarity hunt. Natural pickups expand coverage. Finite samples can estimate observed behavior; they cannot establish exact random server bounds without an authoritative table or distribution model.

## Performance changes and limits

V52 has no comparable timing telemetry, so the user-visible delays cannot be attributed from that log. V53 removes repeated preference normalization in draw/asset paths, weak-caches normalized resource paths, merges duplicate HUD signature passes under the existing per-root one-second cache, skips expensive snapshots after replica lanes are exhausted, logs only changed storm destinations, and stops terminal preview repainting while minimized.

Adapter retirement now keeps a Map iterator, visits at most 256 nodes per scheduled pass, and builds a parent membership Set once per pass. It no longer runs a full sweep for each overflow admission. The synthetic 4096-active-node/64-rejected-admission benchmark reduces linear sibling-membership checks from **262,144 to zero**; the explicit V53 pass visits 256 nodes. Recorded wall times are machine-dependent and describe this corner case only. The actual V52 epochs stayed below 700 adapters, so this benchmark does not explain their delays.

Outline mask readback/dilation is moved out of native draws: at most one queued asset per existing 500-ms sampler tick, fixed 64-asset/cache bounds, cached tint/contours thereafter, and box fallback while unavailable. The visible draw traversal is bounded to 48 nodes/16 images/depth three. Quiet-comparison phases pause pending preparation.

Bounded per-Play metrics include one-in-64 helper timing samples, five fixed duration bins, work counters, local native-draw cadence and separately counted gaps over 250 ms. Where supported, page long-task aggregate timing is recorded. Helper timings can overlap and must not be summed; page long tasks have no feature attribution. Local native-draw cadence is not a global FPS, server-ping, or network-latency measurement.

**PERF CHECK (24s)** is an explicit reversible click: eight seconds normal, eight seconds quiet diagnostics, eight seconds quiet diagnostics with modifiers temporarily paused. Gameplay challenges, cosmetics and saved preferences stay intact. Ordinary gameplay differs between phases, so changes are evidence to investigate rather than controlled causal proof. Completion, cancel, death, export, next Play and teardown restore effective modifiers. Quiet suppresses deep/passive recon and most diagnostic logs; cheap native counters/shot calibration remain. Automatic terminal/export audits retain complete bounded measurements and shot examples, without repeating the examples every periodic audit.

## Validation and remaining evidence

`npm ci`, `npm run build`, and `npm test` passed. All **70 carried integration executions** (source and actual minified payload) remain, with stronger depth-three inventory, damage arrow, late construction, signed-angle/aim-axis, sample acceptance, readback caching, preference-read and performance-phase assertions. The additional synthetic performance regression checks work bounds without fragile elapsed-time assertions. Strict comment audit: 942 blocks, 672 functions, 1497 comments, zero missing annotations; unchanged vendored parser. Payload parses with zero comments; immutable V53 archives match.

[Validation](../audits/v53-validation.md), [status](../status/v53-status.md), and [two-match procedure with complete carried surface](../test-procedures/v53-test-procedure.md) distinguish fixtures from live proof. No source/log/archive/document files are removed. All denied proposals remain denied.
