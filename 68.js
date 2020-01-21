/*68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.*/

function two_string(str, n) {
    if (str.length >= n) {
        return str.substring(0, n) + str.substring(str.length - n);
    }
    return str;
}
console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));