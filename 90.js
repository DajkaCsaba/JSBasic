/*Write a JavaScript program to find the kth greatest element of a given array of integers.*/
function Kth_greatest_in_array(array, k) {
    var s;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            s = array[i];
            array[i] = array[i + 1];
            array[i + 1] = s;
            i = -1;
        }
    }
    return array[k - 1];
}


console.log(Kth_greatest_in_array([1, 2, 6, 4, 5], 3))
console.log(Kth_greatest_in_array([-10, -25, -47, -36, 0], 1))