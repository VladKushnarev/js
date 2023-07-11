//  let answer1 = confirm("Ви задоволені своєю відповіддю?");
//  let answer2 = confirm("Чи погоджуєтесь ви з умовами використання?");
//  let answer3 = confirm("Ви бажаєте підписатися на розсилку?");

//  console.log("Відповідь 1:", answer1);
//  console.log("Відповідь 2:", answer2);
//  console.log("Відповідь 3:", answer3);

//  let isFemale = confirm("Ви жінка?");

//  if (isFemale) {
//    alert("Ви жінка.");
//  } else {
//    alert("Ви чоловік.");
//  }

//  console.log(!!2); // true
//  console.log(!!0); // false
//  console.log(!!1); // true

//  console.log(2 || 1); // 2
//  console.log(2 || 0); // 2

//  console.log(2 && 1); // 1
//  console.log(1 && 2); // 2
//  console.log(0 && 2); // 0

//  console.log(0 || 1 || 2); // 1
//  console.log(0 && 1 && 2); // 0
//  console.log(2 || 1 || 0); // 2
 // console.log(2 && 1 && 0); // 0

 // console.log(confirm('left') || confirm('right')); // true if at least one confirmation is true
 // console.log(confirm('left') && confirm('right')); // true only if both confirmations are true

 // console.log(null || 2); // 2
 // console.log(undefined && 1); // undefined
 // console.log(alert("Hello") && confirm('Are you sexy?')); // false
 // console.log(alert("Hello") || confirm('Are you drunk?')); // true

 // console.log((undefined || 2) && (3 || 0)); // 0
 // console.log((2 && 1) || (null && 0)); // 1
 // console.log((2 > 1) && "greater"); // "greater"
 // console.log((2 < 1) && null); // false
 // console.log(null && (2 < 1)); // null

 // console.log(1 ? "one" : "not one"); // "one"
 // console.log(0 ? "zero" : "not zero"); // "not zero"
 // console.log("0" ? "\"zero\"" : "not `zero`"); // "\"zero\""
 // console.log(parseInt("0") ? 'true' : 'false'); // false

 // console.log(("" || 2) && (3 || "3.5") || (4 && 5)); // "3.5"

 // console.log((-1 + 1) && "zero"); // 0
 // console.log("-1" + 1 && "oups"); // "oups"

 // console.log(typeof null === 'object' ? "null is object" : "null is null"); // "null is object"

 // console.log(Math.random() < 0.5 && 'less' || 'more'); // either "less" or "more"

 // let a;
 // console.log((a = Math.random()) < 0.5 && 'less: ' + a || 'more: ' + a); // either "less: {randomNumber}" or "more: {randomNumber}"

 // console.log([2, 3, 5, 7, 11].indexOf(7) > -1 ? 'prime' : 'not found'); // "prime"

 // let age = prompt("Введіть ваш вік:");

 // if (!age) {
 //   alert("Помилка! Вік не введено або скасовано.");
 // }

 // let shopping = confirm("Шопінг?");

 // shopping || alert("Ти - бяка.");

//  let shopping = confirm("Шопінг?");

//  if (!shopping) {
//    alert("Ти - бяка.");
//  }

// let firstName = prompt("Введіть ім'я:") || "Іван";
// let lastName = prompt("Введіть прізвище:") || "Іванов";
// let fullName = prompt("Введіть ПІБ:") || (firstName + " " + lastName);

// console.log("Ім'я:", firstName);
// console.log("Прізвище:", lastName);
// console.log("ПІБ:", fullNamlet
// let lastName = prompt("Введіть прізвище:");
// let fullName;
// let firstName = prompt("Введіть ім'я:");

// if (!firstName) {
//   firstName = "Іван";
// }

// if (!lastName) {
//   lastName = "Іванов";
// }

// if (!firstName || !lastName) {
//   fullName = firstName + " " + lastName;
// } else {
//   fullName = prompt("Введіть ПІБ:") || (firstName + " " + lastName);
// }

// console.log("Ім'я:", firstName);
// console.log("Прізвище:", lastName);
// console.log("ПІБ:", fullName);

// let login = prompt("Введіть логін:");

// if (login === "admin") {
 //  let password = prompt("Введіть пароль:");

//   if (password === "qwerty") {
//     alert("Логін успішний. Привіт, admin!");
//   } else {
//     alert("Пароль невірний. Спробуйте ще раз.");
//   }
// } else {
//   alert("Логін невірний. Спробуйте ще раз.");
// }

// let currency = prompt("Введіть валюту (наприклад, USD, EUR):").toUpperCase();
// let isBuying = confirm("Ви хочете купити валюту?");

// let rate;
// if (currency === "USD") {
//   rate = isBuying ? 27.5 : 27.0;
// } else if (currency === "EUR") {
  // rate = isBuying ? 32.0 : 31.5;
// } else {
  // rate = isBuying ? 1.0 : 1.0;
// }

// let amount = parseFloat(prompt("Введіть суму для обміну:"));

// if (isNaN(amount)) {
  // alert("Введіть правильну суму для обміну.");
// } else {
  // let result = isBuying ? amount * rate : amount / rate;
  // alert("Результат обміну: " + result.toFixed(2) + " " + currency);
// }

// let userChoice = prompt("Виберіть варіант: камінь, ножиці або папір").toLowerCase();

// if (userChoice === "камінь" || userChoice === "ножиці" || userChoice === "папір") {
//   let computerChoice = generateComputerChoice();
//   alert("Ваш вибір: " + userChoice + "\nВибір комп'ютера: " + computerChoice);
//   let result = determineWinner(userChoice, computerChoice);
//   alert(result);
// } else {
//   alert("Ви ввели неправильний варіант. Будь ласка, спробуйте ще раз.");
// }


// function generateComputerChoice() {
//   let choices = ["камінь", "ножиці", "папір"];
//   let randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }


// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     return "Нічия!";
//   } else if (
//     (userChoice === "камінь" && computerChoice === "ножиці") ||
//     (userChoice === "ножиці" && computerChoice === "папір") ||
//     (userChoice === "папір" && computerChoice === "камінь")
//   ) {
//     return "Ви перемогли!";
//   } else {
//     return "Комп'ютер переміг!";
//   }
// }