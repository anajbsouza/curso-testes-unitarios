import calculator from "../../src/calculator";

describe("calculator tests", () => {
  it("should return a sum", async () => {
    const value = calculator.sum(5,10)
    expect(value).toBe(15);
  });
  it("should return a sub", async () => {
    const value = calculator.sub(10,5)
    expect(value).toBe(5);
  });
  it("should return a mul", async () => {
    const value = calculator.mul(5,10)
    expect(value).toBe(50);
  });
  it("should return a div", async () => {
    const value = calculator.div(10,2)
    expect(value).toBe(5);
  });
})