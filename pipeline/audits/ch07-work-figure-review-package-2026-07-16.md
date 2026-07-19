# Chapter 7 Work Figure Review Package

**Review date:** 2026-07-16  
**Scope:** Figure 7.6 candidate production and direct binary inspection of the remaining Chapter 7 figures  
**Approval boundary:** This package does not approve, promote, wire, or complete metadata for any figure.

## 1. Repository state

- **Starting branch:** `main`, tracking `origin/main`.
- **Starting commit:** `b48ed16` (`Repair Chapter 2 assessment alignment`).
- **Worktree at start:** clean. `git status --short --branch` showed only `## main...origin/main`.
- **Recent history checked:** `git log --oneline -8`.
- **Figure 7.4 check:** `fig_reinforcement_schedules.svg` and `fig_reinforcement_schedules.png` were unchanged from `HEAD`. They were not reopened or revised.
- **Files directly opened as binaries:** Figures 7.1, 7.2, 7.3, 7.5, the currently wired 7.6 asset, 7.7, 7.8, and 7.9; the new 7.6 SVG and PNG were also opened directly.
- **Inspection tools:** direct original-resolution image viewing for visual and embedded-text inspection; Pillow for pixel dimensions; Python XML parsing for SVG validity, text extraction, and external-reference checks; Sharp/librsvg for deterministic SVG-to-PNG rendering; Git status/diff checks for repository scope.

## 2. Figure 7.6 candidate

- **Editable source:** `docs/images/ch07/candidates/fig_bobo_doll_observational_learning_candidate.svg`
- **Rendered candidate:** `docs/images/ch07/candidates/fig_bobo_doll_observational_learning_candidate.png`
- **Dimensions:** SVG viewBox and PNG are both 2400 × 1350 pixels (16:9).
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

### Exact embedded text

Text appears in this order (line breaks below reflect separate SVG text elements):

> Bandura (1965): Learning versus performance  
> Observed consequences changed whether learned actions were expressed.  
> 1  
> Same observation  
> All children watch one model  
> show the same aggressive actions.  
> One shared demonstration  
> 2  
> Observed consequence  
> The model receives one outcome.  
> Rewarded  
> Model praised  
> Punished  
> Model scolded  
> No consequence  
> No response  
> Three observation conditions  
> 3  
> Initial test  
> No direct incentive for the child  
> Rewarded  
> No consequence  
> Punished  
> Punished-model group imitates less  
> Rewarded and no-consequence groups  
> are broadly similar.  
> Qualitative pattern — not a numerical scale  
> 4  
> Direct incentive  
> Every child is offered  
> an incentive to reproduce  
> the observed actions.  
> Same offer for all groups  
> 5  
> Incentive test  
> Imitation rises; differences narrow.  
> Rewarded  
> No consequence  
> Punished  
> Previously hidden learning  
> becomes visible in performance.  
> Qualitative pattern — not a numerical scale  
> Observed consequences changed initial performance  
> more clearly than acquisition.

### Layout and visual logic

The wide figure uses five left-to-right cards joined by directional arrows: same observation → observed consequence → initial test → direct incentive → incentive test. The first card uses original vector shapes for an adult model, an inflatable doll, and four child-observer icons. The consequence card distinguishes rewarded, punished, and no-consequence conditions through words, icons, shapes, and color. The two test cards use explicitly qualitative pill-shaped marks: rewarded and no-consequence marks are identical in the initial test, while the punished mark is shorter; after the common incentive, all marks are longer and close together. The marks have no axes, ticks, numerical labels, or empirical-data styling.

### Scientific rationale

The sequence isolates the 1965 learning–performance design rather than importing the 1961 aggressive-versus-nonaggressive comparison. Every child sees the same modeled behavior. Observed consequences alter initial imitation, with model punishment producing the clearest reduction. A direct incentive is then offered to every child, after which imitation rises and condition differences narrow. The conclusion is deliberately limited: observed consequences changed initial performance more clearly than acquisition. The candidate does not claim that punishment prevented learning, erased memory, generated expected personal punishment, or demonstrated identical acquisition in every child.

### Accessibility and readability

- Large system-font labels remain legible at approximately 1200 pixels wide.
- Meaning does not depend on color: every condition has a text label and a distinct icon; the two tests retain the same ordered labels.
- The directional structure is explicit and the visual has one instructional job.
- The light background and dark text provide strong contrast.
- The SVG includes a title and a descriptive `desc` element for assistive interpretation.
- Direct inspection found no clipping, misspelling, figure number, watermark, branding, or external image dependency.

### Known limitations

- The human and inflatable-doll drawings are intentionally simplified original vector symbols, not reconstructions of the apparatus or participants.
- Qualitative mark lengths communicate only relative patterns. They should not be cited as measured values or exact effect sizes.
- The candidate summarizes the central instructional inference and does not display procedural details, subgroup analyses, or the full range of imitative responses.

