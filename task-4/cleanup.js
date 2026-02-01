// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Function to get temperature status
function getTempStatus(celsius) {
  if (celsius < 0) return "Freezing";
  if (celsius < 10) return "Cold";
  if (celsius < 20) return "Mild";
  if (celsius < 30) return "Warm";
  return "Hot";
}

// Function to print weather report for a city
function printWeatherReport(cityName, tempCelsius) {
  const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
  const tempKelvin = celsiusToKelvin(tempCelsius);

  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + tempCelsius + "°C");
  console.log("Temperature: " + tempFahrenheit + "°F");
  console.log("Temperature: " + tempKelvin + "K");
  console.log("Status: " + getTempStatus(tempCelsius));
  console.log("---");
}

// Function to calculate wind chill
function calculateWindChill(tempCelsius, windSpeed) {
  return 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
}

// Function to print wind chill
function printWindChill(cityName, tempCelsius, windSpeed) {
  const windChill = calculateWindChill(tempCelsius, windSpeed);
  console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

// City data
const cities = [
  { name: "Amsterdam", temp: 22, wind: 15 },
  { name: "Berlin", temp: 15, wind: 20 },
  { name: "Copenhagen", temp: -5, wind: 25 },
];

// Print weather reports
cities.forEach(city => {
  printWeatherReport(city.name, city.temp);
});

// Print wind chill
cities.forEach(city => {
  printWindChill(city.name, city.temp, city.wind);
});


/*
original code

// Temperature conversion and weather report for City 1
let cityName1 = "Amsterdam";
let tempCelsius1 = 22;

let tempFahrenheit1 = (tempCelsius1 * 9 / 5) + 32;
let tempKelvin1 = tempCelsius1 + 273.15;
console.log("Weather Report for " + cityName1);
console.log("Temperature: " + tempCelsius1 + "°C");
console.log("Temperature: " + tempFahrenheit1 + "°F");
console.log("Temperature: " + tempKelvin1 + "K");
if (tempCelsius1 < 0) {
  console.log("Status: Freezing");
} else if (tempCelsius1 >= 0 && tempCelsius1 < 10) {
  console.log("Status: Cold");
} else if (tempCelsius1 >= 10 && tempCelsius1 < 20) {
  console.log("Status: Mild");
} else if (tempCelsius1 >= 20 && tempCelsius1 < 30) {
  console.log("Status: Warm");
} else {
  console.log("Status: Hot");
}
console.log("---");

// Temperature conversion and weather report for City 2
let cityName2 = "Berlin";
let tempCelsius2 = 15;
let tempFahrenheit2 = (tempCelsius2 * 9 / 5) + 32;
let tempKelvin2 = tempCelsius2 + 273.15;
console.log("Weather Report for " + cityName2);
console.log("Temperature: " + tempCelsius2 + "°C");
console.log("Temperature: " + tempFahrenheit2 + "°F");
console.log("Temperature: " + tempKelvin2 + "K");
if (tempCelsius2 < 0) {
  console.log("Status: Freezing");
} else if (tempCelsius2 >= 0 && tempCelsius2 < 10) {
  console.log("Status: Cold");
} else if (tempCelsius2 >= 10 && tempCelsius2 < 20) {
  console.log("Status: Mild");
} else if (tempCelsius2 >= 20 && tempCelsius2 < 30) {
  console.log("Status: Warm");
} else {
  console.log("Status: Hot");
}
console.log("---");

// Temperature conversion and weather report for City 3
let cityName3 = "Copenhagen";
let tempCelsius3 = -5;
let tempFahrenheit3 = (tempCelsius3 * 9 / 5) + 32;
let tempKelvin3 = tempCelsius3 + 273.15;
console.log("Weather Report for " + cityName3);
console.log("Temperature: " + tempCelsius3 + "°C");
console.log("Temperature: " + tempFahrenheit3 + "°F");
console.log("Temperature: " + tempKelvin3 + "K");
if (tempCelsius3 < 0) {
  console.log("Status: Freezing");
} else if (tempCelsius3 >= 0 && tempCelsius3 < 10) {
  console.log("Status: Cold");
} else if (tempCelsius3 >= 10 && tempCelsius3 < 20) {
  console.log("Status: Mild");
} else if (tempCelsius3 >= 20 && tempCelsius3 < 30) {
  console.log("Status: Warm");
} else {
  console.log("Status: Hot");
}
console.log("---");

// Wind chill calculation for City 1
let windSpeed1 = 15;
let windChill1 = 13.12 + 0.6215 * tempCelsius1 - 11.37 * Math.pow(windSpeed1, 0.16) + 0.3965 * tempCelsius1 * Math.pow(windSpeed1, 0.16);
console.log("Wind chill in " + cityName1 + ": " + windChill1.toFixed(2) + "°C");

// Wind chill calculation for City 2
let windSpeed2 = 20;
let windChill2 = 13.12 + 0.6215 * tempCelsius2 - 11.37 * Math.pow(windSpeed2, 0.16) + 0.3965 * tempCelsius2 * Math.pow(windSpeed2, 0.16);
console.log("Wind chill in " + cityName2 + ": " + windChill2.toFixed(2) + "°C");

// Wind chill calculation for City 3
let windSpeed3 = 25;
let windChill3 = 13.12 + 0.6215 * tempCelsius3 - 11.37 * Math.pow(windSpeed3, 0.16) + 0.3965 * tempCelsius3 * Math.pow(windSpeed3, 0.16);
console.log("Wind chill in " + cityName3 + ": " + windChill3.toFixed(2) + "°C");


*/