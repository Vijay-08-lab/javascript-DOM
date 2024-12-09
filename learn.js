// learning javascript//
// var, let, const variable types

var product = "apple";
let price = 200;
const quantity = 23;
const tax = 2/100;

// now make a function and calculate the total price and print in it.

function cal (){
const totalbefore = quantity*price
const taxprice =totalbefore*tax;
const total =totalbefore+taxprice;
console.log(total)
}
cal()