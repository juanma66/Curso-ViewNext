
/**/


function aleatorio(){

     let principio=1;
     let final=prompt("Selecciona un número final");
     let resultado= parseInt(Math.random() * (final - principio)) + principio;

    alert ("El número aleatorios \n"+resultado);


}

function juegoNumero(){

   let numeroAleatorio = parseInt(Math.random()* 100)+1;
    alert(numeroAleatorio);
    let num;

    while(numeroAleatorio != num){
   
        num = prompt("Ingrese numero: ");
        if (numeroAleatorio == num){
          alert("Bien");
        } else if(numeroAleatorio>num){
          alert("Numero mayor");
        }else if(numeroAleatorio<num){
            alert("Numero menor");
        }
    }



}


function ara(){

   let miAr=new Array();
   let numero=prompt("Introduce el número");
   let rellena=0;

   for(let i=0; i<numero; i++){
     miAr.push(rellena);
 
 alert(miAr[i]);
}


}

function primos(){
    var c=prompt("Introduce número");
    var j = 2;
    var numerosPrimos = []; 
    for (; j < c; j++) {
    
      if (primo(j)) {
        numerosPrimos.push(j);
      }   
    }
    
    alert(numerosPrimos);
    
    function primo(numero) {
      for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }

      }
    
      return numero !== 1;
    }

}


function dni(){

    let dni=prompt("Introduce el Dni");
    let numero
    let letr
    let letra
    let expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }


}



function palindromo(){

    let palabra=prompt("Una palabra").toLowerCase();
 
       // eliminamos los espacios en blanco
    palabra = palabra.replace(/ /g, "");
	for (let i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
            alert("No es palíndromo")
			return false;
		}
	}
    alert("Es palíndromo");
	return true;
}

