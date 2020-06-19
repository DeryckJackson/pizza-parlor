//Business logic
function Pizza() {
  this.name = "";
  this.size = "";
  this.crust = ""
  this.sauce = ""
  this.cheese = ""
  this.cost = 10;
  this.toppings = {
    "pepperoni": 1,
    "sausage": 1,
    "pineapple": 2,
    "canadian-bacon": 1,
    "red-peppers": 1,
    "hamburger": 1,
    "olives": 1,
    "onions": 1,
    "green-peppers": 1 
  }
  this.selectedToppings = [];
}

Pizza.prototype.calculateCost = function() {
  switch (this.size) {
    case "medium":
      this.cost += 2;
      break;
    case "large":
      this.cost += 4;
      break;
    case "extra-large":
      this.cost += 6;
      break;
    default:
      alert("Opps, something broke.");
  }

  if (this.cheese === "extra") {
    this.cost += 1;
  }

  if (this.crust === "cheese") {
    this.cost += 3;
  }

  this.selectedToppings.forEach((element) => {
    this.cost += this.toppings[element];
  })
}

Pizza.prototype.concatToppings = function() {
  let toppings = "";

  if (this.selectedToppings.length === 1) {
    toppings += this.selectedToppings[0].replace("-", " ");
  } else {
    for (i = 0; i < this.selectedToppings.length - 1; i++) {
      toppings += `${this.selectedToppings[i].replace("-", " ")}, `;
    }
    
    toppings += `and ${this.selectedToppings[this.selectedToppings.length - 1].replace("-", " ")}`;
  }

  return toppings;
}

// UI logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function() {
    event.preventDefault();
    let pizza = new Pizza();
    pizza.name = $("input#name").val();
    pizza.size = $("input:radio[name=size]:checked").val();
    pizza.crust = $("input:radio[name=crust]:checked").val();
    pizza.sauce = $("input:radio[name=sauce]:checked").val();
    pizza.cheese = $("input:radio[name=cheese]:checked").val();

    $("input:checkbox[name=toppings]").each(function() {
      if (this.checked) {
      pizza.selectedToppings.push($(this).val());
      }
    });

    pizza.calculateCost();

    $("#output-name").text(pizza.name);
    $("#output-size").text(pizza.size.replace("-", " "));
    $("#output-toppings").text(pizza.concatToppings());
    $("#output-crust").text(pizza.crust.charAt(0).toUpperCase() + pizza.crust.slice(1));
    $("#output-sauce").text(pizza.sauce.charAt(0).toUpperCase() + pizza.sauce.slice(1));
    $("#output-cheese").text(pizza.cheese.charAt(0).toUpperCase() + pizza.cheese.slice(1));
    $("#output-cost").text(pizza.cost);
    $(".output.hide").show();

  });
});