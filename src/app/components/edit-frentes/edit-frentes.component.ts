import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frente } from '../../models/frente.model';
import { FrenteService } from '../../services/frente.service';
import { ProyectoService } from '../../services/proyecto.service';
import { EmpresaService } from '../../services/empresa.service';
import { Proyecto } from '../../models/proyecto.model';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-edit-frentes',
  templateUrl: './edit-frentes.component.html',
  styleUrls: ['./edit-frentes.component.css']
})
export class EditFrentesComponent implements OnInit {
  frente: Frente = new Frente();
  proyectos: Proyecto[] = [];
  empresas: Empresa[] = [];

  constructor(
    private frenteService: FrenteService,
    private proyectoService: ProyectoService,
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.frenteService.getFrenteById(+id).subscribe((frente: Frente) => {
        this.frente = frente;
      });
      this.loadProyectos();
      this.loadEmpresas();
    } else {
      console.error('ID parameter is null');
    }
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos;
    });
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe((empresas: Empresa[]) => {
      this.empresas = empresas;
    });
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.frenteService.updateFrente(+id, this.frente).subscribe(response => {
        this.router.navigate(['/frentes']);
      });
    } else {
      console.error('ID parameter is null');
    }
  }
}
