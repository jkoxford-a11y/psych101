# Chapter 2 Exam Bank — Research Methods & Statistics

> Governed by `pipeline/exam-bank-spec.md`. Pilot chapter for the exam-bank pipeline. Unpublished — do not link from `docs/` or any built chapter page.

**Status: Gate 1 (blueprint) drafted, awaiting instructor sign-off. No candidate items written yet — that's Gate 2, blocked on this blueprint being approved, per the spec's rule that drafting starts after the blueprint, not before.**

**Sizing note (revised after reading the syllabus):** Chapter 2 shares **Unit Quiz 1** with Chapter 1 (History & Approaches) — 25 questions total between the two chapters, not 25 for Chapter 2 alone (`pipeline/26FS-PSYC101-syllabus.md`). The table below is rescaled to a provisional Chapter 2 share of **~14–15 of the 25**, leaning slightly toward Chapter 2 on the assumption that its content (statistics, methodology) is denser than Chapter 1's historical survey — but the real split is a joint decision to make once Chapter 1 has its own blueprint, not something this file should fix alone. Treat 14–15 as a working number, not a commitment.

---

## Gate 1 — Assessment blueprint

Source: `source/chapters/ch02-research-methods.md`, 7 numbered Learning Objectives, plus Section 4 (bias controls and research ethics), which is heavily taught and already tested in the book's own Review Questions (items 5 and 6) but is not tied to a numbered objective — see note below.

| # | Objective (verbatim, cognitive verb bolded) | Target keep | Candidate draft (~1.8–2x) | Likely format |
|---|---|---|---|---|
| LO1 | **Distinguish** descriptive, correlational, and experimental designs; identify which kind of question each can/cannot answer | 2 | 4 | MC |
| LO2 | **Explain** why correlation does not establish causation; identify the third-variable problem in a real example | 2 | 4 | MC, at least 1 scenario-based (parallel to the existing houseplants/violent-games items) |
| LO3 | **Distinguish** reliability (consistency of scores) from validity (evidence for an interpretation); apply both to a real operational definition | 2 | 3 | MC, applied to a named measure |
| LO4 | **Distinguish** random sampling from random assignment; explain what each supports | 1 | 2 | MC |
| LO5 | **Identify** the IV, DV, and control condition in a described experiment | 2 | 3 | MC, vignette-based (new scenario, not the hot sauce paradigm — that's already the book's own worked example and shouldn't double as the secure exam's example) |
| LO6 | **Explain** what a *p*-value does/doesn't tell you; why effect size and confidence intervals add what significance alone can't | 2 | 4 | MC — one item on p-value misinterpretation, one on significance-vs-importance or CI width |
| LO7 | **Evaluate** a research claim (including an AI-generated one) for sampling bias, operational vagueness, or overstated certainty | 1 | 2 | MC, single flaw-type item (see note below — split rather than dropped; draw the remaining flaw types from the pool only if the Ch1+Ch2 share ends up larger) |
| §4 (unnumbered) | Ethics and bias controls: informed consent, IRB, Belmont principles, placebo response vs. placebo effect, double-blind procedure, IACUC/Three Rs | 2 | 4 | MC |
| Integration | Item requires connecting concepts across two or more sections/objectives — with Ch. 1 sharing this quiz, at least one integration item should reach into Ch. 1 (replication crisis, confirmation bias/Clever Hans) rather than only cross-referencing within Ch. 2 | 1 | 2 | MC |
| **Total** | | **15** | **28** | |

Every row is MC — the course runs 7 Scantron-scored 25-question exams for 35 students, and grading load rules out short-answer/essay items entirely (recorded in `pipeline/exam-bank-spec.md` §0).

### LO7, split instead of dropped

The chapter's own Review Question #9 ("recruits participants entirely from introductory psychology students at one university... a) too large b) lacks random assignment c) may not generalize well due to volunteer bias and the WEIRD-sample problem d) cannot produce a correlation coefficient") is already exactly this objective in single-flaw MC form — it doesn't try to make the student catch three things in one item, it hands them one flawed claim and asks what's wrong with it. That pattern is directly reusable: one flawed claim per item, one flaw type tested at a time (sampling bias, vague operational definition, or overstated certainty from a single small study — the last one doubles as LO6 practice). At the current 1-keep/2-draft allocation only one flaw type makes the cut; if Ch. 2's actual share of Quiz 1 comes in larger than the provisional 14–15, LO7 is the first place to add the other two flaw-type variants back in rather than inventing new content.

