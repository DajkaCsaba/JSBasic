/*47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range). */
function test_digit(r1, r2, n) {
    if (n < 40 || n > 10000)
        return false;
    if (r1 <= n && r2 >= n)
        return true;
    else
        return false;
}
console.log(test_digit(40, 4000, 45));
console.log(test_digit(80, 320, 79));
console.log(test_digit(89, 4000, 30));