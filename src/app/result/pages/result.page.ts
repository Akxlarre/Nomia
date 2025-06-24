import { Component } from '@angular/core';
import { NatalCardComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-result-page',
  imports: [NatalCardComponent],
  template: `
    <section class="py-16 px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">Tu nombre simbólico</h2>
      <p class="text-base font-sans mb-6">
        Aquí verás el nombre que nació de tu energía emocional.
      </p>
      <ui-natal-card name="Nombre Ritual">
        <p class="text-lg font-serif italic">[Nombre generado o curado]</p>
      </ui-natal-card>
    </section>
  `,
})
export class ResultPage {}
