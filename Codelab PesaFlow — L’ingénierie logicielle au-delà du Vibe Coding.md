# Codelab : PesaFlow — l’ingénierie logicielle au-delà du Vibe Coding

*Les méthodes des développeurs experts · Tech Talk · DrcMind SARL*

## Aperçu

Avec des outils comme Claude Code, Google Antigravity et GitHub Copilot dans VS Code, développer une application n’a jamais été aussi accessible. Pourtant, si les agents IA génèrent du code rapidement, de nombreux projets commencent avec enthousiasme, puis s’enlisent : exigences mal définies, fonctionnalités qui s’accumulent, erreurs difficiles à corriger, applications complexes à maintenir, voire jamais terminées.

Ce codelab déroule, pas à pas, l’approche présentée dans cette Tech Talk et les pratiques appliquées chez DrcMind SARL pour développer plus efficacement, de l’idée initiale à la mise en production. Le fil rouge est **PesaFlow**, une application de gestion de dépenses individuelle mensuelle.

L’objectif est de dépasser le simple prompting et d’adopter une véritable approche d’ingénierie du développement assisté par l’IA : moins de code généré à l’aveugle, moins de corrections inutiles et davantage d’applications fiables, maintenables et livrées jusqu’au bout.

### Ce que vous allez apprendre

- Bien définir ses besoins grâce à une spécification écrite (Spec-Driven Development).
- Structurer les tâches et décomposer le travail en une chaîne de prompts.
- Guider les agents avec le Context Engineering (README, `AGENTS.md`, skills).
- Préserver une architecture cohérente tout au long du développement.
- Intégrer des vérifications (compilation, tests, contrôles) à la fin de chaque étape pour maîtriser la complexité sans sacrifier la qualité du code.

### Ce dont vous avez besoin

- Un chatbot IA : Gemini, ChatGPT ou Claude.
- Un IDE avec agent IA : Antigravity IDE (utilisé dans ce codelab), VS Code ou Claude Code.
- Node.js et npm (pour `npx` et l’Angular CLI).
- Un compte Firebase.
- Des notions de développement web.

### Plan du codelab

1. Le projet exemple
2. Spec-Driven Development
3. Préparer l’environnement
4. Context Engineering
5. Décomposer le travail : la chaîne de prompts
6. Récapitulatif

> **Convention :** les explications sont en français ; les commandes, le code et les prompts rédigés en anglais restent en anglais. La spécification de PesaFlow (section 2.4) est écrite en français.

## 1. Le projet exemple

Tout au long du codelab, nous construisons le projet suivant.

> **Titre :** Gestion de dépenses individuelle mensuelle.
>
> **Contexte :** Beaucoup de personnes, salariées ou non, ont du mal à suivre leurs dépenses mensuelles et à épargner efficacement, faute d’outils simples et adaptés à l’utilisation quotidienne et aux réalités africaines.
>
> **Objectif :** Développer un prototype qui aide à planifier son budget pour chaque mois, suivre ses dépenses en temps réel et appliquer des méthodes financières efficaces pour mieux gérer son argent mensuellement, économiser, éviter les imprévus et savoir précisément à quoi a servi son revenu mensuel.

Conservez ce texte : c’est le point de départ de la spécification.

## 2. Spec-Driven Development

**Exigences, contrats, documents de référence.** Avant de demander du code, définissons ce que le logiciel doit réellement faire. La première chose à faire avant de mettre en place l’application est de tout spécifier.

> **Le piège :** aujourd’hui, même pour être spécifique, il faut déjà savoir ce que l’on attend de l’IA. Si vous ne savez pas comment être spécifique, utilisez l’IA pour aider l’IA. Voici comment faire.

### 2.1 Choisir le tech stack avec un chatbot

1. Donnez le projet (titre, contexte et objectif de la section 1) à un chatbot comme Gemini, ChatGPT ou Claude.
2. Posez-lui cette question :

```text
Je veux mettre en place cette application, quelles sont les technologies modernes, adaptées, accessibles, efficientes et efficaces pour la mettre en marche ?
```

Vous obtiendrez une réponse du type « Stack idéale pour le prototype (MVP) » :

| Couche | Technologie suggérée |
| --- | --- |
| Interface | Next.js (PWA) ou React Native / Expo |
| Style | Tailwind CSS |
| Base de données et authentification | Supabase (PostgreSQL) |
| Stockage local (hors ligne) | WatermelonDB ou IndexedDB |
| Hébergement | Vercel (web) ou déploiement direct via Expo (mobile) |

### 2.2 Imposer son propre tech stack

Si vous maîtrisez déjà l’ingénierie logicielle, vous pouvez décider par vous-même. C’est le cas ici : nous utilisons le tech stack de DrcMind SARL pour mettre au point l’application.

| Couche | Technologie |
| --- | --- |
| Frontend | Angular |
| UI et style | Angular Material et SCSS |
| Backend | Firebase |
| Bibliothèque | AngularFire |
| Hébergement | Firebase Hosting |

### 2.3 Définir « qui fait quoi »

Après le tech stack, détaillez **qui fait quoi dans l’application** : pour qui est-elle, qui sont les utilisateurs et que font-ils avec l’application (les fonctionnalités). Vous pouvez refaire le même exercice avec l’IA : donnez-lui le guide du projet et vos exigences pour qu’elle vous aide à définir des spécifications précises.

