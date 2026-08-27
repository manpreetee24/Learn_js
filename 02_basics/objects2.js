const userInfo = {
    name:{  //objects inside object
        completeName:{
            firstName : "Manpreet",
            lastName : "Dhiman"
        }
    }
}
 console.log(userInfo)   //{ name: { completeName: { firstName: 'Manpreet', lastName: 'Dhiman' } }}
 console.log(userInfo.name.completeName.firstName)  //Manpreet

const obj1 ={1: 'a', 2 : 's', 3:'g'} //storing key value pairs in obj1
const obj2 = { 4: 'r', 5:'y'}
const obj3 = { 6: 't', 7: 'p'}

// console.log({obj1 , obj2, obj3})   //objects cant be combined like these
/*{
  obj1: { '1': 'a', '2': 's', '3': 'g' },
  obj2: { '4': 'r', '5': 'y' },
  obj3: { '6': 't', '7': 'p' }
}  */   //result 


const obj4 = Object.assign({}, obj1, obj2, obj3) //M1 it treats {} as target object and obj1, obj2, obj3 as source and modifies target object by adding diff source in it
//if we do not take this empty string and simply take obj1,obj2,obj3 then obj1 will be modified so it is bwst practice to take {}


// console.log(obj4)  //as assign return the modifie object so storing it in obj4

obj5 = {...obj1, ...obj2, ...obj3}

console.log(obj5) //m2 easy method 

console.log(Object.keys(obj5)) //an array of all keys will b printed
console.log(Object.values(obj5)) //an array of all values of obj5 will b printed
console.log(Object.entries(obj5)) //an array of array of key value pair will b printed

console.log(obj5.hasOwnProperty(5))  //checking if 5 key exist in obj5 or not

//Arrays of objects
const arrOfObj = [
    {name : "manu", roll : 23},
    {name : "rozy", roll : 24},
    {name : "simran", roll : 28}
]
console.log(arrOfObj[1].roll)   //24