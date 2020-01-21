/*40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.*/
function f(n1, n2) {
    return n1 == 8 || n2 == 8 || n1 + n2 == 8 || n2 + n1 == 8 || n1 - n2 == 8 || n2 - n1 == 8;
}
console.log(f(7, 8));
console.log(f(16, 8));
console.log(f(24, 32));
console.log(f(17, 18));