Écrivez le résultat dans un fichier **Markdown** (`.md`). C’est un bon format pour prompter une IA, car il donne une hiérarchie à votre prompt : titres, sous-titres, contenu, points structurés, etc.

### 2.4 La spécification de PesaFlow

Voici le prompt général de l’application en Markdown (vous pouvez l’enregistrer dans un fichier, par exemple `SPEC.md`). Il se découpe en six étapes : vision, landing page, authentification, onboarding, dashboard, budget et cashflow.

```markdown
# PesaFlow — Gestion des dépenses individuelles mensuelles

## Étape 1 — App Overview : Vision et fonctionnalités générales

**Nom de l’application :** PesaFlow  
**Titre :** Gestion de dépenses individuelle mensuelle.

**Contexte :** De nombreuses personnes, salariées ou non, rencontrent des difficultés à suivre leurs dépenses mensuelles, à planifier l’utilisation de leurs revenus et à épargner efficacement. Le manque d’outils simples, accessibles et adaptés aux réalités financières africaines complique la gestion quotidienne de leur argent.

**Objectif :** Concevoir un prototype d’application de gestion budgétaire personnelle qui permet à chaque utilisateur de planifier son budget mensuel, suivre ses dépenses en temps réel, contrôler son solde disponible, constituer une épargne et comprendre précisément l’utilisation de ses revenus.

**Fonctionnalités principales :**

- Planifier un budget mensuel en fonction de son revenu net.
- Choisir une méthode budgétaire prédéfinie ou définir ses propres règles.
- Répartir automatiquement ses revenus entre différentes catégories.
- Enregistrer et consulter ses revenus et ses dépenses.
- Suivre en temps réel les soldes disponibles par catégorie.
- Visualiser les habitudes de consommation et la progression de l’épargne.
- Consulter l’historique des transactions et les bilans mensuels.

L’application doit être une Progressive Web App accessible sur mobile et ordinateur, avec une priorité donnée à l’utilisation mobile. L’interface doit être moderne, claire, professionnelle et rassurante, pensée pour une utilisation quotidienne, y compris par des personnes ayant peu d’expérience en gestion financière.

## Étape 2 — LandingPage : Présentation et découverte

Créer une page d’accueil publique qui explique clairement la valeur de PesaFlow et encourage les visiteurs à commencer à gérer leur budget.

**Éléments de la page :**

1. **AppToolbar** (appName et menus)

2. **Section principale (Hero)**
   - Présenter PesaFlow comme un outil permettant de mieux gérer son argent chaque mois.
   - Afficher une proposition de valeur claire : « Chaque franc compte. Donnez un objectif à votre argent. »
   - Ajouter un bouton principal « Commencer gratuitement » et un lien « Découvrir comment ça marche ».

3. **Présentation des avantages**
   - Planifier ses dépenses avant de dépenser.
   - Savoir combien il reste pour chaque catégorie.
   - Éviter les dépenses excessives.
   - Épargner régulièrement, même avec un revenu limité.
   - Comprendre où va son argent à la fin du mois.

4. **Présentation des méthodes budgétaires**

   Expliquer les principales méthodes financières avec des exemples simples et concrets :

   - **Règle 50/30/20 :** consacrer 50 % du revenu aux besoins essentiels, 30 % aux envies et 20 % à l’épargne et au remboursement des dettes.
   - **Se payer en premier :** réserver une somme pour l’épargne dès la réception du revenu.
   - **Budget base zéro :** attribuer une destination à chaque unité monétaire disponible, jusqu’à ce que le revenu restant à affecter soit nul.
   - **Fonds d’urgence :** constituer progressivement une réserve pour les imprévus.
   - **Révision régulière du budget :** comparer les dépenses prévues aux dépenses réelles et ajuster son plan.

5. **Aperçu de l’application**
   - Présenter des aperçus visuels du Dashboard, du Budget et du Cashflow.
   - Illustrer le suivi des dépenses et le solde restant par catégorie.

6. **Appel à l’action final**
   - Inviter le visiteur à créer son compte et à établir son premier budget.

7. **Footer** avec liens utiles

La page doit utiliser un langage accessible, éviter le jargon financier et montrer concrètement comment PesaFlow aide à prendre de meilleures décisions.

## Étape 3 — Authentification : Accès au compte

Créer une interface d’authentification simple, rassurante et facile à utiliser sur mobile.

**Fonctionnalités :**

- Créer un compte ou se connecter avec Google.
- Se connecter à l’aide d’un lien envoyé par e-mail, sans obligation de mémoriser un mot de passe.
- Saisir son adresse e-mail et demander un lien de connexion.
- Afficher une confirmation après l’envoi du lien.
- Permettre de renvoyer le lien si nécessaire.
- Gérer les erreurs de connexion et les liens expirés avec des messages compréhensibles.
- Maintenir une distinction claire entre les parcours de connexion et d’inscription.
- Permettre à l’utilisateur de se déconnecter.

Après une authentification réussie, vérifier si l’utilisateur a déjà terminé la configuration initiale de son budget. S’il s’agit d’un nouvel utilisateur, le diriger vers l’onboarding. Sinon, l’envoyer directement vers son Dashboard.

Les données budgétaires de chaque utilisateur doivent rester privées et séparées de celles des autres utilisateurs.

## Étape 4 — Onboarding : Configuration initiale du budget

Créer un parcours guidé et progressif pour aider le nouvel utilisateur à configurer son premier budget avant d’accéder à son espace financier.

**Étape 1 : Informations financières de base**

- Demander la devise d’utilisation, avec la possibilité de choisir notamment le franc congolais (CDF), FCFA ou le dollar américain (USD).
- Permettre de définir le revenu mensuel net habituel.
- Permettre de préciser la date ou la période habituelle de réception du revenu.

**Étape 2 : Choix d’une méthode budgétaire**

Proposer plusieurs modèles prédéfinis :

- Règle 50/30/20.
- Priorité à l’épargne.
- Budget base zéro.
- Modèle personnalisé.

Présenter pour chaque modèle son objectif, ses règles de répartition et les situations dans lesquelles il peut être utile.

**Étape 3 : Personnalisation**

- Permettre à l’utilisateur de modifier les pourcentages de répartition.
- Ajouter, modifier ou supprimer des catégories budgétaires.
- Définir des montants ou des pourcentages cibles pour chaque catégorie.
- Prévoir des catégories telles que logement, alimentation, transport, santé, éducation, communication, famille, loisirs, dettes et épargne.
- Vérifier que la répartition est cohérente avec le revenu disponible et signaler toute incohérence.

**Étape 4 : Récapitulatif et confirmation**

- Afficher le revenu mensuel déclaré.
- Présenter la répartition proposée en montants et en pourcentages.
- Permettre de revenir aux étapes précédentes pour modifier les informations.
- Confirmer la configuration et créer le premier budget mensuel.

À la fin de l’onboarding, rediriger l’utilisateur vers son Dashboard avec son budget initial déjà préparé.

## Étape 5 — Dashboard : Vue d’ensemble des finances

Créer un tableau de bord qui permet de comprendre sa situation financière du mois en quelques secondes.

**1. En-tête et période**

- Afficher un message d’accueil.
- Afficher le mois et l’année du budget consulté.
- Permettre de naviguer entre les mois précédents et suivants.
- Proposer un accès rapide aux paramètres du budget.

**2. Indicateurs financiers principaux**

Afficher des cartes récapitulatives pour :

- **Revenu mensuel :** total des revenus enregistrés ou prévus pour le mois.
- **Budget alloué :** montant affecté aux différentes catégories.
- **Dépenses réalisées :** total des dépenses enregistrées.
- **Solde disponible :** montant restant selon les revenus et les dépenses pris en compte.
- **Épargne :** montant réservé, montant effectivement épargné et progression vers l’objectif.

Les indicateurs doivent être calculés à partir des transactions et de la configuration budgétaire, avec des définitions cohérentes pour éviter de compter deux fois les montants affectés à l’épargne.

**3. Suivi des catégories**

- Afficher chaque catégorie avec son budget prévu, le montant dépensé et le solde restant.
- Utiliser des barres de progression et des indicateurs visuels pour rendre la consommation du budget immédiatement compréhensible.
- Signaler les catégories proches de leur limite ou dont le budget est dépassé.
- Permettre d’ouvrir une catégorie pour consulter ses transactions.

**4. Analyse des dépenses**

- Afficher les dépenses par catégorie.
- Présenter les dernières transactions.
- Comparer les dépenses prévues et réelles.
- Afficher l’évolution des dépenses et de l’épargne d’un mois à l’autre lorsque l’historique est disponible.

**5. Messages et alertes utiles**

- Signaler lorsqu’une catégorie dépasse son budget.
- Avertir lorsque le solde disponible devient faible.
- Mettre en évidence les progrès réalisés vers un objectif d’épargne.
- Fournir des conseils simples fondés sur les dépenses enregistrées, sans porter de jugement.

Les données du Dashboard doivent s’actualiser automatiquement après l’ajout, la modification ou la suppression d’une transaction.

Sur mobile, privilégier une présentation compacte, des indicateurs lisibles et un accès rapide aux opérations courantes.

## Étape 6 — Budget et Cashflow : Planification et suivi des transactions

### A. Section Budget

La section Budget permet de planifier et de gérer le revenu mensuel.

**Fonctionnalités :**

- Saisir et modifier le revenu mensuel net.
- Sélectionner la méthode budgétaire active.
- Répartir automatiquement le revenu entre les catégories selon les règles définies.
- Afficher, pour chaque catégorie, le montant planifié, le montant dépensé et le solde disponible.
- Modifier les montants ou les pourcentages alloués.
- Ajouter, renommer ou supprimer des catégories personnalisées.
- Définir un objectif d’épargne mensuel.
- Consulter le budget des mois précédents.
- Dupliquer un budget antérieur pour préparer un nouveau mois.
- Afficher un récapitulatif avant de confirmer une modification importante.

La modification d’une catégorie ou de la répartition du revenu doit actualiser les montants concernés et les indicateurs associés. Les dépenses déjà enregistrées doivent rester consultables et conserver leur historique.

Le système doit distinguer clairement :

- Le revenu mensuel.
- Le montant affecté aux catégories.
- Les dépenses réellement effectuées.
- Le montant restant dans chaque catégorie.
- Le montant réservé à l’épargne et l’épargne effectivement constituée.

### B. Section Cashflow

La section Cashflow permet d’enregistrer et de consulter les mouvements financiers réels.

**1. Vue principale**

- Afficher la liste chronologique des transactions.
- Distinguer visuellement les revenus et les dépenses.
- Afficher le montant, la catégorie, la date et la note éventuelle.
- Présenter le total des entrées, le total des sorties et le solde de la période.
- Permettre de filtrer les transactions par période, catégorie et type de mouvement.
- Proposer une recherche dans l’historique.

**2. Ajout d’une transaction**

Placer un bouton d’action principal facilement accessible, intitulé « Ajouter une transaction ».

À son activation, ouvrir une fenêtre de saisie contenant :

- **Type de transaction :** dépense ou revenu.
- **Montant :** somme de l’opération.
- **Catégorie :** catégorie budgétaire correspondante.
- **Date :** date de l’opération, avec la date du jour proposée par défaut.
- **Note facultative :** description ou précision sur l’opération.
- **Bouton principal :** « Enregistrer la transaction ».
- **Action secondaire :** « Annuler ».

Le formulaire doit vérifier que le montant est valide, que le type et la catégorie sont sélectionnés et que les informations nécessaires sont renseignées.

Après validation, afficher une confirmation claire, mettre à jour la liste des transactions et recalculer automatiquement les indicateurs du Dashboard et les soldes des catégories concernées.

**3. Gestion des transactions**

- Consulter les détails d’une transaction.
- Modifier une transaction existante.
- Supprimer une transaction après confirmation.
- Actualiser les totaux et les soldes après toute modification.
- Éviter les enregistrements en double lors d’une validation répétée.
- Afficher des états explicites lorsqu’aucune transaction n’est encore enregistrée.

**4. Cohérence financière**

- Une dépense doit diminuer le solde disponible de la catégorie concernée.
- Un revenu supplémentaire doit augmenter les revenus du mois et être pris en compte dans le solde disponible.
- Une dépense dépassant le budget d’une catégorie doit être autorisée, mais clairement signalée.
- Les transferts entre catégories ne doivent pas être comptabilisés comme de nouvelles dépenses.
- Les montants réservés à l’épargne doivent être distingués des dépenses de consommation.
- Toute opération doit être rattachée à la bonne période budgétaire.

**5. Expérience d’utilisation**  
Le formulaire d’ajout doit être rapide à remplir, adapté au clavier mobile et accessible depuis les principales sections de l’application. L’enregistrement d’une transaction doit nécessiter le moins d’étapes possible, tout en assurant la fiabilité des données financières.

---

## Résultat attendu

Produire un prototype PesaFlow cohérent et fonctionnel couvrant l’ensemble du parcours : découverte de l’application, authentification, configuration initiale, consultation du Dashboard, planification budgétaire et enregistrement des transactions.

L’ensemble doit offrir une expérience simple, fluide et fiable, adaptée aux habitudes financières quotidiennes et aux réalités africaines. Chaque action financière doit avoir un effet compréhensible sur les montants concernés, et les utilisateurs doivent pouvoir répondre à trois questions essentielles à tout moment :

1. Combien d’argent ai-je prévu de recevoir ce mois-ci ?
2. Combien ai-je dépensé et combien me reste-t-il ?
3. À quoi mon argent a-t-il servi, et combien ai-je réussi à épargner ?
```