### Remaining open item before Gate 2 starts

**Exact Ch. 1 / Ch. 2 split within Quiz 1's 25 questions.** The syllabus confirms the pairing (`pipeline/26FS-PSYC101-syllabus.md`) but not the ratio — that's an instructor call, not something derivable from the schedule. This file uses a provisional 14–15 for Ch. 2, leaving 10–11 for Ch. 1. Once Ch. 1 has its own Gate-1 blueprint, the two should be checked against each other so neither chapter is over- or under-weighted relative to its actual class time and content density.

### Why §4 gets a blueprint line despite no numbered objective

Section 4 (placebo/placebo effect distinction, double-blind procedure, informed consent, IRB, Belmont principles, IACUC/Three Rs) takes up roughly a fifth of the chapter's body and is already tested twice in the book's own Review Questions (items 5 and 6), but none of the 7 numbered Learning Objectives names it. Leaving it out of the exam blueprint would silently under-test a fifth of the chapter; folding it into an existing objective would misattribute it. Flagging it as its own blueprint row, tagged to "Section 4" rather than a numbered LO, is the honest option — worth confirming you agree rather than me picking silently.

---

## Gate 2 — Candidate items

**Status: all 28 items below are `draft` — self-checked against the Gate 2 rubric during writing, not yet through Gate 3 independent audit. Do not select any into an actual quiz before Gate 3.** None reuse a scenario, name, or number from the book's own Review Questions (Section 4's IRB/double-blind items, the houseplants/video-games correlation items, the hot sauce paradigm, the 50,000-participant item, etc.) — this is meant to be a separate, unpublished pool per `exam-bank-spec.md` §0a.

**Answer-position note:** correct answers are balanced exactly 7×a / 7×b / 7×c / 7×d across this 28-item draft — but balance alone isn't enough. An early draft got the counts even by hand-cycling a,b,c,d,a,b,c,d... across items, which is itself a mechanical pattern a test-savvy student could exploit even though the counts looked fine; the checker's original period-2/3 cycle detector didn't catch it because 4-option MC needs a period-4 check, which didn't exist yet (added to `check_answer_position_patterns.py` alongside this fix). The current sequence (`DCDCCBBDDBBBAADBCAACDDACABCA`) was instead produced by seeding Python's RNG, shuffling an exactly-balanced multiset of 28 key-positions, and verifying the draw against the checker's own pattern logic (severe concentration, same-position runs, monotonic marches, mechanical cycles of 2/3/4) before accepting it — reroll on any warning, never hand-arrange. This is now the standing protocol (`exam-bank-spec.md` §Gate 4): randomize with a real RNG, verify with the checker, reroll on failure. It applies again once items are selected into an actual quiz, since selecting a subset from a clean pool can still reintroduce skew — re-run the checker (and reroll the subset's arrangement if needed) against whatever gets pulled for Quiz 1, not just the full draft pool.

---

### LO1 — Distinguish descriptive, correlational, and experimental designs

**Item 1.1**
A researcher wants to know whether a new anti-anxiety app reduces anxiety more than no app at all, and wants to be confident the app itself — not something else — caused any change. Which design is most appropriate?

a) naturalistic observation
b) a case study
c) a survey of app users' self-reported anxiety
d) a randomized experiment comparing app users to a control group **[KEY]**

- **Misconceptions:** (a) only describes, can't test causation; (b) one person, no comparison group, no causal test; (c) only correlates app use with anxiety and can't rule out that people who already feel less anxious are more likely to adopt the app — the same correlation/causation trap the chapter spends Section 2 on.
- **Concept:** matching a design to a causal question. **Objective:** LO1. **Source:** "A Map Before the Details" table; Section 3 intro. **Difficulty (unvalidated):** Low–Medium. **Status:** draft.

---

**Item 1.2**
Which of the following questions could a case study answer, but a large-sample survey could not?

