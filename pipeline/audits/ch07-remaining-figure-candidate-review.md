# Chapter 7 Remaining Figure Candidate Review

**Date:** 2026-07-17  
**Correction:** 2026-07-17 production/candidate identity reconciliation  
**Scope:** candidate review and explicit selection against the currently wired production assets; no promotion, wiring, numbering, metadata reconciliation, or Chapter 7 regeneration  
**Batch selection status:** **retain production Figures 7.1 and 7.3; approve candidate Figures 7.2 and 7.9 for later controlled promotion; Figure 7.7 remains unresolved because the production graph is visually acceptable but its exact plotted-point provenance is not documented**

## Asset-identity rule

This record distinguishes two different objects that share each figure number:

- **Production figure:** the asset at `docs/images/ch07/fig_*.png` currently wired into the chapter.
- **Candidate figure:** the alternative SVG/PNG pair under `docs/images/ch07/candidates/`.

A defect in a candidate is not a defect in the production figure. Creating or reviewing a candidate does not establish that the production figure should be replaced. Every decision below therefore states both the candidate judgment and the production-selection judgment.

All five candidates are original programmatic SVGs with deterministic PNG renders. Every SVG is `width="2400" height="1350" viewBox="0 0 2400 1350"`; every PNG is 2400×1350 pixels. For the candidate review, each SVG was opened and rendered directly at full size and at approximately 1200×675. Each corresponding PNG repository object was separately fetched to confirm that the candidate binary exists at 2400×1350 and is the current tracked object. Mechanical validation was not treated as approval.

## Figure 7.1 candidate — Classical conditioning as prediction

- **Candidate paths:** `docs/images/ch07/candidates/fig_classical_conditioning_ucs_cs_candidate.svg`; `docs/images/ch07/candidates/fig_classical_conditioning_ucs_cs_candidate.png`
- **Production path:** `docs/images/ch07/fig_classical_conditioning_ucs_cs.png`
- **Embedded candidate text, visual order:** “Classical conditioning: learning what predicts what”; “Before learning”; “Unlearned relation”; “Food (UCS)”; “Salivation (UCR)”; “Tone”; “does not yet”; “predict food”; “Acquisition”; “Reliable predictive pairing”; “Tone”; “Food”; “Tone improves prediction of food”; “Contingency—not repetition alone—matters.”; “The formerly neutral tone gains”; “predictive meaning.”; “After learning”; “Learned predictive cue”; “Tone (CS)”; “Learned CR”; “The tone now predicts food”; “and evokes conditioned responding.”; “CR and UCR are named by learning history; their form need not be identical.”
- **Instructional job:** Distinguish the unlearned food–response relation from a tone that gains predictive value and later evokes conditioned responding.
- **Scientific rationale and inference boundary:** Acquisition is framed as reliable predictive contingency, not repetition alone; CR/UCR labels are tied to learning history without asserting identical response form.
- **Known limitations:** Uses abstract vector symbols rather than an organism and does not depict formal contingency comparisons.
- **Candidate visual inspection:** The three-phase organization is readable, and the acquisition panel correctly emphasizes predictive contingency. The response symbols are abstract, but the labels and the separately drawn tone icon prevent a clear stimulus–response confusion. The earlier claim that the symbols necessarily read as sound waves was too strong.
- **Production comparison and selection:** Jon inspected the live production figure and did not see the cited wave-symbol ambiguity. The original Chapter 7 pre-review audit classified the production figure as usable after metadata and visual checking. The production figure is retained; the candidate is not selected.
- **Checks:** spelling and clipping pass; structure remains interpretable from labels, arrows, panel order, and shapes without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **retain production; candidate not selected.** No candidate revision is queued.

## Figure 7.2 candidate — Extinction changes performance, not necessarily storage

- **Candidate paths:** `docs/images/ch07/candidates/fig_extinction_not_erasure_candidate.svg`; `docs/images/ch07/candidates/fig_extinction_not_erasure_candidate.png`
- **Embedded candidate text, visual order:** “Extinction changes performance—not necessarily storage”; “Schematic observable responding”; “Experience over time”; “Observed responding”; “Acquisition”; “Extinction”; “Return”; “CS predicts UCS”; “responding develops”; “CS without UCS”; “responding declines”; “After time or context change”; “responding may reappear”; “Extinction adds context-sensitive learning.”; “Reduced responding does not prove erasure.”
- **Instructional job:** Show observable responding developing, declining during CS-without-UCS trials, and sometimes returning after time or context change.
- **Scientific rationale and inference boundary:** The only plotted quantity is explicitly schematic observed responding; the figure does not draw hidden storage traces or claim a uniquely established mechanism.
- **Known limitations:** Collapses spontaneous recovery and renewal into one return phase and does not distinguish their procedures.
- **Candidate visual inspection:** The phase structure, observed-response curve, dashed return trajectory, and context/time qualifier are clear at textbook and reduced viewing sizes. The figure corrects the erasure misconception without depicting an unobservable association-strength mechanism as literal fact.
- **Checks:** spelling and clipping pass; phase labels, line styles, and text preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate approved on 2026-07-17 for later controlled promotion.** No promotion, wiring, or metadata work was performed in this review.

