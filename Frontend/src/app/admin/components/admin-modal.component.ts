import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-modal',
  imports: [CommonModule],
  template: `
    <div *ngIf="open" class="fixed inset-0 bg-black/50 grid place-items-center p-4 z-50">
      <div class="bg-base-100 rounded-xl shadow-xl w-full max-w-lg p-6">
        <h3 class="font-bold text-lg mb-4">{{ title }}</h3>
        <ng-content></ng-content>
        <div class="mt-4 text-right">
          <button class="btn" (click)="close.emit()">Cerrar</button>
        </div>
      </div>
    </div>
  `,
})
export class AdminModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
}