a) What percentage of college students report feeling test anxiety?
b) Whether sleep deprivation causes lower quiz scores.
c) What unusual and previously undocumented symptom pattern might follow a rare kind of brain injury? **[KEY]**
d) Whether two variables are correlated in the general population.

- **Misconceptions:** (a) is a survey's exact strength (frequency estimation), not a case study's; (b) needs an experiment; (d) needs many cases, not one.
- **Concept:** case study's unique strength (novel-phenomenon discovery) vs. survey's strength (frequency estimation). **Objective:** LO1. **Source:** Section 1, case study and survey paragraphs. **Difficulty:** Medium. **Status:** draft.

---

**Item 1.3**
A researcher watches, without interfering, how strangers behave while waiting together in a crowded elevator, recording proximity and eye contact. This is best classified as:

a) an experiment, because behavior is being measured
b) a correlational study, because two variables are being compared
c) a case study, because only a few elevator rides are observed
d) naturalistic observation, because behavior is recorded in its normal setting without interference **[KEY]**

- **Misconceptions:** (a) nothing was manipulated, so measuring behavior alone doesn't make it an experiment; (b) nothing is being related to anything else — this is pure description; (c) exploits sample-size intuition rather than the chapter's actual definitional criterion (interference vs. a normal setting), since ordinary repeated rides aren't a rare/extreme case.
- **Concept:** naturalistic observation's precise definitional boundary. **Objective:** LO1. **Source:** Section 1, naturalistic observation paragraph. **Difficulty:** Medium. **Status:** draft.

---

**Item 1.4**
Descriptive methods (case study, naturalistic observation, survey) share which limitation, according to the chapter?

a) They cannot generate any research questions.
b) They require random assignment to be valid.
c) None of them can, by itself, establish what is causing an observed pattern. **[KEY]**
d) They can only be used with animal subjects.

- **Misconceptions:** (a) reverses the chapter's actual claim — descriptive methods are explicitly the source of research questions; (b) random assignment is an experimental concept, irrelevant here; (d) the chapter's own examples span human and animal contexts.
- **Concept:** the shared limitation of descriptive methods. **Objective:** LO1. **Source:** Section 1 intro; "Stop and Retrieve" prompt. **Difficulty:** Low. **Status:** draft.

---

### LO2 — Correlation does not establish causation; the third-variable problem

**Item 2.1**
Ice cream sales and drowning deaths rise and fall together across the months of the year. The most accurate interpretation is:

a) Buying ice cream makes people more likely to drown.
b) Drowning makes people crave ice cream afterward.
c) A third variable, such as warm weather increasing both swimming and ice cream purchases, likely explains the association. **[KEY]**
d) Because the correlation is strong, one of the first two explanations must be correct.

- **Misconceptions:** (a), (b) preserve a direct causal story — exactly the trap the chapter warns about; (d) misreads correlation strength as evidence for a specific cause, when strength says nothing about direction or a third variable.
- **Concept:** third-variable problem (seasonal-confound example, distinct from the chapter's own age/shoe-size case). **Objective:** LO2. **Source:** "Do Not Confuse: Correlation vs. Causation." **Difficulty:** Low. **Status:** draft.

---

**Item 2.2**
A university finds that students who eat breakfast score higher on morning exams than students who skip it. A campus newsletter concludes breakfast improves exam performance. Which alternative explanation does the newsletter fail to rule out?

a) That eating breakfast is impossible to operationally define.
b) That students who are more conscientious or better-rested may be both more likely to eat breakfast and to perform well, regardless of the meal itself. **[KEY]**
c) That exam scores cannot be measured reliably.
d) That the sample size was too small to calculate a correlation coefficient.

- **Misconceptions:** (a) operational definition isn't actually the problem in this scenario; (c) reliability isn't what's raised here; (d) sample size affects precision/significance, not the third-variable logic being tested.
- **Concept:** applying the third-variable problem to a new scenario. **Objective:** LO2. **Source:** Section 2, third-variable framework. **Difficulty:** Medium. **Status:** draft.

---

**Item 2.3**
Which of the following is one of the three live explanations the chapter says must always be considered for any observed correlation between X and Y?

a) The sample must have been randomly assigned
b) X causes Y **[KEY]**
c) The correlation coefficient must be above .50
d) The variables must be normally distributed

