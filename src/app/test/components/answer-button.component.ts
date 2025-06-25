import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-answer-button',
  imports: [NgClass],
  template: `
    <button
      class="btn btn-outline w-full flex items-center justify-start gap-2 transition-colors"
      [ngClass]="{
        'border-primary ring-2 ring-accent': selected
      }"
      (click)="choose.emit(optionId)"
    >
      <span *ngIf="icon" aria-hidden="true">{{ icon }}</span>
      <span class="flex-1 text-left">{{ label }}</span>
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
