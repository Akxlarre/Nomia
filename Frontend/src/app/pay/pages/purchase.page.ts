import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-purchase-page',
  template: `
    <section class="max-w-2xl mx-auto px-4 py-20 text-center relative">
      <!-- Aura espiritual -->
      <div
        class="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div class="relative z-10">
        <!-- Título -->
        <h1 class="text-4xl font-serif text-primary mb-4 tracking-tight animate-fade-in-up">
          Desbloquea tu revelación completa
        </h1>

        <!-- Subtítulo -->
        <p class="text-base text-base-content/70 italic max-w-md mx-auto mb-10 animate-fade-in delay-200">
          Accede a nombres canalizados, numerología simbólica y conexiones espirituales únicas.
        </p>

        <!-- Beneficios -->
        <div class="grid gap-4 text-left text-base-content/80 text-sm max-w-md mx-auto mb-10 animate-fade-in-up delay-300">
          <div class="flex items-start gap-3"><span class="text-xl text-accent">✦</span><p>4 nombres simbólicos adicionales</p></div>
          <div class="flex items-start gap-3"><span class="text-xl text-accent">✦</span><p>2 nombres generados por IA con alma única</p></div>
          <div class="flex items-start gap-3"><span class="text-xl text-accent">✦</span><p>Numerología sagrada personalizada</p></div>
          <div class="flex items-start gap-3"><span class="text-xl text-accent">✦</span><p>Inspiraciones de personajes históricos con tu misma energía</p></div>
        </div>

        <!-- Precio -->
        <div class="text-center text-lg font-semibold text-base-content mb-10 animate-fade-in-up delay-400">
          <span class="text-3xl text-primary font-serif tracking-tight">$2.500 CLP</span>
          <p class="text-sm italic mt-1 text-base-content/60">Pago único, acceso completo</p>
        </div>

        <!-- Indicador -->
        <p class="text-xs text-base-content/50 mb-4 italic">
          Elige tu método de pago preferido:
        </p>

        <!-- BOTONES DE PAGO ESTILO PREMIUM CUADRADO -->
        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto animate-fade-in-up delay-500">
          <!-- Webpay -->
          <button
            class="w-full aspect-[4/3] sm:aspect-square p-4 bg-white border border-base-300 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center justify-center gap-2"
            (click)="goToPayment('webpay')"
          >
            <img src="assets/img/webpay.svg" alt="Webpay" class="w-auto h-10 sm:h-12 max-w-[90%] object-contain" />
          </button>

          <!-- Mercado Pago -->
          <button
            class="w-full aspect-[4/3] sm:aspect-square p-4 bg-white border border-base-300 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center justify-center gap-2"
            (click)="goToPayment('mercadopago')"
          >
            <img src="assets/img/mercado-pago.svg" alt="Mercado Pago" class="w-auto h-22 sm:h-30 max-w-[90%] object-contain" />
          </button>
        </div>

        <!-- Seguridad -->
        <p class="text-xs text-base-content/50 mt-6 animate-fade-in delay-700">
          Transacción 100% segura. Aceptamos tarjetas y transferencias.
        </p>
      </div>
    </section>
  `,
})
export class PurchasePageComponent {
  constructor(private router: Router) {}

  goToPayment(method: 'webpay' | 'mercadopago') {
    this.router.navigateByUrl(`/payment/redirect?method=${method}`);
  }
}
