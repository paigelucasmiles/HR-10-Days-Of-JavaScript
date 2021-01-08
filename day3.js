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