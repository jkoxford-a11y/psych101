# Psych101 Textbook — Handoff Document

> **How to use this file:** The Status and Next Up sections are overwritten each session. The Session Log at the bottom is append-only — newest entry at the top.

---

## Current Status

**Phase:** Pipeline spec finalized (v3.0). Ready to begin Chapter 1 draft.

**What's ready:**
- `source/concept_lineage_revised.csv` — 181 concepts across all APA chapters, with textbook-era lineage, origin flags, and `wording_change_driver` column
- `source/voice_profile_merged.csv` — 129 voice entries: 35 from Gen Psych (across 18 iterations), 94 from specialist courses (Neuroscience, S&P, Cognitive, Lifespan, Disorders)
- `docs/` — GitHub Pages scaffold with sidebar nav, CSS, and TOC stub
- `pipeline/chapter-spec.md` — full chapter-writing pipeline spec v3.0 including menu model, demo integration, voice rules, copyright handling, and AI integration framework (§12)

**What's not started:**
- Chapter drafts (none written yet)
- GitHub Pages not yet enabled on the repo (needs to be turned on in repo Settings → Pages → Source: `docs/`)

---

## Next Up

1. **Write Chapter 1 pilot draft** (History & Approaches) — shortest chapter, good test case for the pipeline before longer chapters. Ch. 1 concepts are all `instructor-revision` or `n/a` wording_change_driver — no copyright concerns. AI touchpoints: light (Turing, Skinner-Chomsky, connectionism).
2. **Review Chapter 1 draft** — confirm voice, structure, concept coverage, and AI integration tone before running remaining 13 chapters
3. **Write prologue** — adapt from psych101_awesome-sauce content; add Human-AI Cognitive Alignment unit per spec §12
4. **Priority demos to build:** conditioning simulator, correlation/causation simulator, SDT demo, forgetting/retrieval simulator

---

## Key Files

| File | Location | Purpose |
|------|----------|---------|
| `concept_lineage_revised.csv` | `source/` | 181 concepts with era lineage and risk flags |
| `voice_profile_merged.csv` | `source/` | 129 voice entries across Gen Psych + 5 specialist courses |
| `index.html` | `docs/` | TOC landing page (GitHub Pages root) |
| Chapter HTMLs | `docs/chapters/` | One file per chapter (none written yet) |
| Chapter markdown drafts | `source/chapters/` | Pre-HTML working drafts |
| Pipeline scripts/prompts | `pipeline/` | Chapter-writing tooling (not yet created) |

---

## Session Log

---

### 2026-06-17 — Session 2

**What happened:** Designed and finalized the chapter-writing pipeline spec (created `pipeline/chapter-spec.md`, iterated v1.0 → v3.0). Major decisions this session: (1) Menu model for chapter structure — small required core, optional elements per chapter rather than rigid template. (2) Three-layer connections system: Where This Fits opener + inline cues + end-of-chapter hyperlinked table. (3) Prologue module ("How to Actually Learn This Stuff") before Chapter 1 — evidence-based study skills foreshadowing multiple chapters. (4) Plain HTML throughout, no Quarto migration. (5) Interactive demos via iframe embed with predict/explain/retrieve scaffold; inventoried 8 existing demo repos. (6) Added §12 AI Integration framework: bidirectional (psychology explains AI + AI illustrates psychology), "where the analogy breaks" rule as the pedagogical core, Human-AI Cognitive Alignment in prologue, chapter-by-chapter touchpoint map. Also read and synthesized three Notion AI literacy resources (Human-AI Cognitive Alignment, Understanding AI Through Psychology, Psychology Curriculum → AI Competency Map).

**Decisions made:**
- AI integration is a recurring thread, not a separate chapter
- Every AI Connection requires three parts: parallel → simplification → what the breakdown tells us
- Human-AI Cognitive Alignment (grounding theory) belongs in the prologue as study-skills science
- Heaviest AI integration: Ch. 6 Learning (RLHF/conditioning), Ch. 7/8 Memory/Cognition (context windows, illusion of knowing), Ch. 9 Social (sycophancy, anthropomorphism), Ch. 4/5 S&P (predictive coding, feature detection)
- Jon's intuition that "AI has personalities, memory, needs context" maps directly onto Social (sycophancy as trait-like tendency), Memory (context window as working memory), and the prologue (cognitive alignment as grounding theory)

**Files created/modified this session:**
- `pipeline/chapter-spec.md` — created v1.0, iterated to v3.0

---

### 2026-06-17 — Session 1

**What happened:** Full audit and revision of prior extraction outputs. Confirmed textbook-era mapping (Wade: folders 1–2; King 3e: folder 3; King 4e: folders 4–11; Myers 13e: folders 12–18; folders 4/5 chronologically swapped). Audited 8 source files across eras; found that the prior 75% `wording_changed_at_book_transition` rate was real but conflated two scenarios: publisher-template changes (King-era publisher slides replaced by instructor-built Myers slides) vs. genuine book-adoption risk. Added `wording_change_driver` column distinguishing `publisher-template-change` (55), `instructor-revision` (62), and `book-adoption` (19). Removed PER-004 (sourced from wrong course — PSYC 4053 Theories of Personality, not Gen Psych). Fixed DIS-009 schema (`publisher-supplied-only` → `needs-verification`). Corrected concept-level origin fields for pure-publisher chapter-era combos. Ran voice scans on latest iterations of 5 specialist courses (Neuroscience 26SS, S&P 226SS, Cognitive 25FS, Lifespan 24FS, Disorders 23SS); produced merged voice profile with `course_source` column. Scaffolded GitHub repo with `docs/`, `source/`, `pipeline/` structure.

**Decisions made:**
- `needs-verification` and `book-adoption` concepts will borrow phrasing from Noba/APA IPI in the pipeline — no need to forensically verify each one pre-emptively
- Voice scan uses latest iteration only for specialist courses (earlier iterations show evolution, latest shows where voice landed)
- GitHub Pages will serve from `docs/` folder

**Files created this session:**
- `source/concept_lineage_revised.csv`
- `source/voice_profile_merged.csv`
- `docs/index.html`
- `docs/css/style.css`
- `docs/js/nav.js`
- `HANDOFF.md`
