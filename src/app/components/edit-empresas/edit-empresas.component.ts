import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../models/empresa.model';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-edit-empresas',
  templateUrl: './edit-empresas.component.html',
  styleUrls: ['./edit-empresas.component.css']
})
export class EditEmpresasComponent implements OnInit {
  empresa: Empresa = new Empresa();

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.empresaService.getEmpresaById(+id).subscribe((empresa: Empresa) => {
        this.empresa = empresa;
      });
    } else {
      console.error('ID parameter is null');
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.empresaService.updateEmpresa(+id, this.empresa).subscribe(response => {
        this.router.navigate(['/empresas']);
      });
    } else {
      console.error('ID parameter is null');
    }
  }
}
