/*32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.*/
function f(n1, n2) {
    var first = Math.abs(100 - n1);
    var second = Math.abs(100 - n2);
    if (first < second)
        return n1;
    else
        return n2;

}
console.log(f(6, 98));
console.log(f(-98, 6));
console.log(f(101, 98));