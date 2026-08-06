console.log(2==2) //true
console.log(2>=2)//true
console.log(2<=2)//true
console.log(2>2)//false
console.log(2<2)//false
console.log(2!=3) //true

console.log("2" == 2) //true
console.log(3 >= "2")//true
console.log(7 < "1")//false

//=== strict check ie it only compares same data type otherwise give false value
console.log("2" === 4)//false as comparison not possible bcoz of diffrent data types

//do not use such confusing comparisons with unexpected results
console.log(null == 0)//false
console.log(null >= 0)//true
console.log(null < 0)//false
console.log(0 > null)//false

//comparison operator except == performs conversion of null to 0 then comaparison is done
//while in == operator null remains null

console.log(undefined == 0)//false
console.log(undefined>= 0)//false
console.log(undefined < 0)//false

