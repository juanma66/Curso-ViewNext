
class Calculadora{
    constructor(){
        this.acum = 0;
        this.op = '+';
        this.pantalla = '0';
        this.resultado = true;
    }


    ponerdigito(num) {
        if(this.pantalla == '0' || this.resultado){
            this.pantalla = num;
            this.resultado = false;
        }else{
            this.pantalla += num;
        }
    }

    calcular(operador){
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

    borrar_digito(){
     
    }

    borrar_todo(){

    }

}