import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { AdminTableComponent } from '../components/admin-table.component';
import { TagBadgeComponent } from '../components/tag-badge.component';

@Component({
  standalone: true,
  selector: 'app-admin-users-page',
  imports: [CommonModule, AdminTableComponent, TagBadgeComponent],
  template: `
    <h1 class="text-xl font-semibold mb-4">Usuarios</h1>
    <app-admin-table [headers]="['ID','Email','Estado','Acciones']" [rows]="users">
      <ng-template let-user>
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td><app-tag-badge [label]="user.status" [status]="user.status" /></td>
          <td>
            <button class="btn btn-ghost btn-xs" (click)="block(user)">Bloquear</button>
          </td>
        </tr>
      </ng-template>
    </app-admin-table>
  `,
})
export class UsersPage implements OnInit {
  users: any[] = [];
  constructor(private admin: AdminService) {}
  ngOnInit() {
    this.admin.getUsers().subscribe(u => (this.users = u));
  }
  block(u: any) {
    u.status = 'bloqueado';
  }
}
