/*67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. 
Return the original string if the condition is not satisfied.*/
function nop(str) {
    if (str.charAt(0) === 'P' && str.charAt(str.length - 1) === 'P') {
        return str.substring(1, str.length - 1);
    }
    if (str.charAt(0) === 'P') {
        return str.substring(1);
    }
    if (str.charAt(str.length - 1) === 'P')
        return str.substring(0, str.length - 1);
    return str;
}

console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));