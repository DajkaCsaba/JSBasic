/*30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
if "Script" presents in the string return the string without "Script" otherwise return the original one.*/
function f(str) {
    if (str.substring(4, 10) === "Script") {
        return str.substring(0, 4) + str.substring(10, str.length);
    } else {
        return str;
    }
}
console.log(f("JavaScript"));
console.log(f("CoffeeScript"));