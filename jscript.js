// alert("BIENVENIDO A ESTE SITIO")

//function showrubia(){
    
//    $(".rubia").css("display","block");
//    $(".rubia iframe").each(function(){
//        $(this).attr("src", $(this).attr("data-src"));
//        this.attr("src", iframe.data("src"))
//    })
    
//}




function show(clase){
    
    $("iframe").attr("src", "about:blank");
    $(".holder").css("display","none");
    

    $(clase).css("display","block");
    $(clase+" iframe").each(function(){
        $(this).attr("src", $(this).attr("data-src"));

    })
    
}

var target = ""

$("#comando").click(function(){
    var target = $('input[name=color]:checked').val()+$('input[name=lupulado]:checked').val()+$('input[name=levadura]:checked').val()
    show(target)
})
