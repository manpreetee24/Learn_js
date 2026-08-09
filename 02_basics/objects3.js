//destructuring of objects
const obj1 = {
    name: "mannu",
    rollNo : 89,
    courseTaken : "Enc"
}
const {courseTaken: course} = obj1
console.log(course)  //ne need to use obj1.courseTaken evertime to access it