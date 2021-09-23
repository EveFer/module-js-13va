

let objetoPersona = {
    name: 'John',
    lastName: "Arevalo"
}

console.log(objetoPersona)

// funcion constructora

// version 1
// function Persona (name, lastName, birthDate) {
//     this.name = name
//     this.lastName = lastName
//     this.birthDate = birthDate
//     this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.` 
//     this.saludar = () => {
//         console.log(`Hola soy, ${this.name} ${this.lastName}`)
//     }
// }
// console.log(this)



function Persona (name, lastName, birthDate) {
    this.name = name
    this.lastName = lastName
    this.birthDate = birthDate
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.` 
}

// Agregar un método al prototipo Persona
Persona.prototype.saludar = function() {
    console.log(`Hola soy, ${this.name} ${this.lastName}`)
}


let persona1 = new Persona("Elias", "Herrera", "1992/07/30")
let persona2 = new Persona("Fanny", "Alvarez", "1991/11/01")

console.log(persona1)
console.log(persona2)
persona1.saludar()
persona2.saludar()

persona1.name = "Adrian"
console.log(persona1)

// Herencia
// koder
// Generacion
// nivel

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Mauro', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]

/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:

Prototipo de tipo koder

Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

---
Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python

*/



/*
Práctica:

Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:
    nombre
    description
    precio de costo
    clasificación
    porcentaje de Ganancia
    precio de venta
    precios de los ultimos 6 meses en una colección [23,12,45,56,12,10]
    Cantidad vendidas en la ultima semana
    Fecha de Caducidad
    
💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:

- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los diás restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses

💫 Una vez obtenido la colleción de Productos obtener lo siguiente:

- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 días proximas a caducar
Happy Koding 🚀
*/