import { Component, inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../../layout/service/layout.service';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements AfterViewInit, OnDestroy {
  @ViewChild('section') sectionRef!: ElementRef<HTMLElement>;
  private layout = inject(LayoutService);
  private rafId: any;

  textTop = 0;
  videoOffset = 0;
  isVisible = false;

  ngAfterViewInit() {
    this.animate();
  }

  private animate() {
    const el = this.sectionRef?.nativeElement;
    if (el) {
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      this.isVisible = sectionTop < window.innerHeight && sectionTop + sectionHeight > 0;

      if (this.isVisible) {
        this.textTop = Math.max(0, Math.min(-sectionTop, sectionHeight - window.innerHeight));
        const progress = -sectionTop / (sectionHeight - window.innerHeight);
        this.videoOffset = progress * (sectionHeight - window.innerHeight) * 0.3;
      }
    }
    this.rafId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }
}