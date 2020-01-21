/*17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.*/
function difference(n1) {
    if (n1 <= 19) {
        return 19 - n1;
    } else {
        return (n1 - 19) * 3;
    }
}

console.log(difference(18));
console.log(difference(20));