let palabras =["uno", "dos", "tres","cuatro", "veinte"];

function filtrarPalabras(palabras) {
    let array = [];
    for (var i = 0; i < palabras.length; i++) 
    {
        if (palabras[i].length > numero) {
            array.push(palabras[i]);
        }
    }
    return array;
}

numero=0;
numero = parseInt(prompt("ingrese el numero: "));
console.log(filtrarPalabras(palabras));