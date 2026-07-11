# Chapter 4 Pre-Review Audit: Sensation and Perception

Audit date: 2026-07-11  
Files audited: `source/chapters/ch04-sensation-perception.md` (577 lines; SHA-256 `D70B2577862C2A9C9E2AF3734DE75A82F315FD27D474176603C703C7387C201B`) and `docs/chapters/04-sensation-perception.html` (827 lines; SHA-256 `AC9E2A6E4C43455EC03739E307A8E6C02A02C5C2172EE87143B06AAF0370917A`). Both files were read in full in line-numbered chunks before the checks began. PowerShell reads returned complete files, including the Markdown's final Zuckerman entry and the HTML's closing `</html>`; no truncation was observed. The audit is read-only except for this report.

## 1. Citation integrity

Method: exhaustive full-file extraction of author/year parentheticals from body prose, captions, and review rationales, followed by comparison with every References entry in each file. Narrative author mentions were also checked manually.

### Missing references

- **Markdown, Figure 4.7 caption, line 167:** the caption cites “Spielman et al., Psychology 2e (OpenStax, 2020),” but the Markdown References list (lines 519–577) has no Spielman/OpenStax entry. This problem does not occur in the HTML because the HTML uses a different, original Gestalt figure and caption.

### Orphaned references

- **Both files:** Enns and Lleras (2008) appears in the References list (`source` line 531; HTML line 796) but is never cited in the body, a caption, or a review rationale.
- **Both files:** Tesla (n.d.) appears in the References list (`source` line 565; HTML line 813), but there is no author/year citation to it. The prose names Tesla and Tesla Vision (`source` lines 148–154; HTML lines 225–230), so the intended relationship is visible, but it does not satisfy the chapter's otherwise consistent author/year citation pattern.

No other missing or orphaned references were found. The Further Reading list was treated as curated back matter, not as the References list.

## 2. Key Terms completeness

Method: exhaustive extraction of every Markdown `**bolded span**` before `## Key Terms`, with manual classification to exclude callout labels, table labels, answer numbers, and ordinary emphasis. Corresponding concepts were accepted despite capitalization, plurality, or a longer glossary label.

### Bolded core vocabulary with no Key Terms entry

- **Section 1, line 62:** hit, miss, false alarm, correct rejection.
- **Section 2, lines 86–98:** retina, fovea, monocular cues, binocular disparity, convergence.
- **Section 3, lines 150–174:** convolutional neural network (CNN), Tesla Vision, figure-ground, proximity, similarity, good continuation, closure, common fate, and Müller-Lyer illusion. “Gestalt organization” is covered collectively by the `Gestalt principles` entry, but the individually introduced bolded principles have no individual entries.
- **Individual Differences table, line 191:** harm avoidance. This is especially a parity issue: HTML has a `Harm avoidance` glossary entry at lines 728–729, while Markdown does not.
- **Section 4, lines 201–239:** auditory canal, hair cells, frequency theory, mechanoreceptors, thermoreceptors, somatotopic map, taste/gustation, smell/olfaction, vestibular sense, and proprioception. `nociceptors` is covered by the singular `Nociceptor` glossary entry.

### Reverse gap: glossary entries not bolded in the body

- **None found at the concept level.** Several labels differ morphologically or collectively (`Nociceptor`/`nociceptors`, `Sensation-seeking`/`sensation-seekers`, `Gestalt principles`/`Gestalt organization` plus named principles), but each glossary concept is visibly introduced in bold in the body.

## 3. Cross-reference accuracy

Method: exhaustive check of all nine Connections rows and every in-body `Chapter N`/`Ch. N` mention. Each target was verified against line 1 of its current source Markdown file.

### Title mismatches or abbreviations in Connections

- **Connections row 1, source line 265 / HTML lines 393–395:** cited target is “Ch. 3 — Neuroscience & Biological Bases (review)”; actual header is `# Chapter 3: Neuroscience and Biological Bases of Behavior`.
- **Rows 4–5, source lines 268–269 / HTML lines 408–415:** cited target is “Ch. 5 — Consciousness”; actual header is `# Chapter 5: Consciousness — The Brain's Model of the World`.
- **Row 3, source line 267 / HTML lines 403–405:** cited target is “Ch. 13 — Psychological Disorders & Therapy”; actual current header is `# Chapter 13: Psychological Disorders & Therapy (v0.3)`. The only difference is the version suffix, but the strings are not identical.
- **Row 8, source line 272 / HTML lines 428–430:** cited target is “Ch. 1 — History & Approaches (review)”; actual header is `# Chapter 1: History and Approaches to Psychology`.

Rows targeting Chapters 8, 9, 10, and 12 match their current numbers and titles. In-body references to Chapters 1, 3, 4, 5, and 8 use numbers without conflicting titles; no wrong chapter number was found.

