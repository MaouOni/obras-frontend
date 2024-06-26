import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();

  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.proyectoService.getProyectoById(+id).subscribe((proyecto: Proyecto) => {
        this.proyecto = proyecto;
      });
    } else {
      console.error('ID parameter is null');
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.proyectoService.updateProyecto(+id, this.proyecto).subscribe(response => {
        this.router.navigate(['/proyectos']);
      });
    } else {
      console.error('ID parameter is null');
    }
  }
}
