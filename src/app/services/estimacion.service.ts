import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estimacion } from '../models/estimacion.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstimacionService {
  private apiUrl = `${environment.apiUrl}/api/estimaciones`;
  private importeEstimadoActual: number = 0;

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

  getEstimacionesByFrenteId(frenteId: number): Observable<Estimacion[]> {
    return this.http.get<Estimacion[]>(`${this.apiUrl}/frente/${frenteId}`);
  }

  setImporteEstimadoActual(importe: number): void {
    this.importeEstimadoActual = importe;
  }

  getImporteEstimadoActual(): Observable<number> {
    return new Observable(observer => {
      observer.next(this.importeEstimadoActual);
      observer.complete();
    });
  }
}
