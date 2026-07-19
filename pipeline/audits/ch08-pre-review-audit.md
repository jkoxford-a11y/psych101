# Chapter 8 Memory Pre-Review Audit

**Audit date:** 2026-07-12  
**Scope:** Read-only diagnostic audit for editorial review  
**Canonical repository:** `C:\GitHub\psych101`  
**Authoritative prose:** `source/chapters/ch08-memory.md`  
**Generated output:** `docs/chapters/08-memory.html`

## A. Executive judgment

Chapter 8 is coherent, engaging, and broadly teachable, but it is not yet ready for line-by-line editing. Its strongest organizing idea is that memory preserves usable meaning rather than replaying a complete recording; the encoding–storage–retrieval sequence supports that argument well. Four issues should be resolved first: the chapter treats survival processing as direct evidence that forgetting evolved as purposeful compression; it makes categorical claims about H.M. and human confabulation that the evidence does not support; it presents levels of processing too absolutely; and its glossary is substantially above specification while omitting the chapter’s own central process terms.

The source and HTML appear semantically aligned and complete. The HTML linter passes with 0 failures and 0 warnings, all six images resolve, all internal anchors resolve, and the review/glossary structures are populated. Three finished Chapter 8 labs exist but are not linked from either version. No files other than this audit report were edited during the audit.

Authority and repository state:

- Prose source of truth: `source/chapters/ch08-memory.md`.
- Generated output: `docs/chapters/08-memory.html`.
- Chapter-specific `docs/images/ch08/figure_metadata.md` is more current than the global inventory: it includes an additional unwired raster overview not listed in Chapter 8’s global inventory table.
- Both chapter files end normally and appear complete rather than truncated.
- Project documentation is mildly contradictory: `HANDOFF.md` says Chapter 6 sleep content “lives in Ch05,” while the locked chapter order and `source/chapters/ch06-sleep.md` establish a separate Chapter 6. Chapter 6 simply lacks generated HTML.
- Unrelated working-tree changes were present at audit start in `GPT_project_log.md`, `source/visuals-inventory.md`, and a deleted Chapter 6 edit sheet. They were not touched.

## B. Core argument and two-week takeaways

### Core argument

Memory is not a stored recording. It is a selective, distributed process in which information is encoded, stabilized across partly distinct systems, and reconstructed during retrieval. That architecture explains both memory’s usefulness and its characteristic errors—but the draft currently overextends this into an insufficiently supported claim that forgetting itself is an adaptation for lossy compression.

### Two-week memory test

Students should retain:

1. Encoding, storage, and retrieval are distinct points of success or failure.
2. Sensory memory is brief and high-capacity; working memory is sharply limited and active.
3. Meaningful elaboration usually supports retention better than passive repetition, but effectiveness also depends on the later retrieval task.
4. Long-term memory contains partly separable explicit and implicit systems.
5. H.M. demonstrated severe impairment in forming new episodic/declarative memories alongside preserved skill learning—not total inability to learn anything new.
6. Forgetting reflects retrieval conditions, interference, time, and consolidation rather than one single mechanism.
7. Remembering is constructive; confidence and vividness do not guarantee accuracy.
8. Misinformation, source misattribution, false memory, and clinical confabulation overlap but are not interchangeable.

### Reconstruction test

The headings create a strong progression: Encoding → Storage → Retrieval/Forgetting → Reconstructive Error. Learning objectives, figures, summary, and most review questions follow it.

The main misalignments are:

- The opening promises an explanation of why memory preserves meaning over detail, but the chapter establishes reconstructive selectivity more convincingly than it establishes an evolutionary reason for it.
- LO6 names five study strategies, while only levels of processing receives a review question.
- The glossary omits `encoding`, `storage`, `retrieval`, `spacing effect`, and `retrieval practice`, despite their centrality.
- Figure 8.1 foregrounds “7 ± 2,” while the prose immediately qualifies capacity as closer to three or four chunks under many conditions.
- The summary repeats the unsupported evolutionary-compression conclusion.
- Three labs that could supply the missing practice are built but unwired.

### Conceptual progression

