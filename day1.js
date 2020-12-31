// Day 1: Arithmetic Operators
// Objective
// In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

// Task
// Complete the following functions in the editor below:

// getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
// getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
// The values returned by these functions are printed to stdout by locked stub code in the editor.

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    console.log(area);
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length + width) * 2
    console.log(perimeter);
}

getArea(10, 2)
getPerimeter(10, 2)

// Day 1: Functions
// Objective
// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task
// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n (i.e., n factorial).

// Input Format
// Locked stub code in the editor reads a single integer, n , from stdin and passes it to a function named factorial.

// Constraints
// 1<=n>=10

// Output Format
// The function must return the value of n.

const factorial = (n) => {
    if(n === 0 || n === 1){
        console.log(1)
    } else {
        for (let i = n - 1; i >= 1; i--){
            n *= i
        }
        console.log(n)
    }
}

factorial(1)