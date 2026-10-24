import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { CheckpointsComponent } from '../../shared/components/checkpoints/checkpoints.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';
import { SETUP_PROMPT_SNIPPET } from '../../cores/data/snippets/setup-prompt.snippet';

@Component({
  selector: 'app-preparer-environnement',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CodeBlockComponent,
    CheckpointsComponent,
    PageNavComponent,
  ],
  templateUrl: './preparer-environnement.component.html',
  styleUrl: './preparer-environnement.component.scss',
})
export class PreparerEnvironnementComponent {
  readonly setupPrompt = SETUP_PROMPT_SNIPPET;

  readonly checkpoints = [
    'Le projet Angular SSR (Router + SCSS) est créé.',
    'Les trois skills sont installés au niveau du projet.',
    'AngularFire et Angular Material sont ajoutés avec ng add, et le projet compile.',
  ];
}
