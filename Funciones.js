//FUNCIONES, es un bloque de codigo que realiza una tarea especifica, hay que invocarlas, 

function myfunc(){ //estructura por defecto de una funcion
    console.log("Hola mi funcion")

}

myfunc()//la invoco a la funcion simple

//Funcion con parametros
function myfuncParam(name){ 
    console.log(`Hola ${name}`)
}
myfuncParam("kalcha")

//funciones anonimas
//aRROW FUNCTION

const myfunc3 = (name) =>{
    console.log(`Hola ¿Como estas? ${name}`)
}
myfunc3("Raul")

//Parametros
function suma(a, b){ 
console.log(a+b)
}
suma(5, 300)

//Retorno de valores
function multi(a, b){

    return a*b
    //aca no quiero mostrar por terminal quiero retornarle el resultado al usuario (return) 
    //lo que muestra despues del return es lo que va a ver el usuario
}
// multi(5, 20) no se muestra en terminal
console.log(multi(5, 20)) //muestra en pantalla