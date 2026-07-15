#!/usr/bin/env python3
"""Finalize and validate the Chapter 13 canonical revision branch."""
from __future__ import annotations

from pathlib import Path
import hashlib
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
GENERATOR = ROOT / "pipeline/build_ch13_html.py"
SOURCE = ROOT / "source/chapters/ch13-psychological-disorders-therapy.md"
HTML = ROOT / "docs/chapters/13-disorders-therapy.html"
INVENTORY = ROOT / "source/visuals-inventory.md"
HANDOFF = ROOT / "HANDOFF.md"
LOG = ROOT / "GPT_project_log.md"
LAB = ROOT / "docs/labs/ch13/diagnosis-under-uncertainty.html"
LAB_JS = ROOT / "docs/js/labs-diagnosis-under-uncertainty.js"

FIGURES = [
    "ch13_maintenance_lens_bounded.svg",
    "ch13_diagnostic_evidence_questions.svg",
    "fig_diagnosis_is_not_a_cause_flowchart.png",
    "ch13_vulnerability_context_probabilistic.svg",
    "ch13_anxiety_avoidance_learning_loop.svg",
    "fig_depression_maintenance_loop.png",
    "fig_schizophrenia_positive_negative_symptoms.png",
    "ch13_treatment_selection_evidence_context.svg",
]


def patch_generator() -> None:
    text = GENERATOR.read_text(encoding="utf-8")
    text = text.replace(
        '        base = slugify(heading.get_text(" ", strip=True))\n',
        '        heading_text = heading.get_text(" ", strip=True)\n'
        '        base = "connections" if heading_text == "Connections to Other Chapters" else slugify(heading_text)\n',
    )
    text = text.replace(
        '    connections = soup.find("h2", id="connections-to-other-chapters")\n',
        '    connections = soup.find("h2", id="connections")\n',
    )
    GENERATOR.write_text(text, encoding="utf-8")


def build_twice() -> None:
    command = [sys.executable, str(GENERATOR)]
    subprocess.run(command, cwd=ROOT, check=True)
    first = hashlib.sha256(HTML.read_bytes()).hexdigest()
    subprocess.run(command, cwd=ROOT, check=True)
    second = hashlib.sha256(HTML.read_bytes()).hexdigest()
    assert first == second, "Chapter 13 generator is not idempotent"


def patch_inventory() -> None:
    text = INVENTORY.read_text(encoding="utf-8")
    replacement = """## Chapter 13 — Psychological Disorders & Therapy

Eight figures are wired in the canonical source and regenerated HTML. `docs/images/ch13/README_captions_alt_text_attribution.md` is authoritative for captions, alt text, creation method, attribution, licensing, public-sharing status, caveats, and retired assets. The former binary AI-versus-therapist figure is replaced by a product-type/governance table in the chapter.

| # | Description | Status | Filename / note |
|---|-------------|--------|-----------------|
| 13.1 | Bounded maintenance lens for selected avoidance, compulsion, trauma-learning, and withdrawal loops | ✅ wired/use now | `ch13/ch13_maintenance_lens_bounded.svg` |
| 13.2 | Diagnostic evidence questions; 3Ds as introductory heuristic rather than required intersection | ✅ wired/use now | `ch13/ch13_diagnostic_evidence_questions.svg` |
| 13.3 | Diagnosis is not a cause flowchart | ✅ wired/use now | `ch13/fig_diagnosis_is_not_a_cause_flowchart.png` |
| 13.4 | Vulnerability, stress, supports, and changing probability | ✅ wired/use now | `ch13/ch13_vulnerability_context_probabilistic.svg` |
| 13.5 | Avoidance, immediate relief, and corrective learning | ✅ wired/use now | `ch13/ch13_anxiety_avoidance_learning_loop.svg` |
| 13.6 | Behavioral-withdrawal maintenance loop in depression | ✅ wired/use now | `ch13/fig_depression_maintenance_loop.png` |
| 13.7 | Schizophrenia positive versus negative symptoms | ✅ wired/use now | `ch13/fig_schizophrenia_positive_negative_symptoms.png` |
| 13.8 | Treatment selection by condition, evidence, risks, and client context | ✅ wired/use now | `ch13/ch13_treatment_selection_evidence_context.svg` |
| — | Mental-health AI product types, evidence, privacy, and governance | ✅ prose/table | No figure; `fig_ai_vs_therapist_comparison.png` is retired and unwired |

The older adaptive-response arc, 3D Venn, fixed diathesis threshold, anxiety-extinction loop, psychotherapy-centered treatment map, and AI-versus-therapist comparison remain only as provenance assets. They are not approved or wired.

---

## Current completion plan"""
    pattern = r"## Chapter 13 — Psychological Disorders & Therapy\n.*?\n---\n\n## Current completion plan"
    revised, count = re.subn(pattern, replacement, text, flags=re.S)
    assert count == 1, f"Expected one Chapter 13 inventory block, found {count}"
    revised = revised.replace(
        "- Ch6/7/9/12/13: optional figures only; do not block core completion.",
        "- Ch6/7/9/12: optional figures only; do not block core completion. Ch13 is closed pending whole-book release checks.",
    )
    INVENTORY.write_text(revised, encoding="utf-8")


