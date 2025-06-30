import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  getDashboardMetrics() {
    return of({ tests: 0, users: 0, income: 0, payments: 0 });
  }
}
