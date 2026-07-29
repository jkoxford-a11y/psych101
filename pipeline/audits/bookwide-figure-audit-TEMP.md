# TEMPORARY Bookwide Figure Issue Catalog

> **DELETE THIS FILE when the figure-repair pass is complete.**
>
> This is a working catalog for one finite audit pass, not an authority over any chapter. Current chapter Markdown and current image files remain authoritative. Re-check each row against those files before making a change.

## Snapshot and purpose

- Audit date: 2026-07-29
- Repository snapshot: `main` at `4d91cfd82dcd`
- Scope: current rendered Chapters 1–13
- Cataloged set: 89 active chapter figures plus five Chapter 1 portrait images
- Purpose: preserve the issue inventory, rank repairs by teaching risk, and avoid repeating the full visual audit
- Excluded: proposed, archived, orphaned, and unwired images except where a stale inventory entry creates a live numbering decision

## Working rules

1. Keep one row per figure-level problem.
2. Re-check the current source, caption, artwork, and rendered page before editing.
3. Keep figure creation, correction, and chapter wiring as separate decisions.
4. Mark a row `RESOLVED` only after the corrected source/render has been visually checked.
5. A resolved row is history, not permission to reintroduce old wording or artwork.
6. Delete this file after all rows are `RESOLVED` or `RETIRED` and durable inventory decisions have been reconciled in `source/visuals-inventory.md`.

## Priority and effort

- **P0 — blocking/wrong:** broken asset or diagram teaches an incorrect mechanism, sequence, anatomy, or quantitative result.
- **P1 — materially misleading:** the main teaching point is weakened or contradicted.
- **P2 — bounded conceptual issue:** overstatement, reification, or caption/art mismatch that should be repaired after P0/P1.
- **P3 — usability/control:** mobile readability, attribution, numbering, or stale inventory.
- Effort: **S** local label/export/control fix; **M** one-figure redraw; **L** substantial redesign or responsive component.

## Ranked issue catalog

