import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    <div class="mb-10">
      <h3 class="text-2xl font-serif mb-2 leading-snug tracking-tight">
        {{ question?.title }}
      </h3>
      @if (question?.description) {
        <p class="text-base font-sans mb-6 opacity-80 max-w-prose leading-relaxed">
          {{ question?.description }}
        </p>
      }

      @switch (question?.type) {
        @case ('single') {
          <div class="grid gap-4">
            @for (opt of (question?.options ?? []); track opt.id) {
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
          <div class="space-y-2 mb-4 text-sm text-base-content/70 font-medium italic">
            Puedes elegir hasta {{ question?.maxSelection }} opciones
          </div>
          <div class="grid gap-4">
            @for (opt of (question?.options ?? []); track opt.id) {
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
          <div class="space-y-8">

            <!-- Longitud -->
            <div>
              <h4 class="mb-3 font-semibold text-lg">¿Qué longitud prefieres?</h4>
              <div class="grid grid-cols-2 gap-4">
                <app-answer-button
                  label="Corto"
                  icon="🌿"
                  [optionId]="'corto'"
                  [selected]="styleValue.longitud === 'corto'"
                  (choose)="updateStyle('longitud', 'corto')"
                />
                <app-answer-button
                  label="Largo"
                  icon="🌙"
                  [optionId]="'largo'"
                  [selected]="styleValue.longitud === 'largo'"
                  (choose)="updateStyle('longitud', 'largo')"
                />
              </div>
            </div>

            <!-- Vocal fuerte -->
            <div>
              <h4 class="mb-3 font-semibold text-lg">¿Te gusta una vocal fuerte?</h4>
              <div class="grid grid-cols-2 gap-4">
                <app-answer-button
                  label="Sí"
                  icon="🔊"
                  [optionId]="'true'"
                  [selected]="styleValue.vocal_fuerte === true"
                  (choose)="updateStyle('vocal_fuerte', 'true')"
                />
                <app-answer-button
                  label="No"
                  icon="🤫"
                  [optionId]="'false'"
                  [selected]="styleValue.vocal_fuerte === false"
                  (choose)="updateStyle('vocal_fuerte', 'false')"
                />
              </div>
            </div>

            <!-- Terminación -->
            <div>
              <h4 class="mb-3 font-semibold text-lg">¿Con qué letra te gustaría que terminara?</h4>
              <div class="grid grid-cols-3 gap-4">
                <app-answer-button
                  label="A"
                  icon="🌸"
                  [optionId]="'a'"
                  [selected]="styleValue.terminacion === 'a'"
                  (choose)="updateStyle('terminacion', 'a')"
                />
                <app-answer-button
                  label="O"
                  icon="🧿"
                  [optionId]="'o'"
                  [selected]="styleValue.terminacion === 'o'"
                  (choose)="updateStyle('terminacion', 'o')"
                />
                <app-answer-button
                  label="Otra"
                  icon="✨"
                  [optionId]="'otra'"
                  [selected]="styleValue.terminacion === 'otra'"
                  (choose)="updateStyle('terminacion', 'otra')"
                />
              </div>
            </div>

            <!-- Sílabas -->
            <div>
              <h4 class="mb-3 font-semibold text-lg">¿Número de sílabas ideal?</h4>
              <div class="grid grid-cols-3 gap-4">
                <app-answer-button
                  label="1 sílaba"
                  icon="1️⃣"
                  [optionId]="'1'"
                  [selected]="styleValue.silabas === 1"
                  (choose)="updateStyle('silabas', '1')"
                />
                <app-answer-button
                  label="2 sílabas"
                  icon="2️⃣"
                  [optionId]="'2'"
                  [selected]="styleValue.silabas === 2"
                  (choose)="updateStyle('silabas', '2')"
                />
                <app-answer-button
                  label="3 sílabas"
                  icon="3️⃣"
                  [optionId]="'3'"
                  [selected]="styleValue.silabas === 3"
                  (choose)="updateStyle('silabas', '3')"
                />
              </div>
            </div>

          </div>
        }
        @case ('combined') {
          <div class="grid gap-4">
            @for (opt of (question?.options ?? []); track opt.id) {
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
    longitud: undefined,
    vocal_fuerte: undefined,
    terminacion: undefined,
    silabas: undefined,
  } as any;

  ngOnChanges() {
    if (this.question?.type === 'style' && this.selected) {
      this.styleValue = { ...this.styleValue, ...this.selected };
    }
  }

  toggleMulti(id: string) {
    const arr = Array.isArray(this.selected) ? [...this.selected] : [];
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