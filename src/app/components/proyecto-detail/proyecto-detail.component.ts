import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();

  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Add non-null assertion operator
    this.proyectoService.getProyectoById(id).subscribe((proyecto: Proyecto) => {
      this.proyecto = proyecto;
    });
  }
}
