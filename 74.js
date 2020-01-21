/*74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.*/
function all_max(array) {
    var max = 0;
    if (array[0] > array[array.length - 1]) {
        max = array[0];
    } else
        max = array[array.length - 1];
    for (let index = 0; index < array.length; index++) {
        array[index] = max;

    }
    return array;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));