import { Component, computed, input } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { TableColumn } from '../../../cores/models/codelab-page.model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  readonly columns = input.required<TableColumn[]>();
  readonly rows = input.required<Record<string, string>[]>();
  readonly caption = input<string>('');

  readonly displayedColumns = computed<string[]>(() =>
    this.columns().map((c) => c.key)
  );
}
