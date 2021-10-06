
$(".controls-wrapper input[type='radio']").change(()=> {
    let classSelected = $(".controls-wrapper input[type='radio']:checked").val()
    console.log(classSelected)
    // console.log(classSelected)

    // $("#mutable-shape").removeClass().addClass(classSelected)
    $("#mutable-shape").attr("class", classSelected)
})