describe("calculator tests", () => {
  it("should return a sum", async () => {
    const a = 5;
    const b = 10;
    expect(a+b).toBe(15);
  });
  it("should return a sub", async () => {
    const a = 5;
    const b = 10;
    expect(b-a).toBe(5);
  });
  it("should return a mult", async () => {
    const a = 5;
    const b = 10;
    expect(a*b).toBe(50);
  });
  it("should return a div", async () => {
    const a = 5;
    const b = 10;
    expect(b/a).toBe(2);
  });
})