/*56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.*/
function division_string(n1, n2) {
    var div = Math.round(n1 / n2).toString();
    result_array = div.split("");
    return result_array;

}
console.log(division_string(200000000, 6));