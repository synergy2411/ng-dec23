import * as fortune from "./utils/fortune.js";
import add, { mul } from "./utils/maths.js";

console.log("Your lucky Number today is : ", fortune.getLuckyNumber());
console.log("Your daily quote : ", fortune.getDailyQuotes());

console.log("Sum is : ", add(2, 4));
console.log("Multiply is : ", mul(2, 4));

console.log("RANDOM : ", getRandomNumber());
