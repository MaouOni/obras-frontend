import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = `${environment.apiUrl}/api/catalogos`;

  constructor(private http: HttpClient) { }

  getCatalogos(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(this.apiUrl);
  }

  getCatalogoById(id: number): Observable<Catalogo> {
    return this.http.get<Catalogo>(`${this.apiUrl}/${id}`);
  }

  updateCatalogo(id: number, catalogo: Catalogo): Observable<Catalogo> {
    return this.http.put<Catalogo>(`${this.apiUrl}/${id}`, catalogo);
  }

  deleteCatalogo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getFrente(frenteId: string | null): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/frentes/${frenteId}`);
  }

  getCatalogosByFrenteId(frenteId: number): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(`${this.apiUrl}/frente/${frenteId}`);
  }

  createCatalogo(catalogo: Catalogo): Observable<Catalogo> {
    return this.http.post<Catalogo>(this.apiUrl, catalogo);
  }
}
