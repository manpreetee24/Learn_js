//block scoping of const , var and let

let a = 10
var b = 20
const c = 30
if(true){
    let a = 50
    console.log("inner : ", a) //50
    var b = 60
    console.log("inner : ", b) //60
    const c = 70
    console.log("inner : ", c) //70
    var d = 48 //not block scoped only ,it is accessible outside this block too
    //d = 48 is same as var d = 48
    let e = 49  //block scoped
    const f = 39 //block scoped
}
console.log(a) //10
console.log(b) //60 not block scoped ie block changes in b value are visible outside block
console.log(c) //30
console.log(d) //declared inside block but accesible outside too
// console.log(e) output- e is not defined
//console.log(f) output- f is not defined



//global scoping

let l1 = 89  //global scoped
var v1 = 56 //global scoped
const c1 = 78 //global scoped
if(true){
    console.log(l1)
    console.log(v1)
    console.log(c1)
}
function f1(l1, v1, c1){
    console.log(l1)
    console.log(v1)
    console.log(c1)
}
f1(l1, v1, c1)


//function scoping
function f2(){
    let l2 = 34
    console.log(l2)
    var v2 = 26  //function scoped
    console.log(v2)
    const c2 = 54
    console.log(c2)
}
f2()
// console.log(l2) //l2 is not accessible outside function
// console.log(v2)  //v2 is not accessible outside function too 
// console.log(c2) // c2 is not accessible outside function


//function inside function and their scope

function one(){
    const username = "mannu"
    function two(){      //child function can access varibles of its parent function but reverse is not possible
        const web = "youtube"
        console.log(username)
    }
    // console.log(web) //give error is web is scoped inside function two only & not available for one
    two()
}
one()

//block inside block and their sccoping

if(true){
    const info = "kushdeep"
    if(info === "kushdeep"){
        const surname = " sethi"
        console.log(info + surname);
    }
    // console.log(surname)  not accessible outside block
}
// console.log(info) not accessible outside block
