/*83. Write a JavaScript to find the longest string from an given array of strings. */
function longest_string(strings) {
    var re = 0;
    var max = 0;
    for (let index = 0; index < strings.length; index++) {
        if (strings[index].length > max) {
            max = strings[index].length;
            re = index;
        }
    }
    return strings[re];
}
/*
function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}
*/
console.log(longest_string(['a', 'aa', 'aaa',
    'aaaaa', 'aaaa'
]))