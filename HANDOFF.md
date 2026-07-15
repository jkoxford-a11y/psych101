# Psych101 — Current Handoff

**Last updated:** 2026-07-15 (Chapter 12 canonical revision)
**Canonical repository:** `C:\GitHub\psych101`
**Current branch:** `main`; Chapter 12 work is uncommitted for Jon's normal review and commit workflow.

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapter 2 — canonical revision complete

The canonical research-methods source, generated HTML, nine-figure set, and correlation/causation lab are complete and validated. Optional cleanup of unused Chapter 2 image assets remains in `PROJECT_BACKLOG.md`; it is not a publication blocker.

### Chapters 9–11 — canonical finalization complete

The former comparison-draft workflow is over. Chapter 9 is canonical at `source/chapters/09-thinking-language-intelligence.md`; Chapter 10 is canonical at `source/chapters/ch10-lifespan-development.md`; Chapter 11 is canonical at `source/chapters/ch11-social-psychology.md`. Their approved source cleanup, figure repairs, lab links, metadata/inventory reconciliation, HTML regeneration, and validation were completed on 2026-07-15. Do not reopen those chapters unless Jon identifies a specific rendered-page or editorial issue.

### Chapter 12 — canonical revision complete; awaiting Jon's visual review

The authoritative source `source/chapters/ch12-emotion-stress-coping.md` now reflects the settled audit decisions and has been regenerated into `docs/chapters/12-emotion-stress-coping.html`.

Key decisions now implemented:

- Constructionism remains the chapter's organizing lens but is identified once as an influential, debated framework. Shared findings about bodily state, appraisal, context, learning, concepts, and distributed processing are separated from constructionist interpretation.
- Homeostasis and allostasis are complementary; body budget is explicitly a metaphor/framework rather than one measurable account.
- Core affect remains Russell's valence-by-arousal model and is not presented as the established raw material of every emotion.
- Patient S.M.'s faces, snakes/spiders, haunted-house, frightening-film, and personal-space findings remain, with the decisive CO₂ fear/panic boundary added.
- SAM and HPA timing and functions are separated; chronic stress is described as multisystem dysregulation; GAS remains a historical heuristic while allostatic load supplies the contemporary cumulative-cost account.
- Affect labeling, emotional granularity, oxytocin/social support, sleep, movement, nutrition, and hedonic adaptation claims are narrowed to the evidence actually retained.
- Coping is organized around controllability, arousal, timing, resources, and flexibility. The review now contains nine open-response questions with hidden model answers.

All four figures were replaced with original programmatic SVG/PNG diagrams and documented in `docs/images/ch12/README_captions_alt_text_attribution.md`. Figure 12.1 removes the literal tank; Figure 12.2 uses a model-neutral circumplex takeaway; Figure 12.3 separates fast SAM and slower HPA routes; Figure 12.4 removes the fictional depletion curve and contrasts historical GAS with recovery and allostatic load. Status is use now pending Jon's final visual judgment.

The standalone coping-fit lab is complete at `docs/labs/ch12/coping-fit.html` with `docs/js/labs-coping-fit.js`. It requires prediction, four scenario classifications, immediate mechanism feedback, an explanation gate, transfer to a nonclinical scenario, and a completion reflection distinguishing response regulation from stressor change. It uses one session-only storage key, no diagnostic score, no identifiers, analytics, or network submission. It is linked from the source, generated chapter, and labs index.

The checked-in converter now includes Chapter 12, removes author-only HTML comments before conversion, and separates Markdown Further Reading entries correctly. Chapter 12 passes the repository linter with zero failures and zero warnings. Static validation found no broken local links, image failures, empty/leading-dash alt text, author-note leakage, mojibake, or missing ARIA targets. Browser checks at desktop and 390-pixel widths found no page overflow or console errors; the full lab sequence, session restoration behavior, explanation/transfer gates, and reset were exercised. Jon should still inspect final figure label size and the live/actual-device rendering after publication.

### Chapter 13 — audit exists; discussion and revision are next

The Chapter 13 pre-review audit already exists. Do not repeat the audit. The next editorial step is to discuss its findings with Jon, settle any decisions, then revise the canonical Chapter 13 source, figures/labs as approved, and regenerate its HTML.

## Immediate next actions

1. Jon reviews the final Chapter 12 page and Figures 12.1–12.4, especially label readability and visual hierarchy.
2. Discuss the existing Chapter 13 pre-review audit and settle the revision decisions.
3. Execute and validate the canonical Chapter 13 revision.
4. After Chapter 13 is stable, run the planned repository-wide lint, source/HTML parity, links/figures/alt-text, live Pages, and actual-phone checks.

## Important files

- `source/chapters/ch12-emotion-stress-coping.md`
- `docs/chapters/12-emotion-stress-coping.html`
- `docs/images/ch12/README_captions_alt_text_attribution.md`
- `docs/labs/ch12/coping-fit.html`
- `pipeline/audits/ch13-pre-review-audit.md`
- `PROJECT_BACKLOG.md`
