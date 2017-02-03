import { expect, assert } from 'chai';
import bubbleSort from "../scripts/bubble-sort";

describe("testing Bubble Sort", function() {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should return to me an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true;
  });

  it("should throw an error when function does not receive an array", () => {
    expect( () => bubbleSort("hello") ).to.throw(("Must pass in an array"));
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

  it("should filter an unordered array of 1000 letters", () => {
    let testArray= [];
    for(let i = 0; i < 100; i++) {
      testArray.push("e","c","a","d","b","z","o","i","t","q");
    }
    let sortedArray = testArray.sort();
    expect(bubbleSort(testArray)).to.deep.equal(sortedArray);
  });

  it("should filter an unordered array of 15000 numbers between 0 & 14999", () => {
    let testArray= [];
    for(let i = 0; i < 15000; i++) {
      testArray.push(Math.floor(Math.random() * 15000));
    }
    let sortedArray = testArray.sort( (a, b) => a - b);
    expect(bubbleSort(testArray)).to.deep.equal(sortedArray);
  });

});
