import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card-metric',
  template: `
    <div class="p-4 rounded-xl bg-base-100 shadow flex flex-col items-center text-center">
      <span class="text-sm text-base-content/70">{{ label }}</span>
      <p class="text-2xl font-bold">{{ value }}</p>
    </div>
  `,
})
export class CardMetricComponent {
  @Input() label = '';
  @Input() value: string | number = '';
}
