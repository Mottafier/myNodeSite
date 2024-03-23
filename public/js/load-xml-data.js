
//This function will add new items to the shop
function StoreItem(name,price,image){
    this.name = name;
    this.price = price;
    this.image = image;
    this.displayItem = function() {
        // Make a new card
        var new_card = $('<div class="card">')
        
        new_card.hide().fadeIn()
        new_card.append('<img src="images/' + this.image + '" height="100">');
        new_card.append('<h3>' + this.name + '</h3><hr />');
        new_card.append('<p>' + this.price + '</p>');

        $('#cards').append(new_card)
    };
}

//gets xml file containing current items in the shop
function loadXMLFile() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "js/data-shop.xml", true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
            
            let items = xmlDoc.getElementsByTagName("item");

            for(let item of items){
                let title = item.getElementsByTagName("title")[0].innerHTML
                let price = item.getElementsByTagName("price")[0].innerHTML
                let image = item.getElementsByTagName("image")[0].innerHTML
                let new_item = new StoreItem(title,price,image)
                new_item.displayItem();
            }
        };
    };

    // Send the request
    xhr.send();
}

$("#test_shop").on("click",function(){
    loadXMLFile()
})
