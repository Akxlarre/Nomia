import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-test-header',
  template: `
    <header class="mb-6 text-center">
      <h2 class="text-3xl font-serif mb-2">Escucha tu alma...</h2>
      <p class="text-base font-sans opacity-80">Responde con sinceridad ritual.</p>
    </header>
  `,
})
export class TestHeaderComponent {}
