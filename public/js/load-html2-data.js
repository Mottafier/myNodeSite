function loadHTMLFile(filePath) {
    $.get("js/data-shop2.html",function(data){
        $("#footnote").html(data).fadeIn();
    })
}

$("#test_shop").on("click",function(){
    $("#footnote").hide()
    loadHTMLFile("js/data-shop.html")
})
