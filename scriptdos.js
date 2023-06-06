//PUNTO NOVENO//

// Pedimos al usuario que ingrese el topping deseado
var topping = prompt("¿Qué topping deseas para tu helado? (oreo, kitkat o brownie)");

// Definimos el precio base del helado
var precioBase = 50;

// Definimos el precio del topping según lo que ha elegido el usuario
var precioTopping;
if (topping === "oreo") {
    precioTopping = 10;
} else if (topping === "kitkat") {
    precioTopping = 15;
} else if (topping === "brownie") {
    precioTopping = 20;
} else {
    // Si el usuario no ha elegido un topping válido, le informamos y asignamos 0 como precio del topping
    alert("Lo siento, no tenemos ese topping disponible.");
    precioTopping = 0;
}

// Calculamos el precio total del helado
var precioTotal = precioBase + precioTopping;

// Mostramos el precio total al usuario
alert("El precio de tu helado con topping " + topping + " es de " + precioTotal + " MXN.");


//PUNTO DECIMO//
// Preguntamos si tiene beca y definimos los descuentos correspondientes
let beca = prompt("¿Cuenta con alguna beca? Ingrese Facebook, Google o Jesua. Si no tiene, escriba No");
let descuento = 0;
switch (beca.toLowerCase()) {
  case "facebook":
    descuento = 0.2;
    break;
  case "google":
    descuento = 0.15;
    break;
  case "jesua":
    descuento = 0.5;
    break;
  default:
    break;
}

// Calculamos el precio mensual con descuento
let precioMensual = 0;
switch (eleccion.toLowerCase()) {
  case "course":
    precioMensual = precioCourse * (1 - descuento);
    console.log(`El precio mensual con descuento para Course es: ${precioMensual} MXN`);
    console.log(`El gasto total para Course es: ${precioMensual * duracionCourse} MXN`);
    break;
  case "carrera":
    precioMensual = precioCarrera * (1 - descuento);
    console.log(`El precio mensual con descuento para Carrera es: ${precioMensual} MXN`);
    console.log(`El gasto total para Carrera es: ${precioMensual * duracionCarrera} MXN`);
    break;
  case "master":
    precioMensual = precioMaster * (1 - descuento);
    console.log(`El precio mensual con descuento para Master es: ${precioMensual} MXN`);
    console.log(`El gasto total para Master es: ${precioMensual * duracionMaster} MXN`);
    break;
  default:
    console.log("Lo siento, opción no válida");
    break;
}
//PUNTO ONVE//
// Pedimos al usuario que nos ingrese los datos necesarios
let vehiculo = prompt("¿Qué tipo de vehículo es? (Escriba coche, moto o autobús)");
let kmRecorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

// Definimos las variables necesarias para realizar los cálculos
let precioKm, extra;
let totalPagar = 0;

// Calculamos el precio por kilómetro según el tipo de vehículo
if (vehiculo === "coche") {
  precioKm = 0.20;
} else if (vehiculo === "moto") {
  precioKm = 0.10;
} else if (vehiculo === "autobús") {
  precioKm = 0.5;
}

// Calculamos el extra según la cantidad de litros consumidos
if (litrosConsumidos <= 100) {
  extra = 5;
} else {
  extra = 10;
}

// Realizamos el cálculo total del costo a pagar
totalPagar = (precioKm * kmRecorridos) + extra;

// Imprimimos el resultado
console.log(`El total a pagar por el recorrido en ${vehiculo} es: $${totalPagar}`);
