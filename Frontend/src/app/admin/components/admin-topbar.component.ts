import { Component } from '@angular/core';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  standalone: true,
  selector: 'app-admin-topbar',
  template: `
    <header class="bg-base-100 shadow flex items-center justify-between px-4 h-14">
      <span class="font-semibold">Panel Admin</span>
      <button class="btn btn-ghost btn-sm" (click)="logout()">Cerrar sesión</button>
    </header>
  `,
})
export class AdminTopbarComponent {
  constructor(private auth: AdminAuthService) {}
  logout() {
    this.auth.logout();
  }
}
