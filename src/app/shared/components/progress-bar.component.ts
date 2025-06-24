import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-progress-bar',
  standalone: true,
  template: `
    <progress class="progress progress-primary w-full" [value]="value" [attr.max]="max"></progress>
  `,
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() max = 100;
}
