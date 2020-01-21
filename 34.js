/*34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.*/
function f(n1, n2) {
    if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)) {
        if (n1 > n2) {
            console.log(n1);
        } else {
            console.log(n2);
        }
    } else {
        console.log("Numbers do not fit in the range!");
    }
}
f(41, 50);
f(23, 50);
f(44, 120);
f(12, 77);