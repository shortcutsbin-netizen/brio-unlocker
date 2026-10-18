# Local-browser continuation and acceptance test

## Setup required outside the current cloud task

Official setup reference: [ChatGPT browser extension](https://learn.chatgpt.com/docs/chrome-extension). Availability depends on the user's app/workspace rollout. This is a proposed next connection, not an installed or verified capability.

1. Update/open the ChatGPT desktop app.
2. Under Settings → Computer Use, select Chrome and follow the official plugin/extension setup. Review its permission prompts.
3. Confirm Chrome shows Manage. Use the profile where the extension was installed and the game normally works.
4. Start a **new desktop task/chat**, in this project if available, and select `@Chrome`. Include the repository URL and ask it to read the current handoff. The current cloud task must not assume it gains that local connection automatically.

Allow only task-relevant site access through the normal product prompt. No general all-site allowance, saved-password sharing, remote-debugging port exposure or third-party credential vault is required by this procedure. The user handles sign-in. Do not change native game keybindings/settings.

Suggested initial request:

```text
@Chrome Continue BRIO Unlocker using https://github.com/shortcutsbin-netizen/brio-unlocker.
Read AGENTS.md and docs/knowledge/play_knowledge.md, then docs/testing/local-browser-trial.md.
Cloud access failed before sign-in. Use this connected local Chrome for the authorized
access/controls/script/output capability trial, then a few learning matches if it passes.
I will watch and correct actions. Keep native keybindings unchanged and checkpoint
the observed results and exact resume state to the repository throughout.
```

## Acceptance gate before normal live testing

These are project test requirements, not claims about the extension's documented guarantees. Use only APIs actually advertised in the newly connected environment.

| Gate | Pass evidence | If unavailable |
|---|---|---|
| Reachability | Actual native home page and controls, not an error/embedded replacement | Record failure and stop blind retries |
| Session/account | Correct user-authorized account; user handles authentication | Use the supported auth handoff; never ask for secret values in chat |
| Visual observation | Can inspect full player, gun, pointer/aim position and rendered scene | User supplies a targeted screenshot/clip |
| Basic input | Confirm custom movement and F interaction act as expected, with reliable release | User controls play; assistant does not guess default bindings |
| Held and combined input | Supported press/release or timed holds for movement, left fire and held-right ADS; inputs do not remain stuck | No claim of autonomous combat; retain assisted/user-play mode |
| V61 execution | A supported developer/Console surface runs the exact reviewed payload, and BRIO v61 UI is visibly present | User pastes the exact payload through Console; do not misuse read-only evaluation or invent hidden tools |
| Output retrieval | Exported log can be saved/read with completeness checked | User saves the log to the agreed repository location |
| Checkpoint | Published remote commit includes observations, failures and next action | Report publication blocker; do not call a local file a published checkpoint |

Read native bindings first without editing them. Match names must distinguish rounds while respecting native length and script prefixing. Never reload during an active match. Do not run a new asset collector or repeat proven visual checks by default. A native steadying field is not held-input ADS proof.

A network/JavaScript diagnosis may justify desktop Developer mode, which the official [Browser page](https://learn.chatgpt.com/docs/browser) documents. It is optional and separate from ordinary browser setup. Its sensitive browser access requires explicit approval at use time; it is not silently enabled by the game's standing test authorization.

## First match after passing gates

Attempt movement, a naturally available gun's hip/ADS firing, one naturally available opening and output capture. Observe cone origin/direction together with cursor and actual bullets. Then continue a few learning matches if control is effective. Record every user correction and meaningful result in play_knowledge, mechanics in game_knowledge, and implementation/evidence decisions in project_knowledge. Preserve V61 until sufficient evidence supports V62; do not claim a win, correct alignment or feature feasibility from access alone.

## Fallback that keeps development moving

If local autonomous input is insufficient or the feature is unavailable, the user plays while the assistant performs source/asset analysis, changes, regression checks and publication. Ask for one concrete visual condition at a time rather than a broad recon run. For cone diagnosis, a clear native gun/hip and continuously-held ADS view with player, gun, cone, cursor and bullet travel is useful; keep V61 and use `logs/runs/v61-log-2.txt` for a new standard-suite export. Source fixtures and old captures remain available for offline work, but live proof must retain its separate status.
