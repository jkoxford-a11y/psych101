# Psych 101 Chapter Pre-Review Audit Prompt 3.0

Audit Chapter **[CHAPTER NUMBER: CHAPTER TITLE]** in the canonical `psych101` repository.

This is a **read-only diagnostic audit**. Do not edit chapter prose, HTML, figures, labs, metadata, inventories, project-state files, or generated outputs. Produce one evidence-grounded audit report for editorial review.

---

## Purpose

Determine whether the chapter is:

* scientifically and conceptually accurate;
* learnable by first-year General Psychology students;
* organized around a coherent explanatory argument;
* vivid and memorable enough to sustain student interest;
* aligned across objectives, prose, figures, retrieval, labs, summary, glossary, and review questions;
* written in the instructor’s established voice;
* calibrated without allowing qualifications to bury the main story;
* compliant with current project requirements without mistaking preferences or targets for hard rules;
* consistent across authoritative source files, generated output, figures, labs, citations, and metadata;
* ready for line-by-line editorial review.

The audit must protect both **epistemic accuracy** and **teaching value**. Do not improve one by silently damaging the other.

---

# Governing principles

## 1. The audit is not a rewrite

Do not convert the chapter into generic publisher prose. Do not rewrite distinctive passages merely because a more conventional formulation is available.

Preserve the author’s actual argument identity. Reconstruct the strongest version consistent with what the chapter genuinely says, but do not silently replace it with a narrower, safer, more generic, or more conventional claim.

When reporting a problem, distinguish:

1. what the chapter explicitly claims;
2. what a reasonable student would infer;
3. what the evidence supports;
4. what the auditor is newly proposing.

## 2. Accuracy does not require constant hedging

State the best-supported conclusion first. Add a boundary only when omitting it would leave students with a materially false or misleading understanding.

Prefer:

> Sleep helps stabilize and reorganize some memories. The size and mechanism of the effect depend on the memory system and task.

Avoid:

> Although the evidence is variable, indirect in some contexts, dependent on multiple interacting factors, and not uniformly demonstrated across all tasks, sleep may under some circumstances contribute to memory-related processes.

Do not treat longer qualification as greater scientific rigor.

## 3. Claim first; boundary second

A student should be able to identify the main claim without excavating it from qualifications.

For each major passage, ask:

* What proposition should the student remember?
* Is that proposition stated clearly and early?
* Is the evidentiary boundary stated once and proportionately?
* Does the paragraph land on the psychological principle, or merely on uncertainty?

## 4. One caveat per claim unless a new surface creates a new misconception

Do not repeat the same caveat in body prose, figure caption, retrieval prompt, summary, review question, answer rationale, and glossary unless each location would independently mislead students.

Repeated caveats can become an unintended second curriculum in which students remember only that “the evidence is complicated.”

Recommend the best location for each necessary qualification:

* body prose;
* caption;
* Do Not Confuse box;
* instructor note;
* answer rationale;
* citation or Further Reading note.

## 5. Vividness is not the same as evidence

Classify each important example or passage by its instructional role:

* **Evidence:** directly supports a factual or theoretical claim.
* **Worked example or application:** shows students how to use a concept.
* **Mnemonic illustration or analogy:** makes an abstract idea easier to picture or remember.
* **Narrative hook:** creates interest and motivates the question.
* **Enrichment:** broadens the intellectual or cultural context.

Do not demand that a mnemonic illustration establish the mechanism it illustrates.

A Surrealist painting may illustrate dream phenomenology without being evidence about REM physiology. An attractiveness-rating study may make sleep deprivation vivid without becoming a central theory of sleep. An analogy needs an accurate boundary, not a methodological defense disproportionate to its role.

## 6. Correction must preserve or replace teaching value

When an inaccurate, confounded, or overextended example must be narrowed or removed, ask:

* What teaching job was this example performing?
* Can the example survive with one sentence narrowed?
* Can the caveat be relocated rather than inserted repeatedly?
* If removal is necessary, what equally vivid and more accurate example should replace it?

