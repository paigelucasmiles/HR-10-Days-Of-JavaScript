// Day 3: Arrays

// Objective
// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Task
// Complete the getSecondLargest function in the editor below. It has one parameter: an array, NUMS, of N numbers. The function must find and return the second largest number in NUMS.

// Input Format
// Locked stub code in the editor reads the following input from stdin and passes it to the function:
// The first line contains an integer, N , denoting the size of the NUMS array.
// The second line contains N space-separated numbers describing the elements in NUMS.

// Constraints
// 1 <= n <= 10
// 0 <= NUMS[i] <= 100, where NUMS[i] is the number at index i.
// The numbers in NUMS are not distinct.

// Output Format
// Return the value of the second largest number in the NUMS array.

function getSecondLargest(nums) {
    // Complete the function
    // const uniqueNums = new Set(nums)
    // let uniqueNumsArray = []
    // uniqueNumsArray = [...uniqueNums]
    // const uniqueSortedNums = uniqueNumsArray.sort()
    // console.log(uniqueSortedNums[uniqueSortedNums.length - 2])

    const uniqueNums = Array.from(new Set(nums));
    const reverseSorted = uniqueNums.sort((a, b) => {return b - a})
    const second = reverseSorted[1]
    console.log(second)
}

getSecondLargest([2, 7, 3, 7])

// Objective
// In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

// Task
// Complete the reverseString function; it has one parameter, s. You must perform the following actions:
// 1. Try to reverse string s using the split, reverse, and join methods.
// 2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// 3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

// Input Format
// Locked stub code in the editor reads variable s from stdin and passes it to the function.

// Output Format
// You must write two print statements using console.log():
// 1. Print s the contents of a caught exception's message on a new line. If no exception was thrown, this line should not be printed.
// 2. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

const s = '1234'
const t = Number(1234)

function reverseString(s) {
    try {
        s = s.split("").reverse().join("")
    } catch (e){
        console.log(e.message)
    } finally {
        console.log(s)
    }
}

reverseString(t)

// Day 3: Throw
// Objective
// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task
// Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
// - If a is 0, throw an Error with message = Zero Error.
// - If a is negative, throw an Error with message = Negative Error.

// Input Format
// Locked stub code in the editor reads the following input from stdin and passes each value of a to the function as an argument:
// The first line is an integer, n, denoting the number of times the function will be called with some a.
// Each line i of the n subsequent lines contains an integer denoting some a.

// Constraints
// - 1 <= n <= 5
// - -100 <= a <= 100

// Output Format
// If the value of a is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:
// - If a is 0, throw an Error with message = Zero Error.
// - If a is negative, throw an Error with message = Negative Error.

function isPositive(a){
    if (a > 0) {
        return('YES');
    } else if ( a === 0) {
        throw new Error('Zero Error');
    } else if ( a < 0 ) {
        throw new Error('Negative Error');
    }
};

