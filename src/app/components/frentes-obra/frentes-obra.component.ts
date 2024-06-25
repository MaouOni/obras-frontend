import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { EmpresaService } from '../../services/empresa.service';
import { Proyecto } from '../../models/proyecto';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-frentes-obra',
  templateUrl: './frentes-obra.component.html',
  styleUrls: ['./frentes-obra.component.css']
})
export class FrentesObraComponent implements OnInit {
  proyectos: Proyecto[] = [];
  empresas: Empresa[] = [];
  frente = { nombre: '', descripcion: '', fecha_inicio: '', no_contrato: '', fecha_final: '', proyecto_id: 0, empresa_asociada: 0 };

  constructor(private proyectoService: ProyectoService, private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  onSubmit() {
    // Logic for form submission
  }
}
