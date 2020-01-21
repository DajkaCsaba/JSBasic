/*29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.*/
function f(n1, n2, n3) {
    return n1 > 50 && n1 < 99 || n2 > 50 && n2 < 99 || n3 > 50 && n3 < 99;
}
console.log(f(51, 30, 120));
console.log(f(51, 30, 120));
console.log(f(30, 51, 120));
console.log(f(30, 120, 51));
console.log(f(51, 70, 98));
console.log(f(1, 2, 3));