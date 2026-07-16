# Psych101 — Current Handoff

**Last updated:** 2026-07-16 (Chapter 7 figure revision in progress)
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

Nine figures remain wired in the source as placement/caption targets. Wiring does not imply current approval.

- **7.1 Classical conditioning:** retain provisionally; direct binary inspection and metadata still required. Confirm the image does not reduce conditioning to repetition alone.
- **7.2 Extinction is not erasure:** likely retain; inspect embedded wording for CS–UCS versus CS–CR language and avoid a literal inhibitory-decay mechanism.
- **7.3 Operant conditioning 2×2:** likely retain; confirm categories are defined by observed behavior change plus added/removed consequence.
- **7.4 Reinforcement schedules:** active Work task. Jon wants the attractive four-column teaching grammar of the original figure, but with corrected FR/FI traces and a scientifically calibrated distinction among established response pattern, extinction persistence, and acquisition speed. The Work prompt calls for a deterministic SVG/PNG rebuild, preservation of the canonical filename, source/HTML synchronization, metadata, validation, and a `GPT_project_log.md` entry. Do not duplicate or overwrite Work's in-progress edit. The original four-column image is a visual-layout reference only, not a scientific source.
- **7.5 Garcia–Koelling:** a teaching-forward candidate was generated in chat but is not yet in the repository or approved as final. Preserve the crossed finding—taste→illness and audiovisual cues→shock—while making the evolutionary account a separate leading interpretation rather than something the experiment directly measured. Before promotion, inspect all embedded prose and remove any statement that treats natural selection as the observed result or treats illustrative curves as empirical data.
- **7.6 Bandura:** unresolved. The latest generated candidate is **rejected** because it depicts the 1961 aggressive-versus-nonaggressive model study and adds approximate bar values. The required Figure 7.6 is Bandura's **1965 learning-versus-performance design**: model rewarded, punished, or receiving no consequence; lower initial imitation after model punishment; then direct incentives offered to every child, with imitation rising and group differences narrowing. Do not merge the 1961 and 1965 designs.
- **7.7 Tolman and Honzik:** likely retain; direct binary inspection and metadata still required. Preserve the inference boundary: rapid improvement after reward suggests prior learning but does not uniquely establish the representational format.
- **7.8 Dopamine uncertainty:** still requires rebuilding. It must separate sustained delay-period activity associated with uncertainty in the Fiorillo task from phasic cue/reward/omission reward-prediction-error signals. Do not use “dopamine causes focus and attention” or a general “dopamine peaks during uncertain anticipation” claim.
- **7.9 Reward prediction error:** likely retain; inspect directly and add a scope boundary that it represents a classic pattern in a studied subset of midbrain dopamine neurons under specific reward-learning tasks, not all dopamine activity.

Chapter 7 still lacks an authoritative `docs/images/ch07/README_captions_alt_text_attribution.md` manifest. Jon decided to batch captions, alt text, creation method, attribution, license/public-sharing status, and caveats after the replacement figures are approved rather than recording metadata one figure at a time.

Generated chat images are not repository assets unless explicitly saved and promoted. Do not infer that the Garcia–Koelling or rejected Bandura candidate is already present in `docs/images/ch07/`.

## Immediate next actions

1. Let Work finish Figure 7.4. Review its actual SVG/PNG and validation report before accepting the replacement.
2. Build Figure 7.6 around Bandura's 1965 model-consequence/direct-incentive design. Reject any 1961-only figure or invented quantitative bars.
3. Rebuild Figure 7.8 to distinguish sustained uncertainty-related delay activity from phasic reward prediction error.
4. Reinspect the Figure 7.5 candidate for embedded-text accuracy and either promote it or revise it.
5. Directly inspect Figures 7.1, 7.2, 7.3, 7.7, and 7.9; retain or revise only on evidence from the binaries.
6. Batch-create `docs/images/ch07/README_captions_alt_text_attribution.md`, reconcile the Chapter 7 section of `source/visuals-inventory.md`, and synchronize source captions/alt text.
7. Regenerate `docs/chapters/07-learning.html` only after the revised figure set is approved. Validate source/HTML parity, image paths, nonempty alt text, expandable behavior, links, review disclosures, glossary, Further Reading, lab flow, and desktop/mobile rendering.
8. Complete Jon's line-by-line Chapter 7 review before moving to unresolved Chapter 5 and Chapter 8 audit implementation.

## Important files

- `pipeline/audits/ch07-pre-review-audit.md`
- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/labs/ch07/classical-conditioning.html`
- `docs/js/labs-classical-conditioning.js`
- `docs/images/ch07/`
- `docs/images/psych101_figure_style_guide.md`
- `source/visuals-inventory.md`
- `GPT_project_log.md`
- `PROJECT_BACKLOG.md`
