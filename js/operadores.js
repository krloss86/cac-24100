//1 crear la funcion
function calcular() {
    //2 obtengo valor de input
    const valorA = document.getElementById('valorA').value;
    
    //funcion de fabrica parseInt/parseFloat
    //const a = parseFloat(valorA);
    //const a = +valorA;
    const a = Number(valorA);

    const valorB = document.getElementById('valorB').value;
    const b = Number(valorB);

    const resultado = document.getElementById('resultado');

    //saber si a > b
    if(a > b) {        
        resultado.innerText = 'A es > B';
    }

    //si a === b
    if(a === b) {
       resultado.innerText = 'A es = a B'; 
    }

    // si a < b
    if(a < b ) {
        resultado.innerText = 'A es < que B'
    }
}

