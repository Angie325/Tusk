function getSizeCost() {
   var selectedSize = document.getElementById("size").value;
   return parseInt(selectedSize);

}
function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber () {
    var selectedNumber = document.getElementById("number").value;
    return parseInt(selectedNumber);

}
function onions() {
    var onion = 0;
    var addOnion = document.getElementById ("topping")
    if (addOnion.checked === true) {
        onion = 70;

    }
    return parseInt(onion)
}
function tomatoes() {
    var tomato = 0;
    var addTomato = document.getElementById ("topping")
    if (addTomato.checked === true) {
        tomato = 80;
    }
    return parseInt(tomato)
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById ("topping")
    if (addMushroom.checked === true) {
        mushroom = 90;

    }
    return parseInt(mushroom);
}
function greenPepper() {
    var greenPepper = 0;
    var addgreenPepper = document.getElementById ("topping")
    if (addgreenPepper.checked === true) {
        greenPepper = 60;

    }
    return parseInt (greenPepper);
}
function olives() {
    var olives = 0;
    var addolives = document.getElementById ("topping")
    if (addolives.checked === true) {
        olives = 120;
    }
    return parseInt (olive);
}
function pineapple() {
    var pineapple = document.getElementById ("topping")
    if (addpineapple.checked === true){
        pineapple = 140;
    }
    return parseInt (pineapple);
}
function sweetcorn() {
    var sweetcorn = document.getElementById ("topping")
    if (addsweetcorn.checked === true) {
        sweetcorn = 150;
    }
    return parseInt (sweetcorn);

}
function mince() {
    var mince = document.getElementById ("topping")
    if (addmince.checked === true) {
        mince = 150;
    }
    return parseInt (mince);
}
function beef () {
    var beef = document.getElementById ("topping")
    if (addbeef.checked === true) {
        beef = 190;

    }
    return parseInt (beef);
} 
function chicken () {
    var chicken = document.getElementById ("topping")
    if (addchicken.checked === true) {
        chicken = 200;
    }
    return parseInt (chicken);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost()+ getCrustCost() + mushrooms()) * (getNumber());

    console.log(totalPrice);
    alert("your order of" + getNumber() + "piza has been processed.Your total amount is"+ totalPrice + ".")

}
$ (document).ready (function(){
    $("#delivery").submit(function() {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();
        
        alert ("Hello" + name +"Your order has been successfully received and will be delivered to"+location +"within location")

    });
});


