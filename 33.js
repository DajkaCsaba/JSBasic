/*33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive. */
function f(n1, n2) {
    return (n1 >= 40 && n1 <= 60 || n1 >= 70 && n1 <= 100) && (n2 >= 40 && n2 <= 60 || n2 >= 70 && n2 <= 100);
}
console.log(f(40, 60));
console.log(f(70, 100));
console.log(f(22, 60));
console.log(f(40, 200));
console.log(f(22, 200));