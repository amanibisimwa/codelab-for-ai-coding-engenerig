import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbar } from '@angular/material/toolbar';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NavigationService } from '../../cores/services/navigation.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatProgressBar,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly nav = inject(NavigationService);

  readonly isMobile = signal<boolean>(false);

  readonly sidenavMode = computed<'side' | 'over'>(() =>
    this.isMobile() ? 'over' : 'side'
  );

  constructor() {
    this.breakpointObserver
      .observe(['(max-width: 959px)'])
      .subscribe((result) => {
        this.isMobile.set(result.matches);
        if (!result.matches) {
          this.nav.closeMobileNav();
        }
      });
  }

  onNavClick(): void {
    if (this.isMobile()) {
      this.nav.closeMobileNav();
    }
  }
}
