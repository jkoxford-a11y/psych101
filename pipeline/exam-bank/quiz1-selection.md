# Unit Quiz 1 — Selected Set (Ch. 1 + Ch. 2)

> Gate 4 output: the 25 items actually pulled from `ch01-exam-bank.md` (28 `keep`) and `ch02-exam-bank.md` (27 `keep`) for the real Unit Quiz 1, per `pipeline/26FS-PSYC101-syllabus.md` (Quiz 1 covers Ch. 1 + Ch. 2). Print-ready export: `quiz1-ch1-ch2.docx` in this same folder.

## Split: 12 from Ch. 1, 13 from Ch. 2

Set from the three converged proxies established when Ch. 2's blueprint was drafted (word count, Learning Objective count, existing book Review Question count all landed near 12/13) — nothing since then contradicted that, so it's used as-is rather than re-derived from the now-similar-sized pools (28 vs. 27), which reflect oversampling target, not content weight.

## Cross-chapter duplicate caught at selection time

Ch. 1's `INT.1`/`INT.2` and Ch. 2's `I.1`/`I.2` test the **same two fact-pairs** (confirmation bias ↔ double-blind procedure; replication crisis ↔ significance-testing's built-in false-positive rate), just asked from opposite directions — invisible to either pool built independently, only visible once both are on the table together. Resolution: Ch. 2 carries `I.1` and `I.2`; Ch. 1 contributes only its unique `INT.3` (operational-definition link, no Ch. 2-side counterpart). Ch. 1's `INT.1`/`INT.2` and the two AI Connection items (`AI.1`, `AI.2`, already flagged lower-priority) stay in the pool, unused this round.

## Selected items

**From Ch. 1 (12):** 1.2, 2.3, 2.4, 2.6, 3.1, 3.4, 4.1, 4.3, 5.2, 6.3, 6.5, INT.3 — full coverage of all 6 numbered LOs, favoring the audit's own "requires distinction-making, not recognition" items (2.3, 3.1, 3.4, 4.1, 4.3, 6.3 were flagged as the strongest by GPT's Gate 3 pass) where a choice had to be made within an LO.

**From Ch. 2 (13):** 1.1, 2.2, 2.4, 3.1, 3.3, 4.1, 5.3, 6.2, 6.3, 7.2, E.1, I.1, I.2 — full coverage of all 7 numbered LOs plus §4 (ethics/bias controls), favoring application items (5.3 integrates LO4+LO5; 7.2 keeps the AI-literacy thread alive even without Ch. 1's AI items) over pure recognition items where a choice had to be made.

## Answer-position randomization

Quiz order follows the blueprint sequence (Ch. 1 LO1→LO6→Integration, then Ch. 2 LO1→LO7→§4→Integration); only each item's own option order was re-randomized for this specific 25-item set, per the Gate 4 protocol in `exam-bank-spec.md` — a clean source pool doesn't guarantee a clean *subset*, since selection isn't itself random. Target sequence (seeded shuffle, verified against `check_answer_position_patterns.py` before any item was re-lettered): `DBDCCBBADBBBAADBCAACDDACC` (7×A, 6×B, 6×C, 6×D — as close to even as 25 items allows). Every item below was re-lettered to match; each item's correct content and all three distractors are otherwise unchanged from its audited pool entry.

---

## Final 25-item set (quiz order, quiz lettering)

**1.** Which of the following is an example of a "mental process," as the chapter defines the term — as opposed to a "behavior"?

a) crying during a sad movie
b) running to catch a bus
c) talking loudly on the phone
d) the appraisal that decided a sound was worth reacting to, before you consciously registered it

*Key: d. Source: Ch. 1, Item 1.2.*

---

**2.** According to the chapter, how did Skinner's radical behaviorism differ from Watson's methodological behaviorism?

a) Skinner rejected the idea that private events like thinking exist at all
b) Skinner treated private events such as thinking and feeling as behavior too, while still grounding explanation in environmental histories, whereas Watson restricted psychology to publicly observable behavior
c) Watson believed private events explain behavior, while Skinner denied any role for the environment
d) Watson's position is called radical behaviorism, while Skinner's is called methodological behaviorism

*Key: b. Source: Ch. 1, Item 2.3.*

---

**3.** The chapter describes the Skinner–Chomsky exchange over language as fundamentally a disagreement about:

a) whether children can learn language at all
b) whether reinforcement plays any role whatsoever in child development
c) which of the two men was a better experimentalist
d) what kind of internal system could generate novel sentences never heard before

*Key: d. Source: Ch. 1, Item 2.4.*

---

**4.** A theory holds that a person's every behavior — whether cooperative or aggressive — is explained as the outcome of an unconscious conflict, with no observation that could ever count against it. This exemplifies the chief scientific weakness the chapter attributes to:

a) structuralism
b) humanistic psychology
c) psychoanalysis
d) cognitive psychology

*Key: c. Source: Ch. 1, Item 2.6.*

---

