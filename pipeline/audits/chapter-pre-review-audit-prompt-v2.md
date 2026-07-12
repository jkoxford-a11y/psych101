# Psych 101 Chapter Pre-Review Audit Prompt 2.0

Audit Chapter **[CHAPTER NUMBER: CHAPTER TITLE]** in the canonical `psych101` repository.

This is a **read-only diagnostic audit**. Do not edit chapter prose, HTML, figures, labs, metadata, inventories, project-state files, or generated outputs. Produce one evidence-grounded audit report for editorial review.

## Purpose

Determine whether the chapter is:

- scientifically and conceptually accurate;
- learnable by first-year General Psychology students;
- organized around a coherent explanatory argument;
- aligned across objectives, prose, figures, retrieval, labs, summary, glossary, and review questions;
- compliant with current project requirements without mistaking preferences or targets for hard rules;
- consistent across authoritative source files, generated output, figures, labs, citations, and metadata;
- written in the instructor’s established voice;
- ready for line-by-line editorial review.

Do not treat exhaustive discrepancy detection as editorial judgment. Separate:

1. **Confirmed defects** — objectively broken, contradictory, missing, inaccurate, legally risky, or noncompliant with an explicit hard requirement.
2. **Editorial decisions** — reasonable alternatives that require the author’s judgment.
3. **Optional enhancements** — improvements that are not required for correctness or readiness.

Do not inflate minor formatting differences into major findings. Do not reward report length. Prioritize root causes, load-bearing claims, and minimum effective repairs.

---

## 1. Establish repository state and authority

Read first:

- `AGENTS.md`
- `HANDOFF.md`
- `pipeline/chapter-spec.md`
- `pipeline/html-conversion-spec.md`
- `pipeline/voice-brief.md`
- `docs/images/psych101_figure_style_guide.md`
- `docs/labs/lab-design-spec.md`
- `source/visuals-inventory.md`
- `source/concept_lineage_revised.csv`

Then inspect:

- the chapter’s authoritative Markdown under `source/chapters/`;
- the corresponding generated HTML under `docs/chapters/`, if it exists;
- the chapter-specific image README, metadata, tracker, or specification files;
- the actual chapter image files;
- all relevant labs and demonstrations across the complete lab inventory, not only chapter-numbered folders;
- the chapter’s provenance file;
- relevant entries in `GPT_project_log.md`;
- any chapter-specific edit sheet, revision note, or handoff file.

State explicitly:

- which file is the prose source of truth;
- which file is generated output;
- whether generated output exists;
- whether chapter-specific metadata is more current than the global inventory;
- whether files appear complete rather than truncated;
- whether stale or contradictory project documentation was encountered;
- which defects belong to this chapter and which belong to a shared pipeline, CSS, or site layer.

Do not ask which version is authoritative when repository instructions already establish authority. If generated output contains valuable material absent from source, identify what must be moved into the source before regeneration.

---

## 2. Identify the chapter’s semantic skeleton

Do this before listing local defects or citation minutiae.

### Core argument

State the chapter’s central explanatory claim in 2–4 sentences.

### Two-week memory test

List the 5–8 ideas students should still remember two weeks later.

### Reconstruction test

Ask whether a student could reconstruct the chapter’s argument from:

- section headings;
- learning objectives;
- bolded core terms;
- figures;
- retrieval prompts;
- labs or demonstrations;
- chapter summary;
- review questions.

Report where these elements support the same argument and where they pull in different directions.

### Conceptual progression

Describe the current sequence of ideas. Identify:

- missing prerequisite concepts;
- concepts introduced before sufficient scaffolding;
- abrupt changes in explanatory level or topic;
- sections that belong earlier, later, in a sidebar, in a table, in a figure, in a lab, or in another chapter;
- places where the chapter becomes a catalog rather than an explanation.

---

## 3. Construct and framework map

Before auditing individual claims, identify the chapter’s **4–8 central constructs, mechanisms, and theoretical frameworks** in a compact map.

For each, state briefly:

