/*45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15. */
function test_nmuber(n1, n2) {
    return n1 == 15 || n2 == 15 || n1 + n2 == 15 || n2 + n1 == 15 || n1 - n2 == 15 || n2 - n1 == 15;
}
console.log(test_nmuber(15, 9));
console.log(test_nmuber(25, 15));
console.log(test_nmuber(7, 8));
console.log(test_nmuber(25, 10));
console.log(test_nmuber(5, 9));
console.log(test_nmuber(7, 9));
console.log(test_nmuber(9, 25));