# Psych101 — Current Handoff

**Last updated:** 2026-07-15 (Session 112)
**Canonical repository:** `C:\GitHub\psych101`
**Current branch or PR:** `main`. Jon manually backed up the prior Chapter 9 and Chapter 10 sources and renamed the revised chapters into their canonical source paths before this reconciliation. Chapter 9–11 finalization work is currently in progress and uncommitted pending Jon's review.

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapter 2 — canonical revision complete

The settled Chapter 2 audit has been implemented directly in `source/chapters/ch02-research-methods.md`; no comparison draft or `-2` chapter exists. The chapter now calibrates causal inference, random sampling/assignment, modern reliability/validity, placebo interpretation, animal-research ethics, and introductory statistics consistently across prose and back matter. Figure 2.2's embedded measurement wording was repaired, Figure 2.5 now uses the no-number SVG, and all nine figures and their metadata are reconciled. The correlation/causation lab now scores causal support, reverse-direction plausibility, and third-variable plausibility independently and includes explanation and transfer stages. The canonical HTML was regenerated and passed structural, content, image, responsive-layout, and interaction validation.

**Next Chapter 2 action:** none required for the canonical revision. The only remaining Chapter 2 item is optional cleanup of unused/duplicate image files already recorded in `PROJECT_BACKLOG.md`; active work remains the Chapters 9–13 sequence below.

### Canonical source decisions

The former comparison-draft workflow for Chapters 9 and 10 is over.

- **Chapter 9 canonical source:** `source/chapters/09-thinking-language-intelligence.md`
- **Chapter 9 backup:** `source/chapters/_archive/ch09-thinking-language-intelligence.md`
- **Chapter 10 canonical source:** `source/chapters/ch10-lifespan-development.md`
- **Chapter 10 backup:** `source/chapters/_archive/ch10-lifespan-development.md`
- The former `09-thinking-language-intelligence-2.md`, `ch09-thinking-language-intelligence.md`, and `ch10-lifespan-development-2.md` paths are absent from `main`.

Do not treat either chapter as awaiting promotion. Some source comments and old work-order language still describe the superseded comparison-draft state and should be cleaned during finalization.

### Chapter 9 — canonical revision, finalization incomplete

The revised prose is now the authoritative source. Its conceptual decisions are settled:

- compression remains an explicitly labeled teaching metaphor tied to cognitive constraint and Chapter 8;
- heterogeneous heuristics are not reduced to one mechanism;
- the underdeveloped group-differences passage remains removed;
- language-acquisition, linguistic-relativity, intelligence, Gardner, Sternberg, and Flynn-effect claims remain calibrated;
- the Linda/bank-teller passage and Figure 9.6 remain;
- the Jordan/campus-library SVG remains an unused original asset;
- the former question-substitution Figure 9.9 remains omitted and the bias comparison stays a table.

Remaining work:

1. Remove stale "comparison revision" language and references to nonexistent source paths.
2. Wire `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg` as Figure 9.1.
3. Renumber the IQ standardization figure from 9.10 to 9.9.
4. Update `source/visuals-inventory.md` and Chapter 9 figure metadata/status records.
5. Regenerate `docs/chapters/09-thinking-language-intelligence.html` from the canonical source and validate full source/HTML parity.

### Chapter 10 — canonical revision, figures and final build incomplete

The revised lifespan chapter is now the authoritative source at `source/chapters/ch10-lifespan-development.md`. It retains the long, plastic, expensive human-development spine while treating secondary altriciality, cooperative care, social learning, diet, and brain expansion as interacting contributors rather than one settled causal sequence. Attachment, parenting, pruning, object knowledge, adolescence, and aging are already recalibrated in the source.

The standalone ZPD/fading-support lab exists at `docs/labs/ch10/zpd-fading-support.html` with script `docs/js/labs-zpd-fading-support.js`. It has passed browser, state/privacy, responsive-layout, and semantic-accessibility checks. It should be linked from the final Chapter 10 source and HTML as part of the finalization pass.

Remaining figure work:

- **Figure 10.1:** replace the causal-equation/sequence implication with a model of interacting contributors.
- **Figure 10.3:** narrow to selective stabilization/developmental tuning; remove optimization language and exact-looking developmental windows.
- **Figure 10.6:** approved canonical replacement is in place; perform final rendered-page readability and accessibility review only.
- **Figure 10.7:** label the dual-systems account as a schematic average model and include peers, context, and opportunity.
- **Figure 10.8:** identify curves as schematic group averages and soften the "opposite directions" framing.

