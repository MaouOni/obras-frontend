import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = 'http://localhost:3000/api/catalogos';

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
    return this.http.get<any>(`http://localhost:3000/api/frentes/${frenteId}`);
  }


  getCatalogosByFrenteId(frenteId: number): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(`${this.apiUrl}/frente/${frenteId}`);
  }

  createCatalogo(catalogo: Catalogo): Observable<Catalogo> {
    return this.http.post<Catalogo>(this.apiUrl, catalogo);
  }
}
