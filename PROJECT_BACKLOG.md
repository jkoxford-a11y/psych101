# Psych101 Project Backlog

Durable future and deferred work that is not part of the immediately active task. See `HANDOFF.md` for current state and next actions, and `AGENTS.md` for how the project-state files relate. Remove items only after verifying against current repository state.

## Editorial review

- **Instructor line-by-line review across Chapters 2–13** — the current audit/revision sequence addresses conceptual accuracy and cognitive load, but most chapters will still benefit from a later sentence-level teaching pass after their canonical sources and figures stabilize.
- **Review Chapter 11’s newly authored Connections rows and retrieval prompts** during the final instructor pass. They are canonical source content now, not uncommitted work.
- **Learning objectives drift after spine conversion** — a converted chapter teaches threads its objectives were written before. Chapter 11 now carries belonging, beliefs-transmitted vs. feelings-conditioned, and the caring/not-caring frame with no objective naming any of them, while its pre-review audit separately asked for objectives 7–8 to be consolidated. Objectives are pedagogical commitments, so the agent does not silently edit them; make this an explicit instructor step in every post-conversion pass, not a Chapter 11 one-off.
- **Apparatus retrofit as a standing post-line-edit step** — retrieval prompts, Do Not Confuse boxes, and review questions across chapters mostly test term discrimination rather than the relations between constructs. `pipeline/spine-seed-protocol.md` routes this to the end of the conversion so prompts test the final text; Chapter 11's is pending and the same gap likely exists in earlier chapters.
- **Settle the seed-packet packaging question before Chapter 12** — Chapter 11's packet ran to thirteen instructor decisions across fourteen pages. A format that routes everything to the instructor trains him to skim the decision boxes, which defeats them. Open proposal: split into a short instructor decision packet and a separate agent-facing conversion plan. Recorded as unresolved in `pipeline/spine-seed-protocol.md` → Step 6.

## Labs and demonstrations

- **Complete the deployed-page human Learning Lab state/restoration spot check** — the repository-wide automated audit is complete. On deployed pages, verify the relocated Start over control with Tab/Shift+Tab and Enter/Space, one real same-tab reload/restore and completed-state restart, sidebar/return navigation, and the Signal Detection mask behavior. See `pipeline/audits/learning-lab-state-restoration-audit.md` and `pipeline/audits/ch04-lab-validation.md`.
- **Build the size–weight illusion lab or remove the placeholder** — both Chapter 4 files still say “when available,” but no such lab exists in `docs/labs/ch04/`.
- **Live-test both Chapter 3 labs** at desktop, portrait-mobile, and landscape-mobile widths, including completion, mid-session reload, focus/state restoration, reset, labels, and cue/outcome traces.
- **Review standalone labs before broad chapter wiring** where wiring has not already been explicitly approved; preserve the project distinction between building a lab and placing it in a chapter.

## Figures and visual assets

- **Optional Chapter 2 image-folder cleanup** — `docs/images/ch02/` still contains pre-existing orphaned or duplicate assets not covered by the prior archive authorization.
- **Chapter 6 figure redesigns** — Figures 6.2, 6.4, and 6.5 remain conceptually flagged; Figure 6.1 still needs a decision about whether its five-panel organization is a loose visual metaphor or should be simplified.
- **Visual-inventory reconciliation** — `source/visuals-inventory.md` is known to drift out of sync with per-chapter metadata and actual files. Cross-check `docs/images/chXX/README*.md` before trusting or editing it.
- **Figure metadata completion pass** — several older chapters still have uneven caption, alt-text, attribution, license, and public-sharing records compared with the current standard.

## HTML and rendering

- **Verify the two mobile fixes on an actual phone in both orientations** (`docs/css/style.css`, `docs/js/sidebar.js`): sidebar visibility/reopen and expanded-figure clipping.
- **Verify the live GitHub Pages site** after the current Chapter 9–13 sequence is rebuilt, including links, figures, labs, expandable assets, sidebar state, and narrow-screen behavior.
- **Browser-check the new `h3` accent rule** against live chapter pages before systematic rollout.
- **Retrofit `.in-section-nav` and descriptive `<h3>` chunking** chapter by chapter after the active audit/revision sequence. This is content-structure work, not merely a CSS pass.
- **Commit and verify the Prologue edit** — confirm Figure P.5 renders correctly on the live site and ensure the new image `docs/images/prologue/fig_interactive_imagery_book_ocean.png` is deployed.

## Repository and workflow

