let marks = 98 //number type
console.log(typeof marks) //number
let valueInString = String(marks) //in type conversion use first letter capital as in String
console.log(valueInString) //98
console.log(typeof valueInString) //string   



let isCorrect = true
console.log(typeof (isCorrect)) //boolean ....here isCorrect is written inside parenthesis which is also correct way
let valueInNumber = Number(isCorrect) //in type conversion use first letter capital as in Number
console.log(valueInNumber) //1 for true and 0 for false
console.log(typeof valueInNumber) //1


let name = "meenakshi"
console.log(typeof name) //string
let valueInNum = Number(name) //in type conversion use first letter capital as in Number
console.log(valueInNum) // NaN ie not a number
console.log(typeof valueInNum) // number...inside its type is converted to number but a string is naN

//"33" => 33
//"33abs" => NaN ie it is not anumber
//name = null the its type is object and valueInNum = 0
//name = undefined then its type is undefined and valueInNum = NaN


let fName = "Kushdeep"
console.log(typeof fName) //string
let valueInBoolean = Boolean(fName) //in type conversion use first letter capital as in Boolean
console.log(valueInBoolean) // true
console.log(typeof valueInBoolean) //true

//for empty string boolean value is false
