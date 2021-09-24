

let h1 = document.createElement("h1")
let text = document.createTextNode("Hola Mundo")

// elemento.appendChild(child)
h1.appendChild(text)
console.log(h1)

document.body.appendChild(h1)


// 
let namesArray = [
    "Elias",
    "Pao",
    "Nan",
    "Adolfo"
]

let article = document.createElement("article")



let ul = document.createElement("ul")

namesArray.forEach(name=> {
    let li = document.createElement("li")
    let text = document.createTextNode(name)

    li.appendChild(text)
    ul.appendChild(li)
})

article.appendChild(ul)


document.body.appendChild(article)


let footer = document.createElement("footer")

let p = document.createElement("p")
let textDerechos = document.createTextNode("Todos los derechos reservados")

p.appendChild(textDerechos)
// <p>Todos los .....</p>

// <footer></footer>
footer.appendChild(p)

document.body.appendChild(footer)


// 

