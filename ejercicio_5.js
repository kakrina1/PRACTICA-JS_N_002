//Promedio de Números
let  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return promedio;
}

let promedio = calcularPromedio(numeros);
console.log(promedio);