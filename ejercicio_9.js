//Multiplicar Elementos de un Array
array=[1,2,3,4,5,6,7,8,9,10]
function multiplicarArray(array,multiplicador){
    nuevoArray=[];
    for (let i=0; i<array.length; i++){
        nuevoArray.push(array[i]*multiplicador);
    }
    return nuevoArray;
}

let multiplicador = parseInt(prompt("Ingrese un numero"));

let resultadoArray = multiplicarArray(array, multiplicador);

console.log(resultadoArray);