/*25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.*/
function f(n) {
    if (n % 3 == 0) {
        console.log(n + " multiple of 3!");
    } else if (n % 7 == 0) {
        console.log(n + " multiple of 7!");
    } else {
        console.log(n + " does not an multiple any 3, any 7!");
    }
}
f(12);
f(14);
f(11);