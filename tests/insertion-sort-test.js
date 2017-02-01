import { expect, assert } from 'chai';
import insertionSort from "../scripts/insertion-sort";

describe("testing Insertion Sort", function() {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

});
