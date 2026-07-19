# Chapter 9 Thinking, Language, and Intelligence Pre-Review Audit

**Audit date:** 2026-07-14  
**Scope:** Read-only diagnostic audit for editorial review  
**Canonical repository:** `C:\GitHub\psych101`  
**Authoritative prose:** `source/chapters/ch09-thinking-language-intelligence.md`  
**Generated output:** `docs/chapters/09-thinking-language-intelligence.html`

## A. Executive judgment

Chapter 9 is ambitious, vivid, and built around a strong unifying idea: concepts compress experience, heuristics compress decisions, language makes private models public, and intelligence tests imperfectly compress patterns of performance. That spine gives the chapter unusual coherence across subjects that often read like a survey-course catalog. The instructor voice, recurring *k*-word example, worked reinforcement example, classic reasoning tasks, practical AI lesson, and anti-reification argument are all worth protecting.

The chapter is not ready for line-by-line editing. Five root problems need author-level resolution first:

1. Section 2 compresses several distinct reasoning phenomena into one mechanism, especially by treating Wason performance as confirmation bias, default effects as framing, and a broad family of biases as attribute substitution.
2. The language-acquisition discussion presents disputed claims as settled and generalizes a social phonetic-learning experiment beyond its scope.
3. The group-differences paragraph needs a narrow evidence update: its ethical argument is strong, but its treatment of genetic inference and stereotype threat is too categorical.
4. The chapter exceeds the length and load targets while postponing most retrieval practice until the end.
5. Four figures need substantive correction before publication; one, the water-jar diagram, is internally impossible as drawn.

The source and generated HTML appear semantically aligned. Static inspection found all 10 images present, nonempty alt text, populated review and glossary structures, working local paths, and no bad ` ? ` separator. A live browser render could not be completed because the browser security policy blocked navigation to the local `file:///` URL; no workaround was attempted. No chapter, HTML, lab, image, inventory, handoff, or project-log files were changed during this audit.

## B. Core argument and two-week takeaways

### Core argument

Thinking, language, and intelligence are related forms of compression. Concepts reduce the complexity of experience; heuristics reduce the cost of deciding; language packages private models into public symbols; intelligence tests reduce varied performances to scores. Compression makes cognition efficient, but it also discards information, builds in assumptions, and can be mistaken for the reality it summarizes.

### Two-week memory test

Students should retain:

1. Concepts organize experience through prototypes, exemplars, and hierarchies; no single representation explains every act of categorization.
2. Algorithms trade efficiency for reliability, while heuristics trade some reliability for speed and low effort.
3. Availability, representativeness, anchoring, framing/default effects, confirmation-seeking, and insight failures are related but not interchangeable.
4. Fast and slow processing are useful modes of analysis, not two literal brain systems or a conscious/unconscious switch.
5. Language uses structured symbols to make private models shareable, and linguistic categories can bias attention without determining thought.
6. Language acquisition reflects biological preparedness, statistical learning, social interaction, and experience; the balance among theories remains contested.
7. Intelligence is multifaceted. Fluid and crystallized abilities are useful distinctions, while broader theories organize evidence at different levels.
8. IQ scores can predict some outcomes while remaining incomplete, context-sensitive summaries rather than measures of a person's worth or potential.
9. Group score differences do not identify their causes; social categories, environments, opportunities, measurement conditions, and genetic claims must not be collapsed.
10. When people or AI systems produce fluent answers, verification should track the reasoning process and evidence rather than fluency alone.

### Reconstruction test

The four-part progression is intelligible:

- concepts and problem solving;
- judgment and decision making;
- language and thought;
- intelligence and testing.

The compression metaphor connects them successfully. Misalignment arises because the chapter sometimes mistakes the metaphor for a shared causal mechanism. This is most visible in Figure 9.9 and Section 2, where qualitatively different effects are placed under attribute substitution. The ending also behaves more like a comprehensive assessment packet than a chapter close: summary, 29 terms, 10 delayed questions, Connections, References, and Further Reading compete for attention.

## C. Confirmed defects

### High - The Wason task is labeled as confirmation bias in miniature