**Points de contrôle**

- Le tech stack est choisi (avec l’aide de l’IA ou par vous-même).
- Les utilisateurs et les fonctionnalités de l’application sont listés.
- La spécification est écrite en Markdown et prête à servir de document de référence pour les agents.

## 3. Préparer l’environnement

Nous développons avec Angular et Firebase dans Antigravity IDE, mais vous pouvez utiliser l’IDE de votre choix : VS Code ou Claude Code.

### 3.1 Créer l’application en un seul prompt

Un seul prompt demande à l’agent de créer le projet, d’installer les skills au niveau du projet, puis d’ajouter AngularFire et Angular Material avec `ng add`. Collez-le tel quel dans l’agent :

```text
Crée une application Angular nommée PesaFlow avec SSR, Router et SCSS pour le style.

Ensuite, dans le dossier du projet, exécute ces commandes dans l’ordre :

1. Installe les skills au niveau du projet :
   npx skills add https://github.com/angular/skills
   npx skills add firebase/agent-skills --agent=antigravity
   npx skills add GoogleChrome/modern-web-guidance
2. Ajoute AngularFire :
   ng add @angular/fire@next
3. Ajoute Angular Material :
   ng add @angular/material

À la fin, vérifie que le projet compile et résume ce qui a été installé. Ne modifie rien d’autre et n’écris pas encore de code applicatif.
```

