//metodos de arrays
const edades = [10,20,25,5,56,9,26];
console.log(edades);
edades.push(15); //agregamos

edades.forEach(x => console.log(x));//recorrer todos lo elementos

const elementoBuscado = edades.findIndex(x => x === 25);

if(elementoBuscado) {
    console.log('existe el 25',elementoBuscado);
}
//--------------
//10,20,25
//algo-10;algo-20;algo-25
//10*2;20*2,25*2
//
//.map(x,()=>{})
const nuevoArray = edades.map(x => x + ' año/s');
console.log(nuevoArray);

//filtrar cosas del array y quedarme solo con aquellos elementos que
//cumplan una determinada condicion.
const filtrados = edades.filter(x => x > 10);
console.log(filtrados);

//agregar elementos al principio
edades.unshift(3);
console.log(edades);

//quitar un elemento, al final!!!
const ultimoElemento = edades.pop();//NO SE CUAL ES
console.log(ultimoElemento)
console.log(edades);

//existencia de elemento
const exiteEl27 = edades.includes(27);
console.log(exiteEl27);

//ahora con un objeto!!!
const objetos = [
    {id:1,value:'a'},
    {id:2,value:'b'},
    {id:3,value:'c'},
    {id:4,value:'ac'},
];

//id > 2 y que contengan la letra a
const objFiltrados = objetos.filter(x  => x.id > 2 && x.value.includes('a'));
console.log(objFiltrados);

//como saber si todos las edades son pares?
const todosPares = edades.every(x => x % 2 === 0 );//true si todos los elementos cumplen una condicion
console.log(todosPares)

//existe al menos un elemento par?
const existeUnPar = edades.some(x => x % 2 ===0);
console.log(existeUnPar)

//eliminar un elemento (25)
console.log(edades);
const elmiminado = edades.splice(edades.findIndex(x => x === 25));
console.log(elmiminado);

