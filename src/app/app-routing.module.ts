import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EstimacionComponent } from './components/estimacion/estimacion.component';
import { FormularioProyectoComponent } from './components/formulario-proyecto/formulario-proyecto.component';
import { FrentesObraComponent } from './components/frentes-obra/frentes-obra.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegistroCatalogoComponent } from './components/registro-catalogo/registro-catalogo.component';
import { RegistroEmpresasComponent } from './components/registro-empresas/registro-empresas.component';
import { RegistroProyectoComponent } from './components/registro-proyecto/registro-proyecto.component';
import { FrenteDetailComponent } from './components/frente-detail/frente-detail.component';
import { EditEmpresasComponent } from './components/edit-empresas/edit-empresas.component';
import { EditFrentesComponent } from './components/edit-frentes/edit-frentes.component';
import { EditProyectosComponent } from './components/edit-proyectos/edit-proyectos.component';

const routes: Routes = [
  { path: '', component: ProyectoListComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'estimacion', component: EstimacionComponent },
  { path: 'formulario-proyecto', component: FormularioProyectoComponent },
  { path: 'frentes-obra', component: FrentesObraComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'proyecto/detalles/:id', component: ProyectoDetailComponent },
  { path: 'registro-catalogo', component: RegistroCatalogoComponent },
  { path: 'registro-empresas', component: RegistroEmpresasComponent },
  { path: 'registro-proyecto', component: RegistroProyectoComponent },
  { path: 'frente/detalle/:id', component: FrenteDetailComponent },
  { path: 'empresas/editar/:id', component: EditEmpresasComponent },
  { path: 'proyecto/detalles/:proyectoId/frente/:id/editar', component: EditFrentesComponent },
  { path: 'proyecto/editar/:id', component: EditProyectosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
