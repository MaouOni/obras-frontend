import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frente } from '../models/frente.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrenteService {
  private apiUrl = `${environment.apiUrl}/api/frentes`;

  constructor(private http: HttpClient) {}

  getFrentes(): Observable<Frente[]> {
    return this.http.get<Frente[]>(this.apiUrl);
  }

  getFrenteById(id: number): Observable<Frente> {
    return this.http.get<Frente>(`${this.apiUrl}/${id}`);
  }

  createFrente(frente: Frente): Observable<Frente> {
    return this.http.post<Frente>(this.apiUrl, frente);
  }

  updateFrente(id: number, frente: Frente): Observable<Frente> {
    return this.http.put<Frente>(`${this.apiUrl}/${id}`, frente);
  }

  deleteFrente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
