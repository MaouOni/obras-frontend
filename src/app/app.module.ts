import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EstimacionComponent } from './components/estimacion/estimacion.component';
import { FormularioProyectoComponent } from './components/formulario-proyecto/formulario-proyecto.component';
import { FrentesObraComponent } from './components/frentes-obra/frentes-obra.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegistroCatalogoComponent } from './components/registro-catalogo/registro-catalogo.component';
import { RegistroEmpresasComponent } from './components/registro-empresas/registro-empresas.component';
import { RegistroProyectoComponent } from './components/registro-proyecto/registro-proyecto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstimacionServiciosComponent } from './components/estimacion-servicios/estimacion-servicios.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    EstimacionComponent,
    FormularioProyectoComponent,
    FrentesObraComponent,
    ProyectosComponent,
    RegistroCatalogoComponent,
    RegistroEmpresasComponent,
    RegistroProyectoComponent,
    NavbarComponent,
    EstimacionServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
