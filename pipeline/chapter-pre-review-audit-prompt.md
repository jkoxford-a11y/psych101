# Psych 101 Chapter Pre-Review Audit

Audit Chapter **[CHAPTER NUMBER: CHAPTER TITLE]** in the canonical `psych101` repository.

This is a **read-only diagnostic audit**. Do not edit chapter prose, HTML, figures, labs, metadata, inventories, or project-state files. Produce one audit report for editorial review.

## Purpose

Determine whether the chapter is:

- Accurate
- Learnable by first-year students
- Organized around a coherent argument
- Within project specifications
- Consistent across source Markdown, rendered HTML, figures, labs, citations, and metadata
- Written in the instructor’s established voice
- Ready for line-by-line editorial review

Do not treat exhaustive discrepancy detection as the same thing as editorial judgment. Separate:

1. **Confirmed defects** — objectively broken, contradictory, missing, inaccurate, or noncompliant.
2. **Editorial decisions** — reasonable alternatives that require the author’s judgment.
3. **Optional enhancements** — improvements that are not necessary for correctness or readiness.

Do not inflate minor formatting differences into major findings.

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

- The chapter’s authoritative Markdown under `source/chapters/`
- The corresponding generated HTML under `docs/chapters/`
- The chapter-specific image README or metadata file
- The chapter-specific image directory
- Relevant chapter labs and demonstrations
- The chapter’s provenance file
- Relevant entries in `GPT_project_log.md`
- Any chapter-specific tracker, edit sheet, revision note, or handoff file

State explicitly:

- Which file is the prose source of truth
- Which file is generated output
- Whether any chapter-specific metadata is more current than the global inventory
- Whether the files appear complete rather than truncated
- Whether the audit encountered stale or contradictory project documentation

Do not ask which version is authoritative when repository instructions already establish authority. Instead, identify valuable content in generated output that must be preserved by moving it into the source before regeneration.

---

## 2. Identify the chapter’s semantic skeleton

Before listing defects, summarize:

### Core argument
State the chapter’s central explanatory claim in 2–4 sentences.

### Two-week memory test
List the 5–8 ideas students should still remember two weeks later.

### Reconstruction test
Ask whether a student could reconstruct the chapter’s argument from:

- Section headings
- Learning objectives
- Bolded core terms
- Figures
- Retrieval prompts
- Chapter summary
- Review questions

Report where those elements support the same argument and where they pull in different directions.

### Conceptual progression
Describe the current sequence of ideas. Identify:

- Missing prerequisite concepts
- Concepts introduced before students have enough scaffolding
- Abrupt topic changes
- Sections that belong earlier, later, in a sidebar, in a table, in a lab, or in another chapter
- Places where the chapter becomes a catalog rather than an explanation

This section is mandatory. Do not begin with citation minutiae.

---

## 3. Check project-spec compliance

Check actual counts against current project specifications:

- Learning objectives
- Major sections
- Approximate body length
- Chapter-summary length
- Connections rows
- Review questions
- Key Terms entries
- Further Reading items
- Stop and Retrieve prompts
- Think About It prompts
- Classic Study walkthroughs
- Labs or demos

Report both the count and the allowed range.

Do not merely flag excess. Evaluate whether the solution should be:

- Removal
- Consolidation
- Reclassification
- Movement to a table, sidebar, figure, or lab
- Revision of the project specification because the exception is justified

Particular rules:

- Do not recommend adding glossary entries for every bolded technical expression.
- The glossary should contain the chapter’s durable conceptual vocabulary, not every anatomical label, response category, proper noun, or supporting analogy.
- Do not recommend adding review questions for every uncovered noun or study.
- Review questions should sample the learning objectives and semantic skeleton.
- Do not force every optional chapter element into every chapter.

---

## 4. Evaluate learning objectives

For each learning objective, report:

- Where it is taught
- Where it is practiced
- Whether it is tested
- Whether the expected level of performance matches the chapter
- Whether it duplicates another objective
- Whether it contains multiple distinct tasks that should be separated
- Whether two objectives could be merged

Flag objectives that are:

- Too broad
- Too narrow
- Not actually taught
- Taught but not practiced
- Tested only through trivia
- More advanced than the chapter’s treatment supports

Also identify major chapter content that is not represented in any objective and decide whether that content should be promoted, reduced, or removed.

---

## 5. Audit conceptual accuracy and explanatory overreach

