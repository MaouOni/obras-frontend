import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstimacionService {
  private apiUrl = 'http://localhost:3000/api/estimaciones';

  constructor(private http: HttpClient) { }

  getEstimaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEstimacion(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createEstimacion(estimacion: any): Observable<any> {
    return this.http.post(this.apiUrl, estimacion);
  }
}
