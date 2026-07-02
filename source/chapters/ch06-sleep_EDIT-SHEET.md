# Chapter 6 (Sleep) — Prioritized Edit Sheet

> **What this is:** A review artifact for `ch06-sleep.md` (v0.2). No changes have been made to the chapter. Each item is written to be **accepted or rejected individually**. Line numbers refer to `ch06-sleep.md` as of 2026-07-02.
>
> **How to read it:** Tier 1 = factual accuracy + internal consistency (recommend acting on during your line-by-line read). Tier 2 = structural/pedagogical (recommend holding until *after* your read, so we don't churn a chapter you haven't gone through yet). Tier 3 = backlog (figures, labs, citations, housekeeping).
>
> **Confidence** is flagged per factual item, per your standing "never overstate" rule. Citations marked **[verified this session]** have had author/journal/volume/pages confirmed; ones marked **[verify before inserting]** have not.
>
> **Through-line:** Almost every Tier 1 factual item is the *same* defect — a uniformly confident register laid over a steep evidence gradient. The chapter's spine (sleep as maintenance of the Ch. 5 predictive model) is sound and does not need rebuilding. The efficient fix is an evidence-tiering pass on verbs and hedges, not restructuring.

---

## TIER 1 — Factual & consistency (act on during read)

### 1A. Critical factual overstatements

**T1-1 · Glymphatic system "flushes adenosine" — HIGH confidence overreach.**
Locations: line 78 (body), line 260 (Key Term "Adenosine"), line 270 (Key Term "Glymphatic system").
Issue: Xie et al. (2013) demonstrated sleep-driven clearance of metabolites, with β-amyloid as the flagship molecule; adenosine-specific glymphatic clearance is not established. Adenosine's overnight fall is standardly attributed to reduced metabolic production and enzymatic breakdown, not CSF flushing. The chapter builds a causal chain ("relief from sleepiness … is not simply time passing, but the brain having physically cleared" adenosine) that the literature does not support. Also "the only maintenance cycle it has available" overstates — the brain has multiple homeostatic systems.

- Line 78, *current:* "Among the molecules cleared this way is adenosine — the same molecule whose buildup constitutes the 'sleep pressure' of Process S described in Section 1 — which means that the relief from sleepiness following a full night of deep sleep is not simply the result of time passing, but of the brain having physically cleared the chemical record of that day's wakefulness."
- Line 78, *proposed:* "Among the molecules cleared this way is amyloid-beta, a metabolic byproduct that accumulates with neural activity and is implicated in neurodegenerative disease. (Adenosine, the 'sleep pressure' molecule of Section 1, is cleared largely by other metabolic and enzymatic routes; how much the glymphatic system contributes to adenosine specifically is not well established.)"
- Line 78, *current close:* "it is failing to run the only maintenance cycle it has available." → *proposed:* "it is failing to run one of the few maintenance cycles that depend specifically on deep sleep."
- Line 260, *current:* "…cleared by the glymphatic system during sleep; blocked by caffeine." → *proposed:* "…dissipates during sleep; blocked by caffeine."
- Line 270, *current:* "flushes metabolic byproducts — including adenosine — from interstitial spaces" → *proposed:* "flushes metabolic byproducts — notably amyloid-beta — from interstitial spaces"

**T1-2 · Leptin/ghrelin mechanism stated as settled — HIGH confidence overreach.**
Location: line 124.
Issue: Spiegel et al. (2004) is correctly cited, but later work does not robustly replicate the hormone pathway — a 6-RCT meta-analysis found no significant leptin/ghrelin change after sleep restriction; a 21-study meta found elevated ghrelin only, with heterogeneity by BMI, sex, and sampling time. The *behavioral* effect (sleep loss → increased intake, especially palatable food) is more robust than the hormonal mechanism the draft asserts.

- *Current:* "Sleep deprivation specifically disrupts two hormones that govern appetite: **leptin** … drops; **ghrelin** … rises — producing an increase in appetite and a preference for high-calorie foods that occurs independently of actual energy expenditure (Spiegel et al., 2004)."
- *Proposed:* "In a classic controlled study of healthy young men, sleep restriction lowered **leptin** (a satiety signal from fat tissue), raised **ghrelin** (a hunger signal from the stomach), and increased hunger and preference for high-calorie foods (Spiegel et al., 2004). Later studies find the hormone pattern is variable — it depends on design, sex, BMI, and sampling — but the broader link between sleep loss and increased eating is well supported."

