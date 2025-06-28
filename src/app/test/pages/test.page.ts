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
import { NgIf } from '@angular/common';
import { Question } from '../components/question-viewer.component';

@Component({
  standalone: true,
  selector: 'app-test-page',
  imports: [
    NgIf,
    TestHeaderComponent,
    TestProgressComponent,
    QuestionViewerComponent,
    NavigationButtonsComponent,
    AnimatedBackgroundComponent,
  ],
  template: `
    <app-animated-background />
    <section class="relative py-16 px-4 mx-auto max-w-xl animate-fade-in-up">
      <app-test-header />
      <app-test-progress [current]="current + 1" [total]="questions.length" />
      <app-question-viewer
        [question]="questions[current]"
        [selected]="answers[questions[current].id]"
        (choose)="onChoose($event)"
      />
      <ng-container *ngIf="!finished">
        <app-navigation-buttons
          [canPrev]="current > 0"
          [canNext]="isAnswered(questions[current])"
          [isLast]="current === questions.length - 1"
          (prev)="prev()"
          (next)="next()"
        />
      </ng-container>
      <div *ngIf="finished" class="text-center mt-8">
        <p class="text-xl font-serif mb-4">Tu alma ya eligió. Estamos preparando tu carta…</p>
        <span class="loading loading-spinner loading-lg text-accent"></span>
      </div>
    </section>
  `,
})
export class TestPage {
  questions: Question[] = [];
  answers: Record<string, any> = {};
  current = 0;
  finished = false;

  constructor(private quiz: QuizService, private router: Router) {
    this.questions = this.quiz.questions;
  }

  onChoose(value: any) {
    this.answers[this.questions[this.current].id] = value;
  }

  prev() {
    if (this.current > 0) {
      this.current--;
    }
  }

  next() {
    if (!this.isAnswered(this.questions[this.current])) {
      return;
    }
    if (this.current < this.questions.length - 1) {
      this.current++;
    } else {
      this.finish();
    }
  }

  isAnswered(q: Question): boolean {
    const val = this.answers[q.id];
    if (q.type === 'multi') {
      return Array.isArray(val) && val.length > 0;
    }
    if (q.type === 'style') {
      return !!val && val.longitud;
    }
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
