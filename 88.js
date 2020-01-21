/*Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.*/
function checking_numbers(num1, num2, divisor) {
    return num1 % divisor == 0 && num2 % divisor == 0;
}
console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))