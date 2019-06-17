const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty
} = require("./project-1");

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

describe("Function testing length of strings", () => {
  it("it should return true if lengths are the same length", () => {
    expect(areSameLength("semantic", "kingdoms")).toBe(true);
  });

  it("it should return false if lengths are not the same length", () => {
    expect(areSameLength("semantic", "kingdom")).toBe(false);
  });
});

describe("Function testing equality of numbers", () => {
  it("it should return true if numbers are equal", () => {
    expect(areEqual(5, 5)).toBe(true);
  });

  it("it should return false if numbers are not equal", () => {
    expect(areEqual(5, 7)).toBe(false);
  });
});

describe("Function testing if number is less than 90", () => {
  it("it should return true if number is less than 90", () => {
    expect(lessThanNinety(43)).toBe(true);
  });

  it("it should return false if number is greater than or equal to 90", () => {
    expect(lessThanNinety(99)).toBe(false);
  });
});

describe("Function testing if number is greater than 50", () => {
  it("it should return true if number is greater than 50", () => {
    expect(greaterThanFifty(64)).toBe(true);
  });

  it("it should return false if number is less than 50", () => {
    expect(greaterThanFifty(22)).toBe(false);
  });
});
