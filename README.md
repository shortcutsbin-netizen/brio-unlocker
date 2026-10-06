# BRIO Unlocker

Current release: **V47**. [Complete plain Console payload](dist/brio-v47.min.js): **Copy raw file** (or Raw → select all/copy), paste on Build Royale home, then normal Play. No manual arm. Minified payload contains zero comments; readable source has extensive maintenance annotations.

[Source](src/brio.js) · [Live procedure](docs/v47-test-procedure.md) · [Findings](docs/v47-findings.md) · [All-feature status](docs/v47-status.md) · [V46 input analysis](docs/v47-v46-analysis.json) · [Raw native reference](docs/engine.js) · [Static reference analysis](docs/v47-engine-analysis.json) · [Release paths](docs/releases.md).

V47 restores v45 inventory cell size and red X, removes user-retired labels/radius/highlight/opaque foliage, keeps high contrast deferred without a test flag, and applies monochrome immediately across Play/new-canvas transitions. Confirmed larger arrow names, meteor reset and cosmetics remain intact. Contents/bot classification still unresolved; screening rows say so.

Local visuals only; native protocol/ownership unchanged. Twenty-five integrated scenarios pass for both source and payload. `npm ci`, `npm run build`, `npm test`; `node tools/analyze-log.cjs` and `node tools/analyze-engine.cjs` reproduce current evidence. Current primary test has **19 blue flags** plus a same-session monochrome comparison. Fixture checks are not live pixel/loading proof. Historical logs/engine/releases preserved; dist holds current payload and versions/ preserves immutable archives. [Parser license](THIRD_PARTY_NOTICES.md).
