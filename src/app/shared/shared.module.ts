import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../pages/index/footer/footer.component';
import { NavbarSharedComponent } from './navbar-shared/navbar-shared.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRoutingModule } from '../app.routes';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarSharedComponent,
        LoadingComponent
    ],
    imports: [ CommonModule, AppRoutingModule ],
    exports: [
        FooterComponent,
        NavbarSharedComponent,
        LoadingComponent
    ],
    providers: [],
})
export class SharedModule {}