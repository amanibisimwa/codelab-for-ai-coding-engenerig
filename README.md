# Codelab App

**« L'ingénierie logicielle au-delà du Vibe Coding »**  
*Les méthodes des développeurs experts · Tech Talk · Amani Bisimwa (GDE Firebase, CEO DrcMind SARL)*

> [!NOTE]
> Site web compagnon officiel du codelab présentant la méthode **Spec-Driven Development**, **Context Engineering** et **chaîne de prompts** appliquée au cas d'usage **PesaFlow**.

---

## 1. Vue d'ensemble

Application web statique de **7 pages** guidant le participant pas à pas à travers les concepts, prompts, commandes et points de contrôle du codelab.

- **Langue :** Interface et explications en **français** (`<html lang="fr">`). Prompts, commandes et code conservés en **anglais**.
- **Source de vérité :** `Codelab PesaFlow — L’ingénierie logicielle au-delà du Vibe Coding.md` (ou `docs/codelab-source.md`). Reproduction fidèle sans omission ni réécriture.
- **Cible :** Développeurs sur mobile et desktop, en direct ou en différé.

---

## 2. Stack technique

| Couche | Technologie | Rôle |
| --- | --- | --- |
| **Framework** | Angular (v21+) | Standalone components, Signals, Router |
| **Rendu** | Angular SSR / SSG | Prerendering statique au build des 7 routes |
| **UI & A11y** | Angular Material & CDK | Composants d'interface exclusifs |
| **Styles** | SCSS | Thème Material 3, layout & responsive uniquement |
| **Données** | TypeScript statique | Contenu typé embarqué |
| **Backend** | *Aucun* | 100% statique côté données |

