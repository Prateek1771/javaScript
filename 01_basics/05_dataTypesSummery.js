// depending upon how to access the data values, data types are split into 2 types, Primitive and Non-Primitive

// Is JS a static or dynamic typed language?
// Dynamic, variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

// Symbols used for creating a unique values
const id1 = Symbol('123')
const id2 = Symbol('123')
//console.log(id1 == id2); //false

// Primitive 

// 7 types: String, Number, Boolean, Null, undefined, Symbol(creating a unique component), BigInt
// These are call by value, creates a copy and provides the data


// Non-Primitive (Reference)

// Array, Objects, Functions
// allocates the reference of memory of the data

const cars = ["mahindra", "nissan", "lamborgini"] //arrays

let student1 = {       //objects
    name: "Prateek",
    age: 22,
}

let myFun = function(){         // Functions
    console.log("hello");
}

console.log(typeof myFun);

//1) Primitive Datatypes
//       Number => number
//       String  => string
//       Boolean  => boolean
//       null  => object
//       undefined  =>  undefined
//       Symbol  =>  symbol
//       BigInt  =>  bigint
//
//2) Non-primitive Datatypes
//       Arrays  =>  object
//       Function  =>  function
//       Object  =>  object
