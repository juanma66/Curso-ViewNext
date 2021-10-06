import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  subpantalla = '';
  pantalla = '';
  operand1: number=0;
  operand2: number=0;
  operador = '';
  calculationString = '';

  contesta = false;
  operadorSet = false;

  constructor() { }
  presspulsa(pulsa: string) {
    if (pulsa === '/' || pulsa === 'x' || pulsa === '-' || pulsa === '+') {
      const lastpulsa = this.pantalla[this.pantalla.length - 1];
      if (lastpulsa === '/' || lastpulsa === 'x' || lastpulsa === '-' || lastpulsa === '+') {
        this.operadorSet = true;
      }
      if ((this.operadorSet) || (this.pantalla === '')) {
        return;
      }
      this.operand1 = parseFloat(this.pantalla);
      this.operador = pulsa;
      this.operadorSet = true;
    }
    if (this.pantalla.length === 10) {
      return;
    }
    this.pantalla += pulsa;
  }
  limpiar() {
    this.pantalla = '';
    this.subpantalla = '';
    this.operadorSet = false;
  }
  getCon() {
    this.calculationString = this.pantalla;
    this.operand2 = parseFloat(this.pantalla.split(this.operador)[1]);
    if (this.operador === '/') {
      this.subpantalla = this.pantalla;
      this.pantalla = (this.operand1 / this.operand2).toString();
      this.subpantalla = this.calculationString;
      if (this.pantalla.length > 9) {
        this.pantalla = this.pantalla.substr(0, 9);
      }
    } else if (this.operador === 'x') {
      this.subpantalla = this.pantalla;
      this.pantalla = (this.operand1 * this.operand2).toString();
      this.subpantalla = this.calculationString;
      if (this.pantalla.length > 9) {
        this.pantalla = 'Error';
        this.subpantalla = 'Fuera de rango';
      }
    } else if (this.operador === '-') {
      this.subpantalla = this.pantalla;
      this.pantalla = (this.operand1 - this.operand2).toString();
      this.subpantalla = this.calculationString;
    } else if (this.operador === '+') {
      this.subpantalla = this.pantalla;
      this.pantalla = (this.operand1 + this.operand2).toString();
      this.subpantalla = this.calculationString;
      if (this.pantalla.length > 9) {
        this.pantalla = 'Error';
        this.subpantalla = 'Fuera de rango';
      }
    } else {
      this.subpantalla = 'Error';
    }
    this.contesta = true;
  }

  ngOnInit(): void {
  }

}
