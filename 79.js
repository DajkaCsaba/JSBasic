/*79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.*/
function twice3040(array) {
    var n30 = 0;
    var n40 = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 30) {
            n30++;
        }
        if (array[index] == 40) {
            n40++;
        }
    }
    if (n30 == 2 || n40 == 2) {
        return true;
    }
    return false;
}
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));