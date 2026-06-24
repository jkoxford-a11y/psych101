#!/usr/bin/env Rscript

# Original Chapter 2 figure generator for an introductory psychology textbook.
# Uses only simulated/layout data and base R grid graphics; no external assets.

library(grid)

out_dir <- file.path("images", "ch02")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

slide_w <- 12
slide_h <- 6.75

ink <- "#1F2937"
muted <- "#64748B"
blue <- "#2563EB"
blue_light <- "#DBEAFE"
green <- "#059669"
green_light <- "#D1FAE5"
orange <- "#EA580C"
orange_light <- "#FFEDD5"
red <- "#DC2626"
red_light <- "#FEE2E2"
gray <- "#E5E7EB"

theme_text <- function(size = 16, face = "plain", col = ink) {
  gpar(fontfamily = "sans", fontsize = size, fontface = face, col = col)
}

save_dual <- function(name, draw_fun) {
  png_path <- file.path(out_dir, paste0(name, ".png"))
  svg_path <- file.path(out_dir, paste0(name, ".svg"))

  png(png_path, width = 1920, height = 1080, res = 160, type = "cairo-png")
  draw_fun()
  dev.off()

  svg(svg_path, width = slide_w, height = slide_h, bg = "white")
  draw_fun()
  dev.off()
}

new_slide <- function() {
  grid.newpage()
  grid.rect(gp = gpar(fill = "white", col = NA))
  pushViewport(viewport(width = unit(1, "npc"), height = unit(1, "npc")))
}

box <- function(x, y, w, h, label, fill, col = ink, size = 16, face = "bold") {
  grid.roundrect(
    x = x, y = y, width = w, height = h,
    r = unit(0.08, "snpc"),
    gp = gpar(fill = fill, col = col, lwd = 1.8)
  )
  grid.text(label, x = x, y = y, gp = theme_text(size, face), just = "center")
}

arrow <- function(x1, y1, x2, y2, col = ink, lwd = 2.2) {
  grid.segments(
    x1, y1, x2, y2,
    gp = gpar(col = col, lwd = lwd),
    arrow = grid::arrow(length = unit(0.18, "inches"), type = "closed")
  )
}

label_chip <- function(x, y, label, fill, col = ink) {
  grid.roundrect(
    x, y, width = unit(2.95, "inches"), height = unit(0.55, "inches"),
    r = unit(0.08, "snpc"),
    gp = gpar(fill = fill, col = NA)
  )
  grid.text(label, x, y, gp = theme_text(13, "bold", col))
}

draw_sampling_assignment <- function() {
  new_slide()
  grid.text(
    "Random Sampling vs. Random Assignment",
    x = 0.5, y = 0.91, gp = theme_text(26, "bold")
  )

  box(0.13, 0.56, 0.18, 0.16, "Population", blue_light, blue)
  box(0.37, 0.56, 0.18, 0.16, "Study\nsample", green_light, green)
  box(0.68, 0.70, 0.19, 0.14, "Experimental\ngroup", orange_light, orange)
  box(0.68, 0.42, 0.19, 0.14, "Control\ngroup", red_light, red)

  arrow(0.23, 0.56, 0.27, 0.56, blue)
  arrow(0.47, 0.56, 0.57, 0.66, green)
  arrow(0.47, 0.56, 0.57, 0.46, green)

  grid.text(
    "random\nsampling",
    x = 0.30, y = 0.68, gp = theme_text(15, "bold", blue)
  )
  grid.text(
    "random\nassignment",
    x = 0.53, y = 0.70, gp = theme_text(15, "bold", green)
  )

  label_chip(
    0.30, 0.28,
    "Who gets into the study?\nExternal validity",
    blue_light, blue
  )
  label_chip(
    0.64, 0.28,
    "Who goes into which condition?\nInternal validity",
    green_light, green
  )

  grid.text(
    "Both help reduce bias, but they answer different research-design questions.",
    x = 0.5, y = 0.12, gp = theme_text(14, "plain", muted)
  )
  popViewport()
}

make_points <- function(kind, n = 18) {
  if (kind == "reliable_valid") {
    cbind(rnorm(n, 0, 0.18), rnorm(n, 0, 0.18))
  } else if (kind == "reliable_invalid") {
    cbind(rnorm(n, 0.95, 0.15), rnorm(n, 0.75, 0.15))
  } else if (kind == "unreliable_valid") {
    r <- runif(n, 0.1, 1.15)
    theta <- runif(n, 0, 2 * pi)
    cbind(r * cos(theta), r * sin(theta))
  } else {
    cbind(rnorm(n, 0.75, 0.75), rnorm(n, -0.65, 0.75))
  }
}

