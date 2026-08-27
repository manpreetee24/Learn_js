//objects as constructors are singleton
//objects as literals are not singleton

//objects as literals

const mySym = Symbol("key1")
const user1 = {
    name: "manpreet",  //can be accesed by m1 or m2 both
    "surname" : "dhiman", //key written in double quotes can only be accesed by m2
    isLoggedIn : true, //both m1 and m2 can be used
    age : 19,  //both
    [mySym] : "key1" , //without [] in symbol key ,"key1" will be treated as string and it can only be accessed ny m3
    lastLoggedIn : ['mon', 'tue'] //both
}

console.log(user1.name) //m1
console.log(user1["surname"]) //m2
console.log(user1["isLoggedIn"])
console.log(user1.age)
console.log(user1[mySym])  //m3
console.log(user1.lastLoggedIn)

user1.age = 20 //values can be changed by using = sign
// Object.freeze(user1)  //after this freeze statement no changes can be applied
user1.age = 21 //after using freeze value cant be changed
console.log(user1)


user1.greeting = function(){
    console.log("Hello JS user");
}

user1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `) //this can be used to access a specific element of an object
}

console.log(user1.greeting) //[Function (anonymous)] s we didnt used () after fun name
console.log(user1.greeting())
console.log(user1.greetingTwo()) 