- its working definition in the chapter;
- whether it is an observation, construct, mechanism, theory, adaptive-function claim, or philosophical claim;
- the theoretical framework from which it comes;
- the nearest concept with which students might confuse it;
- whether the chapter keeps it distinct from related concepts;
- whether its meaning remains stable across sections.

Do not produce extended analysis for constructs that are clearly defined, consistently used, and unproblematic. Analyze in depth only constructs that are load-bearing, contested, conflated, or unstable.

Explicitly look for **construct slippage**, including:

- attention becoming consciousness;
- conscious access becoming subjective experience;
- a proxy becoming the underlying process;
- correlation becoming mechanism;
- a framework becoming a definition;
- a descriptive pattern becoming an adaptive explanation;
- a pedagogical analogy becoming literal biological, cognitive, or computational architecture;
- a broad process becoming identified with one biomarker, brain region, transmitter, stage, or study.

Then identify the chapter’s **3–5 load-bearing claims**: claims whose failure would require substantial reorganization of the chapter. Audit these before listing local factual or mechanical defects.

---

## 4. Audit load-bearing claims and inference ladders

For every load-bearing claim, trace the inference ladder as far as the chapter actually climbs:

1. What was directly observed?
2. What construct is inferred from the observation?
3. What mechanism is proposed?
4. What broader theory is said to explain it?
5. Is an adaptive function or evolutionary origin then inferred?

Mark unused levels as **not applicable**. Do not force every claim through all five levels.

Classify every inferential step as:

- **directly demonstrated**;
- **strongly supported inference**;
- **plausible but non-unique interpretation**;
- **speculative**.

Do not allow evidence at one level to establish every higher level automatically.

Flag suspiciously neat one-to-one mappings, especially where:

- one neurotransmitter is assigned one psychological function;
- one drug class is treated as a selective lesion;
- one brain region is assigned one behavior;
- one sleep stage or portion of the night is assigned one exclusive function;
- one biomarker or contributing process is treated as identical to a broader regulatory system;
- an imaging association or functional-connectivity result is described as a demonstrated causal mechanism;
- an animal mechanism is generalized to humans without marking the evidential transition;
- one small, restricted, or single-study result is promoted into a universal pathway;
- multiple biological or cognitive systems are arranged into a symmetric matrix unsupported by equally strong evidence.

Perform an explicit **internal-consistency scan** across the complete chapter. Compare:

- early and late prose;
- figure artwork, captions, and alt text;
- learning objectives;
- chapter summary;
- glossary definitions;
- review questions and answer rationales;
- labs or demonstrations.

Flag cases where the chapter contradicts itself or becomes more certain downstream even if each isolated sentence appears plausible.

---

## 5. Check project-spec compliance correctly

For every reported specification issue, identify the governing file and classify the rule as:

- **hard requirement**;
- **numerical target**;
- **preferred structural pattern**;
- **optional element**.

Use **noncompliant** only for violation of an explicit hard requirement.

Do not infer requirements from examples, customary chapter patterns, other chapters, or language such as “used liberally.” Treat justified deviations from targets as editorial decisions rather than objective defects.

A target deviation becomes a substantive issue only when it creates a demonstrated learning, accuracy, usability, or structural problem.

Check actual counts where specifications provide them:

- learning objectives;
- major sections;
- approximate body length;
- chapter-summary length;
- Connections rows;
- review questions;
- Key Terms entries;
- Further Reading items;
- Stop and Retrieve prompts;
- Think About It prompts;
- Classic Study walkthroughs;
- labs or demonstrations.

Report the count, governing rule, classification, and instructional consequence.

Do not merely flag excess. Evaluate whether the solution should be:

- removal;
- consolidation;
- reclassification;
- movement to a table, sidebar, figure, lab, or another chapter;
- acceptance as a justified deviation;
- revision of the project specification.

Do not force every optional chapter element into every chapter.

---

## 6. Evaluate learning objectives and alignment

For each learning objective, report:

- where it is taught;
- where it is practiced;
- whether it is tested;
- whether the expected performance level matches the treatment;
- whether it duplicates another objective;
- whether it contains multiple distinct tasks;
- whether two objectives should be merged.

Flag objectives that are:

