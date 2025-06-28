import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimaryButtonComponent, GhostButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-navigation-buttons',
  imports: [PrimaryButtonComponent, GhostButtonComponent],
  template: `
    <div class="flex justify-between mt-6">
      <ui-ghost-button type="button" (click)="prev.emit()" [disabled]="!canPrev">
        Anterior
      </ui-ghost-button>
      <ui-primary-button type="button" (click)="next.emit()" [disabled]="!canNext">
        {{ isLast ? 'Finalizar' : 'Siguiente' }}
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
