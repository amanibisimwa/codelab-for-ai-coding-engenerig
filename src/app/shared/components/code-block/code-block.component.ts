import { Component, inject, input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [MatIconButton, MatIcon, MatTooltip],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
})
export class CodeBlockComponent {
  private readonly clipboard = inject(Clipboard);
  private readonly snackBar = inject(MatSnackBar);

  readonly code = input.required<string>();
  readonly language = input<string>('text');
  readonly title = input<string>('');

  copied = false;

  copy(): void {
    const text = this.code();
    const success = this.clipboard.copy(text);
    if (success) {
      this.copied = true;
      this.snackBar.open('Code copié dans le presse-papiers !', 'Fermer', {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }
  }
}
