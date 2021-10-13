
// xmlHttpRequest()

// let xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//     // el estado de la peticion y el estatus del response
// })

// xhr.open("METHOD", "url", true)

// xhr.send()


// AJAX con jQuery

// $.ajax({
//     method: "GET", /*|| "POST" || "PUT" || "DELETE" || "PATCH"*/
//     url: "endpoint", /*A donde hacemos la peticion */
//     data: JSON.stringify({}), /*La que se envia en el body de la peticion - POST, PUT, PATCH */
//     success: (response) => {
//         // callback para cuando la peticion sea exitosa
//     },
//     error: (error) => {
//         // callback para cuando hay un error en la peticion
//     },
//     async: true
// })


// // funciones AJAX
// const getData = () => {
//     let products
//     $.ajax({
//         method: "GET",
//         url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
//         success: response => { 
//             // console.log('response al terminar la peticion',response)
//             products = response
//         },
//         error: error => {
//             console.log(error)
//         },
//         async: false
//     })
//     // console.log(products)
//     return products
// }

// const createProduct = (productObject) => {
//     $.ajax({
//         method: "POST", 
//         url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
//         data: JSON.stringify(productObject),
//         success: (response)=> {

//         },
//         error: error => {

//         }
//     })
// }

// const updateProduct = (keyProduct, newDataProduct) => {
//     $.ajax({
//         method: "PATCH",
//         url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`, 
//         data: JSON.stringify(newDataProduct),
//         success: (response)=> {

//         },
//         error: error => {

//         }
//     })
// }
// const deleteProduct = keyProduct => {
//     $.ajax({
//         method: "DELETE", 
//         url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`,
//         success: (response) => {

//         },
//         error: error => {

//         }
//     })
// }



// Funciones DOM



// const

// variables globales
// todas funciones
// ejecucion de codigo


// Asycn: true

/*
46 - undefined
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
38 console.log('response al terminar la peticion',response)
*/

// async: false

/*
38 console.log('response al terminar la peticion',response)
46 - productos  de la base de datos
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
*/

// let products = getData()

// https://api-13va-default-rtdb.firebaseio.com/[su-nombre]/mentors.json

// sincrono




// asincrono



let myModalEdit = new bootstrap.Modal(document.getElementById('modal-edit'))

// 
const createMentor = (mentorData={name:"", phone:"", github:"", urlGithub:""}) => {
    $.ajax({
        method:"POST", 
        url: "https://api-13va-default-rtdb.firebaseio.com/fer/mentors.json", 
        data: JSON.stringify(mentorData),
        success:(response)=> {
            console.log(response)
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    })
}

const getAllMentors = () => {
    let mentors
    $.ajax({
        method:"GET", 
        url: "https://api-13va-default-rtdb.firebaseio.com/fer/mentors.json", 
        success:(response)=> {
            // console.log(response)
            mentors = response
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    })
    return mentors
}

const getAMentor = idMentor => {
    let mentor
    $.ajax({
        method:"GET", 
        url: `https://api-13va-default-rtdb.firebaseio.com/fer/mentors/${idMentor}.json`, 
        success:(response)=> {
            // console.log(response)
            mentor = response
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    })
    return mentor
}

const deleteMentor = idMentor => {
    $.ajax({
        method:"DELETE", 
        url: `https://api-13va-default-rtdb.firebaseio.com/fer/mentors/${idMentor}.json`, 
        success:(response)=> {
            console.log(response)
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    })
}

const updateMentor = (idMentor, mentorData) => {
    $.ajax({
        method:"PATCH", 
        url: `https://api-13va-default-rtdb.firebaseio.com/fer/mentors/${idMentor}.json`,
        data: JSON.stringify(mentorData), 
        success:(response)=> {
            console.log(response)
        },
        error: (error) => {
            console.log(error)
        },
        async: false
    })
}


const getDataForm = (idForm) => {
    let mentor = {}
    $(`#${idForm} input`).each(function(){
        let value = $(this).val()
        let name = $(this).attr("name")
        mentor = {...mentor, [name]: value}
        $(this).val("")
    })
    return mentor
}

const printCards = mentorsCollection => {
    $(".wrapper-mentors").empty()
    for (const key in mentorsCollection) {
        let {name, phone, github, urlGithub} = mentorsCollection[key]
        let card = `
        <div class="col-12 col-md-6 ">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Phone: ${phone}</p>
                <a href="${urlGithub}" target="_blank" class="card-text d-block">${github}</a>
                <button class="btn btn-danger btn-delete" data-id-mentor="${key}">Eliminar</button>
                <button class="btn btn-primary btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-edit" data-id-mentor="${key}">Editar</button>
            </div>
            </div>
        </div>
        `
        $(".wrapper-mentors").append(card)

        $('.btn-delete').click((event)=>{
            let idMentor = $(event.target).data("id-mentor")
            console.log(idMentor)
            deleteMentor(idMentor)
            printCards(getAllMentors())
        })

        $(".btn-open-modal").click((event)=>{
            let idMentor = $(event.target).data("id-mentor")
            let mentor = getAMentor(idMentor)
            let {name, phone, github, urlGithub} = mentor
            $('#form-edit input').each(function() {
                let nameInput = $(this).attr('name')

                if(nameInput === "name")  $(this).val(name)
                if(nameInput === "phone")  $(this).val(phone)
                if(nameInput === "github")  $(this).val(github)
                if(nameInput === "urlGithub")  $(this).val(urlGithub)
            })

            $(".btn-edit").click((event) =>{
                let mentorToEdit = getDataForm("form-edit")
                console.log(mentorToEdit)
                updateMentor(idMentor, mentorToEdit)
                printCards(getAllMentors())
                myModalEdit.hide()
            })
        })


    }
}

printCards(getAllMentors())

$(".btn-add").click(()=> {
    let mentor = getDataForm("form-add")
    createMentor(mentor)
    printCards(getAllMentors())
})




