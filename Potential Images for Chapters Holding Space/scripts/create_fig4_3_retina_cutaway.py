from pathlib import Path
import html


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "images" / "ch04"
OUT.mkdir(parents=True, exist_ok=True)

stem = "fig4_3_retina_cutaway"
svg_path = OUT / f"{stem}.svg"
png_path = OUT / f"{stem}.png"


def text(x, y, value, size=24, weight=500, fill="#1f2933", anchor="start", extra=""):
    return (
        f'<text x="{x}" y="{y}" font-family="Aptos, Arial, sans-serif" '
        f'font-size="{size}" font-weight="{weight}" fill="{fill}" '
        f'text-anchor="{anchor}" {extra}>{html.escape(value)}</text>'
    )


def label(x1, y1, x2, y2, label_text, anchor="start", dx=0, dy=0):
    marker = 'marker-end="url(#arrow)"'
    tx = x2 + dx
    ty = y2 + dy
    return (
        f'<path d="M{x1},{y1} C{(x1+x2)/2},{y1} {(x1+x2)/2},{y2} {x2},{y2}" '
        f'fill="none" stroke="#52606d" stroke-width="2.2" stroke-linecap="round" {marker}/>'
        f'{text(tx, ty, label_text, 22, 600, "#243b53", anchor)}'
    )


rod_symbols = []
for i, x in enumerate([900, 936, 972, 1008, 1190, 1226, 1262, 1298, 1334, 1370]):
    h = 78 if i % 2 else 68
    y = 366 if x < 1100 else 388
    rod_symbols.append(
        f'<rect x="{x}" y="{y}" width="11" height="{h}" rx="5.5" fill="#466b80" opacity="0.95"/>'
    )
for x in [910, 1280, 1318, 1355]:
    rod_symbols.append(
        f'<rect x="{x}" y="512" width="10" height="64" rx="5" fill="#466b80" opacity="0.78"/>'
    )

cone_symbols = []
for x, scale in [(1078, 1.0), (1105, 1.2), (1135, 1.35), (1168, 1.15), (1200, 0.95)]:
    w = 18 * scale
    h = 82 * scale
    cone_symbols.append(
        f'<path d="M{x},{440-h/2:.1f} L{x+w/2:.1f},{440+h/2:.1f} '
        f'L{x-w/2:.1f},{440+h/2:.1f} Z" fill="#d97b48" opacity="0.96"/>'
    )
for x in [1088, 1120, 1152, 1184]:
    cone_symbols.append(
        f'<path d="M{x},514 L{x+8},570 L{x-8},570 Z" fill="#d97b48" opacity="0.9"/>'
    )

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
<title id="title">The Retina Is Not a Camera Sensor</title>
<desc id="desc">Simplified eye cross-section with a zoomed retina inset showing rods, cones, fovea, optic nerve, and blind spot.</desc>
<defs>
  <linearGradient id="eyeFill" x1="0" x2="1" y1="0" y2="1">
    <stop offset="0" stop-color="#fbfdff"/>
    <stop offset="0.55" stop-color="#eaf4f8"/>
    <stop offset="1" stop-color="#d7e9f1"/>
  </linearGradient>
  <linearGradient id="retinaGrad" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0" stop-color="#f4c6aa"/>
    <stop offset="0.58" stop-color="#df8260"/>
    <stop offset="1" stop-color="#a95343"/>
  </linearGradient>
  <radialGradient id="corneaGrad" cx="42%" cy="45%" r="70%">
    <stop offset="0" stop-color="#e8f7ff" stop-opacity="0.88"/>
    <stop offset="1" stop-color="#82b7d0" stop-opacity="0.72"/>
  </radialGradient>
  <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
    <feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#102a43" flood-opacity="0.13"/>
  </filter>
  <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,0 L10,5 L0,10 Z" fill="#52606d"/>
  </marker>
  <clipPath id="eyeClip">
    <ellipse cx="395" cy="445" rx="292" ry="203"/>
  </clipPath>
</defs>

<rect width="1600" height="900" fill="#ffffff"/>
<rect x="52" y="54" width="1496" height="792" rx="24" fill="#f8fbfd" stroke="#dde7ee" stroke-width="2"/>
{text(96, 116, "The Retina Is Not a Camera Sensor", 42, 700, "#102a43")}
{text(96, 152, "Photoreceptors are distributed for biological function, not even pixel sampling.", 22, 400, "#52606d")}

