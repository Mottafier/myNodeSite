
function loadHTMLFile(filePath) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', filePath, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById("availability").innerHTML  = xhr.responseText;
        };
    };

    // Send the request
    xhr.send();
}

$("#test_shop").on("click",function(){
    loadHTMLFile("data-shop.html")
})
