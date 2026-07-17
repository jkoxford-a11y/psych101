# Psych101 — Current Handoff

**Last updated:** 2026-07-17 (Chapter 3 closed; Chapter 7 figure corrections active)  
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapter 2 — Research Methods and Statistics

Chapter 2 completed its canonical audit/revision cycle on 2026-07-15. The durable audit at `pipeline/audits/ch02-pre-review-audit.md` is marked **implemented and validated** in canonical revision commit `947a05d6bf0aec079e04d906d9e201143cb8acd2`. A narrow post-revision verification and alignment repair was completed on 2026-07-16: Review Question 3 now uses interpretation-and-use validity framing, the lab records but does not score prereveal headline predictions, and the chapter accurately describes the lab's fictional headlines and separate causal judgments.

Current authoritative surfaces:

- source: `source/chapters/ch02-research-methods.md`
- generated HTML: `docs/chapters/02-research-methods.html`
- figure manifest: `docs/images/ch02/README_captions_alt_text_attribution.md`
- lab: `docs/labs/ch02/correlation-causation.html`
- lab script: `docs/js/labs-correlation-causation.js`

The Chapter 2 post-revision verification is complete. Do not reopen the settled architecture, examples, figures, citations, or seven major editorial decisions unless Jon identifies a new specific defect.

### Chapter 3 — Neuroscience and Biological Bases of Behavior

Chapter 3 is complete. It was regenerated from `source/chapters/ch03-neuroscience-biological-bases.md`, and structural validation passed for section order, callouts, figures, internal anchors, review items, glossary, labs, video asset, and scientific framing. The durable record is `pipeline/audits/ch03-post-revision-validation.md`.

Figure 3.9 is approved after direct visual inspection. Its sympathetic and parasympathetic systems remain the two primary columns; fight, flight, freeze, and tend-and-befriend appear in a separate behavioral-response band rather than as autonomic branches.

The final rendering defect was the saltatory-conduction video retaining its 1536-pixel intrinsic width. Jon confirmed the corrected live page worked at desktop, portrait-mobile, and landscape-mobile resolutions. The responsive declarations now live in shared `docs/css/mobile-figure-fix.css`; the temporary runtime sizing block has been removed from `docs/js/figure-expand.js`. The next whole-book release audit should regression-test the shared rule, but Chapter 3 has no remaining chapter-specific blocker.

Do not reopen Chapter 3 unless a later whole-book regression check exposes a concrete defect.

### Chapters 9–13

Canonical revision work is complete. Do not reopen these chapters unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The prose architecture and Classical Conditioning Lab revisions are complete. The authoritative source remains `source/chapters/ch07-learning.md`.

A full canonical regeneration of `docs/chapters/07-learning.html` is still deferred until the nine-figure set is approved. Work narrowly synchronized the Figure 7.4 block and enabled expansion, so the current HTML is a mixed interim artifact rather than a final regenerated page.

## Chapter 7 figure stopping point

Wiring does not imply approval. Chat-generated images are not repository assets unless explicitly saved and promoted.

