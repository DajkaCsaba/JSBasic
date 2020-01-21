/*35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.*/
function f(str, c) {
    var h = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index) === c)
            h++;
    }
    return h >= 2 && h <= 4;
}
console.log(f("java", 'a'));
console.log(f("real", 'a'));
console.log(f("akatakas", 'a'));