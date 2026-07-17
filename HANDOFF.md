# Psych101 — Current Handoff

**Last updated:** 2026-07-17 (Chapter 7 image work paused; Chapter 1 audit is the active non-image lane)  
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `pipeline/audits/ch07-image-work-pause-2026-07-17.md` for the Chapter 7 stopping point.

## Current state

### Chapter 2 — Research Methods and Statistics

Chapter 2 completed its canonical audit/revision cycle and post-revision verification. The durable audit is `pipeline/audits/ch02-pre-review-audit.md`; the current source, generated HTML, figure manifest, and lab are aligned. Do not reopen settled Chapter 2 decisions unless Jon identifies a specific defect.

### Chapter 3 — Neuroscience and Biological Bases of Behavior

Chapter 3 is complete and validated. The durable record is `pipeline/audits/ch03-post-revision-validation.md`. The saltatory-conduction video now behaves responsively at desktop, portrait-mobile, and landscape-mobile widths. Do not reopen Chapter 3 absent a concrete regression.

### Chapters 9–13

Canonical revision work is complete. Do not reopen these chapters unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The prose architecture and Classical Conditioning Lab revisions are complete. The authoritative source remains `source/chapters/ch07-learning.md`.

A full canonical regeneration of `docs/chapters/07-learning.html` remains deferred until the nine-figure set is approved. The current HTML is a mixed interim artifact.

#### Production-versus-candidate selections

- **7.1 Classical conditioning:** retain production; candidate not selected.
- **7.2 Extinction is not erasure:** candidate approved for later controlled promotion.
- **7.3 Operant conditioning 2×2:** retain production; candidate not selected.
- **7.4 Reinforcement schedules:** scientifically approved/provisionally retained.
- **7.5 Garcia–Koelling:** scientifically approved/provisionally retained.
- **7.6 Bandura:** approved and promoted.
- **7.7 Tolman and Honzik:** unresolved and image work paused.
- **7.8 Dopamine uncertainty:** approved and promoted.
- **7.9 Reward prediction error:** candidate approved for later controlled promotion.

#### Figure 7.7 stopping point

The current production graph remains wired and visually readable, but its precise empirical-looking daily points are not tied to a documented value table or verified reconstruction. Jon selected the schematic route in principle. The candidate axis label was changed to neutral `Maze errors` in commit `8007fb2`, but the revised render contains overlapping elements and is **not approved**.

Do not treat the Figure 7.7 candidate as ready for promotion. Resume from direct inspection of the actual SVG and PNG, identify the overlaps, and reassess the layout at full size and chapter width. The durable pause record is `pipeline/audits/ch07-image-work-pause-2026-07-17.md`.

No Chapter 7 candidates should be promoted, no full HTML regeneration should occur, and the nine-figure metadata batch should remain deferred until Figure 7.7 is resolved.

### Chapter 8 — Memory labs

The levels-of-processing and interactive-imagery labs are wired in both source and generated HTML. The self-reference lab remains index-only. End-to-end browser validation is still undocumented; completion, reload/state behavior, reset, keyboard/focus behavior, logs/results, privacy wording, and return navigation remain to be tested at desktop, portrait-mobile, and landscape-mobile widths.

### Chapter 6 — Flagged figure candidates

The candidate-only work order at `pipeline/work-orders/ch06-flagged-figure-candidates.md` has not been executed. Because the active lane is intentionally moving away from image work, leave this queued.

### Chapter 1 — History and Approaches

This is the active non-image lane. Begin with a read-only pre-review audit of:

- `source/chapters/ch01-history-approaches.md`
- `docs/chapters/01-history-approaches.html`
- `source/chapters/_provenance/ch01-history-approaches.md`
- relevant chapter-spec, voice, figure inventory, and conversion files

The audit should address the chapter’s core argument, two-week takeaways, cognitive load, organization, accuracy, references, teachability, figures already present, chatbot prompts, and possible Learning Labs. Do not revise the source or HTML during the audit.

## Immediate next actions

1. Run the Chapter 1 read-only pre-review audit and save it under `pipeline/audits/`.
2. Discuss the audit with Jon before drafting or implementing revisions.
3. Keep Chapter 7 image work paused until Jon explicitly reopens it.
4. Complete Chapter 8 live lab validation when a browser-testing session is available.
5. Leave Chapter 6 image candidates queued while the project is deliberately working in a non-image lane.

## Important files

### Active Chapter 1 lane

- `source/chapters/ch01-history-approaches.md`
- `docs/chapters/01-history-approaches.html`
- `source/chapters/_provenance/ch01-history-approaches.md`
- `pipeline/chapter-spec.md`
- `pipeline/html-conversion-spec.md`
- `pipeline/voice-brief.md`
- `source/visuals-inventory.md`

### Paused Chapter 7 lane

- `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
- `pipeline/audits/ch07-remaining-figure-candidate-review.md`
- `pipeline/audits/ch07-pre-review-audit.md`
- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/images/ch07/`

### Shared

- `AGENTS.md`
- `GPT_project_log.md`
- `PROJECT_BACKLOG.md`
- `docs/images/psych101_figure_style_guide.md`
