// singleton          // const user1 = new Object()
// non-singleton      // const user2 = {}
// object.create
// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "prateek",
    "full name": "prateek",
    [mySym]: "mykey1",
    age: 21,
    location: "Koppal",
    email: "prateek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "prateek@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "prateek@microsoft.com"
// console.log(JsUser);
// 
// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// // 
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


const user1 = {}

user1.id = "123abc"
user1.name = 'batman'
user1.isLoggedIn = false

// console.log(user1);       // { id: '123abc', name: 'batman', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prateek",
            lastname: "hitli"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // prateek

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// 
// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)
// 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(user1);
// console.log(Object.keys(user1));                 // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(user1));               // [ '123abc', 'batman', false ]
// console.log(Object.entries(user1));              // [ [ 'id', '123abc' ], [ 'name', 'batman' ], [ 'isLoggedIn', false ] ]
// console.log(user1.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