- **Location:** Section 2, the Wason selection-task discussion.
- **Problem:** The chapter treats the classic error as a direct miniature of confirmation bias.
- **Why it matters:** Confirmation-seeking is one interpretation, but matching bias, task interpretation, positive-test strategy, and information-gain accounts offer distinct explanations. Introductory students should not leave thinking the task diagnoses a single everyday bias.
- **Recommended fix:** Present the task as a case in which people often seek or select confirming instances, then state that researchers disagree about whether the pattern reflects confirmation bias, matching, interpretation, or an information-search strategy.
- **Confidence:** High. See the recent discussion of matching-bias accounts at https://pmc.ncbi.nlm.nih.gov/articles/PMC11561113/ and the information-gain alternative at https://pmc.ncbi.nlm.nih.gov/articles/PMC3098374/.

### High - Several biases are collapsed into attribute substitution

- **Location:** Section 2 and Figure 9.9.
- **Problem:** Availability, representativeness, confirmation, framing, and anchoring are presented as instances of one substitution mechanism.
- **Why it matters:** Attribute substitution is a useful account for some heuristic judgments, especially when an easier question replaces a harder one. It is not an adequate umbrella definition for confirmation-seeking, reference-point effects, defaults, or every anchoring effect.
- **Recommended fix:** Make attribute substitution one mechanism among several. Use the figure as a family map with separate branches for substituted cues, selective evidence search, reference points, and defaults.
- **Confidence:** High.

### High - The organ-donation example conflates framing with defaults

- **Location:** Section 2, opt-in/opt-out organ-donation example.
- **Problem:** The example is classified as gain/loss framing.
- **Why it matters:** Opt-in versus opt-out primarily changes the default and the action required to depart from it. Wording can frame the choice, but the default effect is the central manipulation.
- **Recommended fix:** Label it as a default effect and then note that framing, implied norms, effort, and loss aversion may help explain why defaults matter.
- **Confidence:** High. A useful distinction is reviewed at https://pmc.ncbi.nlm.nih.gov/articles/PMC10192178/.

### High - Language acquisition claims exceed the cited evidence

- **Location:** Section 3, behaviorism, Chomsky, poverty of the stimulus, and Kuhl discussion.
- **Problem:** The draft says Chomsky's correction was necessary, treats poverty of the stimulus as an established fact, and generalizes a live-interaction phonetic-learning result into social interaction being necessary for language acquisition as a whole.
- **Why it matters:** Chomsky transformed the field and exposed weaknesses in simple imitation-and-reinforcement accounts, but Universal Grammar and poverty-of-stimulus arguments remain disputed. Kuhl et al. tested short-term learning of foreign-language phonetic contrasts, not the necessity of social interaction for all language acquisition.
- **Recommended fix:** Say that Chomsky's critique showed why strict behaviorism was inadequate; identify poverty of the stimulus as a disputed learnability argument; and scope the Kuhl result to live social exposure facilitating foreign phonetic learning in infancy.
- **Confidence:** High. Primary study: https://ilabs.uw.edu/wp-content/uploads/kuhl_2003_pnas_1532872100.pdf. A recent critique of Universal Grammar's explanatory role: https://www.cambridge.org/core/journals/language/article/abs/child-language-acquisition-why-universal-grammar-doesnt-help/7975578727D15104DAADA7E3C6DD9AF9.

### High - Figure 9.3's water-jar solution is impossible

- **Location:** Figure 9.3 and its accompanying fixed-set discussion.
- **Problem:** With jars A = 12 L, B = 7 L, and C = 5 L, the displayed steps include repeating a pour into an already full B. The transfer sequence cannot produce the stated result. The second problem says the goal is 4 L in B but proposes filling B, which yields 7 L.
- **Why it matters:** This is a worked reasoning example. An impossible procedure teaches the wrong task and undermines trust in later demonstrations.
- **Recommended fix:** Remove the current image from use until it is redrawn from a verified Luchins-style problem set. Check every intermediate volume and ensure the simple solution actually reaches the stated target.
- **Confidence:** High.

### Medium - The Chicago anchoring example is misattributed to the original 1974 task

- **Location:** Section 2, anchoring paragraph.
- **Problem:** The prose associates a Chicago-population item with Tversky and Kahneman's 1974 demonstration.
- **Why it matters:** The original experiment used a wheel-derived anchor and estimates of African nations in the United Nations. Chicago is a later anchoring item.
- **Recommended fix:** Either use the original UN example or retain Chicago while citing the later source that used it.
- **Confidence:** High. The original task and later variants are summarized at https://pmc.ncbi.nlm.nih.gov/articles/PMC8006283/.

### Medium - The Linda result needs a frequency-format boundary condition

