const cardsArrays = [];

function Cards(cardsArrays) {   
    
    const cards = cardsArrays.map(x => Card(x));
    
    //[, , , , , ].join( );
    //uso el Dom para dibujar en el html lo que tiene cards
    document.getElementById('cards').innerHTML = cards.join(' ');
}

function Card(x) {
    return `
        <div class="col-md-4 mb-1">
            <div class="card">
                <img src="${x.imageSrc}" 
                    class="card-img-top" 
                    alt="..." 
                    height="150px">
                <div class="card-body">
                    <h5 class="card-title">
                        ${x.title}
                    </h5>
                    <p class="card-text">
                        ${x.descripcion}
                    </p>
                    <a href="#" class="btn btn-primary" onclick="detail(${x.id})">
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
    `;
}

function detail(id) {
    //busco dentro del array/servico REST 
    const obj = cardsArrays.find(x => x.id === id);

    //actualizo el title del modal 
    document.getElementById('modalTitle').innerHTML = obj.title;

    //actualizo el contenido del modal 
    document.getElementById('modalContent').innerHTML = obj.descripcion;

    //muestro el modal
    const modal = new bootstrap.Modal('#exampleModal', {
        keyboard: false
    });

    modal.show();

}

function main() {
    //simulo la carga de mi array 
    cardsArrays.push(
        {
            id: Math.random(),
            imageSrc: '../imgs/leono.jpg',
            descripcion: 'lider de los thundercats',
            title: 'Leono',
        },
        {
            id: Math.random(),
            imageSrc: '../imgs/leono.jpg',
            descripcion: 'Gnar de los thundercats',
            title: 'Gnar mascota de los thundercats',
        },        
    );

    Cards(cardsArrays);
}

main();