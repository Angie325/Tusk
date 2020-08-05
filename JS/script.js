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
function getTopping() {
    var selectedTopping = document.getElementById("toppings").value;
    return parseInt(selectedTopping)
}
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost()+ getCrustCost() + getTopping()) * (getNumber());

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