**T1-3 · Predation/sleep bundles a strong claim with a weak one — MEDIUM-HIGH; matters because it's your field.**
Location: line 74.
Issue: Lima et al. (2005) strongly supports "more lightly" (risky-environment species reduce time in *vulnerable* deep-sleep states) but only weakly supports "sleep less" — total sleep time across species does not cleanly track predation risk. Currently uncited.

- *Current:* "prey species that sleep in exposed, dangerous settings tend to sleep less, and more lightly, than well-protected predator species — exactly what a trade-off between the benefits of sleep and the cost of vulnerability would produce."
- *Proposed:* "species that sleep in exposed, risky settings tend to shift the *architecture* of their sleep — less time in deep, vulnerable states, and lighter, more easily interrupted sleep — than well-protected species (Lima et al., 2005). Total sleep duration across species is messier and tracks many factors at once, but the shift away from vulnerable deep sleep under risk is exactly what a trade-off between sleep's benefits and the cost of vulnerability would produce."

### 1B. Internal consistency

**T1-4 · Section 1 never defines the two-process model, but Q2 / LO2 / line 78 depend on it — HIGH confidence defect.**
Locations: Section 1 (line 55) omits the terms; Review Q2 (lines 168–175) tests "Process C" vs "Process S"; LO2 (line 35) requires distinguishing the two processes; line 78 refers to "Process S described in Section 1"; Key Terms (line 292) define the model. As written, Q2 is **not answerable from the chapter body.**
Fix: restore ~2 sentences in Section 1 naming the model and both processes. Borbély (1982) is already cited on line 55; optionally add the 2016 reappraisal (see references).

- *Proposed addition after line 55 (the caffeine/jet-lag sentence):* "These two influences — the homeostatic sleep pressure that builds with time awake (**Process S**) and the circadian alerting signal set by the SCN (**Process C**) — are the two halves of Borbély's (1982) **two-process model of sleep regulation**. They usually cooperate, but jet lag and night-shift work are what it feels like when they pull in opposite directions at once."

**T1-5 · "Dopamine/reward" cross-references are never delivered in the body — MEDIUM confidence.**
Locations: line 26 ("Where This Fits"), line 148 (Connections table). Section 3 covers appetite (leptin/ghrelin) only; dopamine/reward never appears.
Two options (pick one):
- *(a) Deliver it* — add to Section 3 after the leptin/ghrelin sentence: "Sleep loss also amplifies reactivity in the brain's reward circuitry, biasing how tempting rewards are appraised (Gujar et al., 2011) — the same dopamine machinery Chapter 7 uses to explain reinforcement." (Adds Gujar et al., 2011 **[verified this session]**.)
- *(b) Soften the cross-refs* — change line 26 to "…the appetite-related consequences of sleep loss connect to the reward-learning machinery Chapter 7 uses…" and edit the line 148 Connections cell to drop "dopamine reward machinery that sleep loss dysregulates" in favor of appetite/reward regulation more generally.

Recommendation: (a) — the evidence is real and it strengthens a cross-chapter thread you already set up.

### 1C. Confidence-calibration hedges (small wording changes, same defect class)

**T1-6 · Sleep spindles / fluid intelligence — MEDIUM.** Line 69. Real but mixed/sex-dependent; uncited.
- *Current:* "sleep spindle density increases following new learning sessions and correlates with measures of fluid intelligence across individuals, suggesting they play an active role in offline memory consolidation rather than simply marking sleep depth."
- *Proposed:* "sleep spindle density increases following new learning and has been linked, in some studies, to measures of cognitive ability — though these relationships vary by age, task, and how spindles are measured. The pattern suggests spindles play an active role in offline memory consolidation rather than simply marking sleep depth."

**T1-7 · School start times "consistently finds academic and health benefits" — HIGH.** Line 53. Evidence is consistent for sleep duration/sleepiness, more variable for academic/health outcomes (Minges & Redeker, 2016; six experimental studies).
- *Current:* "…school-start-time research consistently finds academic and health benefits from later start times for secondary students."
- *Proposed:* "…later-start-time research generally finds more sleep and less daytime sleepiness for secondary students, with academic and health benefits more variable across studies (Minges & Redeker, 2016)."

**T1-8 · Alcohol suppresses REM "by disrupting acetylcholine activity" — MEDIUM.** Line 82. REM suppression is solid; pinning it specifically on ACh is too narrow.
- *Current:* "alcohol suppresses REM sleep by disrupting acetylcholine activity, so the night's sleep is architecturally impaired even when it feels complete."
- *Proposed:* "alcohol suppresses REM sleep and fragments the second half of the night, so the night's sleep is architecturally impaired even when it feels complete."

