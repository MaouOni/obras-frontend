import { Frente } from './frente.model';

export class Estimacion {
  id: number;
  numero_estimacion: number;
  fecha: Date;
  importe_contrato: number;
  importe_estimado_acum_anterior: number;
  importe_estimado_actual: number;
  importe_estimado_acum_actual: number;
  saldo_por_estimar: number;
  numero_contrato: string;
  razon_social: string;
  periodo: string;
  frente_id: number;
  frente: Frente;

  constructor() {
    this.id = 0;
    this.numero_estimacion = 0;
    this.fecha = new Date();
    this.importe_contrato = 0;
    this.importe_estimado_acum_anterior = 0;
    this.importe_estimado_actual = 0;
    this.importe_estimado_acum_actual = 0;
    this.saldo_por_estimar = 0;
    this.numero_contrato = '';
    this.razon_social = '';
    this.periodo = '';
    this.frente_id = 0;
    this.frente = new Frente();
  }
}
