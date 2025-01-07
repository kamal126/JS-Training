let playerName = "Kamal Chandra"

// console.log(typeof playerName); // string
// console.log(typeof(playerName));    // string

let opposition = playerName
// console.log(opposition);    // Kamal Chandra

opposition = "Pankhuri jain"

// console.log(playerName);    // Kamal Chandra
// console.log(opposition);    // Pankhuri jain

let valueInNumber = Number(playerName)
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber); // NaN

// console.log("33" == 33);        // true
// console.log("33abc" == NaN);        // false
// console.log(true == 1);     // true
// console.log(true == 2);     // false
// console.log(false == 0);        // true
// console.log(false == "0");        // true
// console.log(false == "");        // true
// console.log(true == "");        // false
// console.log(false == "1");        // false


// "33" => 33   | "33abc" => NaN    | true => 1; | false => 0

let isLoggedIn1 = "user1"

let booleanisLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanisLoggedIn1); //true

let isLoggedIn2 = ""

let booleanisLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanisLoggedIn2); //false

// 1 => true; 0 => false    |   "" => false |   "kamal" => true

let someNumber = 33
let stringnumber = String(someNumber)
// console.log(stringnumber);  // 33
// console.log(typeof stringnumber);   // string

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let value = 3
let negValue = -value
// console.log(negValue);  // -3

// console.log(2+2);   // 4
// console.log(2-2);   // 0
// console.log(2*2);   // 4
// console.log(2**3);  // 8
// console.log(2/3);   // 0.6666666666666666
// console.log(2%3);   // 2
// console.log(3%2);   // 1

let str1 = "Namaste"
let str2 = " Kamal!"
let str3 = str1+str2
// console.log(str3);  // Namaste Kamal!


// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + 2 + "2");   // 32
// console.log(((3+4) * 5 )% 3);   // 2
// console.log(+true); // 1
// console.log(+"");   // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2+2
// console.log(`num1 ${num1}, num2 ${num2}, num3: ${num3}`);   //num1 6, num2 6, num3: 6


let gameCounter = 100
++gameCounter
console.log(gameCounter);   // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion












