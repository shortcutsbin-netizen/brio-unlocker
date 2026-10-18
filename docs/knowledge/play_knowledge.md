# Updated continuation decision — 2026-10-18

Second, explicitly requested cloud diagnosis again reached Site Unavailable before native home/sign-in. Browser inventory has only cloud Chrome. DOM/console do not reveal the root cause; no further request-level diagnostic API or permission-management tool is exposed. No new matches or mechanics learned. See ../testing/browser-pipeline-diagnosis-2026-10-18.md and ../testing/evidence/brio-browser-diagnosis-2026-10-18.jpg.

Preferred next candidate: user connects local Chrome through the ChatGPT desktop app, then starts a new local-capable task using @Chrome and reads ../testing/local-browser-trial.md. Official setup is documented, but actual game/input/script/output capability is not verified. Check held/combined inputs and release safety before attempting autonomous matches. If insufficient, keep user-controlled play plus targeted evidence and assistant source/regression/publishing work. Cloud per-site permission is a user-checkable possibility, not established cause; do not infer browser access from shell-network policy. No permissions or protections were changed. Standing testing authorization persists, while new connection/developer-mode access still follows its own supported approval flow. All older instructions below remain historical where superseded.

---

# Play knowledge — operator guide for BRIO test matches

## Resume state — 2026-10-18

The user explicitly greenlit cloud access testing and a few matches, with live corrections while watching. That authorization remains valid; do not ask for the same greenlight again. No match has yet been played by the assistant.

The first cloud visit to `https://buildroyale.io/` returned a page titled **Site Unavailable**, with **Unable to access this site.** One reload returned the same page. Sign-in, game loading, custom controls, canvas input, V61 execution, output export and gameplay remain untested. No credentials were entered or requested. No native settings, account state or game state changed. No visible CAPTCHA, anti-bot explanation or technical cause was shown. Do not label this bot detection or claim the public game is down. Browser screenshot: `../testing/evidence/brio-cloud-access-2026-10-18.jpg`. Run record: `../../logs/observations/cloud-access-2026-10-18.md`.

Stop point: the game home page could not be reached. Do not retry in a loop or change network/browser protections. When a reachable supported cloud session is available, resume at the home page under the existing greenlight. Preserve V61 until actual source/visual evidence supports V62.

## Document responsibilities

- **play_knowledge.md:** how the assistant loads, signs in, starts, controls, survives and tests matches; practical lessons and exact next steps.
- **game_knowledge.md:** game mechanics and user-confirmed behavior, separated from live observations and unverified hypotheses.
- **project_knowledge.md:** implementation/evidence/release state and development decisions.
- **AGENTS.md:** current authoritative handoff and constraints; read its newest section first.

Do not turn a plan, source fixture or user report into a claim that a cloud action succeeded. Add learned controls and tactics only after observation, and retain user corrections with their date and context.

## Load and prepare

1. Inspect the currently available cloud-browser documentation and supported APIs. Use the user's requested cloud browser. Reuse the active session/tab when appropriate; a later thread must inspect available tabs rather than assume an old tab ID survived.
2. Reach the real home page. If an access error occurs, record its exact visible title/body/URL and a screenshot. A bare error does not prove bot detection. One low-risk reload was tried in the first trial; do not continue looping through alternate routes or network settings.
3. When sign-in is reachable, use the documented secure authentication flow. The user has chosen the regular testing account and will handle authentication. Never put credentials or the private account identifier into repository documentation, logs or chat.
4. Read the custom native keybindings on the first successful visit. **Never change them or native settings.** Only confirmed controls so far: interact/pickup **F**, ADS **held right mouse**. Movement, slot selection, reload, heal, map and building inputs still need reading; do not assume WASD or standard binds.
5. Choose a distinguishable per-match display name based on `unlocker_test_observer`, respecting native length limits. Inspect the script's actual automatic prefix and avoid doubling it. The user may use `unlocker_test_player` for joint testing.
6. Preserve default native cosmetics. Local unlocker cosmetic variants are allowed for tests; no purchases, account linking/deletion or unrelated account changes.
7. Run the exact current `dist/brio-v61.min.js` through a supported documented execution surface. Script execution is **not yet verified** in the cloud browser; do not use a read-only evaluation API for mutation or assume a console surface exists. Verify the BRIO terminal/version before Play. No new collector pass is required for the initial access trial.
8. Enable Show bullet spread for the visual check through the existing UI. Avoid changing unrelated preferences or retesting established features. Observe any new ad screen rather than assuming suppression succeeded before the script ran.

