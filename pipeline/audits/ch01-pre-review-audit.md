# Chapter 1 Pre-Review Audit — History and Approaches to Psychology

**Audit date:** 2026-07-17  
**Status:** Implemented and validated — canonical revision commit `86e807e`
**Audit framework:** `pipeline/audits/chapter-pre-review-audit-prompt-v3.md`

## Implementation record — 2026-07-17

The approved work order in `pipeline/work-orders/ch01-canonical-revision.md` was implemented in canonical revision commit `86e807e` (`Revise Chapter 1 canonical content`). The authoritative source was revised first, followed by a narrow manual rebuild of the Chapter 1 HTML because the checked-in converter has no Chapter 1 configuration. No shared CSS, JavaScript, generator, lab, or non-Chapter-1 content was changed.

The revision preserved the full must-preserve ledger while repairing the audit's root causes: historical traditions are overlapping arguments rather than a forced relay race; Wundt/voluntarism is distinguished from Titchener/structuralism; Watson's methodological behaviorism is distinguished from Skinner's radical behaviorism; therapeutic-alliance evidence is described as a reliable modest association without a uniquely established causal mechanism; the depression example separates historical influence from evidentiary support; evolutionary and gene–environment claims are calibrated; and the biopsychosocial model remains an organizer rather than a diagnostic or completed causal explanation. Objectives, retrieval prompts, summary, Connections, review questions, glossary, and references were aligned with those decisions.

Visible figure numbering is now sequential (1.1 and 1.2). The language figure retains its legacy `fig_1_3_language_explanations.png` filename but is synchronized as visible Figure 1.2 across source, HTML, caption, alt text, manifest, provenance, and inventory. All seven active image binaries were opened and inspected. The image manifest now records source/creator, license, modifications, attribution text, public-sharing status, and caveats for every active image; it also corrects the Skinner portrait from public-domain wording to CC BY 3.0. The Watson source record establishes U.S. public-domain status but leaves non-U.S. status uncertain, and that caveat is preserved explicitly in the manifest.

Validation passed: source/HTML semantic and critical-claim parity checks; 175 structural/content checks covering IDs, anchors, local links, image paths, alt text, subsection navigation, 11 closed `<details>` answers, 17 alphabetized key terms, figure numbering, Connections, Further Reading separation, manifest fields, mojibake, and ampersands; the repository chapter linter with 14/14 pages clean and zero failures or warnings; `git diff --check`; and live browser checks at 1440×900, 390×844, and 844×390. Tables, portrait strip, figures, captions, navigation, and disclosure controls rendered without page-level horizontal overflow or console errors. No deferred Chapter 1 visual or browser defect remains.

## A. Executive judgment

Chapter 1 is conceptually strong, unusually teachable, and already carries the instructor-authored voice that later chapters should preserve. Its central story is visible: psychology became a science through arguments about what counts as evidence and explanation, and modern perspectives retain different questions without becoming equally supported answers. The misconception opener, problem-organized history, behavior-versus-mechanism distinction, multiple-perspectives applications, and self-correction framing form a coherent sequence rather than a conventional names-and-dates survey.

The chapter needs revision rather than rebuilding. The highest-impact problems are concentrated: the learning objective implies a cleaner succession of schools than the prose itself allows; Watson and Skinner are compressed into one inaccurate version of behaviorism; Wundt and Titchener are inconsistently distinguished; the therapeutic-alliance passage and Question 11 overstate what correlational meta-analysis establishes; the depression example gives historically important perspectives a more equal evidentiary footing than they deserve; and the review set is mostly factual rather than integrative. The generated HTML is semantically current, but it predates the project’s newer subsection-navigation standard. Figure governance is mostly sound, although the visible numbering now skips from 1.1 to 1.3 and the image manifest needs newer public-sharing and provenance fields.

The chapter is ready for an editorial-decision discussion, but not yet for line-by-line revision. The revision should preserve its argument identity and memorable sentences while correcting a small number of consequential historical, causal, and assessment claims.

## Repository authority and current state

