/*77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.*/
function contins13(array) {
    return array[0] == 1 || array[0] == 3 || array[1] == 1 || array[1] == 3;
}
console.log(contins13([1, 5]));
console.log(contins13([2, 3]));
console.log(contins13([7, 5]));