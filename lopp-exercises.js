/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
//for(i=1; i<=20; i++){
  //  console.log(`numeros: ${i}`)
//}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

//for(i=0; i<100; i++){
  //  console.log(`numeros: ${i+1}`)
//}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

//for(i=1; i<50; i++){
//console.log(`numeros: ${i*2}`)
//}
//breack y Continue
//for (let i = 2; i <= 50; i += 2) {
  //  console.log(`Hola Kalcha: ${i}`);
//}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

//const nombres = ["ana", "Carlos", "Beatriz", "David", "Elena"]

//for(let i=0; i<nombres.length; i++){
  //  console.log(nombres[i])
//}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
//const numeros = [2, 20, 50, 17, 38]
//let producto = 1// Inicializamos en 1 porque multiplicar por 0 daría siempre 0
//for (let i = 0; i< numeros.length; i++) {
  //  producto *= numeros[i]; // Multiplicamos cada número
    //  console.log(`La multiplicación es: ${producto}`);
  //}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeros = [2,5,6,8,1,23,54,7867,12,43,67,1,5,7,]
const mayores10 = []
for (let i=0; i<numeros.length; i++){
    if(numeros[i]>10){

mayores10.push(numeros[i])

    }

}
console.log(`Los mayores a 10 son:${mayores10}`)
