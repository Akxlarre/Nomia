import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnswerButtonComponent } from './answer-button.component';

export interface QuestionOption {
  id: string;
  label: string;
  icon?: string;
  tonePoetico?: string;
  epocaInspiradora?: string;
}

export type QuestionType = 'single' | 'multi' | 'style' | 'combined';

export interface Question {
  id: string;
  title: string;
  description?: string;
  type: QuestionType;
  options?: QuestionOption[];
  maxSelection?: number;
}

@Component({
  standalone: true,
  selector: 'app-question-viewer',
  imports: [NgFor, NgIf, FormsModule, AnswerButtonComponent],
  template: `
    <div class="mb-6">
      <h3 class="text-2xl font-serif mb-2">{{ question?.title }}</h3>
      <p *ngIf="question?.description" class="text-base mb-4 opacity-80">
        {{ question?.description }}
      </p>
      <ng-container [ngSwitch]="question?.type">
        <div *ngSwitchCase="'single'" class="space-y-3">
          <app-answer-button
            *ngFor="let opt of question?.options"
            [label]="opt.label"
            [optionId]="opt.id"
            [icon]="opt.icon"
            [selected]="opt.id === selected"
            (choose)="choose.emit(opt.id)"
          />
        </div>
        <div *ngSwitchCase="'multi'" class="space-y-3">
          <app-answer-button
            *ngFor="let opt of question?.options"
            [label]="opt.label"
            [optionId]="opt.id"
            [icon]="opt.icon"
            [selected]="selected?.includes(opt.id)"
            (choose)="toggleMulti(opt.id)"
          />
        </div>
        <div *ngSwitchCase="'style'" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Longitud</label>
            <select class="select select-bordered w-full" [(ngModel)]="styleValue.longitud" (ngModelChange)="emitStyle()">
              <option value="corto">corto</option>
              <option value="largo">largo</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 font-medium">Vocal fuerte</label>
            <select class="select select-bordered w-full" [(ngModel)]="styleValue.vocal_fuerte" (ngModelChange)="emitStyle()">
              <option [ngValue]="true">sí</option>
              <option [ngValue]="false">no</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 font-medium">Terminación</label>
            <select class="select select-bordered w-full" [(ngModel)]="styleValue.terminacion" (ngModelChange)="emitStyle()">
              <option value="a">a</option>
              <option value="o">o</option>
              <option value="otra">otra</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 font-medium">Sílabas</label>
            <select class="select select-bordered w-full" [(ngModel)]="styleValue.silabas" (ngModelChange)="emitStyle()">
              <option [ngValue]="1">1</option>
              <option [ngValue]="2">2</option>
              <option [ngValue]="3">3</option>
            </select>
          </div>
        </div>
        <div *ngSwitchCase="'combined'" class="space-y-3">
          <app-answer-button
            *ngFor="let opt of question?.options"
            [label]="opt.label"
            [optionId]="opt.id"
            [icon]="opt.icon"
            [selected]="opt.id === selected"
            (choose)="choose.emit(opt.id)"
          />
        </div>
      </ng-container>
    </div>
  `,
})
export class QuestionViewerComponent {
  @Input() question?: Question;
  @Input() selected: any;
  @Output() choose = new EventEmitter<any>();

  styleValue = {
    longitud: 'corto',
    vocal_fuerte: false,
    terminacion: 'a',
    silabas: 1,
  };

  ngOnChanges() {
    if (this.question?.type === 'style' && this.selected) {
      this.styleValue = { ...this.styleValue, ...this.selected };
    }
  }

  toggleMulti(id: string) {
    const arr: string[] = Array.isArray(this.selected) ? [...this.selected] : [];
    const idx = arr.indexOf(id);
    if (idx >= 0) {
      arr.splice(idx, 1);
    } else if (!this.question?.maxSelection || arr.length < this.question.maxSelection) {
      arr.push(id);
    }
    this.choose.emit(arr);
  }

  emitStyle() {
    this.choose.emit({ ...this.styleValue });
  }
}
