function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function printConversions() {
    let tempCelsius = 60;
    let tempFahrenheit = 45;

    let convertedFahrenheit =  celsiusToFahrenheit(tempCelsius);
    console.log(`${tempCelsius}°C is ${convertedFahrenheit.toFixed(1)} °F`);

    // Convert Fahrenheit to Celsius
    let convertedCelsius = fahrenheitToCelsius(tempFahrenheit);
    console.log(`${tempFahrenheit}°F is ${convertedCelsius.toFixed(1)}°C`);
}
printConversions();