// const lang = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];
// const value = lang.forEach((language) => {
//     console.log(language);
//     return language;  //return value of for each loop is undefined, it does not return anything
// });


const arr = [3, 5, 4, 7,6 , 8, 9]
const newArr = []
arr.forEach((num) =>{
    if(num >4){
        newArr.push(num)
    }
})
console.log(newArr)


const myNums = [1, 2, 3, 4, 5];
const filteredNums = myNums.filter((num) => num % 2 === 0);  //filter method returns a new array with all elements that pass the test implemented by the provided function.
console.log(filteredNums); // Output: [2, 4]


const books = [
    {title : 'thank you for leaving', genre: 'sad', publish: 2007},
    {title : 'good girls guide to murder', genre: 'thriller', publish: 2007},
    {title : 'from', genre: 'horror', publish: 2007},
    {title : 'silent patient', genre: 'mystery', publish: 2007},
    {title : 'la la land', genre: 'romantic', publish: 2007}
]
let filteredBooks = books.filter((bk) => { return bk.genre === 'sad'})  //using explicit return here as the statement is inside scope of brackets
console.log(filteredBooks)