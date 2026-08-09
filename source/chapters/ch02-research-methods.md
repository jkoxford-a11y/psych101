# Chapter 2: Research Methods and Statistics

> Drafting history & provenance: see `_provenance/ch02-research-methods.md` (and git log).

---

## Misconception Opener

*It is hard not to believe this, at least some of the time: if two things are correlated, one of them must be causing the other.*

News stories about psychology and health lean on this logic constantly: a study finds that people who do X also tend to have outcome Y, and the headline writes itself — X causes Y. Eat more chocolate, live longer. Spend more time on social media, get more depressed. Own more books as a child, score higher on intelligence tests as an adult.

Here is the problem: a correlation tells you two things move together. It cannot tell you which one is causing the other, or whether something else is causing both. Take the books finding. Part of it reflects parental education and income, which shape both the bookshelf and the rest of a child's environment. But books at home still predict adult literacy and numeracy after those are accounted for (Sikora, Evans, & Kelley, 2019) — so the books may be doing real work. The correlation alone cannot separate those stories.

That error is everywhere in how the public — and the media reporting on psychology — reads behavioral science, and it isn't a personal failure of logic. Spotting "when X happens, Y follows" and acting fast is what a nervous system is built to do, and it pays off often enough to be worth having. The cost is that the same shortcut fires just as hard on coincidence, and from the inside the two feel identical. This chapter is the field's answer: machinery for checking a pattern against something other than how sure it feels.

---

## Where This Fits

How do we know when our model of reality is wrong? Not by feeling more certain — certainty comes from the same machinery being checked. Chapter 1 left a problem: common sense about behavior is unreliable, and even systematic science goes wrong for years at a time, as the replication crisis showed. This chapter is the answer to that problem — descriptive methods, correlational designs, experiments, and the statistics that interpret all three. That machinery is what lets psychology tell a good explanation from a comforting one. Nearly every finding in every later chapter rests on the logic developed here.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. **Distinguish** descriptive, correlational, and experimental research designs, and identify which kind of question each one can and cannot answer.
2. **Explain** why correlation does not establish causation, and identify the third-variable problem in a real example.
3. **Distinguish** the consistency of observed scores from the evidence supporting how those scores are interpreted, and apply both questions to a real operational definition.
4. **Distinguish** random sampling from random assignment, and explain how each supports a different part of a study's inference.
5. **Identify** the independent variable, dependent variable, and control condition in a described experiment.
6. **Explain** what a p-value does and does not tell you, and why effect size and confidence intervals add what significance alone cannot (Theme 1: psychological science relies on empirical evidence and adapts as new evidence emerges).
7. **Evaluate** a research claim — including an AI-generated one — for sampling bias, operational vagueness, and overstated certainty.

---

## A Map Before the Details: The Research Cycle

Before the details accumulate, here is the shape of the whole chapter — a cycle: **Observe → Define → Relate → Test → Estimate → Replicate → Revise.**

- Descriptive work observes and generates questions.
- Operational definitions make those questions measurable.
- Correlational work relates variables to each other.
- Causal designs test whether one variable changes another.
- Statistics estimate effect magnitude and uncertainty.
- Replication checks whether a finding survives a new sample.
- Revision turns the result into a better question.

Each method below answers a different kind of question. The rule to commit to memory: a simple correlation cannot establish causation. Randomized experiments give psychology its clearest causal test, because the researcher manipulates the suspected cause and assigns conditions by chance. Other designs reach causal conclusions too, but they need extra structure and stronger assumptions (Shadish, Cook, & Campbell, 2002).

![Figure 2.1 — Circular infographic showing seven recurring stages of psychological research: Observe, Define, Relate, Test, Estimate, Replicate, and Revise, connected by arrows forming a cycle, with a central note that science is iterative rather than a search for final answers.](../images/ch02/ch02_research_process_cycle.png)
*Figure 2.1. The research process is a cycle, not a ladder. Descriptive methods reveal patterns and generate questions; operational definitions make those questions measurable; correlational and causal designs test different claims; effect sizes and confidence intervals quantify magnitude and uncertainty; and replication turns results into better questions. Researchers often move backward, repeat stages, or revise a design as evidence accumulates.*

| Method | Main question it answers | Can it show causation? | Main strength | Main limitation | Common student mistake |
|---|---|---|---|---|---|
| Case study | What happened in this one, unusual case? | Not by itself | Rich detail; can reveal the unanticipated | Cannot show how common something is; no comparison group | Assuming one vivid case proves a general rule |
| Naturalistic observation | What does behavior look like in its normal setting? | Not by itself | High ecological validity | No control over competing explanations | Treating an observed pattern as an explanation |
| Survey | What do people report about their own attitudes or behavior? | Not by itself | Efficient; can reach large samples | Depends on accurate, honest self-report | Assuming self-report is automatically accurate |
| Correlation | Do two variables move together, and how strongly? | Not from the association alone | Can study relationships that cannot be ethically manipulated | Cannot by itself rule out reverse causation or a third variable | Treating association as proof of cause |
| Randomized experiment | Does manipulating X change Y? | Usually, when the design and analysis support it | Manipulation plus random assignment: the clearest causal test | Attrition, contamination, poor measurement, and limited settings can still damage inference | Assuming random assignment guarantees equivalent groups or a representative sample |
| Statistics | What can this sample tell us about the population, and how confident should we be? | — (a tool for analyzing data, not a way of collecting it) | Quantifies uncertainty | Easy to mistake for proof; cannot fix a flawed design | Treating "statistically significant" as "proven" or "important" |
| Replication | Does the finding hold up when someone else tries it? | — (a verification step, not a data-collection method) | Builds genuine confidence in a finding | Costly, time-consuming, and historically under-rewarded | Trusting a single study because it was well-designed |

Keep this table in view as you read. The first five rows are *ways of collecting data* — Observe, Relate, and Test in the cycle above. The last two are *what you do once you have it* — Estimate and Replicate. Students routinely mix the categories and treat "it was statistically significant" as a research method in its own right, which is why significance gets its own section later.

---

## Section 1: Asking Questions Without Touching the System

Field research in animal behavioral ecology runs on a hard constraint: you do not get to manipulate anything. Some questions can only be answered by watching carefully and staying out of the way.

