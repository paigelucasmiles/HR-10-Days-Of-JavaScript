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



// Day 2: Conditional Statements: Switch

// Objective
// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

// Task
// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
// - If the first character in string s is in the set [a, e, i, o, u] , then return A.
// - If the first character in string s is in the set [b, c, d, f, g] , then return B.
// - If the first character in string s is in the set [h, j, k, l, m] , then return C.
// - If the first character in string s is in the set [n, p, q, r, s, t, v, w, x, y, z] , then return D.

// Input Format
// Stub code in the editor reads a single string denoting s from stdin.

// Constraints
// - 1 <= s <= 100, where |s| is the length of s.
// - String s contains lowercase English alphabetic letters (i.e., a through z) only.

// Output Format
// Return either A, B, C, or D according to the criteria given above.

function getLetter(s) {
    let letter;
    // Write your code here
    let first = s[0]
    switch (first){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = "B"
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C"
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = "D"
            break;
    }
    console.log(letter);
}

getLetter(["k", "b"])