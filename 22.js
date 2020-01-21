/*22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string. */
function removeCharAt(str, n) {
    var firstHalf = str.substring(0, n);
    var secondHalf = str.substring(n + 1, str.length);
    return firstHalf + secondHalf;
}
console.log(removeCharAt("asd", 0));
console.log(removeCharAt("asd", 1));
console.log(removeCharAt("asd", 2));