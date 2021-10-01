
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

// let buttons = document.querySelectorAll(".btn-test")
// console.log(buttons)

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (event)=> {
//         console.log("clicked..")
//         console.log(event)
//         console.log(event.target) // elemento - button
//         console.log(event.target.id)
//         let id = event.target.id
//         id === "btn-restar"
//             ? number--
//             : number++
//         counter.textContent = number
//     })
// })

let kodersArray = []

// https://api-13va-default-rtdb.firebaseio.com/.json

const createKoder = (koderObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
                getKoders()
            }
        }
    })

    // yo construimos la peticion
    xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json", true)

    // Enviamos la peticion
    xhr.send(JSON.stringify(koderObject))
}

const getKoders = () => {
    kodersArray = []
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                
                let response = xhr.responseText
                let kodersObject = JSON.parse(response)
                console.log(kodersObject)
                // for (const key in kodersObject) {
                //     console.log(key)
                //     console.log(kodersObject[key])
                //     let koderObject = kodersObject[key]
                //     // koderObject.id = key
                //     kodersArray = [...kodersArray, {...koderObject, id:key}]
                // }
                // console.log("Keys")
                // console.log(Object.keys(kodersObject))
                // console.log("Values")
                // console.log(Object.values(kodersObject))
                // console.log("Entries")
                // console.log(Object.entries(kodersObject))
                if(kodersObject) {
                    kodersArray = Object.keys(kodersObject).map((key) => {
                        let koderObject = kodersObject[key]
                        return {...koderObject, id:key}
                    })
                    printTable()
                }else {
                    printTable()
                    console.log("No hay koders u.u")
                }
                
            }
        }
    })
    xhr.open("GET", "https://api-13va-default-rtdb.firebaseio.com/.json", true)

    xhr.send()
}

const deleteKoder = (idKoderToDelete) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
                getKoders()
            }
        }
    })
    xhr.open("DELETE", `https://api-13va-default-rtdb.firebaseio.com/${idKoderToDelete}.json`, true)

    xhr.send()
}

document.getElementById("btn-agregar").addEventListener("click", (event)=> {
  event.preventDefault()
  let newKoder = {}
  document.querySelectorAll("form#added-koders input").forEach((input) => {
    //   console.log(input.name, input.value)
      
      if(!input.value) {
          newKoder = null
      }else {
        newKoder[input.name] = input.value
      }
      console.log(newKoder)
  })
  if(!newKoder) return alert("Camplos obligatorios..")
  createKoder(newKoder)
})


const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}

const clickToRemoveKoder = (event) => {
    console.log("Eliminando... jeje")
    // Eliminar del array
    let idKoder = event.target.dataset.koderId
    deleteKoder(idKoder)
}

const printTable = () => {
    let tBody = document.getElementById("list-koders")

    // tBody.innerHTML = ""

    // 
    // console.log(tBody.children)

    // mientras tBody tanga elementos va a eliminar el ultimo hijo
    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((koder, index) => {
        let {name, lastName, id} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.setAttribute("data-koder-id", id)

        button.addEventListener("click", clickToRemoveKoder)

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}

// printTable()

getKoders()


