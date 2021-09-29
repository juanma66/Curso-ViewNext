
/**/


function aleatorio(min, max){

    return Math.floor(Math.random()*(max-min))+min;
  
}

function juegoNumero(){

  let aleatorio=random(0,100);
  let bandera=true;
  let contador=0;


  do{
      var mensaje;
      var opcion=prompt("Introducir datos");

      if(opcion==null  || opcion==""){
             mensaje="Numero vacio";
      }else{

        if(opcion>aleatorio){
          alert="Tu numero es mayor";
        } if(opcion<aleatorio){
          alert="Tu numero es menor";
        } if(opcion==aleatorio){
          alert="Tu numero es mayor";
          bandera=falso;
        }
      }
      contador++;
  }while(bandera==true  && contador!=5);

}


function iniciarArray(lom, dato){

   let ar=[];
   for(let i=0; i<lom; i++){
    ar.push(dato);

   }

      console.log(ar);
      return ar;

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