Do not leave a conceptual hole after removing an interesting example.

## 7. Rare dramatic cases require a clean inference

Do not retain a rare disorder, lesion, neurological catastrophe, or exceptional case merely because it is memorable.

Ask whether the case cleanly demonstrates the intended principle. Remove or relocate it when a disease process, confound, or multiple-system degeneration makes the implied causal lesson misleading.

Vividness cannot rescue a bad inference.

## 8. Preserve authorial rhythm

Use `pipeline/voice-brief.md` as the authority.

Protect:

* direct address to students;
* concrete scene-setting;
* explicit argumentative turns;
* plain definitions at first use;
* dry, restrained humor;
* long setup followed by a short landing sentence;
* intellectual confidence without overstatement;
* recurring cases and cross-chapter bridges;
* proportionate evolutionary or behavioral-ecology framing;
* distinctive metaphors that organize the chapter.

Flag revisions likely to produce:

* generic publisher prose;
* bureaucratic qualification;
* repetitive evidence-status language;
* abstract noun clusters;
* paragraphs that end on methodological disclaimers;
* excessive “may,” “might,” “appears,” “suggests,” and “is associated with” where a more direct calibrated statement is possible;
* replacement of a clear instructor-authored claim with neutral but less useful summary language.

---

# Phase 1: Establish repository state and authority

Read first:

* `AGENTS.md`
* `HANDOFF.md`
* `pipeline/chapter-spec.md`
* `pipeline/html-conversion-spec.md`
* `pipeline/voice-brief.md`
* `docs/images/psych101_figure_style_guide.md`
* `docs/labs/lab-design-spec.md`
* `source/visuals-inventory.md`
* `source/concept_lineage_revised.csv`

Then inspect:

* the authoritative chapter Markdown under `source/chapters/`;
* corresponding generated HTML under `docs/chapters/`, if it exists;
* chapter-specific image README, metadata, tracker, or specification files;
* actual chapter image files;
* all relevant labs and demonstrations across the full lab inventory;
* the chapter provenance file;
* relevant entries in `GPT_project_log.md`;
* chapter-specific edit sheets, revision notes, preserved drafts, or handoff files.

State explicitly:

* the prose source of truth;
* the generated output;
* whether generated output exists and is current;
* whether chapter metadata is more current than the global inventory;
* whether files appear complete;
* whether stale or contradictory project documentation was encountered;
* which problems belong to the chapter and which belong to the shared pipeline, CSS, or site layer.

Do not ask which version is authoritative when repository instructions already answer that question.

---

# Phase 2: Identify the chapter’s semantic and narrative skeleton

Complete this phase before listing defects.

## A. Core argument

State the chapter’s central explanatory claim in 2–4 sentences.

Do not merely summarize topics. Explain the argument connecting them.

## B. Two-week memory test

List the 5–8 ideas students should still remember two weeks later.

These should be usable ideas, not study names or isolated vocabulary.

## C. Narrative progression

Describe the chapter’s current intellectual movement:

* What misconception or problem opens the chapter?
* What question drives each major section?
* What explanatory payoff does the chapter build toward?
* What does the ending allow students to understand that they could not understand at the beginning?

Flag places where the chapter becomes a catalog, qualification loop, or collection of interesting facts rather than a developing explanation.

## D. Reconstruction test

Ask whether students could reconstruct the central argument from:

* headings;
* learning objectives;
* bolded terms;
* figures;
* retrieval prompts;
* labs;
* summary;
* review questions.

Report where these surfaces reinforce the same story and where they compete.

## E. Story-visibility test

Ask:

* Can a first-year student state what the chapter is trying to say?
* Does the core argument remain visible after necessary scientific corrections?
* Are evidentiary qualifications proportionate to their instructional importance?
* Does uncertainty repeatedly interrupt the chapter’s forward movement?
* Has the chapter become more cautious but less comprehensible?

---

# Phase 3: Create a Must-Preserve Ledger

