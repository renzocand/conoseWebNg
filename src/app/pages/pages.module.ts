import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { BeneficiosComponent } from './index/beneficios/beneficios.component';
import { IndexComponent } from './index/index.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ComoTrabajamosComponent } from './index/como-trabajamos/como-trabajamos.component';
import { InicioComponent } from './index/inicio/inicio.component';
import { OfrecemosComponent } from './index/ofrecemos/ofrecemos.component';
import { NuestroEquipoComponent } from './index/nuestro-equipo/nuestro-equipo.component';
import { FormsComponent } from './consulta/forms/forms.component';
import { ConsultaErroresComponent } from './consulta-errores/consulta-errores.component';
import { TablaComponent } from './consulta-errores/tabla/tabla.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BeneficiosComponent,
        IndexComponent,
        ConsultaComponent,
        ComoTrabajamosComponent,
        InicioComponent,
        OfrecemosComponent,
        NuestroEquipoComponent,
        FormsComponent,
        ConsultaErroresComponent,
        TablaComponent,
    ],
    imports: [ CommonModule, SharedModule ],
    exports: [IndexComponent],
    providers: [],
})
export class PagesModule {}