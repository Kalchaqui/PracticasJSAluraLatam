// Generar un número aleatorio entre 0 y 10
const numeroAdivinacion = Math.floor(Math.random() * 11); 

let intento = "";  // Variable para almacenar el número ingresado por el usuario
let acerto = false; // Variable que indica si el usuario adivinó el número

// Bucle que permite al usuario intentar adivinar hasta 3 veces
for (let contador = 0; contador < 3; contador++) {    
    intento = prompt("Intenta adivinar el número del 0 al 10:"); // Pedir al usuario que ingrese un número

    if (intento == numeroAdivinacion) {  // Comparar la entrada del usuario con el número aleatorio
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`); // Mensaje de acierto
        acerto = true; // Marcar que el usuario acertó
        break; // Salir del bucle porque ya adivinó
    }

    alert("¡Incorrecto!"); // Mensaje cuando el usuario falla
}

// Si el usuario no adivinó en los 3 intentos, mostrar el número correcto
if (!acerto) {
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}
