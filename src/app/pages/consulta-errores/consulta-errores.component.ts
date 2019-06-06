import { Component, OnInit } from '@angular/core';
import { CmService } from '../../services/cm.service';

@Component({
  selector: 'app-consulta-errores',
  templateUrl: './consulta-errores.component.html',
  styles: []
})
export class ConsultaErroresComponent implements OnInit {

  cmList:any[] = []
  estaLleno = false;

  constructor(public cm:CmService) { }

  ngOnInit() {
  }


  buscarCm(termino: string) {
    console.log(termino);
    this.estaLleno = true;
    this.cmList = this.cm.buscarCm(termino)
    console.log(this.cmList);
  }
 
  mostrarLista(){
    if(this.estaLleno === false){
      return true;
    }else{
      return false;
    }
  }

}
