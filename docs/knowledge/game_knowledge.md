# Current game-mechanics knowledge — 2026-10-18

The user has now greenlit access testing and a few cloud matches. Practical operation/learning notes live in play_knowledge.md; project implementation state lives in project_knowledge.md. This document records gameplay mechanics, with attribution. The first actual cloud home-page attempt failed before the game loaded, so no new live mechanics were established; see ../../logs/observations/cloud-access-2026-10-18.md. Existing greenlight persists; no repeat authorization is needed.

| Mechanic | Current evidence |
|---|---|
| Interact/pickup uses F; ADS is held right mouse | User-confirmed; not yet tested in cloud |
| Native bindings are custom; read them without changing | User instruction; other controls unverified |
| Server selection is automatic | User-confirmed |
| Pregame waits for another human team, then starts a 60-second countdown | User-confirmed; same-party decoy tabs do not satisfy the other-team requirement |
| Reload permanently removes a player from the current match; cannot rejoin it | User-confirmed; never reload during a live test |
| Duos has two-player parties; squads has four | User-confirmed |
| Party ID can put multiple tabs/players together; user can help intricate tests | User-confirmed; verify shared match and cloud concurrency |
| Same-account concurrent tabs possible | User-reported; not cloud-verified |
| No private/custom/practice matches available | User-confirmed |
| Native default cosmetics should be preserved; local unlocker variants allowed for tests | User instruction |

Start/drop selection, exact movement/reload/heal/build/map inputs, opening-specific timing/proximity, spectator flow and winning tactics remain to be learned. Do not fill these gaps with assumed default controls or source fixtures. Capture user corrections as mechanics only when their meaning is clear; actual actions and useful tactics belong in play_knowledge. Historical sections follow unchanged and may describe older waiting states.

---

# Asset analysis complete; access trial next — 2026-10-17

User completed the capture/upload step. Read ../findings/asset-retrieval-2026-10-17.md for findings and ../testing/cloud-access-trial.md for the next trial. All 3,368uploaded files are accessible despite GitHub's1,000 entry display warning; two manifest-embedded missing files recovered offline. No repeat asset run or container/gun quota is required before access testing. No cloud browser, authentication, input or live visual test has been performed by the assistant. V61 remains current; V62 remains paused for sufficient cone evidence. The user's workflow is explicit: publish asset analysis, report and END TURN, then start real-game access testing only after a separate user greenlight. Preserve all confirmed gameplay answers below.

---

# Recovered cloud-trial answers — 2026-10-17

Recovery audit: main at b6e20dfba4bc1d795df63ff302c46150332abdd4 still contained the unanswered questionnaire. Personal Context recovered the subsequent user answers and the prior assistant's statement that it was publishing documentation. That statement was not reflected in the inspected main tree. No cloud browser/session or live test result was recorded; no V62 exists. This recovery turn performs documentation only.

## Confirmed answers

- Use the user's regular testing account; user handles interactive authentication. Account identifier intentionally omitted from public documentation.
- Change the observer display name each game for identification. Retain the established observer base name and avoid adding a second script prefix.
- Do not change native settings/keybinds. Custom bindings may be read on the first trial; interact/pickup is F; ADS remains held right-click. Read other controls rather than assuming defaults.
- Server selection is automatic. Existing ad suppression is reported reliable; newly observed ad screens may be incorporated into removal.
- Reloading permanently removes the player from the current match; it cannot rejoin that match.
- Pregame waits for another human, then starts a 60-second countdown. Same-party tabs do not satisfy the other human-team requirement in team modes.
- Same-account concurrent tabs are allowed per user report; live behavior is not yet verified here.
- User can join coordinated tests and locate the observer.
- Preserve default native cosmetics; alternate unlocker cosmetics may be used for testing.
- No private/custom/practice matches.
- User accepted the proposed initial movement, hip/ADS firing, one opening, and output-retrieval sequence.

## Resume point

Cloud access/sign-in/input/script/output capability trial is next; its execution has not occurred in the recovered record. The previous assistant said it awaited a user greenlight. This recovery request itself is for state reconstruction, so no browser was opened during the audit.

V61 remains current. V62 remains paused for source/visual evidence supporting cone geometry, with final bounded bot provenance and separate contents investigation pending. Supplemental collector remains independent. The inspected game-sources tree still contains only engine.js, main.css, msgpack.js and scheme.js; no supplemental results, index.html, HAR, or fresh hip/ADS visual artifacts were found. No repeated broad contents run or new spread sampling quota is required.

The older handoff below is retained verbatim as history; its unanswered questions are superseded by the confirmed answers above. Any details not recovered remain unknown rather than inferred.

---

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
