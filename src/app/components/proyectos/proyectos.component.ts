import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id: number): void {
    // Logic to delete proyecto
  }

  detallesProyecto(id: number): void {
    // Logic to navigate to project details
  }

  editarProyecto(id: number): void {
    // Logic to navigate to edit project
  }
}
