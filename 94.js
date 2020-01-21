/*94. Write a JavaScript program to find the number which appears most in a given array of integers.*/
function array_element_mode(arr) {
    var c = 0;
    var max = 0;
    var re;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                c++;
            }
        }
        if (c > max) {
            re = arr[i];
            max = c;
        }
        c = 0;
    }
    return re;
}
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9, 8]));