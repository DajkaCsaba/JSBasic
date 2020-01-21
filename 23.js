/*23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.*/
function changeFirstandLast(str) {
    if (str.length >= 1) {
        var midle = str.substring(1, str.length - 1);
        return str.charAt(str.length - 1) + midle + str.charAt(0);
    }
}
console.log(changeFirstandLast("ab"));
console.log(changeFirstandLast("asd"));