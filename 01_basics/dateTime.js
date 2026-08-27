//---------------------older method---------------------
//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
let currDate = new Date()
//console.log(typeof currDate) //object
// console.log(currDate)  //2026-08-07T06:47:10.294Z  not completely understandable
// console.log(currDate.toString())  //Fri Aug 07 2026 06:47:10 GMT+0000 (Coordinated Universal Time)
// console.log(currDate.toDateString()) //Fri Aug 07 2026
 console.log(currDate.toISOString())
 console.log(currDate.toJSON())
 console.log(currDate.toLocaleString())
// console.log(typeof currDate)

 let myCreatedDate = new Date(2023, 0, 13, 5, 3) //in js months start from 0 ie 0 is january
 console.log(myCreatedDate.toLocaleString())

// let myCreatedDate2 = new Date(2023, 0, 13) //in js months start from 0 ie 0 is january
// console.log(myCreatedDate2.toDateString())

// let myDate3 = new Date('2023-11-2') //yyyy-mm-dd format => in it month start from 1 also we can use mm-dd-yyyy format
// console.log(myDate3.toDateString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) //gives value in ms calculated from std date 1 jan 1970 as per ecma
// console.log(myCreatedDate.getTime()) //value in ms from 1 jan 1970 to myCreatedDate

// //ms values are used in comparison of diff time

// console.log(Math.floor(Date.now()/1000));  //dividing by 1000 to convertms to sec and using floor to remove decimal places

 let newDate = new Date()
// console.log (newDate) ;
// console.log((newDate.getMonth() + 1)); //using +1 to manually start months from 1 making user understand easy
// console.log(newDate.getDay()); // will tell week day

// // console.log('${newDate.getDay()} and month ${newDate.getMonth() + 1}`);

newDate.toLocaleString('default', { //as object
     weekday: "long"
 })
console.log(newDate)
//-----------------------using temporal-----------------

 import { Temporal } from '@js-temporal/temporal-polyfill';
console.log('Initialization complete', Temporal.Now.instant());
const monthDay = Temporal.PlainMonthDay.from({ month: 7, day: 14 }); // => 07-14
const date = monthDay.toPlainDate({ year: 2030 }); // => 2030-07-14
console.log(date.toString())
console.log(monthDay.toString())
console.log(date.dayOfWeek)