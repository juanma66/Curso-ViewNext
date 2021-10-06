import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-calculadora',
  templateUrl: './nueva-calculadora.component.html',
  styleUrls: ['./nueva-calculadora.component.scss']
})
export class NuevaCalculadoraComponent implements OnInit {

  resultado: boolean= true;
  acum: number=0;
  pantalla: string='';
  op: string='+';

  constructor() { }


  ponerdigito(num: string):void {
    if(this.pantalla == '0' || this.resultado){
        this.pantalla = num;
        this.resultado = false;
    }else{
        this.pantalla += num;
    }
}

calcular(operador: string): void{
    let valor = parseFloat(this.pantalla);
    switch(this.op){
        case '+': this.acum += valor;
        break;
        case '-': this.acum -= valor;
        break;
        case '*': this.acum *= valor;
        break;
        case '/': this.acum /= valor;
        break;
    }

    this.op = operador;
    this.resultado = true;
    this.pantalla = this.acum.toString();
}


borrar_digito(): void{
    if (this.resultado || this.pantalla.length == 1 || (this.pantalla.length == 2 && this.pantalla.startsWith('-'))) {
  this.pantalla = '0';
  this.resultado = true;
} else
    this.pantalla = this.pantalla.substr(0,
        this.pantalla.length - 1);
}

borrar_todo(): void{
    this.acum = 0;
    this.op = '+';
    this.pantalla = '0';
    this.resultado = true;
}

cambiar_signo(): void{
    this.pantalla = (-this.pantalla).toString();
    this.acum = (-this.acum);
}

poner_coma(): void{
    if (this.resultado) {
        this.pantalla = '0.';
        this.resultado = false;
    } else {
        this.pantalla += '.';
    }

}




  ngOnInit(): void {
  }

}
