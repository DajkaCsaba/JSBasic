/*96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers*/
function sum_adjacent_difference(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i + 1]);
    }
    return sum;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));