//app/test/components/test-header.component.ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-test-header',
  template: `
    <header class="mb-10 text-center relative animate-fade-in">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent/20 blur-2xl opacity-30 pointer-events-none"></div>

      <h2 class="text-4xl md:text-5xl font-serif mb-4 text-primary tracking-tight leading-snug animate-fade-in-up">
        Escucha tu alma...
      </h2>

      <p class="text-base md:text-lg font-sans text-base-content/80 italic animate-fade-in delay-200">
        Este ritual es tuyo. Responde con sinceridad.
      </p>
    </header>
  `,
})
export class TestHeaderComponent {}
