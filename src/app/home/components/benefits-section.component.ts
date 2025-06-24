import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-benefits-section',
  template: `
    <section class="py-16 px-6">
      <h2 class="text-2xl font-serif text-center mb-8">Beneficios</h2>
      <div class="grid gap-8 md:gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        <div class="flex flex-col items-center text-center">
          <span class="material-icons text-accent text-3xl mb-2">flare</span>
          <p class="font-semibold">Nombre con propósito</p>
          <p class="text-sm text-base-content/60">Más que un sonido, una misión</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <span class="material-icons text-accent text-3xl mb-2">visibility</span>
          <p class="font-semibold">Significado oculto</p>
          <p class="text-sm text-base-content/60">Descubre la historia detrás</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <span class="material-icons text-accent text-3xl mb-2">favorite</span>
          <p class="font-semibold">Memoria emocional</p>
          <p class="text-sm text-base-content/60">Un recuerdo que perdura</p>
        </div>
      </div>
    </section>
  `,
})
export class BenefitsSectionComponent {}
