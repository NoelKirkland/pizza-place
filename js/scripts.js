// Buisiness Logic:
function Pizza(topping, size){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price
}

Pizza.prototype.fullOrder = function() {
  return "You have selected a " + this.size + ", " + this.crust + " pizza with " + this.topping + " on top. Your total is $";
}



// User Interface: