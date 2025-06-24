import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-text-input',
  standalone: true,
  template: `
    <input
      class="input w-full"
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value"
      (input)="valueChange.emit(($event.target as HTMLInputElement).value)"
    />
  `,
})
export class TextInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
}
