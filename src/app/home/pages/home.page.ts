import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home-page',
  template: `
    <section class="text-center py-20 px-6">
      <h1 class="text-4xl font-serif mb-4">El alma ya conoce su nombre</h1>
      <p class="text-base font-sans max-w-md mx-auto mb-8">
        Descubre un nombre simbólico y emocionalmente conectado con tu energía.
      </p>
      <a routerLink="/test" class="btn btn-primary transition-all hover:scale-105 focus-visible:ring">Comenzar el Test</a>
    </section>
  `,
})
export class HomePage {}