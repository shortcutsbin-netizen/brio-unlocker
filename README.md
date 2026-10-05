# BRIO Unlocker

Current release: **V42** — local visual customization and practice modifiers for Build Royale.

Open [dist/brio-v42.min.js](dist/brio-v42.min.js), choose **Copy raw file** (or **Raw → select all/copy**), and paste the complete plain JavaScript into Chrome DevTools Console on Build Royale home. Wait for BRIO v42 / READY. Follow the [V42 test procedure](docs/v42-test-procedure.md); live visual verification is pending.

Read [AGENTS.md](AGENTS.md), current sections of [project knowledge](docs/project_knowledge.md) and [site knowledge](docs/site_knowledge.md), and [V42 findings](docs/v42-findings.md) before continuing. V40/V41 payloads, complete raw logs and historical appendices remain preserved.

Editable source: `src/brio.js`. Install dev dependencies with `npm ci`, build with `npm run build`, and verify source plus actual payload with `npm test`. Runtime payload has no external bootstrap/dependency. Version archives refuse overwrite with changed bytes.
