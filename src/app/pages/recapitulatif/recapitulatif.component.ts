import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CalloutComponent } from '../../shared/components/callout/callout.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    MatCard,
    MatCardContent,
    MatIcon,
    PageHeaderComponent,
    CalloutComponent,
    PageNavComponent,
  ],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.scss',
})
export class RecapitulatifComponent {
  readonly bestPractices = [
    "Spécifiez avant de coder, et utilisez l'IA pour vous aider à spécifier.",
    'Écrivez vos prompts en Markdown pour leur donner une hiérarchie claire.',
    'Donnez un contexte durable aux agents (README, AGENTS.md, skills) plutôt que de le répéter à chaque demande.',
    'Découpez le travail : un prompt par étape, jamais un seul prompt géant.',
    'Exigez des vérifications à la fin de chaque étape (compilation, tests, calculs, isolation des données).',
    'Gardez les règles métier explicites : isolation des données par utilisateur, pas de double comptage de l’épargne, dépassement de budget autorisé mais signalé.',
  ];
}
