const chai   = require('chai');
const assert = chai.assert;

const bubbleSort = require("../scripts/bubble-sort");

describe("testing Bubble Sort", function() {
  //
  // it("should be a function", function() {
  //   assert.isFunction(bubbleSort);
  // });
  it("should check for a output", function() {
    bubbleSort([1,2,3,4,5,6]).then((value) =>
      assert.equal(value, [1,2,3,4,5,6])
    );
  });
});
