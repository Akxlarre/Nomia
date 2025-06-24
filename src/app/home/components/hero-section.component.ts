import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [RouterModule, PrimaryButtonComponent],
  template: `
    <section
      class="relative overflow-hidden text-center px-6 py-24 bg-gradient-to-br from-[oklch(98%_0.02_40)] to-[oklch(95%_0.03_280)] transition-all duration-700"
      [class.opacity-0]="!loaded" [class.translate-y-4]="!loaded">
      <div class="relative z-10 max-w-2xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-serif mb-4">El alma ya conoce su nombre</h1>
        <p class="text-base md:text-lg mb-8">Descubre el nombre que resuena con tu energía emocional y espiritual</p>
        <a routerLink="/test" class="btn btn-primary transition-shadow duration-700" [class.shadow-lg]="loaded">Comenzar el Test</a>
      </div>
      <svg aria-hidden="true" viewBox="0 0 200 200" class="absolute opacity-20 w-56 h-56 -right-20 -bottom-20 text-secondary">
        <circle cx="100" cy="100" r="80" fill="currentColor" />
      </svg>
    </section>
  `,
})
export class HeroSectionComponent implements AfterViewInit {
  loaded = false;
  ngAfterViewInit() {
    setTimeout(() => (this.loaded = true));
  }
}
