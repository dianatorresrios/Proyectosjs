//PUNTO UNO//
let respuesta = prompt("¿Eres bellisimo/a?");

if (respuesta === "sí") {
  console.log("Ciertamente");
} else if (respuesta === "no") {
  console.log("No te creo");
} else {
  console.log("Lo siento, no entendí tu respuesta");
}

//PUNTO DOS//
// Pedimos al usuario que ingrese un número
const numero = prompt('Ingresa un número:');

// Convertimos el valor ingresado a un número entero
const entero = parseInt(numero);

// Verificamos si el número es divisible por dos
if (entero % 2 === 0) {
    alert(`${entero} es divisible entre 2`);
} else {
    alert(`${entero} no es divisible entre 2`);
}

//PUNTO TRES//
var num = prompt("Ingresa un número");
if (num % 2 == 0) {
  alert(num + " es par");
} else {
  alert(num + " no es par");
}
  //PUNTO CUATRO//
   
let numCliente = prompt('Por favor, ingrese su número de cliente:');

if (numCliente === '1000') {
  console.log('Felicitaciones, ganaste un premio');
} else {
  console.log(`Lo sentimos, su número de cliente es ${numCliente}. Sigue participando!`);
}

//PUNTO CINCO//
// Pedir al usuario que ingrese dos números
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

// Convertir los números a tipo numérico
num1 = Number(num1);
num2 = Number(num2);

// Verificar cuál de los dos números es menor
if (num1 < num2) {
  console.log("El primer número es menor: " + num1);
} else {
  console.log("El segundo número es menor: " + num2);
}

//PUNTO SEIS//

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

if (num1 > num2 && num1 > num3) {
  console.log(`El número más grande es ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`El número más grande es ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`El número más grande es ${num3}`);
} else {
  console.log("Hay dos o tres números iguales");
}

//PUNTO SEPTIMO//
let day = prompt("Ingresa un día de la semana");

if (day === "lunes") {
  console.log("Buen comienzo de semana");
} else if (day === "viernes") {
  console.log("Feliz viernes");
} else if (day === "sábado" || day === "domingo") {
  console.log("Buen fin de semana");
} else {
  console.log("El día ingresado no es válido");
}

//PUNTO OCTAVO//
// Pedimos al usuario que ingrese una calificación
let calificacion = parseInt(prompt("Ingresa tu calificación (entre 1 y 10):"));

// Comprobamos si la calificación está dentro del rango correcto
if (calificacion >= 1 && calificacion <= 10) {

  // Imprimimos un mensaje dependiendo de la calificación ingresada
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else {
    console.log("Excelente");
  }

} else {
  console.log("Error: la calificación debe estar entre 1 y 10");
}










    
    

    
