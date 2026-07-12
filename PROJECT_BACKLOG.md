# Psych101 Project Backlog

Durable future and deferred work that isn't part of the immediately active task. See `HANDOFF.md` for what's active right now and `AGENTS.md` for how these files relate. Remove items only after verifying against current repository state, not by assumption.

## Editorial review

- **Ch3 full line-by-line editorial pass** — Sections 3–4 and the back matter still haven't had the same review Section 1/2 already got.
- **Review and commit Ch11's Connections table + Stop & Retrieve conversion** (`source/chapters/ch11-social-psychology.md`, `docs/chapters/11-social-psychology.html`) — content is linter-clean (0 fails, 0 warns) but the 6 Connections rows and 5 callout prompts are newly authored and haven't had Jon's editorial pass.
- Most/all of Ch2–13 markdown drafts are content-complete but still awaiting Jon's full line-by-line editorial review.

## Labs and demonstrations

- **Live-test the four new Ch4 labs** (Signal Detection, Weber's Law, Blind-Spot Filling-In, Context-and-Ambiguous-Perception) in a real browser — built and wired, never click-tested.
- **Build the size-weight illusion lab** (or drop the placeholder) — still says "when available" in both Ch4 files; no such lab exists in `docs/labs/ch04/`.
- **Live-test both Chapter 3 labs** in a real browser at desktop, portrait-mobile, and landscape-mobile widths — complete each lab, reload mid-session, verify focus/state restoration, restart behavior, labels, and cue/outcome trace rendering.
- **Merge or reapply the Ch6 lab-links branch** (`agent/ch06-learning-labs-2`, PR #1) — links two new Chapter 6 labs (`docs/labs/ch06/process-s-process-c.html`, `docs/labs/ch06/sleep-state-detective.html`) into `source/chapters/ch06-sleep.md`. Not yet on `main`.

## Figures and visual assets

- **Optional Ch2 image-folder cleanup** — `docs/images/ch02/` still has pre-existing orphaned/duplicate files not part of a prior pass's explicit archive list (e.g. `fig2-5-sampling-vs-assignment.png/.svg`, `fig_evidence_ladder.png`, `fig_double_blind_placebo.png`, `fig_operational_definition_reliability_validity.png`, `fig_type_i_type_ii_error_matrix.png`) — not yet authorized.
- **Ch10 Lifespan figures:** 8 figures built but have real defects (label boxes overlapping plotted lines) — fix list at `docs/images/ch10/ch10_figure_revisions.md`. Nothing wired yet.
- `source/visuals-inventory.md` is known to drift out of sync with per-chapter image state — cross-check per-chapter `docs/images/chXX/README*.md` files before trusting it.

## HTML and rendering

- **Verify the two mobile fixes on an actual phone, both orientations** (`docs/css/style.css`, `docs/js/sidebar.js`) — sidebar visibility/reopen and expanded-figure clipping. Logic-tested in a jsdom simulation only; no real device or browser confirmation yet.
- **Ch2 expandable figures (2.1, 2.2, 2.3, 2.7, 2.9):** expand/collapse mechanic works; mobile-clipping fix is pending device verification (see above). Caption legibility on mobile still not specifically checked.
- **Ch10 review-q markup:** convert its 12 review questions to the `<details>/<summary>` collapsible pattern (currently non-collapsible, confirmed by linter) — also add Stop & Retrieve (currently 0, same gap Ch9 had before its fix).
- **Commit and push Session 87's Prologue edit** (`docs/chapters/prologue.html`, new image `docs/images/prologue/fig_interactive_imagery_book_ocean.png`) and verify Figure P.5 renders/expands correctly on the live site — not yet checked in a browser.
- **Verify the live GitHub Pages site** for the six previously-restored chapters (07, 08, 09, 10, 12, 13) plus the Ch9 figure-expand feature — still not checked against the deployed site.
- **Ch6 Sleep → HTML:** no HTML built yet; needs a first build once Jon has reviewed the markdown.

## Repository and workflow

- **Continue `pipeline/sonnet5-improvement-plan.md`** — Task 0 (linter) and Task 1 (Ch11 parity) are done; next is the remaining Task 0.5 context-hygiene items, then retrieval/review density → glossary linking + print CSS (the `<mark>` weight-bearing-claims treatment needs a grayscale-print check once built) → global glossary/search → template extraction.
- **Audit the Session 80 sidebar-swap script.** Confirmed casualties include six chapter files (07/08/09/10/12/13, fixed), `docs/index.html` (was severely truncated, undetected for ~6 sessions), and 3 lab HTML files (trivially truncated). Worth a full sweep of all 18 files that script touched rather than assuming these were the last casualties.
- **Delete/disconnect the stale OneDrive copy** (`C:\Users\oxfor\OneDrive\Docs\GitHub\psych101` / `old_psych101`) from Cowork's connected folders — still connected, still a false-start risk. (See canonical-path caution in `pipeline/claude-work-environment.md`.)
- **Review `pipeline/chatgpt-instructions.md`'s new content** — restructured version never explicitly reviewed/approved by Jon.

## Deferred decisions

- **Sidebar collapse discoverability.** Small unlabeled hamburger icon is the only way to reopen a collapsed sidebar — open UX decision for Jon.
- **Roll out the expandable-figure pattern further?** (e.g. Ch10 Lifespan, Ch12 Emotion) — only Ch9 and the prologue use it so far, and the breakout margin recently got bigger; worth a fresh look at whether Ch9's figures now look too wide before extending the pattern.
- **Optional: confirm root cause of the Session 91–93 HANDOFF.md data loss** (recovery is done and verified in `HANDOFF-ARCHIVE.md`; this is forensics only, low priority — same call made for a similar earlier loss).
