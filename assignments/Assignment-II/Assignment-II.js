// JavaScript If, If-Else, and If-Else If Practice Questions


/**
 * Basic Level (If Condition)
 *  • Write a program to check if a number is positive.
    • Check if a number is greater than 100.
    • Take a user’s age and print “Eligible to vote” if age ≥ 18.
    • Check if a given string is not empty.
    • Check if a variable marks is greater than 35, then print “Pass”.*/

// let number = 30;
// if(number > 0){
//     console.log("Positive number.");
// }


// let userAge = prompt("Enter your age: ");

// if(userAge >= 18){
//     console.log("Eligible to vote");
// }


// let str = "afd";
// if(str.length === 0){
//     console.log("enpty string");
// }


/**
If-Else Practice Questions
    • Write a program to check if a number is even or odd.
    • Take a temperature value — if it’s above 30 print “Hot”, else print “Cool”.
    • Check if a given number is divisible by 5 — if not, print “Not Divisible”.
    • If a person’s age is ≥ 18 print “Adult”, else “Minor”.
    • If a string is 'JavaScript', print “Correct language!”, else print “Try again!”.
 */

//  ===== • Write a program to check if a number is even or odd. ================== //


// let number = 30;

// if(number % 2 == 0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }


// ======= • Take a temperature value — if it’s above 30 print “Hot”, else print “Cool”. ===//


// let temp = 30;

// if (temp > 30) {
//     console.log("Hot");
// } else {
//     console.log("Cool");
// }


//==== • Check if a given number is divisible by 5 — if not, print “Not Divisible”. ====//

// let number = 40;

// if (number % 5 == 0) {
//     console.log("divisible by 5")
// }
// else {
//     console.log("Not 'divisible");
// }


//===  • If a string is 'JavaScript', print “Correct language!”, else print “Try again!” ===//

// let favLang = "JavaScript";
// let userAns = prompt("Enter vipin's favorite language: ");
// if (userAns === favLang) {
//     console.log("Correct Language")
// } else {
//     console.log("Try again");
// }


/**
If-Else If Ladder Practice Questions
    • Check the grade of a student based on marks:
      >=90 → A
      >=75 → B
      >=50 → C
      <50  → Fail
    • Take a number and print whether it’s positive, negative, or zero.
    • Based on time (hour in 24-hr format), print:
      0–11 → “Good Morning”
      12–17 → “Good Afternoon”
      18–23 → “Good Evening”
    • Check month number (1–12) and print the month name.
    • Based on a person’s age:
      age < 13 → “Child”
      13–19 → “Teenager”
      20–59 → “Adult”
      60+ → “Senior Citizen”
 */

// <======= • Check the grade of a student based on marks: ========> //

// let marks = 95;

// if (marks >= 90) {
//     console.log("A")
// }
// else if (marks >= 75) {
//     console.log("B");
// }
// else if (marks >= 50) {
//     console.log("C");
// }
// else if (marks < 50) {
//     console.log("Fail");
// }



//=====  • Take a number and print whether it’s positive, negative, or zero. ======//

// let inpNum = prompt("Enter a number: ");

// if (inpNum > 0) {
//     console.log("Positive");
// }
// else if (inpNum == 0) {
//     console.log("Zero");
// }
// else if (inpNum < 0) {
//     console.log("Negative");
// }


// <======= • Check month number (1–12) and print the month name. =====> //

// let userInp  = prompt("Find the month by number: ");

// switch (userInp){
//     case "1": console.log("January")
//     break;
//     case "2": console.log("February")
//     break;
//     case "3": console.log("March")
//     break;
//     case "4": console.log("April")
//     break;
//     case "5": console.log("May")
//     break;
//     case "6": console.log("June")
//     break;
//     case "7": console.log("July")
//     break;
//     case "8": console.log("August")
//     break;
//     case "9": console.log("September")
//     break;
//     case "10": console.log("October")
//     break;
//     case "11": console.log("November")
//     break;
//     case "12": console.log("December")
//     break;
//     default:console.log("invalid");
// }


// <=====  • Based on a person’s age: =====> //

// let personAge = prompt("Enter your age: ");

// if(personAge < 13 ){
//     console.log("Your are a Child");
// }
// else if(personAge >= 13 && personAge <=19 ){
//     console.log("Your are a Teen ages");
// }
// else if(personAge >= 20 && personAge <=59 ){
//     console.log("You are an Adult");
// }
// else if(personAge >=60){
//     console.log("Your are a Senior citizen");
// }