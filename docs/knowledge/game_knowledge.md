# Gameplay knowledge and cloud testing handoff

## Current state — 2026-10-16, America/Chicago

No cloud browser or game session has been opened. Cloud access, Google sign-in handoff, canvas input, script execution, output retrieval, and live rendering remain unverified. Next step is user asset collection and answers to the questionnaire, followed by an access/sign-in capability trial. No numbered release changes; V61 remains current, V62 paused. Supplemental collector remains independent.

User requests repository updates each work turn with new context, actions, and outstanding state. Preserve earlier documents/evidence; publish scoped updates under existing main authorization. Do not promise platform/chat availability or background unattended play.

## User-confirmed multiplayer test surface

- Duos supports groups of two; squads groups of four.
- Creating a party in the first tab and joining by party ID from a second tab can put two players in the same game. The second player is usually a decoy because simultaneous control is difficult.
- User may join a party on request for intricate actions the assistant cannot reliably perform.
- User can attempt to join the same solo match by watching the assistant screen and queueing concurrently. Verify match identity; timing alone is not proof.
- Assistant base display name: `unlocker_test_observer`.
- User base display name: `unlocker_test_player`.
- Script adds the `ul` prefix to both. Exact displayed formatting remains to be observed; do not manually double-prefix.
- User offered to avoid shooting the observer, help it reach the finale, and self-eliminate for a controlled victory observation. This is an available coordinated test, not an instruction to pursue wins now.
- Same-account concurrent-tab behavior, preferred region, party flow, and death/spectator behavior still need confirmation.

## Previously established controls

ADS is held right mouse button. Native renderer steadying is not a reliable substitute for held-input ADS. Consult site_knowledge.md/project_knowledge.md for existing source and recon evidence; historical collection quotas are superseded by their later handoffs.

## Pending user questions

See ../testing/cloud-access-questionnaire.md. Answers will be incorporated here before the cloud trial. Ask further targeted questions as needed; do not infer unknown gameplay behavior as fact.

## Recommended prerequisite

Run the existing supplemental asset-retrieval procedure before the cloud trial and upload reviewed results to docs/game-sources. This is helpful source evidence and is not technically required merely to open the game. Two natural matches, no every-container quota. Preserve generated names and the flat extraction; include sanitized client-load.har if obtainable. Raw capture bodies may contain credentials: do not publish unreviewed secrets. An inventory/storage/capture error should be reported with available output rather than addressed by blindly extending the run.

## This turn

Read current repo handoff and supplemental acquisition instructions; checked existing ADS knowledge; recorded the user's multiplayer plan, names, help offer, and per-turn documentation requirement. Prepared questionnaire. No script changes, game interaction, sign-in, or live test performed.
