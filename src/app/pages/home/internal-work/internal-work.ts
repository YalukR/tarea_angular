import { Component, signal, ViewChild, ElementRef, inject, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalWork } from '../../../core/models/internal-work.models';
import { LayoutService } from '../../../layout/service/layout.service';

@Component({
  selector: 'app-internal-work',
  imports: [CommonModule],
  templateUrl: './internal-work.html',
  styleUrl: './internal-work.css',
})
export class InternalWorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLElement>;

  isOpen = signal(false);
  layout = inject(LayoutService);

  private isDragging = false;
  private startX = 0;
  private startScrollLeft = 0;
  private lastX = 0;
  private velocity = 0;
  private rafId: any;

  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  ngAfterViewInit() { }

  onMouseEnter() {
    this.layout.setCursor(['DRAG'], '#f4b5b5', null);
  }

  onMouseLeave() {
    this.layout.resetCursor(null);
    this.isDragging = false;
  }

  onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.lastX = e.clientX;
    this.startScrollLeft = this.sliderRef.nativeElement.scrollLeft;
    this.velocity = 0;
    cancelAnimationFrame(this.rafId);
    this.layout.setCursor([], '#f4b5b5', null, true);
  }

  onMouseUp() {
    this.isDragging = false;
    this.layout.setCursor(['DRAG'], '#f4b5b5', null, false);
    this.momentum();
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const delta = e.clientX - this.startX;
    this.velocity = e.clientX - this.lastX;
    this.lastX = e.clientX;
    this.sliderRef.nativeElement.scrollLeft = this.startScrollLeft - delta;
  }

  private momentum() {
    const el = this.sliderRef.nativeElement;
    this.velocity *= 0.95;
    if (Math.abs(this.velocity) < 0.5) return;
    el.scrollLeft -= this.velocity;
    this.rafId = requestAnimationFrame(() => this.momentum());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  items: InternalWork[] = [
    { id: 1, image: 'images/internal-work/menu1.png', title: 'B/D® JAMS', year: '©2022', category: "IT'S A VIBE", description: 'A curated playlist series.' },
    { id: 2, image: 'images/internal-work/menu2.png', title: 'APPLIED®', year: '©2020', category: 'THOUGHTS & PERSPECTIVES', description: 'Our editorial platform.' },
    { id: 3, image: 'images/internal-work/menu3.png', title: 'MOVES®', year: '©2019', category: 'OUR NEW HQ', description: 'Our creative headquarters.' },
    { id: 4, image: 'images/internal-work/menu4.png', title: 'CRAFTED®', year: '©2018', category: 'CREATIVE COM.', description: 'Creative community work.' },
    { id: 5, image: 'images/internal-work/menu5.png', title: 'B/D®', year: '©2016', category: 'INTERNAL', description: 'Internal brand initiatives.' },
  ];
}