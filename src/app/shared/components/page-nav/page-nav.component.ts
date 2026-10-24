import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NavigationService } from '../../../cores/services/navigation.service';

@Component({
  selector: 'app-page-nav',
  standalone: true,
  imports: [RouterLink, MatButton, MatIcon],
  templateUrl: './page-nav.component.html',
  styleUrl: './page-nav.component.scss',
})
export class PageNavComponent {
  readonly nav = inject(NavigationService);
}
