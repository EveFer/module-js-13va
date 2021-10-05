
// vanilla
// document.getElementById("save-user").addEventListener("click", () => {
//     console.log("Guardando user..")
// })

// Jquery
$("#save-user").click(()=> {
    console.log("Click desde Jquery")
    
    
})


$("#toggle-text").click(()=> {
    // ocultar elmento con vanilla y clases
    // document.getElementById("text").classList.add("d-none")

    // ocultar un elemento con jQuery
    // $("#text").hide()

    // vanilla
    // let elemento = document.getElementById("text")
    // let elementoHasClass = elemento.classList.contains("d-none")

    // elementoHasClass 
    //     ? elemento.classList.remove("d-none")
    //     : elemento.classList.add("d-none")


    // Jquery
    $("#text").toggle()

})


// 

// let buttons =  querySelectorAll(".btn.btn.secondary")

// buttons.forEach((button)=> {
//     button.addEventListener("click", (event) => {

//     })
// })


    $(".buttons-control .btn.btn-secondary").click((event) => {
        // console.log(event.target.dataset.deleteClass)
        // let classText = event.target.dataset.deleteClass
        let classText = $(event.target).data("delete-class")
        console.log(classText)
        // $(element).data("delete-class")
        $("." + classText).remove()
    })

    // A cada boton le agregas un valor
    // Dange = 1 Warning = 2 primary=3
    // Switch case = 3
    //Case= 1 Text danger remove
    // case 2 text warning remove
    // case 3 text primary remove text

    $("#btn-danger").click(()=> {
        $("text-danger").remove()
    })

    // .html()
    // .text()