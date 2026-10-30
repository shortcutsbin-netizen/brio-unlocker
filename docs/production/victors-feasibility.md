# Hell victors — feasibility only (no implementation)

User goal: a win-in-Hell end-screen button, reviewed submissions, and a victors list in Challenges. Required standard: nobody can submit successfully without truly winning with Hell active. No submission button, endpoint, credential, background request, list fetching or publication is added in V1.70.

## Trust limit

The current distribution is public JavaScript in a player-controlled browser. The player can modify settings, rendering, source, result handlers, local storage, timing, and any submitted transcript. A screenshot, exported log, script checksum, hash chain, client-generated signature/HMAC or nonce cannot establish that the reported game actually occurred with the required presentation. A client-held secret is not secret from that client. A WebAuthn/passkey signature could authenticate an account/device, not the truth of arbitrary game events or the pixels it displayed.

A genuine game-server win receipt would be valuable, but it proves only the facts that trusted issuer attests. The server currently does not enforce BRIO's client-side Hell visibility rules. A winning player could render normally, then assert Hell. Signing those assertions at our backend would authenticate their receipt, not make them true. A remotely observed genuine win alone still does not prove that the player's own screen stayed in Hell. Our new Used during match panels are local reports, never eligibility evidence; switching Hell off mid-match would disqualify a future full-Hell attempt even though Hell appears in that usage report.

Therefore **the strict zero-spoof goal is not achievable with this public client-only script**. Even a more controlled design should not promise literally no possible bypass.

## Options

| Mechanism | What it establishes | Limitation / feasibility |
|---|---|---|
| Ordinary button + screenshot/log form | A review queue and an accountable submitter | Easy to build, easy to fabricate; unsuitable for the requested guarantee |
| Full-match recording with unpredictable server-issued challenge/nonce and manual review | Better evidence and replay resistance; a reviewer can inspect continuity and visible settings | Editing, synthetic overlays, other clients/displays or hidden assistance remain possible; suitable only for a clearly labeled reviewed/community list |
| Independent live supervision / managed tournament machine or trusted hosted game stream | Stronger control over the observed execution environment and input/render pipeline | Operationally costly; cannot use the abandoned cloud-control surface as assumed working infrastructure; still no absolute anti-cheat guarantee |
| Cooperation with the game operator | Server-authenticated player/match identity, authoritative win result, replay protection and an official registered challenge mode | Requires an operator integration not currently available. The challenge itself must be trusted/enforced, not just a browser checkbox. Server-side withholding of forbidden information plus a controlled execution policy is stronger than signing local claims |

For the strict requirement, pursue game-operator cooperation and an enforceable challenge/trusted environment before implementing submissions. Without that cooperation, recommend either deferring the feature or explicitly relaxing it to a manually reviewed community achievement list. A human-approved entry can be protected against unauthorized publication even though its underlying claim is not cryptographically unforgeable.

## If a reviewed list is later authorized

1. The script opens an explicit, account-authenticated submission flow after a qualifying *candidate* result. No automatic posting and no direct write to the public list. Eligibility shown locally is advisory.
2. A separate service issues short-lived single-use nonces, limits uploads and rates, validates a strict schema, and rejects duplicate account/match IDs and replays. Full-run evidence is linked to the nonce. These controls reduce abuse, not establish untrusted event truth.
3. Pending evidence stays private. An authenticated moderator reviews it; approval changes server-side state. No GitHub PAT, moderator key, signing secret or shared administrator token is embedded in the distributed script.
4. Publish only minimal approved fields (display alias, opaque record ID, approved time, rules/script version, optional public evidence link with consent). Do not collect game login/session secrets or publish an email/IP.
5. The genuine script fetches a small, bounded, versioned JSON manifest with a maintainer/server signature verified with an embedded public key. No remote JavaScript or HTML execution. Render names as text, validate lengths/types/links, cache within a limit, support revocation, and leave Challenges usable offline. Protect the distribution channel and signing key. This protects the genuine approved list; a user can always modify their own browser to display a fake local list.

## Sources

- MITRE CWE-602, Client-Side Enforcement of Server-Side Security: https://cwe.mitre.org/data/definitions/602.html — a modifiable client cannot be the authority for a server security decision.
- OWASP Transaction Authorization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html — trusted server-side authorization/data, enforced state transitions, bounded validity and unique per-operation credentials.

Sources support the trust/replay principles; the BRIO-specific feasibility judgment is our inference from the repository's client-only architecture. No claim that an existing game API or official anti-cheat attestation is available.
