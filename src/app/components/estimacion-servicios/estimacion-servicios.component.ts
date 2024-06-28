import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { EstimacionService } from 'src/app/services/estimacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo } from 'src/app/models/catalogo.model';

@Component({
  selector: 'app-estimacion-servicios',
  templateUrl: './estimacion-servicios.component.html',
  styleUrls: ['./estimacion-servicios.component.css']
})
export class EstimacionServiciosComponent implements OnInit {
  dataSource: MatTableDataSource<Catalogo> = new MatTableDataSource<Catalogo>();
  filteredData: MatTableDataSource<Catalogo> = new MatTableDataSource<Catalogo>();
  searchQuery: string = '';
  displayedColumns: string[] = [
    'clave', 'nombre', 'unidad', 'cantidad', 'hastaEstimacionAnterior',
    'deEstaEstimacion', 'importe'
  ];
  totalImporte: number = 0;
  totalCantidad: number = 0;
  frenteId!: number;

  constructor(
    private catalogoService: CatalogoService,
    private estimacionService: EstimacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const frenteIdParam = this.route.snapshot.paramMap.get('frenteId');
    if (frenteIdParam) {
      this.frenteId = +frenteIdParam;
      this.loadCatalogos();
    } else {
      console.error('frenteId parameter is missing in the route');
    }
  }

  loadCatalogos(): void {
    this.catalogoService.getCatalogosByFrenteId(this.frenteId).subscribe((data: Catalogo[]) => {
      this.dataSource.data = data;
      this.filteredData.data = data;
      this.calculateTotals();
    }, error => {
      console.error('Error loading catalogos', error);
    });
  }

  search(): void {
    this.filteredData.data = this.dataSource.data.filter(item => {
      return Object.values(item).some(val => val.toString().toLowerCase().includes(this.searchQuery.toLowerCase()));
    });
  }

  showAll(): void {
    this.filteredData.data = this.dataSource.data;
  }

  addRow(): void {
    const newRow: Catalogo = new Catalogo();
    newRow.frente_id = this.frenteId;
    this.filteredData.data = [...this.filteredData.data, newRow];
  }

  removeRow(): void {
    this.filteredData.data.pop();
    this.filteredData.data = [...this.filteredData.data];
    this.calculateTotals();
  }

  onClaveChange(element: Catalogo): void {
    const catalogoItem = this.dataSource.data.find(item => item.clave === element.clave);
    if (catalogoItem) {
      element.nombre = catalogoItem.nombre;
      element.unidad = catalogoItem.unidad;
      element.costo_unitario = catalogoItem.costo_unitario;
      this.updateTotal(element);
    }
  }

  updateTotal(element: Catalogo): void {
    element.totalEstimado = element.hastaEstimacionAnterior + element.deEstaEstimacion;
    element.importe = element.deEstaEstimacion * element.costo_unitario;
    element.porEjecutar = element.cantidad - element.totalEstimado;
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalImporte = this.filteredData.data.reduce((acc, item) => acc + item.importe, 0);
    this.totalCantidad = this.filteredData.data.reduce((acc, item) => acc + item.cantidad, 0);
  }

  saveImporte(): void {
    // Save new materials/elements to the database
    this.filteredData.data.forEach(element => {
      if (!element.id) {
        this.catalogoService.createCatalogo(element).subscribe();
      }
    });

    // Save the total importe to the estimacion service
    this.estimacionService.setImporteEstimadoActual(this.totalImporte);
    this.router.navigate(['/proyecto', this.frenteId, 'frente', this.frenteId, 'estimacion']);
  }
}
