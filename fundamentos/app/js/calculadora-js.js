
let resultado = document.querySelector('.resultado');
let botones = document.querySelectorAll('.button');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', calculo);
}

/* Gestionar un click en uno de los botones */
function calculo (event) {
    switch (event.srcElement.innerHTML) {
        case 'Eliminar':
            resultado.value = resultado.value.substring('', resultado.value.length -1);
            break;
        case 'CE':
            resultado.value = '0';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (resultado.value !== "0" && //evitar la division entre 0
                !isNaN(parseInt(resultado.value[resultado.value.length-1])))  {
                resultado.value += event.srcElement.innerHTML;    
            }
            break;
        case '=':
            if (resultado.value !== "0" && 
                !isNaN(parseInt(resultado.value[resultado.value.length-1])))  {
                resultado.value = eval(resultado.value);
            }
            break;
        default:
            if (resultado.value === '0') resultado.value = '';
            resultado.value += event.srcElement.innerHTML;
            break;
    }
}