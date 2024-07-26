const arr = [1, 2, 3, "Pratham", true];
console.log(`Array -> ${arr}`);
console.log(arr[2]);

arr.push(6);
console.log(`Pushed Array -> ${arr}`);
arr.push(7);
console.log(`Pushed Array -> ${arr}`);
arr.pop();
console.log(`Poped out Array -> ${arr}`);

arr.unshift(0);
console.log(`Unshifted Array -> ${arr}`);

arr.shift(1);
console.log(`shifted Array -> ${arr}`);

console.log(arr.includes("true")); //String
console.log(arr.includes(true)); //Boolean

console.log(arr.indexOf(6));

const newArr = arr.join();
console.log(arr); //Array Frmat
console.log(newArr); //String

console.log(typeof arr);
console.log(typeof newArr);

console.log("A ", arr);
const a = arr.slice(1, 4);
console.log(a);

console.log("B ", arr);
const b = arr.splice(1, 4); // changes the original array only
console.log(b);

console.log("C", arr);
console.log("**************************************");
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// arr1.push(arr2);
// console.log(arr1);
const arr4 = arr1.concat(arr2);
console.log(arr4);

const arr6 = [11, 12, 13, 14, 15];
const arr5 = [...arr1, ...arr6, ...arr2]; //Spread Operator
console.log(arr5);

const arr7 = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  8,
  [9, 1, 2, [3, 4], 5, [6, 7, [8, 9, 1, [2]]]],
];

const arr8 = arr7.flat();
// console.log(arr8);
console.log("Flat Array");
console.log(arr7.flat(Infinity));

console.log(Array.from("Pratham"));

const a1 = 100;
const a2 = 200;
const a3 = 300;

console.log(Array.of(a1, a2, a3));
