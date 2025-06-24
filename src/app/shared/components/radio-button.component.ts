import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  template: `
    <label class="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        class="radio radio-accent"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="change.emit(value)"
      />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class RadioButtonComponent {
  @Input() name = '';
  @Input() value: any;
  @Input() checked = false;
  @Input() disabled = false;
  @Output() change = new EventEmitter<any>();
}
