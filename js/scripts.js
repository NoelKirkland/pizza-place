// ***Business Logic***
function Pizza(size, crust, topping){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = 0;
  this.totalPriceArray = [10.00];
}

Pizza.prototype.fullOrder = function() {
  return "You have selected a " + this.size + ", " + this.crust + " crust pizza with " + this.topping + " on top. Your total is $" + (this.price).toFixed(2);
}

Pizza.prototype.priceIncrementor = function (additionalCost){
      this.totalPriceArray.push(additionalCost);
}

Pizza.prototype.totalPrice = function(){
  this.price = this.totalPriceArray[0] + this.totalPriceArray[1] + this.totalPriceArray[2] + this.totalPriceArray[3]
}

// ***User Interface***
$(document).ready(function(){
  $("form#pizza-specs").submit(function(event){
    event.preventDefault();
    const inputSize = $("#pizza-size").val();
    const inputCrust = $("#pizza-crust").val();
    const inputTopping = $("#pizza-topping").val();
    let newOrder = new Pizza (inputSize, inputCrust, inputTopping)

    const priceFinder = {
      "Small": 0.00,
      "Medium": 3.50,
      "Large": 6.25,
      "Normal": 0.00,
      "Thin": 1.00,
      "Cheesy": 2.25,
      "Cheese": 0.00,
      "Pepperoni": 2.75,
      "Vegi": 2.00
    };
    newOrder.priceIncrementor(priceFinder[newOrder.size]);
    newOrder.priceIncrementor(priceFinder[newOrder.crust]);
    newOrder.priceIncrementor(priceFinder[newOrder.topping]);

    newOrder.totalPrice();

    $("#full-order").text(newOrder.fullOrder());
    $("#order-output").show();
    $("#hide-order-output").click(function(){
      $("#order-output").hide();
      $("#order-submitted").show();
    });
  });
});