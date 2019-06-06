import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-shared',
  templateUrl: './navbar-shared.component.html',
  styles: []
})
export class NavbarSharedComponent implements OnInit {

  public href: string = "";

  constructor( public router:Router) { }

  ngOnInit() {
  }

  comprobarRuta(){
    this.href = this.router.url;
    if(this.href === '/' || this.href==='/inicio'){
      return true
    }else{
      return false
    }
  }

}
