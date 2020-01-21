/*38. Write a JavaScript program to check the total marks of a student in various examinations. 
The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." 
the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.*/

function f(n, b) {
    if (b) {
        return n >= 90;
    } else {
        return n >= 89 && n <= 100;
    }
}
console.log(f("78", " "));
console.log(f("89", "true "));
console.log(f("99", "true "));