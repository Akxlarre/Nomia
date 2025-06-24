import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  standalone: true,
  template: `
    <div class="alert" [ngClass]="'alert-' + type">
      <span><ng-content></ng-content></span>
    </div>
  `,
})
export class AlertComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
}