Les skills donnent à l’agent des consignes spécialisées par technologie (Angular, Firebase, web moderne). L’option `--agent=antigravity` correspond à l’IDE utilisé ici ; adaptez-la si vous travaillez avec un autre agent.

**Points de contrôle**

- Le projet Angular SSR (Router + SCSS) est créé.
- Les trois skills sont installés au niveau du projet.
- AngularFire et Angular Material sont ajoutés avec `ng add`, et le projet compile.

## 4. Context Engineering

> La qualité du résultat dépend de la qualité du contexte fourni à l’agent.

Trois leviers permettent de guider les agents :

| Levier | Dans ce codelab |
| --- | --- |
| Instructions du projet | Le fichier `AGENTS.md`, que tous les agents suivent pendant la génération de code |
| Contexte ciblé | Le README (contexte de l’application), l’architecture et les skills du projet |
| Context window | Un prompt par étape : chaque demande reste focalisée sur ce qu’elle doit produire (section 5) |

Avant de commencer à développer, nous définissons les instructions que les agents IA doivent suivre pendant la génération de code, ainsi que l’architecture de l’application.

### 4.1 Initialiser le README

Commencez par un README qui porte le contexte de l’application :

```text
Init README file with the app context
```

### 4.2 Créer l’architecture MVC

