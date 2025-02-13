import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  // atributos
  n1="";
  n2="";
  dolar="";
  real="5.78";
  res="";
  valorEmReal="";
  calcularMediaRes="";
  ac="";
  at="";
  agh="";

  // metodo
  somar(){
    this.res = (parseFloat(this.n1) + parseFloat(this.n2)).toString();
  }

  converter(){
    this.valorEmReal = (parseFloat(this.dolar) * Math.round(parseFloat(this.real))).toString();
  }

  calcularMedia(){
    this.calcularMediaRes = (((parseFloat(this.ac)*3) + (parseFloat(this.at)*5) + (parseFloat(this.agh)*2))/10).toString();
  }

}
