//for

for(let i = 1; i <5; i++ ){
    //console.log("Hola")//lo q queres que se repita
    console.log(`hola ${i}`)
}
//Estructura para almacenar varios valores
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i=3; i<numbers.length; i++){
    console.log(`Elemonto es: ${numbers[i]}`)
}

//While
let i = 0
while(i<5){
    console.log(`Hola ${i}`)
    i++
}

//breack y Continue
for (let i=0; i<10; i++){
    if(i == 5){
        continue
    }else if(i == 6){
        break
    }
    console.log(` Hola Kalcha: ${i}`)
}