function sum(num1, num2){  //parameters num1, num2
    console.log("sum of two num is-")
    return num1 + num2
}
const result = sum(3, 6) //arguements 3 and 4
console.log(result)

function user(username){
    if(username === undefined){  //or !username is eqivalent to undefined passed as username
        console.log("please enter a username")
        return
    }
    return `$(username) just logged in`
}
console.log(user("mannu"))
console.log(user()) //please enter a username

function client(name = 'mannu'){ //mannu is default value incase no name is passed in function argurment
    console.log(name)
}
client("manpreet")
client()  // in this case default value of name will be printed

//rest operator
function shoppingCart(num1, num2, ...num3){
    console.log(num1)
    console.log(num2)
    // console.log(num3) give same result as next statement
    return num3
}
console.log(shoppingCart(4, 5, 3, 6, 7, 8, 9)) //4 and 5 will be passed to num1 and num2 and rest values will be passed as an array to num3


//passing objects in functions

const userinfo = {
    id : "meenakshi",
    roll : 34
}
function handleObj(anyObject){
    console.log(`${anyObject.id} has a roll no ${anyObject.roll}`)
}
handleObj(userinfo) //passing already created object
handleObj({   //passing object directly
    id: "mehak",
    roll: 67
})


//passing arrays in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
return getArray[1]

}

console. log(returnSecondValue (myNewArray)) ;