- **Misconceptions:** (a) random assignment is an experimental feature, not one of the three correlational explanations; (c) confuses coefficient magnitude with the causal question; (d) distribution assumptions are unrelated.
- **Concept:** the three live explanations for any correlation (X→Y, Y→X, third variable). **Objective:** LO2. **Source:** "Any correlation has at least three live explanations..." **Difficulty:** Low. **Status:** draft.

---

**Item 2.4**
A researcher reports *r* = −0.72 between hours spent on social media and self-reported life satisfaction. Which conclusion is best supported by this number alone?

a) Social media use directly reduces life satisfaction, and the relationship is causal because the coefficient is large.
b) Life satisfaction directly reduces social media use.
c) Because the value is negative, no meaningful relationship exists between the two variables.
d) Social media use is strongly, and negatively, associated with life satisfaction in this sample, but the correlation alone does not establish that social media use reduces satisfaction. **[KEY]**

- **Misconceptions:** (a) treats magnitude as proof of cause and direction; (b) arbitrarily picks the reverse causal direction; (c) misreads a negative sign as "no relationship" rather than a strong inverse one.
- **Concept:** interpreting *r*'s sign and magnitude separately from the causal question. **Objective:** LO2. **Source:** Section 2, correlation coefficient definition. **Difficulty:** Medium. **Status:** draft.

---

### LO3 — Reliability vs. validity, applied to a real measure

**Item 3.1**
A company builds an employee "leadership potential" test. Employees who retake it a month later score almost identically each time, but interviews with high scorers reveal the test is actually tracking general verbal fluency rather than anything specific to leadership. What is the best assessment?

a) The test is both reliable and valid for measuring leadership potential.
b) The test is neither reliable nor valid, since it measures the wrong construct.
c) The test cannot be reliable, because it is measuring verbal fluency instead of leadership.
d) The test appears reliable (consistent scores across retakes), but the evidence does not support interpreting those scores specifically as leadership potential. **[KEY]**

- **Misconceptions:** (a) ignores the validity problem entirely; (b) confuses "measuring the wrong thing" with being unreliable, when the scores are in fact consistent; (c) reliability and validity are independent — consistency doesn't depend on what the scores are correctly interpreted as measuring.
- **Concept:** reliability/validity independence, applied to a new named measure (parallel to, not copied from, the chapter's depression-questionnaire example). **Objective:** LO3. **Source:** Section 1, reliability/validity subsection. **Difficulty:** Medium–High. **Status:** draft.

---

**Item 3.2**
A kitchen scale gives a different reading every time the same object is weighed — sometimes 2 pounds high, sometimes 3 pounds low, with no consistent pattern. This scale has a problem with:

a) validity only
b) reliability **[KEY]**
c) neither reliability nor validity, because scales cannot have either property
d) operational definition

- **Misconceptions:** (a) the described problem — inconsistency itself — is reliability, not validity; (c) the chapter's own bathroom-scale example applies these exact concepts to a scale; (d) operational definition concerns how "weight" is specified, not the consistency of readings.
- **Concept:** reliability as consistency (this item flips the chapter's own consistently-biased scale example into an inconsistent one). **Objective:** LO3. **Source:** Figure 2.2; bathroom-scale paragraph. **Difficulty:** Low–Medium. **Status:** draft.

---

**Item 3.3**
Why does the chapter argue that weak reliability caps how strong a validity claim can be?

a) Because validity and reliability are the same property under different names.
b) Because too much measurement error leaves too little stable signal to support any interpretation of what the scores mean. **[KEY]**
c) Because reliability is only relevant to physical measurements, not psychological ones.
d) Because validity is established before reliability is ever assessed.

- **Misconceptions:** (a) contradicts the entire point of treating them as distinct questions; (c) the chapter explicitly extends the logic to psychological questionnaires; (d) no such ordering claim is made — reliability is necessary but not sufficient, not temporally prior.
- **Concept:** why reliability caps validity. **Objective:** LO3. **Source:** "Reliability is necessary. It is not sufficient." **Difficulty:** Medium. **Status:** draft.

---

### LO4 — Random sampling vs. random assignment