Section 1 is the major load bottleneck: three-box memory, Sperling, STM capacity, chunking, Baddeley, an AI analogy, levels of processing, elaboration, spacing, and retrieval practice all appear under one heading. The order is intelligible but becomes a catalog.

Section 2 moves abruptly from cellular plasticity to memory taxonomies and neuropsychological cases. LTP needs a narrower bridge explaining that cellular plasticity is one level of analysis, not “where memory is stored.”

Section 3 contains the clearest argumentative turn, but its survival-processing paragraph moves from a replicated experimental effect to an adaptive story much too quickly.

Section 4 is well organized around a comparison table, but confabulation, source monitoring, and the AI analogy are collapsed more tightly than the evidence permits.

## C. Confirmed defects

### High — Human confabulation is incorrectly defined by contrast with AI

- **Location:** `source/chapters/ch08-memory.md`, especially lines 168–174; Review Question 12.
- **Problem:** The chapter says even distorted confabulation necessarily traces to an actual encoded experience, whereas AI output has none.
- **Why it matters:** Confabulations can be novel, bizarre, or “fantastic,” including claims about events that never occurred. The chapter tests the false distinction as the correct answer.
- **Recommended fix:** Remove the encoded-event criterion. Preserve the defensible boundary: human confabulation arises within a person’s autobiographical, motivational, affective, and source-monitoring systems; language-model output is generated by a different computational process and should not be treated as human recollection.
- **Confidence:** High. Clinical reviews explicitly include fantastic, foundationless confabulations. See Johnson and Raye, “False memories and confabulation,” https://pubmed.ncbi.nlm.nih.gov/21227110/; and the current clinical overview at https://pubmed.ncbi.nlm.nih.gov/30725646/.

### High — Survival processing is treated as proof of an evolved forgetting mechanism

- **Location:** `source/chapters/ch08-memory.md`, line 128 and the final sentence of the summary.
- **Problem:** One survival-processing experiment is presented as direct evidence that memory was “tuned this way on purpose” and that ordinary forgetting is “exactly the compression it evolved to do.”
- **Why it matters:** The survival-processing advantage is broadly supported; its evolutionary interpretation remains debated and may partly reflect elaboration, distinctiveness, planning, or scenario richness.
- **Recommended fix:** Retain survival processing as an interesting result, label the evolutionary account as one interpretation, and separate the empirical effect from the broader claim that forgetting is an adaptation for compression.
- **Confidence:** High. Even a review defending the adaptive account acknowledges mnemonic alternatives and boundary conditions: https://pubmed.ncbi.nlm.nih.gov/27474137/.

### High — H.M.’s preserved learning is understated by categorical language

- **Location:** `source/chapters/ch08-memory.md`, lines 103–107.
- **Problem:** “The experience was gone, permanently and completely” and “no explicit memory whatsoever” imply a cleaner total loss than the case supports.
- **Why it matters:** H.M.’s new episodic learning was profoundly impaired, but he demonstrated limited new semantic learning. His case supports severe system-selective impairment, not an absolute declarative/nondeclarative wall.
- **Recommended fix:** Replace totalizing language with “little durable episodic record” or equivalent, and add one sentence noting that later work found limited new semantic learning.
- **Confidence:** High. O’Kane, Kensinger, and Corkin found clear although impaired post-surgical semantic acquisition: https://pubmed.ncbi.nlm.nih.gov/15224979/.

### Medium — Connections do not meet the hyperlink specification

- **Location:** `source/chapters/ch08-memory.md`, Connections table, and the corresponding HTML table.
- **Problem:** The first column has internal links, but none of the seven “Reappears in” entries links to the destination chapter.
- **Why it matters:** The specification requires a hyperlinked three-column table.
- **Recommended fix:** Add destination links in the source for built chapters and the prologue. Defer the Chapter 6 link until `docs/chapters/06-sleep.html` exists.
- **Confidence:** High.

### Medium — Glossary is out of range and structurally misprioritized

- **Location:** `source/chapters/ch08-memory.md`, Key Terms.
- **Problem:** 29 entries versus the 8–20 target, while encoding, storage, retrieval, spacing, and retrieval practice are absent.
- **Why it matters:** The glossary currently privileges subordinate categories over the chapter’s semantic skeleton.
- **Recommended fix:** Consolidate and reduce rather than adding five more entries.
- **Confidence:** High.

