import { Component } from '@angular/core';
import { NombreReveladoComponent } from '../components/nombre-revelado.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { NameGeneratorService, Name } from '../../names/services/name-generator.service';

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
            [famosos]="n.famosos || ''"
            [esIA]="n.ia_generado"
            appRevealOnScroll
          />
        }
      </div>
    </section>
  `,
})
export class ResultsFinalPage {
  nombres: Name[] = [];

  constructor(private nameService: NameGeneratorService) {
    this.nameService.getPopular(3).subscribe(n => {
      this.nombres = n.map(item => ({
        ...item,
        famosos: (item as any).personajes_famosos?.join(', ') || '',
      }));
    });
  }

}
