function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("e");
    console.log("e");
    console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// 
// addTwoNumbers(5,10)   // 15
// addTwoNumbers(5,'10') // 510
// addTwoNumbers(5,null) // 5

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// let a = loginUserMessage('prateek')
// console.log(a);

// console.log(loginUserMessage('prateek'));  // prateek just logged in
// console.log(loginUserMessage());           // undefined just logged in

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));