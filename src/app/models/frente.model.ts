import { Proyecto } from './proyecto.model';
import { Empresa } from './empresa.model';

export class Frente {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_final: Date;
  no_contrato: string;
  proyecto_id: number;
  empresa_id: number;
  proyecto: Proyecto;
  empresa: Empresa;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.descripcion = '';
    this.fecha_inicio = new Date();
    this.fecha_final = new Date();
    this.no_contrato = '';
    this.proyecto_id = 0;
    this.empresa_id = 0;
    this.proyecto = new Proyecto();
    this.empresa = new Empresa();
  }
}
