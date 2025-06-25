import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-test-progress',
  imports: [ProgressBarComponent],
  template: `
    <div class="mb-4">
      <ui-progress-bar [value]="percent" [max]="100" />
      <p class="text-sm mt-2 text-center font-sans opacity-80">
        Paso {{ current }} de {{ total }}
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
