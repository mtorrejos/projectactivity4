function calculateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    throw new Error("Invalid expression");
  }
}

module.exports = calculateExpression;