> [!CAUTION]
> **Périmètre strict :** Aucun backend, aucune base de données (Firebase, Firestore, Supabase, API), aucun système d'authentification, aucun analytics, aucun framework CSS tiers (ni Tailwind, ni Bootstrap).  
> Les mentions de Firebase/Firestore dans le codelab relèvent **uniquement du contenu pédagogique** (prompts et code à copier pour l'exemple PesaFlow) et ne doivent jamais figurer dans `package.json`.

---

## 3. Routes et navigation

| # | Route | Titre (FR) | Source | Icône |
| :-: | --- | --- | --- | :---: |
| **1** | `/introduction` | Introduction | Aperçu | `flag` |
| **2** | `/projet-exemple` | 1. Le projet exemple | Section 1 | `lightbulb` |
| **3** | `/spec-driven-development` | 2. Spec-Driven Development | Section 2 | `description` |
| **4** | `/preparer-environnement` | 3. Préparer l'environnement | Section 3 | `terminal` |
| **5** | `/context-engineering` | 4. Context Engineering | Section 4 | `psychology` |
| **6** | `/chaine-de-prompts` | 5. Décomposer le travail : la chaîne de prompts | Section 5 | `account_tree` |
| **7** | `/recapitulatif` | Conclusion | Section 6 | `emoji_events` |

- Redirection par défaut : `/` et toute route inconnue (`**`) redirigent vers `/introduction`.
- Chaque route est un composant standalone avec titre SEO (`title`) et meta description.
- Pilotage centralisé via le modèle `CodelabPage` :

```typescript
export interface CodelabPage {
  path: string;          // Ex: 'spec-driven-development'
  title: string;         // Titre H1 complet
  navLabel: string;      // Libellé court sidenav
  eyebrow: string;       // Ex: 'Section 2 sur 5'
  icon: string;          // Icône Material
  description: string;   // Meta description SEO
}
```

---

## 4. Spécifications des pages

Chaque page intègre : en-tête standardisée (`h1`, eyebrow), contenu structuré, navigation précédent/suivant et checklist « Points de contrôle » en fin de section.

- **4.1 `/introduction` :** Hero banner (titre, sous-titre), contexte Vibe Coding vs Ingénierie, 5 acquis d'apprentissage, 5 prérequis PesaFlow, 6 cartes de navigation (`MatCard`), encart convention bilingue.
- **4.2 `/projet-exemple` :** Fiche PesaFlow (Titre, Contexte, Objectif, phrase d'accroche pour la spec).
- **4.3 `/spec-driven-development` :** Alerte « Le piège », 2.1 Prompt choix stack + tableau MVP (5 lignes), 2.2 Stack DrcMind (5 lignes), 2.3 Rôles & Markdown, 2.4 `SPEC.md` complet dans un panneau repliable fermé (`MatExpansionPanel`, ~260 lignes), 3 points de contrôle.
- **4.4 `/preparer-environnement` :** Intro IDE & tooling, 3.1 Prompt one-shot de création en français, options CLI & skills, 3 points de contrôle.
- **4.5 `/context-engineering` :** Citation clé, tableau des 3 leviers, 4.1 Prompt README, 4.2 Prompt MVC + arborescence, 4.3 Prompt complet `AGENTS.md` en anglais sous `MatExpansionPanel`, 3 points de contrôle.
- **4.6 `/chaine-de-prompts` :** Méthodologie, tableau de synthèse des 8 prompts, accordéon (`MatAccordion`) contenant les 8 prompts copiables (Modèles/services, Landing, Auth, Onboarding, Shell Home, Budget, Cashflow, Dashboard).
- **4.7 `/recapitulatif` :** Synthèse des 4 piliers avec liens internes, « Ce que vous obtenez », 6 bonnes pratiques, bouton retour vers `/introduction`.

---

## 5. Layout et composants partagés

### Architecture UI globale
- **Toolbar (`MatToolbar`) :** Titre, position courante, toggle menu mobile.
- **Progression (`MatProgressBar`) :** Indicateur déterminé (1 à 7).
- **Sidenav (`MatSidenav`) :** Mode `side` permanent sur desktop (≥ 960 px), tiroir `over` auto-fermable sur mobile.
- **Pagination (`MatButton`) :** Boutons Précédent / Suivant en pied de page.
- **Scroll :** Restauration auto en haut de page et scroll vers les ancres (`withInMemoryScrolling`).
- **Responsive :** Optimisé dès 360 px de large sans scroll horizontal global.

### Composants partagés (`src/app/shared/components/`)
| Composant | Description | Éléments Material |
| --- | --- | --- |
| `code-block` | Bloc copiable avec badge langage, bouton copie et notification snackbar (« Copié »). Défilement horizontal interne. | `MatIconButton`, `MatIcon`, `MatSnackBar`, CDK `Clipboard` |
| `callout` | Encart visuel (`info`, `tip`, `quote`, `convention`). | `MatCard` (outlined), `MatIcon` |
| `checkpoints` | Liste à puces stylisée « Points de contrôle ». | `MatList`, `MatIcon` (`check_circle`) |
| `data-table` | Tableau responsive défilant sur conteneur mobile. | `MatTable` |
| `page-header` | En-tête standard (eyebrow, h1, intro optionnelle). | Typographie & layout |

---

## 6. Structure du projet

Organisation MVC standard du codelab (sans couche environnement) :

```text
codelab-app/
├── AGENTS.md                  # Consignes pour les agents IA
├── README.md                  # Spécifications du projet
├── src/
│   ├── index.html             # lang="fr", fonts & icônes Material
│   ├── styles.scss            # Thème Material 3 et styles globaux
│   └── app/
│       ├── app.config.ts      # Config router, hydration/SSR, animations
│       ├── app.routes.ts      # Définition des 7 routes et redirections
│       ├── cores/
│       │   ├── models/        # Interfaces typées (CodelabPage, etc.)
│       │   ├── data/          # Registre des pages et snippets longs (SPEC.md, prompts)
│       │   └── services/      # Service de navigation réactif
│       ├── features/shell/    # Toolbar, sidenav, barre de progression, footer
│       ├── pages/             # 7 composants de page standalone
│       └── shared/components/ # Composants UI partagés
```

> [!TIP]
> **Stockage des snippets longs :** Stocker `SPEC.md` et les 8 prompts dans `src/app/cores/data/` (fichiers `.md` / `.txt` ou constantes TS).  
> **Échappement Angular :** Dans les templates HTML, échapper `@`, `{`, et `}` via `&#64;`, `&#123;`, `&#125;`.

---

## 7. Commandes d'exécution

```bash
# Installation des dépendances
npm install

# Serveur de développement (http://localhost:4200)
npm start

# Build de production + prerendering SSG
npm run build

# Exécution locale du serveur SSR
npm run serve:ssr:codelab-for-ai-coding-engenerig
```

---

## 8. Règles de développement

1. **Angular Material exclusif :** Uniquement des composants standalone ciblés (ex. `MatButton`, `MatCard`) ; pas d'anciens `MatXxxModule`.
2. **CSS minimal :** Limité au layout, dimensionnement et responsive.
3. **Zéro dépendance backend :** Aucun package Firebase, Supabase ou API client dans `package.json`.
4. **Angular moderne :** Standalone, `signals`, syntaxe `@if` / `@for`, `inject()`, `loadComponent`.
5. **Typage strict :** TypeScript strict, zéro type `any`.
6. **SSR-safe :** Pas d'accès direct à `window`/`document` sans guard (`isPlatformBrowser`).
7. **Fidélité au contenu :** Reproduction stricte du texte source sans reformulation.
8. **Accessibilité (a11y) :** Un seul `h1` par page, navigation clavier, contrastes conformes, `aria-label` sur boutons icônes.
9. **Responsive 360 px :** Aucun overflow horizontal global de la page.
10. **Chain-of-prompts :** Implémentation incrémentale validée par `npm run build` à chaque étape.

---

## 9. Definition of Done

- [ ] `npm run build` sans erreur ni warning.
- [ ] 7 routes pré-rendues avec leur propre `index.html` dans `dist/`.
- [ ] `package.json` exempt de toute dépendance backend ou Firebase.
- [ ] Toutes les sections, prompts, tableaux et checkpoints sont fidèles à la source.
- [ ] Bouton de copie opérationnel sur chaque bloc de code avec snackbar.
- [ ] Navigation complète (sidenav, précédent/suivant, progression) fonctionnelle sur desktop et mobile.
- [ ] Aucune régression responsive (validé à 360 px) et score Lighthouse A11y ≥ 90.

---

© **Amani Bisimwa** — Tech Talk Codelab · DrcMind SARL  
*PesaFlow — L'ingénierie logicielle au-delà du Vibe Coding*
