let score = "undefined";

console.log("Type of score :" + typeof score);

let valueInNumber = Number(score);

console.log("Type of ValueInNumber : " + typeof valueInNumber);
console.log("Value of ValueInNumber : " + valueInNumber);

let s = "33abc";
console.log("Value of s : " + Number(s)); // NaN -> Not A NUmber

// 33 => 33
// 33abc => NaN
// null => NaN
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1;

let isBooleanLoogedIn = Boolean(isLoggedIn);

console.log(isLoggedIn); //1
console.log(isBooleanLoogedIn); //true

// 1 => 1 true
// Pratham => true
// "" => false

let num = 33;
let sn = String(num);
console.log(num); //33
console.log(typeof sn);