## 4. Source/HTML parity

Method: exhaustive full-file, paragraph-by-paragraph comparison, supplemented by exhaustive inventories of headings, figures, captions, alt text, review questions/answers, glossary entries, and references. Formatting-only transformations were ignored.

### Content present in one file but not the other

- **HTML-only Weber lab sentence, HTML line 66:** the HTML appends “You can feel this directly: try the Weber's Law demo in the Ch. 4 lab.” The source paragraph at line 56 ends after “stays about the same.”
- **HTML-only Gestalt teaching block, HTML lines 250–259:** a `Think About It` paragraph about W/M-like strokes and a nested figure (`ch04_good_continuation_wm_redrawing.png`) have no counterpart anywhere in the source Markdown.
- **HTML-only glossary entry, HTML lines 728–729:** `Harm avoidance` is absent from the Markdown glossary (source lines 422–488), even though the term is bolded in both bodies.
- **HTML-only References introduction sentence, HTML line 789:** “Distinct from Further Reading above, which is curated for student exploration rather than completeness.” The Markdown introduction at line 521 contains only the preceding sentence.

### Paragraphs that differ materially

- **Hubel and Wiesel section, source lines 102–112 / HTML lines 171–179:** the source has four running-body paragraphs plus a heading; HTML recasts the material into a six-part Classic Study callout (`Question`, `Method`, two `Key finding` paragraphs, `Why it matters`, `Recognition`). The factual sequence is broadly parallel, but these are not paragraph-identical versions and some wording is unique to each.
- **Chapter Summary, source line 249 / HTML line 373:** source lists Gestalt principles as “figure-ground, proximity, similarity, good continuation, closure, and common fate”; HTML lists only “figure-ground, proximity, similarity, closure.”
- **Connections critical-period row, source line 273 / HTML lines 433–435:** source links to `#classic-study-hubel-and-wiesel-and-the-discovery-of-feature-detectors` and says “a theme Lifespan Development extends”; HTML links to the Section 2 anchor and says “a theme Development extends.”
- **Review Question 6 option a, source line 336 / HTML line 525:** source says “requires no sensory input”; HTML says “requires no sensory experience.” The answer and rationale otherwise agree.
- **Sensation-seeking glossary definition, source line 474 / HTML lines 731–732:** HTML adds the inline attribution “(Zuckerman, 1994)”; source does not.

### Figure, path, numbering, alt-text, and caption conflicts

- **First pipeline figure, source lines 48–50 / HTML lines 56–60:** same image path, but both alt text and caption are different. Source caption: “Sensation begins at the sense organ; perception is built across many processing stages. Top-down expectations (purple arrow) feed back into earlier stages...” HTML caption: “Sensation begins when sense organs transduce physical energy into neural signals... expectations, context, and goals can feed back...”
- **Weber figure, source lines 58 and 74–76 / HTML lines 68–73 and 115–119:** source uses an unnumbered `fig_webers_law_jnd_proportion.png` graph at line 58 and later the psychometric image; HTML replaces the Weber graph with `ch04_webers_law_weights.png`, different alt text, and a new caption. The psychometric figure agrees in path/content.
- **Retina through pain figure numbering:** Markdown labels these Figures 4.3–4.10 (`source` lines 88–90, 118–120, 132–134, 140–142, 165–167, 176–178, 207–209, 215–217); HTML labels the corresponding sequence Figures 4.2–4.9 (HTML lines 129–133, 188–191, 205–208, 215–218, 244–247, 271–274, 328–331, 338–341).
- **Gestalt figure, source lines 165–167 / HTML lines 244–247:** source uses `fig_gestalt_principles_openstax.png`, five-panel alt text, and OpenStax attribution. HTML uses `fig_gestalt_principles_original.png`, six-panel alt text, a different claim about the good-continuation panel, and “Original diagram created for this textbook, 2026.” These are different assets and captions, not a render-only difference.
- **Other shared images:** several HTML alt strings are edited versions of Markdown alt strings (for example Figures 4.1, color vision, prediction loop, dress, pitch, and gate control). The central described content is usually equivalent, but the strings are not parity-identical.

### Order differences

- The Markdown glossary places `Prägnanz` after `Predictive coding` (source lines 464–468); HTML places it before `Perceptual constancy` and `Predictive coding` (HTML lines 707–717), and inserts `Harm avoidance` after `Sensation`.
- References are not in the same order. Markdown begins Brainard, Buetti, Cloninger, Elder (source lines 523–529); HTML begins Elder, Brainard, Cloninger, Buetti (HTML lines 792–795). No reference is absent solely because of this reordering.

No diagnostic-question answer conflict was found. Apart from Review Question 6 option a, the 13 review questions, options, answers, and rationales are content-equivalent.

