# V54 findings — passive gun/ADS spread recon

The terminal now has **SPREAD RECON**, a read-only checklist; recording begins on ordinary Play and requires no arming button. Anonymous gun/mode aggregates persist between matches, reloads and reinjection in the same browser. Rarities share one gun entry. Existing approved modifiers/challenges and V53 inventory/damage/performance repairs remain present.

## Native mechanics established from the supplied source

`tools/analysis/analyze-v54.cjs` parses the unchanged supplied engine without executing it. Reproducible source coordinates and design limits are in [mechanics analysis](../analysis/engine/v54-spread-mechanics.json).

| Native route | Consequence |
|---|---|
| Original decoded `steadying` maps to `ée`; right mouse is native mouse2 input | Require held right-click and original native steadying to agree, outside the 150ms transition window. |
| Player rendering can temporarily force `ée=true` during hip-fire recoil | Renderer true alone must never classify ADS. Read the original decode result before native callbacks mutate it. |
| `weaponSlots=Åé`, `selectedWeapon=ÈÆ`, loaded `wAmmo=áAæ` | Use the selected inventory gun, stable slot context and loaded-ammo increases to recognize reload sequences. |
| `bulletType` can be a shared projectile family, e.g. sniper | Bullet-family labels do not identify every actual gun; do not reject a musket merely because its projectile says sniper. |
| Native projectile rotation is hundredths of radians; local aim is positive X | Compute signed modular offsets directly. The native reticle scalar is not an established scalar-to-angle table. |
| Muzzle flash `Êáe` and held art `ä` sit inside native hand/physical containers | Compose bounded native ancestry into the already transformed player root. Avoid a player-centered sector. |

## Evidence threshold and quality gates

Each gun has **No ADS** and **ADS** records. A mode checks off after at least **100 accepted shot groups**, **eight firing sequences**, and agreement between the maxima of the two disjoint latest 50-group windows within **max(0.6 degrees, 10% of the larger maximum)**. Continued observations can reopen an unstable box. Observed offsets of 60 degrees or more require review and never produce a backward/huge cone.

Projectiles received within a fixed 35ms window from a group's first projectile share one credit. This conservatively groups shotgun pellets; distinct left presses and reload boundaries separate groups. Duplicate native projectile IDs are ignored within bounded per-match memory. Fast held fire cannot chain-merge a whole magazine through a sliding arrival window. Sequences begin on gun/mode changes, a new press, native loaded-ammo increase, a gap over 750ms or a new match. No fixed number of clips is required; this accommodates automatic, semiautomatic and single-round reload guns.

An accepted projectile must have the local shooter, a known selected gun, stable gun context for 150ms, valid native angle/scalar, authoritative aim at most 150ms old and stable for 80ms, client/server aim agreement within one degree, acknowledged ADS state and no build mode. Motion is allowed and counted separately. Rapid turns, stale packets and transition shots remain rejected with reasons; the user need not manually count or classify anything.

The threshold is a practical empirical milestone, not proof of a theoretical server maximum. The IID one-sided maximum formula `1-p^n` motivates 100 groups (roughly 97% population coverage at 95% confidence under that idealized model). This is our mathematical inference; gameplay bloom, motion, filtering, timing and correlated pellets violate its assumptions. The NIST tolerance-interval reference in the analysis supplies general statistical context, not a server guarantee. A perfect universal maximum cannot be inferred from finite observations.

## Display and persistence

- The optional checklist has native inventory art/name and disabled checkboxes in ADS/No ADS columns. It shows accepted groups, sequences and stability. Existing source-backed catalog entries stay unobserved until encountered; server spawn availability is not established. Grappler is N/A because it is not an angular bullet weapon. The internal AK variant uses the AK47 entry.
- Above the local player, green **Recording shots** indicates a recent accepted observation; amber **Not counted** includes the reason. The first line identifies the current mode's progress and whether both gun modes are checked. The test badge follows the Hell assistance lock; passive recording continues there.
- **Show bullet spread** retains its existing setting. After 12 accepted groups, it draws an unfilled V with 96-world-unit rays from the native muzzle/held art, using the current ADS record and, once sufficiently sampled, the current native scalar bin. There is no filled sector or outer arc. Missing valid ancestry/evidence suppresses the display.
- The cone represents a finite observed envelope, not weapon range, hit probability or an exact server table. Physical live appearance still needs observation.
- Revision-scoped local storage is `brio_spread_recon_v54`. Saved flags are never trusted; completion is recomputed. The old V53 rarity samples are not imported into this distinct ADS experiment. No existing saved preferences or historical files are removed.
- Storage failure is visible, data remains in memory and retry is bounded. COPY RESULTS includes the aggregate progress. Normal dirty writes happen no more than once every five seconds, with explicit lifecycle/export flushes.

## Performance and lifetime

Normal play collects the existing sampled helper timing, local native draw cadence and optional page long-task metrics automatically. There is no PERF button or required diagnostic phase. No modifiers are temporarily paused by this routine. The previous comparison implementation remains available only through its diagnostic API and is still fixture-tested.

Heavy diagnostic lanes retain their existing 15-minute/packet/record caps. After the time cap, the same native decoder observer continues only lean recon/counters through native match end, then restores the original decoder. No second decode, independent parsing of live bytes, input send or broad performance hook is added. Passive mouse listeners never change input; unchanged mouse moves return before DOM work.

Bounds: 64 gun records, two modes, latest 100 maxima, 48 scalar bins per mode, 512 transient projectile IDs, fixed 35ms grouping, change-only visible table cells, up to six ancestor transforms, one-in-64 helper timing. Existing scoped discovery, retirement and outline-readback budgets remain. [Synthetic benchmark](../audits/v54-performance-benchmark.json) confirms bounded retirement work, not a live latency improvement or the cause of the earlier delays.

An automatic publication review identified an obsolete V39 startup record with prior player identities/telemetry. V54 now emits an anonymous historical-label count and scope note instead. The original published archives remain unchanged; the current payload embeds no such prior player records. The rejected preliminary build was preserved locally and is not a delivered release.

No V53 log exists. V52 map hiding remains explicitly proven; V53 Hell repairs and live performance remain pending. No new denied proposal is implemented.