## Figure 7.3 candidate — Operant conditioning 2×2

- **Candidate paths:** `docs/images/ch07/candidates/fig_operant_conditioning_2x2_candidate.svg`; `docs/images/ch07/candidates/fig_operant_conditioning_2x2_candidate.png`
- **Production path:** `docs/images/ch07/fig_operant_conditioning_2x2.png`
- **Embedded candidate text, visual order:** “Classify consequences with two measured changes”; “Consequence added (+)”; “Consequence removed (−)”; “Behavior”; “increases ↑”; “measured later”; “Behavior”; “decreases ↓”; “measured later”; “Positive reinforcement”; “A point is added after an on-time submission.”; “On-time submissions increase.”; “＋ ↑”; “Negative reinforcement”; “Buckling up removes the seatbelt chime.”; “Buckling up increases.”; “− ↑”; “Positive punishment”; “Extra practice is added after rushing.”; “Rushed work decreases.”; “＋ ↓”; “Negative punishment”; “Game time is removed after missing curfew.”; “Missing curfew decreases.”; “− ↓”; “Positive/negative = added/removed. Reinforcement/punishment = behavior increases/decreases.”; “Function depends on the measured behavior change—not on whether an event seems pleasant or unpleasant.”
- **Instructional job:** Classify operant consequences by added/removed events and measured increases/decreases in later behavior.
- **Scientific rationale and inference boundary:** Each example names the consequence operation and later behavioral change; no cell is defined by intrinsic goodness, badness, pleasantness, or unpleasantness.
- **Known limitations:** Examples are simplified, and the same event may function differently across individuals or contexts depending on measured behavior change.
- **Candidate visual inspection:** The matrix, examples, row/column logic, and bottom diagnostic rule are clear. The candidate title “two measured changes” is conceptually awkward because added/removed describes the consequence operation, whereas the later increase/decrease is the measured functional effect. The full-width plus glyph also creates renderer portability risk.
- **Production comparison and selection:** These are candidate-specific issues. Jon inspected the live production figure and did not see either defect, and the original pre-review audit classified the production figure as usable after metadata and visual checking. The current chapter caption already frames the classification as two questions. The production figure is retained; the candidate is not selected.
- **Checks:** spelling and clipping otherwise pass; row/column placement, signs, arrows, and full labels preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **retain production; candidate not selected.** Do not spend time revising the candidate unless the production decision is explicitly reopened.

## Figure 7.7 candidate — Tolman and Honzik delayed reward

