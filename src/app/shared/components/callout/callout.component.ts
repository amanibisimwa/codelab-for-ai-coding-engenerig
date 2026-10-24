import { Component, computed, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

export type CalloutVariant = 'info' | 'tip' | 'quote' | 'convention' | 'warning';

@Component({
  selector: 'app-callout',
  standalone: true,
  imports: [MatCard, MatCardContent, MatIcon],
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.scss',
})
export class CalloutComponent {
  readonly variant = input<CalloutVariant>('info');
  readonly title = input<string>('');

  readonly iconName = computed<string>(() => {
    switch (this.variant()) {
      case 'tip':
        return 'lightbulb';
      case 'quote':
        return 'format_quote';
      case 'convention':
        return 'gavel';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'info';
    }
  });
}
