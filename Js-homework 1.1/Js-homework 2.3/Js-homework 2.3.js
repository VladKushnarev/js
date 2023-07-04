const rate = 15; 

let amount = prompt("Введіть суму в валюті:");
let exchangeAmount = parseFloat(amount) * rate;

let formattedAmount = exchangeAmount.toFixed(2); 

alert("Результат обміну у долларі: " + formattedAmount);