**Item 4.1**
A study recruits a perfectly representative random sample of the U.S. adult population, but then lets participants choose which of two conditions they want to be in. This study has:

a) strong support for both external and internal validity
b) strong support for external validity, but not for internal validity **[KEY]**
c) strong support for internal validity, but not for external validity
d) no support for either kind of validity

- **Misconceptions:** (a) self-selection into conditions undermines internal validity despite the representative sample; (c) exactly reversed — sampling (present) supports external validity, assignment (absent) supports internal validity; (d) overcorrects — representative sampling still supports external validity.
- **Concept:** sampling supports external validity, assignment supports internal validity, independently. **Objective:** LO4. **Source:** "A study can have either one without the other"; Figure 2.5. **Difficulty:** Medium. **Status:** draft.

---

**Item 4.2**
Which pair correctly matches each concept to what it decides?

a) Random sampling decides who gets into the study; random assignment decides who goes into which condition **[KEY]**
b) Random sampling decides who goes into which condition; random assignment decides who gets into the study
c) Both random sampling and random assignment decide who gets into the study
d) Both random sampling and random assignment decide who goes into which condition

- **Misconceptions:** (b) exactly reverses the two definitions — the single most common confusion the chapter calls out directly; (c), (d) collapse a distinction the chapter spends a full paragraph establishing.
- **Concept:** direct definitional matching. **Objective:** LO4. **Source:** "Two words, both 'random,' two different jobs." **Difficulty:** Low. **Status:** draft.

---

### LO5 — Identify IV, DV, and control condition

**Item 5.1**
Researchers want to know whether background noise affects reading comprehension. They randomly assign participants to read a passage either in silence or with café noise playing, then give everyone the same comprehension quiz. What is the independent variable?

a) Whether café noise was present during reading **[KEY]**
b) Comprehension quiz score
c) The passage participants read
d) Random assignment itself

- **Misconceptions:** (b) that's the DV, the measured outcome; (c) the passage is held constant, not manipulated; (d) random assignment is the *method* for placing people into conditions, not a variable being tested.
- **Concept:** identifying the IV. **Objective:** LO5. **Source:** Section 3, IV/DV/control-group definitions. **Difficulty:** Low. **Status:** draft.

---

**Item 5.2**
In the same noise-and-reading-comprehension study, participants in the silent condition serve as the:

a) independent variable
b) dependent variable
c) confound
d) control group **[KEY]**

- **Misconceptions:** (a), (b) confuse a group of people with a variable; (c) a confound is an uncontrolled third variable threatening internal validity, not simply a comparison condition.
- **Concept:** identifying the control group. **Objective:** LO5. **Source:** Section 3, control-group definition. **Difficulty:** Low. **Status:** draft.

---

**Item 5.3**
A separate researcher studies the same question by comparing reading comprehension scores of students who happened to study in a noisy dorm versus a quiet library, without assigning anyone to either location. Compared to the randomized noise experiment above, this design:

a) is stronger for causal conclusions, because it uses real-world settings
b) is weaker for causal conclusions, because without random assignment, students who choose quiet study spaces may differ systematically from those who don't **[KEY]**
c) is identical in causal strength, because both designs measure the same dependent variable
d) cannot be analyzed statistically at all

- **Misconceptions:** (a) ecological realism genuinely supports external validity, but that's not what causal (internal-validity) strength depends on; (c) measuring the same DV doesn't equalize internal validity, which depends on assignment method; (d) correlational data can be analyzed statistically, just not interpreted causally the same way.
- **Concept:** integrates random assignment (LO4) with IV/DV identification (LO5) — self-selection as a threat to internal validity. **Objective:** LO5 (cross-references LO4). **Source:** Sections 2–3 combined. **Difficulty:** Medium–High. **Status:** draft.

---

### LO6 — What a *p*-value does/doesn't tell you; effect size and confidence intervals

**Item 6.1**
A study reports *p* = .21 for a treatment effect. The most accurate interpretation is:

a) The treatment definitely has no effect.
b) There is a 21% chance the treatment works.
c) The observed data are not unusual enough, under the assumption of no real effect, to be considered statistically significant at the conventional threshold. **[KEY]**
d) The effect size must be small.

