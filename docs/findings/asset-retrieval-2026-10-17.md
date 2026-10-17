# Asset retrieval review — 2026-10-17

**Upload analyzed; no new numbered release or live game session.** V61 remains current. Next is the separately user-greenlit cloud access trial. No repeat asset/container/spread collection quota is requested.

## Upload and integrity

The actual path is `docs/game-sources/brio_asset_retrival-results` (underscore after brio). Capture commit: `c93b1df`. A full git clone obtains all **3,368 uploaded files / 55,433,083 bytes**. GitHub's 1,000-entry directory truncation is presentation only; no folder split or re-upload is necessary. Original uploaded bytes, filenames and layout are preserved.

The manifest lists 3,365 entries: 3,363 are present with exact expected byte lengths. Five additional uploaded metadata/HAR files account for the remainder of the 3,368-file directory. Two embedded data-URL assets were absent as standalone files: a 5,897-byte lightbox SCSS map and a 45,198-byte WebP illustration. Both are still encoded completely in the original manifest. They were recovered offline with exact expected lengths and SHA256 hashes under `docs/analysis/asset-retrieval-recovered/`, using short alternate names and an explicit original-name mapping. No fetching or capture change was needed. The cause of the missing standalone files is unverified; their long paths could be a factor.

All 58,875 JSONL events parse, with contiguous unique sequence numbers 1–58,875. All 38,062 wire-index records reference contiguous, nonoverlapping in-bounds slices spanning all 438 wire files. Of these, 37,967 are WebSocket frames and 95 are beacon records. All **14,526 received WebSocket frames decode successfully offline** with Python MessagePack, zero extension-code encounters and zero decode errors. No captured code was executed and no live decoder/network calls occurred.

Collector counters: zero failed writes; two sockets; 20,756,401 asset bytes, 4,329,903 wire bytes, 24,961,071 event bytes. The 14,526 native decoded snapshots contain no explicit truncation/redaction/accessor/circular markers, and their 8,030,068-byte sub-budget remained below 8 MiB with zero omitted snapshots. This is capture-specific evidence, not a guarantee about inaccessible browser realms or earlier frames.

The exporter records 37 gaps: one pre-existing-socket coverage limitation, 26 failed resource GETs, and 10 static JS parse errors. The latter ten correspond to 404 HTML responses from discovered string-based candidate URLs, not ten missing valid game modules. Inventory status includes 706 HTTP403 candidates, 32 HTTP404 candidates, third-party/ad exclusions, sensitive-endpoint exclusions, and unclassified metadata. Discovery candidates are not equivalent to resources actually loaded by the game. These failures do not justify a blanket complete-browser-capture claim.

## Loaded client sources and HAR

Both the original HAR document and the collector's later home-page refetch identify the same three first-party gameplay scripts:

| Loaded URL | Role | Result |
|---|---|---|
| `/js/uOfrVi.js` | Native engine | 838,390 bytes; exact existing `engine.js` hash `42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4` |
| `/js/msgpack.js` | MessagePack codec | Exact existing copy |
| `/js/scheme.js` | Deployment flag | Exact existing 36-byte copy |
| `/css/main.css` | Native DOM styling | Exact existing copy |

