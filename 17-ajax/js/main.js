

const getUsers = () => {
    const xhr = new XMLHttpRequest()

    // console.log(xhr)
    
    // Agregando el listener para ver el estado de mi peticion
    xhr.addEventListener('readystatechange', () => {
        // valida que la peticion se completo
        if(xhr.readyState === 4) {
            // Validando en status
            if(xhr.status >= 200 && xhr.status <= 299) {
                console.log(xhr.status)
                let responseAjax = xhr.responseText
                console.log(responseAjax)
                let responseParsed = JSON.parse(responseAjax)
                console.log(responseParsed)
                // 
                printList(responseParsed)
            }else {
                console.log("Ocurrio un error: ", xhr.status, "Not Found")
            }
            
            // JSON.parse() // convierte de un string a un objeto valido de js
            // JSON.stringify() // Convierte un objeto de js a un string
        }
    })
    
    // instruccion que me me permite abrir la peticion
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true)
    
    xhr.send()    
}

getUsers()

/*
Paso 1 - Crear una instacia de mi objeto XMLHttpRequest
paso 2 - Agregar el listener que me permita estar al tanto de los cambios de mi peticion
paso 3 - instruccion que me me permite abrir la peticion
paso 4 - Enviar la peticion

*/

const printList = (usersArray) => {
    let ol = document.querySelector("#list-users")
    usersArray.forEach((user) => {
        let {name, website} = user
        let li = document.createElement("li")
        let text = `Nombre: ${name} - WebSite: ${website}`
        li.textContent = text
        ol.appendChild(li)
    })
}