- **Misconceptions:** (a) a non-significant result doesn't prove the null true, only that this data didn't clear the threshold; (b) restates the chapter's single most-flagged p-value misinterpretation; (d) p-values say nothing about effect size.
- **Concept:** correctly interpreting a non-significant *p*-value. **Objective:** LO6. **Source:** Section 5, p-value definition; Figure 2.8. **Difficulty:** Medium. **Status:** draft.

---

**Item 6.2**
Two studies test the same drug. Study A has 40,000 participants; Study B has 40 participants. Both find the identical small effect size, but only Study A reaches statistical significance. The best explanation is:

a) Larger samples make it easier to detect the same-sized effect as statistically significant, independent of whether that effect is practically important. **[KEY]**
b) Study A's effect is more real than Study B's, because it was significant.
c) Study B's result is a Type II error and should be ignored.
d) The two studies cannot be compared because their p-values are calculated differently.

- **Misconceptions:** (b) significance isn't a measure of how "real" an effect is; (c) plausible but overreaches — B's non-significance could reflect low power rather than a definite error; (d) p-values are calculated the same way regardless of sample size, which is exactly why sample size can shift significance without shifting the effect.
- **Concept:** sample size's effect on significance, independent of effect size. **Objective:** LO6. **Source:** "Beyond Significance" section. **Difficulty:** Medium–High. **Status:** draft.

---

**Item 6.3**
A confidence interval for a treatment effect runs from −2 to +9 on the outcome scale. What does this most accurately indicate?

a) The data are compatible with a range of true effects including negative, zero, and positive values, so the direction of the true effect remains genuinely uncertain. **[KEY]**
b) The true effect is definitely 3.5, the midpoint of the interval.
c) The effect is definitely positive, since most of the interval is above zero.
d) The study should be discarded because the interval includes zero.

- **Misconceptions:** (b) treats the midpoint as guaranteed rather than one point among compatible values; (c) overreads "mostly positive" as "definitely positive"; (d) treats interval width as a binary pass/fail test, the same error the chapter's own "Promising but uncertain" example warns against.
- **Concept:** correctly interpreting a wide confidence interval crossing zero. **Objective:** LO6. **Source:** Figure 2.9. **Difficulty:** Medium. **Status:** draft.

---

**Item 6.4**
What is the key difference between what a *p*-value tells you and what an effect size tells you?

a) A p-value tells you how large an effect is; effect size tells you whether it's statistically significant.
b) They measure exactly the same thing, expressed on different scales.
c) A p-value tells you how incompatible the data are with a null model; effect size tells you the magnitude of the result, independent of significance. **[KEY]**
d) A p-value applies only to experiments; effect size applies only to correlational studies.

- **Misconceptions:** (a) exactly swaps the two definitions; (b) collapses a distinction central to the "Beyond Significance" section; (d) nothing in the chapter restricts either concept by design type.
- **Concept:** direct definitional contrast. **Objective:** LO6. **Source:** "Beyond Significance" section opening. **Difficulty:** Low–Medium. **Status:** draft.

---

### LO7 — Evaluate a research claim for operational vagueness

*(Narrowed to one flaw type per the current 1-keep/2-draft allocation — see note above the blueprint table. Sampling bias and overstated certainty are already partly covered via Items 1.2/2.4/6.1–6.2's misconception rationales and can be split back out as standalone LO7 items if Ch. 2's share of Quiz 1 ends up larger than 14–15.)*

**Item 7.1**
An advertisement claims: "Our brain-training app improves cognitive performance." Which criticism most directly targets a weakness in how the claim is stated, independent of any study design issue?

a) The claim was probably not peer-reviewed.
b) The app likely costs money.
c) The claim does not mention a control group.
d) The claim uses an operationally vague term ("cognitive performance") that could mean many different, not-necessarily-related things — until it's specified, there's no way to know what was actually measured or check the claim. **[KEY]**

- **Misconceptions:** (a) plausible-sounding general skepticism, not a wording-level criticism; (b) irrelevant to scientific merit; (c) a real methodological concern, but about study design — the question specifically isolates the wording/definition flaw from that category.
- **Concept:** operational vagueness as a distinct criticism, separated from sampling/design criticisms. **Objective:** LO7. **Source:** Section 1, operational definition paragraph; Section 2's AI "Think About It." **Difficulty:** Medium. **Status:** draft.