| ID | Priority | Chapter / figure | Status | Current problem | Proposed repair | Effort |
|---|---|---|---|---|---|---|
| F-001 | P0 | Figure 12.3 | RESOLVED 2026-07-29 | The file was a PNG stored with an `.svg` extension, so the browser displayed an XML/encoding error. The underlying artwork was coherent when decoded as PNG. | Renamed the asset `.png`, updated the authoritative source and durable inventory, rebuilt Chapter 12, and browser-checked the rendered figure. | S |
| F-002 | P0 | Figure 9.3 | RESOLVED 2026-07-29 | The former water-jar capacities and four-unit goal were mechanically inconsistent: filling B produced seven units, and the depicted old strategy contained an unreachable state. | Replaced it with verified classic Luchins problems. The later A = 23, B = 49, C = 3 problem reaches the target of 20 through both B − A − 2C and the simpler A − C route; every displayed equation and the rendered SVG were checked. | M |
| F-003 | P0 | Figure 6.3 | OPEN | A single alertness axis is applied to circadian alerting and sleep pressure even though greater Process S means more pressure and ordinarily less alertness. | Give Process C and Process S separately defined scales or use a convergence diagram that does not put them on one alertness axis. | M |
| F-004 | P0 | Figure 4.5 | OPEN | Prediction error flows directly to perception. No arrow carries error into an updated prediction/model, so the numbered causal loop is incomplete. | Use Prediction → Evidence → Error → Update → Perception/Action → new evidence. | M |
| F-005 | P0 | Figure 6.2 | OPEN | The SCN is depicted in the wrong anatomical location. | Redraw it in the anterior hypothalamus immediately above the optic chiasm and re-check the retinal input path. | M |
| F-006 | P0 | Figure 3.9 | OPEN | Cortisol is shown as a sympathetic-branch output. Cortisol belongs to the slower HPA-axis response, not the autonomic sympathetic branch itself. | Separate sympathetic–adrenal-medullary activity from HPA/cortisol activity; avoid treating every organ as a mirrored push–pull pair. | M |
| F-007 | P0 | Figure 4.9 | OPEN | The temporal-coding panel implies that individual neurons simply fire once per cycle as pitch rises, including the 1,000-Hz example. | Restrict simple phase-locking to lower frequencies and introduce population/volley coding for higher temporal rates. | M |
| F-008 | P1 | Figure 2.3 | OPEN — USER CONFIRMED | The five scatterplots run from strong positive on the left to strong negative on the right, while the coefficient scale beneath them runs from negative on the left to positive on the right. The lower arrows therefore contradict the panel order. | Keep the conventional coefficient scale (−1 on the left, 0 in the center, +1 on the right) and reorder the five plots to strong negative → moderate negative → zero → moderate positive → strong positive. | M |
| F-009 | P1 | Figure 6.4 | OPEN | Early, middle, and late night are assigned exclusive biological jobs despite the caption's overlap caveat. | Retain the hypnogram; remove the fixed function-by-time row or present overlapping stage associations without exclusive blocks. | M |
| F-010 | P1 | Figure 6.5 | OPEN | “Dedicated plumbing,” exact flow paths, and dramatic deep-sleep enhancement imply more certainty than the human evidence supports. | Use a simpler exchange model and visibly distinguish strong animal evidence from indirect/developing human evidence. | M–L |
| F-011 | P1 | Figure 1.2 | OPEN | The behaviorist feedback arrow returns from Outcome to Cue rather than to learned responding. The shared observation says “I understand,” while the LLM panel says fluency does not establish understanding. | Point feedback toward the cue–response tendency and replace the top statement with a genuinely shared observable performance. | M |
| F-012 | P1 | Chapter 4 inline Weber graphic | OPEN | The artwork mixes stimulus intensity and JND on one visual trajectory, weakening the proportional relationship it is meant to teach. | Plot base intensity on x and JND on y; label the constant ratio directly and assign a coherent figure number/caption. | M |
| F-013 | P1 | Figure 6.1 | OPEN | Five apparently discrete sleep “jobs” conflict with the chapter's overlapping-process argument. | Reorganize around interacting timing, cycling, regulation, memory, and clearance processes; remove absolute balance/clearance claims. | M |
| F-014 | P1 | Figure 7.5 | OPEN | The Garcia–Koelling graphic looks like four separately trained cue–outcome pairs rather than compound-cue training followed by selective tests. | Show the compound taste-plus-audiovisual cue, the illness/shock outcomes, and the separated test results. | M |
| F-015 | P2 | Figure 8.1 | OPEN | `7 ± 2`, “unlimited,” and “lifetime” appear as current literal properties rather than features of a classic simplified model. | Mark the historical estimate and use “sharply limited” and “very large; some memories persist for decades,” or otherwise distinguish classic from current estimates. | S–M |
| F-016 | P2 | Figure 4.4 | OPEN | “Eye” versus “brain” creates a false boundary for opponent processing, which begins in downstream retinal circuitry and continues centrally. | Label cones first, then retinal/LGN/cortical opponent channels; re-check the cone-response curves. | S–M |
| F-017 | P2 | Figure 4.6 | OPEN | “Same pixels” is asserted while the visible side scenes are different rendered images, so the demonstration itself does not preserve identical input. | Reuse one literal image twice and alter only interpretive context or surrounding illumination cues. | M |
| F-018 | P2 | Figure 7.2 | OPEN | The “old prediction” visibly weakens during extinction even though the figure's central claim is that the association remains available. | Keep the old association stable and show new contextual/inhibitory learning suppressing its expression, or relabel the curve as observed responding. | M |
| F-019 | P2 | Figure 7.9 | OPEN | The image generalizes a task-specific dopamine-neuron pattern to dopamine broadly; the source caption is better bounded than the artwork. | Put the population/task boundary in the title and visible labels, not only the caption. | S |
| F-020 | P2 | Figure 10.1 | OPEN | The figure describes an interacting/co-evolving system, but all contributor arrows point one way toward extended development. | Add reciprocal links or remove the reciprocity/co-evolution claim from the artwork and alt text. | S–M |
| F-021 | P2 | Figure 9.5 | OPEN | System 1/System 2 are reified as two systems with absolutes such as “fully conscious” and “handles most of life.” | Present them as contrasting processing tendencies and remove module-like or absolute language. | S–M |
| F-022 | P2 | Chapter 5 Charles Bonnet graphic | OPEN | “Uncorrected predictions” is presented as the established mechanism instead of one explanatory model. | Preserve the content-versus-belief lesson and label predictive processing as a candidate account. | S |
| F-023 | P3 | Figure 1.1 | PROTOTYPE READY; NOT WIRED | The conceptual content is sound, but extensive embedded text becomes difficult to read on phones. | Replace the fixed bitmap with the reviewed responsive concept-map approach after higher-risk repairs. | L |
| F-024 | P3 | Chapter 1 portrait strip | OPEN | The Wundt group photograph functions as an individual portrait; Skinner's attribution is tracked in a manifest but not exposed publicly. | Replace/crop the portrait and expose the attribution in the rendered chapter. | S |
| F-025 | P3 | Chapter 4 numbering/catalog | OPEN | Current source skips 4.2 and 4.8 and no longer matches `source/visuals-inventory.md`; the signal-detection matrix is a table rather than the cataloged figure. | Decide the intended numbering, then reconcile source captions, generated HTML, and the durable inventory. | S |
| F-026 | P3 | Chapter 5 numbering/catalog | OPEN | The durable inventory says eight figures are wired, while the current authoritative chapter contains three unnumbered figures. | Reconcile the durable inventory to the current chapter after confirming that the removed figures are intentionally retired. | S |
| F-027 | P3 | Figure 7.8 decision | OPEN DECISION | Figure 7.8 is absent from authoritative source although an unused dopamine-uncertainty asset exists. | Explicitly restore, renumber, or retire it; do not infer the decision from the unused asset. | S–M |

