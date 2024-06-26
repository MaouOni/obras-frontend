import { Component } from '@angular/core';

@Component({
  selector: 'app-estimacion',
  templateUrl: './estimacion.component.html',
  styleUrls: ['./estimacion.component.css']
})
export class EstimacionComponent {
  frente: any = {
    empresa: { nombre: 'Empresa X', rfc: 'RFC123456' },
    no_contrato: '12345',
    fecha_inicio: '2023-01-01',
  };
  fecha: string = new Date().toISOString().split('T')[0];
  razon_social: string = 'Razón Social X';
  importe_contrato: number = 1000000;
  importe_estimado_acumulado_anterior: number = 0;
  importe_estimado_acum_actual: number = 0;
  saldo_por_estimar: number = 988069;

  onSubmit() {
    // Handle form submission
  }
}
