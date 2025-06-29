import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-nombre-revelado',
  template: `
    <article
      class="relative rounded-2xl px-6 py-8 shadow-xl transition-all duration-500 max-w-2xl mx-auto
              border border-base-300 bg-base-100/90 text-center overflow-hidden"
      [class.border-amber-400]="esIA"
      [class.shadow-amber-300/40]="esIA"
    >
      @if (esIA) {
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 blur-[80px] rounded-full z-0 pointer-events-none animate-pulse-slower"></div>
        <div class="absolute top-3 right-3 text-xs font-semibold text-yellow-500 tracking-wide flex items-center gap-1 animate-fade-in">
          ✦ Nombre generado por IA
        </div>
      }

      <div class="relative z-10">
        <h3 class="text-4xl font-serif text-primary mb-2 tracking-tight">{{ nombre }}</h3>
        <p class="italic text-base-content/70 mb-3 text-lg">“{{ significado }}”</p>
        <div class="text-pink-500 text-xl font-medium mb-4">{{ simbolo }}</div>

        <div class="text-sm space-y-2 text-base-content/80 leading-relaxed max-w-md mx-auto">
          <p><strong>Numerología:</strong> {{ numerologia }}</p>
          <p><strong>Conexión histórica:</strong> {{ famosos }}</p>
        </div>
      </div>
    </article>
  `,
  styles: [`
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.25; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }
    .animate-pulse-slower {
      animation: pulse-slower 6s ease-in-out infinite;
    }
  `],
})
export class NombreReveladoComponent {
  @Input() nombre = '';
  @Input() significado = '';
  @Input() simbolo = '';
  @Input() numerologia = '';
  @Input() famosos = '';
  @Input() esIA = false;
}