- **Canonical prose source:** `source/chapters/ch01-history-approaches.md`
- **Generated output:** `docs/chapters/01-history-approaches.html`
- **Provenance sidecar:** `source/chapters/_provenance/ch01-history-approaches.md`
- **Chapter image manifest:** `docs/images/ch01/README_captions_alt_text_attribution.md`
- **Global visual inventory:** `source/visuals-inventory.md`
- **Learning Lab:** none currently linked or built for Chapter 1
- **Generated-output status:** semantically current and complete. The HTML contains the same four major content sections, two numbered figures, portrait strip, summary, eight-row Connections table, eleven review questions with hidden rationales, sixteen glossary entries, four Further Reading items, and a separate References section.
- **Source/HTML drift:** the portrait strip is represented in the source as an editorial placeholder while the HTML contains the actual five-image markup; the HTML adds an authorship sentence to Figure 1.3’s caption that is absent from the source. No checked-in Chapter 1 generator was located.
- **Stale documentation:** the provenance sidecar still lists the removed Maslow hierarchy as Figure 1.2. The global inventory is more current and records that the image was removed and archived.
- **Shared-site issue:** the current HTML lacks the descriptive `<h3>` subsections and `.in-section-nav` blocks now required by `pipeline/html-conversion-spec.md` §5a. This is a later conversion/retrofit issue, not a defect in the chapter’s scientific argument.
- **Figure-inspection limitation:** repository paths, dimensions/status records, captions, alt text, attribution notes, and prior review decisions were inspected. The GitHub connector did not expose renderable PNG bytes for a fresh direct visual inspection in this session. Figure judgments below are therefore provisional and must be confirmed by opening the actual files before final release.
- **No files other than this audit were changed.**

## B. Semantic and narrative skeleton

### Core argument

Psychology is not defined by one topic, profession, or theoretical perspective. It is a scientific enterprise that studies observable behavior and inferred mental processes, and its history is a sequence of disputes over which questions, methods, and levels of explanation can support reliable knowledge. Modern perspectives remain useful because they ask different questions, but evidence—not the number of available perspectives—decides among competing claims.

The chapter’s deeper epistemic point is that behavior and fluent performance are evidence about underlying processes, not transparent windows into those processes. Because hindsight and confirmation biases make intuitive explanations feel stronger than they are, psychology needs explicit methods and institutional checks. Scientific self-correction is possible, not automatic.

### Two-week memory test

Students should retain these usable ideas:

1. Psychology is the scientific study of behavior and mental processes; therapy is one application, not the definition of the field.
2. Behavior is observable evidence. Mental processes and mechanisms must be inferred from converging evidence.
3. Historical schools asked different questions and exposed limitations in one another; they did not form a clean relay race in which one school simply replaced the previous one.
4. Modern perspectives are lenses or question-generators, not seven equally supported explanations of every case.
5. The biopsychosocial model organizes what to consider; it is not a causal explanation until mechanisms and interactions are specified.
6. An evolutionary or behavioral-ecology lens asks what problem a mechanism may have solved, but adaptive explanations require testable predictions rather than plausible stories alone.
7. Hindsight and confirmation biases make common-sense theories difficult to evaluate.
8. Scientific self-correction depends on deliberate practices such as preregistration, replication, transparency, and criticism; it does not happen automatically.

### Narrative progression

The chapter opens with the student’s likely belief that psychology merely formalizes common sense, then uses failed prediction and hindsight bias to establish the need for science. Section 1 defines the field and separates observable behavior from inferred mental process. Section 2 converts history from a chronology into a sequence of disagreements about the right question, then uses Skinner, Chomsky, Turing, and language models to show why output does not identify mechanism. Section 3 carries those historical questions into modern perspectives and applies them to phone-checking and depression before formalizing the biopsychosocial model. Section 4 returns to the opening misconception and explains why intuition requires institutional correction.

The payoff is strong: by the end, students should see psychology as a plural but evidence-governed science rather than a collection of opinions about people.

### Reconstruction judgment

The chapter can largely be reconstructed from its headings, objectives, figures, retrieval prompts, summary, and review questions. The strongest alignment occurs around:

- psychology as behavior plus mental process;
- history organized by questions and limitations;
- behavior/output as evidence rather than mechanism;
- multiple perspectives plus the biopsychosocial framework;
- hindsight and confirmation bias as reasons for scientific method.

The main reconstruction failures are downstream:

- Learning Objective 2 implies that each school’s limitation “forced the next school’s emergence,” contradicting the chapter’s explicit rejection of a neat succession.
- The summary and glossary collapse Watson and Skinner into one form of behaviorism.
- Review Question 11 makes the therapeutic relationship a principal causal mechanism more confidently than the body or evidence permits.
- The review set contains few questions requiring students to integrate historical schools, modern perspectives, and evidence standards.

### Story-visibility judgment

The central story is visible and memorable. Qualification load is generally controlled rather than excessive. The chapter’s main risk is not that caution hides the story; it is that a few simplified historical and causal claims become more definite in tables, glossary entries, summary language, and review rationales than the surrounding prose warrants.

## C. Must-Preserve Ledger

