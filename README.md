# BRIO Unlocker

Current release: **V46**. Complete plain Console script: [dist/brio-v46.min.js](dist/brio-v46.min.js). Use **Copy raw file** or **Raw → select all/copy**, paste on Build Royale home, and use normal Play. No manual match-start/probe arm. The minified payload contains no comments.

[Source](src/brio.js) · [Live test](docs/v46-test-procedure.md) · [Findings and contents/bot assessment](docs/v46-findings.md) · [All-feature status](docs/v46-status.md) · [V45 log analysis](docs/v46-v45-analysis.json) · [Raw native engine reference](docs/engine.js) · [Static engine analysis](docs/v46-engine-analysis.json) · [Release path map](docs/releases.md).

V45 user confirms correct materials and in-match meteors, but reports small arrow names, misplaced ammo borders and meteors carried into a new match. V46 enlarges names, binds warnings to all low-ammo gun slots (equipped or not), removes old runtime state at ordinary Play, and reserves passive evidence capacity for late containers. Contents/bot classification remain unresolved; no guesses or impossibility claim.

Local visual customization only; native protocol/ownership remain unchanged. Twenty-three integrated scenarios pass against source and payload, including full reference parsing, native HUD fixtures and consecutive-Play cleanup. Live visual confirmation uses 24 blue flags and a second match without reinjection. `npm ci`, `npm run build`, `npm test`; evidence analysis `node tools/analyze-log.cjs` and `node tools/analyze-engine.cjs`. Prior versions/logs/reference source are preserved. Current dist only; immutable releases in versions/. [Third-party parser license](THIRD_PARTY_NOTICES.md).