The home refetch is the generated `asset_00003_index.html`, 26,229 bytes. The HAR contains an original 26,596-byte home response. Their complete script lists differ (the HAR includes Cloudflare's beacon), so the two documents are not treated as byte-identical. Inline bootstrap handles embedding/widget/analytics, with no identified loot generation or bot controller. Other script dependencies include authentication, promotion, payment, ads and telemetry; not all third-party bodies were readable.

**HAR limitation:** 45 entries, all typed `document`, 11 stored response texts, only one first-party entry. It appears limited to document requests. It does not independently inventory script/image/worker requests or socket messages. The collector separately supplies core sources, assets and raw wire evidence, so a fresh HAR is not a blocker for the first access trial. If a specific missing resource matters later, inspect that actual resource rather than repeat broad captures.

Acorn parses the captured core source: engine 156,450 AST nodes, codec 18,264, scheme 7. Selected identifier/literal checks find no verified Worker/SharedWorker/WebAssembly/serviceWorker loader, bot/controller flag, or loot-seed routine in these supplied core files. `worker` hits refer to cosmetics/location text. Existing `droid`, `wander`, and `isPreview` meanings are not reinterpreted as bot proof. The only separately captured `.map` belongs to Xsolla's payment widget; the recovered embedded map is lightbox styling. This closes the prior missing-home-document gap for observed first-party core scripts, not every private, conditional or third-party context.

## Pre-open contents

Offline decoding examines the complete stored received frames, independently of the standard suite's narrow focused player/container lanes.

| Kind | Create records | Socket/identity pairs | Observed create information beyond `t,p` |
|---|---:|---:|---|
| Chest | 114 | 29 | `chestType` only; all default in this capture |
| Ammo crate | 102 | 26 | Type, dimensions, health/fullHealth |
| Grenade crate | 120 | 28 | Type, dimensions, health/fullHealth |
| Fishing/bubbles | 109 | 26 | Type, dimensions, health/fullHealth |
| Airdrop | 21 | 8 | Above plus landing progress/state |

These are replication lifecycle records, **not openings**. Chest updates contain only `t,a`; crate updates additionally carry health; bubbles only `t,a`; airdrops also carry health and landing state. Meteorite `hasWeapon` remains meteorite-specific. The positional tuples and other unknown semantics are not asserted to be an exhaustive impossibility proof. No authoritative per-container pre-open item list or deterministic content seed/generation route has been established. The complete nested field-name scan has no contents/loot-seed/controller candidate hit, which is a screening observation only.

The two environment payloads expose river/width, locations, resources/resourceNames, houses and zoomed state, without an established pre-open loot route. Unchanged native constructors/update paths add no new loot generator. Missing/private server information remains outside this capture. Always-visible exact contents remain unresolved and unimplemented; do not show guesses, NONE, nearby loot, or inferred outcomes. No repeat ordinary-opening baseline is justified by these results.

## Bot provenance

77 player-create records represent 37 socket/identity pairs; every create has the same 33-field schema. Shared fields cover native appearance, inventory, health, movement/building and related state. No verified separate AI/controller-origin field is established in creates, updates, environment payloads or supplied source. Uniform schemas do not prove uniform controllers, and differing values do not validate labels. This capture expands the player evidence beyond V61's contents-focused player-lane suppression, but provides no independent known-bot ground truth. No name/ID/timing/cosmetics/precision classifier is implemented. Further live provenance work should have a specific source-backed question, not repeat broad unlabelled sampling.

## Cone geometry

32 native pose snapshots reached the collector's explicit geometry cap, including scar, musket, bolt and other items. Every recorded ancestry membership check is true. Original topmusket/topscar and all three flash PNGs are available. The held sprites are 350×350 images rendered into a native 110-unit image node; visible art points left in its image space. Musket alpha bounds are `[21,145,330,205]`, scar `[7,150,333,200]`; these are whole-art bounds, not automatically barrel coordinates. Native poses vary held-art angle/size/position, including non-gun items, and do not establish input-acknowledged ADS.

The unchanged native drawable translates by `position/incomingScale`, rotates the context, then passes `incomingScale/size` to draw and children. Size is not fully encoded in Canvas's matrix. This source contract is recorded for the future correction; static art or a guessed fixed angular offset must not override the real draw contract.

There are **zero CAPTURE CANVASES clicks** and no identified gameplay screenshot/recording. `asset_01895_output.mp4` is the site's `/assets/output.mp4`, not a user-recorded test. Pose snapshots omit simultaneous Canvas matrices, cursor, actual bullets and cone pixels. They cannot locate the V61 visible misalignment by themselves. Do not publish another guessed V62 cone change. The access trial can supply the missing observation.

## Changes and validation

Added reproducible offline analyzers, aggregate JSON reports, two lossless embedded-asset recoveries and this review. Updated current AGENTS/knowledge/status/testing entry points and the supplemental live-validation record, preserving all historical suffixes. No runtime source, numbered payload, archive, collector, original source or uploaded capture was changed.

Reproduce from the repository root:

```sh
python tools/analysis/analyze-assets.py
node tools/analysis/analyze-asset-source.cjs
```

Python dependencies: msgpack and Pillow; JavaScript dependency: the repository's Acorn. Reports contain schemas/counts/hashes rather than copied player/account values or traffic bodies. Integrity checks and repeated generation are deterministic; native source analysis, main build/regressions and exact V61 archive checks are recorded in the supplemental validation addendum. Fixture success is not live visual proof.

Next: follow `docs/testing/cloud-access-trial.md` only after the user's separate greenlight. End this analysis turn without opening the game.
