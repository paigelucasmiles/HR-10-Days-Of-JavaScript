// Day 4: Creating a Rectangle Object

// Objective
// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

// Task
// Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
// - length: This value is equal to a.
// - width: This value is equal to b.
// - perimeter: This value is equal to 2 * (a + b) 
// - area: This value is equal to a * b
// Note: The names of the object's properties must be spelled correctly to pass this challenge.

// Input Format
// The first line contains an integer denoting a.
// The second line contains an integer denoting b.

// Constraints
// - 1 <= a,b <= 100

// Output Format
// Return a object that has the properties specified above. Locked code in the editor prints the returned object's length, width, perimeter, and area to STDOUT.

function rectangle(a, b){
    console.log({
        length: a,
        width:  b,
        perimeter: 2*(a + b),
        area: a * b
    })
}

rectangle(4, 5)

// Day 4: Count Objects

// Objective
// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task
// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x == o.y.

// Constraints
// 5 <= n <= 10
// 1 <= x, y <= 100

// Output Format
// Return a count of the total number of objects o such that o.x == o.y. Locked stub code in the editor prints the returned value to STDOUT.

array = [
    {x: 1, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 3},
    {x: 3, y: 4},
    {x: 4, y: 5}
]

function getCount(objects) {
    let o = 0

    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            o++
        }
    }
    console.log(o)
}

getCount(array)

// Day 4: Classes

// Objective
// In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.

// Task

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// - A perimeter() method that returns the polygon's perimeter.
// - Locked code in the editor tests the Polygon constructor and the perimeter method.
// Note: The perimeter method must be lowercase and spelled correctly.

// Input Format
// There is no input for this challenge.

// Output Format
// The perimeter method must return the polygon's perimeter using the side length array passed to the constructor.

// Explanation
// Consider the following code:
// Create a polygon with side lengths 3, 4, and 5
// let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
// console.log(triangle.perimeter());

// When executed with a properly implemented Polygon class, this code should print the result of 3 + 4 + 5 = 12.

//  NOTES: Functional Classes
// Using Functions
// 1. Define a normal JavaScript function.
// 2. Create an object by using the *new* keyword
// 3. Define properties and methods for a created object using *this* keyword

// EXAMPLE
// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

// ALSO CAN DEFINE the getInformation function internally:

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = function() {
//         return 'This ' + this.type + ' is ' + this.color + '.';
//     }
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

// THE PROTOTYPE PROPERTY
// The drawback of internally referencing the getInformation function is that it recreates that function every time
// we create a new fruit object. Fortunately, every function in JavaScript has something called a prototype property,
// which is empty by default. We can think of a function's prototype as an object blueprint or paradigm;
// when we add methods and properties to the prototype, they are accessible to all instances of that function.
// This is especially useful for inheritance (discussed below).

// We can add a function to our constructor function's prototype like so:

// EXAMPLE:

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
// }

// Fruit.prototype.getInformation = function() {
//     return 'This ' + this.type + ' is ' + this.color + '.';
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

// console.log(lime)

function Polygon (sideLengthsArray) {
    this.lengths = sideLengthsArray
}

Polygon.prototype.perimeter = function() {
    return this.lengths.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}

let square = new Polygon([1, 2, 3])
console.log(square.perimeter())