## Current chapter-level triage

| Chapter | Current audit result |
|---|---|
| 1 | Open: Figures 1.1, 1.2, and portrait/attribution control. |
| 2 | Open: Figure 2.3 plot order conflicts with the coefficient scale beneath it. Figure 2.2's revised lower-right field and current Figures 2.5 and 2.6 did not show another high-priority defect in this pass. |
| 3 | Open: Figure 3.9 autonomic/HPA distinction. |
| 4 | Highest remaining cluster: prediction loop, pitch coding, Weber graphic, color-processing boundary, same-pixels demonstration, and numbering control. |
| 5 | Open: Charles Bonnet mechanism framing and stale figure inventory. |
| 6 | Highest chapter-level repair burden: all figures except 6.3 were already partly flagged in source; 6.3 adds a newly identified axis/construct problem. |
| 7 | Open: Figures 7.2, 7.5, 7.9, and the 7.8 scope decision. |
| 8 | Open: Figure 8.1 classic/current model labeling. |
| 9 | Figure 9.3 resolved with verified classic water-jar values and valid routes. Figure 9.5 remains open. |
| 10 | Open: Figure 10.1 arrow logic. |
| 11 | No high-priority figure-logic defect identified in this pass. |
| 12 | Resolved: Figure 12.3 now uses its correct `.png` extension and renders normally. |
| 13 | No high-priority figure-logic defect identified in this pass. |

## Deletion gate

Delete this file when:

- every row is marked `RESOLVED` or `RETIRED`;
- corrected figures have been checked in the generated chapter at desktop and phone widths;
- `source/visuals-inventory.md` reflects the durable final state;
- any temporary prototype or audit-only copy has been removed or deliberately retained elsewhere; and
- the final figure pass has been recorded in the normal project log/handoff.
