// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//console.log("2" > 1); // true
//console.log(2 < "1"); // false

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// the reason is that an equality check == and comparision ><>=<= work differently.
// Comparision convert null to a number, treating it as 0.
// That's why (12)null >= 0 is true and (10)null > 0 is false

// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false

// ===  // Strict check, not only checks the values but also datatypes.

console.log("2" === 2); // false
 