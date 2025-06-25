import { Component, Inject, DOCUMENT } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [RouterModule, PrimaryButtonComponent],
  template: `
    <section
      class="relative overflow-hidden text-center px-6 py-24 transition-all duration-700"
      [class.bg-hero-light]="!isDark"
      [class.bg-hero-dark]="isDark"
      [class.text-base-content]="!isDark"
      [class.text-base-content]="isDark"
    >
      <div class="relative z-10 max-w-2xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-serif mb-4 text-base-content">
          El alma ya conoce su nombre
        </h1>
        <p class="text-base md:text-lg mb-8 italic text-base-content/90">
          El alma ya eligió. Solo debes descubrirlo.
        </p>
        <a
          routerLink="/test"
          class="btn btn-primary shadow-md transition-all duration-700 ease-out"
        >
         Comenzar el Test
        </a>
      </div>

      <!-- Elemento decorativo etéreo -->
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        class="absolute opacity-10 dark:opacity-20 w-56 h-56 -right-20 -bottom-20 text-secondary animate-pulse-slow"
      >
        <circle cx="100" cy="100" r="80" fill="currentColor" />
      </svg>
    </section>
  `,
})
export class HeroSectionComponent {

  /** Declaramos explícitamente la propiedad */
  isDark = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Leemos el modo actual de la etiqueta <html>
    this.isDark = this.document.documentElement.classList.contains('dark');
  }

}