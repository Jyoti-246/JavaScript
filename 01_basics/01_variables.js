const accountId = 1234;
let accountEmail = "jyoti203@gmail.com"; // always using let
var accountPassword = "1223";
accountCity = "jaipur";
let accountState;

// accountId = 10; // not allowed

accountEmail = "hchc@gmail"
accountPassword = "0000"
accountCity = "jhunjhunu"
console.log(accountId);

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
