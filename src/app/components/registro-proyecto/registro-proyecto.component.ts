import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent {
  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Handle form submission
    this.proyectoService.createProyecto().subscribe(() => {
      this.router.navigate(['/proyectos']); // Adjust the route as needed
    });
  }
}
