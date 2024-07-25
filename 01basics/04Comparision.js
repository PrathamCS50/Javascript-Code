console.log("2 > 1 : " + (2 > 1));
console.log("2 < 1 : " + (2 < 1));
console.log("2" > 1); //True
console.log("02" > 1); //true
console.log("2" < 1); //False

console.log("null > 0 : " + (null > 0)); //False
console.log("null < 0 : " + (null < 0)); //False
console.log("null >= 0 : " + (null >= 0)); //True
console.log("null <= 0 : " + (null <= 0)); //True
//Comparision converts null to a number as 0

console.log("undefined > 0 : " + (undefined > 0)); //False
console.log("undefined < 0 : " + (undefined < 0)); //False
console.log("undefined >= 0 : " + (undefined >= 0)); //False
console.log("undefined <= 0 : " + (undefined <= 0)); //False

// == checks the value
// === checks the value along with the data type

console.log(2 == 2);
console.log(2 === 2);
console.log("2" === "2");
console.log("2" === "2");
