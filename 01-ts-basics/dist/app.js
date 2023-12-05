"use strict";
// // Explicit Types
// // let userName: string = "John Doe";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // // Implicit Types
// // let userAge = 32;
// // userAge = 32;
// // let userEmail: string;
// // userEmail = "test@test.com";
// let friends: Array<string>;
// friends = ["Monica", "Joey", "Ross"];
// let marks: number[];
// marks = [100, 99, 98, 97];
// let objVar: object;
// objVar = {
//   email: "john@test.com",
// };
// // TUPLE
// let userDetails: [number, string];
// userDetails = [101.12345, "User name"];
// console.log(userDetails[0].toFixed(2));
// // UNION
// let age: number | string;
// age = 32;
// age = "Thirty - two";
// // ANY
// let anyVar: any;
// anyVar = "";
// anyVar = 32;
// anyVar = true;
// // NULL
// let nullVar: null | string;
// nullVar = "";
// // Custom Types
// // - Types
// // type MyType = string | number | boolean;
// // let varOne: MyType = ""
// // varOne = 199;
// // varOne = true;
// // type MyType = {
// //     name: string
// //     age : number
// // }
// // let userOne: MyType = {
// //     name: "John Doe",
// //     age : 32
// // }
// // INTERFACES
// // interface User {
// //     firstName: string;
// //     lastName: string;
// // }
// // interface User {
// //     age? : number
// // }
// // interface Person extends User {
// // }
// // let user: User = {
// //     firstName: "John",
// //     lastName : "Doe"
// // }
// // CLASSES
// class Course {
//   private name: string;
//   private duration: number;
//   readonly _courseId: string = "C001";
//   constructor(name: string, duration: number) {
//     this.name = name;
//     this.duration = duration;
//   }
//   getCourseDetails(): string {
//     return `${this.name} - ${this.duration}`;
//   }
//   get courseId() {
//     return this._courseId;
//   }
//   set courseId(val: string) {
//     this._courseId = val;
//   }
// }
// // let react = new Course("React 101", 40);
// // console.log(react.getCourseDetails());
// // console.log(react.courseId);
// // react.courseId = "C002";
// // console.log(react.courseId);
// // ABSTRACT CLASSES
// // abstract class TakePhoto {
// //   cameraMode: string;
// //   burst: number;
// //   filter: string;
// //   constructor(cameraMode: string, burst: number, filter: string) {
// //     this.cameraMode = cameraMode;
// //     this.burst = burst;
// //     this.filter = filter;
// //   }
// //   abstract createReel(): string;
// //   createStory() {
// //     console.log("Creating Sitory");
// //   }
// // }
// // class Instagram extends TakePhoto {
// //   constructor(cameraMode: string, burst: number, filter: string) {
// //     super(cameraMode, burst, filter);
// //   }
// //   createReel(): string {
// //     return "Creating Reel";
// //   }
// //   createStory(): void {
// //     console.log("Overriding");
// //   }
// // }
// // let joey = new Instagram("Portairt", 5, "Pure");
// // joey.createStory();
// // GENERICS
// // function addAtBeginning(
// //   val: string | number,
// //   arr: (string | number)[]
// // ): (string | number)[] {
// //   return [val, ...arr];
// // }
// // const strArr = addAtBeginning("Hello", ["World", "Goobye"]);
// // console.log(strArr);
// // const numArr = addAtBeginning(101, [102, 104]);
// // console.log(numArr);
// // function addAtBeginning(
// //     val: any,
// //     arr: (any)[]
// //   ): (any)[] {
// //     return [val, ...arr];
// //   }
// // const strArr = addAtBeginning("A", ["B", "C"]);
// function addAtBeginning<T>(
//     val: T,
//     arr: T[]
//   ): T[] {
//     return [val, ...arr];
//   }
// const numArr = addAtBeginning<number>(10, [11, 12, 23]);
// const strArr = addAtBeginning<string>("A", ["B", "C"])
// interface Resource<T, U> {
//     serverName: T;
//     location: U;
// }
// let serverOne: Resource<number, string> = {
//     serverName: 101,
//     location :  "Delhi"
// }
// interface User {
//     score: number;
//     powers: string;
// }
// function playerDetails<T extends User>(playerOne: User) {
// }
// playerDetails({score : 98, powers : "Fatality"})
// BLOCK SCOPE
// let marks = [99, 97, 95];
// const newMarks = marks.map((mark) => mark + 1);
// const newMarks = marks.filter((mark) => mark % 2 === 0);
// console.log(newMarks);
// DESTRUCTURING : unpacking the collection
// let friends = ["Foo", "Bar", "Bam"];
// let [f1, f2, f3] = friends;
// console.log(f2); // ?
// // f2 = "New Value";
// friends[1] = "Second";
// console.log(friends); // ?
// console.log(f2); // ?
// let user = {
//   email: "test@test.com",
//   age: 32,
//   address: {
//     city: "Delhi",
//   },
// };
// let { email: e1, age: a1, address } = user;
// console.log(e1, a1, address);
// address.city = "Pune";
// console.log(user.address); // ?
// REST / SPREAD (...)
// - Create the collection from individual item
// - Available only in function arguments list but as a last argument
// function display(email: string, ...args: any[]) {
//   console.log(args[0]);
//   return args;
// }
// display("test@test")
// display("test@test", 32);
// const arr = display("test@test", 32, true);
// Spread the collection into individual item
// let marks = [99, 98, 97];
// let moreMarks = [96, 95, ...marks];
// console.log(moreMarks);
// let userOne = {
//   email: "test@test",
//   company: "LandisGyr",
// };
// let userTwo = {
//   ...userOne,
//   email: "john@test",
// };
// console.log(userTwo);
// let str = "";
// let a = 10;
// let b = 20;
// [b, a] = [a, b];
// console.log(a, b);
// PROMISE
// Producer Code
function promiseProducer(arr) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length < 2) {
                resolve({ message: "SUCCESS" });
            }
            else {
                reject(new Error("Something bad happened"));
            }
        }, 2000);
    });
    return promise;
}
// Consumer Code
// - then().catch()
// function promiseConsumer() {
//   promiseProducer([1])
//     .then(
//       (data: any) => {
//         console.log("FIRST THEN : ", data);
//         return data.message;
//       },
//       (err) => {
//         console.log("INSIDE THEN : ", err);
//       }
//     )
//     .then(
//       (result) => console.log("SECOND THEN : ", result),
//       (err: any) => console.log("SECOND CATCH : ", err)
//     )
//     .catch((err) => console.error(err));
// }
// - Async...await
function promiseConsumer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield promiseProducer([1, 2, 3]);
            console.log("DATA : ", data);
        }
        catch (err) {
            console.error(err);
        }
    });
}
promiseConsumer();
// window.onload = function () {
//   const btnfetch = document.querySelector("#btnFetch") as HTMLButtonElement;
//   const listContainer = document.querySelector(
//     "#list-container"
//   ) as HTMLUListElement;
//   btnfetch.addEventListener("click", function () {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         users.forEach((user: { name: string }) => {
//           const liElement = document.createElement("li");
//           liElement.innerHTML = user.name;
//           listContainer.appendChild(liElement);
//         });
//       })
//       .catch(console.error);
//   });
// };
window.onload = function () {
    const btnfetch = document.querySelector("#btnFetch");
    const listContainer = document.querySelector("#list-container");
    btnfetch.addEventListener("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://jsonplaceholder.typicode.com/users");
                const users = yield response.json();
                // More endpoints
                users.forEach((user) => {
                    const liElement = document.createElement("li");
                    liElement.innerHTML = user.name;
                    listContainer.appendChild(liElement);
                });
            }
            catch (err) {
                console.error(err);
            }
        });
    });
};
