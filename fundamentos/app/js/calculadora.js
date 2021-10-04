
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
        if (this.resultado || this.pantalla.length == 1 || (this.pantalla.length == 2 && this.pantalla.startsWith('-'))) {
			this.pantalla = '0';
			this.resultado = true;
		} else
        this.pantalla = this.pantalla.substr(0,
            this.pantalla.length - 1);
    }

    borrar_todo(){
        this.acum = 0;
        this.op = '+';
        this.pantalla = '0';
        this.resultado = true;
    }

    cambiar_signo(){
        this.pantalla = (-this.pantalla).toString();
        this.acum = (-this.acum);
    }

    poner_coma(){
        if (this.resultado) {
            this.pantalla = '0.';
            this.resultado = false;
        } else {
            this.pantalla += '.';
        }
        
    }

}