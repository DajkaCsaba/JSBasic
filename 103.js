/*103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.*/
function f(num) {
    var num_arr = [];
    while (num) {
        num_arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    var min = 0;
    for (let i = 0; i < num_arr.length - 1; i++) {
        min = Math.min(num_arr[i], num_arr[i + 1]);
    }

}

console.log(f(123));