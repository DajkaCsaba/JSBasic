/*44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.*/
function f(n1, n2, n3) {
    if (n1 >= 20 && (n1 < n2 || n1 < n3)) {
        return true;
    } else if (n2 >= 20 && (n2 < n1 || n2 < n3)) {
        return true;
    } else if (n3 >= 20 && (n3 < n1 || n3 < n2)) {
        return true;
    } else {
        return false;
    }
}
/*
function f(n1, n2, n3) {
    return (n1 >= 20 && (n1 < n2 || n1 < n3)) || (n2 >= 20 && (n2 < n1 || n2 < n3)) || (n3 >= 20 && (n3 < n1 || n3 < n2));
}
*/
console.log(f(23, 45, 10));
console.log(f(23, 23, 10));
console.log(f(21, 66, 75));