Before recommending any repair, identify **6–12 chapter assets that should survive revision**.

Include, where relevant:

* the main organizing metaphor;
* the misconception opener;
* vivid empirical examples;
* recurring cases;
* cultural or historical hooks;
* useful analogies;
* strong paragraph endings;
* distinctive formulations;
* cross-chapter bridges;
* moments of dry humor;
* figures or labs that carry explanatory work;
* examples students are likely to recall.

For each asset, report:

| Asset | Instructional role | What makes it effective | Accuracy status | What must survive |
| ----- | ------------------ | ----------------------- | --------------- | ----------------- |

Use the instructional-role categories:

* evidence;
* worked example/application;
* mnemonic illustration/analogy;
* narrative hook;
* enrichment.

Do not treat an analogy as defective merely because it is not literally identical to the mechanism. Flag it only when the chapter encourages students to mistake the analogy for evidence or architecture.

The Must-Preserve Ledger becomes a binding constraint for the later revision pass.

---

# Phase 4: Construct and framework map

Identify the chapter’s 4–8 central constructs, mechanisms, and theoretical frameworks.

For each, state briefly:

* its working definition;
* whether it is an observation, construct, mechanism, theory, adaptive-function claim, or philosophical claim;
* its theoretical framework;
* the nearest concept students may confuse it with;
* whether its meaning remains stable;
* whether the chapter keeps it distinct from nearby constructs.

Analyze in depth only constructs that are load-bearing, contested, conflated, or unstable.

Look for construct slippage, including:

* attention becoming consciousness;
* conscious access becoming subjective experience;
* correlation becoming mechanism;
* a proxy becoming the process it measures;
* a framework becoming a definition;
* a descriptive pattern becoming an adaptive explanation;
* an analogy becoming literal architecture;
* a broad process becoming identified with one biomarker, region, transmitter, sleep stage, or study.

Identify the chapter’s 3–5 load-bearing claims: claims whose failure would require substantial reorganization.

---

# Phase 5: Audit load-bearing claims and inference ladders

For each load-bearing claim, trace only the levels the chapter actually uses:

1. What was directly observed?
2. What construct is inferred?
3. What mechanism is proposed?
4. What broader theory is invoked?
5. Is an adaptive function or evolutionary origin inferred?

Classify inferential steps as:

* directly demonstrated;
* strongly supported inference;
* plausible but non-unique interpretation;
* speculative.

Flag cases where:

* one neurotransmitter is assigned one psychological function;
* one drug is treated as a selective lesion;
* one region is assigned one behavior;
* one sleep stage or portion of the night is assigned one exclusive function;
* imaging association is described as demonstrated causality;
* animal evidence is generalized to humans without marking the transition;
* a small or restricted study becomes a universal pathway;
* a rare disease is treated as a clean manipulation of one process;
* multiple theories are made artificially complementary;
* a memorable example is made to carry more inference than it can support.

For every overreach, identify the **minimum accurate claim that preserves the intended teaching point**.

---

# Phase 6: Audit accuracy without neutralizing the prose

For every major explanatory claim, ask:

* Is it accurate at the level stated?
* Does the evidence support the causal language?
* Is a plausible account being presented as settled?
* Is a descriptive pattern being treated as proof of function?
* Does a lesion, disorder, illusion, demonstration, or imaging result establish the mechanism or merely fit it?
* Is an evolutionary account tested or merely adaptive-sounding?
* Does a figure, caption, glossary definition, summary, or question become more certain than the body?
* Does a caveat materially change what a student should believe?

Classify contested claims as:

* strongly established;
* broadly supported but simplified;
* plausible and debated;
* weak or outdated;
* incorrect or misleading.

Search current primary or authoritative sources when accuracy, consensus, or citation details materially affect the judgment.

Prefer:

* primary research;
* systematic reviews;
* consensus statements;
* authoritative professional sources.

Do not add citations merely to preserve a weak claim. Narrow or remove the inference first.

Do not import every methodological limitation into student prose. Distinguish:

* limitations students need in order to avoid a misconception;
* limitations appropriate for an instructor note or audit report;
* limitations that are real but instructionally irrelevant at Psych 101 scale.

---

# Phase 7: Audit hedging and qualification load

Conduct an explicit **qualification-load pass**.

Identify:

* sentences with multiple nested caveats;
* paragraphs in which the main claim arrives only at the end;
* repeated “not fully understood” language;
* repeated animal-to-human warnings after the transition has already been established;
* review questions that test evidence calibration more than psychology;
* summaries that foreground uncertainty over the chapter’s conclusions;
* captions that duplicate caveats already established in prose;
* terms whose definitions have become miniature literature reviews;
* paragraphs that end on uncertainty rather than the concept students should retain.

For each case, recommend one of:

* keep;
* state the claim first;
* shorten the caveat;
* move the caveat after the explanation;
* consolidate repeated caveats;
* move detail to a Do Not Confuse box;
* move detail to the caption;
* move detail to an instructor note or Further Reading;
* remove unnecessary qualification.

Do not remove a qualification when doing so would materially mislead students.

---

# Phase 8: Audit cognitive load, organization, and teachability

Evaluate the chapter for first-year students.

Identify:

* paragraphs containing more than one hard idea;
* methodological calibration that has become a second hard idea;
* long sections without retrieval or application;
* dense anatomical, empirical, historical, or theoretical catalogs;
* terms defined too far from first use;
* examples requiring more background than they supply;
* supporting studies that displace the central concept;
* important distinctions buried inside qualifications;
* repeated explanations;
* sections better represented as a table, figure, sidebar, lab, or Further Reading;
* interesting material that does not earn its cognitive cost;
* abrupt movement between observation, mechanism, theory, function, and philosophy.

For each high-load passage, recommend:

* keep;
* shorten;
* split;
* move;
* convert to table;
* convert to figure;
* convert to lab;
* move to sidebar;
* move to Further Reading;
* cut.

Do not silently favor shorter prose. Preserve complexity when it earns its place.

## Pedagogical-damage test

For every proposed shortening, removal, or qualification, ask:

* Does this repair make the chapter less vivid?
* Does it erase the organizing metaphor?
* Does it remove the example students are most likely to remember?
* Does it weaken a punchy landing sentence?
* Does it turn direct prose into abstract prose?
* Does it preserve factual accuracy while making the chapter harder to learn?

When pedagogical damage is likely, propose a narrower repair or a replacement that performs the same instructional job.

---

# Phase 9: Audit objectives, retrieval, and review questions

For each objective, report:

* where it is taught;
* where it is practiced;
* whether it is tested;
* whether its performance level matches the chapter;
* whether it duplicates another objective;
* whether it contains chapter;
* whether it duplicates another objective;
* whether it contains multiple separate tasks;
* whether it matches the semantic skeleton.

Do not solve every gap by adding another objective.

Evaluate retrieval prompts and questions for whether they test:

* the chapter’s load-bearing claims;
* discrimination between easily confused concepts;
* application;
* transfer;
* integration.

Do not allow evidence-status qualifications to crowd out the psychology.

Unless evaluation of evidence is itself a central learning objective, most questions should test the phenomenon, mechanism, distinction, or application. Use answer rationales to reinforce important boundaries without making every correct answer an exercise in choosing the most qualified sentence.

Identify which questions to:

* keep;
* revise;
* replace;
* merge;
* remove.

---

# Phase 10: Audit examples, analogies, cultural material, and AI connections

For every major example or analogy:

* classify its instructional role;
* state what it helps students understand or remember;
* identify what maps correctly;
* identify the actual point where the mapping breaks;
* determine whether that boundary is already clear enough;
* identify whether the example has been burdened with claims it was never meant to establish;
* assess whether the correction can be made in one sentence.

Do not turn every analogy into a boundary-analysis exercise in the student-facing prose.

Cultural and historical examples may be retained when they:

* create curiosity;
* represent a psychological experience vividly;
* supply a memorable image;
* connect psychology to human intellectual history.