```text
Create the App architecture: MVC for PesaFlow
src/app/cores (models, services)
src/app/features
src/app/pages (auth, landingpage, home (dashboard, budget, cashflow))
src/app/shared
src/environments (dev and prod)
```

| Dossier | Rôle |
| --- | --- |
| `src/app/cores/` | Modèles et services globaux de l’application |
| `src/app/features/` | Fonctionnalités spécifiques |
| `src/app/pages/` | Pages : `auth`, `landingpage`, `home` (`dashboard`, `budget`, `cashflow`) |
| `src/app/shared/` | Composants, pipes, directives et utilitaires d’interface réutilisables |
| `src/environments/` | Configurations de développement et de production |

### 4.3 Générer `AGENTS.md`

Ce prompt demande à l’agent d’analyser le dépôt, puis de créer à la racine le fichier d’instructions que tous les futurs agents suivront, sans modifier le code de l’application.

```markdown
# Task: Generate `AGENTS.md` for PesaFlow

Analyze the existing repository, Angular version, installed dependencies, and coding conventions. Then create a comprehensive but concise `AGENTS.md` file at the project root to guide all future AI coding agents. **Do not modify application code.**

## 1. Project Stack

- **Frontend:** Angular
- **UI and styling:** Angular Material exclusively
- **Backend:** Firebase
- **Firebase integration:** AngularFire
- **Hosting:** Firebase Hosting
- **Architecture:** MVC adapted to Angular conventions

## 2. Project Architecture

Respect the following directory structure:

- `src/app/cores/`: Models and application-wide services.
- `src/app/features/`: Feature-specific functionality.
- `src/app/pages/`: Application pages:
  - `auth/`
  - `landingpage/`
  - `home/dashboard/`
  - `home/budget/`
  - `home/cashflow/`
- `src/app/shared/`: Reusable components, pipes, directives, and UI utilities.
- `src/environments/`: Development and production configurations.

Follow existing naming conventions, avoid duplicated logic, and separate presentation, business logic, and data access.

## 3. UI and Styling Rules

- Use Angular Material components exclusively for UI elements.
- Import individual standalone Material components and directives where supported by the installed version (e.g., `MatButton`, `MatCard`).
- Never import entire Material NgModules such as `MatButtonModule` or `MatCardModule`.
- Use custom CSS only for minor layout, spacing, sizing, and responsive adjustments.
- Do not introduce another UI library or styling framework.
- Prioritize mobile-first design, accessibility, responsiveness, and consistent visual patterns.

## 4. Firebase and AngularFire Rules

- Encapsulate all Firebase Authentication and Firestore operations in reusable services under `src/app/cores/services/`.
- Use AngularFire imports and APIs exclusively; never import or use the vanilla Firebase SDK directly.
- Never access Firebase directly from UI components.
- Centralize Firestore data operations in reusable services and reuse existing helpers rather than duplicating CRUD logic.

Follow these existing helper patterns:

- `createDocId(collectionPath)`: Generate a document ID, including when offline.
- `setData(collectionPath, data)`: Create or merge a document using `data.id`.
- `deleteData(collectionPath, id)`: Delete a document.
- `getCollectionRef(collectionPath)`: Return a collection reference.
- `getDocRef(collectionPath, docId)`: Return a document reference.
- `getCollectionData(...)`: Retrieve collection or collection-group data with filtering, ordering, and pagination.
- `docData(collectionPath, docId)`: Retrieve a single document.
- `watchDocData(collectionPath, docId)`: Observe real-time document updates.
- `formatedTimestamp(timestamp)`: Convert Firestore timestamps into JavaScript `Date` objects.

Preserve the established service implementation patterns, including:

- `runInInjectionContext` where required.
- `setDoc` with `{ merge: true }`.
- Real-time collection and document snapshots.
- Correct ordering of Firestore filters, pagination cursors, and limits.
- Consistent document IDs and metadata handling.

Before creating new helpers, inspect existing services and extend them where appropriate.

Enforce user-specific data isolation, authentication checks, error handling, and appropriate Firestore security rules.

## 5. Angular and Code Quality Rules

- Follow the conventions and APIs supported by the installed Angular version.
- Use TypeScript with explicit types; avoid `any` unless necessary.
- Keep components focused on presentation and user interactions.
- Place business logic and data access in services.
- Prefer reusable components and maintainable, readable code.
- Follow existing Angular forms, routing, dependency injection, and reactive programming patterns.
- Avoid unnecessary dependencies, abstractions, or architectural changes.
- Keep Firebase configuration in the appropriate environment files and never expose secrets.
- Ensure compatibility with existing build configurations and Firebase Hosting.

## Expected Output

Create only the root `AGENTS.md` file.

Make the instructions actionable, concise, and consistent with the actual repository. If existing code differs from the intended conventions, document the preferred rules without modifying application code.

Do not implement features, refactor files, install dependencies, or change project configuration.
```

**Points de contrôle**

- Le README contient le contexte de l’application.
- L’arborescence `cores`, `features`, `pages`, `shared` et `environments` existe.
- `AGENTS.md` est présent à la racine et le code de l’application n’a pas été modifié.

