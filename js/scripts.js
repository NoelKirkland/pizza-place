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

let pizzaOrder1 = new Pizza("small","thin crust","pepperoni","15.75");