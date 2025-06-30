import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        class="checkbox checkbox-accent"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
      />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.checkedChange.emit(!!target?.checked);
  }
}
