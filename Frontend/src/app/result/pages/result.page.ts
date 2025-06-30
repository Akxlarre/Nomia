import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';
import { FreeNameCardComponent } from '../components/free-name-card.component';
import { LockedNameCardComponent } from '../components/locked-name-card.component';

@Component({
  standalone: true,
  selector: 'app-result-page',
  imports: [
    RouterModule,
    PrimaryButtonComponent,
    FreeNameCardComponent,
    LockedNameCardComponent,
  ],
  template: `
    <section class="relative max-w-2xl mx-auto px-4 py-10 text-center">
      <!-- Título -->
      <h2 class="text-3xl md:text-4xl font-serif font-semibold text-primary mb-10 animate-fade-in-up">
        ✨ Tu primer nombre con alma es...
      </h2>

      <!-- Nombre gratuito -->
      <ui-free-name-card
        [name]="result.name"
        [meaning]="result.meaning"
        [symbol]="result.symbol"
        [quote]="result.quote"
        class="mb-12 animate-fade-in-up delay-100"
      />

      <!-- Nombre bloqueado -->
      <p class="italic text-sm md:text-base text-base-content/70 mt-2 mb-4 animate-fade-in delay-300">
        Un nuevo nombre aguarda en silencio…
      </p>

      <div class="flex justify-center animate-fade-in-up delay-500">
        <ui-locked-name-card
          class="rounded-2xl shadow-md border border-dashed border-violet-300/50
                 backdrop-blur-md bg-gradient-to-b from-base-200/60 to-base-100/50"
        />
      </div>

      <!-- Botón CTA + beneficios -->
      <div class="mt-12 animate-fade-in-up delay-700 space-y-3">
        <ui-primary-button routerLink="/purchase">
          🔓 Desbloquear los 4 nombres restantes
        </ui-primary-button>

        <p class="text-sm italic mt-2 text-base-content/70 max-w-md mx-auto leading-relaxed">
          Incluye <strong>2 nombres canalizados por IA</strong> con alma única, 
          <strong>numerología sagrada</strong> y vínculos con 
          <strong>personajes históricos y famosos</strong> que comparten su energía.
        </p>

        <p class="text-xs text-base-content/50 mt-1">
          Una experiencia simbólica premium, diseñada para conectar profundamente con tu ser.
        </p>
      </div>
    </section>
  `,
})
export class ResultPageComponent {
  result = {
    name: 'Lunara',
    meaning: 'Aquella que refleja la luz del alma',
    symbol: '🌙 Luz espiritual',
    quote: 'Tu luz interior ya lo sabía…',
  };
}
