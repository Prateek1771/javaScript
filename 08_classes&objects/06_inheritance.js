class user {
    constructor(userName){
        this.userName =userName
    }

    logMe(){
        console.log(this.userName);
    }
}

class Teacher extends user {
    constructor(userName, email, password) {
        super(userName)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course was added by: ${this.userName}`);
    }
}

const user1 = new Teacher('prateek','hitli@gmail.com','1234')
console.log(user1);
user1.addCourse()

const user2 = new user('abc@123')
console.log(user2);
user2.logMe()

console.log(user1 === user2);            // false
console.log(user1 === Teacher);          // false
console.log(user1 instanceof user);      // true


