# Psych101 Textbook — Handoff Document

> **How to use this file:** The Status and Next Up sections are overwritten each session. The Session Log at the bottom is append-only — newest entry at the top.

---

## Current Status

**Phase:** Repo scaffolded. Extraction outputs validated and revised. Ready to begin chapter drafting.

**What's ready:**
- `source/concept_lineage_revised.csv` — 181 concepts across all APA chapters, with textbook-era lineage, origin flags, and `wording_change_driver` column
- `source/voice_profile_merged.csv` — 129 voice entries: 35 from Gen Psych (across 18 iterations), 94 from specialist courses (Neuroscience, S&P, Cognitive, Lifespan, Disorders)
- `docs/` — GitHub Pages scaffold with sidebar nav, CSS, and TOC stub

**What's not started:**
- Chapter drafts (none written yet)
- Pipeline prompt / spec (not written)
- GitHub Pages not yet enabled on the repo (needs to be turned on in repo Settings → Pages → Source: `docs/`)

---

## Next Up

1. **Define the chapter-writing pipeline** — decide draft format (prose structure, callout types, key term conventions, length target per chapter), voice application rules, and how `needs-verification` / `book-adoption` concepts get handled (borrow from Noba/APA IPI)
2. **Write Chapter 1 pilot draft** (History & Approaches) — shortest chapter, good test case for pipeline before longer chapters
3. **Review Chapter 1 draft** — confirm voice, structure, and concept coverage before running remaining 13 chapters

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
