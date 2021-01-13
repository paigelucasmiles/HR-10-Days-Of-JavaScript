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