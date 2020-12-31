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
    console.log("area:", area);
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length + width) * 2
    console.log("perimiter:", perimeter);
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
// 1 <= n <= 10

// Output Format
// The function must return the value of n.

const factorial = (n) => {
    if(n === 0 || n === 1){
        console.log("factorial:", 1)
    } else {
        for (let i = n - 1; i >= 1; i--){
            n *= i
        }
        console.log("factorial:", n)
    }
}

factorial(4)



// Day 1: Let and Const

// Objective
// In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

// Task
// 1. Declare a constant variable, PI , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// 2. Read a number, r , denoting the radius of a circle from stdin.
// 3. Use PI and r to calculate the area and perimeter of a circle having radius r.
// 4. Print area as the first line of output and print perimeter as the second line of output.

// Input Format
// A single integer, r, denoting the radius of a circle.

// Constraints
// 0 <= r <= 100
// r is a floating-point number scaled to at most 3 decimal places.

// Output Format
// Print the following two lines:
// 1. On the first line, print the AREA of the circle having radius r.
// 2. On the second line, print the PERIMETER of the circle having radius r.

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    // Print the area of the circle:
    console.log(PI * (r * r))

    // Print the perimeter of the circle:
    console.log(2 * PI * r)
}

main(2.6)