# Chapter 5 (Consciousness) — Reconstruction Plan and Literature Strategy — 2026-07-21

## Purpose and status

This is a **planning/handoff audit**, not an executed edit. Nothing in `source/chapters/ch05-consciousness.md` has been changed by this record. It supersedes line-editing as the working strategy for Chapter 5: the chapter needs **argument reconstruction**, not further sentence-level correction. Read this together with `pipeline/audits/ch05-line-edit-html-deferral-2026-07-21.md` (which still governs the source→HTML sequence and the obsolete-HTML caution).

The instructor (Jon) has reviewed the line-edit packet `line-edit-packets/Chapter_5_Consciousness_Line_Edit.docx` and reached a decisive conclusion: **stop line-editing the existing sequence and rebuild the source around a single conceptual spine.** This document records that decision, the target architecture, the literature that can support it, and the resolution of the nine open Word comments.

HTML work remains deferred. `docs/chapters/05-consciousness.html` is still the obsolete combined Consciousness+Sleep page and must not be used as an editorial source or manually patched. Do not begin the builder/HTML step until the reconstructed Markdown is approved.

## Diagnosis (grounded against the current source)

The chapter is not failing on accuracy. It is failing because successive accuracy corrections dismantled the original argument without building a replacement. Its dominant rhetorical action has become refutation — telling students what each idea is *not* — rather than teaching a positive model.

Measured against the current source (`source/chapters/ch05-consciousness.md`, 6,061 words total):

- **67 standalone "not" in 4,301 words of body prose** (through the end of the Closing, before Review Questions) — roughly one negation every 64 words; 75 in the full negation family (not/cannot/never/neither/nor/contractions).
- The body serially denies: nervous systems are not consciousness; attention is not consciousness; predictive processing is not consciousness; global access is not phenomenal experience; drugs are not clean lesions; dopamine is not one computation; REBUS is not settled; functional explanations do not solve the hard problem. Each qualification is individually defensible. Collectively they leave students with excellent epistemic caution and **no compact positive model**.
- This conflicts with the book's strongest voice pattern: organize each section around a problem, build one hard idea at a time, and land paragraphs on a clear claim.

**Structural problem — the chapter is several chapters.** After the (excellent) blindsight opener, the current sequence runs: nervous-system cost / sea squirts → octopus distributed control → dopamine–serotonin evolutionary history → six coequal distinctions → global workspace + IIT → attention/automaticity → predictive processing → Charles Bonnet syndrome → language-model grounding → psychoactive drugs → alcohol blackout → dopamine reward-prediction error (two figures) → psychedelics → stimulant/cannabis/opioid survey → Chalmers's hard problem. Almost every item is individually interesting; together they do not form a cumulative argument. The title ("The Brain's Model of the World") promises constructed conscious experience, but large portions concern nervous-system evolution, pharmacology, learning, and philosophy.

## Conceptual spine (the fix)

Reorganize the whole chapter around **three questions**, presented as a *dashboard*, not a dimmer switch:

- **State** — Is the organism capable of having experiences right now? (awake / asleep / anesthetized / minimally conscious)
- **Content** — What is being experienced right now? (a face, a tone, pain, an image)
- **Access** — What information is available for report, memory, reasoning, and flexible control?

Then position the mechanisms correctly, as things that *act on* consciousness rather than additional *kinds* of consciousness:

- **Attention** helps select which information gains access.
- **Predictive processing** (inherited from Chapter 4) helps construct perceptual content.
- **Neither attention nor predictive processing is identical to consciousness.**
- **Phenomenal experience** — why any of this feels like something — is the **remaining, unresolved endpoint**, not another item in an opening taxonomy.

