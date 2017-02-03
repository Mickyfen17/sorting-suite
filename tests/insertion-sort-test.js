import { expect, assert } from 'chai';
import insertionSort from "../scripts/insertion-sort";

describe("testing Insertion Sort", function() {

  it('insertionSort be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('insertionSort should return to me an array', () => {
    expect(Array.isArray(insertionSort([]))).to.be.true;
  });

  it("should throw an error when function does not receive an array", () => {
    expect( () => insertionSort("hello") ).to.throw(("Must pass in an array"));
  });

  it("should check for a output", () => {
    expect(insertionSort([5,6,7])).to.deep.equal([5,6,7]);
  });

  it("insertionSort filter an unordered array of numbers", () => {
    expect(insertionSort([11,3,7,16,1])).to.deep.equal([1,3,7,11,16]);
  });

  it("insertionSort filter an unordered array of letters", () => {
    expect(insertionSort(["p","e","x","f","j"])).to.deep.equal(["e","f","j","p","x"]);
  });

  it("should filter an unordered array of 1000 letters", () => {
    let testArray= [];
    for(let i = 0; i < 100; i++) {
      testArray.push("z","t","a","d","v","s","i","y","u","l");
    }
    let sortedArray = testArray.sort();
    expect(insertionSort(testArray)).to.deep.equal(sortedArray);
  });

  it("should filter an unordered array of 3.8 million numbers between 0 & 999999", () => {
    let testArray= [];
    for(let i = 0; i < 3800000; i++) {
      testArray.push(Math.floor(Math.random() * 1000000));
    }
    let sortedArray = testArray.sort( (a, b) => a - b);
    expect(insertionSort(testArray)).to.deep.equal(sortedArray);
  });

});
