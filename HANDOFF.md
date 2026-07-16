# Psych101 — Current Handoff

**Last updated:** 2026-07-16 (Chapter 3 regenerated; final live overflow check deferred to tomorrow)
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

Chapter 3 has been added to the shared converter and regenerated from `source/chapters/ch03-neuroscience-biological-bases.md`. Structural validation passed for section order, callouts, figures, internal anchors, review items, glossary, labs, video asset, and generated scientific framing. The durable record is `pipeline/audits/ch03-post-revision-validation.md`.

Figure 3.9 is approved after direct visual inspection. Its sympathetic and parasympathetic systems remain the two primary columns; fight, flight, freeze, and tend-and-befriend appear in a separate behavioral-response band rather than as autonomic branches.

The remaining Chapter 3 issue is narrow: browser diagnostics found horizontal page overflow caused by the saltatory-conduction video retaining its 1536-pixel intrinsic width. Commit `7d27cc9` adds a runtime width constraint through `docs/js/figure-expand.js`, but a post-fix three-viewport Playwright rerun was not completed because GitHub Actions did not execute reliably and the local container could not reach GitHub.

Tomorrow's first task is to rerun the live Chapter 3 page at 1440×900, 390×844, and 844×390; confirm zero horizontal overflow; then move the responsive-video rule into shared CSS and remove the JavaScript fallback if the CSS path is verified.

### Chapters 9–13

Canonical revision work is complete. Do not reopen these chapters unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The prose architecture and Classical Conditioning Lab revisions are complete. The authoritative source remains `source/chapters/ch07-learning.md`.

A full canonical regeneration of `docs/chapters/07-learning.html` is still deferred until the nine-figure set is approved. Work narrowly synchronized the Figure 7.4 block and enabled expansion, so the current HTML is a mixed interim artifact rather than a final regenerated page.

## Chapter 7 figure stopping point

Wiring does not imply approval. Chat-generated images are not repository assets unless explicitly saved and promoted.

- **7.1 Classical conditioning:** provisionally retain; direct binary inspection and metadata still required. Confirm that the image does not reduce conditioning to repetition alone.
- **7.2 Extinction is not erasure:** likely retain; inspect embedded wording for CS–UCS versus CS–CR language and avoid a literal inhibitory-decay mechanism.
- **7.3 Operant conditioning 2×2:** likely retain; confirm that categories are defined by observed behavior change plus added/removed consequence.
- **7.4 Reinforcement schedules:** Work completed the deterministic SVG/PNG rebuild. The actual SVG was inspected. It correctly distinguishes fixed-ratio break-and-run responding, variable-ratio high steady responding, fixed-interval scalloping, and variable-interval steady moderate responding. Its extinction panel is normalized to each history's own baseline, is explicitly illustrative, and does not depict acquisition speed. Treat it as scientifically acceptable/provisionally retained pending final batch reconciliation. Work also prematurely created a Chapter 7 manifest containing only Figure 7.4 and narrowly edited the generated HTML; complete both surfaces only after the full figure set is approved.
- **7.5 Garcia–Koelling:** repository candidate remains unapproved. Reinspect the actual binary. Preserve the crossed result—taste→illness and audiovisual cues→shock—and keep the evolutionary account in a separate leading-interpretation layer.
- **7.6 Bandura:** unresolved. The repository's promoted candidate still must not be accepted merely because it is wired. Two corrected 1965-design candidates were generated in chat but were not saved or promoted. The cleaner candidate shows the correct sequence but still needs a final simplification pass: no invented numerical bars, no 1961 aggressive-versus-nonaggressive comparison, no implication of expected personal punishment, and no claim stronger than learning being revealed when direct incentives raised imitation and narrowed differences.
- **7.7 Tolman and Honzik:** likely retain; direct binary inspection and metadata still required. Preserve the inference boundary that rapid improvement after reward suggests prior learning but does not uniquely establish representational format.
- **7.8 Dopamine uncertainty:** unresolved. Three chat candidates were generated and none was promoted. The latest is a useful design candidate: monkey cue → fixed delay → possible reward, with strongest sustained delay activity near 50% reward probability. It still requires two corrections before final production: the learned cue signaled reward probability, so probability was not simply "unknown to the monkey"; and the figure should say sustained delay activity is distinct from the brief phasic cue/outcome prediction-error responses in Figure 7.9, not categorically "not prediction error." Avoid fabricated empirical-looking firing-rate values.
- **7.9 Reward prediction error:** likely retain; inspect directly and add the scope boundary that it represents a classic pattern in a studied subset of midbrain dopamine neurons under specific reward-learning tasks, not all dopamine activity.

The current `docs/images/ch07/README_captions_alt_text_attribution.md` is incomplete and premature because it contains only Figure 7.4. Final metadata remains a nine-figure batch task.

## Immediate next actions

1. Tomorrow, complete the Chapter 3 live overflow verification and replace the JavaScript video-width fallback with shared CSS if the CSS fix passes all three viewports.
2. When returning to Chapter 7, finalize Figure 7.6, then Figure 7.8, reinspect Figure 7.5, and directly inspect Figures 7.1, 7.2, 7.3, 7.7, and 7.9.
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
- `docs/js/figure-expand.js`

### Chapter 7

- `pipeline/audits/ch07-pre-review-audit.md`
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
