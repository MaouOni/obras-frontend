import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto.model';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent {
  proyecto: Proyecto = new Proyecto();

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Handle form submission
    this.proyectoService.createProyecto(this.proyecto).subscribe(() => {
      this.router.navigate(['/proyectos']);
    });
  }
}
