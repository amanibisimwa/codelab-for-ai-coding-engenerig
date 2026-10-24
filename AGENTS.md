# Instructions for AI Coding Agents (`AGENTS.md`)

Guidelines, architectural rules, and technical standards for AI coding agents working on this project.

---

## 1. Project Stack

- **Framework:** Angular 21+ (standalone components, Signals, Router, SSR with hydration).
- **UI & Components:** **Angular Material 21 & Angular CDK exclusively**.
- **Styles:** SCSS with Angular Material 3 theming (`@angular/material`).
- **Testing & Tools:** Vitest (`npm test`), Angular CLI (`@angular/build:application`), Prettier.
- **Architecture Pattern:** MVC adapted to modern Angular conventions.
- **Backend:** **None.** This website is 100% static and content-focused.

---

## 2. Project Architecture & Directory Structure

Respect the following directory structure strictly:

```text
src/
├── app/
│   ├── cores/             # Application-wide models, state tokens, and core services
│   │   ├── models/        # Strongly typed TypeScript interfaces and contracts
│   │   ├── services/      # Navigation state management and data access
│   │   └── data/          # Page registry, data sources, and verbatim prompt snippets
│   ├── features/          # Feature-specific modules & composite UI (e.g., shell, navigation)
│   ├── pages/             # Application route page components (standalone)
│   └── shared/            # Reusable UI components, pipes, directives, and UI utilities
│       └── components/    # Reusable presentation widgets (code-block, callout, table, etc.)
```

### Architectural Principles
- **Separation of Concerns:** Components are strictly for presentation and user interaction handling. All business logic and navigation state belong in services (`src/app/cores/services/`).
- **No Duplication:** Shared routines, formatting, and helper methods must be centralized in `shared/` or `cores/`.
- **Naming Conventions:** Kebab-case filenames with role suffixes:
  - Components: `name.component.ts`, `name.component.html`, `name.component.scss`
  - Services: `name.service.ts`
  - Models/Interfaces: `name.model.ts`
  - Routes: `app.routes.ts` or `feature.routes.ts`

---

## 3. UI and Styling Rules

- **Angular Material Exclusive:** Use Angular Material for all interactive and structural UI elements (`MatButton`, `MatCard`, `MatIcon`, `MatToolbar`, `MatSidenav`, `MatProgressBar`, `MatExpansionPanel`, `MatTable`, etc.).
- **Standalone Component Imports Only:** Always import individual standalone components/directives directly in component `imports: [...]`.  
  *Never* import legacy NgModule umbrellas (e.g., do **not** import `MatButtonModule` or `MatCardModule`).
- **No External UI Frameworks:** Do **not** install or introduce Tailwind CSS, Bootstrap, or any secondary UI library.
- **Custom SCSS Boundaries:** Limit custom SCSS to layout structure (Flexbox/Grid), component spacing, sizing, and responsive media queries. Use Material 3 CSS variables (`var(--mat-sys-...)`) and mixins (`mat.theme`).
- **Mobile-First & Responsive:** Guarantee flawless usability down to 360px viewport width. Ensure tables and code blocks scroll inside their own containers; the document body must never scroll horizontally.
- **Accessibility (a11y):**
  - Exactly one `h1` per page with a logical heading hierarchy (`h1` > `h2` > `h3`).
  - Add explicit `aria-label` to all icon-only buttons.
  - Maintain keyboard navigability and visible focus indicators.

---

## 4. Angular & Code Quality Standards

- **Standalone Paradigm:** All components, directives, and pipes must be standalone (default in Angular 21).
- **Signals & Reactivity:** Prioritize Angular Signals (`signal()`, `computed()`, `input()`, `output()`, `model()`) for reactive state and component I/O.
- **Modern Control Flow:** Use built-in control flow exclusively:
  - `@if (...) { ... } @else { ... }`
  - `@for (item of items; track item.id) { ... } @empty { ... }`
  - `@switch (...) { @case (...) { ... } }`
  - Do **not** use deprecated structural directives like `*ngIf` or `*ngFor`.
- **Dependency Injection:** Prefer `inject(Service)` instead of constructor parameter injection.
- **TypeScript Strictness:** Strict typing throughout. Avoid `any` unless strictly unavoidable; write explicit interfaces for all data structures.
- **Routing:** Use lazy-loading with `loadComponent: () => import(...)` for page routes.
- **SSR & Hydration Safety:**
  - Never reference browser globals (`window`, `document`, `localStorage`, `navigator`) during server-side execution.
  - Guard platform-specific calls using `isPlatformBrowser(platformId)` or run them inside `afterNextRender()`.
- **Angular Template Character Escaping:** In HTML templates, escape `@`, `{`, and `}` when displaying code or raw text:
  - `@` &rarr; `&#64;`
  - `{` &rarr; `&#123;`
  - `}` &rarr; `&#125;`

---

## 5. Content & Scope Rules

- **Zero Backend Dependencies:** Do not add Firebase, AngularFire, Firestore, or database packages to `package.json`.
- **Content Fidelity:** Text, prompts, code snippets, and checkpoints from the codelab source must be reproduced faithfully. Prompts and commands in English remain in English; explanatory text remains in French.
- **No Unsolicited Abstractions:** Keep components focused and maintainable.

---

## 6. Guidelines for AI Agents

1. **Do not modify application code unless explicitly requested.**
2. **Do not install unsolicited packages or introduce unnecessary abstractions.**
3. **Verify builds:** Validate changes by running `npm run build` or checking for lint/type errors before completing tasks.
4. **Preserve comments and existing documentation.**
