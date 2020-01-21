/*55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.*/
function equal_pt(str) {
    var cp = 0;
    var ct = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index) === 'p') {
            cp++;
        }
        if (str.charAt(index) === 't') {
            ct++;
        }
    }
    return cp === ct;
}
/*
function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
*/
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatpst"));