This is a substantive scientific review, not just citation matching.

For every major explanatory claim, ask:

- Is the claim accurate at the level stated?
- Does the evidence support the causal language used?
- Is a correlation being treated as a mechanism?
- Is a plausible account being presented as settled?
- Are two distinct theories or computational architectures being conflated?
- Is an analogy being mistaken for an identity?
- Are two constructs from different frameworks being treated as opposite ends of one dimension without evidence?
- Does “same stimulus” incorrectly become “identical neural input”?
- Does a lesion, disorder, illusion, or demonstration support the claimed theory, or is it merely consistent with it?
- Is an evolutionary account tested or merely adaptive-sounding?
- Is a historical explanation still accepted?
- Are individual differences described more confidently than the evidence allows?
- Does a caption make a stronger claim than the prose?

For contested claims, distinguish:

- Strongly established
- Broadly supported but simplified
- Plausible and debated
- Weak or outdated
- Incorrect or misleading

Search current primary or authoritative sources when scientific accuracy, current consensus, or citation details materially affect the judgment. Do not rely solely on inherited textbook claims.

Include a section titled:

## Strong claims requiring author attention

Limit this to the highest-impact conceptual problems. Do not bury them beneath mechanical findings.

---

## 6. Audit cognitive load and teachability

Evaluate the chapter as instruction for first-year students.

Identify:

- Paragraphs containing more than one hard idea
- Long sections without retrieval or application
- Dense anatomical or theoretical catalogs
- Terms defined too far from first use
- Examples that require more background than they provide
- Repeated explanations that can be shortened
- Important distinctions buried inside long paragraphs
- Supporting studies that displace the central concept
- Material better represented as a table
- Material better represented as a figure
- Material better practiced in a lab
- Material that should be moved to Further Reading
- Sections that are intellectually interesting but not necessary for Psych 101

For each high-load passage, recommend one of:

- Keep
- Shorten
- Split
- Move
- Convert to table
- Convert to figure
- Convert to lab
- Move to sidebar
- Cut

Do not silently favor shorter prose. Preserve complexity when it is necessary for understanding.

---

## 7. Audit examples, analogies, and AI connections

For each major analogy or recurring example:

- State its instructional job.
- Identify what maps correctly.
- Identify where the analogy breaks.
- Determine whether the prose marks that boundary clearly.
- Flag analogies that introduce a second, harder concept without enough payoff.
- Flag decorative AI references.

AI connections must clarify the psychology. They should not:

- Treat a broad family of machine-learning models as one architecture
- Claim biological and artificial systems use the same mechanism without evidence
- Imply that object classification is identical to predictive coding
- Become a technology sidebar unrelated to the learning objective
- Encourage students to outsource the psychological reasoning

Prefer comparison, critique, calibration, and boundary analysis.

---

## 8. Audit source/HTML parity semantically

Compare the complete source Markdown and generated HTML.

Classify differences as:

### A. Dangerous parity defects
Examples:

- Material exists only in HTML and would disappear during regeneration
- The source and HTML use different figures
- Claims, examples, questions, answers, citations, or links conflict
- Figure numbering differs
- Labs point to different destinations
- A section is absent from one version
- One version contains obsolete copyrighted or unapproved material
- Key Terms or References differ substantively

### B. Acceptable rendering transformations
Examples:

- Markdown prose rendered as a structured callout
- A Classic Study rendered with Question / Method / Finding labels
- Minor caption editing that preserves meaning
- Formatting changes required by HTML
- Different but equivalent alt-text wording

Do not demand character-for-character parity. Require semantic and content parity.

When the HTML contains a superior instructional structure, recommend moving the approved structure into the authoritative source rather than flattening the HTML.

---

## 9. Audit citations and references

Perform citation integrity checks:

- Body citation with no References entry
- References entry never cited
- Citation that appears only in a caption
- Incorrect author/year pairing
- Incomplete citation
- Duplicate citation
- Citation supporting a different claim than the prose attributes to it
- Further Reading item incorrectly mixed into References
- External factual claim with no source where one is needed
- Current source used for a historical primary claim when the primary source should be cited
- Historical source used for a modern consensus claim without current support

Do not automatically add a missing reference when the cited passage or figure is obsolete and should be removed.

Treat corporate or product references separately:

- A product webpage may document a product feature.
- It does not independently validate a psychological or computational analogy.

