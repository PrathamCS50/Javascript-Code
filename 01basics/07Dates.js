let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

const myCreatedDate = new Date(2024, 6, 26);
console.log(myCreatedDate.toDateString());
console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();
console.log(newDate.toDateString());
console.log(newDate.toLocaleString("default", { weekday: "long" }));
