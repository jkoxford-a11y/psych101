
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch
import numpy as np

out_dir = Path(".")
png_path = out_dir / "ch04_weber_law_minimal_v2.png"
svg_path = out_dir / "ch04_weber_law_minimal_v2.svg"

fig, ax = plt.subplots(figsize=(12.8, 7.2), dpi=200)
ax.set_xlim(0, 10)
ax.set_ylim(0, 7)
ax.axis("off")

# Title only. Caption carries the instructional explanation.
ax.text(5.15, 6.42, "Weber’s Law", ha="center", va="center",
        fontsize=30, fontweight="bold")

# Axes
x0, y0 = 1.25, 1.15
x1, y1 = 9.1, 5.75
ax.annotate("", xy=(x1, y0), xytext=(x0, y0),
            arrowprops=dict(arrowstyle="-|>", lw=2.5, color="black"))
ax.annotate("", xy=(x0, y1), xytext=(x0, y0),
            arrowprops=dict(arrowstyle="-|>", lw=2.5, color="black"))

# Axis labels placed outside the plotting area.
ax.text((x0+x1)/2, 0.48, "Starting intensity", ha="center", va="center",
        fontsize=19)
ax.text(0.42, (y0+y1)/2, "Change needed\nto notice", ha="center", va="center",
        rotation=90, fontsize=19)

# Diagonal guide line
line_x0, line_y0 = x0 + 0.18, y0 + 0.18
line_x1, line_y1 = x1 - 0.45, y1 - 0.25
ax.plot([line_x0, line_x1], [line_y0, line_y1],
        lw=2.2, color="0.35")

# Vertical double-headed arrows showing larger JNDs as baseline grows.
xs = np.array([2.0, 3.5, 5.45, 7.75])
tops = np.interp(xs, [line_x0, line_x1], [line_y0, line_y1])

for x, top in zip(xs, tops):
    ax.add_patch(FancyArrowPatch((x, y0 + 0.08), (x, top - 0.08),
                                 arrowstyle="<|-|>", mutation_scale=20,
                                 lw=2.7, color="black"))

plt.savefig(png_path, bbox_inches="tight", facecolor="white")
plt.savefig(svg_path, bbox_inches="tight", facecolor="white")
plt.close(fig)
