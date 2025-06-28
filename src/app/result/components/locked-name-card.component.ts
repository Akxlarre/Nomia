import { Component } from '@angular/core';

@Component({
  selector: 'ui-locked-name-card',
  standalone: true,
  template: `
    <article
      class="card-shell relative group text-center"
    >
      <!-- Fondo decorativo -->
      <div
        class="absolute -top-6 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- Candado -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span class="text-5xl text-accent/70 drop-shadow animate-pulse-slower">🔒</span>
      </div>

      <!-- Contenido difuminado -->
      <div class="relative z-10 blur-sm group-hover:blur-[1px] opacity-70 select-none transition-all">
        <h3 class="text-2xl font-serif mb-2">Nombre bloqueado</h3>
        <p class="italic text-sm text-base-content/70">Disponible tras desbloqueo</p>
      </div>
    </article>
  `,
  styles: [`
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    .animate-pulse-slower {
      animation: pulse-slower 6s ease-in-out infinite;
    }
  `],
})
export class LockedNameCardComponent {}