- too broad or too narrow;
- not actually taught;
- taught but not practiced;
- tested only through trivia;
- more advanced than the chapter supports;
- inconsistent with the semantic skeleton.

Identify major chapter content not represented in any objective and decide whether it should be promoted, reduced, moved, or removed.

Do not solve every alignment gap by adding another objective.

---

## 7. Audit conceptual accuracy and explanatory overreach

This is a substantive scientific review, not citation matching alone.

For every major explanatory claim, ask:

- Is the claim accurate at the level stated?
- Does the evidence support the causal language used?
- Is a correlation being treated as a mechanism?
- Is a plausible account being presented as settled?
- Are distinct theories, constructs, or computational architectures being conflated?
- Is an analogy being mistaken for an identity?
- Are constructs from different frameworks being treated as opposite ends of one dimension without evidence?
- Does a lesion, disorder, illusion, demonstration, or imaging result establish the claimed mechanism, or is it merely consistent with it?
- Is an evolutionary account tested or merely adaptive-sounding?
- Is a historical explanation still accepted?
- Are group differences or individual differences described more confidently than the evidence permits?
- Does a figure, caption, glossary definition, summary, or question make a stronger claim than the body prose?

For contested claims, classify the chapter’s treatment as:

- strongly established;
- broadly supported but simplified;
- plausible and debated;
- weak or outdated;
- incorrect or misleading.

Search current primary or authoritative sources when scientific accuracy, current consensus, or citation details materially affect the judgment. Prefer primary research, systematic reviews, consensus statements, and official documentation over popular summaries.

Do not add citations merely to preserve a weak claim. Narrow or remove the claim first, then identify the evidence needed for what remains.

---

## 8. Audit cognitive load, organization, and teachability

Evaluate the chapter as instruction for first-year students.

Identify:

- paragraphs containing more than one hard idea;
- long sections without retrieval or application;
- dense anatomical, historical, empirical, or theoretical catalogs;
- terms defined too far from first use;
- examples requiring more background than they provide;
- repeated explanations that can be shortened;
- important distinctions buried inside long paragraphs;
- supporting studies that displace the central concept;
- material better represented as a table, figure, sidebar, lab, or Further Reading;
- sections that are intellectually interesting but not necessary for Psych 101;
- abrupt transitions between observation, mechanism, theory, adaptive function, and philosophical interpretation.

For each high-load passage, recommend one of:

- keep;
- shorten;
- split;
- move;
- convert to table;
- convert to figure;
- convert to lab;
- move to sidebar;
- move to Further Reading;
- cut.

Do not silently favor shorter prose. Preserve complexity when it is necessary for understanding.

---

## 9. Audit examples, analogies, and AI connections

For each major analogy or recurring example:

- state its instructional job;
- identify what maps correctly;
- identify where the analogy breaks;
- determine whether the prose marks that boundary clearly;
- flag analogies that introduce a second, harder concept without enough payoff;
- flag analogies that become literal explanatory architecture;
- flag decorative or distracting AI references.

AI connections must clarify the psychology. They should not:

- treat a broad family of machine-learning systems as one architecture;
- claim biological and artificial systems use the same mechanism without evidence;
- imply that classification, prediction, attention, memory, learning, or consciousness are identical across systems;
- become a technology sidebar unrelated to a learning objective;
- allow students to outsource the psychological reasoning.

Prefer AI-after-effort, comparison, critique, calibration, boundary analysis, and reflection.

---

## 10. Audit figures and visual pedagogy

Inspect the actual figure whenever possible. Do not audit figures only from filenames, captions, or alt text.

For every figure, inspect:

- file existence and correct path;
- source and HTML agreement;
- caption and alt text;
- attribution, license, and public-sharing status;
- chapter-specific metadata;
- visual necessity;
- scientific accuracy;
- readability at textbook and slide scale;
- cognitive load;
- whether it teaches one hard idea;
- whether visual encodings are understandable without relying on color alone;
- whether it duplicates nearby prose or a table;
- whether surrounding prose prepares students to interpret it;
- whether artwork, labels, caption, and alt text make the same claim;
- whether it reinforces a misconception;
- whether it is explanatory or merely decorative.

