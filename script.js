const calculateExpression = require('./calculator');

function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.innerText = calculateExpression(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