Psychology inherited the same constraint. You cannot assign people to develop a childhood trauma, lose a spouse, or have a manic episode in order to study the effects. For a wide range of questions, the only move is to describe what is already happening, as precisely as possible. That is **descriptive research**, and it comes in three standard forms.

The **case study** examines one individual or small group in depth, usually because the case is rare or extreme — Phineas Gage's personality change after frontal lobe damage (Chapter 1) is the classic example. Case studies deliver rich detail and can turn up phenomena no one anticipated. What they cannot deliver is frequency: one case, no comparison group.

**Naturalistic observation** means watching behavior unfold in its normal setting without interfering. The strength is <span class="logic-emphasis">ecological validity</span>: you are watching the real thing. The weakness is the same as above — a pattern you notice is a pattern you cannot yet explain.

The **survey method** asks large numbers of people to report on their own attitudes, experiences, or behavior. Surveys are efficient and reach huge samples, but they rest on people knowing and honestly reporting their own internal states — a shakier assumption than it sounds. People misremember, round toward what sounds socially acceptable, and sometimes have no introspective access to what is being asked.

Descriptive methods are the gateway to experimental research: they determine what experiment is worth running. A case study reveals a phenomenon no one expected; naturalistic observation shows when and where it occurs; a survey estimates how common it is. When the same pattern turns up across different samples and methods — what researchers call **convergence** — it gets harder to dismiss as an accident. Description frames the question. The rest of this chapter tests the explanation.

Every one of these methods depends on a step that is cheap to skip and expensive to skip badly: the **operational definition** — a precise, measurable specification of what you mean by a concept. "Aggression" becomes a usable variable only once you decide what concrete thing counts as aggression. Until then you cannot collect data, because you do not know what to count.

> **Stop and Retrieve:** Before reading further — what is the key limitation that case studies, naturalistic observation, and surveys all share, even though they differ in method?

### Two More Questions Every Measure Has to Answer

An operational definition gets you a number. Two further questions decide whether the number is any good.

**Reliability** is the consistency of observed scores. Depending on the measure, that means <span class="logic-emphasis">stable</span> across occasions, consistent across items, or similar across trained observers — different measures call for different checks.

**Validity** is whether evidence and theory support the interpretation a researcher wants to put on those scores (American Educational Research Association, American Psychological Association, & National Council on Measurement in Education, 2014). The question is never whether a test is "accurate" in the abstract. It is whether one interpretation is <span class="logic-emphasis">justified</span> for one purpose and one population.

A bathroom scale that reads three pounds heavy every time is perfectly reliable and still tells you the wrong weight. Readings can also land on the right value on average while bouncing around too much to trust for any one person. Too much measurement error leaves too little stable signal to interpret, so weak reliability caps how strong a validity claim can get. Reliability is necessary. It is not sufficient.

The psychology version: a depression questionnaire can hand a student nearly the same score every time and still be tracking sleep loss or fatigue, which have plenty of causes besides depression. Consistent scores are no guarantee you are measuring what you think you are measuring.

![Figure 2.2 — Four-panel target diagram comparing measurement accuracy and precision. The first panel shows darts tightly clustered at the center, labeled accurate on average and high reliability. The second shows darts tightly clustered away from the center, labeled biased on average and high reliability. The third shows darts widely dispersed around the center, labeled accurate on average and low reliability, representing observations too imprecise for dependable individual interpretation. The fourth shows darts scattered away from the center, labeled biased on average and low reliability. A note explains that validity concerns evidence and theory supporting an intended score interpretation and use.](../images/ch02/ch02_reliability_validity_accuracy_precision.png)
*Figure 2.2. Reliability is the consistency of scores; validity is whether evidence supports the interpretation put on them. A measure can be perfectly consistent and systematically wrong. It can also be right on average and too scattered to trust for any one person. Weak reliability caps validity, and consistency alone never establishes it.*

Section 3 puts both questions to work on a real, named measure.

> **Think About It:** Operationalizing is the same move you make every time you ask an AI tool for something useful. "Write me something good" gets you nothing you can check. "Summarize the three main arguments in this article in under 100 words" gets you something you can grade. Saying what you want precisely enough to tell whether you got it — that is the skill, in both places.

---

## Section 2: The Trap of "Together Means Together"

Descriptive methods tell you what is happening. The next question is whether two things happen *together* — which is where this chapter's opening misconception lives.

A **correlation** describes how strongly two variables <span class="logic-emphasis">change together</span>. The **correlation coefficient** (*r*) runs from −1.00 to +1.00. The sign gives direction: positive means the variables move the <span class="logic-emphasis">same</span> way, negative means they move in <span class="logic-emphasis">opposite</span> directions. The magnitude gives tightness. An *r* near zero means little or no *linear* relationship — and because *r* measures only straight-line association, a strong pattern that rises and then falls can land near zero too.

![Figure 2.3 — Five side-by-side scatterplots aligned with a coefficient scale from −1 on the left to +1 on the right. The plots progress from strong negative correlation, to moderate negative, to no linear relationship near zero, to moderate positive, and finally strong positive. Each panel includes an approximate r value and a matching trend line.](../images/ch02/ch02_correlation_direction_strength.svg)
*Figure 2.3. Correlation carries direction and strength. Positive values: the variables rise together. Negative values: one rises as the other falls. Values nearer −1 or +1 mean a tighter linear relationship; values near zero mean almost none. The coefficient summarizes a pattern in the sample — it says nothing about cause.*

Correlational research has a real strength: it can study relationships nobody could ethically create in a lab. No one is going to randomly assign infants to neglectful versus attentive caregiving, so most of what we know about attachment and later relationships comes from correlational work.

And correlational data alone cannot establish what is <span class="logic-emphasis">causing</span> what.

---

#### Do Not Confuse: Correlation vs. Causation

Children's shoe size and reading ability are positively correlated: kids with bigger feet read better. Feet do not improve reading. Both grow with **age**, which is doing the actual causal work. Age is a **third variable** — something correlated with both measures that manufactures the appearance of a direct link. That is the **third-variable problem**.

