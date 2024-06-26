import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://localhost:3000/api/empresas';

  constructor(private http: HttpClient) { }

  createEmpresa(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, {});
  }
  getEmpresas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmpresa(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateEmpresa(id: number, empresa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empresa);
  }
}