Prioritize substantive citation problems over alphabetical-order differences.

---

## 10. Audit copyright and concept lineage

For every chapter concept marked:

- `book-adoption`
- `needs-verification`
- Publisher-originated
- Ambiguous in `concept_lineage_revised.csv`

Check whether the current wording is traceable to:

- Noba
- APA IPI
- Primary literature
- Instructor-authored prose
- A commercial textbook

Do not infer clearance merely because a provenance note says the chapter was rewritten.

Flag passages needing a human proximity review, but distinguish:

- Wording-risk issue
- Citation issue
- Concept-origin issue
- Merely shared subject matter

Never recommend copying or closely paraphrasing Wade, King, Myers, or another commercial textbook.

---

## 11. Audit figures and visual pedagogy

For every figure, inspect:

- File existence
- Correct path
- Source and HTML agreement
- Caption
- Alt text
- Attribution
- License
- Public-sharing status
- Chapter-specific metadata
- Visual necessity
- Accuracy
- Readability
- Cognitive load
- Whether the figure teaches one hard idea
- Whether the figure duplicates a nearby table or paragraph
- Whether the surrounding prose prepares students to interpret it
- Whether the caption introduces unsupported vocabulary or claims
- Whether the image reinforces a misconception
- Whether the figure is decorative rather than explanatory

Distinguish:

- Use now
- Revise
- Slide only
- Candidate/reference
- Remove

Check the actual figure when possible. Do not audit figures only from filenames or alt text.

Do not recommend a new figure simply because a topic lacks one. Recommend a figure only when visual structure would teach something prose cannot teach efficiently.

For each genuinely needed new or revised figure, provide:

- Suggested filename
- Core teaching job
- Proposed caption
- Alt text
- Attribution approach
- Public-sharing status
- Accuracy caveat

Do not embed figure numbers in filenames or artwork.

---

## 12. Audit labs and demonstrations

Inventory all chapter lab references and relevant existing demos.

Check:

- Does the file exist?
- Does the relative path work from both source and rendered page?
- Are source and HTML pointing to the same canonical location?
- Is the lab complete or still a placeholder?
- Does the chapter claim it is available when it is not?
- Is the demo already available elsewhere and being unnecessarily duplicated?
- Does the activity require prediction before exposure?
- Does it include manipulation, observation, explanation, retrieval, and transfer?
- Does it collect or transmit student data?
- Is it accessible?
- Does it overclaim that a short activity measures the student or constitutes a controlled experiment?
- Is the activity worth interrupting the prose?

Classify each as:

- Working and appropriately integrated
- Working but poorly integrated
- Built but not wired
- Placeholder
- Broken
- Redundant
- Better as a standalone Learning Lab

Recommend insertion points, but do not modify chapter files during the audit.

---

## 13. Audit retrieval and review questions

For each review question, identify:

- Learning objective tested
- Core concept tested
- Cognitive level: recall, discrimination, application, integration
- Whether the distractors are plausible
- Whether the rationale explains why a wrong answer is tempting
- Whether the item tests chapter understanding or incidental study details
- Whether two questions test nearly the same concept
- Whether an unsupported or contested claim is being treated as settled
- Whether the answer can be inferred from wording rather than knowledge

Then evaluate the set as a whole:

- Does it cover the semantic skeleton?
- Does it include at least two cross-section or cross-chapter integrations?
- Does it overrepresent one section?
- Does it omit a major objective?
- Does it test too many proper nouns or study details?
- Is the question count within specification?

When reducing the set, recommend exactly which questions to:

- Keep
- Revise
- Replace
- Merge
- Remove

Do not solve an uncovered-concept problem by simply adding more questions above the ceiling.

---

## 14. Audit Key Terms

First count the existing glossary and compare it with the project target.

Then classify possible glossary terms:

### Tier 1 — Must retain
Core concepts students should use after the chapter.

### Tier 2 — Useful but optional
Terms that support comprehension but may not warrant glossary space.

### Tier 3 — Do not glossary
Anatomical labels, proper nouns, response categories already nested under a broader theory, one-off study details, analogy-specific terms, or terms explained sufficiently in context.

Check:

- Alphabetical order
- One-sentence definitions
- Definition accuracy
- First-use bolding
- Terms in glossary but absent from the body
- Central concepts in body but absent from glossary
- Duplicative entries
- Terms that should be consolidated under a broader entry

