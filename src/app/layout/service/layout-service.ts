import { Injectable, signal } from '@angular/core';
export interface CursorState {
  active: boolean;
  lines: string[];
  color?: string;
  small?: boolean;
}
export type HeaderTheme = string

@Injectable({ providedIn: 'root' })
export class LayoutService {
  cursor = signal<CursorState>({ active: false, lines: [] });
  headerTheme = signal<string>('#ffffff');



  setCursor(lines: string[], color = '#fff', small = false) {
    this.cursor.set({ active: true, lines, color, small });
  }

  resetCursor() {
    this.cursor.set({ active: false, lines: [] });
  }

  setHeaderTheme(color: string) {
    this.headerTheme.set(color);
  }
}