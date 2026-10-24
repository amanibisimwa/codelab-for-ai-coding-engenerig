import { Component } from '@angular/core';
import { ShellComponent } from './features/shell/shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
