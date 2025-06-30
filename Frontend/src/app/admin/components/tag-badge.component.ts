import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tag-badge',
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="color">{{ label }}</span>
  `,
})
export class TagBadgeComponent {
  @Input() label = '';
  @Input() status: string = '';

  get color() {
    switch (this.status) {
      case 'bloqueado':
      case 'rechazado':
        return 'badge-error';
      case 'pendiente':
        return 'badge-warning';
      case 'aprobado':
      case 'activo':
        return 'badge-success';
      default:
        return 'badge-info';
    }
  }
}