### Medium — Several glossary and figure definitions overstate the science

- `Chunking` does not let students “exceed” the chunk limit; it changes what counts as a functional unit.
- LTP is a major contributor to memory formation, not simply “the cellular basis” of durable memory.
- A false memory need not be highly confident.
- Sensory memory should not be defined as a universally “near-complete impression.”
- Figure 8.1’s “7 ± 2” presentation conflicts with the prose’s modern qualification.
- Figure 8.3 implies a universal shallow-to-deep strength gradient without retrieval-task qualifications.

**Confidence:** High for the wording problems; medium for how much visual revision is warranted.

### Low — Further Reading attribution contradicts provenance

- **Location:** `source/chapters/ch08-memory.md`, Further Reading; `source/chapters/_provenance/ch08-memory.md`.
- **Problem:** The Laney and Loftus Noba module is called the “primary source” for confabulation and source-misattribution content, but the provenance says it does not use the clinical term `confabulation`.
- **Recommended fix:** Describe it as a student-facing extension on eyewitness bias and false memory, not the primary source for the clinical confabulation account.
- **Confidence:** High.

## D. High-impact editorial decisions

1. Decide whether “lossy compression” is a teaching metaphor or the chapter’s literal explanatory theory. The chapter supports the metaphor; it does not currently establish the theory.
2. Decide whether both AI passages earn their combined length. The working-memory comparison can be shortened; the hallucination comparison requires substantive correction.
3. Decide whether Chapter 8 should teach all 27 tracked MEM concepts. The current length overage and glossary pressure arise largely from that choice.
4. Choose which one or two existing labs belong in the prose. Wiring all three would further interrupt an already crowded Section 1.
5. Decide whether the four-box/taxonomy material should prioritize classic models or current caveats. The present draft sometimes presents the classic interpretation visually and the qualification only in prose.

## E. Scientific accuracy and overreach

## Strong claims requiring author attention

- “Re-reading” is not shallow processing by definition. A student can reread semantically, and later memory depends partly on whether encoding operations match the retrieval demand. The levels framework remains useful, but the chapter and Review Q4 present a universal hierarchy. See Lockhart’s review: https://pubmed.ncbi.nlm.nih.gov/12396652/.
- LTP is one family of plasticity mechanisms within cell and circuit changes involving potentiation, depression, intrinsic excitability, engram allocation, consolidation, and systems reorganization. The body is partly cautious; the glossary is not. See https://pmc.ncbi.nlm.nih.gov/articles/PMC9065729/ and https://pmc.ncbi.nlm.nih.gov/articles/PMC11343267/.
- The explicit/implicit taxonomy is serviceable for Psych 101 but should not be described as completely independent systems. Dissociations show partial separability, not total independence.
- “Interference does most of the explanatory work in everyday forgetting” is broader than the cited 1924 sleep/wake experiment establishes. Keep the experiment, but avoid ranking all causes of everyday forgetting from that evidence.
- Priming as a “standing prediction” is a useful analogy, not an established identity.
- The lost-in-the-mall paragraph should distinguish partial recollective experience from full autobiographical memory. Later reviews estimate higher rates for some evidence of suggested-event recollection but substantially lower rates for full memories: https://pubmed.ncbi.nlm.nih.gov/28163368/.
- The confabulation table should emphasize frontal/basal-forebrain monitoring dysfunction and interacting memory impairment, not “frontal or hippocampal damage” as equivalent routes. See https://pmc.ncbi.nlm.nih.gov/articles/PMC2859897/.

Overall evidence tiers:

- **Strongly established:** reconstructive memory, misinformation effects, working-memory limitations, explicit/implicit dissociations, retrieval practice, spacing, serial-position effects.
- **Broadly supported but simplified:** levels of processing, LTP’s contribution, sleep-related consolidation, three-stage model.
- **Plausible and debated:** adaptive-memory interpretation of survival processing; forgetting as evolved compression.
- **Misleading as written:** every human confabulation derives from a corresponding encoded event; rereading is shallow “by definition”; H.M.’s new experience was wholly and permanently absent.

