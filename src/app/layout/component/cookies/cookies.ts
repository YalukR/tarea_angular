import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookies',
  imports: [CommonModule],
  template: `
    <div *ngIf="visible" class="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white flex items-center justify-between px-6 py-4 z-[9998]">
      <div class="flex items-center gap-6">
        <span class="font-black text-sm tracking-widest">B/D®</span>
        <p class="font-mono text-[10px] tracking-wide uppercase leading-relaxed max-w-xs text-white/70">
          This website uses cookies to ensure you get the best experience.
          <a href="#" class="underline">Privacy Policy</a>
        </p>
      </div>
      <div class="flex items-center gap-4">
      <button 
  class="btn-fill font-mono text-[10px] tracking-widest uppercase px-5 py-2 rounded-full" 
  style="--btn-color: #fff; --btn-hover-color: #1a1a1a"
  (click)="accept()">
  Accept Cookies
</button>
        <button class="text-white/50 hover:text-white transition-colors text-lg leading-none" (click)="accept()">✕</button>
      </div>
    </div>
  `,
})
export class Cookies {
  visible = true;

  accept() {
    this.visible = false;
  }
}