- **Location:** Section 2, conjunction-fallacy discussion.
- **Problem:** The direct-choice error rate is presented without explaining that format substantially changes performance.
- **Why it matters:** The classic result is real, but explicit frequency formulations can sharply reduce conjunction errors. The phenomenon is not invariant to representation.
- **Recommended fix:** Keep the memorable Linda example, then add one sentence: when the same relation is made explicit with counts or nested sets, many more people answer correctly.
- **Confidence:** High. Tversky and Kahneman's original paper reports a much lower error rate in one 100-case frequency version: https://joelvelasco.net/teaching/5311/tverskykahnamen83-Extensional.pdf.

### Medium - The group-differences paragraph is more categorical than the evidence supports

- **Location:** Section 4, group differences in intelligence-test performance.
- **Problem:** The chapter states that scientific consensus says group differences are not explained by genetic differences and uses stereotype threat as a mechanism producing observed group score differences, based mainly on one women-and-math study.
- **Why it matters:** The ethical conclusion should stay: score differences do not establish innate group differences, and race must not be treated as a biological genetic proxy. The scientific wording should distinguish absence of established genetic causation from proof of no genetic contribution under every group definition. Stereotype threat is supported in some settings but is too small and variable to serve as a general explanation of subgroup mean differences.
- **Recommended fix:** State that current evidence does not establish genetic causation for socially defined group score gaps; explain that race and ethnicity are not biological proxies; present stereotype threat as one context-sensitive influence on performance, not a general account of mean gaps.
- **Confidence:** High. See the 2024 meta-analysis at https://pubmed.ncbi.nlm.nih.gov/38421748/ and the National Academies report on race, ethnicity, and genomics at https://www.nationalacademies.org/publications/27913.

### Medium - Connections and ending order do not meet the chapter specification

- **Location:** Ending sections in source and HTML.
- **Problem:** Connections follows the review section, its destination cells are not hyperlinks, and Further Reading appears after References rather than as a distinct pre-reference section.
- **Why it matters:** These are explicit structural expectations, not merely stylistic preferences. The current order also weakens transfer by placing Connections after the assessment endpoint.
- **Recommended fix:** Move Connections before cumulative review, hyperlink destinations that exist, place Further Reading before References, and keep each Further Reading item separate.
- **Confidence:** High.

### Low - One Connections row overstates the dual-process interpretation

- **Location:** Connections table, inattentional-blindness row.
- **Problem:** Inattentional blindness is labeled a System 1 failure.
- **Why it matters:** The effect is better explained by selective attention and task demands than by assigning it to a fast-processing system.
- **Recommended fix:** Describe it as a limit of selective attention that illustrates what efficient processing omits.
- **Confidence:** High.

## D. High-impact editorial decisions

1. Decide whether this is intentionally a long capstone chapter or should return toward the 3,500-5,000-word target. Sections 1-4 contain about 6,944 words. If cutting, protect the compression spine and reduce catalogs, secondary debates, and repeated qualifications.
2. Decide whether to retain the Kahneman System 1/System 2 names while explicitly teaching them as processing modes, or use a broader dual-process organizer. In either case, avoid literal-system imagery and conscious/unconscious definitions.
3. Decide how much of the Universal Grammar-versus-statistical-learning debate belongs in the student narrative. The chapter needs honest uncertainty, but the most technical modern dispute may fit better in Further Reading or an instructor note.
4. Reopen the group-differences paragraph narrowly rather than dismantling it. Its anti-reification and structural-context argument is essential; the genetics and stereotype-threat sentences need calibration.
5. Decide whether 29 glossary terms and 8 learning objectives reflect deliberate coverage. Current targets are 8-20 terms and 4-7 objectives.

## E. Scientific accuracy and overreach

### Load-bearing claims

- **Strongly established:** concepts support efficient categorization; heuristics can be fast and systematically biased; anchoring affects estimates; language is structured and learned; linguistic categories can influence attention; fluid and crystallized abilities are distinguishable; test scores predict some outcomes while remaining incomplete; intelligence is affected by genes and environments.
- **Broadly supported but simplified:** prototype and exemplar accounts; dual-process approaches; linguistic relativity; the positive manifold and *g*; test reliability and validity; heritability changing across populations and environments.
- **Actively disputed or framework-dependent:** poverty of the stimulus and Universal Grammar; exact boundaries among dual-process theories; causal interpretation of demographic score gaps; the scope of stereotype threat.
- **Misleading as written:** Wason errors are simply confirmation bias; organ-donation opt-in/out is simply framing; every listed bias is attribute substitution; social interaction is generally proven necessary for language acquisition; the water-jar steps work.

