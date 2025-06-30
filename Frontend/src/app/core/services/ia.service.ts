import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IaService {
  constructor(private http: HttpClient) {}

  generateName(profile: any): Observable<any> {
    return this.http.post('/api/ia/generate', profile);
  }
}
