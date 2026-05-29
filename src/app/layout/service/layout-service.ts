import { Injectable, signal } from '@angular/core';

export interface CursorState {
  active: boolean;
  lines: string[];
}

export type HeaderTheme = string

@Injectable({ providedIn: 'root' })
export class LayoutService {
  cursor = signal<CursorState>({ active: false, lines: [] });
  headerTheme = signal<string>('#ffffff');

  setCursor(lines: string[]) {
    this.cursor.set({ active: true, lines });
  }

  resetCursor() {
    this.cursor.set({ active: false, lines: [] });
  }

  setHeaderTheme(color: string) {
    this.headerTheme.set(color);
  }
}