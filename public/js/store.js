/*
var card_count = 0;

function StoreItem(name,price,image){
    this.name = name;
    this.price = price;
    this.image = image;
    this.card_number = card_count
    card_count++;
    this.displayItem = function() {
        // Get the card element using its cardNum
        var new_card = $()
        var card = $('.card').eq(this.card_number);

        card.hide().fadeIn()
        card.append('<img src="images/' + this.image + '" height="100">');
        card.append('<h3>' + this.name + '</h3><hr />');
        card.append('<p>' + this.price + '</p>');
    };

}



var item1 = new StoreItem("Pirate Knight Comic","$12.00","the_pirate_knight.png")
var item2 = new StoreItem("Pirate Knight Game","$22.00","PK_color.JPEG")

item1.displayItem()
item2.displayItem()
*/