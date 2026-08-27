//for each loop

const lang = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// lang.forEach((language) => {   //callback fn ka naam nhi hota laadli
//     console.log(language);
// });

// //or m2 for using function

// lang.forEach( function(language) {   //language is the parameter of this callback fn - jiska naam nhi hota
//     console.log(language);
// });

// //or m3 for using function

// function printLanguage(language) {
//     console.log(language);
// }

// lang.forEach(printLanguage);

lang.forEach((language, i, lang) => {   //multiple arguements upto 3 in for each loop - 1st is value, 2nd is index, 3rd is array itself
    console.log(`Language at index ${i}: ${language} , Array: ${lang}`);
}  )


//for each loop on array of objects
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

users.forEach((user, index) => {   //upto 3 arg - ist is value, 2nd is index and 3rd is array itself
    console.log(`User at index ${index}: ${user.name}, Age: ${user.age}`);
});