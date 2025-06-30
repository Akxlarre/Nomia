import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { CardMetricComponent } from '../components/card-metric.component';

@Component({
  standalone: true,
  selector: 'app-admin-stats-page',
  imports: [CommonModule, CardMetricComponent],
  template: `
    <h1 class="text-xl font-semibold mb-4">Estadísticas</h1>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <app-card-metric label="Uso del test" [value]="stats.usage" />
      <app-card-metric label="Conversiones" [value]="stats.conversions" />
      <app-card-metric label="Popularidad" [value]="stats.popularity" />
    </div>
  `,
})
export class StatsPage implements OnInit {
  stats: any = { usage: 0, conversions: 0, popularity: 0 };
  constructor(private admin: AdminService) {}
  ngOnInit() {
    this.admin.getStats().subscribe(s => (this.stats = s));
  }
}