Any correlation has at least three live explanations: X causes Y, Y causes X, or a third variable drives both. Two of them can be true at once. The association alone cannot tell them apart.

![Figure 2.4 — Diagram showing Age as a third variable with arrows pointing to both Shoe Size and Reading Ability. A dashed line marks the association between shoe size and reading ability as correlated but not necessarily causal, illustrating that both measured variables change with age rather than one directly causing the other.](../images/ch02/ch02_third_variable_age_shoe_size_reading.png)
*Figure 2.4. A third variable can create a misleading association. Older children tend to have both larger feet and stronger reading skills, so shoe size and reading ability are correlated. Age explains why they change together; larger feet do not cause better reading.*

*Diagnostic question:* A study finds that teenagers who play more violent video games report more aggressive behavior. A news article concludes that violent games cause aggression. What is at least one alternative explanation the article is ignoring? *(Reverse causation — already-aggressive teens may be drawn to violent games — or a third variable, such as family conflict or impulsivity, independently increasing both.)*

**Try it yourself:** the [Correlation vs. Causation Classifier](../labs/ch02/correlation-causation.html) lets you examine fictional headlines, reveal the underlying study designs, and judge causal support, reverse causation, and third-variable alternatives separately.

---

Two further problems concern *who* ends up in your sample.

**Random sampling** means every member of the population has an <span class="logic-emphasis">equal</span> chance of being selected. A representative sample buys you one piece of **external validity** — whether a result <span class="logic-emphasis">generalizes</span> beyond the study. Only one piece: a perfect sample still cannot make an artificial lab task realistic.

True random sampling is hard and expensive, which is why psychology has historically studied whoever was willing and nearby. That habit has a name — the **WEIRD** problem. Much of the field's evidence base comes from people who are Western, Educated, Industrialized, Rich, and Democratic: a narrow slice of humanity to build claims about "human" behavior on (Henrich, Heine, & Norenzayan, 2010).

**Volunteer bias** (or **sampling bias**, more broadly) is the systematic gap between the people who agree to participate and the population a researcher wants to talk about. Volunteers differ from non-volunteers in personality, motivation, and circumstance — a pattern documented across decades of methodological research (Rosenthal & Rosnow, 1975) and still shaping how findings should be read (Chance & Rossman, 2026; Mehl, 2026).

> **Think About It:** A large language model's training data has this same problem — it overrepresents recent English-language internet text and the people with the time, access, and inclination to write it, which is a different population than "everything any human has ever known." Sampling bias and training-data bias are the same shape: who ends up in the data decides what the data can support.

> **Stop and Retrieve:** Random sampling supports population representativeness, one part of external validity. Section 3 introduces random *assignment*, which supports a causal inference within the study. Before reading on — what do you think the difference is?

---

## Section 3: Experiments and Causal Claims

Correlational research tells you two things are related. A randomized **experiment** is how psychology concludes that one of them *causes* the other.

An experiment works by deliberately <span class="logic-emphasis">manipulating</span> one variable and <span class="logic-emphasis">measuring</span> its effect on another, while holding everything else as constant as possible.

- The variable the researcher manipulates is the **independent variable (IV)** — the suspected cause.
- The variable the researcher measures is the **dependent variable (DV)** — the suspected effect.
- The **experimental group** receives the focal manipulation or treatment.
- The **control group** provides the comparison — no treatment, a placebo, or an alternative treatment, depending on the question.

What separates a randomized experiment from a correlational study is **random assignment**: participants land in conditions by <span class="logic-emphasis">chance</span>, never by a characteristic of their own. Chance differences between the groups still happen, especially in small samples, but <span class="logic-emphasis">systematic</span> preexisting differences become unlikely — so an outcome difference can be pinned on the manipulation.

That is **internal validity**: how strongly a study supports the claim that the manipulation, and not something else, produced the difference. Random assignment is one support for it, not the whole thing. It does nothing about uneven dropout, sloppy measurement, or a biased analysis.

Randomization is also not the only causal tool. Natural experiments, strong quasi-experiments, and some longitudinal designs reach causal conclusions too — they simply have to argue harder for them, ruling out by hand the alternatives a randomized experiment rules out by design (Shadish et al., 2002).

Two words, both "random," two different jobs. Random *sampling* (Section 2) decides <span class="logic-emphasis">who gets into the study</span> and supports representativeness. Random *assignment* (here) decides <span class="logic-emphasis">how the people already in it get divided</span> and supports the causal claim. A study can have either one without the other.

![Figure 2.5 — A flow diagram shows a population leading through random sampling to a study sample, then through random assignment to an experimental group and a control group. Labels distinguish who enters the study from who enters each condition.](../images/ch02/fig2-5-random-sampling-vs-assignment.svg)
*Figure 2.5. Random sampling decides who gets into the study, which supports generalizing to the population. Random assignment decides who goes into which condition, which supports the causal claim inside the study.*

**Worked example: the hot sauce paradigm.** McGregor and colleagues (1998) built the hot sauce allocation task for terror-management research: does reminding people of their own mortality make them more aggressive toward someone who attacks their worldview? Participants who wrote about their own death, then met someone who criticized their politics, gave that person more hot sauce than participants who had written about something neutral. Lieberman and colleagues (1999) then formalized the task as a general laboratory measure of aggression, separate from the question that produced it.

It solves a real problem. Aggression is not directly observable, and you cannot ethically let participants hurt each other. So the operational definition becomes this: how much hot sauce you give someone who has said they hate spicy food and will have to eat whatever you hand them.

Map the design onto it. The **IV** is the manipulation that varies between groups — a mortality reminder versus a neutral prompt. The **DV** is the amount of hot sauce allocated. The **control group** gets the neutral prompt. **Random assignment** makes it unlikely the mortality-reminder group was simply more aggressive to begin with.

Now put Section 1's two questions to it.

*Reliable enough for this use?* Test–retest is the wrong check here: run the procedure twice and participants work out what it is about. What researchers need instead is consistency across comparable trials, raters, or versions of the task.

*What interpretation does the evidence support?* Handing hot sauce to someone who hates spicy food plausibly measures willingness to cause discomfort. It might also measure indifference to wasting a condiment, or a taste for breaking a norm — transgressive without being aggressive the way a punch or an insult is (Ritter & Eslea, 2005). Every psychological measure lives with some version of that ambiguity, which is why validity evidence attaches to a specific interpretation rather than to the measure itself.

