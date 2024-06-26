import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.loadProyectos();
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      this.proyectoService.deleteProyecto(id).subscribe(() => {
        this.loadProyectos(); // Refresh the list after deletion
      });
    }
  }
}
