/*69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.*/
function sum_three(na) {
    var re = 0;
    for (let index = 0; index < na.length; index++) {
        re = re + na[index];
    }
    return re;
}

console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));