| Asset | Instructional role | What makes it effective | Accuracy status | What must survive |
|---|---|---|---|---|
| “Psychology is basically common sense…” opener | Narrative hook and misconception correction | Activates a strong student prior and converts the feeling of obviousness into an epistemic problem | Strong; Milgram forecast wording/citation needs repair | Preserve the misconception, the failed-prediction structure, and “treat that feeling as data, not as proof.” |
| “Scar tissue from a century of productive arguments” | Organizing metaphor | Gives the history a causal structure and avoids a names-and-dates march | Accurate as metaphor | Preserve verbatim or nearly verbatim. |
| Dinner-party/airplane mentalist scene | Narrative hook and voice marker | Direct, dry humor defines psychology by contrast | Accurate | Preserve the scene and the peer-review punch line. |
| Flinch: behavior versus mental process | Worked example | Makes an abstract definition observable and inferential | Strong, simplified appropriately | Preserve the camera/inference contrast. |
| History table organized by problem | Comparative scaffold | Lets students compare question, contribution, and limitation at one glance | High-value; several rows need calibrated wording | Preserve the question/contribution/limitation structure rather than replacing it with prose chronology. |
| First-person animal behavioral ecology background | Authorial identity and framing | Explains why function questions recur across the book | Accurate | Preserve “animal behavioral ecology” and the why-versus-how distinction. Never relabel the field evolutionary psychology. |
| AI Connection: behavior is evidence, not mechanism | Application and transfer | Uses a current case to clarify a foundational psychological inference problem | Core claim strong; retrieval wording needs repair | Preserve “Performance tells us what a system can do. By itself, it does not tell us how the system did it.” |
| Phone-checking through several perspectives | Worked application | Demonstrates how perspectives answer different questions about one behavior | Strong; evolutionary sentence should remain a question, not proof | Preserve the single-behavior/multiple-questions structure. |
| Biopsychosocial model as organizer, not explanation | Conceptual boundary | Prevents the framework from becoming a content-free answer | Strong and unusually clear | Preserve the distinction and use it to align the Chapter 13 connection. |
| Replication-crisis conclusion | Evidence calibration | Rejects both naïve scientism and blanket dismissal | Strong | Preserve “Self-correction is possible, not automatic.” |
| Figure 1.1 scope map | Visual overview | Counters the therapy stereotype with multiple psychological questions | Conceptually strong; final visual check still required | Preserve the one-behavior/many-questions teaching job. |
| Portrait strip | Historical enrichment | Humanizes the history without turning portraits into evidence | Appropriate enrichment | Retain if exact source-page provenance and public-sharing status are documented. |

## D. Construct map and load-bearing claims

### Compact construct map

| Construct/framework | Working definition in chapter | Explanatory type | Nearest confusion | Audit judgment |
|---|---|---|---|---|
| Psychology | Scientific study of behavior and mental processes | Disciplinary definition | Psychology as therapy or mind reading | Strong and teachable. |
| Behavior versus mental process | Observable action versus inferred internal process | Observation/inference distinction | Behavior as transparent evidence of mechanism | Load-bearing and well illustrated. |
| Historical schools | Competing programs organized by core questions and methods | Intellectual-history framework | A linear succession in which each school replaces the last | Prose resists the misconception; LO2 partly reinstates it. |
| Modern perspectives | Lenses that frame questions about behavior and mental life | Theoretical/heuristic framework | Perspectives as mutually exclusive or equally supported causes | Needs more explicit evidence-weighting. |
| Biopsychosocial model | Organizer for biological, psychological, and social factors | Integrative framework | A complete causal theory or diagnostic model | Chapter’s boundary is strong; connection to Chapter 13 needs alignment. |
| Evolutionary perspective | Asks what recurrent problem a mechanism may have helped solve | Adaptive-function framework | A plausible adaptive story as evidence of origin | Generally calibrated, but caution is repeated across several surfaces. |
| Hindsight and confirmation bias | Biases that distort prediction, interpretation, and memory for evidence | Cognitive constructs | Bias awareness as sufficient correction | Strong; should connect more directly to assessment/application. |
| Replication and self-correction | Institutional practices that expose and repair error | Scientific-process framework | Science as automatically self-correcting | Strong and proportionately calibrated. |

### Load-bearing claim 1 — Psychology studies behavior and inferred mental processes

- **Directly observed:** behavior, self-report, physiology, and neural activity.
- **Strongly supported inference:** internal processes can be constrained through converging evidence even though they are not directly visible.
- **Overreach to avoid:** treating one behavior or fluent output as uniquely identifying its generating mechanism.

The chapter handles this distinction well. It should remain the conceptual bridge connecting early history, the AI passage, and scientific method.

### Load-bearing claim 2 — The history of psychology is a history of competing questions and methods

- **Direct historical pattern:** schools overlapped and differed in favored questions, constructs, and methods.
- **Strong interpretive frame:** later traditions often arose partly in response to limitations or exclusions in earlier programs.
- **Overreach:** each limitation “forced the next school’s emergence” in one orderly chain.

