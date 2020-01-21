/*
3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
var d = new Date();
var yy = d.getFullYear();
var mm = d.getMonth() + 1;
var dd = d.getDate();
if (mm < 10) {
    mm = '0' + mm;
}
if (dd < 10) {
    dd = '0' + dd;
}
var first = mm + "-" + dd + "-" + yy;
var second = mm + "/" + dd + "/" + yy;
var third = dd + "-" + mm + "-" + yy;
var fourth = dd + "/" + mm + "/" + yy;
console.log(first + ", " + second + ", " + third + ", " + fourth);