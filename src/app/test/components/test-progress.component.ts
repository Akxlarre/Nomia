import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-test-progress',
  imports: [ProgressBarComponent],
  template: `
    <div class="mb-10 animate-fade-in-up">
      <ui-progress-bar [value]="percent" [max]="100"/>

      <p class="text-sm md:text-base mt-3 text-center font-sans text-base-content/80 italic tracking-wide">
        Avanzando: paso {{ current }} de {{ total }}
      </p>
    </div>
  `,
})
export class TestProgressComponent {
  @Input() current = 1;
  @Input() total = 1;

  get percent() {
    return (this.current / this.total) * 100;
  }
}