## 3. Existing-figure inspection table

| Figure | File inspected | Dimensions | Embedded text checked | Scientific assessment | Readability/accessibility | Recommendation |
| ------ | -------------- | ---------: | --------------------- | --------------------- | ------------------------- | -------------- |
| 7.1 | `fig_classical_conditioning_ucs_cs.png` | 1536 × 1024 | Yes; all UCS/UCR/CS/CR labels, definitions, stage headings, and callouts | The roles are mostly classified correctly and the top line frames the CS as a predictor. However, “repeatedly paired…The dog learns the association” can imply repetition is sufficient, and identical dog/salivation art can imply the CR must duplicate the UCR. | Clear hierarchy and large labels, but dense lower glossary and repeated prose reduce scanability. | revise existing asset |
| 7.2 | `fig_extinction_not_erasure.png` | 1536 × 1024 | Yes; acquisition, extinction, recovery/renewal, graph labels, and explanatory boxes | Correctly treats acquisition as bell→food prediction and extinction as competing new learning rather than deletion. It supports return of responding. Embedded “new safety learning inhibits the response,” plotted latent “strength” curves, and the generic claim that stress can reactivate the old association make a particular mechanism and triggers look more literal/settled than warranted. | Well organized but extremely text-dense; graph annotations are small at normal chapter width. | revise existing asset |
| 7.3 | `fig_operant_conditioning_2x2.png` | 1536 × 1024 | Yes; matrix headings, all four definitions/examples, and takeaway | Correctly states added/removed and behavior increase/decrease, and each example names a subsequent behavior change. But cell definitions begin with “something good” or “something unpleasant,” which classifies consequences by assumed valence before their measured behavioral effect and can make stimulus categories look intrinsic. | Strong matrix and redundant arrows/labels; some example prose is small. The cat-spraying example is also a distracting welfare choice. | revise existing asset |
| 7.5 | `fig_garcia_koelling_preparedness.png` | 1536 × 1024 | Yes; crossed matrix, takeaway, interpretation layer, evidence/explanation box, and note | Shows the required crossed result: taste→illness and audiovisual→shock are strong; crossed pairings are weaker. It explicitly separates observed evidence from a leading evolutionary interpretation and states the experiment was not a direct test of evolution. Its mini-curves are labeled illustrative. | Dense, but panel hierarchy and redundant labels make the crossed pattern recoverable without color alone. Small lower-panel text may need metadata-supported alt text. | provisionally retain |
| 7.7 | `fig_tolman_cognitive_map.png` | 1692 × 929 | Yes; title, axes, group labels, intervention marker, and citation | The delayed-reward line resembles the never-reinforced line before day 11 and improves rapidly after reward starts, supporting prior learning before performance revealed it. It makes no unique literal-map claim. The plotted point values look empirical and are not marked schematic; direct binary inspection cannot establish whether they are documented values or an undocumented reconstruction. | Very readable at chapter width and distinguishable through marker shapes as well as color. | cannot determine without additional evidence |
| 7.8 | `fig_dopamine_uncertainty_curve.png` | 1254 × 1254 | Yes; title, axes, event labels, probability legend, conclusion, and citation | Does not show a monkey or learned probability cue; omits the required 0% condition; adds 25%/75%; uses smooth empirical-looking curves without a schematic disclaimer; and does not clearly establish a fixed delay and possible reward. It risks conflating an abstract uncertainty curve with the actual task and sustained delay-period finding. | Large text, but square layout is poorly matched to the chapter’s wide visual language and meaning relies heavily on colored traces. | replace |
| 7.9 | `fig_dopamine_prediction_error_schultz.png` | 1536 × 1024 | Yes; four stages, traces, teaching boxes, takeaway, legend, and footer | Correctly shows unexpected reward→positive phasic response, shift to the learned cue, little remaining response at expected delivery, and a dip at omitted reward time. However, “Dopamine neurons” and “Dopamine =” scope the pattern too broadly; the footer’s regional variability caveat does not explicitly limit the schematic to a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks. “Teaching signal…drives learning” also reads more categorically than necessary. | Strong four-panel sequence with high contrast and shape-based positive/zero/negative coding, but text density is high. | revise existing asset |

The currently wired Figure 7.6 binary was also directly inspected. It has the correct five-stage 1965 sequence, but its empirical-looking horizontal bars, axis-like baselines, “amount” labels, and unqualified “what typically happens” panels are less defensible than the new explicitly qualitative candidate. It was not changed.

## 4. Required revisions

### Figure 7.1

