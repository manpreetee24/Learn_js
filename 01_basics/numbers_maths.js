const score = 400
console.log(score)

const balance = new Number(100) // strictly number type
console.log(balance) //result - [Number: 100]
console.log(balance.toFixed(2))//fix upto 2 decimal places ie 100.00)
console.log(balance.toString().length) //3
console.log(typeof balance) //object

const otherNumber = 23.67
console.log(otherNumber.toPrecision(1)) //2e+1
console.log(otherNumber.toPrecision(2))//24
console.log(otherNumber.toPrecision(4))//23.67
console.log(otherNumber.toPrecision(5))//23.670
console.log(otherNumber.toPrecision(6))//23.6700


const hundreds = 10000000
console.log(hundreds.toLocaleString()) //by default US standard 10,000,000
console.log(hundreds.toLocaleString('en-IN'))// indian standard 1,00,00,000


//-------------------maths---------------
console.log(Math) //Object [Math] {}

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console. log(Math. random());  //will generate a random no. bw 0 and 1

console.log((Math.random()*10) +1); /*multiplying by 10 will shift one decimal place
 to left and addiing 1 ensures all no generated are greater than 1
 ex if 0.043 was generated then *10 gives 0.43 and +1 gives 1.43 which is greater than 1*/

console.log(Math.floor(Math.random()*10) +1); //floor function to get nearest lower int value

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min) // max min used to get random no. between a specified range
