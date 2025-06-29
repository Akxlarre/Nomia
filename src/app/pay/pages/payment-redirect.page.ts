import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-payment-redirect-page',
  template: `
    <section class="py-24 px-4 text-center relative">
      <div
        class="absolute left-1/2 -translate-x-1/2 top-12 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      ></div>

      <h2 class="text-3xl font-serif mb-4 text-primary tracking-tight animate-fade-in-up">
        Procesando tu pago...
      </h2>
      <p class="text-base font-sans text-base-content/70 italic mb-8 animate-fade-in delay-200">
        Estamos confirmando tu desbloqueo espiritual.
      </p>

      <div class="relative w-56 mx-auto">
        <progress class="progress progress-primary w-full animate-pulse" />
        <div class="absolute top-0 left-0 right-0 flex justify-center text-2xl -mt-7 text-accent">
          ✦ ✦ ✦
        </div>
      </div>

      <p class="text-sm text-base-content/50 mt-6 animate-fade-in delay-500">
        No cierres esta ventana. Te redirigiremos automáticamente...
      </p>
    </section>
  `,
})
export class PaymentRedirectPage {}
