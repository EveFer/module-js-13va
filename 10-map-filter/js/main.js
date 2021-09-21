
// let numbersArray = [2,6,7,10,5];

// let doubleNumbers = numbersArray.map((number, index) => number * 2)

// console.log(numbersArray)
// console.log('---')
// console.log(doubleNumbers)

// let numerosPares = numbersArray.filter((number) => {
//     if(number % 2 === 0) {
//         return number
//     }
// })

// let numerosPares2 = numbersArray.filter((number) =>  number % 2 === 0)

// console.log(numerosPares)



const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

/*
- Agrupar el nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/


/*
let songsMana = [
    {

    }
]

*/

const getSongsByBand = (arraySongs, bandName) => {
    let songs = arraySongs.filter((song, index) => song.band.toLowerCase() === bandName.toLowerCase())
    return songs
}

console.log(getSongsByBand(songsData, "Maná"))

/*
Obtener una lista de strings con el siguiente formato:

"La cancion {name} es de {banda}"

*/

/*
crear una funcion que me permita Obtener las canciones que contengan un criterio de busqueda

criterio: cel

[
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    }
]
*/


const searchSong = (arraySong, property, wordToSearch) => {
    const songs = arraySong.filter((song) => song[property].toLowerCase().includes(wordToSearch.toLowerCase()))
    return songs
}