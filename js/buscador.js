//obtengo la referencia del tag botton en html
//como un objeto en js
const butonEnHTML = capturarPorId('btnBusqueda');

//creo la fucion y
function buscar() {

    const claveEnHTML = capturarPorId('claveDeBusqueda');
    
    //enviar al HTML, dentro del h4, el contenido del input
    const h4EnHTML = capturarPorId('textoBuscado');

    //concatenar dos string
    h4EnHTML.innerText = 'Encontramos 2 items para ' + claveEnHTML.value;
}
//se supone que htmlID representa:
//btnBusqueda o claveDeBusqueda o textoBuscado
function capturarPorId(htmlId) {
    return document.getElementById(htmlId);    
}

//asigno al boton Buscar un evento click=onclick
butonEnHTML.addEventListener('click',buscar);