//Concatenación de Arrays
let array1 = [1, 2, 3];
let array2 = [5,7,9];

function concatenarArray(array1,array2){
    let nuevoArray = [];
    for (let i=0; i<array1.length; i++){
        nuevoArray.push(array1[i]); 
    }
    
    for (let i=0; i<array2.length; i++){
        nuevoArray.push(array2[i]); 
    }
    return nuevoArray;
}

console.log(concatenarArray(array1, array2));