The minimum accurate claim is that later movements responded to unresolved problems without fully replacing earlier traditions.

### Load-bearing claim 3 — Multiple perspectives add information, but evidence still adjudicates claims

- **Direct observation:** biological, behavioral, cognitive, interpersonal, and social variables can each contribute to psychological outcomes.
- **Strong organizing inference:** multiple levels of analysis are often necessary.
- **Non-unique interpretation:** a perspective’s ability to generate an explanation does not establish that explanation.
- **Overreach:** presenting historically prominent perspectives as equally supported mechanisms in a specific case.

The chapter states the evidence boundary after the depression example, but some listed claims already invite an equal-standing inference.

### Load-bearing claim 4 — Evolutionary explanations are useful when they generate testable predictions

- **Directly available evidence:** comparative, developmental, cross-cultural, genetic, ecological, and present-day functional patterns.
- **Strong inference:** evolutionary history constrains and shapes present mechanisms.
- **Plausible but non-unique interpretation:** a particular present trait solved a specified ancestral problem.
- **Speculative:** an adaptive-sounding story unsupported by discriminating predictions.

The chapter’s basic calibration is good. The main repair is to consolidate repeated caution, not add more.

### Load-bearing claim 5 — Science improves on intuition through institutional checks

- **Directly observed:** failed predictions, biased recall, nonreplication, and reform practices.
- **Strong inference:** preregistration, replication, transparency, and criticism can reduce some vulnerabilities of informal reasoning.
- **Overreach avoided:** the chapter explicitly says self-correction is possible rather than automatic.

This claim is strong and should remain the chapter’s closing payoff.

## E. Root-cause repair table

