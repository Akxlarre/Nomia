import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { AdminTableComponent } from '../components/admin-table.component';
import { AdminModalComponent } from '../components/admin-modal.component';

@Component({
  standalone: true,
  selector: 'app-admin-generated-names-page',
  imports: [CommonModule, AdminTableComponent, AdminModalComponent],
  template: `
    <h1 class="text-xl font-semibold mb-4">Nombres generados</h1>
    <app-admin-table [headers]="['Nombre','Acciones']" [rows]="names">
      <ng-template let-name>
        <tr>
          <td>{{ name.name }}</td>
          <td>
            <button class="btn btn-ghost btn-xs" (click)="open(name)">Ver</button>
          </td>
        </tr>
      </ng-template>
    </app-admin-table>

    <app-admin-modal [open]="selected" [title]="selected?.name" (close)="selected = null">
      <p>{{ selected?.meaning }}</p>
      <div class="mt-4 flex gap-2">
        <button class="btn btn-primary" (click)="approve(selected)">Aprobar</button>
        <button class="btn btn-error" (click)="remove(selected)">Eliminar</button>
      </div>
    </app-admin-modal>
  `,
})
export class GeneratedNamesPage implements OnInit {
  names: any[] = [];
  selected: any | null = null;
  constructor(private admin: AdminService) {}
  ngOnInit() {
    this.admin.getGeneratedNames().subscribe(n => (this.names = n));
  }
  open(n: any) {
    this.selected = n;
  }
  approve(n: any) {
    n.status = 'aprobado';
    this.selected = null;
  }
  remove(n: any) {
    this.names = this.names.filter(x => x !== n);
    this.selected = null;
  }
}
