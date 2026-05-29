import { Component, inject, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-mouse',
  imports: [CommonModule],
  template: `
<div
  class="cursor"
  [class.active]="cursor().active"
  [class.small]="cursor().small"
  [style.left.px]="x"
  [style.top.px]="y"
  [style.background]="cursor().active ? cursor().color : 'transparent'"
>
  <span *ngFor="let line of cursor().lines" class="cursor-line">{{ line }}</span>
</div>

<div class="cursor-subtext" [class.visible]="cursor().active && cursor().subtext?.length"
  [style.left.px]="x" [style.top.px]="y">
  <span *ngFor="let line of cursor().subtext" class="subtext-line">{{ line }}</span>
</div>

<div class="arrows" [class.visible]="cursor().small" [style.left.px]="x" [style.top.px]="y">
  <span class="arrow">‹</span>
  <span class="arrow">›</span>
</div>
  `,
  styleUrl: './mouse.css',
})
export class Mouse implements OnInit, OnDestroy {
  private layout = inject(LayoutService);
  cursor = this.layout.cursor;

  x = 0;
  y = 0;

  private targetX = 0;
  private targetY = 0;
  private rafId: any;
  private readonly ease = 0.22;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const anchor = this.cursor().anchor;
    if (!anchor) {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    }
  }

  ngOnInit() {
    this.animate();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  private animate() {
    const anchor = this.cursor().anchor;
    const destX = anchor ? anchor.x : this.targetX;
    const destY = anchor ? anchor.y - window.scrollY : this.targetY;

    this.x += (destX - this.x) * this.ease;
    this.y += (destY - this.y) * this.ease;
    this.rafId = requestAnimationFrame(() => this.animate());
  }
}