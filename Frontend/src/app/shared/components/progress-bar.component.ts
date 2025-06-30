import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-progress-bar',
  template: `
    <div class="relative w-full h-4 bg-base-200 rounded-full overflow-hidden shadow-inner">
      <div
        class="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
        [style.width.%]="progress"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full pointer-events-none"
        style="mask-image: linear-gradient(to right, rgba(0,0,0,1) 95%, rgba(0,0,0,0))"
      >
        <div
          class="h-full w-1 bg-white/40 blur-sm animate-pulse-slow"
          [style.left.%]="progress"
        ></div>
      </div>
    </div>
  `,
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() max = 100;

  get progress(): number {
    return Math.min(100, (this.value / this.max) * 100);
  }
}
