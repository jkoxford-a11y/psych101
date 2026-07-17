# Psych101 Project Backlog

Durable future and deferred work that is not part of the immediately active task. See `HANDOFF.md` for the active Chapters 9–13 sequence and `AGENTS.md` for how the project-state files relate. Remove items only after verifying against current repository state.

## Editorial review

- **Chapter 3 full line-by-line editorial pass** — Sections 3–4 and the back matter still have not received the same instructor review as Sections 1–2.
- **Instructor line-by-line review across Chapters 2–13** — the current audit/revision sequence addresses conceptual accuracy and cognitive load, but most chapters will still benefit from a later sentence-level teaching pass after their canonical sources and figures stabilize.
- **Review Chapter 11’s newly authored Connections rows and retrieval prompts** during the final instructor pass. They are canonical source content now, not uncommitted work.

## Labs and demonstrations

- **Live-test the four Chapter 4 labs** in a real browser: Signal Detection, Weber’s Law, Blind-Spot Filling-In, and Context-and-Ambiguous-Perception.
- **Build the size–weight illusion lab or remove the placeholder** — both Chapter 4 files still say “when available,” but no such lab exists in `docs/labs/ch04/`.
- **Live-test both Chapter 3 labs** at desktop, portrait-mobile, and landscape-mobile widths, including completion, mid-session reload, focus/state restoration, reset, labels, and cue/outcome traces.
- **Finish the Chapter 8 keyboard-only spot-check** — functional, state, feedback, focus-transition, navigation-path, console, and responsive browser testing is recorded in `pipeline/audits/ch08-lab-validation.md`; a human Tab/Shift+Tab and Enter/Space pass remains because the available browser controller could not synthesize keyboard navigation reliably.
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

- **Continue `pipeline/sonnet5-improvement-plan.md`** — remaining context-hygiene work, retrieval/review density, glossary linking, print CSS, global glossary/search, and template extraction.
- **Audit the Session 80 sidebar-swap script’s full affected-file set** rather than assuming the already-repaired casualties were exhaustive.
- **Delete or disconnect the stale OneDrive repository copy** (`C:\Users\oxfor\OneDrive\Docs\GitHub\psych101` / `old_psych101`) from Cowork-connected folders.
- **Review `pipeline/chatgpt-instructions.md`** — the restructured version has not received explicit instructor approval.
- **Clean stale work orders after execution** — old comparison-draft paths and completed instructions should be updated, marked superseded, or archived so future agents do not follow them literally.

## Deferred decisions

- **Review-question format:** retain open-response questions with hidden model answers, move toward diagnostic multiple-choice items, or use a deliberate mix by chapter.
- **Sidebar collapse discoverability:** the small unlabeled hamburger icon remains the only way to reopen a collapsed sidebar.
- **Expandable-figure rollout:** reconsider after live review of current chapters; do not expand the pattern automatically.
- **Optional HANDOFF data-loss forensics:** determine the root cause of the earlier Session 91–93 loss only if the historical explanation becomes operationally useful.
