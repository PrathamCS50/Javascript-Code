//Singleton =-> Literals
// object.create

// Object Literals
//Key is stored as a string

const mySym = Symbol("Key1");
const user = {
  name: "Pratham",
  "Full Name": "Pratham Goel",
  [mySym]: "MyKey1",
  age: 22,
  location: "Faridabad",
  email: "pratham@gmail.com",
  isLoggedIn: true,
  lastLoginDetails: ["Monday", "Saturday"],
};

console.log(user.email);
console.log(user["name"]);
console.log(user["Full Name"]); //Can't be accessed by Dot method
console.log(typeof user[mySym]);
console.log(mySym);
// Object.freeze(user);

user.email = "goel@gmail.com";
console.log(user);

user.greet = function () {
  console.log("Greetings");
};

user.greet2 = function () {
  console.log(`Greetings, ${user["Full Name"]} `);
};
user.greet3 = function () {
  console.log(`Greetings, ${this.name} `);
};
console.log(user.greet2());
console.log(user.greet3());
