import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-payment-redirect-page',
  template: `
    <section class="py-16 px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">Procesando tu pago</h2>
      <p class="text-base font-sans mb-6">Estamos confirmando tu pago para mostrar tu resultado premium.</p>
      <progress class="progress progress-primary w-56 mx-auto"></progress>
    </section>
  `,
})
export class PaymentRedirectPage {}