![Figure 2.6 — Flowchart from sample of participants, through random assignment, branching into experimental group (IV: mortality-reminder prompt) and control group (neutral prompt), both measured on the same DV: hot sauce allocated.](../images/ch02/fig_experiment_flowchart.svg)
*Figure 2.6. The logic of a randomized experiment, mapped onto the hot sauce paradigm. Participants enter conditions by chance; the researcher manipulates the prompt and measures hot sauce allocation in both groups. Randomization strengthens the causal comparison but does not substitute for sound measurement, implementation, or analysis.*

> **Stop and Retrieve:** A researcher wants to know whether sleep deprivation increases hot sauce allocation. Participants are randomly assigned to either a full night's sleep or a sleep-restricted night, then complete the hot sauce task the next day. Identify the IV, the DV, and which alternative explanation random assignment makes less plausible in this design.

---

## Section 4: Bias Controls and Research Ethics

Random assignment handles preexisting differences between groups. Two other sources of bias survive it.

A **placebo** is an inactive treatment or simulated procedure used as a comparison condition. The **placebo effect** is the change that comes from the treatment ritual itself, measured against an appropriate control. Expectation, conditioning, and the patient–clinician relationship all feed it; there is no one mechanism behind the label.

An influential 1955 paper claimed roughly a third of patients improve on placebo alone (Beecher, 1955). Later, more rigorous reviews compared placebo against *no treatment* and found little to no average effect on objective outcomes, with modest and inconsistent effects on what patients report (Hróbjartsson & Gøtzsche, 2001, 2010). That contrast is this chapter's argument in miniature: an influential finding and a finding that held up are different things.

Wechsler and colleagues (2011) randomly assigned asthma patients to active medication, a placebo inhaler, sham acupuncture, or no intervention. Only the active medication improved <span class="logic-emphasis">objective lung function</span>. But patients on the medication, the placebo inhaler, and the sham acupuncture all <span class="logic-emphasis">reported feeling better</span> than the no-intervention group.

That gap is the distinction. **Placebo response** is everything that changes in a placebo group; **placebo effect** is only the extra change the ritual buys over no intervention at all. Feeling better is real as an experience and is still not an open airway. This was a small pilot study, so read the pattern, not the percentages.

![Figure 2.7 — Two-panel bar chart based on a four-condition asthma study comparing active albuterol, a placebo inhaler, sham acupuncture, and no intervention. The left panel shows objective improvement in lung function: active albuterol improves FEV1 by about 20 percent, while the other three conditions are each near 7 percent. The right panel shows subjective symptom improvement: about 50 percent report substantial improvement with albuterol, 45 percent with the placebo inhaler, 46 percent with sham acupuncture, and 21 percent with no intervention. A definition strip explains that placebo response includes all change in the placebo group, while placebo effect refers to the difference between placebo and no treatment.](../images/ch02/ch02_placebo_response_vs_effect_asthma.png)
*Figure 2.7. Placebo response and placebo effect are different quantities. In this asthma study, active albuterol substantially improved objectively measured lung function, while the placebo inhaler, sham acupuncture, and no-intervention conditions barely moved it. Subjective reports told a different story — participants often felt better after placebo treatments too. Placebo response is all the change observed in a placebo condition; placebo effect is only the part attributable to the ritual, over and above no intervention. Source: Wechsler et al. (2011), doi:10.1056/NEJMoa1103319.*

The **double-blind procedure** goes a step further: neither the <span class="logic-emphasis">participant</span> nor the <span class="logic-emphasis">researcher</span> in the room knows who is in which group. It blocks participants from performing what they are "supposed" to feel, and researchers from unconsciously treating the groups differently.

That second risk has a horse named after it. Clever Hans appeared to solve arithmetic by tapping a hoof, until investigation showed he was reading unconscious postural cues from his questioner, who was signaling the answer without knowing it (Pfungst, 1965/1911). Researchers do the human version without noticing, which is why blinding exists — a direct guard against the confirmation bias from Chapter 1.

Every experiment on human participants also sits inside a set of ethical obligations that constrain every design choice above, however clean the methods.

| Safeguard | What it protects against |
|---|---|
| Informed consent | Participants agreeing to take part without understanding what the study involves or what risks are reasonably foreseeable |
| IRB review | Researchers being the sole judge of whether their own study is ethically acceptable |
| Belmont principles (respect for persons, beneficence, justice) | Research that treats participants as a means to an end, ignores risk/benefit balance, or unfairly selects vulnerable populations |
| Debriefing | Participants leaving a study deceived, confused, or distressed without explanation |

**Informed consent** means participants get enough information — including foreseeable risks — to decide voluntarily whether to take part. An **Institutional Review Board (IRB)** reviews covered human research so that researchers are not the sole judges of their own study (U.S. Department of Health and Human Services, 2018).

The U.S. Public Health Service study of untreated syphilis at Tuskegee showed why that protection is necessary: researchers deceived Black men, withheld important information and available treatment, and obtained no meaningful informed consent (Centers for Disease Control and Prevention, 2024). In response to abuses including Tuskegee, the **Belmont Report** articulated three principles that still guide research ethics: respect for persons, beneficence, and justice (National Commission for the Protection of Human Subjects, 1979).

The hot sauce paradigm involves mild **deception**: telling participants up front that the study is about aggression would change how they behave. That is why **debriefing** — explaining the real purpose and confirming no one was harmed — is a required part of the procedure once data collection ends.

### Animal Research: Ethics Is Part of the Design

The same logic reaches back to the animal behavioral ecology that opened this chapter. In the United States, covered animal research gets independent **Institutional Animal Care and Use Committee (IACUC)** oversight. A good protocol also works through the **Three Rs**: replacement (use a non-animal method when one can answer the question), reduction (use no more animals than a sound design requires), and refinement (minimize pain, distress, and disruption) (Office of Laboratory Animal Welfare, 2025). This is design, not paperwork bolted on afterward. A study that uses the wrong model, too many animals, or avoidable distress is usually a weaker study scientifically as well as ethically.

