#!/usr/bin/env python3
"""Build the canonical Chapter 13 HTML page from its Markdown source.

This narrow generator exists because the repository has no checked-in general
chapter converter. Content authority remains the Markdown source.
"""
from pathlib import Path
import re
import unicodedata

from bs4 import BeautifulSoup, NavigableString
from markdown_it import MarkdownIt

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "source/chapters/ch13-psychological-disorders-therapy.md"
OUTPUT = ROOT / "docs/chapters/13-disorders-therapy.html"


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii").lower()
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def build() -> None:
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    start = next(i for i, line in enumerate(lines) if line.strip() == "## Misconception Opener")
    body = "\n".join(lines[start:])

    md = MarkdownIt("commonmark", {"html": True, "linkify": False, "typographer": False}).enable("table")
    soup = BeautifulSoup(md.render(body), "html.parser")

    for hr in soup.find_all("hr"):
        hr.decompose()

    used_ids: set[str] = set()
    for heading in soup.find_all(["h2", "h3"]):
        heading_text = heading.get_text(" ", strip=True)
        base = "connections" if heading_text == "Connections to Other Chapters" else slugify(heading_text)
        ident = base
        count = 2
        while ident in used_ids:
            ident = f"{base}-{count}"
            count += 1
        heading["id"] = ident
        used_ids.add(ident)

    misconception = soup.find("h2", string=lambda x: x and x.strip() == "Misconception Opener")
    next_h2 = misconception.find_next_sibling("h2")
    box = soup.new_tag("div", attrs={"class": "callout callout--misconception", "id": "misconception-opener"})
    box_title = soup.new_tag("div", attrs={"class": "callout-title"})
    box_title.string = "Common Belief"
    box.append(box_title)
    node = misconception.find_next_sibling()
    while node and node != next_h2:
        following = node.find_next_sibling()
        box.append(node.extract())
        node = following
    misconception.replace_with(box)

    where = soup.find("h2", id="where-this-fits")
    node = where.find_next_sibling()
    first_paragraph = True
    while node and node.name != "h2":
        if node.name == "p" and first_paragraph:
            node["class"] = node.get("class", []) + ["where-this-fits"]
            first_paragraph = False
        node = node.find_next_sibling()

    objectives = soup.find("h2", id="learning-objectives")
    intro = objectives.find_next_sibling("p")
    objective_list = intro.find_next_sibling("ol") if intro else None
    if objective_list:
        objective_box = soup.new_tag("div", attrs={"class": "callout callout--objectives"})
        objective_title = soup.new_tag("div", attrs={"class": "callout-title"})
        objective_title.string = "By the end of this chapter, you should be able to:"
        objective_box.append(objective_title)
        objective_box.append(objective_list.extract())
        intro.decompose()
        objectives.insert_after(objective_box)

    for quote in list(soup.find_all("blockquote")):
        paragraph = quote.find("p")
        strong = paragraph.find("strong") if paragraph else None
        if not strong:
            continue
        label = strong.get_text(" ", strip=True)
        if label.startswith("Stop and Retrieve"):
            variant, title_text = "stop-retrieve", "Stop and Retrieve"
        elif label.startswith("Think About It"):
            variant, title_text = "think-about-it", "Think About It"
        elif label.startswith("Do Not Confuse"):
            variant, title_text = "do-not-confuse", label.rstrip(".")
        else:
            continue
        strong.extract()
        if paragraph.contents and isinstance(paragraph.contents[0], NavigableString):
            paragraph.contents[0].replace_with(str(paragraph.contents[0]).lstrip(" :"))
        callout = soup.new_tag("div", attrs={"class": f"callout callout--{variant}"})
        callout_title = soup.new_tag("div", attrs={"class": "callout-title"})
        callout_title.string = title_text
        callout.append(callout_title)
        for child in list(quote.contents):
            callout.append(child.extract())
        quote.replace_with(callout)

    for paragraph in list(soup.find_all("p")):
        image = paragraph.find("img")
        caption_em = paragraph.find("em")
        if not (image and caption_em):
            continue
        image_src = image.get("src", "").replace("../../docs/images/", "../images/")
        image["src"] = image_src
        image["alt"] = re.sub(r"^Figure\s+\d+\.\d+:\s*", "", image.get("alt", ""))

        figure = soup.new_tag("figure", attrs={"class": "chapter-figure expandable"})
        toggle = soup.new_tag(
            "a",
            attrs={
                "class": "figure-expand-toggle",
                "href": image_src,
                "aria-label": "Expand figure",
                "aria-expanded": "false",
            },
        )
        image.extract()
        toggle.append(image)
        figure.append(toggle)

        caption_text = caption_em.get_text(" ", strip=True)
        figcaption = soup.new_tag("figcaption")
        match = re.match(r"Figure\s+(\d+\.\d+)\.\s*(.*)", caption_text)
        if match:
            label = soup.new_tag("strong")
            label.string = f"Figure {match.group(1)}."
            figcaption.append(label)
            figcaption.append(NavigableString(" " + match.group(2)))
        else:
            figcaption.string = caption_text
        figure.append(figcaption)
        paragraph.replace_with(figure)

    for anchor in soup.find_all("a", href=True):
        anchor["href"] = (
            anchor["href"]
            .replace("../../docs/labs/", "../labs/")
            .replace("../../docs/chapters/", "")
        )

    for section in list(soup.find_all("h2")):
        if not section.get_text(strip=True).startswith("Section "):
            continue
        subheads = []
        node = section.find_next_sibling()
        while node and node.name != "h2":
            if node.name == "h3":
                subheads.append(node)
            node = node.find_next_sibling()
        if len(subheads) < 2:
            continue
        nav = soup.new_tag("div", attrs={"class": "in-section-nav"})
        nav_label = soup.new_tag("strong")
        nav_label.string = "In this section:"
        nav.append(nav_label)
        nav.append(NavigableString(" "))
        for index, subhead in enumerate(subheads):
            anchor = soup.new_tag("a", href="#" + subhead["id"])
            anchor.string = subhead.get_text(" ", strip=True)
            nav.append(anchor)
            if index < len(subheads) - 1:
                separator = soup.new_tag("span", attrs={"class": "sep"})
                separator.string = "·"
                nav.append(separator)
        section.insert_after(nav)

    connections = soup.find("h2", id="connections")
    chapter_links = {
        "Chapter 2": "02-research-methods.html",
        "Chapter 3": "03-neuroscience.html",
        "Chapter 5": "05-consciousness.html",
        "Chapter 7": "07-learning.html",
        "Chapter 8": "08-memory.html",
        "Chapter 9": "09-thinking-language-intelligence.html",
        "Chapter 10": "10-lifespan-development.html",
        "Chapter 11": "11-social-psychology.html",
        "Chapter 12": "12-emotion-stress-coping.html",
    }
    if connections:
        table = connections.find_next_sibling("table")
        for cell in table.find_all("td")[1::3]:
            text = cell.get_text(" ", strip=True)
            if text in chapter_links:
                cell.clear()
                anchor = soup.new_tag("a", href=chapter_links[text])
                anchor.string = text
                cell.append(anchor)

    review = soup.find("h2", id="review-questions")
    if review:
        ordered = review.find_next_sibling("ol")
        for item in list(ordered.find_all("li", recursive=False)):
            review_box = soup.new_tag("div", attrs={"class": "review-q"})
            for paragraph in list(item.find_all("p", recursive=False)):
                text = paragraph.get_text("\n", strip=True)
                if re.match(r"^a\.\s", text):
                    options = soup.new_tag("ol", attrs={"class": "options", "type": "a"})
                    for part in re.split(r"\n+", text):
                        part = re.sub(r"^[a-d]\.\s*", "", part).strip()
                        if part:
                            option = soup.new_tag("li")
                            option.string = part
                            options.append(option)
                    paragraph.replace_with(options)
            details = item.find("details")
            if details:
                summary = details.find("summary")
                answer = soup.new_tag("div", attrs={"class": "answer"})
                for child in list(details.contents):
                    if child is not summary:
                        answer.append(child.extract())
                details.append(answer)
            for child in list(item.contents):
                review_box.append(child.extract())
            ordered.insert_before(review_box)
            item.decompose()
        ordered.decompose()

    key_heading = soup.find("h2", id="key-terms")
    if key_heading:
        unordered = key_heading.find_next_sibling("ul")
        definition_list = soup.new_tag("dl", attrs={"class": "key-terms"})
        for item in unordered.find_all("li", recursive=False):
            strong = item.find("strong")
            term = strong.get_text(" ", strip=True) if strong else ""
            full = item.get_text(" ", strip=True)
            definition = re.sub(r"^" + re.escape(term) + r"\s*[—-]\s*", "", full)
            dt = soup.new_tag("dt")
            dt.string = term
            dd = soup.new_tag("dd")
            dd.string = definition
            definition_list.append(dt)
            definition_list.append(dd)
        unordered.replace_with(definition_list)

    reading_heading = soup.find("h2", id="further-reading")
    if reading_heading:
        unordered = reading_heading.find_next_sibling("ul")
        reading = soup.new_tag("div", attrs={"class": "further-reading"})
        for item in unordered.find_all("li", recursive=False):
            reading_item = soup.new_tag("div", attrs={"class": "fr-item"})
            for child in list(item.contents):
                reading_item.append(child.extract())
            reading.append(reading_item)
        unordered.replace_with(reading)

    references_heading = soup.find("h2", id="references")
    if references_heading:
        references = soup.new_tag("div", attrs={"class": "references"})
        node = references_heading.find_next_sibling()
        while node:
            following = node.find_next_sibling()
            references.append(node.extract())
            node = following
        references_heading.insert_after(references)

    document = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chapter 13: Psychological Disorders &amp; Therapy — General Psychology</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
<div class="layout">
  <aside class="sidebar" id="app-sidebar"></aside>
  <script src="../js/sidebar.js" data-dir="chapters" data-active="13" data-top="toc-only"></script>
  <main class="main">
    <p class="chapter-meta">Chapter 13 — Mental &amp; Physical Health</p>
    <h1>Psychological Disorders &amp; Therapy</h1>
    <hr class="chapter-divider" />
{str(soup)}
  </main>
</div>
<script src="../js/figure-expand.js"></script>
<script src="../js/nav.js"></script>
</body>
</html>
"""
    OUTPUT.write_text(document, encoding="utf-8")


if __name__ == "__main__":
    build()
