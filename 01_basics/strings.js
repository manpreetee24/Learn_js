const name = "mannu"
const dob = 27

console.log(name + dob) //outdated method for string concatenation
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

console.log(`hyy my name is ${name} and my date of birth is ${dob} may`) //string interposition - new method

const gameName = new String(`mannu-dhiman-ladsahab`) //with this notation we confirmed that gameName is strictly of string type
console.log(gameName)

console.log(gameName[0]) //m1 to access individual char in a string
console.log(gameName.charAt(2))// m2 to access individual char in a string

console.log(gameName.__proto__) //object type -  {}

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.indexOf('d'))

console.log(gameName.split('-'))   //[ 'mannu', 'dhiman', 'ladsahab' ]

const newString = gameName.substring(0,4) //4th index value will not be included in newString
console.log(newString)

const anotherString = gameName.slice(-21, 4)
console.log(anotherString)

const stringWithSpaces = "  mannu  "
console.log(stringWithSpaces)
console.log(stringWithSpaces.trim())

const url = "https://website.mannu%20.google.com"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))  //false