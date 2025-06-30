import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimaryButtonComponent, GhostButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-navigation-buttons',
  imports: [PrimaryButtonComponent, GhostButtonComponent],
  template: `
    <div
      class="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-base-200"
      role="navigation"
    >
      <ui-ghost-button
        type="button"
        [disabled]="!canPrev"
        (click)="prev.emit()"
      >
        ← Anterior
      </ui-ghost-button>

      <ui-primary-button
        type="button"
        [disabled]="!canNext"
        (click)="next.emit()"
      >
        {{ isLast ? '✨ Finalizar' : 'Siguiente →' }}
      </ui-primary-button>
    </div>
  `,
})
export class NavigationButtonsComponent {
  @Input() canPrev = false;
  @Input() canNext = false;
  @Input() isLast = false;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
