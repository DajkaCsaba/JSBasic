/*49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.*/

function LetterChanges(str) {
    var h = "";
    for (let index = 0; index < str.length; index++) {
        h = h + String.fromCharCode(1 + str.charCodeAt(index));
    }
    console.log(h);
}

console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));