# Chapter 1 Exam Bank — History and Approaches to Psychology

> Governed by `pipeline/exam-bank-spec.md`. Second chapter through the pipeline, after the Ch. 2 pilot. Unpublished — do not link from `docs/` or any built chapter page.

**Status: Gates 1–3 complete. 28 items, all `keep`.**

## Gate 1 — Assessment blueprint

Source: `source/chapters/ch01-history-approaches.md`, 6 numbered Learning Objectives, plus the unnumbered "AI Connection" section (Turing/behaviorism/language-model fluency), which — unlike Ch. 2's unnumbered §4 — is not tested anywhere in the book's own 11 Review Questions, so it is included here as a lower-priority, explicitly optional line rather than a must-cover one.

Following the lesson from the Ch. 2 pilot (build a generously oversampled pool, let Gate 4 selection settle exact per-chapter counts rather than pre-committing a rigid target), this blueprint sizes to roughly the same scale as Ch. 2's 28-item pool rather than trying to hit a precise number now:

| # | Objective (verbatim, cognitive verb bolded) | Items drafted | Likely format |
|---|---|---|---|
| LO1 | **Define** psychology as the scientific study of behavior and mental processes, and describe the breadth of the field beyond common stereotypes | 2 | MC |
| LO2 | **Identify** the major historical schools of thought, the question each was trying to answer, and how later approaches responded to unresolved problems | 6 | MC — richest LO (8-row table); covers Wundt/Titchener, functionalism, Watson vs. Skinner, Skinner–Chomsky, humanistic psychology, and psychoanalysis/falsifiability |
| LO3 | **Describe** the modern theoretical perspectives and distinguish a useful question from an evidence-supported causal explanation | 5 | MC — includes proximate/ultimate application, "perspectives generate candidates, evidence assigns weight," and the phone-checking/depression worked examples |
| LO4 | **Apply** the biopsychosocial model to organize contributors to a behavior, and explain why the model is not a completed causal account | 3 | MC, new scenario (insomnia) — not the book's own depression example |
| LO5 | **Explain** what the evolutionary perspective adds, and where it needs caution | 2 | MC |
| LO6 | **Explain** how psychological science relies on empirical evidence and revises conclusions — hindsight bias, confirmation bias, replication, self-correction | 5 | MC — richest alongside LO2; includes a Do-Not-Confuse-style item distinguishing the hindsight-bias safeguard from confirmation-bias behavior |
| AI Connection (unnumbered, optional) | Turing, behavior-as-evidence-not-mechanism, LLM fluency vs. consciousness | 2 | MC |
| Integration | Connects to Ch. 2, which shares Quiz 1 | 3 | MC — confirmation bias → double-blind, replication crisis → significance-testing rationale, and behavior's "observable and measurable" phrasing as an implicit operational definition |
| **Total** | | **28** | |

**On the Ch. 1/Ch. 2 split:** the syllabus-derived proxies from the Ch. 2 blueprint (word count, LO count, existing book Review Question count) converged on roughly 12/13 out of Unit Quiz 1's 25 questions. Now that both chapters have real audited pools, that split should be set by picking the strongest items from both 28-item pools together at Gate 4, not by holding either chapter to a pre-fixed quota — see `ch02-exam-bank.md`'s own note on this.

**Randomized answer positions, built in from the start.** Unlike the Ch. 2 pilot (which had to be reshuffled after an early hand-cycled draft was caught), this pool's key-position sequence was generated *before* writing any item content: a seeded shuffle of an exactly-balanced 28-item multiset (7 each of a/b/c/d), verified clean against `check_answer_position_patterns.py`'s pattern logic (concentration, runs, marches, mechanical cycles of 2/3/4) before any text was drafted, per the protocol in `exam-bank-spec.md` §Gate 4. Sequence: `CDBBABDBDCCADDACBDABDACBACCA`.

---

## Gate 2 — Candidate items

