// Overview: 10 Days of JavaScript
// This series focuses on learning and practicing JavaScript. 
// Each challenge comes with a tutorial article, 
// and you can view these articles by clicking either the Topics tab along the top 
// or the article icon in the right-hand menu.

// Objective
// In this challenge, we review some basic concepts that will get you started with this series. 
// Check out the tutorial to learn more about JavaScript's lexical structure.

// Task
// A greeting function is provided for you in the editor below. 
// It has one parameter, parameterVariable. 
// Perform the following tasks to complete this challenge:

// - Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. 
// The code for this portion of the task is already provided in the editor.

// - Use console.log() to print the contents of  (i.e., the argument passed to main).

// You've got this!

// Input Format
// Data Type	- string	
// Parameter	- parameterVariable
// Description - A single line of text containing one or more space-separated words.

// Output Format
// Print the following two lines of output:

// On the first line, print Hello, World! (this is provided for you in the editor).
// On the second line, print the contents of parameterVariable.

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);    
}

// Day 0: Data Types

// Objective
// Today, we're discussing data types. 
// Check out the attached tutorial for more details.

// Task
// Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. 
// You must use the  operator to perform the following sequence of operations:

// 1. Convert secondInteger to an integer (Number type), 
// then sum it with firstInteger and print the result on a new line using console.log.
// 2. Convert secondDecimcal to a floating-point number (Number type), 
// then sum it with firstDecimal and print the result on a new line using console.log.
// 3. Print the concatenation of firstString and secondString on a new line using console.log. 
// Note that firstString must be printed first.

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger))
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal))
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString)
}