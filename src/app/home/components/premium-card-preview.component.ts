import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NatalCardComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-premium-card-preview',
  imports: [RouterModule, NatalCardComponent],
  template: `
    <section class="relative py-16 px-6 text-center">
      <div class="absolute -top-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      <div class="max-w-md mx-auto">
        <ui-natal-card name="Tu Nombre" class="animate-fade-in-up">
          <p class="text-lg font-serif italic">Tu carta personalizada te espera…</p>
        </ui-natal-card>
        <a routerLink="/test" class="btn btn-primary mt-6 delay-300 animate-fade-in">Descubre tu nombre</a>
      </div>
    </section>
  `,
})
export class PremiumCardPreviewComponent {}
