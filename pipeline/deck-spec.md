# Lecture Deck Generation Spec

> Governs how every chapter of the Psych101 textbook becomes a lecture deck.
> Author: Jon Oxford Ph.D. | Drafted 2026-07-29 | Version 0.1
> **Status: PROPOSAL — not adopted.** Open questions in §14 are genuinely open.
> Implementation: `pipeline/build_chapter_deck.py`. Seed format: `pipeline/slides/README.md`.

---

## 0. Scope

This spec governs the deck. It does not govern the chapter — `chapter-spec.md` does that, and where the two disagree the chapter wins.

A deck is a **teaching artifact derived from a chapter**. It is not a summary of the chapter, not a reading substitute, and not a second place where content decisions get made.

---

## 1. Design philosophy

### 1.1 The room criterion

The chapter already decided what belongs in the book. The deck decides something different:

> **Does this need to happen in the room?**

Exposition can be read. Class time should carry what fails when read alone:

- committing to a prediction before the answer exists
- generating an explanation and watching it fall short
- discovering your own intuition was wrong, in front of the evidence
- arguing with a peer and having to justify the answer
- sorting cases where the categories overlap and the overlap is the lesson

Everything else is a candidate for the speaker notes, an optional slide, or nothing at all. "This is important" is not a reason for a slide; the chapter already established importance. "A student cannot get this from reading" is a reason.

This criterion replaces slide counts. It is content-based, it has a stopping rule, and it does not change when the calendar does.

### 1.2 Build what the chapter earns

Do not inflate a thin section to fill a period, and do not compress a rich one to fit. A deck that is honestly short is a correct deck.

### 1.3 Prose belongs in the notes

Chapter prose is written for a page. On a slide it is unreadable; in the speaker notes it is exactly right. Each paragraph contributes **one claim** to the slide and its **full text** to the notes.

### 1.4 Slide titles carry claims

A slide titled "Figure 6.2" tells the room nothing. A slide titled "Light entrains the clock; the clock does not need light to run" is the teaching. Titles state the claim; figure and table numbers live in the notes for pointing back at the book.

---

## 2. Source of truth

| Artifact | Status | Hand-edited? |
|---|---|---|
| `source/chapters/chNN-*.md` | Canonical | Yes — this is the book |
| `pipeline/slides/chNN.md` (seed) | Canonical *for teaching decisions* | Yes |
| `pipeline/ai-modules/chNN.md` | Canonical *for the AI layer* (§7) | Yes |
| `slides/chNN/assets/` | Canonical for slide-only images | Yes |
| `build/decks/*.pptx` | Derived | **Never** |
| `build/decks/*.deck-model.json` | Derived | **Never** |

Built decks are rebuilt, not committed — a `.pptx` is a zip, and version control stores a whole new copy on every rebuild. Attach a deck to a release when a citable snapshot is needed.

A teaching decision that contradicts the chapter is a seed entry, never a chapter edit. A *content* decision that the chapter got wrong is a chapter edit, never a seed entry. If you cannot tell which you are making, it is a chapter edit and it goes through the normal chapter workflow.

---

## 3. Modules and stopping points

### 3.1 Modules are the chapter's own sections

Verified against Chapters 1 and 6: the chapter's `## Section N` headings already are the teaching modules. No separate module-authoring layer exists or should be created.

Chapter 1 → four modules: What Is Psychology · A Short History · Modern Perspectives · Why Science?

### 3.2 Module sizing

Modules are sized to the **smallest common class period**, not the largest.

A MWF section runs ~50-minute periods, or roughly **35–45 usable minutes** after settling, transitions, and a mid-class break. A module must be enterable and completable inside that. Longer meetings run two or three modules; they do not require a differently built deck.

**Do not emit "Day 1" and "Day 2" decks.** Day boundaries are calendar facts, not content facts, and they differ across MWF, TTh, summer, evening, and online sections of the same course.

### 3.3 Stopping points

Every module boundary is a stopping point. A stopping point must be **conceptually complete** — the argument so far stands on its own and the next module opens a new question.

The generator marks stopping points explicitly. "We ran out of time at slide 17" is not one.

