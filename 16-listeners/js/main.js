
let btnDecrementar = document.getElementById("btn-restar")
let btnIncrementar = document.getElementById("btn-sumar")
let counter = document.getElementById("counter")

let number = 0


// btnDecrementar.addEventListener("click", () => {
//     console.log("click decrementar")
//     // number -= 1
//     number--
//     console.log(number)
//     counter.textContent = number
// })

// btnIncrementar.addEventListener("click", ()=> {
//     number++
//     console.log(number)
//     counter.textContent = number
// })

let buttons = document.querySelectorAll(".btn-test")
console.log(buttons)

buttons.forEach((btn) => {
    btn.addEventListener("click", (event)=> {
        console.log("clicked..")
        console.log(event)
        console.log(event.target) // elemento - button
        console.log(event.target.id)
        let id = event.target.id
        id === "btn-restar"
            ? number--
            : number++
        counter.textContent = number
    })
})