**Status: all 28 items below are `draft` — self-checked against the Gate 2 rubric while writing, not yet independently audited.** None reuse a scenario, name, or number from the book's own Ch. 1 Review Questions (the definition item, Wundt/Titchener, the dog/behaviorism item, functionalism, the Skinner–Chomsky conclusion item, the depression/biopsychosocial item, hindsight-bias/preregistration, Freud/falsifiability, the sociocultural grief item, the evolutionary-perspective item, or the therapeutic-alliance meta-analysis item) — a separate, unpublished pool per `exam-bank-spec.md` §0a.

### LO1 — Define psychology; breadth beyond stereotypes

**Item 1.1**
A researcher spends her career studying how pilots' attention shifts when cockpit warning lights compete for notice. According to the chapter, this work counts as psychology because it studies:

a) treatment of a specific mental disorder
b) philosophy of mind rather than an empirical question
c) behavior and mental processes, even outside a clinical or therapeutic setting **[KEY]**
d) a specialty within medicine focused on the brain

- **Misconceptions:** (a) mistakes the topic (attention) for clinical treatment, which this scenario never involves; (b) the scenario is empirical/applied, not philosophical; (d) confuses this with a medical specialty — nothing here requires a medical degree.
- **Concept:** applying the broad definition of psychology to a non-clinical example. **Objective:** LO1. **Source:** Section 1, "applied science... how do we design cockpits..." **Difficulty (unvalidated):** Low. **Status:** draft.

---

**Item 1.2**
Which of the following is an example of a "mental process," as the chapter defines the term — as opposed to a "behavior"?

a) crying during a sad movie
b) running to catch a bus
c) talking loudly on the phone
d) the appraisal that decided a sound was worth reacting to, before you consciously registered it **[KEY]**

- **Misconceptions:** (a), (b), (c) are all observable, measurable actions — behaviors, not mental processes; the item tests whether students can pick out the one clearly internal, inferred example.
- **Concept:** distinguishing behavior from mental process by example. **Objective:** LO1. **Source:** Section 1, flinch/appraisal example. **Difficulty:** Low. **Status:** draft.

---

### LO2 — Historical schools of thought

**Item 2.1**
What method did both Wundt's experimental program and Titchener's structuralism rely on to study conscious experience, and what was that method's chief weakness?

a) Controlled animal conditioning; results didn't generalize to humans
b) Trained introspection; reports proved unreliable across different observers **[KEY]**
c) Brain imaging; the technology did not yet exist
d) Large-scale surveys; response rates were too low

- **Misconceptions:** (a) describes behaviorism's method, not Wundt/Titchener's; (c) anachronistic — no such technology existed, and it wasn't what limited introspection; (d) surveys aren't the method described for either school.
- **Concept:** the shared method and shared limitation across Wundt and Titchener. **Objective:** LO2. **Source:** history table, row 1. **Difficulty:** Low–Medium. **Status:** draft.

---

**Item 2.2**
William James's functionalism shifted the central question of early psychology from "what is consciousness made of" to:

a) what unconscious conflicts drive behavior
b) what consciousness is for, and how it helps an organism adapt **[KEY]**
c) how behavior can be explained without reference to any inner state
d) what physical brain structures produce each mental state

- **Misconceptions:** (a) is psychoanalysis's question; (c) is behaviorism's question; (d) is the biological perspective's question — this item tests whether the student can distinguish functionalism's question from its historical neighbors, not just recognize a definition.
- **Concept:** functionalism's defining question, contrasted with its neighbors. **Objective:** LO2. **Source:** history table, row 2. **Difficulty:** Medium. **Status:** draft.

---

**Item 2.3**
According to the chapter, how did Skinner's radical behaviorism differ from Watson's methodological behaviorism?

a) Skinner treated private events such as thinking and feeling as behavior too, while still grounding explanation in environmental histories, whereas Watson restricted psychology to publicly observable behavior **[KEY]**
b) Skinner rejected the idea that private events like thinking exist at all
c) Watson believed private events explain behavior, while Skinner denied any role for the environment
d) Watson's position is called radical behaviorism, while Skinner's is called methodological behaviorism

