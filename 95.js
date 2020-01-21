/*95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.*/
function array_element_replace(arr, r, r2) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == r)
            arr[i] = r2;
    }
    return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: " + num);
console.log(array_element_replace(num, 2, 5));