**5.** A psychologist studying road rage could ask "what past reinforcement history makes this driver respond aggressively to being cut off?" or "why would a mind evolved in ancestral conditions treat being cut off as provocation worth an aggressive response?" These are, respectively, examples of a:

a) a behavioral perspective and a psychodynamic perspective
b) a hypothesis and a theory
c) a proximate explanation and an ultimate explanation
d) a correlational claim and a causal claim

*Key: c. Source: Ch. 1, Item 3.1.*

---

**6.** The chapter's discussion of depression notes that biological, behavioral, cognitive, and sociocultural accounts are all "evidence-informed levels of analysis," while historical psychodynamic accounts are "less strongly supported... than the risk and maintenance processes above." What does this contrast illustrate?

a) That psychodynamic accounts of depression have been completely disproven and are no longer relevant to clinical thought
b) That perspectives are not automatically equal in evidentiary support, even when discussing the same phenomenon
c) That psychodynamic explanations are never useful for any psychological phenomenon
d) That only one correct perspective exists for any given disorder

*Key: b. Source: Ch. 1, Item 3.4.*

---

**7.** A student explains chronic insomnia by listing: a family history of anxiety disorders (biological), catastrophic thoughts about not sleeping (psychological), and a demanding work schedule with irregular hours (social/environmental). According to the chapter, has this student produced a completed causal explanation?

a) Yes, because the biopsychosocial model requires only that one factor from each category be named
b) No, because the model organizes relevant factors to consider but a causal account still must specify which mechanisms operated and how they interacted in this case
c) No, because only biological factors can ever establish genuine cause
d) Yes, because listing three different levels of analysis automatically explains their interaction

*Key: b. Source: Ch. 1, Item 4.1.*

---

**8.** Which of the following would be the clearest example of biopsychosocial reasoning actually falling short of the chapter's standard for a complete explanation?

a) A clinician who names genetic risk, negative thought patterns, and social isolation as contributors, and stops there, treating the list itself as the explanation
b) A clinician who names genetic risk, negative thought patterns, and social isolation as contributors, and also specifies how sleep disruption links the biological and psychological factors together in this particular patient
c) A clinician who investigates further after noticing the three factors don't yet explain the case
d) A clinician who revises the explanation after new evidence about the patient emerges

*Key: a. Source: Ch. 1, Item 4.3.*

---

**9.** The chapter cautions that evolutionary explanations carry a specific risk. What is it?

a) That they can never be supported by any kind of evidence
b) That they always contradict findings from the biological perspective
c) That they are only appropriate for explaining human behavior, never animal behavior
d) That they can generate untestable "just-so" stories about why a trait evolved, unless the proposed function is tested against real evidence

*Key: d. Source: Ch. 1, Item 5.2.*

---

**10.** According to the chapter, what did the replication crisis actually reveal?

a) That psychology should be dismissed as unscientific
b) That systematic weaknesses in research incentives, statistical practices, and publication systems allowed a substantial number of findings not to hold up under replication
c) That every published finding in psychology is false
d) That only fraudulent researchers produced the unreplicated findings

*Key: b. Source: Ch. 1, Item 6.3.*

---

**11.** Which of the following best illustrates a safeguard against hindsight bias specifically, as opposed to confirmation bias?

a) Deliberately seeking out evidence that could disprove your favorite theory
b) Writing down a specific prediction, and the reasoning behind it, before an outcome is known
c) Discounting a study's results because they contradict what you expected
d) Recalling, after an event, that you always suspected that outcome

*Key: b. Source: Ch. 1, Item 6.5.*

---

**12.** Chapter 2 defines an operational definition as a precise, measurable specification of a concept. Which part of this chapter's own definition of psychology already does exactly that kind of work for the term "behavior"?

a) The claim that psychology is a science
b) The specification that behavior means anything "observable and measurable," as opposed to a vaguer everyday sense of the word
c) The claim that mental processes are inferred, not observed directly
d) The historical schools table

*Key: b. Source: Ch. 1, Item INT.3.*

---

**13.** A researcher wants to know whether a new anti-anxiety app reduces anxiety more than no app at all, and wants to be confident the app itself — not something else — caused any change. Which design is most appropriate?

a) a randomized experiment comparing app users to a control group
b) naturalistic observation
c) a case study
d) a survey of app users' self-reported anxiety

*Key: a. Source: Ch. 2, Item 1.1.*

---

**14.** A university finds that students who eat breakfast score higher on morning exams than students who skip it. A campus newsletter concludes breakfast improves exam performance. Which alternative explanation does the newsletter fail to rule out?

a) That students who are more conscientious or better-rested may be both more likely to eat breakfast and to perform well, regardless of the meal itself
b) That eating breakfast is impossible to operationally define
c) That exam scores cannot be measured reliably
d) That the sample size was too small to calculate a correlation coefficient

*Key: a. Source: Ch. 2, Item 2.2.*

---

**15.** A researcher reports *r* = −0.72 between hours spent on social media and self-reported life satisfaction. Which conclusion is best supported by this number alone?

