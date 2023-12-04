// let x = "Hello World";

// console.log(typeof x); // string

// x = 299;

// console.log(typeof x); // number

// x = { name: "John" };

// console.log(typeof x); // O=object

// let y = 2;

// let z = "2";

// let result = y - z;

// console.log(result); // ?

// console.log(y === z); // ?

// function mystery() {
//   function chooseNumber() {
//     return 7;
//   }

//   return chooseNumber;

//   function chooseNumber() {
//     return 12;
//   }
// }

// console.log(mystery()); //

// let nestedFn = mystery();

// console.log(nestedFn());

// CLOSURE
// function testX() {
//   let x = 4;
//     return function () {
//     return ++x;
//   };
// }

// let nested = testX();

// console.log(nested());
// console.log(nested());
// console.log(nested());

// LEXICAL SCOPING
// let x = 99;

// function b() {
//   console.log(x); // 99
// }

// function a() {
//   let x = 101;
//   b();
// }

// a();

// let x = 99;

// function a() {
// //   let x = 101;
//     function b() {
//         // let x = 201;
//     console.log(x); // 99
//   }
//   b();
// }

// a();

// let x = 101;

// let x = "201";

// function display(arr) {
//   if (arr.length > 2) {
//     const LOAD = "LOADING";
//     console.log(FLASH); // undefined
//   } else {
//     const FLASH = "FLASHING";
//   }
// }

// display([1, 2, 34]); // ?

// const username = "JOHN";

// username = "Jenny";

// const user = {
//   name: "John",
// };

// user.name = "Jenny";

// user = {
//   name: "Jack",
// };

// console.log(user.name); // ?

// const fruits = ["apple", "banana"];

// fruits.push("kiwi");

// console.log(fruits); // ?

// TEMPLATE LITERALS (``) BackTick

// let username = "John";

// let greet = `

// Hello ${username} !

// How are you?
// `;

// console.log(greet);

// function demo(arr = []) {
//   console.log(arr.length);
// }

// demo([1, 2, 3]);

// demo();

// ARROW FUNCTION
// - 'this' keyword
// - 'arguments' keyword
// - 'new' operator

let sum = (n1, n2) => n1 + n2;

console.log(sum(2, 4));

let marks = [99, 97, 95];
