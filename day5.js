// Day 5: Inheritance

// Objective
// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task
// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
// 1. Add an area method to Rectangle's prototype.
// 2. Create a Square class that satisfies the following:
//     - It is a subclass of Rectangle.
//     - It contains a constructor and no other methods.
//     - It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return this.w * this.h
}

// let rectangle1 = new Rectangle(1, 2)
// console.log(rectangle1.area())

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}

// let square1 = new Square(2)
// console.log(square1.area())

// Day 5: Template Literals

// Objective
// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task
// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.








// Day 5: Arrow Functions

// Objective
// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task
// // Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:
// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Input Format
// The first line contains an integer, n, denoting the size of nums.
// The second line contains n space-separated integers describing the respective elements of nums.

// Output Format
// Return the modified array where every even element is doubled and every odd element is tripled.

let nums = [1, 2, 3, 4, 5]

function modifyArray(nums){
    let modifiedArray = []
    nums.map(num => {
        if(num % 2 === 0) {
            modifiedArray.push(num * 2)
        } else {
            modifiedArray.push(num * 3)
        }
    })
    return modifiedArray
}

modifyArray(nums)