## F. Cognitive load and organization

| Passage | Judgment | Recommendation |
|---|---|---|
| Section 1 opening through Sperling | Necessary and teachable | Keep; shorten the self-administered pseudo-demo if a lab is linked |
| STM capacity/chunking/digit span paragraph | Three hard ideas in one paragraph | Split |
| Working-memory model plus context-window box | Useful comparison, too long | Shorten AI box by roughly half |
| Levels, elaboration, spacing, testing | Four strategies compressed together | Split; use one lab for practice |
| LTP opening | Abrupt cellular jump | Split and add a level-of-analysis bridge |
| Taxonomy figure plus table | Some duplication, but table adds case anchors | Keep both if the prose is shortened |
| H.M. plus Clive Wearing | High-value but narratively expansive | Keep H.M.; shorten Wearing to the contrast needed |
| Decay/interference/sleep paragraph | Too many theories and caveats in one paragraph | Split |
| Survival-processing paragraph | Strong voice, weak inference | Reframe and shorten |
| Four reconstructive-error categories | Dense but the table earns its space | Keep |
| Second AI Connection | Scientifically flawed and scope-heavy | Revise substantially or move to sidebar |

Retrieval distribution is uneven:

- Section 1: two Stop and Retrieve, two Think About It.
- Section 2: one of each.
- Section 3: Think About It only.
- Section 4: two Stop and Retrieve, no Think About It.

Redistribute rather than increase the total.

## G. Source/HTML reconciliation plan

No dangerous source/HTML parity defect was found.

Matched in both versions:

- Four major sections.
- Six figures and captions.
- Seven Connections rows.
- Twelve review questions and rationales.
- Twenty-nine populated Key Terms pairs.
- Five Further Reading items.
- Complete References.
- All major claims and both AI passages.

Acceptable transformations:

- Markdown blockquotes become styled callouts.
- `####` elements become structured `<h4>` headings/callouts.
- Review answers become `<details>` disclosures.
- Key Terms become a well-formed 29-pair `<dl>`.

Required process:

1. Resolve scientific and structural changes in the Markdown.
2. Regenerate or manually reconvert HTML from the approved source.
3. Preserve the current callout, review-details, table, and figure markup during regeneration.
4. Do not patch HTML independently.

## H. Figures and labs

### Figures

| Figure | Judgment | Main issue |
|---|---|---|
| 8.1 Three-box model | Revise | `7 ± 2`, lifetime duration, and STM/working-memory conflation need qualification |
| 8.2 Working memory | Use now | Clear; state that this is the chapter’s deliberately simplified three-component version |
| 8.3 Levels of processing | Revise | Gradient overstates universal superiority of “deep” processing |
| 8.4 Memory taxonomy | Use now | Effective preview; “partly separable” would be safer than strict independence |
| 8.5 Serial position | Use with caption revision | Primacy/recency mechanisms should be labeled classic interpretations |
| 8.6 Reconstruction | Use now | Strong teaching job; caption already notes reconstruction is usually functional |
| Unwired raster overview | Candidate/reference | Metadata says use-now pending anatomy/legibility review, but it is absent from the inventory and chapter |

All six wired SVGs exist, match source/HTML paths, have descriptive HTML alt text, and are recorded as original/public-shareable. Their embedded text scales with the 1600×900 canvas; because the figures are not expandable, the smallest 19–22 px SVG labels are likely unreadable on a narrow phone. This is a code-level concern, not a browser-reproduced defect: local browser navigation was blocked by security policy.

### Labs

| Lab | Classification | Recommended placement |
|---|---|---|
| `levels-of-processing.html` | Built but not wired; strongest chapter fit | After Figure 8.3 |
| `interactive-imagery.html` | Built but not wired; good elaboration practice | After elaboration, or expose through the lab index rather than interrupting prose |
| `self-reference-effect.html` | Built but not wired; concept not adequately introduced in the chapter | Prologue or optional link unless self-reference is added to LO6 |

