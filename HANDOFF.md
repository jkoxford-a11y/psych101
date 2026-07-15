# Psych101 — Current Handoff

**Last updated:** 2026-07-15 (Chapter 7 source and lab revision)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapters 2 and 9–13 — canonical revision work complete

Chapter 2 and Chapters 9–13 have completed their current audit/revision cycles. Do not reopen Chapters 9–13 unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 7 — Learning

The pre-review audit is complete at `pipeline/audits/ch07-pre-review-audit.md`.

The authoritative source is `source/chapters/ch07-learning.md`. Its scientific architecture has been revised around two linked ideas:

- learning updates predictions and behavior under biological and environmental constraints;
- learning and current performance are not identical.

Implemented source decisions:

- added predictive contingency so classical conditioning is not reduced to repeated pairing;
- retained Little Albert as a flawed historical illustration rather than definitive evidence;
- calibrated extinction as competing/context-sensitive learning without claiming one literal storage mechanism;
- separated the Garcia–Koelling result from its evolutionary interpretation;
- corrected the reinforcement-schedule account, including the fixed-ratio pattern;
- centered Bandura and Tolman on learning-versus-performance;
- compressed mirror neurons to a brief evidence-boundary note;
- centered Section 4 on reward prediction error and separated uncertainty-related activity, wanting/liking, and broader motivational functions;
- revised objectives, review questions, summary, Connections, Further Reading, References, and glossary.

The Classical Conditioning Simulator is revised at `docs/labs/ch07/classical-conditioning.html` and `docs/js/labs-classical-conditioning.js`. It now uses CS–UCS terminology, labels the curve as a programmed teaching model, and no longer treats its hard-coded recovery rebound as experimental evidence.

`docs/chapters/07-learning.html` has **not** been regenerated. It intentionally remains the pre-revision rendered page until the source and figure set are approved.

### Chapter 7 figure status

Nine figures remain wired in the source as placement/caption targets, but four require binary revision before HTML regeneration:

- Figure 7.4: correct fixed-ratio response pattern and clarify schematic scope.
- Figure 7.5: remove the embedded citation mismatch and separate observed selectivity from evolutionary interpretation.
- Figure 7.6: separate the 1961 aggressive-model comparison from the 1965 model-consequence/direct-incentive design.
- Figure 7.8: distinguish sustained uncertainty-related delay activity from phasic cue/reward prediction-error responses.

Chapter 7 still lacks an authoritative `docs/images/ch07/README_captions_alt_text_attribution.md` manifest. The existing binaries require direct visual inspection before final public-sharing decisions.

## Immediate next actions

1. Inspect the nine Chapter 7 image binaries against the revised source captions and the figure style guide.
2. Rebuild Figures 7.4, 7.5, 7.6, and 7.8; retain or revise the other five only if direct inspection exposes a real problem.
3. Create the Chapter 7 figure manifest with caption, alt text, creation method, attribution, license, public-sharing status, and caveats.
4. Regenerate `docs/chapters/07-learning.html` from the approved source and validate parity, links, figures, review disclosures, glossary, Further Reading, and mobile behavior.
5. Complete Jon's line-by-line Chapter 7 review before moving to unresolved Chapter 5 and Chapter 8 audit implementation.

## Important files

- `pipeline/audits/ch07-pre-review-audit.md`
- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/labs/ch07/classical-conditioning.html`
- `docs/js/labs-classical-conditioning.js`
- `docs/images/ch07/`
- `docs/images/psych101_figure_style_guide.md`
- `source/visuals-inventory.md`
- `PROJECT_BACKLOG.md`