- **Candidate paths:** `docs/images/ch07/candidates/fig_tolman_cognitive_map_candidate.svg`; `docs/images/ch07/candidates/fig_tolman_cognitive_map_candidate.png`
- **Production path:** `docs/images/ch07/fig_tolman_cognitive_map.png`
- **Embedded candidate text, visual order:** “Delayed reward reveals a learning–performance gap”; “Explicitly schematic trajectories—not plotted experimental values”; “Days running the maze”; “Fewer maze errors →”; “more errors”; “fewer errors”; “Reward begins between Days 10 and 11”; “Rewarded from Day 1”; “Never rewarded”; “Reward beginning”; “after Day 10”; “Before reward: similar performance”; “After reward: rapid improvement”; “The pattern suggests learning before performance revealed it.”; “It does not uniquely establish the format of what was learned.”
- **Instructional job:** Show the delayed-reward group resembling the never-rewarded group before reward and improving rapidly once reward begins.
- **Data-provenance investigation:** The production raster contains empirical-looking daily points but no local value table or source record tying every point to documented values. Tolman’s 1948 primary retrospective reproduces the HR/HNR/HNR-R curves and identifies reward from Day 11, but does not provide a machine-readable point table ([primary retrospective](https://static1.squarespace.com/static/5aee1aeb4611a046d4fd485c/t/616d49352646c56d7b53ca9e/1634552119881/Tolman_1948.pdf)). A documented historical review identifies the reported measure as average blind-alley errors with a constant multiplier and reproduces the published curves, but likewise does not validate the production raster’s exact points ([review and reproduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC2223150/)).
- **Scientific rationale and inference boundary:** The rapid performance improvement suggests learning before reward made it visible; it does not uniquely prove a literal cognitive-map format or any other single representation.
- **Production visual judgment:** Jon’s direct inspection of the live production graph found no axis-direction or readability defect. Visually, it remains the preferred figure.
- **Candidate visual judgment:** The schematic fallback avoids undocumented numerical points and makes its inferential boundary explicit, but its rotated “Fewer maze errors →” label points toward the region marked “more errors.” If the schematic route is selected, replace that label with neutral “Maze errors.”
- **Release decision still required:** Keep the production graph provisionally for visual review, but do not treat it as finally approved for public release until its plotted values are documented or the project explicitly chooses a schematic fallback. The candidate should not be revised merely because it exists; revise it only if the schematic route is selected.
- **Checks:** spelling and clipping otherwise pass; line patterns, direct labels, phase marker, and endpoint direction preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **unresolved production-provenance decision.** Production is visually acceptable; candidate is an unselected fallback with one minor label repair if chosen.

## Figure 7.9 candidate — Reward prediction error

- **Candidate paths:** `docs/images/ch07/candidates/fig_dopamine_prediction_error_schultz_candidate.svg`; `docs/images/ch07/candidates/fig_dopamine_prediction_error_schultz_candidate.png`
- **Embedded candidate text, visual order:** “A classic phasic reward-prediction-error pattern”; “Schematic response in a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks”; “1”; “Unexpected reward”; “Positive response at reward”; “cue”; “reward”; “Better than predicted”; “2”; “Learned cue”; “Positive response shifts to cue”; “cue”; “reward”; “Cue carries the surprise”; “3”; “Expected reward arrives”; “Little error at reward time”; “cue”; “reward”; “Outcome matches prediction”; “4”; “Expected reward omitted”; “Dip at expected reward time”; “cue”; “expected reward”; “Worse than predicted”; “Phasic prediction-error signals can support learning.”; “This brief event-linked pattern is distinct from sustained uncertainty-related activity.”
- **Instructional job:** Distinguish the phasic response to unexpected reward, its shift to a learned cue, little remaining error at expected reward, and the omission-time dip.
- **Scientific rationale and inference boundary:** Scope is limited to a well-studied subset of midbrain dopamine neurons in particular tasks; traces are explicitly schematic, contain no fabricated firing-rate values, and say the signals can support learning.
- **Known limitations:** Idealized traces omit neuron-to-neuron, task, pathway, and timescale variability.
- **Candidate visual inspection:** The four-event sequence is immediately legible. Cue and reward-time markers remain aligned across panels; positive peaks and the omission dip are distinct; the figure explicitly separates phasic prediction error from sustained uncertainty-related activity. The scientific scope matches the chapter prose without turning dopamine into a universal learning or pleasure signal.
- **Checks:** spelling and clipping pass; numbered sequence, event labels, baseline direction, and peak/dip shapes preserve meaning without color; SVG parses as XML; `<title>`/`<desc>` present; no external references.
- **Status:** **candidate approved on 2026-07-17 for later controlled promotion.** No promotion, wiring, or metadata work was performed in this review.

## Batch validation

- Parsed all five candidate SVGs successfully as XML.
- Confirmed all candidate SVG dimensions/viewBoxes and all candidate PNG dimensions are exactly 2400×1350.
- Confirmed each current candidate PNG is a tracked repository object and recorded its current blob identity during review.
- Opened and rendered every candidate SVG directly at original size and approximately 1200 pixels wide.
- Confirmed no embedded figure numbers, watermarks, external assets, commercial-textbook styling, paragraph-sized prose, or color-only distinctions.
- No source chapter, generated HTML, production figure, production manifest, visuals inventory, lab, shared CSS, or shared JavaScript file was changed.

## Current selection decisions

- **Retain production; candidate not selected:** Figure 7.1 and Figure 7.3.
- **Candidate approved for later controlled promotion:** Figure 7.2 and Figure 7.9.
- **Unresolved:** Figure 7.7. The production figure is visually acceptable, but its exact plotted-point provenance is not documented; the schematic candidate remains an unselected fallback.
- **Not performed:** production replacement, wiring, caption/alt-text synchronization, manifest reconciliation, inventory changes, or Chapter 7 regeneration.

The only unresolved selection decision in this five-figure batch is Figure 7.7. Do not revise Figures 7.1 or 7.3 candidates, and do not describe candidate-specific defects as defects in the live chapter figures.