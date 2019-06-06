import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: []
})
export class ConsultaComponent {

  constructor(private elementRef:ElementRef) {};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  // ngAfterViewInit() {
  //   var s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "https://www.google.com/recaptcha/api.js?render=6LdymaYUAAAAALoCevTxU1Nilf6NfWKzqYcdvrwp";
  //   this.elementRef.nativeElement.appendChild(s);
  // }

}
