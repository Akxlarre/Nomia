import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-free-name-card',
  standalone: true,
  template: `
    <article class="card-shell relative text-center">
      <!-- Aura animada -->
      <div
        class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/30 blur-[100px] rounded-full animate-pulse-slower z-0"
        aria-hidden="true"
      ></div>

      <!-- Contenido -->
      <div class="relative z-10">
        <h3 class="text-4xl font-serif text-primary mb-3 tracking-tight">{{ name }}</h3>
        <p class="italic text-base-content/70 mb-3 text-lg">“{{ meaning }}”</p>
        <div class="text-pink-500 text-xl font-medium mt-4">{{ symbol }}</div>
        @if (quote) {
          <p class="text-sm mt-5 opacity-80 italic max-w-md mx-auto">{{ quote }}</p>
        }
      </div>
    </article>
  `,
  styles: [`
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }
    .animate-pulse-slower {
      animation: pulse-slower 6s ease-in-out infinite;
    }
  `],
})
export class FreeNameCardComponent {
  @Input() name = '';
  @Input() meaning = '';
  @Input() symbol = '';
  @Input() quote?: string;
}
