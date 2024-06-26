import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frente } from '../../models/frente.model';
import { FrenteService } from '../../services/frente.service';

@Component({
  selector: 'app-frente-detail',
  templateUrl: './frente-detail.component.html',
  styleUrls: ['./frente-detail.component.css']
})
export class FrenteDetailComponent implements OnInit {
  frente: Frente = new Frente();  // Initialize the frente property

  constructor(
    private frenteService: FrenteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Add non-null assertion operator
    this.frenteService.getFrenteById(id).subscribe((frente: Frente) => {
      this.frente = frente;
    });
  }
}