Do not equate “bolded” with “must appear in the glossary.”

---

## 15. Audit voice

Use `pipeline/voice-brief.md` as the authority.

Evaluate:

- Direct address to students
- Concrete scene-setting
- Clear argument turns
- Defined jargon
- Dry, restrained humor
- Short landing sentences
- Appropriate uncertainty
- Cross-chapter connections
- Proportionate evolutionary or behavioral-ecology framing
- Signature analogy used where relevant
- Instructor voice preserved rather than generic publisher prose

Do not require every signature analogy, case, or persona marker in every chapter.

Flag:

- Generic textbook prose
- Marketing language
- Repetitive “Here is why this matters” scaffolding
- Excessive rhetorical questions
- Overdone persona
- Uncharacteristic jargon density
- Claims smoothed into certainty for narrative convenience

Quote only short excerpts necessary to locate the issue.

---

## 16. Audit chapter ending and back matter

Check whether:

- The summary cues recall rather than reteaching the entire chapter
- The summary matches the chapter’s actual content
- The “What Comes Next” section earns its space
- The Connections table contains 4–8 meaningful rows
- Connections include forward and backward links
- Internal anchors resolve
- Chapter-number references are correct
- Visible chapter labels are concise and recognizable

Do not require Connections labels to reproduce complete source headers, subtitles, draft-version suffixes, or punctuation exactly. Treat `docs/index.html` as authoritative for public chapter identity and filenames.

Check that Further Reading and References are clearly distinct.

---

## 17. Render, accessibility, and link checks

Inspect the rendered HTML for:

- Broken internal anchors
- Broken relative links
- Missing images
- Empty alt text
- Leading dash or malformed alt artifacts
- Mojibake
- Truncated content
- Empty Key Terms
- Incorrect review-answer disclosure
- Missing closing tags
- Mobile overflow
- Tables unreadable at narrow widths
- Captions too small or too long
- Figures that require horizontal scrolling
- Keyboard-inaccessible controls
- Labs or expandable figures that fail in one orientation

Separate verified browser defects from code-level suspicions that have not been reproduced.

---

## 18. Final report format

Organize the final report in this order:

### A. Executive judgment
In 4–8 sentences:

- Is the chapter conceptually sound?
- Is it teachable?
- Is it ready for line editing?
- What are the 3–5 highest-impact issues?

### B. Core argument and two-week takeaways

### C. Confirmed defects
Only objective defects.

For each:

- Location
- Problem
- Why it matters
- Recommended fix
- Confidence: high / medium / low

### D. High-impact editorial decisions
Issues affecting chapter meaning, learning, scope, or organization.

### E. Scientific accuracy and overreach
Prioritized by importance.

### F. Cognitive load and organization

### G. Source/HTML reconciliation plan
State what must move into the source before regeneration.

### H. Figures and labs

### I. Learning objectives, glossary, and review questions

### J. Citation and lineage issues

### K. Optional enhancements
Keep these separate from required repairs.

### L. Recommended order of operations
Provide a numbered sequence that minimizes conflicting edits and avoids rebuilding generated HTML prematurely.

---

## 19. Severity rules

Use these severity levels:

- **Critical:** Scientifically wrong, legally risky, broken page, data/privacy problem, or likely to teach a major misconception.
- **High:** Distorts the chapter’s central argument, creates major cognitive overload, or would be lost during regeneration.
- **Medium:** Weakens learning, alignment, accessibility, or consistency.
- **Low:** Mechanical cleanup with little effect on learning.
- **Optional:** Plausible enhancement, not a defect.

Do not label exact wording differences, reference ordering, abbreviated chapter titles, or harmless rendering transformations as high-severity problems.

---

## 20. Audit discipline

- Be true to the argument, not to the current draft.
- Do not praise or criticize performatively.
- Do not assume more content is better.
- Do not assume shorter is always better.
- Do not convert every discrepancy into a task.
- Do not treat automated counts as editorial conclusions.
- Do not recommend broad edits when a narrow fix is sufficient.
- Distinguish what the evidence shows from what you infer.
- State uncertainty.
- Surface alternative explanations.
- Preserve the strongest version of the chapter’s argument before identifying weaknesses.
- Do not edit files during this audit.
- Do not update `HANDOFF.md` or `GPT_project_log.md`.
- End with a compact list of decisions that genuinely require Jon’s judgment.
