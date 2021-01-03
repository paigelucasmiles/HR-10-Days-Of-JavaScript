// Day 2: Conditional Statements: If-Else

// Objective
// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task
// Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:
// - if 25 < score <= 30, then grade = A
// - if 20 < score <= 25, then grade = B
// - if 15 < score <= 20, then grade = C
// - if 10 < score <= 15, then grade = D
// - if 5 < score <= 10, then grade = E
// - if 0 < score <= 5, then grade = F

// Input Format
// Stub code in the editor reads a single integer denoting score from stdin and passes it to the function.

// Constraints
// - 0 <= score <= 30 

// Output Format
// The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.

function getGrade(score) {
    let grade;
    // Write your code here
    if(score >= 25 && score <= 30){
        grade = "A"
    } else if(score >= 20 && score <= 25){
        grade = "B"
    } else if(score >= 15 && score <= 20){
        grade = "C"
    } else if(score >= 10 && score <= 15){
        grade = "D"
    } else if(score >= 5 && score <= 10){
        grade = "E"
    }  else if(score >= 0 && score <= 5){
        grade = "F"
    }
    console.log(grade);
}

getGrade(0)