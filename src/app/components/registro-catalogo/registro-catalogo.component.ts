import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-catalogo',
  templateUrl: './registro-catalogo.component.html',
  styleUrls: ['./registro-catalogo.component.css']
})
export class RegistroCatalogoComponent implements OnInit {
  frente: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Initialize properties
    this.frente = {};

    // Load data here if needed
  }

  onSubmit() {
    // Handle form submission
  }
}
