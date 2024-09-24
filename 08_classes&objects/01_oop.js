const user = {
    username: 'prateek',
    loginCount: 8,
    password: 'Hitli',
    getUserDetails: function () {
        console.log('user details');
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function users(userName, password) {
    this.userName = userName;
    this.password = password;

    this.greetings = function () {
        console.log(`Welcome ${this.userName}`);
    }
    return this;
}

const user1 = new users('prateek','hitli')
const user2 = new users('Hitesh')
console.log(user1);
console.log(user2);

// step.1 > whenever we use new it creates a new object, instance
// step.2 > constructur fn then calls the new object
// step.3 > all values are injected into this

