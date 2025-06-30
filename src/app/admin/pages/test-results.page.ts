import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { AdminTableComponent } from '../components/admin-table.component';
import { TagBadgeComponent } from '../components/tag-badge.component';

@Component({
  standalone: true,
  selector: 'app-admin-test-results-page',
  imports: [CommonModule, AdminTableComponent, TagBadgeComponent],
  template: `
    <h1 class="text-xl font-semibold mb-4">Resultados de Test</h1>
    <app-admin-table [headers]="['ID','Usuario','Puntaje','Estado','Acciones']" [rows]="results">
      <ng-template let-res>
        <tr>
          <td>{{ res.id }}</td>
          <td>{{ res.user }}</td>
          <td>{{ res.score }}</td>
          <td>
            <app-tag-badge [label]="res.reviewed ? 'Revisado' : 'Pendiente'" [status]="res.reviewed ? 'aprobado' : 'pendiente'" />
          </td>
          <td>
            <button class="btn btn-ghost btn-xs" (click)="toggle(res)">
              {{ res.reviewed ? 'Revertir' : 'Marcar revisado' }}
            </button>
          </td>
        </tr>
      </ng-template>
    </app-admin-table>
  `,
})
export class TestResultsPage implements OnInit {
  results: any[] = [];
  constructor(private admin: AdminService) {}
  ngOnInit() {
    this.admin.getTestResults().subscribe(r => (this.results = r));
  }
  toggle(r: any) {
    r.reviewed = !r.reviewed;
  }
}