def write_handoff() -> None:
    HANDOFF.write_text("""# Psych101 — Current Handoff

**Last updated:** 2026-07-15 (Chapter 13 canonical revision)
**Canonical repository:** `C:\\GitHub\\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapters 2 and 9–13 — canonical revision work complete

Chapter 2 and Chapters 9–13 have completed their current audit/revision cycles. Do not reopen Chapters 9–13 unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 13 — Psychological Disorders & Therapy

The canonical source is `source/chapters/ch13-psychological-disorders-therapy.md`; generated output is `docs/chapters/13-disorders-therapy.html`.

Settled decisions implemented:

- Diagnosis is classification under uncertainty, not a causal explanation or automatic treatment prescription.
- The 3Ds remain only as preliminary questions; duration, impairment, culture/development, exclusions, differential diagnosis, and clinical judgment carry the diagnostic foundation.
- The adaptive-process idea is bounded to selected maintenance loops, not used as a general theory of disorder.
- The opener is an original progressive-disclosure composite case. DSM reliability versus validity and diagnostic overshadowing carry the evidence; Rosenhan remains only as a brief contested historical note.
- Disorder-specific biological claims are calibrated as associations, candidate mechanisms, or subgroup findings rather than neat causal explanations.
- A compact substance-use-disorders subsection distinguishes use, physiological adaptation, impairment, and treatment.
- Psychotherapy evidence integrates alliance and condition-specific technique without a universal Dodo Bird hierarchy. Medication and ECT are treated as separate evidence/risk/context decisions.
- The AI section distinguishes general chatbots, wellness products, evaluated digital interventions, clinician-integrated systems, and regulated products; evidence, privacy, governance, and accountability are product-specific.
- The chapter has five objectives, retrieval interruptions in all four major sections, ten mixed review questions, an alphabetized eighteen-term glossary, and the required ending sequence.

Eight figures are wired and documented in `docs/images/ch13/README_captions_alt_text_attribution.md`. Five are new original programmatic SVGs; three existing original figures were retained. Six misleading older assets are retired and unwired.

The standalone lab is complete at `docs/labs/ch13/diagnosis-under-uncertainty.html` with `docs/js/labs-diagnosis-under-uncertainty.js`. It uses fictional composite cases, progressive evidence disclosure, gated explanation and transfer, session-only storage, no identifiers or diagnostic score, and no network submission. It is linked from the chapter and labs index.

A reproducible narrow generator now lives at `pipeline/build_ch13_html.py`. The shared mobile figure overflow repair is loaded through `docs/js/sidebar.js` from `docs/css/mobile-figure-fix.css`.

## Immediate next actions

1. Run the planned repository-wide lint, source/HTML parity, links, figures, and alt-text audit.
2. Review the deployed GitHub Pages site after publication, including all Chapter 13 figures, expandable behavior, lab gates, and navigation.
3. Perform actual-phone checks in portrait and landscape before calling the book release-ready.

## Important files

- `source/chapters/ch13-psychological-disorders-therapy.md`
- `docs/chapters/13-disorders-therapy.html`
- `docs/images/ch13/README_captions_alt_text_attribution.md`
- `docs/labs/ch13/diagnosis-under-uncertainty.html`
- `docs/js/labs-diagnosis-under-uncertainty.js`
- `pipeline/build_ch13_html.py`
- `source/visuals-inventory.md`
- `PROJECT_BACKLOG.md`
""", encoding="utf-8")