- **Error embedded in image:** Replace “repeatedly paired” with wording centered on reliable predictive pairing/contingency. Clarify that the CR is a learned response to the CS and need not be physically identical to the UCR; the simplest visual correction is to vary or qualify the salivation depiction after conditioning.
- **Caption or alt-text issue:** Metadata should explicitly state that the example simplifies contingency and that CR and UCR are labeled by learning history, not guaranteed visual identity.
- **Unsupported interpretation:** Repetition alone is not a sufficient general account of conditioning.
- **Readability/layout:** Reduce the lower embedded glossary; move detail to caption/alt text.
- **Source/licensing:** Requires nine-figure metadata reconciliation later; not resolved here.

### Figure 7.2

- **Error embedded in image:** Replace the literal-looking suppression/strength curves with explicitly schematic response/retrieval language, or label the mechanism as a leading account. Remove “stress” as a general standalone recovery trigger unless the chapter supplies the narrower evidentiary context.
- **Caption or alt-text issue:** Caption/alt text should distinguish observed return of responding from the inferred competition/retrieval mechanism.
- **Unsupported interpretation:** “New safety learning inhibits” and hidden association-strength trajectories should not read as directly observed storage anatomy or uniquely established mechanism.
- **Readability/layout:** Reduce small graph annotations and repeated explanatory boxes.
- **Source/licensing:** Requires later metadata completion.

### Figure 7.3

- **Error embedded in image:** Replace “something good/unpleasant” with neutral “a consequence is added/removed,” then make behavioral increase/decrease the classification criterion. Examples may retain ordinary-language context only after the measured effect is stated.
- **Caption or alt-text issue:** State explicitly that the same event can function differently for different individuals or situations depending on measured behavior change.
- **Unsupported interpretation:** Pleasantness/unpleasantness cannot define reinforcement/punishment independently of effect.
- **Readability/layout:** Consider replacing the cat-spraying example with a less distracting non-harm example and shortening prose.
- **Source/licensing:** Requires later metadata completion.

### Figure 7.7

- **Error embedded in image:** None established from the binary alone.
- **Caption or alt-text issue:** Identify whether the points reproduce documented Tolman–Honzik values or are schematic.
- **Unsupported interpretation:** Do not add a claim that the behavioral result uniquely proves a literal cognitive-map representational format.
- **Readability/layout:** No material defect found.
- **Missing source or licensing evidence:** Verify the plotted values against the primary report or label/redraw as schematic; record creation/source/license status.

### Figure 7.8

- **Error embedded in image:** Replace with a task-first schematic showing a monkey, learned cues for 0%, 50%, and 100% reward probability, one fixed delay, possible reward, and strongest sustained delay-period activity near 50%. Avoid fabricated firing-rate traces, numerical y-values, and any suggestion that reward timing is uncertain.
- **Caption or alt-text issue:** State that learned cues signaled probability and that the sustained delay signal is distinct from the brief phasic cue/outcome responses in Figure 7.9, without declaring it categorically unrelated to prediction-error computations.
- **Unsupported interpretation:** The current abstract curve does not establish the actual animal, learned cue structure, fixed timing, or full task conditions.
- **Readability/layout:** Use a wide page-friendly sequence and redundant labels/shapes so the probability comparison does not depend on color.
- **Source/licensing:** New original candidate will require later metadata review.

### Figure 7.9

- **Error embedded in image:** Narrow “Dopamine neurons” and “Dopamine =” to “a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks.” Soften “drives learning” to “can support learning.”
- **Caption or alt-text issue:** Carry the same task-, neuron-, and timescale-specific scope into metadata.
- **Unsupported interpretation:** Avoid treating this response pattern as dopamine activity everywhere or the sole teaching mechanism.
- **Readability/layout:** Reduce repeated teaching-box prose while preserving the four-event sequence.
- **Source/licensing:** Requires later metadata completion.

Figure 7.5 has no required scientific revision from this inspection and is provisionally retained. Its source, license, alt text, and public-sharing status remain part of the later nine-figure metadata batch rather than this task.

## 5. Proposed next sequence

1. Jon/ChatGPT reviews the Figure 7.6 candidate and this inspection report.
2. Revise or promote Figure 7.6 only after explicit approval.
3. Produce a corrected Figure 7.8 candidate.
4. Verify Figure 7.7’s plotted values and resolve the smallest corrections identified for Figures 7.1, 7.2, 7.3, and 7.9; revisit Figure 7.5 only if review identifies a specific defect.
5. Only after all nine figures are approved: complete metadata, reconcile the visual inventory, synchronize source captions/alt text, regenerate Chapter 7 HTML, and validate the rendered page.

## 6. Candidate revision and Figure 7.8 production addendum

### Figure 7.6 revision