| Severity | Root cause | Affected surfaces | Evidence/location | What must be preserved | Risk of overcorrection | Minimum effective repair | Action route | Confidence |
|---|---|---|---|---|---|---|---|---|
| **High** | The chapter’s problem-organized history is contradicted by a linear “limitation forced the next school” objective | LO2, summary, historical transitions, review alignment | LO2 promises a succession the Section 2 framing explicitly rejects | Problem-organized history and overlap warning | Turning the history into a vague claim that movements were unrelated | Revise LO2 to identify each school’s question, contribution, limitation, and how later approaches responded to unresolved problems. Preserve overlap and partial survival. | Authoritative source revision; later HTML regeneration | High |
| **High** | Watson’s methodological behaviorism and Skinner’s radical behaviorism are collapsed into one “observable behavior only” doctrine | History table, behaviorism example, summary, glossary, Q3/Q5 rationales | Glossary says Watson and Skinner abandoned unobservable mental states; summary says both “evacuated the mind” | Clear contrast between observable performance and inferred mechanism | Adding a graduate-history detour or weakening the teachable behaviorist contrast | Add one bounded distinction: Watson made publicly observable behavior psychology’s proper subject; Skinner also treated private events as behavior but rejected them as autonomous mental causes. Rewrite downstream shorthand accordingly. | Authoritative source revision | High |
| **Medium** | Wundt and Titchener are distinguished in the glossary but conflated in assessment and some method language | History table, Q2, introspection glossary | Q2 asks about “Wundt’s structuralism,” while the glossary correctly identifies structuralism most directly with Titchener and Wundt with voluntarism | The simple structuralism-versus-functionalism discrimination | Expanding into specialist historiography | Change Q2 to “Titchener’s structuralism” or “structuralism.” Describe Wundt’s controlled introspection as an antecedent without assigning all structuralism to him. | Authoritative source revision | High |
| **High** | Therapeutic-alliance evidence is converted from a robust association into a principal causal mechanism independent of technique | Humanistic paragraph, Q11, answer rationale, summary emphasis | Body says Rogers’s claim “held up” and alliance matters somewhat independent of technique; Q11 calls it the most important factor and the rationale calls it a mechanism of change | The valuable bridge from humanistic history to modern psychotherapy evidence | Removing the alliance evidence entirely or implying the relationship does not matter | State that alliance reliably predicts outcome across therapy orientations. Do not call it the most important factor or an independently established mechanism. Replace or rewrite Q11. Keep one sentence noting possible bidirectionality. | Authoritative source revision; citation verification | High |
| **High** | The multiple-perspectives example gives historically important explanations an equal-looking evidentiary status | Section 3 depression example, modern-perspectives framing, summary, Q6/Q9 | “Internalized anger” appears alongside better-supported biological, behavioral, cognitive, and social risk/maintenance factors; evidence weighting arrives only afterward | The depression example and the principle that perspectives ask different questions | Flattening the section into “only current mainstream views count” or deleting intellectual history | Mark internalized anger as a historical psychodynamic account rather than a comparably supported current mechanism, or replace it with a more defensible psychodynamic/interpersonal formulation. Move the “not equally supported” sentence before or into the example. | Authoritative source revision | High |
| **Medium** | The AI retrieval prompt replaces the chapter’s strong inference principle with a false dichotomy | AI callout, Figure 1.3 caption, retrieval prompt | Prompt asks “genuine reasoning or memorized association,” implying two exhaustive mechanisms and treating association as mere memorization | Behavior/output as evidence, not mechanism; current AI relevance | Expanding into an AI architecture lesson | Ask why fluent output alone cannot identify the mechanism or establish that the system’s internal process resembles a human’s. Keep the figure’s comparison role. | Authoritative source revision; caption/alt review | High |
| **High** | The assessment set emphasizes recognition of labels more than integration of the chapter’s argument | Eleven review questions and six LOs | Count is compliant, but most items test one school, perspective, or definition; the specification calls for at least two integrative items | Hidden rationales and several clean discrimination questions | Increasing question count or making every item an evidence-calibration exercise | Keep the strongest factual items. Rewrite at least two: one should distinguish a historical school’s question from a modern perspective’s use; one should apply hindsight/confirmation bias to why a scientific safeguard is needed. Rewrite Q11 for alliance calibration. | Authoritative source revision | High |
| **High** | The Chapter 13 connection turns the biopsychosocial model into a framework for diagnosis | Connections table, cross-chapter alignment | Connection says it is dominant for “understanding, diagnosing, and treating,” while Chapter 13’s settled architecture separates diagnosis from causal explanation | The cross-chapter bridge and the strong “organizer, not causal explanation” boundary | Weakening the model’s clinical relevance | Revise the connection: the model organizes vulnerability, maintenance, context, and treatment planning; it is not a diagnostic test or causal explanation by itself. | Authoritative source revision | High |
| **Medium** | Several broad claims need narrower wording or a matched source | Misconception opener, nature/nurture paragraph, depression paragraph, References | “Experts are not much better” overgeneralizes one forecast; the psychiatrist forecast appears to require a source beyond the 1963 outcome paper; “virtually every trait…genes and environment interacting” can imply statistical G×E for every trait; chemical-imbalance rejection lacks a supporting citation | Milgram hook, gene–environment rejection of false dichotomy, clear rejection of a simple chemical-imbalance story | Smothering memorable claims in caveats | Use “expert intuition can fail too”; cite the forecast and observed outcome separately; say traits are jointly shaped by genetic and environmental influences, often through transactions and sometimes measurable interactions; add a current source for the chemical-imbalance boundary. | Authoritative source revision; reference verification | High |
| **Medium** | The rendered chapter predates the current segmentation standard | All four numbered sections in HTML | No `<h3>` subsections or `.in-section-nav`, although current conversion spec requires them | Existing prose order and problem-based headings | Artificially fragmenting a short chapter or rewriting prose just to create headings | During later regeneration, add 2–4 descriptive subsections per major section and per-section navigation. Use existing conceptual breaks; do not add content merely to fill headings. | Later HTML regeneration/shared retrofit | High |
| **Medium** | Figure governance and source/HTML authority are not fully reconciled | Figure numbering, manifest, portrait strip, source/HTML captions, provenance | Visible sequence skips 1.1→1.3 after Maslow removal; portraits lack exact source-page URLs/public-sharing fields; source holds a portrait placeholder while HTML holds markup; Fig. 1.3 attribution exists only in HTML | Current two visual teaching jobs and portrait enrichment | Reopening settled figure design or starting another image-rebuild cycle | Renumber visible Figure 1.3 as Figure 1.2; retain internal filenames if desired. Add exact source pages, creator/license details, public-sharing status, and caveats. Move durable intended caption/markup information into the source or document the conversion exception. No new figure is needed. | Metadata reconciliation; later source/HTML synchronization | High |

## F. Hedging and qualification audit

### Qualifications that materially protect accuracy

- The therapeutic-alliance paragraph’s bidirectionality sentence is necessary. The problem is the stronger claim before it, not the presence of the caveat.
- “The model is an organizing framework for what to consider, not itself a causal explanation” is a high-value boundary and should remain.
- The evolutionary perspective’s requirement for testable predictions is necessary and proportionate.
- “Self-correction is possible, not automatic” is the right final boundary for the replication section.
- The chemical-imbalance sentence appropriately rejects a simplistic causal story without rejecting biological mechanisms broadly.

### Qualifications to consolidate

The adaptive-story warning appears in the Section 2 history table, the post-AI transition paragraph, Section 3’s evolutionary paragraph, Learning Objective 5, the evolutionary-perspective glossary entry, the summary, and Review Question 10’s rationale. Students need the distinction, but not a parallel caution curriculum. Put the complete boundary once in the main evolutionary paragraph; keep other surfaces concise.

