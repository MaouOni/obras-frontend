import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe((data: Empresa[]) => {
      this.empresas = data;
    });
  }
}