**T1-9 · Adenosine "triggers cortisol and norepinephrine" second-wind mechanism — MEDIUM.** Line 55. Phenomenon real; the specific causal mechanism is speculative and uncited.
- *Current:* "because rising adenosine triggers compensatory release of cortisol and norepinephrine that temporarily overrides the sleep pressure signal — which is why children at sleepovers…"
- *Proposed:* "because stress-arousal systems (cortisol and norepinephrine) can transiently mask accumulated sleep pressure rather than clear it — which is why children at sleepovers…"

**T1-10 · PGO waves "supply the dream signal" — LOW-MEDIUM.** Line 102. Well characterized in cats; human evidence indirect.
- *Current:* "…which fire rapidly during REM and supply the internally generated signal the forebrain then synthesizes into imagery. The pons fires; the cortex makes a story."
- *Proposed:* "…which fire during REM and are thought to supply much of the internally generated signal the forebrain synthesizes into imagery (best characterized in animal models; the human evidence is more indirect). The pons fires; the cortex makes a story."

**T1-11 · Dream negative-tone "60–80%," cited to the theory paper — MEDIUM.** Lines 102 and 136. Evidence supports ~two-thirds; 80% upper bound unsupported; better sourced to Valli & Revonsuo (2009), and TST is contested.
- Line 102, *current:* "…with roughly 60–80 percent of dream diary entries across multiple studies carrying negative emotional tone — threat, pursuit, and aggression appearing far more often than mundane waking experience would predict (Revonsuo, 2000)."
- Line 102, *proposed:* "…with about two-thirds of dream reports carrying negative emotional tone, and aggression the most common social interaction (Valli & Revonsuo, 2009). The theory is contested — studies disagree on how often dreams contain realistic, life-threatening scenarios — but the negative skew itself is well documented."
- Line 136 (summary), *current:* "…supported by the finding that 60–80 percent of dream diary entries carry negative emotional tone…" → *proposed:* "…supported by the finding that about two-thirds of dream reports carry negative emotional tone…"
- Adds Valli & Revonsuo (2009) **[verified this session]**.

**T1-12 · Surrealism box "documenting the neuroscience of REM" — MEDIUM (keep the box, drop the overclaim).** Line 104.
- *Current:* "The Surrealists were documenting the neuroscience of REM before EEG existed."
- *Proposed:* "The Surrealists were not doing neuroscience — but their dream imagery maps remarkably well onto REM phenomenology: vivid perception, emotional intensity, and loosened executive control. It is a useful artistic metaphor, not a mechanism."

**T1-13 · NREM parasomnias "have nothing to do with dreaming" — LOW-MEDIUM.** Line 112. Too absolute; NREM episodes can carry dream-like mentation.
- *Current:* "…typically emerge from deep NREM sleep, usually in the first half of the night, and have nothing to do with dreaming."
- *Proposed:* "…typically emerge from deep NREM sleep, usually in the first half of the night, and are not REM dream-enactment (though fragmentary dream-like mentation is sometimes reported)."

**T1-14 · Local sleep / sleepwalking "motor cortex locally awake" — MEDIUM; single-case basis, uncited.** Line 69.
- *Proposed:* insert a hedge — "…in a small number of case studies, motor cortex regions appear locally awake while surrounding cortex remains in deep NREM sleep…" — and add a citation (**[verify before inserting]**: Terzaghi et al., 2009, or Bassetti et al., 2000).

### 1D. Housekeeping (factual)

**T1-15 · References not alphabetical.** Cohen (2009) is filed after Dave & Margoliash (2000) (lines 324–326). Move Cohen above Dave. (Cross-check otherwise clean: all 13 in-text citations match References, no orphans either direction.)

**T1-16 · Version/session header mismatch.** File header says "v0.2 … Session 58"; HANDOFF lists ch06-sleep.md as v0.1, created Session 59. Reconcile before the next commit.

---

## TIER 2 — Structural / pedagogical (hold until after your line-by-line read)

