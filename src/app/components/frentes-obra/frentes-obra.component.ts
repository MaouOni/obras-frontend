import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { FrenteService } from 'src/app/services/frente.service';
import { Frente } from 'src/app/models/frente.model';
import { Proyecto } from 'src/app/models/proyecto.model';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-frentes-obra',
  templateUrl: './frentes-obra.component.html',
  styleUrls: ['./frentes-obra.component.css']
})
export class FrentesObraComponent implements OnInit {
  proyectos: Proyecto[] = [];
  empresas: Empresa[] = [];
  frente: Frente = new Frente();

  constructor(
    private proyectoService: ProyectoService,
    private empresaService: EmpresaService,
    private frenteService: FrenteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProyectos();
    this.loadEmpresas();
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe((data: Empresa[]) => {
      this.empresas = data;
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.frenteService.createFrente(this.frente).subscribe(() => {
        this.router.navigate(['/frentes']);
      });
    }
  }
}
