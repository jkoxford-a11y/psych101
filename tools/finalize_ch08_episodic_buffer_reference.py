#!/usr/bin/env python3
"""One-time finalizer for Chapter 8's episodic-buffer revision."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "docs/chapters/08-memory.html"
text = HTML.read_text(encoding="utf-8")


def replace_once(old: str, new: str, label: str) -> None:
    global text
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"{label}: expected exactly one match, found {count}")
    text = text.replace(old, new, 1)


replace_once(
    '''      <dt>Episodic memory</dt>
      <dd>Memory for personally experienced events located in a specific time and place.</dd>''',
    '''      <dt>Episodic buffer</dt>
      <dd>A limited temporary workspace in Baddeley's later working-memory model that binds verbal, visual-spatial, and relevant long-term-memory information into a coherent representation; not the same as episodic long-term memory.</dd>
      <dt>Episodic memory</dt>
      <dd>Memory for personally experienced events located in a specific time and place.</dd>''',
    "episodic-buffer key term",
)

replace_once(
    '''      <dt>Working memory</dt>
      <dd>Baddeley and Hitch's model of an active, limited-capacity system that holds and manipulates information for ongoing cognitive tasks, including a central executive, phonological loop, and visuospatial sketchpad.</dd>''',
    '''      <dt>Working memory</dt>
      <dd>An active, limited-capacity system that holds and manipulates information for ongoing cognitive tasks. Baddeley and Hitch's original model included a central executive, phonological loop, and visuospatial sketchpad; Baddeley later added the episodic buffer.</dd>''',
    "working-memory key term",
)

replace_once(
    '''      <p>Baddeley, A. D., &amp; Hitch, G. (1974). Working memory. In G. A. Bower (Ed.), <em>Recent advances in learning and motivation</em> (Vol. 8, pp. 47–89). Academic Press.</p>''',
    '''      <p>Baddeley, A. D., &amp; Hitch, G. (1974). Working memory. In G. A. Bower (Ed.), <em>Recent advances in learning and motivation</em> (Vol. 8, pp. 47–89). Academic Press.</p>
      <p>Baddeley, A. D. (2000). The episodic buffer: A new component of working memory? <em>Trends in Cognitive Sciences, 4</em>(11), 417–423. https://doi.org/10.1016/S1364-6613(00)01538-2</p>''',
    "Baddeley 2000 reference",
)

HTML.write_text(text, encoding="utf-8", newline="\n")

assert text.count("Baddeley, A. D. (2000)") == 1
assert text.count("<dt>Episodic buffer</dt>") == 1
assert "including a central executive, phonological loop, and visuospatial sketchpad.</dd>" not in text
assert text.rstrip().endswith("</html>")

for rel in (
    "tools/finalize_ch08_episodic_buffer_reference.py",
    ".github/workflows/finalize-ch08-episodic-buffer-reference.yml",
):
    path = ROOT / rel
    if path.exists():
        path.unlink()

print("Chapter 8 episodic-buffer reference and glossary finalized.")
