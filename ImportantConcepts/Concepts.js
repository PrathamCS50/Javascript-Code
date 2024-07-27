console.log("***************************Spread Operator**********************");
arr = [1, 2, 3, 4];

function avg(a, b, c) {
  return (a + b + c) / 3;
}

console.log(avg(...arr)); //Ignores the 4th Number
arr2 = [...arr, 5, 6];
console.log(arr2);

let obj1 = {
  name1: "P",
  email: "d1@",
  age1: 25,
};
obj2 = { ...obj1, age1: 22 };
console.log(obj2);

console.log(
  "*************************DESTRUCTURING**********************************"
);
let { name1, email, age } = obj1;
console.log(name1, email, age);

console.log("*************************Async**********************************");

console.log("First ");

setTimeout(() => {
  console.log("In Timeout session");
}, 1000);
console.log("Second");

console.log(
  "*************************Promises**********************************"
);
