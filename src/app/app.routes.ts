import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { IndexComponent } from './pages/index/index.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { ConsultaErroresComponent } from './pages/consulta-errores/consulta-errores.component';

const routes: Routes = [
    // { path: ':id', component: IndexComponent },
    { path: '', component: IndexComponent },
    { path: 'inicio', component: IndexComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'consulta-errores', component: ConsultaErroresComponent },
    { path: '**', component: IndexComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
