const assert = require("chai").assert;
const maxProfit = require("../stocks").maxProfit;

describe("maxProfit", function() {
  it("should return 16  given [45, 24, 35, 31, 40, 38, 11]", function() {
    const arr = [45, 24, 35, 31, 40, 38, 11];
    const result = maxProfit(arr);
    assert.strictEqual(result, 16);
  });

  it("should return -1  given []", function() {
    const arr = [];
    const result = maxProfit(arr);
    assert.strictEqual(result, -1);
  });

  it("should return -1  given [1, 1, 1]", function() {
    const arr = [];
    const result = maxProfit(arr);
    assert.strictEqual(result, -1);
  });

  it("should return -1  given [3, 2, 1]", function() {
    const arr = [];
    const result = maxProfit(arr);
    assert.strictEqual(result, -1);
  });
});
