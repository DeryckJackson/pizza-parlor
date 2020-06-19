function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
}



// UI logic
$(document).ready(function() {
  let pizza = new Pizza("Deryck", "large");
  pizza.toppings.push("cheese");
  console.log(pizza)
});