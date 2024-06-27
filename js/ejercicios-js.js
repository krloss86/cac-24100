async function crear() {
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const tipoClienteId = document.getElementById('tipoCliente').value

    console.log(nombre,apellido,email,tipoCliente);

    //const formData = new FormData();

    const jsonRequest = {
        nombre,
        apellido,
        email,
        tipoClienteId
    };

    const json = JSON.stringify(jsonRequest);

    //fetch POST al server para crear el recurso(cliente)
    await fetch('http://localhost:8080/webapp/CrearClientesController',{
        method: 'POST',
        body: json,
        headers: new Headers({
            'Content-Type': 'text/json'
        })
        }
    );

    llamarAPI();
}

function listar() {
    const json = 
        fetch('http://localhost:8080/webapp/ListarClientesController')
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}

function dibujarDatos(json) {
    console.log(json)
    const filas = json.map(x => Fila(x));
    /*[x,       x]
     Fila(x) Fila(x)  
    ['tr','tr']*/

    //.join(' ')
    document.getElementById('datos').innerHTML = filas.join(' ');
}

async function eliminar(id) {
    const eliminar = confirm('¿Eliminar?');//true|false
    if(eliminar) {
        //fetch sin anda envia por GET
        await fetch(`http://localhost:8080/webapp/EliminarClienteController?id=${id}`,{
            method: 'delete'
        });
        listar();//vuelve a buscar todo en el back

        //pero podria solo eliminar la fila TPH:
    }
}

function Fila(obj) {
    return `
        <tr id='${obj.id}'>
            <td>
                ${obj.id}
            </td>
            <td>
                ${obj.email}
            </td>
            <td>
                ${obj.nombre}
            </td>
            <td>
                ${obj.apellido}
            </td>
            <th>
                <img src='${obj.imagen}' width="50px"/>
            </th>
            <td>
                <a href="#" onclick="eliminar(${obj.id})">X</a>
            </td>
        </tr>
    `
}

//ni bien carga la pagina, cargo la lista de los datos
listar();