// Buisiness Logic:
function Pizza(size, crust, topping, price){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price
}
Pizza.prototype.pizzaCost = function(){
  return this.price.forEach(function(element){
    totalPrice += element
  })
}
Pizza.prototype.fullOrder = function() {
  return "You have selected a " + this.size + ", " + this.crust + " pizza with " + this.topping + " on top. Your total is $" + this.price;
}

// function priceIncrementor (additionalCost){
//   return totalPrice += additionalCost;
// }

function priceIncrementor (additionalCost){
  return totalPriceArray.push(additionalCost);
}

let totalPrice = 10.00;

totalPriceArray = [];
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

// Pizza specification prices:

  //Size variable:
  const small = 0.00
  const medium = 3.50
  const large = 6.25

  //Crust variable:
  const normal = 0.00
  const thin = 1.00
  const cheesy = 2.25

  //Topping variable:
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
    console.log(totalPriceArray);

    let newOrder = new Pizza (inputSize, inputCrust, inputTopping, totalPrice)
    console.log(newOrder);

    let test1 = newOrder.fullOrder();
    console.log(test1);

    let test2 = newOrder.pizzaCost();
    console.log(test2);

    // new commit comment needed
  });
});




// Example object for reference:
// let pizzaOrder1 = new Pizza("small","thin crust","pepperoni","15.75");