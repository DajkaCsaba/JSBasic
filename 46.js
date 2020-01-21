/*46. Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.*/
function valCheck(n1, n2) {
    if (n1 % 7 == 0 && n2 % 7 != 0 || n1 % 11 == 0 && n2 % 11 != 0)
        return true;
    else if (n2 % 7 == 0 && n1 % 7 != 0 || n2 % 11 == 0 && n1 % 11 != 0)
        return true;
    else
        return false;

}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));