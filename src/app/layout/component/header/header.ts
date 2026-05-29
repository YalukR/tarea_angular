import { Component, inject } from '@angular/core';
import { LayoutService } from '../../service/layout-service';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <header class="site-header" [style.color]="layout.headerTheme()">
    <a href="/" class="logo font-bold">BASIC/DEPT®</a>
    <nav class="flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
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

  .nav-link {
    position: relative;
  }

  .nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }
`,
})
export class Header {
  layout = inject(LayoutService)
}
