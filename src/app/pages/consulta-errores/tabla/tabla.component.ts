import { Component, OnInit } from '@angular/core';
import { CmService, Cm } from '../../../services/cm.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent{

  cargando:boolean;


  lista:Cm[] = [];

  constructor(private cm:CmService) {
    this.cargando = true;
   }

   ngAfterViewInit() {
    this.lista = this.cm.getListCm();
    this.cargando = false;
  }

}
