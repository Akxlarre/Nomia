import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-ghost-button',
  standalone: true,
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      class="px-5 py-3 rounded-xl border border-accent/30 text-accent font-medium
             hover:border-accent hover:bg-accent/10 transition-all duration-200
             disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class GhostButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}