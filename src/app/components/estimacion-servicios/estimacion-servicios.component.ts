import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estimacion } from '../../models/estimacion.model';
import { EstimacionService } from '../../services/estimacion.service';

@Component({
  selector: 'app-estimacion-servicios',
  templateUrl: './estimacion-servicios.component.html',
  styleUrls: ['./estimacion-servicios.component.css']
})
export class EstimacionServiciosComponent implements OnInit {
  dataSource: MatTableDataSource<Estimacion> = new MatTableDataSource<Estimacion>();
  filteredData: MatTableDataSource<Estimacion> = new MatTableDataSource<Estimacion>();

  constructor(private estimacionService: EstimacionService) { }

  ngOnInit(): void {
    this.estimacionService.getEstimaciones().subscribe((servicios: Estimacion[]) => {
      this.dataSource = new MatTableDataSource(servicios);
      this.filteredData = new MatTableDataSource(servicios);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredData.filter = filterValue.trim().toLowerCase();
  }
}
