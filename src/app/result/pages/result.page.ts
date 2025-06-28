// src/app/result/pages/result.page.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';
import { FreeNameCardComponent } from '../components/free-name-card.component';
import { LockedNameCardComponent } from '../components/locked-name-card.component';

@Component({
  standalone: true,
  selector: 'app-result-page',
  imports: [RouterModule, PrimaryButtonComponent, FreeNameCardComponent, LockedNameCardComponent],
  template: `
    <section class="max-w-3xl mx-auto px-4 py-16 text-center">
      <h2 class="text-4xl font-serif mb-6 animate-fade-in-up">
        ✨ Tu primer nombre con alma es...
      </h2>

      <ui-free-name-card
        [name]="result.name"
        [meaning]="result.meaning"
        [symbol]="result.symbol"
        class="mb-12 animate-fade-in-up"
      />

      <div class="relative">
        <h3 class="text-xl font-serif mb-4 opacity-80 animate-fade-in">
          Otros nombres te esperan...
        </h3>

        <div class="flex gap-4 overflow-x-auto snap-x px-2 sm:px-0">
          @for (i of [1, 2, 3, 4]; track i) {
            <ui-locked-name-card class="snap-center min-w-[260px] max-w-[280px]" />
          }
        </div>

        <div class="mt-10 animate-fade-in-up delay-300">
          <ui-primary-button routerLink="/pay">
            🔓 Desbloquear todos los nombres
          </ui-primary-button>
        </div>
      </div>
    </section>
  `,
})
export class ResultPageComponent {
  result = {
    name: 'Lunara',
    meaning: 'Aquella que refleja la luz del alma',
    symbol: '🌙 Luz espiritual',
  };
}