a) Social media use directly reduces life satisfaction, and the relationship is causal because the coefficient is large.
b) Life satisfaction directly reduces social media use.
c) Because the value is negative, no meaningful relationship exists between the two variables.
d) Social media use is strongly, and negatively, associated with life satisfaction in this sample, but the correlation alone does not establish that social media use reduces satisfaction.

*Key: d. Source: Ch. 2, Item 2.4.*

---

**16.** A company builds an employee "leadership potential" test. Employees who retake it a month later score almost identically each time, but interviews with high scorers reveal the test is actually tracking general verbal fluency rather than anything specific to leadership. What is the best assessment?

a) The test is both reliable and valid for measuring leadership potential.
b) The test appears reliable (consistent scores across retakes), but the evidence does not support interpreting those scores specifically as leadership potential.
c) The test is neither reliable nor valid, since it measures the wrong construct.
d) The test cannot be reliable, because it is measuring verbal fluency instead of leadership.

*Key: b. Source: Ch. 2, Item 3.1.*

---

**17.** Why does the chapter argue that weak reliability caps how strong a validity claim can be?

a) Because validity and reliability are the same property under different names.
b) Because reliability is only relevant to physical measurements, not psychological ones.
c) Because too much measurement error leaves too little stable signal to support any interpretation of what the scores mean.
d) Because validity is established before reliability is ever assessed.

*Key: c. Source: Ch. 2, Item 3.3.*

---

**18.** A study recruits a perfectly representative random sample of the U.S. adult population, but then lets participants choose which of two conditions they want to be in. This study has:

a) strong support for external validity, but not for internal validity
b) strong support for both external and internal validity
c) strong support for internal validity, but not for external validity
d) no support for either kind of validity

*Key: a. Source: Ch. 2, Item 4.1.*

---

**19.** A separate researcher studies the noise/reading-comprehension question by comparing scores of students who happened to study in a noisy dorm versus a quiet library, without assigning anyone to either location. Compared to a randomized version of the same study, this design:

a) is weaker for causal conclusions, because without random assignment, students who choose quiet study spaces may differ systematically from those who don't
b) is stronger for causal conclusions, because it uses real-world settings
c) is identical in causal strength, because both designs measure the same dependent variable
d) cannot be analyzed statistically at all

*Key: a. Source: Ch. 2, Item 5.3.*

---

**20.** Two studies test the same drug. Study A has 40,000 participants; Study B has 40 participants. Both find the identical small effect size, but only Study A reaches statistical significance. The best explanation is:

a) Study A's effect is more real than Study B's, because it was significant.
b) Study B's result is a Type II error and should be ignored.
c) Larger samples make it easier to detect the same-sized effect as statistically significant, independent of whether that effect is practically important.
d) The two studies cannot be compared because their p-values are calculated differently.

*Key: c. Source: Ch. 2, Item 6.2.*

---

**21.** A confidence interval for a treatment effect runs from −2 to +9 on the outcome scale. What does this most accurately indicate?

a) The true effect is definitely 3.5, the midpoint of the interval.
b) The effect is definitely positive, since most of the interval is above zero.
c) The study should be discarded because the interval includes zero.
d) The data are compatible with a range of true effects including negative, zero, and positive values, so the direction of the true effect remains genuinely uncertain.

*Key: d. Source: Ch. 2, Item 6.3.*

---

**22.** A student asks an AI chatbot to summarize research on a supplement, and it responds: "Studies show this supplement significantly boosts memory." Which follow-up question best targets the claim's operational vagueness specifically?

a) "Was the sample randomly selected from the general population?"
b) "Did the researchers have a financial conflict of interest?"
c) "Was the study published in a peer-reviewed journal?"
d) "Which specific memory measure was used, and what exactly counts as a meaningful improvement?"

*Key: d. Source: Ch. 2, Item 7.2.*

---

**23.** A pharmaceutical trial gives one group the real drug and another group a pill with no active ingredient, tracking symptom change in each group from baseline. According to the chapter's distinction, everything that changes in the sugar-pill group — including natural recovery over time — is best described as the:

a) placebo response
b) placebo effect
c) double-blind procedure
d) Type I error

*Key: a. Source: Ch. 2, Item E.1.*

---

**24.** Chapter 1 introduced confirmation bias as a barrier to noticing when we're wrong. Which safeguard from this chapter exists specifically to prevent researchers from unconsciously acting on their own expectations in a way that confirms their hypothesis?

a) Random sampling
b) Effect size reporting
c) The double-blind procedure
d) The third-variable problem

*Key: c. Source: Ch. 2, Item I.1.*

---

**25.** Chapter 1 described the replication crisis as evidence that psychological science is self-correcting. Which concept from this chapter explains, statistically, why even a single well-designed, significant study should not be fully trusted until it replicates?

a) Operational definitions are always imprecise.
b) Case studies cannot be replicated.
c) Significance testing permits some false positives by design, so any individual significant result carries some chance of being one.
d) Random assignment guarantees a result is true.

*Key: c. Source: Ch. 2, Item I.2.*
