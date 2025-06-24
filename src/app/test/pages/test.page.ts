import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-test-page',
  template: `
    <section class="py-16 px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">Test Emocional</h2>
      <p class="text-base font-sans mb-6">Conecta con las energías que vibran contigo.</p>
      <!-- Aquí irá el componente del test -->
      <div class="border border-dashed border-base-300 p-6 rounded-lg">
        <p class="text-sm text-base-content opacity-60">[Componente de preguntas irá aquí]</p>
      </div>
    </section>
  `,
})
export class TestPage {}