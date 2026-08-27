//this function inside object

const user = {
    username : "neha",
    price : 344,
    welcome : function(){
        console.log(`${this.username}, welcome to web`)  //without using this ...username cant be accessed inside function
        console.log(this)  //{ username: 'neha' or 'mannu', price: 344, welcome: [Function: welcome] } - this refers to current context
    }
}
user.welcome()

user.username = "mannu"

user.welcome()
console.log(this)  //here current context is nothing so res = {}
//but when we run same statement on browser current context gives window and its methods not empty {}


//this inside functiion will not work
function chai(){
    let username = "kushdeep"
    console.log(this)   //gives a lot of methods for this function
    console.log(this.username)  //gives undefined as this works only for objects
}
chai()

//m2 using diff function declaration method
const chai2 = function(){
    let username = "kushdeep"
    console.log(this) //gives a lot of methods for this function
    console.log(this.username)   //undefined
}
chai2()

//m3 using arrow function declaration method
const chai3 = () => {
    let username = "kushdeep"
    console.log(this)  //empty {}
    console.log(this.username)   //undefined
}
chai3()


//arrow function
const add = (num1, num2) => {  //explicit return when using curly braces
    return num1+num2
}
// const add = (num1 , num2) => (num1+num2) //implicit return using round braces
console.log(add(3, 5))

const obj1 = () => ({username: "mehak"})  //these round braces are imp to use here
console.log(obj1())