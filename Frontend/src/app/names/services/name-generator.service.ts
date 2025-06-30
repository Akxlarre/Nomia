import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Name {
  id: string;
  nombre: string;
  significado: string;
  simbolo: string;
  numerologia: string;
  personajes_famosos: string[];
  famosos?: string;
  ia_generado: boolean;
}

@Injectable({ providedIn: 'root' })
export class NameGeneratorService {
  private apiUrl = '/api/names';

  constructor(private http: HttpClient) {}

  createName(payload: Partial<Name>): Observable<Name> {
    return this.http.post<Name>(this.apiUrl, payload);
  }

  getPopular(top = 10): Observable<Name[]> {
    return this.http.get<Name[]>(`${this.apiUrl}/popular?top=${top}`);
  }

  getName(id: string): Observable<Name> {
    return this.http.get<Name>(`${this.apiUrl}/${id}`);
  }
}
