// if/else
// switch
// ciclos:
// for/white/do-while
// arrays

function esMayorEdad(edad) {     
    return edad >= 18;
}
function determinar() {
    const edad = Number(document.getElementById('edad').value);
    //edad es NaN
    //o
    //edad es valor numerico
    
    //guards: si la edad es vacio no continuo!
    if(!edad) {
        document.getElementById('edad').classList.add('error');
        return ;
    }

    //puedo agregar mas validaciones?
    if(edad < 1 || edad > 120) {
        document.getElementById('edad').classList.add('error2');
        return ;
    }

    const edadNumero = Number(edad);
    //invoco la funcion esMayordeEdad
    const esMayor = esMayorEdad(edadNumero);
    if(esMayor) {
        document.getElementById('resultado').innerHTML = '<b>Es mayor</b>';
    }else {
        document.getElementById('resultado').innerHTML = '<b>Es menor</b>';
    }
}

const boton = document.getElementById('determinar');
boton.addEventListener('click',determinar);


const edificio = [5,7,10,5,11,13,13,13];

let mayor;//undefined
let menor;//undefined
let cantMayores = 0;
let cantMenores = 0;

if(edificio.length > 0){
    mayor = edificio[0];
    menor = edificio[0];
}
for(let piso = 1; piso < edificio.length; piso++ ) {
    if(edificio[piso] > mayor) {
        mayor = edificio[piso];
    }
    if(edificio[piso] < menor) {
        menor = edificio[piso];
    }
}
for(let piso = 0; piso < edificio.length; piso++ ) {
    if(edificio[piso] === menor) {
        cantMenores++;
    }
    if(edificio[piso] === mayor) {
        cantMayores++;
    }
}
console.log('el',mayor,  ' es mayor y hay ', cantMayores);
console.log('el',menor,  ' es menor y hay ', cantMenores);
console.log('------');

//quiero calcular el mayor, menor, promedio
//tph!!!
for(let i=0;i <= 20;i++) {
    if(i % 2 === 0) {
        //console.log(i, 'es par');
    }else{
        //console.log(i, 'es impar');
    }
}
console.log('----');
//de arriba hacia a bajo
for(let i=20;i >= 0;i--) {
    if(i % 2 === 0) {
        //console.log(i, 'es par');
    }else{
       // console.log(i, 'es impar');
    }
}
//contar la cantidad de pares e impares
let pares = 0;
let impares = 0;
for(let i=20;i >= 0;i--) {
    if(i % 2 === 0) {
        pares++; 
    }else{
        impares++; 
    }
}
console.log('hay ',pares, ' pares');
console.log('hay ',impares, ' impares');