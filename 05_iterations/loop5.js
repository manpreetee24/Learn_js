const nums = [1, 3, 2,4, 5 ,6, 7, 8,9]
const newNums = nums.map((num) => {return num+10})
console.log(newNums)

//chaining - imp

const arr = [1, 3,2, 3, 4, 5, 6, 7 ,8 ,9]
const newarr = arr
               .map((num) => num*10) //all num will be multiplied by ten
               .map((num) => num+1)  //adding 1 to each num
               .filter((num) => num>=40) //giving final arr of all num >=40

console.log(newarr)


//reduce

const myNums = [1, 2, 3, 4, ,5 ]
const total1 = myNums.reduce( function (acc, currVal) {
     console.log(`accumulator: ${acc} and cuurent value : ${currVal}`);
     return acc+currVal
 }, 0) //0 indicates initial value of accumulator using iife
 console.log(total1)

// or using arrow function 
const total = myNums.reduce((acc, currVal) => acc+currVal, 0)
console.log(total)

//same process can be done on objects as well
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

// .map(), .filter(), .reduce() are all part of what's called a functional pipeline style — each takes an array in, returns an array (or value)