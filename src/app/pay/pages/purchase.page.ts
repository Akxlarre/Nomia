import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-purchase-page',
  imports: [PrimaryButtonComponent],
  template: `
    <section class="max-w-2xl mx-auto px-4 py-20 text-center relative">
      <div
        class="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div class="relative z-10">
        <h1 class="text-4xl font-serif text-primary mb-4 tracking-tight animate-fade-in-up">
          Desbloquea tu revelación completa
        </h1>
        <p class="text-base text-base-content/70 italic max-w-md mx-auto mb-10 animate-fade-in delay-200">
          Accede a nombres canalizados, numerología simbólica y conexiones espirituales únicas.
        </p>

        <div class="grid gap-4 text-left text-base-content/80 text-sm max-w-md mx-auto mb-10 animate-fade-in-up delay-300">
          <div class="flex items-start gap-3">
            <span class="text-xl text-accent">✦</span>
            <p>4 nombres simbólicos adicionales</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-xl text-accent">✦</span>
            <p>2 nombres generados por IA con alma única</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-xl text-accent">✦</span>
            <p>Numerología sagrada personalizada</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-xl text-accent">✦</span>
            <p>Inspiraciones de personajes históricos con tu misma energía</p>
          </div>
        </div>

        <div class="text-center text-lg font-semibold text-base-content mb-6 animate-fade-in-up delay-400">
          <span class="text-3xl text-primary font-serif tracking-tight">$4.990 CLP</span>
          <p class="text-sm italic mt-1 text-base-content/60">Pago único, acceso completo</p>
        </div>

        <div class="animate-fade-in-up delay-500">
          <ui-primary-button (click)="confirmPurchase = true">
            🔓 Realizar pago seguro
          </ui-primary-button>
          <p class="text-xs text-base-content/50 mt-3">
            Aceptamos tarjetas y transferencias bancarias.
          </p>
        </div>
      </div>

      <div class="mt-12 text-xs text-base-content/40 animate-fade-in delay-700">
        Transacción segura con Webpay o Flow
      </div>

      @if (confirmPurchase) {
        <div class="fixed inset-0 bg-base-100/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div class="bg-base-200 p-6 rounded-xl text-center shadow-xl w-full max-w-sm border border-base-300">
            <h3 class="text-lg font-serif mb-2">¿Confirmar desbloqueo?</h3>
            <p class="text-sm text-base-content/70 mb-4">
              Serás redirigido a una plataforma de pago segura para acceder a tus nombres premium.
            </p>
            <div class="flex justify-center gap-4">
              <button
                class="btn btn-outline btn-sm"
                (click)="confirmPurchase = false"
              >
                Cancelar
              </button>
              <button
                class="btn btn-primary btn-sm"
                (click)="goToPayment()"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  `,
})
export class PurchasePageComponent {
  confirmPurchase = false;

  constructor(private router: Router) {}

  goToPayment() {
    this.router.navigateByUrl('/payment/redirect');
  }
}
