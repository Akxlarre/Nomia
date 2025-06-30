import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-primary-button',
  standalone: true,
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      class="px-6 py-3 rounded-xl bg-primary/90 text-white font-semibold
             tracking-wide shadow-md hover:shadow-lg hover:bg-primary/80
             transition-all duration-200 relative
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ng-content></ng-content>

      @if (!disabled) {
        <span
          class="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/80 animate-pulse"
          aria-hidden="true"
        ></span>
      }
    </button>
  `,
})
export class PrimaryButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
