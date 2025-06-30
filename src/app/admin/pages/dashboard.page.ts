import { Component } from '@angular/core';
import { CardMetricComponent } from '../components/card-metric.component';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard-page',
  imports: [CardMetricComponent],
  template: `
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <app-card-metric label="Test completados" value="0" />
      <app-card-metric label="Nuevos usuarios" value="0" />
      <app-card-metric label="Total ingresos" value="$0" />
      <app-card-metric label="Pagos recientes" value="0" />
    </div>
  `,
})
export class DashboardPage {}
