export interface CodelabPage {
  path: string;
  title: string;
  navLabel: string;
  eyebrow: string;
  icon: string;
  description: string;
  stepNumber: number;
}

export interface PromptItem {
  id: string;
  number: number;
  title: string;
  description: string;
  snippet: string;
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableData {
  columns: TableColumn[];
  rows: Record<string, string>[];
}

export interface CheckpointItem {
  text: string;
}
