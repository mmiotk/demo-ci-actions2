const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, multiply, greet, substract } = require("./index");

describe("add", () => {
  it("adds two numbers", () => {
    assert.strictEqual(add(2, 3), 7);
  });
  it("handles negatives", () => {
    assert.strictEqual(add(-1, 1), 0);
  });
});

describe("substract", () => {
  it("substracts two numbers", () => {
    assert.strictEqual(substract(2, 3), -1);
  });
  it("handles negatives", () => {
    assert.strictEqual(substract(-1, 1), -2);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    assert.strictEqual(multiply(3, 4), 12);
  });
  it("handles zero", () => {
    assert.strictEqual(multiply(5, 0), 0);
  });
});

describe("greet", () => {
  it("returns greeting", () => {
    assert.strictEqual(greet("World"), "Hello, World!");
  });
});