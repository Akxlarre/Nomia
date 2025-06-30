import { Component } from '@angular/core';
import { NombreReveladoComponent } from '../components/nombre-revelado.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  standalone: true,
  selector: 'app-results-final-page',
  imports: [NombreReveladoComponent, RevealOnScrollDirective],
  template: `
    <section class="px-4 py-20 max-w-3xl mx-auto text-center">
      <header class="mb-16 animate-fade-in-up">
        <h2 class="text-4xl font-serif text-primary tracking-tight">
          🌟 Has desbloqueado nombres con alma única
        </h2>
        <p class="mt-3 text-base italic text-base-content/70 max-w-lg mx-auto">
          Cada nombre refleja una energía especial y fue elegido para ti.
        </p>
      </header>

      <div class="space-y-16">
        @for (n of nombres; track n.nombre) {
          <ui-nombre-revelado
            [nombre]="n.nombre"
            [significado]="n.significado"
            [simbolo]="n.simbolo"
            [numerologia]="n.numerologia"
            [famosos]="n.famosos"
            [esIA]="n.esIA"
            appRevealOnScroll
          />
        }
      </div>
    </section>
  `,
})
export class ResultsFinalPage {
  nombres = [
    {
      nombre: 'Aurelia',
      significado: 'Aquella que brilla con luz dorada',
      simbolo: '🌞 Sol espiritual',
      numerologia: '7 – Sabiduría interior y visión',
      famosos: 'Aurelia Plath (madre de Sylvia Plath), símbolo de inspiración materna',
      esIA: false,
    },
    {
      nombre: 'Selene',
      significado: 'La que danza bajo la luna',
      simbolo: '🌙 Espíritu lunar',
      numerologia: '9 – Sensibilidad elevada y alma universal',
      famosos: 'Diosa griega de la luna, musa de artistas',
      esIA: true,
    },
    {
      nombre: 'Naela',
      significado: 'La que trae bendiciones',
      simbolo: '🌿 Pureza espiritual',
      numerologia: '6 – Protección, armonía familiar y belleza interior',
      famosos: 'Relacionado con raíces árabes, significado maternal y de sanación',
      esIA: true,
    },
  ];

}
