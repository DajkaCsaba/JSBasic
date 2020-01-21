/*62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three. */
function right_three(str) {
    if (str.length >= 3) {
        return str.substring(str.length - 3) + str.substring(0, str.length - 3);
    }
    return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));