> **Think About It:** Imagine you are an IRB member reviewing the hot sauce study design before it could run. What is the actual risk to participants, and why might a reviewer judge it acceptable despite the deception involved?

---

## Section 5: Knowing What to Believe — Statistics, Significance, and Replication

A finished study produces a pile of numbers, and there are two jobs to do with them. **Descriptive statistics** summarize the data set — mean, standard deviation, percentage. They describe <span class="logic-emphasis">this sample</span>. **Inferential statistics** use the sample and a statistical model to estimate what it says about a <span class="logic-emphasis">broader population or process</span>, uncertainty included.

| Quantity | What it tells you | Common mistake |
|---|---|---|
| Center | A typical value, often summarized with a mean or median | Reporting the average as though everyone scored near it |
| Variability | How spread out the observations are, often summarized with a range or standard deviation | Ignoring that two groups can share a mean but differ greatly in spread |
| Effect magnitude | How large a difference or relationship is on a meaningful or standardized scale | Treating statistical significance as evidence that an effect is large |
| Uncertainty | How precisely the effect has been estimated, often summarized with a confidence interval | Treating an interval as a guarantee or using it as a binary truth test |

The most commonly reported inferential result in psychology is **statistical significance**, the *p*-value. A *p*-value measures how incompatible the observed data are with a null model — usually, the assumption that no real effect exists (Wasserstein & Lazar, 2016). That is a precise and narrow claim. It does **not** give you the probability your hypothesis is true, the probability the finding is real, the size of the effect, or whether it will replicate. By convention, *p* < .05 counts as "statistically significant."

![Figure 2.8 — A slide titled "What a p-value does - and does not - tell you." Left panel (blue): one correct interpretation — how unusual the observed data are under the null model, assuming the model is appropriate. Right panel: four incorrect interpretations marked with X: probability the hypothesis is true, effect size, practical importance, and whether the finding will replicate.](../images/ch02/fig_p_value_misconceptions.svg)
*Figure 2.8. A p-value describes how unusual the observed data would be under the null model, assuming the model is appropriate. It does not tell whether the hypothesis is true, how large or important an effect is, or whether a finding will replicate.*

> **Do Not Confuse: Type I vs. Type II Errors:** A **Type I error** is a false positive: concluding that an effect exists when it does not. A **Type II error** is a false negative: missing an effect that does exist (Neyman & Pearson, 1933).

Because every statistical decision rule permits some errors, a significant result still requires replication.

### Beyond Significance: Effect Size and Confidence Intervals

A *p*-value answers one question — is this result unlikely under the null model? — and stops. Two further questions decide whether a finding is worth caring about.

**Effect size** asks <span class="logic-emphasis">how large</span> the result is. **Confidence intervals** show <span class="logic-emphasis">how uncertain</span> the estimate is by giving a range of plausible values for the true effect, given the data and the statistical model used to analyze it.

Significance and size are different things. A trivial effect clears significance if the sample is large enough; a real, meaningful effect misses it in a small or noisy sample. The *p*-value cannot tell you which one you are looking at. Effect size and confidence intervals can.

![Figure 2.9 — Three-row dot-and-whisker diagram using fictional training-program results. The first row, Tiny and precise, shows a small positive dot with a short horizontal interval. The second row, Promising but uncertain, shows a positive dot with a very wide interval extending across the vertical zero line into negative and positive values. The third row, Moderate and precise, shows a larger positive dot with a narrower interval entirely to the positive side of zero. A legend states that the dot is the estimated effect size and the line is the confidence interval.](../images/ch02/ch02_effect_size_confidence_intervals_magnitude_uncertainty.png)
*Figure 2.9. Effect size answers how much; a confidence interval answers how precisely we know it. The dot marks the estimated direction and magnitude; the horizontal line shows the range of values compatible with the data and statistical model. A narrow interval can pin down a very small effect. A wide one can leave negative, zero, and positive effects all on the table.*

One study is never the end of the story, however well designed. **Replication** — running it again with a new sample to see whether the result holds — is what builds confidence in a finding. Chapter 1 introduced the replication crisis: starting around 2011, systematic attempts to reproduce published psychological findings failed for a substantial share of them (Open Science Collaboration, 2015). Nothing in this chapter immunizes a study against that. Replication is the check, and the only one.

> **Think About It:** Has a study result you encountered outside of class — in the news, on social media, in a supplement or product claim — turned out, on a closer look, to rest on a single unreplicated study, a correlation reported as causation, or a sample too narrow to generalize from?

---

## Chapter Summary

Different questions take different methods, and matching the two is the skill this chapter teaches — summarized in the research-cycle table near the start. Descriptive methods say what is happening; they depend on precise operational definitions and cannot identify causes on their own. Once a concept is operationalized, it needs evidence on two fronts: whether scores are consistent, and whether they support the interpretation being put on them. Weak reliability caps validity.

Correlational research quantifies how strongly two variables move together; the association alone cannot sort causal direction from a third variable. Random sampling supports representativeness, one component of external validity, while volunteer bias and the WEIRD-sample problem undermine generalization even in well-analyzed studies.

Randomized experiments give psychology its clearest causal test: manipulate an independent variable, measure a dependent variable, and assign by chance so systematic preexisting differences become unlikely. Other designs reach causal conclusions with more structure and stronger assumptions. Placebo controls and double-blind procedures close off two further sources of bias. Ethics is part of the design — consent and independent review for human research, IACUC oversight and the Three Rs for animal research.

Descriptive statistics summarize the sample; inferential statistics estimate what it says about the population, most visibly through statistical significance — a narrow claim about the data under a null model, not a measure of a finding's size, importance, or truth. Effect size and confidence intervals answer what a p-value cannot: how large, and how precisely known. And because any single study can be wrong, replication is what finally earns a finding scientific trust.

That is how you know when your model of reality is wrong: not by feeling more certain, but by using tools built to catch error that intuition alone cannot — operational definitions, appropriate comparison groups, random assignment, and the statistical machinery this chapter just walked through.

---

## Connections

