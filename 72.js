/*72. Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.*/
function first_last_same(array) {
    return array[0] == array[2];
}

console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 10]));
console.log(first_last_same([20, 20, 20]));