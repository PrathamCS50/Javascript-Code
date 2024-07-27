// let fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });
// // file.txt se read karo data in utf-8 format and then callback function, if there is an error , throw error, else show data

// console.log("This is end of file");

// //Output : This is end of file
// // null Pratham is learning JS, React, NextJS

// let fs = require("fs/promises");
// let a = fs.readFile("file.txt", "utf-8");
// a.then((data) => {
//   console.log(data);
// });
// console.log("This is end of file");
// ************************Alternatve **********************************
let fk = require("fs/promises");

let b = fk.readFile("file.txt", "utf-8");
b.then((dta) => {
  console.log(dta);
});

// *********************Async Await ***************************
// Non blocking code to Blocking code is async wait
let fss = require("fs/promises");
const readthree = async (file1, file2, file3) => {
  let a1 = fss.readFile("File1.txt", "utf-8");
  let a2 = fss.readFile("File2.txt", "utf-8");
  let a3 = fss.readFile("File3.txt", "utf-8");
  let c1 = await a1;
  console.log(c1);
  let c2 = await a2;
  console.log(c2);
  let c3 = await a3;
  console.log(c3);
};

readthree("file1", "file2", "file3");
