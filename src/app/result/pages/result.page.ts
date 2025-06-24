import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-result-page',
  template: `
    <section class="py-16 px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">Tu nombre simbólico</h2>
      <p class="text-base font-sans mb-6">Aquí verás el nombre que nació de tu energía emocional.</p>
      <div class="ui-natal-card transition-colors">
        <p class="text-lg font-serif italic">[Nombre generado o curado]</p>
      </div>
    </section>
  `,
})
export class ResultPage {}