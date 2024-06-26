import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = 'http://your-api-url/catalogos';

  constructor(private http: HttpClient) {}

  getFrente(frenteId: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/frentes/${frenteId}`);
  }

  createCatalogo(frenteId: string | null): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/frentes/${frenteId}/catalogo`, {});
  }
}
