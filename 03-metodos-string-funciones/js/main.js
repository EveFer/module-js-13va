// string
// Dato primitivo
let nombre = "Fernanda"
let apellido = 'Palacios'
let saludo = new String("Hola Amigos")

// concatenar
let nombreCompleto = nombre + " " + apellido

let saludoConMiNombre = "Hola Mi nombre es " + nombre + " " + apellido

console.log(saludoConMiNombre)
console.log(nombreCompleto)

// Template strign

// acento invertido | backtick

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)

// primitive wrapper Object
let someString = "Hola a todos"
console.log(someString.length)





// Funciones
console.log("---------Funciones-------------")
let numberOne = 45
let numberTown = 20

let suma = numberOne + numberTown

// console.log(suma)

let resultado = 100

let someResult = 50
// console.log('variable externa: ',someResult)

// Definición de la funcion
function sumaDeDosNumeros(numero1, numero2) {
    // console.log(numero1, numero2)
    let resultado = numero1 + numero2

    return resultado
}

let resultSuma = sumaDeDosNumeros(100, 20)
console.log(resultSuma) //


function evaluarSiEsMayor(numero1, numero2) {
   let resultado = numero1 > numero2 ? "El primero es mayor" : "El segundo es mayor"
   return resultado
}

let nuevoResultado = evaluarSiEsMayor(10,20)
console.log(nuevoResultado)


// Ejercicios

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas

    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"

    Output: "fernanda PALACIOS VERA"
*/

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"

    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario

*/

/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo

    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

