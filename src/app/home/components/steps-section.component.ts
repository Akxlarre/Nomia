import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-steps-section',
  template: `
    <section class="py-16 px-6">
      <h2 class="text-2xl font-serif text-center mb-8">Cómo funciona</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl transition-all">
          <span class="material-icons text-4xl text-secondary mb-2">auto_awesome</span>
          <h3 class="font-serif text-lg mb-1">Conecta con tu alma</h3>
          <p class="text-sm opacity-80">Responde nuestro test emocional.</p>
        </div>
        <div class="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl transition-all">
          <span class="material-icons text-4xl text-secondary mb-2">auto_stories</span>
          <h3 class="font-serif text-lg mb-1">Recibe tu nombre simbólico</h3>
          <p class="text-sm opacity-80">Te enviaremos su significado oculto.</p>
        </div>
        <div class="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl transition-all">
          <span class="material-icons text-4xl text-secondary mb-2">share</span>
          <h3 class="font-serif text-lg mb-1">Guárdalo como recuerdo</h3>
          <p class="text-sm opacity-80">Llévalo siempre contigo.</p>
        </div>
      </div>
    </section>
  `,
})
export class StepsSectionComponent {}
