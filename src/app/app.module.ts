import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ConsultarComponent } from './components/consultar/consultar.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EstimacionComponent } from './components/estimacion/estimacion.component';
import { FormularioProyectoComponent } from './components/formulario-proyecto/formulario-proyecto.component';
import { FrentesObraComponent } from './components/frentes-obra/frentes-obra.component';
import { RegistroCatalogoComponent } from './components/registro-catalogo/registro-catalogo.component';
import { RegistroEmpresasComponent } from './components/registro-empresas/registro-empresas.component';
import { RegistroProyectoComponent } from './components/registro-proyecto/registro-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoListComponent,
    NavbarComponent,
    ConsultarComponent,
    EmpresasComponent,
    EstimacionComponent,
    FormularioProyectoComponent,
    FrentesObraComponent,
    RegistroCatalogoComponent,
    RegistroEmpresasComponent,
    RegistroProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProyectoListComponent },
      { path: 'proyectos', component: ProyectoListComponent },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'registro', component: FormularioProyectoComponent },
      { path: 'consultar', component: ConsultarComponent }
    ])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
