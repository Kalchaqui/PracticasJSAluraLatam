    let nombre = prompt("Ingrese su nombre ", "Ejemplo Juan carlos" )
    let edad = prompt("Ingrese su edad", "18" )
    let materiaProgramacion = prompt("Ingrese la materia de programación que le gusta", "Ejemplo JavaScript" )

      alert(`Su nombre es:  ${nombre} Su edad:  ${edad} Le gusta la materia:  ${materiaProgramacion} `);
let op1 = "1";
let op2 = "2";
      let respuesta = prompt (`¿Te gusta estudiar ${materiaProgramacion}? Responde con el número 1 para SÍ o 2 para NO.`)
if(respuesta == "1"){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
} else if(respuesta == "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}