import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Servicio {
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
  searchQuery: string = '';
  displayedColumns: string[] = ['clave', 'concepto', 'unidad', 'segunProyecto', 'hastaEstimacionAnterior', 'deEstaEstimacion', 'totalEstimado', 'porEjecutar', 'precioUnitario', 'importe'];
  dataSource = new MatTableDataSource<Servicio>();
  data: Servicio[] = [
    // Add initial data if needed
  ];
  filteredData: MatTableDataSource<Servicio>;

  ngOnInit() {
    this.filteredData = new MatTableDataSource(this.data);
  }

  search() {
    this.filteredData.filter = this.searchQuery.trim().toLowerCase();
  }

  showAll() {
    this.searchQuery = '';
    this.filteredData.filter = '';
  }

  addRow() {
    const newRow: Servicio = {
      clave: '', concepto: '', unidad: '', segunProyecto: 0, hastaEstimacionAnterior: 0, deEstaEstimacion: 0,
      totalEstimado: 0, porEjecutar: 0, precioUnitario: 0, importe: 0
    };
    this.data.push(newRow);
    this.filteredData = new MatTableDataSource(this.data);
  }

  removeRow() {
    this.data.pop();
    this.filteredData = new MatTableDataSource(this.data);
  }

  get totalImporte(): number {
    return this.data.reduce((acc, curr) => acc + curr.importe, 0);
  }
}
