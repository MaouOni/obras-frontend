import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estimacion } from '../models/estimacion.model';

@Injectable({
  providedIn: 'root'
})
export class EstimacionService {
  private apiUrl = 'http://localhost:3000/api/estimaciones';

  constructor(private http: HttpClient) { }

  getEstimaciones(): Observable<Estimacion[]> {
    return this.http.get<Estimacion[]>(this.apiUrl);
  }

  getEstimacion(id: number): Observable<Estimacion> {
    return this.http.get<Estimacion>(`${this.apiUrl}/${id}`);
  }

  createEstimacion(estimacion: Estimacion): Observable<Estimacion> {
    return this.http.post<Estimacion>(this.apiUrl, estimacion);
  }
}
