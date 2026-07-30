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
| F-003 | P0 | Figure 6.3 | RESOLVED 2026-07-29 | The former figure applied one alertness axis to circadian alerting and sleep pressure even though greater Process S means more pressure and ordinarily less alertness. | Rebuilt it as two aligned panels with separately labeled scales: Process S runs from low to high sleep pressure, while Process C runs from low to high circadian alerting. The practical levers are grouped by the process they affect, and the rendered SVG was checked at chapter and full-artwork sizes. | M |
| F-004 | P0 | Figure 4.5 | RESOLVED 2026-07-29 | The former loop sent prediction error directly toward perception and never carried the correction into an updated model. | Rebuilt the figure so evidence and the current model's prediction meet at comparison, residual error flows into an explicit model-update step, the updated model generates the next prediction and guides perception/action, and action produces new evidence. The replacement SVG was checked at chapter and full-artwork sizes. | M |
| F-005 | P0 | Figure 6.2 | RESOLVED 2026-07-29 | The former sagittal-brain marker placed the SCN too far posteriorly and superiorly. | Replaced the ambiguous marker with a simplified anatomical inset showing the paired SCN in the anterior hypothalamus immediately above the optic chiasm. The retinal input terminates at the inset, all five downstream output arrows remain connected, and the replacement was checked at chapter and full-artwork sizes. | M |
| F-006 | P0 | Former Figure 3.9; replacements Figures 3.6 and 3.10 | RESOLVED 2026-07-30 | The former autonomic figure incorrectly showed cortisol as a sympathetic-branch output and implied a uniformly mirrored whole-body switch. | Installed a separate HPA-axis endocrine figure in which the adrenal cortex releases cortisol into the bloodstream, and replaced the autonomic figure with organ- and context-specific sympathetic/parasympathetic influences. The autonomic figure contains no cortisol, HPA pathway, SAM label, adrenal-medullary row, or adrenaline row. Both replacements were checked in the generated chapter at desktop and 390 × 844. | M |
| F-007 | P0 | Figure 4.9 | RESOLVED 2026-07-30 | The former temporal-coding panel implied that individual neurons simply fired once per cycle as pitch rose, including the 1,000-Hz example. | Replaced it with a two-panel original SVG: place coding shows where activity peaks; temporal coding shows 250-Hz phase locking and a 1,000-Hz pooled volley in which three fibers share cycles. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-008 | P1 | Figure 2.3 | RESOLVED 2026-07-30 | The former five scatterplots ran from strong positive on the left to strong negative on the right, while the coefficient scale beneath them ran from negative on the left to positive on the right. | Replaced the contradictory raster with a deterministic SVG whose plots, labels, trend lines, colors, and coefficient scale all run strong negative → moderate negative → zero → moderate positive → strong positive. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-009 | P1 | Figure 6.4 | RESOLVED 2026-07-30 | The former figure assigned early, middle, and late night exclusive biological jobs despite the caption's overlap caveat. | Replaced it with a deterministic SVG that retains the hypnogram and shows three architecture observations—more NREM 3 earlier, recurring stages, and longer REM later—plus an explicit statement that biological functions overlap. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-010 | P1 | Figure 6.5 | DEFERRED — USER SKIPPED 2026-07-30 | “Dedicated plumbing,” exact flow paths, and dramatic deep-sleep enhancement imply more certainty than the human evidence supports. | No repair in this pass. If revisited, use a simpler exchange model and visibly distinguish strong animal evidence from indirect/developing human evidence. | M–L |
| F-011 | P1 | Figure 1.2 | RESOLVED 2026-07-30 | The former behaviorist feedback arrow returned from Outcome to Cue rather than to learned responding. Its shared observation said “I understand,” while the LLM panel said fluency did not establish understanding. | Replaced the dense monochrome raster with a simplified color-coded SVG. The shared observation is now observable novel-prompt performance, and the consequence loop returns to future verbal responding. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-012 | P1 | Figure 4.2 Weber graphic | RESOLVED 2026-07-30 | The former artwork mixed stimulus intensity and JND on one visual trajectory, weakening the proportional relationship it was meant to teach. | Replaced it with a color-coded graph that directly plots base intensity on x and JND on y, labels ΔI/I = 0.10, and supplies a coherent Figure 4.2 caption. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-013 | P1 | Figure 6.1 | DEFERRED — INSTRUCTOR RETAINED 2026-07-30 | Five apparently discrete sleep “jobs” create some tension with the chapter's overlapping-process argument. The instructor judged that the direct active-maintenance teaching point matters more than adding glymphatic qualifications to the artwork. | No repair in this pass. Reassess the five-panel organization and evidence framing in a future book revision. | M |
| F-014 | P1 | Figure 7.5 | RESOLVED 2026-07-30 | The former Garcia–Koelling graphic looked like four separately trained cue–outcome pairs rather than compound-cue training followed by selective tests. | Replaced it with a three-stage color SVG showing flavored water plus light/tone together, illness-versus-shock outcome groups, and separated cue tests with the crossed strong/weak avoidance pattern. The generated chapter and expandable artwork passed visual inspection and the five-viewport expansion regression. | M |
| F-015 | P2 | Figure 8.1 | RESOLVED 2026-07-30 | `7 ± 2`, “unlimited,” and “lifetime” appeared as current literal properties rather than features of a classic simplified model. | Retained the three-stage teaching map, labeled it as the classic model, marked `7 ± 2` as a classic estimate beneath the durable “sharply limited” lesson, and replaced the long-term absolutes with “very large capacity” and “some memories last decades.” Source prose, caption, alt text, and metadata were synchronized. | S–M |
| F-016 | P2 | Figure 4.4 | OPEN | “Eye” versus “brain” creates a false boundary for opponent processing, which begins in downstream retinal circuitry and continues centrally. | Label cones first, then retinal/LGN/cortical opponent channels; re-check the cone-response curves. | S–M |
| F-017 | P2 | Figure 4.6 | OPEN | “Same pixels” is asserted while the visible side scenes are different rendered images, so the demonstration itself does not preserve identical input. | Reuse one literal image twice and alter only interpretive context or surrounding illumination cues. | M |
| F-018 | P2 | Figure 7.2 | OPEN | The “old prediction” visibly weakens during extinction even though the figure's central claim is that the association remains available. | Keep the old association stable and show new contextual/inhibitory learning suppressing its expression, or relabel the curve as observed responding. | M |
| F-019 | P2 | Figure 7.9 | OPEN | The image generalizes a task-specific dopamine-neuron pattern to dopamine broadly; the source caption is better bounded than the artwork. | Put the population/task boundary in the title and visible labels, not only the caption. | S |
| F-020 | P2 | Figure 10.1 | OPEN | The figure describes an interacting/co-evolving system, but all contributor arrows point one way toward extended development. | Add reciprocal links or remove the reciprocity/co-evolution claim from the artwork and alt text. | S–M |
| F-021 | P2 | Figure 9.5 | OPEN | System 1/System 2 are reified as two systems with absolutes such as “fully conscious” and “handles most of life.” | Present them as contrasting processing tendencies and remove module-like or absolute language. | S–M |
| F-022 | P2 | Chapter 5 Charles Bonnet graphic | OPEN | “Uncorrected predictions” is presented as the established mechanism instead of one explanatory model. | Preserve the content-versus-belief lesson and label predictive processing as a candidate account. | S |
| F-023 | P3 | Figure 1.1 | PROTOTYPE READY; NOT WIRED | The conceptual content is sound, but extensive embedded text becomes difficult to read on phones. | Replace the fixed bitmap with the reviewed responsive concept-map approach after higher-risk repairs. | L |
| F-024 | P3 | Chapter 1 portrait strip | OPEN | The Wundt group photograph functions as an individual portrait; Skinner's attribution is tracked in a manifest but not exposed publicly. | Replace/crop the portrait and expose the attribution in the rendered chapter. | S |
| F-025 | P3 | Chapter 4 numbering/catalog | OPEN — 4.2 GAP REPAIRED | Figure 4.2 is now the Weber graphic, and the unwired signal-detection matrix is recorded as such. Current source still skips 4.8 and therefore does not yet form a continuous sequence. | Decide whether to restore or renumber around the missing 4.8, then reconcile source captions, generated HTML, and the durable inventory. | S |
| F-026 | P3 | Chapter 5 numbering/catalog | OPEN | The durable inventory says eight figures are wired, while the current authoritative chapter contains three unnumbered figures. | Reconcile the durable inventory to the current chapter after confirming that the removed figures are intentionally retired. | S |
| F-027 | P3 | Figure 7.8 decision | OPEN DECISION | Figure 7.8 is absent from authoritative source although an unused dopamine-uncertainty asset exists. | Explicitly restore, renumber, or retire it; do not infer the decision from the unused asset. | S–M |

## Current chapter-level triage

| Chapter | Current audit result |
|---|---|
| 1 | Figure 1.2 resolved. Open: Figure 1.1 and portrait/attribution control. |
| 2 | Figure 2.3 plot order now matches its −1-to-+1 coefficient scale. The revised Figure 2.2 and current Figures 2.5 and 2.6 did not show another high-priority defect in this pass. |
| 3 | Resolved: the HPA/cortisol pathway is now a separate endocrine figure (Figure 3.6), while autonomic push–pull regulation is presented without cortisol as organ- and context-specific influence (Figure 3.10). |
| 4 | Figures 4.2, 4.5, and 4.9 resolved. Remaining: color-processing boundary, same-pixels demonstration, and the 4.8 numbering decision. |
| 5 | Open: Charles Bonnet mechanism framing and stale figure inventory. |
| 6 | Figures 6.2, 6.3, and 6.4 resolved. Figures 6.1 and 6.5 were explicitly deferred for future revision by the instructor. |
| 7 | Figure 7.5 resolved. Open: Figures 7.2 and 7.9, plus the 7.8 scope decision. |
| 8 | Figure 8.1 resolved by distinguishing its classic estimate from the current capacity lesson and removing literal long-term-memory absolutes. |
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