| Concept from this chapter | Reappears in | Why it matters there |
|---|---|---|
| [Correlation vs. causation / third-variable problem](#section-2-the-trap-of-together-means-together) | Ch. 11 — Social Psychology | Classic correlational findings on media violence and aggression are exactly the kind of result this chapter teaches you to interrogate before accepting a causal story |
| [Hot sauce paradigm / experimental aggression manipulation](#section-3-experiments-and-causal-claims) | Ch. 11 — Social Psychology | The same operationalization problem — how to measure aggression without anyone getting hurt — recurs throughout the social psychology literature on frustration and aggression |
| [Reliability and validity](#two-more-questions-every-measure-has-to-answer) | Ch. 9 — Thinking, Language & Intelligence | IQ test standardization is the clearest applied case of these two questions — a test can be highly reliable while its validity as a measure of "intelligence" remains genuinely contested |
| [Placebo effect](#section-4-bias-controls-and-research-ethics) | Ch. 13 — Psychological Disorders & Therapy | Treatment claims require an appropriate comparison; placebo or attention controls can help separate a treatment's specific ingredients from context, ritual, expectation, and change over time |
| [Volunteer bias / WEIRD samples](#section-2-the-trap-of-together-means-together) | Ch. 10 — Lifespan Development | Longitudinal studies lose participants non-randomly over years of follow-up, which can quietly bias conclusions about how people change across the lifespan |
| [Effect size and statistical significance](#beyond-significance-effect-size-and-confidence-intervals) | Ch. 7 — Learning | Effect sizes in reinforcement-schedule research, not significance alone, determine which findings about what actually strengthens behavior get taken seriously |
| [Double-blind procedure / observer-expectancy effects](#section-4-bias-controls-and-research-ethics) | Ch. 1 — History & Approaches | This method exists specifically to guard against the confirmation bias discussed in Chapter 1 — Clever Hans is confirmation bias with hooves |
| [Replication](#section-5-knowing-what-to-believe-statistics-significance-and-replication) | Ch. 1 — History & Approaches | Chapter 1 introduced the replication crisis as evidence the field is self-correcting; this chapter explains the statistical reason any single study needs that check |

---

## Review Questions

**1.** A researcher finds that people who own more houseplants report lower stress levels. Which is the most accurate interpretation?

a) Owning houseplants reduces stress
b) Lower stress causes people to buy more houseplants
c) The two variables are correlated, but the direction of causation — if any — cannot be determined from this data alone
d) The finding is meaningless because correlations are never useful in psychology

*Answer: c. Why (a) and (b) are tempting: both are possible, but so is a third variable (income, free time, life stability) influencing both — the data alone cannot adjudicate. (d) overcorrects; correlational findings are genuinely useful for relationships that cannot be experimentally manipulated.*

---

**2.** Which method would be most appropriate for studying how children naturally resolve conflicts during unstructured play, preserving authentic behavior?

a) A controlled laboratory experiment
b) A case study of one child
c) Naturalistic observation
d) A double-blind survey

*Answer: c. (a) risks disrupting the behavior under study; (b) cannot establish how children in general behave; (d) is not a real method — "double-blind" applies to experiments, not surveys.*

---

**3.** A researcher develops a new questionnaire to measure "test anxiety." Students who retake the questionnaire a week later get nearly identical scores each time, but follow-up interviews suggest the questionnaire is actually capturing general nervousness rather than anything specific to testing. Which conclusion best fits the evidence?

a) The scores appear consistent across occasions, but the evidence does not support interpreting them specifically as scores of test anxiety.
b) The scores appear inconsistent across occasions, but the evidence supports interpreting them specifically as scores of test anxiety.
c) The scores appear consistent across occasions, and consistency alone supports interpreting them specifically as scores of test anxiety.
d) The scores appear inconsistent across occasions, and the interviews show that they measure neither anxiety nor nervousness.

*Answer: a. Nearly identical scores across retakes are evidence of reliability, or consistency under these conditions. But validity concerns whether evidence and theory support a particular interpretation and use of scores. Here, the interviews do not support the intended interpretation of these scores as specifically measuring test anxiety.*

---

**4.** Random assignment primarily supports which kind of validity, and why?

a) External validity, because it makes the sample more representative of the population
b) Internal validity, because it balances participant characteristics in expectation and makes systematic preexisting differences unlikely
c) External validity, because it guarantees statistical significance
d) Internal validity, because it eliminates the need for a control group

*Answer: b. Why (a) is tempting: representativeness is the job of random *sampling*, a related but distinct concept. Random assignment strengthens causal inference within the study; it does not guarantee perfectly equivalent realized groups or generalizability beyond them.*

---

**5.** A study gives one group a real pill and another a sugar pill, with neither participants nor administering researchers told which is which. This design controls for:

a) random sampling error
b) both participant expectation effects and researcher expectation effects
c) only the placebo effect
d) Type I error specifically

*Answer: b. The placebo control alone addresses participant expectation; the "double" in double-blind specifically adds protection against researcher-side bias — the Clever Hans problem — that a single-blind design would not catch.*

---

**6.** Which statement most accurately describes the purpose of IRB review?

a) IRB review guarantees that no participant will ever experience discomfort
b) Covered human research receives independent ethical review so researchers are not the sole judges of their own study
c) IRB review replaces the need for informed consent
d) Only studies involving deception require IRB review

*Answer: b. Independent review matters because researchers have an interest in carrying out their own studies and should not be the sole judges of whether the risks, consent process, and participant selection are ethically acceptable. IRB review does not guarantee zero discomfort, replace informed consent, or apply only to deception studies.*

---

**7.** A *p*-value of .03 for a study result means:

a) There is a 97% chance the finding is true
b) The effect is large and practically important
c) The observed data are unlikely under the assumption that no real effect exists, given the statistical model used
d) The study has been successfully replicated

*Answer: c. (a) is the single most common misinterpretation of a p-value — it is not a statement about the probability the hypothesis is true.*

---

**8.** A study finds a statistically significant effect (p < .05) in a sample of 50,000 participants, but the effect size is extremely small. The most accurate conclusion is:

a) The finding is definitely important because it reached significance
b) Statistical significance and practical importance are not the same thing — a large enough sample can make even a trivial effect statistically significant
c) The result must be a Type I error
d) Effect size is irrelevant once significance is established

