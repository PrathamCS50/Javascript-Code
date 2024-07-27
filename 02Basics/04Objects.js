// const user = new Object(); //Singleton Object
// const user = {}; //Non - SingleTon Object
// console.log(user);

// A singleton object is an object that limits the number of instances of a class to one, while allowing the flexibility to create more objects if needed.
// A non-singleton object, on the other hand, doesn't limit the number of instances that can be created.

const user = {};
user.id = "123abc";
user.name = "Pratham";

console.log(user);

const user2 = {
  email: "gs@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Pratham",
      lastName: "Singh",
    },
  },
};

console.log(user2.fullName.userFullName.lastName);

const a = { 1: "a", 2: "b" };
const b = { 3: "c", 4: "d" };
const c = { ...a, ...b }; //SPREAD OPERATOR
const d = Object.assign({}, a, b); // -> Objec.assign(target, Source)
console.log(d);

console.log(Object.keys(user2)); //Returns array
console.log(Object.values(user2)); //Returns array
console.log(Object.entries(user2)); //Returns array

console.log(user.hasOwnProperty("name"));
