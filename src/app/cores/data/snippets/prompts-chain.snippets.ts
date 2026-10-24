import { PromptItem } from '../../models/codelab-page.model';

export const PROMPT_1_SNIPPET = `# Step 1: Generate Models and Core Services

Analyze the existing PesaFlow repository and \`AGENTS.md\`. Implement the TypeScript interfaces and reusable core services required by the application.

## Models

Create strongly typed interfaces for:

- User profile and onboarding preferences.
- Budget, budgeting method, and budget categories.
- Cashflow transactions (income and expenses).
- Monthly financial summaries and savings goals.

Include document IDs, ownership, timestamps, currency, and monthly period fields where appropriate. Use consistent types and naming conventions.

## Services

Create or extend reusable services under \`src/app/cores/services/\` for:

- Firebase Authentication integration using AngularFire.
- Firestore CRUD operations and real-time data retrieval.
- User profile and onboarding preferences.
- Budget and category management.
- Cashflow transaction management.

Use the existing Firestore helper patterns defined in \`AGENTS.md\`, including \`createDocId\`, \`setData\`, \`deleteData\`, \`getCollectionData\`, \`docData\`, and \`watchDocData\`.

Ensure all user-owned data is isolated by authenticated user ID. Use typed observables, appropriate validation, and error handling.

## Completion

Verify TypeScript compilation and resolve errors introduced by this step. Summarize the models and services created.`;

export const PROMPT_2_SNIPPET = `# Step 2: Implement the PesaFlow Landing Page

Implement the public landing page using the existing project structure and \`AGENTS.md\`.

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

Test the layout on mobile and desktop, verify navigation, and ensure the application compiles successfully.`;

export const PROMPT_3_SNIPPET = `# Step 3: Implement Authentication

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

Test Google authentication, email-link handling, sign-out, protected routes, and redirects. Do not proceed by leaving authentication flows as placeholders.`;

export const PROMPT_4_SNIPPET = `# Step 4: Implement the PesaFlow Onboarding Flow

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

Test the complete onboarding flow, persistence, validation, and redirect behavior.`;

export const PROMPT_5_SNIPPET = `# Step 5: Build the Home Application Shell and Page UIs

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
- Use \`MatCard\` for summary cards and Material navigation components.
- Make the interface mobile-first and responsive.
- Keep styles limited to layout, spacing, and responsive refinements.
- Reuse shared components where appropriate.
- Use mock presentation data only when needed to demonstrate the UI. Keep it separate from production services.

## Completion

Verify responsive behavior, navigation between all three sections, and compilation. Do not implement actual budget or transaction CRUD in this step.`;

export const PROMPT_6_SNIPPET = `# Step 6: Implement the Budget Feature End-to-End

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

Use \`MatDialog\` for creating and editing budget categories or allocations.

The dialog should include:

- Category name.
- Allocation type: percentage or fixed amount.
- Allocation value.
- Optional description.
- Validation and clear error messages.
- Save and cancel actions.

Use reactive forms consistent with the existing project conventions.

## Budget List

Use \`MatTable\` to display:

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

Verify create, read, update, and delete operations; calculations; validation; monthly navigation; and data isolation. Ensure the Dashboard can consume the resulting budget data.`;

export const PROMPT_7_SNIPPET = `# Step 7: Implement the Cashflow Feature End-to-End

Implement the complete Cashflow page with its UI, transaction logic, validation, and Firestore integration.

## Transaction Types

Support:

- Income.
- Expense.

## Add/Edit Transaction Dialog

Use \`MatDialog\` for creating and editing transactions.

The reactive form must contain:

- Transaction type.
- Amount.
- Budget category.
- Transaction date, defaulting to today.
- Optional note.
- Save and cancel actions.

Validate required fields and ensure the amount is positive and valid.

## Transaction List

Use \`MatTable\` to display:

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

Test CRUD operations, filtering, validation, calculations, category balances, and synchronization with Budget and Dashboard data.`;

export const PROMPT_8_SNIPPET = `# Step 8: Implement the Dashboard Analytics

Implement the complete Dashboard using real data from the Budget and Cashflow services. Remove any temporary mock data introduced in Step 5.

## Summary Cards

Use \`MatCard\` to display:

- Monthly income.
- Total budget allocated.
- Actual expenses.
- Available balance.
- Savings allocated and achieved.

Ensure the calculations are consistent with the Budget and Cashflow business rules and avoid double-counting savings.

## Filters and Period Selection

- Use \`MatButtonToggle\` for suitable filter options, such as month, quarter, or custom period.
- Use \`MatDatepicker\` for selecting dates or custom reporting periods.
- Refresh all indicators, charts, and transaction summaries when filters change.

## Charts

Use \`ngx-echarts\` for interactive financial charts, including:

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

- Use \`MatDivider\` to separate logical groups of components and improve visual hierarchy.
- Use \`MatCard\` for financial summaries.
- Keep spacing consistent and avoid excessive visual decoration.
- Ensure the Dashboard works well on mobile and desktop.

## Real-Time Behavior

- Subscribe to relevant data through existing services.
- Refresh financial summaries when budgets or transactions change.
- Correctly handle loading, errors, empty states, and users without historical data.

## Completion

Verify all calculations against known examples, confirm that filters update the entire Dashboard, test chart responsiveness, and ensure real-time updates work correctly.

Finally, run the project's available checks and resolve errors introduced by this step. Do not refactor unrelated features.`;

export const PROMPTS_CHAIN_ITEMS: PromptItem[] = [
  {
    id: 'prompt-1',
    number: 1,
    title: 'Modèles et services cœur',
    description: 'Les fondations : types TypeScript et services réutilisables, avec isolation des données par utilisateur.',
    snippet: PROMPT_1_SNIPPET,
  },
  {
    id: 'prompt-2',
    number: 2,
    title: 'Landing page publique',
    description: 'La page publique de présentation de PesaFlow.',
    snippet: PROMPT_2_SNIPPET,
  },
  {
    id: 'prompt-3',
    number: 3,
    title: 'Authentification',
    description: 'Le parcours complet : connexion Google, lien e-mail sans mot de passe, routes protégées et redirections.',
    snippet: PROMPT_3_SNIPPET,
  },
  {
    id: 'prompt-4',
    number: 4,
    title: 'Onboarding',
    description: 'Le parcours guidé de configuration du premier budget.',
    snippet: PROMPT_4_SNIPPET,
  },
  {
    id: 'prompt-5',
    number: 5,
    title: 'Shell de l’espace Home et interfaces des pages',
    description: 'Interface uniquement : mise en page, navigation et présentation, sans logique métier ni opérations Firebase pour le Dashboard, le Budget et le Cashflow.',
    snippet: PROMPT_5_SNIPPET,
  },
  {
    id: 'prompt-6',
    number: 6,
    title: 'Budget, de bout en bout',
    description: 'La page Budget complète : interface, logique métier, validation et intégration Firestore, en réutilisant les modèles et services du prompt 1.',
    snippet: PROMPT_6_SNIPPET,
  },
  {
    id: 'prompt-7',
    number: 7,
    title: 'Cashflow, de bout en bout',
    description: 'La page Cashflow complète : saisie et gestion des transactions, filtres, calculs financiers et synchronisation en temps réel.',
    snippet: PROMPT_7_SNIPPET,
  },
  {
    id: 'prompt-8',
    number: 8,
    title: 'Analyses du Dashboard',
    description: 'Le Dashboard alimenté par les données réelles du Budget et du Cashflow. Ce prompt utilise la bibliothèque ngx-echarts pour les graphiques interactifs.',
    snippet: PROMPT_8_SNIPPET,
  },
];
