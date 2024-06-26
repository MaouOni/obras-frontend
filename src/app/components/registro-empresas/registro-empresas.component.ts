import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-registro-empresas',
  templateUrl: './registro-empresas.component.html',
  styleUrls: ['./registro-empresas.component.css']
})
export class RegistroEmpresasComponent {
  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Handle form submission
    this.empresaService.createEmpresa().subscribe(() => {
      this.router.navigate(['/empresas']); // Adjust the route as needed
    });
  }
}