target_panel <- function(x, y, w, h, title, pts) {
  pushViewport(viewport(x = x, y = y, width = w, height = h))
  grid.text(title, x = 0.5, y = 0.95, gp = theme_text(15, "bold"))
  pushViewport(viewport(x = 0.5, y = 0.49, width = 0.78, height = 0.78))
  for (r in c(0.48, 0.36, 0.24, 0.12)) {
    grid.circle(0.5, 0.5, r = r, gp = gpar(fill = NA, col = gray, lwd = 2))
  }
  grid.circle(0.5, 0.5, r = 0.04, gp = gpar(fill = red, col = red))
  xs <- 0.5 + pts[, 1] * 0.22
  ys <- 0.5 + pts[, 2] * 0.22
  grid.points(xs, ys, pch = 21, size = unit(0.095, "inches"),
              gp = gpar(fill = blue, col = "white", lwd = 0.8))
  popViewport()
  popViewport()
}

draw_reliability_validity <- function() {
  set.seed(202)
  new_slide()
  grid.text("Reliability and Validity", x = 0.5, y = 0.94, gp = theme_text(26, "bold"))
  grid.text("Consistent measurements can still miss the target.", x = 0.5, y = 0.885, gp = theme_text(14, "plain", muted))

  target_panel(0.26, 0.64, 0.42, 0.42, "Reliable and valid", make_points("reliable_valid"))
  target_panel(0.74, 0.64, 0.42, 0.42, "Reliable but not valid", make_points("reliable_invalid"))
  target_panel(0.26, 0.25, 0.42, 0.42, "Unreliable but roughly valid", make_points("unreliable_valid"))
  target_panel(0.74, 0.25, 0.42, 0.42, "Neither reliable nor valid", make_points("neither"))

  popViewport()
}

pvalue_item <- function(x, y, label, fill, col, check = TRUE) {
  ux <- unit(x, "npc")
  uy <- unit(y, "npc")
  grid.roundrect(
    ux, uy, width = unit(3.6, "inches"), height = unit(0.56, "inches"),
    r = unit(0.08, "snpc"),
    gp = gpar(fill = fill, col = col, lwd = 1.3)
  )
  symbol <- if (check) "\u2713" else "\u2717"
  grid.text(symbol, x = ux - unit(1.55, "inches"), y = uy, gp = theme_text(18, "bold", col))
  grid.text(label, x = ux - unit(1.28, "inches"), y = uy, just = "left", gp = theme_text(13, "plain", ink))
}

draw_pvalue_misconceptions <- function() {
  new_slide()
  grid.text(
    "What a p-value does - and does not - tell you",
    x = 0.5, y = 0.91, gp = theme_text(25, "bold")
  )

  grid.roundrect(
    0.31, 0.53, width = 0.43, height = 0.48,
    r = unit(0.08, "snpc"), gp = gpar(fill = blue_light, col = blue, lwd = 2)
  )
  grid.text("A p-value tells you:", x = 0.31, y = 0.71, gp = theme_text(18, "bold", blue))
  grid.text(
    "How unusual the observed data\nare under the null model,\nassuming the model is appropriate.",
    x = 0.31, y = 0.53, gp = theme_text(17, "plain", ink), lineheight = 1.12
  )

  grid.roundrect(
    0.75, 0.53, width = 0.32, height = 0.48,
    r = unit(0.08, "snpc"), gp = gpar(fill = "white", col = gray, lwd = 2)
  )
  grid.text("A p-value is not:", x = 0.75, y = 0.73, gp = theme_text(18, "bold", red))
  pvalue_item(0.75, 0.63, "Probability the hypothesis is true", red_light, red, FALSE)
  pvalue_item(0.75, 0.53, "Effect size", red_light, red, FALSE)
  pvalue_item(0.75, 0.43, "Practical importance", red_light, red, FALSE)
  pvalue_item(0.75, 0.33, "Whether the finding will replicate", red_light, red, FALSE)

  grid.text(
    "Statistical evidence is one part of interpretation, not the whole conclusion.",
    x = 0.5, y = 0.13, gp = theme_text(14, "plain", muted)
  )
  popViewport()
}

save_dual("fig2-5-random-sampling-vs-assignment", draw_sampling_assignment)
save_dual("fig2-6-reliability-validity-targets", draw_reliability_validity)
save_dual("fig2-8-p-value-misconceptions", draw_pvalue_misconceptions)

message("Generated Chapter 2 figures in ", normalizePath(out_dir, winslash = "/"))
