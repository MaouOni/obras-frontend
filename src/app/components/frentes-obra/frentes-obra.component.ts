import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { Empresa } from '../../models/empresa';
import { ProyectoService } from '../../services/proyecto.service';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-frentes-obra',
  templateUrl: './frentes-obra.component.html',
  styleUrls: ['./frentes-obra.component.css']
})
export class FrentesObraComponent implements OnInit {
  proyectos: Proyecto[] = [];
  empresas: Empresa[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });

    this.empresaService.getEmpresas().subscribe((data: Empresa[]) => {
      this.empresas = data;
    });
  }

  onSubmit() {
    // Handle form submission
  }
}
