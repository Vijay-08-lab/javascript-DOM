// learning javascript//
// var, let, const variable types
/*
var product = "apple";
let price = 200;
const quantity = 23;
const tax = 2/100;
/*
// now make a function and calculate the total price and print in it.

function cal (){
const totalbefore = quantity*price
const taxprice =totalbefore*tax;
const total =totalbefore+taxprice;
console.log(total)
}
cal()*/
//javascript prompt by logic first tamil youtube //
/*
let tickets = prompt("How many tickets you want?")
console.log("You should pay",tickets*10 +"Rupees")
*/

/*let a = Math.floor(Math.random()*9)+1000
console.log(a)
let b = Math.sqrt(4)*6
console.log(b)
const c = "this my world. this my life"
console.log(c.replaceAll("this","Our"))
*/
// string litterals //
//`backtick`//
/*
let firstName = "ramya";
let lastName = " murali";
let city = "Chennai";
console.log(firstName+lastName+ " leaves in "+city)
//backtick//
console.log(`${firstName}${lastName} leaves in ${city}`)
*/
//array//
/*
let itemCount = 5;
let price =19;
let total = price*itemCount;
console.log(`"you have ${itemCount} items in your cart.
    your bill amount is '$'${total}`)
    */
   //array//
   let city =["chennai","vellore","madurai","trichy"]
   console.log(city[0])
   console.log(city.length)
   // getting unknown last element//
   console.log((city.length)-1)
   let number = [1,2,3,4,"a","b",[1,2]]
   console.log(number)
   
   // now task is to get the second array first value//
   console.log(number[6][0])
   //matrix//
   let matrix = [[1,2,3],[4,5,6],[7,8,9]]
   console.log(matrix[0])
   console.log(matrix[0][2])
   // task get no 7 in the matrix array//
   console.log(matrix[2][0])
   // array Methods //
   let arr = ["a","b","c","d","e"]
   console.log(arr)
   //now you need to add "f" on the last of array //
   arr.push('f')
   console.log(arr)
//now you need to remove "f from the array" //
console.log(arr.pop())
console.log(arr)
//now you need to remove "a" from the array //
console.log(arr.shift())
console.log(arr)
//now you need to re-insert "a" on the array //
console.log(arr.unshift('a'))
console.log(arr)
