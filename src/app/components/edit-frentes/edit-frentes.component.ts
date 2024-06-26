import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frente } from '../../models/frente.model';
import { FrenteService } from '../../services/frente.service';

@Component({
  selector: 'app-edit-frentes',
  templateUrl: './edit-frentes.component.html',
  styleUrls: ['./edit-frentes.component.css']
})
export class EditFrentesComponent implements OnInit {
  frente: Frente = new Frente();

  constructor(
    private frenteService: FrenteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.frenteService.getFrenteById(+id).subscribe((frente: Frente) => {
        this.frente = frente;
      });
    } else {
      console.error('ID parameter is null');
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.frenteService.updateFrente(+id, this.frente).subscribe(response => {
        this.router.navigate(['/frentes']);
      });
    } else {
      console.error('ID parameter is null');
    }
  }
}
