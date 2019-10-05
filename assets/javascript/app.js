$("#menu").on("click", function(event){
    event.stopPropagation();
    $("nav").addClass("active");
})

$(document.body).on("click", function(){
    $("nav").removeClass("active");
})