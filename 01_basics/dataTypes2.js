//primitive data types - string, boolean, symbol, number, bigInt, null, undefined
//call by value
const score = null
console.log(typeof score) //object type

let name
console.log(typeof name) //undefined type

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 == id2) //even symbol is same but they are not equal so result is false
console.log(typeof id1) //symbol type

const bigNum = 89323947520982985750248090n //adding n in the end make it if bigint type
console.log(typeof bigNum)  //without n it is of number type as above number is smaller than 2 power 53

//non primitive data types - array , functions , objects
//call by reference

//array
const students= ["mannu", "mehak", "meenakshi"]
console.log(typeof students) //object type

//objects - always in curly braces
let things = {
    wood : "table",
    plastic: "toothbrush",
    metal: "plate",
}
console.log(typeof things) //object type

//functions - can also be declared as variables or constants in js
const myFunction = function(){
    console.log("hii, this is my function")
}
console.log(typeof myFunction) //function type

