let name = 'abc'
let repoCount = 5

// console.log(name + repoCount + " value");                                   // Previously used
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // new way of using, String interpulation

const gameName = new String('hello-abc')

// console.log(gameName[0]);              // h
// console.log(gameName.__proto__);       // {}
// console.log(gameName.length);          // 9
// console.log(gameName.toUpperCase());   // HELLO-ABC
// console.log(gameName.charAt(4));       // o
// console.log(gameName.indexOf('l'));    // 2

const newStr1 = gameName.substring(0,6)
console.log(newStr1);

const newStr2 = gameName.slice(3,4)
console.log(newStr2);

const newStr3 = "   abc   "
console.log(newStr3);
console.log(newStr3.trim());

const url = "https://google.com/prateek%20hitli"
console.log(url.replace('%20', '-'));
console.log(url.includes('prateek'));