### Places where the main claim is difficult to recover

The humanistic paragraph begins with a strong causal-sounding statement, then adds a substantial methodological qualification. Narrowing the first claim would allow the paragraph to end on the durable principle—therapeutic relationship quality reliably predicts outcome—rather than on a defensive correction.

The depression example asks students to process several perspectives and an evidence-ranking caveat in one pass. Move the evidence rule before the list or split the historical account from currently supported risk/maintenance pathways.

### Review questions that overrepresent or misplace epistemic caution

Question 11 does not test evidence calibration; it tests an overextended conclusion. Questions 8 and 10 are acceptable conceptual discriminations, but the set needs more application and integration rather than more “which qualified sentence is safest?” items.

## G. Alignment decisions

### Counts and specification status

| Element | Current status | Specification | Judgment |
|---|---:|---:|---|
| Learning objectives | 6 | 4–7 | Count met; LO2 needs conceptual repair; no APA IPI theme is explicitly named. |
| Major content sections | 4 | 3–5 | Strong macro-structure. |
| Review questions | 11 | 8–12 | Count met; integration requirement likely unmet. |
| Key Terms | 16 | 8–20 | Count met and alphabetized; several definitions need historical calibration. |
| Connections | 8 | 4–8 | Count at upper bound; mostly useful; BPS row needs alignment. |
| Further Reading | 4 | 3–6 | Count met and appropriately separated. |
| Learning Lab | none | optional | No lab required for canonical revision. |

### Learning objectives

- **LO1:** keep. Taught, practiced, and tested clearly.
- **LO2:** revise. Replace “limitation that forced the next school’s emergence” with a response/overlap formulation.
- **LO3:** keep but sharpen “perspectives” as question frameworks whose claims receive unequal support.
- **LO4:** keep. It aligns with the phone/depression examples, retrieval, summary, glossary, and Q6.
- **LO5:** keep but shorten the duplicated caution once the body carries it efficiently.
- **LO6:** keep. Add one stronger application item connecting bias to a safeguard.
- Add an explicit APA IPI theme phrase to one or two objectives during revision rather than adding another objective.

### Retrieval prompts

- Section 1’s behavior/mental-process prompt is strong.
- Section 2’s school-question/limitation prompt is strong and better aligned than LO2.
- Replace the AI prompt’s reasoning-versus-memorization dichotomy with a mechanism-identification question.
- Section 3’s biopsychosocial prompt is useful but assumes students can identify what each single-level account misses; retain with a more concrete scenario if student testing shows difficulty.
- Section 4 has reflection but no brief retrieval check. Add one only by replacing or tightening nearby prose, not by increasing interruption density.

### Review-question actions

- **Keep with minor copyedit:** Q1, Q4, Q6, Q7, Q8, Q9, Q10.
- **Revise Q2:** use Titchener/structuralism rather than Wundt’s structuralism.
- **Revise Q3:** preserve the behaviorist classification but avoid saying the behavior is “fully explained” if that wording implies no internal or contextual processes can matter.
- **Revise Q5:** retain language as a pressure on behaviorism, but avoid teaching Chomsky’s review as the single trigger or as proof that reinforcement cannot contribute to language.
- **Replace Q11:** test the warranted conclusion from alliance research: alliance reliably predicts outcome across orientations, but the association alone does not establish that alliance is the most important independent cause.
- Revise one retained item or replace a weaker factual item with a cross-section application comparing what a perspective asks with what evidence would distinguish explanations.

### Key Terms

Retain the current size. Revise:

- **Behaviorism:** distinguish Watson’s methodological emphasis from Skinner’s treatment of private events.
- **Introspection:** avoid calling all trained introspection simply “Wundt’s method” and then saying it was abandoned wholesale.
- **Structuralism:** keep the existing Titchener/Wundt distinction; align Q2 and the table with it.
- **Replication crisis:** define the reproducibility problem without implying one fixed failure rate across all of psychology.
- **Evolutionary perspective:** shorten after the full evidentiary boundary is established in prose.

### Summary and Connections

The summary accurately cues the four-section structure, but “Watson and Skinner evacuated the mind” is too compressed historically. Preserve the punch but distinguish public observability from Skinner’s treatment of private events. The Connections table is strong overall. Repair the Chapter 13 biopsychosocial row and ensure chapter filenames/anchors are actual links during regeneration rather than plain chapter labels.

## H. Examples, AI connection, chatbot prompts, and Learning Lab decision

### Example and AI judgments

