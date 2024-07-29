//Contar Caracteres

function contarCaracter(texto,caracter){
    let suma = 0
    for (let i=0; i<texto.length; i++){
        if(caracter===texto[i]){
            suma=suma+1
        }
        
    }
    return suma;
}

let texto= prompt("Ingrese un texto: ");
let caracter = prompt("Ingrese un caracter: ")
texto.toLocaleLowerCase();
caracter.toLocaleLowerCase();

console.log(contarCaracter(texto,caracter));