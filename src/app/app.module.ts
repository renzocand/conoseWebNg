import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { NavbarComponent } from './pages/index/navbar/navbar.component';
import { BeneficiosComponent } from './pages/index/beneficios/beneficios.component';
import { ComoTrabajamosComponent } from './pages/index/como-trabajamos/como-trabajamos.component';
import { InicioComponent } from './pages/index/inicio/inicio.component';
import { OfrecemosComponent } from './pages/index/ofrecemos/ofrecemos.component';
import { NuestroEquipoComponent } from './pages/index/nuestro-equipo/nuestro-equipo.component';
import { FooterComponent } from './pages/index/footer/footer.component';

import { AppRoutingModule } from './app.routes';
import { FormsComponent } from './pages/consulta/forms/forms.component';
import { NavbarSharedComponent } from './shared/navbar-shared/navbar-shared.component';
import { ConsultaErroresComponent } from './pages/consulta-errores/consulta-errores.component';
import { TablaComponent } from './pages/consulta-errores/tabla/tabla.component';



import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ConsultaComponent,
    NavbarComponent,
    BeneficiosComponent,
    ComoTrabajamosComponent,
    InicioComponent,
    OfrecemosComponent,
    NuestroEquipoComponent,
    FooterComponent,
    FormsComponent,
    NavbarSharedComponent,
    ConsultaErroresComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
