import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrenteService } from '../../services/frente.service';
import { ProyectoService } from '../../services/proyecto.service';
import { EmpresaService } from '../../services/empresa.service';
import { Frente } from '../../models/frente';
import { Proyecto } from '../../models/proyecto';
import { Empresa } from '../../models/empresa';

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
    private route: ActivatedRoute,
    private frenteService: FrenteService,
    private proyectoService: ProyectoService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.frenteService.getFrenteById(id).subscribe(frente => this.frente = frente);
    this.proyectoService.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
    this.empresaService.getEmpresas().subscribe(empresas => this.empresas = empresas);
  }

  onSubmit() {
    this.frenteService.updateFrente(this.frente).subscribe(response => {
      console.log('Frente actualizado', response);
      // Handle the response, navigate, etc.
    });
  }
}
