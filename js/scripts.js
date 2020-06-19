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
    let newOrder = new Pizza (inputSize, inputCrust, inputTopping)
    console.log(newOrder);
  });
});




// Example object for reference:
// let pizzaOrder1 = new Pizza("small","thin crust","pepperoni","15.75");