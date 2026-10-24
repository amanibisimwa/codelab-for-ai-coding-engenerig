import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CalloutComponent } from '../../shared/components/callout/callout.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { CheckpointsComponent } from '../../shared/components/checkpoints/checkpoints.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';
import {
  README_PROMPT_SNIPPET,
  MVC_PROMPT_SNIPPET,
  AGENTS_PROMPT_SNIPPET,
} from '../../cores/data/snippets/context-engineering.snippets';
import { TableColumn } from '../../cores/models/codelab-page.model';

@Component({
  selector: 'app-context-engineering',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    PageHeaderComponent,
    CalloutComponent,
    CodeBlockComponent,
    DataTableComponent,
    CheckpointsComponent,
    PageNavComponent,
  ],
  templateUrl: './context-engineering.component.html',
  styleUrl: './context-engineering.component.scss',
})
export class ContextEngineeringComponent {
  readonly readmePrompt = README_PROMPT_SNIPPET;
  readonly mvcPrompt = MVC_PROMPT_SNIPPET;
  readonly agentsPrompt = AGENTS_PROMPT_SNIPPET;

  readonly leverColumns: TableColumn[] = [
    { key: 'levier', label: 'Levier' },
    { key: 'role', label: 'Dans ce codelab' },
  ];

  readonly leverRows = [
    {
      levier: 'Instructions du projet',
      role: 'Le fichier AGENTS.md, que tous les agents suivent pendant la génération de code',
    },
    {
      levier: 'Contexte ciblé',
      role: 'Le README (contexte de l’application), l’architecture et les skills du projet',
    },
    {
      levier: 'Context window',
      role: 'Un prompt par étape : chaque demande reste focalisée sur ce qu’elle doit produire (section 5)',
    },
  ];

  readonly folderColumns: TableColumn[] = [
    { key: 'dossier', label: 'Dossier' },
    { key: 'role', label: 'Rôle' },
  ];

  readonly folderRows = [
    {
      dossier: 'src/app/cores/',
      role: 'Modèles et services globaux de l’application',
    },
    {
      dossier: 'src/app/features/',
      role: 'Fonctionnalités spécifiques',
    },
    {
      dossier: 'src/app/pages/',
      role: 'Pages : auth, landingpage, home (dashboard, budget, cashflow)',
    },
    {
      dossier: 'src/app/shared/',
      role: 'Composants, pipes, directives et utilitaires d’interface réutilisables',
    },
    {
      dossier: 'src/environments/',
      role: 'Configurations de développement et de production',
    },
  ];

  readonly checkpoints = [
    'Le README contient le contexte de l’application.',
    'L’arborescence cores, features, pages, shared et environments existe.',
    'AGENTS.md est présent à la racine et le code de l’application n’a pas été modifié.',
  ];
}
