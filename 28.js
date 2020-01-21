/*28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.*/
function f(n1, n2) {
    return n1 > 50 && n1 < 99 && n2 > 50 && n2 < 99;
}
console.log(f(51, 98));
console.log(f(48, 102));
console.log(f(51, 120));
console.log(f(42, 98));