- **Misconceptions:** (b) is not Skinner's position — he treated private events as real, just still a form of behavior to be explained functionally, not as nonexistent; (c) reverses whose position emphasized what; (d) swaps the two labels — Watson's position is methodological behaviorism, Skinner's is radical behaviorism, not the reverse. *(Distractor (d) revised post-Gate-3: the original — "the two men held identical positions" — directly contradicted the stem's own "how did X differ from Y" framing, making it eliminable without any content knowledge, per the Claude blind-audit flag. This replacement distractor has not itself been through an independent blind pass.)*
- **Concept:** Watson vs. Skinner's distinct positions on private events. **Objective:** LO2. **Source:** "Watson and Skinner Did Not Mean the Same Thing." **Difficulty:** Medium–High. **Status:** draft.

---

**Item 2.4**
The chapter describes the Skinner–Chomsky exchange over language as fundamentally a disagreement about:

a) whether children can learn language at all
b) what kind of internal system could generate novel sentences never heard before **[KEY]**
c) whether reinforcement plays any role whatsoever in child development
d) which of the two men was a better experimentalist

- **Misconceptions:** (a) nobody in the debate denied children learn language; (c) the chapter explicitly says Chomsky's critique "did not show that reinforcement contributes nothing to language" — overstates the claim; (d) not the substance of the disagreement described.
- **Concept:** the mechanism question at the center of the Skinner–Chomsky debate. **Objective:** LO2. **Source:** "Language, Mechanism, and Evolutionary Questions." **Difficulty:** Medium. **Status:** draft.

---

**Item 2.5**
According to the chapter, humanistic psychology emerged primarily as a reaction against which two traditions, and around what shared concern?

a) structuralism and functionalism; both focused too narrowly on a single research method
b) cognitive and biological approaches; both over-relied on brain imaging technology
c) evolutionary and sociocultural approaches; both ignored individual experience
d) behaviorism and psychoanalysis; both were seen as missing human agency, growth, and the experience of being a person **[KEY]**

- **Misconceptions:** (a) structuralism/functionalism aren't the traditions the chapter names as humanistic psychology's target; (b) cognitive/biological approaches are not named as the target, and the technology framing is anachronistic; (c) not the pairing the chapter names.
- **Concept:** humanistic psychology's historical motivation. **Objective:** LO2. **Source:** "Humanistic Psychology and the Therapeutic Alliance." **Difficulty:** Medium. **Status:** draft.

---

**Item 2.6**
A theory holds that a person's every behavior — whether cooperative or aggressive — is explained as the outcome of an unconscious conflict, with no observation that could ever count against it. This exemplifies the chief scientific weakness the chapter attributes to:

a) structuralism
b) psychoanalysis **[KEY]**
c) humanistic psychology
d) cognitive psychology

- **Misconceptions:** (a) structuralism's weakness was unreliable introspective reports, not unfalsifiability; (c) humanistic psychology's weakness was a thinner research base, not unfalsifiable claims; (d) cognitive psychology's weakness was over-relying on a computer model, not unfalsifiability.
- **Concept:** falsifiability as psychoanalysis's specific weakness, distinguished from other schools' distinct weaknesses. **Objective:** LO2. **Source:** history table, "Psychoanalysis" row; "weak falsifiability (Popper, 1959)." **Difficulty:** Medium. **Status:** draft.

---

### LO3 — Modern perspectives; perspective vs. evidence-supported explanation

**Item 3.1**
A psychologist studying road rage could ask "what past reinforcement history makes this driver respond aggressively to being cut off?" or "why would a mind evolved in ancestral conditions treat being cut off as provocation worth an aggressive response?" These are, respectively, examples of a:

a) behavioral perspective and a psychodynamic perspective
b) hypothesis and a theory
c) correlational claim and a causal claim
d) proximate explanation and an ultimate explanation **[KEY]**

- **Misconceptions:** (a) the second question is evolutionary, not psychodynamic; (b) neither question is a hypothesis/theory distinction; (c) neither question is about correlation vs. causation — that's Chapter 2's distinction, not this one.
- **Concept:** applying the proximate/ultimate distinction to a new example. **Objective:** LO3. **Source:** "Biological and evolutionary are not two competing answers... proximate explanation and... ultimate explanation." **Difficulty:** Medium–High. **Status:** draft.

---

**Item 3.2**
According to the chapter, why is it wrong to say a psychological perspective that raises a plausible-sounding question has thereby produced a well-supported explanation?

