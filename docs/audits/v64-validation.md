# V64 validation — 2026-10-19

Completed locally:

- npm run build / repeat build: source and payload parse; exact immutable versions/v64/ copies; zero payload comments;341,852-byte standalone payload. Repeated build produces identical bytes.
- Full npm test: exit0;64 regression +6 challenge executions across readable source and minified payload. Actual color input/preset paint assertions, HUD/status/mask draw order, both follow modes, deliberate hide-HUD precedence,300ms fade midpoint/end and Play cleanup included. FEATURE ERROR log assertions catch exceptions absent from S.errors. Startup prior-release63/59 teardown checked.
- tests/visuals.cjs (also added to npm test): stateful canvas restoration including paint failure; CSS/backing scale; both follows; duplicate-terminal fade cannot restart; stale local root after terminal still fades; unsupported/hidden/stale prerequisites fail open. Passed independently after joining test script.
-1,920 cone geometry cases; unchanged15 recorder helpers/storage/gates; original global/lane/passive descriptor/getter/redaction/work budgets; native +X and aimed-pose AST evidence checks.
- New source-only AST boundary verification: world/top before shared HUD, map/crosshair later; source native code is never executed. Existing challenge wrappers preserve native-once delegation and exact descriptor restoration when optional preflight throws.
- Authoring audit:1,084 blocks/749 functions/1,674 comments,0 missing; vendored parser unchanged. Native source/older release archives unchanged.
- Performance work bounds:4,096 active branches/64 overflow attempts;0 repeated linear membership scans; retirement bounded256 visits. Synthetic elapsed values in v64-performance-benchmark.json do not establish game latency.
- Full input analysis:4,092 structured V63 events/0 malformed/85 exact native chunks/two terminal matches;385 quoted FEATURE ERROR records and3 isolated registry errors explicitly counted. Exact older V62 export restored from Git history after renamed upload was only CRLF; old analyzer rerun succeeds and uses separate new derivative. Genuine V63 upload and historical v63-v62 report unchanged.
- All prior AGENTS/README/four knowledge document bytes retained as exact suffixes. git diff --check passes. No historical archive deletion/force push or assistant browser session.

Hashes:

| Artifact | SHA256 |
|---|---|
| src/brio.js / versions/v64/brio.js |3b211f7a5da6fa3ff93cd16a98ef029025953fb9960021411d15bacbc2bbcdbe |
| dist/brio-v64.min.js / versions/v64/brio-v64.min.js |2b8b5396035fd4764349c44aaa618ebfda3e1b297ec197ed28e394312de37dbe |

Limits: these are implementation/source/fixture checks, not live native pixel approval. V64 visual review next follows the full one-match procedure (maximum2matches per suite). Status events not naturally reached remain untested. No authoritative bot classifier or exact unopened-contents implementation is claimed.