<g filter="url(#softShadow)">
  <ellipse cx="395" cy="445" rx="292" ry="203" fill="#eaf4f8" stroke="#2f5d7c" stroke-width="4"/>
  <path d="M622,319 C695,366 704,525 620,574 C632,512 637,384 622,319Z" fill="#f4b18d" opacity="0.88"/>
  <path d="M603,329 C671,374 679,515 604,565" fill="none" stroke="#df8260" stroke-width="18" stroke-linecap="round"/>
  <path d="M604,333 C674,377 682,513 606,561" fill="none" stroke="#f6d7c6" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
  <path d="M649,482 C698,491 732,517 760,552" fill="none" stroke="#d8a25b" stroke-width="30" stroke-linecap="round"/>
  <path d="M642,481 C692,491 729,519 761,556" fill="none" stroke="#9b6a36" stroke-width="10" stroke-linecap="round"/>
  <circle cx="606" cy="448" r="13" fill="#d97b48" stroke="#ffffff" stroke-width="4"/>
  <circle cx="641" cy="483" r="17" fill="#f8fbfd" stroke="#243b53" stroke-width="3"/>
  <ellipse cx="199" cy="445" rx="72" ry="104" fill="#d9eff9" stroke="#2f5d7c" stroke-width="3"/>
  <ellipse cx="258" cy="445" rx="34" ry="118" fill="#244f67" opacity="0.12"/>
  <circle cx="222" cy="445" r="20" fill="#111827"/>
  <ellipse cx="314" cy="445" rx="43" ry="92" fill="#f2d6a9" stroke="#c97832" stroke-width="3"/>
  <path d="M236,445 C325,395 462,384 604,448" fill="none" stroke="#f2d16b" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
  <path d="M236,445 C331,492 466,506 604,448" fill="none" stroke="#f2d16b" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
</g>

{label(176, 334, 185, 356, "cornea", "end", -14, -8)}
{label(222, 445, 142, 455, "pupil", "end", -14, 7)}
{label(316, 445, 274, 610, "lens", "end", -10, 28)}
{label(614, 382, 705, 306, "retina", "start", 12, -2)}
{label(606, 448, 704, 454, "fovea", "start", 14, 8)}
{label(721, 529, 738, 637, "optic nerve", "start", 12, 34)}
{label(641, 483, 704, 540, "blind spot", "start", 12, 8)}

<path d="M660,365 C733,333 800,315 864,294" fill="none" stroke="#b8c7d3" stroke-width="3" stroke-dasharray="8 8"/>
<path d="M660,527 C738,575 802,602 864,628" fill="none" stroke="#b8c7d3" stroke-width="3" stroke-dasharray="8 8"/>

<g filter="url(#softShadow)">
  <rect x="864" y="235" width="612" height="420" rx="18" fill="#ffffff" stroke="#c9d6df" stroke-width="2.5"/>
  <rect x="896" y="336" width="548" height="250" rx="12" fill="#f6fafc" stroke="#e4edf3" stroke-width="2"/>
  <path d="M900,458 C965,430 1030,414 1084,444 C1126,467 1168,467 1214,446 C1276,416 1355,430 1440,468 L1440,586 L900,586 Z" fill="#f7d5c2"/>
  <path d="M900,454 C968,426 1031,414 1086,442 C1130,464 1170,464 1214,442 C1276,411 1352,428 1440,463" fill="none" stroke="#c65f4b" stroke-width="7" stroke-linecap="round"/>
  <path d="M1090,463 C1118,489 1164,489 1192,463 C1177,521 1107,521 1090,463Z" fill="#fff8ef" stroke="#d97b48" stroke-width="3"/>
  <rect x="1388" y="380" width="54" height="202" rx="10" fill="#f8fbfd" stroke="#243b53" stroke-width="3"/>
  <path d="M1416,582 C1430,622 1466,642 1500,648" fill="none" stroke="#9b6a36" stroke-width="18" stroke-linecap="round"/>
  <path d="M1415,582 C1430,620 1465,640 1500,646" fill="none" stroke="#d8a25b" stroke-width="30" stroke-linecap="round" opacity="0.72"/>
  {''.join(rod_symbols)}
  {''.join(cone_symbols)}
  <circle cx="1142" cy="454" r="8" fill="#d97b48"/>
  <circle cx="1415" cy="472" r="11" fill="#ffffff" stroke="#243b53" stroke-width="3"/>
  {text(898, 292, "Zoomed retina strip", 30, 700, "#102a43")}
  {text(898, 322, "Dense cones at the fovea; rods become more common away from it.", 19, 400, "#52606d")}
  {text(1124, 622, "fovea", 21, 700, "#8f3d2e", "middle")}
  {text(1415, 622, "blind spot", 21, 700, "#243b53", "middle")}
</g>

<path d="M1014,364 L1014,386" fill="none" stroke="#52606d" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arrow)"/>
{text(1014, 356, "rods", 22, 600, "#243b53", "middle")}
{label(1145, 404, 1178, 710, "cones", "middle", 0, 30)}
{label(1416, 472, 1362, 710, "no photoreceptors", "middle", 0, 30)}

<g>
  <rect x="96" y="774" width="1408" height="44" rx="22" fill="#eaf4f8" stroke="#c9d6df" stroke-width="1.5"/>
  {text(800, 804, "The retinal signal is already organized before conscious vision.", 24, 700, "#102a43", "middle")}
</g>
</svg>
'''

svg_path.write_text(svg, encoding="utf-8")

print(svg_path)
