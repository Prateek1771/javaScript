let myName1 = 'prateek         '
let myName2 = 'pallavi         '

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myarr = ['ironMan', 'thor', 'spiderman']
let mypowers = {
    ironMan: 'tech',
    thor: 'thunder',
    spiderman: 'webs', 

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}

Object.prototype.prateek = function () {
    console.log('prateek is present in all obj');
}

Array.prototype.heyPrateek = function () {
    console.log('hello from prateek');
    
}

// mypowers.prateek();
// myarr.prateek();


// function ----\
//               \
// Array---------- > Object ------ > Null
//               /
// String ------/



//Inheritance
const User = {
    name: 'prateek',
    email: 'prateek@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'pavan         '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}