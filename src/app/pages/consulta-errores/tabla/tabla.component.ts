import { Component, OnInit } from '@angular/core';
import { CmService, Cm } from '../../../services/cm.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {

  lista:Cm[] = [];

  constructor(private cm:CmService) {
    this.lista = this.cm.getListCm();
    console.log(this.lista);
   }

  ngOnInit() {
  }

}
