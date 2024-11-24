export default function calculateExpression(expression) {
  if (!expression || expression.trim() === "") {
    throw new Error("Invalid expression: Empty input");
  }

  try {
    const result = eval(expression);

    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid result: Cannot calculate");
    }

    return result;
  } catch (error) {
    throw new Error("Invalid expression");
  }
}
