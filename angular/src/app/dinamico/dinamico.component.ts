import { Component, OnInit } from '@angular/core';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main/home/home.component';
import { NuevaCalculadoraComponent } from '../nueva-calculadora/nueva-calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Cliente Formulario', icono: '', componente: ClienteFormularioComponent},
    { texto: 'formulario', icono: '', componente: FormularioComponent},
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
