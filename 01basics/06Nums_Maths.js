const bal = 100;
console.log(bal);

const newBal = new Number(bal);
console.log(newBal);

console.log(newBal.toString());
console.log(newBal.toFixed(3)); //E-Commerce website

const a = 1125.8997;
console.log(a.toPrecision(3));

const b = 1000000000;
console.log(b.toLocaleString());

console.log("***************************Maths***************************");
/*
 abs
 round
 ceil
 floor
 max
 min
 random
*/

// console.log(Math.round(Math.random() * 100));
const min = 1;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Gives random values between  2 numbers
