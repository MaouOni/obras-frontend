import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-catalogo',
  templateUrl: './registro-catalogo.component.html',
  styleUrls: ['./registro-catalogo.component.css']
})
export class RegistroCatalogoComponent implements OnInit {
  frente: any = {}; // Initialize as empty object to hold frente data
  catalogo: any = {}; // Initialize as empty object to hold catalogo data

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const frenteId = this.route.snapshot.paramMap.get('frenteId');
    this.loadFrente(frenteId);
  }

  loadFrente(frenteId: string | null): void {
    if (frenteId) {
      this.catalogoService.getFrente(frenteId).subscribe(data => {
        this.frente = data;
        this.catalogo.frente_id = this.frente.id; // Set frente_id for catalogo
      });
    }
  }

  onSubmit(form: NgForm): void {
    this.catalogoService.createCatalogo(this.catalogo).subscribe(() => {
      this.router.navigate(['/frentes']); // Adjust the route as needed
    });
  }
}
