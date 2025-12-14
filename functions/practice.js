// JavaScript Function Practice Questions (Easy Level)
// 1. Write a function to print 'Hello World'.

function printHello() {
    console.log("Ans 1");
    console.log("hello world.");


}
printHello();

// ########################################################################################//

// 2. Create a function to add two numbers.

function add(val1, val2) {
    console.log("Ans 2");
    return val1 + val2;
}

const result = add(30, 49);

console.log(result);


// 3. Write a function to subtract two numbers.
function subtract(val1, val2) {
    console.log("Ans 3");
    return val1 - val2;
}

console.log(subtract(50, 40));



// 4. Make a function that multiplies two numbers.

multiplies = (val1, val2) => {
    console.log("Ans 4");
    return val1 * val2;

}


console.log(multiplies(30, 40))



// 5. Create a function that divides two numbers.


function devide(val1, val2) {
    console.log("Ans 5");
    const result = val1 / val2;
    return result;
}

// console.log(devide(30, 5))

// 6. Write a function that takes your name and prints a greeting message.
function greeting(name) {
    console.log("Ans 6");
    console.log("Hello", name, "welcome to coding world.");
}

greeting("Rohan varma");


// ########################################################################################//

// 7. Create a function to find the square of a number.

function square(number) {
    console.log("Ans 7");
    return (number * number);
}
console.log(square(10));


// 8. Write a function to find the cube of a number.

function cube(number) {
    console.log("Ans 8");
    return number * number * number;
}

console.log(cube(10));


// 9. Create a function to check whether a number is even or odd.
function check(number) {
    if (number % 2 == 0) {
        console.log("Ans 9");
        return number + " is an even numebr";
    } else {
        console.log("Ans 9");
        return (number + " is an odd number");
    }
}

console.log(check(20))

// 10. Write a function to find the largest of two numbers.

function largest(number1, number2) {
    if (number1 > number2) {
        console.log("Ans 10");
        console.log(number1 + " is greater then" + number2)
    } else if (number2 > number1) {
        console.log("Ans 10");
        console.log(number2 + " is greater then" + number1)
    }
} largest(30, 60);


// 11. Create a function to calculate area of a rectangle (length × width).

function rectangle(length, width) {
    console.log("Ans 11");
    return length * width;
};

console.log(rectangle(12, 30))




// 12. Write a function to convert Celsius to Fahrenheit.

function convert(celc) {
    console.log("Ans 12")
    return (celc * 9 / 5) + 32;

};

console.log(convert(32))


// 13. Write a function that returns the sum of first 10 natural numbers.


const n_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumNaturalNumber(arr, arr_lenght) {
    console.log("Ans 13")
    let sum = 0;
    for (let i = 0; i < arr_lenght; i++) {
        sum += arr[i]
    }
    return sum;
}
const sumOfn = sumNaturalNumber(n_arr, n_arr.length);
console.log(sumOfn)


// 14. Create a function that prints numbers from 1 to 5 using a loop.
console.log("Ans 14")
for (let i = 1; i <= 5; i++) {
        console.log(i)
    }




// 15. Write a function that takes a string and returns it in uppercase.
console.log("Ans 15");

let lwr_Str = "vipin";

let upper = lwr_Str.toUpperCase();

console.log(upper);


// 16. Create a function that returns the length of a string.

function str_lenght (str){
    console.log("Ans 16");
    return str.length;
}

console.log(str_lenght("Vipin"));




// 17. Write a function to reverse a string (simple method).





// 18. Write a function that adds all numbers in an array.
console.log("Ans 18")
let numers = [1,4,5,67,7]
let sum_arrNumber = 0;
for(let i in numers){
    sum_arrNumber+=numers[i];
}

console.log(sum_arrNumber);


// 19. Create a function to find the smallest number in an array.

function check_Smallest(arr){
    console.log("Ans 19")
    let small = arr[0];
    for(let i = 0 ; i< arr.length; i++){
            if( arr[i] < small ){
                small = arr[i];
            }
    }
    console.log(small)
}

let ar = [2,3,89,1,0];
check_Smallest(ar)





// 20. Write a function that returns 'positive', 'negative', or 'zero' for a given number.

function check_number(num){
    console.log("Ans 20")
    if(num > 0){
        console.log(num," is positive number.");
    }else if(num < 0){
        console.log(num , " is negative number.");
    }else if(num == 0){
        console.log(num , " you entered zero.")
    }
}

check_number(5);