## 5. Figure/caption self-containment

Method: exhaustive review of every Markdown image alt string and caption, plus the HTML-only/replacement figures, against the running body. Attribution-only language was excluded.

- **Prediction-loop figure, source lines 132–134 / HTML lines 205–208:** the figure/caption introduces action as the mechanism that closes the loop (“behavior changes the sensory input”), but the surrounding predictive-coding prose explains descending predictions and prediction error without explaining the action component.
- **Gate-control figure, source lines 215–217 / HTML lines 338–341:** the caption adds `endorphins` as a descending influence. The running body names attention, emotional state, and expectation (source line 213 / HTML line 336) but never explains endorphins.
- **HTML pipeline figure, lines 56–60:** HTML alt/caption adds `goals` as a top-down influence. Running prose explains expectation, memory, context, and prior knowledge but does not explain goal-directed modulation.

No other caption or alt string introduced unexplained vocabulary or a distinct claim. The different Gestalt assets are a parity problem (Check 4), but their named principles are explained in the running body.

## 6. Review question coverage and ceiling

Method: exhaustive count and concept-to-question mapping across all 13 questions, all bolded core terms, named theories/studies, and all eight Learning Objectives.

- **Ceiling:** 13 questions in both files (`source` lines 277–418; HTML lines 440–648), one above the project's 8–12 range. This matches the existing HANDOFF Next Up note.
- **Major concepts with no direct review-question coverage:** absolute threshold; transduction as the common sensory process; sensory adaptation; depth cues (binocular/monocular disparity, convergence, accommodation); Hubel and Wiesel's feature-detector finding (Question 6 tests monocular deprivation/critical periods instead); Gestalt principles/Prägnanz; Tesla Vision/CNN analogy and its limits; Müller-Lyer illusion and cross-cultural interpretation; auditory anatomy/transduction; touch/temperature receptors and somatotopic mapping; visual agnosia and Charles Bonnet syndrome; taste, smell, vestibular sense, and proprioception; binding problem.
- **Learning Objective gap in the question set:** LO 6 is only partly tested—Question 9 covers perceptual constancy, but no question tests Gestalt principles. LO 3 is only partly tested—Question 4 covers rods/cones and Question 10 pitch coding, but no question asks students to trace either visual or auditory transduction/anatomy. LO 1 mentions transduction, but Question 1 tests sensation versus perception only. The other objectives have at least one clear question.

This section reports coverage only and does not identify a question to remove or propose new questions.

## 7. Learning Objectives coverage

Method: exhaustive mapping of each stated objective (source lines 29–36 / HTML lines 37–44) to chapter sections.

1. **Sensation, perception, transduction:** Section 1's Do Not Confuse block (source lines 42–50) and Section 2 opening/retina (84–90); chemical senses reinforce transduction (237–239).
2. **Thresholds, Weber's Law, signal detection:** Section 1 (54–78).
3. **Visual and auditory anatomy/transduction:** Section 2 eye/retina material (84–110) and Section 4 cochlea/hair-cell material (199–209).
4. **Complementary color and pitch theories:** Section 2 color vision (116–122) and Section 4 pitch block (199–209).
5. **Bottom-up/top-down and predictive coding:** opener (13–15) and Section 3 (126–180).
6. **Gestalt principles and perceptual constancy:** Section 3 (159–180).
7. **Gate control theory:** Section 4 (211–219).
8. **Evolutionary perspective on sensory tuning:** Section 1 framing and thresholds/adaptation (52–78), with synthesis in Review Question 13 (411–418).

**Result:** no Learning Objective lacks clearly corresponding chapter content.

## 8. Copyright/lineage flags

Method: exhaustive review of all 15 Sensation & Perception rows (`SP-001` through `SP-015`) in `source/concept_lineage_revised.csv`, selecting every row with `source_confidence = needs-verification` or `wording_change_driver = book-adoption`, then comparing those concepts with the chapter and its provenance note.

