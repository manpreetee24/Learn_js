//immediately invoked function expressions (IIFE)
/*we use tis to immediately invoke a function just after declaring
it and to protect function from globally scoped variables ie function scope ko aur strong bna dete hn*/

(function add(num1, num2){  //named iife as it has name add - m1
    console.log(num1 + num2)
})(3, 5) ; //if we want to write a second iife after it using ; is must to mark end of this first iife
//here first braces was used for function defination iife and second braces ie (3, 5) was used to call immediate function

//second iife using arrow function - just an examole you can use m1 too

((name) => {
    console.log(`${name}, is a good girl`)
})("mannu")