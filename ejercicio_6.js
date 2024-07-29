//Buscar Elemento en Array
let frutas = ["piña","manzana","pera","platano","papaya","mango","fresa"];
function buscarFruta(fruta){
    for (let i=0; i<frutas.length; i++) {
        if (frutas[i]===fruta) {
            return true;
        }
    }
    return false;
}

let busqueda = prompt("Ingresa una fruta");
console.log(buscarFruta(busqueda));


