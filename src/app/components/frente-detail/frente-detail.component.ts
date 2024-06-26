import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrenteService } from '../../services/frente.service';
import { Frente } from '../../models/frente';

@Component({
  selector: 'app-frente-detail',
  templateUrl: './frente-detail.component.html',
  styleUrls: ['./frente-detail.component.css']
})
export class FrenteDetailComponent implements OnInit {
  frente: Frente;

  constructor(
    private route: ActivatedRoute,
    private frenteService: FrenteService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.frenteService.getFrenteById(id).subscribe(frente => this.frente = frente);
  }
}
