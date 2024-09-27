function mul(num) {
    return num * 5
}

mul.power = 2

// console.log(mul(5));
// console.log(mul.power);
// console.log(mul.prototype);

function user(name, score) {
    this.userName = name
    this.userScore = score
}

user.prototype.increment = function(){
    this.userScore++
}

user.prototype.printMe = function(){
    console.log(`score is: ${this.userScore}`);
}

const user1 = new user('prateek', 50)
const user2 = new user('pavan', 100)

user1.printMe()
