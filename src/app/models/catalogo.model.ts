import { Frente } from './frente.model';

export class Catalogo {
  id: number;
  clave: string;
  nombre: string;
  descripcion: string;
  unidad: string;
  costo_unitario: number;
  cantidad: number;
  importe: number;
  frente_id: number;
  frente: Frente;

  constructor() {
    this.id = 0;
    this.clave = '';
    this.nombre = '';
    this.descripcion = '';
    this.unidad = '';
    this.costo_unitario = 0;
    this.cantidad = 0;
    this.importe = 0;
    this.frente_id = 0;
    this.frente = new Frente();
  }
}
