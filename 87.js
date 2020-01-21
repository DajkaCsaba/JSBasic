/*87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. 
The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements. */
function array_checking(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr1[i + 1]) {
            s = arr1[i];
            arr1[i] = arr1[i + 1];
            arr1[i + 1] = s;
            i = 0;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > arr2[i + 1] && i + 1 != arr2.length) {
            s = arr2[i];
            arr2[i] = arr2[i + 1];
            arr2[i + 1] = s;
            i = 0;
        }
    }
    console.log(arr1);
    console.log(arr2);
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }
    return true;
}
console.log(array_checking([10, 20, 30], [10, 20, 30]))
console.log(array_checking([10, 20, 30], [30, 10, 20]))
console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40]))