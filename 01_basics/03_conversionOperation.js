let score = '33abc'

//console.log(typeof score);

let valueInNum = Number(score)

//console.log(typeof valueInNum);
//console.log(valueInNum);

// "33" => 33
// "33abc" => NaN - not a number, type number
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true, "Prateek" => true
// 0 => falese, "" => false

let strValue = "hello"
let stringValue = String(strValue)

//console.log(typeof stringValue);
//console.log(stringValue);

//========================= Operators ========================

let value = 2
let negValue = -value

// console.log(typeof negValue);
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(10%3);

let str1 = "hello"
let str2 = " Prateek"

let str3 = str1 + str2
// console.log(str3)

// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 3); // 123 -ecma script,  
// console.log(1 + 2 + "3"); // 33

//console.log(true)
//console.log(+true); // 1
//console.log(+""); // 0

//console.log(3 + 4 * 5 % 6); // 5

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

