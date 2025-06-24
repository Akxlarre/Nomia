import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-alert',
  imports: [NgIf, NgClass],
  template: `
    <div *ngIf="visible" class="alert transition-colors" [ngClass]="'alert-' + type">
      <span *ngIf="icon" class="material-icons mr-2">{{ icon }}</span>
      <span class="flex-1"><ng-content></ng-content></span>
      <button *ngIf="closable" type="button" aria-label="Cerrar" class="btn btn-sm btn-circle btn-ghost ml-2" (click)="visible = false">
        <span class="material-icons text-base-content text-sm">close</span>
      </button>
    </div>
  `,
})
export class AlertComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() icon?: string;
  @Input() closable = false;
  visible = true;
}
