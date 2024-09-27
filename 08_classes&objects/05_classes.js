// class User {
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;        
//     }
// 
//     encryptPassword(){
//         return `${this.password} abcd`
//     }
//     
//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }
// 
// const user1 = new User('prateek', 'hitli', '1234')
// 
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());
// 

// Behind the scene

function user(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;       
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

User.prototype.changeUserName = function(){
   return `${this.userName.toUpperCase()}`
}

const user2 =  new user('prateek2','hitli2@gmail.com','1234')

console.log(user2.encryptPassword());
console.log(user2.changeUserName());