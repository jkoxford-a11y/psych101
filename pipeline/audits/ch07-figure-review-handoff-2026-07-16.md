# Chapter 7 Figure Review Handoff

**Date:** 2026-07-16  
**Status:** Figure work paused; no chat-generated candidate promoted

## Repository state inspected

The live repository was checked after the Figure 7.4 Work pass, including recent commit history, `HANDOFF.md`, `GPT_project_log.md`, the Chapter 7 source, the Figure 7.4 SVG, the incomplete Chapter 7 figure manifest, and the relevant generated-HTML figure block.

## Figure 7.4 — reinforcement schedules

The deterministic SVG/PNG rebuild is scientifically acceptable for provisional retention.

It correctly distinguishes:

- fixed ratio: post-reinforcement pause followed by a rapid run;
- variable ratio: high, relatively steady responding;
- fixed interval: pause followed by accelerating responding, producing the cumulative scallop;
- variable interval: steady, moderate responding.

The extinction comparison begins each history at 100% of its own baseline, is explicitly illustrative rather than one empirical dataset, and does not impose a universal ordering among the four schedules. The figure explicitly states that acquisition speed is not depicted.

The current Chapter 7 metadata manifest contains only Figure 7.4, and Work narrowly synchronized the Figure 7.4 generated-HTML block. Both remain interim surfaces. Complete the nine-figure metadata batch and full HTML regeneration only after every figure is approved.

## Figure 7.6 — Bandura 1965

The earlier 1961-style candidate remains rejected. Two new candidates were generated in chat but were not saved or promoted.

The final figure must show:

1. all children observe the same aggressive model;
2. the model is rewarded, punished, or receives no consequence;
3. initial performance is lower after model punishment, while rewarded and no-consequence conditions are broadly similar;
4. direct incentives are offered to all children;
5. imitation rises and group differences narrow.

Do not use invented numerical bars, merge the 1961 and 1965 designs, or imply that children expected personal punishment. The central conclusion is that observed consequences affected performance more clearly than acquisition; lower initial imitation did not establish absence of learning.

## Figure 7.8 — Fiorillo uncertainty task

The first two chat candidates were rejected because they used a rat, implied uncertain reward timing, and presented invented empirical-looking firing-rate traces.

The latest candidate is retained only as a design reference. Its useful structure is:

- monkey;
- learned cue;
- fixed delay;
- possible reward;
- 0%, 50%, and 100% reward-probability conditions;
- strongest sustained delay-period activity near 50% reward probability.

Two corrections remain essential:

- learned cues signaled reward probability, so probability was not simply unknown to the monkey;
- sustained delay activity should be described as distinct from the brief phasic cue/outcome prediction-error responses shown in Figure 7.9, not categorically unrelated to prediction error.

Avoid fabricated numerical axes or traces that look like reproduced empirical data.

## Remaining Chapter 7 sequence

1. Finalize Figure 7.6.
2. Finalize Figure 7.8.
3. Reinspect the repository Figure 7.5 binary for the crossed Garcia–Koelling result and a separate evolutionary-interpretation layer.
4. Directly inspect Figures 7.1, 7.2, 7.3, 7.7, and 7.9.
5. Batch-complete `docs/images/ch07/README_captions_alt_text_attribution.md`.
6. Reconcile `source/visuals-inventory.md` and synchronize source captions/alt text.
7. Fully regenerate and validate `docs/chapters/07-learning.html`.

## Next-session routing

Jon requested a Chapter 2 audit in a new chat. Chapter 2 already has an implemented-and-validated audit at `pipeline/audits/ch02-pre-review-audit.md`, associated with canonical revision commit `947a05d6bf0aec079e04d906d9e201143cb8acd2`.

Begin the next session as a **post-revision verification audit**: compare the live source, generated HTML, figures, lab, manifest, prior audit, canonical work order, and commit history. Report any genuine discrepancy before proposing edits; do not mechanically reopen settled prose.
