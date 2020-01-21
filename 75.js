/*75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.*/
function middle_elements(array1, array2) {
    return [array1[1], array2[1]];
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));