import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresaService.getEmpresas().subscribe((data: any[]) => {
      this.empresas = data;
    });
  }
}
