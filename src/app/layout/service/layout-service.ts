import { Injectable, signal } from '@angular/core';

export interface CursorState {
  active: boolean;
  lines: string[];
}

export type HeaderTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  cursor = signal<CursorState>({ active: false, lines: [] });
  headerTheme = signal<HeaderTheme>('dark');

  setCursor(lines: string[]) {
    this.cursor.set({ active: true, lines });
  }

  resetCursor() {
    this.cursor.set({ active: false, lines: [] });
  }

  setHeaderTheme(theme: HeaderTheme) {
    this.headerTheme.set(theme);
  }
}