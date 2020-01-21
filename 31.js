/*31. Write a JavaScript program to find the largest of three given integers.*/
function f(n1, n2, n3) {
    var h = n1;
    if (n2 > h)
        h = n2;
    if (n3 > h)
        h = n3;

    console.log("The given numbers are: " + n1 + " " + n2 + " " + n3);
    console.log("The largest of them is: " + h);
}
f(1, 2, 3);
f(1, 3, 2);
f(3, 1, 2);