After those repairs, regenerate `docs/chapters/10-lifespan-development.html` from the canonical source rather than patching the old generated page.

### Chapter 11 — canonical source revised; generated HTML stale

The authoritative source `source/chapters/ch11-social-psychology.md` has already been revised after the pre-review audit. The replacement Learning Lab, `docs/labs/ch11/change-the-situation.html`, is complete and linked from the source and labs index.

Remaining work:

- revise Figure 11.2 so the unanimous Asch majority is visibly incorrect;
- replace Figure 11.6's exact synthetic correlations with a data-free single-observation versus aggregated-observations design;
- replace Figure 11.7's invented helping scores with a conceptual weak-situation versus strong-situation diagram;
- complete/update Chapter 11 figure metadata and `source/visuals-inventory.md`;
- regenerate `docs/chapters/11-social-psychology.html` from the canonical source;
- confirm the generated page links to `change-the-situation.html` and contains no reference to the deleted "Feed Is Not the World" lab.

### Up next after the Work pass

- **Chapter 12:** revise the canonical source from `pipeline/audits/ch12-pre-review-audit.md`, preserving the body-budget, cognitive-light-cone, coping-fit, and AI-embodiment teaching strengths while correcting constructionism overreach, Patient S.M., stress physiology/GAS figures, and unsupported practical mechanisms.
- **Chapter 13:** run the same pre-review audit sequence, discuss the findings, revise the canonical source, repair figures/labs as needed, and regenerate HTML.

## Immediate next actions

1. Give Work the consolidated Chapters 9–11 finalization prompt and have it complete source cleanup, figure repair, metadata/inventory reconciliation, HTML regeneration, and validation within the stated scope.
2. Review Work's revised figures and live/rendered Chapter 9–11 pages before treating those chapters as final.
3. Revise Chapter 12 from its completed pre-review audit.
4. Audit Chapter 13, discuss the audit, then produce and validate the canonical revision.
5. After Chapters 9–13 are stable, run repository-wide lint, source/HTML parity, figure-path/alt-text checks, and desktop/narrow-mobile visual QA.

## Decisions still deferred

- Whether open-response review questions with hidden model answers should remain the default in revised chapters or later be replaced with authored diagnostic multiple-choice items.
- When to retrofit already-built chapters with the new per-section `.in-section-nav` and descriptive `<h3>` chunking pattern.
- Whether to extend the expandable-figure pattern beyond its current chapters after live-page review.

No further promotion decision is needed for Chapter 9 or Chapter 10. No further decision is needed on Linda, the former Chapter 9 question-substitution figure, or the Chapter 10 attachment replacement.

## Validation and known risks

- The canonical Chapter 9 source still contains stale header/work-order language from its former comparison status; Work must remove it without altering the approved argument.
- The current Chapter 9 and Chapter 10 HTML files predate final source/figure cleanup and are not authoritative.
- The current Chapter 11 HTML predates the revised source and replacement lab and is known to contain the obsolete lab link.
- `source/visuals-inventory.md` is known to drift; cross-check per-chapter metadata and actual files before updating it.
- Chapter 10 reference metadata received selective repair but still needs a final live bibliographic verification before publication.
- The new `h3`/`.in-section-nav` CSS remains deferred and has not been systematically retrofitted or browser-checked across chapters.
- CRLF/LF drift can create misleading broad diffs; use content-aware comparison before treating line-ending changes as substantive.

## Important files

- `source/chapters/09-thinking-language-intelligence.md`
- `pipeline/audits/ch09-pre-review-audit.md`
- `pipeline/audits/ch09-comparison-figure-followup.md` — historically useful but contains stale comparison-path instructions; update or mark completed during finalization
- `source/chapters/ch10-lifespan-development.md`
- `pipeline/audits/ch10-pre-review-audit.md`
- `docs/labs/ch10/zpd-fading-support.html`
- `source/chapters/ch11-social-psychology.md`
- `pipeline/audits/ch11-pre-review-audit.md`
- `docs/labs/ch11/change-the-situation.html`
- `pipeline/audits/ch12-pre-review-audit.md`
- `pipeline/html-conversion-spec.md`
- `pipeline/voice-brief.md`
- `docs/images/psych101_figure_style_guide.md`
- `source/visuals-inventory.md`
- `PROJECT_BACKLOG.md`
- `AGENTS.md`
