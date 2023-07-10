/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */
function parImpar(numero) {
  numero = prompt("Introduzca el numero");
  if (numero % 2 === 0) {
    console.log("El número " + numero + " es par");
  } else {
    console.log("El número " + numero + " es impar");
  }
}
parImpar();
parImpar();

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.*/
function mayorOigual(a, b) {
  a = prompt("Ingrese un número");
  b = prompt("Ingrese otro número");

  if (a > b) {
    console.log("El número " + a + " es mayor que " + b);
  } else if (a < b) {
    console.log("El número " + b + " es mayor que " + a);
  } else {
    console.log(a + " es igual que " + b);
  }
}
mayorOigual();

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.*/
function multiploDeCinco(num) {
  num = prompt("Ingrese el numero");
  if (num % 5 === 0) {
    console.log(num + " es múltiplo de 5");
  } else {
    console.log(num + " no es múltiplo de 5");
  }
}
multiploDeCinco();

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/

function numerosEnLista(numero) {
  numero = prompt("Ingrese su numero");
  for (let i = 0; numero >= 0; numero--) {
    console.log(numero);
  }
}
numerosEnLista();

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/
function palabraNum(pedirPalabra, pedirNumero) {
  pedirPalabra = prompt("Ingrese una palabra:");
  pedirNumero = prompt("Ingrese un numero");
  for (let i = 0; pedirNumero >= 0; pedirNumero--) {
    console.log(pedirNumero + "-" + pedirPalabra);
  }
}
palabraNum();

/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/
let tiposDeVino = ["rosado", "blanco", "tinto", "viejo"];
function myArray(vinos) {
  for (let i = 0; i < vinos.length; i++) {
    console.log(vinos[i]);
  }
}
myArray(tiposDeVino);

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/
let diezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrayNumeros(numeros) {
  for (let i = 0; i < numeros.length; i++)
    if (i !== 4) {
      console.log(numeros[i]);
    }
}
arrayNumeros(diezNumeros);

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/
let nros = [30, 12, 5];
let multiplicador = 2;

function multiplicacion(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    let resultado = num1[i] * num2;
    console.log(resultado);
  }
}

multiplicacion(nros, multiplicador);