a) Because only the biological perspective can ever produce a well-supported explanation
b) Because perspectives contradict each other, so at most one can be correct
c) Because a perspective can make a question visible without every answer from that perspective being equally supported by evidence **[KEY]**
d) Because modern psychology has abandoned the use of multiple perspectives

- **Misconceptions:** (a) the chapter never privileges one perspective as the only source of support; (b) the chapter explicitly says answers from different perspectives don't have to contradict each other; (d) the chapter says the opposite — most psychologists draw on several perspectives.
- **Concept:** perspectives generate candidate explanations; evidence assigns weight. **Objective:** LO3. **Source:** "A perspective can make a question visible... Evidence still decides among competing claims." **Difficulty:** Medium. **Status:** draft.

---

**Item 3.3**
A researcher explains a teenager's risky driving by pointing to peer presence in the car and cultural norms that treat risk-taking as a marker of status among young men. This explanation is working primarily from which perspective?

a) Biological
b) Cognitive
c) Sociocultural **[KEY]**
d) Psychodynamic

- **Misconceptions:** (a) no physical mechanism is invoked; (b) no thought, belief, or interpretation is named as the driver — the explanation centers on social context, not cognition; (d) no unconscious conflict is invoked.
- **Concept:** identifying a perspective from a novel scenario. **Objective:** LO3. **Source:** perspectives table. **Difficulty:** Low–Medium. **Status:** draft.

---

**Item 3.4**
The chapter's discussion of depression notes that biological, behavioral, cognitive, and sociocultural accounts are all "evidence-informed levels of analysis," while historical psychodynamic accounts are "less strongly supported... than the risk and maintenance processes above." What does this contrast illustrate?

a) That perspectives are not automatically equal in evidentiary support, even when discussing the same phenomenon **[KEY]**
b) That psychodynamic accounts of depression have been completely disproven and are no longer relevant to clinical thought
c) That psychodynamic explanations are never useful for any psychological phenomenon
d) That only one correct perspective exists for any given disorder

- **Misconceptions:** (b) overstates the chapter's careful language — "less strongly supported... than the risk and maintenance processes above" is not the same claim as "completely disproven," and the chapter explicitly says historical psychodynamic ideas "influenced clinical thought"; (c) overstates the chapter's actual, narrower claim about this specific evidentiary comparison; (d) contradicts the chapter's repeated point that multiple perspectives can be true at once. *(Distractor (b) revised post-Gate-3: the original — "every perspective is always equally well supported" — directly negated the stem's own quoted premise, making it eliminable by re-reading the stem alone, per the Claude blind-audit flag. This replacement distractor has not itself been through an independent blind pass.)*
- **Concept:** applying "evidence assigns weight" to the depression example. **Objective:** LO3. **Source:** "Depression and Unequal Evidence." **Difficulty:** Medium. **Status:** draft.

---

**Item 3.5**
The chapter's phone-checking example gives behavioral, cognitive, sociocultural, and evolutionary answers to "why did you check your phone three times in ten minutes?" What does the chapter say about how these four answers relate to each other?

a) Only one of the four can be correct, and the others must be discarded
b) The evolutionary answer disproves the other three
c) The four answers are different ways of stating the exact same explanation
d) None of the four answers has to contradict the others; each answers a different question about the same behavior **[KEY]**

- **Misconceptions:** (a), (b) both assume the perspectives compete rather than coexist, which the chapter explicitly denies; (c) collapses four genuinely distinct questions into one, when the chapter treats them as different questions entirely.
- **Concept:** multiple perspectives on one behavior can all be true without competing. **Objective:** LO3. **Source:** "One Behavior, Several Questions." **Difficulty:** Medium. **Status:** draft.

---

### LO4 — Apply the biopsychosocial model

**Item 4.1**
A student explains chronic insomnia by listing: a family history of anxiety disorders (biological), catastrophic thoughts about not sleeping (psychological), and a demanding work schedule with irregular hours (social/environmental). According to the chapter, has this student produced a completed causal explanation?

a) Yes, because the biopsychosocial model requires only that one factor from each category be named
b) No, because only biological factors can ever establish genuine cause
c) Yes, because listing three different levels of analysis automatically explains their interaction
d) No, because the model organizes relevant factors to consider but a causal account still must specify which mechanisms operated and how they interacted in this case **[KEY]**

