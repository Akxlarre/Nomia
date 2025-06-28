import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  TestHeaderComponent,
  TestProgressComponent,
  QuestionViewerComponent,
  NavigationButtonsComponent,
  AnimatedBackgroundComponent,
} from '../components';
import { QuizService } from '../services/quiz.service';
import { Question } from '../components/question-viewer.component';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-test-page',
  animations: [
    trigger('questionFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-12px)' })),
      ]),
    ]),
  ],
  imports: [
    TestHeaderComponent,
    TestProgressComponent,
    QuestionViewerComponent,
    NavigationButtonsComponent,
    AnimatedBackgroundComponent,
  ],
  template: `
    <app-animated-background />

    <section class="relative py-16 px-4 mx-auto max-w-xl">
      <app-test-header />
      <app-test-progress [current]="current + 1" [total]="questions.length" />

      @let q = questions[current];
      @if (!finished && q) {
        <div
          class="min-h-[400px]"
          [@questionFade]="q.id"
        >
          <app-question-viewer
            [question]="q"
            [selected]="answers[q.id]"
            (choose)="onChoose($event)"
          />
          <app-navigation-buttons
            [canPrev]="current > 0"
            [canNext]="isAnswered(q)"
            [isLast]="current === questions.length - 1"
            (prev)="prev()"
            (next)="next()"
          />
        </div>
      }

      @if (finished) {
        <div class="text-center mt-8 animate-fade-in-up">
          <p class="text-xl font-serif mb-4">Tu alma ya eligió. Estamos preparando tu carta…</p>
          <span class="loading loading-spinner loading-lg text-accent"></span>
        </div>
      }
    </section>
  `,
})
export class TestPage {
  questions: Question[] = [];
  answers: Record<string, any> = {};
  current = 0;
  finished = false;

  constructor(
    private quiz: QuizService,
    private router: Router
  ) {
    this.questions = this.quiz.questions;
  }

  onChoose(value: any) {
    this.answers[this.questions[this.current].id] = value;
  }

  prev() {
    if (this.current > 0) this.current--;
  }

  next() {
    if (!this.isAnswered(this.questions[this.current])) return;

    if (this.current < this.questions.length - 1) {
      this.current++;
    } else {
      this.finish();
    }
  }

  isAnswered(q: Question): boolean {
    const val = this.answers[q.id];
    if (q.type === 'multi') return Array.isArray(val) && val.length > 0;
    if (q.type === 'style') return !!val && val.longitud;
    return !!val;
  }

  private finish() {
    this.finished = true;
    this.quiz.submitAnswers(this.answers);
    setTimeout(() => {
      this.router.navigateByUrl('/result');
    }, 2000);
  }
}