- **Milgram forecast:** retain as a narrative hook after narrowing the generalization and fixing the source attribution.
- **Phone checking:** retain as the primary multiple-perspectives worked example.
- **Depression:** retain because it makes evidentiary weighting consequential, but revise the psychodynamic entry and move the unequal-support rule earlier.
- **Skinner/Chomsky/Turing/LLM:** retain. It clarifies the behavior-versus-mechanism distinction and is not decorative AI content. Correct the retrieval prompt rather than removing the connection.

### Useful chatbot prompts

These should appear only as optional AI-after-effort activities, not as replacements for student reasoning.

1. **Competing lenses after classification:** “First classify this explanation yourself as biological, behavioral, cognitive, sociocultural, psychodynamic, humanistic, or evolutionary. Then ask a chatbot for one explanation from a different perspective. Identify what question changed and what evidence would distinguish the two accounts.”
2. **Output versus mechanism:** “Write your own answer first: what evidence would you need before inferring how a fluent response was generated? Then ask a chatbot to propose three possible mechanisms. Critique which observations would and would not discriminate among them.”
3. **Hindsight calibration:** “Commit a prediction about a novel study result before asking AI to explain either possible outcome. After revealing the result, compare the AI’s post-hoc explanation with your original uncertainty. Identify where an explanation feels obvious only after the outcome is known.”

### Learning Lab decision

**No new lab is required for the canonical Chapter 1 revision.** The central operations can be improved through retrieval prompts and integrated review questions without adding another maintenance burden.

An optional future standalone lab could be justified only if the course needs repeated classification practice: **Perspective Switchboard**. Students would commit a classification, examine several explanations of one behavior, identify the question each perspective asks, rank what evidence would discriminate among accounts, and transfer the reasoning to a new behavior. It should follow the full lab specification—prediction/commit, classification with feedback, explicit explanation, transfer, session-only storage, accessibility, and no claim that the activity experimentally measures the student.

## I. Figures and visual pedagogy

### Figure 1.1 — One behavior, many psychological questions

- **Provisional classification:** use now.
- **Teaching job:** counter the therapy stereotype and preview breadth/levels of analysis.
- **Source/HTML agreement:** path, caption, and alt text agree semantically.
- **Metadata:** attribution is recorded as ChatGPT-generated under Jon’s direction, licensed for textbook use. Add an explicit public-sharing-status field and creation caveat under the newer manifest convention.
- **Placement:** Section 1 is defensible because the figure broadens the definition of psychology. Do not reopen the settled placement absent a concrete reading-flow problem.
- **Final gate:** direct visual inspection at full size and chapter width remains required because PNG bytes were unavailable in this session.

### Portrait strip

- **Provisional classification:** use now as enrichment.
- **Teaching job:** humanize the history and support name recognition without consuming numbered-figure slots.
- **Metadata:** “Wikimedia Commons, public domain” is not enough for durable source tracing. Record exact source page, original creator when known, license/public-domain rationale, modifications/crops, and public-sharing status for each file.
- **Final gate:** verify mobile behavior and readable captions.

### Current Figure 1.3 — Three ways to explain fluent language

- **Provisional classification:** use after caption and numbering repair.
- **Teaching job:** show that similar output can be generated under different explanatory accounts.
- **Minimum repair:** renumber the visible figure as **Figure 1.2** because the Maslow figure was removed; the internal filename may remain unchanged. Revise the caption only as needed to prevent the three panels from looking like three exhaustive or equally established mechanisms.
- **Alt text:** currently describes the three panels but does not state the key contrast that fluent output alone does not determine mechanism; add that instructional relation.
- **Metadata:** record explicit public-sharing status and assistance/creation method consistently in source and HTML.
- **Final gate:** direct visual inspection at full size and chapter width remains required.

### New-figure decision

**No new Chapter 1 figure is justified.** Existing visuals cover breadth and mechanism inference. Additional history portraits, timelines, or decorative brain art would add cognitive and governance cost without improving the chapter’s argument.

## J. Citations, lineage, and generated output

### Priority citation repairs

1. **Milgram prediction:** verify the primary location for the 39-psychiatrist forecast and one-in-a-thousand estimate. The 1963 paper supports the observed obedience result; the forecast may require Milgram’s later book or another primary record. Cite forecast and outcome separately if necessary.
2. **Therapeutic alliance:** Flückiger et al. (2018) supports a reliable modest alliance–outcome association across a large literature. Narrow the causal/independence claim rather than adding citations to preserve it.
3. **Chemical imbalance:** add a current review or umbrella review supporting rejection of a simple serotonin-deficiency account while preserving the broader role of biological mechanisms.
4. **Wundt/Titchener:** verify the brief historical distinction against a scholarly history source if the revision adds detail.
5. **Hindsight bias:** the Fischhoff citation and page range appear standard. The claim that awareness does not readily eliminate the bias is defensible but should be tied to a review if retained as a broad statement.
6. **Replication:** Open Science Collaboration (2015) is appropriate for the flagship replication project. Avoid turning its sample into a universal replication rate for all psychological subfields.
7. **Verification note:** once references are checked, remove the public-facing “checked against secondary sources” note rather than publishing a permanent uncertainty disclaimer. The listed Fischhoff and Turing page ranges should be verified directly and then stated without apology.