- **Book-adoption rows:** `SP-001` Transduction, `SP-002` thresholds, `SP-003` signal detection theory, `SP-004` Weber's Law, `SP-006` top-down/bottom-up, `SP-007` Gestalt principles, `SP-008` visual system, `SP-009` color vision, `SP-011` hearing/cochlea, `SP-013` gate control, and `SP-015` perceptual constancy. Each row's origin columns label the wording `instructor-original`, not publisher-supplied. The chapter's provenance note states: “Copyright: drafted from Noba modules (Privitera; Buetti & Lleras). No wording from Wade, King, or Myers,” and Further Reading identifies the Noba Sensation and Perception module as the primary source (source lines 494–500). On the repository evidence available, these read as Noba/instructor-traced rather than as documented Wade/King/Myers wording.
- **Needs-verification `SP-004` (Weber's Law):** despite the instructor-original origin columns and Noba provenance, this lineage row itself remains `needs-verification`. The current definition is at source line 56 and glossary line 488 (HTML lines 66 and 752–753). Keep flagged for a human proximity read; this audit does not infer clearance from provenance alone.
- **Needs-verification `SP-014` (Tesla Vision framing):** current treatment is at source lines 148–154 and HTML lines 225–230. The lineage row says first appeared with Myers-13e but also labels Myers origin and overall origin as `instructor-original`; the provenance disclaims Myers wording. Because those facts coexist with `needs-verification`, this remains a human lineage/proximity decision rather than a resolved flag.

No chapter concepts were labeled publisher-supplied in the Sensation & Perception lineage rows. This check flags source proximity for review; it does not make a copyright conclusion.

## 9. Voice spot-check

Method: targeted full-file search for the signature items named in the audit template, cross-referenced to all matching rows in `source/voice_profile_merged.csv`. This is a presence/location report, not a quality judgment.

- **Tesla Vision:** present prominently in the Section 3 AI Connection (source lines 148–154; HTML lines 225–230) and revisited in the summary (source line 247; HTML line 371), matching the S&P-specific voice rows.
- **Automatic-camera framing:** the exact phrase “automatic camera” is absent. A closely related camera-versus-brain analogy anchors the misconception opener (source lines 9–15; HTML lines 24–27) and recurs in Sections 2–3. The voice-profile row for the exact automatic-camera phrase is tagged Neuroscience rather than S&P.
- **Video-camera memory misconception:** the exact `video camera`/`video-camera` phrase is absent. The chapter uses the eyes-as-camera misconception instead. The voice-profile rows for video-camera memory are Memory-tagged, so absence here does not conflict with their listed topic placement.
- **Sapolsky/dopamine:** absent. The matching voice-profile rows are tagged Neuroscience, Learning, and Motivation/Emotion/Stress rather than S&P.
- **Herr Prof. Dr./Awesome-Sauce persona:** absent. The merged profile marks the Gen-Psych persona as potentially cross-chapter (“all chapters”) but only occasional, and contains no S&P-specific occurrence requirement.

## 10. Orphaned or placeholder text

Method: exhaustive full-file search for `[FLAG for Jon]`, `TODO`, `[Jon:`, `coming soon`, `PLACEHOLDER`, `when available`, `not yet confirmed`, and HTML comments, followed by manual classification of all matches.

- **Signal-detection lab comment, source line 66 / HTML line 87:** source says `LAB PLACEHOLDER ... wire embed here when lab is live`; HTML retains a developer-facing `DEMO` comment even though a lab link is present immediately afterward.
- **Heider & Simmel developer comment, source line 156 / HTML line 232:** both contain an internal `DEMO` path comment. The visible links conflict as well: source line 157 points to `../labs/motion/demos/heider-simmel/`, while HTML line 235 points to `../labs/ch04/heider-simmel/index.html`.
- **Size-weight placeholder, source lines 171–172 / HTML lines 263–266:** both retain an internal placeholder comment, and the student-facing text says the lab is available only “when available.” HTML additionally says “embed URL not yet confirmed.”

No `[FLAG for Jon]`, `TODO`, `[Jon:`, or `coming soon` string was found. Ordinary structural HTML comments (`Sidebar`, `Main content`) were not treated as editorial artifacts.

## Open decisions for Jon (ordered by effect on chapter meaning)

1. Decide which of the materially different source/HTML versions is authoritative for the Hubel–Wiesel presentation, Weber figure/demo treatment, Gestalt figure and HTML-only continuation block, summary coverage, and associated captions/alt text.
2. Decide whether the lineage evidence is sufficient for `SP-004` Weber's Law and `SP-014` Tesla Vision, or whether either needs a separate proximity review against the historical textbook materials.
3. Decide how the 13-question set should return to the 8–12 ceiling while accounting for the documented major-concept and partial-LO coverage gaps.
4. Decide the intended Key Terms scope for the bolded but unglossed core vocabulary, including the HTML-only `Harm avoidance` entry and the large cluster of anatomy, Gestalt, and other-senses terms.
5. Decide the intended status and canonical paths for the three lab/demo placeholders, especially the conflicting Heider & Simmel links and the not-yet-available size-weight lab.
6. Decide whether the figure-only action-loop, endorphin, and goals claims should remain caption-level material without running-body explanation.
7. Decide how strictly Connections titles should mirror current chapter headers, including whether version suffixes and descriptive subtitles belong in the table.
8. Resolve the missing OpenStax reference and the Enns/Lleras and Tesla reference-use status without assuming whether the intended resolution is a citation addition or a References-list change.
