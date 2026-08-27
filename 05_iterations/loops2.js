//for of loop can be used to iterate over arrays, strings, maps, sets, and other iterable objects. 
//It provides a simpler syntax for iterating over the values of an iterable object.

//for in loop is used to iterate over the properties of an object. It provides a way to access the keys of an object and perform operations on them.



 const arr = [4, 6, 2, 7, 8, 4, 2]
 for (const el of arr) {
     console.log(el);
 }

// //for in loop on arrays
// const myArray = [10, 20, 30, 40, 50];
// for (const index in myArray) {
//     console.log(`Index: ${index}, Value: ${myArray[index]}`);
// }

// //in for of loop on arrays 
// for (const value of myArray) {
//     console.log(`Value: ${value}`);  //directly access the value of each element in the array, not index
// }





// //on strings
// const str = "hello world"
// for (const char of str) {
//     console.log(char);
// }




// //on maps
const myMap = new Map();  //map is a collection of key-value pairs where keys can be of any data type. It maintains the order of insertion and allows for easy retrieval of values based on their keys.
myMap.set('name', 'John'); // Add key-value pairs to the map
myMap.set('age', 30);
myMap.set('city', 'New York');
myMap.set('name', 'Johny'); // Duplicate key, will overwrite the previous value
myMap.set('city', 'hyderabad'); // Duplicate key, will overwrite the previous value

// console.log(myMap)

// for(const [key, value] of myMap) {  //destructuring assignment to extract key and value from each entry in the map
//     console.log(`${key}: ${value}`);
// }

// for(const key in myMap){     //maps are not iterable with for in loop, but we can use for in loop to iterate over the keys of a map by using the keys() method of the map object. The keys() method returns an iterator object that contains the keys of the map.     
//     console.log(`${key}: ${myMap[key]}`);  //for in loop on maps
// } //gives nothing in op as it never runs

//on objects
// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (const key of Object.keys(myObject)) {  //Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
//     console.log(`${key}: ${myObject[key]}`);   //key value pair accesing in objects
// }


//for in loop on objects
// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (const key in myObj) {
//     console.log(`${key}: ${myObj[key]}`);
// }