Code-level validation found unique IDs, resolved ARIA targets, local assets, prediction/explanation/transfer/completion phases, `sessionStorage` for lab state, and no lab-specific analytics or server calls. These are not browser-interaction results.

## I. Learning objectives, glossary, and review questions

### Specification counts

| Element | Actual | Specification |
|---|---:|---:|
| Learning objectives | 6 | 4–7 |
| Major sections | 4 | 3–5 |
| Body | Approximately 5,940 by provenance; approximately 6,890 including tables/callouts by mechanical count | 3,500–5,000 |
| Chapter Summary | 319 words | 200–400 |
| Connections | 7 | 4–8 |
| Review questions | 12 | 8–12 |
| Key Terms | 29 | 8–20 |
| Further Reading | 5 | 3–6 |
| Stop and Retrieve | 5 | Typically 4–6 |
| Think About It | 4 | One per major section intended, but unevenly placed |
| Classic Studies | 1 | Optional |
| Labs linked | 0 | Optional; 3 relevant labs built |

### Objective alignment

- **LO1:** Taught throughout; weakly practiced and not directly tested as an encoding/storage/retrieval diagnostic.
- **LO2:** Taught in Section 1; practiced by Sperling and working-memory prompts; tested heavily by Q1–3.
- **LO3:** Taught and practiced well in Section 2; tested by Q5 and Q11.
- **LO4:** Taught in Section 3; practiced through the interference panel; tested by Q6–8.
- **LO5:** Taught in Section 4; tested by Q9, Q10, and Q12, but Q12 is scientifically defective.
- **LO6:** Taught in Section 1; only levels of processing is tested. Spacing, retrieval practice, elaboration, and chunking are not assessed as an integrated study plan.

LO2 should explicitly mention working memory if Q3 and Figure 8.2 remain prominent. LTP is not represented in an objective; reduce its scope rather than adding another objective.

### Review-question disposition

- **Keep:** Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q9, Q11.
- **Revise Q4:** Remove the assumption that rereading is inherently shallow; test the operations performed and retrieval demands.
- **Revise Q10:** Require enough clinical context to distinguish confabulation from ordinary false belief or false memory.
- **Replace Q12:** Preferably use an application integrating spacing, retrieval practice, elaboration, and task-appropriate encoding. If the AI question is retained, rebuild it around defensible mechanism boundaries.

The set is balanced by section and is at the maximum allowed count. Q7 supplies a cross-chapter sleep connection; a revised Q12 can supply the second strong integration.

### Key Terms

#### Tier 1 — Retain or add through consolidation

- Memory processes: encoding, storage, retrieval.
- Sensory memory.
- Working memory.
- Chunking.
- Levels of processing/elaboration.
- Spacing effect.
- Retrieval practice.
- Explicit memory.
- Implicit memory.
- Episodic memory.
- Semantic memory.
- Procedural memory.
- Interference, with proactive/retroactive subdefinitions.
- Serial position effect.
- Reconstructive memory.
- Misinformation effect.
- Source misattribution.
- Anterograde/retrograde amnesia as one paired entry.

#### Tier 2 — Useful but optional

- Atkinson–Shiffrin model.
- Central executive.
- Iconic/echoic memory.
- Priming.
- LTP.
- False memory.
- Confabulation.
- Flashbulb memory.
- Tip-of-the-tongue phenomenon.

#### Tier 3 — Do not add separately

- Phonological loop.
- Visuospatial sketchpad.
- Primacy and recency as separate entries.
- Proper names, studies, digit-span variants, and AI terminology.

## J. Citation and lineage issues

Body citations and References are broadly bidirectionally intact. No substantive body citation lacks a corresponding entry.

Priority issues:

1. Nairne et al. (2007) supports the survival-processing effect, not the chapter’s full evolutionary-compression conclusion.
2. Scoville and Milner (1957) cannot by itself support all later anatomical and preserved-learning claims about H.M.; use a later H.M. source if the detailed claims remain.
3. The LTP account needs a current review if it continues to carry a broad “biological basis” claim.
4. The Noba entries appear in References without body citations; if they are only Further Reading, they need not be duplicated as claim-supporting references.
5. “Crash Course Psychology—episodes on memory” is not a sufficiently curated resource without exact episode titles or links.

