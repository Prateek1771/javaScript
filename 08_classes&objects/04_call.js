function SetUserName(userName) {
    // comples DB Calls
    this.userName = userName
    console.log('called');
    
}

function createUser(userName, email, password){
    // SetUserName(userName) // this passes the refference but deoes not call: createUser { email: 'hitli@gmail.com', password: '12345' }
    SetUserName.call(this, userName)
    this.email = email;
    this.password = password;
}

const user1 = new createUser('prateek','hitli@gmail.com','12345')
console.log(user1);