def update_log() -> None:
    text = LOG.read_text(encoding="utf-8")
    marker = "### 2026-07-15 - Chapter 13 Canonical Revision"
    if marker in text:
        return
    entry = """### 2026-07-15 - Chapter 13 Canonical Revision

- **Scope:** Completed the canonical Chapter 13 revision from `pipeline/audits/ch13-pre-review-audit.md` after Jon settled the five architectural decisions. Revised the authoritative Markdown, regenerated the chapter HTML through a checked-in narrow generator, rebuilt the figure set, added a standalone clinical-reasoning lab, repaired shared mobile figure overflow, and reconciled project state.
- **Editorial decisions implemented:** diagnosis now classifies without serving as cause or treatment; the 3Ds are a preliminary heuristic; the adaptive-process framing is limited to selected maintenance loops; Rosenhan was replaced as the main teaching structure by a progressive-disclosure composite case plus reliability/validity and diagnostic-overshadowing evidence; substance-use disorders were added compactly; psychotherapy evidence now integrates alliance and condition-specific technique; medication and ECT qualifications were corrected; mental-health AI is organized by product type, evidence, privacy, governance, and clinical integration.
- **Learning architecture:** consolidated to five objectives; added retrieval and discrimination prompts across four sections; built ten mixed multiple-choice/open-response review questions with hidden rationales; reduced and alphabetized the glossary; preserved Summary → Connections → Review → Key Terms → Further Reading → References.
- **Figures:** wired eight documented figures. Added five original programmatic SVGs for the bounded maintenance lens, diagnostic evidence, probabilistic vulnerability/context, avoidance/corrective learning, and treatment selection. Retained diagnosis-not-cause, depression-withdrawal, and schizophrenia-symptom figures. Retired and unwired six misleading older assets, including the binary AI-versus-therapist comparison.
- **Learning Lab:** added `docs/labs/ch13/diagnosis-under-uncertainty.html` and `docs/js/labs-diagnosis-under-uncertainty.js`. The lab uses fictional composites, a committed prediction, five sequential disclosures, immediate mechanism feedback, gated explanation, transfer, completion summary, sessionStorage only, no identifiers, no diagnostic score, and no network submission.
- **Rendering/workflow:** added `pipeline/build_ch13_html.py`; generated `docs/chapters/13-disorders-therapy.html`; added `docs/css/mobile-figure-fix.css` and loaded it through the shared sidebar script; added the Chapter 13 lab to `docs/labs/index.html`; reconciled `source/visuals-inventory.md` and `HANDOFF.md`.
- **Validation:** generator idempotence; Chapter 13 linter; HTML section/order, review/details, callout, figure/fallback, alt-text, mojibake, and local-link checks; SVG XML parsing; JavaScript syntax checks; lab privacy/storage/ARIA/static phase checks. Live GitHub Pages and actual-phone interaction checks remain part of the whole-book release audit.

"""
    text = text.replace("## Log Entries\n\n", "## Log Entries\n\n" + entry, 1)
    LOG.write_text(text, encoding="utf-8")


