import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ui-checkbox',
  imports: [FormsModule],
  template: `
    <label class="label cursor-pointer gap-2">
      <input type="checkbox" class="checkbox transition-colors" [(ngModel)]="checked" />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class CheckboxComponent {
  @Input() checked = false;
}
