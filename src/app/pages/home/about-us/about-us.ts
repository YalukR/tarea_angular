import { Component, inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../../layout/service/layout-service';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements AfterViewInit, OnDestroy {
  @ViewChild('section') sectionRef!: ElementRef<HTMLElement>;
  @ViewChild('video') videoRef!: ElementRef<HTMLElement>;
  private layout = inject(LayoutService);
  private observer!: IntersectionObserver;
  videoOffset = 0;
  private rafId: any;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.layout.setHeaderTheme('#f4b5b5');
          document.documentElement.style.setProperty('--site-color', '#f4b5b5');
        } else {
          document.documentElement.style.removeProperty('--site-color');
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.sectionRef.nativeElement);
    this.startParallax();
  }

  private startParallax() {
    const update = () => {
      const el = this.sectionRef?.nativeElement;
      if (el) {
        const rect = el.getBoundingClientRect();
        const progress = -rect.top / (rect.height - window.innerHeight);
        this.videoOffset = progress * (rect.height - window.innerHeight) * 0.5;
      }
      this.rafId = requestAnimationFrame(update);
    };
    update();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    cancelAnimationFrame(this.rafId);
    document.documentElement.style.removeProperty('--site-color');
  }
}