### Additional calibration needs

- Figure 9.5 presents two literal systems and labels System 2 “fully conscious.” The body prose is more careful. Make the figure match the prose: these are clusters of processing characteristics, and deliberate processing is not always fully conscious.
- Grammatical-gender effects are suitable evidence for linguistic relativity, but effect size and replicability vary by task and language. Keep the granularity-not-determinism boundary. Review: https://pubmed.ncbi.nlm.nih.gov/31429058/.
- Treat IQ as a useful, standardized, lossy summary. Avoid shifting from predictive validity to a claim that the score captures an underlying essence.
- The AI comparison works best as a practical epistemic lesson: fluent output is evidence of fluent output, not proof of correct reasoning. Avoid claiming identity between model behavior and a specific human cognitive mechanism.

## F. Cognitive load and organization

Quantitative profile:

| Element | Observed | Target | Judgment |
|---|---:|---:|---|
| Sections 1-4 | ~6,944 words | 3,500-5,000 | High overage |
| Section 1 | ~1,400 words | - | Manageable |
| Section 2 | ~2,162 words | - | Main load bottleneck |
| Section 3 | ~1,658 words | - | Dense theoretical dispute |
| Section 4 | ~1,724 words | - | Dense but coherent |
| Learning objectives | 8 | 4-7 | Slightly high |
| Key terms | 29 | 8-20 | Substantially high |
| Summary | ~479 words | 200-400 | High |
| Review questions | 10 | Format calls for mixed retrieval/MCQ | Quantity fine; format misaligned |

Most retrieval practice is postponed to the 10-question ending. The section bodies do not contain the intended recurring Stop-and-Retrieve pattern, and the Think About It prompts do not consistently ask students to apply the just-completed section. The end questions are open response rather than mixed multiple-choice questions with tempting wrong answers and rationales.

Recommended load repair:

- Put one short retrieval prompt after each major conceptual turn rather than adding more total questions.
- Cut repeated compression explanations once the spine is established.
- In Section 2, organize by problem type: search/problem solving, probabilistic judgment, evidence selection, and choice architecture.
- In Section 3, separate what children learn, proposed mechanisms, and the language-thought question.
- In Section 4, distinguish theories of intelligence, testing, score interpretation, and group comparisons.
- Reduce glossary entries by consolidating subordinate terms and keeping the concepts students must use after the course.

## G. Source/HTML reconciliation plan

No dangerous source/HTML divergence was found. Static HTML checks found:

- 10 figures and 10 resolvable image files;
- nonempty alt text for every figure;
- 10 populated review disclosures;
- 29 populated key-term entries;
- 3 separated Further Reading items;
- no duplicate IDs;
- no broken local links found;
- no bad ` ? ` separator;
- navigation and `figure-expand.js` wiring present;
- 10 figures marked expandable with corresponding controls.

The HTML appears to contain the current semantic content and in a few structural respects may be newer than the Markdown. Reconciliation should still follow repository authority:

1. Resolve science, scope, and structure in `source/chapters/ch09-thinking-language-intelligence.md`.
2. Regenerate or reconvert the chapter HTML from the approved source.
3. Preserve the current review disclosures, figure expansion controls, navigation, tables, and key-term markup.
4. Re-run local-link, alt-text, glossary, Further Reading, separator, and semantic-content checks.
5. Perform desktop and narrow-screen visual QA in an allowed rendering environment. This audit's in-app browser could not open the local file because of browser security policy.

Do not patch the generated HTML independently.

## H. Figures and labs

### Figure decisions

| Figure | Decision | Main issue |
|---|---|---|
| 9.1 Concept hierarchy | Revise | Mixes superordinate, basic, subordinate, ecological, and behavioral levels; the bird hierarchy does not cleanly teach the stated levels |
| 9.2 Prototype/exemplar | Use with caption revision | Clarify that prototype and exemplar accounts can coexist and fit different tasks |
| 9.3 Water jars | Remove until redrawn | Transfer sequence and stated simple solution are mathematically impossible |
| 9.4 Problem-solving strategies | Use now | Clear comparison; ensure labels match prose terminology |
| 9.5 Dual processing | Revise | Reifies two literal systems and calls System 2 fully conscious |
| 9.6 Heuristic example | Use now | Teachable if the surrounding prose distinguishes mechanisms |
| 9.7 Language structure | Use now | Clear overview |
| 9.8 Linguistic relativity | Use with calibrated prose | Protect non-determinist and non-deficit boundaries |
| 9.9 Bias family | Revise | Incorrectly places diverse effects under attribute substitution |
| 9.10 Intelligence/testing | Use now | Fits the useful-but-lossy score argument |

