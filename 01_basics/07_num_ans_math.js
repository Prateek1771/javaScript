const a = 500
// console.log(a);

const b = new Number(100)
// console.log(b);                    // [Number: 100]

// console.log(b.toString().length);  // 3
// console.log(b.toFixed(2));         //100.00

const c = 123.45678
//console.log(c.toPrecision(4));     // 123.5

const d = 100000
//console.log(d.toLocaleString('en-In')); // 1,00,000

// =============================== Math ====================================

// console.log(Math);                // Object [Math] {}
// console.log(Math.abs(-4));        // 4
// console.log(Math.round(4.8));     // 5
// console.log(Math.ceil(4.1));      // 5
// console.log(Math.floor(4.9));     // 4
// console.log(Math.min(2,7,3,9,6)); // 2
// console.log(Math.max(2,7,3,9,6)); // 9

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*5) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
