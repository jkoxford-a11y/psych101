# Chapter 7 line-edit reconciliation — 2026-07-22

## Status

Approved instructor line edit reconciled into the authoritative Markdown. Generated HTML and figure wiring remain deferred.

## Authority and reference

- Authoritative prose: `source/chapters/ch07-learning.md`
- Instructor record: `line-edit-packets/Chapter_7_Learning_Line_Edit.docx`
- Source snapshot reviewed: 2026-07-19
- Reconciliation decision date: 2026-07-22

## Approved conceptual decisions

1. Use **learning versus observable performance** as the chapter's explicit spine.
2. Replace the online/offline model language in **Where This Fits** with the established animal-model sequence: environmental information → learning → later storage and use.
3. Explain that generalization may reflect perceptual similarity or insufficient differential learning; discrimination requires both detecting a difference and learning that it matters.
4. Condense Little Albert into one evidence-calibrated paragraph plus one retrieval prompt. Do not add the disputed hydrocephalus identification. Keep the thumb-sucking detail out of the chapter.
5. Remove the mirror-neuron detour.
6. Retain reward prediction error as the chapter's neural mechanism; remove the sustained-uncertainty detour and its Figure 7.8 source reference.
7. Convert wanting versus liking into a brief **Do Not Confuse** distinction.
8. Remove the RLHF box because it does not earn its cognitive-load cost here.
9. Align Learning Objective 7, the chapter summary, Review Question 10, Further Reading, and References with those decisions.

## Deliberate exclusions

- Do not edit `docs/chapters/07-learning.html`.
- Do not edit `pipeline/build_chapter_html.mjs`.
- Do not wire, promote, regenerate, renumber, or delete Chapter 7 figure assets in this task.
- The retained prediction-error image remains labeled Figure 7.9 for now; figure numbering is resolved when the paused Chapter 7 image lane resumes.
- Do not stage, commit, push, or clean unrelated working-tree changes.

## Validation expectations

- Each approved replacement applies exactly once.
- `source/chapters/ch07-learning.md` retains 11 review questions.
- `fig_dopamine_prediction_error_schultz.png` remains referenced.
- `fig_dopamine_uncertainty_curve.png`, RLHF prose, and mirror-neuron prose are absent.
- The di Pellegrino (1992) and Fiorillo et al. (2003) references are absent because their supporting prose was removed.
- Berridge and Robinson (1998), Berke (2018), Schultz et al. (1997), and Deci (1971) remain.
- Generated HTML remains unchanged pending figure approval.

## Suggested project-log entry

### 2026-07-22 — Chapter 7 instructor line-edit reconciliation

Reconciled the approved Chapter 7 instructor line edit into `source/chapters/ch07-learning.md`. The chapter now uses learning versus observable performance as its explicit spine; connects generalization and discrimination to perceptual discriminability; condenses Little Albert; removes the mirror-neuron, sustained-uncertainty, and RLHF detours; and retains reward prediction error with a short wanting-versus-liking distinction. Learning Objective 7, the summary, Review Question 10, Further Reading, and References were aligned. `docs/chapters/07-learning.html`, the shared builder, figure assets, and figure wiring were intentionally left unchanged pending the paused Chapter 7 image lane.

## Suggested handoff update

Mark Chapter 7's instructor line edit as reconciled in the authoritative source. Chapters 8–13 remain in the instructor line-edit queue. Keep Chapter 7 HTML regeneration and figure wiring deferred. Note that the uncertainty Figure 7.8 is no longer supported by chapter prose and should be handled only when the Chapter 7 image lane resumes.
