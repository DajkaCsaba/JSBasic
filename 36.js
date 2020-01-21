/*36. Write a JavaScript program to check if the last digit of the three given positive integers is same.*/
function f(n1, n2, n3) {
    return n1 % 10 == n2 % 10 && n1 % 10 == n3 % 10;
}
console.log(f(1, 11, 101));