Lineage:

- MEM-019 `Confabulation` and MEM-020 `Source misattribution` are marked `needs-verification`.
- The concepts themselves are common scientific subject matter and not a copyright problem.
- The chapter’s provenance does not establish that the current confabulation wording came from a source that actually discusses clinical confabulation. Conduct a human proximity review against course slides and commercial textbooks, then ground the final wording in primary/review literature.
- No evidence found that would justify copying or closely paraphrasing a commercial textbook.

## K. Optional enhancements

- Add a compact encoding–storage–retrieval diagnostic scenario rather than another factual question.
- Link one primary Chapter 8 lab directly and leave the other two on the Learning Labs index.
- Add a short qualifier that working-memory “central executive” is a functional construct, not a literal internal decision-maker.
- Consider making dense SVGs expandable, but only after an actual narrow-screen render test.
- Replace the vague Crash Course item with a precise accessible resource.

## L. Recommended order of operations

1. Correct the survival-processing, H.M., levels-of-processing, LTP, and confabulation/AI claims in the source.
2. Decide whether the compression claim remains a metaphor or becomes a more cautiously argued theoretical spine.
3. Rebalance Section 1 and shorten the two AI passages.
4. Reconcile LO6 and the review set; revise Q4/Q10 and replace Q12 without exceeding 12 questions.
5. Reduce and reprioritize Key Terms to no more than 20.
6. Choose which Chapter 8 lab or labs to wire.
7. Correct the Connections destination links and Chapter 6 documentation.
8. Revise Figures 8.1 and 8.3 alongside their source captions.
9. Recheck citations and lineage wording.
10. Regenerate HTML once from the approved Markdown.
11. Rerun lint, semantic parity, link, accessibility, and genuine browser/mobile checks.

## Decisions requiring Jon’s judgment

- Is “lossy compression” a metaphor or the chapter’s claimed scientific explanation?
- Which one or two of the three finished labs should interrupt the prose?
- Should the AI hallucination comparison be rebuilt or removed?
- Which subordinate glossary terms survive the reduction to 20?
- Should the classic-model figures be revised now or retained with stronger captions?

---

# Addendum: Reassessment Under Audit Prompt 3.0

**Added:** 2026-07-12  
**Purpose:** Record how the revised audit prompt changes the interpretation and repair guidance above without erasing the original Prompt 2.0 audit.

The main scientific findings remain, but Prompt 3.0 materially changes the audit’s framing and several repair recommendations.

## Findings that do not change

- The confabulation/AI distinction in Review Question 12 is still inaccurate.
- The survival-processing result still does not prove that forgetting evolved as lossy compression.
- H.M.’s impairment is still described too categorically.
- Rereading is still incorrectly equated with shallow processing “by definition.”
- LTP and several glossary definitions still need calibration.
- The Connections links, source/HTML findings, figure concerns, and lab inventory remain valid.

## Recommendations that change

### 1. The glossary count is not itself a confirmed defect

Prompt 3.0 explicitly treats numerical targets as preferences rather than hard rules. Twenty-nine Key Terms need not be reduced merely to satisfy the 8–20 target. The real issue is instructional prioritization: central processes are absent while some subordinate terms occupy space. The repair should be selective consolidation and rebalancing, not an automatic reduction to twenty or fewer entries.

### 2. Revision needs a binding Must-Preserve Ledger

The following Chapter 8 assets should survive revision:

