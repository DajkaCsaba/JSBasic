/*39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
function f(n1, n2) {
    if (n1 + n2 >= 50 && n1 + n2 <= 80)
        return 65;
    else
        return 80;
}
console.log(f(30, 20));
console.log(f(90, 80));