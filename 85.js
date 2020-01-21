/*85. Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, 
second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.*/
function alternate_Sums(arr) {
    var re = [0, 0];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2) {
            re[1] += arr[index];
        } else {
            re[0] += arr[index];
        }
    }

    return re;
}
console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))