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
- Guardar el nombre de usuario en una variable
- Guardar el apellido en una variable
- Tranformar el nombre a minusculas y guardar en una variable
- Transformar el apellido a mayusculas y guardarlo en una variable
- Juntar el nombre y apellidos transformados en una cadena y la guardo en una variable
- Devolver el texto como resultado

*/

// funcion
function nameFormatted(name, lastName) {
    let nameTransformed = name.toLowerCase()
    let lastNameTransformed = lastName.toUpperCase()
    let textJoined = `${nameTransformed} ${lastNameTransformed}`
    return textJoined 
}


let name ="Fernanda"
let lastName = "Palacios"

console.log(nameFormatted(name, lastName))

// Declaracion




/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

let nameComplete = "Fernanda" // 3

// [e, a, a]
// null

let vowels = nameComplete.match(/[aeiou]/gi) // arreglo de esas vocales

console.log('vocales: ', vowels,vowels.length)

// let numbers = nameComplete.match(/[0123456789]/gi)


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
- Tener el primer string en una variable
- Tener el segundo string en una variable
- Tener la longitud del primer string en una variable
- Tener la longitud del segundo string en una variable
- Comparar los string

- Si longitud del primer string es mayor que el segundo string
    - mandar el mensaje -> "El primer string es mas largo"
- de lo contrario Si El segundo es mayor al primer string
    - mandar el mensaje -> "El segundo string es mas largo"
- de lo contrario 
    - mandar el mensaje -> "Ambos string son iguales"
*/

// declaracion
function compareStrings(string1, string2) {
    let lengthString1 = string1.length
    let lengthString2 = string2.length
    // let result
    if(lengthString1 > lengthString2) {
        return "El string1 es mayor"
    }else if(lengthString2 > lengthString1) {
        return "El string2 es mayor"
    }else {
        return "Ambos son iguales"
    }
}

// ejecutar la funcion
console.log(compareStrings("Some String", "This is a string more large"))




/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/




/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.

    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/

/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"

    "suma", 20,10 -> La suma de 20 y 10 es 30
*/


function operations(numero1, numero2, operation) {
    let result
    switch (operation) {
        case "suma": 
            result = `El resultado de la operacion "${operation}" de los numeros es: ${numero1 + numero2}`
            break;
        case "resta":
            result = `El resultado de la operacion "${operation}" de los numeros es: ${numero1 - numero2}`
            break;
        case "multiplicacion":
            result = `El resultado de la operacion "${operation}" de los numeros es: ${numero1 * numero2}`
            break;
        case "division":
            result = `El resultado de la operacion "${operation}" de los numeros es: ${numero1 / numero2}`
            break;
        default:
            result = "No existe esta operacion"
            break;
    }
    return result
}

let operationChoiced = prompt("ingresa que operacion quieres realizar \n opcion1=suma \n opcion1=suma \n opcion1=suma")
let number1 = parseInt(prompt("ingresa el valor de numero 1"))
let number2 = parseInt(prompt("ingresa el valor de numero 2")) //convertir de string a un entero

console.log(operations(number1, number2, operationChoiced))


/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 

input: "abcdefg"
output: "AbCdEfG"

*/

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/
