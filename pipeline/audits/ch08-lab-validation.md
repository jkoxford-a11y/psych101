# Chapter 8 Learning Lab Validation

**Date:** 2026-07-17  
**Scope:** Chapter 8 lab wiring, live interaction, narrow defect repair, and Self-Reference Effect disposition  
**Repository state tested:** `main` at `fce6a67`, plus the repairs recorded below

## Outcome

Levels of Processing and Interactive Imagery passed the exercised functional, state-restoration, feedback, focus-transition, navigation-path, console, and responsive-layout checks at 1440 × 900, 390 × 844, and 844 × 390. Live testing exposed and repaired rapid double-submission in both labs. Interactive Imagery also had one malformed Round 1 score sentence, which was repaired.

The automated browser controller could not synthesize Tab/Enter/Space navigation reliably. Native controls, semantic grouping, labels, button states, visible focus after every scripted phase transition, and logical programmatic focus movement were verified in the live pages. Jonathan K. Oxford subsequently completed the required human keyboard-only pass for both wired labs, including Tab/Shift+Tab navigation and Enter/Space activation, and reported that both labs worked correctly. The accessibility validation item is therefore closed.

## Files inspected

- `AGENTS.md`, `HANDOFF.md`, `GPT_project_log.md`, and `PROJECT_BACKLOG.md`
- `docs/labs/lab-design-spec.md`
- `pipeline/audits/ch08-pre-review-audit.md`
- `pipeline/work-orders/ch08-lab-integration.md`
- `source/chapters/ch08-memory.md`
- `docs/chapters/08-memory.html`
- `docs/labs/index.html`
- all three Chapter 8 lab HTML files and their three lab-specific JavaScript files
- `docs/js/nav.js` and the local sidebar navigation rendered into each lab

## Wiring and path verification

- `source/chapters/ch08-memory.md` links Levels of Processing once after Figure 8.3 and Interactive Imagery once after the spacing/testing paragraph.
- `docs/chapters/08-memory.html` contains the matching links at the same conceptual locations with correct generated paths.
- Self-Reference Effect appears in `docs/labs/index.html` and is absent from both Chapter 8 source and generated HTML.
- Every local `href` and `src` in the two wired labs, the self-reference lab, the Chapter 8 page, and the lab index resolved. Lab stylesheets, sidebar/navigation scripts, and lab-specific scripts all loaded from the expected local paths.
- Each lab exposes a visible Learning Labs link and a Chapter 8 sidebar link. The lab-index link was activated successfully in the live browser. The Chapter 8 link has the correct resolved URL and the destination returned HTTP 200; the automation surface did not activate that one sidebar link despite activating the neighboring lab-index link, so its path and destination were verified directly as well.

## Live test matrix

### Levels of Processing — pass

| Check | 1440 × 900 | 390 × 844 | 844 × 390 |
|---|---|---|---|
| Initial instructions, privacy, prediction gating | Pass | Pass | Pass |
| 30 encoding judgments, 8 distractors, 60 recognition items | Pass | Pass | Pass |
| Event logs and result/false-alarm feedback | Pass (30/60 log entries) | Pass | Pass |
| Mid-session reload and restoration | Pass at encoding item 3 | State logic re-exercised in completed run | State logic re-exercised in completed run |
| Explanation gate, transfer save, completion reload | Pass | Same responsive completion UI exercised | Same responsive completion UI exercised |
| Restart/reset | Pass | Shared reset implementation | Shared reset implementation |
| Focus movement | Encoding, distractor, recognition, explanation, and transfer headings verified | Explanation heading visibly focused | Explanation heading visibly focused |
| Rapid double-click | Reproduced two-step skip before repair; one step after repair | Repaired code exercised | Repaired code exercised |
| Page-level horizontal overflow | None | None; results table scrolls inside `.table-wrap` | None |
| Console errors/warnings | None | None observed | None |
| Human keyboard-only operation | Pass | Pass | Pass |

### Interactive Imagery — pass

| Check | 1440 × 900 | 390 × 844 | 844 × 390 |
|---|---|---|---|
| Initial instructions, privacy, prediction gating | Pass | Pass | Pass |
| Natural, interactive, and bizarre branches | Pass | Pass | Pass |
| Required three-word scene descriptions | Pass; empty/too-short response blocked | Pass | Pass |
| Distractors, cued recall, baseline strategy, reflection | Pass | Pass | Pass |
| Round feedback and final three-round results | Pass after wording repair | Pass | Pass |
| Mid-session reload and restoration | Pass at Round 1 study pair 4 | State logic re-exercised in completed run | State logic re-exercised in completed run |
| Explanation gate, transfer save, completion reload | Pass | Same responsive completion UI exercised | Same responsive completion UI exercised |
| Restart/reset | Pass | Shared reset implementation | Shared reset implementation |
| Focus movement | Study, distractor, recall, summary, results, and transfer headings verified | Results heading visibly focused | Results heading visibly focused |
| Rapid double-click | Reproduced two-pair skip before repair; one pair after repair | Repaired code exercised | Repaired code exercised |
| Page-level horizontal overflow | None | None; results table scrolls inside `.table-wrap` | None |
| Console errors/warnings | None | None observed | None |
| Human keyboard-only operation | Pass | Pass | Pass |

## Defects and repairs

1. **Rapid input skipped trials in both wired labs.** A double-click on an encoding/recognition control in Levels of Processing advanced two items; a double-click on Next Pair in Interactive Imagery advanced two pairs. Added a 300 ms lab-local interaction lock, reflected in disabled button states, to accept one advancing action at a time. Retesting recorded exactly one item for a double-click.
2. **Malformed Interactive Imagery feedback.** Round 1 reported “in the your own strategy round.” The sentence now reports “in your own-strategy round”; later rounds retain “in the interactive scene round” and “in the bizarre interaction round.”

Changed implementation files:

- `docs/js/labs-levels-of-processing.js`
- `docs/js/labs-interactive-imagery.js`

No chapter prose, generated chapter HTML, shared CSS/JavaScript, figures, or other chapters changed.

## Self-Reference Effect recommendation

**Keep index-only.** The lab follows the six-phase design, uses session-only storage, avoids storing trait endorsements, offers a skip path, reports false alarms, rejects personality-test interpretation, and teaches the self-reference effect responsibly. It also introduces `self-schema`, which is not part of Chapter 8’s current core architecture or learning objectives. The lab is useful optional enrichment, but wiring it into the chapter would add a new concept and interrupt an already dense encoding section without filling a current chapter gap better than the two approved labs.

## Static validation

- JavaScript syntax checks passed for all three Chapter 8 lab scripts.
- `pipeline/lint_chapters.py docs/chapters/08-memory.html`: 0 failures, 0 warnings.
- Local-link/asset scan: 0 broken references across the Chapter 8 labs, Chapter 8 HTML, and lab index.
- Source/HTML link counts and Self-Reference index-only status verified.
- No bad ` ? ` separator mojibake found in the scoped Chapter 8 files.
- `git diff --check` passed.
- Final diff review found only the two lab-specific repairs, this validation record, and the narrowed Chapter 8 backlog item.
- Human keyboard-only testing passed for both wired labs.

## Final status

**Complete and validated.** No unresolved Chapter 8 lab defect or placement decision remains. Levels of Processing and Interactive Imagery remain wired in Chapter 8; Self-Reference Effect remains index-only.