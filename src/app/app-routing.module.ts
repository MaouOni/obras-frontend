import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FormularioProyectoComponent } from './components/formulario-proyecto/formulario-proyecto.component';
import { ConsultarComponent } from './components/consultar/consultar.component';

const routes: Routes = [
  { path: '', component: ProyectoListComponent },
  { path: 'proyectos', component: ProyectoListComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'registro', component: FormularioProyectoComponent },
  { path: 'consultar', component: ConsultarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
