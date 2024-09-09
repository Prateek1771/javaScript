const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
    // this is used for current contest
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// when we use console.log(this); on the code editor we will get empty object // the v8 engine is extracted and used saperately, renamed like node, bun
// but when we do console.log(this); on the browser we will get window onject // runs within the browser

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

const add = (num1, num2) =>{
    return num1 + num2
} // Explicit return
// console.log(add(5,10));

const add2 = (num3, num4) => (num3 + num4)
// Implicit return
// console.log(add2(10,15));

const add3 = (num5, num6) => ({username: 'Prateek'})
console.log(add3(10,15));