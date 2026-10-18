# V62 — resumed user-play pipeline, 2026-10-18

The user abandoned assistant-controlled browser/VM testing and authorized resuming development after the completed asset review. That supersedes earlier V62-paused/cloud-trial directions. No assistant match or new live observation is claimed. Assets remain complete in git; the GitHub directory listing cap was cosmetic. Read the asset findings for exact coverage/limitations.

## Cone correction

Static analysis of the unchanged native engine resolves the numeric aliases in the aim assignment at character722651 (see `docs/analysis/engine/v62-native-aim.json` for exact offsets). The native formula `-atan2(dx,dy)+PI/2` equals `atan2(dy,dx)` modulo a full turn: **root +X is forward**. Earlier -Y handoffs were wrong. V61 used an independently reconstructed cursor direction, which was not proof of native aim under all coordinate/input conditions.

V62 reads the actual pre-root canvas matrix and projects the current root +X vector. It independently obtains the nominal barrel position from the actual held-art matrix and native scale at draw time; animated hand/recoil/ADS ancestry is handled by native traversal. This removes both the guessed quarter-turn and reliance on an external cursor axis. The original art's transparent margin means `flash.x+7` is the nominal110-unit image edge, not a verified exact opaque pixel tip for every skin. Live gun/bullet alignment remains pending; this release is an evidence-backed candidate, not claimed pixel proof.

At most24 numeric draw samples per match, deduplicated by weapon/mode/direction sector, include root position/angle/units, barrel position, held matrix/scalar, axis, length and empirical half-width. The cursor is optional diagnostic evidence only. Suppression reason totals are exported. Drawing restores canvas state even on an exception. Unknown gun/mode, invalid/stale projection and stale held ancestry suppress. Existing empirical44mode envelopes, thresholds, saved storage, colors/lengths, native shot/angle logic and retired recon UI persist.

## New passive evidence

“Test bots + contents” backs up preferences once, enables the existing three screen options, Identify bots and spread, disables Hell and latches combined focus on next Play. It does not promise working bot labels or exact loot lists.

| Lane | Combined focus | Normal |
|---|---:|---:|
| Schema |200|350|
| Player payload |200|350|
| Container payload |1000|700|
| Container/target replica |200|250|
| Environment |100|100|
| New provenance |100|50|
| Total |1800|1800|

All existing8MB/15minute/80000packet bounds remain. Focused full replica work still excludes players to preserve container coverage; the separate player payload lane is restored and player schemas are no longer skipped.

New evidence routes, using existing decoder/replica ticks:

- Compact create/update tuple lengths and tails, plus original descriptors before native remapping; no interpretation of an unknown tuple slot as AI/loot provenance.
- Symbols, non-enumerable data and accessor manifests, including redaction and explicit omission counts; getters are never invoked for this evidence.
- Reached native own/prototype structure, up to200entities, three prototype levels,240keys/object. Distinct shapes are chunked into40descriptor rows to avoid large manifests burying late fields behind the snapshot ceiling.
- Up to16 distinct2048character function-source prefixes from reached own/prototype functions, as data only, never evaluated. Generic Object.prototype functions are excluded from the source budget. Shared constructor/function shape cannot distinguish a bot from a human by itself.
- Existing registry discovery additionally examines only reached entities and their first60own data-object values. No recursive graph/global search or private closure access is introduced. Registry checks/restoration use data descriptors rather than invoking handler getters.

Envelope and native shape novelty sets each cap at40. All records share the reserved provenance lane and global byte/record ceilings. No new timer, WebSocket wrapper, outgoing traffic, independent live decode, input manipulation, source execution or native authority mutation is added. Existing automatic visual/feature/performance coverage remains passive.

Repeated identical update tuple extensions previously created another field record every update; V62 deduplicates these while preserving changed tails. New create lifecycles reset their delta comparison, so same-ID re-creation cannot silently inherit the old entity's values. Native source redaction/limitations remain explicit. No verified bot controller flag, known-bot ground truth or authoritative exact pre-open contents route exists yet; no labels, fabricated NONE or retirement is added.

## Compact tuple source closure

Additional static analysis follows create tuple mapping `ãÂÆ`: `[i,b,x,y,a,n]`. Thus `p[5]` maps to `n`, copied to native `ÅÉÊ`; both observed member reads are in stale-entity cleanup conditions (201/120tick branches with additional state/visibility checks). This final boolean is not an established bot/controller flag or contents seed. These are observed client uses, not proof of all server meanings. The update's first four entries are identity/x/y/angle; any extra tail remains unlabelled and is captured only when novel. The machine-readable native-aim analysis includes exact mapping/assignment/reference offsets. Captured baseline tuples already existed in the asset results; V62 is not asking to recapture them as if new.

## Other product work and next decision

The spread option now describes complete empirical widths instead of falsely saying collection continues. Reversible profile/settings compatibility, challenge locks, canvas restoration and existing native observer delegation stay covered by the suite. Prior approved/proven/pending/denied decisions remain; unrelated unverified product features are not silently declared complete.

Next: use the short V62 procedure for one natural match and upload `logs/runs/v62-log.txt`. Analyze the new provenance/tuple records and numeric cone traces before another build. If the cone still fails, obtain one clear hip/ADS clip or screenshot with gun/cursor/cone/bullets; do not iterate another guessed angular offset. If the new provenance routes reveal only the same replication/render data, describe their bounded closure precisely; do not infer universal impossibility from capped/missing/private state. Continue approved feature work when a specific reliable source route and verification surface support it.
