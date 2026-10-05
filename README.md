# BRIO Unlocker

Current release: **V43** — local visual customization and practice modifiers for Build Royale.

Open [dist/brio-v43.min.js](dist/brio-v43.min.js), choose **Copy raw file** (or **Raw → select all/copy**), and paste the complete plain JavaScript into Chrome DevTools Console on Build Royale home. Wait for BRIO v43 / READY. Follow the [V43 test procedure](docs/v43-test-procedure.md); live visual verification is pending.

Read [AGENTS.md](AGENTS.md), current sections of [project knowledge](docs/project_knowledge.md) and [site knowledge](docs/site_knowledge.md), and [V43 findings](docs/v43-findings.md) before continuing. See [release paths](docs/releases.md) for standardized V40–V43 archives. Complete raw logs and historical source appendices remain preserved.

Editable source: `src/brio.js`. Install with `npm ci`, build with `npm run build`, verify both source and actual payload with `npm test`. Runtime payload has no external bootstrap/dependency. Archives refuse overwrite with changed bytes.
