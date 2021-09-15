
// const personObject = {
//     name: "Fernanda",
//     lastName: "Palacios",
//     gender: "Mujer",
//     age: 25,
//     isSingle: true,
//     hobbies: [
//         "ver anime",
//         "Programar"
//     ],
//     socialNetwork: {
//         github: "@EveFer",
//         facebook: "Fernanda Palacios"
//     },
//     saludar: function () {
//         return "Hola koders!!! ^^"
//     }
// }

// console.log(personObject)

// // como accedo a las propiedades de objeto

// // por medio de la notacion de punto
// console.log(personObject.name)
// console.log(personObject.age)


// // notacion de corchetes
// console.log(personObject["hobbies"])


// // como agrego una propiedad

// personObject.birthDate = "1996/06/24"
// personObject.zodial = "Cancer"

// console.log(personObject)

// console.log(personObject.hobbies[0])

// console.log(personObject.socialNetwork.github)

// // ejecutar un método
// console.log(personObject.saludar()) 

// personObject.hobbies.push("Ver series")
// personObject.socialNetwork.twitter = "EveFer"
 
// let nameUpper = personObject.name.toUpperCase()

// personObject.name = nameUpper
// console.log(personObject)

// // "Hola soy {name} {lastName} y tengo {age}"

// let concatName = `Hola soy ${personObject.name} ${personObject.lastName} y tengo ${personObject.age} años`

// console.log(concatName)

// let namePerson = personObject.name
// let lastNamePerson = personObject.lastName
// let agePerson = personObject.age

// console.log(`Hola soy ${namePerson} ${lastNamePerson} y tengo ${agePerson} años`)


// // destructuring assingment

// // {Que propiedades quiero obtener} = De que objeto las voy a obtener ?
// let { name, lastName, age } = personObject

// console.log(name)
// console.log(lastName)
// console.log(age)

// console.log(`Hola soy ${name} ${lastName} y tengo ${age} años`)

// // crear

// let firstName = "Emi"
// let generation = 13
// let bootcamp = "JavaScript"

// let koderObject = {
//     firstName,
//     generation,
//     bootcamp
// }

// console.log(koderObject)


// // Destructuring with array

// let arrayColors = ["Purple", "orange", "blue"]

// let purpleColor = arrayColors[0]

// console.log(purpleColor)


// let [myColor1, myColor2, myColor3] = arrayColors

// console.log(myColor1)
// console.log(myColor2)
// console.log(myColor3)


// Ejercicios

let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]

/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]

*/


// const getArrayWithObject = (arrayMentors) => {
//     let newArrayMentors = []
//     for (let i = 0; i < arrayMentors.length; i++) {
//         // console.log(arrayMentors[i])
//         let name = arrayMentors[i][0]
//         let lastName = arrayMentors[i][1]
//         let mentorObject = { name, lastName }
//         newArrayMentors.push(mentorObject)
//     }
//     return newArrayMentors
// }

// let otherArrayMentors = getArrayWithObject(dataArray)

// // console.log(otherArrayMentors)

// let namesArray = [
//     "Elias",
//     "Pao",
//     "Pablo",
//     "Nancy"
// ]

// namesArray.forEach((name, index) => {
//     console.log(`el nombre es: ${name} en la posicion ${index}`)
// })

// let arrayMentors = [
//     {
//         name: "Fernanda",
//         lastName: "Palacios"
//     },
//     {
//         name: "Alfred",
//         lastName: "Altamirano"
//     },
// ]

// arrayMentors.forEach((mentor, index)=> {
//     console.log(mentor.name)
//     console.log(index)
// })


// Ejercicio

let mentorsArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
            {
                signature:  "HTML",
                score: 10
            },
        ]
    }
]


/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)

- Obtener el promedio indivual de cada mentor

- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"

- Obtener la lista de mentores cuyo promedio sea mayor a 9.5

*/

/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)

html
css
js
*/


const getAverageAsignatures = arrayMentors => {
    let htmlAccum = 0
    let cssAccum = 0
    let jsAccum = 0
    let mentorsQty = arrayMentors.length
    arrayMentors.forEach((mentorObject, index) => {
        // console.log(mentorObject)
        mentorObject.scores.forEach((scoreMentor)=> {
            // console.log(scoreMentor)
            let signature = scoreMentor.signature
            let score = scoreMentor.score

            switch(signature) {
                case "HTML": 
                    htmlAccum += score
                    break;
                case "CSS":
                    cssAccum += score
                    break;
                case "JS":
                    jsAccum += score
                    break;
                default:
                    console.log("Asignatura no encontrada")
            }

        })
    })

    let avgHtml = htmlAccum / mentorsQty
    let avgCss = cssAccum / mentorsQty
    let avgJs = jsAccum / mentorsQty

    let objectAvg = { avgHtml, avgCss, avgJs}
    return objectAvg
}

//invocar
let avgSignatures = getAverageAsignatures(mentorsArray)
console.log(avgSignatures)

/*
- Obtener el promedio indivual de cada mentor
*/

const getAvgForMentor = scoresArray => {
    let accumMentor = 0
    let scoresQty = scoresArray.length
    scoresArray.forEach((scoreMentor)=> {
        let valueScore = scoreMentor.score
        accumMentor += valueScore
    })
    let avgMentor = accumMentor / scoresQty
    return avgMentor
}

/*
arrayAverage = [
    { 
        name: "",
        average: 9.0
    }
]

*/


const getAvgMentors = arrayMentors => {
    let arrayAverageMentors = []
    arrayMentors.forEach((mentor)=> {
        let avg = getAvgForMentor(mentor.scores)
        let objectMentor = { 
            name: mentor.name, 
            average: avg
        }
        arrayAverageMentors.push(objectMentor)
    })
    return arrayAverageMentors
}

let avgMentors = getAvgMentors(mentorsArray)

console.log(avgMentors)

/*
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
*/

let arrayStringsMentors = []

avgMentors.forEach((mentor)=> {
    // destructuring
    let { name, average,  } = mentor
    arrayStringsMentors.push(`Mi nombre es ${name} y mi promedio es ${average}`)
})

console.log(arrayStringsMentors)

// - Obtener la lista de mentores cuyo promedio sea mayor a 9.5

let mentorsTop = []

avgMentors.forEach((mentor)=> {
    mentor.average >= 9.5 ? mentorsTop.push(mentor) : null
})
console.log(mentorsTop)