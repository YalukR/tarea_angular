import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Mouse } from '../mouse/mouse';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Mouse,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
