import { Component } from '@angular/core';

@Component({
  selector: 'app-estimacion',
  templateUrl: './estimacion.component.html',
  styleUrls: ['./estimacion.component.css']
})
export class EstimacionComponent {
  empresa = { nombre: '' };
  frente = { no_contrato: '', fecha_inicio: '', empresa: { rfc: '' } };
  razon_social = '';
  importe_contrato = 0;
  importe_estimado_acumulado_anterior = 0;
  importe_estimado_acum_actual = 0;
  saldo_por_estimar = 0;
  fecha = new Date();

  onSubmit() {
    // Logic for form submission
  }
}