| Asset | Instructional role | What makes it effective | Accuracy status | What must survive |
|---|---|---|---|---|
| Video-camera misconception opener | Narrative hook and organizing analogy | Activates a widespread belief and gives the chapter a clear opponent | Accurate with the existing reconstruction boundary | The concrete “video camera” frame and the direct rejection of replay |
| “Why does memory preserve meaning better than detail?” | Organizing question | Unifies encoding, forgetting, and reconstruction | Strong as a teaching question; adaptive answer needs calibration | The question and its role as the chapter’s spine |
| Sperling partial-report demonstration | Evidence and worked example | Makes sensory capacity/decay inferable rather than merely asserted | Strongly established | Whole-report versus partial-report contrast |
| Leaky-bucket metaphor | Mnemonic analogy | Makes fragile short-term maintenance immediately visible | Useful simplification | The image and its transition into durable encoding; one boundary is sufficient |
| FBI–CIA–IRS and Roy G. Biv | Worked examples | Let students perform chunking mentally | Accurate | At least one vivid chunking example; both may remain if rhythm benefits |
| H.M. | Evidence and recurring case | Gives multiple-memory-systems reasoning a human anchor | Strong case; categorical wording needs narrowing | Narrative presence, mirror-tracing dissociation, and scientific payoff |
| Clive Wearing | Contrast case and narrative hook | Shows a different severity/cause with preserved musical skill | Broadly accurate with bounded claims | The contrast function unless Jon decides H.M. alone carries it |
| Password examples for interference | Worked application | Solves the proactive/retroactive naming problem | Accurate | The old-blocks-new/new-blocks-old diagnostic structure |
| Serial-position curve | Evidence and figure | Makes primacy/recency visually reconstructable | Pattern strongly established; mechanism is classic interpretation | The U-shaped pattern and two labeled effects |
| Reconstructive-memory figure | Explanatory figure | Visualizes reconstruction without cataloging every error type | Strong, appropriately caveated | Original event → partial encoding → reconstruction structure |
| Four-error comparison table | Discrimination practice | Separates misinformation, false memory, source error, and confabulation | Useful; confabulation row needs refinement | Side-by-side diagnostic dimensions |
| Flashbulb-memory confidence/accuracy distinction | Evidence and memorable application | Gives students a vivid reason not to equate confidence with truth | Strongly supported | The vividness-versus-accuracy landing |
| Direct claims followed by short landings | Voice asset | Preserves instructor rhythm and recall value | Not a scientific claim in itself | Direct address, concrete setup, and concise payoff sentences |
| Evolutionary/compression frame | Organizing analogy and theoretical lens | Connects memory to the book’s recurring efficiency/flexibility theme | Useful but overextended in one passage | Preserve as a calibrated organizing metaphor, not proof from one study |

### 3. Several shortening recommendations should be narrower

- **Survival processing:** Do not merely shorten the paragraph. Preserve its evolutionary question, concrete survival scenario, and punchy landing. Repair only the inference from “the effect exists” to “this proves forgetting evolved for compression.”
- **H.M.:** Keep the full narrative case. Correct the categorical sentences rather than flattening the case into a clinical summary.
- **Clive Wearing:** Do not shorten automatically. First decide whether the contrast performs a memorable instructional job that H.M. cannot perform alone.
- **Working memory/context window:** Preserve the analogy if one precise boundary can correct it. Cutting it in half is not inherently better.
- **Figure 8.3:** Preserve the visual shallow/deep comparison if one body or caption sentence can carry the transfer-appropriate-processing boundary. Do not turn the figure into a diagram of caveats.

### 4. Distinguish the claim, student inference, evidence, and repair

For the survival-processing passage:

- **The chapter explicitly claims:** Survival-processing performance directly supports memory being evolutionarily tuned to retain useful material and forget the mundane.
- **A reasonable student may infer:** Ordinary forgetting is an evolved compression program demonstrated by this experiment.
- **The evidence supports:** Survival-oriented encoding often improves retention; why it does so and how much that demonstrates evolutionary specialization remain debated.
- **Minimum accurate repair:** Preserve the adaptive framing but identify it as an interpretation rather than proof.

For the confabulation/AI passage:

- **The chapter explicitly claims:** Human confabulation is anchored to an encoded experience, unlike generated AI output.
- **A reasonable student may infer:** Confabulation cannot create a novel event without a corresponding experience.
- **The evidence supports:** Human confabulation occurs within autobiographical, affective, motivational, and source-monitoring systems, but its reported event need not correspond to an actual encoded episode.
- **Minimum accurate repair:** Move the boundary from “encoded event versus no encoded event” to “different biological, autobiographical, and computational systems.” Preserve the useful warning that fluent confidence is not evidence of truth.

### 5. Consolidate the audit into root causes

