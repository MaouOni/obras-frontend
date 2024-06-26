import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-frentes-obra',
  templateUrl: './frentes-obra.component.html',
  styleUrls: ['./frentes-obra.component.css']
})
export class FrentesObraComponent implements OnInit {
  proyectos: any[] = [];
  empresas: any[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProyectos();
    this.loadEmpresas();
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  onSubmit(form: NgForm): void {
    // Handle form submission
    console.log(form.value);
    // Perform necessary actions, e.g., save the form data to the database
    // After saving, navigate to the desired route
    this.router.navigate(['/some-route']);
  }
}