- **Misconceptions:** (a), (c) both mistake the checklist for the mechanism, exactly the error the chapter warns against; (b) mistakes one level of analysis for the only legitimate one, which the model explicitly rejects.
- **Concept:** applying the "organizes, does not finish" distinction to a new case. **Objective:** LO4. **Source:** "The Biopsychosocial Model Organizes; It Does Not Finish the Explanation." **Difficulty:** Medium. **Status:** draft.

---

**Item 4.2**
What is the biopsychosocial model, as the chapter defines it?

a) An organizing framework naming biological, psychological, and social/environmental factors that can interact to produce behavior and mental states **[KEY]**
b) A specific causal mechanism that explains any given behavior once all three factors are identified
c) A diagnostic tool used to classify which disorder a patient has
d) A theory that only applies to psychological disorders, not to everyday behavior

- **Misconceptions:** (b) overstates the model into a completed mechanism, exactly what the chapter denies; (c) confuses the model with diagnosis, a different process entirely; (d) the chapter applies the model to everyday behavior and mental states generally, not only disorders.
- **Concept:** direct definition of the biopsychosocial model. **Objective:** LO4. **Source:** "This is what the biopsychosocial model formalizes..." **Difficulty:** Low. **Status:** draft.

---

**Item 4.3**
Which of the following would be the clearest example of biopsychosocial reasoning actually falling short of the chapter's standard for a complete explanation?

a) A clinician who names genetic risk, negative thought patterns, and social isolation as contributors, and also specifies how sleep disruption links the biological and psychological factors together in this particular patient
b) A clinician who investigates further after noticing the three factors don't yet explain the case
c) A clinician who names genetic risk, negative thought patterns, and social isolation as contributors, and stops there, treating the list itself as the explanation **[KEY]**
d) A clinician who revises the explanation after new evidence about the patient emerges

- **Misconceptions:** (a) is actually a good example — it specifies a mechanism connecting factors, so it doesn't fall short; (b), (d) both describe appropriately continuing the scientific process, not falling short of it.
- **Concept:** distinguishing genuine biopsychosocial mechanism-specification from a bare checklist. **Objective:** LO4. **Source:** same section, applied. **Difficulty:** Medium–High. **Status:** draft.

---

### LO5 — The evolutionary perspective

**Item 5.1**
According to the chapter, what distinguishes the evolutionary perspective's question from a purely comparative question like "what behavioral differences exist between humans and other animals"?

a) The evolutionary perspective only studies animals, never humans
b) The evolutionary perspective specifically asks why a mechanism exists — what adaptive problem it may have helped solve — not simply what differences are observed across species **[KEY]**
c) The evolutionary perspective is identical to the comparative question; the two cannot be distinguished
d) The evolutionary perspective focuses on genetic mutations that cause disorders

- **Misconceptions:** (a) the chapter's evolutionary examples (e.g., checking your phone) are about human psychology; (c) directly contradicted — the chapter explicitly separates the two; (d) confuses evolutionary explanation with a narrower genetics-of-disorder question.
- **Concept:** the evolutionary perspective's defining "why" question, distinguished from a comparative-differences question. **Objective:** LO5. **Source:** "the evolutionary perspective's defining question is why a mechanism exists." **Difficulty:** Medium. **Status:** draft.

---

**Item 5.2**
The chapter cautions that evolutionary explanations carry a specific risk. What is it?

a) That they can never be supported by any kind of evidence
b) That they always contradict findings from the biological perspective
c) That they are only appropriate for explaining human behavior, never animal behavior
d) That they can generate untestable "just-so" stories about why a trait evolved, unless the proposed function is tested against real evidence **[KEY]**

- **Misconceptions:** (a) the chapter explicitly lists how evolutionary hypotheses ARE tested (comparative, developmental, cross-cultural, genetic, ecological evidence); (b) biological and evolutionary perspectives are described as complementary (proximate/ultimate), not contradictory; (c) evolutionary explanations are not restricted this way.
- **Concept:** the "just-so story" risk and how evolutionary hypotheses are actually tested. **Objective:** LO5. **Source:** "Risk of generating untestable 'just-so' stories... Evolutionary hypotheses are tested by deriving predictions..." **Difficulty:** Medium. **Status:** draft.

