import { Component, inject, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { LayoutService } from '../../layout/service/layout-service';
import { VideoPlayer } from './video-player/video-player';

@Component({
  selector: 'app-home',
  imports: [VideoPlayer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private layout = inject(LayoutService);

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme') as 'light' | 'dark';
          if (theme) this.layout.setHeaderTheme(theme);
        }
      });
    }, { threshold: 0.5 });

    this.sections.forEach(s => observer.observe(s.nativeElement));
  }
}