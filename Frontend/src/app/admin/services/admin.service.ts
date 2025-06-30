import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private api: ApiService) {}

  getDashboardMetrics(): Observable<any> {
    return this.api.get('/admin/metrics');
  }

  getUsers(): Observable<any> {
    return this.api.get('/admin/users');
  }

  getTestResults(): Observable<any> {
    return this.api.get('/admin/tests');
  }

  getGeneratedNames(): Observable<any> {
    return this.api.get('/admin/names');
  }

  getStats(): Observable<any> {
    return this.api.get('/admin/stats');
  }

  getContents(): Observable<any> {
    return this.api.get('/admin/contents');
  }
}
