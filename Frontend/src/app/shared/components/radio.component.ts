import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ui-radio',
  imports: [FormsModule],
  template: `
    <label class="label cursor-pointer gap-2">
      <input type="radio" class="radio transition-colors" [name]="name" [(ngModel)]="model" [value]="value" />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class RadioComponent {
  @Input() name = '';
  @Input() value: any;
  @Input() model: any;
}
