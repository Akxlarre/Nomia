import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-primary-button',
  standalone: true,
  template: `
    <button class="btn btn-primary" [type]="type" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
})
export class PrimaryButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
