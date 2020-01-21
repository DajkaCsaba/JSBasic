/*50. Write a JavaScript program to capitalize the first letter of each word of a given string.*/
function capital_letter(str) {
    var h = "";
    for (let index = 0; index < str.length; index++) {
        if (index > 0) {
            if (str.charAt(index - 1) === ' ')
                h = h + str.charAt(index).toUpperCase();
            else
                h = h + str.charAt(index);
        } else {
            h = h + str.charAt(index).toUpperCase();
        }
    }
    console.log(h);
}
/*
function capital_letter(str) 
{
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
*/


capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string.");