import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-stepper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="steps w-full">
      <li *ngFor="let step of steps; let i = index" [ngClass]="stepClass(i)">
        {{ step }}
      </li>
    </ul>
  `,
})
export class StepperComponent {
  @Input() steps: string[] = [];
  @Input() active = 0;

  stepClass(index: number) {
    return index <= this.active ? 'step step-primary' : 'step';
  }
}
