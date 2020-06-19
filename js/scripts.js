// Buisiness Logic:
function Pizza(size, crust, topping, price){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price
}

Pizza.prototype.fullOrder = function() {
  return "You have selected a " + this.size + ", " + this.crust + " pizza with " + this.topping + " on top. Your total is $" + this.price;
}

function priceIncrementor (additionalCost){
  return totalPrice += additionalCost;
}

let totalPrice = 10.00


// User Interface:
$(document).ready(function(){
  $("form#pizz-specs").submit(function(event){
    event.preventDefault();
    const inputSize = $("#pizza-size").val();
      console.log(inputSize);
    const inputCrust = $("#pizza-crust").val();
      console.log(inputCrust);
    const inputTopping = $("#pizza-topping").val();
      console.log(inputTopping);
    let calculatedPrice = 10.00

// Pizza specification prices:

  //var1:
  const small = 0.00
  const medium = 3.50
  const large = 6.25

  //var2:
  const normal = 0.00
  const thin = 1.00
  const cheesy = 2.25

  //var3:
  const cheese = 0.00
  const pepperoni = 2.75
  const vegi = 2.00

//Switch case for pizza size
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

    //Switch case for pizza crust
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

    //Switch case for pizza topping
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
    console.log(totalPrice);

    let newOrder = new Pizza (inputSize, inputCrust, inputTopping, totalPrice)
    console.log(newOrder);
  });
});




// Example object for reference:
// let pizzaOrder1 = new Pizza("small","thin crust","pepperoni","15.75");