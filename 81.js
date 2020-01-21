/*81. Write a JavaScript program to add two digits of a given positive integer of length two.*/
function add_two_digits(num) {
    return Math.floor(num / 10) + num % 10;
}
console.log(add_two_digits(25))
console.log(add_two_digits(50))