# V51 validation — 2026-10-07

`npm ci --ignore-scripts`, `npm run build`, `npm test`, source annotation audit, `git diff --check` completed successfully. Offline-only install initially lacked cached tarballs; normal clean install succeeded. Locked installed versions: Acorn8.19.0, Terser5.51.2, jsdom27.4.0. Environment-proxy deprecation warning is unrelated to build/test results. Plain standalone JavaScript, no loader.

- 32 retained dependency scenarios plus3 extended V50/V51 native integration configurations run against BOTH readable source and actual minified payload: **70 executions passed, zero failures**. Full output: [v51-test-output.txt](v51-test-output.txt). Own/prototype native methods and pre-Play/live Hell composition/restoration covered.
- All V50 assertions/checklist retained, adapting current version, Hell and No map scope. New assertions cover approved modifier/challenge predicates, health75/50/25 boundaries/unknown max, owned/unowned ammo, colors/selections, dynamic native source routing, selected offscreen loot image/rarity/culling, cone/pickaxe suppression, full map/hit/damage/progress/timer/held/projectile scope, new damage children, observed-history expiry, unchanged decoder identity and win/loss postgame/browse/next-Play cleanup.
- **829 executable blocks, 602 functions, 1320 comments**; zero missing adjacent annotations outside unchanged vendored parser. [Machine audit](../analysis/source/v51-comment-audit.json), [source map](v51-source-map.md). Vendor hash unchanged versus frozen V49.
- Source and minified parse. Minified payload has **zero parsed comments**. Current direct/archive payloads are byte-identical; current/frozen readable V51 source byte-identical. Rebuild after clean install reproduced exact existing archive. Native property names survive conservative mangle; no engine source evaluation/network/authority changes.
- Exact V50 readable source frozen at versions/v50/brio.js matches prior published src/brio.js Git blob. Prior docs/logs/releases retain paths/bytes; knowledge/AGENTS/releases preserve full previous bytes as suffix. V49 direct dist duplicate and archive both retained. Git tree publication based on full previous tree, without deletion entries; final preservation verification required at publication.

| Artifact | Bytes | SHA-256 |
|---|---|---|
| src/brio.js and versions/v51/brio.js | 597196 | 1efdf16d2c5c39de321dd405d7151212afbb91a957befe6357f6bfea9ff6626d |
| dist/brio-v51.min.js and versions/v51/brio-v51.min.js | 278472 | c8982b3e02cc2be13ffaf7a292473bd9857e0a712c60f0d12de7acfe735dc479 |
| Supplied engine (unchanged) | 838390 | 42ac4c2b8dd1de931a15373421462d0e0047b3303df30f2f6454f08f5abd1ac4 |

**No V50/V51 live test occurred.** Fixture Canvas/images/DOM/source/timers are mock boundaries, not native pixel/private-registry/server/performance proof. Spread half-angle interpretation remains provisional; target safe-zone edge during motion is not interpolated current storm edge; universal gold spawn eligibility and per-player damage attribution unavailable. Challenge scopes are documented, including shared detached trails and healing-number pool. Report unencountered conditions as unknown. Native gameplay/manual procedure: [complete V50/V51 procedure](../test-procedures/v51-test-procedure.md).