### 3.4 The break

A mid-class break is a design asset, not lost time. Where a chapter has a predict-then-reveal structure, the break belongs **inside the gap**: students commit before, the reveal lands after. The delay strengthens the effect rather than interrupting it.

Chapter 1's Milgram prediction is the worked example.

---

## 4. Slide grammar

What the generator derives from a chapter, and why. The implementation lives in the `CONFIG` block at the top of `build_chapter_deck.py`; this section states the rules the config encodes.

| Chapter element | Becomes | Notes |
|---|---|---|
| `# Chapter N: Title` | Title slide | |
| Misconception Opener quote | Hook slide, quote alone, no title | The misconception is stated, not yet answered |
| Misconception correction prose | Concept slide(s) | |
| Where This Fits | One framing slide | Lead with the bolded question |
| Learning Objectives | Agenda, 3 per slide, own numbering | Bullets suppressed — placeholder bullets collide with the numbers |
| `## Section N:` | Module divider + stopping point | |
| `### Subsection` | Slide title for what follows | Not its own slide |
| `#### Do Not Confuse` / `#### Classic Study` | Own slide, role-tagged | These are labelled teaching moves |
| Figure + caption | Full-bleed image, caption small, alt text → notes | Title = the claim (§1.4) |
| Markdown table | Real PowerPoint table, split at 4 data rows with header repeated | PowerPoint auto-grows rows; long tables run off the slide silently |
| `> **Stop and Retrieve:**` / `> **Think About It:**` | Prompt slide | |
| `**Try it yourself:**` + lab link | Lab slide | |
| Review Questions | One slide each, answer + rationale in notes | See §14.4 |
| Key Terms | Grouped, 4 per slide | |
| Further Reading, References | Omitted | |

**Roadmap slides.** A chapter may carry one, displayed whole, ~20 seconds. Revealing questions one at a time is a learning-objectives ritual with animation attached; the section dividers reactivate each question at the point it becomes live.

---

## 5. Slide tiers

Every slide record carries exactly one tier. Routes are produced by **filtering on tier**, never by an instructor deciding mid-lecture what to skip.

| Tier | Meaning |
|---|---|
| `core` | The argument breaks without it |
| `enrichment` | Deepens a point the core already makes; cut cleanly |
| `activity` | An activity slide; may be core or optional, tagged separately |
| `backup` | Answers an anticipated question; shown only if asked |

Planned branching is legitimate teaching. Unplanned cutting from an overbuilt deck is the defect this tiering exists to prevent.

---

## 6. Activities

Activities are selected from `pipeline/activity-library.md`, not invented per chapter. The library carries the patterns, their material triggers, and their evidence base; this section carries the rules any activity must satisfy regardless of pattern.

### 6.1 Admission test

An activity earns its place only if it passes §1.1 and has a **failure mode** — a way for a student's own answer to be wrong, and for them to find out. An activity that cannot fail is exposition with a pause in it.

### 6.2 Required fields

Every activity carries: the prompt as students see it · what students physically produce (write, vote, tell a partner) · the debrief move · estimated minutes · tier · what it would replace if cut.

### 6.3 Overlapping categories are a lesson, not a bug

Where a sort has genuinely overlapping dimensions, **run two passes** rather than forcing exclusive buckets.

Chapter 1's camera test is the worked example. "A student says, 'I am not nervous'" is simultaneously observable behavior and self-report evidence about an inferred state. A single three-way sort makes that item incoherent. Two passes — *what is directly recorded vs. inferred*, then *what kind of evidence is being used* — teach the actual distinction.

### 6.4 Placement follows the chapter

An activity whose honest debrief requires machinery from a later chapter belongs in that later chapter. Chapter 1's Wason 2-4-6 is the worked example: a debrief that is fair to the positive-test-strategy literature has to teach hypothesis-space structure, which Chapter 9 owns. Tag it `enrichment` in Chapter 1 on **conceptual** grounds, not time.

Two extended bias demonstrations in one lecture is one too many regardless.

---

## 7. The AI layer

