import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Mouse } from '../mouse/mouse';
import { Cookies } from '../cookies/cookies';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer, Mouse, Cookies],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit, OnDestroy {
  layout = inject(LayoutService);

  private targetY = 0;
  private currentY = 0;
  private ease = 0.08;
  private rafId: any;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    this.animate();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(e: WheelEvent) {
    e.preventDefault();
    this.targetY = Math.max(
      0,
      Math.min(this.targetY + e.deltaY, document.body.scrollHeight - window.innerHeight)
    );
  }

  private animate() {
    this.currentY += (this.targetY - this.currentY) * this.ease;

    if (Math.abs(this.targetY - this.currentY) < 0.1) {
      this.currentY = this.targetY;
    }

    window.scrollTo(0, this.currentY);
    this.rafId = requestAnimationFrame(() => this.animate());
  }
}