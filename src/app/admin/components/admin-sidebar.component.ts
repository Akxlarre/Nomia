import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-sidebar',
  imports: [RouterModule],
  template: `
    <aside class="w-60 bg-base-100 shadow-lg min-h-screen">
      <nav class="menu p-4">
        <ul>
          <li><a routerLink="/admin/dashboard">Dashboard</a></li>
          <li><a routerLink="/admin/usuarios">Usuarios</a></li>
          <li><a routerLink="/admin/test-resultados">Test</a></li>
          <li><a routerLink="/admin/nombres-generados">Nombres</a></li>
        </ul>
      </nav>
    </aside>
  `,
})
export class AdminSidebarComponent {}
