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

function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai()