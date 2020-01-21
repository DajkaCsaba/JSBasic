/*21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. */
function addPy(s) {
    if (s === null || s === undefined || s.substring(0, 2) === "Py") {
        return s;
    }
    return "Py" + s;
}
console.log(addPy("Python"));
console.log(addPy("thon"));