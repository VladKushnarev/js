let totalFloors = prompt("Введіть кількість поверхів у будинку:");
let flatsPerFloor = prompt("Введіть кількість квартир на поверсі:");
let flatNumber = prompt("Введіть номер квартири:");

let totalFlats = totalFloors * flatsPerFloor;

let entrance = Math.ceil(flatNumber / flatsPerFloor);
let floor = Math.ceil(flatNumber % flatsPerFloor);

if (floor === 0) {
  floor = flatsPerFloor;
}

alert("Квартира №" + flatNumber + " знаходиться на " + entrance + "-му під'їзді та " + floor + "-му поверсі.");
