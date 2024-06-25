import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id: number): void {
    this.proyectoService.deleteProyecto(id).subscribe(() => {
      this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== id);
    });
  }
}
