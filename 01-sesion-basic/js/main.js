

// ambito de existencia - scope

// ES5 - scope global | funcional

// scope de bloque -> 

// if(true) {
    //     var name = "Fernanda"
    // }
    
    var greeting = "Hola Koders!!!"
    let hello = "Hello World"
    // console.log(greeting)
    console.log(window.greeting) // ambito global
    console.log(window.hello) // ambito global


    console.log("------------var-------------")
    var musica = "Rock"
    // hoisting - elevacion
    
    console.log("Variable 'musica' antes del bloque: ", musica)
    {
        // Esto es un bloque
        /*
        Un comentario
        multilinea
        */
     var musica = "Pop"
     console.log("Variable 'musica' dentro del bloque: ", musica)
    }

    console.log("variable 'musica' despues del bloque: ", musica)

    // rock
    // pop
    // rock

    console.log("------------let-------------")

    let musica2 = "Rock"
    
    console.log("Variable 'musica2' antes del bloque: ", musica2)
    {
        // Esto es un bloque
        /*
        Un comentario
        multilinea
        */
     let musica2 = "Pop"
     console.log("Variable 'musica2' dentro del bloque: ", musica2)
    }

    console.log("variable 'musica2' despues del bloque: ", musica2)


    // ES6 - Const

    console.log('------------const--------------')

    let age

    // primitivos
    const PI = 3.1416
    const URL_BASE = "http://localhost:8080"
    const isValid = true
    // declarando
    // const LAST_NAME No me permite solo declarar
    // PI = 3.15 no puedo reasignar el valor
    console.log(PI)

    age = 25
    console.log(age)

    age = 30
    console.log(age)

    // primitivos | compuestos
    // array | objeto | class 

    // compuesto con 'const'

    const objeto = {
        name: "Fernanda",
        age: 25
    }

    // objeto = []

    const arrayColors = ['red', 'green', 'yellow']

    console.log(objeto)
    console.log(arrayColors)

    objeto.lastName = "Palacios"
    arrayColors.push("purple")

    console.log(objeto)
    console.log(arrayColors)

    
    console.log("-------------let-------------")
    // let - reasignar el valor
    // podemos solo declararla
    // No puedo redeclarar la variable en su mismo scope
    let koder = "Pablo"
    console.log(koder)
    koder = "Omar"
    console.log(koder)
    koder = 24
    // let koder

    // {
    //     let koder
    //     let koder
    // }


    // 
    console.log('-------const---------')

    // primitivo - string | number | boolean | ...
    const CURP = "ertyuiophg3434"
    // CURP = "rtt"
    // const GRAVEDAD

    // compuestos - array | objeto | class

    const koderEmi = {
        name: "Emi"
    }

    console.log(koderEmi)

    koderEmi.lastName = "De Leon"
    console.log(koderEmi)