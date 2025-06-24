import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  template: `
    <label class="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        class="checkbox checkbox-accent"
        [checked]="checked"
        [disabled]="disabled"
        (change)="checkedChange.emit(($event.target as HTMLInputElement).checked)"
      />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();
}
