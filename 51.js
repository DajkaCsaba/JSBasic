/*51. Write a JavaScript program to convert a given number to hours and minutes.  */
function time_convert(n) {
    if (n >= 60) {
        var h = Math.floor(n / 60);
        var m = n % 60;
        console.log(h + ":" + m);
    }
}

time_convert(71);
time_convert(450);
time_convert(14412);