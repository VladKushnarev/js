let red = prompt("Введіть значення червоного каналу (від 0 до 255):");
let green = prompt("Введіть значення зеленого каналу (від 0 до 255):");
let blue = prompt("Введіть значення синього каналу (від 0 до 255):");

red = parseInt(red).toString(16);
green = parseInt(green).toString(16);
blue = parseInt(blue).toString(16);

let color = "#" + padZero(red) + padZero(green) + padZero(blue);

alert("CSS-колір: " + color);

function padZero(str) {
  return str.length < 2 ? "0" + str : str;
}