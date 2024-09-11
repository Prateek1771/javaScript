// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     //console.log(element);
//     
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//    }
//     
// }
// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
//     
// }

// let array1 = ["a", "b", "c"]
// console.log(array1.length);
// 
// for (let i = 0; i < array1.length; i++){
//     elem = array1[i]
//     console.log(elem);
// }


// break and continue
// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);  
// }
// 
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
//     
// }

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// 
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//-----------------------------------
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
//    console.log(val);
} )

const val = coding.forEach( (item) => {
//    console.log(item);
} )

// -------------------------
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//-------------------------------------
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//---------------------------------------
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
//    console.log(item.languageName);
} )

// --------------------------------

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums1 = myNumers.filter((num) => num > 4)
// console.log(newNums1);
 

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);
// chaining 

const newNums3 = []
myNumers.forEach((num) => {
    if(num > 4){
        newNums3.push(num)
    }
}) 
// console.log(newNums3);

//-----------------------------------------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBooks = books.filter((fevbooks) => fevbooks.genre === 'Fiction')
// console.log(myBooks);

const myBooks2 = books.filter((fevbooks) => fevbooks.title == 'Book Nine')
// console.log(myBooks2);

const myBooks3 = books.filter((fevbooks) => fevbooks.publish >= 2000)
//console.log(myBooks3);

const myBooks4 = books.filter((fevbooks) => fevbooks.publish >= 2000 && fevbooks.genre == 'Science')
//console.log(myBooks4);


// ------------------------------------------------------
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const fevNum1 = myNum.map((num) => num + 10)
// console.log(fevNum1);

const fevNum2  = myNum.forEach((item) => {
    return item * 10
})
// console.log(fevNum2);


// ========================================================

const arr1 = [1, 2, 3, 4]
// 0 + 1 + 2 + 3 + 4
const initialVal = 0;
const sumWithInitial = arr1.reduce(
    (accumulator , currentVal) => accumulator + currentVal, initialVal  
)
// accumulator => initial value is taken, after a loop the result(accumulator + currentVal) is taken as accumulator.

// console.log(sumWithInitial);
// 

const myTotal = arr1.reduce(function (acc, currVal) {
//    console.log(`accumulator: ${acc} and currentVal: ${currVal}`);
    
    return acc + currVal
}, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        item: 'Tooth brush',
        price: 40,
        stars: 4,
    },
    {
        item: 'Mysore sandal soap',
        price: 50,
        stars: 5
    },
    {
        item: 'Comfert',
        price: 5,
        stars: 4
    }
]

const totalCost = shoppingCart.reduce(
    (acc , initialCost) => acc + initialCost.price, 5
)
// 5 service sharge
console.log(totalCost);
