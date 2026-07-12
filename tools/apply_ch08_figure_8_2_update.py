#!/usr/bin/env python3
"""One-time synchronization for Chapter 8 Figure 8.2.

Updates the chapter source, generated HTML, figure specification, inventory,
wiring record, and metadata so all describe Baddeley's four-component working-
memory model, including the episodic buffer and its connection to long-term
memory. The script removes itself and its temporary workflow after succeeding.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def write(rel: str, text: str) -> None:
    (ROOT / rel).write_text(text, encoding="utf-8", newline="\n")


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"{label}: expected exactly one match, found {count}")
    return text.replace(old, new, 1)


# ---------------------------------------------------------------------------
# 1. Authoritative chapter source
# ---------------------------------------------------------------------------
source_path = "source/chapters/ch08-memory.md"
source = read(source_path)

old_source_paragraph = '''That manipulation requirement is the seam between simple short-term storage and something more demanding. Alan Baddeley and Graham Hitch argued that "short-term memory" as a single passive box couldn't account for tasks that require *holding* information while simultaneously *doing something with it* — following directions while also remembering what was just said, doing mental arithmetic, comprehending a sentence whose meaning depends on its first half while reading its second half. Their alternative, **working memory**, proposes a multi-component system: a **central executive** that allocates attention and coordinates the rest of the system, a **phonological loop** that holds verbal/acoustic information, and a **visuospatial sketchpad** that holds visual and spatial information (Baddeley & Hitch, 1974). Working memory is the cognitive workspace you're using right now to hold the beginning of this sentence in mind while reading its end — and individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly.'''

new_source_paragraph = '''That manipulation requirement is the seam between simple short-term storage and something more demanding. Alan Baddeley and Graham Hitch argued that "short-term memory" as a single passive box couldn't account for tasks that require *holding* information while simultaneously *doing something with it* — following directions while also remembering what was just said, doing mental arithmetic, comprehending a sentence whose meaning depends on its first half while reading its second half. Their alternative, **working memory**, proposed a multi-component system. The original model distinguished a **central executive** that allocates attention and coordinates the rest of the system, a **phonological loop** that maintains verbal and acoustic information, and a **visuospatial sketchpad** that maintains visual and spatial information (Baddeley & Hitch, 1974).

Baddeley later added an **episodic buffer**: a limited temporary workspace that binds information from those specialized systems with relevant knowledge retrieved from long-term memory into one coherent representation (Baddeley, 2000). Imagine following spoken directions across a familiar campus: the phonological loop keeps the street names active, the visuospatial sketchpad holds the route, and the episodic buffer combines both with what you already know about the campus. Do not confuse the episodic buffer with episodic long-term memory. The buffer temporarily integrates information; episodic memory stores autobiographical events. Working memory is the cognitive workspace you're using right now to hold the beginning of this sentence in mind while reading its end — and individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly.'''

old_source_figure = '''![Figure 8.2 — A hub-and-spoke diagram shows the Central Executive at the top, with arrows connecting it to two subsystems below: the Phonological Loop, labeled as holding verbal and acoustic information, and the Visuospatial Sketchpad, labeled as holding visual and spatial information. The arrows indicate active coordination between the executive and both subsystems.](../images/ch08/ch08_baddeley_working_memory_model.svg)
*Figure 8.2. Baddeley and Hitch's working memory model replaces a single passive short-term store with an active system: a central executive that allocates attention and coordinates the rest of the system, a phonological loop that holds verbal and acoustic information, and a visuospatial sketchpad that holds visual and spatial information. This chapter's text uses only these three components.*'''

new_source_figure = '''![Figure 8.2 — A cognitive-architecture diagram shows the Central Executive at the top coordinating three components below: the Phonological Loop for verbal and acoustic information, the Episodic Buffer as a temporary binding workspace, and the Visuospatial Sketchpad for visual and spatial information. Bidirectional arrows connect the components. Long-Term Memory appears below the episodic buffer, showing that relevant stored knowledge can be incorporated into a temporary integrated representation.](../images/ch08/ch08_baddeley_working_memory_model.svg)
*Figure 8.2. Baddeley's working-memory model replaces a single passive short-term store with an active system. The central executive coordinates attention; the phonological loop maintains verbal and acoustic information; the visuospatial sketchpad maintains visual and spatial information; and the episodic buffer temporarily binds those contents with relevant long-term knowledge into a coherent representation. The episodic buffer is not the same as episodic long-term memory.*'''

old_source_prompt = '''> **Think About It:** Try holding a phone number in mind for ten seconds while someone talks to you about something unrelated. What happens to the number? Which component of Baddeley's model — the phonological loop, the visuospatial sketchpad, or the central executive — do you think is being disrupted, and why?'''

new_source_prompt = '''> **Think About It:** Try holding a phone number in mind for ten seconds while someone talks to you about something unrelated. What happens to the number? Which part is most directly disrupted — the phonological loop, the central executive, or both — and why? Now picture where each digit sits on a keypad while keeping the number active. Which component would bind the verbal and visual information into one temporary representation?'''

source = replace_once(source, old_source_paragraph, new_source_paragraph, "chapter working-memory prose")
source = replace_once(source, old_source_figure, new_source_figure, "chapter Figure 8.2 block")
source = replace_once(source, old_source_prompt, new_source_prompt, "chapter Figure 8.2 retrieval prompt")
write(source_path, source)


# ---------------------------------------------------------------------------
# 2. Generated HTML (no checked-in chapter generator exists; narrow parity repair)
# ---------------------------------------------------------------------------
html_path = "docs/chapters/08-memory.html"
html = read(html_path)

old_html_paragraph = '''    <p>That manipulation requirement is the seam between simple short-term storage and something more demanding. Alan Baddeley and Graham Hitch argued that "short-term memory" as a single passive box couldn't account for tasks that require <em>holding</em> information while simultaneously <em>doing something with it</em> — following directions while also remembering what was just said, doing mental arithmetic, comprehending a sentence whose meaning depends on its first half while reading its second half. Their alternative, <strong>working memory</strong>, proposes a multi-component system: a <strong>central executive</strong> that allocates attention and coordinates the rest of the system, a <strong>phonological loop</strong> that holds verbal/acoustic information, and a <strong>visuospatial sketchpad</strong> that holds visual and spatial information (Baddeley &amp; Hitch, 1974). Working memory is the cognitive workspace you're using right now to hold the beginning of this sentence in mind while reading its end — and individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly.</p>'''

new_html_paragraph = '''    <p>That manipulation requirement is the seam between simple short-term storage and something more demanding. Alan Baddeley and Graham Hitch argued that "short-term memory" as a single passive box couldn't account for tasks that require <em>holding</em> information while simultaneously <em>doing something with it</em> — following directions while also remembering what was just said, doing mental arithmetic, comprehending a sentence whose meaning depends on its first half while reading its second half. Their alternative, <strong>working memory</strong>, proposed a multi-component system. The original model distinguished a <strong>central executive</strong> that allocates attention and coordinates the rest of the system, a <strong>phonological loop</strong> that maintains verbal and acoustic information, and a <strong>visuospatial sketchpad</strong> that maintains visual and spatial information (Baddeley &amp; Hitch, 1974).</p>
    <p>Baddeley later added an <strong>episodic buffer</strong>: a limited temporary workspace that binds information from those specialized systems with relevant knowledge retrieved from long-term memory into one coherent representation (Baddeley, 2000). Imagine following spoken directions across a familiar campus: the phonological loop keeps the street names active, the visuospatial sketchpad holds the route, and the episodic buffer combines both with what you already know about the campus. Do not confuse the episodic buffer with episodic long-term memory. The buffer temporarily integrates information; episodic memory stores autobiographical events. Working memory is the cognitive workspace you're using right now to hold the beginning of this sentence in mind while reading its end — and individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly.</p>'''

old_html_img = '''      <img src="../images/ch08/ch08_baddeley_working_memory_model.svg" alt="A hub-and-spoke diagram shows the Central Executive at the top, with arrows connecting it to two subsystems below: the Phonological Loop, labeled as holding verbal and acoustic information, and the Visuospatial Sketchpad, labeled as holding visual and spatial information. The arrows indicate active coordination between the executive and both subsystems." />'''
new_html_img = '''      <img src="../images/ch08/ch08_baddeley_working_memory_model.svg" alt="A cognitive-architecture diagram shows the Central Executive at the top coordinating three components below: the Phonological Loop for verbal and acoustic information, the Episodic Buffer as a temporary binding workspace, and the Visuospatial Sketchpad for visual and spatial information. Bidirectional arrows connect the components. Long-Term Memory appears below the episodic buffer, showing that relevant stored knowledge can be incorporated into a temporary integrated representation." />'''

old_html_caption = '''      <figcaption><strong>Figure 8.2.</strong> Baddeley and Hitch's working memory model replaces a single passive short-term store with an active system: a central executive that allocates attention and coordinates the rest of the system, a phonological loop that holds verbal and acoustic information, and a visuospatial sketchpad that holds visual and spatial information. This chapter's text uses only these three components.</figcaption>'''
new_html_caption = '''      <figcaption><strong>Figure 8.2.</strong> Baddeley's working-memory model replaces a single passive short-term store with an active system. The central executive coordinates attention; the phonological loop maintains verbal and acoustic information; the visuospatial sketchpad maintains visual and spatial information; and the episodic buffer temporarily binds those contents with relevant long-term knowledge into a coherent representation. The episodic buffer is not the same as episodic long-term memory.</figcaption>'''

old_html_prompt = '''      <p>Try holding a phone number in mind for ten seconds while someone talks to you about something unrelated. What happens to the number? Which component of Baddeley's model — the phonological loop, the visuospatial sketchpad, or the central executive — do you think is being disrupted, and why?</p>'''
new_html_prompt = '''      <p>Try holding a phone number in mind for ten seconds while someone talks to you about something unrelated. What happens to the number? Which part is most directly disrupted — the phonological loop, the central executive, or both — and why? Now picture where each digit sits on a keypad while keeping the number active. Which component would bind the verbal and visual information into one temporary representation?</p>'''

html = replace_once(html, old_html_paragraph, new_html_paragraph, "HTML working-memory prose")
html = replace_once(html, old_html_img, new_html_img, "HTML Figure 8.2 alt text")
html = replace_once(html, old_html_caption, new_html_caption, "HTML Figure 8.2 caption")
html = replace_once(html, old_html_prompt, new_html_prompt, "HTML Figure 8.2 retrieval prompt")
write(html_path, html)


# ---------------------------------------------------------------------------
# 3. Figure specification
# ---------------------------------------------------------------------------
spec_path = "docs/images/ch08/ch08_figure_specs.md"
spec = read(spec_path)

new_spec_section = r'''# 2. Baddeley's Working Memory Model

## Filename
`ch08_baddeley_working_memory_model.svg`

## Placement
Section 1, immediately after the revised working-memory discussion ending: *"...individual differences in working memory capacity turn out to predict a surprisingly wide range of cognitive abilities, a connection Chapter 9 picks up directly."*

## Core teaching idea
Working memory is not one passive storage box. It is an active system in which specialized components maintain verbal and visual-spatial information, while the episodic buffer temporarily binds those contents with relevant long-term knowledge into one coherent representation.

## Layout
Use a layered hub-and-component diagram rather than the earlier three-spoke version:

1. **Central Executive** at top center (orange/red accent) — allocates attention and coordinates the system.
2. Middle row, left to right:
   - **Phonological Loop** (light blue) — verbal/acoustic information; rehearsing words or sounds.
   - **Episodic Buffer** (neutral white with orange/red outline) — temporary binding workspace; combines words, images, and relevant long-term knowledge.
   - **Visuospatial Sketchpad** (light blue) — visual/spatial information; picturing objects or routes.
3. **Long-Term Memory** below the episodic buffer (neutral white) — relevant stored knowledge.

Use bidirectional arrows from the central executive to all three working-memory components. Connect the episodic buffer bidirectionally to the phonological loop, visuospatial sketchpad, and long-term memory. The figure should show coordination and binding, not a one-way processing pipeline.

## Required labels
- Central Executive — "allocates attention; coordinates the system"
- Phonological Loop — "verbal / acoustic information"
- Episodic Buffer — "temporary binding workspace"
- Visuospatial Sketchpad — "visual / spatial information"
- Long-Term Memory — "relevant stored knowledge"
- Bottom key-idea pill: **"The episodic buffer binds information temporarily; it is not the same as episodic long-term memory."**

## Text to avoid
- Do not subdivide the phonological loop into a phonological store and articulatory rehearsal process.
- Do not subdivide the visuospatial sketchpad into a visual cache and inner scribe.
- Do not equate the episodic buffer with episodic long-term memory.
- Do not label boxes as brain regions or add a brain outline.

## Accuracy constraints
- Present the episodic buffer as a later addition to Baddeley's model, not as part of the original 1974 Baddeley-Hitch proposal.
- Show the buffer integrating information from the specialized systems and relevant long-term memory; do not depict it as a permanent store.
- Keep all major relationships bidirectional. The central executive coordinates activity; the other components are not simply passive destinations for one-way commands.
- Keep the figure cognitive rather than anatomical. Section 2 separately covers hippocampal and systems-level biology.
- Preserve one hard idea: specialized maintenance plus temporary binding. Do not add further subcomponents.

## Caption draft
Baddeley's working-memory model replaces a single passive short-term store with an active system. The central executive coordinates attention; the phonological loop maintains verbal and acoustic information; the visuospatial sketchpad maintains visual and spatial information; and the episodic buffer temporarily binds those contents with relevant long-term knowledge into a coherent representation. The episodic buffer is not the same as episodic long-term memory.

## Alt text draft
A cognitive-architecture diagram shows the Central Executive at the top coordinating three components below: the Phonological Loop for verbal and acoustic information, the Episodic Buffer as a temporary binding workspace, and the Visuospatial Sketchpad for visual and spatial information. Bidirectional arrows connect the components. Long-Term Memory appears below the episodic buffer, showing that relevant stored knowledge can be incorporated into a temporary integrated representation.

## Attribution
Original figure, hand-coded SVG for Oxford Psychology 101, 2026. Safe for public sharing.
'''

spec_pattern = re.compile(
    r"# 2\. Baddeley's Working Memory Model\n.*?\n---\n\n# 3\. Levels of Processing: Shallow to Deep",
    re.DOTALL,
)
if len(spec_pattern.findall(spec)) != 1:
    raise RuntimeError("figure spec: could not isolate exactly one Figure 8.2 section")
spec = spec_pattern.sub(new_spec_section + "\n---\n\n# 3. Levels of Processing: Shallow to Deep", spec, count=1)
write(spec_path, spec)


# ---------------------------------------------------------------------------
# 4. Inventory and wiring record
# ---------------------------------------------------------------------------
inventory_path = "source/visuals-inventory.md"
inventory = read(inventory_path)
inventory = replace_once(
    inventory,
    "| 8.2 | Baddeley's working memory model | ✅ wired | `ch08_baddeley_working_memory_model.svg` — wired into Section 1; no episodic buffer, matching chapter text. |",
    "| 8.2 | Baddeley's working memory model | ✅ wired — revised | `ch08_baddeley_working_memory_model.svg` — four-component model with episodic buffer and long-term-memory connection; source, HTML, caption, alt text, and metadata synchronized. |",
    "visuals inventory Figure 8.2 row",
)
write(inventory_path, inventory)

wiring_path = "docs/images/ch08/ch08_wiring_work_order.md"
wiring = read(wiring_path)
old_wiring = '''![Figure 8.2 — A hub-and-spoke diagram shows the Central Executive at the top, with arrows connecting it to two subsystems below: the Phonological Loop, labeled as holding verbal and acoustic information, and the Visuospatial Sketchpad, labeled as holding visual and spatial information. The arrows indicate active coordination between the executive and both subsystems.](../images/ch08/ch08_baddeley_working_memory_model.svg)
*Figure 8.2. Baddeley and Hitch's working memory model replaces a single passive short-term store with an active system: a central executive that allocates attention and coordinates the rest of the system, a phonological loop that holds verbal and acoustic information, and a visuospatial sketchpad that holds visual and spatial information. This chapter's text uses only these three components.*'''
new_wiring = '''![Figure 8.2 — A cognitive-architecture diagram shows the Central Executive at the top coordinating three components below: the Phonological Loop for verbal and acoustic information, the Episodic Buffer as a temporary binding workspace, and the Visuospatial Sketchpad for visual and spatial information. Bidirectional arrows connect the components. Long-Term Memory appears below the episodic buffer, showing that relevant stored knowledge can be incorporated into a temporary integrated representation.](../images/ch08/ch08_baddeley_working_memory_model.svg)
*Figure 8.2. Baddeley's working-memory model replaces a single passive short-term store with an active system. The central executive coordinates attention; the phonological loop maintains verbal and acoustic information; the visuospatial sketchpad maintains visual and spatial information; and the episodic buffer temporarily binds those contents with relevant long-term knowledge into a coherent representation. The episodic buffer is not the same as episodic long-term memory.*'''
wiring = replace_once(wiring, old_wiring, new_wiring, "wiring work order Figure 8.2 block")
write(wiring_path, wiring)


# ---------------------------------------------------------------------------
# 5. Cross-file validation before allowing a commit
# ---------------------------------------------------------------------------
metadata = read("docs/images/ch08/figure_metadata.md")
svg = read("docs/images/ch08/ch08_baddeley_working_memory_model.svg")

for rel, text in {
    source_path: source,
    html_path: html,
    spec_path: spec,
    inventory_path: inventory,
    wiring_path: wiring,
    "docs/images/ch08/figure_metadata.md": metadata,
    "docs/images/ch08/ch08_baddeley_working_memory_model.svg": svg,
}.items():
    if "Episodic Buffer" not in text and "episodic buffer" not in text:
        raise RuntimeError(f"{rel}: episodic-buffer content missing after update")

stale_phrases = (
    "This chapter's text uses only these three components",
    "no episodic buffer, matching chapter text",
    "Keep exactly three components — no episodic buffer",
    "Do not add an \"episodic buffer\" component",
)
for rel in (source_path, html_path, spec_path, inventory_path, wiring_path, "docs/images/ch08/figure_metadata.md"):
    text = read(rel)
    for phrase in stale_phrases:
        if phrase in text:
            raise RuntimeError(f"{rel}: stale three-component instruction remains: {phrase}")

if source.count("Baddeley, 2000") != 1 or html.count("Baddeley, 2000") != 1:
    raise RuntimeError("Baddeley 2000 citation not synchronized between source and HTML")

if "episodic long-term memory" not in source or "episodic long-term memory" not in html:
    raise RuntimeError("misconception guardrail missing from source or HTML")

# Remove one-time automation files from the final commit.
for rel in (
    "tools/apply_ch08_figure_8_2_update.py",
    ".github/workflows/apply-ch08-figure-8-2.yml",
):
    path = ROOT / rel
    if path.exists():
        path.unlink()

print("Chapter 8 Figure 8.2 synchronized successfully.")
