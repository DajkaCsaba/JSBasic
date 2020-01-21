/*27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.*/
function f(str) {
    return str.substring(0, 4) === "Java";
}

console.log(f("Javavalami"));
console.log(f("valami"));