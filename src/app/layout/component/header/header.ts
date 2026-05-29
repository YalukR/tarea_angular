import { Component, inject } from '@angular/core';
import { LayoutService } from '../../service/layout-service';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <header class="site-header" [style.color]="layout.headerTheme()">
    <a href="/" class="logo">MI APP</a>
    <nav class="nav">
      <a href="#" class="nav-link">WORK</a>
      <a href="#" class="nav-link">ABOUT</a>
      <a href="#" class="nav-link">NEWS</a>
      <a href="#" class="nav-link">CONTACT</a>
    </nav>
    <button class="menu-dots" aria-label="Más opciones">···</button>
  </header>
`,
  styles: `
  .site-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 40px;
    transition: color 0.3s ease;
    background: transparent;
  }
  .logo, .nav-link, .menu-dots {
    color: inherit;
    text-decoration: none;
  }
`,
})
export class Header {
  layout = inject(LayoutService)
}
