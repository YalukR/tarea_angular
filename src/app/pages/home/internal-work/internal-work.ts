import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalWork } from '../../../core/models/internal-work.models';

@Component({
  selector: 'app-internal-work',
  imports: [CommonModule],
  templateUrl: './internal-work.html',
  styleUrl: './internal-work.css',
})
export class InternalWorkComponent {
  isOpen = signal(false);

  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  items: InternalWork[] = [
    { id: 1, image: 'images/internal-work/menu1.png', title: 'B/D® JAMS', year: '©2022', category: "IT'S A VIBE", description: 'A curated playlist series.' },
    { id: 2, image: 'images/internal-work/menu2.png', title: 'APPLIED®', year: '©2020', category: 'THOUGHTS & PERSPECTIVES', description: 'Our editorial platform.' },
    { id: 3, image: 'images/internal-work/menu3.png', title: 'MOVES®', year: '©2019', category: 'OUR NEW HQ', description: 'Our creative headquarters.' },
    { id: 4, image: 'images/internal-work/menu4.png', title: 'CRAFTED®', year: '©2018', category: 'CREATIVE COM.', description: 'Creative community work.' },
    { id: 5, image: 'images/internal-work/menu5.png', title: 'B/D®', year: '©2016', category: 'INTERNAL', description: 'Internal brand initiatives.' },
  ];
}