//PUNTO UNO//
// Creamos un array vacío
let numerosAzar = [];

// Generamos 10 números al azar y los agregamos al array
for (let i = 0; i < 10; i++) {
  numerosAzar.push(Math.floor(Math.random() * 100) + 1);
}

// Mostramos el array en consola
console.log(numerosAzar);

//PUNTO DOS//

let palabras = prompt("Ingrese varias palabras separadas por coma:");
let arrayPalabras = palabras.split(",");
console.log(arrayPalabras);

//PUNTO TRES//

const arr = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
arr.sort((a, b) => a - b);
console.log(`Arreglo ordenado de menor a mayor: ${arr}`);

// Obtener el número menor y mayor del arreglo
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(`Número menor del arreglo: ${min}`);
console.log(`Número mayor del arreglo: ${max}`);