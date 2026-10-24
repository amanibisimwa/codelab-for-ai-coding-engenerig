import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CalloutComponent } from '../../shared/components/callout/callout.component';
import { PageNavComponent } from '../../shared/components/page-nav/page-nav.component';

@Component({
  selector: 'app-projet-exemple',
  standalone: true,
  imports: [PageHeaderComponent, CalloutComponent, PageNavComponent],
  templateUrl: './projet-exemple.component.html',
  styleUrl: './projet-exemple.component.scss',
})
export class ProjetExempleComponent {}