*Answer: b. Why (c) is tempting: it is possible, but not the most accurate conclusion — a tiny, statistically significant effect in a huge sample is exactly the expected, unremarkable outcome of how significance testing interacts with sample size, not necessarily evidence of an error.*

---

**9.** A psychology study recruits participants entirely from introductory psychology students at one university. The most accurate criticism of this sample is that it:

a) is too large to analyze properly
b) lacks random assignment
c) may not generalize well due to volunteer bias and the WEIRD-sample problem
d) cannot produce a correlation coefficient

*Answer: c. Why (b) is tempting: random assignment concerns how participants are divided into groups once recruited, not who gets recruited in the first place — this sample's problem is at the recruitment stage.*

---

**10.** Two studies estimate the same moderate effect. Study A reports a narrow confidence interval entirely above zero; Study B reports a very wide interval that includes negative, zero, and positive effects. What is the best conclusion?

a) Study B proves there is no effect because its interval includes zero
b) Study A's estimate is more precise, while Study B leaves much more uncertainty about the effect's direction and magnitude
c) Both studies are equally informative because their point estimates match
d) Study A's narrow interval guarantees that its design and measurement were unbiased

*Answer: b. Why (a) is tempting: it turns an interval into a binary truth test. Why (d) is tempting: precision addresses random uncertainty, not systematic bias, poor measurement, or a flawed design.*

---

**11.** Why does a single well-designed, statistically significant study not, by itself, establish that a finding will replicate?

a) Significance testing permits some false positives by design, and any individual study carries some chance of being one of them
b) Single studies are always poorly designed
c) Statistical significance has nothing to do with reliability
d) Only correlational studies need replication; experiments do not

*Answer: a. (d) is wrong: experiments are less vulnerable to some confounds than correlational studies, but they are not immune to the basic statistical fact that any threshold permits some false positives — replication matters for both.*

---

## Key Terms

**Case study** — An intensive examination of a single individual or small group, useful for rare or unusually informative cases but unable to establish how common a phenomenon is or to rule out alternative explanations.

**Confidence interval** — A range of plausible values for a true population effect, given the data and the statistical model used to estimate it.

**Control group** — The comparison condition in an experiment against which the experimental condition is evaluated; depending on the design, this may mean no manipulation at all, a placebo, or an alternative treatment.

**Convergence** — When descriptive research turns up a similar pattern across different samples, methods, or contexts, making the phenomenon harder to dismiss as an accident.

**Correlation coefficient** — A statistic, ranging from −1.00 to +1.00, describing the strength and direction of the relationship between two variables.

**Dependent variable (DV)** — The variable measured in an experiment; the presumed effect.

**Double-blind procedure** — A design in which neither participants nor the researchers interacting with them know who is in which condition.

**Effect size** — A quantitative measure of how large a result is, independent of whether it reaches statistical significance.

**External validity** — The degree to which a study's results generalize across relevant people, settings, measures, treatments, and contexts; population representativeness is one component.

**Independent variable (IV)** — The variable deliberately manipulated by the researcher; the presumed cause.

**Informed consent** — The ethical requirement that participants be told, in advance, what a study involves and what risks are reasonably foreseeable.

**Institutional Animal Care and Use Committee (IACUC)** — An independent institutional committee that oversees covered animal research and the humane care and use of animals.

**Institutional Review Board (IRB)** — An independent committee that reviews covered research involving human participants before it begins.

**Internal validity** — The degree to which a study supports the conclusion that the manipulation, rather than another factor, produced the observed effect; random assignment is one major support.

**Naturalistic observation** — Watching and recording behavior as it occurs in its normal environment, without interference.

**Operational definition** — A precise, measurable specification of exactly what a researcher means by a concept.

**Placebo / placebo effect** — A placebo is an inactive treatment or simulated procedure used for comparison; a placebo effect is change attributable to treatment context or ritual relative to an appropriate control, potentially involving expectation, learning, conditioning, interaction, or reporting processes.

**Placebo response** — Everything that changes in a group receiving a placebo, including natural recovery, symptom fluctuation, reporting changes, and any genuine placebo effect; estimating the placebo effect requires an appropriate comparison condition.

**Random assignment** — Assigning enrolled participants to conditions by chance, balancing participant characteristics in expectation and strengthening causal inference.

**Random sampling** — Selecting participants such that every member of the population has an equal chance of being chosen, supporting population representativeness and one component of external validity.

**Reliability** — The consistency or precision of observed scores under specified conditions.

**Replication** — Repeating a study, ideally with a new sample, to determine whether a finding holds up.

**Statistical significance** — A finding's estimated incompatibility with a specified null model, commonly reported as a *p*-value; not a measure of a finding's size, importance, or truth.

**Third-variable problem** — The possibility that an observed correlation is produced by a separate variable influencing both measured variables, rather than either causing the other.

**Three Rs** — The animal-research principles of replacement, reduction, and refinement.

**Type I error** — Concluding an effect exists when it does not; a false positive.

**Type II error** — Concluding an effect does not exist when it does; a false negative.

**Validity** — The extent to which evidence and theory support an intended interpretation and use of observed scores.

**Volunteer bias / sampling bias** — The systematic difference between people who agree to participate in research and the broader population a researcher wants to draw conclusions about.

---

## Further Reading

**Noba Project — Statistical Thinking** (Chance & Rossman, 2026)
https://nobaproject.com/modules/statistical-thinking
Open-access treatment of sampling, distributions, and inferential logic, with more statistical depth than this chapter provides.

**Noba Project — Conducting Psychology Research in the Real World** (Mehl, 2026)
https://nobaproject.com/modules/conducting-psychology-research-in-the-real-world
Covers ecological validity and real-world methodological tradeoffs not fully developed here.

**HHS Office for Human Research Protections — Read the Belmont Report**
https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
The original 1979 document establishing the ethical framework behind modern IRB review; short and readable.

**The American Statistical Association's Statement on p-Values** (Wasserstein & Lazar, 2016)
https://doi.org/10.1080/00031305.2016.1154108
A short, authoritative, and surprisingly readable corrective to the most common misinterpretations of statistical significance — written for exactly this purpose.