Classify each figure as:

- use now;
- revise;
- slide only;
- candidate/reference;
- remove.

Do not recommend a new figure merely because a topic lacks one. Recommend one only when visual structure would teach something prose cannot teach efficiently.

For each genuinely needed new or revised figure, provide:

- suggested descriptive filename;
- core teaching job;
- proposed caption;
- accessibility-first alt text;
- attribution approach;
- public-sharing status;
- accuracy caveat.

Do not embed figure numbers in filenames or artwork.

---

## 11. Audit labs and demonstrations

Search the complete lab and demonstration inventory before recommending a new activity. Do not assume the relevant lab must be stored under the same chapter number.

Inventory all relevant lab references, standalone lab pages, demos, simulations, and candidate activities.

Check:

- whether the file exists;
- whether paths work from source and rendered pages;
- whether source and HTML point to the same canonical location;
- whether the activity is complete or a placeholder;
- whether the chapter claims it is available when it is not;
- whether an existing activity already practices the same operation;
- whether it requires prediction or effort before feedback;
- whether it includes manipulation, observation, explanation, retrieval, and transfer where appropriate;
- whether it collects or transmits student data;
- whether it is accessible and privacy-preserving;
- whether it overclaims that a brief activity diagnoses the student or constitutes a valid experiment on the student;
- whether it is worth interrupting the prose.

Classify each existing activity as:

- working and appropriately integrated;
- working but poorly integrated;
- built but not wired;
- placeholder;
- broken;
- candidate/reference;
- unnecessary duplicate.

Then make one explicit **lab-gap decision**:

- no lab needed;
- an existing lab should be reused;
- one new lab is justified;
- more than one lab is justified.

Recommend a new lab only when students need active practice with prediction, classification, calibration, variable manipulation, misconception correction, or transfer that prose and retrieval questions cannot provide efficiently.

Prefer the chapter’s most important unpracticed cognitive operation over a visually interesting demonstration. Do not duplicate an existing lab merely because a concept reappears in another chapter.

For every proposed lab, specify:

- cognitive operation practiced;
- why prose or a retrieval prompt is insufficient;
- prediction-before-feedback step;
- manipulation or classification task;
- retrieval and transfer step;
- accessibility and privacy safeguards;
- appropriate location under `docs/labs/`;
- whether it should be standalone or embedded.

---

## 12. Audit retrieval prompts and review questions

For each review question, identify:

- learning objective tested;
- core concept tested;
- cognitive level: recall, discrimination, application, or integration;
- whether distractors are plausible;
- whether the rationale explains why a wrong answer is tempting;
- whether the item tests understanding or incidental study details;
- whether two questions test nearly the same operation;
- whether an unsupported or contested claim is treated as settled;
- whether the answer can be inferred from wording rather than knowledge.

Evaluate the set as a whole:

- Does it cover the semantic skeleton?
- Does it sample major objectives proportionately?
- Does it include cross-section or cross-chapter integration where useful?
- Does it overrepresent one section, study, or proper noun?
- Does it omit a load-bearing claim?
- Is the count within the governing specification?

When revision is needed, specify exactly which questions to:

- keep;
- revise;
- replace;
- merge;
- remove.

Do not solve an uncovered-concept problem by simply increasing the question count.

Also evaluate distribution of Stop and Retrieve, Think About It, Do Not Confuse, and worked-example prompts. A chapter can have an acceptable total count but poor distribution.

---

## 13. Audit Key Terms and chapter ending

### Key Terms

First count the glossary and classify the governing specification.

Then classify possible terms:

- **Tier 1 — Must retain:** durable concepts students should use after the chapter;
- **Tier 2 — Useful but optional:** terms supporting comprehension but not necessarily glossary space;
- **Tier 3 — Do not glossary:** one-off study details, proper nouns, isolated anatomical labels, analogy-specific terms, response categories nested under a broader concept, or terms sufficiently explained in context.

Check:

- alphabetical order;
- concise and accurate definitions;
- first-use bolding;
- terms in the glossary but absent from the body;
- central body concepts absent from the glossary;
- duplicative entries;
- definitions that become more certain than the body;
- terms that should be consolidated under a broader entry.

