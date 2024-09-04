const accountId = 12345
let accountEmail = "hitliprateek@gmail.com"
var accountPassword = '122333'
accountCity = 'Koppal'
let accountState;

accountEmail = 'abc@gmail.com'
accountPassword = '789249'
accountCity = 'Bengaluru'

console.log(accountId); // display indivisual values
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // display values in table format


/*
Prifer not to use var
because of issues in block scope and functional scope
*/