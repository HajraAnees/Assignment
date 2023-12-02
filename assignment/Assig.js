"use strict";
// Exercise 1
// Write a program that calculates the area of a rectangle ?
Object.defineProperty(exports, "__esModule", { value: true });
var lenght = 400;
var Width = 20;
var area = lenght * Width;
console.log("The area of rectangle with length ".concat(lenght, " and width ").concat(Width, " is : ").concat(area));
console.log("-----------");
// Exercise 2
// Write a program that takes input and calculate the volume of a cube?
var length1 = 23;
var width = 9;
var height = 27;
var volume = length1 * width * height;
console.log("The volume of a cube with dimensions ".concat(length1, " x ").concat(width, " x ").concat(height, " is: ").concat(volume));
console.log("-----------");
// Exercise 3
// Write a program that chek if a given number is positive, negative, or zero?
var givenNumber = 220;
if (givenNumber > 0) {
    console.log("Given number is Psotive");
}
else if (givenNumber < 0) {
    console.log("Given number is Negative");
}
else {
    console.log("Given number is zero");
}
console.log("-----------");
// Exercise 4
// Write a program if a given number is even or odd ?
var chekNumber = 8;
if (chekNumber % 2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
console.log("-----------");
// Exercise 5
// Write a program that determines if a person is eligible to vote based on their age.
var person = 20;
if (person >= 18) {
    console.log("This Person is eligible to vote.");
}
else {
    console.log("This Person is not eligible to vote.");
}
console.log("-----------");
// Exercise 6
// Write a program that calculate the result of mathematical expression. ((10 + 5) * 3-2)/(4 % 3) -7)
var num = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log("The result of  mathematical Expression is:", num);
console.log("-----------");
