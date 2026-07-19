# Chapter 6 Flagged Figure Candidate Review and Rebuilds

**Status:** ready for Work/Codex execution  
**Date:** 2026-07-17  
**Repository:** `jkoxford-a11y/psych101`  
**Authority:** This work order produces review candidates and a decision report only. It does not approve, promote, wire, or regenerate anything.

## Objective

Inspect the four currently flagged Chapter 6 figures at original resolution. Produce corrected original SVG/PNG candidates for Figures 6.2, 6.4, and 6.5. Review Figure 6.1 and recommend either retention with a narrower caption or a future simplification candidate; do not rebuild 6.1 unless the direct inspection establishes a concrete visual defect that cannot be handled through metadata/caption framing.

The figures have different problems. Do not treat this as a generic visual-refresh batch.

## Read before editing

Read these files in full:

- `AGENTS.md`
- `HANDOFF.md`
- `PROJECT_BACKLOG.md`
- `pipeline/voice-brief.md`
- `docs/images/psych101_figure_style_guide.md`
- `source/chapters/ch06-sleep.md`
- `source/chapters/_provenance/ch06-sleep.md`
- `source/visuals-inventory.md`
- `pipeline/html-conversion-spec.md`
- any Chapter 6 image metadata, README, tracker, or audit file found under `docs/images/ch06/` or `pipeline/`

Before designing anything, open the current production binaries at original resolution:

- `docs/images/ch06/fig_sleep_active_maintenance_system.png`
- `docs/images/ch06/fig_scn_circadian_clock_entrainment.png`
- `docs/images/ch06/fig_sleep_architecture_cycles.png`
- `docs/images/ch06/fig_glymphatic_clearance_deep_sleep.png`

Do not infer image content from filenames, captions, or the global inventory.

## Editable scope

Create candidate assets only under `docs/images/ch06/candidates/`:

- `ch06_scn_light_entrainment_pathway_candidate.svg`
- `ch06_scn_light_entrainment_pathway_candidate.png`
- `ch06_sleep_architecture_hypnogram_candidate.svg`
- `ch06_sleep_architecture_hypnogram_candidate.png`
- `ch06_glymphatic_evidence_boundary_candidate.svg`
- `ch06_glymphatic_evidence_boundary_candidate.png`

Create one review record:

- `pipeline/audits/ch06-flagged-figure-candidate-review.md`

The review record must document direct inspection of all four current binaries, exact defects, candidate paths, embedded text, scientific rationale, accessibility/readability, limitations, and a recommendation for Figure 6.1.

You may append a concise entry to `GPT_project_log.md` only after the full candidate batch is complete and validated. Do not edit `HANDOFF.md` while another active Work task may also be editing it.

## Forbidden files and actions

Do not edit:

- `source/chapters/ch06-sleep.md`
- `docs/chapters/06-sleep.html`
- any production Chapter 6 figure
- Chapter 6 image metadata or README files
- `source/visuals-inventory.md`
- `HANDOFF.md`
- any lab, shared CSS, shared JavaScript, or other chapter

Do not promote, wire, renumber, regenerate, or archive production assets. Do not alter Figures 6.3 or any unflagged Chapter 6 visual.

## Figure-specific requirements

### Figure 6.1 — Sleep as active maintenance

This is a decision-only review unless direct inspection establishes a concrete defect requiring a candidate.

Preserve the chapter's argument that sleep supports several overlapping processes. Do not depict five independent jobs assigned to separate stages or fixed time blocks. Assess whether the existing five-panel organization functions as a loose overview or falsely implies discrete modules. Recommend retention, caption-level containment, or later simplification with reasons.

### Figure 6.2 — SCN and circadian entrainment

Rebuild as a clean pathway diagram with one instructional job:

`environmental light → retina/ipRGCs → retinohypothalamic tract → SCN in the anterior hypothalamus above the optic chiasm → coordinated circadian outputs`

Requirements:

- Place the SCN anatomically above the optic chiasm in the anterior hypothalamic region; do not place it in the pineal gland, posterior brain, or an arbitrary central dot.
- Show the pineal gland as a downstream target involved in melatonin timing, not as the master clock.
- Keep outputs concept-level: sleep–wake timing, body temperature, hormonal timing. Avoid implying a simple direct SCN-to-adrenal wiring diagram unless the pathway is carefully qualified.
- Melatonin signals biological night and helps shift circadian timing; do not label it a general knockout sedative.
- Use few large labels and a 16:9-friendly light-background layout.

### Figure 6.4 — Sleep architecture

Rebuild as an explicitly schematic hypnogram showing repeated cycling across a typical night.

Requirements:

- Show wake, REM, NREM 1, NREM 2, and NREM 3 with a conventional vertical depth organization.
- Concentrate NREM 3 earlier in the night and lengthen REM periods toward morning.
- Make clear that cycles are approximately, not exactly, 90 minutes and that individual nights vary.
- Do not divide the night into fixed early/middle/late functional blocks.
- Do not assign memory, waste clearance, hormone resetting, or other biological jobs to exclusive stage/time rectangles.
- Label all trajectories as schematic, not participant data.
- Preserve large readable labels and avoid tiny annotations.

### Figure 6.5 — Glymphatic clearance and evidence boundary

Rebuild around the evidence distinction rather than a literal certainty-heavy cleaning diagram.

Preferred structure: two aligned panels or one mechanism-plus-evidence layout.

Mechanism panel:

- cerebrospinal fluid exchange along perivascular/interstitial spaces
- clearance of some metabolic solutes
- greater exchange/clearance observed during sleep or anesthesia in foundational animal work

Evidence boundary panel:

- direct mechanistic evidence is strongest in rodents/animal preparations
- human evidence is more indirect and still developing
- do not claim that one night's sleep "flushes toxins," prevents Alzheimer's disease, or that the mechanism occurs only in NREM 3

Use wording such as “appears enhanced during sleep in animal studies” rather than universal causal certainty. Keep amyloid-beta as an example of a studied solute, not a promise of disease prevention.

## Shared figure rules

- One hard idea per figure.
- Original explanatory diagrams only; do not copy publisher figures.
- Light background, concept-first layout, large readable text, few labels.
- No embedded figure numbers, watermarks, logos, or source branding.
- Meaning must not depend on color alone.
- Include SVG `<title>` and `<desc>` elements.
- Render deterministic PNGs from the SVGs at 2400×1350 when practical.
- No external image dependencies.
- Keep nuance in the eventual caption rather than embedding paragraphs in the art.

## Validation

For every candidate:

1. Parse the SVG as valid XML.
2. Confirm the SVG has a 16:9-friendly viewBox and no external references.
3. Render the PNG deterministically and confirm expected dimensions.
4. Open both SVG and PNG directly at original resolution.
5. Check for clipping, text overlap, misspellings, tiny labels, stray artifacts, figure numbers, watermarks, and branding.
6. Extract and list all embedded text in the review record.
7. Confirm the visual remains understandable without color.
8. Confirm every scientific caveat above is respected.
9. Run `git diff --check` and report exact changed files.

## Stop condition

Stop after the candidates and review record are complete. Report which candidates appear ready for Jon/ChatGPT review and any unresolved evidence or design issue. Do not promote or wire them.