## 5. Décomposer le travail : la chaîne de prompts

Une application ou une fonctionnalité complexe ne se construit pas avec un seul prompt géant. Construisez PesaFlow avec une **chaîne de prompts** (chain-of-prompts), étape par étape. Vous pouvez utiliser un chatbot pour vous aider à restructurer ces prompts.

Chaque prompt s’appuie sur `AGENTS.md` et sur le résultat du précédent. Exécutez-les dans l’ordre et vérifiez le résultat (section « Completion » de chaque prompt) avant de passer au suivant.

| Prompt | Objectif |
| --- | --- |
| 1 | Modèles et services cœur |
| 2 | Landing page publique |
| 3 | Authentification |
| 4 | Onboarding |
| 5 | Shell de l’espace Home et interfaces des pages |
| 6 | Budget, de bout en bout |
| 7 | Cashflow, de bout en bout |
| 8 | Analyses du Dashboard |

### Prompt 1 — Modèles et services cœur

Les fondations : types TypeScript et services réutilisables, avec isolation des données par utilisateur.

```markdown
# Step 1: Generate Models and Core Services

Analyze the existing PesaFlow repository and `AGENTS.md`. Implement the TypeScript interfaces and reusable core services required by the application.

## Models

Create strongly typed interfaces for:

- User profile and onboarding preferences.
- Budget, budgeting method, and budget categories.
- Cashflow transactions (income and expenses).
- Monthly financial summaries and savings goals.

Include document IDs, ownership, timestamps, currency, and monthly period fields where appropriate. Use consistent types and naming conventions.

## Services

Create or extend reusable services under `src/app/cores/services/` for:

- Firebase Authentication integration using AngularFire.
- Firestore CRUD operations and real-time data retrieval.
- User profile and onboarding preferences.
- Budget and category management.
- Cashflow transaction management.

Use the existing Firestore helper patterns defined in `AGENTS.md`, including `createDocId`, `setData`, `deleteData`, `getCollectionData`, `docData`, and `watchDocData`.

Ensure all user-owned data is isolated by authenticated user ID. Use typed observables, appropriate validation, and error handling.

## Completion

Verify TypeScript compilation and resolve errors introduced by this step. Summarize the models and services created.
```

### Prompt 2 — Landing page

La page publique de présentation de PesaFlow.

```markdown
# Step 2: Implement the PesaFlow Landing Page

Implement the public landing page using the existing project structure and `AGENTS.md`.

## Sections

1. AppToolbar with the PesaFlow name and navigation menus.
2. Hero section with the headline: "Chaque franc compte. Donnez un objectif à votre argent."
3. Primary CTA: "Commencer gratuitement".
4. Secondary CTA: "Découvrir comment ça marche".
5. Benefits section explaining budget planning, expense tracking, spending control, and savings.
6. Budgeting methods section covering:
   - The 50/30/20 rule.
   - Pay yourself first.
   - Zero-based budgeting.
   - Emergency funds.
   - Regular budget reviews.
7. Product preview showing Dashboard, Budget, and Cashflow.
8. Final CTA and footer with useful links.

Explain each budgeting method in simple French, with practical examples adapted to African financial realities.

## UI Requirements

- Use Angular Material components exclusively.
- Use individual Material component imports, never NgModule imports.
- Build a clean, professional, mobile-first responsive layout.
- Use custom CSS only for spacing, layout, and responsive adjustments.
- Provide accessible navigation and clear CTA hierarchy.

## Navigation

Connect the CTA buttons to the appropriate authentication routes. Use existing routes where available.

## Completion

Test the layout on mobile and desktop, verify navigation, and ensure the application compiles successfully.
```

### Prompt 3 — Authentification

Le parcours complet : connexion Google, lien e-mail sans mot de passe, routes protégées et redirections.

```markdown
# Step 3: Implement Authentication

Implement the complete authentication experience for PesaFlow using the existing AngularFire authentication service.

## Features

- Sign in with Google.
- Sign in or register using an email link without a password.
- Email input with validation.
- Confirmation state after requesting an email link.
- Resend email link functionality.
- Clear loading, success, and error states.
- Handle expired links and authentication failures.
- Sign-out functionality.

## Authentication Flow

- Redirect unauthenticated users to the authentication page when accessing protected routes.
- After successful authentication, check whether onboarding has been completed.
- Redirect new users to onboarding.
- Redirect returning users to the Dashboard.
- Preserve the intended destination when appropriate.

## UI Requirements

Use Angular Material components, individual standalone imports, responsive forms, clear validation messages, and accessible controls.

## Completion

Test Google authentication, email-link handling, sign-out, protected routes, and redirects. Do not proceed by leaving authentication flows as placeholders.
```

### Prompt 4 — Onboarding

Le parcours guidé de configuration du premier budget.

