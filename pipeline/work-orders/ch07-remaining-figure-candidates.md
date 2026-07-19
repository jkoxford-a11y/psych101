# Chapter 7 Remaining Figure Candidate Rebuilds

**Status:** ready for Work/Codex execution  
**Date:** 2026-07-17  
**Repository:** `jkoxford-a11y/psych101`  
**Authority:** This work order produces review candidates only. It does not approve, promote, wire, renumber, or regenerate anything.

## Objective

Produce clean, original, concept-first SVG and PNG candidates for Chapter 7 Figures 7.1, 7.2, 7.3, and 7.9, plus resolve Figure 7.7 by either documenting its plotted values or replacing it with an explicitly schematic candidate. Preserve the chapter's central distinction between learning and current performance. Do not alter Figures 7.4, 7.5, 7.6, or 7.8.

## Read before editing

Read these files in full:

- `AGENTS.md`
- `HANDOFF.md`
- `GPT_project_log.md`
- `pipeline/voice-brief.md`
- `docs/images/psych101_figure_style_guide.md`
- `pipeline/audits/ch07-pre-review-audit.md`
- `pipeline/audits/ch07-work-figure-review-package-2026-07-16.md`
- `source/chapters/ch07-learning.md`
- `source/visuals-inventory.md`
- `pipeline/html-conversion-spec.md`

Inspect the actual current binaries at original resolution before designing replacements. Do not infer image content from filenames or wiring status.

## Editable scope

Create candidate assets only under `docs/images/ch07/candidates/`:

- `fig_classical_conditioning_ucs_cs_candidate.svg`
- `fig_classical_conditioning_ucs_cs_candidate.png`
- `fig_extinction_not_erasure_candidate.svg`
- `fig_extinction_not_erasure_candidate.png`
- `fig_operant_conditioning_2x2_candidate.svg`
- `fig_operant_conditioning_2x2_candidate.png`
- `fig_tolman_cognitive_map_candidate.svg`
- `fig_tolman_cognitive_map_candidate.png`
- `fig_dopamine_prediction_error_schultz_candidate.svg`
- `fig_dopamine_prediction_error_schultz_candidate.png`

Also create or update one candidate-review record:

- `pipeline/audits/ch07-remaining-figure-candidate-review.md`

You may update `HANDOFF.md` only to say that candidates are ready for review. Do not mark any new figure approved. Append a concise entry to `GPT_project_log.md` if the full candidate batch is completed and validated.

## Forbidden files and actions

Do not edit:

- `source/chapters/ch07-learning.md`
- `docs/chapters/07-learning.html`
- `docs/images/ch07/README_captions_alt_text_attribution.md`
- `source/visuals-inventory.md`
- any production Chapter 7 figure binary or SVG
- Figures 7.4, 7.5, 7.6, or 7.8 in any location
- any other chapter, lab, shared JavaScript, or shared CSS

Do not regenerate Chapter 7 HTML. Do not promote candidates into production paths. Do not create figure numbers inside image files.

## Shared visual requirements

For every candidate:

- Original programmatic SVG plus a deterministic 2400×1350 PNG render.
- Clean white or very light background; 16:9 composition.
- One hard instructional idea per figure.
- Few large labels; no paragraph-sized text inside the figure.
- Meaning must not depend on color alone.
- No watermark, branding, external image dependency, or embedded figure number.
- Include SVG `<title>` and `<desc>` elements.
- Use only original vector symbols or basic geometric marks; do not reproduce a commercial textbook figure.
- At normal chapter width, the major structure and labels must remain readable. Move nuance to the eventual caption rather than shrinking text.

## Figure-specific requirements

### Figure 7.1 — Classical conditioning as prediction

Instructional job: distinguish the unlearned relation from the learned predictive cue without reducing acquisition to repetition.

Required structure:

1. **Before learning:** food is the UCS and produces salivation as the UCR; the tone does not yet predict food.
2. **Acquisition:** the tone reliably predicts food. Use language such as “reliable predictive pairing” or “tone improves prediction of food,” not merely “repeated pairing.”
3. **After learning:** the tone is now the CS and produces a learned CR.

Accuracy constraints:

- Do not imply repetition alone is sufficient.
- Do not imply that a CR must be physically identical to the UCR. A compact note may say: “CR and UCR are named by learning history; their form need not be identical.”
- Do not display a dense UCS/UCR/CS/CR glossary inside the image.
- Do not use “association” as an unexplained substitute for predictive contingency.

### Figure 7.2 — Extinction changes performance, not necessarily storage

Instructional job: show acquisition, extinction, and return of responding while distinguishing observation from mechanism.

Required structure:

- Acquisition: CS predicts UCS and responding develops.
- Extinction: CS occurs without UCS and observed responding declines.
- Return: responding may reappear after time or context change.

