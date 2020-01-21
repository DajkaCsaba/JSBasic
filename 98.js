/*98. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.*/
/*Fox example "Write" will be write and "PHp" will be "PHP"*/
function change_case(new_str) {
    var upperCase = 0;
    var loverCase = 0;
    for (var i = 0; i < new_str.length; i++) {
        if (/[A-Z]/.test(new_str[i])) {
            upperCase++;
        } else loverCase++;
    }
    if (loverCase > upperCase) return new_str.toLowerCase();
    return new_str.toUpperCase();
}

console.log(change_case("Write"))
console.log(change_case("PHp"))