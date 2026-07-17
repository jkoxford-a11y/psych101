# Psych101 — Current Handoff

**Last updated:** 2026-07-17 (Chapter 7 candidates ready; Chapter 8 labs wired; Chapter 6 figure work queued)  
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

#### Chapter 7 figure stopping point

Review candidates for Figures 7.1, 7.2, 7.3, 7.7, and 7.9 are ready under `docs/images/ch07/candidates/`; validation and the Figure 7.7 schematic/provenance decision are recorded in `pipeline/audits/ch07-remaining-figure-candidate-review.md`. All remain unapproved candidates. Nothing in this five-figure batch was promoted, wired, or regenerated.

Wiring does not imply approval. Chat-generated images are not repository assets unless explicitly saved and promoted.

- **7.1 Classical conditioning:** candidate now emphasizes predictive contingency rather than repetition and distinguishes UCR from CR by learning history. Needs direct visual review.
- **7.2 Extinction is not erasure:** candidate now presents return of responding and context-sensitive competing learning without literal hidden-strength curves. Needs direct visual review.
- **7.3 Operant conditioning 2×2:** candidate now defines cells by added/removed consequence plus measured increase/decrease in behavior. Needs direct visual review.
- **7.4 Reinforcement schedules:** scientifically approved/provisionally retained. The deterministic SVG/PNG correctly distinguish fixed-ratio break-and-run responding, variable-ratio high steady responding, fixed-interval scalloping, and variable-interval steady moderate responding. Its extinction panel is normalized to each history's own baseline, is explicitly illustrative, and does not depict acquisition speed.
- **7.5 Garcia–Koelling:** scientifically approved/provisionally retained after direct binary inspection. It shows the crossed taste→illness and audiovisual→shock result, labels its mini-curves illustrative, and separates the observed selective-learning pattern from the leading evolutionary interpretation.
- **7.6 Bandura:** approved and promoted on 2026-07-17. The production SVG/PNG use the five-stage 1965 learning-versus-performance design.
- **7.7 Tolman and Honzik:** the new candidate uses the explicitly schematic, point-free fallback because exact correspondence between the prior empirical-looking points and documented primary values could not be established. Reward begins between Days 10 and 11. Needs direct visual review.
- **7.8 Dopamine uncertainty:** approved and promoted on 2026-07-17. The task-first production SVG/PNG show learned 0%/50%/100% reward-probability cues, the same fixed delay and known possible reward time, and qualitative sustained activity strongest near 50%.
- **7.9 Reward prediction error:** candidate narrows the claim to a studied subset of midbrain dopamine neurons in particular reward-learning tasks and uses “can support learning.” Needs direct visual review.

The current `docs/images/ch07/README_captions_alt_text_attribution.md` is incomplete and premature because it contains only Figure 7.4. Final metadata remains a nine-figure batch task.

### Chapter 8 — Memory labs

The two approved lab links are now present in both `source/chapters/ch08-memory.md` and `docs/chapters/08-memory.html`:

- `docs/labs/ch08/levels-of-processing.html` appears immediately after Figure 8.3 and its retrieval prompt.
- `docs/labs/ch08/interactive-imagery.html` appears after the spacing/retrieval-practice paragraph as an applied elaboration activity.
- `docs/labs/ch08/self-reference-effect.html` remains index-only because wiring it prominently would introduce self-schema into an already overloaded Section 1.

The source and generated HTML link text are synchronized. The required end-to-end browser validation was not documented, so Chapter 8 lab integration is **wired but not yet closed**. Live-test both linked labs at desktop, portrait-mobile, and landscape-mobile widths; verify completion, reload/state behavior, reset, keyboard/focus behavior, text logs, results, privacy wording, and return navigation. Keep the Chapter 8 lab item in `PROJECT_BACKLOG.md` until that validation passes.

### Chapter 6 — Flagged figure candidates queued

A candidate-only work order is ready at `pipeline/work-orders/ch06-flagged-figure-candidates.md`. It has not been executed.

The order requires direct inspection of the current production binaries, candidate SVG/PNG rebuilds for Figures 6.2, 6.4, and 6.5, and a retain/simplify decision for Figure 6.1. It forbids production promotion, source/HTML changes, metadata changes, inventory changes, and `HANDOFF.md` edits.

- **6.1:** decision-only review of whether the five-panel opener works as a loose overview or falsely implies discrete sleep jobs.
- **6.2:** correct the SCN pathway and anatomical placement above the optic chiasm in the anterior hypothalamus.
- **6.4:** rebuild as an explicitly schematic hypnogram without assigning fixed biological jobs to early/middle/late blocks.
- **6.5:** distinguish strong animal mechanistic evidence from more indirect, developing human glymphatic evidence.

## Immediate next actions

1. Review Chapter 7 candidates one at a time against `pipeline/audits/ch07-remaining-figure-candidate-review.md`: 7.1 → 7.2 → 7.3 → 7.7 → 7.9. Record explicit approval or requested revision for each.
2. Complete Chapter 8 end-to-end browser validation. Do not mark the lab integration complete merely because the links exist.
3. When a separate Work lane is available, execute `pipeline/work-orders/ch06-flagged-figure-candidates.md` exactly as a candidate-only task.
4. After all nine Chapter 7 figures are approved, complete the metadata manifest, reconcile `source/visuals-inventory.md`, synchronize source captions/alt text, regenerate the full HTML, and run desktop/mobile/content validation.

## Important files

### Chapter 7

- `pipeline/audits/ch07-pre-review-audit.md`
- `pipeline/audits/ch07-work-figure-review-package-2026-07-16.md`
- `pipeline/audits/ch07-remaining-figure-candidate-review.md`
- `pipeline/work-orders/ch07-remaining-figure-candidates.md`
- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/images/ch07/`
- `docs/images/ch07/README_captions_alt_text_attribution.md`

### Chapter 8

- `pipeline/audits/ch08-pre-review-audit.md`
- `pipeline/work-orders/ch08-lab-integration.md`
- `source/chapters/ch08-memory.md`
- `docs/chapters/08-memory.html`
- `docs/labs/ch08/levels-of-processing.html`
- `docs/labs/ch08/interactive-imagery.html`
- `docs/labs/ch08/self-reference-effect.html`

### Chapter 6

- `pipeline/work-orders/ch06-flagged-figure-candidates.md`
- `source/chapters/ch06-sleep.md`
- `docs/chapters/06-sleep.html`
- `docs/images/ch06/`

### Shared

- `docs/images/psych101_figure_style_guide.md`
- `source/visuals-inventory.md`
- `pipeline/html-conversion-spec.md`
- `GPT_project_log.md`
- `PROJECT_BACKLOG.md`
