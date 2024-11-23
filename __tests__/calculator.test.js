const calculateExpression = require('../calculator');

describe("Calculator Tests", () => {
  test("adds numbers correctly", () => {
    expect(calculateExpression("2 + 2")).toBe(4);
  });

  test("handles complex expressions", () => {
    expect(calculateExpression("2 + 3 * 4")).toBe(14);
  });

  test("throws error for invalid expressions", () => {
    expect(() => calculateExpression("2 +")).toThrow("Invalid expression");
  });

  test("handles division", () => {
    expect(calculateExpression("10 / 2")).toBe(5);
  });

  test("handles parentheses", () => {
    expect(calculateExpression("(2 + 3) * 4")).toBe(20);
  });
});
