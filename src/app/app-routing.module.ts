import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EstimacionComponent } from './components/estimacion/estimacion.component';
import { FrentesObraComponent } from './components/frentes-obra/frentes-obra.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegistroCatalogoComponent } from './components/registro-catalogo/registro-catalogo.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroProyectoComponent } from './components/registro-proyecto/registro-proyecto.component';
import { FrenteDetailComponent } from './components/frente-detail/frente-detail.component';
import { EditEmpresasComponent } from './components/edit-empresas/edit-empresas.component';
import { EditFrentesComponent } from './components/edit-frentes/edit-frentes.component';
import { EditProyectosComponent } from './components/edit-proyectos/edit-proyectos.component';
import { IndexComponent } from "./components/index/index.component";
import { EstimacionServiciosComponent } from "./components/estimacion-servicios/estimacion-servicios.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'proyecto/:proyectoId/frente/:frenteId/estimacion', component: EstimacionComponent },
  { path: 'proyecto/:proyectoId/frente/:frenteId/estimacion/estimacion-servicios', component: EstimacionServiciosComponent },
  { path: 'frentes', component: FrentesObraComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'proyecto/detalles/:id', component: ProyectoDetailComponent },
  { path: 'registro-catalogo/:frenteId', component: RegistroCatalogoComponent },
  { path: 'registro-empresa', component: RegistroEmpresaComponent },
  { path: 'registro-proyecto', component: RegistroProyectoComponent },
  { path: 'proyecto/:proyectoId/frente/:id', component: FrenteDetailComponent },
  { path: 'empresas/editar/:id', component: EditEmpresasComponent },
  { path: 'proyecto/:proyectoId/frente/:id/editar', component: EditFrentesComponent },
  { path: 'proyecto/editar/:id', component: EditProyectosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
