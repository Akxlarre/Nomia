import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NatalCardComponent, SecondaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-premium-card-preview',
  imports: [RouterModule, NatalCardComponent, SecondaryButtonComponent],
  template: `
    <section class="py-16 px-6 text-center">
      <div class="max-w-md mx-auto">
        <ui-natal-card name="Tu Nombre">
          <p class="text-lg font-serif italic">Tu carta personalizada te espera…</p>
        </ui-natal-card>
        <a routerLink="/test" class="btn btn-secondary mt-6">Descubre tu nombre</a>
      </div>
    </section>
  `,
})
export class PremiumCardPreviewComponent {}
