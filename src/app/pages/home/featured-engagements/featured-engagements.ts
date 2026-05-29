import { Component, ViewChild, ElementRef, inject, OnDestroy } from '@angular/core';
import { FeaturedEngagement } from '../../../core/models/featured-engagement-model';
import { LayoutService } from '../../../layout/service/layout-service';

@Component({
  selector: 'app-featured-engagements',
  imports: [],
  templateUrl: './featured-engagements.html',
  styleUrl: './featured-engagements.css',
})
export class FeaturedEngagements implements OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;
  layout = inject(LayoutService);

  scrollProgress = 0;
  private isDragging = false;
  private startX = 0;
  private startScrollLeft = 0;
  private lastX = 0;
  private velocity = 0;
  private rafId: any;

  onSliderScroll(e: Event) {
    const el = e.target as HTMLElement;
    this.scrollProgress = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
  }

  onMouseEnter() {
    this.layout.setCursor(['DRAG'], '#f4b5b5');
  }

  onMouseLeave() {
    this.layout.resetCursor();
    this.isDragging = false;
  }

  onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.lastX = e.clientX;
    this.startScrollLeft = this.sliderRef.nativeElement.scrollLeft;
    this.velocity = 0;
    cancelAnimationFrame(this.rafId);
    this.layout.setCursor([], '#f4b5b5', true);
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const delta = e.clientX - this.startX;
    this.velocity = e.clientX - this.lastX;
    this.lastX = e.clientX;
    this.sliderRef.nativeElement.scrollLeft = this.startScrollLeft - delta;
  }

  onMouseUp() {
    this.isDragging = false;
    this.layout.setCursor(['DRAG'], '#f4b5b5');
    this.momentum();
  }

  private momentum() {
    const el = this.sliderRef.nativeElement;
    this.velocity *= 0.95;

    if (Math.abs(this.velocity) < 0.5) return;

    el.scrollLeft -= this.velocity;
    this.scrollProgress = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
    this.rafId = requestAnimationFrame(() => this.momentum());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  items: FeaturedEngagement[] = [
    {
      logo: 'images/google.png',
      alt: 'Google',
      title: 'GOOGLE',
      description: 'Our embedded partnership with Google is as deep as it gets. We\'re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.',
    },
    {
      logo: 'images/kfc.png',
      alt: 'KFC',
      title: 'KFC',
      description: 'An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences.',
    },
    {
      logo: 'images/wilsonLogo.png',
      alt: 'Wilson',
      title: 'WILSON',
      description: 'A reimagining of Wilson\'s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand\'s 108-year history.',
    },
    {
      logo: 'images/atat.png',
      alt: 'AT&T',
      title: 'AT&T',
      description: 'Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers.',
    },
    {
      logo: 'images/patagoniaLogo.png',
      alt: 'Patagonia',
      title: 'PATAGONIA',
      description: 'Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.',
    },
  ];
}