#!/usr/bin/env python3
"""Audit rendered line-edit packets and build visual contact sheets."""

from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
RENDER_ROOT = ROOT / "line-edit-packets" / "_rendered-final"
QA_ROOT = ROOT / "line-edit-packets" / "_qa-final"
CONTACT_ROOT = QA_ROOT / "contact-sheets"


def page_number(path):
    match = re.search(r"(\d+)$", path.stem)
    return int(match.group(1)) if match else 0


def ink_bbox(image):
    white = Image.new("RGB", image.size, "white")
    diff = ImageChops.difference(image.convert("RGB"), white).convert("L")
    mask = diff.point(lambda value: 255 if value > 14 else 0)
    return mask.getbbox()


def make_contact_sheet(packet_name, pages):
    columns = 4
    thumb_w = 390
    label_h = 26
    gap = 16
    thumbs = []
    for page_path in pages:
        image = Image.open(page_path).convert("RGB")
        ratio = thumb_w / image.width
        thumb = image.resize((thumb_w, round(image.height * ratio)), Image.Resampling.LANCZOS)
        thumbs.append(thumb)
    thumb_h = max(image.height for image in thumbs)
    rows = (len(thumbs) + columns - 1) // columns
    sheet = Image.new(
        "RGB",
        (columns * thumb_w + (columns + 1) * gap, rows * (thumb_h + label_h) + (rows + 1) * gap),
        "#d9dde3",
    )
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()
    for index, thumb in enumerate(thumbs):
        row, col = divmod(index, columns)
        x = gap + col * (thumb_w + gap)
        y = gap + row * (thumb_h + label_h + gap)
        sheet.paste(thumb, (x, y + label_h))
        draw.text((x, y + 6), f"Page {index + 1}", fill="black", font=font)
    CONTACT_ROOT.mkdir(parents=True, exist_ok=True)
    output = CONTACT_ROOT / f"{packet_name}.png"
    sheet.save(output, optimize=True)
    return output


def main():
    report = {"packets": [], "summary": {"packets": 0, "pages": 0, "flags": 0}}
    for packet_dir in sorted(path for path in RENDER_ROOT.iterdir() if path.is_dir()):
        pages = sorted(packet_dir.glob("page-*.png"), key=page_number)
        packet = {"name": packet_dir.name, "pages": len(pages), "flags": [], "page_metrics": []}
        for page_path in pages:
            image = Image.open(page_path).convert("RGB")
            bbox = ink_bbox(image)
            if bbox is None:
                packet["flags"].append(f"{page_path.name}: blank page")
                margins = None
            else:
                left, top, right, bottom = bbox
                margins = {
                    "left": left,
                    "top": top,
                    "right": image.width - right,
                    "bottom": image.height - bottom,
                }
                if min(margins.values()) < 8:
                    packet["flags"].append(f"{page_path.name}: ink within 8 px of page edge {margins}")
            packet["page_metrics"].append({"page": page_number(page_path), "size": image.size, "ink_margins": margins})
        packet["contact_sheet"] = str(make_contact_sheet(packet_dir.name, pages).relative_to(ROOT))
        report["packets"].append(packet)
        report["summary"]["packets"] += 1
        report["summary"]["pages"] += len(pages)
        report["summary"]["flags"] += len(packet["flags"])

    QA_ROOT.mkdir(parents=True, exist_ok=True)
    report_path = QA_ROOT / "render-audit.json"
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report["summary"]))
    for packet in report["packets"]:
        print(f"{packet['name']}: {packet['pages']} pages, {len(packet['flags'])} flags")
        for flag in packet["flags"]:
            print("  " + flag)


if __name__ == "__main__":
    main()