---

### LO6 — Empirical revision: hindsight bias, confirmation bias, replication, self-correction

**Item 6.1**
After a close election, many people confidently say they "knew" the winner all along, even though they expressed real uncertainty beforehand. This is a real-world example of:

a) hindsight bias **[KEY]**
b) confirmation bias
c) the replication crisis
d) falsifiability

- **Misconceptions:** (b) confirmation bias is about selectively seeking/interpreting evidence that fits existing beliefs, not about retroactively believing you predicted an outcome; (c) the replication crisis concerns whether published findings hold up when repeated; (d) falsifiability concerns whether a claim could be shown wrong, not this memory distortion.
- **Concept:** identifying hindsight bias from a new example. **Objective:** LO6. **Source:** "Intuition Rewrites the Past." **Difficulty:** Low. **Status:** draft.

---

**Item 6.2**
A researcher who believes a particular parenting style causes better-behaved children tends to notice and remember the well-behaved children of parents using that style, while overlooking counterexamples and misremembering ambiguous cases as fitting the theory. This illustrates:

a) hindsight bias
b) confirmation bias **[KEY]**
c) the replication crisis
d) the third-variable problem

- **Misconceptions:** (a) hindsight bias concerns believing you predicted an outcome after learning it, not selectively attending to confirming evidence; (c) unrelated to this scenario, which is about individual cognitive bias, not field-wide reproducibility; (d) the third-variable problem is a Chapter 2 correlational concept, not what's illustrated here.
- **Concept:** identifying confirmation bias's components (selective attention, interpretation, memory) from a new example. **Objective:** LO6. **Source:** "Confirmation Protects Our Theories." **Difficulty:** Medium. **Status:** draft.

---

**Item 6.3**
According to the chapter, what did the replication crisis actually reveal?

a) That psychology should be dismissed as unscientific
b) That every published finding in psychology is false
c) That only fraudulent researchers produced the unreplicated findings
d) That systematic weaknesses in research incentives, statistical practices, and publication systems allowed a substantial number of findings not to hold up under replication **[KEY]**

- **Misconceptions:** (a) the chapter explicitly says the crisis "is not a reason to dismiss psychology"; (b) overstates "a substantial number" into "every finding"; (c) the chapter explicitly notes biased inference doesn't require fraud.
- **Concept:** accurately characterizing what the replication crisis showed (and didn't show). **Objective:** LO6. **Source:** "Self-Correction Takes Institutions." **Difficulty:** Medium. **Status:** draft.

---

**Item 6.4**
The chapter argues that science's self-correction "is possible, not automatic." What does it mean by this?

a) That self-correction depended on deliberate reforms — such as replication and transparency — rather than a guarantee built into simply doing science, or into researchers being unusually honest **[KEY]**
b) That science corrects itself instantly and without effort whenever an error occurs
c) That self-correction can only occur if every researcher involved is exceptionally honest
d) That the replication crisis proves psychology cannot be trusted as a science

- **Misconceptions:** (b) contradicts "not automatic" directly; (c) the chapter explicitly says the opposite — mechanisms work "not because psychologists are exceptionally honest"; (d) is the overcorrection the chapter explicitly rebuts — "The replication crisis is not a reason to dismiss psychology" — an imperfect self-correction process is not the same claim as an untrustworthy field. *(Distractor (d) revised post-Gate-3: the original — "self-correction is impossible in principle" — directly negated the stem's own quoted premise, making it eliminable by re-reading the stem alone, per the Claude blind-audit flag. This replacement distractor has not itself been through an independent blind pass.)*
- **Concept:** the "possible, not automatic" distinction about scientific self-correction. **Objective:** LO6. **Source:** "Self-correction is possible, not automatic — it took deliberate reform..." **Difficulty:** Medium–High. **Status:** draft.

---

**Item 6.5**
Which of the following best illustrates a safeguard against hindsight bias specifically, as opposed to confirmation bias?

a) Deliberately seeking out evidence that could disprove your favorite theory
b) Discounting a study's results because they contradict what you expected
c) Writing down a specific prediction, and the reasoning behind it, before an outcome is known **[KEY]**
d) Recalling, after an event, that you always suspected that outcome

