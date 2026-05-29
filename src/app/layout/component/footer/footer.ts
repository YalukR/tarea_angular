import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  template: `
  <footer class="bg-[#2a2a2a] text-white px-20 pt-24 pb-8">

  <!-- Top row -->
  <div class="grid grid-cols-2 mb-24">
    <span class="font-black text-lg">B/D®</span>
    <p class="text-2xl leading-snug max-w-xl">
      We collaborate with ambitious brands and people.
      Let's build. <a href="mailto:biz@basicagency.com" class="underline-fill">biz@basicagency.com</a>
    </p>
  </div>

  <!-- Middle row -->
<div class="grid grid-cols-4 gap-12 mb-16">

  <!-- Newsletter -->
  <div>
    <p class="font-mono text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-white inline-block"></span>
      Stay in the know
    </p>
    <div class="flex items-center border-b border-white/30 pb-2">
      <input
        type="email"
        placeholder="Email Address"
        [(ngModel)]="email"
        class="bg-transparent flex-1 text-sm text-white placeholder-white/40 outline-none font-mono"
      />
      <span class="text-lg">→</span>
    </div>
  </div>

  <!-- Social -->
  <div>
    <p class="font-mono text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-white inline-block"></span>
      Social
    </p>
    <ul class="flex flex-col gap-2 text-sm text-white/80">
      <li><a href="#" class="underline-fill">Instagram</a></li>
      <li><a href="#" class="underline-fill">Twitter</a></li>
      <li><a href="#" class="underline-fill">LinkedIn</a></li>
      <li><a href="#" class="underline-fill">Facebook</a></li>
    </ul>
  </div>

  <!-- Initiatives -->
  <div>
    <p class="font-mono text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-white inline-block"></span>
      Initiatives
    </p>
    <ul class="flex flex-col gap-2 text-sm text-white/80">
      <li><a href="#" class="underline-fill">Applied</a></li>
      <li><a href="#" class="underline-fill">Brandbeats</a></li>
      <li><a href="#" class="underline-fill">Moves</a></li>
      <li><a href="#" class="underline-fill">B®/Good</a></li>
    </ul>
  </div>

  <!-- Offices -->
  <div>
    <p class="font-mono text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-white inline-block"></span>
      Offices
    </p>
    <ul class="flex flex-col gap-1 text-sm text-white/80">
      <li>San Diego – CA</li>
      <li>New York – NY</li>
      <li>Bay Area – CA</li>
      <li>St. Louis – MO</li>
      <li>Amsterdam – NL</li>
      <li>London – EN</li>
      <li>Berlin – GE</li>
      <li>Argentina – AR</li>
    </ul>
  </div>

</div>

  <!-- Bottom bar -->
  <div class="border-t border-white/10 pt-6 flex justify-between items-center">
    <span class="font-mono text-[10px] tracking-widest uppercase text-white/30">BASIC/DEPT®, INC 10 – 26®</span>
    <span class="font-mono text-[10px] tracking-widest uppercase text-white/30">EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
    <a href="#" class="font-mono text-[10px] tracking-widest uppercase text-white/30 underline-fill">TERMS, PRIVACY POLICY</a>
  </div>

</footer>
  `,
  styleUrl: './footer.css',
})
export class Footer {
  email = '';
}