function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let celsiusTemperature = prompt("Введите температуру в градусах Цельсия:");
let fahrenheitTemperature = celsiusToFahrenheit(parseFloat(celsiusTemperature));

alert(celsiusTemperature + " градусов Цельсия равно " + fahrenheitTemperature + " градусов Фаренгейта.");