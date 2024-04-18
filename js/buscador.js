//obtengo la referencia del tag botton en html
//como un objeto en js
const butonEnHTML = document.getElementById('btnBusqueda');

//creo la fucion y
function buscar() {

    const claveEnHTML = document.getElementById('claveDeBusqueda');
    
    //enviar al HTML, dentro del h4, el contenido del input
    const h4EnHTML = document.getElementById('textoBuscado');

    //concatenar dos string
    h4EnHTML.innerText = 'Encontramos 2 items para ' + claveEnHTML.value;
}

//asigno al boton Buscar un evento click=onclick
butonEnHTML.addEventListener('click',buscar);