import { SPEC_MD_SNIPPET } from './spec.snippet';

export const README_PROMPT_SNIPPET = `Init README file with the app context:

${SPEC_MD_SNIPPET}`;

export const MVC_PROMPT_SNIPPET = `Create the App architecture: MVC for PesaFlow
src/app/cores (models, services)
src/app/features
src/app/pages (auth, landingpage, home (dashboard, budget, cashflow))
src/app/shared
src/environments (dev and prod)

After creating the environment files, ask the user for their Firebase configuration in order to finish.`;

export const AGENTS_PROMPT_SNIPPET = `# Task: Generate \`AGENTS.md\` for PesaFlow

Analyze the existing repository, Angular version, installed dependencies, and coding conventions. Then create a comprehensive but concise \`AGENTS.md\` file at the project root to guide all future AI coding agents. **Do not modify application code.**

## 1. Project Stack

- **Frontend:** Angular
- **UI and styling:** Angular Material exclusively
- **Backend:** Firebase
- **Firebase integration:** AngularFire
- **Hosting:** Firebase App Hosting
- **Architecture:** MVC adapted to Angular conventions

## 2. Project Architecture

Respect the following directory structure:

- \`src/app/cores/\`: Models and application-wide services.
- \`src/app/features/\`: Feature-specific functionality.
- \`src/app/pages/\`: Application pages:
  - \`auth/\`
  - \`landingpage/\`
  - \`home/dashboard/\`
  - \`home/budget/\`
  - \`home/cashflow/\`
- \`src/app/shared/\`: Reusable components, pipes, directives, and UI utilities.
- \`src/environments/\`: Development and production configurations.

Follow existing naming conventions, avoid duplicated logic, and separate presentation, business logic, and data access.

## 3. UI and Styling Rules

- Use Angular Material components exclusively for UI elements.
- Import individual standalone Material components and directives where supported by the installed version (e.g., \`MatButton\`, \`MatCard\`).
- Never import entire Material NgModules such as \`MatButtonModule\` or \`MatCardModule\`.
- Use custom CSS only for minor layout, spacing, sizing, and responsive adjustments.
- Do not introduce another UI library or styling framework.
- Prioritize mobile-first design, accessibility, responsiveness, and consistent visual patterns.

## 4. Firebase and AngularFire Rules

- Encapsulate all Firebase Authentication and Firestore operations in reusable services under \`src/app/cores/services/\`.
- Use AngularFire imports and APIs exclusively; never import or use the vanilla Firebase SDK directly.
- Never access Firebase directly from UI components.
- Centralize Firestore data operations in reusable services and reuse existing helpers rather than duplicating CRUD logic.

Follow these existing helper patterns:

- \`createDocId(collectionPath)\`: Generate a document ID, including when offline.
- \`setData(collectionPath, data)\`: Create or merge a document using \`data.id\`.
- \`deleteData(collectionPath, id)\`: Delete a document.
- \`getCollectionRef(collectionPath)\`: Return a collection reference.
- \`getDocRef(collectionPath, docId)\`: Return a document reference.
- \`getCollectionData(...)\`: Retrieve collection or collection-group data with filtering, ordering, and pagination.
- \`docData(collectionPath, docId)\`: Retrieve a single document.
- \`watchDocData(collectionPath, docId)\`: Observe real-time document updates.
- \`formatedTimestamp(timestamp)\`: Convert Firestore timestamps into JavaScript \`Date\` objects.

Preserve the established service implementation patterns, including:

- \`runInInjectionContext\` where required.
- \`setDoc\` with \`{ merge: true }\`.
- Real-time collection and document snapshots.
- Correct ordering of Firestore filters, pagination cursors, and limits.
- Consistent document IDs and metadata handling.

Before creating new helpers, inspect existing services and extend them where appropriate.

Enforce user-specific data isolation, authentication checks, error handling, and appropriate Firestore security rules.

## 5. Angular and Code Quality Rules

- Follow the conventions and APIs supported by the installed Angular version.
- Use TypeScript with explicit types; avoid \`any\` unless necessary.
- Keep components focused on presentation and user interactions.
- Place business logic and data access in services.
- Prefer reusable components and maintainable, readable code.
- Follow existing Angular forms, routing, dependency injection, and reactive programming patterns.
- Avoid unnecessary dependencies, abstractions, or architectural changes.
- Keep Firebase configuration in the appropriate environment files and never expose secrets.
- Ensure compatibility with existing build configurations and Firebase App Hosting.

## Expected Output

Create only the root \`AGENTS.md\` file.

Make the instructions actionable, concise, and consistent with the actual repository. If existing code differs from the intended conventions, document the preferred rules without modifying application code.

Do not implement features, refactor files, install dependencies, or change project configuration.`;
