import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-free-name-card',
  standalone: true,
  template: `
    <article class="bg-base-100/90 border border-base-300 p-6 rounded-xl shadow-xl relative">
      <h3 class="text-3xl font-serif text-primary mb-2">{{ name }}</h3>
      <p class="italic text-base-content/70 mb-2">“{{ meaning }}”</p>
      <div class="text-accent text-lg mt-4">{{ symbol }}</div>
      @if (quote) {
        <p class="text-sm mt-4 opacity-80">{{ quote }}</p>
      }
    </article>
  `,
})
export class FreeNameCardComponent {
  @Input() name = '';
  @Input() meaning = '';
  @Input() symbol = '';
  @Input() quote?: string;
}
