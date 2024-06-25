import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estimacion',
  templateUrl: './estimacion.component.html',
  styleUrls: ['./estimacion.component.css']
})
export class EstimacionComponent implements OnInit {
  empresa: any = {};
  fecha: Date = new Date();
  frente: any = {};
  razon_social: string = '';
  importe_contrato: number = 0;
  importe_estimado_acumulado_anterior: number = 0;
  importe_estimado_acum_actual: number = 0;
  saldo_por_estimar: number = 0;
  proyecto: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Load data here if needed
  }

  onSubmit() {
    // Handle form submission
  }
}
