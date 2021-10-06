
let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300"
]

let positionCurrent = 0


const setImgSrc = (src) => {
    $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 0, () => {
        $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 1)
    })
}

const setButtonsState = () => {
    // estamos en la primara imagen
    positionCurrent === 0
     ? $(".backward").prop("disabled", true)
     : $(".backward").prop("disabled", false)

    // cuando identifiquemos la ultima imagen
    positionCurrent === imgArray.length - 1
     ? ($(".forward").prop("disabled", true), $(".add-images").removeClass("d-none"))
     : ($(".forward").prop("disabled", false), $(".add-images").addClass("d-none"))
}

const forward = () => {
    positionCurrent++
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
}

const backward = () => {
    positionCurrent--
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
}

$(".forward").click(forward)
$(".backward").click(backward)

// inicializando el valor de la imagen
// setImgSrc(imgArray[positionCurrent])
setButtonsState()