This preserves every genuine distinction the chapter currently makes, but stops asking novices to memorize six coequal abstractions before they understand the problem. It also resolves the "are we a philosophy book?" worry (comment #25) structurally: the chapter stops *surveying theories* and starts *teaching a framework*.

### Governing statement (chapter map)

> Consciousness is not one capacity controlled by one dial. An organism's conscious state, the contents it experiences, and its access to information can change separately. Attention helps determine what receives further processing, predictive systems help construct what is experienced, and overlapping neural systems sustain the whole arrangement. These mechanisms explain much about consciousness without yet explaining why experience exists at all.

### The dashboard table (organizing device)

A single comparison table should recur as the chapter's backbone, each case illustrating a different dissociation:

| Case | State | Content / access | What it separates |
|---|---|---|---|
| Blindsight | Awake | Visual guidance without reported seeing | Processing from conscious visual content |
| Inattentional blindness | Awake | Visible input fails to gain access | Looking from attending/reporting |
| Charles Bonnet syndrome | Awake | Vivid visual content | Seeing from believing |
| Alcohol blackout | Awake | Behavior continues | Experience from durable memory |
| Psychedelic state | Awake | Content and self-experience altered | State from kind of experience |
| Anesthesia | Reduced/absent | External responsiveness reduced | Conscious state from ordinary wakefulness |

## Target architecture

Rebuild into four movements plus the honest close:

1. **Processing is not experience.** Open with blindsight. Introduce state/content/access *through the case*, not as a six-item vocabulary list. **Rewrite or remove the familiar-driving paragraph** ("Nobody was home"): as written it implies absent consciousness from absent memory, which is exactly the misconception the later alcohol-blackout section dismantles (experience and memory encoding are separable). The opener currently seeds the error the chapter later corrects.
2. **What reaches conscious access?** Introduce the automatic-camera analogy *here*, with a clear instructional job: routine operations run automatically; conscious access becomes especially useful when behavior needs conflict resolution, correction, or novel coordination; this is a functional framework, not a homunculus. Then use inattentional blindness and the cocktail-party effect (see comment #28/#30 resolution: the term must be *defined in prose*, one sentence on dichotic listening, not merely referenced). Global workspace appears **briefly** after students understand access — one sentence. IIT and the 2025 adversarial collaboration move to a small "field is unsettled" box or Further Reading unless both theories are actually taught.
3. **How conscious content is constructed.** Predictive processing as inherited Chapter 4 machinery, not a fresh theory survey. Charles Bonnet syndrome does one precise job: content can be vivid, belief can reject it, therefore seeing and believing are not identical. The **AI box is expendable** (it elaborates predictive construction and grounding, not consciousness); flash-lag stays in Further Reading.
4. **Consciousness is not one dimmer switch.** Convert the altered-states material into the comparison table above. Keep alcohol blackout (the chapter's strongest single dissociation) and psychedelics (wakefulness intact while content/self-experience change). See relocation list below for what leaves.

Close on Chalmers's hard problem as the honest boundary — one tight passage, not the current extended treatment.

## Material to preserve (already strong)

- **Blindsight opener** — exceptional; establishes processing ≠ experience immediately.
- **Automatic-camera analogy** — the right signature analogy; needs a clearer job (movement 2).
- **Inattentional blindness** — concrete case of processing without access.
- **Charles Bonnet syndrome** — cleanly separates perceptual content from belief.
- **Alcohol blackout vs. passing out** — the chapter's strongest dissociation.
- **Psychedelics** — useful contrast: wakefulness intact, content/self-experience altered.
- **Hard problem** — belongs at the end as an honest boundary.

## Material to remove or relocate

Reconstruction, not accumulation. Estimated ~1,000–1,500 words freed:

- **Sea squirt** — cut to a brief sidebar at most; remove from the main causal argument about consciousness.
- **Octopus distributed control** — relocate to Chapter 3 (distributed-control example).
- **Dopamine–serotonin evolutionary/monoamine passage** — remove; if it lives anywhere, Chapter 3.
- **Dopamine reward-prediction-error section + its two figures (5.7, 5.8)** — relocate to Chapter 7 (Learning), where RPE is developed properly. Too expensive in a consciousness chapter.
- **Stimulant / cannabis / opioid comparison survey** — remove unless a specific dissociation earns its place; the comparison table already carries the teachable contrasts.
- **Six-target vocabulary list as an opening taxonomy** — dissolve into the state/content/access spine; phenomenal experience becomes the endpoint, not list item six.

## Literature strategy (substitution, tiered — verify before writing)

New literature should *glue and round out*, not add breadth. Treat these as candidates ranked by value and risk. **Every citation below is AI-proposed and must be verified against the primary source — with correct claim strength — before it enters the chapter. The chapter's failure mode was overclaim-then-correction; do not reintroduce it in new clothing.**

**Tier 1 — do these; they carry the reconstruction:**

- **Multidimensional "dashboard" replaces "levels of consciousness."** The state/content/access framing is not merely pedagogical; it reflects a serious multidimensional position argued *against* the single-ladder "levels" view. This is what lets the chapter present the dashboard as current science, not as a simplification. *Verify:* the Bayne/Hohwy/Owen-type "Are there levels of consciousness?" argument (Trends in Cognitive Sciences, 2016) and confirm the dimensions as characterized. Highest-value single move.
- **No-report paradigms / "How can science study a private experience?"** The best genuinely-new teaching material. A button-press "I saw it" bundles experience + attention + decision + memory of instruction + motor translation; no-report paradigms (eye movements, pupil, neural signals, predictable perceptual transitions) infer conscious content without an immediate report, though they carry their own assumptions and do not deliver phenomenology directly. Reinforces experience≠report, ties back to Chapter 2 methods, and prepares students for the 2025 theory test. *Verify:* the Tsuchiya/Wilke/Frässle/Lamme "No-report paradigms" review (Trends in Cognitive Sciences, 2015). Low risk, high payoff. Supports a "Do Not Confuse: experience vs. the report of experience" box.

**Tier 2 — real but handle carefully; optional enrichment, only if the word budget survives Tier 1:**

- **A positive "what does conscious processing contribute?" claim.** Gives the camera analogy its job. **Highest overclaim risk in the chapter** — candidate functional contributions (e.g., wider integration across systems, semantic interpretation, holding/representing across space and time) must be stated as *candidate* contributions under functional pluralism, not as a settled definition, and must not resurrect "consciousness is the executive controller." *Verify carefully:* the specific functional claims need a real, correctly-characterized source and the most modest phrasing in the chapter. Do not include if it cannot be sourced at defensible strength.
- **Thalamocortical system as neural glue.** One modest paragraph, framed as "distributed system, not a consciousness switch" — thalamocortical interaction relevant to both sustaining state and shaping content, with mechanisms differing across thalamic cell types. Real but genuinely unsettled; risks reintroducing a brain-region catalog. *Verify:* pin to a real recent review rather than a vague "2024 review." Drop without loss if space is tight.

**Use of the 2025 adversarial collaboration (Cogitate Consortium, GNWT vs. IIT):** keep only as a short "Science in Progress" box near the close — preregistered contrasting predictions, no clean winner, framed as scientific self-correction and a tie-in to Chapter 2. Never require students to learn IIT in detail. *Verify:* exact venue/finding characterization before citing.

**Accumulation caution:** the diagnosis was *too many threads*. Tier 1 alone may be the whole win for a first-year audience. Budget roughly 600–900 new words against the ~1,000–1,500 removed, yielding a shorter, richer chapter. Do not let Tier 2 turn the reconstruction back into a survey.

## Flagship visual and Learning Lab (new)

- **Organizing figure — "Consciousness Is Not One Dial."** One concept-first figure showing state / content / access as three questions, followed by a few cases showing different combinations. Gives the chapter's other figures a shared conceptual grammar (currently the visuals are individually oriented and do not build one cumulative model — contrary to the figure guide's one-hard-idea, concept-first principles).
- **Learning Lab — classification exercise.** Students receive brief cases (blindsight, inattentional blindness, dreaming, alcohol blackout, anesthesia, Charles Bonnet syndrome) and classify what is preserved vs. disrupted across state / content / access / memory / belief. Converts the chapter's distinctions from vocabulary into usable reasoning. Build/scope only after the prose reconstruction is approved.

## Resolution of the nine Word comments

From `line-edit-packets/Chapter_5_Consciousness_Line_Edit.docx` (all authored by Jon):

- **#1, #2 (sea-squirt "loses its brain")** — the current tracked text already avoids the overclaim ("reduces and reorganizes … retaining a smaller ganglion"). Likely stale notes from before that edit. Superseded anyway: sea squirt is cut to a sidebar / removed from the main argument (see relocation list). Resolve and close.
- **#5 (octopus / DA-SA "cool but forced")** — confirmed forced here. Relocate octopus to Chapter 3; remove the monoamine passage. Do not keep in the consciousness argument.
- **#17 ("what are we doing here?" — GWT vs. IIT sentence)** — correct: it name-drops two theories + a citation without explaining either, so it supports nothing. Resolved by architecture: GWT shrinks to one sentence under access; IIT / adversarial collaboration move to a small box or Further Reading.
- **#25 (too much time explaining other theories)** — the governing scope decision. Resolved structurally by the state/content/access spine; the chapter teaches a framework rather than surveying theories.
- **#26 (Section 2 opening — dangling analogy, no topic sentence, "executive controller" non sequitur)** — most detailed comment, still fully applicable. Fixed in movement 2: add a topic sentence naming attention/access/constructed perception before the camera analogy, and re-aim the "not a literal executive controller" caveat at the analogy itself.
- **#28, #30 (cocktail-party effect undefined / hover link)** — add a one-sentence prose definition (dichotic listening) plus a Key Terms entry; the term is promised in Learning Objective 4 but never defined and absent from Key Terms. A hover/cross-link may *supplement* but must not *replace* the prose definition. (#30's hover is an HTML/build feature — defer to the HTML lane.)
- **#29 (whole-book pass to emphasize scannable terms)** — backlog-scale, not a Chapter 5 fix. Record in `PROJECT_BACKLOG.md` as a finalization-pass idea (suggest terms to bold/underline for visual scanning across all chapters).

## What students should retain two weeks later (success test)

> Most brain processing is not conscious. Consciousness is not one thing: state, content, and access can come apart. Attention influences what gains access, while predictive processes help construct what we experience. Blindsight, inattentional blindness, hallucinations, and altered states reveal those separations. Science can explain many of these functions without yet explaining why they feel like anything.

The current chapter does not leave students able to say this paragraph. The reconstruction's job is to make it the natural takeaway.

## Guardrails

- **Reconstruction, not re-hedging.** Success is a positive model plus a handful of clean dissociations — not a lower "not" count achieved by softer denials.
- **Verify every citation and claim strength before it enters the source.** All literature above is AI-proposed. Overclaim is the original disease.
- **HTML lane stays deferred.** Do not touch the builder or `docs/chapters/05-consciousness.html` until the reconstructed source is approved; the obsolete combined page still contains duplicated sleep material.
- **Cross-chapter moves are proposals, not yet executed.** Relocating octopus→Ch.3 and RPE+figures→Ch.7 must be coordinated with those chapters' lanes; Chapter 7's image lane is currently paused. Flag, don't silently move.
- **Working-tree hygiene.** Unrelated local changes exist in several `line-edit-packets/` files and `source/chapters/ch06-sleep.md`. Stage only explicitly authorized Chapter 5 paths. No `git add .`, `git restore .`, or broad cleanup.

## Recommended sequence

1. **Literature verification pass** — confirm each Tier 1/Tier 2 addition and the 2025 collaboration are accurately characterized and citable at defensible strength; discard or downgrade any that are not. Produce a vetted source list.
2. **Reconstruct the source** around state/content/access: rewrite the opener (fix "Nobody was home"), rebuild Section 2's opening, install the dashboard table, integrate verified Tier 1 material, cut/relocate the displaced material, tighten the close.
3. **Update back matter** — Learning Objectives, Review Questions, Key Terms (add cocktail-party effect and any new terms), Further Reading, References, Connections — to match the reconstructed argument.
4. **Scope the flagship figure and classification Learning Lab** after prose approval.
5. **Then** resume the deferred HTML lane per `ch05-line-edit-html-deferral-2026-07-21.md`: add the narrowly scoped Chapter 5 builder config, regenerate the page, and validate parity plus removal of all sleep material.
