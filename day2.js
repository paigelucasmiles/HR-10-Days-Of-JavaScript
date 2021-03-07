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


// Day 2: Loops

// Objective
// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task
// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
// 1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// 2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.

// Input Format
// Locked stub code in the editor reads string s from stdin and passes it to the function.

// Output Format
// First, print each vowel in s on a new line (in the same order as they appeared in s). Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

// function vowelsAndConsonants(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     const stringAsArray = s.split("");

//     const vowelsFromString = stringAsArray.filter( element => vowels.includes(element));

//     const consontantsFromString = stringAsArray.filter( element => !vowels.includes(element));

//     console.log(vowelsFromString.join('\n') + '\n' + consontantsFromString.join('\n'))
// }

function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const stringAsArray = s.split("");

    let vowelsFromString = []

    let consontantsFromString = []

    for(let i = 0; i < stringAsArray.length; i++){
        if(vowels.includes(stringAsArray[i])) {
            vowelsFromString.push(stringAsArray[i])
        } else {
            consontantsFromString.push(stringAsArray[i])
        }
    }
    console.log(vowelsFromString.join('\n') + '\n' + consontantsFromString.join('\n'))
}

vowelsAndConsonants("javascript")