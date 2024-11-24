import calculateExpression from './calculator.js';

window.appendToDisplay = function (value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
};

window.clearDisplay = function () {
  document.getElementById("display").innerText = "0";
};

window.calculate = function () {
  const display = document.getElementById("display");
  try {
    display.innerText = calculateExpression(display.innerText);
  } catch {
    display.innerText = "Error";
  }
};
