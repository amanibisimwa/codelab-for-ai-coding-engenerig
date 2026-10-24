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
import { CHATBOT_QUESTION_SNIPPET } from '../../cores/data/snippets/chatbot-question.snippet';
import { SPEC_MD_SNIPPET } from '../../cores/data/snippets/spec.snippet';
import { TableColumn } from '../../cores/models/codelab-page.model';

@Component({
  selector: 'app-spec-driven-development',
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
  templateUrl: './spec-driven-development.component.html',
  styleUrl: './spec-driven-development.component.scss',
})
export class SpecDrivenDevelopmentComponent {
  readonly chatbotQuestion = CHATBOT_QUESTION_SNIPPET;
  readonly specSnippet = SPEC_MD_SNIPPET;

  readonly stackColumns: TableColumn[] = [
    { key: 'couche', label: 'Couche' },
    { key: 'tech', label: 'Technologie' },
  ];

  readonly mvpStackRows = [
    { couche: 'Interface', tech: 'Next.js (PWA) ou React Native / Expo' },
    { couche: 'Style', tech: 'Tailwind CSS' },
    { couche: 'Base de données et authentification', tech: 'Supabase (PostgreSQL)' },
    { couche: 'Stockage local (hors ligne)', tech: 'WatermelonDB ou IndexedDB' },
    { couche: 'Hébergement', tech: 'Vercel (web) ou déploiement direct via Expo (mobile)' },
  ];

  readonly drcmindStackRows = [
    { couche: 'Frontend', tech: 'Angular' },
    { couche: 'UI et style', tech: 'Angular Material et SCSS' },
    { couche: 'Backend', tech: 'Firebase' },
    { couche: 'Bibliothèque', tech: 'AngularFire' },
    { couche: 'Hébergement', tech: 'Firebase App Hosting' },
  ];

  readonly checkpoints = [
    "Le tech stack est choisi (avec l'aide de l'IA ou par vous-même).",
    "Les utilisateurs et les fonctionnalités de l'application sont listés.",
    'La spécification est écrite en Markdown et prête à servir de document de référence pour les agents.',
  ];
}
