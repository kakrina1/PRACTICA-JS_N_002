//Manipulación de Arrays
let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i<array.length; i++) {
    console.log(array[i]);
}

function sumaArray(arrayNumeros){
    suma=0;
    for (let i = 0; i < arrayNumeros.length; i++){
        suma+=arrayNumeros[i];
    }
    return suma;
}

console.log(sumaArray(array));

