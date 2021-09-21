// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);


// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);



// function pizzaOven(crustType, sauceType, cheeses, toppings){
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }

// var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1);

// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

// var p3 = pizzaOven("tossed", "bbq", ["american", "swiss"], ["pinapple", "olives", "onions"]);
// console.log(p3);

// var p4 = pizzaOven("deep dish", "honey bbq", ["mozzarella", "feta"], ["pepper", "olives", "tomatoes"]);
// console.log(p4);


function randomPizza(){
    var pizza = {};
    pizza.crustType = crustType[randomCrust];
    pizza.sauceType = sauceType[randomSauce];
    pizza.cheeses = cheeses[randomCheese];
    pizza.toppings = toppings[randomToppings];
    return pizza;
}
var crustType = ["deep dish", "hand tossed"]
var sauceType = ["marinara", "bbq" ,"honey bbq"]
var cheeses = ["mozeralla", "american"]
var toppings = ["mushrooms", "olives", "onions", "pepper", "tomatoes"]

var randomCrust = Math.floor(Math.random()* crustType.length)
var randomSauce = Math.floor(Math.random() * sauceType.length)
var randomCheese = Math.floor(Math.random() * cheeses.length)
var randomToppings = Math.floor(Math.random() * toppings.length)

console.log(randomPizza())

