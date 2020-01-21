/*16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*/
function sum(n1, n2) {
    if (n1 == n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}
console.log(sum(1, 2));
console.log(sum(1, 1));