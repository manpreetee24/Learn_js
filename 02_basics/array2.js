const arr1 = [1, 5, 2, 6, 7]
const arr2 = [3, 0, 9, 4, 8]

arr1.push(arr2) //in this arr2 will be treated ass an element
console.log(arr1) //[1, 5, 2, 6, 7, [3, 0, 9, 4, 8]]
console.log(arr1[5][2]) //to access arr2 element .matix type indexing is used res - 9

const combArr = arr1.concat(arr2) //can concat max 2 arrays only
console.log(combArr)

const anotherCombArr = [...arr1, ...arr2] //using ... ie spread method spreads that particular array into its individual element
//tihs method can be used to conact multiple arrays
console.log(anotherCombArr)

const bhassad = [23, 4, 1, [345], 6, 7, 8, [2, 5, 9,[3, 5]]]
const simple = bhassad.flat(Infinity)  //flat will convert it in single array without any subarray
console.log(simple)

console. log(Array. isArray("Hitesh"))  //false - as hitesh is not sn array
console. log(Array. from("Hitesh") )   //[ 'H', 'i', 't', 'e', 's', 'h' ]
console. log(Array. from( {name: "hitesh"})) // interesting it will give an empty string coz we didnt mentioned that whether to make array of key or value  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))