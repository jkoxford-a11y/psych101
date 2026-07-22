# Chapters 7–13 line-edit packet structural preparation audit

Date: 2026-07-22

## Scope and safety gate

This pass modified only the seven existing Chapter 7–13 instructor line-edit DOCX packets listed below. Before editing, `git status --short` was clean, every packet was tracked and clean, and package inspection found no `word/comments.xml`, comment anchors, tracked insertions or deletions, or move markup. No packet contained existing instructor review work, so none was skipped.

The authoritative Markdown in `source/chapters/`, generated HTML in `docs/chapters/`, figures, labs, shared CSS/JavaScript, references/citation files, `HANDOFF.md`, `GPT_project_log.md`, and Chapters 1–6 packets were not changed.

## Project-wide summary

| Packets changed | Packets skipped | Paragraphs restructured | Bullet lists introduced | Numbered lists introduced | Tables introduced | Original pages | Revised pages |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 7 | 0 | 24 | 7 | 0 | 0 | 142 | 143 |

“Paragraphs restructured” counts each original paragraph replaced by two or more paragraphs and/or a lead-in, list, and landing paragraph. It does not count each resulting paragraph separately.

## Chapter details

### Chapter 7 — Learning

- File: `Chapter_7_Learning_Line_Edit.docx`
- Status: changed
- Pages: 17 original; 17 revised
- Paragraphs restructured: 3
- Bullet lists introduced: 2
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: separated the opening reinforcement objection from the natural-selection framing; converted the four conditioned-stimulus/response definitions into a parallel list with lead-in and landing prose; converted the four reinforcement schedules into a parallel list.
- Wording or punctuation changes: none.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed; 17 rendered pages inspected at full size; render QA flags: 0.

### Chapter 8 — Memory

- File: `Chapter_8_Memory_Line_Edit.docx`
- Status: changed
- Pages: 26 original; 27 revised
- Paragraphs restructured: 16
- Bullet lists introduced: 1
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: separated distinct conceptual jobs in the cross-chapter bridge, sensory-memory/Sperling account, short-term-memory/chunking discussion, levels-of-processing and elaboration discussion, spacing/testing material, explicit/implicit memory material, diagnostic callouts, serial-position material, decay/interference discussion, adaptive-forgetting discussion, misinformation and false-memory material, confabulation/source-misattribution discussion, and chapter summary; converted the three stages of the Atkinson–Shiffrin model into a parallel list.
- Wording or punctuation changes: in the Atkinson–Shiffrin list only, removed the two commas and the connective `and` that joined the three former inline items, and removed the final period so all three list fragments are parallel.
- Paragraphs above 180 words remaining: one 189-word H.M. passage. It remains intact because it is a coherent classic-study narrative that moves from surgery to memory deficit to spared procedural learning; splitting it would weaken the evidentiary sequence.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed apart from the logged list punctuation/connective adjustments; 27 rendered pages inspected at full size; render QA flags: 0.

### Chapter 9 — Thinking, Language, and Intelligence

- File: `Chapter_9_Thinking_Language_Intelligence_Line_Edit.docx`
- Status: changed
- Pages: 21 original; 21 revised
- Paragraphs restructured: 1
- Bullet lists introduced: 1
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: separated the AI-fluency explanation, its three verification checks, and the System 1 boundary; rendered the checks as a parallel bullet list.
- Wording or punctuation changes: none.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed; 21 rendered pages inspected at full size; render QA flags: 0.

### Chapter 10 — Lifespan Development

- File: `Chapter_10_Lifespan_Development_Line_Edit.docx`
- Status: changed
- Pages: 20 original; 20 revised
- Paragraphs restructured: 1
- Bullet lists introduced: 1
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: converted the three recurring developmental tensions into a parallel bullet list after their existing lead-in.
- Wording or punctuation changes: removed the leading `And` from the third bullet to make the three questions parallel.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed apart from the logged connective removal; 20 rendered pages inspected at full size; render QA flags: 0.

### Chapter 11 — Social Psychology

- File: `Chapter_11_Social_Psychology_Line_Edit.docx`
- Status: changed
- Pages: 21 original; 21 revised
- Paragraphs restructured: 1
- Bullet lists introduced: 0
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: split the 332-word Milgram classic-study callout into styled paragraphs for its title, question, setup, figure description, results, variations, interpretation, and ethical aftermath while preserving the walkthrough as one callout.
- Wording or punctuation changes: none.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed; 21 rendered pages inspected at full size, including the complete callout; render QA flags: 0.

### Chapter 12 — Emotion, Stress, and Coping

- File: `Chapter_12_Emotion_Stress_Coping_Line_Edit.docx`
- Status: changed
- Pages: 18 original; 18 revised
- Paragraphs restructured: 1
- Bullet lists introduced: 1
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: converted the four valence/arousal combinations into a parallel bullet list, retaining the core-affect qualification as landing prose.
- Wording or punctuation changes: added a colon after `You can be`; removed the three semicolons, the connective `or`, and the final period from the former inline series so the bullet fragments are parallel.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed apart from the logged list punctuation/connective adjustments; 18 rendered pages inspected at full size; render QA flags: 0.

### Chapter 13 — Psychological Disorders and Therapy

- File: `Chapter_13_Psychological_Disorders_Therapy_Line_Edit.docx`
- Status: changed
- Pages: 19 original; 19 revised
- Paragraphs restructured: 1
- Bullet lists introduced: 1
- Numbered lists introduced: 0
- Tables introduced: 0
- Structural changes: converted four representative disorder-category summaries into a parallel bullet list, preserving the personality/neurodevelopmental qualification as landing prose.
- Wording or punctuation changes: removed the three semicolons and final period from the former inline series so the bullet fragments are parallel.
- Paragraphs above 180 words remaining: none.
- Validation: PASS — valid OOXML; no comments or tracked changes; text/order and all protected content invariants passed apart from the logged list punctuation adjustments; 19 rendered pages inspected at full size; render QA flags: 0.

## Validation record

For every changed packet:

- Confirmed the DOCX is a valid ZIP/OOXML package.
- Confirmed the absence of `word/comments.xml`, comment anchors, `w:ins`, `w:del`, `w:moveFrom`, and `w:moveTo` after editing.
- Compared original and revised extracted text. Except for the wording/punctuation adjustments logged above, wording and sentence order are unchanged.
- Confirmed exact preservation of headings, citations, figure/video caption markers, review questions and answers, key terms, Further Reading, References, and tables.
- Canonically compared styles, headers, footers, and core properties; all matched their originals.
- Rendered every revised packet through the DOCX-to-PDF-to-page-image workflow and inspected all 143 pages at 1:1/full-size resolution. No clipped or missing text, broken tables, stranded headings, malformed lists, excessive blank space, accidental blank pages, footer/page-number errors, changed fonts, or awkward list-item page splits were found.
- Ran `pipeline/qa_line_edit_renders.py` against the expected `_rendered-final/<packet-stem>/page-N.png` structure: 7 packets, 143 pages, 0 flags.
- Ran `git diff --check`: PASS.

The render helper required a temporary Windows-only profile-URI/PDF rasterization compatibility adaptation. No renderer, builder, or QA script was changed in the repository.
