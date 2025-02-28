

let eleccion = parseInt(prompt("Hola!! quiere seguir hacia el área de Front-End seleccione 1 o seguir si quiere seguir hacia el área de Back-End seleccione 2."))

if(eleccion === 1){
    alert("¡Muy bien! Vamos con FRONT-END!, Vamos a la siguiente elección")
    eleccion = parseInt(prompt("Si elegís React selecciona 3, si elegís Vue selecciona 4"))
    if(eleccion === 3){
        alert("En Front, Vamos con React")
    
        
    } else if(eleccion === 4) {
      alert("En Front, Vamos con Vue")
    } else {
        alert("Indique una opción válida entre 3 y 4")
    }
    
    
} else if(eleccion === 2) {
  alert("Correcto!! Vamos con BACK-END, Vamos a la siguiente elección")
  eleccion = parseInt(prompt("Si elegís C# selecciona 5, si elegís Java selecciona 6"))

  if(eleccion === 5){
      alert("En Back, Vamos con C#")
  } else if(eleccion === 6) {
    alert("En Back, Vamos con Java")
  }else {
    alert("Indique una opción válida entre 5 y 6")
}
}