- **Paths:** `docs/images/ch07/candidates/fig_bobo_doll_observational_learning_candidate.svg` and `docs/images/ch07/candidates/fig_bobo_doll_observational_learning_candidate.png`.
- **Dimensions:** 2400 × 1350.
- **Corrections made:** The consequence card now uses the same Rewarded → No consequence → Punished order as both test cards. “No response” was replaced by “No consequence follows.” Exact-length horizontal marks were removed from both tests. The initial test now uses labeled up/down icons for more imitation, more imitation, and less imitation; the incentive test uses labeled upward icons for increases, increases, and a substantial increase, followed by “Differences narrow.” The 1965 five-stage sequence and the original conclusion were preserved.
- **Scientific rationale:** Word-and-icon categories communicate the learning–performance pattern without suggesting reconstructed effect sizes. The visual still distinguishes lower initial expression after model punishment from the later increase after every child receives a direct incentive.
- **Known limitations:** The simplified figures are teaching symbols, not reconstructions of participants or apparatus. “More,” “less,” and “substantially” are deliberately qualitative and do not describe exact between-group effects.
- **Direct inspection:** The SVG and PNG were opened directly. Condition order is consistent; text is spelled correctly and unclipped; arrows and icons are distinguishable without color; there are no bars, axes, ticks, numerical findings, external assets, figure number, watermark, or branding.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

#### Revised Figure 7.6 exact embedded text

Text appears in SVG order; adjacent lines may form one visual label:

```text
Bandura (1965): Learning versus performance
Observed consequences changed whether learned actions were expressed.
1
Same observation
All children watch one model
show the same aggressive actions.
One shared demonstration
2
Observed consequence
The model receives one outcome.
Rewarded
Model praised
No consequence
No consequence
follows
Punished
Model scolded
Three observation conditions
3
Initial test
No direct incentive for the child
Rewarded
More imitation
No consequence
More imitation
Punished
Less imitation
Punished-model group imitates less
Rewarded and no-consequence groups
are broadly similar.
Qualitative categories — no effect sizes shown
4
Direct incentive
Every child is offered
an incentive to reproduce
the observed actions.
Same offer for all groups
5
Incentive test
Imitation rises; differences narrow.
Rewarded
Imitation increases
No consequence
Imitation increases
Punished
Increases substantially
Previously hidden learning
becomes visible in performance.
Differences narrow
Observed consequences changed initial performance
more clearly than acquisition.
```

### Figure 7.8 candidate

- **Editable source:** `docs/images/ch07/candidates/fig_dopamine_uncertainty_task_candidate.svg`.
- **Rendered candidate:** `docs/images/ch07/candidates/fig_dopamine_uncertainty_task_candidate.png`.
- **Dimensions:** 2400 × 1350.
- **Layout:** An original simplified monkey appears beside three parallel task timelines. Distinct circle, rounded-square, and diamond cues signal 0%, 50%, and 100% reward probability. Every row uses the same clock symbol and “Same delay” label. Outcomes are no reward, reward-or-no-reward, and reward. Dot clusters labeled Low, Strongest, and Lower than 50% show qualitative sustained delay-period activity without traces, axes, or firing-rate values.
- **Scientific rationale:** The task-first structure makes clear that learned cues signal probability, while the delay duration and reward time are fixed. It isolates the sustained delay-period comparison and explicitly distinguishes it from the brief cue/outcome responses summarized in Figure 7.9 without claiming categorical independence from prediction-error computation or generalizing to dopamine everywhere.
- **Known limitations:** The monkey, cues, clock, reward, and activity dots are teaching symbols rather than a reconstruction of the laboratory display, apparatus, or neural recordings. The three qualitative activity labels show only the required ordinal pattern, not measured magnitudes.
- **Direct inspection:** The SVG and PNG were opened directly. The monkey, learned cues, 0%/50%/100% conditions, identical delay clocks, known reward time, possible outcomes, and strongest 50% sustained activity are all visible. Text and icon order are correct and unclipped. Meaning is redundant across shape, label, and color. No empirical-looking trace, numerical firing value, external asset, embedded Figure 7.8 number, watermark, or branding is present.
- **Status:** **candidate awaiting Jon/ChatGPT approval**.

#### Figure 7.8 exact embedded text

```text
Learned reward probability during a fixed delay
A task-first schematic of one primate delayed-reward paradigm
Experimental subject
Monkey
learns which cue
signals each probability
Reward time is known
Learned cue
Fixed delay
Reward outcome
Sustained activity
0%
Cue signals no reward
Same delay
No reward
Low
Qualitative level
50%
Cue signals possible reward
Same delay
or
Reward may or may not occur
Strongest
100%
Cue signals certain reward
Same delay
Reward occurs
Lower than 50%
Qualitative level
Sustained activity during the delay was strongest near 50% reward probability.
This sustained delay signal is distinct from the brief cue and outcome responses shown in Figure 7.9.
```

This new Figure 7.8 candidate supersedes the production recommendation to create a corrected candidate; it does not change the earlier assessment that the currently wired Figure 7.8 asset should be replaced. No promotion, approval, wiring, metadata completion, or HTML work occurred.
