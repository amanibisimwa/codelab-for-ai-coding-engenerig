import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';
import { PROMPTS_CHAIN_ITEMS } from '../../cores/data/snippets/prompts-chain.snippets';

@Component({
  selector: 'app-chaine-de-prompts',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIcon,
    PageHeaderComponent,
    CodeBlockComponent,
    PageNavComponent,
  ],
  templateUrl: './chaine-de-prompts.component.html',
  styleUrl: './chaine-de-prompts.component.scss',
})
export class ChaineDePromptsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly prompts = PROMPTS_CHAIN_ITEMS;
  activePanelId: string | null = null;

  ngOnInit(): void {
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        this.activePanelId = frag;
      }
    });
  }

  scrollToPrompt(id: string): void {
    this.activePanelId = id;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
