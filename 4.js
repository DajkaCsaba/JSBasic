/*
Write a JavaScript program to find the area of a triangle 
where lengths of the three of its sides are 5, 6, 7.
*/
var s = (5 + 6 + 7) / 2;
console.log('The area of triangel :', Math.sqrt(s * ((s - 5) * (s - 6) * (s - 7))));