import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-registro-empresas',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent {
  empresa: Empresa = new Empresa();

  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Handle form submission
    this.empresaService.createEmpresa(this.empresa).subscribe(() => {
      this.router.navigate(['/empresa']); // Adjust the route as needed
    });
  }
}
