// Exercise 1
// Write a program that calculates the area of a rectangle ?

let lenght: number = 400;
let Width: number = 20;
let area = lenght * Width;

console.log(`The area of rectangle with length ${lenght} and width ${Width} is : ${area}`);
console.log("-----------");



// Exercise 2
// Write a program that takes input and calculate the volume of a cube?
const length1: number = 23;
const width: number = 9;
const height: number = 27;

const volume: number = length1 * width * height;

console.log(`The volume of a cube with dimensions ${length1} x ${width} x ${height} is: ${volume}`);
console.log("-----------");



// Exercise 3
// Write a program that chek if a given number is positive, negative, or zero?

const givenNumber: number = 220;

if (givenNumber > 0)
{
    console.log("Given number is Psotive");
}
else if (givenNumber < 0)
{
    console.log("Given number is Negative");
}
else
{
    console.log("Given number is zero");
}
console.log("-----------");




// Exercise 4
// Write a program if a given number is even or odd ?

let chekNumber: number = 8;

if (chekNumber % 2 === 0)
{
    console.log("Number is even");    
}
else
{
    console.log("Number is odd");   
}
console.log("-----------");



// Exercise 5
// Write a program that determines if a person is eligible to vote based on their age.

const person: number = 20;
if (person >= 18)
{
    console.log("This Person is eligible to vote.");
}
else
{
    console.log("This Person is not eligible to vote.");
}
console.log("-----------");




// Exercise 6
// Write a program that calculate the result of mathematical expression. ((10 + 5) * 3-2)/(4 % 3) -7)

const num: number = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log("The result of  mathematical Expression is:",num);
console.log("-----------");


export {};