All 10 captions are effectively title-only and identify the images as original figures, while the alt text carries most of the explanatory burden. Captions should state the teaching claim and, where necessary, the boundary condition. The chapter provenance identifies GPT-generated originals, but no Chapter 9 image README/manifest records creation details, license/public-sharing status, and per-image disposition. Add that metadata during the figure-revision pass.

### Lab decision

The existing `docs/labs/ch09/fluid-intelligence-rule-finding.html` is the right lab for the chapter. It includes prediction commitment, frozen response fields, trial feedback, a visible log, privacy language, accessibility labels, a completion summary, and transfer. No new Chapter 9 lab is justified.

Two repairs are needed before stronger integration:

- The interface reveals Explain and Transfer at the same time. Gate transfer until the explanation step is completed so students must articulate the rule before generalizing it.
- The explanation can be saved blank. Require a minimal nonempty response or explicitly offer a “not sure yet” commitment.

After those repairs, link the lab near fluid intelligence and use the prose to frame what performance can and cannot establish about intelligence.

## I. Preserve-at-all-costs list

- The compression spine and opening question: why one good concept can replace many disconnected facts.
- The recurring *k*-word predict-and-return structure.
- The reinforcement worked example.
- The teaching jobs performed by the water jars, candle problem, Linda problem, and Wason task. Repair or qualify them rather than deleting the sequence.
- Language as the public compression of private models.
- Linguistic relativity taught as granularity, not determinism, with the explicit cultural non-deficit boundary.
- IQ as a useful, standardized, lossy compression rather than an essence.
- The practical AI verification lesson.
- The fluid-intelligence rule-finding lab.
- The anti-reification ethical argument in the group-differences discussion.

## J. Recommended action sequence

1. Make the four author decisions: length target, dual-process framing, depth of acquisition debate, and narrow scope of group-differences revision.
2. Correct the high-risk science in Section 2, the acquisition passage, and the group-differences paragraph.
3. Remove Figure 9.3 from publication and revise Figures 9.1, 9.5, and 9.9.
4. Reorganize Section 2 and distribute retrieval prompts across all four sections.
5. Reduce objectives, glossary, summary, and repeated caveats to the selected length target.
6. Repair the existing lab's explanation-to-transfer gating and integrate it near fluid intelligence.
7. Normalize Connections, Further Reading, References, captions, and figure metadata.
8. Regenerate HTML and complete static plus visual QA.

## K. Author decisions needed

1. **Length:** Is Chapter 9 intentionally allowed to exceed the standard range as a capstone, or should it return toward 5,000 words? If it is cut, preserve the four-part compression argument and remove secondary catalogs first.
2. **Dual processing:** Keep the memorable System 1/System 2 labels with strong caveats, or teach a broader fast/deliberate processing framework?
3. **Language acquisition:** How much contemporary Universal Grammar and statistical-learning debate belongs in student prose rather than Further Reading or instructor material?
4. **Group comparisons:** Approve a narrow evidence calibration to the genetics and stereotype-threat sentences while retaining the paragraph's structural and anti-reification argument.

## Appendix: audit inventory and limitations

Materials inspected included the chapter source and provenance, generated HTML, all 10 Chapter 9 images, the Chapter 9 lab, chapter and HTML specifications, voice brief, figure style guide, lab design specification, visual inventory, theoretical spine, concept lineage entries, current handoff, and relevant project history.

Repository state was not cleaned or altered. Unrelated pre-existing changes in `HANDOFF.md` and Chapter 8 files were left untouched.

This was a diagnostic audit, not an edit pass. The report identifies root causes and routes fixes to source prose, figures, lab behavior, metadata, or generation. The only incomplete validation was live rendered-page inspection: local-file navigation was blocked by the in-app browser's security policy. Static inspection did not reveal missing assets or structural breakage, but it cannot substitute fully for desktop and mobile visual QA.
