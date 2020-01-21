/*26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. */
function f(str) {
    if (str.length >= 3) {
        var last3 = str.substring(str.length - 3, str.length);
        return last3 + str + last3;
    } else {
        return str;
    }
}
console.log(f("a"));
console.log(f("sad"));
console.log(f("happy"));