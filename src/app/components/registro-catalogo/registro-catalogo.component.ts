import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-registro-catalogo',
  templateUrl: './registro-catalogo.component.html',
  styleUrls: ['./registro-catalogo.component.css']
})
export class RegistroCatalogoComponent implements OnInit {
  frente: any = {}; // Initialize as empty object to hold frente data

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
    // Replace with actual service call to fetch frente data
    this.catalogoService.getFrente(frenteId).subscribe(data => {
      this.frente = data;
    });
  }

  onSubmit(): void {
    // Handle form submission
    this.catalogoService.createCatalogo(this.frente.id).subscribe(() => {
      this.router.navigate(['/frentes']); // Adjust the route as needed
    });
  }
}
