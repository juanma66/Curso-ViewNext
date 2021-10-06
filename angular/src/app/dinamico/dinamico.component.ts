import { Component, OnInit } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../home/home.component';
import { NuevaCalculadoraComponent } from '../nueva-calculadora/nueva-calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'nueva-calculadora', icono: '', componente: NuevaCalculadoraComponent},
    { texto: 'demos', icono: '', componente: DemosComponent },
    { texto: 'inicio', icono: '', componente: HomeComponent },

  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
