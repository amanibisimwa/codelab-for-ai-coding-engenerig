export const SPEC_MD_SNIPPET = `# PesaFlow — Gestion des dépenses individuelles mensuelles

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
3. À quoi mon argent a-t-il servi, et combien ai-je réussi à épargner ?`;
