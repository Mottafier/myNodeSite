//This function will add new items to the shop
function StoreItem(name,price,image){
    this.name = name;
    this.price = price;
    this.image = image;
    this.displayItem = function() {
        // Make a new card
        var new_card = $('<div class="card">')
        
        new_card.hide().fadeIn()
        new_card.append('<img src="' + this.image + '" height="100">');
        new_card.append('<h3>' + this.name + '</h3><hr />');
        new_card.append('<p>' + this.price + '</p>');

        $('#cards').append(new_card)
    };
}

function loadJSONFile() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "data-shop.json", true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {

            var data = JSON.parse(xhr.responseText);

            for(let item of data.items){
                let title = item.title
                let price = item.price
                let image = item.image
                let new_item = new StoreItem(title,price,image)
                new_item.displayItem();
            }
        };
    };

    // Send the request
    xhr.send();
}

$("#test_shop").on("click",function(){
    //delete all current store items
    $('#cards').empty()
    loadJSONFile()
})
