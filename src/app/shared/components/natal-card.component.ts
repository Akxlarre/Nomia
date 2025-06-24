import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-natal-card',
  standalone: true,
  template: `
    <div class="ui-natal-card card text-center transition-colors">
      <h2 class="text-3xl font-serif mb-2">{{ name }}</h2>
      <div class="text-base mb-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class NatalCardComponent {
  @Input() name = '';
}