---

**Item 7.2**
A student asks an AI chatbot to summarize research on a supplement, and it responds: "Studies show this supplement significantly boosts memory." Which follow-up question best targets the claim's operational vagueness specifically?

a) "Was the sample randomly selected from the general population?"
b) "Did the researchers have a financial conflict of interest?"
c) "Was the study published in a peer-reviewed journal?"
d) "Which specific memory measure was used, and what exactly counts as a meaningful improvement?" **[KEY]**

- **Misconceptions:** (a) targets sampling, a different flaw type; (b) targets a real concern (funding bias) but not operational definition; (c) targets publication venue, unrelated to how precisely the claim's terms are defined.
- **Concept:** operationalizing a vague AI-generated claim. **Objective:** LO7. **Source:** "Operationalizing is the same move you make every time you ask an AI tool for something useful." **Difficulty:** Medium. **Status:** draft.

---

### §4 (unnumbered) — Ethics and bias controls

**Item E.1**
A pharmaceutical trial gives one group the real drug and another group a pill with no active ingredient, tracking symptom change in each group from baseline. According to the chapter's distinction, everything that changes in the sugar-pill group — including natural recovery over time — is best described as the:

a) placebo response **[KEY]**
b) placebo effect
c) double-blind procedure
d) Type I error

- **Misconceptions:** (b) placebo effect is specifically the ritual-attributable change beyond no treatment — narrower than everything observed in the placebo group; (c) a design feature, not an outcome measure; (d) an unrelated statistical concept.
- **Concept:** placebo response vs. placebo effect, the chapter's central Section 4 distinction. **Objective:** §4. **Source:** "That gap is the distinction." **Difficulty:** Medium–High. **Status:** draft.

---

**Item E.2**
Why does a double-blind design add protection beyond a single-blind (participants-only-blinded) design?

a) It eliminates the need for a control group entirely.
b) It guarantees the study will reach statistical significance.
c) It also prevents researchers from unconsciously treating groups differently based on which condition they believe a participant is in. **[KEY]**
d) It replaces the need for informed consent.

- **Misconceptions:** (a) blinding and having a control group are separate design features; (b) blinding addresses bias, not statistical outcomes; (d) informed consent is a separate ethical requirement.
- **Concept:** the specific added value of double- over single-blind (the Clever Hans / researcher-expectancy problem). **Objective:** §4. **Source:** "That second risk has a horse named after it." **Difficulty:** Medium. **Status:** draft.

---

**Item E.3**
Which of the following is the primary purpose of Institutional Review Board (IRB) review, as described in the chapter?

a) To ensure researchers are not the sole judges of whether their own study's risks, consent process, and participant selection are ethically acceptable **[KEY]**
b) To guarantee a study will produce statistically significant results
c) To replace the need for a control group in ethically sensitive research
d) To determine whether a study's hypothesis is correct before it is run

- **Misconceptions:** (b) IRB review concerns ethics, not statistical outcomes; (c) IRB review and control-group design address unrelated problems; (d) IRB evaluates ethical acceptability, not scientific correctness.
- **Concept:** IRB's core function — independent judgment, not risk elimination. **Objective:** §4. **Source:** IRB paragraph, Section 4. **Difficulty:** Low–Medium. **Status:** draft.

---

**Item E.4**
A researcher studying a new surgical technique in laboratory rats designs the study to use the minimum number of animals a sound design requires, and to minimize pain and disruption wherever possible. This reflects which two of the Three Rs?

a) Replacement and Reduction
b) Reduction and Refinement **[KEY]**
c) Replacement and Refinement
d) All three Rs equally

- **Misconceptions:** (a), (c) both wrongly credit Replacement (using a non-animal method instead), which this scenario doesn't describe since animals are still used; (d) overclaims — Replacement is specifically absent here.
- **Concept:** distinguishing the Three Rs from each other in an applied scenario. **Objective:** §4. **Source:** "Three Rs: replacement... reduction... refinement." **Difficulty:** Medium. **Status:** draft.

---