**T2-1 · Section 2 is overloaded.** The single NREM paragraph (line 69) carries polysomnography, three NREM stages, spindles, fluid intelligence, parasomnias, local sleep, REM atonia, 90-min cycles, and dream timing. *Minimal* fix: split that paragraph and move the Sleep Disorders block (line 112) to sit after Dreams. *Fuller* fix (GPT's proposal, higher churn): re-architect into Architecture / What Sleep Does / Dreams / Deprivation. Recommend the minimal split now; defer the full re-architecture.

**T2-2 · Convert the sleep-stage paragraph to a table** (Stage · EEG signature · What to remember · Common confusion). Matches your table-over-prose preference and cuts Section 2 load.

**T2-3 · Convert the Sleep Disorders paragraph (line 112, ~350 words) to a table** (Disorder · Mechanism · Key feature).

**T2-4 · Add a "what acts on what" table** (caffeine→sleep pressure; morning light→circadian clock; melatonin→timing; nap→sleep pressure). This directly delivers the LO2 promise (line 35) that the body currently doesn't fulfill.

**T2-5 · Add an evidence-strength calibration box** ("strong evidence vs. sleep hype") distinguishing well-established findings (circadian architecture, REM/NREM staging, PFC-amygdala, consolidation) from variable ones (hormone pathways, spindle-IQ, single-function dream theories). This is the pedagogical embodiment of the Tier 1 through-line and fits your "never overstate" rule better than anything currently in the chapter.

**T2-6 · Split the compound learning objectives.** LO3 (identify stages *and* evaluate sleep-evolution theories) and LO6 (PFC-amygdala *and* two more consequences) each bundle two objectives.

**T2-7 · Chapter rename (optional, low priority).** GPT suggests "Sleep: The Brain's Maintenance System." Defensible, but cosmetic; decide after content is settled.

---

## TIER 3 — Backlog

**Figures** (only 2 exist: SCN pathway, hypnogram): (a) two-process push-pull diagram — restores the retired concept visually and pairs with T1-4; (b) NREM sleepwalking vs. REM behavior disorder misconception-correction panel; (c) sleep-deprivation systems map (emotion / appetite / immune / memory).

**Labs** (per labs-spec): circadian/sleep-pressure simulator (ties to LO2); sleep-stage classifier (retrieval); sleep-claim calibration (sort claims by evidence strength — reinforces T2-5).

**Retrieval structure:** a "four maintenance jobs" table (Timing / Chemical cleanup / Memory reorganization / Emotional regulation × mechanism × cost-if-skipped) would give students a spine for Section 3.

---

## Reference additions (with verification status)

**Verified this session (safe to insert):**
- Borbély, A. A., Daan, S., Wirz-Justice, A., & Deboer, T. (2016). The two-process model of sleep regulation: A reappraisal. *Journal of Sleep Research, 25*(2), 131–143.
- Minges, K. E., & Redeker, N. S. (2016). Delayed school start times and adolescent sleep: A systematic review of the experimental evidence. *Sleep Medicine Reviews, 28*, 86–95.
- Lima, S. L., Rattenborg, N. C., Lesku, J. A., & Amlaner, C. J. (2005). Sleeping under the risk of predation. *Animal Behaviour, 70*(4), 723–736.
- Valli, K., & Revonsuo, A. (2009). The threat simulation theory in light of recent empirical evidence: A review. *American Journal of Psychology, 122*(1), 17–38.
- Gujar, N., Yoo, S.-S., Hu, P., & Walker, M. P. (2011). Sleep deprivation amplifies reactivity of brain reward networks, biasing the appraisal of positive emotional experiences. *Journal of Neuroscience, 31*(12), 4466–4474.

**Verify before inserting (details not confirmed this session):**
- Local sleep / state dissociation in sleepwalking — likely Terzaghi et al. (2009) or Bassetti et al. (2000, *Lancet*).
- Adenosine/caffeine review — likely Reichert, Deboer & Landolt (2022).
- Alcohol and REM/sleep architecture — likely Colrain, Nicholas & Baker (2014), *Handbook of Clinical Neurology*.
- Leptin/ghrelin later meta-analysis, if you want to cite the mixed replication directly — Lin et al. (2020), *Obesity Reviews*.

---

## One-screen action summary

1. **Tier 1 factual (do first):** glymphatic/adenosine (T1-1), leptin/ghrelin (T1-2), predation (T1-3), school starts (T1-7).
2. **Tier 1 consistency (do first):** restore two-process terms so Q2/LO2 are answerable (T1-4); resolve the dopamine cross-ref (T1-5).
3. **Tier 1 hedges (fast):** T1-6, T1-8 through T1-14.
4. **Housekeeping:** reorder Cohen ref (T1-15); fix version header (T1-16).
5. **Hold for after your read:** split Section 2 + two tables + the "what acts on what" table + evidence-strength box (Tier 2).
6. **Backlog:** figures, labs, reference adds (Tier 3).
