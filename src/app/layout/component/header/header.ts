import { Component, inject } from '@angular/core';
import { LayoutService } from '../../service/layout-service';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <header [class]="'site-header ' + layout.headerTheme()">
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
}

.site-header.dark .logo,
.site-header.dark .nav-link,
.site-header.dark .menu-dots {
  color: #fff;
}

.site-header.light .logo,
.site-header.light .nav-link,
.site-header.light .menu-dots {
  color: #111;
}
  `,
})
export class Header {
  layout = inject(LayoutService)
}