- **7.1 Classical conditioning:** requires revision. Replace repetition-centered acquisition wording with reliable predictive contingency; clarify that the CR is defined by learning history and need not be physically identical to the UCR; reduce the embedded glossary and repeated prose.
- **7.2 Extinction is not erasure:** requires revision. Preserve return of responding and competing/context-sensitive learning while avoiding literal hidden-strength curves, a uniquely established inhibitory-storage mechanism, and generic stress-as-trigger wording.
- **7.3 Operant conditioning 2×2:** requires revision. Define cells by added/removed consequence plus measured increase/decrease in behavior, not intrinsic pleasantness; shorten the examples and replace the distracting cat-spraying example.
- **7.4 Reinforcement schedules:** scientifically approved/provisionally retained. The deterministic SVG/PNG correctly distinguish fixed-ratio break-and-run responding, variable-ratio high steady responding, fixed-interval scalloping, and variable-interval steady moderate responding. Its extinction panel is normalized to each history's own baseline, is explicitly illustrative, and does not depict acquisition speed. The manifest remains incomplete until the nine-figure batch is reconciled.
- **7.5 Garcia–Koelling:** scientifically approved/provisionally retained after direct binary inspection. It shows the crossed taste→illness and audiovisual→shock result, labels its mini-curves illustrative, and separates the observed selective-learning pattern from the leading evolutionary interpretation. Source/license/alt/public-sharing records still belong in the final metadata batch.
- **7.6 Bandura:** approved and promoted on 2026-07-17. The production SVG/PNG use the five-stage 1965 learning-versus-performance design: same modeled behavior, rewarded/no-consequence/punished observation conditions, lower initial imitation after model punishment, a common direct incentive, and narrowed differences afterward. The figure uses qualitative icons rather than bars, axes, numerical effects, or a 1961 aggressive-versus-nonaggressive comparison. The previous wired PNG is preserved in `docs/images/ch07/candidates/fig_bobo_doll_observational_learning_previous.png`.
- **7.7 Tolman and Honzik:** visually readable and conceptually bounded, but its empirical-looking plotted points lack resolved provenance. Verify them against a documented reproduction of the Tolman–Honzik error data; if exact correspondence cannot be established, redraw the same qualitative pattern as an explicitly schematic trajectory. Preserve the inference boundary that rapid improvement after reward suggests prior learning but does not uniquely establish representational format.
- **7.8 Dopamine uncertainty:** approved and promoted on 2026-07-17. The task-first production SVG/PNG show a monkey, learned 0%/50%/100% reward-probability cues, the same fixed delay and known potential reward time, and qualitative sustained activity strongest near 50%. They avoid firing-rate traces, numerical values, and the claim that reward probability was unknown to the animal. The previous wired PNG is preserved in `docs/images/ch07/candidates/fig_dopamine_uncertainty_curve_previous.png`.
- **7.9 Reward prediction error:** requires revision. Preserve the four-event sequence but narrow the figure to a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks, soften “drives learning” to “can support learning,” and reduce repeated explanatory prose.

The current `docs/images/ch07/README_captions_alt_text_attribution.md` is incomplete and premature because it contains only Figure 7.4. Final metadata remains a nine-figure batch task.

## Immediate next actions

1. Rebuild Figures 7.1, 7.2, 7.3, and 7.9 as clean, original, concept-first SVG/PNG figures using the constraints above.
2. Resolve Figure 7.7 by verifying its plotted values or replacing it with an explicitly schematic original.
3. After all nine Chapter 7 figures are approved, complete the metadata manifest, reconcile `source/visuals-inventory.md`, synchronize source captions/alt text, regenerate the full HTML, and run desktop/mobile/content validation.

## Important files

### Chapter 2

- `pipeline/audits/ch02-pre-review-audit.md`
- `pipeline/work-orders/ch02-canonical-revision.md`
- `source/chapters/ch02-research-methods.md`
- `docs/chapters/02-research-methods.html`
- `docs/images/ch02/README_captions_alt_text_attribution.md`
- `docs/labs/ch02/correlation-causation.html`
- `docs/js/labs-correlation-causation.js`

### Chapter 3

- `pipeline/audits/ch03-pre-review-audit.md`
- `pipeline/audits/ch03-post-revision-validation.md`
- `source/chapters/ch03-neuroscience-biological-bases.md`
- `docs/chapters/03-neuroscience.html`
- `docs/images/ch03/README_captions_alt_text_attribution.md`
- `docs/css/mobile-figure-fix.css`
- `docs/js/figure-expand.js`

### Chapter 7

- `pipeline/audits/ch07-pre-review-audit.md`
- `pipeline/audits/ch07-work-figure-review-package-2026-07-16.md`
- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/images/ch07/`
- `docs/images/ch07/README_captions_alt_text_attribution.md`
- `docs/labs/ch07/classical-conditioning.html`
- `docs/js/labs-classical-conditioning.js`

### Shared

- `docs/images/psych101_figure_style_guide.md`
- `source/visuals-inventory.md`
- `pipeline/html-conversion-spec.md`
- `GPT_project_log.md`
- `PROJECT_BACKLOG.md`
