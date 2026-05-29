import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Mouse } from '../mouse/mouse';
import { Cookies } from '../cookies/cookies';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet, 
    Header, 
    Footer, 
    Mouse, 
    Cookies
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
}