import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.proyectoService.getProyectoById(id).subscribe(proyecto => this.proyecto = proyecto);
  }

  onSubmit() {
    this.proyectoService.updateProyecto(this.proyecto).subscribe(response => {
      console.log('Proyecto actualizado', response);
      // Handle the response, navigate, etc.
    });
  }
}