Do not equate bolding with glossary eligibility.

### Chapter ending

Check whether:

- the summary cues recall rather than reteaching the chapter;
- the summary preserves uncertainty and does not strengthen claims;
- the summary matches the semantic skeleton;
- the Connections table contains meaningful backward and forward links;
- internal anchors resolve;
- chapter-number references are correct;
- visible chapter labels match `docs/index.html`;
- Further Reading and References remain distinct;
- Further Reading items are precise enough to locate and useful enough to retain.

---

## 14. Audit citations, references, and concept lineage

Check:

- body citation with no References entry;
- References entry never cited;
- citation appearing only in a caption;
- incorrect author/year pairing;
- incomplete or duplicate citation;
- citation supporting a different claim from the one attributed to it;
- Further Reading item mixed into References;
- substantive factual claim lacking support;
- historical source used alone for a modern consensus claim;
- current summary source substituted for a primary historical claim;
- small or restricted study generalized without limitation;
- animal evidence generalized to humans without qualification.

Do not automatically add a missing reference when the passage or figure should instead be removed or narrowed.

For concepts marked `book-adoption`, `needs-verification`, publisher-originated, or ambiguous in `source/concept_lineage_revised.csv`, determine whether wording is traceable to:

- Noba;
- APA IPI;
- primary literature;
- instructor-authored prose;
- a commercial textbook.

Distinguish:

- wording-risk issue;
- citation issue;
- concept-origin issue;
- merely shared subject matter.

Never recommend copying or closely paraphrasing Wade, King, Myers, or another commercial textbook.

---

## 15. Audit source/HTML parity and rendered output

If generated HTML exists, compare complete source Markdown and generated HTML semantically.

Classify differences as:

### Dangerous parity defects

- material exists only in HTML and would disappear during regeneration;
- source and HTML use different figures;
- claims, examples, questions, answers, citations, or links conflict;
- figure numbering differs;
- labs point to different destinations;
- a section is absent from one version;
- one version contains obsolete or unapproved material;
- Key Terms, Further Reading, or References differ substantively.

### Acceptable rendering transformations

- Markdown rendered as a structured callout;
- Classic Study rendered with instructional labels;
- formatting changes required by HTML;
- different but equivalent alt-text wording;
- minor caption editing that preserves meaning.

Do not demand character-for-character parity. Require semantic parity.

Inspect rendered HTML for:

- broken anchors and relative links;
- missing images;
- empty or malformed alt text;
- mojibake;
- truncated content;
- empty Key Terms;
- broken answer disclosure;
- missing closing tags;
- mobile overflow;
- unreadable tables at narrow widths;
- captions or figures that fail responsively;
- keyboard-inaccessible controls;
- labs or expandable figures that fail in one orientation.

Separate reproduced browser defects from code-level suspicions.

If generated HTML is absent or globally stale, state that clearly. Do not list every expected stale-output symptom as a separate chapter-source defect.

---

## 16. Audit voice

Use `pipeline/voice-brief.md` as the authority.

Evaluate:

- direct address to students;
- concrete scene-setting;
- explicit argument turns;
- jargon defined in place;
- dry, restrained humor;
- short landing sentences;
- appropriate uncertainty;
- cross-chapter connections;
- proportionate evolutionary or behavioral-ecology framing;
- signature analogies or cases where genuinely relevant;
- instructor voice preserved rather than generic publisher prose.

Do not require every signature analogy, case, or persona marker in every chapter.

Flag:

- generic publisher prose;
- marketing language;
- repetitive scaffolding;
- excessive rhetorical questions;
- overdone persona;
- uncharacteristic jargon density;
- claims smoothed into certainty for narrative convenience.

Quote only brief excerpts needed to locate a problem.

---

## 17. Root-cause consolidation and scope routing

Before writing the report:

- group downstream symptoms under their shared root cause;
- do not create separate actionable defects for problems that will disappear through one approved repair;
- give each substantive issue one primary location in the report;
- cross-reference rather than repeating full findings;
- separate chapter-specific defects from shared-site or pipeline defects;
- distinguish current source problems from obsolete generated-output symptoms.

