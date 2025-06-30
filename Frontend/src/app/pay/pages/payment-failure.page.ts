import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-payment-failure-page',
  imports: [RouterModule, PrimaryButtonComponent],
  template: `
    <section class="py-24 px-4 text-center relative">
      <div
        class="absolute left-1/2 -translate-x-1/2 top-12 w-96 h-96 bg-error/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      ></div>

      <h2 class="text-3xl font-serif mb-4 text-error tracking-tight animate-fade-in-up">
        Tu pago no pudo completarse
      </h2>
      <p class="text-base font-sans text-base-content/70 italic mb-8 animate-fade-in delay-200">
        Ocurrió un problema al procesar la transacción.
      </p>

      <ui-primary-button routerLink="/purchase" class="animate-fade-in-up delay-300">
        Intentar nuevamente
      </ui-primary-button>

      <p class="text-sm text-base-content/50 mt-6 animate-fade-in delay-500">
        Si el inconveniente persiste, por favor contáctanos.
      </p>
    </section>
  `,
})
export class PaymentFailurePage {}
