---
title: "A reproducible R workflow for benthic photo-quadrat analysis"
date: 2025-02-22
summary: "Sharing the open-source pipeline I use to go from raw photo-quadrats to publication-ready cover estimates — Quarto, CoralNet, and tidyverse end-to-end."
image: "images/coral-closeup.jpg"
imageAlt: "Close-up of coral colony with detailed texture"
lang: "en"
translationKey: "reproducible-photo-quadrat-2025"
---

Photo-quadrat analysis is one of the most common reef-monitoring methods, and one of the most painfully manual. Over the past two years I've consolidated a workflow that takes raw images to publication-ready benthic cover estimates with minimal click-work — and it's now available as a [public template](https://github.com/andieich) you can fork and adapt.

## What it does

- Reads metadata (site, date, depth, GPS) directly from image EXIF.
- Pushes images to **CoralNet** for machine-assisted classification.
- Pulls back point annotations and joins them with metadata in a single tidy data frame.
- Computes site- and colony-level cover estimates with bootstrap confidence intervals.
- Renders a **Quarto report** with figures, tables, and a methods appendix — fully reproducible.

## Why bother?

Two reasons. First, **review-ready**: every figure in the resulting paper or report links back to the exact data subset and analysis call. When a reviewer asks "where does this number come from?", the answer is one click away.

Second, **transferable**: the same template works whether you're surveying 6 sites or 60. The methods section writes itself.

## Try it

The template uses `renv` to lock dependencies, so you should be able to clone, run `renv::restore()`, drop your images into `data/raw/`, and `quarto render`. Issues and PRs welcome.