### Integration — connects across sections/chapters

**Item I.1**
Chapter 1 introduced confirmation bias as a barrier to noticing when we're wrong. Which safeguard from this chapter exists specifically to prevent researchers from unconsciously acting on their own expectations in a way that confirms their hypothesis?

a) Random sampling
b) Effect size reporting
c) The double-blind procedure **[KEY]**
d) The third-variable problem

- **Misconceptions:** (a) addresses representativeness, not researcher expectancy; (b) a reporting practice, unrelated to expectancy bias; (d) a correlational-interpretation problem, not a researcher-bias safeguard.
- **Concept:** cross-chapter link — Ch. 1 confirmation bias to Ch. 2 double-blind/Clever Hans. **Objective:** Integration (LO across Ch. 1–2). **Source:** "a direct guard against the confirmation bias from Chapter 1"; Ch. 1 confirmation bias content. **Difficulty:** Medium. **Status:** draft.

---

**Item I.2**
Chapter 1 described the replication crisis as evidence that psychological science is self-correcting. Which concept from this chapter explains, statistically, why even a single well-designed, significant study should not be fully trusted until it replicates?

a) Significance testing permits some false positives by design, so any individual significant result carries some chance of being one. **[KEY]**
b) Operational definitions are always imprecise.
c) Case studies cannot be replicated.
d) Random assignment guarantees a result is true.

- **Misconceptions:** (b) unrelated to the replication logic tested here; (c) case studies aren't the topic of this discussion; (d) random assignment supports internal validity, not the truth or replicability of a result.
- **Concept:** cross-chapter link — Ch. 1 replication crisis to Ch. 2's statistical rationale for why replication matters. **Objective:** Integration. **Source:** "Replication" section; Ch. 1 replication-crisis reference. **Difficulty:** Medium. **Status:** draft.

---

## Gate 3 — independent audit (complete)

Blind audit run via `pipeline/exam-bank/ch02-gate3-audit-packet.md` against three independent reviewers (fresh Claude subagent, GPT, Gemini), none of which had seen this file or each other's responses. Result: **all three picked the identical answer on all 28 items, unanimous with the intended key — zero correctness disagreements.**

Two content-quality flags from Gemini, adjudicated:

- **Item 6.1** ("conventional threshold" phrasing) — checked against canonical source. `source/chapters/ch02-research-methods.md:247` states "By convention, *p* < .05 counts as 'statistically significant.'" directly; the flag traced to the audit packet's grounding excerpt omitting that sentence, not a real item defect. **False positive — item stands, status `keep`.**
- **Item 2.3** — genuine. Its distractors (coefficient magnitude, normal distribution) aren't tied to plausible misconceptions the way Gate 2 requires; it tests recognition of a phrase rather than reasoning. LO2 has three other solid candidates against a target of 2 keeps, so the item is **cut** rather than revised — exactly the case the oversampled pool exists for.

All other 27 items: status updated to `keep`. Full per-item Gate 3 responses (letter + named concept) available in the three reviewers' raw output; no other item drew a flag from any reviewer.

## Status by item

| Item | Status | Note |
|---|---|---|
| 1.1, 1.2, 1.3, 1.4 | keep | |
| 2.1, 2.2, 2.4 | keep | |
| 2.3 | **cut** | recognition-only distractors, flagged by Gemini, adjudicated — see above |
| 3.1, 3.2, 3.3 | keep | |
| 4.1, 4.2 | keep | |
| 5.1, 5.2, 5.3 | keep | |
| 6.1, 6.2, 6.3, 6.4 | keep | 6.1 flag checked and dismissed — see above |
| 7.1, 7.2 | keep | |
| E.1, E.2, E.3, E.4 | keep | |
| I.1, I.2 | keep | |

27 `keep` items against a provisional target of 14–15 — comfortably enough to select from without needing another drafting round for this pilot.

## Next step: Gate 4

Once the actual Quiz 1 split between Ch. 1 and Ch. 2 is set, select the target number of items from the 27 `keep`-status items above (favor the strongest per objective, not just the first drafted), then run `pipeline/check_answer_position_patterns.py` against the *selected subset* — a balanced 27-item pool can still produce a skewed subset depending on which items are chosen.
