/* Primitive DataTypes 
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

Reference Types/ Non-Primitive Data Types
1. Array
2. Objects
3. Functions


NULL vs UNDEFINED ->
 1. undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null
2. Key differences:
3. Type:
        null is a primitive data type, while undefined is a primitive value representing the absence of a value.
4. Assignment:
        undefined is assigned automatically by JavaScript, while null is assigned explicitly by the developer.

*/

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); //False

// Array
const num = [1, 2, 3, 4, 5];
console.log("Length of Num Array : " + num.length); //5
console.log(num);

let myObj = {
  name: "Pratham",
  age: 22,
};
console.log(myObj);

const myFunc = function () {
  console.log("Hello World");
};

myFunc();

console.log("Type of MyFunc : " + typeof myFunc);
console.log("Type of myObj : " + typeof myObj);
console.log("Type of MyFunc : " + typeof myFunc);
