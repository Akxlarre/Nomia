import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AnswerButtonComponent } from './answer-button.component';

export interface QuestionOption {
  id: string;
  label: string;
  value: number;
  icon?: string;
}

export interface Question {
  id: string;
  title: string;
  description?: string;
  options: QuestionOption[];
}

@Component({
  standalone: true,
  selector: 'app-question-viewer',
  imports: [NgFor, NgIf, AnswerButtonComponent],
  template: `
    <div class="mb-6">
      <h3 class="text-2xl font-serif mb-2">{{ question?.title }}</h3>
      <p *ngIf="question?.description" class="text-base mb-4 opacity-80">
        {{ question?.description }}
      </p>
      <div class="space-y-3">
        <app-answer-button
          *ngFor="let opt of question?.options"
          [label]="opt.label"
          [optionId]="opt.id"
          [icon]="opt.icon"
          [selected]="opt.id === selectedOption"
          (choose)="choose.emit($event)"
        />
      </div>
    </div>
  `,
})
export class QuestionViewerComponent {
  @Input() question?: Question;
  @Input() selectedOption?: string;
  @Output() choose = new EventEmitter<string>();
}
