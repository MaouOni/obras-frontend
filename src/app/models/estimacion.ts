export interface Estimacion {
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
}