```markdown
# Step 4: Implement the PesaFlow Onboarding Flow

Implement a guided onboarding experience for newly authenticated users using the existing models and services.

## Step 1: Financial Profile

Collect:

- Preferred currency: CDF, FCFA, or USD.
- Net monthly income.
- Usual income payment date or period.

## Step 2: Budgeting Method

Offer:

- 50/30/20 rule.
- Pay yourself first.
- Zero-based budgeting.
- Custom budgeting method.

Explain each method clearly and show its proposed allocation.

## Step 3: Budget Customization

Allow users to:

- Edit allocation percentages or amounts.
- Add, rename, and remove categories.
- Define monthly savings goals.
- Configure categories such as housing, food, transport, health, education, communication, family, leisure, debt, and savings.

Validate that allocations are consistent with the available income. Display warnings when percentages or amounts do not balance.

## Step 4: Review and Confirmation

Display:

- Monthly income and currency.
- Selected budgeting method.
- Categories and their allocations.
- Allocation percentages and amounts.
- Expected savings.

Allow users to return to previous steps before confirming.

## Persistence and Navigation

- Save onboarding preferences and the initial monthly budget through existing services.
- Associate all records with the authenticated user.
- Prevent duplicate initial budgets if the process is repeated.
- Mark onboarding as complete only after successful persistence.
- Redirect the user to the Dashboard.

## UI Requirements

Use Angular Material stepper or equivalent Material components, responsive forms, progress indicators, and clear validation feedback.

## Completion

Test the complete onboarding flow, persistence, validation, and redirect behavior.
```

### Prompt 5 — Shell de l’espace Home et interfaces des pages

Interface uniquement : mise en page, navigation et présentation, sans logique métier ni opérations Firebase pour le Dashboard, le Budget et le Cashflow.

```markdown
# Step 5: Build the Home Application Shell and Page UIs

Implement the responsive UI for the authenticated PesaFlow home area. This step is strictly for layout, navigation, and visual presentation. Do not implement business logic or Firebase data operations for Dashboard, Budget, or Cashflow.

## Application Shell

Create a shared Home layout with:

- Responsive application toolbar.
- PesaFlow branding.
- User menu and sign-out entry.
- Mobile bottom navigation with three sections:
  1. Dashboard
  2. Budget
  3. Cashflow
- Appropriate desktop navigation, such as a toolbar or sidenav.
- Clear active-route indicators.

## Dashboard UI

Build the visual layout with:

- Summary cards for income, allocated budget, expenses, available balance, and savings.
- Category budget progress indicators.
- Recent transactions preview.
- Chart placeholders.
- Month selector and filter controls.

## Budget UI

Build the visual layout with:

- Monthly income and selected budgeting method.
- Budget allocation summary.
- Category budget list or table placeholder.
- Add/edit budget action.
- Empty, loading, and error-state placeholders.

## Cashflow UI

Build the visual layout with:

- Income, expense, and balance summary cards.
- Transaction search and filter controls.
- Transaction table or list placeholder.
- Add transaction action.
- Empty, loading, and error-state placeholders.

## UI Rules

- Use Angular Material exclusively and import individual components.
- Use `MatCard` for summary cards and Material navigation components.
- Make the interface mobile-first and responsive.
- Keep styles limited to layout, spacing, and responsive refinements.
- Reuse shared components where appropriate.
- Use mock presentation data only when needed to demonstrate the UI. Keep it separate from production services.

## Completion

Verify responsive behavior, navigation between all three sections, and compilation. Do not implement actual budget or transaction CRUD in this step.
```

### Prompt 6 — Budget, de bout en bout

La page Budget complète : interface, logique métier, validation et intégration Firestore, en réutilisant les modèles et services du prompt 1.

```markdown
# Step 6: Implement the Budget Feature End-to-End

Implement the complete Budget page, including UI, business logic, validation, and Firestore integration. Reuse the models and services created in Step 1.

## Features

- Display the selected month and monthly net income.
- Select and display the active budgeting method.
- Calculate allocations automatically from configured percentages or amounts.
- Display each category's planned amount, actual spending, and remaining balance.
- Add, edit, and delete budget categories.
- Edit allocation percentages or fixed amounts.
- Configure monthly savings targets.
- Navigate between monthly budgets.
- Copy a previous month's budget to a new month.
- Warn when allocations exceed income or percentages do not balance.
- Allow spending above a category's budget, but clearly flag the overrun.

## Add/Edit Dialog

Use `MatDialog` for creating and editing budget categories or allocations.

The dialog should include:

- Category name.
- Allocation type: percentage or fixed amount.
- Allocation value.
- Optional description.
- Validation and clear error messages.
- Save and cancel actions.

Use reactive forms consistent with the existing project conventions.

## Budget List

Use `MatTable` to display:

- Category.
- Allocation percentage.
- Planned amount.
- Actual spending.
- Remaining balance.
- Actions to edit or delete.

Make the table responsive and provide an appropriate mobile presentation.

## Business Rules

- Keep planned allocations separate from actual transactions.
- Recalculate balances when allocations change.
- Preserve transaction history when editing a budget.
- Prevent duplicate categories where appropriate.
- Scope all records to the authenticated user and correct monthly period.
- Handle loading, empty, success, and error states.
- Update related views when Firestore data changes.

## Completion

Verify create, read, update, and delete operations; calculations; validation; monthly navigation; and data isolation. Ensure the Dashboard can consume the resulting budget data.
```

### Prompt 7 — Cashflow, de bout en bout

La page Cashflow complète : saisie et gestion des transactions, filtres, calculs financiers et synchronisation en temps réel.

