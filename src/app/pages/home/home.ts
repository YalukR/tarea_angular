import { Component, inject, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { LayoutService } from '../../layout/service/layout.service';
import { VideoPlayer } from './video-player/video-player';
import { FeaturedEngagements } from './featured-engagements/featured-engagements';
import { AboutUs } from './about-us/about-us';
import { FeaturedNews } from './featured-news/featured-news';

@Component({
  selector: 'app-home',
  imports: [
    VideoPlayer,
    FeaturedEngagements,
    AboutUs,
    FeaturedNews
  ],
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
          const color = entry.target.getAttribute('data-theme');
          if (color) this.layout.setHeaderTheme(color);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-50% 0px -50% 0px'
    });

    this.sections.forEach(s => observer.observe(s.nativeElement));
  }
}