**Open Science Collaboration. (2015). Estimating the reproducibility of psychological science.**
*Science, 349*(6251), aac4716.
The replication-crisis paper introduced in Chapter 1; directly relevant to this chapter's discussion of why any single significant result is not the end of the story.

**Hróbjartsson, A., & Gøtzsche, P. C. (2001, 2010). Is the placebo powerless? / Placebo interventions for all clinical conditions.**
*New England Journal of Medicine, 344*(21), 1594–1602; *Cochrane Database of Systematic Reviews*, CD003974.
The systematic reanalysis (and later Cochrane update) that substantially revised the popular understanding of placebo effects — a good case study in this chapter's own lesson about not trusting a single influential finding without replication.

**Sikora, J., Evans, M. D. R., & Kelley, J. (2019). Scholarly culture: How books in adolescence enhance adult literacy, numeracy and technology skills in 31 societies.**
*Social Science Research, 77*, 1–15.
The study behind this chapter's softened claim about childhood books and adult skills — useful for seeing how a real correlational literature handles confounds rather than just asserting "correlation isn't causation" in the abstract.

---

## References

*Full citations for factual claims made in this chapter, for instructors or students who want to verify or go deeper. Distinct from Further Reading above, which is curated for student exploration rather than completeness.*

American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for educational and psychological testing*. American Educational Research Association. https://www.testingstandards.net/

Beecher, H. K. (1955). The powerful placebo. *JAMA, 159*(17), 1602–1606. https://doi.org/10.1001/jama.1955.02960340022006

Chance, B., & Rossman, A. (2026). Statistical thinking. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. https://nobaproject.com/modules/statistical-thinking

Centers for Disease Control and Prevention. (2024, September 4). *About the untreated syphilis study at Tuskegee*. https://www.cdc.gov/tuskegee/about/index.html

Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? *Behavioral and Brain Sciences, 33*(2–3), 61–83. https://doi.org/10.1017/S0140525X0999152X

Hróbjartsson, A., & Gøtzsche, P. C. (2001). Is the placebo powerless? An analysis of clinical trials comparing placebo with no treatment. *New England Journal of Medicine, 344*(21), 1594–1602. https://doi.org/10.1056/NEJM200105243442106

Hróbjartsson, A., & Gøtzsche, P. C. (2010). Placebo interventions for all clinical conditions. *Cochrane Database of Systematic Reviews*, Issue 1, Art. No. CD003974. https://doi.org/10.1002/14651858.CD003974.pub3

Lieberman, J. D., Solomon, S., Greenberg, J., & McGregor, H. A. (1999). A hot new way to measure aggression: Hot sauce allocation. *Aggressive Behavior, 25*(5), 331–348. https://doi.org/10.1002/(SICI)1098-2337(1999)25:5%3C331::AID-AB2%3E3.0.CO;2-1

McGregor, H. A., Lieberman, J. D., Greenberg, J., Solomon, S., Arndt, J., Simon, L., & Pyszczynski, T. (1998). Terror management and aggression: Evidence that mortality salience motivates aggression against worldview-threatening others. *Journal of Personality and Social Psychology, 74*(3), 590–605. https://doi.org/10.1037/0022-3514.74.3.590

Mehl, M. R. (2026). Conducting psychology research in the real world. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. https://nobaproject.com/modules/conducting-psychology-research-in-the-real-world

National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research. (1979). *The Belmont Report: Ethical principles and guidelines for the protection of human subjects of research*. U.S. Department of Health, Education, and Welfare.

Neyman, J., & Pearson, E. S. (1933). On the problem of the most efficient tests of statistical hypotheses. *Philosophical Transactions of the Royal Society A, 231*(694–706), 289–337. https://doi.org/10.1098/rsta.1933.0009

Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716

Office of Laboratory Animal Welfare. (2025). *Alternatives and NAMs*. National Institutes of Health. https://olaw.nih.gov/AlternativesandNAMs

Pfungst, O. (1965). *Clever Hans: The horse of Mr. von Osten* (C. L. Rahn, Trans.; R. Rosenthal, Ed.). Holt, Rinehart and Winston. (Original work published 1911)

Ritter, D., & Eslea, M. (2005). Hot sauce, toy guns, and graffiti: A critical account of current laboratory aggression paradigms. *Aggressive Behavior, 31*(5), 407–419. https://doi.org/10.1002/ab.20066

Rosenthal, R., & Rosnow, R. L. (1975). *The volunteer subject*. Wiley.

Sikora, J., Evans, M. D. R., & Kelley, J. (2019). Scholarly culture: How books in adolescence enhance adult literacy, numeracy and technology skills in 31 societies. *Social Science Research, 77*, 1–15. https://doi.org/10.1016/j.ssresearch.2018.10.003

Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). *Experimental and quasi-experimental designs for generalized causal inference*. Houghton Mifflin.

U.S. Department of Health and Human Services. (2018). *Protection of human subjects, 45 C.F.R. part 46*. https://www.hhs.gov/ohrp/regulations-and-policy/regulations/45-cfr-46/index.html

Wasserstein, R. L., & Lazar, N. A. (2016). The ASA's statement on p-values: Context, process, and purpose. *The American Statistician, 70*(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108

Wechsler, M. E., Kelley, J. M., Boyd, I. O., Dutile, S., Marigowda, G., Kirsch, I., Israel, E., & Kaptchuk, T. J. (2011). Active albuterol or placebo, sham acupuncture, or no intervention in asthma. *New England Journal of Medicine, 365*(2), 119–126. https://doi.org/10.1056/NEJMoa1103319

> **Note on verification:** DOIs above were checked against publisher/Crossref/PubMed records during drafting. The Ritter & Eslea (2005) author order is confirmed via Crossref metadata for the DOI (Ritter listed first, Eslea second). The Noba module citation year (2026) and citation format were rechecked against the modules' current "How to cite" entries on 2026-07-15; Noba modules are living documents. The testing-standards metadata was checked against the joint AERA/APA/NCME standards site; human-research oversight and Tuskegee claims against HHS/OHRP and CDC; and animal-research oversight and the Three Rs against NIH/OLAW. The Sikora et al. (2019) DOI was previously corrected through a direct Crossref title match (10.1016/j.ssresearch.2018.10.003).
