import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        class="toggle toggle-accent"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
      />
      <span><ng-content></ng-content></span>
    </label>
  `,
})
export class ToggleSwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.checkedChange.emit(!!target?.checked);
  }
}