```markdown
# Step 7: Implement the Cashflow Feature End-to-End

Implement the complete Cashflow page with its UI, transaction logic, validation, and Firestore integration.

## Transaction Types

Support:

- Income.
- Expense.

## Add/Edit Transaction Dialog

Use `MatDialog` for creating and editing transactions.

The reactive form must contain:

- Transaction type.
- Amount.
- Budget category.
- Transaction date, defaulting to today.
- Optional note.
- Save and cancel actions.

Validate required fields and ensure the amount is positive and valid.

## Transaction List

Use `MatTable` to display:

- Date.
- Transaction type.
- Category.
- Description or note.
- Amount.
- Actions to edit or delete.

Add:

- Search.
- Date-range filtering.
- Category filtering.
- Transaction-type filtering.
- Pagination where appropriate.
- Clear empty and loading states.

## Financial Calculations

Display:

- Total income for the selected period.
- Total expenses.
- Net cashflow.
- Available balance.

Apply these rules:

- Expenses reduce the remaining balance of their assigned budget category.
- Additional income updates the income total and available balance.
- Transactions above a category's allocation are permitted but must be flagged.
- Editing or deleting a transaction must recalculate all affected totals.
- Transfers between budget categories must not be recorded as new expenses.
- Savings allocations must not be double-counted as consumption expenses.
- Transactions must belong to the correct user and financial period.

## Persistence

- Use the existing core services and AngularFire helpers.
- Prevent duplicate submissions.
- Display success and error feedback.
- Update the transaction list and related financial summaries in real time.
- Preserve accurate transaction history and timestamps.

## UI Requirements

Use Angular Material exclusively. Make the table and transaction dialog responsive, with mobile-friendly controls and clear distinctions between income and expenses.

## Completion

Test CRUD operations, filtering, validation, calculations, category balances, and synchronization with Budget and Dashboard data.
```

### Prompt 8 — Analyses du Dashboard

Le Dashboard alimenté par les données réelles du Budget et du Cashflow. Ce prompt utilise la bibliothèque `ngx-echarts` pour les graphiques interactifs.

```markdown
# Step 8: Implement the Dashboard Analytics

Implement the complete Dashboard using real data from the Budget and Cashflow services. Remove any temporary mock data introduced in Step 5.

## Summary Cards

Use `MatCard` to display:

- Monthly income.
- Total budget allocated.
- Actual expenses.
- Available balance.
- Savings allocated and achieved.

Ensure the calculations are consistent with the Budget and Cashflow business rules and avoid double-counting savings.

## Filters and Period Selection

- Use `MatButtonToggle` for suitable filter options, such as month, quarter, or custom period.
- Use `MatDatepicker` for selecting dates or custom reporting periods.
- Refresh all indicators, charts, and transaction summaries when filters change.

## Charts

Use `ngx-echarts` for interactive financial charts, including:

- Expenses by category.
- Budgeted versus actual expenses.
- Monthly income versus expenses.
- Savings progress.

Use readable labels, tooltips, legends, and responsive chart containers. Handle empty datasets gracefully.

## Category Tracking

Display each category with:

- Planned allocation.
- Amount spent.
- Remaining balance.
- Percentage consumed.
- Warning when approaching or exceeding the budget.

## Recent Transactions

Display the latest transactions with date, category, type, and amount. Provide a navigation link to the complete Cashflow page.

## Visual Structure

- Use `MatDivider` to separate logical groups of components and improve visual hierarchy.
- Use `MatCard` for financial summaries.
- Keep spacing consistent and avoid excessive visual decoration.
- Ensure the Dashboard works well on mobile and desktop.

## Real-Time Behavior

- Subscribe to relevant data through existing services.
- Refresh financial summaries when budgets or transactions change.
- Correctly handle loading, errors, empty states, and users without historical data.

## Completion

Verify all calculations against known examples, confirm that filters update the entire Dashboard, test chart responsiveness, and ensure real-time updates work correctly.

Finally, run the project's available checks and resolve errors introduced by this step. Do not refactor unrelated features.
```

## 6. Récapitulatif

Félicitations ! Vous avez parcouru la démarche complète, de l’idée à une application structurée :

1. **Spécifier** : tech stack, utilisateurs, fonctionnalités et règles métier sont écrits en Markdown avant toute ligne de code.
2. **Préparer l’environnement** : projet Angular SSR, skills Angular, Firebase et web moderne installés au niveau du projet.
3. **Fournir le bon contexte** : README, architecture MVC et `AGENTS.md` pour que chaque agent suive les mêmes règles.
4. **Décomposer le travail** : huit prompts enchaînés, chacun avec sa section « Completion » pour vérifier avant d’avancer.

### Ce que vous obtenez

Un prototype PesaFlow cohérent et fonctionnel couvrant tout le parcours : découverte de l’application, authentification, configuration initiale, consultation du Dashboard, planification budgétaire et enregistrement des transactions.

### Bonnes pratiques à retenir

- Spécifiez avant de coder, et utilisez l’IA pour vous aider à spécifier.
- Écrivez vos prompts en Markdown pour leur donner une hiérarchie claire.
- Donnez un contexte durable aux agents (README, `AGENTS.md`, skills) plutôt que de le répéter à chaque demande.
- Découpez le travail : un prompt par étape, jamais un seul prompt géant.
- Exigez des vérifications à la fin de chaque étape (compilation, tests, calculs, isolation des données).
- Gardez les règles métier explicites : isolation des données par utilisateur, pas de double comptage de l’épargne, dépassement de budget autorisé mais signalé.

Résultat : moins de code généré à l’aveugle, moins de corrections inutiles et davantage d’applications fiables, maintenables et livrées jusqu’au bout.
