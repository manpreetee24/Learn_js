/*stack memory- for primitive data type ie here copy 
of variable will be passed any change in copied value 
will not be reflected in original value*/

let name = "manpreet" //primitive
let anotherName = name //a copy of name is created
anotherName = "mnaprit" //changes in copied value will not reflected in original value ie name
console.log(name)
console.log(anotherName)


//non primitive
let userOne = {    
    email: "mannu@gmail.com",
    upi: "manuuokhdfc"
}
let userTwo = userOne  //call by reference ie userTwo and userOne points to same memory loc
userTwo.email = "manpreet@gmail.com" //any changes in userTwo will be reflected in userOne too
console.log(userTwo.email)
console.log(userOne.email)
