const myArr = [3, 5, 7, "hema", true] //m1 to declare arrays
console.log(myArr[3])

const myArr2 = new Array(2, 5, "hina", 7, false) //m2 to declare arrays
console.log(myArr2[2])

 const arr = [1, 5, 3, 8 , 9]
 arr.push(7)
console.log(arr)

arr.push(0)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(6) //add 6 to front by shifting all other elements by 1 to right without deleting any element
console.log(arr)

arr.shift() //shifts all elemnts to left by 1 index thus deleting front element
console.log(arr)

console.log(arr.includes(3))
console.log(arr.indexOf(87))

const newArr = arr.join() //it Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr)  //1,5,3,8,9,7
console.log(arr)
console.log(typeof newArr)

//slice and splice

console. log("A ", myArr) ;
//slice
const myn1 = myArr.slice(1, 3)
console.log(myn1); //includes array elemnts with index 1,2 only
console. log("B ", myArr) ; //prints original array ie no modification in orig array

//splice
const myn2 = myArr.splice(1, 3)
console.log(myn2);  //includes array elemnts with index 1,2 and 3
console. log("C ", myArr); //gives leftover elements after splice operation ie original arrai is changed
