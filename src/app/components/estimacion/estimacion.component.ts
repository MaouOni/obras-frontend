import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimacionService } from 'src/app/services/estimacion.service';
import { Estimacion } from 'src/app/models/estimacion.model';
import { FrenteService } from 'src/app/services/frente.service';
import { Proyecto } from 'src/app/models/proyecto.model';

@Component({
  selector: 'app-estimacion',
  templateUrl: './estimacion.component.html',
  styleUrls: ['./estimacion.component.css']
})
export class EstimacionComponent implements OnInit {
  estimacion: Estimacion = new Estimacion();
  frente: any = {};
  proyecto: Proyecto = new Proyecto();
  fecha: string;
  numeroEstimacion: number = 0;

  porcentajeEstimadoAcumAnterior: number = 0;
  porcentajeEstimadoActual: number = 0;
  porcentajeEstimadoAcumActual: number = 0;
  porcentajeSaldoPorEstimar: number = 0;

  constructor(
    private route: ActivatedRoute,
    private estimacionService: EstimacionService,
    private frenteService: FrenteService,
    private router: Router
  ) {
    this.fecha = new Date().toISOString().split('T')[0]; // Format current date as YYYY-MM-DD
  }

  ngOnInit(): void {
    const frenteId = +this.route.snapshot.paramMap.get('frenteId')!;
    this.loadFrente(frenteId);
    this.estimacion.frente_id = frenteId;
    this.loadNumeroEstimacion(frenteId);
    this.loadImporteEstimadoActual();
  }

  loadFrente(frenteId: number): void {
    this.frenteService.getFrenteById(frenteId).subscribe((data: any) => {
      this.frente = data;
      this.proyecto = data.proyecto;
      this.estimacion.numero_contrato = data.no_contrato;
      this.estimacion.razon_social = data.empresa.razon_social;
      this.estimacion.importe_contrato = data.importe;
      this.updateCalculations();
    });
  }

  loadNumeroEstimacion(frenteId: number): void {
    this.estimacionService.getEstimacionesByFrenteId(frenteId).subscribe((estimaciones: Estimacion[]) => {
      this.numeroEstimacion = estimaciones.length + 1;
      if (estimaciones.length > 0) {
        this.estimacion.importe_estimado_acum_anterior = estimaciones[estimaciones.length - 1].importe_estimado_acum_actual;
      } else {
        this.estimacion.importe_estimado_acum_anterior = 0;
      }
      this.updateCalculations();
    });
  }

  loadImporteEstimadoActual(): void {
    this.estimacionService.getImporteEstimadoActual().subscribe((importe: number) => {
      this.estimacion.importe_estimado_actual = importe;
      this.updateCalculations();
    });
  }

  calculatePercentages(): void {
    if (this.estimacion.importe_contrato > 0) {
      this.porcentajeEstimadoAcumAnterior = (this.estimacion.importe_estimado_acum_anterior / this.estimacion.importe_contrato) * 100;
      this.porcentajeEstimadoActual = (this.estimacion.importe_estimado_actual / this.estimacion.importe_contrato) * 100;
      this.porcentajeEstimadoAcumActual = (this.estimacion.importe_estimado_acum_actual / this.estimacion.importe_contrato) * 100;
      this.porcentajeSaldoPorEstimar = (this.estimacion.saldo_por_estimar / this.estimacion.importe_contrato) * 100;
    }
  }

  updateCalculations(): void {
    this.estimacion.importe_estimado_acum_actual = this.estimacion.importe_estimado_acum_anterior + this.estimacion.importe_estimado_actual;
    this.estimacion.saldo_por_estimar = this.estimacion.importe_contrato - this.estimacion.importe_estimado_acum_actual;
    this.calculatePercentages();
  }

  onSubmit(): void {
    this.updateCalculations();
    this.estimacionService.createEstimacion(this.estimacion).subscribe(() => {
      this.router.navigate(['/estimaciones']);
    });
  }
}
