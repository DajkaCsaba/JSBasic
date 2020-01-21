/*42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 */
function f(n1, n2, n3) {
    if (n1 < n2 && n2 < n3)
        console.log("Strict mode");
    else
        console.log("Soft mode");

}
console.log(f(10, 15, 31));
console.log(f(24, 22, 31));
console.log(f(50, 21, 15));