- **Remove ~20 MB of unreferenced images from published `docs/`** — `.github/workflows/static.yml` uploads all of `docs/` (144 MB) to GitHub Pages, so these deploy to the live site despite no chapter HTML referencing them (verified by grep; they appear only in audit/README markdown): `docs/images/ch04/ch4_polished_draft_assets/` (6.1 MB, doubly nested as `.../ch4_polished_draft_assets/ch4_polished_draft_assets/`), `docs/images/ch03/3 images not used/` (5.7 MB), `docs/images/ch04/unused/` (4.1 MB), `docs/images/ch07/candidates/` (4.1 MB). Eight files across them are byte-identical MD5 duplicates of live figures — e.g. `ch4_polished_draft_assets/.../retina_rods_cones_fovea_blindspot.png` matches `docs/images/ch04/fig_retina_rods_cones_fovea_blindspot.png`, and all four `ch07/candidates/` files match their shipped counterparts. Deleting them will not shrink `.git` (273 MB), which already carries the history. Overlaps the Chapter 2 image-folder item above; consider one combined pass.
- **Fix the numeric commit messages** — 16 of the last 60 commit subjects are bare numbers (`1007`, `1058`, `514`, `204`, `723`, `234`, `159`, `1226`, `844`, `731`, `1121`, `756`, `415`, `1223`, `1147`, `630`), interleaved with normal descriptive ones, and the three most recent commits are all numeric. Something in the commit path — likely a GUI client or script auto-filling a count — is generating them. Identify and fix the source; git history is currently unusable as a record for exactly the most recent period, which is part of why the markdown logs carry so much load.
- **Continue `pipeline/sonnet5-improvement-plan.md`** — remaining context-hygiene work, retrieval/review density, glossary linking, print CSS, global glossary/search, and template extraction.
- **Audit the Session 80 sidebar-swap script’s full affected-file set** rather than assuming the already-repaired casualties were exhaustive.
- **Delete or disconnect the stale OneDrive repository copy** (`C:\Users\oxfor\OneDrive\Docs\GitHub\psych101` / `old_psych101`) from Cowork-connected folders.
- **Review `pipeline/chatgpt-instructions.md`** — the restructured version has not received explicit instructor approval.
- **Clean stale work orders after execution** — old comparison-draft paths and completed instructions should be updated, marked superseded, or archived so future agents do not follow them literally.
- **Rename the three mis-extensioned text files in `docs/images/ch03/`** — "Info for Figure 35 02 04.png", "Info for ch03_nervous_system_centralization_semirealistic.png", and "Info for Simulated Connectivity Damage of Phineas Gage.png" are UTF-8 text notes, not images. They produce a recurring ~10-byte CRLF phantom diff because `.gitattributes` marks `*.png` binary while the committed blobs are LF-normalized. No image data is at risk, but they will keep reappearing as modified until renamed to `.txt` or the one-time renormalization runs. Two of the three sit inside `docs/images/ch03/3 images not used/`, which is already slated for deletion above — coordinate the two.
- **Sandbox git is write-hostile — decide the division of labor** — when an agent's shell is a sandbox with the repo mounted (Cowork), it can create lock files inside `.git/` but cannot unlink them, so `git add`/`commit`/`update-ref` strand `.git/index.lock` and `.git/HEAD.lock` and block all subsequent git commands until the instructor deletes them on Windows. Hit twice on 2026-07-25; the Chapter 11 commit only succeeded because no lock existed yet. Recorded as a hard prohibition in `CLAUDE.md`. The durable question is whether repository mechanics (git, HTML regeneration, linting) should simply move to a native-shell agent, leaving the sandboxed one to author files and build instructor packets.
- **Fix Chapter 8's three broken internal anchors** — `section-1-encoding--building-the-trace`, `section-2-storage--from-synapse-to-system`, and `section-4-when-memory-goes-wrong--reconstructive-memory-errors`. The hand-written cross-links use double hyphens; the generated heading IDs collapse the em-dash to a single hyphen. Self-contained to Chapter 8, three links, and the only linter warning currently outstanding across all 14 chapters.

## Deferred decisions

- **Review-question format:** retain open-response questions with hidden model answers, move toward diagnostic multiple-choice items, or use a deliberate mix by chapter.
- **Sidebar collapse discoverability:** the small unlabeled hamburger icon remains the only way to reopen a collapsed sidebar.
- **Expandable-figure rollout:** reconsider after live review of current chapters; do not expand the pattern automatically.
- **One-time line-ending renormalization:** `.gitattributes` (added 2026-07-25) fixes line-ending handling going forward but does not touch files already committed with CRLF. Running `git add --renormalize .` once would make the repo internally consistent in a single large, noisy commit. Decide whether that churn is worth it, or let the mixed endings age out as files are edited.
- **Optional HANDOFF data-loss forensics:** determine the root cause of the earlier Session 91–93 loss only if the historical explanation becomes operationally useful.
