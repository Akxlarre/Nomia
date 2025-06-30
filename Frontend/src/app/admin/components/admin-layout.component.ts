import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { AdminTopbarComponent } from './admin-topbar.component';

@Component({
  standalone: true,
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminSidebarComponent, AdminTopbarComponent],
  template: `
    <div class="flex min-h-screen bg-base-200 text-base-content">
      <app-admin-sidebar class="hidden md:block" />
      <div class="flex-1 flex flex-col">
        <app-admin-topbar />
        <main class="flex-1 p-4">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class AdminLayoutComponent {}
