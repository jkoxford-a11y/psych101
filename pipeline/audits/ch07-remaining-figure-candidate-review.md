# Chapter 7 Remaining Figure Candidate Review

**Date:** 2026-07-17  
**Scope:** review candidates only; no approval, promotion, wiring, numbering, metadata reconciliation, or Chapter 7 regeneration  
**Batch status:** **candidate awaiting Jon/ChatGPT approval**

All five candidates are original programmatic SVGs with deterministic PNG renders. Every SVG is `width="2400" height="1350" viewBox="0 0 2400 1350"`; every PNG is 2400×1350 pixels. Direct visual inspection was performed on both formats at original size and on 1200×675 renders.

## Figure 7.1 — Classical conditioning as prediction

- **Paths:** `docs/images/ch07/candidates/fig_classical_conditioning_ucs_cs_candidate.svg`; `docs/images/ch07/candidates/fig_classical_conditioning_ucs_cs_candidate.png`
- **Embedded text, visual order:** “Classical conditioning: learning what predicts what”; “Before learning”; “Unlearned relation”; “Food (UCS)”; “Salivation (UCR)”; “Tone”; “does not yet”; “predict food”; “Acquisition”; “Reliable predictive pairing”; “Tone”; “Food”; “Tone improves prediction of food”; “Contingency—not repetition alone—matters.”; “The formerly neutral tone gains”; “predictive meaning.”; “After learning”; “Learned predictive cue”; “Tone (CS)”; “Learned CR”; “The tone now predicts food”; “and evokes conditioned responding.”; “CR and UCR are named by learning history; their form need not be identical.”
- **Instructional job:** Distinguish the unlearned food–response relation from a tone that gains predictive value and later evokes conditioned responding.
- **Scientific rationale and inference boundary:** Acquisition is framed as reliable predictive contingency, not repetition alone; CR/UCR labels are tied to learning history without asserting identical response form.
- **Known limitations:** Uses abstract vector symbols rather than an organism and does not depict formal contingency comparisons.
- **Visual inspection:** Original SVG/PNG and 1200-pixel-wide render are clear; a first-pass clipping risk on “Salivation (UCR)” was corrected before final validation.
- **Checks:** spelling and clipping pass; structure remains interpretable from labels, arrows, panel order, and shapes without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

## Figure 7.2 — Extinction changes performance, not necessarily storage

- **Paths:** `docs/images/ch07/candidates/fig_extinction_not_erasure_candidate.svg`; `docs/images/ch07/candidates/fig_extinction_not_erasure_candidate.png`
- **Embedded text, visual order:** “Extinction changes performance—not necessarily storage”; “Schematic observable responding”; “Experience over time”; “Observed responding”; “Acquisition”; “Extinction”; “Return”; “CS predicts UCS”; “responding develops”; “CS without UCS”; “responding declines”; “After time or context change”; “responding may reappear”; “Extinction adds context-sensitive learning.”; “Reduced responding does not prove erasure.”
- **Instructional job:** Show observable responding developing, declining during CS-without-UCS trials, and sometimes returning after time or context change.
- **Scientific rationale and inference boundary:** The only plotted quantity is explicitly schematic observed responding; the figure does not draw hidden storage traces or claim a uniquely established mechanism.
- **Known limitations:** Collapses spontaneous recovery and renewal into one return phase and does not distinguish their procedures.
- **Visual inspection:** Original SVG/PNG and 1200-pixel-wide render are clear, with phase boundaries and the dashed return trajectory readable.
- **Checks:** spelling and clipping pass; phase labels, line styles, and text preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

## Figure 7.3 — Operant conditioning 2×2

- **Paths:** `docs/images/ch07/candidates/fig_operant_conditioning_2x2_candidate.svg`; `docs/images/ch07/candidates/fig_operant_conditioning_2x2_candidate.png`
- **Embedded text, visual order:** “Classify consequences with two measured changes”; “Consequence added (+)”; “Consequence removed (−)”; “Behavior”; “increases ↑”; “measured later”; “Behavior”; “decreases ↓”; “measured later”; “Positive reinforcement”; “A point is added after an on-time submission.”; “On-time submissions increase.”; “＋ ↑”; “Negative reinforcement”; “Buckling up removes the seatbelt chime.”; “Buckling up increases.”; “− ↑”; “Positive punishment”; “Extra practice is added after rushing.”; “Rushed work decreases.”; “＋ ↓”; “Negative punishment”; “Game time is removed after missing curfew.”; “Missing curfew decreases.”; “− ↓”; “Positive/negative = added/removed. Reinforcement/punishment = behavior increases/decreases.”; “Function depends on the measured behavior change—not on whether an event seems pleasant or unpleasant.”
- **Instructional job:** Classify operant consequences by added/removed events and measured increases/decreases in later behavior.
- **Scientific rationale and inference boundary:** Each example names the consequence operation and later behavioral change; no cell is defined by intrinsic goodness, badness, pleasantness, or unpleasantness.
- **Known limitations:** Examples are simplified, and the same event may function differently across individuals or contexts depending on measured behavior change.
- **Visual inspection:** Original SVG/PNG and 1200-pixel-wide render are clear; cell headings, examples, and symbolic `+`/`−` with arrows remain readable.
- **Checks:** spelling and clipping pass; row/column placement, signs, arrows, and full labels preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