They must not be presented as scientific evidence when they are not.

AI connections must clarify the psychology rather than decorate it. Prefer:

* AI-after-effort;
* comparison;
* critique;
* calibration;
* reflection;
* identifying where an analogy breaks.

Remove or reduce AI material that displaces the chapter’s human psychological argument.

---

# Phase 11: Audit figures and visual pedagogy

Inspect actual figures rather than filenames alone.

For every figure, evaluate:

* file existence and path;
* source/HTML agreement;
* scientific accuracy;
* caption and alt text;
* attribution and public-sharing status;
* readability;
* cognitive load;
* one-hard-idea discipline;
* whether artwork and caption make the same claim;
* whether it corrects or reinforces a misconception;
* whether it advances the chapter’s narrative spine;
* whether a correction can preserve the visual teaching idea.

Classify each figure:

* use now;
* revise;
* slide only;
* candidate/reference;
* remove.

For every revision, report:

* what visual teaching job must survive;
* what implication is inaccurate;
* the minimum visual repair;
* whether the caption can carry the caveat instead of the artwork;
* the risk of producing a technically safe but instructionally empty figure.

For genuinely needed new figures, provide:

* descriptive filename;
* core teaching job;
* proposed caption;
* alt text;
* attribution approach;
* public-sharing status;
* accuracy caveat.

---

# Phase 12: Audit labs and demonstrations

Search the complete inventory before recommending a new activity.

Check:

* file existence;
* path integrity;
* source/HTML agreement;
* completeness;
* integration with prose;
* prediction or effort before feedback;
* manipulation, classification, retrieval, or transfer;
* accessibility;
* privacy;
* whether it overclaims diagnosis or experimentation on the student;
* whether it practices a load-bearing operation.

Make one explicit decision:

* no lab needed;
* reuse an existing lab;
* revise or better integrate an existing lab;
* one new lab is justified;
* more than one lab is justified.

Prefer activities that make students perform the chapter’s core reasoning rather than merely observe an interesting effect.

---

# Phase 13: Audit chapter ending, citations, lineage, and generated output

## Chapter ending

Check whether:

* the summary cues the semantic skeleton;
* the summary preserves the chapter’s story;
* the summary does not strengthen claims;
* the summary does not become more hedged than the body;
* Connections are meaningful;
* Key Terms remain concise;
* review questions represent the chapter proportionately;
* Further Reading and References remain distinct.

## Citations and lineage

Check:

* body citations against References;
* uncited references;
* incorrect author/year pairings;
* claims supported by the wrong source;
* restricted studies generalized too broadly;
* animal evidence generalized to humans;
* historical sources used as sole support for current consensus;
* concept-lineage risks;
* wording traceable to commercial textbooks.

Never recommend copying or closely paraphrasing Wade, King, Myers, or another commercial textbook.

## Source and HTML

Check semantic—not character-for-character—parity.

Identify:

* content existing only in generated HTML;
* conflicting claims or examples;
* inconsistent figures or captions;
* broken anchors;
* missing images;
* malformed alt text;
* mojibake;
* truncated content;
* broken disclosure controls;
* mobile overflow;
* stale generated output.

Separate source defects from shared pipeline or rendering defects.

---

# Phase 14: Root-cause consolidation

Group downstream symptoms under shared root causes.

Limit the main report to the highest-impact 5–8 root causes unless additional problems are genuinely independent.

For each root cause, report:

* **Severity**
* **Root cause**
* **Why it matters**
* **Exact evidence or location**
* **What must be preserved**
* **Risk of overcorrection**
* **Minimum effective repair**
* **Best location for any necessary caveat**
* **Affected surfaces**
* **Action route**
* **Confidence**

Action routes:

* authoritative source revision;
* figure revision;
* lab revision or construction;
* metadata or attribution work;
* later HTML regeneration;
* shared pipeline/CSS/site repair;
* optional enhancement.

A repair recommendation is incomplete unless it states what should survive.

