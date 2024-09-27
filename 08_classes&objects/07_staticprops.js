class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe(){
        console.log(`UserName: ${this.userName}`);
    }

    static createID(){
        return ((Math.random * 10) + 1)
    }
}

const user1 = new User('prateek')
// console.log(user1.createID());

class Teacher extends User {
    constructor(userName, email) {
        super(userName)
        this.email = email
    }
}

const apple = new Teacher('apple','apple@gmail.com')
console.log(apple);
apple.logMe()
console.log(apple.createID());