For each substantive root cause, report:

- **Root cause**
- **Why it matters for learning or accuracy**
- **Affected surfaces:** body prose, figure, caption, objective, question, summary, glossary, reference, lab, or generated output
- **Minimum repair**
- **Action route**
- **Confidence:** high, medium, or low

Route each required action to one of:

- authoritative source revision;
- figure revision;
- lab revision or construction;
- metadata or attribution work;
- later HTML regeneration;
- shared pipeline/CSS/site repair;
- optional enhancement.

When generated HTML is globally stale, do not list every obsolete image path, malformed item, or duplicated element as a separate source-editing task unless the defect would survive regeneration.

Limit the main report to the highest-impact **5–8 substantive root causes** unless additional issues are genuinely independent. Place low-impact mechanical findings in a compact appendix.

---

## 18. Final report format

Lead with:

1. the chapter’s load-bearing claims;
2. the highest-level root causes;
3. the minimum repair sequence.

Do not repeat the same issue in Confirmed Defects, Scientific Accuracy, Cognitive Load, Figures and Labs, and Recommended Operations. Give the full analysis once and use short cross-references elsewhere.

### A. Executive judgment

In 4–8 sentences:

- Is the chapter conceptually sound?
- Is it teachable?
- Is it ready for line editing?
- What are the highest-impact root causes?

### B. Semantic skeleton and two-week takeaways

Include:

- core argument;
- two-week memory test;
- reconstruction judgment;
- conceptual progression.

### C. Construct/framework map and load-bearing claims

Provide the compact construct map and inference-ladder classifications.

### D. Root-cause repair table

For each of the 5–8 highest-impact root causes, provide:

- severity;
- root cause;
- affected surfaces;
- evidence;
- minimum repair;
- action route;
- confidence.

### E. Minimum repair sequence

Provide a numbered sequence that minimizes conflicting edits and avoids premature HTML regeneration.

### F. Alignment decisions

Cover only necessary decisions involving:

- objectives;
- retrieval distribution;
- review questions;
- glossary;
- summary and Connections.

### G. Figures and lab-gap decision

Include figure status decisions and one explicit lab-gap decision.

### H. Source/HTML and pipeline routing

State what belongs to source revision, later regeneration, or shared-site repair.

### I. Citation, lineage, and verification needs

Include only substantive citation and copyright-lineage issues.

### J. Decisions requiring Jon’s judgment

List only genuine alternatives affecting meaning, scope, organization, or pedagogy.

### Appendix: Low-impact mechanical findings

Place alphabetization, incomplete resource labels, minor metadata cleanup, obsolete generated-output polish, and shared mobile-layout issues here unless they materially affect learning or accuracy.

---

## 19. Severity rules

Use:

- **Critical:** scientifically wrong, legally risky, broken page, privacy problem, or likely to teach a major misconception;
- **High:** distorts a load-bearing claim, creates major cognitive overload, or would lose important content during regeneration;
- **Medium:** weakens learning, alignment, accessibility, or consistency;
- **Low:** mechanical cleanup with little effect on learning;
- **Optional:** plausible enhancement, not a defect.

Do not label exact wording differences, harmless rendering transformations, reference ordering, abbreviated chapter labels, or target deviations without demonstrated consequences as high-severity problems.

---

## 20. Audit discipline

- Be true to the argument, not to the current draft.
- Preserve the strongest version of the chapter’s idea before identifying weaknesses.
- Do not praise or criticize performatively.
- Do not assume more content is better.
- Do not assume shorter is always better.
- Do not convert every discrepancy into a task.
- Do not treat automated counts as editorial conclusions.
- Do not recommend broad edits when a narrow repair is sufficient.
- Distinguish observation, inference, mechanism, theory, and adaptive explanation.
- State uncertainty and alternative explanations.
- Verify current or contested scientific claims rather than relying on inherited textbook formulations.
- Do not edit files during this audit.
- Do not update `HANDOFF.md` or `GPT_project_log.md` during the audit.
- End with a compact list of decisions that genuinely require Jon’s judgment.
