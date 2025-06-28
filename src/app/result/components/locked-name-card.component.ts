import { Component } from '@angular/core';

@Component({
  selector: 'ui-locked-name-card',
  standalone: true,
  template: `
    <article class="relative bg-base-200/70 border border-dashed border-base-300 p-4 rounded-xl shadow-inner">
      <div class="blur-sm opacity-50">
        <h3 class="text-2xl font-serif mb-2">Nombre bloqueado</h3>
        <p class="italic text-sm">Disponible tras desbloqueo</p>
      </div>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-3xl text-base-content/60">🔒</span>
      </div>
    </article>
  `,
})
export class LockedNameCardComponent {}
