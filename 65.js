/*65. Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.*/
function end_script(str) {
    if (str.length >= 6) {
        return str.substring(str.length - 6) === "Script";
    }
    return false;
}
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));