- **Misconceptions:** (a) is a safeguard against confirmation bias, not hindsight bias specifically; (b) is confirmation bias in action, not a safeguard; (d) is hindsight bias occurring, not a safeguard against it — this item tests telling the bias from its safeguard, not just recognizing the bias.
- **Concept:** distinguishing a hindsight-bias safeguard from confirmation-bias behavior and from the bias itself (functions as a Do-Not-Confuse item between the chapter's two named biases). **Objective:** LO6. **Source:** "Intuition Rewrites the Past" + "Confirmation Protects Our Theories" combined. **Difficulty:** Medium–High. **Status:** draft.

---

### AI Connection (unnumbered, optional) — behavior as evidence, not mechanism

*(Untested by the book's own Review Questions — lower priority than the rest of this pool. Include only if Ch. 1's actual share of Quiz 1 has room after the six numbered LOs are covered.)*

**Item AI.1**
A language model produces the fluent sentence "I am conscious." According to the chapter's AI Connection discussion, what does this fluent output establish?

a) That the model is definitely conscious, since it can accurately report its own inner states
b) That the output is observable behavior, which by itself does not establish why the underlying process produced that particular response **[KEY]**
c) That the model is definitely not conscious, since language models cannot produce true statements
d) That developers fully understand why the model produced that particular response

- **Misconceptions:** (a) treats fluent self-report as proof of the very thing in question — exactly the error the chapter warns against; (c) overcorrects into an equally unsupported claim in the opposite direction; (d) the chapter explicitly says the causal explanation for why the model produced a given response remains incomplete, even though architecture and training are known. *(Key wording tightened post-Gate-3: the original said "what internal process — if any — produced it," which GPT's audit flagged as overclaiming — the chapter takes the model's underlying process (architecture, training) as known to exist; only the causal explanation for the specific output is incomplete. Revised wording tracks the chapter's actual claim more precisely.)*
- **Concept:** fluent output as behavior, not proof of mechanism. **Objective:** AI Connection. **Source:** "AI Connection: Behavior Is Evidence, Not Mechanism." **Difficulty:** Medium. **Status:** draft.

---

**Item AI.2**
How does the chapter connect Turing's 1950 proposal to the Skinner–Chomsky debate?

a) Both cases raise the same underlying question: what can observable performance tell us about the internal process that produced it? **[KEY]**
b) Turing's test settled the Skinner–Chomsky debate in Skinner's favor
c) Turing's test and the Skinner–Chomsky debate concern entirely unrelated questions with no meaningful connection
d) Turing proved that machines cannot ever produce convincing conversation

- **Misconceptions:** (b) the chapter explicitly says these were not the same dispute and doesn't claim Turing settled anything; (c) the chapter explicitly draws the connection ("the questions intersect"); (d) reverses Turing's actual proposal.
- **Concept:** the shared behavior-vs-mechanism question linking Turing and Skinner–Chomsky. **Objective:** AI Connection. **Source:** "In 1950, Alan Turing proposed... the questions intersect." **Difficulty:** Medium. **Status:** draft.

---

### Integration — connects to Chapter 2 (shares Quiz 1)

**Item INT.1**
Chapter 2 introduces the double-blind procedure as a guard against a bias discussed in this chapter. Which bias is it, and how does double-blinding address it?

a) Hindsight bias; double-blinding prevents participants from remembering their predictions incorrectly
b) The replication crisis; double-blinding guarantees a study will replicate
c) Confirmation bias; double-blinding prevents researchers from unconsciously treating conditions differently based on what they expect to find **[KEY]**
d) Falsifiability; double-blinding makes a claim falsifiable that otherwise would not be

- **Misconceptions:** (a) hindsight bias concerns retrospective prediction-recall, not what double-blinding addresses; (b) double-blinding is a single-study design feature, not a guarantee of replication; (d) falsifiability is a property of a claim's structure, not something a blinding procedure grants.
- **Concept:** cross-chapter link — Ch. 1 confirmation bias to Ch. 2's double-blind procedure (Clever Hans). **Objective:** Integration. **Source:** Ch. 1 "Confirmation Protects Our Theories"; Ch. 2 "a direct guard against the confirmation bias from Chapter 1." **Difficulty:** Medium. **Status:** draft.

