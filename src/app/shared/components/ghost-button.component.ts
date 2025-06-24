import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-ghost-button',
  standalone: true,
  template: `
    <button class="btn btn-ghost" [type]="type" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
})
export class GhostButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
