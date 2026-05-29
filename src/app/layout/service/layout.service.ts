import { Injectable, signal } from '@angular/core';
export interface CursorState {
  active: boolean;
  lines: string[];
  color?: string;
  small?: boolean;
  anchor: { x: number; y: number } | null;
}
export type HeaderTheme = string

@Injectable({ providedIn: 'root' })
export class LayoutService {
  cursor = signal<CursorState>({ active: true, lines: [], color: 'transparent', anchor: null });
  headerTheme = signal<string>('#ffffff');

  setCursor(lines: string[], color: string = '#fff', anchor: CursorState['anchor'] = null, small: boolean = false) {
    this.cursor.set({ active: true, lines, color, anchor, small });
  }

  resetCursor(anchor: CursorState['anchor'] = null) {
    const prev = this.cursor();
    this.cursor.set({
      active: anchor !== null,
      lines: prev.lines,
      color: prev.color,
      anchor,
      small: false
    });
  }

  setHeaderTheme(color: string) {
    this.headerTheme.set(color);
  }
}