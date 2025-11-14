TechSwap

Accéder au site ici

TechSwap est un site communautaire statique dédié aux passionnés de technologie, d’électronique et de rétro-informatique.
Il permet à chacun de partager, échanger ou exposer des objets technologiques rares : ordinateurs vintage, Raspberry Pi, composants de collection, consoles rétro, périphériques emblématiques, etc.

Le projet reprend le principe d’un “Vinted de l’informatique”, mais construit de manière ouverte et collaborative grâce à Git et à un pipeline d’intégration continue (CI/CD).

Objectif du projet

Préserver et valoriser le patrimoine technologique à travers une plateforme ouverte.
Chaque membre peut y publier la fiche d’un objet de collection, avec sa description, son état, son année et sa disponibilité (à échanger, à vendre ou simplement à exposer).

Les contributions sont entièrement gérées via GitHub, sans base de données, et le site est automatiquement régénéré à chaque nouvelle contribution.

Comment ajouter mon objet ?

Vous pouvez ajouter votre objet de collection en suivant ces étapes :

Forkez le dépôt GitHub principal.

Dans le dossier /items/
, créez un nouveau fichier JSON reprenant la structure ci-dessous :

{
  "nom": "Raspberry Pi Zero W",
  "année": 2017,
  "type": "Micro-ordinateur",
  "état": "Neuf / Boîte scellée",
  "description": "Modèle rare de la gamme Raspberry Pi, très recherché pour les projets embarqués.",
  "photo": "raspberry_zero_w.jpg",
  "disponibilité": "À échanger",
  "contributeur": "Yannis Y."
}


Créez une Pull Request vers la branche principale.
Notre pipeline CI vérifiera automatiquement la validité du fichier (format JSON, champs requis, etc.).

Une fois validée, votre contribution sera intégrée et votre objet apparaîtra sur la page d’accueil du site.

Pipeline et technologies utilisées

TechSwap repose sur un système d’intégration continue permettant de mettre à jour automatiquement le site à chaque contribution acceptée.

Stack technique :

Jekyll (ou Eleventy) → génération du site statique à partir des fichiers JSON.

GitHub Actions → automatisation du pipeline CI/CD.

GitHub Pages → hébergement et déploiement du site.

JSON Schema → validation automatique des contributions.

Étapes du pipeline :

Validation des fichiers (lint et structure JSON).

Génération des pages HTML à partir des fichiers d’objets.

Déploiement automatique du site sur GitHub Pages.

🤝 Crédits

Maxime D.
Yannis Y.
Gwenaël T.