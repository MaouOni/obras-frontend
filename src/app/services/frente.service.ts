import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frente } from '../models/frente.model';

@Injectable({
  providedIn: 'root'
})
export class FrenteService {
  private apiUrl = 'http://localhost:3000/api/frentes';

  constructor(private http: HttpClient) { }

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

  deleteFrente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
