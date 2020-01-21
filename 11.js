/*11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.*/

function toFahrenheit(value) {
    var out = value / 5 * 9 + 32;
    console.log(value + '\xB0C is ' + out + ' \xB0F.');
}

toFahrenheit(60);

function toCelsius(value) {
    var out = (value - 32) / 9 * 5;
    console.log(value + '\xB0F is ' + out + ' \xB0C.');
}

toCelsius(45);