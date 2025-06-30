import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-animated-background',
  template: `
    <div
      class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <!-- Capa base con color de fondo -->
      <div class="absolute inset-0 bg-base-100 dark:bg-base-300 transition-colors duration-700"></div>

      <!-- Círculo difuso místico -->
      <div
        class="absolute top-[20%] left-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"
      ></div>

      <div
        class="absolute bottom-[10%] right-[15%] w-80 h-80 bg-primary/10 rounded-full blur-2xl animate-pulse-slower"
      ></div>
    </div>
  `,
  styles: [`
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.05); }
    }
    .animate-pulse-slower {
      animation: pulse-slower 8s ease-in-out infinite;
    }
  `],
})
export class AnimatedBackgroundComponent {}
