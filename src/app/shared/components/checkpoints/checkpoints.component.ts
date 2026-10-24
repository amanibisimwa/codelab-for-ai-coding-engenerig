import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';

@Component({
  selector: 'app-checkpoints',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatList,
    MatListItem,
    MatListItemIcon,
    MatIcon,
  ],
  templateUrl: './checkpoints.component.html',
  styleUrl: './checkpoints.component.scss',
})
export class CheckpointsComponent {
  readonly items = input.required<string[]>();
  readonly title = input<string>('Points de contrôle');
}