The later revision should route individual symptoms through approximately six root causes:

1. **The compression metaphor sometimes becomes a literal adaptive-mechanism claim.** Preserve the metaphor and book-level bridge; correct the inference ladder.
2. **Classic dissociations are presented as cleaner boundaries than the evidence supports.** Preserve H.M., Wearing, and the explicit/implicit distinction; replace absolute language with bounded direct claims.
3. **Useful teaching simplifications become universal rules across prose, figures, glossary, and questions.** Preserve the three-box model, levels figure, serial-position figure, and LTP bridge; place one necessary qualification at the best surface.
4. **The AI analogy is made to carry a false mechanistic distinction.** Preserve comparison and critique; replace the encoded-event criterion.
5. **Section 1 contains too many valuable ideas without enough performed practice.** Preserve the examples and narrative movement; use existing labs and structural splitting before cutting memorable instruction.
6. **Back-matter alignment favors subordinate vocabulary over the semantic skeleton.** Rebalance glossary and review coverage without enforcing a numerical ceiling mechanically.

### 6. Qualification-load judgment

Chapter 8’s main problem is not excessive hedging. Several existing qualifications are proportionate and should remain:

- The three-box model is a simplification.
- Working-memory capacity varies by task and chunking.
- LTP is one major mechanism.
- Sleep provides more than passive protection from interference.
- Flashbulb vividness is not accuracy.

These qualifications should generally appear once, in the body or caption. They should not be multiplied across definitions, summary, review questions, and answer rationales. Revision must not make “the evidence is complicated” a second curriculum or the chapter’s dominant retrieval cue.

### 7. Revised lab-gap decision

**Decision: reuse existing labs; more than one existing lab is instructionally justified, but all three need not interrupt the chapter.**

- `levels-of-processing.html` directly practices a load-bearing encoding claim and is the strongest candidate for in-chapter integration.
- `interactive-imagery.html` practices elaborative relational binding and can earn a second link if Section 1 is structurally split.
- `self-reference-effect.html` belongs in the prologue or remains an optional lab-index resource unless self-reference becomes explicit Chapter 8 content.

The teaching job is student performance—prediction, encoding, retrieval, explanation, and transfer—not simply observing an interesting memory effect.

## Revised revision constraints

### Must preserve

- The video-camera misconception and reconstructive-memory spine.
- The question of why meaning survives better than detail.
- Sperling, H.M., the interference password examples, and the flashbulb-memory distinction.
- The leaky-bucket and compression metaphors, with proportionate boundaries.
- The reconstructive-memory figure and diagnostic comparison table.
- Direct instructor voice, concrete scenes, and short landing sentences.
- Evolutionary framing as a meaningful question and organizing lens.

### Must correct

- The encoded-event criterion distinguishing confabulation from AI output.
- Survival processing presented as proof of an evolved forgetting mechanism.
- Absolute descriptions of H.M.’s inability to acquire new memory.
- Rereading treated as shallow processing by definition.
- LTP treated as the singular cellular basis of durable memory.
- Confabulation’s anatomical characterization and Review Question 12.
- Connections destination links and back-matter alignment.

### Must not happen

- Do not replace the compression metaphor with generic summary prose.
- Do not remove H.M. or another vivid example merely to reduce word count.
- Do not remove a teaching analogy when one boundary sentence repairs it.
- Do not repeat the same caveat across prose, caption, glossary, summary, question, and rationale.
- Do not make uncertainty the chapter’s dominant retrieval cue.
- Do not force the glossary to twenty entries if a somewhat larger set remains coherent and useful.
- Do not turn Figure 8.3 or another explanatory visual into an instructionally empty diagram of qualifications.
- Do not remove a vivid example without preserving or replacing its teaching function.
- Do not make broad edits where one sentence would solve the problem.

## Revised bottom-line judgment

Prompt 3.0 does not overturn the scientific diagnosis. It changes the audit from a defect-forward cleanup plan into a constrained revision brief. Chapter 8 still needs pre-line-edit scientific and alignment work, but that work should consist mostly of narrow inference repairs, selective restructuring, and better use of existing labs—not neutralization of the chapter’s memorable teaching machinery.
