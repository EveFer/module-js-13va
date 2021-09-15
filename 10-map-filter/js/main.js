
let numbersArray = [2,6,7,10,5];

let doubleNumbers = numbersArray.map((number, index) => number * 2)

console.log(numbersArray)
console.log('---')
console.log(doubleNumbers)

let numerosPares = numbersArray.filter((number) => {
    if(number % 2 === 0) {
        return number
    }
})

let numerosPares2 = numbersArray.filter((number) =>  number % 2 === 0)

console.log(numerosPares)