def check_local_links(page: Path, soup: BeautifulSoup) -> None:
    for node in soup.find_all(["a", "img", "script", "link"]):
        attr = "href" if node.name in {"a", "link"} else "src"
        value = node.get(attr)
        if not value or value.startswith(("http://", "https://", "#", "mailto:", "data:")):
            continue
        resolved = (page.parent / value).resolve()
        assert resolved.exists(), f"Broken local {attr}: {page} -> {value}"


def validate() -> None:
    source = SOURCE.read_text(encoding="utf-8")
    raw = HTML.read_text(encoding="utf-8")
    soup = BeautifulSoup(raw, "html.parser")

    required_ids = [
        "where-this-fits", "learning-objectives", "chapter-summary", "connections",
        "review-questions", "key-terms", "further-reading", "references",
    ]
    ids = [h.get("id") for h in soup.find_all("h2")]
    for ident in required_ids:
        assert ident in ids, f"Missing h2 id {ident}"
    positions = [ids.index(ident) for ident in required_ids]
    assert positions == sorted(positions), "Required section order is wrong"

    assert len(soup.select("figure.chapter-figure")) == 8
    assert len(soup.select(".review-q")) == 10
    assert len(soup.find_all("details")) == 10
    assert len(soup.select(".callout--stop-retrieve")) >= 4
    assert len(soup.select(".callout--think-about-it")) >= 4
    assert len(soup.select(".callout--do-not-confuse")) >= 3
    assert len(soup.select("dl.key-terms dt")) == 18
    assert len(soup.select("h2#connections + table tbody tr")) >= 8
    assert " ? " not in raw
    assert "not independently verified" not in raw.lower()
    assert "Sourcing note" not in raw
    assert "fig_ai_vs_therapist_comparison" not in raw
    assert "fig_diagnostic_criteria_3d_model" not in raw
    assert "strongest predictor" not in source.lower()

    image_names = []
    for figure in soup.select("figure.chapter-figure"):
        image = figure.find("img")
        toggle = figure.find("a", class_="figure-expand-toggle")
        assert image and image.get("alt", "").strip()
        assert not image["alt"].lstrip().startswith("-")
        assert toggle and toggle.get("href") == image.get("src")
        image_names.append(Path(image["src"]).name)
    assert image_names == FIGURES

    check_local_links(HTML, soup)

    lab_raw = LAB.read_text(encoding="utf-8")
    lab_soup = BeautifulSoup(lab_raw, "html.parser")
    for phase in range(1, 7):
        assert f"Phase {phase} of 6" in lab_raw
    for section in lab_soup.find_all("section", attrs={"aria-labelledby": True}):
        assert lab_soup.find(id=section["aria-labelledby"]), f"Missing aria-labelledby target {section['aria-labelledby']}"
    check_local_links(LAB, lab_soup)

    lab_js = LAB_JS.read_text(encoding="utf-8")
    assert "sessionStorage" in lab_js
    assert "localStorage" not in lab_js
    for forbidden in ("fetch(", "XMLHttpRequest", "WebSocket", "sendBeacon"):
        assert forbidden not in lab_js
    assert lab_js.count("title: '") == 5
    assert "diagnostic score" not in lab_raw.lower()

    for filename in FIGURES:
        path = ROOT / "docs/images/ch13" / filename
        assert path.exists(), f"Missing figure {filename}"
        if path.suffix == ".svg":
            ET.parse(path)

    body_start = source.index("## Section 1:")
    body_end = source.index("## Chapter Summary")
    body_words = len(re.findall(r"\b[\w’'-]+\b", source[body_start:body_end]))
    assert 3500 <= body_words <= 5200, f"Body word count {body_words} outside target"

    sidebar = (ROOT / "docs/js/sidebar.js").read_text(encoding="utf-8")
    assert "mobile-figure-fix.css" in sidebar
    assert "Psychological Disorders & Therapy" in sidebar

    print(f"Static Chapter 13 validation passed; body words={body_words}.")


def main() -> None:
    patch_generator()
    build_twice()
    patch_inventory()
    write_handoff()
    update_log()
    validate()


if __name__ == "__main__":
    main()
