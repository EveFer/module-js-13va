console.log("Hola Koder")

console.error("Esto es un error")

console.warn("Esto es warning")

// 3 metodos interartuar con el usuario

// alert("Esto es un mensaje para loos koders!!")

// let name = window.prompt("Ingresa tu nombre")
// regresa un string

console.log(name)

// Operadores





// Aritmeticos

/*
    +
    -
    *
    /
    %
    ()
*/

let operation = 5 + (5 - 10) * 3
console.log(operation)

let division = 5 / 2
console.log(division)

let residuo = 5 % 2
console.log(residuo)

// Relacionales

/*
>
<
>=
<=
==
=== 
!=
!== (super diferente xD)
*/

console.log(8 > 9)
console.log(9 > 8)
console.log(8 >= 9)
console.log(9 >= 8)
console.log(7 < 7)
console.log(7 <= 7)

let string1 = "a"
let string2 = "b"

console.log(string2 > string1)

console.log('----------')
// Asignación

/*
= -> Asignar un valor a una variable
== -> Comparación de valores
=== -> Comparación de tipo de datos y del valor

*/
console.log(7 == 7)
console.log("7" == 7)
console.log("7" === 7)

/*

+=

*/

let number1 = 1

let suma = 5 + 10

// number1 = number1 + 5
number1 += suma
number1 *= 2
number1 /= 2
number1 -= 10

console.log(number1)

// Incremento | Decremento

console.log("--------")
let number2 = 2

console.log(number2++)

// number2++
// ++number2


// console.log(number2)

// Logicos

console.log("--------Else-if-----------")

// if(condicion) {
//     // true
// // Se hace algo
// }else {
//     // Hace alguno otra cosa
// }

let age = 17




if(age > 17){
    console.log("Eres mayor de Edad")
}else {
    console.log("Eres menor de Edad")
}

if(age <= 17) {
    console.log("Eres menor de Edad")
}else {
    console.log("Eres mayor de Edad")
}


/*
Dejenos Dormir - 0hrs 5hrs
Buenos Dias - 6hrs - 11 hrs
Buenas tardes - 12hrs - 19hrs
Buenas noches - 8hrs - 23hrs

*/

let hora = 16

if(hora >= 0 && hora <= 5) {
    console.log("Dejenme dormi....")

}else if(hora >= 6 && hora <= 11){
    console.log("Buenos días....")
}else if(hora >= 12 && hora <= 19){
    console.log("Buenas tardes..")
}else {
    console.log("Buenas noches..")
}

// Operador ternario

// (condicion) ? (verdadero) : (falso)


let edad = 24

if(age >= 18){
    console.log("Eres mayor de Edad")
}else {
    console.log("Eres menor de Edad")
}
               // condicion ? si se cumple la condicion : si no se cumple
let eresMayor = edad >= 18 ? "Eres mayor de Edad" : "Eres Menor de Edad"

console.log('Validacion desde el oper ternario: ', eresMayor)
// 

// switch

/*

domingo - 0
lunes - 1
martes - 2
miercoles -3
jueves - 4
viernes - 5 
sabado - 6

*/

let today = 6

switch(today) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        console.log("Dia invalido")
        break;
}