---

# Final report format

## A. Executive judgment

In 4–8 sentences:

* Is the chapter conceptually sound?
* Is its central story visible?
* Is it scientifically calibrated?
* Is it vivid and teachable?
* Is the instructor’s voice intact?
* Is it ready for line editing?
* What are the highest-impact root causes?

## B. Semantic and narrative skeleton

Include:

* core argument;
* two-week takeaways;
* narrative progression;
* reconstruction judgment;
* story-visibility judgment.

## C. Must-Preserve Ledger

List the chapter’s strongest teaching and voice assets.

This section is mandatory and must appear before defect recommendations.

## D. Construct map and load-bearing claims

Provide the compact construct map and inference-ladder classifications.

## E. Root-cause repair table

For each high-impact issue, include:

* severity;
* root cause;
* affected surfaces;
* evidence;
* what must be preserved;
* risk of overcorrection;
* minimum repair;
* action route;
* confidence.

## F. Hedging and qualification audit

Identify:

* qualifications that materially protect accuracy;
* qualifications that should be consolidated;
* places where the main claim has become difficult to recover;
* review questions or summaries that overrepresent epistemic caution.

## G. Alignment decisions

Cover only necessary decisions involving:

* objectives;
* retrieval;
* review questions;
* glossary;
* summary;
* Connections.

## H. Figures and lab-gap decision

Include figure status decisions and one explicit lab-gap decision.

## I. Source/HTML, citation, and pipeline routing

State what belongs to source revision, later regeneration, or shared-site repair.

## J. Decisions requiring Jon’s judgment

List only genuine alternatives affecting meaning, scope, organization, examples, or pedagogy.

## K. Revision constraints

End with a compact binding list:

### Must preserve

The argument, examples, analogies, sentences, figures, and bridges that should survive revision.

### Must correct

The claims, implications, or structures that cannot remain as written.

### Must not happen

Examples:

* Do not replace the chapter’s central metaphor with generic summary prose.
* Do not remove a vivid example without preserving its teaching function.
* Do not repeat the same caveat across multiple surfaces.
* Do not make uncertainty the chapter’s dominant retrieval cue.
* Do not turn an illustrative analogy into a scientific claim.
* Do not make broad edits where one sentence would solve the problem.

## Appendix: Low-impact mechanical findings

Place minor alphabetization, metadata, formatting, and stale-output issues here unless they materially affect learning or accuracy.

---

# Severity rules

* **Critical:** scientifically wrong, legally risky, broken, privacy-threatening, or likely to teach a major misconception.
* **High:** distorts a load-bearing claim, destroys the chapter’s narrative spine, produces major cognitive overload, or risks losing important source content.
* **Medium:** weakens learning, voice, alignment, accessibility, or consistency.
* **Low:** mechanical cleanup with little effect on learning.
* **Optional:** plausible enhancement, not a defect.

Loss of voice or teaching value can be High severity when it obscures the chapter’s central argument, even when every sentence remains technically accurate.

---

# Audit discipline

* Be true to the argument, not to the current draft.
* Be true to the author’s actual argument, not a safer substitute.
* Preserve the strongest version consistent with what the author actually said.
* Treat voice, vividness, and recall value as instructional evidence.
* Do not praise or criticize performatively.
* Do not equate caution with rigor.
* Do not equate length with thoroughness.
* Do not assume shorter is always better.
* Do not assume more qualification is always better.
* Do not convert every discrepancy into a task.
* Do not smooth distinctive prose into publisher language.
* Do not remove hooks merely because they are not themselves evidence.
* Do not allow hooks to carry scientific inferences they cannot support.
* Use the minimum repair that restores accuracy.
* State what must survive every repair.
* Distinguish observation, inference, mechanism, theory, and adaptive explanation.
* Verify current or contested claims.
* Do not edit files during the audit.
* Do not update `HANDOFF.md` or `GPT_project_log.md`.
* End with decisions that genuinely require Jon’s judgment and binding constraints for the later revision pass.
