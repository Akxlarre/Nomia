import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-answer-button',
  template: `
    <button
      type="button"
      role="option"
      [attr.aria-pressed]="selected"
      class="relative w-full px-5 py-4 rounded-xl border transition-all duration-300 text-left 
             bg-base-100 border-base-300
             hover:border-primary hover:shadow-md hover:bg-base-200
             focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
             flex items-center gap-3 group select-none"
      [class.ring-2]="selected"
      [class.ring-accent]="selected"
      [class.border-primary]="selected"
      [class.bg-accent]="selected"
      [class.bg-opacity-80]="selected"
      [class.shadow-lg]="selected"
      [class.scale-[1.01]]="selected"
      (click)="choose.emit(optionId)"
    >
      @if (icon) {
        <span
          class="text-2xl group-hover:scale-110 group-hover:rotate-[3deg] transition-all duration-200 ease-out"
          aria-hidden="true"
        >
          {{ icon }}
        </span>
      }

      <span
        class="flex-1 text-base font-medium text-base-content transition-colors duration-300"
      >
        {{ label }}
      </span>

      @if (selected) {
        <span
          class="absolute top-2 right-2 text-accent text-lg animate-fade-in"
          aria-hidden="true"
        >
          ✦
        </span>
      }
    </button>
  `,
})
export class AnswerButtonComponent {
  @Input() label = '';
  @Input() optionId = '';
  @Input() icon?: string;
  @Input() selected = false;
  @Output() choose = new EventEmitter<string>();
}
