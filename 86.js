/*86. Write a JavaScript program to find the types of a given angle. */
function angle_Type(angle) {
    if (angle > 0 && angle < 90) return "Acute angle";
    if (angle == 90) return "Right angle";
    if (angle > 90 && angle < 180) return "Obtuse angle";
    if (angle == 180) return "Straight angle";
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))