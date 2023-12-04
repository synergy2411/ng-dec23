// // Explicit Types
// // let userName: string = "John Doe";

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

let user = {
  email: "test@test.com",
  age: 32,
  address: {
    city: "Delhi",
  },
};

let { email: e1, age: a1, address } = user;

console.log(e1, a1, address);

address.city = "Pune";

console.log(user.address); // ?
