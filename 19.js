/*19. Write a JavaScript program to check a given integer is within 20 of 100 or 400. */
function within(n) {
    if (n > 20 && n < 100) {
        console.log("The number is within 20 of 100!");
    } else if (n > 20 && n < 400) {
        console.log("The number is within 20 of 400!");
    }
}
within(40);
within(120);