# Sunday Braid — Contexte du projet

Ce fichier donne à Claude Code le contexte nécessaire pour travailler sur ce projet sans que j'aie à tout réexpliquer à chaque session.

## Qui je suis

Développeuse junior, récemment diplômée d'un Master Sciences et Technologies des Métavers (UPHF Valenciennes), avec un stage de 5 mois chez CONEX (C#, Blazor, Entity Framework Core, ASP.NET Core). Je cherche mon premier CDI en dev web/appli.

**Stack déjà maîtrisée :** C#, JavaScript, Python, PHP, SQL, HTML/CSS, ASP.NET Core, Blazor/Razor, Entity Framework Core, Node.js, Unity, MySQL, MongoDB, SQL Server, Git, Azure.

**Vue est nouveau pour moi.** Explique les concepts Vue-spécifiques (réactivité, directives, Composition API) plutôt que de les considérer acquis. Les analogies avec Blazor/Razor sont bienvenues (ex: v-if ≈ @if, composants Vue ≈ composants Blazor).

## Contexte plus large : la roadmap portfolio

Ce projet fait partie d'une roadmap de 8 projets construite pour diversifier mon profil au-delà du C#, qui est plus rare dans mon marché local :

1. **JobTrack** — Java/Spring Boot + TypeScript/React (tracker de candidatures, full-stack)
2. **Kickoff Manager** — C#/.NET MAUI (simulateur de championnat de foot, mobile)
3. Projet HTML/CSS pur — jeu ou site vitrine CSS-only
4. Jeu 2D en Canvas, JavaScript vanilla
5. Mini plateforme e-commerce en PHP
6. Tracker d'abonnements en Blazor (alertes de renouvellement, dashboard de dépenses)
7. **Sunday Braid** (ce projet) — planificateur de repas/courses en Vue
8. Portfolio 3D en Three.js — vitrine finale intégrant les projets précédents

Un mini tutoriel Angular ("Tour of Heroes") est aussi prévu, sans projet complet dédié.

## Le projet : Sunday Braid

Application de planification de repas et de courses associées.

**Le nom** vient de l'idée de "tisser" ensemble des recettes séparées en un planning cohérent — et "Sunday Braid" est aussi le nom d'une vraie brioche/pain tressé traditionnellement préparé le dimanche.

### Fonctionnalités principales
- Planning des repas de la semaine
- Déduction automatique d'une liste de courses à partir du planning
- Ajout de recettes personnelles (CRUD)
- Import de recettes depuis internet, avec possibilité de les modifier

### Fonctionnalités secondaires (à faire après le cœur de l'app)
- Traductions FR/EN (vue-i18n)
- Planification pour plusieurs personnes avec calcul automatique des quantités
- Tags sur les recettes (contient de la viande, des légumes...) permettant des conseils sur l'équilibre du planning de la semaine

### Décisions techniques prises
- **Import de recettes** : privilégier le parsing de données structurées schema.org/Recipe (JSON-LD), présentes sur beaucoup de sites de recettes, plutôt que du scraping HTML brut par site.
- **Fusion des quantités** (multi-personnes / plusieurs recettes) : ne pas chercher à fusionner les unités entre recettes en v1 (risque de complexité liée aux conversions d'unités) — lister les ingrédients groupés par recette dans la liste de courses.
- **Persistance** : `localStorage` via un composable dédié pour le MVP, pas besoin de backend pour commencer.

### Architecture prévue
**Vues (routes) :** Accueil, Recettes, Planning, Courses
**Composants :** RecetteCard, RecetteForm, JourPlanning, ItemCourse
**Stores Pinia :** `recettes` (CRUD), `planning` (association recette ↔ jour). La liste de courses n'a pas besoin de store propre : c'est une `computed` dérivée du planning + des ingrédients.

### Ordre de construction
1. Setup projet + CRUD de recettes en statique (store + composants), sans routing
2. Vue Router pour naviguer entre les pages
3. Planning hebdomadaire (associer recettes aux jours)
4. Liste de courses générée automatiquement (computed dérivée du planning)
5. Persistance localStorage via composable
6. Finitions : style, UX, éventuellement une vraie API plus tard

## Conventions de code
- Composition API avec `<script setup>` (pas d'Options API)
- `<style scoped>` systématique
- Composants en PascalCase
- Toujours une `:key` stable avec `v-for`
- Logique réutilisée → composables dans `composables/`
