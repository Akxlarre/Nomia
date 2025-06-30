import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-progress',
  imports: [NgClass],
  template: `
    <progress class="progress w-full transition-colors" [ngClass]="'progress-' + color" [value]="value" [max]="max"></progress>
  `,
})
export class ProgressComponent {
  @Input() color: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' = 'primary';
  @Input() value = 0;
  @Input() max = 100;
}
