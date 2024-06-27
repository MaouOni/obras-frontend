import { Frente } from './frente.model';

export class Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_final: Date;
  frentes: Frente[];

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.descripcion = '';
    this.fecha_inicio = new Date();
    this.fecha_final = new Date();
    this.frentes = [];
  }
}