---

**Item INT.2**
This chapter introduces the replication crisis as evidence that psychology is "self-correcting, not automatic." Chapter 2 explains a specific statistical reason why even one well-designed, significant study still needs replication. What is that reason?

a) Every study has a research assistant who might make a data-entry mistake
b) Only case studies need to be replicated; experiments do not
c) Significance testing permits some false positives by design, so any individual significant result carries some chance of being one **[KEY]**
d) Replication is required by federal law for all psychological research

- **Misconceptions:** (a) not a statistical concept, and not what Chapter 2 argues; (b) Chapter 2 explicitly rejects this — both design types need replication; (d) not a claim made in either chapter.
- **Concept:** cross-chapter link — Ch. 1 replication crisis to Ch. 2's statistical rationale (mirrors Ch. 2's own Item I.2, tested from the Ch. 1 side). **Objective:** Integration. **Source:** Ch. 1 "Self-Correction Takes Institutions"; Ch. 2 "Replication" section. **Difficulty:** Medium. **Status:** draft.

---

**Item INT.3**
Chapter 2 defines an operational definition as a precise, measurable specification of a concept. Which part of this chapter's own definition of psychology already does exactly that kind of work for the term "behavior"?

a) The specification that behavior means anything "observable and measurable," as opposed to a vaguer everyday sense of the word **[KEY]**
b) The claim that psychology is a science
c) The claim that mental processes are inferred, not observed directly
d) The historical schools table

- **Misconceptions:** (b) is a claim about the field's method, not an operational definition of a term; (c) is a true statement from the chapter but doesn't operationalize "behavior" itself — it characterizes mental process; (d) is historical content, not a definitional move.
- **Concept:** cross-chapter link — Ch. 1's own definitional precision as an implicit example of Ch. 2's "operational definition" concept. **Objective:** Integration. **Source:** Ch. 1 "'Behavior' means anything... observable and measurable"; Ch. 2 "operational definition" paragraph. **Difficulty:** Medium–High. **Status:** draft.

---

## Gate 3 — independent audit (complete)

Blind audit run via `pipeline/exam-bank/ch01-gate3-audit-packet.md` against three independent reviewers (fresh Claude subagent, GPT, Gemini), none of which had seen this file or each other's responses. Result: **all three picked the identical answer on all 28 items, unanimous with the intended key — zero correctness disagreements**, matching the Ch. 2 pilot's result exactly.

Six content-quality flags across the two non-Gemini reviewers (Gemini flagged nothing), zero overlap between reviewers — a genuinely different failure mode caught by each:

- **Items 2.3, 3.4, 6.4 (Claude)** — each had one distractor that directly negated a premise the stem had just stated or quoted, making it eliminable by re-reading the stem alone rather than by knowing the content. All three: **distractor revised**, key and remaining distractors untouched. The replacement distractors have not themselves been through an independent blind pass — a full re-audit wasn't run since the correct answer and reasoning are unchanged, only one wrong option's content.
- **Item AI.1 (GPT)** — the keyed answer's "if any" phrasing implied uncertainty about whether the model has an internal process at all; the chapter takes the process (architecture, training) as known and only calls the causal explanation for the specific output incomplete. **Wording tightened** to track the chapter precisely; key position and all other options unchanged.
- **Item 6.5 (GPT)** — checked against canonical source (`ch01-history-approaches.md:214`): the audit packet's grounding excerpt omitted the "pre-registration of hypotheses before data collection" sentence, which directly supports the item. **False positive — item stands**, same pattern as Ch. 2's Item 6.1.
- **Item 2.4 (GPT)** — checked against canonical source: "what kind of internal system can generate language" is the chapter's own neutral framing of the debate, not a lean toward either side. **False positive — item stands.**

All 28 items: status `keep`. Answer-position sequence unaffected by the four content edits (no key positions changed) — reconfirmed clean with `check_answer_position_patterns.py` after editing.
