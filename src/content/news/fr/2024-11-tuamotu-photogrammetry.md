---
title: "Photogrammétrie par drone sur un motu des Tuamotu"
date: 2024-11-08
summary: "Notes d'une mission de cartographie de trois jours sur un motu reculé des Tuamotu — ce qui a marché, ce qui n'a pas marché, et l'orthomosaïque finale."
image: "../images/atoll-aerial-1.jpg"
imageAlt: "Vue aérienne d'un atoll des Tuamotu avec lagon turquoise"
lang: "fr"
translationKey: "tuamotu-photogrammetry-2024"
---

Le mois dernier, j'ai rejoint une petite équipe pour cartographier un motu isolé des Tuamotu — un état des lieux pour un programme de suivi de l'érosion côtière. Trois jours, deux drones, ~40 Go d'images et un capitaine très patient. Voici ce qu'il en ressort.

## Le plan

L'objectif : une orthomosaïque et un MNS sub-décimétriques du motu entier (environ 1,4 km), pour soutenir un programme de suivi pluriannuel. Les GCP ont été déployés à marée basse côté lagon et côté océan, mesurés avec un rover RTK Trimble.

## Ce qui a marché

- **Vols de très bonne heure** — lumière douce, pas de vent, lagon vitré. Ça vaut le réveil.
- **Plan de vol à deux altitudes** — 80 m pour la couverture générale, 40 m pour le trait de côte. ~1,2 cm de GSD sur les passages bas.
- **Sauvegarde en temps réel** — chaque batterie était dupliquée sur deux SSD avant le vol suivant.

## Ce qui n'a pas marché

- Un vol à 11h00 a produit des images de lagon inutilisables — reflets de soleil et de surface masquent tout au-delà de ~30 cm de profondeur. Leçon (re-)apprise.
- Un GCP a été emporté par une houle imprévue le deuxième jour. Le traitement a absorbé la perte, mais un troisième point de secours aurait été plus prudent.

## Le résultat

L'orthomosaïque finale s'assemble proprement, avec une erreur de reprojection inférieure à 3 cm. Le MNS résout les *Pisonia* individuels et l'essentiel de la crête de cordon corallien. Le jeu de données complet servira aux relevés répétés tous les 6 mois.

Si vous préparez une mission similaire et voulez échanger sur la logistique ou le workflow, je suis preneur — [contactez-moi](/fr/contact/).
