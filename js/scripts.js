// ***Business Logic***
function Pizza(size, crust, topping, price){
  this.size = size;
  this.crust = crust;
  this.topping = topping
  this.price = price
}

// Prototype function that displays all object key values encased in text plus, the calculated price of the pizza
Pizza.prototype.fullOrder = function() {
  return "You have selected a " + this.size + ", " + this.crust + " crust pizza with " + this.topping + " on top. Your total is $" + (this.price[0] + this.price[1] + this.price[2] + this.price[3]).toFixed(2);
}

// Collects user's pizza specifications and their coresponding prices then pushes them into an array
function priceIncrementor (additionalCost){
  return totalPriceArray.push(additionalCost);
}

// Base price for a pizza
const basePrice = 10.00;

// Array that our pizza specifications and their corresponding prices are being pushed to. Notice our pizza's base price has already been added
  let totalPriceArray = [basePrice];

// ***User Interface***
$(document).ready(function(){
  $("form#pizza-specs").submit(function(event){
    event.preventDefault();
    const inputSize = $("#pizza-size").val();
    const inputCrust = $("#pizza-crust").val();
    const inputTopping = $("#pizza-topping").val();

// Pizza specification prices
// Size variable:
    const small = 0.00
    const medium = 3.50
    const large = 6.25

    // Crust variable:
    const normal = 0.00
    const thin = 1.00
    const cheesy = 2.25

    // Topping variable:
    const cheese = 0.00
    const pepperoni = 2.75
    const vegi = 2.00

// Switch cases to convert our user inputted pizza specifications into their equivalent price values
// Switch case for pizza size:
    switch (inputSize) {
      case ("Small"):
        priceIncrementor(small);
        break;
      case ("Medium"):
        priceIncrementor(medium);
        break;
      case ("Large"):
        priceIncrementor(large);
        break;
    }

// Switch case for pizza crust:
    switch (inputCrust) {
      case ("Normal"):
        priceIncrementor(normal);
        break;
      case ("Thin"):
        priceIncrementor(thin);
        break;
      case ("Cheesy"):
        priceIncrementor(cheesy);
        break;
    }

// Switch case for pizza topping:
    switch (inputTopping) {
      case ("Cheese"):
        priceIncrementor(cheese);
        break;
      case ("Pepperoni"):
        priceIncrementor(pepperoni);
        break;
      case ("Vegi"):
        priceIncrementor(vegi);
        break;
    }

// Pizza order object that is created using our object construction function plus, our fullOrder prototype method
    let newOrder = new Pizza (inputSize, inputCrust, inputTopping, totalPriceArray).fullOrder();

// Display commands
    $("#full-order").text(newOrder);
    $("#order-output").show();
    $("#hide-order-output").click(function(){
      $("#order-output").hide();
      $("#order-submitted").show();
    });
  });
});