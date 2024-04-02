function loadHTMLFile(filePath) {
    $.get("data-shop2.html",function(data){
        $("#footnote").html(data).fadeIn();
    })
}

$("#test_shop").on("click",function(){
    $("#footnote").hide()
    loadHTMLFile("data-shop.html")
})
