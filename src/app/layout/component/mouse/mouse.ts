import { Component, inject, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../service/layout-service';

@Component({
  selector: 'app-mouse',
  imports: [CommonModule],
  template: `
<div
  class="cursor"
  [class.active]="cursor().active"
  [style.left.px]="x"
  [style.top.px]="y"
>
  <span *ngFor="let line of cursor().lines" class="cursor-line">{{ line }}</span>
</div>`,
  styleUrl: './mouse.css',
})
export class Mouse {
  private layout = inject(LayoutService);
  cursor = this.layout.cursor;
  x = 0;
  y = 0;
  private rafId: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      this.x = e.clientX;
      this.y = e.clientY;
    });
  }
}