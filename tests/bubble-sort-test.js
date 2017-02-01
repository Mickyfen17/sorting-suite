import { expect } from 'chai';
import bubbleSort from "../scripts/bubble-sort";

describe("testing Bubble Sort", function() {

  it('should return to me an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true;
  });

  it("should check for a output", () => {
    expect(bubbleSort([1,2,3])).to.deep.equal([1,2,3]);
  });

  it("should filter an unordered array of numbers", () => {
    expect(bubbleSort([4,2,0,3,1])).to.deep.equal([0,1,2,3,4]);
  });

  it("should filter an unordered array of letters", () => {
    expect(bubbleSort(["e","c","a","d","b"])).to.deep.equal(["a","b","c","d","e"]);
  });


});
