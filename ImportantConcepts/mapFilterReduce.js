arr = [1, 2, 3, 4, 5];

console.log(
  arr.map((i) => {
    return i * 2;
  })
);

console.log(arr);

console.log(
  arr.filter((i) => {
    return i > 4;
  })
);

//Factorial
let a2 = arr.reduce((i, j) => {
  return i * j;
});
console.log(a2);
/*
2,3,4,5
6,4,5
24,5
120
*/