The AI Psych Pilot runs pre/post AI-literacy assessment across the semester. Its modules therefore have to be consistent across sections, traceable to assessment constructs, and stable enough to cite. They are not slide tweaks.

### 7.1 Content location

AI modules live in **`pipeline/ai-modules/chNN.md`**, tracked and reviewed like chapter content, with a registry in `pipeline/ai-modules/README.md` mapping each module to the pilot construct it serves. Seeds reference them by ID; seeds do not contain them.

Rationale: seed files are volatile per-chapter slide adjustments. Pilot instrumentation cannot live in a volatile file.

### 7.2 Three types

| Type | What it is |
|---|---|
| `connection` | A brief application inside the normal lecture flow |
| `module` | A structured activity — predict, compare, critique, calibrate, revise |
| `assessment-bridge` | Deliberately aligned to a pilot pre/post measure |

### 7.3 Required fields

Psychological learning objective · AI-literacy objective · student task · whether students commit before consulting AI · evidence or calibration target · relationship to the pilot instrument · tier.

### 7.4 The psychology leads

An AI element must teach a psychological principle first, with AI as the modern instance. Chapter 1's black-box inference is the template: *similar output does not establish similar mechanism* — a claim about inference that Skinner and Chomsky were already arguing about.

The boundary line belongs in the notes: if the room turns it into an AI lecture, the answer is that the same question was asked twenty slides ago.

### 7.5 Not every chapter

Some chapters earn a substantial module, some a one-line connection, some nothing. A mechanical AI element per chapter produces filler and would corrupt the pilot's own measurements.

---

## 8. Per-slide record

Every slide in `deck-model.json` carries:

| # | Field | Required | Notes |
|---|---|---|---|
| 1 | `key` | ✅ | Stable identity — §9 |
| 2 | `fingerprint` | ✅ | Hash of source text; change detection |
| 3 | `module` | ✅ | Owning chapter section |
| 4 | `tier` | ✅ | §5 |
| 5 | `kind` | ✅ | title / divider / concept / figure / table / prompt / activity / lab / question / terms |
| 6 | `title` | ✅ | The claim (§1.4) |
| 7 | `body` | ✅ | What is on the slide |
| 8 | `notes` | ✅ | Full source prose, plus instructor moves |
| 9 | `source_anchor` | ✅ | Chapter section this derives from |
| 10 | `activity` | nullable | §6.2 fields |
| 11 | `ai_element` | nullable | §7.3 fields; typed |
| 12 | `story_slot` | **nullable** | Joke, story, or demo. Mandatory humor produces filler |
| 13 | `omitted` | ✅ | What was deliberately left off the slide, and why |
| 14 | `est_minutes` | ✅ | **Metadata only** — §11 |
| 15 | `instructor_watch` | nullable | Misreadings to head off; sourced from spine seeds |

Field 13 is mandatory and is the most useful field in the record: it is the only place that distinguishes "not taught" from "taught aloud, deliberately not on the slide."

---

## 9. Slide identity

Overrides must point at something that does not move.

- Keys are **positional within a module** — `ch06-s1-p2` is Section 1's second concept slide. Inserting a paragraph shifts keys inside one section, not across the deck.
- Figures, key terms, and review questions get **semantic** keys — `ch06-fig-6-2`, `ch06-term-adenosine`, `ch06-rq-5`.
- Each slide also carries a **fingerprint** of its source text: the fallback when a key is deleted, and the signal that prose changed underneath an override.
- Keys and fingerprints are written into the speaker notes so they survive a round trip through PowerPoint.

**Orphaned overrides are reported, never dropped.** A pipeline that silently discards human decisions is worse than no pipeline.

---

## 10. Images and provenance

- Book figures come from `docs/images/chNN/` and keep the book's own attribution records.
- Slide-only images live in `slides/chNN/assets/` with a separate `manifest.md`.
- Any new image is `provenance: UNKNOWN` until a human fills it in. A deck given to another instructor is redistribution.
- Long edge capped at 2560px. Illustrations embed as JPEG, flat diagrams as PNG, transparency stays lossless. Originals are never modified.
- `psych101_figure_style_guide.md`'s "no decorative stock images" rule governs the book. Slides may be looser; the provenance requirement does not relax.

