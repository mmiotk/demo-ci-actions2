const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, multiply, greet } = require("./index");

describe("add", () => {
  it("adds two numbers", () => {
    assert.strictEqual(add(2, 3), 5);
  });
  it("handles negatives", () => {
    assert.strictEqual(add(-1, 1), 0);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    assert.strictEqual(multiply(3, 4), 10);
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