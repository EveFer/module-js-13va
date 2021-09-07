
let str = "kodemia"
let lengthStr = str.length

let result = ""

for(let index = 0; index < lengthStr; index++) {
    if(index % 2 === 0) { // check if Par
        result += str.charAt(index).toUpperCase()
    }else {
        result += str.charAt(index).toLowerCase()
    }
}
console.log('Input: ', str)
console.log('Output: ', result)

console.log("-------------While--------------")
result = ""
let index = 0
while(index < lengthStr) {
    if(index % 2 === 0) { // check if Par
        result += str.charAt(index).toUpperCase()
    }else {
        result += str.charAt(index).toLowerCase()
    }
    index++
}

console.log('Input: ', str)
console.log('Output: ', result)


/*
Ejercicio 1:
Deducir:

input: anaconda
output: true

input: belzeebub
output: true

input: koder
output: false

input: cerveza
output: false
*/

/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10

    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100

Imprimir todos los numeros pares que existen entre 1 y ese numero

*/

/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10

*/

/*

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********

*/

/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/

/*
Ejercicio 7:
Deducir: 

input: Hola como estas
output: holaComoEstas

input: hello Koders
output: helloKoders

*/

/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/



