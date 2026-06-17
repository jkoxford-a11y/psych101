# Chapter Writing Pipeline Spec

> This document governs how every chapter of the Psych101 textbook is drafted.  
> Author: Jon Oxford Ph.D. | Last updated: 2026-06-17

---

## 1. Chapter Structure (Required, In Order)

Every chapter follows this exact sequence:

1. **Where This Fits** *(~100 words)*  
   Opening paragraph. Foreshadows the chapter's role in the larger web of psychology. Names at least one forward connection to a later chapter and one backward connection (if not Chapter 1). Written in the instructor's voice — not a dry overview, a pitch.

2. **Learning Objectives**  
   Bulleted list, 4–7 items. Anchored to APA IPI Student Learning Outcomes and the relevant pillar(s). Use action verbs (explain, distinguish, apply, evaluate — not "understand" or "know"). These will render as a styled callout box in HTML.

3. **Content Sections** *(see §3)*  
   The body of the chapter. Prose, not bullets. Instructor voice throughout.

4. **Chapter Summary**  
   One paragraph per major section. Activates retrieval — written to cue recall, not re-explain. Tight.

5. **Connections** *(see §4)*  
   Explicit cross-chapter link table. Positioned before review questions so it's part of the reading flow, not an afterthought.

6. **Review Questions**  
   8–12 retrieval-style questions (not discussion prompts — these require actual recall). Mix of factual, conceptual, and application. At least 2 must require connecting concepts across sections.

7. **Key Terms**  
   Alphabetical glossary of bolded terms from the chapter. Each entry: term, one-sentence definition. In HTML, terms will be hover-linked from their inline location to this glossary.

8. **Further Reading / Resources**  
   3–6 curated external links (Noba modules, APA resources, accessible primary sources). Brief annotation per item.

---

## 2. Length Targets

| Element | Target |
|---|---|
| Where This Fits | ~100 words |
| Learning Objectives | 4–7 items |
| Body (all content sections) | 3,500–5,000 words |
| Chapter Summary | 200–400 words |
| Connections table | 4–8 rows |
| Review Questions | 8–12 questions |
| Key Terms | 8–20 terms |

Total per chapter: approximately 4,500–6,000 words of prose.

---

## 3. Content Sections

### 3a. Section structure
Each major section within a chapter follows this pattern:
- **Prose narrative** — no sub-bullets inside body sections; if something needs a list, convert it to prose
- **Inline key term bolding** — first use of each key term is **bolded**
- **Inline foreshadow/review cues** — brief parenthetical or subordinate clause where a concept connects to another chapter: *"(we return to this in Chapter 9, where the same mechanism drives phobia treatment)"*. One or two per section maximum; don't overdo it.
- **"Think About It" prompt** — one per major section, set off visually. A short application or reflection question that requires the student to do something with the concept, not just recognize it. Not graded; designed to interrupt passive reading.

### 3b. How many sections?
Aim for 3–5 major sections per chapter, each covering a coherent conceptual chunk. Avoid more than 5 — it fragments the narrative.

### 3c. Section openings
Each section opens with a hook — an anecdote, a counterintuitive fact, a question, or an animal behavior example where relevant. Not a topic sentence announcing what the section is about.

---

## 4. Connections Section

A dedicated section at the end of the chapter body, before Review Questions.

### Format
Rendered as a table in HTML with three columns:

| Concept from this chapter | Reappears in | Why it matters there |
|---|---|---|
| [concept] | Ch. X — [title] | [one sentence on the connection] |

- 4–8 rows minimum
- Each concept cell links to its inline location in this chapter (HTML anchor)
- Each chapter cell links to the target chapter HTML file
- Covers both forward connections (foreshadow) and backward connections (review)
- Should include at least one non-obvious connection — not just the easy adjacent chapters

### Writing the connections
Before drafting: scan `concept_lineage_revised.csv` for concepts in other chapters that share mechanisms, themes, or empirical lineage with this chapter's concepts. The goal is the *network*, not a checklist.

---

## 5. Voice Rules

Consult `source/voice_profile_merged.csv` before drafting each chapter. Specifically:

- **Persona** — Herr Prof. Dr. Awesome-Sauce is present but not constant. The persona shows up in asides, hooks, and "Think About It" prompts — not in formal definitions.
- **Signature analogies** — use them where they fit; don't force them:
  - Tesla Vision → Sensation & Perception
  - Automatic camera → Consciousness
  - Video camera misconception → Memory (always subvert this)
  - Sapolsky/dopamine → Learning/motivation
  - Animal Model connector → anytime a human finding has an animal research basis
- **Evolutionary/comparative framing** — default lens for explaining *why* a mechanism exists, not just what it does. Ask "what problem did this solve?" for any psychological mechanism.
- **Tone** — conversational but precise. No hedging on well-established findings. Honest about uncertainty where it exists. Never condescending.
- **No passive voice** in explanatory passages. Active constructions only.

---

## 6. Copyright Handling

Check `wording_change_driver` in `concept_lineage_revised.csv` for every concept before drafting:

| Flag | Action |
|---|---|
| `instructor-revision` or `n/a` | Draft freely from course materials |
| `publisher-template-change` | Draft freely; wording changed for formatting reasons, not IP reasons |
| `book-adoption` | Borrow definition/framing from Noba Project or APA IPI materials. Do not use course slide wording. |
| `needs-verification` (source_confidence) | Same as book-adoption — use Noba/APA IPI |

Never copy wording from Wade & Tavris, King, or Myers textbooks.

---

## 7. APA IPI Alignment

Each chapter must address its relevant APA pillar(s) and weave in applicable integrative themes. The seven integrative themes are:

1. Psychological science relies on empirical evidence and adapts as new evidence emerges
2. Psychology explains general principles that apply across a variety of situations
3. Psychological, biological, social, and cultural factors influence behavior and mental processes
4. Psychology values diversity, equity, and inclusion
5. Our perceptions and biases can be inaccurate
6. Psychological findings can be applied to everyday life
7. Ethical principles guide psychological study and application

Not every theme applies to every chapter. Select the 2–4 most relevant and address them explicitly — at least one should appear in the Learning Objectives.

---

## 8. Drafting Sequence (Per Chapter)

1. Pull all concepts for the chapter from `concept_lineage_revised.csv`
2. Check `wording_change_driver` — flag any `book-adoption` or `needs-verification` concepts
3. Scan `voice_profile_merged.csv` for relevant analogies and voice patterns
4. Identify 4–8 cross-chapter connections for the Connections table
5. Draft Learning Objectives (APA-aligned)
6. Draft "Where This Fits" paragraph
7. Draft content sections (body)
8. Draft Chapter Summary
9. Draft Connections table
10. Draft Review Questions
11. Compile Key Terms glossary
12. Add Further Reading
13. Convert markdown draft to HTML and place in `docs/chapters/`

---

## 9. File Naming

| Format | Location | Naming convention |
|---|---|---|
| Markdown draft | `source/chapters/` | `ch01-history-approaches.md` |
| HTML final | `docs/chapters/` | `ch01-history-approaches.html` |

---

*Spec version 1.0 — subject to revision after Chapter 1 pilot draft review.*
