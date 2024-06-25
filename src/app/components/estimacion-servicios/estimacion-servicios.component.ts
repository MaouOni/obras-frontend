import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface EstimationElement {
  clave: string;
  concepto: string;
  unidad: string;
  segunProyecto: number;
  hastaEstimacionAnterior: number;
  deEstaEstimacion: number;
  totalEstimado: number;
  porEjecutar: number;
  precioUnitario: number;
  importe: number;
}

@Component({
  selector: 'app-estimacion-servicios',
  templateUrl: './estimacion-servicios.component.html',
  styleUrls: ['./estimacion-servicios.component.css']
})
export class EstimacionServiciosComponent implements OnInit {
  displayedColumns: string[] = [
    'clave', 'concepto', 'unidad', 'segunProyecto', 'hastaEstimacionAnterior',
    'deEstaEstimacion', 'totalEstimado', 'porEjecutar', 'precioUnitario', 'importe'
  ];
  dataSource = new MatTableDataSource<EstimationElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalImporte();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRow() {
    const newRow: EstimationElement = {
      clave: '', concepto: '', unidad: '', segunProyecto: 0, hastaEstimacionAnterior: 0,
      deEstaEstimacion: 0, totalEstimado: 0, porEjecutar: 0, precioUnitario: 0, importe: 0
    };
    this.dataSource.data = [...this.dataSource.data, newRow];
    this.calculateTotalImporte();
  }

  removeRow() {
    this.dataSource.data.pop();
    this.dataSource._updateChangeSubscription(); // Refresh the dataSource
    this.calculateTotalImporte();
  }

  calculateTotalImporte() {
    let total = 0;
    this.dataSource.data.forEach(row => {
      row.totalEstimado = row.hastaEstimacionAnterior + row.deEstaEstimacion;
      row.porEjecutar = row.segunProyecto - row.totalEstimado;
      row.importe = row.deEstaEstimacion * row.precioUnitario;
      total += row.importe;
    });
    return total;
  }
}

const ELEMENT_DATA: EstimationElement[] = [
  { clave: '', concepto: '', unidad: '', segunProyecto: 0, hastaEstimacionAnterior: 0,
    deEstaEstimacion: 0, totalEstimado: 0, porEjecutar: 0, precioUnitario: 0, importe: 0 }
];
