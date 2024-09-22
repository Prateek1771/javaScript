// the promise object represents the eventual completion (or failure ) of an asyncronous operation and resulting value

// creating a promice
const promise1 = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, Cryptography, network
    setTimeout(function () {
        // console.log('async task is complete'); 
        resolve()
    }, 1000)
})

// consumption
promise1.then(function () {
    // console.log('promise consumed');
})

//==============================================================================

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2');
        resolve()
    }, 1000)    
}).then(function () {
    // console.log('async 2 is resolved');
})

//==============================================================================

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: 'prateek', email: 'prateek@gmail.com'})
    }, 1000)
})

promise3.then(function(user) {
    // console.log(user);
})

//==============================================================================

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function () {
       let err = true
       if(!err){
        resolve({username: 'prateek2', email: 'prateek2@gmail.com'})
       }
       else{
        reject('ERROR: something is wrong')
       }
    }, 1000)
})

promise4.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    // console.log(username);  
}).catch(function(err){
    // console.log(err);
}).finally(() => console.log('the proise is either resolved or rejected')
)

//==============================================================================

const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true 
        if(!error) {
            resolve({username:'prateek3', gmail: 'prateek3@gmail.com'})
        } else {
            reject('ERROR: prateek3 went wrong')
        }
    }, 1000)
})

async function consumepromice5() {
    try {
        // const responce = await promise5
        // console.log(responce);
    } catch (error) {
        // console.log(error);
    }
}

consumepromice5()

//==============================================================================

async function getallusers() {
    try {
        const responce = await fetch('https://api.github.com/users/Prateek1771')
        // console.log(responce);
        const data = await responce.json()
        // console.log(data);
    } catch (error) {
        // console.log(err);
    }
}

getallusers()

// ==============================================================================

fetch('https://api.github.com/users/Prateek1771')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
}).catch((err) => 
    console.log(err)
)