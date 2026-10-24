import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'introduction',
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('./pages/introduction/introduction.component').then(
        (m) => m.IntroductionComponent
      ),
  },
  {
    path: 'projet-exemple',
    loadComponent: () =>
      import('./pages/projet-exemple/projet-exemple.component').then(
        (m) => m.ProjetExempleComponent
      ),
  },
  {
    path: 'spec-driven-development',
    loadComponent: () =>
      import('./pages/spec-driven-development/spec-driven-development.component').then(
        (m) => m.SpecDrivenDevelopmentComponent
      ),
  },
  {
    path: 'preparer-environnement',
    loadComponent: () =>
      import('./pages/preparer-environnement/preparer-environnement.component').then(
        (m) => m.PreparerEnvironnementComponent
      ),
  },
  {
    path: 'context-engineering',
    loadComponent: () =>
      import('./pages/context-engineering/context-engineering.component').then(
        (m) => m.ContextEngineeringComponent
      ),
  },
  {
    path: 'chaine-de-prompts',
    loadComponent: () =>
      import('./pages/chaine-de-prompts/chaine-de-prompts.component').then(
        (m) => m.ChaineDePromptsComponent
      ),
  },
  {
    path: 'recapitulatif',
    loadComponent: () =>
      import('./pages/recapitulatif/recapitulatif.component').then(
        (m) => m.RecapitulatifComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'introduction',
  },
];
