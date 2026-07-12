# Learning Labs — Design Specification

> Applies to all standalone labs in `docs/labs/`. Read this before building or modifying any lab. Updated after the Ch7 Classical Conditioning Simulator audit (Session 40).

---

## Purpose

Labs are standalone interactive pages that deepen a single concept from the adjacent chapter. They live at `docs/labs/ch##/lab-name.html` and chapters link out to them — labs do not embed in chapters.

Each lab should be completable in a single class session or homework sitting (target: 10–20 minutes). One lab per concept, not per chapter.

---

## Required structural pattern

Every lab must include all six phases in order. Do not skip or reorder them.

### 1. Prediction / Commit

Before the simulator or activity is visible, the student writes at least one prediction and commits it. The commit button:
- Validates that the field is non-empty before proceeding
- Disables the prediction fields after commit (predictions are frozen)
- Reveals the manipulation phase
- Moves keyboard focus to the manipulation panel

**Why:** Generates a testable hypothesis before observation. Creates desirable difficulty. Students who predict first learn more from seeing whether they were right.

### 2. Manipulation / Observation

The active, interactive phase. The student runs the simulation, classifies items, or works through a procedure step by step. Design rules:

- One action per click (don't batch multiple trials behind a single button unless pacing is the point)
- Real-time feedback after each action (update stats, log, and curve immediately)
- Phase transitions are automatic when criteria are met; the student does not choose when to advance
- Buttons disable when not appropriate for the current phase
- The event log provides a plain-text running record of what happened (accessibility equivalent of the visual display)

### 3. Text explanation that teaches what the visual shows

After the manipulation phase ends, a callout (`callout--note`) appears that explicitly states the conceptual takeaway. Do not leave this inference entirely to the student. The callout should:

- Name what just happened and why (mechanism, not just description)
- Identify any key distinction the simulation cannot show visually (e.g., "suppression not erasure" for extinction)
- Be written at the chapter's reading level, not more technical

The completion summary (in the transfer panel) should also add one conceptual sentence beyond the numerical data.

### 4. Explain prompt

An open-ended question the student answers in a textarea before seeing the transfer question. The question should ask *why* or *what this reveals*, not just *what happened*. Save button stores the response in sessionStorage.

### 5. Transfer prompt

A scenario that requires applying the lab's concept to a new situation not shown in the simulation. Good transfer prompts:

- Name a real-world context
- Require the student to use the technical vocabulary from the lab
- Cannot be answered with a vague answer that ignores the mechanism

### 6. Completion summary

Appears above the transfer prompt. States what happened in the lab (numerical results if applicable) plus one sentence identifying the conceptual significance of the result.

---

## Instructor note

Every lab ends with an instructor note callout (`callout--think-about-it` or a future `callout--instructor` once that class is added). The note should:

- Suggest how to use the lab as a class activity (e.g., pairs, debrief timing)
- Identify the key discussion moment (typically the point where the result violates a naive expectation)

---

## Privacy and storage

**Use sessionStorage, not localStorage.** Labs are designed to be completed in a single sitting. sessionStorage clears when the tab closes, which is more private than localStorage and appropriate for a homework/in-class tool that doesn't need cross-session persistence.

What to store: prediction text, trial/phase progress, explanation response, transfer response.

What never to store: names, email addresses, student IDs, any analytics, any data sent to a server.

The privacy notice at the top of every lab must:
- Use `class="callout callout--note"` (not `callout--objectives` or any chapter-content callout class)
- State that storage is sessionStorage / browser session only
- List what is and is not stored

---

## Accessibility checklist

Before publishing any lab, verify:

- [ ] All interactive sections have `aria-labelledby` pointing to their heading
- [ ] All dynamic text regions have `aria-live="polite"`
- [ ] Any SVG chart has `role="img"`, a `<title>`, and a `<desc>`; the same information appears in a plain-text event log or summary paragraph
- [ ] Phase transitions move keyboard focus to the newly revealed section (use `tabindex="-1"` + `.focus()`)
- [ ] All buttons have visible disabled state and `disabled` attribute when not usable
- [ ] Color is not the only differentiator for any state (phase markers must also have text labels)
- [ ] `@media (prefers-reduced-motion)` suppresses transitions in labs.css
- [ ] The lab is operable without a mouse (tab order follows reading order, all controls keyboard-reachable)

---

## CSS and JS conventions

- Styles: `docs/css/labs.css` (inherits variables from `docs/css/style.css`; do not duplicate variables)
- Lab JS: `docs/js/labs-[lab-name].js` — one file per lab, IIFE pattern, strict mode, no framework dependencies
- State is a plain JS object; save/restore via `sessionStorage.setItem/getItem` with a unique `STORAGE_KEY` per lab
- `renderAll()` is called after every state change; renders from state, never reads back from DOM
- `restoreState()` runs on `DOMContentLoaded` before `renderAll()`

---

## Callout classes available in labs

Inherited from `docs/css/style.css`:

| Class | Color | Use for |
|---|---|---|
| `callout--objectives` | Teal | Learning objectives (chapters only — do not use in labs) |
| `callout--think-about-it` | Purple | Instructor notes, discussion prompts |
| `callout--stop-retrieve` | Green | Retrieval practice |
| `callout--do-not-confuse` | Pink | Distinction panels |
| `callout--misconception` | Amber | Misconception openers |
| `callout--classic-study` | Red | Classic study walkthroughs |
| `callout--ai-connection` | Cyan | AI connections |

Defined in `docs/css/labs.css`:

| Class | Color | Use for |
|---|---|---|
| `callout--note` | Gray | Privacy notices, informational context, concept reveals |

---

## File naming

```
docs/labs/
  index.html                        — conceptual-map index (psychological function grouping)
  lab-design-spec.md                — this file
  assets/                           — shared assets if needed (currently unused; styles/JS are per-chapter)
  ch02/
    correlation-causation.html
  ch06/
    index.html
    process-s-process-c.html
    sleep-state-detective.html
  ch07/
    classical-conditioning.html
```

Future labs follow the same `ch##/descriptor.html` pattern.
