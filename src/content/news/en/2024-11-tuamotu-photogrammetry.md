---
title: "Drone photogrammetry over a Tuamotu motu"
date: 2024-11-08
summary: "Notes from a three-day mapping mission on a remote Tuamotu motu — what worked, what didn't, and the orthomosaic at the end of it all."
image: "../images/atoll-aerial-1.jpg"
imageAlt: "Aerial view of a Tuamotu atoll with turquoise lagoon"
lang: "en"
translationKey: "tuamotu-photogrammetry-2024"
---

Last month I joined a small team mapping a remote motu in the Tuamotu archipelago for a coastal-erosion baseline. Three days, two drones, ~40 GB of imagery, and one very patient skipper. Here's what came out of it.

## The plan

The brief was a sub-decimetre orthomosaic and DSM of the entire motu — about 1.4 km long — to support a multi-year erosion monitoring programme. Ground control points (GCPs) were laid out at low tide along the lagoon and ocean shores, surveyed with a Trimble RTK rover.

## What worked

- **Early-morning flights** — flat light, no wind, glassy lagoon. Worth waking up for.
- **Two-altitude flight plan** — 80 m for general coverage, 40 m for shoreline detail. ~1.2 cm GSD on the close passes.
- **Real-time backup** — every flight battery was offloaded to two SSDs before the drone went up again.

## What didn't

- A flight at 11:00 produced unusable lagoon imagery — sun glint and surface reflection hide everything below ~30 cm depth. Lesson learned, again.
- One GCP was washed away by an unexpected swell on day two. Photogrammetric processing absorbed it without too much pain, but a third backup point would have been better.

## The result

The final orthomosaic stitched cleanly with sub-3 cm reprojection error. The DSM resolves individual *Pisonia* trees and most of the rubble berm crest. The full dataset will support repeat surveys at 6-month intervals.

If you're planning a similar mission and want to compare notes on logistics or workflow, I'm always happy to chat — [get in touch](/contact/).
