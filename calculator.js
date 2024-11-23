function calculateExpression(expression) {
  if (!expression || expression.trim() === "") {
    throw new Error("Invalid expression: Empty input");
  }

  try {
    // Handle invalid mathematical expressions gracefully
    const result = eval(expression);
    
    // Optionally: Check if the result is NaN or Infinity and throw an error
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid result: Cannot calculate");
    }

    return result;
  } catch (error) {
    throw new Error("Invalid expression");
  }
}

module.exports = calculateExpression;
