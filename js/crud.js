//listado de todos lo que vino del server
let datos = [];

function editar(id) {
    const objetoAEditar =  datos.find(x => x.id === id);
    //alert(JSON.stringify(objetoAEditar));
    
    //actualizo el html con los datos del row
    document.getElementById('nombre').value = objetoAEditar.nombre;
    document.getElementById('apellido').value = objetoAEditar.apellido;
    document.getElementById('email').value = objetoAEditar.email;
    document.getElementById('tipoCliente').value = objetoAEditar.tipoClienteId;

    //agregamos el id al campo hidden
    document.getElementById('id').value = objetoAEditar.id;
}

function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tipoCliente').value = '';
    document.getElementById('id').value = '';
}

async function guradar() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoClienteId = document.getElementById('tipoCliente').value;
    
    console.log(nombre,apellido,email,tipoClienteId,id);

    //const formData = new FormData();

    const jsonRequest = {
        id,
        nombre,
        apellido,
        email,
        tipoClienteId
    };

    const json = JSON.stringify(jsonRequest);

    const endpoint = id ? 'ActualizarClienteController' : 'CrearClientesController';

    //fetch POST al server para crear el recurso(cliente)
    await fetch(`http://localhost:8080/webapp/${endpoint}`,{
        method: 'POST',
        body: json,
        headers: new Headers({
            'Content-Type': 'text/json'
        })
        }
    );
    limpiar();

    listar();
}

function listar() {
    const json = 
        fetch('http://localhost:8080/webapp/ListarClientesController')
        .then(response => response.json())
        .then(data => {
            datos = data;
            dibujarDatos(data)
        });
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
                <a href="#" onclick="editar(${obj.id    })">Edit</a>
            </td>
        </tr>
    `
}

//ni bien carga la pagina, cargo la lista de los datos
listar();