## Figure 7.7 — Tolman and Honzik delayed reward

- **Paths:** `docs/images/ch07/candidates/fig_tolman_cognitive_map_candidate.svg`; `docs/images/ch07/candidates/fig_tolman_cognitive_map_candidate.png`
- **Embedded text, visual order:** “Delayed reward reveals a learning–performance gap”; “Explicitly schematic trajectories—not plotted experimental values”; “Days running the maze”; “Fewer maze errors →”; “more errors”; “fewer errors”; “Reward begins between Days 10 and 11”; “Rewarded from Day 1”; “Never rewarded”; “Reward beginning”; “after Day 10”; “Before reward: similar performance”; “After reward: rapid improvement”; “The pattern suggests learning before performance revealed it.”; “It does not uniquely establish the format of what was learned.”
- **Instructional job:** Show the delayed-reward group resembling the never-rewarded group before reward and improving rapidly once reward begins.
- **Data-provenance investigation and decision:** The current production raster contains empirical-looking daily points but no local value table or source record tying every point to documented values. Tolman’s 1948 primary retrospective reproduces the HR/HNR/HNR-R curves and identifies reward from Day 11, but does not provide a machine-readable point table ([primary retrospective](https://static1.squarespace.com/static/5aee1aeb4611a046d4fd485c/t/616d49352646c56d7b53ca9e/1634552119881/Tolman_1948.pdf)). A documented historical review identifies the reported measure as average blind-alley errors with a constant multiplier and reproduces the published curves, but likewise does not validate the current raster’s exact points ([review and reproduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC2223150/)). Because exact correspondence for every current point could not be established, the work-order fallback was used: explicitly schematic, point-free trajectories with no numerical y-axis.
- **Scientific rationale and inference boundary:** The rapid performance improvement suggests learning before reward made it visible; it does not uniquely prove a literal cognitive-map format or any other single representation.
- **Known limitations:** The curves intentionally omit numerical values, sampling variability, group sizes, and the original error multiplier.
- **Visual inspection:** Original SVG/PNG and 1200-pixel-wide render are clear. The rewarded-from-Day-1 trajectory was corrected during QA so improvement moves toward fewer errors; the delayed trajectory changes rapidly only after the marked reward boundary.
- **Checks:** spelling and clipping pass; line patterns, direct labels, phase marker, and endpoint direction preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

## Figure 7.9 — Reward prediction error

- **Paths:** `docs/images/ch07/candidates/fig_dopamine_prediction_error_schultz_candidate.svg`; `docs/images/ch07/candidates/fig_dopamine_prediction_error_schultz_candidate.png`
- **Embedded text, visual order:** “A classic phasic reward-prediction-error pattern”; “Schematic response in a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks”; “1”; “Unexpected reward”; “Positive response at reward”; “cue”; “reward”; “Better than predicted”; “2”; “Learned cue”; “Positive response shifts to cue”; “cue”; “reward”; “Cue carries the surprise”; “3”; “Expected reward arrives”; “Little error at reward time”; “cue”; “reward”; “Outcome matches prediction”; “4”; “Expected reward omitted”; “Dip at expected reward time”; “cue”; “expected reward”; “Worse than predicted”; “Phasic prediction-error signals can support learning.”; “This brief event-linked pattern is distinct from sustained uncertainty-related activity.”
- **Instructional job:** Distinguish the phasic response to unexpected reward, its shift to a learned cue, little remaining error at expected reward, and the omission-time dip.
- **Scientific rationale and inference boundary:** Scope is limited to a well-studied subset of midbrain dopamine neurons in particular tasks; traces are explicitly schematic, contain no fabricated firing-rate values, and say the signals can support learning.
- **Known limitations:** Idealized traces omit neuron-to-neuron, task, pathway, and timescale variability.
- **Visual inspection:** Original SVG/PNG and 1200-pixel-wide render are clear; cue and reward-time markers, positive peaks, and omission dip remain distinguishable.
- **Checks:** spelling and clipping pass; numbered sequence, event labels, baseline direction, and peak/dip shapes preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

## Batch validation

- Parsed all five SVGs successfully as XML.
- Confirmed all SVG dimensions/viewBoxes and all PNG dimensions are exactly 2400×1350.
- Rendered each PNG deterministically from its corresponding SVG with the same local renderer and settings.
- Opened every SVG-derived PNG directly at original size and approximately 1200 pixels wide; inspected the source SVGs through direct rendering rather than text extraction alone.
- Confirmed no embedded figure numbers, watermarks, external assets, commercial-textbook styling, paragraph-sized prose, or color-only distinctions.
- Confirmed spelling, clipping, label size, `<title>`, `<desc>`, and external-reference checks pass.
- Confirmed production Chapter 7 figures and the existing Figure 7.6/7.8 candidate assets are byte-for-byte unchanged according to repository status/diff checks.
- Confirmed no source chapter, generated HTML, production manifest, visuals inventory, lab, shared CSS, or shared JavaScript file changed.
- `git diff --check` passes.

No candidate is approved by this record. Promotion, wiring, caption/alt-text synchronization, manifest reconciliation, inventory changes, and Chapter 7 regeneration remain separate decisions and tasks.
