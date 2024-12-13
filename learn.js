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
   /*
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

//splice Method in array//
//1st parameter -starting index
//2nd parameter -no of elements to be deleted from the starting index
//3rd(or more)parameter - values to be inserted from the starting index
arr.splice(2,1) // i deleted c from the array
console.log(arr)
arr.splice(2,1,'c') // now i deleted 'd' and add 'c'
console.log(arr)
arr.splice(3,0,'d') // now i added newly 'd' in the array without deleting any other elements.
console.log(arr)

//slice method in array //
// Note:ending index is not considered in slice. slice wil always considered addtional one element for slicing //
console.log(arr.slice(2,4)) // here you can able to see that i have targeted 'c' and 'd' index while you check the code i have named 2,4 start from 2nd and ends on 4th index but actually i need to print d which was in 3rd index.
// reverse method in array //
console.log(arr)
console.log(arr.reverse())
// converet arr to string //
let strn = arr.join()
console.log(strn)
//split converts the string to again array //
let strn2 = "g,h,i,j,k";
let arr2 = strn2.split("")
console.log(arr2);

//concat 2 arrays
let arr3 = ['l','m','n','o','p']
let arr4 = ['q','r','s','t']
let joinedarr = arr3.concat(arr4)
console.log(joinedarr)

//spread join array//
let spread = [...arr3,...arr4]
console.log(spread)

// now task part //
*/
/*
let arr = [5,8,10,7,9,11]
//replace with [7,9,11] to [17,19,111]
let a = arr.splice(3,3,17,19,111)
console.log(arr)
//adding 100 on the last index of array
let b = arr.unshift(100)
console.log(arr)
//insert 200 in last but one position
let c = arr.splice(6,0,200)
console.log(arr)
//insert 1000 at the end
let d = arr.push(1000)
console.log(arr)
//insert 0 on the middle of the index
let insert = arr.splice(arr.length -5,0,0)
console.log(arr)
*/
//  javascript - object task
//create a Object and define appropriate properites and methods. try to accessing/ modifiying/adding new values
/*
user = {
    name : "siva",
    city : "japan",
    age : 43,
    martialstatus : "single",
    education : "MBA",
    cal(){
        text ="this a dummy method"
        console.log(text)
    }
}
//acessing user data
console.log(user.name,user.education)
// modifying user data
user.name = 'vijay'
console.log(user.name)
user.age = 28
console.log(user.age)
//adding a new property
user.favouritecolor = 'red'
console.log(user)
console.log(user['martialstatus'])
user.city = 'vellore'
console.log(user)
user.cal()

*/
// for loop task //
/*
let a = 1

for (a;a<=10;a++){
    console.log(a)
}
// while loop//
const fruit = ['apple','grapes','orange','bannana']
for (let basket of fruit){
    console.log(basket)
}
const car = {
    name: 'maruti',
    model: 'k10',
    year: 2008,
    owner: 'vijay'
}
    for ( let details in car)
    {
        console.log(details)
    }
    // while loop
   c = 10;
while(c>=1){
    console.log("print by whileloop "+c)
    c--;
}
// do while loop
c=20
do{
    console.log("Printed by do while loop "+c)
    c--;
}
while(c>=1)
//continue - skips the current itteration.
for(i=0;i<=10;i++)
{
    if(i%2==0)
        continue
    console.log(i)
}
/*
let toy = new Map();
// map set method
toy.set("airplane",200),
toy.set("car",100),
toy.set("truck",150)
toy.set('bike',50)
//map get method
let price = toy.get("bike")
console.log(price)
// map entries method
for(play of toy.entries())
console.log(play)
// map method key
for(toys of toy.keys())
console.log(toys)
//map method values
for (btoy of toy.values())
console.log(btoy)

//creating object and setting new elements.
    const car = {name: 'car'}
    const bike = {name: 'bike'}
    const truck = {name: 'truck'}
    const airplane = {name: 'aitplane'}
let transport = new Map();
transport.set = (car,100)
transport.set = (bike,50)
transport.set = (truck,150)
transport.set = (airplane,200)
for (playof of transport.entries())
console.log(playof)
*/

//switch statement with the simple explain case will be due to wheather the switch statement should suggest me what to do.

let season = rainy

switch(season)
{
    case rainy :
        console.log("you need to go with umberalla")
        break
        case winter :
            console.log("wear and go sweater and keep warm yourself")
            break
            case sunny :
                console.log("get yourself wet!. it's so hot")
                default :
                console.log("choose vaild season")
}
