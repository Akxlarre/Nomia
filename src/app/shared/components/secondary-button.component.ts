import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-secondary-button',
  standalone: true,
  template: `
    <button class="btn btn-secondary" [type]="type" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
})
export class SecondaryButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
