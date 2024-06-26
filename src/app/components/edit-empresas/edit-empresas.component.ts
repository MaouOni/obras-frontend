import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-edit-empresas',
  templateUrl: './edit-empresas.component.html',
  styleUrls: ['./edit-empresas.component.css']
})
export class EditEmpresasComponent implements OnInit {
  empresa: Empresa = new Empresa();

  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresaById(id).subscribe(empresa => this.empresa = empresa);
  }

  onSubmit() {
    this.empresaService.updateEmpresa(this.empresa).subscribe(response => {
      console.log('Empresa actualizada', response);
      // Handle the response, navigate, etc.
    });
  }
}
