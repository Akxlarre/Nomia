import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  getDashboardMetrics() {
    return of({ tests: 0, users: 0, income: 0, payments: 0 });
  }

  getUsers() {
    return of([
      { id: 1, email: 'demo@nomia.com', status: 'activo' },
      { id: 2, email: 'blocked@nomia.com', status: 'bloqueado' },
    ]);
  }

  getTestResults() {
    return of([
      { id: 1, user: 'demo@nomia.com', score: 80, reviewed: false },
      { id: 2, user: 'other@nomia.com', score: 92, reviewed: true },
    ]);
  }

  getGeneratedNames() {
    return of([
      { id: 1, name: 'Aurelia', meaning: 'Brillante y dorada', status: 'pendiente' },
      { id: 2, name: 'Nova', meaning: 'Nueva estrella', status: 'pendiente' },
    ]);
  }

  getStats() {
    return of({ usage: 0, conversions: 0, popularity: 0 });
  }

  getContents() {
    return of({ glosario: '' });
  }
}
