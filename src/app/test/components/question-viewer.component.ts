import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  imports: [AnswerButtonComponent],
  template: `
    <div class="mb-6">
      <h3 class="text-2xl font-serif mb-2">{{ question?.title }}</h3>
      @if (question?.description) {
        <p class="text-base mb-4 opacity-80">{{ question?.description }}</p>
      }
      @switch (question?.type) {
        @case ('single') {
          <div class="space-y-3">
            @for (opt of question?.options; track opt.id) {
              <app-answer-button
                [label]="opt.label"
                [optionId]="opt.id"
                [icon]="opt.icon"
                [selected]="opt.id === selected"
                (choose)="choose.emit(opt.id)"
              />
            }
          </div>
        }
        @case ('multi') {
          <div class="space-y-3">
            @for (opt of question?.options; track opt.id) {
              <app-answer-button
                [label]="opt.label"
                [optionId]="opt.id"
                [icon]="opt.icon"
                [selected]="selected?.includes(opt.id)"
                (choose)="toggleMulti(opt.id)"
              />
            }
          </div>
        }
        @case ('style') {
          <div class="space-y-4">
            <div>
              <label class="block mb-1 font-medium">Longitud</label>
              <select
                class="select select-bordered w-full"
                [value]="styleValue.longitud"
                (change)="updateStyle('longitud', $any($event.target).value)"
              >
                <option value="corto">corto</option>
                <option value="largo">largo</option>
              </select>
            </div>
            <div>
              <label class="block mb-1 font-medium">Vocal fuerte</label>
              <select
                class="select select-bordered w-full"
                [value]="styleValue.vocal_fuerte"
                (change)="updateStyle('vocal_fuerte', $any($event.target).value)"
              >
                <option value="true">sí</option>
                <option value="false">no</option>
              </select>
            </div>
            <div>
              <label class="block mb-1 font-medium">Terminación</label>
              <select
                class="select select-bordered w-full"
                [value]="styleValue.terminacion"
                (change)="updateStyle('terminacion', $any($event.target).value)"
              >
                <option value="a">a</option>
                <option value="o">o</option>
                <option value="otra">otra</option>
              </select>
            </div>
            <div>
              <label class="block mb-1 font-medium">Sílabas</label>
              <select
                class="select select-bordered w-full"
                [value]="styleValue.silabas"
                (change)="updateStyle('silabas', $any($event.target).value)"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        }
        @case ('combined') {
          <div class="space-y-3">
            @for (opt of question?.options; track opt.id) {
              <app-answer-button
                [label]="opt.label"
                [optionId]="opt.id"
                [icon]="opt.icon"
                [selected]="opt.id === selected"
                (choose)="choose.emit(opt.id)"
              />
            }
          </div>
        }
      }
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

  updateStyle(field: keyof typeof this.styleValue, value: string) {
    if (field === 'vocal_fuerte') {
      this.styleValue.vocal_fuerte = value === 'true';
    } else if (field === 'silabas') {
      this.styleValue.silabas = parseInt(value, 10) as 1 | 2 | 3;
    } else {
      this.styleValue[field] = value as any;
    }
    this.emitStyle();
  }

  emitStyle() {
    this.choose.emit({ ...this.styleValue });
  }
}