## Start a match

User-confirmed, not yet cloud-observed:

- Server selection is automatic.
- After Play, a pregame lobby waits when no other human team is present. Once another human joins, a 60-second countdown starts.
- Two tabs in the same party do not satisfy the other-human-team requirement in team modes.
- Reloading permanently removes that player from the current match; it cannot rejoin. **Never reload an active match to fix a test script.**
- No private/custom/practice matches are available. Public test matches should use normal controls and native protocol behavior.

Read and record actual start/drop/spawn behavior at the first successful run. Do not confuse a waiting lobby, deployment, active match, death/spectating or home screen. If the native UI is unclear, observe before acting or ask one focused question that the user can answer while watching.

## First few matches — learning plan, not completed experience

The initial goal is reliable control and evidence collection, not a promised win.

1. **First accessible match:** verify deliberate movement and aiming; obtain any naturally available gun; fire hip and held-right-click ADS; interact with one naturally available openable. Verify supported screenshot/output retrieval. Record what each attempted input actually did.
2. **Next match:** apply the user's corrections, learn natural pickup/reload/slot/heal actions and safe movement. Observe the map/storm only as needed for survival; prior proven modifiers remain exception-only.
3. **Further match if useful:** practice movement while aiming, resource use and combat positioning under the confirmed controls. Seek a longer survival/finale surface when feasible. A win is an eventual testing objective, not established competence or a quota for an access trial.

Possible tactics to evaluate later: acquire a usable gun/ammo before taking fights; choose cover and a route toward safety; avoid standing still while deciding; heal/reload when native conditions allow. These are proposed learning goals, **not verified game-specific rules or evidence of skill**. Record failures and corrections rather than asserting that these actions were performed or effective.

The user can join a party for intricate tests or try to queue into the same solo match. Verify shared-match identity; timing alone is insufficient. Same-account multiple tabs are user-reported possible but remain cloud-unverified. Request joint help only when the specific test needs it. The user offered assistance reaching a finale and a controlled victory observation; no such round has occurred.

## Cone and feature evidence

- Keep player, gun, cursor, cone and actual bullet travel visible together; distinguish hip from continuously held-right-click ADS.
- Capture supported screenshots/clip and state at the same time. Native steadying is not ADS proof. Describe the actual error before choosing a correction.
- Source art and 32 prior ancestry snapshots are supporting geometry evidence, not a live alignment check. Do not publish another guessed fixed offset.
- Exact pre-open contents and bot provenance remain unresolved. Never infer contents from nearby loot/removal/type or label bots from names, IDs, timing, cosmetics or apparent precision.
- At most three different extra manual action types per match; repetitions are allowed. Ordinary play is not an all-gun/container collection quota. Export after the match is separate.
- If V61 evidence is exported, use `logs/runs/v61-log-2.txt`, preserving the previous log. Verify output retrieval before claiming it works.

## Reliable checkpoints

Checkpoint after access/authentication outcome, controls inspection, each match end, a significant user correction, any new failure, and before yielding or a long analysis step. During active gameplay, prefer a brief safe checkpoint that does not leave inputs held or reload the match.

Each checkpoint should record:

- Verified current commit/release, browser capability, phase and whether a live session actually exists.
- Match label/name, attempted actions, visible results, concrete mistakes and user corrections; omit secrets and unnecessary player/account identifiers.
- Exact confirmed controls, interaction mechanics and survival lessons, with user-report vs live-observation attribution.
- Evidence paths, output completeness, errors/limits and which tests are still pending.
- Exact next action and conditions for resuming; authorizations and prohibitions persist across threads.

Publish scoped document/evidence updates to the repository and verify the remote commit/tree. Preserve original logs/releases/uploads and complete historical knowledge suffixes. A local commit or a statement that publishing started is not a published checkpoint. Do not promise that the cloud session or chat context will survive; another thread must be able to resume from these documents alone.

## Learning ledger

| Date | Surface | Verified result | Lesson / next action |
|---|---|---|---|
| 2026-10-18 | Cloud home-page access | Site Unavailable before sign-in; same after one reload | No gameplay learned. Resume access when a supported session can reach the home page; existing greenlight persists. |

Wins, eliminations, survival improvement, controls proficiency and successful match/test count are all **unestablished**. Do not fill them in from expectations.