---

## 11. Time is metadata

Per-slide and per-activity minute estimates are recorded so an instructor can navigate. They are **diagnostic, never a mandate**.

Time estimates may be used to: detect a mislabeled deck, expose uncounted activity cost, warn that a module cannot fit the smallest common period.

They may **not** be used to: set a slide-count target, choose which activity to cut, or justify adding material.

The Chapter 1 blueprint is the cautionary case. The arithmetic correctly caught that a draft claiming 31 slides contained 40 and never counted the prediction, revote, or debrief — a real finding. It was then used to pick an activity for removal, which was the wrong use of a right measurement.

---

## 12. Evidence and citation discipline

Slides inherit `pipeline/evidence-commitments.md`. Two rules that specifically bite on slides:

**Separate sources stay separate.** Chapter 1's Milgram slide carries two citations because they are two sources — the psychiatrists' 1-in-1,000 forecast (Milgram, 1974) and the observed 26-of-40 result (Milgram, 1963). That separation is itself a teaching point about where predictions come from.

**Contested interpretations go in the notes, not on the slide.** Where a deck stakes an argument on a study whose evidentiary record is disputed, the instructor gets a line to say — *"this study has its own problems, and you will meet them in Chapter 11"* — which converts the objection into the section's own argument. The student slide stays clean.

---

## 13. Validation checklist

Run before a deck is taught from.

- [ ] Every slide has a tier, and the core route stands alone as an argument
- [ ] Every activity has a failure mode (§6.1) and all §6.2 fields
- [ ] No slide's job is "students could read this"
- [ ] Slide titles state claims, not labels
- [ ] Every module is enterable and completable in ~35–45 minutes
- [ ] Every module boundary is conceptually complete
- [ ] `omitted` (field 13) is populated on every slide
- [ ] No orphaned seed keys in the build report
- [ ] Every slide-only image has a provenance row
- [ ] Multi-source claims cite each source separately
- [ ] Contested interpretations appear in notes, not on slides
- [ ] AI elements teach the psychology first and map to a pilot construct
- [ ] Deck rebuilds clean from source with no hand edits

---

## 14. Decisions still open

Genuinely unresolved. These are the questions worth review.

**14.1 Hinge slides.** Chapter 1's black-box inference is the payoff to Skinner–Chomsky (end of Section 2) *and* the setup for institutional safeguards (Section 4). It has two homes. Should the model support a first-class `hinge` construct with a primary location and a callback, or is a seeded callback slide in Section 4 sufficient?

**14.2 Module sizing.** Is 35–45 minutes right, and does it survive chapters whose sections are badly unequal? Chapter 6 has three sections of very different weight. Should oversized sections split into sub-modules, and if so, on what boundary?

**14.3 AI content location.** §7.1 proposes `pipeline/ai-modules/chNN.md` with a registry. Alternatives: an `ai:` block inside the seed (simpler, less traceable), or a separate repository owned by the pilot (most traceable, worst coupling). The pilot's assessment needs decide this, and they are not yet written down.

**14.4 Review questions in lecture decks.** The generator currently produces one slide per review question — nine for Chapter 6. These are written as *reading* comprehension checks. Should they be in a lecture deck at all, become a separate quiz-review deck, or be filtered to those that pass §1.1?

**14.5 Backup slides.** Do anticipated-question slides live at the end of the main deck, in a separate appendix deck, or only in notes?

**14.6 Field reconciliation.** §8 defines fifteen fields. The original Chapter 1 blueprint draft referenced a twelve-field generator spec (its field 8 = joke/story, 9 = core/optional, 12 = intentionally omitted). That draft list has not been reconciled against this one, and the numbering here should not be assumed to match it.

**14.7 Slide-count ceilings.** §11 forbids counts as targets. Should any ceiling exist at all — even a soft warning at, say, 80 slides — or does any number reintroduce the failure mode?

**14.8 Second render target.** The same model can render reveal.js, which would embed the book's 21 interactive labs live in lecture. Does that change anything in this spec, or is it purely a renderer concern?
