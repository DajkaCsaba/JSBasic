/*101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.*/
function test_string(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (/[a-z]/.test(arr[i]) && /[a-z]/.test(arr[i + 1]) || /[A-Z]/.test(arr[i]) && /[A-Z]/.test(arr[i + 1])) {
            return false;
        }
    }
    return true;
}
console.log(test_string('xYr'));
console.log(test_string('XXyx'));