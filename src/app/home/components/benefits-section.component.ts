import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-benefits-section',
  template: `
    <section class="py-16 px-6">
      <h2 class="text-2xl font-serif text-center mb-8">Beneficios</h2>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        <div class="text-center">
          <span class="material-icons text-accent text-3xl mb-2">flare</span>
          <p class="font-semibold">Nombre con propósito</p>
        </div>
        <div class="text-center">
          <span class="material-icons text-accent text-3xl mb-2">visibility</span>
          <p class="font-semibold">Significado oculto</p>
        </div>
        <div class="text-center">
          <span class="material-icons text-accent text-3xl mb-2">favorite</span>
          <p class="font-semibold">Memoria emocional</p>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsSectionComponent {}
