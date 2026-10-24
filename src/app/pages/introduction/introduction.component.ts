import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CalloutComponent } from '../../shared/components/callout/callout.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';
import { NavigationService } from '../../cores/services/navigation.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    PageHeaderComponent,
    CalloutComponent,
    PageNavComponent,
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  private readonly nav = inject(NavigationService);

  readonly planPages = this.nav.pages().slice(1); // Pages 2 to 7
}
