const listado = [];

function add() {
    //1 - capturo los elementos del html
    const id = Number(document.getElementById('id').value);
    //hacer id TPH (UUID)
    const title = document.getElementById('title').value;

    //TPH: validacion????

    //2 creo un objeto: nueva posicion de memoria
    const obj = {
        id,
        title
    };

    //agrego al listado
    listado.push(obj);

    draw(listado);

    //GUARDO EN LOCAL
    localStorage.setItem('list', JSON.stringify(listado));//pero como string: json

    //limpiar los input
    document.getElementById('id').value = '';
    document.getElementById('title').value = '';

    //enfocar el id
    document.getElementById('id').focus();
}

const draw = (listado) => {
    //[{id:1,title: 'mate'}]

    const lis = listado.map(x => `
        <li>
            ${x.id} ${x.title}
            <a href="#">(x)</a>
        </li>        
    `);
    
    //actualizar en HTML (uL)
    document.getElementById('list').innerHTML = lis;
}

function limpiar() {
    localStorage.clear();
    localStorage.setItem('list',JSON.stringify([]));
    //draw([]);
    document.getElementById('list').innerHTML = '';
}

document.getElementById('btnAdd')
    .addEventListener('click',add);


draw(JSON.parse(localStorage.getItem('list') || []));