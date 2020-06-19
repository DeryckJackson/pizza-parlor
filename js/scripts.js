function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [
    { "pepperoni": 1 },
    { "sausage": 1 },
    { "pineapple": 2 },
    { "canadianBacon": 1 },
    { "redBellPeppers": 1},
    { "hamburger": 1 },
    { "olives": 1 },
    { "onions": 1 },
    { "greenPeppers": 1 }
  ];
  this.selectedToppings = [];
}



// UI logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function() {
    event.preventDefault();
    let pizza = new Pizza("", "");
    pizza.name = $("input#name").val()
    pizza.size = $("input:radio[name=size]:checked").val()

    $("input:checkbox[name=toppings]").each(function() {
      if (this.checked) {
      pizza.selectedToppings.push($(this).val());
      }
    });
    console.log(pizza);
  });
});