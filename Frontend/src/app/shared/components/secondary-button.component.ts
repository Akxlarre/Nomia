import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-secondary-button',
  standalone: true,
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      class="px-5 py-3 rounded-xl bg-secondary/20 text-secondary font-medium
             hover:bg-secondary/30 border border-secondary/40
             transition-all duration-200
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class SecondaryButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
