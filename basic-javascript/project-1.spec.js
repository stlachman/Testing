const { multiplyByTen, subtractFive } = require("./project-1");

// start testing!
describe("Multiply by ten function", () => {
  it("it should return a value multipled by 10", () => {
    expect(multiplyByTen(5)).toBe(50);
    expect(multiplyByTen(10)).toBe(100);
    expect(multiplyByTen(0)).toBe(0);
  });
});

describe("Subtract by 5 function", () => {
  it("it should return a value subtracted by 5", () => {
    expect(subtractFive(5)).toBe(0);
    expect(subtractFive(15)).toBe(10);
    expect(subtractFive(0)).toBe(-5);
  });
});