Accuracy constraints:

- Plot observable responding only. If curves are used, label them “schematic responding,” not hidden association strength.
- Do not draw literal stored excitatory and inhibitory traces.
- Do not state that one uniquely established inhibitory-storage mechanism has been directly observed.
- Do not use generic “stress reactivates the association” wording.
- A concise takeaway may say: “Extinction adds context-sensitive learning; reduced responding does not prove erasure.”

### Figure 7.3 — Operant conditioning 2×2

Instructional job: classify consequences by what changes in behavior and whether a consequence is added or removed.

Required axes:

- Rows: behavior increases / behavior decreases.
- Columns: consequence added / consequence removed.

Required categories:

- Positive reinforcement
- Negative reinforcement
- Positive punishment
- Negative punishment

Accuracy constraints:

- Do not define cells as “something good,” “something bad,” “pleasant,” or “unpleasant.”
- Each example must state the later behavioral change, not merely name an event.
- Use short, low-risk examples. Retain the seatbelt-chime logic if useful. Replace the cat-spraying example.
- Include the concise rule: “Positive/negative = added/removed. Reinforcement/punishment = behavior increases/decreases.”
- Note visually or in the review record that the same event can function differently across individuals or contexts depending on measured behavior change.

### Figure 7.7 — Tolman and Honzik delayed reward

Instructional job: show that experience before reward affected later performance without claiming that the result uniquely identifies a literal cognitive-map representation.

First, investigate the current production figure's plotted point provenance. Use the primary Tolman and Honzik (1930) report or a documented reproduction of its error data. Do not treat a familiar textbook redraw as evidence.

Decision rule:

- If every plotted point can be tied to documented values, create an original redraw and record the values/source precisely in the review file.
- If exact correspondence cannot be established, create an explicitly schematic figure with three qualitative trajectories: rewarded from Day 1, never rewarded, and reward beginning after Day 10. Mark the reward introduction between Days 10 and 11. Do not use empirical-looking point values or an unlabeled numerical y-axis.

Accuracy constraints:

- The delayed-reward group should resemble the never-rewarded group before reward and improve rapidly after reward begins.
- State only that the pattern suggests prior learning before performance revealed it.
- Do not say the graph uniquely proves a particular internal representational format.
- Do not copy the visual styling of a copyrighted reproduction.

### Figure 7.9 — Reward prediction error

Instructional job: distinguish four moments in a classic phasic reward-prediction-error pattern.

Required four-panel sequence:

1. Unexpected reward → positive phasic response at reward.
2. Learned cue predicts reward → positive phasic response shifts to cue.
3. Expected reward arrives → little remaining prediction error at reward time.
4. Expected reward omitted → dip at the expected reward time.

Accuracy constraints:

- Scope the figure to “a well-studied subset of midbrain dopamine neurons in particular reward-learning tasks.”
- Do not label the pattern as dopamine activity everywhere in the brain.
- Use “can support learning” rather than “drives learning.”
- If traces are used, label them as schematic and omit fabricated firing-rate values.
- Keep this brief phasic pattern distinct from the sustained delay-period uncertainty pattern in Figure 7.8.
- Reduce repeated prose; let the four-panel sequence teach visually.

## Candidate review record

For each candidate, record in `pipeline/audits/ch07-remaining-figure-candidate-review.md`:

- exact candidate paths;
- SVG viewBox and PNG dimensions;
- exact embedded text in visual order;
- one-sentence instructional job;
- scientific rationale and inference boundary;
- known limitations;
- direct visual inspection result at original size and approximately 1200 pixels wide;
- spelling/clipping check;
- color-independent interpretation check;
- SVG XML validity and external-reference check;
- explicit status: **candidate awaiting Jon/ChatGPT approval**.

For Figure 7.7, include the data-provenance investigation and the decision to use documented values or a schematic.

## Validation gates

Before reporting completion:

1. Parse every SVG as XML.
2. Confirm every SVG and PNG is 2400×1350.
3. Render PNGs deterministically from their SVGs.
4. Open every SVG and PNG directly; do not rely only on extracted text.
5. Confirm no clipping, misspelling, tiny labels, embedded figure number, watermark, external asset, or commercial-textbook styling.
6. Confirm the five production figures remain byte-for-byte unchanged.
7. Confirm no source chapter, generated HTML, manifest, inventory, lab, shared CSS, or shared JavaScript file changed.
8. Run `git diff --check` and report the exact changed-file list.

## Completion report

Report:

- candidates created;
- whether Figure 7.7 used documented values or a schematic, and why;
- validation performed;
- exact files changed;
- confirmation that nothing was promoted or wired;
- any decision Jon must make before promotion.
