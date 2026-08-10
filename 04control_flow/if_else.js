//if else condition

let balance = 1200
if(balance > 1000) console.log("savings"), console.log("gud work");  //btw its not a good practice
//this is implicit scope ie we dont need to use {} here...use , for multiline code and a ; at ende to mark end

let marks = 56
if(marks > 90){
    console.log("A")
}else if(marks > 70 && marks <= 90){
    console.log('B')
}else{
    console.log("C")
}


// falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy values
// "o", 'false', " ", [], {}, function(){}

//checking for an empty array usimg length property
const users = []
if(users.length === 0){
    console.log('empty array')
}

//checking fora na empty object by making array of its keys
const empty0bj = {}

if (Object.keys(empty0bj).length === 0) {
console. log("Object is empty");

}

// Nullish Coalescing Operator ( ?? ): to handle null and undefined results

let val1;
// val1 = 5 ?? 10             //res - 5
// val1 = null ?? 10          //res - 10
// val1 = undefined ?? 15     //res - 15 
val1 = null ?? 10 ?? 20       //res - 10

console.log(val1)


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console. log("less than 80") : console.log("more than 80")

I