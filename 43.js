/*43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit*/
function f(n1, n2, n3) {
    return n1 % 10 == n2 % 10 || n2 % 10 == n3 % 10;
}
console.log(f(22, 32, 42));
console.log(f(102, 302, 2));
console.log(f(20, 22, 45));