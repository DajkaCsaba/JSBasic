/*78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.*/
function is13(array) {
    return array[0] != 1 && array[0] != 3 && array[1] != 1 && array[1] != 3;
}

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1]));