import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ui-toggle',
  imports: [FormsModule],
  template: `
    <label class="cursor-pointer label gap-2">
      <input type="checkbox" class="toggle transition-colors" [(ngModel)]="checked" />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class ToggleComponent {
  @Input() checked = false;
}
