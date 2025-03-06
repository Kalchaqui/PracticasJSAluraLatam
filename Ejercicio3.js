/* 
Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
*//* 
Si está en el área de Front-End, si quiere aprender React o aprender Vue. 
Si está en el área de Back-End, podrá aprender C# o aprender Java.
 */

 //(const) se usa para declarar variables cuyo valor no cambiará después
const area = prompt("¿Quieres seguir en el área de 'Front-end' o 'Back-end'? Escribe el nombre del área:");
let lenguaje = ""; //puedo agregar cualquier valor string,  cambia dependiendo de la opción que elija el usuario.
if(area === "Front-end" ){
  lenguaje = prompt("¿Quieres aprender React o Vue?").toLowerCase();//No hace diferencias entre mayúsculas/minúsculas
} else if (area ==="Back-end" ){
  lenguaje = prompt("¿Quieres aprender C# o Java?").toLowerCase();//No hace diferencias entre mayúsculas/minúsculas
}else {
  alert("¡No ingresaste un área válida!");
}
/* 
Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o 
desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
 */
const especialidadFullStack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack").trim();
if(especialidadFullStack == 1){
  alert(`¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!`);
}else if (especialidadFullStack == 2){
  alert(`¡Es hora de aprender otros lenguaje además de: ${lenguaje} si quieres convertirte en Fullstack!`);
}else {
  alert("No ingresaste ningún valor válido");
}
/* 
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. 
Aquí, la persona puede responder N tecnologías, una a la vez. 
Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", 
sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, 
presenta un mensaje comentando algo sobre la tecnología ingresada.
*/
let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje ==="ok"){
  let nuevaTecnologia = prompt("Cual");//guarda la nueva tecnología en ese let
  alert(`!${nuevaTecnologia} es realmente una tecnología muy interesante`); //muestra el let
  mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}