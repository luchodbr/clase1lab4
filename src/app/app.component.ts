import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase1-Angular';
  public edad1 : number ;
  public edad2 : number;
  public suma :number;
  public promedio:number;
  constructor() { }

  ngOnInit() {
  }

  Calcular() {
    this.suma = this.edad1 + this.edad2;
    this.promedio = (this.edad2 + this.edad1) / 2 ;
  }
  LimpiarCuadro(){
    this.edad1 = null;
    this.edad2 = null;
    this.suma = null;
    this.promedio = null;
   }
   
}
