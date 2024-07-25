const accountId = 144553;
let accountEmail = "parhh320@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
// accountId = 2; //Not Allowed

//Var is used less due to functional and block scope

accountEmail = "pratham@gmail.com";
accountPassword = "112233";
accountCity = "Faridabad";
accountState = null;

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
