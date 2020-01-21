/*91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.*/
function array_max_consecutive_sum(a, k) {
    var max = 0;
    var s = 0;
    for (let i = 0; i <= a.length - k; i++) {
        for (let j = i; j < i + k; j++) {
            s += a[j];
        }
        if (s > max)
            max = s;
        s = 0;
    }
    return max;
}
console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))