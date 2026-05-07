---
title: "Un workflow R reproductible pour l'analyse de photo-quadrats benthiques"
date: 2025-02-22
summary: "Partage de la chaîne open source que j'utilise pour passer des photo-quadrats bruts aux estimations de recouvrement publiables — Quarto, CoralNet et tidyverse de bout en bout."
image: "/images/coral-closeup.jpg"
imageAlt: "Gros plan sur une colonie corallienne, texture détaillée"
lang: "fr"
translationKey: "reproducible-photo-quadrat-2025"
---

L'analyse de photo-quadrats est l'une des méthodes de suivi récifal les plus répandues — et l'une des plus laborieuses. Depuis deux ans, j'ai consolidé un workflow qui transforme des images brutes en estimations de recouvrement publiables, avec un minimum de manipulations manuelles. Il est désormais disponible comme [modèle public](https://github.com/andieich) à forker et adapter.

## Ce qu'il fait

- Lit les métadonnées (site, date, profondeur, GPS) directement depuis les EXIF.
- Envoie les images vers **CoralNet** pour classification assistée.
- Récupère les annotations et les fusionne avec les métadonnées dans un tableau « tidy ».
- Calcule les estimations de recouvrement à l'échelle du site et de la colonie, avec intervalles de confiance par bootstrap.
- Produit un **rapport Quarto** avec figures, tableaux et annexe méthodes — entièrement reproductible.

## Pourquoi ?

Deux raisons. D'abord, **prêt pour la revue** : chaque figure du papier ou du rapport renvoie au sous-jeu de données et à l'appel d'analyse exacts. Quand un reviewer demande « d'où vient ce chiffre ? », la réponse est à un clic.

Ensuite, **transférable** : le modèle fonctionne pour 6 comme pour 60 sites. La section méthodes s'écrit toute seule.

## Essayer

Le modèle utilise `renv` pour figer les dépendances : `renv::restore()`, déposez vos images dans `data/raw/`, puis `quarto render`. Issues et PRs bienvenues.
