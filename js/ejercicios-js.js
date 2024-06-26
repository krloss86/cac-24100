function ingresarValor() {
    let n;
    //let rangoValido = true;
    do {
        n = validarNumero();
        /*rangoValido = rango(n,1,10);  
        if(!rangoValido){
            alert('Fuera de rango (1-10)')
        }
        //si llegó acá es porque n es un número y está entre 1 y 10
        */
    }while(!rango(n,1,10));
    mostrarTabla(n);
}

function mostrarTabla(n) {
    for(let i=1;i<=10;i++) {
        console.log(`${n} x ${i} = `,n * i);
    }
}

function rango(valor,inicio,fin)  {
    const value = Number(valor);  
    return value >= inicio &&  value <= fin;
}

function validarNumero () {
    let numero = NaN;
    do {
        const valor = prompt('Ingrese valor (entre 1 -10)');   
        numero = Number(valor);// Number(ABC) > NaN
    }while(!numero);

    return numero;
}
//ciclo do-while
function crear() {
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const tipoCliente = document.getElementById('tipoCliente').value

    console.log(nombre,apellido,email,tipoCliente);

    //const formData = new FormData();

    const jsonRequest = {
        nombre,
        apellido,
        email,
        tipoCliente
    };

    const json = JSON.stringify(jsonRequest);

    //fetch POST al server para crear el recurso(cliente)
    fetch('http://localhost:8080/webapp/CrearClientesController',{
        method: 'POST',
        body: json,
        headers: new Headers({
            'Content-Type': 'text/json'
        })
        }
    )
    .then(response.json())
    .then(data => console.log(data));
}

function llamarAPI() {
    const json = 
        fetch('http://localhost:8080/webapp/ListarClientesController')
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}

function dibujarDatos(json) {
    console.log(json)
    const filas = json.data.map(x => Fila(x));
    /*[x,       x]
     Fila(x) Fila(x)  
    ['tr','tr']*/

    //.join(' ')
    document.getElementById('datos').innerHTML = filas.join(' ');
}

function Fila(obj) {
    return `
        <tr>
            <td>
                ${obj.id}
            </td>
            <td>
                ${obj.email}
            </td>
            <td>
                ${obj.first_name}
            </td>
            <td>
            ${obj.last_name}
            </td>
            <th>
                <img src='${obj.avatar}' width="50px"/>
            </th>
        </tr>
    `
}