### Concept-lineage judgment

Chapter 1 concepts FND-001 through FND-010 are marked canonical/common knowledge, with several publisher-template-change flags but no `needs-verification` entries. The prose reads instructor-authored rather than commercially templated. The CSV’s legacy concept label “Evolutionary psychology framing” must not be copied into the chapter or project handoffs; the chapter correctly uses **evolutionary perspective** and **animal behavioral ecology**.

### Source and HTML parity

- Major prose, tables, figures, questions, glossary, and references are semantically aligned.
- The portrait strip should have a durable source representation rather than only an editorial placeholder.
- Figure 1.3’s authorship sentence should be synchronized across source, manifest, and HTML.
- Connections should link to destination chapter files during later regeneration.
- The chapter uses the current dynamic sidebar loader; the static sidebar snapshot in the conversion spec is not the operative implementation.
- The HTML lacks current `<h3>`/in-section navigation structure.
- No obvious truncation, malformed review disclosures, empty glossary entries, bad ` ? ` mojibake, or mixed Further Reading/References structure was found.
- Browser-level mobile overflow and actual image rendering were not tested in this connector-only audit.

## K. Action routing and minimum repair sequence

1. **Settle the history architecture.** Confirm that the chapter teaches overlapping responses to unresolved problems, not a forced sequence. Revise LO2 and downstream wording.
2. **Correct the two history distinctions.** Separate Watson from Skinner at Psych 101 depth; align Wundt/Titchener across table, glossary, summary, and Q2.
3. **Recalibrate the humanistic/alliance passage.** Preserve the modern evidence bridge, narrow the causal claim, and replace Q11.
4. **Weight perspectives by evidence.** Repair the depression example and align the biopsychosocial connection with Chapter 13’s settled architecture.
5. **Repair assessment integration.** Keep the eleven-item count; revise at least two items for cross-section application and transfer.
6. **Fix narrow factual/citation issues.** Milgram forecast source, gene/environment wording, chemical-imbalance source, and final reference verification.
7. **Reconcile source and figure governance without reopening image design.** Visible figure renumbering, portrait provenance, public-sharing fields, and source/HTML caption parity.
8. **Regenerate or carefully rebuild HTML only after source approval.** Add descriptive subsections/in-section navigation, preserve dynamic sidebar behavior, and validate content rather than tags.
9. **Run final visual/browser validation.** Open the actual figures; test desktop, portrait-mobile, and landscape-mobile widths; check tables, portrait strip, captions, links, disclosures, and navigation.

## Validation gates for a later implementation pass

- Source and HTML semantic parity.
- LO2 no longer implies a forced linear succession.
- Watson and Skinner are not collapsed into one historically inaccurate doctrine.
- Wundt/Titchener distinction is consistent across prose, glossary, and Q2.
- Alliance language describes a robust association without declaring the most important independent causal mechanism.
- Depression example distinguishes historical perspective from evidentiary support.
- Biopsychosocial Chapter 13 connection does not treat the framework as diagnostic.
- AI retrieval prompt tests mechanism inference rather than reasoning-versus-memorization.
- At least two review items require integration or transfer.
- At least one learning objective explicitly names an applicable APA IPI theme.
- Visible figure numbering is sequential; captions/alt text/manifest agree.
- Portrait source pages, licenses, modifications, public-sharing status, and caveats are documented.
- All images load and remain legible at desktop and mobile widths.
- Four numbered content sections have descriptive subsections and in-section navigation without prose genericization.
- Connections contain working destination links and valid internal anchors.
- Key Terms remain populated and alphabetized.
- Review answers remain hidden in valid `<details>` structures.
- Further Reading remains separated from References.
- No bad ` ? ` mojibake, leading-dash alt artifacts, or broad line-ending-only rewrite.
- Public verification note removed after references are directly checked.

## Editorial decision

**Revise rather than rebuild.** Chapter 1 already supplies the textbook’s voice model and one of its clearest organizing arguments. The revision should be narrow and exacting: correct historical distinctions, reduce causal overreach, make evidence weighting visible, and improve assessment integration. Do not replace its hooks, dry humor, problem-organized history, behavioral-ecology identity, AI mechanism analogy, or scientific self-correction conclusion with generic publisher prose. No new figure or required lab should be added during the canonical revision.
