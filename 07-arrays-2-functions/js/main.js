// const arrayKoders = [
//     "Fanny Alvarez",
//     "Elias Herrera",
//     "Kraken Perez Salinas",
//     "Clau Rodriguez"
// ]
  
//   function addKoder() {
//     let koder = prompt("Agrega el nombre del koder")
//     arrayKoders.push(koder)
//   }
  
//   function printKoders(array) {
//     for(let i = 0; i < array.length; i++) {
//       console.log(`koder ${i + 1}: ${array[i]}`)
//     }
//   }

//   function koderWithInitials() {
//       let arrayKodersWithInitials = []
//       for(let i = 0; i < arrayKoders.length; i++) {
//         //   console.log(arrayKoders[i])
//           let arrayWords =  arrayKoders[i].split(" ")
//           let initials = getInitials(arrayWords)
//         //   console.log(initials)
//           let nameComplete = `${arrayKoders[i]} ${initials}`
//           arrayKodersWithInitials.push(nameComplete)
//       }
//       printKoders(arrayKodersWithInitials)
//   }

//   function getInitials(wordsArray) {
//     let initials = ""
//     for(let i = 0; i < wordsArray.length; i++) {
//       initials += wordsArray[i].charAt(0).toUpperCase() + ". "
//     }
//     // "F. A."
//     return initials
//   }



function suma(a, b) {
    return a + b
}

let resultSuma = suma(3,5)

console.log(resultSuma)


let addition = function (a, b) {
    return a + b
}

console.log(addition(10, 15))


const resta = (a,b) => {
    return a - b
}

console.log(resta(20, 5))
let resultResta = resta(10, 5)

console.log("resultResta")
console.log(resta(20, 2))

/*

*/

const arrayKoders = [
        "Fanny Alvarez",
        "Elias Herrera",
        "Kraken Perez Salinas",
        "Clau Rodriguez"
    ]

/*
[
    ["Fanny", "Alvarez"],
    ["Elias", "Herrera"],
    ["Kraken", "Perez", "Salinas"],
    ["Clau", "Rodriguez"]
]
*/

const splitKoders = (array) => {
    let splittedNames = []
    for(let i= 0; i < array.length; i++) {
        splittedNames.push(array[i].split(" "))
    }
    return splittedNames
}



function printKoders(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let someArray = splitKoders(arrayKoders)
printKoders(someArray)

console.log("-------")

// Pasamos como argumento el valor del retorno de la funcion
printKoders(splitKoders(arrayKoders))



/*
Si solo recibe un parametro
podemos los omitir parentesis
*/
// const printKoders = array => {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

/*
Cuando recibamos 2 o más parametros
es necesario agregar los parentesis
*/
// const multiplicacion = (a, b) => {
//     return a * b
// }

/*
Return Implicito
Si lo que ejecutando en mi funcion
se puede reducir a una sola linea,
no necesitaremos las llaves, ni el return

*/

const multiplicacion = (a, b) => a * b

const resultMulti = multiplicacion(10, 2) 
console.log(resultMulti)

/*
Ejercicio 1:
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length

- Funcion que reciba el indice para imprimir el nombre
*/

let koders = [
    "Fanny Alvarez",
    "Elias Herrera"
]

/* 
Ejercicio 2:
función que reciba un array, un número, y debe de imprimir 
cada uno de los items del array con los caracteres limitados al número ingresado 
*/

/*
Ejercicio 3:

Función que me permita ingresar el nombre de un array, 
y contar cuántos items tiene, si el array no existe, 
debe enviar un prompt que diga "tu array no existe"

*/